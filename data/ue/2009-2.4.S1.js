/* UE 2.4.S1 — Processus traumatiques */
(function () {
  'use strict';

  var SVG_GLASGOW =
    '<svg viewBox="0 0 620 200" role="img" aria-label="Score de Glasgow">' +
    '<rect x="20" y="40" width="180" height="110" rx="12" fill="var(--accent-soft)" stroke="var(--accent)" stroke-width="2"/>' +
    '<text x="110" y="68" text-anchor="middle" font-size="13" font-weight="700" fill="var(--txt)">Ouverture des yeux</text>' +
    '<text x="110" y="96" text-anchor="middle" font-size="26" font-weight="800" fill="var(--accent)">Y : 1 à 4</text>' +
    '<text x="110" y="125" text-anchor="middle" font-size="11.5" fill="var(--txt-2)">spontanée = 4</text>' +
    '<rect x="220" y="40" width="180" height="110" rx="12" fill="var(--accent-soft)" stroke="var(--violet)" stroke-width="2"/>' +
    '<text x="310" y="68" text-anchor="middle" font-size="13" font-weight="700" fill="var(--txt)">Réponse verbale</text>' +
    '<text x="310" y="96" text-anchor="middle" font-size="26" font-weight="800" fill="var(--violet)">V : 1 à 5</text>' +
    '<text x="310" y="125" text-anchor="middle" font-size="11.5" fill="var(--txt-2)">orientée = 5</text>' +
    '<rect x="420" y="40" width="180" height="110" rx="12" fill="var(--accent-soft)" stroke="var(--rose)" stroke-width="2"/>' +
    '<text x="510" y="68" text-anchor="middle" font-size="13" font-weight="700" fill="var(--txt)">Réponse motrice</text>' +
    '<text x="510" y="96" text-anchor="middle" font-size="26" font-weight="800" fill="var(--rose)">M : 1 à 6</text>' +
    '<text x="510" y="125" text-anchor="middle" font-size="11.5" fill="var(--txt-2)">obéit = 6</text>' +
    '<text x="310" y="182" text-anchor="middle" font-size="13" fill="var(--txt-2)">Total 3 à 15 · ≤ 8 = coma, indication d’intubation</text>' +
    '</svg>';

  FICHES.registerUE({
    ref: '2009', ue: '2.4.S1',
    objectifs: [
      'Décrire les principaux processus traumatiques et leurs conséquences',
      'Reconnaître les signes de gravité et hiérarchiser l’urgence',
      'Assurer la surveillance d’un patient traumatisé',
      'Prévenir les complications de l’immobilisation'
    ],

    fiches: [
      {
        id: 't1', titre: 'Traumatismes ostéo-articulaires', duree: 12,
        motsCles: ['fracture', 'entorse', 'luxation', 'plâtre', 'syndrome des loges', 'immobilisation'],
        blocs: [
          {
            type: 'tableau', entetes: ['Lésion', 'Définition', 'Signes'],
            lignes: [
              ['Entorse', 'Atteinte ligamentaire sans perte de contact articulaire', 'Douleur, œdème, ecchymose, mobilité conservée mais douloureuse'],
              ['Luxation', 'Perte complète et permanente des rapports articulaires', 'Déformation, impotence totale, attitude vicieuse irréductible'],
              ['Fracture', 'Solution de continuité osseuse', 'Douleur exquise, impotence, déformation, craquement, mobilité anormale'],
              ['Fracture ouverte', 'Foyer en communication avec l’extérieur', 'Urgence : risque infectieux, parage chirurgical, antibiothérapie, vérification du tétanos']
            ]
          },
          {
            type: 'cle', titre: 'Surveillance sous plâtre ou attelle — les 5 P', items: [
              '**P**ain (douleur anormale, croissante, résistante aux antalgiques)',
              '**P**âleur ou cyanose des extrémités',
              '**P**aresthésies (fourmillements, engourdissement)',
              '**P**aralysie ou perte de mobilité des orteils/doigts',
              '**P**ouls diminué ou aboli, extrémité froide',
              'Un seul de ces signes impose un appel immédiat : c’est un syndrome de loge ou une compression jusqu’à preuve du contraire.'
            ]
          },
          {
            type: 'piege', items: [
              'La douleur d’un syndrome des loges est **disproportionnée** et résiste aux morphiniques : ne jamais la mettre sur le compte de la fracture.',
              'Un plâtre ne doit jamais être fendu ou retiré sans avis, mais un plâtre compressif doit être signalé sans délai.',
              'Surélever le membre et mobiliser les extrémités préviennent l’œdème ; l’immobilité prolongée expose à la thrombose veineuse.'
            ]
          },
          {
            type: 'liste', items: [
              '**Consolidation** : environ 4 à 6 semaines au membre supérieur, 8 à 12 semaines au membre inférieur, plus long chez le sujet âgé ou dénutri.',
              'Complications : déplacement secondaire, retard de consolidation, pseudarthrose, cal vicieux, algodystrophie, raideur, thrombose.',
              'Prévention thromboembolique systématique en cas d’immobilisation du membre inférieur.'
            ]
          }
        ]
      },

      {
        id: 't2', titre: 'Traumatisme crânien et rachis', duree: 12,
        motsCles: ['Glasgow', 'traumatisme crânien', 'HTIC', 'rachis', 'immobilisation', 'mydriase'],
        blocs: [
          { type: 'schema', svg: SVG_GLASGOW, legende: 'Score de Glasgow : trois items, un total de 3 à 15. On note toujours le détail Y-V-M, pas seulement le total.' },
          {
            type: 'cle', titre: 'Signes d’alerte après un traumatisme crânien', items: [
              'Baisse du score de Glasgow, même de 1 ou 2 points.',
              'Céphalées croissantes, vomissements en jet.',
              'Anisocorie ou mydriase unilatérale aréactive.',
              'Déficit moteur, convulsions, agitation ou somnolence inhabituelle.',
              'Bradycardie avec hypertension artérielle : triade d’hypertension intracrânienne, signe tardif et grave.',
              'Écoulement clair par le nez ou l’oreille : suspicion de fracture de la base du crâne.'
            ]
          },
          {
            type: 'liste', items: [
              'Surveillance neurologique rapprochée : Glasgow, pupilles, motricité, constantes — selon un rythme prescrit, souvent horaire les premières heures.',
              'Position : tête surélevée à 30°, alignement tête-cou-tronc, éviter tout ce qui augmente la pression intracrânienne (douleur, toux, agitation, compression jugulaire).',
              '**Rachis** : tant que la lésion n’est pas écartée, immobilisation stricte, mobilisation en monobloc à plusieurs, collier cervical maintenu.',
              'Lésion médullaire haute (au-dessus de C4) : atteinte du nerf phrénique, ventilation spontanée compromise.'
            ]
          },
          {
            type: 'piege', texte: 'Un patient qui « va mieux » puis se dégrade après un intervalle libre évoque un hématome extra-dural : c’est une urgence neurochirurgicale. L’intervalle libre est trompeur, il ne rassure pas.' },
          {
            type: 'flash', items: [
              { q: 'Score de Glasgow minimal et maximal ?', a: '3 au minimum, 15 au maximum. Un score ≤ 8 définit le coma et pose l’indication d’intubation.' },
              { q: 'Que signifie une mydriase unilatérale aréactive après un TC ?', a: 'Un engagement cérébral jusqu’à preuve du contraire : urgence vitale.' },
              { q: 'Comment mobilise-t-on un patient suspect de lésion rachidienne ?', a: 'En monobloc, à plusieurs, en maintenant l’axe tête-cou-tronc.' }
            ]
          }
        ]
      },

      {
        id: 't3', titre: 'Polytraumatisé, hémorragie et état de choc', duree: 14,
        motsCles: ['polytraumatisé', 'hémorragie', 'choc', 'garrot', 'remplissage', 'ABCDE'],
        blocs: [
          {
            type: 'etapes', titre: 'Démarche ABCDE', items: [
              '**A — Airway** : liberté des voies aériennes, avec protection du rachis cervical.',
              '**B — Breathing** : fréquence respiratoire, SpO₂, symétrie de l’auscultation, oxygène.',
              '**C — Circulation** : hémorragies compressibles maîtrisées, pouls, PA, deux voies veineuses de gros calibre, remplissage.',
              '**D — Disability** : Glasgow, pupilles, glycémie capillaire.',
              '**E — Exposure** : déshabiller pour examiner, puis **réchauffer** — l’hypothermie aggrave la coagulopathie.'
            ]
          },
          {
            type: 'tableau', entetes: ['Type de choc', 'Mécanisme', 'Signes distinctifs'],
            lignes: [
              ['Hypovolémique', 'Perte de volume (sang, plasma, eau)', 'Tachycardie, PA pincée puis effondrée, marbrures, extrémités froides, soif'],
              ['Cardiogénique', 'Défaillance de pompe', 'Signes congestifs, turgescence jugulaire, crépitants, extrémités froides'],
              ['Septique', 'Vasodilatation infectieuse', 'Fièvre ou hypothermie, extrémités d’abord chaudes, lactates élevés'],
              ['Anaphylactique', 'Réaction d’hypersensibilité immédiate', 'Urticaire, œdème, bronchospasme, collapsus — **adrénaline IM sans délai**']
            ]
          },
          {
            type: 'cle', titre: 'Signes précoces d’hémorragie — avant la chute de tension', items: [
              'Tachycardie : c’est le premier signe, bien avant l’hypotension.',
              'Pincement de la différentielle (la diastolique remonte avant que la systolique ne chute).',
              'Marbrures des genoux, temps de recoloration capillaire allongé au-delà de 3 secondes.',
              'Soif, agitation ou angoisse inexpliquée, polypnée.',
              'Chez le sujet jeune, la pression artérielle reste normale jusqu’à environ 30 % de perte volémique : attendre l’hypotension, c’est arriver tard.'
            ]
          },
          {
            type: 'piege', items: [
              'Un bêtabloquant peut masquer la tachycardie compensatrice : l’absence de tachycardie ne rassure pas.',
              'La **triade létale** du traumatisé : hypothermie, acidose, coagulopathie. Elles s’aggravent l’une l’autre — réchauffer fait partie du traitement.',
              'Le garrot ne se pose que sur une hémorragie de membre non contrôlable par compression : heure de pose notée, jamais desserré sur place.'
            ]
          }
        ]
      },

      {
        id: 't4', titre: 'Complications de l’alitement et du décubitus', duree: 10,
        motsCles: ['alitement', 'thrombose', 'escarre', 'constipation', 'amyotrophie', 'désorientation'],
        blocs: [
          {
            type: 'tableau', entetes: ['Appareil', 'Complication', 'Prévention infirmière'],
            lignes: [
              ['Cutané', 'Escarre', 'Changements de position, support adapté, nutrition, observation quotidienne'],
              ['Vasculaire', 'Thrombose veineuse, embolie pulmonaire', 'Lever précoce, mobilisation active et passive, bas de contention, anticoagulation prescrite, hydratation'],
              ['Respiratoire', 'Encombrement, pneumopathie', 'Position demi-assise, kinésithérapie, incitation à la toux et à l’inspiration profonde'],
              ['Digestif', 'Constipation, fécalome', 'Hydratation, fibres, mobilisation, surveillance du transit'],
              ['Urinaire', 'Rétention, infection', 'Éviter le sondage, mictions régulières, surveillance de la diurèse'],
              ['Locomoteur', 'Amyotrophie, rétractions, ostéoporose', 'Mobilisation quotidienne, positionnement fonctionnel, verticalisation'],
              ['Neuropsychique', 'Désorientation, syndrome de glissement', 'Repères temporels, lumière du jour, stimulation, maintien du lien social']
            ]
          },
          {
            type: 'cle', items: [
              'La **thrombose veineuse profonde** est souvent muette : douleur du mollet, œdème unilatéral, chaleur, perte du ballant. Le signe de Homans est peu fiable — ne pas s’y fier seul.',
              'Toute dyspnée brutale avec douleur thoracique et tachycardie chez un patient alité doit faire évoquer une **embolie pulmonaire** et déclencher un appel.',
              'La meilleure prévention de toutes ces complications, sans exception, est le **lever précoce**.'
            ]
          }
        ]
      }
    ],

    qcm: [
      { id: 'tq1', enonce: 'Une luxation se définit par :', choix: ['une atteinte ligamentaire isolée', 'une perte complète et permanente des rapports articulaires', 'une fracture avec ouverture cutanée', 'un simple hématome'], bonnes: [1], explication: 'Luxation = perte complète et permanente du contact articulaire, avec attitude vicieuse irréductible. L’entorse est une atteinte ligamentaire sans perte de contact.', difficulte: 1 },
      { id: 'tq2', enonce: 'Sous plâtre, quels signes imposent un appel immédiat ?', choix: ['Douleur croissante résistante aux antalgiques', 'Fourmillements des extrémités', 'Une légère gêne le premier jour', 'Cyanose et froideur des orteils'], bonnes: [0, 1, 3], explication: 'Les 5 P : Pain, Pâleur, Paresthésies, Paralysie, Pouls aboli. Une douleur disproportionnée qui résiste aux morphiniques est un syndrome des loges jusqu’à preuve du contraire.', difficulte: 2 },
      { id: 'tq3', enonce: 'Le score de Glasgow évalue :', choix: ['l’ouverture des yeux, la réponse verbale et la réponse motrice', 'la douleur, la conscience et la respiration', 'les pupilles, la motricité et la sensibilité', 'la fréquence cardiaque, la PA et la SpO₂'], bonnes: [0], explication: 'Y (1–4), V (1–5), M (1–6), total de 3 à 15. On note toujours le détail, car deux scores identiques peuvent recouvrir des situations différentes.', difficulte: 1 },
      { id: 'tq4', enonce: 'Un score de Glasgow à 7 signifie :', choix: ['un patient conscient', 'un coma, avec indication d’intubation', 'une simple somnolence', 'un score impossible'], bonnes: [1], explication: 'Un Glasgow ≤ 8 définit le coma : les voies aériennes ne sont plus protégées, l’intubation est indiquée.', difficulte: 2 },
      { id: 'tq5', enonce: 'Après un traumatisme crânien, quels signes doivent alerter ?', choix: ['Une mydriase unilatérale aréactive', 'Des vomissements en jet', 'Une baisse de 2 points du Glasgow', 'Une céphalée qui régresse sous paracétamol'], bonnes: [0, 1, 2], explication: 'Mydriase aréactive (engagement), vomissements en jet et céphalées croissantes (HTIC), toute baisse du Glasgow même minime. Une céphalée qui régresse est rassurante.', difficulte: 3 },
      { id: 'tq6', enonce: 'La triade de l’hypertension intracrânienne comprend :', choix: ['tachycardie, hypotension, polypnée', 'bradycardie, hypertension artérielle, troubles respiratoires', 'fièvre, tachycardie, hypotension', 'hypothermie, bradypnée, mydriase'], bonnes: [1], explication: 'Triade de Cushing : bradycardie, HTA, irrégularité respiratoire. C’est un signe TARDIF et grave — l’objectif est d’agir bien avant.', difficulte: 3 },
      { id: 'tq7', enonce: 'Un patient suspect de lésion rachidienne doit être mobilisé :', choix: ['en le faisant marcher doucement', 'en monobloc, à plusieurs, axe tête-cou-tronc maintenu', 'en le tournant sur le côté par une seule personne', 'assis au bord du lit'], bonnes: [1], explication: 'Mobilisation en monobloc, à plusieurs, avec maintien de l’alignement, collier cervical conservé tant que la lésion n’est pas écartée.', difficulte: 1 },
      { id: 'tq8', enonce: 'Quel est le premier signe d’une hémorragie chez un adulte jeune ?', choix: ['L’hypotension artérielle', 'La tachycardie', 'La bradycardie', 'La cyanose'], bonnes: [1], explication: 'La tachycardie est compensatrice et précoce. La PA peut rester normale jusqu’à environ 30 % de perte volémique chez le sujet jeune : attendre l’hypotension, c’est arriver tard.', difficulte: 2 },
      { id: 'tq9', enonce: 'Quels éléments constituent la triade létale du traumatisé ?', choix: ['Hypothermie', 'Acidose', 'Hyperthermie', 'Coagulopathie'], bonnes: [0, 1, 3], explication: 'Hypothermie, acidose et coagulopathie s’auto-aggravent. Réchauffer le patient n’est pas un confort, c’est un acte thérapeutique.', difficulte: 3 },
      { id: 'tq10', enonce: 'Dans la démarche ABCDE, la lettre C correspond à :', choix: ['la conscience', 'la circulation et le contrôle des hémorragies', 'la colonne vertébrale', 'la communication'], bonnes: [1], explication: 'A airway, B breathing, C circulation, D disability (neuro), E exposure. Le contrôle des hémorragies compressibles est prioritaire dans le C.', difficulte: 2 },
      { id: 'tq11', enonce: 'Devant un choc anaphylactique, le traitement de première intention est :', choix: ['un antihistaminique per os', 'de l’adrénaline en intramusculaire sans délai', 'un corticoïde en IV lente', 'un remplissage seul'], bonnes: [1], explication: 'Adrénaline IM immédiatement (face antéro-latérale de la cuisse), en plus de l’arrêt de l’allergène, de l’oxygène et du remplissage. Les corticoïdes et antihistaminiques sont des traitements d’appoint.', difficulte: 3 },
      { id: 'tq12', enonce: 'Un temps de recoloration capillaire supérieur à 3 secondes traduit :', choix: ['une bonne perfusion périphérique', 'une hypoperfusion', 'une hyperthermie', 'une anémie isolée'], bonnes: [1], explication: 'Un TRC allongé signe une hypoperfusion périphérique : signe simple, gratuit et précoce, à associer aux marbrures et à la tachycardie.', difficulte: 2 },
      { id: 'tq13', enonce: 'Quelles mesures préviennent la thrombose veineuse chez un patient alité ?', choix: ['Le lever précoce', 'La mobilisation active et passive', 'L’immobilité stricte pour éviter la douleur', 'Les bas de contention'], bonnes: [0, 1, 3], explication: 'Lever précoce, mobilisation, contention, hydratation et anticoagulation prescrite. L’immobilité stricte est précisément le facteur de risque.', difficulte: 1 },
      { id: 'tq14', enonce: 'Une fracture ouverte impose :', choix: ['une simple immobilisation', 'une vérification du statut antitétanique', 'une prise en charge chirurgicale et une antibiothérapie', 'un délai d’attente sans urgence'], bonnes: [1, 2], explication: 'Le foyer communique avec l’extérieur : risque infectieux majeur, parage chirurgical, antibiothérapie et vérification de la vaccination antitétanique.', difficulte: 2 },
      { id: 'tq15', enonce: 'Chez un patient sous bêtabloquant en hémorragie :', choix: ['la tachycardie compensatrice est majorée', 'la tachycardie peut être absente ou masquée', 'la surveillance peut être allégée', 'les autres signes de choc restent à rechercher'], bonnes: [1, 3], explication: 'Le bêtabloquant empêche la tachycardie compensatrice : l’absence de tachycardie ne rassure pas. On s’appuie sur les marbrures, le TRC, la diurèse et la conscience.', difficulte: 3 }
    ]
  });
})();
