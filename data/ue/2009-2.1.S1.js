/* UE 2.1.S1 — Biologie fondamentale */
(function () {
  'use strict';

  var SVG_CELLULE =
    '<svg viewBox="0 0 620 300" role="img" aria-label="Schéma de la cellule eucaryote">' +
    '<ellipse cx="310" cy="150" rx="270" ry="128" fill="var(--accent-soft)" stroke="var(--accent)" stroke-width="2"/>' +
    '<circle cx="250" cy="145" r="52" fill="var(--bg-elev)" stroke="var(--violet)" stroke-width="2.5"/>' +
    '<circle cx="250" cy="145" r="18" fill="var(--violet)" opacity=".35"/>' +
    '<ellipse cx="410" cy="105" rx="42" ry="20" fill="none" stroke="var(--rose)" stroke-width="2.5"/>' +
    '<path d="M375 105 q10 -9 18 0 q10 9 20 0 q10 -9 20 0" fill="none" stroke="var(--rose)" stroke-width="2"/>' +
    '<path d="M330 215 q30 -22 62 0 q30 22 62 0" fill="none" stroke="var(--green)" stroke-width="2.5"/>' +
    '<circle cx="160" cy="205" r="16" fill="var(--amber)" opacity=".55"/>' +
    '<circle cx="455" cy="185" r="13" fill="var(--blue)" opacity=".5"/>' +
    '<text x="250" y="80" text-anchor="middle" font-size="13" fill="var(--txt-2)">Noyau (ADN)</text>' +
    '<text x="410" y="78" text-anchor="middle" font-size="13" fill="var(--txt-2)">Mitochondrie</text>' +
    '<text x="392" y="248" text-anchor="middle" font-size="13" fill="var(--txt-2)">Réticulum endoplasmique</text>' +
    '<text x="160" y="245" text-anchor="middle" font-size="13" fill="var(--txt-2)">Lysosome</text>' +
    '<text x="497" y="190" text-anchor="middle" font-size="13" fill="var(--txt-2)">Ribosome</text>' +
    '<text x="310" y="42" text-anchor="middle" font-size="13" fill="var(--txt-3)">Membrane plasmique (bicouche lipidique)</text>' +
    '</svg>';

  var SVG_ADN =
    '<svg viewBox="0 0 620 210" role="img" aria-label="Du gène à la protéine">' +
    '<rect x="20" y="70" width="130" height="66" rx="10" fill="var(--accent-soft)" stroke="var(--accent)" stroke-width="2"/>' +
    '<text x="85" y="98" text-anchor="middle" font-size="14" font-weight="700" fill="var(--txt)">ADN</text>' +
    '<text x="85" y="118" text-anchor="middle" font-size="12" fill="var(--txt-2)">noyau</text>' +
    '<rect x="245" y="70" width="130" height="66" rx="10" fill="var(--accent-soft)" stroke="var(--violet)" stroke-width="2"/>' +
    '<text x="310" y="98" text-anchor="middle" font-size="14" font-weight="700" fill="var(--txt)">ARNm</text>' +
    '<text x="310" y="118" text-anchor="middle" font-size="12" fill="var(--txt-2)">sort du noyau</text>' +
    '<rect x="470" y="70" width="130" height="66" rx="10" fill="var(--accent-soft)" stroke="var(--green)" stroke-width="2"/>' +
    '<text x="535" y="98" text-anchor="middle" font-size="14" font-weight="700" fill="var(--txt)">Protéine</text>' +
    '<text x="535" y="118" text-anchor="middle" font-size="12" fill="var(--txt-2)">ribosome</text>' +
    '<path d="M155 103 h82" stroke="var(--txt-3)" stroke-width="2" marker-end="url(#fl21)"/>' +
    '<path d="M380 103 h82" stroke="var(--txt-3)" stroke-width="2" marker-end="url(#fl21)"/>' +
    '<text x="196" y="60" text-anchor="middle" font-size="12.5" fill="var(--accent)">transcription</text>' +
    '<text x="421" y="60" text-anchor="middle" font-size="12.5" fill="var(--accent)">traduction</text>' +
    '<defs><marker id="fl21" markerWidth="9" markerHeight="9" refX="8" refY="3" orient="auto">' +
    '<path d="M0,0 L8,3 L0,6 z" fill="var(--txt-3)"/></marker></defs>' +
    '</svg>';

  FICHES.registerUE({
    ref: '2009', ue: '2.1.S1',
    objectifs: [
      'Décrire l’organisation de la cellule et le rôle de ses principaux organites',
      'Expliquer les échanges membranaires et leurs conséquences cliniques',
      'Comprendre le passage du gène à la protéine et la notion de mutation',
      'Situer les niveaux d’organisation du corps humain : cellule, tissu, organe, système'
    ],

    fiches: [
      {
        id: 'f1', titre: 'La cellule et ses organites', duree: 10,
        motsCles: ['cellule', 'organite', 'mitochondrie', 'noyau', 'lysosome', 'membrane'],
        accroche: 'Tout ce que tu observeras en clinique — une fièvre, un œdème, une cicatrisation — commence ici.',
        blocs: [
          { type: 'schema', svg: SVG_CELLULE, legende: 'Cellule eucaryote : les structures à savoir nommer et situer.' },
          {
            type: 'tableau', entetes: ['Organite', 'Rôle', 'Retombée clinique'],
            lignes: [
              ['Noyau', 'Contient l’ADN, pilote la synthèse protéique', 'Cible des chimiothérapies et des radiations'],
              ['Mitochondrie', 'Production d’ATP (respiration cellulaire)', 'Cellules riches en mitochondries = myocarde, muscle, neurone → les premières à souffrir de l’hypoxie'],
              ['Réticulum endoplasmique rugueux', 'Synthèse des protéines (couvert de ribosomes)', 'Très développé dans les cellules sécrétrices (pancréas, plasmocytes)'],
              ['Appareil de Golgi', 'Maturation et adressage des protéines', 'Sécrétion des hormones, des enzymes digestives'],
              ['Lysosome', 'Digestion intracellulaire (enzymes acides)', 'Maladies de surcharge lysosomale ; rôle dans la phagocytose'],
              ['Membrane plasmique', 'Barrière sélective, récepteurs, transport', 'Site d’action de la majorité des médicaments']
            ]
          },
          {
            type: 'cle', items: [
              'La cellule humaine est **eucaryote** : ADN enfermé dans un noyau. La bactérie est **procaryote** : pas de noyau — c’est ce qui rend certains antibiotiques sélectifs.',
              'Les hématies matures n’ont **ni noyau ni mitochondrie** : elles ne peuvent pas se réparer ni se diviser, d’où une durée de vie de 120 jours.',
              'Plus une cellule consomme d’énergie, plus elle est vulnérable au manque d’oxygène. Le neurone lâche en 3 à 5 minutes.'
            ]
          },
          {
            type: 'flash', items: [
              { q: 'Quel organite produit l’ATP ?', a: 'La mitochondrie, par la respiration cellulaire (chaîne respiratoire).' },
              { q: 'Quelle cellule humaine n’a pas de noyau ?', a: 'L’hématie mature (globule rouge).' },
              { q: 'Où se fait la synthèse des protéines ?', a: 'Sur les ribosomes, libres dans le cytoplasme ou fixés au réticulum endoplasmique rugueux.' },
              { q: 'Quelle structure rend la bactérie différente de la cellule humaine ?', a: 'Absence de noyau (procaryote) et présence d’une paroi bactérienne — cible des bêta-lactamines.' }
            ]
          }
        ]
      },

      {
        id: 'f2', titre: 'Membrane, échanges et milieu intérieur', duree: 12,
        motsCles: ['osmose', 'diffusion', 'transport actif', 'tonicité', 'hypotonique', 'sodium', 'potassium'],
        accroche: 'La base physiologique des perfusions, des œdèmes et des troubles ioniques.',
        blocs: [
          { type: 'def', texte: '**Osmose** : déplacement passif de l’eau à travers une membrane semi-perméable, du milieu le moins concentré en solutés vers le plus concentré. L’eau suit le sel.' },
          {
            type: 'tableau', entetes: ['Mécanisme', 'Énergie ?', 'Exemple'],
            lignes: [
              ['Diffusion simple', 'Non', 'O₂ et CO₂ au niveau alvéolaire'],
              ['Diffusion facilitée', 'Non (canal ou transporteur)', 'Entrée du glucose dans la cellule (GLUT)'],
              ['Osmose', 'Non', 'Mouvements d’eau entre secteurs, aquaporines rénales'],
              ['Transport actif', 'Oui (ATP)', 'Pompe Na⁺/K⁺ ATPase : 3 Na⁺ sortent, 2 K⁺ entrent'],
              ['Endocytose / exocytose', 'Oui', 'Phagocytose d’une bactérie par un macrophage']
            ]
          },
          {
            type: 'tableau', entetes: ['Soluté perfusé', 'Tonicité', 'Effet sur la cellule'],
            lignes: [
              ['NaCl 0,9 %', 'Isotonique', 'Aucun mouvement net : expansion du secteur extracellulaire'],
              ['Glucose 5 %', 'Isotonique au départ, hypotonique après métabolisation', 'L’eau entre dans la cellule : hydratation intracellulaire'],
              ['NaCl 3 %, mannitol', 'Hypertonique', 'L’eau sort de la cellule : la cellule se rétracte (usage en œdème cérébral)'],
              ['Eau pour préparation injectable pure', 'Hypotonique', 'Jamais en IV directe : hémolyse']
            ]
          },
          {
            type: 'piege', items: [
              'Le glucose 5 % **n’est pas** un soluté de remplissage vasculaire : il diffuse dans tous les secteurs.',
              'Une hyponatrémie corrigée trop vite expose à une myélinolyse centro-pontine. La vitesse compte autant que la cible.',
              'Le potassium est essentiellement **intracellulaire** : une kaliémie normale n’exclut pas une déplétion potassique globale.'
            ]
          },
          {
            type: 'cle', items: [
              'Répartition de l’eau : ≈ 60 % du poids corporel, dont 2/3 en intracellulaire et 1/3 en extracellulaire (lui-même ¾ interstitiel, ¼ plasmatique).',
              'Natrémie normale : 135–145 mmol/L. Kaliémie : 3,5–5 mmol/L. Ces deux chiffres se retiennent le premier jour et servent trois ans.'
            ]
          }
        ]
      },

      {
        id: 'f3', titre: 'Du gène à la protéine', duree: 8,
        motsCles: ['ADN', 'ARN', 'gène', 'mutation', 'mitose', 'méiose', 'chromosome'],
        blocs: [
          { type: 'schema', svg: SVG_ADN, legende: 'Transcription puis traduction : le dogme central de la biologie moléculaire.' },
          {
            type: 'liste', items: [
              '**ADN** : double hélice, bases A-T et C-G, 46 chromosomes (23 paires) dans les cellules somatiques.',
              '**Transcription** : dans le noyau, l’ADN est copié en ARN messager.',
              '**Traduction** : dans le cytoplasme, le ribosome lit l’ARNm par triplets (codons) et assemble les acides aminés.',
              '**Mutation** : modification de la séquence. Silencieuse, faux-sens, non-sens, ou décalage du cadre de lecture.'
            ]
          },
          {
            type: 'tableau', entetes: ['', 'Mitose', 'Méiose'],
            lignes: [
              ['But', 'Croissance, renouvellement, réparation', 'Production des gamètes'],
              ['Cellules filles', '2, identiques', '4, génétiquement différentes'],
              ['Nombre de chromosomes', '46 → 46 (diploïde)', '46 → 23 (haploïde)']
            ]
          },
          { type: 'mnemo', texte: 'Ordre des phases de la mitose : **P**rophase, **M**étaphase, **A**naphase, **T**élophase → « **P**etit **M**algré **A**vec **T**out ».' },
          {
            type: 'flash', items: [
              { q: 'Combien de chromosomes dans une cellule somatique humaine ?', a: '46, soit 23 paires.' },
              { q: 'Où a lieu la transcription ? Et la traduction ?', a: 'Transcription dans le noyau, traduction dans le cytoplasme sur les ribosomes.' },
              { q: 'Quelle division produit les gamètes ?', a: 'La méiose : 4 cellules haploïdes (23 chromosomes).' }
            ]
          }
        ]
      },

      {
        id: 'f4', titre: 'Les niveaux d’organisation du corps', duree: 6,
        motsCles: ['tissu', 'épithélium', 'organe', 'système', 'homéostasie'],
        blocs: [
          { type: 'para', texte: 'Cellule → tissu → organe → système → organisme. À chaque niveau, une défaillance a une traduction clinique différente.' },
          {
            type: 'tableau', entetes: ['Tissu', 'Fonction', 'Exemple'],
            lignes: [
              ['Épithélial', 'Revêtement, protection, sécrétion, absorption', 'Peau, muqueuse digestive, glandes'],
              ['Conjonctif', 'Soutien, nutrition, défense', 'Os, sang, tissu adipeux, cartilage'],
              ['Musculaire', 'Contraction', 'Strié squelettique, strié cardiaque, lisse'],
              ['Nerveux', 'Conduction de l’influx', 'Neurones et cellules gliales']
            ]
          },
          { type: 'def', texte: '**Homéostasie** : maintien d’un milieu intérieur stable (température, pH, glycémie, osmolarité) malgré les variations extérieures. Presque toute la physiologie est une boucle de régulation qui sert l’homéostasie.' },
          {
            type: 'cle', items: [
              'Le sang est un tissu **conjonctif** — question piège fréquente.',
              'Le muscle cardiaque est strié mais involontaire : c’est le seul de ce type.',
              'Toute boucle de régulation comporte un capteur, un centre intégrateur et un effecteur. Sache en donner un exemple (glycémie, thermorégulation).'
            ]
          }
        ]
      }
    ],

    qcm: [
      { id: 'q1', enonce: 'Quel organite est responsable de la production d’ATP ?', choix: ['Le lysosome', 'La mitochondrie', 'L’appareil de Golgi', 'Le noyau'], bonnes: [1], explication: 'La mitochondrie réalise la respiration cellulaire et fournit l’essentiel de l’ATP. Les cellules très consommatrices (myocarde, neurone, muscle) en sont riches et souffrent les premières de l’hypoxie.', difficulte: 1 },
      { id: 'q2', enonce: 'Concernant l’hématie mature, quelles affirmations sont exactes ?', choix: ['Elle possède un noyau', 'Elle est dépourvue de mitochondrie', 'Sa durée de vie est d’environ 120 jours', 'Elle peut se diviser'], bonnes: [1, 2], explication: 'L’hématie mature perd son noyau et ses mitochondries lors de l’érythropoïèse. Elle ne peut donc ni se réparer ni se diviser, d’où une durée de vie limitée à environ 120 jours.', difficulte: 2 },
      { id: 'q3', enonce: 'L’osmose correspond au déplacement :', choix: ['de solutés du milieu concentré vers le milieu dilué', 'd’eau du milieu le moins concentré en solutés vers le plus concentré', 'de solutés contre un gradient, avec consommation d’ATP', 'd’eau du milieu le plus concentré vers le moins concentré'], bonnes: [1], explication: 'L’osmose est un mouvement d’EAU, passif, vers le compartiment le plus concentré en solutés. Formule mémo : « l’eau suit le sel ».', difficulte: 1 },
      { id: 'q4', enonce: 'La pompe Na⁺/K⁺ ATPase :', choix: ['fonctionne sans énergie', 'fait sortir 3 Na⁺ et entrer 2 K⁺', 'fait entrer 3 Na⁺ et sortir 2 K⁺', 'est un exemple de transport actif'], bonnes: [1, 3], explication: 'Transport actif primaire : consommation d’ATP pour expulser 3 Na⁺ et faire entrer 2 K⁺. C’est ce qui maintient le potassium en position intracellulaire et le sodium en extracellulaire.', difficulte: 2 },
      { id: 'q5', enonce: 'Quelle solution est hypertonique ?', choix: ['NaCl 0,9 %', 'Glucose 5 %', 'NaCl 3 %', 'Ringer lactate'], bonnes: [2], explication: 'Le NaCl 3 % est hypertonique : il attire l’eau hors des cellules. Utilisé notamment dans l’œdème cérébral et certaines hyponatrémies sévères, sous surveillance rapprochée.', difficulte: 2 },
      { id: 'q6', enonce: 'À propos du glucose 5 % :', choix: ['C’est un bon soluté de remplissage vasculaire', 'Après métabolisation du glucose, il se comporte comme de l’eau libre', 'Il hydrate le secteur intracellulaire', 'Il est contre-indiqué en cas d’hyperglycémie non contrôlée'], bonnes: [1, 2, 3], explication: 'Le G5 % n’est PAS un soluté de remplissage : le glucose est métabolisé et il ne reste que de l’eau, qui se répartit dans tous les secteurs, dont l’intracellulaire. Le remplissage se fait avec des cristalloïdes isotoniques (NaCl 0,9 %, Ringer lactate).', difficulte: 3 },
      { id: 'q7', enonce: 'La transcription de l’ADN en ARN messager a lieu :', choix: ['dans le cytoplasme', 'dans le noyau', 'sur le ribosome', 'dans la mitochondrie uniquement'], bonnes: [1], explication: 'La transcription se déroule dans le noyau ; l’ARNm en sort ensuite pour être traduit en protéine par les ribosomes, dans le cytoplasme.', difficulte: 1 },
      { id: 'q8', enonce: 'La méiose :', choix: ['produit 2 cellules identiques', 'produit 4 cellules haploïdes', 'concerne les cellules somatiques', 'permet le brassage génétique'], bonnes: [1, 3], explication: 'La méiose est la division des cellules germinales : elle donne 4 gamètes haploïdes (23 chromosomes) génétiquement différents. La mitose, elle, donne 2 cellules diploïdes identiques.', difficulte: 2 },
      { id: 'q9', enonce: 'Le sang appartient à quel type de tissu ?', choix: ['Épithélial', 'Conjonctif', 'Musculaire', 'Nerveux'], bonnes: [1], explication: 'Le sang est un tissu conjonctif à matrice liquide (le plasma). Question piège très fréquente en évaluation d’UE 2.1.', difficulte: 2 },
      { id: 'q10', enonce: 'L’eau représente environ quelle proportion du poids corporel de l’adulte, et comment se répartit-elle ?', choix: ['40 %, dont 1/3 intracellulaire', '60 %, dont 2/3 intracellulaire', '60 %, dont 2/3 extracellulaire', '80 %, réparti à parts égales'], bonnes: [1], explication: 'Environ 60 % du poids corporel chez l’adulte, dont 2/3 dans le secteur intracellulaire et 1/3 dans l’extracellulaire (¾ interstitiel, ¼ plasmatique).', difficulte: 2 },
      { id: 'q11', enonce: 'Quelles cellules sont les plus rapidement touchées par une hypoxie ?', choix: ['Les neurones', 'Les cellules myocardiques', 'Les adipocytes', 'Les cellules de l’épiderme'], bonnes: [0, 1], explication: 'Les tissus à forte demande énergétique (cerveau, myocarde) souffrent en quelques minutes. Le neurone subit des lésions irréversibles en 3 à 5 minutes d’anoxie complète.', difficulte: 2 },
      { id: 'q12', enonce: 'La cellule bactérienne se distingue de la cellule humaine par :', choix: ['l’absence de noyau individualisé', 'la présence d’une paroi', 'la présence de mitochondries', 'un ADN circulaire'], bonnes: [0, 1, 3], explication: 'La bactérie est procaryote : ADN circulaire libre dans le cytoplasme, pas de noyau, pas de mitochondrie, mais une paroi — cible des bêta-lactamines et des glycopeptides.', difficulte: 3 },
      { id: 'q13', enonce: 'L’homéostasie désigne :', choix: ['la stabilité du milieu intérieur', 'la coagulation du sang', 'l’équilibre entre apports et pertes hydriques uniquement', 'un mécanisme de régulation à boucle'], bonnes: [0, 3], explication: 'L’homéostasie est le maintien d’un milieu intérieur stable (température, pH, glycémie, osmolarité) par des boucles capteur → centre intégrateur → effecteur. L’hémostase, elle, concerne la coagulation : ne pas confondre les deux mots.', difficulte: 2 },
      { id: 'q14', enonce: 'Quel tissu assure le revêtement des cavités et la sécrétion glandulaire ?', choix: ['Le tissu conjonctif', 'Le tissu épithélial', 'Le tissu musculaire lisse', 'Le tissu nerveux'], bonnes: [1], explication: 'L’épithélium assure revêtement, protection, absorption et sécrétion. Il est avasculaire et repose sur une lame basale, nourri par le conjonctif sous-jacent.', difficulte: 1 },
      { id: 'q15', enonce: 'Le potassium :', choix: ['est principalement extracellulaire', 'est principalement intracellulaire', 'a une valeur plasmatique normale entre 3,5 et 5 mmol/L', 'peut être normal au bilan malgré une déplétion globale'], bonnes: [1, 2, 3], explication: '98 % du potassium est intracellulaire. La kaliémie ne reflète donc que le stock extracellulaire : elle peut être normale alors que le capital potassique est effondré (diarrhées prolongées, diurétiques).', difficulte: 3 }
    ]
  });
})();
