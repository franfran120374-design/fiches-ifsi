/* Module transversal — Plaies, cicatrisation et pansements */
(function () {
  'use strict';

  var SVG_CICAT =
    '<svg viewBox="0 0 640 210" role="img" aria-label="Les phases de la cicatrisation">' +
    '<rect x="20" y="60" width="140" height="66" rx="11" fill="rgba(225,29,72,.12)" stroke="var(--rose)" stroke-width="2"/>' +
    '<text x="90" y="86" text-anchor="middle" font-size="13" font-weight="700" fill="var(--txt)">1. Détersion</text>' +
    '<text x="90" y="106" text-anchor="middle" font-size="11.5" fill="var(--txt-2)">inflammation · J0–J4</text>' +
    '<rect x="180" y="60" width="140" height="66" rx="11" fill="rgba(217,119,6,.14)" stroke="var(--amber)" stroke-width="2"/>' +
    '<text x="250" y="86" text-anchor="middle" font-size="13" font-weight="700" fill="var(--txt)">2. Bourgeonnement</text>' +
    '<text x="250" y="106" text-anchor="middle" font-size="11.5" fill="var(--txt-2)">J4–J21</text>' +
    '<rect x="340" y="60" width="140" height="66" rx="11" fill="rgba(5,150,105,.14)" stroke="var(--green)" stroke-width="2"/>' +
    '<text x="410" y="86" text-anchor="middle" font-size="13" font-weight="700" fill="var(--txt)">3. Épidermisation</text>' +
    '<text x="410" y="106" text-anchor="middle" font-size="11.5" fill="var(--txt-2)">des berges vers le centre</text>' +
    '<rect x="500" y="60" width="120" height="66" rx="11" fill="var(--bg-soft)" stroke="var(--line-2)" stroke-width="2"/>' +
    '<text x="560" y="86" text-anchor="middle" font-size="13" font-weight="700" fill="var(--txt)">4. Maturation</text>' +
    '<text x="560" y="106" text-anchor="middle" font-size="11.5" fill="var(--txt-2)">jusqu’à 2 ans</text>' +
    '<path d="M164 93 h12" stroke="var(--txt-3)" stroke-width="2" marker-end="url(#fc)"/>' +
    '<path d="M324 93 h12" stroke="var(--txt-3)" stroke-width="2" marker-end="url(#fc)"/>' +
    '<path d="M484 93 h12" stroke="var(--txt-3)" stroke-width="2" marker-end="url(#fc)"/>' +
    '<text x="320" y="172" text-anchor="middle" font-size="12.5" fill="var(--txt-3)">Une plaie qui stagne à la même phase depuis plus de 15 jours doit être réévaluée.</text>' +
    '<defs><marker id="fc" markerWidth="9" markerHeight="9" refX="8" refY="3" orient="auto"><path d="M0,0 L8,3 L0,6 z" fill="var(--txt-3)"/></marker></defs>' +
    '</svg>';

  FICHES.registerModule({
    id: 'plaies-pansements',
    titre: 'Plaies, cicatrisation et pansements',
    etiquette: 'PLAIES',
    accroche: 'Choisir le bon pansement se déduit de l’aspect de la plaie et de son exsudat, pas de l’habitude du service.',
    motsCles: ['plaie', 'pansement', 'escarre', 'cicatrisation', 'hydrocolloïde', 'alginate', 'nécrose', 'fibrine'],
    ues: ['UE 2.4 Processus traumatiques', 'UE 4.1 Soins de confort', 'UE 4.4 Thérapeutiques'],
    objectifs: [
      'Décrire les phases de la cicatrisation et reconnaître le stade d’une plaie',
      'Choisir la classe de pansement adaptée à l’aspect et à l’exsudat',
      'Réaliser un pansement dans le respect de l’asepsie',
      'Prévenir, stadifier et prendre en charge une escarre'
    ],

    fiches: [
      {
        id: 'p1', titre: 'Cicatrisation : les quatre phases', duree: 10,
        motsCles: ['cicatrisation', 'inflammation', 'bourgeonnement', 'épidermisation', 'facteurs de retard'],
        blocs: [
          { type: 'schema', svg: SVG_CICAT, legende: 'Une plaie ne saute pas d’étape : identifier la phase conditionne le pansement.' },
          {
            type: 'tableau', entetes: ['Aspect', 'Ce que c’est', 'Objectif du soin'],
            lignes: [
              ['Noir, sec, cartonné', 'Nécrose sèche', 'Ramollir puis détacher (hydrogel, détersion mécanique si prescrite)'],
              ['Jaune, filandreux, adhérent', 'Fibrine', 'Détersion : hydrogel si sec, alginate ou hydrofibre si exsudatif'],
              ['Rouge, granuleux, humide', 'Bourgeonnement', 'Protéger et maintenir le milieu humide (hydrocellulaire, interface)'],
              ['Rose, fin, en périphérie', 'Épidermisation', 'Protéger sans arracher (interface, film, hydrocolloïde mince)'],
              ['Rouge vif, saignant, hyperbourgeonnant', 'Bourgeon excessif', 'Corticoïde local ou nitrate d’argent sur prescription']
            ]
          },
          {
            type: 'cle', titre: 'Ce qui retarde une cicatrisation', items: [
              'Dénutrition et carence protidique — évaluer l’albuminémie, enrichir l’alimentation.',
              'Diabète déséquilibré, artériopathie, tabac : l’oxygénation tissulaire est le facteur limitant.',
              'Corticoïdes, immunosuppresseurs, chimiothérapie.',
              'Appui prolongé, macération, infection locale, corps étranger.',
              'Âge, mais bien moins que la dénutrition et l’artériopathie.'
            ]
          },
          { type: 'piege', texte: 'Un pansement changé trop souvent retarde la cicatrisation : chaque réfection arrache les néovaisseaux. On respecte la durée de pose du dispositif, sauf saturation, décollement ou signe infectieux.' }
        ]
      },

      {
        id: 'p2', titre: 'Choisir son pansement', duree: 12,
        motsCles: ['hydrocolloïde', 'alginate', 'hydrofibre', 'hydrocellulaire', 'hydrogel', 'interface', 'charbon', 'argent'],
        blocs: [
          {
            type: 'tableau', entetes: ['Classe', 'Ce qu’il fait', 'Quand l’utiliser', 'À éviter'],
            lignes: [
              ['**Hydrogel**', 'Apporte de l’eau, ramollit', 'Plaie sèche, nécrose noire, fibrine sèche', 'Plaie très exsudative'],
              ['**Alginate**', 'Absorbe beaucoup, hémostatique', 'Plaie très exsudative, hémorragique, cavitaire', 'Plaie sèche (il colle et fait mal)'],
              ['**Hydrofibre**', 'Absorbe et gélifie verticalement', 'Plaie exsudative, protège les berges', 'Plaie sèche'],
              ['**Hydrocellulaire**', 'Absorbe modérément, amortit', 'Bourgeonnement, exsudat moyen, zones d’appui', '—'],
              ['**Hydrocolloïde**', 'Maintient l’humidité, occlusif', 'Plaie peu exsudative, épidermisation', 'Plaie infectée, exsudat abondant'],
              ['**Interface / tulle**', 'Non adhérent à la plaie', 'Épidermisation, plaie fragile, brûlure superficielle', '—'],
              ['**Charbon**', 'Absorbe les odeurs', 'Plaie malodorante, tumorale', '—'],
              ['**Argent**', 'Antibactérien local', 'Plaie colonisée de façon critique, sur durée limitée', 'Usage prolongé systématique']
            ]
          },
          {
            type: 'mnemo', texte: 'La logique tient en une phrase : **plaie sèche → on humidifie** (hydrogel) ; **plaie qui coule → on absorbe** (alginate, hydrofibre, hydrocellulaire) ; **plaie qui bourgeonne → on protège** (interface, hydrocellulaire).' },
          {
            type: 'etapes', titre: 'Réfection d’un pansement simple', items: [
              'Vérifier la prescription, prévenir la personne, évaluer et **traiter la douleur avant** le soin (antalgique 30 à 45 minutes avant si besoin).',
              'Hygiène des mains, préparation du matériel, plan de travail désinfecté.',
              'Retrait de l’ancien pansement avec des gants non stériles, puis élimination et friction.',
              'Observer : taille, aspect, berges, exsudat, odeur, douleur. Mesurer et photographier si le service le permet.',
              'Nettoyer au sérum physiologique du plus propre vers le plus sale, sans frotter le bourgeon.',
              'Sécher les berges par tamponnement, appliquer le pansement adapté, protéger la peau péri-lésionnelle.',
              'Tracer : date, aspect, produit utilisé, échelle de douleur, prochaine réfection.'
            ]
          },
          {
            type: 'piege', items: [
              'L’antiseptique n’est **pas** un soin de plaie de routine : il est cytotoxique pour le bourgeon. Le nettoyage de référence est le sérum physiologique ou l’eau et le savon.',
              'Pas d’hydrocolloïde sur une plaie infectée : l’occlusion aggrave.',
              'Un alginate sur une plaie sèche adhère et fait saigner au retrait.',
              'Une plaie qui devient douloureuse, malodorante, avec un pourtour rouge et chaud : ce n’est plus un problème de pansement, c’est une infection à signaler.'
            ]
          }
        ]
      },

      {
        id: 'p3', titre: 'Escarres : prévention et stades', duree: 12,
        motsCles: ['escarre', 'appui', 'Braden', 'Norton', 'stade', 'prévention', 'mobilisation'],
        blocs: [
          { type: 'def', texte: 'Une **escarre** est une lésion ischémique liée à une compression prolongée des tissus mous entre une saillie osseuse et un plan d’appui. Elle se construit en heures et se soigne en mois : tout se joue sur la prévention.' },
          {
            type: 'tableau', entetes: ['Stade', 'Aspect', 'Conduite'],
            lignes: [
              ['I', 'Rougeur qui **ne blanchit pas** à la pression, peau intacte', 'Suppression totale de l’appui, film ou hydrocolloïde mince, réévaluation'],
              ['II', 'Phlyctène ou perte cutanée superficielle (épiderme, derme)', 'Protéger, respecter la phlyctène séreuse, hydrocolloïde ou interface'],
              ['III', 'Atteinte de l’hypoderme, cratère visible, graisse exposée', 'Détersion, pansement absorbant, avis spécialisé'],
              ['IV', 'Atteinte du muscle, du tendon ou de l’os', 'Prise en charge pluridisciplinaire, souvent chirurgicale']
            ]
          },
          {
            type: 'cle', titre: 'Prévention — les six leviers', items: [
              '**Changements de position** toutes les 2 à 3 heures, planifiés et tracés, en évitant l’appui direct sur le trochanter (position à 30°).',
              '**Support adapté** : matelas à air ou à mémoire selon le niveau de risque, coussin au fauteuil (jamais de bouée, qui crée une ischémie circulaire).',
              '**État cutané** : observation quotidienne des zones d’appui, peau propre et sèche, effleurage doux sans massage appuyé des rougeurs.',
              '**Nutrition et hydratation** : apports protidiques suffisants, dépistage de la dénutrition.',
              '**Incontinence** : protection cutanée, changes fréquents, la macération multiplie le risque.',
              '**Mobilisation** : lever, marche, verticalisation dès que possible. C’est le meilleur des matelas.'
            ]
          },
          {
            type: 'piege', items: [
              'Ne **jamais masser** une rougeur d’appui : le massage aggrave l’ischémie tissulaire. On effleure, on soulage l’appui.',
              'Une rougeur qui blanchit à la pression n’est pas une escarre de stade I : c’est une hyperhémie réactionnelle, réversible.',
              'La bouée et la peau de mouton n’ont plus leur place.',
              'Les échelles (Braden, Norton) aident à formaliser le risque, elles ne remplacent pas le jugement clinique.'
            ]
          },
          {
            type: 'flash', items: [
              { q: 'Comment distingue-t-on un stade I d’une simple rougeur ?', a: 'Le stade I ne blanchit pas à la pression du doigt ; l’hyperhémie réactionnelle, si.' },
              { q: 'Fréquence des changements de position ?', a: 'Toutes les 2 à 3 heures, planifiés et tracés, adaptés au niveau de risque.' },
              { q: 'Faut-il masser une rougeur ?', a: 'Non, jamais. Le massage aggrave l’ischémie. On supprime l’appui.' },
              { q: 'Principales zones à risque en décubitus dorsal ?', a: 'Sacrum, talons, occiput, coudes, omoplates.' }
            ]
          }
        ]
      },

      {
        id: 'p4', titre: 'Plaies aiguës : sutures, brûlures, plaies chroniques', duree: 12,
        motsCles: ['suture', 'agrafes', 'brûlure', 'ulcère', 'mal perforant', 'tétanos'],
        blocs: [
          {
            type: 'cle', titre: 'Plaie suturée', items: [
              'Réfection à J2 puis selon prescription ; ablation des fils selon la localisation : visage 5 jours, cuir chevelu et membre supérieur 7 à 10 jours, tronc 10 à 12 jours, membre inférieur et dos 12 à 15 jours.',
              'Retirer un fil sur deux en premier en cas de doute sur la solidité.',
              'Vérifier systématiquement le **statut vaccinal antitétanique** devant toute plaie souillée.',
              'Signes d’alerte : rougeur qui s’étend, écoulement purulent, désunion, fièvre.'
            ]
          },
          {
            type: 'tableau', entetes: ['Brûlure', 'Aspect', 'Douleur', 'Prise en charge'],
            lignes: [
              ['1er degré', 'Érythème simple, pas de phlyctène', 'Vive', 'Refroidir, hydrater, antalgique'],
              ['2e degré superficiel', 'Phlyctènes, fond rouge, recoloration rapide', 'Très vive', 'Interface ou hydrocolloïde, cicatrise en 10 à 15 jours'],
              ['2e degré profond', 'Fond blanc rosé, sensibilité diminuée', 'Diminuée', 'Avis spécialisé, greffe possible'],
              ['3e degré', 'Cartonné, blanc ou noir, insensible', 'Absente', 'Urgence, excision-greffe']
            ]
          },
          {
            type: 'liste', items: [
              '**Règle des 9 de Wallace** (adulte) : tête 9 %, chaque membre supérieur 9 %, chaque membre inférieur 18 %, tronc antérieur 18 %, tronc postérieur 18 %, périnée 1 %. La paume de la main du patient ≈ 1 %.',
              'Refroidissement immédiat : eau à 15–25 °C pendant 10 à 15 minutes, sans hypothermie, dans les 30 premières minutes.',
              '**Jamais** de corps gras, de glace, ni de dentifrice sur une brûlure récente.'
            ]
          },
          {
            type: 'tableau', entetes: ['Plaie chronique', 'Terrain', 'Signe distinctif', 'Compression ?'],
            lignes: [
              ['Ulcère veineux', 'Insuffisance veineuse, œdème', 'Péri-malléolaire, peu douloureux, bords irréguliers, pouls présents', 'Oui, indispensable'],
              ['Ulcère artériel', 'Artériopathie, tabac, diabète', 'Distal, très douloureux, creusant, pouls abolis, peau froide', '**Non** — contre-indiquée'],
              ['Mal perforant plantaire', 'Diabète avec neuropathie', 'Point d’appui, indolore, hyperkératose autour', 'Non, mais **décharge** impérative']
            ]
          },
          { type: 'piege', texte: 'Poser une contention sur un ulcère artériel aggrave l’ischémie et peut coûter le membre. Avant toute compression, on vérifie les pouls distaux et l’index de pression systolique.' }
        ]
      }
    ],

    qcm: [
      { id: 'pq1', enonce: 'Quelle est la première phase de la cicatrisation ?', choix: ['Bourgeonnement', 'Détersion / inflammation', 'Épidermisation', 'Maturation'], bonnes: [1], explication: 'Détersion-inflammation (J0–J4), puis bourgeonnement (J4–J21), épidermisation, et enfin maturation qui peut durer jusqu’à deux ans.', difficulte: 1 },
      { id: 'pq2', enonce: 'Face à une plaie recouverte d’une nécrose noire et sèche, quel pansement choisir ?', choix: ['Un alginate', 'Un hydrogel', 'Un hydrocolloïde épais', 'Un pansement au charbon'], bonnes: [1], explication: 'Plaie sèche → on apporte de l’eau : hydrogel, pour ramollir la nécrose avant détersion. L’alginate est réservé aux plaies très exsudatives.', difficulte: 2 },
      { id: 'pq3', enonce: 'Quel pansement est indiqué sur une plaie très exsudative et hémorragique ?', choix: ['Hydrogel', 'Alginate', 'Film transparent', 'Interface'], bonnes: [1], explication: 'L’alginate absorbe fortement et possède des propriétés hémostatiques. Il est en revanche à proscrire sur une plaie sèche, où il adhère.', difficulte: 2 },
      { id: 'pq4', enonce: 'Pour nettoyer une plaie en cours de bourgeonnement, on utilise en première intention :', choix: ['de la povidone iodée', 'du sérum physiologique', 'de l’eau oxygénée', 'de la chlorhexidine alcoolique'], bonnes: [1], explication: 'Les antiseptiques sont cytotoxiques pour le bourgeon. Le nettoyage de référence est le sérum physiologique (ou l’eau et le savon). L’antiseptique reste réservé à des indications précises et limitées dans le temps.', difficulte: 2 },
      { id: 'pq5', enonce: 'L’hydrocolloïde est contre-indiqué :', choix: ['sur une plaie infectée', 'en phase d’épidermisation', 'sur une plaie peu exsudative', 'sur une plaie très exsudative'], bonnes: [0, 3], explication: 'Occlusif : il aggrave une plaie infectée et sature immédiatement sur une plaie très exsudative. Il est en revanche adapté à l’épidermisation d’une plaie propre et peu exsudative.', difficulte: 3 },
      { id: 'pq6', enonce: 'Une escarre de stade I se caractérise par :', choix: ['une phlyctène', 'une rougeur qui ne blanchit pas à la pression', 'une atteinte du muscle', 'une rougeur qui disparaît à la pression'], bonnes: [1], explication: 'Stade I : peau intacte, érythème qui ne blanchit pas. Si la rougeur blanchit, il s’agit d’une hyperhémie réactionnelle réversible.', difficulte: 2 },
      { id: 'pq7', enonce: 'Devant une rougeur d’appui, il faut :', choix: ['masser vigoureusement pour relancer la circulation', 'supprimer totalement l’appui sur la zone', 'appliquer un corps gras et poursuivre', 'placer une bouée sous la zone'], bonnes: [1], explication: 'Le massage aggrave l’ischémie et la bouée crée une compression circulaire. La seule mesure efficace est la suppression de l’appui, associée à un support adapté.', difficulte: 2 },
      { id: 'pq8', enonce: 'Quelles zones sont les plus exposées à l’escarre en décubitus dorsal ?', choix: ['Le sacrum', 'Les talons', 'Les trochanters', 'L’occiput'], bonnes: [0, 1, 3], explication: 'En décubitus dorsal : sacrum, talons, occiput, coudes, omoplates. Les trochanters sont exposés en décubitus latéral — d’où la position à 30° plutôt qu’à 90°.', difficulte: 3 },
      { id: 'pq9', enonce: 'La fréquence recommandée des changements de position chez un patient à risque est de :', choix: ['toutes les heures', 'toutes les 2 à 3 heures', 'toutes les 6 heures', 'une fois par équipe'], bonnes: [1], explication: 'Toutes les 2 à 3 heures, planifiés et tracés, adaptés au niveau de risque et au support utilisé. Le lever et la marche restent la meilleure prévention.', difficulte: 1 },
      { id: 'pq10', enonce: 'Selon la règle des 9 de Wallace chez l’adulte, un membre inférieur entier représente :', choix: ['9 %', '18 %', '27 %', '1 %'], bonnes: [1], explication: 'Tête 9 %, chaque membre supérieur 9 %, chaque membre inférieur 18 %, tronc antérieur 18 %, tronc postérieur 18 %, périnée 1 %.', difficulte: 2 },
      { id: 'pq11', enonce: 'Devant une brûlure récente, il ne faut jamais :', choix: ['refroidir à l’eau tempérée', 'appliquer un corps gras', 'appliquer de la glace', 'évaluer la surface brûlée'], bonnes: [1, 2], explication: 'Ni corps gras (qui piège la chaleur et gêne l’évaluation), ni glace (aggravation lésionnelle et hypothermie). Refroidissement à l’eau entre 15 et 25 °C pendant 10 à 15 minutes.', difficulte: 2 },
      { id: 'pq12', enonce: 'Une brûlure du 3e degré est :', choix: ['très douloureuse', 'indolore', 'phlycténulaire', 'cartonnée, blanche ou noire'], bonnes: [1, 3], explication: 'Au 3e degré, les terminaisons nerveuses sont détruites : la brûlure est indolore, cartonnée, blanche ou noire. Une brûlure indolore est plus grave qu’une brûlure douloureuse.', difficulte: 3 },
      { id: 'pq13', enonce: 'La compression veineuse est contre-indiquée en cas :', choix: ['d’ulcère veineux', 'd’ulcère artériel', 'de mal perforant plantaire', 'd’œdème du membre inférieur'], bonnes: [1], explication: 'Sur un ulcère artériel, la compression aggrave l’ischémie et peut faire perdre le membre. On vérifie toujours les pouls distaux et l’index de pression systolique avant de comprimer.', difficulte: 3 },
      { id: 'pq14', enonce: 'Un mal perforant plantaire chez un diabétique :', choix: ['est très douloureux', 'est le plus souvent indolore', 'siège sur un point d’appui', 'impose une mise en décharge'], bonnes: [1, 2, 3], explication: 'La neuropathie rend la plaie indolore : le patient continue à marcher dessus, ce qui l’entretient. La décharge est le traitement principal, avant tout pansement.', difficulte: 3 },
      { id: 'pq15', enonce: 'Le délai habituel d’ablation des fils sur le visage est de :', choix: ['3 jours', '5 jours', '10 jours', '15 jours'], bonnes: [1], explication: 'Visage 5 jours (vascularisation riche, souci esthétique), cuir chevelu et membre supérieur 7 à 10 jours, tronc 10 à 12 jours, membre inférieur et dos 12 à 15 jours.', difficulte: 2 },
      { id: 'pq16', enonce: 'Quels facteurs retardent la cicatrisation ?', choix: ['La dénutrition', 'Le tabagisme', 'Une corticothérapie au long cours', 'Un apport protidique suffisant'], bonnes: [0, 1, 2], explication: 'Dénutrition, tabac (vasoconstriction et hypoxie tissulaire), corticoïdes et immunosuppresseurs, diabète déséquilibré, artériopathie. Un bon apport protidique fait au contraire partie du traitement.', difficulte: 2 }
    ]
  });
})();
