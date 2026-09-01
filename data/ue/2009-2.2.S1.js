/* UE 2.2.S1 — Cycles de la vie et grandes fonctions */
(function () {
  'use strict';

  var SVG_COEUR =
    '<svg viewBox="0 0 640 330" role="img" aria-label="Circulation sanguine et cavités cardiaques">' +
    '<rect x="30" y="30" width="240" height="112" rx="14" fill="var(--accent-soft)" stroke="var(--blue)" stroke-width="2"/>' +
    '<text x="150" y="66" text-anchor="middle" font-size="14" font-weight="700" fill="var(--txt)">CŒUR DROIT</text>' +
    '<text x="150" y="90" text-anchor="middle" font-size="12.5" fill="var(--txt-2)">OD → VD</text>' +
    '<text x="150" y="112" text-anchor="middle" font-size="12.5" fill="var(--blue)">sang pauvre en O₂</text>' +
    '<rect x="370" y="30" width="240" height="112" rx="14" fill="var(--accent-soft)" stroke="var(--rose)" stroke-width="2"/>' +
    '<text x="490" y="66" text-anchor="middle" font-size="14" font-weight="700" fill="var(--txt)">CŒUR GAUCHE</text>' +
    '<text x="490" y="90" text-anchor="middle" font-size="12.5" fill="var(--txt-2)">OG → VG</text>' +
    '<text x="490" y="112" text-anchor="middle" font-size="12.5" fill="var(--rose)">sang riche en O₂</text>' +
    '<rect x="240" y="205" width="160" height="74" rx="14" fill="var(--bg-soft)" stroke="var(--green)" stroke-width="2"/>' +
    '<text x="320" y="236" text-anchor="middle" font-size="13.5" font-weight="700" fill="var(--txt)">POUMONS</text>' +
    '<text x="320" y="258" text-anchor="middle" font-size="12" fill="var(--txt-2)">hématose</text>' +
    '<path d="M170 146 L246 202" stroke="var(--blue)" stroke-width="2.5" marker-end="url(#fl22)"/>' +
    '<path d="M394 202 L470 146" stroke="var(--rose)" stroke-width="2.5" marker-end="url(#fl22b)"/>' +
    '<text x="132" y="186" text-anchor="end" font-size="11.5" fill="var(--blue)">artère pulmonaire</text>' +
    '<text x="508" y="186" text-anchor="start" font-size="11.5" fill="var(--rose)">veines pulmonaires</text>' +
    '<path d="M368 128 L272 128" stroke="var(--txt-3)" stroke-width="2" stroke-dasharray="5 4" marker-end="url(#fl22c)"/>' +
    '<text x="320" y="98" text-anchor="middle" font-size="11" fill="var(--txt-3)">grande circulation</text>' +
    '<text x="320" y="114" text-anchor="middle" font-size="10.5" fill="var(--txt-3)">(via les organes)</text>' +
    '<text x="320" y="182" text-anchor="middle" font-size="11.5" fill="var(--txt-3)">petite circulation (pulmonaire)</text>' +
    '<text x="320" y="308" text-anchor="middle" font-size="12" fill="var(--txt-3)">Grande circulation : VG → aorte → organes → veines caves → OD</text>' +
    '<defs>' +
    '<marker id="fl22" markerWidth="9" markerHeight="9" refX="8" refY="3" orient="auto"><path d="M0,0 L8,3 L0,6 z" fill="var(--blue)"/></marker>' +
    '<marker id="fl22b" markerWidth="9" markerHeight="9" refX="8" refY="3" orient="auto"><path d="M0,0 L8,3 L0,6 z" fill="var(--rose)"/></marker>' +
    '<marker id="fl22c" markerWidth="9" markerHeight="9" refX="8" refY="3" orient="auto"><path d="M0,0 L8,3 L0,6 z" fill="var(--txt-3)"/></marker>' +
    '</defs></svg>';

  var SVG_NEPHRON =
    '<svg viewBox="0 0 620 240" role="img" aria-label="Les trois étapes de la formation de l’urine">' +
    '<rect x="15" y="70" width="170" height="70" rx="10" fill="var(--accent-soft)" stroke="var(--accent)" stroke-width="2"/>' +
    '<text x="100" y="98" text-anchor="middle" font-size="13.5" font-weight="700" fill="var(--txt)">1. Filtration</text>' +
    '<text x="100" y="120" text-anchor="middle" font-size="11.5" fill="var(--txt-2)">glomérule · 180 L/j</text>' +
    '<rect x="225" y="70" width="170" height="70" rx="10" fill="var(--accent-soft)" stroke="var(--violet)" stroke-width="2"/>' +
    '<text x="310" y="98" text-anchor="middle" font-size="13.5" font-weight="700" fill="var(--txt)">2. Réabsorption</text>' +
    '<text x="310" y="120" text-anchor="middle" font-size="11.5" fill="var(--txt-2)">tubule · 99 %</text>' +
    '<rect x="435" y="70" width="170" height="70" rx="10" fill="var(--accent-soft)" stroke="var(--green)" stroke-width="2"/>' +
    '<text x="520" y="98" text-anchor="middle" font-size="13.5" font-weight="700" fill="var(--txt)">3. Sécrétion</text>' +
    '<text x="520" y="120" text-anchor="middle" font-size="11.5" fill="var(--txt-2)">K⁺, H⁺, médicaments</text>' +
    '<path d="M190 105 h30" stroke="var(--txt-3)" stroke-width="2" marker-end="url(#fl23)"/>' +
    '<path d="M400 105 h30" stroke="var(--txt-3)" stroke-width="2" marker-end="url(#fl23)"/>' +
    '<text x="310" y="185" text-anchor="middle" font-size="13" fill="var(--txt)">➜ 1 à 1,5 L d’urine définitive par 24 h</text>' +
    '<text x="310" y="212" text-anchor="middle" font-size="12" fill="var(--txt-3)">Diurèse minimale acceptable : 0,5 mL/kg/h</text>' +
    '<defs><marker id="fl23" markerWidth="9" markerHeight="9" refX="8" refY="3" orient="auto"><path d="M0,0 L8,3 L0,6 z" fill="var(--txt-3)"/></marker></defs>' +
    '</svg>';

  FICHES.registerUE({
    ref: '2009', ue: '2.2.S1',
    objectifs: [
      'Décrire l’anatomie et la physiologie des grands appareils',
      'Relier une fonction physiologique à sa traduction clinique et aux paramètres de surveillance',
      'Connaître les normes biologiques et les constantes usuelles',
      'Repérer les particularités physiologiques aux âges extrêmes de la vie'
    ],

    fiches: [
      {
        id: 'f1', titre: 'Appareil cardiovasculaire', duree: 14,
        motsCles: ['coeur', 'circulation', 'tension', 'pouls', 'systole', 'diastole', 'ECG'],
        accroche: 'La fonction la plus surveillée en service : chaque constante que tu relèves découle de ce schéma.',
        blocs: [
          { type: 'schema', svg: SVG_COEUR, legende: 'Double circulation : le sang traverse le cœur deux fois par cycle complet.' },
          {
            type: 'etapes', items: [
              'Le sang désoxygéné revient par les veines caves dans l’**oreillette droite**.',
              'Il passe dans le **ventricule droit** (valve tricuspide) puis part vers les poumons par l’artère pulmonaire.',
              'Aux alvéoles, l’**hématose** : le sang se charge en O₂ et se décharge en CO₂.',
              'Retour par les veines pulmonaires dans l’**oreillette gauche** (seules veines transportant du sang riche en O₂).',
              'Passage dans le **ventricule gauche** (valve mitrale) puis éjection dans l’aorte (valve aortique).'
            ]
          },
          {
            type: 'tableau', entetes: ['Paramètre', 'Norme adulte', 'À signaler'],
            lignes: [
              ['Fréquence cardiaque', '60–100 bpm', '< 50 (bradycardie) ou > 120 (tachycardie)'],
              ['Pression artérielle', '≈ 120/80 mmHg', 'PAS < 90 ou > 180 ; PAD > 110'],
              ['Pression artérielle moyenne', '≥ 65 mmHg', 'PAM < 65 : perfusion des organes menacée'],
              ['Débit cardiaque', '4–6 L/min (FC × volume d’éjection)', 'Chute = état de choc'],
              ['SpO₂', '≥ 95 % (88–92 % si BPCO sévère)', '< 90 %']
            ]
          },
          {
            type: 'cle', items: [
              '**Systole** = contraction (éjection). **Diastole** = relâchement (remplissage). La coronaire se perfuse pendant la diastole : une tachycardie raccourcit la diastole et diminue la perfusion du myocarde.',
              'Le tissu nodal impose son rythme : nœud sinusal (60–100/min) → nœud auriculo-ventriculaire → faisceau de His → réseau de Purkinje.',
              'PAM ≈ PAD + (PAS − PAD)/3. C’est elle, pas la systolique, qui détermine la perfusion des organes.',
              'Les artères transportent le sang **en partant du cœur** — pas forcément du sang oxygéné (contre-exemple : l’artère pulmonaire).'
            ]
          },
          {
            type: 'piege', items: [
              'Prendre une tension avec un brassard trop petit surestime la valeur, et l’inverse pour un brassard trop grand.',
              'Un pouls perçu n’exclut pas un trouble du rythme : compter sur 60 secondes en cas d’irrégularité.',
              'Une PA « normale » chez un patient habituellement hypertendu peut déjà être une hypotension relative.'
            ]
          },
          {
            type: 'flash', items: [
              { q: 'Quelles veines transportent du sang riche en oxygène ?', a: 'Les veines pulmonaires (poumons → oreillette gauche).' },
              { q: 'Quelle valve sépare oreillette gauche et ventricule gauche ?', a: 'La valve mitrale (bicuspide).' },
              { q: 'Formule du débit cardiaque ?', a: 'Débit = fréquence cardiaque × volume d’éjection systolique.' },
              { q: 'Quel est le pacemaker physiologique du cœur ?', a: 'Le nœud sinusal, dans l’oreillette droite, 60 à 100 impulsions/min.' }
            ]
          }
        ]
      },

      {
        id: 'f2', titre: 'Appareil respiratoire', duree: 12,
        motsCles: ['poumon', 'alvéole', 'hématose', 'ventilation', 'SpO2', 'dyspnée'],
        blocs: [
          {
            type: 'liste', items: [
              '**Voies aériennes supérieures** : fosses nasales, pharynx, larynx (épiglotte : protège l’arbre aérien à la déglutition).',
              '**Voies inférieures** : trachée → bronches souches → bronchioles → alvéoles (≈ 300 millions, surface d’échange ≈ 70 m²).',
              '**Plèvre** : deux feuillets et un espace virtuel. Y faire entrer de l’air = pneumothorax, du liquide = épanchement pleural.',
              '**Diaphragme** : principal muscle inspiratoire, innervé par le nerf phrénique (racines C3-C4-C5).'
            ]
          },
          {
            type: 'tableau', entetes: ['Notion', 'Définition', 'Valeur / repère'],
            lignes: [
              ['Ventilation', 'Mouvement d’air entre l’extérieur et les alvéoles', '12–20 cycles/min chez l’adulte'],
              ['Hématose', 'Échange alvéolo-capillaire O₂/CO₂', 'Diffusion passive selon les pressions partielles'],
              ['Volume courant', 'Air mobilisé à chaque cycle calme', '≈ 500 mL (6–8 mL/kg)'],
              ['SpO₂', 'Saturation de l’hémoglobine mesurée au doigt', '≥ 95 %'],
              ['PaO₂ / PaCO₂', 'Gaz du sang artériel', '80–100 mmHg / 35–45 mmHg']
            ]
          },
          { type: 'cle', texte: 'L’**inspiration est active** (contraction du diaphragme et des intercostaux), l’**expiration calme est passive** (rétraction élastique). Une expiration active traduit toujours un travail respiratoire anormal.' },
          {
            type: 'piege', items: [
              'Chez le patient BPCO sévère, le moteur de la ventilation devient l’hypoxie : une oxygénothérapie trop généreuse peut entraîner une hypercapnie. Cible habituelle 88–92 %.',
              'La SpO₂ est faussée par : vernis à ongles, hypothermie, hypoperfusion, intoxication au CO (valeur faussement rassurante).',
              'La bronche souche droite est plus verticale : c’est là que vont les inhalations et les sondes trop enfoncées.'
            ]
          },
          { type: 'mnemo', texte: 'Innervation du diaphragme : **C3, C4, C5 keep the diaphragm alive**. Une lésion médullaire au-dessus de C4 compromet la ventilation spontanée.' }
        ]
      },

      {
        id: 'f3', titre: 'Appareil digestif et nutrition', duree: 12,
        motsCles: ['digestion', 'foie', 'pancréas', 'absorption', 'transit', 'glycémie'],
        blocs: [
          {
            type: 'etapes', items: [
              '**Bouche** : mastication, amylase salivaire (amidon).',
              '**Œsophage** : transport par péristaltisme, pas d’absorption.',
              '**Estomac** : brassage, HCl (pH 1,5–3,5), pepsine, facteur intrinsèque (indispensable à l’absorption de la vitamine B12).',
              '**Intestin grêle** : lieu principal de l’absorption (villosités), action de la bile et des enzymes pancréatiques.',
              '**Côlon** : réabsorption de l’eau et des électrolytes, flore, formation des selles.'
            ]
          },
          {
            type: 'tableau', entetes: ['Organe', 'Sécrétion', 'Conséquence si défaillance'],
            lignes: [
              ['Foie', 'Bile, albumine, facteurs de coagulation, détoxification', 'Ictère, œdèmes, troubles de coagulation, encéphalopathie'],
              ['Vésicule biliaire', 'Stockage et concentration de la bile', 'Colique hépatique, malabsorption des graisses'],
              ['Pancréas exocrine', 'Lipase, amylase, trypsine', 'Stéatorrhée, dénutrition'],
              ['Pancréas endocrine', 'Insuline (β) et glucagon (α)', 'Diabète, hypoglycémies']
            ]
          },
          {
            type: 'cle', items: [
              'L’**insuline** fait baisser la glycémie (unique hormone hypoglycémiante). Le **glucagon**, le cortisol, l’adrénaline et l’hormone de croissance la font monter.',
              'Glycémie à jeun normale : 0,70–1,10 g/L (3,9–6,1 mmol/L). Diabète : ≥ 1,26 g/L à jeun, à deux reprises.',
              'Le foie est le carrefour métabolique : glycogène, protéines, médicaments. La quasi-totalité des adaptations posologiques passe par lui ou par le rein.'
            ]
          },
          {
            type: 'flash', items: [
              { q: 'Où est absorbée la vitamine B12, et grâce à quoi ?', a: 'Dans l’iléon terminal, grâce au facteur intrinsèque sécrété par l’estomac.' },
              { q: 'Quelle hormone abaisse la glycémie ?', a: 'L’insuline, sécrétée par les cellules bêta des îlots de Langerhans.' },
              { q: 'Quel segment digestif réalise l’essentiel de l’absorption ?', a: 'L’intestin grêle, grâce aux villosités et microvillosités.' }
            ]
          }
        ]
      },

      {
        id: 'f4', titre: 'Appareil urinaire et équilibre hydrique', duree: 12,
        motsCles: ['rein', 'néphron', 'diurèse', 'clairance', 'créatinine', 'urée'],
        blocs: [
          { type: 'schema', svg: SVG_NEPHRON, legende: 'Le rein filtre 180 L par jour pour n’éliminer qu’environ 1,5 L d’urine.' },
          {
            type: 'liste', items: [
              'Unité fonctionnelle : le **néphron** (≈ 1 million par rein).',
              'Fonctions : élimination des déchets azotés, équilibre hydro-électrolytique, équilibre acido-basique, sécrétion d’**érythropoïétine**, activation de la **vitamine D**, régulation tensionnelle via le système **rénine-angiotensine-aldostérone**.',
              'L’**ADH** (hormone antidiurétique, posthypophyse) fait réabsorber l’eau. L’**aldostérone** fait réabsorber le sodium et éliminer le potassium.'
            ]
          },
          {
            type: 'tableau', entetes: ['Marqueur', 'Norme', 'Signification'],
            lignes: [
              ['Créatininémie', '≈ 60–110 µmol/L', 'Dépend de la masse musculaire — trompeuse chez le sujet âgé maigre'],
              ['DFG estimé', '> 90 mL/min/1,73 m²', 'Le vrai indicateur de la fonction rénale'],
              ['Urée', '2,5–7,5 mmol/L', 'Monte en déshydratation et en régime hyperprotidique'],
              ['Diurèse', '1 à 1,5 L/24 h', 'Oligurie < 500 mL/24 h ; anurie < 100 mL/24 h']
            ]
          },
          {
            type: 'piege', items: [
              'Une créatinine « normale » chez une personne âgée de 50 kg peut masquer une insuffisance rénale sévère : c’est le DFG qui compte pour adapter les doses.',
              'Globe vésical = anurie apparente mais rein fonctionnel. Toujours palper l’hypogastre ou faire un bladder-scan avant de conclure.',
              'Diurèse minimale à surveiller : 0,5 mL/kg/h. En dessous, on alerte.'
            ]
          }
        ]
      },

      {
        id: 'f5', titre: 'Système nerveux et endocrinien', duree: 12,
        motsCles: ['neurone', 'sympathique', 'parasympathique', 'hypophyse', 'thyroïde', 'cortisol'],
        blocs: [
          {
            type: 'tableau', entetes: ['Système', 'Neuromédiateur', 'Effets'],
            lignes: [
              ['Sympathique (fuite ou combat)', 'Noradrénaline, adrénaline', 'Tachycardie, mydriase, bronchodilatation, ralentissement digestif, sueurs'],
              ['Parasympathique (repos, digestion)', 'Acétylcholine', 'Bradycardie, myosis, bronchoconstriction, augmentation du péristaltisme']
            ]
          },
          {
            type: 'tableau', entetes: ['Glande', 'Hormone', 'Rôle principal'],
            lignes: [
              ['Hypophyse antérieure', 'TSH, ACTH, GH, FSH/LH, prolactine', 'Chef d’orchestre des autres glandes'],
              ['Hypophyse postérieure', 'ADH, ocytocine', 'Réabsorption d’eau ; contractions utérines'],
              ['Thyroïde', 'T3, T4, calcitonine', 'Métabolisme de base ; baisse de la calcémie'],
              ['Parathyroïdes', 'PTH', 'Augmente la calcémie'],
              ['Surrénales (cortex)', 'Cortisol, aldostérone', 'Stress, glycémie, anti-inflammatoire ; rétention sodée'],
              ['Surrénales (médullaire)', 'Adrénaline, noradrénaline', 'Réponse sympathique aiguë']
            ]
          },
          {
            type: 'cle', items: [
              'Le neurone ne se divise pas : les lésions du système nerveux central sont peu réversibles.',
              'Toute anomalie hormonale se lit par excès ou par défaut : hyperthyroïdie = tachycardie, amaigrissement, chaleur ; hypothyroïdie = bradycardie, prise de poids, frilosité, constipation.',
              'La corticothérapie prolongée met la surrénale au repos : **l’arrêt brutal expose à une insuffisance surrénale aiguë**. On décroît toujours progressivement.'
            ]
          },
          { type: 'mnemo', texte: 'Sympathique = « **S**print » (tout accélère, sauf la digestion). Parasympathique = « **P**ause » (tout ralentit, sauf la digestion).' }
        ]
      },

      {
        id: 'f6', titre: 'Cycles de la vie : particularités aux âges extrêmes', duree: 10,
        motsCles: ['nourrisson', 'vieillissement', 'grossesse', 'ménopause', 'personne âgée'],
        blocs: [
          {
            type: 'tableau', entetes: ['', 'Nourrisson', 'Personne âgée'],
            lignes: [
              ['Eau corporelle', '≈ 75 % du poids : déshydratation très rapide', '≈ 50 % : réserve hydrique faible, soif diminuée'],
              ['Thermorégulation', 'Immature : hypothermie facile', 'Moins efficace : hypo- et hyperthermie'],
              ['Fréquence cardiaque', '120–160/min à la naissance', 'Souvent normale, mais moindre adaptation à l’effort'],
              ['Fonction rénale', 'Immature jusqu’à ≈ 2 ans', 'DFG diminué : adapter les posologies'],
              ['Peau', 'Fine, barrière incomplète', 'Fine, sèche, fragile : risque d’escarre et de déchirure cutanée']
            ]
          },
          {
            type: 'liste', items: [
              '**Vieillissement physiologique** ≠ maladie : baisse progressive des réserves fonctionnelles sans symptôme au repos. C’est en situation de stress (infection, chirurgie) que la fragilité se révèle.',
              '**Presbyacousie et presbytie** : penser à se placer face à la personne, éclairer, ne pas crier.',
              '**Polymédication** : premier facteur iatrogène chez le sujet âgé. Chaque nouvelle prescription mérite la question « qu’est-ce qu’on arrête ? ».',
              '**Grossesse** : augmentation du volume plasmatique (≈ +40 %), anémie de dilution physiologique, augmentation du débit cardiaque, compression cave en décubitus dorsal après 20 SA (installer en décubitus latéral gauche).'
            ]
          },
          { type: 'piege', texte: 'Chez la personne âgée, une infection peut se manifester **sans fièvre**, par une confusion ou une chute isolée. Une confusion d’apparition brutale se traite comme une urgence diagnostique, pas comme un trait d’âge.' }
        ]
      }
    ],

    qcm: [
      { id: 'q1', enonce: 'Quelles structures transportent du sang riche en oxygène ?', choix: ['L’artère pulmonaire', 'Les veines pulmonaires', 'L’aorte', 'Les veines caves'], bonnes: [1, 2], explication: 'Piège classique : l’artère pulmonaire transporte du sang PAUVRE en O₂ vers les poumons, les veines pulmonaires en ramènent du sang RICHE en O₂. Artère = qui part du cœur ; veine = qui y revient. Rien à voir avec l’oxygénation.', difficulte: 2 },
      { id: 'q2', enonce: 'La valve située entre l’oreillette droite et le ventricule droit est :', choix: ['la valve mitrale', 'la valve tricuspide', 'la valve aortique', 'la valve pulmonaire'], bonnes: [1], explication: 'À droite : tricuspide (3 cuspides). À gauche : mitrale ou bicuspide. Moyen mnémotechnique : « tRIcuspide à dRoIte ».', difficulte: 1 },
      { id: 'q3', enonce: 'Le débit cardiaque correspond à :', choix: ['fréquence cardiaque × volume d’éjection systolique', 'pression artérielle × résistances', 'volume courant × fréquence respiratoire', 'la quantité de sang dans les ventricules'], bonnes: [0], explication: 'Débit cardiaque = FC × VES, soit 4 à 6 L/min au repos. Toute chute (bradycardie sévère, hypovolémie, défaillance de pompe) compromet la perfusion des organes.', difficulte: 2 },
      { id: 'q4', enonce: 'Une tachycardie prolongée diminue la perfusion coronaire parce que :', choix: ['elle augmente la pression diastolique', 'elle raccourcit la diastole', 'elle diminue la fréquence respiratoire', 'elle ferme les valves aortiques'], bonnes: [1], explication: 'Les artères coronaires se remplissent pendant la DIASTOLE. Une tachycardie raccourcit surtout la diastole : moins de temps de perfusion, alors même que la demande en O₂ du myocarde augmente.', difficulte: 3 },
      { id: 'q5', enonce: 'Le principal muscle inspiratoire est :', choix: ['les intercostaux externes', 'le diaphragme', 'les scalènes', 'le grand pectoral'], bonnes: [1], explication: 'Le diaphragme assure environ 70 % du travail inspiratoire de repos. Il est innervé par le nerf phrénique (C3-C4-C5) : une lésion médullaire haute compromet la ventilation spontanée.', difficulte: 1 },
      { id: 'q6', enonce: 'Chez un patient BPCO sévère, la cible de SpO₂ habituellement recommandée est :', choix: ['≥ 98 %', '95–100 %', '88–92 %', '80–85 %'], bonnes: [2], explication: 'Chez le BPCO hypercapnique chronique, une oxygénothérapie trop généreuse peut aggraver la rétention de CO₂. La cible usuelle est 88–92 %, sauf prescription contraire.', difficulte: 3 },
      { id: 'q7', enonce: 'L’expiration au repos est :', choix: ['un phénomène actif', 'un phénomène passif lié à la rétraction élastique', 'assurée par le diaphragme', 'toujours plus courte que l’inspiration'], bonnes: [1], explication: 'L’expiration calme est passive. Une expiration active (recrutement des abdominaux, lèvres pincées) signe toujours un travail respiratoire accru.', difficulte: 2 },
      { id: 'q8', enonce: 'Quelles affirmations concernant la SpO₂ sont exactes ?', choix: ['Elle peut être faussement normale en cas d’intoxication au monoxyde de carbone', 'Elle est fiable en cas d’hypoperfusion périphérique', 'Le vernis à ongles peut la fausser', 'Elle mesure la PaO₂'], bonnes: [0, 2], explication: 'La SpO₂ mesure la saturation de l’hémoglobine, pas la PaO₂. Elle est prise en défaut en cas d’hypoperfusion, d’hypothermie, de vernis, et surtout d’intoxication au CO où la carboxyhémoglobine donne une valeur faussement rassurante.', difficulte: 3 },
      { id: 'q9', enonce: 'Le facteur intrinsèque, indispensable à l’absorption de la vitamine B12, est sécrété par :', choix: ['le pancréas', 'l’estomac', 'le foie', 'l’iléon'], bonnes: [1], explication: 'Sécrété par les cellules pariétales de l’estomac, il permet l’absorption de la B12 dans l’iléon terminal. Une gastrectomie ou une gastrite atrophique expose à une anémie de Biermer.', difficulte: 3 },
      { id: 'q10', enonce: 'Quelle est la seule hormone hypoglycémiante ?', choix: ['Le glucagon', 'Le cortisol', 'L’insuline', 'L’adrénaline'], bonnes: [2], explication: 'L’insuline est la seule hormone qui fait baisser la glycémie. Glucagon, cortisol, adrénaline et hormone de croissance sont hyperglycémiants — ce déséquilibre explique la fréquence des hyperglycémies de stress.', difficulte: 1 },
      { id: 'q11', enonce: 'Le rein assure notamment :', choix: ['la sécrétion d’érythropoïétine', 'l’activation de la vitamine D', 'la synthèse de l’albumine', 'la régulation de la pression artérielle'], bonnes: [0, 1, 3], explication: 'L’albumine est synthétisée par le FOIE. Le rein, lui, produit l’EPO, active la vitamine D et régule la pression artérielle via le système rénine-angiotensine-aldostérone. D’où l’anémie et l’ostéodystrophie de l’insuffisant rénal chronique.', difficulte: 3 },
      { id: 'q12', enonce: 'La diurèse minimale acceptable chez l’adulte est de l’ordre de :', choix: ['0,1 mL/kg/h', '0,5 mL/kg/h', '2 mL/kg/h', '5 mL/kg/h'], bonnes: [1], explication: '0,5 mL/kg/h, soit environ 35 mL/h pour 70 kg. En dessous, on parle d’oligurie et on alerte : c’est un marqueur précoce d’hypoperfusion.', difficulte: 2 },
      { id: 'q13', enonce: 'Devant une absence d’urine dans le sac, la première chose à vérifier est :', choix: ['la créatininémie', 'l’existence d’un globe vésical ou d’une sonde bouchée', 'la kaliémie', 'le poids du patient'], bonnes: [1], explication: 'Avant de conclure à une anurie, on élimine l’obstacle mécanique : globe vésical, sonde coudée ou bouchée. Palpation de l’hypogastre ou bladder-scan.', difficulte: 2 },
      { id: 'q14', enonce: 'La stimulation du système sympathique entraîne :', choix: ['une bradycardie', 'une mydriase', 'une bronchodilatation', 'une augmentation du péristaltisme'], bonnes: [1, 2], explication: 'Le sympathique prépare à l’action : tachycardie, mydriase, bronchodilatation, sueurs, et ralentissement digestif. Le parasympathique fait l’inverse.', difficulte: 2 },
      { id: 'q15', enonce: 'Quelle hormone augmente la calcémie ?', choix: ['La calcitonine', 'La parathormone (PTH)', 'L’ADH', 'L’aldostérone'], bonnes: [1], explication: 'La PTH fait monter la calcémie (os, rein, intestin via la vitamine D). La calcitonine, thyroïdienne, la fait baisser. Mnémo : « PTH = Pour Ton Hypercalcémie ».', difficulte: 2 },
      { id: 'q16', enonce: 'L’arrêt brutal d’une corticothérapie prolongée expose à :', choix: ['une insuffisance surrénale aiguë', 'une hypertension sévère', 'une hyperglycémie majeure', 'une hyperkaliémie isolée'], bonnes: [0], explication: 'La corticothérapie prolongée freine l’axe hypothalamo-hypophyso-surrénalien. L’arrêt brutal laisse l’organisme sans cortisol : asthénie, hypotension, hypoglycémie, collapsus. La décroissance est toujours progressive.', difficulte: 3 },
      { id: 'q17', enonce: 'Chez le nourrisson, l’eau représente environ :', choix: ['50 % du poids corporel', '60 % du poids corporel', '75 % du poids corporel', '90 % du poids corporel'], bonnes: [2], explication: 'Environ 75 % chez le nourrisson contre 60 % chez l’adulte et 50 % chez la personne âgée. D’où la rapidité de la déshydratation en cas de diarrhée ou de fièvre.', difficulte: 2 },
      { id: 'q18', enonce: 'Chez la personne âgée, une infection peut se manifester par :', choix: ['une confusion aiguë', 'une chute inexpliquée', 'une fièvre toujours élevée', 'une hypothermie'], bonnes: [0, 1, 3], explication: 'La présentation est souvent atypique : la fièvre peut manquer, voire s’inverser en hypothermie. Confusion ou chute d’apparition brutale doivent faire chercher une cause organique, jamais être attribuées à l’âge.', difficulte: 3 },
      { id: 'q19', enonce: 'Après 20 semaines d’aménorrhée, on évite le décubitus dorsal strict chez la femme enceinte car :', choix: ['il augmente les nausées', 'l’utérus comprime la veine cave inférieure', 'il favorise les contractions', 'il gêne la respiration fœtale'], bonnes: [1], explication: 'La compression de la veine cave inférieure réduit le retour veineux : hypotension, malaise, souffrance fœtale. On installe en décubitus latéral gauche.', difficulte: 3 },
      { id: 'q20', enonce: 'La pression artérielle moyenne (PAM) :', choix: ['se calcule ≈ PAD + (PAS − PAD)/3', 'doit rester ≥ 65 mmHg pour perfuser les organes', 'est la moyenne arithmétique de PAS et PAD', 'n’a pas d’intérêt clinique en réanimation'], bonnes: [0, 1], explication: 'La PAM n’est pas une moyenne arithmétique : la diastole occupe les deux tiers du cycle. C’est elle qui conditionne la perfusion des organes, avec un seuil habituel de 65 mmHg.', difficulte: 3 }
    ]
  });
})();
