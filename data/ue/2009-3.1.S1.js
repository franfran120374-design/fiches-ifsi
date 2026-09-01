/* UE 3.1.S1 — Raisonnement et démarche clinique infirmière */
(function () {
  'use strict';

  var SVG_DEMARCHE =
    '<svg viewBox="0 0 620 300" role="img" aria-label="Les cinq étapes de la démarche de soins">' +
    '<circle cx="310" cy="150" r="52" fill="var(--accent-soft)" stroke="var(--accent)" stroke-width="2"/>' +
    '<text x="310" y="145" text-anchor="middle" font-size="12.5" font-weight="700" fill="var(--txt)">Démarche</text>' +
    '<text x="310" y="163" text-anchor="middle" font-size="12.5" font-weight="700" fill="var(--txt)">de soins</text>' +
    '<g font-size="12" fill="var(--txt-2)" text-anchor="middle">' +
    '<rect x="230" y="12" width="160" height="46" rx="10" fill="var(--bg-elev)" stroke="var(--accent)" stroke-width="1.8"/>' +
    '<text x="310" y="32" font-size="12" font-weight="700" fill="var(--txt)">1. Recueil de données</text>' +
    '<text x="310" y="48">observer, questionner</text>' +
    '<rect x="440" y="105" width="170" height="46" rx="10" fill="var(--bg-elev)" stroke="var(--accent)" stroke-width="1.8"/>' +
    '<text x="525" y="125" font-size="12" font-weight="700" fill="var(--txt)">2. Analyse · diagnostic</text>' +
    '<text x="525" y="141">problème + causes</text>' +
    '<rect x="415" y="215" width="170" height="46" rx="10" fill="var(--bg-elev)" stroke="var(--accent)" stroke-width="1.8"/>' +
    '<text x="500" y="235" font-size="12" font-weight="700" fill="var(--txt)">3. Objectifs</text>' +
    '<text x="500" y="251">mesurables, datés</text>' +
    '<rect x="225" y="255" width="170" height="42" rx="10" fill="var(--bg-elev)" stroke="var(--accent)" stroke-width="1.8"/>' +
    '<text x="310" y="273" font-size="12" font-weight="700" fill="var(--txt)">4. Actions</text>' +
    '<text x="310" y="289">rôle propre / prescrit</text>' +
    '<rect x="20" y="150" width="170" height="46" rx="10" fill="var(--bg-elev)" stroke="var(--accent)" stroke-width="1.8"/>' +
    '<text x="105" y="170" font-size="12" font-weight="700" fill="var(--txt)">5. Évaluation</text>' +
    '<text x="105" y="186">réajuster</text>' +
    '</g>' +
    '<path d="M340 100 a 90 90 0 0 1 90 25" fill="none" stroke="var(--accent)" stroke-width="1.8" marker-end="url(#fd)"/>' +
    '<path d="M470 178 a 90 90 0 0 1 -40 42" fill="none" stroke="var(--accent)" stroke-width="1.8" marker-end="url(#fd)"/>' +
    '<path d="M410 258 h-10" fill="none" stroke="var(--accent)" stroke-width="1.8" marker-end="url(#fd)"/>' +
    '<path d="M250 250 a 90 90 0 0 1 -60 -50" fill="none" stroke="var(--accent)" stroke-width="1.8" marker-end="url(#fd)"/>' +
    '<path d="M120 145 a 110 110 0 0 1 110 -105" fill="none" stroke="var(--accent)" stroke-width="1.8" marker-end="url(#fd)"/>' +
    '<defs><marker id="fd" markerWidth="9" markerHeight="9" refX="8" refY="3" orient="auto"><path d="M0,0 L8,3 L0,6 z" fill="var(--accent)"/></marker></defs>' +
    '</svg>';

  FICHES.registerUE({
    ref: '2009', ue: '3.1.S1',
    objectifs: [
      'Conduire un recueil de données pertinent et structuré',
      'Distinguer données objectives et subjectives, signes et symptômes',
      'Formuler un diagnostic infirmier et le distinguer du diagnostic médical',
      'Poser des objectifs évaluables et choisir des actions justifiées'
    ],

    fiches: [
      {
        id: 'r1', titre: 'Les cinq étapes de la démarche de soins', duree: 12,
        motsCles: ['démarche de soins', 'recueil de données', 'diagnostic infirmier', 'objectif', 'évaluation'],
        accroche: 'C’est la méthode que les correcteurs cherchent dans toutes les analyses de situation, jusqu’au semestre 6.',
        blocs: [
          { type: 'schema', svg: SVG_DEMARCHE, legende: 'Une boucle, pas une ligne : l’évaluation relance le recueil.' },
          {
            type: 'tableau', entetes: ['Étape', 'Question à laquelle elle répond', 'Erreur fréquente'],
            lignes: [
              ['Recueil de données', 'Qui est cette personne, que se passe-t-il ?', 'Tout noter sans trier, ou interpréter au lieu de décrire'],
              ['Analyse et diagnostic', 'Quel est le problème, et pourquoi ?', 'Nommer le problème sans en chercher la cause'],
              ['Objectifs', 'Où veut-on arriver, et quand ?', 'Objectif vague, non mesurable, non daté'],
              ['Actions', 'Que fait-on concrètement, et pourquoi ?', 'Lister des actions sans les justifier'],
              ['Évaluation', 'Est-ce que ça a marché ? Que réajuste-t-on ?', 'Étape oubliée — c’est celle qui coûte le plus de points']
            ]
          },
          {
            type: 'cle', items: [
              '**Donnée objective** : mesurable, observable (PA 90/50, plaie de 3 cm, marbrures). **Donnée subjective** : rapportée par la personne (« j’ai mal », « je dors mal »). Les deux comptent, mais ne se rédigent pas de la même façon.',
              'Un **signe** s’observe, un **symptôme** se ressent et se rapporte.',
              'Le recueil s’appuie sur plusieurs sources : la personne, le dossier, l’entourage, l’équipe, l’observation directe.'
            ]
          },
          { type: 'piege', texte: 'L’erreur numéro un en évaluation : sauter directement aux actions. Sans problème formulé ni objectif posé, aucune action n’est évaluable — et c’est exactement ce que le correcteur note.' }
        ]
      },

      {
        id: 'r2', titre: 'Diagnostic infirmier : le formuler correctement', duree: 12,
        motsCles: ['diagnostic infirmier', 'PES', 'rôle propre', 'rôle prescrit', 'risque'],
        blocs: [
          { type: 'def', texte: 'Le **diagnostic infirmier** est un jugement clinique sur les réactions d’une personne à un problème de santé. Il relève du **rôle propre** de l’infirmier. Le **diagnostic médical** nomme la maladie et relève du médecin. Sur une même situation, les deux coexistent.' },
          {
            type: 'tableau', entetes: ['Situation', 'Diagnostic médical', 'Diagnostic infirmier'],
            lignes: [
              ['Mme D., 82 ans, fracture du col', 'Fracture du col du fémur', 'Risque d’escarre lié à l’immobilité et à la dénutrition'],
              ['M. R., BPCO', 'Bronchopneumopathie chronique obstructive', 'Intolérance à l’activité liée à la dyspnée d’effort, se manifestant par un arrêt tous les 10 mètres'],
              ['Mme L., diabète', 'Diabète de type 2 déséquilibré', 'Connaissances insuffisantes sur l’auto-surveillance glycémique, liées à un défaut d’information']
            ]
          },
          {
            type: 'cle', titre: 'La formule PES', items: [
              '**P — Problème** : l’intitulé du diagnostic (« altération de la mobilité physique »).',
              '**E — Étiologie** : « lié(e) à… » — la ou les causes sur lesquelles tu peux agir.',
              '**S — Signes** : « se manifestant par… » — ce qui te permet de l’affirmer.',
              'Exemple complet : *Douleur aiguë **liée à** la plaie opératoire, **se manifestant par** une EN à 7/10, une position antalgique et un refus de mobilisation.*',
              'Pour un diagnostic **de risque**, il n’y a pas de « se manifestant par » : le problème ne s’est pas encore produit. On écrit : *Risque d’escarre **lié à** l’immobilité et à la dénutrition.*'
            ]
          },
          {
            type: 'piege', items: [
              'Ne jamais mettre un diagnostic médical en étiologie d’un diagnostic infirmier (« liée à la BPCO ») : on ne peut pas agir dessus. On cherche la cause accessible au soin.',
              'Ne pas confondre le problème et le signe : « douleur » est un problème, « grimace » est un signe.',
              'Un diagnostic infirmier ne se copie pas d’un patient à l’autre : il est situé, daté, et il évolue.'
            ]
          },
          {
            type: 'flash', items: [
              { q: 'Que signifie PES ?', a: 'Problème, Étiologie (« lié à »), Signes (« se manifestant par »).' },
              { q: 'Un diagnostic de risque comporte-t-il des signes ?', a: 'Non : le problème ne s’est pas encore produit, il n’y a que P et E.' },
              { q: 'Qui pose le diagnostic infirmier ?', a: 'L’infirmier, dans le cadre de son rôle propre.' }
            ]
          }
        ]
      },

      {
        id: 'r3', titre: 'Objectifs, actions et transmissions', duree: 12,
        motsCles: ['objectif', 'SMART', 'transmissions ciblées', 'DAR', 'macrocible', 'traçabilité'],
        blocs: [
          {
            type: 'cle', titre: 'Un objectif utilisable est SMART', items: [
              '**S**pécifique — il porte sur une chose précise.',
              '**M**esurable — on saura dire s’il est atteint.',
              '**A**tteignable — réaliste au vu de l’état de la personne.',
              '**R**éaliste et centré sur la personne, pas sur le soignant.',
              '**T**emporellement défini — une échéance.',
              'Mauvais : « améliorer le confort ». Bon : « M. B. évaluera sa douleur à 3/10 ou moins au repos d’ici 48 h ».'
            ]
          },
          {
            type: 'tableau', entetes: ['', 'Rôle propre', 'Rôle prescrit'],
            lignes: [
              ['Décision', 'Autonome, sur jugement clinique infirmier', 'Sur prescription médicale'],
              ['Exemples', 'Installation, prévention d’escarre, soins d’hygiène, écoute, éducation, surveillance clinique', 'Administration médicamenteuse, prélèvements, pansements prescrits, perfusions'],
              ['Traçabilité', 'Obligatoire dans le dossier de soins', 'Obligatoire, avec la prescription en référence']
            ]
          },
          {
            type: 'cle', titre: 'Transmissions ciblées — méthode DAR', items: [
              '**Cible** : le problème en quelques mots (« douleur », « chute », « refus de soin »).',
              '**D — Données** : ce qui est observé ou rapporté, factuel.',
              '**A — Actions** : ce qui a été fait.',
              '**R — Résultat** : ce que ça a donné, et ce qui reste à faire.',
              'La **macrocible d’entrée** synthétise à l’admission ; la macrocible de sortie prépare la continuité.'
            ]
          },
          {
            type: 'piege', items: [
              'Écrire « patient algique » ne transmet rien. « EN 7/10 au mouvement, soulagé à 3/10 vingt minutes après paracétamol IV » transmet quelque chose.',
              'Les transmissions sont un document à valeur juridique : pas de jugement de valeur, pas d’abréviation ambiguë, pas d’avance sur l’acte. **Ce qui n’est pas tracé n’est pas fait.**',
              'Une transmission orale ne remplace jamais une transmission écrite.'
            ]
          }
        ]
      }
    ],

    qcm: [
      { id: 'rq1', enonce: 'Quelles sont les étapes de la démarche de soins, dans l’ordre ?', choix: ['Actions, recueil, objectifs, évaluation', 'Recueil de données, analyse et diagnostic, objectifs, actions, évaluation', 'Diagnostic, actions, recueil, objectifs', 'Objectifs, actions, évaluation'], bonnes: [1], explication: 'Cinq étapes en boucle : recueil, analyse et diagnostic, objectifs, actions, évaluation — et l’évaluation relance le recueil.', difficulte: 1 },
      { id: 'rq2', enonce: '« PA 90/50 mmHg » est une donnée :', choix: ['subjective', 'objective', 'interprétative', 'diagnostique'], bonnes: [1], explication: 'Mesurable et observable, donc objective. « Je me sens faible » serait une donnée subjective — tout aussi importante, mais rapportée.', difficulte: 1 },
      { id: 'rq3', enonce: 'La formule PES signifie :', choix: ['Problème, Étiologie, Signes', 'Patient, Environnement, Soins', 'Prévention, Évaluation, Suivi', 'Pathologie, Examen, Surveillance'], bonnes: [0], explication: 'Problème + « lié à » (étiologie) + « se manifestant par » (signes). C’est la structure attendue de tout diagnostic infirmier.', difficulte: 1 },
      { id: 'rq4', enonce: 'Un diagnostic infirmier de RISQUE :', choix: ['comporte des signes cliniques', 'ne comporte pas de « se manifestant par »', 'décrit un problème déjà installé', 'comporte une étiologie'], bonnes: [1, 3], explication: 'Le problème ne s’est pas encore produit : pas de signes. On garde uniquement le problème et les facteurs de risque : « Risque d’escarre lié à l’immobilité ».', difficulte: 3 },
      { id: 'rq5', enonce: 'Quelle formulation est correcte ?', choix: ['Altération de la mobilité liée à la BPCO', 'Altération de la mobilité liée à la douleur et à l’appréhension de la chute, se manifestant par un refus de se lever', 'Le patient ne veut pas marcher', 'Diagnostic : fracture du col du fémur'], bonnes: [1], explication: 'Un diagnostic médical (BPCO, fracture) ne peut pas servir d’étiologie : on ne peut pas agir dessus. On cherche la cause accessible au soin infirmier, et on cite les signes.', difficulte: 3 },
      { id: 'rq6', enonce: 'Lesquelles de ces actions relèvent du rôle propre infirmier ?', choix: ['La prévention d’escarre', 'L’administration d’un antibiotique IV', 'L’installation et le positionnement', 'L’éducation à la santé'], bonnes: [0, 2, 3], explication: 'L’administration médicamenteuse relève du rôle prescrit. Prévention, installation, écoute, éducation et surveillance clinique relèvent du rôle propre — et se tracent tout autant.', difficulte: 2 },
      { id: 'rq7', enonce: 'Quel objectif est correctement formulé ?', choix: ['Améliorer le confort du patient', 'Le patient ira mieux', 'M. B. évaluera sa douleur à 3/10 ou moins au repos d’ici 48 h', 'Faire les soins de confort'], bonnes: [2], explication: 'Spécifique, mesurable, centré sur la personne et daté. « Améliorer le confort » ne permet aucune évaluation, et « faire les soins » décrit une action, pas un objectif.', difficulte: 2 },
      { id: 'rq8', enonce: 'Dans les transmissions ciblées, DAR signifie :', choix: ['Diagnostic, Action, Résultat', 'Données, Actions, Résultat', 'Décision, Analyse, Réajustement', 'Douleur, Alimentation, Repos'], bonnes: [1], explication: 'Cible, puis Données (ce qu’on observe), Actions (ce qu’on fait), Résultat (ce que ça donne et ce qui reste à faire).', difficulte: 2 },
      { id: 'rq9', enonce: 'Une transmission correcte est :', choix: ['« Patient algique »', '« Patient pénible ce matin »', '« EN 7/10 au mouvement, paracétamol IV à 10 h, EN 3/10 à 10 h 20 »', '« RAS »'], bonnes: [2], explication: 'Factuel, chiffré, daté, avec l’action et son résultat. Les jugements de valeur n’ont pas leur place dans un document à valeur juridique, et « RAS » ne transmet rien.', difficulte: 2 },
      { id: 'rq10', enonce: 'Le diagnostic médical et le diagnostic infirmier :', choix: ['sont synonymes', 'coexistent sur une même situation', 'sont posés par la même personne', 'répondent à des logiques différentes'], bonnes: [1, 3], explication: 'Le diagnostic médical nomme la maladie, le diagnostic infirmier nomme les réactions de la personne à cette maladie. Ils se complètent sans se remplacer.', difficulte: 2 },
      { id: 'rq11', enonce: 'L’étape la plus souvent oubliée dans une analyse de situation est :', choix: ['le recueil de données', 'l’évaluation et le réajustement', 'les actions', 'le diagnostic médical'], bonnes: [1], explication: 'L’évaluation ferme la boucle et prouve que la démarche est un raisonnement, pas une liste. C’est celle qui coûte le plus de points en correction.', difficulte: 2 },
      { id: 'rq12', enonce: '« Ce qui n’est pas tracé n’est pas fait » signifie :', choix: ['qu’il faut tracer les soins à l’avance pour gagner du temps', 'que l’absence de trace écrite équivaut juridiquement à l’absence de soin', 'que seules les prescriptions se tracent', 'que la transmission orale suffit'], bonnes: [1], explication: 'Le dossier de soins a valeur de preuve. Tracer à l’avance est une faute grave, et la transmission orale ne remplace jamais l’écrit.', difficulte: 2 }
    ]
  });
})();
