# 🚀 Instructions de Déploiement FiduGerec

## ✅ Étapes Terminées
- [x] Repository Git initialisé
- [x] Premier commit créé
- [x] Branche 'main' configurée
- [x] Fichiers de configuration Netlify prêts

## 🔗 Prochaines Étapes

### 1. Créer le Repository GitHub
1. Va sur [github.com](https://github.com)
2. Clique sur le bouton **"New repository"** (bouton vert)
3. Nom du repository: `fidugerec-website`
4. Description: `Site web professionnel FiduGerec - Cabinet Fiduciaire Casablanca`
5. Garde le repository **Public** (pour Netlify gratuit)
6. **Ne coche PAS** "Add a README file" (on en a déjà un)
7. Clique **"Create repository"**

### 2. Connecter et Pousser le Code
GitHub va t'afficher des commandes. Utilise celles-ci dans ton terminal :

```bash
git remote add origin https://github.com/sabrallah/fidugerec-website.git
git push -u origin main
```

### 3. Déployer sur Netlify
1. Va sur [netlify.com](https://netlify.com)
2. Clique **"New site from Git"**
3. Choisis **"GitHub"**
4. Autorise Netlify à accéder à tes repositories
5. Sélectionne **"fidugerec-website"**
6. Netlify détectera automatiquement :
   - Build command: `npm run build`
   - Publish directory: `out`
   - Node version: 18

### 4. Configuration Domaine (Optionnel)
Une fois déployé, tu auras une URL comme `https://fidugerec.netlify.app`

Pour utiliser ton domaine `fidugerec.ma` :
1. Dans Netlify, va dans **Site settings > Domain management**
2. Clique **"Add custom domain"**
3. Ajoute `fidugerec.ma` et `www.fidugerec.ma`
4. Configure tes DNS chez ton hébergeur de domaine

## 📱 Résultat Final
- Site accessible 24/7
- HTTPS automatique
- Déploiements automatiques à chaque push GitHub
- Performance optimisée
- Headers de sécurité configurés

## 🆘 Support
Si tu as des questions pendant le déploiement, n'hésite pas !

---
**FiduGerec** - Prêt pour le web ! 🇲🇦
