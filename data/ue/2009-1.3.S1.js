/* UE 1.3.S1 — Législation, éthique, déontologie */
(function () {
  'use strict';

  FICHES.registerUE({
    ref: '2009', ue: '1.3.S1',
    objectifs: [
      'Situer l’exercice infirmier dans son cadre réglementaire',
      'Distinguer les trois types de responsabilité du soignant',
      'Appliquer le secret professionnel et le droit à l’information',
      'Repérer les repères éthiques dans une situation de soin'
    ],

    fiches: [
      {
        id: 'l1', titre: 'Cadre d’exercice et responsabilités', duree: 12,
        motsCles: ['responsabilité', 'code de la santé publique', 'rôle propre', 'décret', 'faute'],
        blocs: [
          {
            type: 'liste', items: [
              'L’exercice infirmier est encadré par le **Code de la santé publique** (partie IV, livre III) : règles professionnelles, actes professionnels, exercice de la profession.',
              'Trois registres d’actes : les actes **relevant du rôle propre** (autonomes), les actes **sur prescription** médicale, et les actes accomplis **en présence d’un médecin**.',
              'Le **diplôme d’État** et l’inscription au tableau de l’Ordre conditionnent l’exercice.',
              'Le **Code de déontologie des infirmiers** (2016) intégré au CSP fixe les devoirs envers les patients, les confrères et la profession.'
            ]
          },
          {
            type: 'tableau', entetes: ['Responsabilité', 'Devant qui', 'Ce qu’elle sanctionne', 'Sanction type'],
            lignes: [
              ['**Civile**', 'Juridictions civiles (ou administrative en établissement public)', 'Un dommage causé à autrui', 'Indemnisation, réparation du préjudice'],
              ['**Pénale**', 'Juridictions pénales', 'Une infraction : blessures involontaires, non-assistance, violation du secret', 'Amende, emprisonnement'],
              ['**Disciplinaire**', 'Ordre national des infirmiers', 'Un manquement aux règles professionnelles', 'Avertissement, blâme, interdiction d’exercer'],
              ['**Statutaire**', 'L’employeur', 'Un manquement aux obligations de service', 'Avertissement, mise à pied, révocation']
            ]
          },
          {
            type: 'cle', items: [
              'Les responsabilités **se cumulent** : un même fait peut entraîner une sanction pénale, disciplinaire et statutaire.',
              'Exécuter une prescription que l’on sait dangereuse n’exonère pas : l’infirmier a un **devoir d’alerte et de refus**. Il doit alors le signaler et le tracer.',
              'La **non-assistance à personne en danger** engage la responsabilité pénale, y compris hors du temps de travail.'
            ]
          },
          {
            type: 'flash', items: [
              { q: 'Quelles sont les trois responsabilités du soignant ?', a: 'Civile (réparer un dommage), pénale (sanctionner une infraction), disciplinaire (devant l’Ordre). S’y ajoute la responsabilité statutaire devant l’employeur.' },
              { q: 'Une prescription douteuse doit-elle être exécutée ?', a: 'Non : devoir d’alerte, appel au prescripteur, et traçabilité de la démarche.' }
            ]
          }
        ]
      },

      {
        id: 'l2', titre: 'Secret professionnel et droits du patient', duree: 12,
        motsCles: ['secret professionnel', 'consentement', 'information', 'dossier', 'personne de confiance', 'directives anticipées'],
        blocs: [
          { type: 'def', texte: 'Le **secret professionnel** couvre tout ce qui est venu à la connaissance du soignant : ce qui est confié, mais aussi ce qui est vu, entendu, compris ou déduit. Il est **général et absolu**, et sa violation est un délit pénal.' },
          {
            type: 'cle', titre: 'Ce qui n’est pas une violation du secret', items: [
              'Le **secret partagé** entre professionnels participant à la prise en charge, limité à ce qui est **strictement nécessaire** à la continuité des soins.',
              'Les dérogations légales : déclaration des maladies à déclaration obligatoire, signalement de sévices sur mineur ou personne vulnérable, réquisition judiciaire.',
              'Le secret n’est pas opposable au patient lui-même : il a droit d’accès à son dossier.'
            ]
          },
          {
            type: 'tableau', entetes: ['Droit', 'Contenu', 'Texte de référence'],
            lignes: [
              ['Information', 'Loyale, claire et appropriée sur son état, les soins et les risques', 'Loi du 4 mars 2002 (Kouchner)'],
              ['Consentement', 'Libre et éclairé, révocable à tout moment ; refus de soin possible', 'Loi du 4 mars 2002'],
              ['Accès au dossier', 'Communication sous 8 jours (2 mois si informations de plus de 5 ans)', 'Loi du 4 mars 2002'],
              ['Personne de confiance', 'Désignée par écrit, accompagne et témoigne de la volonté du patient hors d’état de s’exprimer', 'Loi du 4 mars 2002, renforcée en 2016'],
              ['Directives anticipées', 'Volontés sur la fin de vie, **contraignantes** pour le médecin, sans limite de durée, révisables', 'Loi Claeys-Leonetti du 2 février 2016'],
              ['Refus de l’obstination déraisonnable', 'Droit à la sédation profonde et continue en fin de vie sous conditions', 'Loi Claeys-Leonetti du 2 février 2016']
            ]
          },
          {
            type: 'piege', items: [
              'La **personne de confiance** n’est pas forcément la personne à prévenir, ni la famille : elle est désignée par écrit par le patient et son avis prime sur celui des proches.',
              'Les directives anticipées **s’imposent** au médecin depuis 2016 — sauf urgence vitale le temps d’évaluer, ou si elles sont manifestement inappropriées.',
              'Un patient majeur et lucide peut refuser un soin, même vital. Le soignant doit informer des conséquences, réitérer, tracer — mais ne peut pas passer outre.',
              'Parler d’un patient dans un ascenseur, un couloir ou sur un réseau social est une violation du secret, même sans citer de nom si la personne est identifiable.'
            ]
          }
        ]
      },

      {
        id: 'l3', titre: 'Repères éthiques', duree: 10,
        motsCles: ['éthique', 'autonomie', 'bienfaisance', 'non-malfaisance', 'justice', 'dilemme', 'bientraitance'],
        blocs: [
          {
            type: 'tableau', entetes: ['Principe', 'Ce qu’il implique', 'Tension fréquente'],
            lignes: [
              ['**Autonomie**', 'Respecter la volonté et les choix de la personne', 'Face au refus d’un soin jugé nécessaire'],
              ['**Bienfaisance**', 'Agir pour le bien de la personne', 'Face à ce que le soignant croit être le bien'],
              ['**Non-malfaisance**', 'Ne pas nuire, y compris par excès de soin', 'Face à l’obstination déraisonnable'],
              ['**Justice**', 'Équité d’accès et de traitement', 'Face à la pénurie de moyens ou de temps']
            ]
          },
          {
            type: 'etapes', titre: 'Analyser un dilemme éthique', items: [
              'Décrire les faits, sans interprétation ni jugement.',
              'Identifier les personnes concernées et ce qui est en jeu pour chacune.',
              'Nommer les valeurs et les principes qui s’opposent — un dilemme, c’est deux bonnes raisons contradictoires.',
              'Rechercher le cadre légal et déontologique applicable.',
              'Envisager les options possibles et leurs conséquences.',
              'Décider **collégialement** quand c’est possible, argumenter et tracer la décision.',
              'Réévaluer : une décision éthique n’est pas définitive.'
            ]
          },
          {
            type: 'cle', items: [
              '**Éthique** : questionnement sur ce qu’il est juste de faire dans une situation singulière. **Déontologie** : règles de la profession. **Morale** : valeurs personnelles ou collectives. **Droit** : ce qui est obligatoire.',
              '**Bientraitance** : démarche active et collective, pas une simple absence de maltraitance.',
              'La **maltraitance ordinaire** est celle des petits gestes : entrer sans frapper, parler du patient à la troisième personne devant lui, imposer un rythme, ne pas répondre à une sonnette. Elle est involontaire, et c’est ce qui la rend fréquente.'
            ]
          },
          { type: 'piege', texte: 'Un dilemme éthique n’a pas de bonne réponse évidente : en évaluation, ce n’est pas la conclusion qui est notée, c’est la qualité du raisonnement et la capacité à tenir les deux versants du problème.' }
        ]
      }
    ],

    qcm: [
      { id: 'lq1', enonce: 'Les responsabilités du soignant comprennent :', choix: ['la responsabilité civile', 'la responsabilité pénale', 'la responsabilité disciplinaire', 'elles ne peuvent pas se cumuler'], bonnes: [0, 1, 2], explication: 'Civile (réparer), pénale (sanctionner), disciplinaire (devant l’Ordre), plus la responsabilité statutaire devant l’employeur. Elles se cumulent pour un même fait.', difficulte: 2 },
      { id: 'lq2', enonce: 'Face à une prescription manifestement dangereuse, l’infirmier :', choix: ['doit l’exécuter, la responsabilité incombant au prescripteur', 'doit alerter le prescripteur et ne pas administrer', 'doit tracer sa démarche', 'peut modifier la dose de lui-même'], bonnes: [1, 2], explication: 'Devoir d’alerte et de refus : exécuter n’exonère pas. On appelle, on n’administre pas, on trace. Modifier soi-même une prescription est en revanche une faute.', difficulte: 2 },
      { id: 'lq3', enonce: 'Le secret professionnel couvre :', choix: ['uniquement ce que le patient a confié', 'tout ce qui est vu, entendu, compris ou déduit', 'seulement les informations médicales', 'seulement pendant le temps de travail'], bonnes: [1], explication: 'Général et absolu : il couvre tout ce qui vient à la connaissance du soignant, y compris ce qui est déduit, et il ne s’arrête pas à la fin du service.', difficulte: 2 },
      { id: 'lq4', enonce: 'Le secret partagé :', choix: ['autorise à tout dire à toute l’équipe', 'est limité à ce qui est strictement nécessaire à la prise en charge', 'concerne les professionnels participant aux soins', 'permet d’informer la famille librement'], bonnes: [1, 2], explication: 'Partage limité aux professionnels de la prise en charge et à ce qui est nécessaire à la continuité des soins. La famille n’est informée qu’avec l’accord du patient.', difficulte: 3 },
      { id: 'lq5', enonce: 'La loi du 4 mars 2002 est notamment relative :', choix: ['aux droits des malades et à la qualité du système de santé', 'à la fin de vie', 'au statut de la fonction publique hospitalière', 'à l’accès au dossier médical'], bonnes: [0, 3], explication: 'Loi Kouchner : information, consentement, accès direct au dossier, désignation de la personne de confiance. La fin de vie relève de Leonetti (2005) puis Claeys-Leonetti (2016).', difficulte: 2 },
      { id: 'lq6', enonce: 'Les directives anticipées :', choix: ['ont une durée de validité de 3 ans', 'sont contraignantes pour le médecin', 'sont révisables et révocables à tout moment', 'ne concernent que les personnes en fin de vie'], bonnes: [1, 2], explication: 'Depuis la loi Claeys-Leonetti de 2016 : plus de limite de durée, valeur contraignante (sauf urgence vitale le temps d’évaluer ou caractère manifestement inapproprié), révisables à tout moment. Toute personne majeure peut en rédiger.', difficulte: 3 },
      { id: 'lq7', enonce: 'La personne de confiance :', choix: ['est obligatoirement un membre de la famille', 'est désignée par écrit par le patient', 'peut être consultée si le patient ne peut plus s’exprimer', 'décide à la place du patient'], bonnes: [1, 2], explication: 'Désignée par écrit, ce peut être un proche, un parent ou le médecin traitant. Elle témoigne de la volonté du patient : elle ne décide pas à sa place, mais son avis prime sur celui des autres proches.', difficulte: 2 },
      { id: 'lq8', enonce: 'Un patient majeur et lucide refuse une transfusion vitale. L’équipe doit :', choix: ['passer outre car sa vie est en jeu', 'l’informer des conséquences, réitérer la proposition et tracer', 'respecter son refus', 'demander l’avis de la famille qui décidera'], bonnes: [1, 2], explication: 'Le refus d’un patient majeur et lucide s’impose. L’équipe informe des conséquences, réitère dans un délai raisonnable, propose un autre avis et trace la démarche. La famille ne décide pas pour un patient capable.', difficulte: 3 },
      { id: 'lq9', enonce: 'Quels sont les quatre principes de l’éthique biomédicale ?', choix: ['Autonomie, bienfaisance, non-malfaisance, justice', 'Sécurité, qualité, efficience, traçabilité', 'Respect, écoute, discrétion, neutralité', 'Liberté, égalité, fraternité, laïcité'], bonnes: [0], explication: 'Les quatre principes de Beauchamp et Childress. Un dilemme éthique naît précisément quand deux de ces principes s’opposent.', difficulte: 2 },
      { id: 'lq10', enonce: 'La bientraitance est :', choix: ['la simple absence de maltraitance', 'une démarche active et collective', 'une obligation individuelle uniquement', 'un concept sans traduction concrète'], bonnes: [1], explication: 'C’est une démarche construite, collective et évaluable, portée par l’organisation autant que par les individus — pas une simple absence de faute.', difficulte: 2 },
      { id: 'lq11', enonce: 'Lesquels de ces comportements relèvent de la maltraitance ordinaire ?', choix: ['Entrer dans la chambre sans frapper', 'Parler du patient à la troisième personne devant lui', 'Prendre le temps d’expliquer un soin', 'Ne pas répondre à une sonnette par manque de temps'], bonnes: [0, 1, 3], explication: 'La maltraitance ordinaire est faite de petits gestes involontaires, souvent liés à l’organisation. Les nommer sans culpabiliser est le point de départ d’une démarche de bientraitance.', difficulte: 2 },
      { id: 'lq12', enonce: 'Publier sur un réseau social une anecdote de service sans citer de nom :', choix: ['est autorisé si le nom n’apparaît pas', 'peut constituer une violation du secret si la personne est identifiable', 'relève de la liberté d’expression', 'est passible de sanctions'], bonnes: [1, 3], explication: 'L’identifiabilité suffit : un contexte, une date, une pathologie rare peuvent identifier. Sanctions pénales, disciplinaires et statutaires cumulables.', difficulte: 2 }
    ]
  });
})();
