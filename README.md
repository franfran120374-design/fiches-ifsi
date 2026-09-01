# Fiches IFSI — révisions infirmier

Application web autonome (PWA) de révision pour la formation infirmière :
fiches visuelles, QCM corrigés, entraînement aux calculs de doses, suivi
d'avancement et conseils méthodologiques.

Aucun serveur, aucun compte, aucune dépendance externe. Tout tourne dans le
navigateur ; la progression est stockée en local et exportable en JSON.

---

## Installation avec GitHub Desktop

1. **Créer le dépôt** — GitHub Desktop → `File` → `New repository`
   - Name : `fiches-ifsi`
   - Local path : `C:\Users\Admin\Documents`
   - Ne pas cocher « Initialize with a README » (il est déjà fourni)
   - Le dossier créé sera donc `C:\Users\Admin\Documents\fiches-ifsi`

2. **Copier le contenu** — décompresser l'archive livrée et copier **tout le
   contenu** du dossier `fiches-ifsi` (pas le dossier lui-même) dans
   `C:\Users\Admin\Documents\fiches-ifsi`.

   Arborescence attendue :

   ```
   C:\Users\Admin\Documents\fiches-ifsi\
   ├── index.html
   ├── manifest.webmanifest
   ├── sw.js
   ├── README.md
   ├── assets\
   │   ├── css\styles.css
   │   └── icons\icon-192.png, icon-512.png, icon-maskable.png
   ├── js\
   │   ├── store.js      (progression, localStorage)
   │   ├── data.js       (registre + calcul de la progression)
   │   ├── render.js     (rendu des blocs de fiche)
   │   ├── quiz.js       (moteur de QCM)
   │   ├── calculs.js    (générateur d'exercices de calculs de doses)
   │   ├── views.js      (écrans)
   │   └── app.js        (routeur, interactions)
   └── data\
       ├── ref-2009.js   (référentiel 2009 : 6 semestres, 58 UE)
       ├── ref-2026.js   (référentiel 2026 : domaines A à E)
       ├── conseils.js   (méthodologie de révision)
       ├── ue\
       │   ├── manifest.js      (liste des fichiers à charger)
       │   ├── 2009-1.1.S1.js   2009-1.3.S1.js
       │   ├── 2009-2.1.S1.js   2009-2.2.S1.js   2009-2.4.S1.js
       │   ├── 2009-2.10.S1.js  2009-2.11.S1.js
       │   ├── 2009-3.1.S1.js   2009-4.1.S1.js
       │   ├── 2009-6.1.S1.js   2009-6.2.S1.js
       │   └── 2026-S1.js       (semestre 1 du nouveau référentiel)
       └── modules\
           ├── gestes-techniques.js
           ├── plaies-pansements.js
           └── bilans-biologiques.js
   ```

3. **Commit** — dans GitHub Desktop, les fichiers apparaissent dans
   « Changes ». Renseigner le Summary et la Description (voir plus bas),
   puis `Commit to main`.

4. **Publier** — `Publish repository`
   - Owner : `franfran120374-design`
   - Décocher « Keep this code private » si tu veux le partager

5. **Mettre en ligne** — sur github.com, dépôt `fiches-ifsi` →
   `Settings` → `Pages` → Source : `Deploy from a branch` → Branch : `main`,
   dossier `/ (root)` → `Save`.

   L'URL sera : `https://franfran120374-design.github.io/fiches-ifsi/`
   (compter 1 à 2 minutes pour le premier déploiement).

6. **Installer sur téléphone** — ouvrir cette URL dans Chrome ou Safari →
   menu → « Ajouter à l'écran d'accueil ». L'appli fonctionne ensuite hors
   ligne.

---

## Modules transversaux

Trois modules hors référentiel, accessibles par « Gestes et pratique », valables
quel que soit le référentiel actif :

- **Gestes techniques infirmiers** — injections, voie veineuse périphérique,
  prélèvements et hémocultures, sondage urinaire, oxygénothérapie, glycémie
  capillaire, ECG, sonde nasogastrique.
- **Plaies, cicatrisation et pansements** — phases de cicatrisation, choix du
  pansement par classe, escarres et stades, plaies aiguës et chroniques.
- **Bilans biologiques** — NFS, ionogramme, hémostase, inflammation, bilan
  hépatique, gaz du sang, erreurs pré-analytiques.

Ils se déclarent avec `FICHES.registerModule({ id, titre, etiquette, fiches, qcm })`
dans `data/modules/`, et se chargent via le même `data/ue/manifest.js`.

## Reprise de contenu entre référentiels

Une UE du référentiel 2026 peut réutiliser les fiches et les QCM d'une ou
plusieurs UE 2009, sans duplication de fichier :

```js
FICHES.registerUE({
  ref: '2026', ue: 'B1.S1',
  objectifs: ['…'],
  reprend: ['2009::2.1.S1', '2009::2.2.S1']
});
```

Les identifiants repris sont préfixés automatiquement, et la progression reste
**suivie séparément pour chaque référentiel**. Une UE peut combiner ses propres
`fiches`/`qcm` et une clé `reprend`.

Contrainte : dans `manifest.js`, un fichier qui reprend du contenu doit être
listé **après** ses sources.

## Ajouter le contenu d'une UE

Un fichier par UE, dans `data/ue/`, nommé `<référentiel>-<UE>.js`
(exemple : `2009-1.1.S1.js`). Il suffit ensuite d'ajouter son nom dans
`data/ue/manifest.js` — rien d'autre à modifier.

Structure d'un fichier de contenu :

```js
FICHES.registerUE({
  ref: '2009', ue: '1.1.S1',
  objectifs: ['…'],
  fiches: [
    { id: 'f1', titre: '…', duree: 10, motsCles: ['…'],
      blocs: [ { type: 'para', texte: '…' } ] }
  ],
  qcm: [
    { id: 'q1', enonce: '…', choix: ['…','…'], bonnes: [0],
      explication: '…', difficulte: 2 }
  ]
});
```

Types de blocs disponibles : `para`, `titre`, `liste`, `etapes`, `tableau`,
`schema` (SVG inline), `flash` (cartes question/réponse), et les encadrés
`cle`, `piege`, `mnemo`, `def`, `note`, `tombe`.

Mise en forme dans les textes : `**gras**`, `*italique*`, `` `code` ``.

Un QCM accepte plusieurs bonnes réponses : `bonnes: [0, 2]`.

---

## Ce que fait l'application

- **Deux référentiels** — 2009 (UE 1.1 → 6.2, promotions entrées avant
  septembre 2026) et 2026 (domaines A à E, réforme). Bascule dans la barre du
  haut ; la progression est stockée séparément pour chacun.
- **Programme complet** — les 6 semestres et toutes les UE existent dès le
  départ, avec ECTS et volumes horaires. Les UE sans contenu sont marquées
  « à venir ».
- **Fiches visuelles** — schémas SVG, tableaux comparatifs, encadrés
  « à retenir » / « piège » / « mnémo », cartes flash retournables.
- **QCM corrigés** — correction détaillée après chaque question, version
  longue ou courte, score et historique par UE.
- **Session de révision** — mélange de questions de plusieurs UE, avec
  système de Leitner à 5 boîtes : une question ratée revient le lendemain,
  une question réussie s'espace (1, 2, 4, 8, 16 jours).
- **Calculs de doses** — exercices générés aléatoirement (volumes à
  prélever, débits mL/h et gouttes/min, doses au poids, dilutions,
  pourcentages), corrigés étape par étape.
- **Avancement** — une UE vaut 100 % : 60 % pour les fiches lues, 40 % pour
  le meilleur score au QCM.
- **Hors ligne** — service worker, installable comme application.
- **Export / import** — sauvegarde JSON de la progression pour changer
  d'appareil.

---

## État du contenu

**Référentiel 2009 — semestre 1 complet** (sauf UE 5.1, mise de côté) :
1.1, 1.3, 2.1, 2.2, 2.4, 2.10, 2.11, 3.1, 4.1, 6.1, 6.2 — soit 11 UE,
38 fiches et 146 questions corrigées.

**Référentiel 2026 — semestre 1** : A1 (contenu propre), A2, A3, B1, B2, B3,
D1, E1, E2 par reprise du contenu 2009. C1 (santé publique) reste à écrire.

**Modules transversaux** : 14 fiches et 51 questions.

Reste à faire : semestres 2 à 6 du référentiel 2009, puis les semestres 2 à 6
du référentiel 2026 par reprise et complément.

## Sources et réserves

Le référentiel 2009 suit l'arrêté du 31 juillet 2009 relatif au diplôme
d'État d'infirmier (annexe V). Les ECTS du semestre 6 sont reconstitués pour
boucler les 180 ECTS : leur répartition exacte entre UE 3.4.S6 et UE 5.6.S6
peut varier selon les instituts — vérifier la maquette de son IFSI.

Le référentiel 2026 est un squelette structurel : les domaines A à E, la
durée (4 620 h), la répartition 142 + 38 ECTS et la date d'application
(septembre 2026) sont établis, mais le détail des unités sera affiné à mesure
que les textes se précisent. Les UE y sont nommées de façon indicative.

Le contenu des fiches est un support de révision, pas une référence
opposable : pour la pratique, se référer aux protocoles de l'établissement et
aux recommandations en vigueur.
