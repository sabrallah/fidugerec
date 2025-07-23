# Guide de Déploiement - Cabinet Fiduciaire

## 🚀 Options de déploiement

### 1. Vercel (Recommandé)
Déploiement le plus simple pour Next.js :

```bash
# Installation
npm install -g vercel

# Déploiement
vercel --prod
```

**Avantages :**
- Optimisé pour Next.js
- SSL automatique
- CDN global
- Preview automatique des branches

### 2. Netlify

```bash
# Build du projet
npm run build

# Dans Netlify :
# Build command: npm run build
# Publish directory: .next
```

### 3. Serveur traditionnel (VPS, dédié)

```bash
# Sur le serveur
npm run build
npm start

# Avec PM2 (recommandé)
npm install -g pm2
pm2 start npm --name "cabinet-fiduciaire" -- start
pm2 save
pm2 startup
```

### 4. Docker

```dockerfile
# Dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

## 🔧 Configuration avant déploiement

### Variables d'environnement
Créer un fichier `.env.local` basé sur `.env.example` :

```bash
cp .env.example .env.local
```

Modifier les valeurs selon votre environnement de production.

### Optimisations SEO
- [ ] Configurer Google Analytics (optionnel)
- [ ] Ajouter Google Search Console
- [ ] Créer un sitemap.xml
- [ ] Configurer les redirections

### Performance
- [ ] Optimiser les images (format WebP)
- [ ] Configurer la mise en cache
- [ ] Activer la compression gzip

## 📋 Checklist de déploiement

### Avant le déploiement
- [ ] Tests locaux réussis (`npm run dev`)
- [ ] Build réussi (`npm run build`)
- [ ] Lint passé (`npm run lint`)
- [ ] Variables d'environnement configurées
- [ ] Domaine configuré
- [ ] SSL configuré

### Après le déploiement
- [ ] Site accessible
- [ ] Formulaire de contact fonctionnel
- [ ] Navigation mobile correcte
- [ ] Performance acceptable (PageSpeed)
- [ ] SEO configuré

## 🌐 Configuration DNS

Pour votre domaine personnalisé :

```
Type: A
Nom: @
Valeur: [IP de votre serveur]

Type: CNAME  
Nom: www
Valeur: votre-domaine.com
```

## 📊 Monitoring

### Outils recommandés
- **Google Analytics** : Statistiques de trafic
- **Google Search Console** : SEO et indexation
- **Uptime Robot** : Surveillance de disponibilité

### Métriques importantes
- Temps de chargement
- Taux de conversion des formulaires
- Trafic SEO
- Erreurs 404

## 🔒 Sécurité

### Mesures de sécurité
- SSL/TLS activé
- Headers de sécurité configurés
- Pas d'informations sensibles exposées
- Validation des formulaires côté serveur

### Sauvegarde
- Sauvegarder le code source
- Sauvegarder la base de données (si applicable)
- Documenter la configuration

## 📞 Support

En cas de problème :
1. Vérifier les logs d'erreur
2. Consulter la documentation Next.js
3. Contacter le support technique

---

**Bon déploiement ! 🎉**
