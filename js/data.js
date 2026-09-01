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

  /* Modules transversaux (gestes techniques, plaies, biologie…) :
     hors référentiel, stockés sous le pseudo-référentiel 'transversal'
     pour réutiliser progression, Leitner et moteur de QCM. */
  FICHES.modules = {};
  FICHES.ordreModules = [];
  FICHES.REF_TRANSVERSAL = 'transversal';

  FICHES.registerModule = function (m) {
    FICHES.modules[m.id] = m;
    if (FICHES.ordreModules.indexOf(m.id) === -1) FICHES.ordreModules.push(m.id);
    FICHES.contenus[FICHES.REF_TRANSVERSAL + '::' + m.id] = {
      ref: FICHES.REF_TRANSVERSAL, ue: m.id,
      objectifs: m.objectifs || [], fiches: m.fiches || [], qcm: m.qcm || []
    };
  };

  FICHES.module = function (id) { return FICHES.modules[id] || null; };

  FICHES.tousModules = function () {
    return FICHES.ordreModules.map(function (id) { return FICHES.modules[id]; });
  };

  FICHES.progressionModules = function () {
    var ids = FICHES.ordreModules, somme = 0, i;
    if (!ids.length) return { pct: 0, total: 0 };
    for (i = 0; i < ids.length; i++) somme += FICHES.progressionUE(FICHES.REF_TRANSVERSAL, ids[i]).pct;
    return { pct: Math.round(somme / ids.length), total: ids.length };
  };

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

  /* Résolution du contenu, avec reprise éventuelle de fiches d'un autre
     référentiel (clé "reprend"). Les identifiants repris sont préfixés pour
     éviter toute collision ; la progression reste propre à chaque référentiel. */
  FICHES._cacheContenu = {};

  FICHES.contenu = function (refId, ueId) {
    var cle = refId + '::' + ueId;
    var base = FICHES.contenus[cle];
    if (!base) return null;
    if (!base.reprend || !base.reprend.length) return base;
    if (FICHES._cacheContenu[cle]) return FICHES._cacheContenu[cle];

    var fiches = [], qcm = [], i, j;
    for (i = 0; i < base.reprend.length; i++) {
      var src = FICHES.contenus[base.reprend[i]];
      if (!src) continue;
      var pref = base.reprend[i].split('::')[1].replace(/[^A-Za-z0-9]/g, '') + '_';
      var sf = src.fiches || [];
      for (j = 0; j < sf.length; j++) {
        var f = {}, k;
        for (k in sf[j]) if (Object.prototype.hasOwnProperty.call(sf[j], k)) f[k] = sf[j][k];
        f.id = pref + sf[j].id;
        f.origine = base.reprend[i];
        fiches.push(f);
      }
      var sq = src.qcm || [];
      for (j = 0; j < sq.length; j++) {
        var q = {}, k2;
        for (k2 in sq[j]) if (Object.prototype.hasOwnProperty.call(sq[j], k2)) q[k2] = sq[j][k2];
        q.id = pref + sq[j].id;
        qcm.push(q);
      }
    }
    var out = {
      ref: refId, ue: ueId,
      objectifs: base.objectifs || [],
      fiches: (base.fiches || []).concat(fiches),
      qcm: (base.qcm || []).concat(qcm),
      note: base.note || ''
    };
    FICHES._cacheContenu[cle] = out;
    return out;
  };

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
    var mods = FICHES.tousModules();
    for (i = 0; i < mods.length; i++) {
      var m = mods[i];
      if (FICHES.normaliser(m.titre + ' ' + (m.motsCles || []).join(' ')).indexOf(n) !== -1) {
        out.push({ type: 'Module', titre: m.titre, sous: 'Pratique soignante', href: '#/module/' + m.id });
      }
      var mf = m.fiches || [];
      for (j = 0; j < mf.length; j++) {
        var mh = mf[j].titre + ' ' + (mf[j].motsCles || []).join(' ');
        if (FICHES.normaliser(mh).indexOf(n) !== -1) {
          out.push({ type: 'Fiche', titre: mf[j].titre, sous: m.titre, href: '#/module/' + m.id + '/fiche/' + mf[j].id });
        }
      }
    }
    return out.slice(0, 40);
  };

  global.FICHES = FICHES;
})(window);
