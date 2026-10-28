# Projet 001 — CV personnel avec React et Vite

## 1. Présentation du projet

Ce projet consiste à créer un CV personnel sous la forme d'une application web avec React et Vite.

Il a pour objectif de présenter mes informations personnelles, mes compétences informatiques, mes expériences et mes projets académiques dans une interface claire, moderne et professionnelle.

**Nom :** Oulematou DEME

**Formation :** 2e année de Licence en Génie Logiciel

**Établissement :** Institut Supérieur d'Informatique (ISI)
## 3. Étapes de création du projet

### Étape 1 : Vérification des outils

J'ai utilisé Node.js et npm pour créer et exécuter le projet.

Node.js permet d'exécuter JavaScript en dehors du navigateur.
npm permet d'installer et de gérer les dépendances du projet.

### Étape 2 : Création du projet avec Vite

Dans le terminal, j'ai exécuté les commandes suivantes :

```bash
npm create vite@latest 001 -- --template react
```

Cette commande crée un projet nommé `001` avec le modèle React de Vite.

### Étape 3 : Accès au dossier du projet


cd 001

Cette commande permet d'entrer dans le dossier du projet.

### Étape 4 : Installation des dépendances

bash
npm install

Cette commande installe les bibliothèques nécessaires au fonctionnement du projet.

### Étape 5 : Démarrage du serveur de développement

npm run dev

Cette commande démarre le serveur de développement Vite. Le terminal affiche une adresse locale à ouvrir dans le navigateur pour visualiser le CV.

## 4. Organisation des dossiers et fichiers

### Le dossier `node_modules`

Il contient les dépendances installées avec npm. Il est généré automatiquement et ne doit généralement pas être modifié manuellement.

### Le dossier `public`

Il contient les fichiers statiques accessibles directement, comme certaines images ou icônes.

### Le dossier `src`

Il contient le code source de l'application React, notamment les composants et les styles CSS.

### Le fichier `index.html`

Il constitue la page HTML principale dans laquelle l'application React est chargée.

### Le fichier `src/main.jsx`

C'est le point d'entrée de l'application. Il permet de charger React, d'afficher le composant principal et d'importer les styles CSS.

### Le fichier `src/App.jsx`

Il représente le composant principal de l'application. Il rassemble les différents composants du CV.

### Le fichier `src/infoPerso.jsx`

Il affiche mes informations personnelles et les coordonnées.

### Le fichier `src/competences.jsx`

Il présente mes  compétences informatiques et les qualités personnelles.

### Le fichier `src/Experiences.jsx`

Il présente les projets académiques, les travaux pratiques et l'objectif professionnel.

### Le fichier `src/index.css`

Il contient les règles CSS utilisées pour mettre en forme le CV : couleurs, marges, espacements, cartes, typographie et adaptation de l'affichage.

### Le fichier `package.json`

Il contient les informations du projet, ses dépendances et les commandes disponibles, notamment `npm run dev`.

### Le fichier `package-lock.json`

Il enregistre les versions précises des dépendances installées afin de faciliter une installation cohérente du projet.

### Le fichier `vite.config.js`

Il contient la configuration de Vite et du plugin React utilisé par le projet.

## 5. Organisation des composants React

Le CV est divisé en trois composants principaux :

- `InfoPerso` : affiche les informations personnelles.
- `Competences` : présente les compétences.
- `Experiences` : décrit les projets et les travaux pratiques.

Le composant `App` importe ces composants et les affiche dans l'application.

Cette organisation rend le code plus lisible, facilite les modifications et permet de séparer les différentes parties du CV.

## 6. Technologies utilisées

- **HTML :** structure de la page web.
- **CSS :** mise en forme et présentation visuelle.
- **JavaScript :** langage de programmation utilisé par React.
- **React :** création de l'interface à partir de composants.
- **JSX :** syntaxe qui permet d'écrire une structure proche du HTML dans JavaScript.
- **Vite :** outil de création et de lancement du projet.
- **Node.js et npm :** environnement et gestionnaire de dépendances.

## 7. Résultat attendu

Le résultat est un CV web qui présente mes informations personnelles, mes compétences et mes projets dans une interface organisée et professionnelle.

Le projet peut être amélioré par l'ajout d'une photo professionnelle, de liens vers mes réalisations et d'autres informations pertinentes.

## 8. Conclusion

Ce travail m'a permis de découvrir l'organisation d'un projet React avec Vite, de comprendre le rôle des principaux fichiers et de mettre en pratique les notions de composants, de JSX et de CSS.

Il constitue une première étape dans le développement de mes compétences en développement web et en Génie Logiciel.