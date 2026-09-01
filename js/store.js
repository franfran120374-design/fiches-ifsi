/* ============================================================
   store.js — persistance locale (localStorage), 100 % hors ligne
   ============================================================ */
(function (global) {
  'use strict';

  var NS = 'fiches-ifsi:v1:';
  var mem = {};           // repli si localStorage indisponible (mode privé strict)
  var hasLS = (function () {
    try {
      var k = NS + 'probe';
      global.localStorage.setItem(k, '1');
      global.localStorage.removeItem(k);
      return true;
    } catch (e) { return false; }
  })();

  function read(key, fallback) {
    try {
      var raw = hasLS ? global.localStorage.getItem(NS + key) : mem[key];
      if (raw == null) return fallback;
      var v = JSON.parse(raw);
      return (v === null || v === undefined) ? fallback : v;
    } catch (e) { return fallback; }
  }

  function write(key, value) {
    try {
      var raw = JSON.stringify(value);
      if (hasLS) global.localStorage.setItem(NS + key, raw);
      else mem[key] = raw;
      return true;
    } catch (e) { mem[key] = JSON.stringify(value); return false; }
  }

  var DEFAULT_SETTINGS = { ref: '2009', theme: 'auto', quizMode: 'immediat', quizTaille: 10 };

  var Store = {
    disponible: hasLS,

    /* ----- réglages ----- */
    settings: function () {
      var s = read('settings', {});
      var out = {};
      for (var k in DEFAULT_SETTINGS) out[k] = (s && s[k] !== undefined) ? s[k] : DEFAULT_SETTINGS[k];
      return out;
    },
    setSetting: function (k, v) {
      var s = this.settings(); s[k] = v; write('settings', s); return s;
    },

    /* ----- progression -----
       progress[ref][ueId] = { fiches:{ficheId:ts}, quiz:[{ts,score,total}], meilleur:0..100 } */
    all: function () { return read('progress', {}); },
    _save: function (p) { write('progress', p); },

    ue: function (ref, ueId) {
      var p = this.all();
      return (p[ref] && p[ref][ueId]) || { fiches: {}, quiz: [], meilleur: 0 };
    },

    marquerFiche: function (ref, ueId, ficheId, lu) {
      var p = this.all();
      p[ref] = p[ref] || {};
      p[ref][ueId] = p[ref][ueId] || { fiches: {}, quiz: [], meilleur: 0 };
      if (lu === false) delete p[ref][ueId].fiches[ficheId];
      else p[ref][ueId].fiches[ficheId] = Date.now();
      this._save(p);
      return p[ref][ueId];
    },

    ficheLue: function (ref, ueId, ficheId) {
      return !!this.ue(ref, ueId).fiches[ficheId];
    },

    enregistrerQuiz: function (ref, ueId, score, total) {
      var p = this.all();
      p[ref] = p[ref] || {};
      var u = p[ref][ueId] = p[ref][ueId] || { fiches: {}, quiz: [], meilleur: 0 };
      var pct = total > 0 ? Math.round((score / total) * 100) : 0;
      u.quiz.push({ ts: Date.now(), score: score, total: total, pct: pct });
      if (u.quiz.length > 30) u.quiz = u.quiz.slice(-30);
      if (pct > (u.meilleur || 0)) u.meilleur = pct;
      this._save(p);
      return u;
    },

    /* ----- Leitner : révision espacée sur les questions ratées -----
       cartes["ref|ueId|qid"] = { boite:1..5, prochain:ts, ko:n, ok:n } */
    cartes: function () { return read('leitner', {}); },
    majCarte: function (ref, ueId, qid, reussi) {
      var c = this.cartes();
      var key = ref + '|' + ueId + '|' + qid;
      var e = c[key] || { boite: 1, prochain: 0, ko: 0, ok: 0 };
      var JOUR = 86400000;
      var delais = [0, 1, 2, 4, 8, 16];
      if (reussi) { e.boite = Math.min(5, e.boite + 1); e.ok++; }
      else { e.boite = 1; e.ko++; }
      e.prochain = Date.now() + delais[e.boite] * JOUR;
      e.maj = Date.now();
      c[key] = e;
      write('leitner', c);
      return e;
    },
    cartesDues: function (ref) {
      var c = this.cartes(), now = Date.now(), out = [];
      for (var k in c) {
        if (!Object.prototype.hasOwnProperty.call(c, k)) continue;
        var parts = k.split('|');
        if (parts[0] !== ref) continue;
        if (c[k].prochain <= now) out.push({ ue: parts[1], qid: parts[2], boite: c[k].boite, ko: c[k].ko });
      }
      return out;
    },

    /* ----- entraînement calculs de doses ----- */
    statsCalculs: function () {
      var c = read('calculs', { total: 0, justes: 0, serie: 0, record: 0 });
      return {
        total: c.total || 0, justes: c.justes || 0,
        serie: c.serie || 0, record: c.record || 0
      };
    },
    majCalcul: function (ok) {
      var c = this.statsCalculs();
      c.total++;
      if (ok) { c.justes++; c.serie++; if (c.serie > c.record) c.record = c.serie; }
      else c.serie = 0;
      write('calculs', c);
      return c;
    },

    /* ----- reprise ----- */
    dernier: function () { return read('dernier', null); },
    setDernier: function (o) { write('dernier', o); },

    /* ----- export / import ----- */
    exporter: function () {
      return JSON.stringify({
        app: 'fiches-ifsi', version: 1, date: new Date().toISOString(),
        settings: this.settings(), progress: this.all(), leitner: this.cartes(), calculs: this.statsCalculs(),
        dernier: this.dernier()
      }, null, 2);
    },
    importer: function (txt) {
      var d = JSON.parse(txt);
      if (!d || d.app !== 'fiches-ifsi') throw new Error('Fichier non reconnu');
      if (d.progress) write('progress', d.progress);
      if (d.leitner) write('leitner', d.leitner);
      if (d.settings) write('settings', d.settings);
      if (d.dernier) write('dernier', d.dernier);
      if (d.calculs) write('calculs', d.calculs);
      return true;
    },
    reset: function () {
      write('progress', {}); write('leitner', {}); write('dernier', null);
      write('calculs', { total: 0, justes: 0, serie: 0, record: 0 });
    }
  };

  global.Store = Store;
})(window);
