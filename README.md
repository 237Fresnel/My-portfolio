# Portfolio de Fresnel Grace Kengne

Portfolio personnel développé en React avec une esthétique unique mêlant bleu, violet, blanc et noir.

## 🚀 Fonctionnalités

- Design moderne et unique avec animations fluides
- Navigation intuitive entre les sections
- Sections complètes : Accueil, Expériences, Formations, Compétences, Intérêts, Contact
- Responsive design pour tous les appareils
- Effets visuels et interactions sophistiqués
- Thème sombre avec accents violet/bleu

## 📋 Prérequis

- Node.js (version 14 ou supérieure)
- npm ou yarn

## 🔧 Installation

1. **Extraire les fichiers** dans un dossier de votre choix

2. **Ouvrir un terminal** dans ce dossier

3. **Installer les dépendances** :
```bash
npm install
```

4. **Lancer le projet** :
```bash
npm start
```

5. Le portfolio s'ouvrira automatiquement dans votre navigateur à l'adresse : `http://localhost:3000`

## 📁 Structure du Projet

```
portfolio/
├── public/
│   └── index.html          # Page HTML principale
├── src/
│   ├── Portfolio.jsx       # Composant principal du portfolio
│   └── index.js           # Point d'entrée de l'application
├── package.json           # Dépendances et scripts
└── README.md             # Ce fichier
```

## 🎨 Personnalisation

### Couleurs
Les couleurs principales sont définies dans les variables CSS au début du composant Portfolio.jsx :
- `--primary`: #6366f1 (bleu)
- `--secondary`: #8b5cf6 (violet)
- `--accent`: #a78bfa (violet clair)
- `--dark`: #0f172a (noir foncé)
- `--light`: #f8fafc (blanc cassé)

### Contenu
Vous pouvez modifier le contenu directement dans Portfolio.jsx :
- Expériences : tableau `experiences`
- Formations : tableau `formations`
- Compétences : objet `competences`
- Intérêts : tableau `interets`

## 🌐 Déploiement

### Build de Production
Pour créer une version optimisée pour la production :
```bash
npm run build
```

Les fichiers optimisés seront dans le dossier `build/`.

### Hébergement
Vous pouvez déployer ce portfolio sur :
- **Netlify** : Glissez-déposez le dossier `build/`
- **Vercel** : Connectez votre repository GitHub
- **GitHub Pages** : Configurez dans les paramètres du repository
- **Firebase Hosting** : `firebase deploy`

## 📱 Responsive

Le portfolio est entièrement responsive et s'adapte aux écrans :
- Desktop (> 968px)
- Tablette (640px - 968px)
- Mobile (< 640px)

## 🎯 Sections

1. **Accueil** : Présentation avec statistiques et informations de contact
2. **Expériences** : Parcours professionnel avec détails
3. **Formations** : Parcours académique
4. **Compétences** : Technologies et soft skills
5. **Intérêts** : Centres d'intérêt personnels
6. **Contact** : Formulaire et informations de contact

## 💡 Technologies Utilisées

- React 18
- Lucide React (icônes)
- CSS moderne (Grid, Flexbox, animations)
- Google Fonts (Outfit, JetBrains Mono)

## 📞 Contact

- Email: fresnel.kengne_tueguem@mines-albi.fr
- Téléphone: +33 7 82 17 06 09
- LinkedIn: [fresnel-kengne-339647265](https://www.linkedin.com/in/fresnel-kengne-339647265)
- GitHub: [@237Fresnel](https://github.com/237Fresnel)

## 📄 Licence

© 2026 Fresnel Grace Kengne - Tous droits réservés
