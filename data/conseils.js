/* ============================================================
   conseils.js — méthodologie de révision
   ============================================================ */
(function () {
  'use strict';

  FICHES.registerConseils({
    titre: 'Conseils de révision',
    intro: 'Ce qui marche vraiment en IFSI : peu de temps, mais souvent, et toujours en se testant.',
    sections: [

      {
        id: 'principe', titre: '1. Le principe qui change tout : se tester, pas relire',
        blocs: [
          { type: 'para', texte: 'Relire une fiche donne une **impression** de maîtrise (« je reconnais, donc je sais »). C’est l’illusion de fluidité. Se tester crée la maîtrise réelle : l’effort de récupération en mémoire est ce qui consolide la trace.' },
          {
            type: 'tableau',
            entetes: ['Méthode', 'Sensation sur le moment', 'Rétention à 1 mois'],
            lignes: [
              ['Relire 4 fois', 'Confortable, rassurant', 'Faible'],
              ['Lire 1 fois + se tester 3 fois', 'Inconfortable, frustrant', 'Élevée'],
              ['Surligner', 'Productif', 'Quasi nulle si on s’arrête là']
            ]
          },
          {
            type: 'cle', items: [
              'Une fiche lue sans test = une fiche non révisée.',
              'Le test raté est plus utile que le test réussi : il montre exactement où réviser.',
              'Refais un QCM à 48 h, puis à 1 semaine, puis à 3 semaines.'
            ]
          }
        ]
      },

      {
        id: 'espacee', titre: '2. La répétition espacée (et pourquoi cette appli la gère pour toi)',
        blocs: [
          { type: 'para', texte: 'La courbe de l’oubli est brutale : sans réactivation, il reste environ 30 % d’un cours à 48 h. Réactiver **juste avant d’oublier** rallonge à chaque fois la durée de rétention.' },
          {
            type: 'etapes', items: [
              'Jour J : tu vois le cours en amphi ou tu lis la fiche.',
              'Jour J+1 : tu refais le QCM de l’UE (10 minutes suffisent).',
              'Jour J+3 : tu refais uniquement tes erreurs.',
              'Jour J+7 : session mixte avec d’autres UE.',
              'Jour J+21 : dernier passage, tu ne gardes que les questions encore fragiles.'
            ]
          },
          { type: 'note', titre: 'Dans l’appli', texte: 'Chaque question ratée retombe en boîte 1 et revient dès le lendemain ; chaque réussite la fait monter d’une boîte (1 → 2 → 4 → 8 → 16 jours). Le bouton **Session de révision → Revoir mes erreurs** ne te ressert que ce qui est dû.' }
        ]
      },

      {
        id: 'planning', titre: '3. Un planning qui tient avec les stages',
        blocs: [
          { type: 'para', texte: 'Le piège de l’IFSI n’est pas le volume, c’est l’alternance : 10 semaines de stage effacent le cours si rien ne le réactive. La règle est donc de ne jamais couper complètement.' },
          {
            type: 'tableau',
            entetes: ['Période', 'Charge réaliste', 'Objectif'],
            lignes: [
              ['Semaine de cours', '45 min/jour + 2 h le week-end', 'Fiche du jour + QCM de la veille'],
              ['Semaine de stage', '15 min/jour, 3 jours sur 7', 'Uniquement les questions dues (boîtes de Leitner)'],
              ['15 jours avant partiels', '2 × 1 h/jour', 'QCM complets par UE, puis erreurs uniquement'],
              ['Veille de partiel', '1 h maximum', 'Relecture des blocs « À retenir » et « Pièges », rien de neuf']
            ]
          },
          {
            type: 'piege', items: [
              'Bachoter la veille : ça passe parfois le partiel, ça ne passe jamais le semestre suivant, qui réutilise tout.',
              'Réviser une UE entière d’un bloc : tu satures. Alterne deux UE dans une même session (effet d’interférence bénéfique).',
              'Attendre d’avoir « le temps » : les blocs de 20 minutes battent les journées entières qui n’arrivent jamais.'
            ]
          }
        ]
      },

      {
        id: 'anatomie', titre: '4. Anatomie-physiologie : comprendre avant de mémoriser',
        blocs: [
          { type: 'para', texte: 'L’UE 2.2 est celle où le par-cœur pur échoue. Le raccourci qui marche : pour chaque structure, réponds à trois questions — **où c’est**, **à quoi ça sert**, **ce qui se passe si ça lâche**.' },
          {
            type: 'liste', items: [
              'Dessine plutôt que relire : un schéma refait de mémoire, même moche, vaut dix relectures.',
              'Raisonne par conséquence clinique : « le rein filtre » → « insuffisance rénale = surcharge hydrique + hyperkaliémie ». C’est ce lien qui tombe aux partiels.',
              'Apprends les normes biologiques en même temps que la physiologie, jamais comme une liste isolée.'
            ]
          },
          { type: 'mnemo', texte: 'Pour les 12 paires de nerfs crâniens : **O**h **O**h **O**h **T**ouchez **T**rois **A**vec **F**acilité **A**ux **G**enoux **V**oisins **A**vec **H**umour (I à XII).' }
        ]
      },

      {
        id: 'doses', titre: '5. Calculs de doses : la seule UE où l’entraînement quotidien est obligatoire',
        blocs: [
          { type: 'para', texte: 'Les calculs de doses (UE 2.11 et 4.4) sont éliminatoires dans beaucoup d’IFSI, souvent avec une note plancher à 20/20 exigée sur la partie calcul. Ce n’est pas une question d’intelligence, c’est une question de répétition.' },
          {
            type: 'etapes', items: [
              'Écris toujours les unités à chaque ligne. 90 % des erreurs sont des erreurs d’unité, pas de calcul.',
              'Convertis tout dans la même unité avant de poser l’opération.',
              'Pose systématiquement le produit en croix, même quand le calcul semble évident.',
              'Vérifie l’ordre de grandeur : une perfusion à 3 000 mL/h ou une dose à 0,0004 comprimé doivent te faire recommencer.',
              'Refais 5 calculs par jour pendant 3 semaines avant l’épreuve. C’est le seul protocole qui fonctionne.'
            ]
          },
          {
            type: 'cle', items: [
              'Débit (gouttes/min) = volume (mL) × facteur de gouttes ÷ durée (min). Facteur usuel : 20 gouttes = 1 mL pour les solutés clairs.',
              'Débit (mL/h) = volume total (mL) ÷ durée (h).',
              'Dose à administrer = (dose prescrite ÷ dose du contenant) × volume du contenant.'
            ]
          }
        ]
      },

      {
        id: 'analyse', titre: '6. Analyses de situation et UE d’intégration (5.x)',
        blocs: [
          { type: 'para', texte: 'Les UE 5.x ne se révisent pas comme un cours : elles évaluent une **méthode**. Le correcteur cherche une structure, pas de l’érudition.' },
          {
            type: 'etapes', items: [
              'Décrire la situation sans l’interpréter (faits, chiffres, propos rapportés).',
              'Repérer les données pertinentes et écarter le bruit.',
              'Formuler les problèmes de santé réels et les risques.',
              'Poser le diagnostic infirmier (problème + étiologie + signes) et les objectifs mesurables.',
              'Proposer les actions sur rôle propre et sur prescription, en les justifiant.',
              'Prévoir les critères d’évaluation et le réajustement.'
            ]
          },
          { type: 'piege', texte: 'L’erreur classique : sauter directement aux actions. Sans problème formulé ni objectif, les actions ne sont pas évaluables — c’est ce qui coûte le plus de points.' }
        ]
      },

      {
        id: 'stage', titre: '7. Transformer le stage en révision',
        blocs: [
          {
            type: 'liste', items: [
              'Tiens une liste courte : chaque jour, une pathologie vue, un médicament administré, un geste réalisé. Trois lignes, pas plus.',
              'Le soir, retrouve la fiche correspondante dans l’appli et relis uniquement le bloc « À retenir ». Cinq minutes.',
              'Demande le « pourquoi » d’une prescription au moins une fois par jour. Une réponse obtenue en situation se retient dix fois mieux qu’un paragraphe.',
              'Remplis ton portfolio au fil de l’eau : reconstituer 10 semaines la veille de l’entretien est une perte de temps pure.'
            ]
          },
          { type: 'note', texte: 'Le stage est aussi la meilleure préparation aux UE 5.x : garde deux ou trois situations marquantes en réserve, elles serviront de matière première pour les analyses écrites.' }
        ]
      },

      {
        id: 'tfe', titre: '8. Le mémoire de fin d’études (TFE)',
        blocs: [
          {
            type: 'etapes', items: [
              'S4 : note toutes les situations qui t’ont questionnée. Le sujet naît d’un étonnement, pas d’un thème à la mode.',
              'S5 : formule une question de départ, puis explore la littérature (CAIRN, BDSP, Google Scholar, revues professionnelles). Vise 15 à 25 références utiles.',
              'S5 : construis un cadre conceptuel avec 2 ou 3 concepts maximum, chacun défini par des auteurs.',
              'S6 : enquête exploratoire (souvent 3 à 5 entretiens semi-directifs), analyse, puis question de recherche définitive.',
              'S6 : soutenance — 10 minutes de présentation, 20 de questions. Prépare surtout tes limites méthodologiques : c’est ce qu’on te demandera.'
            ]
          },
          { type: 'piege', texte: 'Choisir un sujet trop large (« la bientraitance ») ou trop personnel (un deuil récent). Le bon sujet est étroit, professionnellement situé et documenté.' }
        ]
      },

      {
        id: 'outils', titre: '9. Organisation matérielle',
        blocs: [
          {
            type: 'liste', items: [
              'Une seule source par UE. Multiplier les supports (cours + 3 bouquins + 2 sites) est une façon élégante de ne rien apprendre.',
              'Fiche = 1 page maximum. Si ça déborde, c’est deux fiches.',
              'Travaille à deux une fois par semaine : s’expliquer mutuellement une notion révèle immédiatement les trous.',
              'Coupe les notifications pendant les blocs de travail. 25 minutes pleines valent 90 minutes hachées.',
              'Dors. La consolidation mnésique se fait pendant le sommeil : une nuit blanche avant un partiel détruit ce que la semaine a construit.'
            ]
          }
        ]
      },

      {
        id: 'partiel', titre: '10. Le jour du partiel',
        blocs: [
          {
            type: 'liste', items: [
              'Lis toutes les questions avant de commencer : ton cerveau travaille en arrière-plan sur les suivantes.',
              'QCM : traite d’abord ce que tu sais, marque les incertitudes, reviens après. Attention aux points négatifs s’il y en a.',
              'Question rédactionnelle : 2 minutes de plan au brouillon. Un devoir structuré et incomplet passe mieux qu’un devoir complet et désordonné.',
              'Calculs : refais le calcul par une deuxième méthode plutôt que de relire le même raisonnement.',
              'Garde 10 minutes de relecture pour les unités, les négations dans les énoncés et les questions oubliées.'
            ]
          }
        ]
      }
    ]
  });
})();
