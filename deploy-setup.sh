#!/bin/bash

echo "🚀 Initialisation du projet FiduGerec pour GitHub et Netlify"
echo "============================================================"

# Initialisation Git
echo "📁 Initialisation du repository Git..."
git init

# Ajout de tous les fichiers
echo "📋 Ajout des fichiers au repository..."
git add .

# Premier commit
echo "💾 Premier commit..."
git commit -m "Initial commit - FiduGerec website ready for Netlify deployment"

# Configuration de la branche principale
echo "🌿 Configuration de la branche main..."
git branch -M main

echo ""
echo "✅ Repository Git initialisé avec succès !"
echo ""
echo "🔗 Prochaines étapes :"
echo "1. Créer un repository sur GitHub"
echo "2. Ajouter l'origine remote :"
echo "   git remote add origin https://github.com/votre-username/fidugerec-website.git"
echo "3. Pousser le code :"
echo "   git push -u origin main"
echo "4. Connecter sur Netlify via GitHub"
echo ""
echo "🌐 Une fois déployé, votre site sera accessible sur une URL Netlify"
echo "   que vous pourrez personnaliser avec votre domaine fidugerec.ma"
