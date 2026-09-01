/* ============================================================
   calculs.js — générateur d'exercices de calculs de doses
   Exercices tirés au sort, corrigés étape par étape.
   ============================================================ */
(function (global) {
  'use strict';

  function ent(min, max) { return Math.floor(Math.random() * (max - min + 1)) + min; }
  function pick(a) { return a[Math.floor(Math.random() * a.length)]; }
  function arrondi(n, d) { var f = Math.pow(10, d || 2); return Math.round(n * f) / f; }
  function fr(n) { return String(n).replace('.', ','); }

  var MOLECULES = [
    { nom: 'amoxicilline', unite: 'mg' },
    { nom: 'céfazoline', unite: 'mg' },
    { nom: 'paracétamol', unite: 'mg' },
    { nom: 'vancomycine', unite: 'mg' },
    { nom: 'gentamicine', unite: 'mg' }
  ];

  var TYPES = [

    /* 1 — volume à prélever à partir d'un flacon */
    function () {
      var m = pick(MOLECULES);
      var flaconMg = pick([250, 500, 1000, 2000]);
      var flaconMl = pick([2, 4, 5, 10]);
      var dose = arrondi(flaconMg * pick([0.3, 0.4, 0.5, 0.6, 0.75, 0.8]), 0);
      var rep = arrondi((dose / flaconMg) * flaconMl, 2);
      return {
        type: 'Volume à prélever',
        enonce: 'Prescription : <strong>' + dose + ' mg</strong> de ' + m.nom + '.<br>Vous disposez d’un flacon de <strong>' + (flaconMg >= 1000 ? (flaconMg / 1000) + ' g' : flaconMg + ' mg') + '</strong> reconstitué dans <strong>' + flaconMl + ' mL</strong>.<br>Quel volume prélevez-vous ?',
        reponse: rep, unite: 'mL', tolerance: 0.01,
        etapes: [
          flaconMg >= 1000 ? 'Convertir : ' + (flaconMg / 1000) + ' g = ' + flaconMg + ' mg.' : 'Tout est déjà en mg, pas de conversion.',
          'Formule : (dose prescrite ÷ dose du flacon) × volume du flacon.',
          '(' + dose + ' ÷ ' + flaconMg + ') × ' + flaconMl + ' = ' + fr(rep) + ' mL.',
          'Vérification d’ordre de grandeur : ' + fr(rep) + ' mL sur ' + flaconMl + ' mL disponibles, c’est cohérent.'
        ]
      };
    },

    /* 2 — débit en mL/h */
    function () {
      var vol = pick([250, 500, 1000]);
      var h = pick([2, 3, 4, 6, 8, 12, 24]);
      var rep = arrondi(vol / h, 2);
      return {
        type: 'Débit en mL/h',
        enonce: 'Il faut perfuser <strong>' + vol + ' mL</strong> de NaCl 0,9 % sur <strong>' + h + ' heures</strong>.<br>Quel débit réglez-vous sur la pompe, en mL/h ?',
        reponse: rep, unite: 'mL/h', tolerance: 0.5,
        etapes: [
          'Formule : débit (mL/h) = volume total (mL) ÷ durée (h).',
          vol + ' ÷ ' + h + ' = ' + fr(rep) + ' mL/h.',
          'Contrôle : ' + fr(rep) + ' mL/h × ' + h + ' h = ' + vol + ' mL. On retombe bien sur le volume prescrit.'
        ]
      };
    },

    /* 3 — débit en gouttes/min */
    function () {
      var vol = pick([250, 500, 750, 1000]);
      var h = pick([2, 3, 4, 6, 8]);
      var facteur = 20;
      var rep = Math.round((vol * facteur) / (h * 60));
      return {
        type: 'Débit en gouttes/min',
        enonce: 'Perfusion de <strong>' + vol + ' mL</strong> à passer en <strong>' + h + ' heures</strong>, avec un perfuseur standard (<strong>20 gouttes = 1 mL</strong>).<br>Combien de gouttes par minute ?',
        reponse: rep, unite: 'gouttes/min', tolerance: 1,
        etapes: [
          'Formule : gouttes/min = volume (mL) × facteur de gouttes ÷ durée (min).',
          'Durée en minutes : ' + h + ' × 60 = ' + (h * 60) + ' min.',
          '(' + vol + ' × ' + facteur + ') ÷ ' + (h * 60) + ' = ' + fr(arrondi((vol * facteur) / (h * 60), 2)) + ' → on arrondit à ' + rep + ' gouttes/min.',
          'Raccourci de contrôle : gouttes/min ≈ (mL/h) ÷ 3 pour un perfuseur à 20 gouttes/mL.'
        ]
      };
    },

    /* 4 — dose selon le poids */
    function () {
      var m = pick(MOLECULES);
      var mgkg = pick([5, 8, 10, 15, 20, 25, 30, 50, 80, 100]);
      var poids = ent(12, 92);
      var prises = pick([1, 2, 3]);
      var jour = mgkg * poids;
      var rep = arrondi(jour / prises, 2);
      return {
        type: 'Dose selon le poids',
        enonce: 'Prescription de ' + m.nom + ' : <strong>' + mgkg + ' mg/kg/jour</strong>, à répartir en <strong>' + prises + ' prise' + (prises > 1 ? 's' : '') + '</strong>.<br>Le patient pèse <strong>' + poids + ' kg</strong>.<br>Quelle dose par prise ?',
        reponse: rep, unite: 'mg', tolerance: 0.5,
        etapes: [
          'Dose journalière : ' + mgkg + ' × ' + poids + ' = ' + jour + ' mg/j.',
          prises > 1 ? 'Par prise : ' + jour + ' ÷ ' + prises + ' = ' + fr(rep) + ' mg.' : 'Une seule prise : la dose par prise est la dose journalière, soit ' + jour + ' mg.',
          'Piège classique : bien repérer si l’énoncé donne la posologie par JOUR ou par PRISE.'
        ]
      };
    },

    /* 5 — durée d'une perfusion */
    function () {
      var debit = pick([25, 50, 75, 100, 125, 150]);
      var vol = debit * pick([2, 3, 4, 6, 8]);
      var rep = arrondi(vol / debit, 2);
      return {
        type: 'Durée de perfusion',
        enonce: 'Une perfusion de <strong>' + vol + ' mL</strong> passe au débit de <strong>' + debit + ' mL/h</strong>.<br>Combien de temps durera-t-elle, en heures ?',
        reponse: rep, unite: 'h', tolerance: 0.1,
        etapes: [
          'Formule : durée (h) = volume (mL) ÷ débit (mL/h).',
          vol + ' ÷ ' + debit + ' = ' + fr(rep) + ' h.',
          'Utile pour anticiper l’heure du relais et prévenir la fin de perfusion.'
        ]
      };
    },

    /* 6 — concentration en pourcentage */
    function () {
      var pc = pick([0.9, 5, 10, 20, 30]);
      var vol = pick([100, 250, 500, 1000]);
      var rep = arrondi(pc * vol / 100, 2);
      return {
        type: 'Pourcentage et quantité',
        enonce: 'Une poche contient <strong>' + vol + ' mL</strong> d’une solution à <strong>' + fr(pc) + ' %</strong>.<br>Quelle quantité de principe actif, en grammes, contient cette poche ?',
        reponse: rep, unite: 'g', tolerance: 0.01,
        etapes: [
          'Rappel : 1 % = 1 g pour 100 mL.',
          fr(pc) + ' % = ' + fr(pc) + ' g pour 100 mL.',
          'Pour ' + vol + ' mL : (' + fr(pc) + ' × ' + vol + ') ÷ 100 = ' + fr(rep) + ' g.'
        ]
      };
    },

    /* 7 — dilution / concentration finale */
    function () {
      var mg = pick([50, 100, 250, 500]);
      var vol = pick([20, 50, 100, 250]);
      var rep = arrondi(mg / vol, 3);
      return {
        type: 'Concentration d’une dilution',
        enonce: 'Vous diluez <strong>' + mg + ' mg</strong> de principe actif dans <strong>' + vol + ' mL</strong> de solvant.<br>Quelle est la concentration finale, en mg/mL ?',
        reponse: rep, unite: 'mg/mL', tolerance: 0.005,
        etapes: [
          'Formule : concentration = quantité totale ÷ volume total.',
          mg + ' ÷ ' + vol + ' = ' + fr(rep) + ' mg/mL.',
          'Cette concentration sert ensuite à calculer le volume correspondant à la dose voulue.'
        ]
      };
    },

    /* 8 — nombre de comprimés */
    function () {
      var cp = pick([50, 100, 250, 500]);
      var n = pick([0.5, 1, 1.5, 2, 3]);
      var dose = cp * n;
      return {
        type: 'Nombre de comprimés',
        enonce: 'Prescription : <strong>' + dose + ' mg</strong>.<br>Vous disposez de comprimés dosés à <strong>' + cp + ' mg</strong> (sécables).<br>Combien de comprimés administrez-vous ?',
        reponse: n, unite: 'comprimé(s)', tolerance: 0.01,
        etapes: [
          'Formule : nombre de comprimés = dose prescrite ÷ dosage du comprimé.',
          dose + ' ÷ ' + cp + ' = ' + fr(n) + ' comprimé(s).',
          n % 1 !== 0 ? 'Vérifier que le comprimé est bien sécable avant de le couper — un LP ou un gastro-résistant ne se coupe pas.' : 'Dose entière : pas de découpe nécessaire.'
        ]
      };
    }
  ];

  function generer(n) {
    var out = [], i;
    for (i = 0; i < n; i++) out.push(pick(TYPES)());
    return out;
  }

  global.Calculs = { generer: generer, types: TYPES.length };
})(window);
