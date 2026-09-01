/* UE 6.1.S1 — Méthodes de travail et TIC (format allégé) */
(function () {
  'use strict';
  FICHES.registerUE({
    ref: '2009', ue: '6.1.S1',
    objectifs: [
      'Organiser son travail personnel et son temps de révision',
      'Rechercher, évaluer et citer une source fiable',
      'Utiliser les outils numériques dans le respect de la confidentialité'
    ],
    fiches: [
      {
        id: 'm1', titre: 'Chercher et évaluer une source', duree: 10,
        motsCles: ['recherche documentaire', 'source', 'CAIRN', 'HAS', 'citation', 'plagiat'],
        blocs: [
          {
            type: 'tableau', entetes: ['Type de source', 'Exemples', 'Fiabilité'],
            lignes: [
              ['Institutionnelle', 'HAS, Santé publique France, ministère, ANSM', 'Élevée, recommandations opposables'],
              ['Scientifique', 'PubMed, CAIRN, BDSP, Cochrane', 'Élevée si relue par les pairs'],
              ['Professionnelle', 'Revues infirmières, sociétés savantes', 'Bonne, à dater'],
              ['Grand public / IA générative', 'Blogs, forums, réponses d’un assistant', 'À vérifier systématiquement — jamais citée telle quelle']
            ]
          },
          {
            type: 'cle', titre: 'Évaluer une source en 5 questions', items: [
              'Qui écrit ? (auteur identifiable, qualification)',
              'Quand ? (une recommandation de 2011 peut être caduque)',
              'Pour qui, et pour quoi ? (information, promotion, vente)',
              'Sur quoi ça s’appuie ? (références citées ou non)',
              'Est-ce confirmé ailleurs ? (recoupement)'
            ]
          },
          { type: 'piege', texte: 'Le **plagiat** ne se limite pas au copier-coller : reformuler une idée sans citer sa source en est aussi. Toute citation littérale se met entre guillemets avec sa référence. Les IFSI utilisent des logiciels de détection, y compris sur les TFE.' },
          { type: 'cle', texte: 'Format de citation courant (APA) : Nom, Initiale. (Année). *Titre*. Éditeur ou revue, volume(numéro), pages. Pour un site : ajouter l’URL et la date de consultation.' }
        ]
      },
      {
        id: 'm2', titre: 'Organiser son travail et son temps', duree: 8,
        motsCles: ['organisation', 'planning', 'prise de notes', 'travail de groupe', 'numérique'],
        blocs: [
          {
            type: 'liste', items: [
              '**Prise de notes** : ne pas tout écrire. Noter la structure, les définitions, les chiffres, les exemples donnés par l’intervenant. Relire et compléter dans les 24 h — c’est la relecture rapprochée qui fixe, pas la quantité de notes.',
              '**Blocs courts** : 25 à 45 minutes de travail concentré, puis une pause réelle. Les blocs longs et hachés ne valent rien.',
              '**Planning hebdomadaire** plutôt que quotidien : plus tolérant aux imprévus de stage, donc plus tenable.',
              '**Travail de groupe** : efficace pour s’expliquer mutuellement une notion et pour se tester ; inefficace pour découvrir un cours à plusieurs.'
            ]
          },
          {
            type: 'cle', titre: 'Numérique et confidentialité — les règles non négociables', items: [
              'Aucune donnée patient sur un téléphone ou un ordinateur personnel : pas de photo, pas de nom, pas de transmission par messagerie personnelle.',
              'Pas de photo de dossier, d’écran de logiciel de soins ou de patient, même « pour réviser ».',
              'Les groupes de discussion de promotion ne sont pas un lieu de partage de cas cliniques identifiables.',
              'Le dossier patient informatisé se ferme quand on quitte le poste : la session ouverte engage celui dont c’est le code.'
            ]
          }
        ]
      }
    ],
    qcm: [
      { id: 'mq1', enonce: 'Quelle source est la plus fiable pour une recommandation de pratique en France ?', choix: ['Un forum d’étudiants', 'La Haute Autorité de santé', 'Une réponse d’assistant conversationnel', 'Un blog spécialisé non signé'], bonnes: [1], explication: 'La HAS produit les recommandations de bonne pratique. Une réponse d’IA générative peut orienter la recherche mais ne se cite jamais telle quelle : elle se vérifie à la source.', difficulte: 1 },
      { id: 'mq2', enonce: 'Le plagiat comprend :', choix: ['le copier-coller sans guillemets', 'la reformulation d’une idée sans citer la source', 'la citation entre guillemets avec référence', 'la traduction d’un texte sans le citer'], bonnes: [0, 1, 3], explication: 'Reformuler ou traduire sans citer reste du plagiat. Seule la citation avec guillemets et référence est correcte.', difficulte: 2 },
      { id: 'mq3', enonce: 'Concernant les données patient et le numérique :', choix: ['on peut photographier un dossier pour réviser', 'aucune donnée identifiable ne doit sortir du système d’information', 'un groupe de promotion est un espace privé donc autorisé', 'la session du dossier informatisé doit être fermée en quittant le poste'], bonnes: [1, 3], explication: 'Aucune donnée identifiable ne sort du système d’information, même à visée pédagogique. Une session laissée ouverte engage la responsabilité de celui dont c’est le code.', difficulte: 2 },
      { id: 'mq4', enonce: 'Pour évaluer une source, on vérifie :', choix: ['l’auteur et sa qualification', 'la date de publication', 'la présence de références', 'uniquement le nombre de vues'], bonnes: [0, 1, 2], explication: 'Qui, quand, pour qui, sur quoi ça s’appuie, et est-ce recoupé. La popularité n’est pas un critère de fiabilité.', difficulte: 1 },
      { id: 'mq5', enonce: 'La prise de notes efficace consiste à :', choix: ['tout retranscrire mot à mot', 'noter la structure, les définitions et les chiffres', 'relire et compléter dans les 24 heures', 'attendre la veille de l’examen pour relire'], bonnes: [1, 2], explication: 'Retranscrire mot à mot empêche de comprendre. La relecture rapprochée est ce qui fixe l’information, pas le volume de notes.', difficulte: 1 },
      { id: 'mq6', enonce: 'Le travail de groupe est surtout efficace pour :', choix: ['découvrir un cours qu’on n’a pas lu', 's’expliquer mutuellement une notion', 'se tester par des questions réciproques', 'répartir les chapitres sans les lire tous'], bonnes: [1, 2], explication: 'S’expliquer une notion révèle immédiatement les trous. En revanche, se répartir les chapitres sans les travailler tous produit des angles morts au partiel.', difficulte: 2 }
    ]
  });
})();
