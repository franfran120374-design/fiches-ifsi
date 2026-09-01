/* ============================================================
   Référentiel 2026 — Semestre 1
   Les domaines A à E reprennent une large part des contenus du
   référentiel 2009 : les UE ci-dessous réutilisent ces fiches
   (clé "reprend") et y ajoutent ce qui est propre à la réforme.
   La progression est suivie séparément pour chaque référentiel.
   ============================================================ */
(function () {
  'use strict';

  /* --- Domaine A : fondements des sciences infirmières --- */
  FICHES.registerUE({
    ref: '2026', ue: 'A1.S1',
    objectifs: [
      'Situer les sciences infirmières comme discipline propre',
      'Identifier les grands courants théoriques du soin',
      'Construire une posture professionnelle dès l’entrée en formation'
    ],
    fiches: [
      {
        id: 'a1f1', titre: 'Les sciences infirmières comme discipline', duree: 10,
        motsCles: ['sciences infirmières', 'Nightingale', 'Henderson', 'Watson', 'discipline', 'care'],
        accroche: 'Ce qui change vraiment avec la réforme 2026 : le soin infirmier n’est plus présenté comme une application de la médecine, mais comme une discipline avec ses propres savoirs.',
        blocs: [
          { type: 'para', texte: 'Le référentiel 2026 fait des **sciences infirmières** le socle de la formation. La discipline a son objet propre — la réponse humaine à un problème de santé — sa méthode (le raisonnement clinique infirmier) et ses savoirs produits par la recherche.' },
          {
            type: 'tableau', entetes: ['Auteure', 'Apport', 'Ce qu’on en retient en pratique'],
            lignes: [
              ['Florence Nightingale', 'Fondatrice, approche environnementale', 'L’environnement du patient (air, lumière, bruit, propreté) est un déterminant du soin'],
              ['Virginia Henderson', '14 besoins fondamentaux', 'Grille de recueil encore utilisée pour repérer les besoins perturbés'],
              ['Dorothea Orem', 'Théorie de l’auto-soin', 'Le soin vise à restaurer la capacité de la personne à prendre soin d’elle'],
              ['Jean Watson', 'Caring, dimension humaniste', 'La relation elle-même est thérapeutique, pas seulement un préalable au geste'],
              ['Marie-Françoise Collière', 'Care / cure, soins coutumiers', 'Prendre soin ne se réduit pas à traiter la maladie']
            ]
          },
          {
            type: 'cle', titre: 'Les 14 besoins de Virginia Henderson', items: [
              'Respirer · Boire et manger · Éliminer · Se mouvoir et maintenir une bonne posture · Dormir et se reposer',
              'Se vêtir et se dévêtir · Maintenir sa température · Être propre et protéger ses téguments · Éviter les dangers',
              'Communiquer · Agir selon ses croyances et ses valeurs · S’occuper en vue de se réaliser · Se récréer · Apprendre'
            ]
          },
          { type: 'mnemo', texte: 'Pour ne pas oublier les besoins physiologiques du début : **R**espirer, **B**oire-manger, **É**liminer, **M**ouvoir, **D**ormir — « **R**ien **B**ouge **É**videmment **M**algré **D**emain ».' },
          { type: 'piege', texte: 'Les besoins de Henderson sont un outil de recueil, pas une liste à cocher. Un besoin est « perturbé » quand la personne ne peut pas le satisfaire seule — et c’est cette dépendance qu’on décrit, pas le besoin lui-même.' }
        ]
      },
      {
        id: 'a1f2', titre: 'Posture professionnelle et identité soignante', duree: 8,
        motsCles: ['posture', 'identité professionnelle', 'distance', 'secret', 'réflexivité'],
        blocs: [
          {
            type: 'liste', items: [
              '**Juste distance** : ni fusion ni froideur. On est engagé dans la relation sans s’y confondre. Ce n’est pas une distance fixe, elle se réajuste avec chaque personne.',
              '**Réflexivité** : capacité à revenir sur sa pratique, à nommer ce qui s’est joué et à en tirer une modification. C’est ce que le portfolio et les analyses de pratique cherchent à développer.',
              '**Discrétion professionnelle** : ne pas divulguer ce qu’on apprend de l’institution — distincte du secret professionnel, qui protège le patient.',
              '**Tenue et comportement** : la tenue professionnelle est un dispositif d’hygiène avant d’être un uniforme. Rien en dessous du coude, cheveux attachés, pas de bijou.'
            ]
          },
          { type: 'cle', texte: 'En stage, la posture attendue tient en trois attitudes : **demander avant de faire**, **dire ce qu’on ne sait pas**, **rendre compte de ce qu’on a fait**. Un étudiant qui applique ces trois règles ne met jamais un patient en danger.' }
        ]
      }
    ],
    qcm: [
      { id: 'a1q1', enonce: 'Sur quoi repose l’organisation du référentiel 2026 ?', choix: ['Des UE numérotées de 1.1 à 6.2', 'Cinq domaines de A à E', 'Trois blocs de compétences', 'Deux cycles de 18 mois'], bonnes: [1], explication: 'La réforme 2026 remplace les UE numérotées par cinq domaines (A à E), avec 142 ECTS de socle national et 38 ECTS de cadre de consolidation à partir du semestre 4.', difficulte: 1 },
      { id: 'a1q2', enonce: 'Combien de besoins fondamentaux Virginia Henderson a-t-elle décrits ?', choix: ['10', '12', '14', '16'], bonnes: [2], explication: '14 besoins fondamentaux, du besoin de respirer au besoin d’apprendre. C’est une grille de recueil, pas une liste à cocher.', difficulte: 1 },
      { id: 'a1q3', enonce: 'La notion de « caring » est associée à :', choix: ['Florence Nightingale', 'Jean Watson', 'Dorothea Orem', 'Hildegard Peplau'], bonnes: [1], explication: 'Jean Watson développe le caring : la relation de soin est en elle-même thérapeutique. Orem théorise l’auto-soin, Nightingale l’environnement.', difficulte: 2 },
      { id: 'a1q4', enonce: 'La « juste distance » professionnelle signifie :', choix: ['garder une froideur systématique', 'être engagé dans la relation sans s’y confondre', 'la même distance avec tous les patients', 'éviter tout contact physique'], bonnes: [1], explication: 'Ni fusion ni froideur, et surtout pas une distance fixe : elle se réajuste selon la personne, la situation et ce qui se joue pour le soignant.', difficulte: 2 },
      { id: 'a1q5', enonce: 'La discrétion professionnelle :', choix: ['est un synonyme du secret professionnel', 'porte sur les informations relatives à l’institution', 'protège le patient', 'concerne les faits appris dans l’exercice des fonctions'], bonnes: [1, 3], explication: 'Le secret professionnel protège le patient et sa violation est un délit pénal. La discrétion professionnelle porte sur le fonctionnement du service et de l’institution.', difficulte: 3 },
      { id: 'a1q6', enonce: 'En stage, un étudiant qui ne sait pas réaliser un geste doit :', choix: ['essayer pour apprendre', 'le dire et demander à être encadré', 'refuser tout geste nouveau', 'rendre compte de ce qu’il a fait'], bonnes: [1, 3], explication: 'Demander avant de faire, dire ce qu’on ne sait pas, rendre compte. Se lancer seul sur un geste non maîtrisé engage la responsabilité de l’étudiant et met le patient en danger.', difficulte: 1 }
    ]
  });

  /* --- Domaine B : sciences biomédicales et pratiques infirmières --- */
  FICHES.registerUE({
    ref: '2026', ue: 'B1.S1',
    objectifs: [
      'Maîtriser les bases de biologie cellulaire, d’anatomie et de physiologie',
      'Relier chaque fonction physiologique à sa surveillance clinique'
    ],
    reprend: ['2009::2.1.S1', '2009::2.2.S1']
  });

  FICHES.registerUE({
    ref: '2026', ue: 'B2.S1',
    objectifs: [
      'Appliquer les précautions standard et complémentaires',
      'Prévenir les infections associées aux soins'
    ],
    reprend: ['2009::2.10.S1']
  });

  FICHES.registerUE({
    ref: '2026', ue: 'B3.S1',
    objectifs: [
      'Réaliser les soins de confort et d’hygiène en sécurité',
      'Installer et mobiliser une personne, évaluer sa douleur'
    ],
    reprend: ['2009::4.1.S1']
  });

  /* --- Domaine A : raisonnement clinique --- */
  FICHES.registerUE({
    ref: '2026', ue: 'A2.S1',
    objectifs: [
      'Conduire un recueil de données et poser un jugement clinique infirmier',
      'Formuler des objectifs évaluables et des actions justifiées'
    ],
    reprend: ['2009::3.1.S1']
  });

  /* --- Domaine D : communication --- */
  FICHES.registerUE({
    ref: '2026', ue: 'D1.S1',
    objectifs: [
      'Adapter sa communication aux besoins et à l’état de la personne',
      'Repérer les réactions psychiques à la maladie'
    ],
    reprend: ['2009::1.1.S1']
  });

  /* --- Domaine E : méthodes de travail et anglais --- */
  FICHES.registerUE({
    ref: '2026', ue: 'E1.S1',
    objectifs: [
      'Organiser son travail personnel',
      'Rechercher et évaluer une source, respecter la confidentialité numérique'
    ],
    reprend: ['2009::6.1.S1']
  });

  FICHES.registerUE({
    ref: '2026', ue: 'E2.S1',
    objectifs: ['Acquérir le vocabulaire professionnel anglais de base'],
    reprend: ['2009::6.2.S1']
  });

  /* --- Domaine A : cadre légal --- */
  FICHES.registerUE({
    ref: '2026', ue: 'A3.S1',
    objectifs: [
      'Situer l’exercice infirmier dans son cadre légal',
      'Appliquer le secret professionnel et les droits du patient'
    ],
    reprend: ['2009::1.3.S1']
  });
})();
