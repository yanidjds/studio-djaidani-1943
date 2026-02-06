# 📸 Studio Photo Djaidani 1943

![Version](https://img.shields.io/badge/version-2.0.0-blue)
![License](https://img.shields.io/badge/license-MIT-green)

Application professionnelle de génération de prompts pour portraits patriotiques algériens ultra-réalistes.

## 🌟 Fonctionnalités

### ✨ Génération de Prompts Intelligente
- **Transformation automatique** : Convertissez vos descriptions françaises en prompts anglais professionnels
- **Templates spécialisés** : Templates distincts pour portraits masculins et féminins
- **IA Gemini** : Utilisation de Google Gemini AI pour une qualité exceptionnelle
- **Modifications itératives** : Affinez vos prompts avec des modifications successives

### 💾 Gestion des Données
- **Synchronisation cloud** : MongoDB Atlas pour un stockage sécurisé
- **Sauvegarde locale** : Fallback automatique sur localStorage
- **Multi-appareils** : Accédez à vos prompts depuis n'importe quel appareil
- **Export/Import** : Exportez et importez vos données au format JSON

### 🎨 Interface Moderne
- **Design responsive** : Fonctionne parfaitement sur mobile, tablette et desktop
- **Mode sombre** : Thème clair et sombre avec commutation facile
- **Animations fluides** : Transitions et animations professionnelles
- **UX optimisée** : Interface intuitive et facile à utiliser

### 📊 Fonctionnalités Avancées
- **Recherche et filtres** : Trouvez rapidement vos prompts
- **Statistiques** : Suivez votre activité
- **Historique des modifications** : Consultez toutes les modifications apportées
- **Copie et téléchargement** : Exportez vos prompts en un clic

## 🚀 Démarrage Rapide

### Prérequis
- Node.js 16+ 
- Compte Netlify (gratuit)
- Compte MongoDB Atlas (gratuit)
- Clé API Google AI Studio (gratuite)

### Installation

1. **Cloner ou télécharger le projet**
```bash
cd studio-djaidani-final
```

2. **Installer les dépendances**
```bash
npm install
```

3. **Configurer les variables d'environnement**

Créez un fichier `.env` à la racine :
```env
MONGODB_URI=mongodb+srv://votre-uri-mongodb
```

4. **Lancer en local**
```bash
npm run dev
```

5. **Déployer sur Netlify**
```bash
npm run deploy
```

## 📁 Structure du Projet

```
studio-djaidani-final/
├── index.html              # Page principale
├── styles.css              # Styles (1658 lignes)
├── config.js               # Configuration
├── database.js             # Gestion MongoDB
├── gemini.js               # API Gemini
├── app.js                  # Application principale (866 lignes)
├── netlify/
│   └── functions/         # Serverless functions
│       ├── save-prompt.js
│       ├── get-prompts.js
│       ├── update-prompt.js
│       ├── delete-prompt.js
│       └── test-connection.js
├── package.json
├── netlify.toml
└── README.md
```

## 🔧 Configuration

### Clé API Google AI Studio

1. Allez sur [Google AI Studio](https://makersuite.google.com/app/apikey)
2. Créez une nouvelle clé API
3. Copiez la clé dans `config.js`

### MongoDB Atlas

1. Créez un cluster gratuit sur [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Créez un utilisateur de base de données
3. Autorisez l'accès réseau (0.0.0.0/0 pour Netlify)
4. Copiez l'URI de connexion

### Déploiement Netlify

1. Connectez votre repository Git
2. Configurez les variables d'environnement dans Netlify
3. Déployez automatiquement

## 💡 Utilisation

### Créer un Prompt

1. **Sélectionner le genre** : Garçon ou Fille
2. **Écrire en français** : Décrivez votre vision (min 10 mots)
3. **Générer** : L'IA transforme votre texte en prompt professionnel
4. **Modifier** : Ajoutez des modifications en français si nécessaire
5. **Sauvegarder** : Conservez votre prompt pour usage futur

### Gérer vos Prompts

- **Archives** : Consultez tous vos prompts sauvegardés
- **Recherche** : Trouvez rapidement un prompt par titre ou contenu
- **Filtres** : Filtrez par genre (Garçon/Fille)
- **Tri** : Triez par date ou par titre

### Synchronisation

- **Automatique** : Activez la synchronisation automatique
- **Manuelle** : Synchronisez à la demande
- **Export** : Téléchargez toutes vos données en JSON
- **Import** : Restaurez vos données depuis un fichier

## 🎯 Templates de Prompts

### Template Masculin
- Portrait ultra-réaliste en tenue formelle
- Drapeau algérien drapé
- Carte d'Algérie en arrière-plan
- Titre "ALGÉRIE" en or/vert
- Spécifications techniques 8K

### Template Féminin
- Portrait ultra-réaliste respectueux
- Option hijab préservée
- Drapeau algérien drapé
- Carte d'Algérie en arrière-plan
- Titre "ALGÉRIE" en or/vert
- Spécifications techniques 8K

## 🔒 Sécurité

- **HTTPS** : Toutes les communications sont chiffrées
- **CORS** : Configuration sécurisée
- **Sanitization** : Nettoyage des entrées utilisateur
- **Rate limiting** : Protection contre les abus

## 🌐 Compatibilité

### Navigateurs Supportés
- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+

### Appareils
- ✅ Desktop (Windows, Mac, Linux)
- ✅ Mobile (iOS, Android)
- ✅ Tablettes

## 📝 Changelog

### Version 2.0.0 (Actuelle)
- ✨ Refonte complète de l'interface
- 🚀 Intégration API Gemini 1.5 Flash
- 💾 Système de synchronisation MongoDB
- 🎨 Mode sombre
- 📱 Design responsive amélioré
- 🔄 Historique des modifications
- 📊 Statistiques avancées
- 🔒 Sécurité renforcée

### Version 1.0.0
- 🎉 Première version
- Génération basique de prompts
- Stockage local uniquement

## 🤝 Support

Pour toute question ou problème :
- 📧 Email : support@studiodjaidani.com
- 🐛 Issues : GitHub Issues
- 📚 Documentation : [Wiki](https://github.com/studio-djaidani/wiki)

## 📄 Licence

MIT License - voir le fichier LICENSE pour plus de détails

## 👥 Auteurs

**Studio Photo Djaidani** - Fondé en 1943

---

Made with ❤️ for Algeria 🇩🇿