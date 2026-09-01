/* UE 2.11.S1 — Pharmacologie et thérapeutiques */
(function () {
  'use strict';

  var SVG_ADME =
    '<svg viewBox="0 0 640 220" role="img" aria-label="Devenir du médicament dans l’organisme">' +
    '<g text-anchor="middle">' +
    '<rect x="14" y="60" width="140" height="72" rx="12" fill="var(--accent-soft)" stroke="var(--accent)" stroke-width="2"/>' +
    '<text x="84" y="88" font-size="13.5" font-weight="700" fill="var(--txt)">Absorption</text>' +
    '<text x="84" y="110" font-size="11.5" fill="var(--txt-2)">voie, biodisponibilité</text>' +
    '<rect x="172" y="60" width="140" height="72" rx="12" fill="var(--accent-soft)" stroke="var(--violet)" stroke-width="2"/>' +
    '<text x="242" y="88" font-size="13.5" font-weight="700" fill="var(--txt)">Distribution</text>' +
    '<text x="242" y="110" font-size="11.5" fill="var(--txt-2)">liaison protéique</text>' +
    '<rect x="330" y="60" width="140" height="72" rx="12" fill="var(--accent-soft)" stroke="var(--amber)" stroke-width="2"/>' +
    '<text x="400" y="88" font-size="13.5" font-weight="700" fill="var(--txt)">Métabolisme</text>' +
    '<text x="400" y="110" font-size="11.5" fill="var(--txt-2)">foie · cytochromes</text>' +
    '<rect x="488" y="60" width="140" height="72" rx="12" fill="var(--accent-soft)" stroke="var(--green)" stroke-width="2"/>' +
    '<text x="558" y="88" font-size="13.5" font-weight="700" fill="var(--txt)">Élimination</text>' +
    '<text x="558" y="110" font-size="11.5" fill="var(--txt-2)">rein surtout</text>' +
    '</g>' +
    '<path d="M158 96 h10" stroke="var(--txt-3)" stroke-width="2" marker-end="url(#fp)"/>' +
    '<path d="M316 96 h10" stroke="var(--txt-3)" stroke-width="2" marker-end="url(#fp)"/>' +
    '<path d="M474 96 h10" stroke="var(--txt-3)" stroke-width="2" marker-end="url(#fp)"/>' +
    '<text x="320" y="176" text-anchor="middle" font-size="12.5" fill="var(--txt-3)">Insuffisance hépatique ➜ métabolisme · Insuffisance rénale ➜ élimination · Les deux ➜ adapter la posologie</text>' +
    '<defs><marker id="fp" markerWidth="9" markerHeight="9" refX="8" refY="3" orient="auto"><path d="M0,0 L8,3 L0,6 z" fill="var(--txt-3)"/></marker></defs>' +
    '</svg>';

  FICHES.registerUE({
    ref: '2009', ue: '2.11.S1',
    objectifs: [
      'Comprendre le devenir du médicament dans l’organisme',
      'Connaître les principales voies d’administration et leurs contraintes',
      'Appliquer la règle des 5 B et sécuriser le circuit du médicament',
      'Maîtriser les calculs de doses et de débits sans erreur'
    ],

    fiches: [
      {
        id: 'f1', titre: 'Pharmacocinétique : ce que le corps fait au médicament', duree: 12,
        motsCles: ['absorption', 'distribution', 'métabolisme', 'élimination', 'demi-vie', 'biodisponibilité'],
        blocs: [
          { type: 'schema', svg: SVG_ADME, legende: 'Les quatre étapes ADME. Chacune peut être perturbée par une pathologie ou un autre médicament.' },
          {
            type: 'tableau', entetes: ['Notion', 'Définition', 'Conséquence pratique'],
            lignes: [
              ['Biodisponibilité', 'Fraction de la dose qui atteint la circulation générale', 'Voie IV = 100 % par définition ; voie orale souvent bien moins (effet de premier passage hépatique)'],
              ['Demi-vie', 'Temps pour que la concentration diminue de moitié', 'Détermine le rythme des prises ; l’état d’équilibre est atteint en ≈ 5 demi-vies'],
              ['Liaison protéique', 'Part fixée à l’albumine, inactive', 'Une hypoalbuminémie augmente la fraction libre donc l’effet et la toxicité'],
              ['Marge thérapeutique étroite', 'Écart faible entre dose efficace et dose toxique', 'Digoxine, lithium, AVK, aminosides : dosages sanguins obligatoires']
            ]
          },
          {
            type: 'cle', items: [
              '**Pharmacocinétique** = ce que l’organisme fait au médicament. **Pharmacodynamie** = ce que le médicament fait à l’organisme. Question de définition tombée quasi systématiquement.',
              'Le **foie** métabolise, le **rein** élimine. Chez la personne âgée ou l’insuffisant rénal, on adapte la posologie et on surveille l’accumulation.',
              'Les inducteurs enzymatiques (rifampicine, millepertuis, certains antiépileptiques) **diminuent** l’effet des médicaments associés ; les inhibiteurs (macrolides, jus de pamplemousse, antifongiques azolés) l’**augmentent**.'
            ]
          },
          {
            type: 'flash', items: [
              { q: 'Quelle voie a une biodisponibilité de 100 % ?', a: 'La voie intraveineuse, par définition.' },
              { q: 'Après combien de demi-vies atteint-on l’état d’équilibre ?', a: 'Environ 5 demi-vies.' },
              { q: 'Effet du jus de pamplemousse sur de nombreux médicaments ?', a: 'Inhibiteur enzymatique : il augmente les concentrations, donc le risque de surdosage.' }
            ]
          }
        ]
      },

      {
        id: 'f2', titre: 'Voies d’administration et formes galéniques', duree: 10,
        motsCles: ['per os', 'IV', 'IM', 'sous-cutanée', 'transdermique', 'LP'],
        blocs: [
          {
            type: 'tableau', entetes: ['Voie', 'Délai d’action', 'Points de vigilance'],
            lignes: [
              ['Orale (per os)', '30 min à 2 h', 'Contre-indiquée si troubles de déglutition ou vomissements ; formes LP à ne jamais écraser'],
              ['Sublinguale', '1 à 5 min', 'Évite le premier passage hépatique (trinitrine)'],
              ['Sous-cutanée', '15 à 30 min', 'Rotation des sites (insuline, héparine) ; ne pas masser après une héparine'],
              ['Intramusculaire', '10 à 20 min', 'Contre-indiquée sous anticoagulant efficace ou en cas de troubles de l’hémostase'],
              ['Intraveineuse', 'Immédiat', 'Aucun retour en arrière possible : vérifier compatibilité, dilution et vitesse'],
              ['Transdermique', 'Plusieurs heures', 'Retirer l’ancien patch, noter la date, varier les sites'],
              ['Rectale', '15 à 30 min', 'Absorption irrégulière ; contre-indiquée en cas de neutropénie ou de lésion rectale']
            ]
          },
          {
            type: 'piege', items: [
              'Écraser un comprimé **LP** (libération prolongée) ou **gastro-résistant** libère toute la dose d’un coup : risque de surdosage grave. Vérifier la liste des formes écrasables avant tout geste.',
              'La voie IM est contre-indiquée sous anticoagulation efficace : risque d’hématome profond.',
              'Ne pas masser après injection sous-cutanée d’héparine (hématome) ; ne pas purger la seringue préremplie.',
              'Un patch de fentanyl oublié en place double la dose administrée. Toujours retirer et tracer.'
            ]
          }
        ]
      },

      {
        id: 'f3', titre: 'Sécuriser l’administration : la règle des 5 B', duree: 8,
        motsCles: ['5B', 'erreur médicamenteuse', 'traçabilité', 'prescription'],
        blocs: [
          {
            type: 'etapes', items: [
              '**Bon patient** — identité vérifiée activement, en la faisant énoncer par la personne quand c’est possible.',
              '**Bon médicament** — dénomination commune internationale lue trois fois : à la prise, à la préparation, à l’élimination du contenant.',
              '**Bonne dose** — calcul refait, unités vérifiées.',
              '**Bonne voie** — la voie prescrite, pas celle qui est pratique.',
              '**Bon moment** — horaire, intervalle, relation avec les repas.'
            ]
          },
          {
            type: 'cle', items: [
              'On y ajoute couramment la **bonne traçabilité** : ce qui n’est pas tracé n’est pas fait, et une administration notée à l’avance est une faute.',
              'Une prescription doit être **écrite, datée, signée et lisible**. Une prescription orale n’est acceptable qu’en urgence, retranscrite immédiatement et signée dès que possible.',
              'Devant un doute — dose inhabituelle, association douteuse, écriture illisible — on n’administre pas : on appelle le prescripteur. Le doute n’est jamais une raison d’administrer.'
            ]
          },
          {
            type: 'piege', items: [
              'Ne jamais administrer un produit préparé par quelqu’un d’autre ni une seringue non étiquetée.',
              'Les médicaments à noms voisins (Lasilix/Lasix, morphine/hydromorphone, insulines Humalog/Humuline) sont une source majeure d’erreurs : lire la boîte entière, pas les trois premières lettres.',
              'Une erreur médicamenteuse se **déclare** : la sécurité du patient prime sur la crainte de la sanction, et l’analyse systémique est la seule façon d’éviter la récidive.'
            ]
          }
        ]
      },

      {
        id: 'f4', titre: 'Calculs de doses et de débits', duree: 20,
        motsCles: ['calcul de dose', 'débit', 'gouttes', 'perfusion', 'conversion', 'dilution'],
        accroche: 'La partie éliminatoire dans beaucoup d’IFSI. Elle ne demande pas d’intelligence, seulement de la méthode et de la répétition.',
        blocs: [
          {
            type: 'cle', titre: 'Conversions à connaître sans réfléchir', items: [
              '1 g = 1 000 mg = 1 000 000 µg · 1 mg = 1 000 µg',
              '1 L = 1 000 mL · 1 mL = 1 cm³',
              '1 % = 1 g pour 100 mL (donc NaCl 0,9 % = 0,9 g pour 100 mL = 9 g/L)',
              '1 mL = 20 gouttes pour un soluté clair (facteur usuel des perfuseurs standard)',
              '1 h = 60 min · 1 UI d’insuline rapide dans les seringues de 100 UI/mL = 0,01 mL'
            ]
          },
          {
            type: 'tableau', entetes: ['Ce qu’on cherche', 'Formule', 'Exemple'],
            lignes: [
              ['Volume à prélever', '(dose prescrite ÷ dose du contenant) × volume du contenant', 'Prescrit 350 mg ; flacon 500 mg/5 mL → (350/500) × 5 = **3,5 mL**'],
              ['Débit en mL/h', 'volume total (mL) ÷ durée (h)', '1 000 mL sur 8 h → **125 mL/h**'],
              ['Débit en gouttes/min', 'volume (mL) × 20 ÷ durée (min)', '500 mL sur 4 h → (500 × 20) / 240 = **41,7 ≈ 42 gouttes/min**'],
              ['Durée d’une perfusion', 'volume (mL) ÷ débit (mL/h)', '250 mL à 50 mL/h → **5 h**'],
              ['Dose selon le poids', 'posologie (mg/kg) × poids', '15 mg/kg pour 68 kg → **1 020 mg**'],
              ['Concentration d’une dilution', 'quantité totale ÷ volume total', '50 mg dans 50 mL → **1 mg/mL**']
            ]
          },
          {
            type: 'etapes', items: [
              'Lis l’énoncé deux fois et note ce qui est demandé (une dose ? un volume ? un débit ?).',
              'Écris toutes les données avec leurs unités.',
              'Convertis tout dans la même unité **avant** de calculer.',
              'Pose le produit en croix, même si le calcul paraît évident.',
              'Vérifie l’ordre de grandeur : 3 000 mL/h ou 0,0004 comprimé signalent une erreur.',
              'Réécris le résultat avec son unité — un nombre nu ne vaut aucun point.'
            ]
          },
          {
            type: 'piege', items: [
              '**90 % des erreurs sont des erreurs d’unité**, pas de calcul. Écris l’unité à chaque ligne.',
              'Attention à la différence entre concentration (mg/mL) et pourcentage (g/100 mL).',
              'Le facteur de gouttes change pour les transfusions (souvent 15 gouttes/mL) et les perfuseurs pédiatriques (60 gouttes/mL = microgouttes). Lire l’emballage.',
              'Pour l’insuline, on utilise **uniquement** une seringue à insuline graduée en UI. Jamais de conversion en mL à la main.'
            ]
          },
          {
            type: 'flash', items: [
              { q: '1 000 mL à passer en 8 h : quel débit en mL/h ?', a: '1 000 ÷ 8 = 125 mL/h.' },
              { q: '500 mL en 4 h avec un perfuseur à 20 gouttes/mL : combien de gouttes/min ?', a: '(500 × 20) ÷ 240 min = 41,6 → 42 gouttes/min.' },
              { q: 'Flacon 1 g/4 mL, prescription 600 mg. Volume à prélever ?', a: '600 mg = 0,6 g → (0,6/1) × 4 = 2,4 mL.' },
              { q: 'Que signifie NaCl 0,9 % ?', a: '0,9 g de NaCl pour 100 mL, soit 9 g par litre.' },
              { q: 'Amoxicilline 50 mg/kg/j en 3 prises pour 24 kg : dose par prise ?', a: '50 × 24 = 1 200 mg/j ÷ 3 = 400 mg par prise.' }
            ]
          }
        ]
      }
    ],

    qcm: [
      { id: 'q1', enonce: 'La pharmacocinétique désigne :', choix: ['ce que le médicament fait à l’organisme', 'ce que l’organisme fait au médicament', 'l’étude des effets indésirables', 'la mesure de l’efficacité clinique'], bonnes: [1], explication: 'Pharmacocinétique = devenir du médicament dans le corps (ADME). Pharmacodynamie = effets du médicament sur le corps. Cette distinction tombe presque à chaque partiel.', difficulte: 1 },
      { id: 'q2', enonce: 'Quelle voie d’administration a une biodisponibilité de 100 % ?', choix: ['Orale', 'Intramusculaire', 'Intraveineuse', 'Sous-cutanée'], bonnes: [2], explication: 'La voie IV délivre la totalité de la dose directement dans la circulation : biodisponibilité de 100 % par définition. La voie orale subit l’effet de premier passage hépatique.', difficulte: 1 },
      { id: 'q3', enonce: 'Un patient doit recevoir 1 000 mL de NaCl 0,9 % en 8 heures. Le débit est de :', choix: ['80 mL/h', '100 mL/h', '125 mL/h', '150 mL/h'], bonnes: [2], explication: '1 000 ÷ 8 = 125 mL/h. Si la pompe n’est pas disponible : 125 mL/h × 20 gouttes ÷ 60 min ≈ 42 gouttes/min.', difficulte: 1 },
      { id: 'q4', enonce: 'Il faut perfuser 500 mL en 4 heures avec un perfuseur à 20 gouttes/mL. Combien de gouttes par minute ?', choix: ['25', '31', '42', '50'], bonnes: [2], explication: '(500 mL × 20 gouttes) ÷ (4 × 60 min) = 10 000 ÷ 240 = 41,7 → 42 gouttes/min. Formule : volume × facteur ÷ durée en minutes.', difficulte: 2 },
      { id: 'q5', enonce: 'Prescription : 750 mg. Vous disposez d’un flacon de 1 g dilué dans 10 mL. Quel volume prélever ?', choix: ['5,5 mL', '7,5 mL', '8 mL', '0,75 mL'], bonnes: [1], explication: '1 g = 1 000 mg. (750 / 1 000) × 10 = 7,5 mL. Toujours convertir dans la même unité avant de poser le produit en croix.', difficulte: 2 },
      { id: 'q6', enonce: 'Que signifie une solution de glucose à 5 % ?', choix: ['5 g de glucose par litre', '5 g de glucose pour 100 mL', '5 mg de glucose par mL', '5 mL de glucose pour 100 mL'], bonnes: [1], explication: 'Un pourcentage massique correspond à des grammes pour 100 mL. G5 % = 5 g/100 mL = 50 g/L. Piège fréquent avec les g/L.', difficulte: 2 },
      { id: 'q7', enonce: 'Amoxicilline 80 mg/kg/j en 3 prises pour un enfant de 18 kg. Dose par prise :', choix: ['240 mg', '360 mg', '480 mg', '1 440 mg'], bonnes: [2], explication: '80 × 18 = 1 440 mg/j ; 1 440 ÷ 3 = 480 mg par prise. Vérifie toujours si la posologie est journalière ou par prise : c’est le piège de l’énoncé.', difficulte: 2 },
      { id: 'q8', enonce: 'Concernant les comprimés à libération prolongée (LP) :', choix: ['Ils peuvent être écrasés si le patient a des troubles de la déglutition', 'Les écraser expose à un surdosage brutal', 'Ils permettent d’espacer les prises', 'Ils sont toujours gastro-résistants'], bonnes: [1, 2], explication: 'Écraser un LP libère instantanément une dose prévue pour 12 ou 24 h : surdosage potentiellement mortel (morphiniques, inhibiteurs calciques). En cas de troubles de déglutition, on demande un changement de forme galénique.', difficulte: 2 },
      { id: 'q9', enonce: 'La voie intramusculaire est contre-indiquée :', choix: ['sous anticoagulation efficace', 'en cas de troubles de l’hémostase', 'chez le sujet âgé', 'en cas de déshydratation'], bonnes: [0, 1], explication: 'Risque d’hématome profond, parfois compressif. L’âge et la déshydratation ne sont pas en soi des contre-indications, même si la masse musculaire réduite impose de choisir le site avec soin.', difficulte: 2 },
      { id: 'q10', enonce: 'Que recouvre la règle des 5 B ?', choix: ['Bon patient, bon médicament, bonne dose, bonne voie, bon moment', 'Bon patient, bon prescripteur, bonne dose, bon flacon, bon horaire', 'Bonne prescription, bonne dilution, bon débit, bon site, bonne trace', 'Bon diagnostic, bon traitement, bonne surveillance, bon dossier, bon relais'], bonnes: [0], explication: 'Bon patient, bon médicament, bonne dose, bonne voie, bon moment. On y ajoute la bonne traçabilité : ce qui n’est pas tracé n’est pas fait.', difficulte: 1 },
      { id: 'q11', enonce: 'Une prescription illisible ou une dose inhabituelle :', choix: ['s’administre en respectant l’écrit', 'impose de contacter le prescripteur avant administration', 'peut être interprétée par l’IDE', 'justifie de reporter la dose sans en informer personne'], bonnes: [1], explication: 'Le doute impose l’arrêt et l’appel au prescripteur. L’infirmier engage sa responsabilité en administrant une prescription qu’il n’a pas comprise, comme en s’abstenant sans transmettre.', difficulte: 1 },
      { id: 'q12', enonce: 'L’état d’équilibre des concentrations plasmatiques est atteint après environ :', choix: ['1 demi-vie', '2 demi-vies', '5 demi-vies', '10 demi-vies'], bonnes: [2], explication: 'Environ 5 demi-vies, à posologie constante. Même règle pour l’élimination complète après l’arrêt du traitement.', difficulte: 2 },
      { id: 'q13', enonce: 'Quels médicaments ont une marge thérapeutique étroite nécessitant une surveillance biologique ?', choix: ['La digoxine', 'Le paracétamol', 'Le lithium', 'Les antivitamines K'], bonnes: [0, 2, 3], explication: 'Digoxine, lithium, AVK (INR), aminosides, anti-épileptiques : dosages et surveillance obligatoires. Le paracétamol a une marge large, mais reste hépatotoxique en cas de surdosage franc.', difficulte: 3 },
      { id: 'q14', enonce: 'Une hypoalbuminémie chez un patient traité par un médicament fortement lié aux protéines entraîne :', choix: ['une diminution de la fraction libre', 'une augmentation de la fraction libre active', 'un risque de surdosage', 'aucun effet pharmacologique'], bonnes: [1, 2], explication: 'Moins d’albumine, moins de sites de fixation : la fraction libre — la seule active — augmente, d’où un risque de surdosage à posologie inchangée. Situation fréquente chez le dénutri et le sujet âgé.', difficulte: 3 },
      { id: 'q15', enonce: 'Un patient de 70 kg doit recevoir un traitement à 15 mg/kg. Quelle dose totale ?', choix: ['105 mg', '150 mg', '1 050 mg', '1 500 mg'], bonnes: [2], explication: '15 × 70 = 1 050 mg. Vérifie ensuite la présentation disponible pour convertir en volume ou en nombre d’unités.', difficulte: 1 },
      { id: 'q16', enonce: 'Vous devez administrer 12 UI d’insuline rapide (flacon 100 UI/mL). Comment procéder ?', choix: ['Prélever 0,12 mL avec une seringue de 1 mL', 'Utiliser une seringue à insuline graduée en UI', 'Prélever 1,2 mL', 'Diluer dans 10 mL de NaCl'], bonnes: [1], explication: 'L’insuline se prélève uniquement avec une seringue à insuline graduée en UI, jamais par conversion manuelle en mL : le risque d’erreur d’un facteur 10 est trop élevé. Erreur classée « never event ».', difficulte: 2 },
      { id: 'q17', enonce: '250 mL doivent passer à 50 mL/h. Quelle est la durée de la perfusion ?', choix: ['2 h 30', '5 h', '4 h', '5 h 30'], bonnes: [1], explication: '250 ÷ 50 = 5 heures. Durée = volume ÷ débit.', difficulte: 1 },
      { id: 'q18', enonce: 'Les inhibiteurs enzymatiques (macrolides, azolés, jus de pamplemousse) :', choix: ['diminuent la concentration des médicaments associés', 'augmentent la concentration des médicaments associés', 'exposent à un risque de surdosage', 'sont sans conséquence clinique'], bonnes: [1, 2], explication: 'Les inhibiteurs ralentissent le métabolisme : les concentrations montent, d’où un risque de surdosage. Les inducteurs (rifampicine, millepertuis) font l’inverse et peuvent entraîner un échec thérapeutique.', difficulte: 3 }
    ]
  });
})();
