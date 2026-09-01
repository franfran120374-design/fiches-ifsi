/* ============================================================
   Référentiel 2026 — réforme applicable aux promotions
   entrant en formation à partir de septembre 2026.
   3 ans / 6 semestres · 180 ECTS · 4 620 h
   142 ECTS socle national + 38 ECTS cadre de consolidation (dès le S4)
   Organisation par domaines A à E (remplace les UE numérotées 1.x → 6.x).
   ⚠ Squelette structurel : les intitulés fins d'UE sont posés pour
   accueillir le contenu au fur et à mesure de la publication des textes.
   ============================================================ */
(function () {
  'use strict';

  var U = function (code, sem, titre, ects, dom, evalu) {
    return {
      id: code + '.' + sem, code: code, titre: titre, ects: ects,
      cm: 0, td: 0, tp: 0, famille: dom, competences: [], evaluation: evalu || ''
    };
  };

  FICHES.registerReferentiel({
    id: '2026',
    nom: 'Référentiel 2026',
    nomCourt: '2026',
    sousTitre: 'Domaines A à E — réforme rentrée septembre 2026',
    statut: 'Applicable aux promotions entrant en septembre 2026. Coexiste avec le référentiel 2009 jusqu’au 30/06/2030.',
    provisoire: true,
    totalEcts: 180,
    familles: {
      1: 'Domaine A — Fondements des sciences infirmières, raisonnement clinique, législation et éthique',
      2: 'Domaine B — Sciences biomédicales, sciences humaines, pratiques infirmières et gestion des risques',
      3: 'Domaine C — Santé publique, prévention et santé environnementale',
      4: 'Domaine D — Communication, leadership, coordination, formation et numérique en santé',
      5: 'Domaine E — Recherche, langue étrangère et méthodes de travail'
    },
    competences: {
      1: 'Évaluer une situation clinique et poser un jugement clinique infirmier',
      2: 'Concevoir, conduire et évaluer un projet de soins personnalisé',
      3: 'Accompagner la personne et son entourage dans son parcours de santé',
      4: 'Mettre en œuvre des interventions diagnostiques et thérapeutiques en sécurité',
      5: 'Promouvoir la santé, prévenir et éduquer',
      6: 'Communiquer et construire une relation professionnelle',
      7: 'Analyser et améliorer la qualité et la sécurité des soins',
      8: 'Mobiliser une démarche scientifique et des données probantes',
      9: 'Coordonner et coopérer au sein d’une équipe pluriprofessionnelle',
      10: 'Former, encadrer et transmettre'
    },
    semestres: [
      {
        id: 'S1', nom: 'Semestre 1', annee: 1, ectsStage: 5, stageSemaines: 5,
        resume: 'Entrée dans les sciences infirmières, bases biomédicales, hygiène, méthodes de travail.',
        note: 'Structure posée d’après les textes de la réforme 2026. Les intitulés et volumes définitifs sont à confirmer avec la maquette de ton IFSI.',
        ues: [
          U('A1', 'S1', 'Fondements des sciences infirmières et identité professionnelle', 4, 1, 'Évaluation écrite'),
          U('A2', 'S1', 'Introduction au raisonnement clinique', 3, 1, 'Analyse de situation'),
          U('A3', 'S1', 'Cadre légal d’exercice et responsabilité', 2, 1, 'Évaluation écrite'),
          U('B1', 'S1', 'Biologie cellulaire, anatomie et physiologie 1', 4, 2, 'Évaluation écrite'),
          U('B2', 'S1', 'Hygiène, infectiologie et prévention du risque infectieux', 3, 2, 'Évaluation écrite'),
          U('B3', 'S1', 'Soins de confort, de bien-être et sécurité du patient', 3, 2, 'Évaluation pratique'),
          U('C1', 'S1', 'Déterminants de santé et santé publique', 2, 3, 'Évaluation écrite'),
          U('D1', 'S1', 'Communication professionnelle et relation de soin', 2, 4, 'Mise en situation'),
          U('E1', 'S1', 'Méthodes de travail universitaire et numérique en santé', 1, 5, 'Travail méthodologique'),
          U('E2', 'S1', 'Anglais professionnel', 1, 5, 'Compréhension / expression')
        ]
      },
      {
        id: 'S2', nom: 'Semestre 2', annee: 1, ectsStage: 10, stageSemaines: 10,
        resume: 'Physiopathologie, pharmacologie, soins techniques, urgences, psychologie.',
        ues: [
          U('A4', 'S2', 'Raisonnement clinique et démarche de soins', 3, 1, 'Analyse de situation'),
          U('A5', 'S2', 'Éthique du soin', 2, 1, 'Analyse écrite'),
          U('B4', 'S2', 'Anatomie et physiologie 2, processus physiopathologiques', 4, 2, 'Évaluation écrite'),
          U('B5', 'S2', 'Pharmacologie et calculs de doses', 3, 2, 'Évaluation écrite + calculs'),
          U('B6', 'S2', 'Soins techniques et gestion des risques', 3, 2, 'Évaluation pratique'),
          U('B7', 'S2', 'Soins d’urgence (AFGSU 2)', 1, 2, 'Attestation AFGSU 2'),
          U('C2', 'S2', 'Prévention, promotion de la santé et santé environnementale', 2, 3, 'Travail écrit'),
          U('D2', 'S2', 'Psychologie, sociologie et relation d’aide', 1, 4, 'Évaluation écrite'),
          U('E3', 'S2', 'Anglais professionnel', 1, 5, 'Compréhension / expression')
        ]
      },
      {
        id: 'S3', nom: 'Semestre 3', annee: 2, ectsStage: 10, stageSemaines: 10,
        resume: 'Approfondissement clinique par grands processus, éducation thérapeutique, coordination.',
        ues: [
          U('A6', 'S3', 'Jugement clinique en situations complexes', 3, 1, 'Analyse de situation'),
          U('B8', 'S3', 'Processus inflammatoires, infectieux et obstructifs', 4, 2, 'Évaluation écrite'),
          U('B9', 'S3', 'Santé mentale et processus psychopathologiques', 3, 2, 'Évaluation écrite'),
          U('B10', 'S3', 'Thérapeutiques et surveillance infirmière', 3, 2, 'Évaluation écrite'),
          U('C3', 'S3', 'Éducation thérapeutique du patient', 3, 3, 'Projet éducatif'),
          U('D3', 'S3', 'Coordination du parcours et interprofessionnalité', 2, 4, 'Travail écrit'),
          U('E4', 'S3', 'Données probantes et lecture critique', 1, 5, 'Travail méthodologique'),
          U('E5', 'S3', 'Anglais professionnel', 1, 5, 'Compréhension / expression')
        ]
      },
      {
        id: 'S4', nom: 'Semestre 4', annee: 2, ectsStage: 10, stageSemaines: 10,
        resume: 'Défaillances organiques, éthique appliquée, encadrement — début du cadre de consolidation.',
        note: 'À partir du S4, une part des ECTS relève du cadre de consolidation (parcours personnalisé, 38 ECTS sur l’ensemble du cursus).',
        ues: [
          U('A7', 'S4', 'Éthique appliquée et décision en situation complexe', 3, 1, 'Analyse écrite'),
          U('B11', 'S4', 'Défaillances organiques et processus dégénératifs', 4, 2, 'Évaluation écrite'),
          U('B12', 'S4', 'Soins palliatifs et accompagnement de fin de vie', 2, 2, 'Analyse de situation'),
          U('C4', 'S4', 'Santé publique appliquée et parcours de prévention', 2, 3, 'Projet'),
          U('D4', 'S4', 'Encadrement, tutorat et transmission', 3, 4, 'Travail d’encadrement'),
          U('D5', 'S4', 'Numérique en santé et données de soins', 2, 4, 'Évaluation écrite'),
          U('E6', 'S4', 'Initiation à la démarche de recherche', 3, 5, 'Travail méthodologique'),
          U('E7', 'S4', 'Anglais professionnel', 1, 5, 'Compréhension / expression')
        ]
      },
      {
        id: 'S5', nom: 'Semestre 5', annee: 3, ectsStage: 10, stageSemaines: 10,
        resume: 'Processus tumoraux, pharmacologie avancée, leadership, consolidation du parcours.',
        ues: [
          U('A8', 'S5', 'Raisonnement clinique avancé et priorisation', 3, 1, 'Analyse de situation'),
          U('B13', 'S5', 'Processus tumoraux et thérapeutiques spécifiques', 4, 2, 'Évaluation écrite'),
          U('B14', 'S5', 'Pharmacologie avancée et sécurisation du circuit du médicament', 3, 2, 'Évaluation écrite + calculs'),
          U('C5', 'S5', 'Santé des populations et inégalités sociales de santé', 2, 3, 'Travail écrit'),
          U('D6', 'S5', 'Leadership infirmier et organisation du travail', 3, 4, 'Travail écrit'),
          U('E8', 'S5', 'Démarche de recherche appliquée', 3, 5, 'Avancement du mémoire'),
          U('E9', 'S5', 'Anglais professionnel', 1, 5, 'Compréhension / expression'),
          U('X1', 'S5', 'Cadre de consolidation — parcours personnalisé', 1, 4, 'Selon le parcours choisi')
        ]
      },
      {
        id: 'S6', nom: 'Semestre 6', annee: 3, ectsStage: 15, stageSemaines: 15,
        resume: 'Mémoire, posture professionnelle, consolidation et préparation à la prise de poste.',
        ues: [
          U('A9', 'S6', 'Posture professionnelle et transition vers l’exercice', 4, 1, 'Argumentation orale'),
          U('E10', 'S6', 'Mémoire de fin d’études', 6, 5, 'Mémoire + soutenance'),
          U('E11', 'S6', 'Anglais professionnel', 1, 5, 'Compréhension / expression'),
          U('X2', 'S6', 'Cadre de consolidation — parcours personnalisé', 4, 4, 'Selon le parcours choisi')
        ]
      }
    ]
  });
})();
