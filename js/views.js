/* ============================================================
   views.js — construction du HTML de chaque écran
   ============================================================ */
(function (global) {
  'use strict';

  var V = {};
  var esc = R.esc, inline = R.inline, barre = R.barre;

  function pctTexte(p) { return (p || 0) + ' %'; }

  function carteUE(ref, u) {
    var pr = FICHES.progressionUE(ref, u.id);
    var badge = !pr.dispo
      ? '<span class="badge soon">à venir</span>'
      : (pr.pct >= 100 ? '<span class="badge ok">maîtrisée</span>'
        : (pr.pct > 0 ? '<span class="badge wip">en cours</span>' : '<span class="badge">disponible</span>'));
    return '<a class="ue-card" href="#/ue/' + esc(u.id) + '">' +
      '<div style="display:flex;justify-content:space-between;align-items:center;gap:8px">' +
      '<span class="ue-code">' + esc(u.code) + '</span>' + badge + '</div>' +
      '<div class="ue-title">' + esc(u.titre) + '</div>' +
      '<div class="ue-meta"><span>' + u.ects + ' ECTS</span>' +
      (pr.dispo ? '<span>' + pr.totalFiches + ' fiche' + (pr.totalFiches > 1 ? 's' : '') + '</span><span>' + pr.totalQcm + ' question' + (pr.totalQcm > 1 ? 's' : '') + '</span>' : '<span>contenu en préparation</span>') +
      '</div>' + barre(pr.pct) + '</a>';
  }

  /* ---------------- Accueil ---------------- */
  V.home = function (ref) {
    var r = FICHES.ref(ref);
    var g = FICHES.progressionGlobale(ref);
    var d = Store.dernier();
    var dues = Store.cartesDues(ref).length;

    var reprise = '';
    if (d && d.ref === ref) {
      var u = FICHES.ue(ref, d.ue);
      if (u) {
        reprise = '<div class="card" style="margin-bottom:18px">' +
          '<div class="eyebrow">Reprendre</div>' +
          '<div style="font-weight:600;font-size:16px;margin-bottom:4px">' + esc(d.titre || ('UE ' + u.code)) + '</div>' +
          '<div class="mini" style="margin-bottom:12px">UE ' + esc(u.code) + ' — ' + esc(u.titre) + ' · ' + esc(u.semestreNom) + '</div>' +
          '<a class="btn" href="' + esc(d.href) + '">Continuer</a></div>';
      }
    }

    var sems = r.semestres.map(function (s) {
      var pr = FICHES.progressionSemestre(ref, s.id);
      return '<a class="ue-card" href="#/semestre/' + esc(s.id) + '">' +
        '<div style="display:flex;justify-content:space-between;align-items:center">' +
        '<span class="ue-code">' + esc(s.id) + '</span>' +
        '<span class="mini">' + s.ues.length + ' UE · ' + pr.dispo + ' prête' + (pr.dispo > 1 ? 's' : '') + '</span></div>' +
        '<div class="ue-title">' + esc(s.nom) + ' <span class="mini" style="font-weight:400">· année ' + s.annee + '</span></div>' +
        '<div class="ue-meta"><span>' + esc(s.resume) + '</span></div>' +
        barre(pr.pct) + '</a>';
    }).join('');

    return '<div class="wrap">' +
      '<div class="page-head">' +
      '<div class="eyebrow">' + esc(r.nom) + '</div>' +
      '<h1>Tes révisions IFSI</h1>' +
      '<p class="lead">' + esc(r.sousTitre) + ' · ' + r.totalEcts + ' ECTS sur 6 semestres.</p>' +
      '</div>' +
      (r.provisoire ? '<div class="blk blk-callout blk-note"><div class="blk-title">Référentiel en cours de déploiement</div><p>' + esc(r.statut) + '</p></div>' : '') +
      reprise +
      '<div class="kpis">' +
      '<div class="kpi"><div class="kpi-v">' + pctTexte(g.pct) + '</div><div class="kpi-l">Progression sur le contenu disponible</div></div>' +
      '<div class="kpi"><div class="kpi-v">' + g.dispo + '<span style="font-size:16px;color:var(--txt-3)">/' + g.total + '</span></div><div class="kpi-l">UE avec contenu</div></div>' +
      '<div class="kpi"><div class="kpi-v">' + dues + '</div><div class="kpi-l">Questions à revoir aujourd’hui</div></div>' +
      '</div>' +
      '<div class="btn-row" style="margin:0 0 26px">' +
      '<a class="btn" href="#/revision">Lancer une session de révision</a>' +
      '<a class="btn btn-ghost" href="#/modules">Gestes et pratique soignante</a>' +
      '<a class="btn btn-ghost" href="#/calculs">Entraînement calculs de doses</a>' +
      '<a class="btn btn-ghost" href="#/programme">Voir tout le programme</a>' +
      '<a class="btn btn-ghost" href="#/conseils">Conseils de révision</a>' +
      '</div>' +
      '<h2 style="margin-top:0">Les 6 semestres</h2>' +
      '<div class="grid g2">' + sems + '</div>' +
      '</div>';
  };

  /* ---------------- Programme complet ---------------- */
  V.programme = function (ref) {
    var r = FICHES.ref(ref);
    var html = r.semestres.map(function (s) {
      var pr = FICHES.progressionSemestre(ref, s.id);
      var cards = s.ues.map(function (u) { return carteUE(ref, FICHES.ue(ref, u.id)); }).join('');
      return '<h2 id="' + esc(s.id) + '">' + esc(s.nom) +
        ' <span class="mini" style="font-weight:400">· ' + s.ues.reduce(function (a, u) { return a + u.ects; }, 0) +
        ' ECTS + ' + s.ectsStage + ' de stage · ' + pctTexte(pr.pct) + '</span></h2>' +
        '<div class="grid g2">' + cards + '</div>';
    }).join('');
    return '<div class="wrap"><div class="page-head"><div class="eyebrow">' + esc(r.nom) +
      '</div><h1>Programme complet</h1><p class="lead">Toutes les unités d’enseignement, semestre par semestre.</p></div>' +
      html + '</div>';
  };

  /* ---------------- Semestre ---------------- */
  V.semestre = function (ref, semId) {
    var s = FICHES.semestre(ref, semId);
    if (!s) return V.introuvable();
    var pr = FICHES.progressionSemestre(ref, semId);
    var ects = s.ues.reduce(function (a, u) { return a + u.ects; }, 0);
    var cards = s.ues.map(function (u) { return carteUE(ref, FICHES.ue(ref, u.id)); }).join('');
    return '<div class="wrap">' +
      '<div class="crumbs"><a href="#/">Accueil</a> · <a href="#/programme">Programme</a></div>' +
      '<div class="page-head"><div class="eyebrow">Année ' + s.annee + '</div>' +
      '<h1>' + esc(s.nom) + '</h1><p class="lead">' + esc(s.resume) + '</p></div>' +
      '<div class="kpis">' +
      '<div class="kpi"><div class="kpi-v">' + ects + '</div><div class="kpi-l">ECTS d’enseignement</div></div>' +
      '<div class="kpi"><div class="kpi-v">' + s.ectsStage + '</div><div class="kpi-l">ECTS de stage (' + s.stageSemaines + ' semaines)</div></div>' +
      '<div class="kpi"><div class="kpi-v">' + pctTexte(pr.pct) + '</div><div class="kpi-l">Ta progression</div></div>' +
      '</div>' +
      (s.note ? '<div class="blk blk-callout blk-note"><div class="blk-title">Bon à savoir</div><p>' + inline(s.note) + '</p></div>' : '') +
      '<div class="grid g2">' + cards + '</div></div>';
  };

  /* ---------------- UE ---------------- */
  V.ue = function (ref, ueId) {
    var u = FICHES.ue(ref, ueId);
    if (!u) return V.introuvable();
    var c = FICHES.contenu(ref, ueId);
    var pr = FICHES.progressionUE(ref, ueId);
    var r = FICHES.ref(ref);

    var meta = '<div class="kpis">' +
      '<div class="kpi"><div class="kpi-v">' + u.ects + '</div><div class="kpi-l">ECTS</div></div>' +
      ((u.cm + u.td + u.tp) > 0 ? '<div class="kpi"><div class="kpi-v">' + (u.cm + u.td + u.tp) + ' h</div><div class="kpi-l">CM ' + u.cm + ' · TD ' + u.td + ' · TP ' + u.tp + '</div></div>' : '') +
      '<div class="kpi"><div class="kpi-v">' + pctTexte(pr.pct) + '</div><div class="kpi-l">Ta progression</div></div>' +
      '</div>';

    var comp = '';
    if (u.competences && u.competences.length && r.competences) {
      comp = '<h3>Compétences visées</h3><ul>' + u.competences.map(function (n) {
        return '<li><strong>Compétence ' + n + '</strong> — ' + esc(r.competences[n] || '') + '</li>';
      }).join('') + '</ul>';
    }

    var head = '<div class="wrap">' +
      '<div class="crumbs"><a href="#/">Accueil</a> · <a href="#/semestre/' + esc(u.semestre) + '">' + esc(u.semestreNom) + '</a></div>' +
      '<div class="page-head"><div class="eyebrow">UE ' + esc(u.code) + ' · ' + esc(u.semestreNom) + '</div>' +
      '<h1>' + esc(u.titre) + '</h1>' +
      '<p class="lead">' + esc(FICHES.familleNom(ref, u.famille)) + '</p></div>' + meta;

    if (!c) {
      return head +
        '<div class="empty"><div class="big">◔</div>' +
        '<p><strong>Contenu en préparation.</strong><br>Les fiches et le QCM de cette UE arrivent dans une prochaine livraison.</p>' +
        '<p class="mini">Modalité d’évaluation prévue : ' + esc(u.evaluation || 'à préciser') + '</p></div>' +
        comp + '</div>';
    }

    var obj = (c.objectifs && c.objectifs.length)
      ? '<h2>Objectifs de l’UE</h2><ul>' + c.objectifs.map(function (o) { return '<li>' + inline(o) + '</li>'; }).join('') + '</ul>'
      : '';

    var listeFiches = (c.fiches || []).map(function (f, i) {
      var lu = Store.ficheLue(ref, ueId, f.id);
      return '<a class="fl' + (lu ? ' done' : '') + '" href="#/ue/' + esc(ueId) + '/fiche/' + esc(f.id) + '">' +
        '<span class="n">' + (lu ? '✓' : (i + 1)) + '</span>' +
        '<span class="t">' + esc(f.titre) + '</span>' +
        '<span class="d">' + (f.duree ? f.duree + ' min' : '') + '</span></a>';
    }).join('');

    var quizBloc = '';
    if ((c.qcm || []).length) {
      var p = Store.ue(ref, ueId);
      var hist = (p.quiz || []).slice(-3).reverse().map(function (q) {
        return '<div class="mini">' + new Date(q.ts).toLocaleDateString('fr-FR') + ' — ' + q.score + '/' + q.total + ' (' + q.pct + ' %)</div>';
      }).join('');
      quizBloc = '<h2>Questionnaire corrigé</h2>' +
        '<div class="card"><p style="margin-top:0">' + c.qcm.length + ' questions avec correction détaillée. ' +
        (pr.meilleur ? 'Meilleur score : <strong>' + pr.meilleur + ' %</strong> sur ' + pr.essais + ' essai' + (pr.essais > 1 ? 's' : '') + '.' : 'Pas encore d’essai.') + '</p>' +
        hist +
        '<div class="btn-row"><a class="btn" href="#/quiz/' + esc(ueId) + '">Lancer le QCM</a>' +
        '<a class="btn btn-ghost" href="#/quiz/' + esc(ueId) + '?n=5">Version courte (5 questions)</a></div></div>';
    }

    return head + obj +
      ((c.fiches || []).length ? '<h2>Fiches de révision</h2><div class="list-fiches">' + listeFiches + '</div>' : '') +
      quizBloc + comp +
      '<h3>Évaluation</h3><p>' + esc(u.evaluation || 'Se référer à la maquette de ton IFSI.') + '</p>' +
      '</div>';
  };

  /* ---------------- Fiche ---------------- */
  V.fiche = function (ref, ueId, ficheId) {
    var u = FICHES.ue(ref, ueId);
    var c = FICHES.contenu(ref, ueId);
    if (!u || !c) return V.introuvable();
    var idx = -1, i;
    for (i = 0; i < c.fiches.length; i++) if (c.fiches[i].id === ficheId) idx = i;
    if (idx === -1) return V.introuvable();
    var f = c.fiches[idx];
    var lu = Store.ficheLue(ref, ueId, f.id);
    var prev = idx > 0 ? c.fiches[idx - 1] : null;
    var next = idx < c.fiches.length - 1 ? c.fiches[idx + 1] : null;

    return '<div class="wrap">' +
      '<div class="crumbs"><a href="#/semestre/' + esc(u.semestre) + '">' + esc(u.semestreNom) + '</a> · ' +
      '<a href="#/ue/' + esc(ueId) + '">UE ' + esc(u.code) + '</a></div>' +
      '<div class="page-head">' +
      '<div class="eyebrow">Fiche ' + (idx + 1) + '/' + c.fiches.length + (f.duree ? ' · ' + f.duree + ' min' : '') + '</div>' +
      '<h1>' + esc(f.titre) + '</h1>' +
      (f.accroche ? '<p class="lead">' + inline(f.accroche) + '</p>' : '') + '</div>' +
      '<div class="fiche-body">' + R.blocs(f.blocs) + '</div>' +
      '<div class="btn-row">' +
      '<button class="btn' + (lu ? ' btn-sec' : '') + '" id="btn-lu" data-lu="' + (lu ? '1' : '0') + '">' +
      (lu ? '✓ Fiche marquée comme lue' : 'Marquer comme lue') + '</button>' +
      ((c.qcm || []).length ? '<a class="btn btn-ghost" href="#/quiz/' + esc(ueId) + '">Me tester sur cette UE</a>' : '') +
      '</div>' +
      '<div class="fiche-nav">' +
      (prev ? '<a class="btn-ghost" href="#/ue/' + esc(ueId) + '/fiche/' + esc(prev.id) + '">← ' + esc(prev.titre) + '</a>' : '<span></span>') +
      (next ? '<a class="btn-ghost" href="#/ue/' + esc(ueId) + '/fiche/' + esc(next.id) + '">' + esc(next.titre) + ' →</a>' : '<a class="btn-ghost" href="#/ue/' + esc(ueId) + '">Retour à l’UE</a>') +
      '</div></div>';
  };

  /* ---------------- Quiz : question ---------------- */
  V.quizQuestion = function (sess) {
    var q = sess.courante();
    var multi = q.bonnes.length > 1;
    var pct = Math.round((sess.i / sess.total()) * 100);

    var choix = q.choix.map(function (txt, i) {
      var cls = 'choice', mark = '';
      var choisi = sess.selection.indexOf(i) !== -1;
      if (sess.valide) {
        var bon = q.bonnes.indexOf(i) !== -1;
        if (bon) { cls += ' good'; mark = '✓'; }
        else if (choisi) { cls += ' bad'; mark = '✕'; }
      } else if (choisi) { mark = '✓'; }
      return '<button type="button" class="' + cls + '" data-i="' + i + '" aria-pressed="' + (choisi ? 'true' : 'false') + '"' +
        (sess.valide ? ' disabled' : '') + '>' +
        '<span class="box">' + mark + '</span><span>' + inline(txt) + '</span></button>';
    }).join('');

    var apres = '';
    if (sess.valide) {
      var last = sess.reponses[sess.reponses.length - 1];
      apres = '<div class="verdict ' + (last.ok ? 'ok' : 'ko') + '">' +
        (last.ok ? '✓ Bonne réponse' : '✕ Réponse incorrecte') + '</div>' +
        (q.explication ? '<div class="explain"><strong>Correction</strong>' + inline(q.explication) + '</div>' : '') +
        '<button class="btn" id="q-next">' + (sess.i + 1 < sess.total() ? 'Question suivante' : 'Voir le résultat') + '</button>';
    } else {
      apres = '<button class="btn" id="q-valider"' + (sess.selection.length ? '' : ' disabled') + '>Valider</button>';
    }

    return '<div class="wrap" style="max-width:760px">' +
      '<div class="crumbs"><a href="' + esc(sess.retour) + '">← Quitter le questionnaire</a></div>' +
      '<div class="quiz-head"><div class="quiz-prog"><div class="mini" style="margin-bottom:5px">Question ' +
      (sess.i + 1) + ' sur ' + sess.total() + '</div>' + barre(pct) + '</div>' +
      '<div class="mini">Score : ' + sess.score() + '/' + sess.reponses.length + '</div></div>' +
      '<div class="q-card">' +
      '<p class="q-enonce">' + inline(q.enonce) + '</p>' +
      '<p class="q-hint">' + (multi ? 'Plusieurs réponses justes.' : 'Une seule réponse juste.') + '</p>' +
      '<div class="choices">' + choix + '</div>' + apres + '</div></div>';
  };

  /* ---------------- Quiz : résultat ---------------- */
  V.quizResultat = function (sess) {
    var sc = sess.score(), tot = sess.total();
    var pct = tot ? Math.round((sc / tot) * 100) : 0;
    var msg = pct >= 80 ? 'Solide. Tu peux passer à la suite.'
      : pct >= 60 ? 'Ça tient debout, mais les erreurs ci-dessous méritent une relecture ciblée.'
        : 'Reprends les fiches avant de refaire le test : les bases ne sont pas encore stabilisées.';

    var recap = sess.reponses.map(function (rp, i) {
      var q = sess.questions[i];
      return '<div class="recap-item"><span class="dot ' + (rp.ok ? 'ok' : 'ko') + '"></span>' +
        '<div><div>' + inline(q.enonce) + '</div>' +
        (rp.ok ? '' : '<div class="mini" style="margin-top:4px">Bonne réponse : ' +
          q.bonnes.map(function (b) { return esc(q.choix[b]); }).join(' · ') + '</div>') +
        '</div></div>';
    }).join('');

    return '<div class="wrap" style="max-width:760px">' +
      '<div class="page-head"><div class="eyebrow">Résultat</div><h1>' + esc(sess.titre) + '</h1></div>' +
      '<div class="card" style="text-align:center">' +
      '<div class="score-ring" style="--p:' + pct + '"><i>' + pct + '%</i></div>' +
      '<div style="font-size:17px;font-weight:600">' + sc + ' / ' + tot + '</div>' +
      '<p class="lead" style="margin-top:8px">' + esc(msg) + '</p>' +
      '<div class="btn-row" style="justify-content:center">' +
      '<button class="btn" id="q-refaire">Refaire</button>' +
      '<a class="btn btn-ghost" href="' + esc(sess.retour) + '">Retour</a>' +
      '<a class="btn btn-ghost" href="#/revision">Session de révision</a>' +
      '</div></div>' +
      '<h2>Détail des réponses</h2><div class="card">' + recap + '</div></div>';
  };

  /* ---------------- Session de révision ---------------- */
  V.revision = function (ref) {
    var dues = Store.cartesDues(ref);
    var ues = FICHES.toutesUE(ref).filter(function (u) { return FICHES.aContenu(ref, u.id); });
    var totalQ = ues.reduce(function (a, u) { return a + (FICHES.contenu(ref, u.id).qcm || []).length; }, 0);

    if (!totalQ) {
      return '<div class="wrap"><div class="page-head"><h1>Session de révision</h1></div>' +
        '<div class="empty"><div class="big">◔</div><p>Aucune question disponible pour ce référentiel pour le moment.</p></div></div>';
    }

    var opts = ues.map(function (u) {
      return '<button class="chip" data-ue="' + esc(u.id) + '" aria-pressed="false">' + esc(u.code) + '</button>';
    }).join('');

    return '<div class="wrap" style="max-width:760px">' +
      '<div class="page-head"><div class="eyebrow">Révision espacée</div><h1>Session de révision</h1>' +
      '<p class="lead">Un mélange de questions tirées de plusieurs UE. Les questions ratées reviennent plus vite (système de Leitner à 5 boîtes).</p></div>' +
      '<div class="kpis">' +
      '<div class="kpi"><div class="kpi-v">' + dues.length + '</div><div class="kpi-l">Questions dues aujourd’hui</div></div>' +
      '<div class="kpi"><div class="kpi-v">' + totalQ + '</div><div class="kpi-l">Questions disponibles</div></div>' +
      '<div class="kpi"><div class="kpi-v">' + ues.length + '</div><div class="kpi-l">UE couvertes</div></div>' +
      '</div>' +
      '<div class="card">' +
      '<h3 style="margin-top:0">Nombre de questions</h3>' +
      '<div class="chips" id="rv-taille">' +
      ['10', '20', '30'].map(function (n, i) { return '<button class="chip" data-n="' + n + '" aria-pressed="' + (i === 0 ? 'true' : 'false') + '">' + n + '</button>'; }).join('') +
      '</div>' +
      '<h3>Filtrer par UE <span class="mini" style="font-weight:400">(aucune sélection = toutes)</span></h3>' +
      '<div class="chips" id="rv-ues">' + opts + '</div>' +
      '<div class="btn-row">' +
      '<button class="btn" id="rv-go">Démarrer</button>' +
      '<button class="btn btn-ghost" id="rv-dues"' + (dues.length ? '' : ' disabled') + '>Revoir uniquement mes erreurs (' + dues.length + ')</button>' +
      '</div></div></div>';
  };

  /* ---------------- Avancement ---------------- */
  V.stats = function (ref) {
    var r = FICHES.ref(ref);
    var g = FICHES.progressionGlobale(ref);
    var cartes = Store.cartes(), boites = [0, 0, 0, 0, 0, 0], k;
    for (k in cartes) if (Object.prototype.hasOwnProperty.call(cartes, k) && k.indexOf(ref + '|') === 0) boites[cartes[k].boite]++;
    var totalCartes = boites.reduce(function (a, b) { return a + b; }, 0);

    var lignes = r.semestres.map(function (s) {
      var pr = FICHES.progressionSemestre(ref, s.id);
      var ueLignes = s.ues.map(function (uu) {
        var u = FICHES.ue(ref, uu.id);
        var p = FICHES.progressionUE(ref, uu.id);
        if (!p.dispo) return '';
        return '<div class="rowline"><span class="nm"><a href="#/ue/' + esc(u.id) + '">' + esc(u.code) + ' — ' + esc(u.titre) + '</a></span>' +
          barre(p.pct) + '<span class="pc">' + p.pct + '%</span></div>';
      }).join('');
      return '<h3>' + esc(s.nom) + ' <span class="mini" style="font-weight:400">· ' + pctTexte(pr.pct) + '</span></h3>' +
        '<div class="card">' + (ueLignes || '<p class="mini" style="margin:0">Aucune UE avec contenu pour l’instant.</p>') + '</div>';
    }).join('');

    var leitner = totalCartes ? '<h2>Mémorisation (boîtes de Leitner)</h2><div class="card">' +
      [1, 2, 3, 4, 5].map(function (b) {
        var n = boites[b], p = totalCartes ? Math.round(n / totalCartes * 100) : 0;
        var lbl = ['', 'Boîte 1 — à revoir demain', 'Boîte 2 — dans 2 jours', 'Boîte 3 — dans 4 jours', 'Boîte 4 — dans 8 jours', 'Boîte 5 — dans 16 jours'][b];
        return '<div class="rowline"><span class="nm">' + lbl + '</span>' + barre(p) + '<span class="pc">' + n + '</span></div>';
      }).join('') + '</div>' : '';

    return '<div class="wrap"><div class="page-head"><div class="eyebrow">' + esc(r.nom) + '</div>' +
      '<h1>Avancement</h1><p class="lead">Une UE vaut 100 % : 60 % pour les fiches lues, 40 % pour ton meilleur score au QCM.</p></div>' +
      '<div class="kpis">' +
      '<div class="kpi"><div class="kpi-v">' + pctTexte(g.pct) + '</div><div class="kpi-l">Progression globale</div></div>' +
      '<div class="kpi"><div class="kpi-v">' + g.dispo + '/' + g.total + '</div><div class="kpi-l">UE avec contenu</div></div>' +
      '<div class="kpi"><div class="kpi-v">' + totalCartes + '</div><div class="kpi-l">Questions déjà travaillées</div></div>' +
      '</div>' + leitner + '<h2>Détail par semestre</h2>' + lignes + '</div>';
  };

  /* ---------------- Conseils ---------------- */
  V.conseils = function () {
    var c = FICHES.conseils;
    if (!c) return V.introuvable();
    var secs = c.sections.map(function (s) {
      return '<h2 id="' + esc(s.id) + '">' + esc(s.titre) + '</h2>' +
        '<div class="fiche-body">' + R.blocs(s.blocs) + '</div>';
    }).join('');
    var som = '<div class="card" style="margin-bottom:22px"><div class="blk-title">Sommaire</div><ul style="margin:0">' +
      c.sections.map(function (s) { return '<li><a href="#/conseils#' + esc(s.id) + '">' + esc(s.titre) + '</a></li>'; }).join('') +
      '</ul></div>';
    return '<div class="wrap"><div class="page-head"><div class="eyebrow">Méthode</div>' +
      '<h1>' + esc(c.titre) + '</h1><p class="lead">' + esc(c.intro) + '</p></div>' + som + secs + '</div>';
  };

  /* ---------------- Réglages ---------------- */
  V.reglages = function (ref) {
    var s = Store.settings();
    return '<div class="wrap" style="max-width:720px">' +
      '<div class="page-head"><h1>Réglages</h1><p class="lead">Tout est stocké dans ce navigateur. Rien n’est envoyé sur un serveur.</p></div>' +
      '<div class="card"><h3 style="margin-top:0">Référentiel actif</h3>' +
      '<div class="chips" id="set-ref">' + FICHES.ordreRef.map(function (id) {
        return '<button class="chip" data-ref="' + esc(id) + '" aria-pressed="' + (id === ref ? 'true' : 'false') + '">' + esc(FICHES.ref(id).nom) + '</button>';
      }).join('') + '</div>' +
      '<h3>Thème</h3><div class="chips" id="set-theme">' +
      [['auto', 'Automatique'], ['light', 'Clair'], ['dark', 'Sombre']].map(function (t) {
        return '<button class="chip" data-theme="' + t[0] + '" aria-pressed="' + (s.theme === t[0] ? 'true' : 'false') + '">' + t[1] + '</button>';
      }).join('') + '</div>' +
      '<h3>Correction des QCM</h3><div class="chips" id="set-mode">' +
      [['immediat', 'Après chaque question'], ['final', 'À la fin du questionnaire']].map(function (t) {
        return '<button class="chip" data-mode="' + t[0] + '" aria-pressed="' + (s.quizMode === t[0] ? 'true' : 'false') + '">' + t[1] + '</button>';
      }).join('') + '</div>' +
      '</div>' +
      '<div class="card" style="margin-top:16px"><h3 style="margin-top:0">Sauvegarde de la progression</h3>' +
      '<p>Exporte un fichier JSON pour retrouver ton avancement sur un autre appareil ou après un nettoyage du navigateur.</p>' +
      '<div class="btn-row"><button class="btn" id="set-export">Exporter</button>' +
      '<button class="btn btn-ghost" id="set-import">Importer un fichier</button>' +
      '<input type="file" id="set-file" accept="application/json,.json" hidden></div></div>' +
      '<div class="card" style="margin-top:16px"><h3 style="margin-top:0">Remise à zéro</h3>' +
      '<p>Efface fiches lues, scores et historique de révision. Irréversible.</p>' +
      '<button class="btn-ghost" id="set-reset" style="color:var(--rose);border-color:var(--rose)">Tout effacer</button></div>' +
      (Store.disponible ? '' : '<div class="blk blk-callout blk-piege" style="margin-top:16px"><div class="blk-title">Stockage indisponible</div><p>Ce navigateur bloque le stockage local : ta progression sera perdue en fermant l’onglet.</p></div>') +
      '</div>';
  };

  /* ---------------- Modules transversaux ---------------- */
  V.modules = function () {
    var mods = FICHES.tousModules();
    var TR = FICHES.REF_TRANSVERSAL;
    if (!mods.length) {
      return '<div class="wrap"><div class="page-head"><h1>Pratique soignante</h1></div>' +
        '<div class="empty"><div class="big">◔</div><p>Aucun module disponible.</p></div></div>';
    }
    var cards = mods.map(function (m) {
      var pr = FICHES.progressionUE(TR, m.id);
      return '<a class="ue-card" href="#/module/' + esc(m.id) + '">' +
        '<div style="display:flex;justify-content:space-between;align-items:center;gap:8px">' +
        '<span class="ue-code">' + esc(m.etiquette || 'PRATIQUE') + '</span>' +
        (pr.pct >= 100 ? '<span class="badge ok">maîtrisé</span>' : (pr.pct > 0 ? '<span class="badge wip">en cours</span>' : '<span class="badge">disponible</span>')) +
        '</div><div class="ue-title">' + esc(m.titre) + '</div>' +
        '<div class="ue-meta"><span>' + (m.fiches || []).length + ' fiches</span><span>' + (m.qcm || []).length + ' questions</span></div>' +
        barre(pr.pct) + '</a>';
    }).join('');
    var g = FICHES.progressionModules();
    return '<div class="wrap"><div class="page-head"><div class="eyebrow">Transversal</div>' +
      '<h1>Pratique soignante</h1>' +
      '<p class="lead">Les gestes, les protocoles et les repères qui servent dans tous les semestres et tous les stages, indépendamment du référentiel.</p></div>' +
      '<div class="kpis"><div class="kpi"><div class="kpi-v">' + g.pct + ' %</div><div class="kpi-l">Progression</div></div>' +
      '<div class="kpi"><div class="kpi-v">' + g.total + '</div><div class="kpi-l">Modules</div></div></div>' +
      '<div class="grid g2">' + cards + '</div></div>';
  };

  V.module = function (id) {
    var m = FICHES.module(id);
    if (!m) return V.introuvable();
    var TR = FICHES.REF_TRANSVERSAL;
    var pr = FICHES.progressionUE(TR, id);

    var listeFiches = (m.fiches || []).map(function (f, i) {
      var lu = Store.ficheLue(TR, id, f.id);
      return '<a class="fl' + (lu ? ' done' : '') + '" href="#/module/' + esc(id) + '/fiche/' + esc(f.id) + '">' +
        '<span class="n">' + (lu ? '✓' : (i + 1)) + '</span>' +
        '<span class="t">' + esc(f.titre) + '</span>' +
        '<span class="d">' + (f.duree ? f.duree + ' min' : '') + '</span></a>';
    }).join('');

    var obj = (m.objectifs && m.objectifs.length)
      ? '<h2>Ce que couvre ce module</h2><ul>' + m.objectifs.map(function (o) { return '<li>' + inline(o) + '</li>'; }).join('') + '</ul>' : '';

    var quizBloc = '';
    if ((m.qcm || []).length) {
      quizBloc = '<h2>Questionnaire corrigé</h2><div class="card">' +
        '<p style="margin-top:0">' + m.qcm.length + ' questions. ' +
        (pr.meilleur ? 'Meilleur score : <strong>' + pr.meilleur + ' %</strong>.' : 'Pas encore d’essai.') + '</p>' +
        '<div class="btn-row"><a class="btn" href="#/quiz-module/' + esc(id) + '">Lancer le QCM</a>' +
        '<a class="btn btn-ghost" href="#/quiz-module/' + esc(id) + '?n=5">Version courte</a></div></div>';
    }

    return '<div class="wrap">' +
      '<div class="crumbs"><a href="#/">Accueil</a> · <a href="#/modules">Pratique soignante</a></div>' +
      '<div class="page-head"><div class="eyebrow">' + esc(m.etiquette || 'Pratique') + '</div>' +
      '<h1>' + esc(m.titre) + '</h1>' +
      (m.accroche ? '<p class="lead">' + inline(m.accroche) + '</p>' : '') + '</div>' +
      '<div class="kpis">' +
      '<div class="kpi"><div class="kpi-v">' + (m.fiches || []).length + '</div><div class="kpi-l">Fiches</div></div>' +
      '<div class="kpi"><div class="kpi-v">' + (m.qcm || []).length + '</div><div class="kpi-l">Questions</div></div>' +
      '<div class="kpi"><div class="kpi-v">' + pr.pct + ' %</div><div class="kpi-l">Ta progression</div></div></div>' +
      obj +
      ((m.fiches || []).length ? '<h2>Fiches</h2><div class="list-fiches">' + listeFiches + '</div>' : '') +
      quizBloc +
      (m.ues ? '<h3>UE concernées</h3><p class="mini">' + esc(m.ues.join(' · ')) + '</p>' : '') +
      '</div>';
  };

  V.moduleFiche = function (id, ficheId) {
    var m = FICHES.module(id);
    if (!m) return V.introuvable();
    var TR = FICHES.REF_TRANSVERSAL;
    var idx = -1, i;
    for (i = 0; i < m.fiches.length; i++) if (m.fiches[i].id === ficheId) idx = i;
    if (idx === -1) return V.introuvable();
    var f = m.fiches[idx];
    var lu = Store.ficheLue(TR, id, f.id);
    var prev = idx > 0 ? m.fiches[idx - 1] : null;
    var next = idx < m.fiches.length - 1 ? m.fiches[idx + 1] : null;

    return '<div class="wrap">' +
      '<div class="crumbs"><a href="#/modules">Pratique soignante</a> · <a href="#/module/' + esc(id) + '">' + esc(m.titre) + '</a></div>' +
      '<div class="page-head"><div class="eyebrow">Fiche ' + (idx + 1) + '/' + m.fiches.length + (f.duree ? ' · ' + f.duree + ' min' : '') + '</div>' +
      '<h1>' + esc(f.titre) + '</h1>' +
      (f.accroche ? '<p class="lead">' + inline(f.accroche) + '</p>' : '') + '</div>' +
      '<div class="fiche-body">' + R.blocs(f.blocs) + '</div>' +
      '<div class="btn-row">' +
      '<button class="btn' + (lu ? ' btn-sec' : '') + '" id="btn-lu" data-lu="' + (lu ? '1' : '0') + '">' +
      (lu ? '✓ Fiche marquée comme lue' : 'Marquer comme lue') + '</button>' +
      ((m.qcm || []).length ? '<a class="btn btn-ghost" href="#/quiz-module/' + esc(id) + '">Me tester</a>' : '') + '</div>' +
      '<div class="fiche-nav">' +
      (prev ? '<a class="btn-ghost" href="#/module/' + esc(id) + '/fiche/' + esc(prev.id) + '">← ' + esc(prev.titre) + '</a>' : '<span></span>') +
      (next ? '<a class="btn-ghost" href="#/module/' + esc(id) + '/fiche/' + esc(next.id) + '">' + esc(next.titre) + ' →</a>' : '<a class="btn-ghost" href="#/module/' + esc(id) + '">Retour au module</a>') +
      '</div></div>';
  };

  /* ---------------- Entraînement calculs de doses ---------------- */
  V.calculsAccueil = function () {
    var st = Store.statsCalculs();
    return '<div class="wrap" style="max-width:760px">' +
      '<div class="page-head"><div class="eyebrow">Entraînement</div><h1>Calculs de doses</h1>' +
      '<p class="lead">Exercices tirés au sort à chaque série, corrigés étape par étape. C’est la partie éliminatoire dans de nombreux IFSI : cinq minutes par jour valent mieux qu’une soirée par mois.</p></div>' +
      '<div class="kpis">' +
      '<div class="kpi"><div class="kpi-v">' + st.total + '</div><div class="kpi-l">Exercices faits</div></div>' +
      '<div class="kpi"><div class="kpi-v">' + (st.total ? Math.round(st.justes / st.total * 100) : 0) + ' %</div><div class="kpi-l">Taux de réussite</div></div>' +
      '<div class="kpi"><div class="kpi-v">' + st.serie + '</div><div class="kpi-l">Série de bonnes réponses</div></div>' +
      '</div>' +
      '<div class="card"><h3 style="margin-top:0">Longueur de la série</h3>' +
      '<div class="chips" id="ca-taille">' +
      ['5', '10', '20'].map(function (n, i) { return '<button class="chip" data-n="' + n + '" aria-pressed="' + (i === 0 ? 'true' : 'false') + '">' + n + ' exercices</button>'; }).join('') +
      '</div><div class="btn-row"><button class="btn" id="ca-go">Démarrer</button>' +
      '<a class="btn btn-ghost" href="#/ue/2.11.S1/fiche/f4">Revoir la méthode</a></div></div>' +
      '<div class="blk blk-callout blk-cle" style="margin-top:18px"><div class="blk-title">Règle absolue</div>' +
      '<p>Écris l’unité à chaque ligne de ton calcul. La quasi-totalité des erreurs de calcul de doses sont des erreurs de conversion, pas d’arithmétique.</p></div>' +
      '</div>';
  };

  V.calculExercice = function (ses) {
    var e = ses.items[ses.i];
    var pct = Math.round((ses.i / ses.items.length) * 100);
    var corr = '';
    if (ses.corrige) {
      corr = '<div class="verdict ' + (ses.dernierOk ? 'ok' : 'ko') + '">' +
        (ses.dernierOk ? '✓ Bonne réponse' : '✕ Réponse attendue : ' + String(e.reponse).replace('.', ',') + ' ' + e.unite) + '</div>' +
        '<div class="explain"><strong>Détail du calcul</strong><ol class="steps" style="margin:8px 0 0">' +
        e.etapes.map(function (x) { return '<li>' + R.inline(x) + '</li>'; }).join('') + '</ol></div>' +
        '<button class="btn" id="ca-next">' + (ses.i + 1 < ses.items.length ? 'Exercice suivant' : 'Voir le bilan') + '</button>';
    } else {
      corr = '<div style="display:flex;gap:10px;align-items:center;flex-wrap:wrap">' +
        '<input type="text" inputmode="decimal" id="ca-rep" placeholder="Ta réponse" ' +
        'style="flex:1;min-width:150px;padding:11px 14px;border:1px solid var(--line);border-radius:10px;background:var(--bg);color:var(--txt);font:inherit;font-size:16px">' +
        '<span class="mini" style="font-size:14px">' + R.esc(e.unite) + '</span>' +
        '<button class="btn" id="ca-valider">Valider</button></div>' +
        '<p class="mini" style="margin-top:10px">Utilise le point ou la virgule pour les décimales.</p>';
    }
    return '<div class="wrap" style="max-width:700px">' +
      '<div class="crumbs"><a href="#/calculs">← Quitter l’entraînement</a></div>' +
      '<div class="quiz-head"><div class="quiz-prog"><div class="mini" style="margin-bottom:5px">Exercice ' +
      (ses.i + 1) + ' sur ' + ses.items.length + ' · ' + R.esc(e.type) + '</div>' + barre(pct) + '</div>' +
      '<div class="mini">Score : ' + ses.score + '/' + ses.i + '</div></div>' +
      '<div class="q-card"><p class="q-enonce" style="font-weight:500">' + e.enonce + '</p>' +
      '<div style="margin-top:16px">' + corr + '</div></div></div>';
  };

  V.calculBilan = function (ses) {
    var pct = ses.items.length ? Math.round(ses.score / ses.items.length * 100) : 0;
    var msg = pct === 100 ? 'Sans faute. Refais une série demain pour entretenir l’automatisme.'
      : pct >= 80 ? 'Bon niveau. Les erreurs restantes sont presque toujours des conversions : relis-les.'
        : 'À reprendre. Refais la fiche méthode, puis une série de 5 par jour pendant une semaine.';
    return '<div class="wrap" style="max-width:700px">' +
      '<div class="page-head"><div class="eyebrow">Bilan</div><h1>Calculs de doses</h1></div>' +
      '<div class="card" style="text-align:center">' +
      '<div class="score-ring" style="--p:' + pct + '"><i>' + pct + '%</i></div>' +
      '<div style="font-size:17px;font-weight:600">' + ses.score + ' / ' + ses.items.length + '</div>' +
      '<p class="lead" style="margin-top:8px">' + esc(msg) + '</p>' +
      '<div class="btn-row" style="justify-content:center">' +
      '<button class="btn" id="ca-refaire">Nouvelle série</button>' +
      '<a class="btn btn-ghost" href="#/calculs">Retour</a></div></div></div>';
  };

  V.introuvable = function () {
    return '<div class="wrap"><div class="empty"><div class="big">∅</div>' +
      '<p>Cette page n’existe pas.</p><a class="btn" href="#/">Retour à l’accueil</a></div></div>';
  };

  global.V = V;
})(window);
