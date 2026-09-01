/* ============================================================
   app.js — chargement des données, routeur, interactions
   ============================================================ */
(function (global) {
  'use strict';

  var app = {
    ref: '2009',
    session: null,      // session de quiz en cours
    pret: false
  };

  var main = document.getElementById('main');

  /* ---------------- chargement des fichiers de contenu ---------------- */
  function chargerUE(liste, done) {
    var i = 0, base = 'data/';
    function suivant() {
      if (i >= liste.length) { done(); return; }
      var src = base + liste[i++];
      var s = document.createElement('script');
      s.src = src;
      s.onload = suivant;
      s.onerror = function () {
        if (global.console && console.warn) console.warn('Contenu introuvable, ignoré : ' + src);
        suivant();
      };
      document.head.appendChild(s);
    }
    suivant();
  }

  /* ---------------- thème ---------------- */
  function appliquerTheme(t) {
    if (t === 'light' || t === 'dark') document.documentElement.setAttribute('data-theme', t);
    else document.documentElement.removeAttribute('data-theme');
  }

  function themeSuivant() {
    var s = Store.settings();
    var ordre = ['auto', 'light', 'dark'];
    var next = ordre[(ordre.indexOf(s.theme) + 1) % 3];
    Store.setSetting('theme', next);
    appliquerTheme(next);
    R.toast(next === 'auto' ? 'Thème : automatique' : (next === 'light' ? 'Thème : clair' : 'Thème : sombre'));
  }

  /* ---------------- barre latérale ---------------- */
  function majSidebar() {
    var r = FICHES.ref(app.ref);
    var box = document.getElementById('side-semestres');
    if (r && box) {
      box.innerHTML = '<div class="side-title">' + R.esc(r.nomCourt || r.nom) + '</div>' +
        r.semestres.map(function (s) {
          var p = FICHES.progressionSemestre(app.ref, s.id);
          return '<a class="side-sem" href="#/semestre/' + s.id + '"><span>' + s.id + '</span>' +
            '<span class="mini-bar"><i style="width:' + p.pct + '%"></i></span>' +
            '<span class="mini">' + p.pct + '%</span></a>';
        }).join('');
    }
    var g = FICHES.progressionGlobale(app.ref);
    var bar = document.getElementById('side-bar');
    var val = document.getElementById('side-bar-val');
    if (bar) bar.style.width = g.pct + '%';
    if (val) val.textContent = g.pct + ' % · ' + g.dispo + '/' + g.total + ' UE';
  }

  function majNavActive(route) {
    R.els('.side-link').forEach(function (a) {
      var n = a.getAttribute('data-nav');
      var actif = (n === 'home' && route === '') ||
        (n !== 'home' && route.indexOf(n) === 0);
      a.classList.toggle('active', !!actif);
    });
  }

  function fermerMenu() {
    var sb = document.getElementById('sidebar');
    var sc = document.getElementById('scrim');
    if (sb) sb.classList.remove('open');
    if (sc) sc.hidden = true;
    var b = document.getElementById('btn-menu');
    if (b) b.setAttribute('aria-expanded', 'false');
  }

  /* ---------------- routeur ---------------- */
  function parseHash() {
    var h = location.hash.replace(/^#\/?/, '');
    var ancre = '';
    var iA = h.indexOf('#');
    if (iA !== -1) { ancre = h.slice(iA + 1); h = h.slice(0, iA); }
    var query = '';
    var iQ = h.indexOf('?');
    if (iQ !== -1) { query = h.slice(iQ + 1); h = h.slice(0, iQ); }
    return { parts: h.split('/').filter(Boolean), query: query, ancre: ancre };
  }

  function param(query, k) {
    var m = new RegExp('(?:^|&)' + k + '=([^&]*)').exec(query || '');
    return m ? decodeURIComponent(m[1]) : null;
  }

  function rendre(html) {
    main.innerHTML = html;
    main.scrollTop = 0;
    if (typeof global.scrollTo === 'function') global.scrollTo(0, 0);
  }

  function router() {
    if (!app.pret) return;
    fermerMenu();
    var h = parseHash();
    var p = h.parts;
    var r0 = p[0] || '';

    if (r0 !== 'quiz' && r0 !== 'quiz-module' && r0 !== 'revision') app.session = null;
    if (r0 !== 'calculs') app.calc = null;

    if (r0 === '') rendre(V.home(app.ref));
    else if (r0 === 'programme') rendre(V.programme(app.ref));
    else if (r0 === 'semestre' && p[1]) rendre(V.semestre(app.ref, p[1]));
    else if (r0 === 'ue' && p[1] && p[2] === 'fiche' && p[3]) {
      rendre(V.fiche(app.ref, p[1], p[3]));
      brancherFiche(p[1], p[3]);
    }
    else if (r0 === 'ue' && p[1]) rendre(V.ue(app.ref, p[1]));
    else if (r0 === 'quiz' && p[1]) demarrerQuizUE(p[1], parseInt(param(h.query, 'n'), 10) || 0);
    else if (r0 === 'revision') { rendre(V.revision(app.ref)); brancherRevision(); }
    else if (r0 === 'calculs') { rendre(V.calculsAccueil()); brancherCalculs(); }
    else if (r0 === 'modules') rendre(V.modules());
    else if (r0 === 'module' && p[1] && p[2] === 'fiche' && p[3]) {
      rendre(V.moduleFiche(p[1], p[3]));
      brancherFicheGenerique(FICHES.REF_TRANSVERSAL, p[1], p[3], '#/module/' + p[1] + '/fiche/' + p[3]);
    }
    else if (r0 === 'module' && p[1]) rendre(V.module(p[1]));
    else if (r0 === 'quiz-module' && p[1]) demarrerQuizModule(p[1], parseInt(param(h.query, 'n'), 10) || 0);
    else if (r0 === 'stats') rendre(V.stats(app.ref));
    else if (r0 === 'conseils') { rendre(V.conseils()); ancrer(h.ancre); }
    else if (r0 === 'reglages') { rendre(V.reglages(app.ref)); brancherReglages(); }
    else rendre(V.introuvable());

    majNavActive(r0);
    majSidebar();
  }

  function ancrer(id) {
    if (!id) return;
    var t = document.getElementById(id);
    if (t && t.scrollIntoView) t.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  /* ---------------- fiche ---------------- */
  function brancherFicheGenerique(ref, ueId, ficheId, href) {
    var c = FICHES.contenu(ref, ueId);
    if (c) {
      var f = null;
      for (var i = 0; i < c.fiches.length; i++) if (c.fiches[i].id === ficheId) f = c.fiches[i];
      if (f && ref !== FICHES.REF_TRANSVERSAL) {
        Store.setDernier({ ref: ref, ue: ueId, titre: f.titre, href: href });
      }
    }
    var btn = document.getElementById('btn-lu');
    if (btn) {
      btn.onclick = function () {
        var lu = btn.getAttribute('data-lu') === '1';
        Store.marquerFiche(ref, ueId, ficheId, !lu);
        btn.setAttribute('data-lu', lu ? '0' : '1');
        btn.textContent = lu ? 'Marquer comme lue' : '✓ Fiche marquée comme lue';
        btn.classList.toggle('btn-sec', !lu);
        R.toast(lu ? 'Fiche remise en « à lire »' : 'Fiche marquée comme lue');
        majSidebar();
      };
    }
  }

  function brancherFiche(ueId, ficheId) {
    brancherFicheGenerique(app.ref, ueId, ficheId, '#/ue/' + ueId + '/fiche/' + ficheId);
  }

  function demarrerQuizModule(id, taille) {
    var m = FICHES.module(id);
    if (!m || !(m.qcm || []).length) { rendre(V.introuvable()); return; }
    var TR = FICHES.REF_TRANSVERSAL;
    var qs = Quiz.melanger(m.qcm);
    if (taille > 0) qs = qs.slice(0, taille);
    app.session = new Quiz.Session({
      ref: TR, ueId: id, questions: qs,
      titre: m.titre, retour: '#/module/' + id,
      mode: Store.settings().quizMode
    });
    afficherQuiz();
  }

  /* ---------------- quiz ---------------- */
  function demarrerQuizUE(ueId, taille) {
    var c = FICHES.contenu(app.ref, ueId);
    var u = FICHES.ue(app.ref, ueId);
    if (!c || !(c.qcm || []).length || !u) { rendre(V.introuvable()); return; }
    var qs = Quiz.melanger(c.qcm);
    if (taille > 0) qs = qs.slice(0, taille);
    app.session = new Quiz.Session({
      ref: app.ref, ueId: ueId, questions: qs,
      titre: 'UE ' + u.code + ' — ' + u.titre,
      retour: '#/ue/' + ueId,
      mode: Store.settings().quizMode
    });
    Store.setDernier({ ref: app.ref, ue: ueId, titre: 'QCM — UE ' + u.code, href: '#/quiz/' + ueId });
    afficherQuiz();
  }

  function demarrerRevision(ueIds, taille, seulementDues) {
    var pool = [], i, j;
    var ues = FICHES.toutesUE(app.ref).filter(function (u) { return FICHES.aContenu(app.ref, u.id); });
    if (ueIds && ueIds.length) ues = ues.filter(function (u) { return ueIds.indexOf(u.id) !== -1; });

    var dues = {};
    if (seulementDues) {
      Store.cartesDues(app.ref).forEach(function (d) { dues[d.ue + '|' + d.qid] = true; });
    }
    for (i = 0; i < ues.length; i++) {
      var c = FICHES.contenu(app.ref, ues[i].id);
      var qq = c.qcm || [];
      for (j = 0; j < qq.length; j++) {
        if (seulementDues && !dues[ues[i].id + '|' + qq[j].id]) continue;
        var q = {};
        for (var k in qq[j]) if (Object.prototype.hasOwnProperty.call(qq[j], k)) q[k] = qq[j][k];
        q.ue = ues[i].id; q.ref = app.ref;
        pool.push(q);
      }
    }
    if (!pool.length) { R.toast('Aucune question ne correspond à ces critères.'); return; }
    var sel = Quiz.melanger(pool).slice(0, taille || 10);
    app.session = new Quiz.Session({
      ref: app.ref, ueId: null, multiUE: true, questions: sel,
      titre: seulementDues ? 'Mes erreurs à revoir' : 'Session de révision',
      retour: '#/revision', mode: Store.settings().quizMode
    });
    afficherQuiz();
  }

  function afficherQuiz() {
    var s = app.session;
    if (!s) { location.hash = '#/'; return; }
    if (s.termine()) {
      s.enregistrer();
      rendre(V.quizResultat(s));
      var rf = document.getElementById('q-refaire');
      if (rf) rf.addEventListener('click', function () {
        var qs = Quiz.melanger(s.questions.map(function (q) { return q; }));
        app.session = new Quiz.Session({
          ref: s.ref, ueId: s.ueId, multiUE: s.multiUE, questions: qs,
          titre: s.titre, retour: s.retour, mode: s.mode
        });
        afficherQuiz();
      });
      majSidebar();
      return;
    }
    rendre(V.quizQuestion(s));
    brancherQuizBoutons();
  }

  function brancherQuizBoutons() {
    var s = app.session;
    R.els('.choice', main).forEach(function (b) {
      b.onclick = function () {
        s.basculer(parseInt(b.getAttribute('data-i'), 10));
        rendre(V.quizQuestion(s));
        brancherQuizBoutons();
      };
    });
    var v = document.getElementById('q-valider');
    if (v) v.onclick = function () {
      s.validerQuestion();
      rendre(V.quizQuestion(s));
      brancherQuizBoutons();
    };
    var n = document.getElementById('q-next');
    if (n) n.onclick = function () { s.suivante(); afficherQuiz(); };
  }

  /* ---------------- session de révision ---------------- */
  function brancherRevision() {
    var taille = 10, choisies = [];
    R.els('#rv-taille .chip').forEach(function (c) {
      c.onclick = function () {
        R.els('#rv-taille .chip').forEach(function (x) { x.setAttribute('aria-pressed', 'false'); });
        c.setAttribute('aria-pressed', 'true');
        taille = parseInt(c.getAttribute('data-n'), 10);
      };
    });
    R.els('#rv-ues .chip').forEach(function (c) {
      c.onclick = function () {
        var on = c.getAttribute('aria-pressed') === 'true';
        c.setAttribute('aria-pressed', on ? 'false' : 'true');
        var id = c.getAttribute('data-ue');
        var k = choisies.indexOf(id);
        if (on) { if (k !== -1) choisies.splice(k, 1); }
        else if (k === -1) choisies.push(id);
      };
    });
    var go = document.getElementById('rv-go');
    if (go) go.onclick = function () { demarrerRevision(choisies, taille, false); };
    var du = document.getElementById('rv-dues');
    if (du) du.onclick = function () { demarrerRevision([], 30, true); };
  }

  /* ---------------- calculs de doses ---------------- */
  function brancherCalculs() {
    var taille = 5;
    R.els('#ca-taille .chip').forEach(function (c) {
      c.onclick = function () {
        R.els('#ca-taille .chip').forEach(function (x) { x.setAttribute('aria-pressed', 'false'); });
        c.setAttribute('aria-pressed', 'true');
        taille = parseInt(c.getAttribute('data-n'), 10);
      };
    });
    var go = document.getElementById('ca-go');
    if (go) go.onclick = function () { lancerCalculs(taille); };
  }

  function lancerCalculs(n) {
    app.calc = { items: Calculs.generer(n), i: 0, score: 0, corrige: false, dernierOk: false, taille: n };
    afficherCalcul();
  }

  function normNombre(txt) {
    var t = String(txt || '').trim().replace(/\s/g, '').replace(',', '.');
    if (!t) return null;
    var v = parseFloat(t);
    return isNaN(v) ? null : v;
  }

  function afficherCalcul() {
    var c = app.calc;
    if (!c) { location.hash = '#/calculs'; return; }
    if (c.i >= c.items.length) {
      rendre(V.calculBilan(c));
      var rf = document.getElementById('ca-refaire');
      if (rf) rf.onclick = function () { lancerCalculs(c.taille); };
      return;
    }
    rendre(V.calculExercice(c));
    var inp = document.getElementById('ca-rep');
    var val = document.getElementById('ca-valider');
    if (inp) {
      inp.focus();
      inp.onkeydown = function (e) { if (e.key === 'Enter' && val) val.click(); };
    }
    if (val) val.onclick = function () {
      var v = normNombre(inp ? inp.value : '');
      if (v === null) { R.toast('Saisis une valeur numérique.'); return; }
      var e = c.items[c.i];
      var ok = Math.abs(v - e.reponse) <= (e.tolerance || 0.01);
      c.dernierOk = ok; c.corrige = true;
      if (ok) c.score++;
      Store.majCalcul(ok);
      rendre(V.calculExercice(c));
      var nx = document.getElementById('ca-next');
      if (nx) nx.onclick = function () { c.i++; c.corrige = false; afficherCalcul(); };
    };
  }

  /* ---------------- réglages ---------------- */
  function brancherReglages() {
    R.els('#set-ref .chip').forEach(function (c) {
      c.onclick = function () { changerRef(c.getAttribute('data-ref')); };
    });
    R.els('#set-theme .chip').forEach(function (c) {
      c.onclick = function () {
        var t = c.getAttribute('data-theme');
        Store.setSetting('theme', t); appliquerTheme(t);
        R.els('#set-theme .chip').forEach(function (x) { x.setAttribute('aria-pressed', 'false'); });
        c.setAttribute('aria-pressed', 'true');
      };
    });
    R.els('#set-mode .chip').forEach(function (c) {
      c.onclick = function () {
        Store.setSetting('quizMode', c.getAttribute('data-mode'));
        R.els('#set-mode .chip').forEach(function (x) { x.setAttribute('aria-pressed', 'false'); });
        c.setAttribute('aria-pressed', 'true');
        R.toast('Préférence enregistrée');
      };
    });
    var ex = document.getElementById('set-export');
    if (ex) ex.onclick = function () {
      try {
        var blob = new Blob([Store.exporter()], { type: 'application/json' });
        var a = document.createElement('a');
        a.href = URL.createObjectURL(blob);
        a.download = 'progression-fiches-ifsi-' + new Date().toISOString().slice(0, 10) + '.json';
        document.body.appendChild(a); a.click(); document.body.removeChild(a);
        setTimeout(function () { URL.revokeObjectURL(a.href); }, 1500);
        R.toast('Sauvegarde téléchargée');
      } catch (e) { R.toast('Export impossible dans ce navigateur'); }
    };
    var imp = document.getElementById('set-import');
    var file = document.getElementById('set-file');
    if (imp && file) {
      imp.onclick = function () { file.click(); };
      file.onchange = function () {
        var f = file.files && file.files[0];
        if (!f) return;
        var fr = new FileReader();
        fr.onload = function () {
          try {
            Store.importer(String(fr.result));
            R.toast('Progression restaurée');
            app.ref = Store.settings().ref;
            majSelecteurRef();
            router();
          } catch (e) { R.toast('Fichier invalide : ' + e.message); }
        };
        fr.readAsText(f);
      };
    }
    var rz = document.getElementById('set-reset');
    if (rz) rz.onclick = function () {
      if (rz.getAttribute('data-armed') === '1') {
        Store.reset(); R.toast('Progression effacée'); router();
      } else {
        rz.setAttribute('data-armed', '1');
        rz.textContent = 'Confirmer l’effacement';
        setTimeout(function () {
          if (!document.body.contains(rz)) return;
          rz.setAttribute('data-armed', '0'); rz.textContent = 'Tout effacer';
        }, 5000);
      }
    };
  }

  /* ---------------- référentiel ---------------- */
  function majSelecteurRef() {
    var sel = document.getElementById('ref-select');
    if (!sel) return;
    sel.innerHTML = FICHES.ordreRef.map(function (id) {
      var r = FICHES.ref(id);
      return '<option value="' + id + '"' + (id === app.ref ? ' selected' : '') + '>' + R.esc(r.nom) + '</option>';
    }).join('');
  }

  function changerRef(id) {
    if (!FICHES.ref(id)) return;
    app.ref = id;
    Store.setSetting('ref', id);
    majSelecteurRef();
    R.toast('Référentiel : ' + FICHES.ref(id).nom);
    if (location.hash.replace(/^#\/?/, '').split('/')[0] === 'ue' || location.hash.indexOf('semestre') !== -1 || location.hash.indexOf('quiz') !== -1) {
      location.hash = '#/';
    }
    router();
  }

  /* ---------------- recherche ---------------- */
  function brancherRecherche() {
    var modal = document.getElementById('search-modal');
    var input = document.getElementById('search-input');
    var res = document.getElementById('search-results');
    if (!modal || !input || !res) return;

    function ouvrir() { modal.hidden = false; input.value = ''; res.innerHTML = ''; input.focus(); }
    function fermer() { modal.hidden = true; }

    document.getElementById('btn-search').addEventListener('click', ouvrir);
    document.getElementById('search-close').addEventListener('click', fermer);
    modal.addEventListener('click', function (e) { if (e.target === modal) fermer(); });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && !modal.hidden) fermer();
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') { e.preventDefault(); ouvrir(); }
    });
    input.addEventListener('input', function () {
      var out = FICHES.rechercher(app.ref, input.value);
      res.innerHTML = out.length
        ? out.map(function (o) {
          return '<a class="sres" href="' + R.esc(o.href) + '"><div class="t">' + R.esc(o.titre) + '</div>' +
            '<div class="s">' + R.esc(o.type) + ' · ' + R.esc(o.sous) + '</div></a>';
        }).join('')
        : (input.value.length > 1 ? '<div class="empty" style="padding:26px"><p class="mini">Aucun résultat.</p></div>' : '');
      R.els('.sres', res).forEach(function (a) { a.onclick = function () { setTimeout(fermer, 10); }; });
    });
  }

  /* ---------------- flashcards (délégation) ---------------- */
  function brancherFlash() {
    main.addEventListener('click', function (e) {
      var f = e.target.closest ? e.target.closest('.flash') : null;
      if (f) f.setAttribute('data-open', f.getAttribute('data-open') === '1' ? '0' : '1');
    });
    main.addEventListener('keydown', function (e) {
      if (e.key !== 'Enter' && e.key !== ' ') return;
      var f = e.target.closest ? e.target.closest('.flash') : null;
      if (f) { e.preventDefault(); f.setAttribute('data-open', f.getAttribute('data-open') === '1' ? '0' : '1'); }
    });
  }

  /* ---------------- démarrage ---------------- */
  function boot() {
    var s = Store.settings();
    appliquerTheme(s.theme);
    app.ref = FICHES.ref(s.ref) ? s.ref : FICHES.ordreRef[0];
    majSelecteurRef();

    document.getElementById('ref-select').addEventListener('change', function (e) { changerRef(e.target.value); });
    document.getElementById('btn-theme').addEventListener('click', themeSuivant);
    document.getElementById('btn-menu').addEventListener('click', function () {
      var sb = document.getElementById('sidebar');
      var sc = document.getElementById('scrim');
      var open = sb.classList.toggle('open');
      sc.hidden = !open;
      this.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    document.getElementById('scrim').addEventListener('click', fermerMenu);

    brancherRecherche();
    brancherFlash();

    app.pret = true;
    global.addEventListener('hashchange', router);
    router();

    if ('serviceWorker' in navigator && location.protocol.indexOf('http') === 0) {
      navigator.serviceWorker.register('sw.js').catch(function () { /* hors ligne non critique */ });
    }
  }

  function demarrer() {
    chargerUE(FICHES.UE_FILES || [], boot);
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', demarrer);
  else demarrer();

  global.APP = app;
})(window);
