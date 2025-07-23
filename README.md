# FiduGerec - Site Web Cabinet Fiduciaire

Site web professionnel pour le cabinet fiduciaire FiduGerec à Casablanca.

## 🚀 Déploiement sur Netlify via GitHub

### Prérequis
- Compte GitHub
- Compte Netlify  
- Node.js 18+

### Étapes de déploiement

1. **Créer un repository GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit - FiduGerec website"
   git branch -M main
   git remote add origin https://github.com/votre-username/fidugerec-website.git
   git push -u origin main
   ```

2. **Connecter à Netlify**
   - Aller sur [netlify.com](https://netlify.com)
   - Cliquer sur "New site from Git"
   - Connecter votre compte GitHub
   - Sélectionner le repository `fidugerec-website`
   - Netlify détectera automatiquement la configuration

## 🚀 Technologies Utilisées

- **Next.js 14** - Framework React avec App Router
- **TypeScript** - Typage statique pour plus de robustesse
- **Tailwind CSS** - Framework CSS utility-first
- **Heroicons** - Icônes SVG optimisées
- **React Hook Form** - Gestion des formulaires performante

## 📋 Fonctionnalités

### Pages principales
- **Accueil** - Présentation du cabinet avec hero section et services
- **Services** - Détail des prestations (comptabilité, fiscalité, conseil, création d'entreprise)
- **À propos** - Histoire du cabinet, équipe et valeurs
- **Contact** - Formulaire de contact avec validation et informations pratiques

### Fonctionnalités techniques
- ✅ Design responsive (mobile-first)
- ✅ SEO optimisé avec métadonnées
- ✅ Formulaire de contact fonctionnel
- ✅ Animations CSS fluides
- ✅ Performance optimisée
- ✅ Accessibilité respectée
- ✅ Pages légales (mentions légales, RGPD)

## 🛠️ Installation et Développement

### Prérequis
- Node.js 18+ 
- npm ou yarn

### Installation des dépendances
```bash
npm install
# ou
yarn install
```

### Lancement en mode développement
```bash
npm run dev
# ou
yarn dev
```

Le site sera accessible sur [http://localhost:3000](http://localhost:3000)

### Build de production
```bash
npm run build
npm run start
# ou
yarn build
yarn start
```

### Vérification du code
```bash
npm run lint
npm run type-check
```

## 📁 Structure du Projet

```
src/
├── app/                    # Pages Next.js (App Router)
│   ├── layout.tsx         # Layout principal
│   ├── page.tsx           # Page d'accueil
│   ├── services/          # Page services
│   ├── a-propos/          # Page à propos
│   ├── contact/           # Page contact
│   └── mentions-legales/  # Page mentions légales
├── components/            # Composants réutilisables
│   ├── Header.tsx         # Navigation principale
│   └── Footer.tsx         # Pied de page
└── styles/
    └── globals.css        # Styles globaux Tailwind
```

## 🎨 Design System

### Couleurs
- **Primary** : Bleu professionnel (#0ea5e9)
- **Secondary** : Gris moderne (#64748b)
- **Accents** : Vert pour les validations, rouge pour les erreurs

### Typographie
- **Police** : Inter (Google Fonts)
- **Hiérarchie** : H1-H6 avec tailles responsive

### Composants
- Boutons : `.btn-primary`, `.btn-secondary`
- Conteneurs : `.container-custom`, `.section-padding`
- Cards avec hover effects et shadows

## 📱 Responsive Design

- **Mobile** : 320px-767px
- **Tablet** : 768px-1023px  
- **Desktop** : 1024px+

Navigation mobile avec menu hamburger et overlay.

## 🔧 Personnalisation

### Modifier les informations du cabinet
1. Mettre à jour les constantes dans les composants Header/Footer
2. Modifier les métadonnées SEO dans `layout.tsx`
3. Adapter le contenu des pages selon vos besoins

### Ajouter une nouvelle page
1. Créer un dossier dans `src/app/`
2. Ajouter un fichier `page.tsx`
3. Mettre à jour la navigation dans `Header.tsx`

### Modifier le style
1. Adapter les couleurs dans `tailwind.config.js`
2. Modifier les classes CSS dans `globals.css`
3. Utiliser les utilitaires Tailwind dans les composants

## 🚀 Déploiement

### Vercel (recommandé)
```bash
npm install -g vercel
vercel --prod
```

### Netlify
1. Build : `npm run build`
2. Publish directory : `.next`

### Serveur classique
1. `npm run build`
2. Servir les fichiers depuis `.next/`

## 📞 Support

Pour toute question technique ou demande de modification :
- Email : contact@cabinet-fiduciaire.fr
- Téléphone : 01 23 45 67 89

## 📄 Licence

© 2024 Cabinet Fiduciaire. Tous droits réservés.

---

*Site développé avec expertise et passion pour offrir une présence web professionnelle à votre cabinet fiduciaire.*
