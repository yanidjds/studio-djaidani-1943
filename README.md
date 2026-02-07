# Studio Photo Djaidani 1943 - Générateur de Prompts IA 🎨📸

Application web professionnelle pour générer des prompts IA pour portraits patriotiques algériens.

## 📋 PROBLÈME RÉSOLU

Le problème était dans le fichier `config.js` qui contenait des commandes shell au lieu du code JavaScript pur. Tous les fichiers ont été corrigés.

## 🚀 Installation sur Netlify

### 1. Préparer les fichiers

Vous avez besoin de ces fichiers :
```
studio-djaidani/
├── index.html
├── styles.css
├── config.js (✅ CORRIGÉ)
├── database.js
├── gemini.js
├── app.js
├── package.json
├── netlify.toml
└── netlify/
    └── functions/
        ├── test-connection.js
        ├── save-prompt.js
        ├── get-prompts.js
        ├── update-prompt.js
        └── delete-prompt.js
```

### 2. Déployer sur Netlify

#### Option A : Via GitHub (Recommandé)

1. **Créer un dépôt GitHub**
   - Aller sur https://github.com/new
   - Nommer le dépôt : `studio-djaidani-1943`
   - Créer le dépôt

2. **Uploader les fichiers**
   - Cliquer sur "uploading an existing file"
   - Glisser-déposer tous les fichiers
   - Commit les changements

3. **Connecter à Netlify**
   - Aller sur https://app.netlify.com
   - Cliquer "Add new site" → "Import an existing project"
   - Choisir GitHub
   - Sélectionner votre dépôt
   - Configuration :
     - Build command : `npm install`
     - Publish directory : `.`
   - Cliquer "Deploy site"

#### Option B : Via Netlify Drop (Plus rapide)

1. **Zipper les fichiers**
   - Sélectionner TOUS les fichiers (pas le dossier parent)
   - Créer une archive ZIP

2. **Déployer**
   - Aller sur https://app.netlify.com/drop
   - Glisser-déposer le fichier ZIP
   - Attendre le déploiement

### 3. Configuration des variables d'environnement

⚠️ **IMPORTANT** : Après le déploiement :

1. Dans Netlify, aller dans :
   - Site settings → Environment variables

2. Ajouter ces variables :
   ```
   MONGODB_URI=mongodb+srv://djaidaniadam02_db_user:0WZcqW2iFYDyiDtb@cluster0.vlltcxf.mongodb.net/?retryWrites=true&w=majority&appName=cluster0
   
   GOOGLE_AI_API_KEY=AIzaSyChPuVLJTY_oKhUNYZA5IT8x5Ft7SlugOs
   ```

3. **Redéployer le site** :
   - Aller dans Deploys
   - Cliquer "Trigger deploy" → "Deploy site"

## 🔧 Configuration MongoDB Atlas

### Configurer l'accès réseau

1. Aller sur https://cloud.mongodb.com
2. Cliquer sur "Network Access"
3. Cliquer "Add IP Address"
4. Choisir "Allow Access from Anywhere" (0.0.0.0/0)
5. Sauvegarder

## ✅ Vérification

Une fois déployé :

1. Ouvrir votre site Netlify
2. Aller dans l'onglet "Synchronisation"
3. Cliquer "Tester la connexion"
4. Vous devriez voir : ✅ "Connexion réussie"

## 🎯 Fonctionnalités

### Page d'accueil
- Statistiques en temps réel
- Prompts récents
- Accès rapide aux fonctions

### Création de prompts
- Sélection du genre (Garçon/Fille)
- Description en français
- Génération automatique avec IA Gemini
- Modifications personnalisées
- Prévisualisation

### Archives
- Liste complète des prompts
- Recherche et filtres
- Modification et suppression
- Export des données

### Synchronisation
- Test de connexion MongoDB
- Sync automatique ou manuel
- Sauvegarde locale
- Import/Export de données

## 🛠️ Technologies utilisées

- **Frontend** : HTML5, CSS3, JavaScript (Vanilla)
- **Backend** : Netlify Functions (Serverless)
- **Base de données** : MongoDB Atlas
- **IA** : Google Gemini 1.5 Flash
- **Hébergement** : Netlify

## 📱 Responsive Design

L'application est entièrement responsive et fonctionne sur :
- 📱 Mobile (320px+)
- 📱 Tablette (768px+)
- 💻 Desktop (1024px+)

## 🌙 Thèmes

- 🌞 Mode clair
- 🌙 Mode sombre
- Sauvegarde automatique des préférences

## 🔒 Sécurité

- Variables d'environnement pour les clés API
- Validation des données côté serveur
- Protection contre les injections
- CORS configuré

## 📞 Support

Pour tout problème :
1. Vérifier que MongoDB autorise toutes les IP
2. Vérifier les variables d'environnement dans Netlify
3. Consulter les logs Netlify Functions
4. Tester la connexion dans l'onglet Synchronisation

## 📄 Licence

© 2024 Studio Photo Djaidani 1943 - Tous droits réservés

---

**Version** : 2.0.0  
**Dernière mise à jour** : Février 2024  
**Développé avec** : ❤️ pour Studio Photo Djaidani
