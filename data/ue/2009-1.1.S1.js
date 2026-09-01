/* UE 1.1.S1 — Psychologie, sociologie, anthropologie (format allégé) */
(function () {
  'use strict';

  FICHES.registerUE({
    ref: '2009', ue: '1.1.S1',
    objectifs: [
      'Situer les apports de la psychologie, de la sociologie et de l’anthropologie dans le soin',
      'Repérer les mécanismes de défense et les réactions à la maladie',
      'Adapter sa communication aux besoins de la personne'
    ],
    fiches: [
      {
        id: 'ps1', titre: 'Réactions psychiques à la maladie', duree: 10,
        motsCles: ['déni', 'mécanismes de défense', 'annonce', 'deuil', 'Kübler-Ross', 'régression'],
        blocs: [
          { type: 'para', texte: 'La maladie est une **rupture biographique** : elle bouscule l’image de soi, les rôles sociaux et les projets. Les réactions qu’on observe ne sont pas des « mauvaises attitudes », ce sont des mécanismes de protection.' },
          {
            type: 'tableau', entetes: ['Mécanisme', 'Ce qu’on observe', 'Attitude soignante'],
            lignes: [
              ['**Déni**', 'La personne agit comme si l’annonce n’avait pas eu lieu', 'Ne pas confronter brutalement, rester disponible, laisser le temps'],
              ['**Régression**', 'Dépendance, exigences, comportement infantile', 'Cadre bienveillant et stable, réactiver l’autonomie progressivement'],
              ['**Projection agressive**', 'Reproches, colère dirigée vers l’équipe', 'Ne pas prendre pour soi, nommer sans juger, rester présent'],
              ['**Rationalisation**', 'Discours très technique, distance intellectuelle', 'Accepter le registre, laisser une porte ouverte à l’émotion'],
              ['**Isolation**', 'Parle de sa maladie sans aucune émotion', 'Ne pas forcer l’expression émotionnelle']
            ]
          },
          { type: 'cle', titre: 'Étapes de Kübler-Ross', items: ['Déni · Colère · Marchandage · Dépression · Acceptation', 'Elles ne sont **ni linéaires ni obligatoires** : on peut revenir en arrière, en sauter, ou ne jamais atteindre l’acceptation. Les utiliser comme une grille de lecture, jamais comme un programme.'] },
          { type: 'piege', texte: 'Un patient « difficile » est presque toujours un patient en difficulté. La question utile n’est pas « comment le faire coopérer » mais « qu’est-ce qui, pour lui, est en jeu ici ».' }
        ]
      },
      {
        id: 'ps2', titre: 'Communication et relation de soin', duree: 10,
        motsCles: ['communication', 'écoute active', 'reformulation', 'empathie', 'non verbal', 'annonce'],
        blocs: [
          {
            type: 'cle', titre: 'Écoute active — quatre outils', items: [
              '**Reformulation** : « si je comprends bien, ce qui vous inquiète, c’est… » — vérifie et montre qu’on a entendu.',
              '**Question ouverte** : « comment ça se passe pour vous ? » plutôt que « ça va ? ».',
              '**Silence** : laisser un temps après une phrase difficile. C’est l’outil le plus efficace et le moins utilisé.',
              '**Reflet émotionnel** : nommer ce qu’on perçoit sans l’imposer — « ça a l’air difficile à dire ».'
            ]
          },
          {
            type: 'tableau', entetes: ['Notion', 'Définition', 'Limite'],
            lignes: [
              ['Empathie', 'Comprendre ce que vit l’autre sans le vivre à sa place', 'C’est la posture attendue'],
              ['Sympathie', 'Éprouver la même émotion que l’autre', 'Fait perdre la capacité d’aider'],
              ['Antipathie', 'Rejet', 'À reconnaître en soi pour ne pas la faire subir au patient']
            ]
          },
          { type: 'cle', texte: 'La communication **non verbale** porte l’essentiel du message : position du corps, regard, distance, ton. Se mettre à hauteur d’une personne alitée change plus la relation que le contenu des phrases.' },
          { type: 'piege', items: ['Rassurer trop vite (« ne vous inquiétez pas, tout va bien se passer ») ferme la conversation et disqualifie l’inquiétude.', 'Parler à la place du patient devant lui, avec la famille, est une des atteintes à la dignité les plus fréquentes.', 'Le soignant n’est pas là pour tout résoudre : parfois, rester est le soin.'] }
        ]
      },
      {
        id: 'ps3', titre: 'Repères sociologiques et anthropologiques', duree: 8,
        motsCles: ['représentations', 'culture', 'inégalités sociales', 'précarité', 'rites', 'interculturel'],
        blocs: [
          {
            type: 'liste', items: [
              '**Représentations de la santé** : la maladie est vécue à travers une culture, une histoire familiale, une religion. Deux personnes avec la même pathologie n’ont pas la même maladie.',
              '**Inégalités sociales de santé** : à pathologie égale, l’espérance de vie et le recours aux soins varient fortement selon la catégorie sociale. Le renoncement aux soins est d’abord un phénomène social, pas un manque de motivation.',
              '**Approche interculturelle** : ne pas plaquer un savoir culturel général sur un individu. On demande à la personne ce qui compte pour elle plutôt que de le déduire de son origine supposée.',
              '**Rites autour du corps** : toilette mortuaire, alimentation, pudeur, présence de la famille. Les connaître évite les maladresses, mais la règle reste de demander.'
            ]
          },
          { type: 'cle', texte: 'L’institution hospitalière produit ses propres effets : dépossession des objets personnels, perte des repères temporels, tutoiement, attente. Les repérer, c’est déjà pouvoir en limiter la portée.' }
        ]
      }
    ],
    qcm: [
      { id: 'psq1', enonce: 'Le déni après une annonce diagnostique est :', choix: ['un refus volontaire de coopérer', 'un mécanisme de défense inconscient', 'un signe de trouble psychiatrique', 'à confronter immédiatement'], bonnes: [1], explication: 'C’est une protection psychique inconsciente. On ne le confronte pas frontalement : on reste disponible et on laisse le temps du cheminement.', difficulte: 2 },
      { id: 'psq2', enonce: 'Les étapes décrites par Kübler-Ross sont :', choix: ['linéaires et obligatoires', 'une grille de lecture, non linéaire', 'déni, colère, marchandage, dépression, acceptation', 'valables uniquement en fin de vie'], bonnes: [1, 2], explication: 'On peut revenir en arrière, en sauter, ou ne jamais atteindre l’acceptation. C’est une grille de lecture applicable à toute perte, pas seulement à la fin de vie.', difficulte: 2 },
      { id: 'psq3', enonce: 'L’empathie se distingue de la sympathie parce qu’elle :', choix: ['implique de ressentir la même émotion', 'permet de comprendre sans se confondre', 'suppose une distance froide', 'préserve la capacité d’aider'], bonnes: [1, 3], explication: 'La sympathie fait éprouver la même émotion et fait perdre la capacité d’agir. L’empathie comprend sans se confondre — ce n’est pas de la froideur.', difficulte: 2 },
      { id: 'psq4', enonce: 'Quelle attitude relève de l’écoute active ?', choix: ['Reformuler ce que dit la personne', 'Rassurer immédiatement en minimisant', 'Utiliser des questions ouvertes', 'Laisser des silences'], bonnes: [0, 2, 3], explication: 'Reformulation, questions ouvertes, silence, reflet émotionnel. Rassurer trop vite ferme la conversation et disqualifie l’inquiétude.', difficulte: 1 },
      { id: 'psq5', enonce: 'Un patient agressif envers l’équipe après une annonce grave :', choix: ['doit être sanctionné', 'exprime probablement un mécanisme de projection', 'doit être écouté sans que le soignant prenne l’agressivité pour lui', 'relève systématiquement d’un avis psychiatrique'], bonnes: [1, 2], explication: 'La projection agressive est un mécanisme de défense. Ne pas prendre pour soi, nommer sans juger, rester présent — sans pour autant accepter la violence.', difficulte: 2 },
      { id: 'psq6', enonce: 'Les inégalités sociales de santé signifient que :', choix: ['l’espérance de vie varie selon la catégorie sociale', 'le renoncement aux soins est surtout un manque de motivation', 'le recours aux soins dépend de facteurs sociaux', 'elles disparaissent avec la gratuité des soins'], bonnes: [0, 2], explication: 'Le gradient social de santé est massif et persiste malgré la couverture maladie. Le renoncement aux soins est un phénomène social : coût, transport, horaires, rapport à l’institution.', difficulte: 3 },
      { id: 'psq7', enonce: 'Face à une pratique culturelle qu’on ne connaît pas, la bonne attitude est :', choix: ['appliquer ce qu’on sait de cette culture en général', 'demander à la personne ce qui compte pour elle', 'ignorer la dimension culturelle', 'refuser toute adaptation'], bonnes: [1], explication: 'Plaquer un savoir culturel général sur un individu est une forme de stéréotype. On demande, on ne déduit pas.', difficulte: 2 },
      { id: 'psq8', enonce: 'La communication non verbale :', choix: ['est secondaire par rapport aux mots', 'porte une large part du message', 'inclut la position du corps et la distance', 'ne concerne pas le soignant'], bonnes: [1, 2], explication: 'Posture, regard, distance, ton. Se mettre à hauteur d’une personne alitée modifie la relation davantage que le contenu des phrases.', difficulte: 1 },
      { id: 'psq9', enonce: 'La régression chez un patient hospitalisé se manifeste par :', choix: ['une dépendance et des exigences accrues', 'une hyperactivité professionnelle', 'un comportement plus infantile qu’à l’habitude', 'un refus de tout contact'], bonnes: [0, 2], explication: 'La régression est un repli vers un mode de fonctionnement antérieur, protecteur. Un cadre stable et une réactivation progressive de l’autonomie sont la réponse.', difficulte: 2 },
      { id: 'psq10', enonce: 'L’expression « patient difficile » :', choix: ['décrit un trait de personnalité stable', 'désigne le plus souvent un patient en difficulté', 'invite à chercher ce qui est en jeu pour lui', 'est un diagnostic infirmier'], bonnes: [1, 2], explication: 'Ce n’est ni un diagnostic ni un trait de caractère : c’est le signe qu’une difficulté n’a pas été identifiée — douleur, peur, incompréhension, perte de contrôle.', difficulte: 2 }
    ]
  });
})();
