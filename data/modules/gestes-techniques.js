/* Module transversal — Gestes techniques infirmiers */
(function () {
  'use strict';

  var SVG_INJECTIONS =
    '<svg viewBox="0 0 620 250" role="img" aria-label="Angles d’injection selon la voie">' +
    '<rect x="40" y="150" width="540" height="26" fill="var(--bg-soft)" stroke="var(--line-2)" stroke-width="1.5"/>' +
    '<rect x="40" y="176" width="540" height="34" fill="var(--accent-soft)" stroke="var(--line-2)" stroke-width="1.5"/>' +
    '<rect x="40" y="210" width="540" height="24" fill="var(--bg-soft)" stroke="var(--line-2)" stroke-width="1.5"/>' +
    '<text x="52" y="168" font-size="11.5" fill="var(--txt-3)">épiderme / derme</text>' +
    '<text x="52" y="198" font-size="11.5" fill="var(--txt-3)">hypoderme (tissu sous-cutané)</text>' +
    '<text x="52" y="227" font-size="11.5" fill="var(--txt-3)">muscle</text>' +
    '<path d="M120 96 L152 148" stroke="var(--blue)" stroke-width="3"/>' +
    '<text x="98" y="88" font-size="12.5" font-weight="700" fill="var(--blue)">ID · 10–15°</text>' +
    '<text x="98" y="72" font-size="11" fill="var(--txt-3)">intradermique</text>' +
    '<path d="M290 96 L322 178" stroke="var(--violet)" stroke-width="3"/>' +
    '<text x="268" y="88" font-size="12.5" font-weight="700" fill="var(--violet)">SC · 45–90°</text>' +
    '<text x="268" y="72" font-size="11" fill="var(--txt-3)">sous-cutanée</text>' +
    '<path d="M470 96 L470 212" stroke="var(--rose)" stroke-width="3"/>' +
    '<text x="448" y="88" font-size="12.5" font-weight="700" fill="var(--rose)">IM · 90°</text>' +
    '<text x="448" y="72" font-size="11" fill="var(--txt-3)">intramusculaire</text>' +
    '<text x="310" y="30" text-anchor="middle" font-size="12.5" fill="var(--txt-2)">Plus la voie est profonde, plus l’angle est droit et l’aiguille longue.</text>' +
    '</svg>';

  FICHES.registerModule({
    id: 'gestes-techniques',
    titre: 'Gestes techniques infirmiers',
    etiquette: 'GESTES',
    accroche: 'Les protocoles pas à pas, avec les points où ça dérape en pratique.',
    motsCles: ['perfusion', 'injection', 'sondage', 'prélèvement', 'oxygénothérapie', 'ECG', 'glycémie'],
    ues: ['UE 4.4 Thérapeutiques', 'UE 4.5 Gestion des risques', 'UE 2.10 Hygiène'],
    objectifs: [
      'Réaliser les principaux gestes techniques dans le respect de l’asepsie',
      'Identifier les complications précoces et la conduite à tenir',
      'Connaître les points de sécurité non négociables de chaque geste'
    ],

    fiches: [
      {
        id: 'g1', titre: 'Injections : ID, SC, IM, IV', duree: 14,
        motsCles: ['injection', 'sous-cutanée', 'intramusculaire', 'intradermique', 'insuline', 'héparine'],
        blocs: [
          { type: 'schema', svg: SVG_INJECTIONS, legende: 'Angle et profondeur selon la voie.' },
          {
            type: 'tableau', entetes: ['Voie', 'Angle', 'Aiguille', 'Volume max', 'Sites'],
            lignes: [
              ['Intradermique', '10–15°, biseau vers le haut', '25–27 G, courte', '0,1 mL', 'Face antérieure de l’avant-bras'],
              ['Sous-cutanée', '45° (ou 90° si pli épais)', '25–27 G, 4–12 mm', '1 à 2 mL', 'Abdomen (à distance de l’ombilic), face externe des bras et des cuisses'],
              ['Intramusculaire', '90°', '21–23 G, 25–40 mm', '4 à 5 mL', 'Ventro-glutéal (référence), deltoïde (≤ 2 mL), vaste externe'],
              ['Intraveineuse directe', 'Selon la voie posée', 'Selon dispositif', 'Selon dilution', 'Voie veineuse périphérique ou centrale']
            ]
          },
          {
            type: 'etapes', items: [
              'Vérifier la prescription et appliquer les **5 B**.',
              'Hygiène des mains, préparation extemporanée, seringue étiquetée.',
              'Installer et informer la personne, choisir le site, vérifier l’état cutané.',
              'Antisepsie du site, respect du temps de séchage.',
              'Injecter, retirer, éliminer immédiatement l’aiguille dans le collecteur sans recapuchonner.',
              'Surveiller les 15 premières minutes (réaction locale ou générale), tracer.'
            ]
          },
          {
            type: 'piege', items: [
              '**Héparine et HBPM en SC** : pas de purge de la seringue préremplie, pas d’aspiration, **pas de massage** après l’injection. Pli cutané maintenu pendant toute l’injection, dans l’abdomen, en alternant droite et gauche.',
              '**Insuline** : seringue graduée en UI uniquement. Rotation stricte des sites, sinon lipodystrophies et absorption erratique.',
              '**IM contre-indiquée** sous anticoagulant efficace ou en cas de trouble de l’hémostase.',
              'Le site fessier dorsal (quadrant supéro-externe) est abandonné au profit du **ventro-glutéal** : moins de risque nerveux et vasculaire.'
            ]
          },
          {
            type: 'flash', items: [
              { q: 'Angle d’une injection intramusculaire ?', a: '90°, perpendiculaire au plan cutané.' },
              { q: 'Faut-il masser après une injection d’HBPM ?', a: 'Non, jamais : risque d’hématome. On ne purge pas non plus la seringue préremplie.' },
              { q: 'Volume maximal en sous-cutané ?', a: '1 à 2 mL. Au-delà, douleur et absorption aléatoire.' },
              { q: 'Site IM de référence aujourd’hui ?', a: 'Le site ventro-glutéal, plus sûr que le quadrant supéro-externe fessier.' }
            ]
          }
        ]
      },

      {
        id: 'g2', titre: 'Pose et surveillance d’une voie veineuse périphérique', duree: 14,
        motsCles: ['perfusion', 'cathéter', 'VVP', 'phlébite', 'extravasation', 'garrot'],
        blocs: [
          {
            type: 'etapes', items: [
              'Vérifier la prescription, l’identité, les allergies. Préparer le matériel sur un plan désinfecté.',
              'Choisir le site : membre supérieur non dominant, **de la main vers le pli du coude**, en évitant les plis de flexion, le côté d’une fistule, d’un curage axillaire ou d’une hémiplégie.',
              'Poser le garrot (jamais plus d’une minute), repérer la veine, retirer le garrot le temps de l’antisepsie.',
              'Antisepsie en un temps sur peau propre (deux temps avec détersion si peau souillée), respect du séchage.',
              'Ponctionner biseau vers le haut, angle 15–30°, vérifier le reflux, avancer le cathéter et retirer le mandrin.',
              'Retirer le garrot, connecter, purger, fixer avec un pansement transparent stérile daté.',
              'Éliminer le mandrin dans le collecteur, tracer date, calibre, site et opérateur.'
            ]
          },
          {
            type: 'tableau', entetes: ['Calibre', 'Couleur', 'Débit indicatif', 'Usage'],
            lignes: [
              ['14 G', 'Orange', '≈ 270 mL/min', 'Remplissage massif, polytraumatisé'],
              ['16 G', 'Gris', '≈ 200 mL/min', 'Chirurgie lourde, transfusion rapide'],
              ['18 G', 'Vert', '≈ 100 mL/min', 'Transfusion, produits de contraste'],
              ['20 G', 'Rose', '≈ 60 mL/min', 'Usage courant adulte'],
              ['22 G', 'Bleu', '≈ 35 mL/min', 'Capital veineux pauvre, sujet âgé'],
              ['24 G', 'Jaune', '≈ 20 mL/min', 'Pédiatrie, néonatologie']
            ]
          },
          {
            type: 'cle', titre: 'Surveillance quotidienne — score de Maddox simplifié', items: [
              'Stade 0 : rien.',
              'Stade 1 : douleur ou érythème isolé au point de ponction.',
              'Stade 2 : douleur **et** érythème.',
              'Stade 3 : + cordon veineux induré palpable.',
              'Stade 4 : + écoulement purulent ou signes généraux.',
              '**Dès le stade 1, on retire le cathéter.**'
            ]
          },
          {
            type: 'piege', items: [
              '**Extravasation** : gonflement, douleur, absence de reflux, perfusion qui ralentit. On arrête immédiatement, on aspire si possible avant de retirer, on surélève le membre. Avec un produit vésicant (chimiothérapie, potassium concentré, vasopresseur), c’est une urgence — on appelle sans attendre.',
              'Ne jamais reperfuser en aval d’un site de ponction récent sur la même veine.',
              'Le pansement doit rester **occlusif, transparent, sec et daté**. Souillé ou décollé : réfection immédiate.',
              'Ne jamais réintroduire le mandrin dans le cathéter : risque d’embolie de cathéter.'
            ]
          }
        ]
      },

      {
        id: 'g3', titre: 'Prélèvement veineux et hémocultures', duree: 12,
        motsCles: ['prélèvement', 'tube', 'ordre', 'hémoculture', 'AES', 'garrot'],
        blocs: [
          {
            type: 'cle', titre: 'Ordre de remplissage des tubes (à respecter absolument)', items: [
              '1 · Flacons d’hémoculture (aérobie puis anaérobie)',
              '2 · Tube citrate — bouchon bleu (hémostase, TP/INR)',
              '3 · Tube sec ou gel — rouge ou jaune (biochimie, sérologie)',
              '4 · Tube héparine — vert',
              '5 · Tube EDTA — violet (numération, groupe)',
              '6 · Tube fluorure — gris (glycémie)'
            ]
          },
          {
            type: 'piege', items: [
              'Inverser l’ordre contamine les tubes par les additifs : un EDTA prélevé avant un citrate fausse l’hémostase et la kaliémie (l’EDTA chélate le calcium).',
              'Le **tube citrate doit être rempli exactement au trait** : sous-rempli, le TP et le TCA sont ininterprétables.',
              'Garrot > 1 minute : hémoconcentration, fausse hyperkaliémie, fausse hypercalcémie.',
              'Ne jamais prélever en amont d’une perfusion en cours : on choisit l’autre bras, ou on arrête la perfusion et on rince avant.',
              'Homogénéiser par retournements lents (8 à 10 fois), jamais en secouant : l’hémolyse fausse kaliémie, LDH et bilirubine.'
            ]
          },
          {
            type: 'etapes', items: [
              '**Hémocultures** : prélever de préférence lors d’un pic fébrile ou de frissons, **avant** toute antibiothérapie.',
              'Antisepsie rigoureuse en deux temps de la peau et des bouchons de flacons.',
              'Volume : environ 8 à 10 mL par flacon chez l’adulte — le volume est le premier facteur de rentabilité.',
              'Deux à trois paires espacées, ou selon le protocole du service.',
              'Acheminer rapidement au laboratoire ; ne pas réfrigérer.'
            ]
          },
          {
            type: 'cle', titre: 'Conduite à tenir en cas d’AES', items: [
              '**Immédiatement** : ne pas faire saigner, laver à l’eau et au savon, rincer.',
              'Antisepsie par trempage 5 minutes (Dakin ou eau de Javel diluée, ou povidone iodée dermique).',
              'En cas de projection oculaire : rinçage abondant au sérum physiologique ou à l’eau pendant 5 minutes.',
              'Évaluation médicale **dans les 4 heures** pour un éventuel traitement post-exposition.',
              'Déclaration en accident du travail dans les **48 heures**, sérologies du patient source avec son accord.'
            ]
          }
        ]
      },

      {
        id: 'g4', titre: 'Sondage urinaire et surveillance', duree: 12,
        motsCles: ['sonde urinaire', 'sondage', 'système clos', 'globe', 'bladder'],
        blocs: [
          {
            type: 'para', texte: 'Le sondage est le premier pourvoyeur d’infections associées aux soins. La meilleure prévention reste de **ne pas poser la sonde**, et la seconde de la **retirer au plus tôt**. Chaque jour de sondage augmente le risque d’environ 3 à 7 %.' },
          {
            type: 'etapes', items: [
              'Vérifier l’indication et la prescription. Un sondage « de confort » n’est pas une indication.',
              'Installation, intimité préservée, matériel stérile, deux personnes si possible.',
              'Toilette génito-urinaire au savon doux, rinçage, séchage.',
              'Antisepsie de la région uro-génitale, du plus propre vers le plus sale.',
              'Pose stérile, lubrification, montée douce sans jamais forcer.',
              'Attendre le retour d’urines **avant** de gonfler le ballonnet (sinon rupture urétrale).',
              'Connecter au système clos, fixer la sonde sans traction, sac toujours **sous le niveau de la vessie** et jamais au sol.'
            ]
          },
          {
            type: 'piege', items: [
              'Chez l’homme, une résistance à hauteur du sphincter n’autorise pas à forcer : on demande de tousser ou de respirer, et en cas d’échec on appelle. Une fausse route urétrale est douloureuse et durable.',
              '**Ne jamais déconnecter** le système clos pour vider : on utilise le robinet du sac, avec des gants et une friction avant et après.',
              'Une bandelette positive sans signe clinique chez un patient sondé = colonisation, pas infection. On ne traite pas.',
              'En cas de rétention aiguë, le drainage doit être progressif : décomprimer trop vite expose à une hématurie a vacuo.'
            ]
          },
          {
            type: 'cle', items: [
              'Surveiller quotidiennement : aspect, quantité et odeur des urines, absence de fuite, absence de traction, indication toujours valable.',
              'Diurèse à surveiller : < 0,5 mL/kg/h = alerte. Anurie brutale : penser d’abord à la sonde bouchée ou coudée.',
              'Globe vésical : douleur sus-pubienne, matité, agitation ou confusion chez la personne âgée. Le bladder-scan tranche en 30 secondes.'
            ]
          }
        ]
      },

      {
        id: 'g5', titre: 'Oxygénothérapie et aérosols', duree: 10,
        motsCles: ['oxygène', 'lunettes', 'masque', 'haute concentration', 'aérosol', 'saturation'],
        blocs: [
          {
            type: 'tableau', entetes: ['Dispositif', 'Débit', 'FiO₂ approximative', 'Indication'],
            lignes: [
              ['Lunettes nasales', '1 à 6 L/min', '24 à 40 %', 'Hypoxie modérée, patient qui parle et mange'],
              ['Masque simple', '5 à 8 L/min', '40 à 60 %', 'Hypoxie franche (jamais moins de 5 L/min : réinhalation de CO₂)'],
              ['Masque à haute concentration', '9 à 15 L/min', 'jusqu’à 90 %', 'Détresse respiratoire aiguë, réservoir toujours gonflé'],
              ['Masque Venturi', 'selon la valve', 'FiO₂ précise 24 à 50 %', 'BPCO, quand la précision compte'],
              ['Optiflow / haut débit', 'jusqu’à 60 L/min', 'réglable', 'Insuffisance respiratoire aiguë hypoxémique']
            ]
          },
          {
            type: 'cle', items: [
              'L’oxygène est un **médicament** : il se prescrit, se titre et se surveille. Objectif habituel 94–98 %, mais **88–92 % chez le BPCO** hypercapnique.',
              'Humidifier au-delà de 4 L/min prolongés, ou en cas d’inconfort nasal.',
              'Aérosol : position assise, embout buccal ou masque bien appliqué, durée 10 à 15 minutes, jusqu’à la fin de la nébulisation. Nébulisation d’un bronchodilatateur avec de l’air si le patient est hypercapnique et que c’est prescrit ainsi.',
              'Après un corticoïde inhalé : **rinçage de bouche** systématique (candidose, dysphonie).'
            ]
          },
          {
            type: 'piege', items: [
              'Aucun corps gras (vaseline, crème) sur le visage sous oxygène : risque de combustion.',
              'Un masque à haute concentration dont le réservoir se dégonfle complètement à l’inspiration signale un débit insuffisant : on monte le débit.',
              'Une SpO₂ qui remonte alors que le patient s’endort et devient rouge doit alerter sur une hypercapnie, pas rassurer.'
            ]
          }
        ]
      },

      {
        id: 'g6', titre: 'Glycémie capillaire, ECG et sonde nasogastrique', duree: 12,
        motsCles: ['glycémie', 'dextro', 'ECG', 'électrodes', 'SNG', 'nasogastrique'],
        blocs: [
          {
            type: 'cle', titre: 'Glycémie capillaire', items: [
              'Mains lavées à l’eau et au savon et bien **séchées** : un reste de sucre ou d’alcool fausse la valeur.',
              'Piquer sur la **face latérale** de la pulpe (moins de terminaisons nerveuses), en changeant de doigt.',
              'Écarter la première goutte, utiliser la seconde.',
              'Repères : hypoglycémie < 0,70 g/L ; à jeun normale 0,70–1,10 g/L ; diabète si ≥ 1,26 g/L à jeun à deux reprises.',
              'Hypoglycémie chez un patient conscient : 15 g de sucre rapide, recontrôle à 15 minutes, puis sucre lent. Inconscient : rien par la bouche, glucagon IM ou G30 % IV selon protocole.'
            ]
          },
          {
            type: 'cle', titre: 'ECG 12 dérivations', items: [
              'Précordiales : **V1** 4ᵉ espace intercostal droit au bord du sternum · **V2** 4ᵉ EIC gauche · **V4** 5ᵉ EIC ligne médio-claviculaire · **V3** entre V2 et V4 · **V5** 5ᵉ EIC ligne axillaire antérieure · **V6** 5ᵉ EIC ligne axillaire moyenne.',
              'Périphériques : rouge au poignet droit, jaune au poignet gauche, vert à la cheville gauche, noir à la cheville droite.',
              'Peau sèche et dégraissée, patient allongé, détendu, sans parler ni bouger.',
              'Vitesse 25 mm/s, amplitude 10 mm/mV. Noter l’heure et le contexte (douleur en cours ou non) : un ECG non daté ne sert à rien.'
            ]
          },
          { type: 'mnemo', texte: 'Ordre des électrodes périphériques dans le sens horaire, en partant du bras droit : **Rouge, Jaune, Vert, Noir** — « **Ri**en ne **Va** plus ». Le vert et le noir aux chevilles.' },
          {
            type: 'cle', titre: 'Sonde nasogastrique', items: [
              'Position demi-assise, mesurer la longueur nez-oreille-appendice xiphoïde, repérer par un repère sur la sonde.',
              'Faire déglutir pendant la progression ; retirer immédiatement en cas de toux, de cyanose ou de détresse.',
              'Vérification de position **obligatoire avant toute utilisation** : radiographie en cas de doute ou selon protocole, et contrôle du pH de l’aspirat (pH acide ≤ 5,5 en faveur d’une position gastrique).',
              'Le test à la seringue d’air auscultée n’est plus considéré comme fiable seul.'
            ]
          },
          {
            type: 'piege', texte: 'Une SNG mal positionnée dans l’arbre respiratoire chez un patient sédaté ou dénutri peut ne provoquer aucune toux. Aucune alimentation ni médicament ne passe avant la vérification tracée de la position.' }
        ]
      }
    ],

    qcm: [
      { id: 'gq1', enonce: 'Quel est l’angle d’une injection intramusculaire ?', choix: ['10–15°', '45°', '90°', '30°'], bonnes: [2], explication: 'IM : 90°. SC : 45° (ou 90° avec pli chez le sujet corpulent). Intradermique : 10–15°, biseau vers le haut.', difficulte: 1 },
      { id: 'gq2', enonce: 'Après une injection sous-cutanée d’HBPM, il faut :', choix: ['masser le point de ponction', 'ne pas masser', 'purger la bulle d’air de la seringue préremplie', 'maintenir le pli cutané pendant l’injection'], bonnes: [1, 3], explication: 'Pas de massage (hématome), pas de purge de la bulle (elle chasse le reste de produit et limite le reflux), pli cutané maintenu pendant toute l’injection, sites alternés dans l’abdomen.', difficulte: 2 },
      { id: 'gq3', enonce: 'Quel site est aujourd’hui recommandé en première intention pour une IM chez l’adulte ?', choix: ['Le quadrant supéro-externe fessier', 'Le site ventro-glutéal', 'Le deltoïde pour tous les volumes', 'La face antérieure de la cuisse'], bonnes: [1], explication: 'Le site ventro-glutéal est le plus sûr : pas de gros vaisseau ni de nerf sciatique à proximité. Le deltoïde reste possible mais limité à environ 2 mL.', difficulte: 3 },
      { id: 'gq4', enonce: 'Un cathéter veineux périphérique doit être retiré :', choix: ['seulement en cas de fièvre', 'dès l’apparition d’une douleur ou d’un érythème au point de ponction', 'systématiquement toutes les 24 h', 'uniquement si la perfusion ne coule plus'], bonnes: [1], explication: 'Dès le stade 1 de Maddox (douleur OU érythème isolé), on retire. Attendre le cordon induré ou la fièvre, c’est attendre la phlébite constituée.', difficulte: 2 },
      { id: 'gq5', enonce: 'Devant un gonflement douloureux au point de perfusion avec ralentissement du débit, vous suspectez :', choix: ['une phlébite', 'une extravasation', 'une embolie gazeuse', 'une allergie'], bonnes: [1], explication: 'Extravasation : le produit diffuse dans les tissus. On arrête, on aspire si possible avant de retirer, on surélève le membre. Avec un produit vésicant, c’est une urgence.', difficulte: 2 },
      { id: 'gq6', enonce: 'Quel est le bon ordre de remplissage des tubes de prélèvement ?', choix: ['EDTA, citrate, sec, héparine', 'Hémocultures, citrate, sec, héparine, EDTA, fluorure', 'Sec, EDTA, citrate, héparine', 'Citrate, EDTA, sec, hémocultures'], bonnes: [1], explication: 'Hémocultures d’abord (stérilité), puis citrate (bleu), sec/gel, héparine (vert), EDTA (violet), fluorure (gris). Inverser contamine les tubes par les additifs.', difficulte: 3 },
      { id: 'gq7', enonce: 'Un tube citrate insuffisamment rempli :', choix: ['n’a aucune conséquence', 'rend le TP et le TCA ininterprétables', 'doit être complété avec un second prélèvement dans le même tube', 'peut être utilisé pour la numération'], bonnes: [1], explication: 'Le rapport anticoagulant/sang est fixe. Un tube sous-rempli fausse l’hémostase : il faut refaire le prélèvement, jamais le compléter.', difficulte: 3 },
      { id: 'gq8', enonce: 'Un garrot laissé en place plus d’une minute peut entraîner :', choix: ['une fausse hyperkaliémie', 'une hémoconcentration', 'une fausse hypoglycémie', 'aucune modification'], bonnes: [0, 1], explication: 'Stase et hémolyse locale : hémoconcentration, fausse hyperkaliémie, fausse hypercalcémie. Le garrot se desserre dès le reflux obtenu.', difficulte: 3 },
      { id: 'gq9', enonce: 'Les hémocultures doivent idéalement être prélevées :', choix: ['après la première dose d’antibiotique', 'lors d’un pic fébrile ou de frissons, avant antibiothérapie', 'à jeun le matin', 'uniquement sur cathéter central'], bonnes: [1], explication: 'Avant toute antibiothérapie, au moment du pic thermique ou des frissons. Le volume par flacon (8–10 mL adulte) est le premier facteur de rentabilité.', difficulte: 2 },
      { id: 'gq10', enonce: 'En cas d’accident d’exposition au sang, la première action est :', choix: ['faire saigner la plaie', 'laver à l’eau et au savon puis antisepsie par trempage', 'appliquer un pansement et poursuivre le soin', 'déclarer l’accident au cadre'], bonnes: [1], explication: 'On ne fait surtout pas saigner. Lavage à l’eau et au savon, rinçage, antisepsie par trempage 5 min. Évaluation médicale dans les 4 h, déclaration dans les 48 h.', difficulte: 2 },
      { id: 'gq11', enonce: 'Lors d’un sondage urinaire, le ballonnet doit être gonflé :', choix: ['dès l’introduction de la sonde', 'après avoir obtenu le retour d’urines', 'seulement si la sonde ressort', 'avant la lubrification'], bonnes: [1], explication: 'Gonfler le ballonnet dans l’urètre provoque une rupture urétrale. On attend impérativement le retour d’urines, preuve que le ballonnet est dans la vessie.', difficulte: 1 },
      { id: 'gq12', enonce: 'Concernant le système clos d’une sonde urinaire :', choix: ['il peut être déconnecté pour vider le sac', 'le sac doit rester sous le niveau de la vessie', 'le sac peut être posé au sol', 'le robinet du sac sert à la vidange'], bonnes: [1, 3], explication: 'Jamais de déconnexion : c’est la principale porte d’entrée infectieuse. Sac sous le niveau vésical (pas de reflux), jamais au sol, vidange par le robinet avec hygiène des mains avant et après.', difficulte: 2 },
      { id: 'gq13', enonce: 'Chez un patient BPCO hypercapnique, la cible de SpO₂ est habituellement :', choix: ['94–98 %', '88–92 %', '≥ 99 %', '80–85 %'], bonnes: [1], explication: '88–92 % chez le BPCO hypercapnique connu ; 94–98 % pour la majorité des autres situations aiguës. L’oxygène est un médicament : il se titre.', difficulte: 2 },
      { id: 'gq14', enonce: 'Un masque simple ne doit jamais être utilisé en dessous de :', choix: ['2 L/min', '3 L/min', '5 L/min', '8 L/min'], bonnes: [2], explication: 'En dessous de 5 L/min, le CO₂ expiré s’accumule dans le masque et est réinhalé. Pour un besoin faible, on utilise des lunettes nasales.', difficulte: 3 },
      { id: 'gq15', enonce: 'Après une nébulisation de corticoïde, il faut :', choix: ['ne rien faire de particulier', 'faire rincer la bouche', 'donner à boire un verre de lait', 'faire tousser le patient'], bonnes: [1], explication: 'Rinçage de bouche systématique pour prévenir la candidose oropharyngée et la dysphonie.', difficulte: 1 },
      { id: 'gq16', enonce: 'Pour une glycémie capillaire fiable :', choix: ['désinfecter à l’alcool et piquer sans attendre', 'laver les mains à l’eau et au savon et bien sécher', 'utiliser la première goutte', 'piquer sur la face latérale de la pulpe'], bonnes: [1, 3], explication: 'L’alcool résiduel et le sucre sur les doigts faussent la mesure. On lave, on sèche, on écarte la première goutte, on pique sur la face latérale — moins douloureux.', difficulte: 2 },
      { id: 'gq17', enonce: 'Où se place l’électrode V1 d’un ECG ?', choix: ['5ᵉ espace intercostal gauche, ligne médio-claviculaire', '4ᵉ espace intercostal droit, au bord du sternum', '4ᵉ espace intercostal gauche, au bord du sternum', '5ᵉ espace intercostal, ligne axillaire moyenne'], bonnes: [1], explication: 'V1 : 4ᵉ EIC droit au bord du sternum ; V2 : 4ᵉ EIC gauche ; V4 : 5ᵉ EIC ligne médio-claviculaire ; V3 entre V2 et V4 ; V5 et V6 sur la même horizontale que V4.', difficulte: 3 },
      { id: 'gq18', enonce: 'Avant d’administrer une alimentation par sonde nasogastrique :', choix: ['l’auscultation d’un bolus d’air suffit à valider la position', 'la position doit être vérifiée selon le protocole (pH de l’aspirat, radiographie si doute)', 'aucune vérification n’est nécessaire si la sonde est en place depuis 24 h', 'le patient doit être en décubitus dorsal strict'], bonnes: [1], explication: 'Le test à l’air n’est plus considéré comme fiable seul. Vérification avant chaque utilisation, pH de l’aspirat ≤ 5,5 en faveur du gastrique, radiographie en cas de doute. Patient en position demi-assise.', difficulte: 3 },
      { id: 'gq19', enonce: 'Devant une hypoglycémie à 0,45 g/L chez un patient conscient et capable de déglutir :', choix: ['injecter du glucagon en IM', 'donner 15 g de sucre rapide puis recontrôler à 15 minutes', 'poser une voie veineuse et passer du G30 %', 'attendre le prochain repas'], bonnes: [1], explication: 'Règle des 15 : 15 g de sucre rapide, contrôle à 15 minutes, puis un sucre lent pour éviter la rechute. Glucagon ou G30 % sont réservés au patient inconscient ou incapable de déglutir.', difficulte: 2 },
      { id: 'gq20', enonce: 'Une aiguille souillée doit être :', choix: ['recapuchonnée avec précaution', 'désadaptée à la main', 'éliminée immédiatement dans le collecteur par l’opérateur', 'posée sur le plateau jusqu’à la fin du soin'], bonnes: [2], explication: 'Ni recapuchonnage, ni désadaptation manuelle, ni dépôt intermédiaire. Le collecteur est amené au lit du patient et l’élimination est faite par celui qui a réalisé le geste.', difficulte: 1 }
    ]
  });
})();
