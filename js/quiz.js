/* ============================================================
   quiz.js — moteur de QCM (une ou plusieurs bonnes réponses)
   ============================================================ */
(function (global) {
  'use strict';

  var LETTRES = 'ABCDEFGH';

  function melanger(arr) {
    var a = arr.slice(), i, j, t;
    for (i = a.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1));
      t = a[i]; a[i] = a[j]; a[j] = t;
    }
    return a;
  }

  /**
   * Session de quiz.
   * @param {Object} opts { ref, ueId, questions:[{id,enonce,choix,bonnes,explication,...}],
   *                        mode:'immediat'|'final', titre, retour, onFin }
   */
  function Session(opts) {
    this.ref = opts.ref;
    this.ueId = opts.ueId;
    this.titre = opts.titre || 'Questionnaire';
    this.retour = opts.retour || '#/';
    this.mode = opts.mode === 'final' ? 'final' : 'immediat';
    this.multiUE = !!opts.multiUE;
    this.onFin = opts.onFin || null;
    this.questions = (opts.questions || []).map(function (q) {
      // On mélange les propositions tout en gardant la trace des bonnes réponses
      var idx = q.choix.map(function (_, i) { return i; });
      var ordre = melanger(idx);
      return {
        ref: q.ref || opts.ref,
        ue: q.ue || opts.ueId,
        id: q.id,
        enonce: q.enonce,
        choix: ordre.map(function (i) { return q.choix[i]; }),
        bonnes: ordre.reduce(function (acc, orig, pos) {
          if (q.bonnes.indexOf(orig) !== -1) acc.push(pos);
          return acc;
        }, []),
        explication: q.explication || '',
        source: q.source || '',
        difficulte: q.difficulte || 1
      };
    });
    this.i = 0;
    this.selection = [];
    this.valide = false;
    this.reponses = [];   // {qid, ue, ok, choisi:[]}
  }

  Session.prototype.courante = function () { return this.questions[this.i] || null; };
  Session.prototype.total = function () { return this.questions.length; };
  Session.prototype.score = function () {
    return this.reponses.reduce(function (a, r) { return a + (r.ok ? 1 : 0); }, 0);
  };

  Session.prototype.basculer = function (pos) {
    if (this.valide) return;
    var q = this.courante(); if (!q) return;
    var multi = q.bonnes.length > 1;
    var k = this.selection.indexOf(pos);
    if (multi) {
      if (k === -1) this.selection.push(pos); else this.selection.splice(k, 1);
    } else {
      this.selection = (k === -1) ? [pos] : [];
    }
  };

  Session.prototype.validerQuestion = function () {
    var q = this.courante(); if (!q || this.valide) return null;
    var sel = this.selection.slice().sort(function (a, b) { return a - b; });
    var bon = q.bonnes.slice().sort(function (a, b) { return a - b; });
    var ok = sel.length === bon.length && sel.every(function (v, i) { return v === bon[i]; });
    this.valide = true;
    this.reponses.push({ qid: q.id, ue: q.ue, ref: q.ref, ok: ok, choisi: sel });
    if (global.Store) global.Store.majCarte(q.ref, q.ue, q.id, ok);
    return ok;
  };

  Session.prototype.suivante = function () {
    this.i++; this.selection = []; this.valide = false;
    return this.i < this.questions.length;
  };

  Session.prototype.termine = function () { return this.i >= this.questions.length; };

  Session.prototype.enregistrer = function () {
    if (this.multiUE || !this.ueId) return;
    if (global.Store) global.Store.enregistrerQuiz(this.ref, this.ueId, this.score(), this.total());
  };

  Session.prototype.lettre = function (i) { return LETTRES.charAt(i) || '?'; };

  global.Quiz = { Session: Session, melanger: melanger, LETTRES: LETTRES };
})(window);
