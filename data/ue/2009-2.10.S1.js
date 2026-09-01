/* UE 2.10.S1 — Infectiologie, hygiène */
(function () {
  'use strict';

  var SVG_CHAINE =
    '<svg viewBox="0 0 640 260" role="img" aria-label="Chaîne épidémiologique de transmission">' +
    '<g font-size="12" fill="var(--txt-2)" text-anchor="middle">' +
    '<circle cx="70" cy="90" r="46" fill="var(--accent-soft)" stroke="var(--accent)" stroke-width="2"/>' +
    '<text x="70" y="86" font-size="12.5" font-weight="700" fill="var(--txt)">Agent</text>' +
    '<text x="70" y="103">infectieux</text>' +
    '<circle cx="212" cy="90" r="46" fill="var(--accent-soft)" stroke="var(--accent)" stroke-width="2"/>' +
    '<text x="212" y="86" font-size="12.5" font-weight="700" fill="var(--txt)">Réservoir</text>' +
    '<text x="212" y="103">humain, animal</text>' +
    '<circle cx="354" cy="90" r="46" fill="var(--accent-soft)" stroke="var(--rose)" stroke-width="2.5"/>' +
    '<text x="354" y="82" font-size="12.5" font-weight="700" fill="var(--txt)">Mode de</text>' +
    '<text x="354" y="99" font-size="12.5" font-weight="700" fill="var(--txt)">transmission</text>' +
    '<circle cx="496" cy="90" r="46" fill="var(--accent-soft)" stroke="var(--accent)" stroke-width="2"/>' +
    '<text x="496" y="86" font-size="12.5" font-weight="700" fill="var(--txt)">Porte</text>' +
    '<text x="496" y="103">d’entrée</text>' +
    '<circle cx="600" cy="196" r="40" fill="var(--accent-soft)" stroke="var(--accent)" stroke-width="2"/>' +
    '<text x="600" y="193" font-size="12.5" font-weight="700" fill="var(--txt)">Hôte</text>' +
    '<text x="600" y="210">réceptif</text>' +
    '</g>' +
    '<path d="M118 90 h46" stroke="var(--txt-3)" stroke-width="2" marker-end="url(#fa)"/>' +
    '<path d="M260 90 h46" stroke="var(--txt-3)" stroke-width="2" marker-end="url(#fa)"/>' +
    '<path d="M402 90 h46" stroke="var(--txt-3)" stroke-width="2" marker-end="url(#fa)"/>' +
    '<path d="M534 122 l32 40" stroke="var(--txt-3)" stroke-width="2" marker-end="url(#fa)"/>' +
    '<text x="354" y="170" text-anchor="middle" font-size="13" font-weight="700" fill="var(--rose)">⟵ C’est ici qu’on agit : hygiène des mains</text>' +
    '<defs><marker id="fa" markerWidth="9" markerHeight="9" refX="8" refY="3" orient="auto"><path d="M0,0 L8,3 L0,6 z" fill="var(--txt-3)"/></marker></defs>' +
    '</svg>';

  FICHES.registerUE({
    ref: '2009', ue: '2.10.S1',
    objectifs: [
      'Identifier les agents infectieux et leurs modes de transmission',
      'Appliquer les précautions standard et complémentaires',
      'Maîtriser l’hygiène des mains et les niveaux de traitement du matériel',
      'Comprendre la prévention des infections associées aux soins (IAS)'
    ],

    fiches: [
      {
        id: 'f1', titre: 'Agents infectieux et chaîne de transmission', duree: 10,
        motsCles: ['bactérie', 'virus', 'chaîne épidémiologique', 'transmission', 'gouttelettes', 'air', 'contact'],
        accroche: 'Casser un seul maillon suffit à empêcher l’infection. Le maillon accessible, c’est la transmission.',
        blocs: [
          { type: 'schema', svg: SVG_CHAINE, legende: 'La chaîne épidémiologique : six maillons, un seul à casser.' },
          {
            type: 'tableau', entetes: ['Agent', 'Caractéristique', 'Exemple'],
            lignes: [
              ['Bactérie', 'Procaryote, se multiplie seule, sensible aux antibiotiques', 'Staphylococcus aureus, E. coli, Clostridioides difficile'],
              ['Virus', 'Parasite intracellulaire obligatoire, insensible aux antibiotiques', 'Grippe, VRS, SARS-CoV-2, VIH, hépatites'],
              ['Champignon', 'Levure ou filamenteux, souvent opportuniste', 'Candida albicans, Aspergillus'],
              ['Parasite', 'Uni- ou pluricellulaire', 'Gale (Sarcoptes scabiei), paludisme'],
              ['ATNC (prion)', 'Protéine anormale, résiste aux procédés habituels', 'Maladie de Creutzfeldt-Jakob']
            ]
          },
          {
            type: 'tableau', entetes: ['Mode de transmission', 'Mécanisme', 'Précaution complémentaire'],
            lignes: [
              ['Contact', 'Direct (mains) ou indirect (matériel, surfaces)', 'Tablier ou surblouse + gants ; chambre individuelle si possible'],
              ['Gouttelettes (> 5 µm)', 'Projection à moins d’1 à 2 m : toux, parole', 'Masque chirurgical pour le soignant et le patient'],
              ['Air (< 5 µm)', 'Particules restant en suspension', 'Appareil de protection respiratoire FFP2, chambre en pression négative si disponible'],
              ['Vectorielle', 'Insecte ou arthropode', 'Protection anti-vectorielle'],
              ['Sanguine / AES', 'Exposition au sang ou aux liquides biologiques', 'Précautions standard renforcées, matériel sécurisé']
            ]
          },
          {
            type: 'cle', items: [
              '**Grippe, méningocoque, coqueluche** → gouttelettes. **Tuberculose, rougeole, varicelle** → air.',
              'Un germe transmis par voie aérienne impose un FFP2 ; un masque chirurgical ne protège pas le soignant dans ce cas.',
              'La **gale** et le **C. difficile** imposent des précautions contact avec des particularités : traitement de l’environnement pour la gale, **lavage des mains à l’eau et au savon** pour le C. difficile (les spores résistent au produit hydro-alcoolique).'
            ]
          }
        ]
      },

      {
        id: 'f2', titre: 'Précautions standard et hygiène des mains', duree: 12,
        motsCles: ['précautions standard', 'friction', 'hydro-alcoolique', 'gants', 'AES'],
        blocs: [
          { type: 'def', texte: 'Les **précautions standard** s’appliquent à **tout patient, en permanence, quel que soit son statut infectieux connu ou non**. Elles ne se décident pas au cas par cas.' },
          {
            type: 'etapes', items: [
              'Hygiène des mains avant et après chaque contact.',
              'Port de gants si contact avec du sang, un liquide biologique, une muqueuse ou une peau lésée — et uniquement dans ce cas.',
              'Protection de la tenue (tablier) si risque de projection.',
              'Masque et lunettes si risque de projection au visage.',
              'Gestion du matériel piquant/tranchant : jamais de recapuchonnage, collecteur à portée de main, élimination immédiate par l’opérateur.',
              'Entretien des surfaces et gestion des excreta selon les protocoles.'
            ]
          },
          {
            type: 'cle', titre: 'Les 5 indications de l’hygiène des mains (OMS)', items: [
              'Avant de toucher le patient',
              'Avant un geste aseptique',
              'Après un risque d’exposition à un liquide biologique',
              'Après avoir touché le patient',
              'Après avoir touché l’environnement du patient'
            ]
          },
          {
            type: 'tableau', entetes: ['Situation', 'Technique', 'Durée'],
            lignes: [
              ['Situation courante, mains non souillées', 'Friction hydro-alcoolique', '20 à 30 s, jusqu’à séchage complet'],
              ['Mains visiblement souillées', 'Lavage simple à l’eau et au savon', '30 s minimum, puis friction si besoin'],
              ['Patient porteur de C. difficile ou de gale', 'Lavage à l’eau et au savon obligatoire', 'La friction seule est insuffisante'],
              ['Geste chirurgical', 'Friction chirurgicale en deux temps', 'Selon protocole établissement']
            ]
          },
          {
            type: 'piege', items: [
              'Le port de gants **ne remplace jamais** l’hygiène des mains : on se frictionne avant de les enfiler et après les avoir retirés.',
              'Garder les mêmes gants d’un patient à l’autre, ou d’un site sale à un site propre, est une faute majeure.',
              'Bijoux, alliance, montre, faux ongles et vernis sont incompatibles avec l’hygiène des mains : rien en dessous du coude.',
              'La friction est inefficace sur des mains mouillées ou poudreuses.'
            ]
          },
          {
            type: 'flash', items: [
              { q: 'À qui s’appliquent les précautions standard ?', a: 'À tous les patients, en permanence, indépendamment du statut infectieux connu.' },
              { q: 'Quel germe impose un lavage à l’eau et au savon plutôt qu’une friction ?', a: 'Clostridioides difficile (spores résistantes à l’alcool) — également la gale.' },
              { q: 'Durée d’une friction hydro-alcoolique efficace ?', a: '20 à 30 secondes, jusqu’au séchage complet, sur mains sèches et non souillées.' },
              { q: 'Que faire d’une aiguille après usage ?', a: 'L’éliminer immédiatement dans le collecteur, sans la recapuchonner, par la personne qui l’a utilisée.' }
            ]
          }
        ]
      },

      {
        id: 'f3', titre: 'Traitement du matériel et asepsie', duree: 10,
        motsCles: ['désinfection', 'stérilisation', 'antisepsie', 'asepsie', 'Spaulding'],
        blocs: [
          {
            type: 'tableau', entetes: ['Terme', 'Cible', 'Résultat'],
            lignes: [
              ['Nettoyage', 'Souillures', 'Élimination mécanique des salissures : étape préalable indispensable'],
              ['Désinfection', 'Matériel inerte', 'Réduction des micro-organismes à un niveau acceptable, temporaire'],
              ['Stérilisation', 'Matériel inerte', 'Destruction de toute forme microbienne, y compris les spores'],
              ['Antisepsie', 'Tissus vivants', 'Réduction transitoire des micro-organismes sur la peau ou une muqueuse'],
              ['Asepsie', 'Une méthode, pas un produit', 'Ensemble des mesures empêchant l’apport de germes']
            ]
          },
          {
            type: 'liste', items: [
              '**Classement de Spaulding** : matériel *critique* (pénètre un tissu stérile) → stérilisation ; *semi-critique* (contact muqueuse) → désinfection de haut niveau ; *non critique* (peau intacte) → désinfection de bas niveau.',
              'On ne désinfecte jamais correctement ce qui n’a pas été **nettoyé** d’abord : la matière organique inactive les désinfectants.',
              'Antiseptiques usuels : chlorhexidine alcoolique, povidone iodée (Bétadine®), alcool à 70°. **Ne jamais mélanger deux familles** : chlorhexidine et povidone iodée s’inactivent mutuellement.'
            ]
          },
          {
            type: 'etapes', items: [
              'Détersion : nettoyage avec un savon antiseptique de la même famille que l’antiseptique utilisé ensuite.',
              'Rinçage à l’eau stérile.',
              'Séchage par tamponnement avec des compresses stériles.',
              'Antisepsie : application de l’antiseptique, du centre vers la périphérie, en spirale.',
              'Respect du temps de séchage — l’action n’est pas immédiate.'
            ]
          },
          { type: 'piege', texte: 'La povidone iodée est contre-indiquée avant 1 mois, chez la femme enceinte à partir du 2ᵉ trimestre et en cas d’allergie à l’iode ou de dysthyroïdie non contrôlée. Vérifier avant d’ouvrir le flacon, pas après.' }
        ]
      },

      {
        id: 'f4', titre: 'Infections associées aux soins (IAS)', duree: 10,
        motsCles: ['IAS', 'nosocomiale', 'BMR', 'sonde urinaire', 'cathéter', 'pneumopathie'],
        blocs: [
          { type: 'def', texte: 'Une **IAS** est une infection survenant au cours ou au décours d’une prise en charge, absente à l’admission. Le délai de 48 h reste le repère usuel pour parler d’infection **nosocomiale** en établissement de santé.' },
          {
            type: 'tableau', entetes: ['Site', 'Part des IAS', 'Prévention prioritaire'],
            lignes: [
              ['Infection urinaire', 'La plus fréquente', 'Poser une sonde uniquement si indispensable, la retirer au plus tôt, système clos, sac sous le niveau vésical'],
              ['Pneumopathie', 'La plus grave en réanimation', 'Position demi-assise 30–45°, soins de bouche, sevrage ventilatoire précoce'],
              ['Infection de site opératoire', 'Fréquente en chirurgie', 'Antibioprophylaxie dans les délais, préparation cutanée, pas de rasage (tonte si nécessaire)'],
              ['Infection sur cathéter', 'Potentiellement septicémique', 'Pose aseptique, pansement occlusif surveillé, retrait dès que possible']
            ]
          },
          {
            type: 'cle', items: [
              'La mesure la plus efficace, toutes IAS confondues, reste l’**hygiène des mains**. Les dispositifs invasifs sont la deuxième cible : le meilleur cathéter est celui qu’on a retiré.',
              '**BMR / BHRe** : bactéries multi- ou hautement résistantes. Précautions contact, signalement, dépistage des contacts selon protocole.',
              'Le bon usage des antibiotiques fait partie de l’hygiène : durée courte, désescalade, pas d’antibiotique sur une colonisation.'
            ]
          },
          { type: 'piege', texte: 'Une bandelette urinaire positive chez un patient sondé asymptomatique ne justifie pas un antibiotique : c’est une colonisation. Traiter une colonisation fabrique des résistances.' }
        ]
      }
    ],

    qcm: [
      { id: 'q1', enonce: 'Les précautions standard s’appliquent :', choix: ['uniquement aux patients porteurs de BMR', 'à tous les patients, en permanence', 'seulement en cas de geste invasif', 'uniquement en secteur de réanimation'], bonnes: [1], explication: 'Elles s’appliquent à TOUS les patients, tout le temps, indépendamment du statut infectieux — connu ou non. C’est justement parce qu’on ignore souvent le statut qu’elles existent.', difficulte: 1 },
      { id: 'q2', enonce: 'Quelle pathologie impose des précautions de type AIR ?', choix: ['La grippe', 'La tuberculose pulmonaire bacillifère', 'La coqueluche', 'La rougeole'], bonnes: [1, 3], explication: 'Air : tuberculose bacillifère, rougeole, varicelle → FFP2. Gouttelettes : grippe, coqueluche, méningocoque → masque chirurgical.', difficulte: 3 },
      { id: 'q3', enonce: 'Face à un patient porteur de Clostridioides difficile, l’hygiène des mains se fait :', choix: ['par friction hydro-alcoolique seule', 'par lavage à l’eau et au savon', 'sans gant si le contact est bref', 'par friction puis lavage'], bonnes: [1], explication: 'Les spores de C. difficile résistent à l’alcool. Le lavage à l’eau et au savon élimine mécaniquement les spores. Précautions contact et bionettoyage à l’eau de Javel diluée.', difficulte: 3 },
      { id: 'q4', enonce: 'Le port de gants :', choix: ['dispense de l’hygiène des mains', 'est indiqué en cas de contact avec un liquide biologique', 'doit être suivi d’une friction après retrait', 'peut être conservé entre deux patients si les gants sont propres'], bonnes: [1, 2], explication: 'Les gants ne remplacent jamais l’hygiène des mains : friction avant et après. Un changement de patient, ou même un passage d’un site sale à un site propre chez le même patient, impose un changement de gants.', difficulte: 2 },
      { id: 'q5', enonce: 'Combien y a-t-il d’indications à l’hygiène des mains selon l’OMS ?', choix: ['3', '5', '7', '10'], bonnes: [1], explication: 'Cinq : avant de toucher le patient, avant un geste aseptique, après exposition à un liquide biologique, après avoir touché le patient, après avoir touché son environnement.', difficulte: 1 },
      { id: 'q6', enonce: 'La stérilisation se distingue de la désinfection car elle :', choix: ['s’applique aux tissus vivants', 'détruit également les spores', 'a un effet temporaire', 'ne nécessite pas de nettoyage préalable'], bonnes: [1], explication: 'La stérilisation détruit toute forme microbienne, spores comprises. Elle s’applique au matériel inerte et exige toujours un nettoyage préalable : la matière organique protège les micro-organismes.', difficulte: 2 },
      { id: 'q7', enonce: 'L’antisepsie :', choix: ['s’applique aux tissus vivants', 's’applique au matériel', 'a une action transitoire', 'remplace la détersion'], bonnes: [0, 2], explication: 'Antisepsie = tissus vivants, action transitoire. Désinfection = matériel inerte. La détersion précède toujours l’antisepsie : on ne désinfecte pas du sale.', difficulte: 2 },
      { id: 'q8', enonce: 'Il est possible d’associer chlorhexidine et povidone iodée sur un même site :', choix: ['Vrai, cela renforce l’action', 'Faux, elles s’inactivent mutuellement', 'Vrai, si on rince entre les deux', 'Uniquement en chirurgie'], bonnes: [1], explication: 'Ne jamais mélanger deux familles d’antiseptiques : elles s’inactivent. On reste dans la même gamme du savon antiseptique jusqu’à l’antiseptique final.', difficulte: 2 },
      { id: 'q9', enonce: 'Quelle est l’IAS la plus fréquente en établissement de santé ?', choix: ['La pneumopathie', 'L’infection urinaire', 'L’infection du site opératoire', 'La bactériémie sur cathéter'], bonnes: [1], explication: 'L’infection urinaire est la plus fréquente, très largement liée au sondage. Le premier levier est de ne pas poser la sonde, le second de la retirer au plus vite.', difficulte: 2 },
      { id: 'q10', enonce: 'Pour prévenir les pneumopathies chez un patient alité, on recommande :', choix: ['le décubitus dorsal strict', 'la position demi-assise à 30–45°', 'les soins de bouche pluriquotidiens', 'l’arrêt systématique de l’alimentation orale'], bonnes: [1, 2], explication: 'Position demi-assise et soins de bouche réduisent les micro-inhalations. Le décubitus dorsal strict les favorise. L’alimentation orale n’est pas suspendue par principe.', difficulte: 2 },
      { id: 'q11', enonce: 'Après usage, une aiguille doit être :', choix: ['recapuchonnée puis jetée', 'éliminée immédiatement dans le collecteur par l’opérateur', 'déposée sur le plateau en attendant la fin du soin', 'désadaptée à la main de la seringue'], bonnes: [1], explication: 'Ni recapuchonnage, ni désadaptation manuelle, ni dépôt intermédiaire : élimination immédiate dans le collecteur, par la personne qui a réalisé le geste, collecteur amené au lit du patient.', difficulte: 1 },
      { id: 'q12', enonce: 'Un délai de 48 heures après l’admission est le repère usuel pour :', choix: ['définir une infection communautaire', 'définir une infection nosocomiale', 'lever un isolement', 'déclarer un AES'], bonnes: [1], explication: 'Une infection est dite nosocomiale si elle apparaît au moins 48 h après l’admission, donc absente et non en incubation à l’entrée. Le délai est plus long pour les infections de site opératoire (30 jours, voire un an avec implant).', difficulte: 2 },
      { id: 'q13', enonce: 'Le virus :', choix: ['est sensible aux antibiotiques', 'est un parasite intracellulaire obligatoire', 'possède un noyau', 'peut se multiplier hors d’une cellule hôte'], bonnes: [1], explication: 'Le virus n’a ni noyau ni métabolisme propre : il détourne la machinerie d’une cellule pour se répliquer. Les antibiotiques n’ont aucune action sur lui — d’où l’inutilité (et la nocivité) d’un antibiotique sur une virose.', difficulte: 1 },
      { id: 'q14', enonce: 'Concernant la préparation cutanée avant un geste invasif, quel est l’ordre correct ?', choix: ['Antisepsie, détersion, rinçage, séchage', 'Détersion, rinçage, séchage, antisepsie', 'Rinçage, détersion, antisepsie, séchage', 'Détersion, antisepsie, rinçage, séchage'], bonnes: [1], explication: 'Détersion (savon antiseptique) → rinçage à l’eau stérile → séchage par tamponnement stérile → antisepsie du centre vers la périphérie, puis respect du temps de séchage.', difficulte: 3 },
      { id: 'q15', enonce: 'Une bandelette urinaire positive chez un patient sondé sans aucun signe clinique :', choix: ['justifie une antibiothérapie immédiate', 'correspond le plus souvent à une colonisation', 'impose un changement de sonde systématique', 'doit conduire à réévaluer l’indication du sondage'], bonnes: [1, 3], explication: 'Colonisation ≠ infection. Traiter une colonisation asymptomatique n’apporte aucun bénéfice et sélectionne des résistances. Le bon réflexe est de réévaluer l’indication de la sonde.', difficulte: 3 }
    ]
  });
})();
