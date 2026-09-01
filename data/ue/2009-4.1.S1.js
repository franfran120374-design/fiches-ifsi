/* UE 4.1.S1 — Soins de confort et de bien-être */
(function () {
  'use strict';

  FICHES.registerUE({
    ref: '2009', ue: '4.1.S1',
    objectifs: [
      'Réaliser les soins d’hygiène et de confort dans le respect de la personne',
      'Installer et mobiliser une personne en sécurité, pour elle et pour soi',
      'Évaluer et prendre en compte la douleur, le sommeil et l’alimentation',
      'Repérer les besoins perturbés et adapter le niveau d’aide'
    ],

    fiches: [
      {
        id: 'c1', titre: 'Toilette et soins d’hygiène', duree: 12,
        motsCles: ['toilette', 'hygiène', 'pudeur', 'autonomie', 'soins de bouche', 'peau'],
        accroche: 'Le soin le plus banal en apparence, et celui où l’on observe le plus : peau, mobilité, humeur, douleur, autonomie.',
        blocs: [
          {
            type: 'etapes', items: [
              'Prévenir, expliquer, obtenir l’accord. Un soin d’hygiène imposé sans explication est une atteinte à la dignité.',
              'Préparer le matériel avant d’entrer : éviter les allers-retours qui laissent la personne découverte.',
              'Fermer la porte, tirer le rideau, ne découvrir que la zone lavée.',
              'Température de la pièce et de l’eau vérifiée (eau à environ 37 °C, testée au coude ou au thermomètre).',
              'Laver du **plus propre vers le plus sale** : visage, haut du corps, membres, dos, puis génito-anal en dernier, avec un gant dédié.',
              'Rincer, **sécher soigneusement**, en insistant sur les plis (sous-mammaire, inguinal, interdigital) : la macération fait le lit des mycoses et des escarres.',
              'Observer l’état cutané des points d’appui pendant le soin et tracer.',
              'Habiller, réinstaller confortablement, mettre à portée sonnette, verre d’eau, lunettes, aides techniques.'
            ]
          },
          {
            type: 'cle', items: [
              'Faire **avec** et non **à la place de** : chaque geste que la personne peut faire seule doit lui être laissé, même si c’est plus lent. L’autonomie perdue en institution se récupère mal.',
              '**Soins de bouche** : au moins deux fois par jour, davantage chez le patient à jeun, sous oxygène ou en fin de vie. La bouche sèche est une des premières causes d’inconfort, et un facteur de pneumopathie.',
              'Pas d’eau chaude ni de savon décapant sur une peau âgée : elle est fine, sèche et fragile. Savon surgras, séchage par tamponnement, hydratation.',
              'Les ongles se coupent droit, surtout chez le diabétique ; en cas d’artériopathie ou de neuropathie, on ne coupe pas soi-même les ongles des pieds.'
            ]
          },
          {
            type: 'piege', items: [
              'Laver le siège avec le même gant que le reste du corps : faute d’hygiène majeure.',
              'Frictionner une rougeur d’appui pour « activer la circulation » : cela aggrave l’ischémie.',
              'Parler du patient à la troisième personne devant lui pendant le soin.',
              'Oublier de remettre la sonnette à portée en partant — c’est la cause la plus banale de chute.'
            ]
          }
        ]
      },

      {
        id: 'c2', titre: 'Installation, positionnement et manutention', duree: 12,
        motsCles: ['installation', 'décubitus', 'Fowler', 'manutention', 'transfert', 'lombalgie'],
        blocs: [
          {
            type: 'tableau', entetes: ['Position', 'Description', 'Indications / précautions'],
            lignes: [
              ['Décubitus dorsal', 'Allongé sur le dos', 'Repos, examens. Appuis : sacrum, talons, occiput, coudes'],
              ['Décubitus latéral à 30°', 'Sur le côté, calé par des coussins', 'Prévention d’escarre : évite l’appui direct sur le trochanter'],
              ['Semi-Fowler (30°)', 'Tête de lit relevée à 30°', 'Prévention des pneumopathies d’inhalation, alimentation entérale'],
              ['Fowler (45–60°)', 'Assis dans le lit', 'Dyspnée, repas, confort respiratoire'],
              ['Décubitus latéral de sécurité (PLS)', 'Sur le côté, tête en extension', 'Inconscient qui respire, prévention de l’inhalation'],
              ['Trendelenburg', 'Tête plus basse que les pieds', 'Usage restreint aujourd’hui ; contre-indiqué en cas d’HTIC']
            ]
          },
          {
            type: 'cle', titre: 'Manutention — se protéger aussi', items: [
              'Toujours évaluer les capacités de la personne **avant** : ce qu’elle peut faire, ce qu’elle comprend, ce qu’elle craint.',
              'Régler le lit à hauteur, débloquer les freins seulement au moment du déplacement, retirer les obstacles.',
              'Pieds écartés, genoux fléchis, dos droit, charge près du corps. On plie les jambes, jamais le dos.',
              'Compter à voix haute avant le mouvement, avec la personne et avec le collègue : un transfert non synchronisé est un transfert raté.',
              'Utiliser les aides techniques : drap de glisse, disque de transfert, lève-personne, verticalisateur. Le « je vais y arriver seul » est la première cause de lombalgie soignante.'
            ]
          },
          {
            type: 'piege', items: [
              'Tirer un patient par les aisselles : risque de luxation de l’épaule et de plexus brachial, très douloureux.',
              'Ne pas remonter un patient qui a glissé au fond du lit : les forces de cisaillement sur le sacrum créent des escarres en quelques heures.',
              'Chez l’hémiplégique, on ne tire jamais sur le membre atteint ; les transferts se font du côté sain.'
            ]
          }
        ]
      },

      {
        id: 'c3', titre: 'Évaluer et soulager la douleur', duree: 12,
        motsCles: ['douleur', 'EVA', 'EN', 'Algoplus', 'Doloplus', 'palier OMS', 'morphine'],
        blocs: [
          {
            type: 'tableau', entetes: ['Échelle', 'Public', 'Principe'],
            lignes: [
              ['EN (numérique)', 'Adulte communicant', 'Note de 0 à 10 — la plus utilisée à l’oral'],
              ['EVA (visuelle analogique)', 'Adulte communicant', 'Réglette, curseur déplacé par le patient'],
              ['EVS (verbale simple)', 'Adulte, personne âgée', 'Absente / faible / modérée / intense / extrême'],
              ['Algoplus', 'Personne âgée non communicante — douleur **aiguë**', '5 items comportementaux, seuil ≥ 2'],
              ['Doloplus-2', 'Personne âgée non communicante — douleur **chronique**', '10 items, seuil ≥ 5'],
              ['EVENDOL, FLACC', 'Enfant', 'Observation comportementale']
            ]
          },
          {
            type: 'cle', titre: 'Les trois paliers de l’OMS', items: [
              '**Palier 1** — non opioïdes : paracétamol, AINS. Douleur légère à modérée.',
              '**Palier 2** — opioïdes faibles : codéine, tramadol. Douleur modérée à intense.',
              '**Palier 3** — opioïdes forts : morphine, oxycodone, fentanyl. Douleur intense.',
              'On peut associer un palier 1 à un palier 2 ou 3, mais **jamais un palier 2 avec un palier 3**.',
              'Les co-antalgiques (antidépresseurs, antiépileptiques) traitent les douleurs neuropathiques, sur lesquelles les antalgiques classiques sont peu efficaces.'
            ]
          },
          {
            type: 'cle', titre: 'Sous morphine : ce qu’on surveille', items: [
              'Efficacité : réévaluation systématique après administration (1 h per os, 30 min SC, 15 min IV).',
              '**Sédation puis fréquence respiratoire** : la somnolence précède toujours la dépression respiratoire. Un patient trop somnolent est un signal d’alarme, avant même que la FR ne baisse.',
              'FR < 10/min : alerte, antagonisation possible par naloxone selon protocole.',
              '**Constipation systématique** : laxatif prescrit d’emblée, elle ne s’améliore pas avec le temps.',
              'Nausées et vomissements les premiers jours, rétention urinaire, prurit.'
            ]
          },
          {
            type: 'piege', items: [
              'La douleur est **ce que la personne dit qu’elle est**. On ne réévalue pas à la baisse parce que le patient « n’a pas l’air d’avoir mal ».',
              'Anticiper la douleur induite par les soins : un antalgique donné 30 à 45 minutes avant un pansement change tout.',
              'Chez la personne âgée non communicante, un refus de soin, une agitation, un repli ou une grimace au mouvement sont des expressions de douleur, pas des troubles du comportement.'
            ]
          },
          {
            type: 'flash', items: [
              { q: 'Peut-on associer un palier 2 et un palier 3 ?', a: 'Non, jamais. Un palier 1 peut en revanche être associé à un palier 2 ou 3.' },
              { q: 'Quel signe précède la dépression respiratoire sous morphine ?', a: 'La sédation. On surveille la somnolence avant la fréquence respiratoire.' },
              { q: 'Quelle échelle pour une douleur aiguë chez une personne âgée non communicante ?', a: 'Algoplus (5 items, seuil ≥ 2). Doloplus-2 pour la douleur chronique.' },
              { q: 'Quel effet indésirable de la morphine ne s’atténue jamais ?', a: 'La constipation : laxatif prescrit d’emblée et surveillance du transit.' }
            ]
          }
        ]
      },

      {
        id: 'c4', titre: 'Sommeil, alimentation et élimination', duree: 12,
        motsCles: ['sommeil', 'alimentation', 'dénutrition', 'fausse route', 'transit', 'IMC'],
        blocs: [
          {
            type: 'cle', titre: 'Sommeil', items: [
              'À l’hôpital, la fragmentation du sommeil vient d’abord des soins nocturnes et du bruit. Regrouper les soins de nuit est une mesure de confort réelle.',
              'Repères : lumière du jour la journée, obscurité et silence la nuit, pas d’écran tardif, éviter les excitants après 16 h.',
              'Chez la personne âgée, l’insomnie plaintive relève souvent d’une douleur, d’une nycturie, d’une anxiété ou d’une dépression avant de relever d’un hypnotique.',
              'Les hypnotiques exposent aux chutes et à la confusion : ils ne se banalisent pas.'
            ]
          },
          {
            type: 'cle', titre: 'Alimentation et dénutrition', items: [
              '**IMC** = poids (kg) ÷ taille² (m). Dénutrition évoquée si IMC < 18,5 chez l’adulte, **< 21 chez la personne de 70 ans et plus**.',
              'Une perte de **5 % du poids en 1 mois** ou **10 % en 6 mois** définit la dénutrition, quel que soit l’IMC de départ.',
              'Albuminémie < 30 g/L : dénutrition confirmée, retard de cicatrisation, risque d’escarre.',
              'Peser régulièrement, évaluer les ingesta réellement consommés (pas ce qui a été servi), enrichir avant de recourir aux compléments.'
            ]
          },
          {
            type: 'etapes', titre: 'Prévenir la fausse route', items: [
              'Installer en position assise, tête légèrement fléchie vers l’avant (jamais en hyperextension).',
              'Environnement calme, sans distraction, sans faire parler la personne pendant qu’elle avale.',
              'Petites bouchées, rythme lent, s’assurer que la bouche est vide avant la suivante.',
              'Adapter les textures selon la prescription : eau gélifiée, épaississant, texture modifiée.',
              'Rester en position assise 30 minutes après le repas.',
              'Soins de bouche après le repas : les résidus alimentaires sont un facteur de pneumopathie.'
            ]
          },
          {
            type: 'piege', items: [
              'Les liquides clairs sont **plus** difficiles à avaler que les textures épaissies : donner de l’eau plate à un patient dysphagique est le geste le plus à risque.',
              'Une toux pendant le repas est un signe d’alerte ; une fausse route **silencieuse** est possible et plus dangereuse encore.',
              'Un patient allongé à plat qui reçoit une alimentation entérale est en risque direct d’inhalation : position à 30° minimum.'
            ]
          },
          {
            type: 'cle', titre: 'Élimination', items: [
              'Surveiller et tracer le transit : au-delà de 3 jours sans selles chez un patient alité ou sous morphine, on agit.',
              'Fécalome : penser devant une fausse diarrhée, une agitation, une rétention urinaire ou une confusion chez la personne âgée.',
              'Respecter l’intimité et le temps nécessaire : la pudeur est un des premiers besoins mis à mal à l’hôpital.'
            ]
          }
        ]
      }
    ],

    qcm: [
      { id: 'cq1', enonce: 'Lors d’une toilette au lit, l’ordre correct est :', choix: ['siège, visage, membres, dos', 'visage, haut du corps, membres, dos, siège en dernier', 'membres, siège, visage', 'peu importe si on change de gant'], bonnes: [1], explication: 'Toujours du plus propre vers le plus sale, avec un gant dédié pour la zone génito-anale, en dernier.', difficulte: 1 },
      { id: 'cq2', enonce: 'Après une toilette, il est essentiel :', choix: ['de sécher soigneusement les plis cutanés', 'de laisser sécher à l’air pour ne pas irriter', 'd’appliquer un talc systématiquement', 'de remettre la sonnette à portée'], bonnes: [0, 3], explication: 'La macération dans les plis favorise mycoses et escarres : séchage par tamponnement. Et la sonnette à portée est un impératif de sécurité, pas un détail.', difficulte: 2 },
      { id: 'cq3', enonce: 'La position semi-Fowler à 30° est indiquée pour :', choix: ['prévenir les pneumopathies d’inhalation', 'faciliter le sommeil profond', 'sécuriser l’alimentation entérale', 'prévenir les escarres talonnières'], bonnes: [0, 2], explication: 'Tête de lit à 30° minimum : c’est une mesure clé de prévention des inhalations, notamment sous alimentation entérale ou en ventilation.', difficulte: 2 },
      { id: 'cq4', enonce: 'Quelle position privilégie-t-on en décubitus latéral pour prévenir les escarres ?', choix: ['90° sur le côté', '30° avec calage par coussins', 'Décubitus ventral', 'Position assise stricte'], bonnes: [1], explication: 'Le décubitus latéral à 30° évite l’appui direct sur le trochanter, zone à haut risque. Le 90° concentre toute la pression sur une saillie osseuse.', difficulte: 3 },
      { id: 'cq5', enonce: 'En manutention, il faut :', choix: ['plier les genoux et garder le dos droit', 'tirer le patient par les aisselles', 'régler le lit à sa hauteur', 'compter à voix haute avant le mouvement'], bonnes: [0, 2, 3], explication: 'Tirer par les aisselles expose à la luxation d’épaule et à l’atteinte du plexus brachial. On plie les jambes, on rapproche la charge, on synchronise.', difficulte: 2 },
      { id: 'cq6', enonce: 'Un patient qui a glissé au fond du lit doit être remonté rapidement car :', choix: ['c’est inesthétique', 'les forces de cisaillement favorisent l’escarre sacrée', 'cela gêne les visites', 'cela fausse la prise de tension'], bonnes: [1], explication: 'Le cisaillement entre le sacrum et le drap crée une escarre en quelques heures. Le remontage se fait à deux, avec un drap de glisse.', difficulte: 2 },
      { id: 'cq7', enonce: 'Quelle échelle utilise-t-on pour évaluer une douleur aiguë chez une personne âgée non communicante ?', choix: ['EVA', 'EN', 'Algoplus', 'Doloplus-2'], bonnes: [2], explication: 'Algoplus (5 items comportementaux, seuil ≥ 2) pour l’aigu ; Doloplus-2 (10 items, seuil ≥ 5) pour le chronique. EVA et EN supposent une personne communicante.', difficulte: 3 },
      { id: 'cq8', enonce: 'Concernant les paliers antalgiques de l’OMS :', choix: ['on peut associer palier 1 et palier 3', 'on peut associer palier 2 et palier 3', 'le tramadol est un palier 2', 'la morphine est un palier 3'], bonnes: [0, 2, 3], explication: 'Palier 1 + palier 2 ou 3 : oui. Palier 2 + palier 3 : jamais, ils entrent en compétition sur les mêmes récepteurs.', difficulte: 2 },
      { id: 'cq9', enonce: 'Sous morphine, le signe qui précède la dépression respiratoire est :', choix: ['la constipation', 'la sédation excessive', 'le prurit', 'les nausées'], bonnes: [1], explication: 'La somnolence précède toujours la baisse de la fréquence respiratoire. Un patient anormalement somnolent est une alerte, avant même que la FR ne chute sous 10/min.', difficulte: 3 },
      { id: 'cq10', enonce: 'La constipation sous morphine :', choix: ['disparaît spontanément après quelques jours', 'est constante et justifie un laxatif d’emblée', 'ne concerne que la voie orale', 'impose l’arrêt du traitement'], bonnes: [1], explication: 'C’est le seul effet indésirable des opioïdes qui ne s’atténue pas avec le temps. Laxatif prescrit dès l’instauration et surveillance du transit.', difficulte: 2 },
      { id: 'cq11', enonce: 'Chez une personne de 78 ans, la dénutrition est évoquée si l’IMC est inférieur à :', choix: ['16', '18,5', '21', '25'], bonnes: [2], explication: 'Le seuil est relevé à 21 kg/m² à partir de 70 ans. Une perte de 5 % du poids en 1 mois ou 10 % en 6 mois définit aussi la dénutrition, quel que soit l’IMC.', difficulte: 3 },
      { id: 'cq12', enonce: 'Pour prévenir une fausse route, il faut :', choix: ['installer la personne en hyperextension de la tête', 'installer assis, tête légèrement fléchie vers l’avant', 'faire parler la personne pour vérifier qu’elle va bien', 'maintenir la position assise 30 minutes après le repas'], bonnes: [1, 3], explication: 'Tête fléchie vers l’avant, pas en arrière (qui ouvre les voies aériennes). On ne fait pas parler pendant la déglutition, et on maintient l’assise 30 minutes après.', difficulte: 2 },
      { id: 'cq13', enonce: 'Chez un patient dysphagique, quelle texture présente le plus de risque ?', choix: ['Les liquides clairs', 'Les textures épaissies', 'Les purées lisses', 'L’eau gélifiée'], bonnes: [0], explication: 'Les liquides clairs sont les plus difficiles à contrôler : ils échappent au temps buccal. D’où l’eau gélifiée et les épaississants.', difficulte: 3 },
      { id: 'cq14', enonce: 'Un fécalome peut se manifester par :', choix: ['une fausse diarrhée', 'une rétention urinaire', 'une confusion chez la personne âgée', 'une prise de poids rapide'], bonnes: [0, 1, 2], explication: 'La fausse diarrhée par regorgement, la rétention urinaire par compression et la confusion sont des présentations classiques et souvent méconnues du fécalome.', difficulte: 3 },
      { id: 'cq15', enonce: 'Le principe « faire avec plutôt que faire à la place de » signifie :', choix: ['gagner du temps sur le soin', 'préserver et stimuler l’autonomie de la personne', 'déléguer le soin à la famille', 'ne rien faire tant que la personne n’a pas demandé'], bonnes: [1], explication: 'Chaque geste laissé à la personne entretient son autonomie. Aller plus vite en faisant à sa place produit une dépendance qui, en institution, se récupère mal.', difficulte: 1 }
    ]
  });
})();
