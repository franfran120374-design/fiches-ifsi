/* Module transversal — Bilans biologiques : normes et interprétation */
(function () {
  'use strict';

  FICHES.registerModule({
    id: 'bilans-biologiques',
    titre: 'Bilans biologiques : normes et lecture',
    etiquette: 'BIO',
    accroche: 'Les valeurs que tu dois reconnaître d’un coup d’œil, et ce qu’elles changent concrètement dans la surveillance.',
    motsCles: ['NFS', 'ionogramme', 'kaliémie', 'natrémie', 'créatinine', 'CRP', 'INR', 'hémostase', 'gaz du sang', 'bilan hépatique'],
    ues: ['UE 2.1 Biologie', 'UE 2.2 Grandes fonctions', 'UE 4.4 Contribution au diagnostic médical'],
    objectifs: [
      'Connaître les normes usuelles des examens courants',
      'Relier une anomalie biologique à une conduite infirmière',
      'Repérer les valeurs critiques imposant une alerte immédiate',
      'Éviter les erreurs pré-analytiques qui faussent un résultat'
    ],

    fiches: [
      {
        id: 'b1', titre: 'Numération formule sanguine', duree: 10,
        motsCles: ['NFS', 'hémoglobine', 'plaquettes', 'leucocytes', 'anémie', 'neutropénie'],
        blocs: [
          {
            type: 'tableau', entetes: ['Paramètre', 'Norme adulte', 'Ce que ça change pour toi'],
            lignes: [
              ['Hémoglobine', 'H : 13–17 g/dL · F : 12–16 g/dL', '< 8 g/dL : seuil transfusionnel fréquent · surveiller pâleur, dyspnée, tachycardie'],
              ['Hématocrite', 'H : 40–52 % · F : 37–47 %', 'Monte en déshydratation, baisse en hémodilution'],
              ['VGM', '80–100 fL', '< 80 microcytaire (carence en fer) · > 100 macrocytaire (B12, folates, alcool)'],
              ['Leucocytes', '4 000–10 000 /mm³', '> 10 000 : infection bactérienne, inflammation, corticoïdes'],
              ['Polynucléaires neutrophiles', '1 800–7 000 /mm³', '**< 500 : neutropénie sévère** → isolement protecteur, fièvre = urgence'],
              ['Plaquettes', '150 000–400 000 /mm³', '**< 50 000 : risque hémorragique** · < 20 000 : risque spontané, pas d’IM'],
              ['Réticulocytes', '25 000–100 000 /mm³', 'Élevés : anémie régénérative · bas : moelle en cause']
            ]
          },
          {
            type: 'cle', items: [
              'Une **neutropénie fébrile** est une urgence : fièvre chez un patient à moins de 500 PNN impose hémocultures et antibiothérapie sans attendre.',
              'Sous plaquettes basses : pas d’injection intramusculaire, pas de rasoir mécanique, brosse à dents souple, surveillance des points de ponction et des gencives.',
              'Une anémie chronique est souvent mieux tolérée qu’une anémie aiguë au même chiffre : c’est la tolérance clinique qui guide, pas le seul chiffre.'
            ]
          }
        ]
      },

      {
        id: 'b2', titre: 'Ionogramme, fonction rénale et glycémie', duree: 12,
        motsCles: ['sodium', 'potassium', 'calcium', 'créatinine', 'DFG', 'urée', 'glycémie', 'HbA1c'],
        blocs: [
          {
            type: 'tableau', entetes: ['Paramètre', 'Norme', 'Alerte'],
            lignes: [
              ['Natrémie', '135–145 mmol/L', '< 125 ou > 155 : troubles neurologiques, convulsions'],
              ['Kaliémie', '3,5–5 mmol/L', '**< 3 ou > 6 : risque de trouble du rythme → ECG et alerte immédiate**'],
              ['Calcémie totale', '2,20–2,60 mmol/L', 'À corriger selon l’albuminémie'],
              ['Chlore', '95–105 mmol/L', 'Suit généralement le sodium'],
              ['Créatininémie', '≈ 60–110 µmol/L', 'Interpréter par le DFG, pas seule'],
              ['DFG estimé', '> 90 mL/min/1,73 m²', '< 60 : insuffisance rénale chronique → adapter les posologies'],
              ['Urée', '2,5–7,5 mmol/L', 'Monte en déshydratation et en régime hyperprotidique'],
              ['Glycémie à jeun', '0,70–1,10 g/L (3,9–6,1 mmol/L)', '< 0,70 hypoglycémie · ≥ 1,26 à deux reprises : diabète'],
              ['HbA1c', '< 6 % chez le non-diabétique', 'Reflète 3 mois de glycémie ; cible souvent < 7 % chez le diabétique']
            ]
          },
          {
            type: 'cle', titre: 'Hyperkaliémie — la valeur qui doit te faire lever', items: [
              'Signes ECG : ondes T amples et pointues, puis élargissement du QRS, puis arrêt.',
              'Souvent asymptomatique jusqu’à l’accident rythmique : on ne se fie pas à l’absence de plainte.',
              'Causes fréquentes : insuffisance rénale, IEC/ARA2, spironolactone, AINS, apports potassiques, rhabdomyolyse.',
              'Une kaliémie élevée sur un prélèvement hémolysé ou avec garrot prolongé peut être fausse : on refait, mais **on ne l’ignore jamais** avant d’avoir la confirmation.'
            ]
          },
          {
            type: 'piege', items: [
              'Corriger une hyponatrémie trop vite expose à une myélinolyse centro-pontine : la vitesse compte autant que la cible.',
              'Une créatinine « normale » chez une personne âgée maigre peut masquer une insuffisance rénale : c’est le DFG qui décide de l’adaptation des doses.',
              'La kaliémie ne reflète que le secteur extracellulaire : elle peut être normale malgré une déplétion globale majeure.'
            ]
          }
        ]
      },

      {
        id: 'b3', titre: 'Hémostase, inflammation et bilan hépatique', duree: 12,
        motsCles: ['TP', 'INR', 'TCA', 'AVK', 'héparine', 'CRP', 'ASAT', 'ALAT', 'bilirubine', 'albumine'],
        blocs: [
          {
            type: 'tableau', entetes: ['Paramètre', 'Norme', 'Interprétation'],
            lignes: [
              ['TP', '70–100 %', 'Baisse : AVK, insuffisance hépatique, carence en vitamine K'],
              ['INR', '≈ 1 sans traitement', 'Cible usuelle sous AVK : **2 à 3** (2,5 à 3,5 pour certaines valves mécaniques)'],
              ['TCA', 'Ratio patient/témoin ≈ 1', 'Allongé sous héparine non fractionnée, hémophilie'],
              ['Anti-Xa', 'Selon protocole', 'Surveillance des HBPM chez l’insuffisant rénal ou les poids extrêmes'],
              ['Fibrinogène', '2–4 g/L', 'Protéine de l’inflammation, baisse en CIVD'],
              ['CRP', '< 5 mg/L', 'Monte en 6 à 12 h, se normalise vite : bon marqueur de suivi'],
              ['Procalcitonine', '< 0,5 ng/mL', 'Plus spécifique de l’origine bactérienne'],
              ['ASAT / ALAT', '< 40 UI/L', 'Cytolyse hépatique ; ASAT aussi d’origine musculaire et cardiaque'],
              ['GGT / PAL', 'GGT < 55 · PAL 40–130 UI/L', 'Cholestase, alcool'],
              ['Bilirubine totale', '< 17 µmol/L', 'Ictère visible au-delà de ≈ 50 µmol/L'],
              ['Albumine', '35–50 g/L', '< 30 : dénutrition, risque d’escarre et de retard de cicatrisation']
            ]
          },
          {
            type: 'cle', items: [
              '**INR** : plus il monte, plus le sang est fluide. INR > 5 sous AVK = risque hémorragique majeur, on alerte. INR < 2 = traitement inefficace.',
              'Prélèvement d’INR : à heure fixe, généralement le matin, et le résultat conditionne la dose du soir.',
              'La CRP suit l’évolution ; la procalcitonine oriente vers l’origine bactérienne. Aucune des deux ne remplace la clinique.',
              'Sous héparine non fractionnée : surveillance du TCA **et** de la numération plaquettaire (risque de thrombopénie induite par l’héparine).'
            ]
          },
          {
            type: 'flash', items: [
              { q: 'Cible d’INR usuelle sous AVK ?', a: 'Entre 2 et 3 dans la majorité des indications ; 2,5 à 3,5 pour certaines valves mécaniques.' },
              { q: 'Que surveille-t-on impérativement sous héparine non fractionnée ?', a: 'Le TCA (efficacité) et les plaquettes (thrombopénie induite par l’héparine).' },
              { q: 'À partir de quelle valeur les plaquettes exposent-elles à un risque hémorragique ?', a: 'En dessous de 50 000/mm³ ; risque spontané en dessous de 20 000.' },
              { q: 'Que signifie une albuminémie à 26 g/L ?', a: 'Dénutrition : retard de cicatrisation, risque d’escarre, fraction libre des médicaments augmentée.' }
            ]
          }
        ]
      },

      {
        id: 'b4', titre: 'Gaz du sang et erreurs pré-analytiques', duree: 10,
        motsCles: ['gaz du sang', 'pH', 'PaCO2', 'bicarbonates', 'acidose', 'alcalose', 'hémolyse'],
        blocs: [
          {
            type: 'tableau', entetes: ['Paramètre', 'Norme artérielle'],
            lignes: [
              ['pH', '7,35–7,45'],
              ['PaO₂', '80–100 mmHg'],
              ['PaCO₂', '35–45 mmHg'],
              ['Bicarbonates (HCO₃⁻)', '22–26 mmol/L'],
              ['Lactates', '< 2 mmol/L (> 4 : signe de gravité)'],
              ['SaO₂', '> 95 %']
            ]
          },
          {
            type: 'etapes', titre: 'Lire un gaz du sang en trois questions', items: [
              '**Le pH ?** < 7,35 acidose · > 7,45 alcalose.',
              '**Qui explique ?** Si la PaCO₂ varie dans le sens inverse du pH → origine respiratoire. Si les bicarbonates varient dans le même sens que le pH → origine métabolique.',
              '**Est-ce compensé ?** Le pH revenu dans la norme avec les deux paramètres perturbés signe une compensation.'
            ]
          },
          {
            type: 'tableau', entetes: ['Trouble', 'pH', 'PaCO₂', 'HCO₃⁻', 'Exemple'],
            lignes: [
              ['Acidose respiratoire', '↓', '↑', 'normal ou ↑', 'BPCO décompensée, hypoventilation'],
              ['Alcalose respiratoire', '↑', '↓', 'normal ou ↓', 'Hyperventilation, anxiété, embolie pulmonaire'],
              ['Acidose métabolique', '↓', 'normal ou ↓', '↓', 'Acidocétose, insuffisance rénale, état de choc'],
              ['Alcalose métabolique', '↑', 'normal ou ↑', '↑', 'Vomissements prolongés, diurétiques']
            ]
          },
          {
            type: 'piege', titre: 'Les erreurs qui faussent un bilan avant même le laboratoire', items: [
              'Garrot laissé plus d’une minute → fausse hyperkaliémie, fausse hypercalcémie.',
              'Prélèvement en amont d’une perfusion → dilution et résultats aberrants.',
              'Tube secoué au lieu d’être retourné → hémolyse : kaliémie, LDH et bilirubine faussement élevées.',
              'Tube citrate mal rempli → hémostase ininterprétable.',
              'Délai d’acheminement trop long → potassium et glycémie faussés.',
              'Bulle d’air dans la seringue de gaz du sang, ou seringue non purgée → PaO₂ faussée.'
            ]
          },
          { type: 'cle', texte: 'Devant un résultat qui ne colle pas à la clinique, la première hypothèse est **pré-analytique**, pas biologique. On refait le prélèvement dans de bonnes conditions avant de conclure — sans jamais négliger une valeur critique en attendant.' }
        ]
      }
    ],

    qcm: [
      { id: 'bq1', enonce: 'Quelle est la norme de la kaliémie ?', choix: ['1,5–2,5 mmol/L', '3,5–5 mmol/L', '135–145 mmol/L', '7–11 mmol/L'], bonnes: [1], explication: '3,5 à 5 mmol/L. Le 135–145 correspond au sodium. En dessous de 3 ou au-dessus de 6 : risque rythmique, ECG et alerte immédiate.', difficulte: 1 },
      { id: 'bq2', enonce: 'Une hyperkaliémie à 6,4 mmol/L chez un patient asymptomatique :', choix: ['peut être surveillée jusqu’au lendemain', 'impose une alerte et un ECG immédiats', 'est fréquente chez l’insuffisant rénal', 'peut être un artefact d’hémolyse'], bonnes: [1, 2, 3], explication: 'L’hyperkaliémie est souvent muette jusqu’à l’accident rythmique. Même si une hémolyse ou un garrot prolongé peuvent la fausser, on alerte et on fait un ECG avant de refaire le prélèvement.', difficulte: 3 },
      { id: 'bq3', enonce: 'À partir de quelle valeur de plaquettes le risque hémorragique devient-il significatif ?', choix: ['< 150 000/mm³', '< 100 000/mm³', '< 50 000/mm³', '< 400 000/mm³'], bonnes: [2], explication: 'En dessous de 50 000/mm³ le risque devient significatif, et spontané sous 20 000. Conduite : pas d’IM, pas de rasoir mécanique, brosse à dents souple, surveillance des muqueuses.', difficulte: 2 },
      { id: 'bq4', enonce: 'Une neutropénie sévère correspond à un taux de polynucléaires neutrophiles :', choix: ['< 1 800/mm³', '< 1 000/mm³', '< 500/mm³', '< 4 000/mm³'], bonnes: [2], explication: 'Moins de 500 PNN/mm³. Toute fièvre dans ce contexte est une urgence : hémocultures et antibiothérapie sans attendre les résultats.', difficulte: 3 },
      { id: 'bq5', enonce: 'La cible habituelle d’INR sous AVK est :', choix: ['0,8 à 1,2', '2 à 3', '4 à 5', '> 5'], bonnes: [1], explication: '2 à 3 dans la majorité des indications (2,5 à 3,5 pour certaines valves mécaniques). En dessous de 2, le traitement est inefficace ; au-dessus de 5, risque hémorragique majeur.', difficulte: 2 },
      { id: 'bq6', enonce: 'Sous héparine non fractionnée, on surveille :', choix: ['le TCA', 'l’INR', 'la numération plaquettaire', 'la CRP'], bonnes: [0, 2], explication: 'TCA pour l’efficacité et plaquettes pour dépister une thrombopénie induite par l’héparine. L’INR surveille les AVK, pas l’héparine.', difficulte: 3 },
      { id: 'bq7', enonce: 'Un VGM à 72 fL oriente vers :', choix: ['une anémie macrocytaire', 'une anémie microcytaire', 'une carence en vitamine B12', 'une carence martiale'], bonnes: [1, 3], explication: 'VGM < 80 fL : microcytose, le plus souvent par carence en fer. La macrocytose (> 100) oriente vers B12, folates ou alcool.', difficulte: 2 },
      { id: 'bq8', enonce: 'Une albuminémie à 27 g/L signifie :', choix: ['une dénutrition', 'un risque accru d’escarre', 'une augmentation de la fraction libre des médicaments liés aux protéines', 'un état inflammatoire isolé sans conséquence'], bonnes: [0, 1, 2], explication: 'Norme 35–50 g/L. Sous 30 : dénutrition, retard de cicatrisation, risque d’escarre, et fraction libre médicamenteuse augmentée donc risque de surdosage.', difficulte: 3 },
      { id: 'bq9', enonce: 'Un pH à 7,28 avec une PaCO₂ à 58 mmHg correspond à :', choix: ['une acidose métabolique', 'une acidose respiratoire', 'une alcalose respiratoire', 'une alcalose métabolique'], bonnes: [1], explication: 'pH bas et PaCO₂ haute : acidose respiratoire, par hypoventilation (BPCO décompensée, dépression respiratoire). Le CO₂ varie en sens inverse du pH → origine respiratoire.', difficulte: 3 },
      { id: 'bq10', enonce: 'Un pH à 7,29 avec des bicarbonates à 14 mmol/L évoque :', choix: ['une acidose respiratoire', 'une acidose métabolique', 'une alcalose métabolique', 'une acidocétose diabétique possible'], bonnes: [1, 3], explication: 'pH bas et bicarbonates bas (même sens) : acidose métabolique. Causes fréquentes : acidocétose, insuffisance rénale, état de choc avec hyperlactatémie.', difficulte: 3 },
      { id: 'bq11', enonce: 'Un taux de lactates supérieur à 4 mmol/L traduit :', choix: ['un bon état hémodynamique', 'un signe de gravité, souvent une hypoperfusion tissulaire', 'une alcalose', 'une simple déshydratation'], bonnes: [1], explication: 'Norme < 2 mmol/L. Au-delà de 4, hypoperfusion tissulaire : marqueur de gravité dans le sepsis et les états de choc, et bon indicateur de la réponse au traitement.', difficulte: 3 },
      { id: 'bq12', enonce: 'Quelles situations faussent un ionogramme ?', choix: ['Un garrot laissé 3 minutes', 'Un tube secoué énergiquement', 'Un prélèvement en amont d’une perfusion', 'Un tube acheminé immédiatement'], bonnes: [0, 1, 2], explication: 'Garrot prolongé (hémoconcentration), hémolyse par agitation (fausse hyperkaliémie), prélèvement en amont d’une perfusion (dilution). L’acheminement rapide est au contraire ce qu’il faut faire.', difficulte: 2 },
      { id: 'bq13', enonce: 'La CRP :', choix: ['s’élève en 6 à 12 heures', 'reste élevée plusieurs semaines après guérison', 'est utile au suivi de l’évolution', 'est spécifique d’une infection bactérienne'], bonnes: [0, 2], explication: 'La CRP monte vite et redescend vite : c’est un bon marqueur de suivi. Elle n’est pas spécifique du bactérien — la procalcitonine l’est davantage.', difficulte: 2 },
      { id: 'bq14', enonce: 'Un DFG estimé à 42 mL/min/1,73 m² impose :', choix: ['aucune modification thérapeutique', 'd’adapter la posologie des médicaments à élimination rénale', 'de vérifier les prescriptions de produits de contraste', 'de surveiller la kaliémie'], bonnes: [1, 2, 3], explication: 'Insuffisance rénale modérée : adaptation des posologies (HBPM, metformine, aminosides), prudence avec les produits de contraste et les AINS, surveillance du potassium.', difficulte: 3 },
      { id: 'bq15', enonce: 'Le seuil transfusionnel fréquemment retenu chez un patient sans comorbidité est une hémoglobine autour de :', choix: ['12 g/dL', '10 g/dL', '7 à 8 g/dL', '5 g/dL'], bonnes: [2], explication: 'Le seuil habituel se situe autour de 7 à 8 g/dL, relevé en cas de coronaropathie ou de mauvaise tolérance. La tolérance clinique prime sur le seul chiffre.', difficulte: 3 }
    ]
  });
})();
