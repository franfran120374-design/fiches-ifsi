/* UE 6.2.S1 — Anglais (format allégé) */
(function () {
  'use strict';
  FICHES.registerUE({
    ref: '2009', ue: '6.2.S1',
    objectifs: [
      'Acquérir le vocabulaire anglais de base du soin',
      'Comprendre une consigne simple et se présenter en situation de soin',
      'Lire un abstract d’article professionnel'
    ],
    fiches: [
      {
        id: 'en1', titre: 'Vocabulaire de base du soin', duree: 10,
        motsCles: ['anglais', 'vocabulary', 'nursing', 'symptoms', 'body'],
        blocs: [
          {
            type: 'tableau', entetes: ['Français', 'Anglais', 'Note'],
            lignes: [
              ['Infirmier(ère)', '*nurse* — *registered nurse (RN)*', 'Étudiant : *nursing student*'],
              ['Soin, prendre soin', '*care*, *to care for*', '*nursing care* = les soins infirmiers'],
              ['Service, unité', '*ward*, *unit*', '*A&E* / *ER* = urgences'],
              ['Antécédents', '*medical history*', 'Faux ami fréquent'],
              ['Traitement en cours', '*current medication*', ''],
              ['Ordonnance', '*prescription*', '*a drug* = un médicament, pas seulement une drogue'],
              ['Douleur', '*pain* — *sore*, *ache*', '*headache*, *stomach ache*, *sore throat*'],
              ['Essoufflement', '*shortness of breath*', '*breathless*'],
              ['Plaie, pansement', '*wound*, *dressing*', '*bandage* = bande'],
              ['Prise de sang', '*blood test*, *blood sample*', '*to draw blood*'],
              ['Tension artérielle', '*blood pressure*', '*to take someone’s blood pressure*'],
              ['Chute', '*fall*', '*fall risk*'],
              ['Nausées / vomissements', '*nausea* / *vomiting*', ''],
              ['Escarre', '*pressure ulcer*, *bedsore*', ''],
              ['Perfusion', '*IV drip*, *infusion*', '']
            ]
          },
          { type: 'piege', texte: 'Faux amis courants : *actually* = en réalité (pas « actuellement ») · *eventually* = finalement (pas « éventuellement ») · *drug* = médicament · *injury* = blessure · *to assist* = aider (assister à = *to attend*).' }
        ]
      },
      {
        id: 'en2', titre: 'Phrases utiles en situation de soin', duree: 8,
        motsCles: ['phrases', 'communication', 'patient', 'pain scale'],
        blocs: [
          {
            type: 'liste', items: [
              '*Hello, my name is… I am the nurse looking after you today.*',
              '*How are you feeling this morning?*',
              '*Are you in any pain? Can you rate it from 0 to 10?*',
              '*Where exactly does it hurt? Does it spread anywhere?*',
              '*I am going to take your blood pressure / temperature. Is that all right?*',
              '*I need to take a blood sample. You will feel a small sting.*',
              '*Can you tell me your full name and date of birth, please?*',
              '*Do you have any allergies?*',
              '*Are you taking any medication at the moment?*',
              '*Try to take a deep breath and hold it.*',
              '*Press this button if you need anything. I will come back to check on you.*'
            ]
          },
          { type: 'cle', texte: 'Lire un **abstract** : la structure est presque toujours *Background / Aim / Methods / Results / Conclusion*. Commence par la conclusion, puis remonte à la méthode. C’est suffisant pour savoir si l’article te sert.' }
        ]
      }
    ],
    qcm: [
      { id: 'enq1', enonce: '« Medical history » signifie :', choix: ['histoire de la médecine', 'antécédents médicaux', 'dossier administratif', 'traitement en cours'], bonnes: [1], explication: 'Faux ami classique. *Medical history* = les antécédents. Le traitement en cours est *current medication*.', difficulte: 1 },
      { id: 'enq2', enonce: 'Comment demander à un patient d’évaluer sa douleur ?', choix: ['*Do you have a pain?*', '*Are you in any pain? Can you rate it from 0 to 10?*', '*Is it hurting you a lot, no?*', '*What is your pain number?*'], bonnes: [1], explication: 'Formulation usuelle et correcte. On dit *to be in pain*, pas *to have a pain*.', difficulte: 2 },
      { id: 'enq3', enonce: '« Shortness of breath » désigne :', choix: ['une haleine courte', 'un essoufflement, une dyspnée', 'un arrêt respiratoire', 'une respiration lente'], bonnes: [1], explication: '*Shortness of breath* = dyspnée, essoufflement. On dit aussi *breathless*.', difficulte: 1 },
      { id: 'enq4', enonce: 'Que signifie « actually » ?', choix: ['actuellement', 'en réalité', 'éventuellement', 'immédiatement'], bonnes: [1], explication: 'Faux ami : *actually* = en réalité. « Actuellement » se dit *currently* ou *at the moment*.', difficulte: 2 },
      { id: 'enq5', enonce: '« Pressure ulcer » correspond à :', choix: ['un ulcère gastrique', 'une escarre', 'un ulcère variqueux', 'une brûlure'], bonnes: [1], explication: '*Pressure ulcer* ou *bedsore* = escarre. L’ulcère gastrique est *peptic ulcer*.', difficulte: 2 },
      { id: 'enq6', enonce: 'La structure habituelle d’un abstract scientifique est :', choix: ['Introduction, Discussion, Bibliographie', 'Background, Aim, Methods, Results, Conclusion', 'Résumé, Sommaire, Annexes', 'Titre, Auteurs, Mots-clés'], bonnes: [1], explication: 'Background / Aim / Methods / Results / Conclusion. Commencer par la conclusion puis remonter à la méthode suffit pour trier les articles.', difficulte: 2 },
      { id: 'enq7', enonce: '« To draw blood » signifie :', choix: ['dessiner du sang', 'faire une prise de sang', 'perdre du sang', 'transfuser'], bonnes: [1], explication: '*To draw blood* = prélever du sang. Une prise de sang est *a blood test* ou *a blood sample*.', difficulte: 1 },
      { id: 'enq8', enonce: 'Comment vérifier l’identité d’un patient en anglais ?', choix: ['*Are you Mr Smith?*', '*Can you tell me your full name and date of birth, please?*', '*You are in room 12, right?*', '*Is your name correct on this label?*'], bonnes: [1], explication: 'Comme en français, on fait énoncer activement l’identité plutôt que de la faire confirmer par oui ou non — une question fermée est une source d’erreur d’identité.', difficulte: 2 }
    ]
  });
})();
