/* ============================================================
   data.js — registre des données (référentiels, UE, conseils)
   ============================================================ */
(function (global) {
  'use strict';

  var FICHES = global.FICHES || {};

  FICHES.referentiels = {};   // id -> référentiel
  FICHES.ordreRef = [];
  FICHES.contenus = {};       // "ref::ueId" -> contenu
  FICHES.conseils = null;
  FICHES.UE_FILES = [];       // rempli par data/ue/manifest.js

  FICHES.registerReferentiel = function (r) {
    FICHES.referentiels[r.id] = r;
    if (FICHES.ordreRef.indexOf(r.id) === -1) FICHES.ordreRef.push(r.id);
  };

  FICHES.registerUE = function (c) {
    FICHES.contenus[c.ref + '::' + c.ue] = c;
  };

  FICHES.registerConseils = function (c) { FICHES.conseils = c; };

  /* ---------- accès ---------- */
  FICHES.ref = function (id) { return FICHES.referentiels[id] || null; };

  FICHES.semestre = function (refId, semId) {
    var r = FICHES.ref(refId); if (!r) return null;
    for (var i = 0; i < r.semestres.length; i++) if (r.semestres[i].id === semId) return r.semestres[i];
    return null;
  };

  FICHES.ue = function (refId, ueId) {
    var r = FICHES.ref(refId); if (!r) return null;
    for (var i = 0; i < r.semestres.length; i++) {
      var s = r.semestres[i];
      for (var j = 0; j < s.ues.length; j++) {
        if (s.ues[j].id === ueId) {
          var u = s.ues[j];
          return {
            id: u.id, code: u.code, titre: u.titre, ects: u.ects, cm: u.cm, td: u.td, tp: u.tp,
            famille: u.famille, competences: u.competences || [], evaluation: u.evaluation || '',
            semestre: s.id, semestreNom: s.nom, ref: refId
          };
        }
      }
    }
    return null;
  };

  FICHES.contenu = function (refId, ueId) { return FICHES.contenus[refId + '::' + ueId] || null; };

  FICHES.aContenu = function (refId, ueId) {
    var c = FICHES.contenu(refId, ueId);
    return !!(c && ((c.fiches && c.fiches.length) || (c.qcm && c.qcm.length)));
  };

  FICHES.toutesUE = function (refId) {
    var r = FICHES.ref(refId), out = []; if (!r) return out;
    for (var i = 0; i < r.semestres.length; i++)
      for (var j = 0; j < r.semestres[i].ues.length; j++)
        out.push(FICHES.ue(refId, r.semestres[i].ues[j].id));
    return out;
  };

  FICHES.familleNom = function (refId, n) {
    var r = FICHES.ref(refId);
    return (r && r.familles && r.familles[n]) ? r.familles[n] : '';
  };

  /* ---------- progression calculée ---------- */
  // une UE vaut 100 % : 60 % fiches lues + 40 % meilleur score QCM
  FICHES.progressionUE = function (refId, ueId) {
    var c = FICHES.contenu(refId, ueId);
    if (!c) return { pct: 0, fiches: 0, totalFiches: 0, meilleur: 0, dispo: false };
    var p = global.Store.ue(refId, ueId);
    var nbF = (c.fiches || []).length, lues = 0;
    for (var i = 0; i < nbF; i++) if (p.fiches[c.fiches[i].id]) lues++;
    var partF = nbF ? (lues / nbF) : 0;
    var nbQ = (c.qcm || []).length;
    var partQ = nbQ ? ((p.meilleur || 0) / 100) : 0;
    var pct;
    if (nbF && nbQ) pct = partF * 60 + partQ * 40;
    else if (nbF) pct = partF * 100;
    else pct = partQ * 100;
    return {
      pct: Math.round(pct), fiches: lues, totalFiches: nbF,
      meilleur: p.meilleur || 0, essais: (p.quiz || []).length,
      totalQcm: nbQ, dispo: true
    };
  };

  FICHES.progressionSemestre = function (refId, semId) {
    var s = FICHES.semestre(refId, semId);
    if (!s) return { pct: 0, dispo: 0, total: 0 };
    var somme = 0, dispo = 0;
    for (var i = 0; i < s.ues.length; i++) {
      var pr = FICHES.progressionUE(refId, s.ues[i].id);
      if (pr.dispo) { dispo++; somme += pr.pct; }
    }
    return { pct: dispo ? Math.round(somme / dispo) : 0, dispo: dispo, total: s.ues.length };
  };

  FICHES.progressionGlobale = function (refId) {
    var r = FICHES.ref(refId);
    if (!r) return { pct: 0, dispo: 0, total: 0 };
    var somme = 0, dispo = 0, total = 0;
    for (var i = 0; i < r.semestres.length; i++) {
      var s = r.semestres[i];
      for (var j = 0; j < s.ues.length; j++) {
        total++;
        var pr = FICHES.progressionUE(refId, s.ues[j].id);
        if (pr.dispo) { dispo++; somme += pr.pct; }
      }
    }
    return { pct: dispo ? Math.round(somme / dispo) : 0, dispo: dispo, total: total };
  };

  /* ---------- recherche ---------- */
  FICHES.normaliser = function (s) {
    var t = String(s == null ? '' : s).toLowerCase();
    if (typeof t.normalize === 'function') {
      t = t.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
    }
    return t;
  };

  FICHES.rechercher = function (refId, q) {
    var n = FICHES.normaliser(q).trim();
    if (n.length < 2) return [];
    var out = [], ues = FICHES.toutesUE(refId), i, j;
    for (i = 0; i < ues.length; i++) {
      var u = ues[i];
      if (FICHES.normaliser(u.code + ' ' + u.titre).indexOf(n) !== -1) {
        out.push({ type: 'UE', titre: 'UE ' + u.code + ' — ' + u.titre, sous: u.semestreNom, href: '#/ue/' + u.id });
      }
      var c = FICHES.contenu(refId, u.id);
      if (!c) continue;
      var fs = c.fiches || [];
      for (j = 0; j < fs.length; j++) {
        var hay = fs[j].titre + ' ' + (fs[j].motsCles || []).join(' ');
        if (FICHES.normaliser(hay).indexOf(n) !== -1) {
          out.push({ type: 'Fiche', titre: fs[j].titre, sous: 'UE ' + u.code + ' · ' + u.semestreNom, href: '#/ue/' + u.id + '/fiche/' + fs[j].id });
        }
      }
      if (out.length > 60) break;
    }
    return out.slice(0, 40);
  };

  global.FICHES = FICHES;
})(window);
