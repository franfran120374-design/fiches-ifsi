/* ============================================================
   Référentiel 2009 — arrêté du 31 juillet 2009 (DEI)
   Applicable aux promotions entrées avant septembre 2026.
   Abrogation prévue au 30 juin 2030.
   180 ECTS = 120 ECTS enseignement + 60 ECTS stage (1 ECTS / semaine).
   ============================================================ */
(function () {
  'use strict';

  var U = function (code, sem, titre, ects, cm, td, tp, fam, comp, evalu) {
    return {
      id: code + '.' + sem, code: code, titre: titre, ects: ects,
      cm: cm, td: td, tp: tp, famille: fam,
      competences: comp || [], evaluation: evalu || ''
    };
  };

  FICHES.registerReferentiel({
    id: '2009',
    nom: 'Référentiel 2009',
    nomCourt: '2009',
    sousTitre: 'UE 1.1 à 6.2 — arrêté du 31 juillet 2009',
    statut: 'En vigueur pour les promotions entrées avant septembre 2026 (abrogation au 30/06/2030).',
    totalEcts: 180,
    familles: {
      1: 'Sciences humaines, sociales et droit',
      2: 'Sciences biologiques et médicales',
      3: 'Sciences et techniques infirmières, fondements et méthodes',
      4: 'Sciences et techniques infirmières, interventions',
      5: 'Intégration des savoirs et posture professionnelle infirmière',
      6: 'Méthodes de travail et langue vivante'
    },
    competences: {
      1: 'Évaluer une situation clinique et établir un diagnostic dans le domaine infirmier',
      2: 'Concevoir et conduire un projet de soins infirmiers',
      3: 'Accompagner une personne dans la réalisation de ses soins quotidiens',
      4: 'Mettre en œuvre des actions à visée diagnostique et thérapeutique',
      5: 'Initier et mettre en œuvre des soins éducatifs et préventifs',
      6: 'Communiquer et conduire une relation dans un contexte de soins',
      7: 'Analyser la qualité des soins et améliorer sa pratique professionnelle',
      8: 'Rechercher et traiter des données professionnelles et scientifiques',
      9: 'Organiser et coordonner des interventions soignantes',
      10: 'Informer et former des professionnels et des personnes en formation'
    },
    semestres: [
      {
        id: 'S1', nom: 'Semestre 1', annee: 1, ectsStage: 5, stageSemaines: 5,
        resume: 'Les fondamentaux : biologie, hygiène, pharmacologie de base, premiers soins de confort, méthodologie.',
        ues: [
          U('1.1', 'S1', 'Psychologie, sociologie, anthropologie', 3, 40, 15, 20, 1, [6], 'Évaluation écrite de connaissances'),
          U('1.3', 'S1', 'Législation, éthique, déontologie', 2, 20, 20, 10, 1, [7], 'Évaluation écrite de connaissances'),
          U('2.1', 'S1', 'Biologie fondamentale', 1, 20, 5, 0, 2, [4], 'Évaluation écrite de connaissances'),
          U('2.2', 'S1', 'Cycles de la vie et grandes fonctions', 3, 45, 15, 15, 2, [1, 4], 'Évaluation écrite de connaissances'),
          U('2.4', 'S1', 'Processus traumatiques', 2, 30, 10, 10, 2, [4], 'Évaluation écrite de connaissances'),
          U('2.10', 'S1', 'Infectiologie, hygiène', 2, 20, 20, 10, 2, [3, 4], 'Évaluation écrite de connaissances'),
          U('2.11', 'S1', 'Pharmacologie et thérapeutiques', 2, 35, 10, 5, 2, [4], 'Évaluation écrite + calculs de doses'),
          U('3.1', 'S1', 'Raisonnement et démarche clinique infirmière', 2, 15, 25, 10, 3, [1], 'Travail écrit d’analyse de situation'),
          U('4.1', 'S1', 'Soins de confort et de bien-être', 2, 6, 34, 10, 4, [3], 'Évaluation pratique / TP'),
          U('5.1', 'S1', 'Accompagnement de la personne dans la réalisation de ses soins quotidiens', 4, 0, 30, 20, 5, [3], 'Analyse d’une situation de soins rencontrée en stage'),
          U('6.1', 'S1', 'Méthodes de travail et TIC', 1, 0, 20, 15, 6, [8], 'Travail méthodologique'),
          U('6.2', 'S1', 'Anglais', 1, 0, 10, 10, 6, [8], 'Évaluation de compréhension / expression')
        ]
      },
      {
        id: 'S2', nom: 'Semestre 2', annee: 1, ectsStage: 10, stageSemaines: 10,
        resume: 'Santé publique, psychopathologie, thérapeutiques, soins d’urgence, gestion des risques.',
        ues: [
          U('1.1', 'S2', 'Psychologie, sociologie, anthropologie', 2, 25, 10, 15, 1, [6], 'Évaluation écrite de connaissances'),
          U('1.2', 'S2', 'Santé publique et économie de la santé', 2, 20, 15, 15, 1, [5], 'Évaluation écrite de connaissances'),
          U('2.3', 'S2', 'Santé, maladie, handicap, accidents de la vie', 2, 15, 15, 20, 2, [1, 5], 'Évaluation écrite de connaissances'),
          U('2.6', 'S2', 'Processus psychopathologiques', 2, 30, 10, 10, 2, [4], 'Évaluation écrite de connaissances'),
          U('3.1', 'S2', 'Raisonnement et démarche clinique infirmière', 2, 5, 25, 20, 3, [1], 'Analyse de situation clinique'),
          U('3.2', 'S2', 'Projet de soins infirmiers', 1, 5, 15, 5, 3, [2], 'Travail écrit'),
          U('4.2', 'S2', 'Soins relationnels', 1, 3, 15, 7, 4, [6], 'Analyse d’une relation de soin'),
          U('4.3', 'S2', 'Soins d’urgence', 1, 6, 15, 4, 4, [4], 'Attestation AFGSU niveau 2'),
          U('4.4', 'S2', 'Thérapeutiques et contribution au diagnostic médical', 2, 7, 23, 20, 4, [4], 'Évaluation écrite + calculs de doses'),
          U('4.5', 'S2', 'Soins infirmiers et gestion des risques', 1, 10, 10, 5, 4, [7], 'Évaluation écrite de connaissances'),
          U('5.2', 'S2', 'Évaluation d’une situation clinique', 3, 0, 25, 20, 5, [1], 'Analyse écrite d’une situation clinique'),
          U('6.2', 'S2', 'Anglais', 1, 0, 10, 10, 6, [8], 'Évaluation de compréhension / expression')
        ]
      },
      {
        id: 'S3', nom: 'Semestre 3', annee: 2, ectsStage: 10, stageSemaines: 10,
        resume: 'Processus inflammatoires et obstructifs, soins relationnels et éducatifs, conduite de projet.',
        ues: [
          U('1.2', 'S3', 'Santé publique et économie de la santé', 3, 20, 20, 35, 1, [5], 'Évaluation écrite de connaissances'),
          U('2.5', 'S3', 'Processus inflammatoires et infectieux', 2, 30, 10, 10, 2, [4], 'Évaluation écrite de connaissances'),
          U('2.8', 'S3', 'Processus obstructifs', 2, 30, 10, 10, 2, [4], 'Évaluation écrite de connaissances'),
          U('2.11', 'S3', 'Pharmacologie et thérapeutiques', 1, 15, 10, 5, 2, [4], 'Évaluation écrite + calculs de doses'),
          U('3.2', 'S3', 'Projet de soins infirmiers', 2, 5, 15, 5, 3, [2], 'Travail écrit'),
          U('3.3', 'S3', 'Rôles infirmiers, organisation du travail et interprofessionnalité', 1, 10, 10, 5, 3, [9], 'Évaluation écrite de connaissances'),
          U('4.2', 'S3', 'Soins relationnels', 2, 4, 36, 10, 4, [6], 'Analyse d’une situation relationnelle'),
          U('4.6', 'S3', 'Soins éducatifs et préventifs', 2, 4, 21, 25, 4, [5], 'Travail écrit d’éducation à la santé'),
          U('5.3', 'S3', 'Communication et conduite de projet', 4, 0, 30, 25, 5, [2, 6], 'Conduite d’un projet de soins'),
          U('6.2', 'S3', 'Anglais', 1, 0, 10, 10, 6, [8], 'Évaluation de compréhension / expression')
        ]
      },
      {
        id: 'S4', nom: 'Semestre 4', annee: 2, ectsStage: 10, stageSemaines: 10,
        resume: 'Défaillances organiques, éthique, initiation à la recherche, encadrement, urgences.',
        ues: [
          U('1.3', 'S4', 'Législation, éthique, déontologie', 3, 30, 20, 25, 1, [7], 'Analyse écrite d’une situation éthique'),
          U('2.7', 'S4', 'Défaillances organiques et processus dégénératifs', 2, 30, 10, 10, 2, [4], 'Évaluation écrite de connaissances'),
          U('3.4', 'S4', 'Initiation à la démarche de recherche', 2, 20, 15, 15, 3, [8], 'Travail écrit méthodologique'),
          U('3.5', 'S4', 'Encadrement des professionnels de soins', 2, 10, 20, 20, 3, [10], 'Travail écrit d’encadrement'),
          U('4.3', 'S4', 'Soins d’urgence', 1, 3, 18, 4, 4, [4], 'Attestation AFGSU niveau 2'),
          U('4.4', 'S4', 'Thérapeutiques et contribution au diagnostic médical', 2, 6, 34, 10, 4, [4], 'Évaluation écrite + calculs de doses'),
          U('4.5', 'S4', 'Soins infirmiers et gestion des risques', 1, 10, 10, 5, 4, [7], 'Évaluation écrite de connaissances'),
          U('4.6', 'S4', 'Soins éducatifs et préventifs', 2, 0, 15, 35, 4, [5], 'Projet d’éducation thérapeutique'),
          U('5.4', 'S4', 'Soins éducatifs et formation des professionnels et des stagiaires', 4, 0, 30, 25, 5, [5, 10], 'Action éducative ou d’encadrement'),
          U('6.2', 'S4', 'Anglais', 1, 0, 10, 10, 6, [8], 'Évaluation de compréhension / expression')
        ]
      },
      {
        id: 'S5', nom: 'Semestre 5', annee: 3, ectsStage: 10, stageSemaines: 10,
        resume: 'Processus tumoraux, pharmacologie approfondie, psychopathologie, coordination des soins.',
        ues: [
          U('2.6', 'S5', 'Processus psychopathologiques', 2, 30, 10, 10, 2, [4], 'Évaluation écrite de connaissances'),
          U('2.9', 'S5', 'Processus tumoraux', 2, 30, 10, 10, 2, [4], 'Évaluation écrite de connaissances'),
          U('2.11', 'S5', 'Pharmacologie et thérapeutiques', 2, 30, 10, 10, 2, [4], 'Évaluation écrite + calculs de doses'),
          U('3.3', 'S5', 'Rôles infirmiers, organisation du travail et interprofessionnalité', 2, 10, 20, 20, 3, [9], 'Analyse d’organisation de travail'),
          U('4.2', 'S5', 'Soins relationnels', 1, 0, 20, 5, 4, [6], 'Analyse d’une situation relationnelle'),
          U('4.4', 'S5', 'Thérapeutiques et contribution au diagnostic médical', 2, 6, 34, 10, 4, [4], 'Évaluation écrite + calculs de doses'),
          U('4.7', 'S5', 'Soins palliatifs et de fin de vie', 2, 20, 15, 15, 4, [4, 6], 'Analyse d’une situation de fin de vie'),
          U('5.5', 'S5', 'Mise en œuvre des thérapeutiques et coordination des soins', 4, 0, 30, 25, 5, [4, 9], 'Analyse d’une situation de soins complexe'),
          U('6.2', 'S5', 'Anglais', 1, 0, 10, 10, 6, [8], 'Évaluation de compréhension / expression'),
          U('3.4', 'S5', 'Initiation à la démarche de recherche', 2, 10, 20, 20, 3, [8], 'Avancement du travail de fin d’études')
        ]
      },
      {
        id: 'S6', nom: 'Semestre 6', annee: 3, ectsStage: 15, stageSemaines: 15,
        resume: 'Consolidation, mémoire de fin d’études, posture professionnelle, UE optionnelle.',
        note: 'Le semestre 6 totalise 15 ECTS d’enseignement + 15 ECTS de stage. La répartition exacte entre UE 3.4.S6 et UE 5.6.S6 peut varier d’un IFSI à l’autre : vérifie la maquette de ton institut.',
        ues: [
          U('3.4', 'S6', 'Initiation à la démarche de recherche', 6, 10, 20, 20, 3, [8], 'Mémoire de fin d’études (TFE)'),
          U('5.6', 'S6', 'Analyse de la qualité et traitement des données scientifiques et professionnelles', 6, 0, 30, 25, 5, [7, 8], 'Mémoire de fin d’études et argumentation orale'),
          U('5.7', 'S6', 'Optionnelle', 2, 0, 20, 20, 5, [], 'Travail relatif à l’UE optionnelle choisie'),
          U('6.2', 'S6', 'Anglais', 1, 0, 10, 10, 6, [8], 'Évaluation de compréhension / expression')
        ]
      }
    ]
  });
})();
