# 🎨 Studio Photo Djaidani 1943

![Version](https://img.shields.io/badge/version-1.0.0-blue)
![License](https://img.shields.io/badge/license-MIT-green)

**Studio de génération de prompts professionnels pour portraits patriotiques algériens ultra-réalistes**

Fondé en 1943, Studio Photo Djaidani vous permet de transformer vos descriptions simples en prompts professionnels de qualité studio grâce à l'intelligence artificielle Google Gemini.

---

## 📋 Table des matières

- [Fonctionnalités](#-fonctionnalités)
- [Technologies](#-technologies)
- [Installation](#-installation)
- [Configuration](#-configuration)
- [Utilisation](#-utilisation)
- [Déploiement](#-déploiement)
- [Structure du projet](#-structure-du-projet)
- [API & Intégrations](#-api--intégrations)
- [Contribution](#-contribution)
- [License](#-license)

---

## ✨ Fonctionnalités

### 🎯 Génération de Prompts
- **Transformation automatique** : Convertit vos descriptions françaises en prompts professionnels anglais
- **Templates optimisés** : Deux templates ultra-détaillés (masculin et féminin)
- **Structure professionnelle** : Prompts organisés en 10 sections (A à J)
- **Qualité 8K** : Spécifications techniques pour résolution ultra-haute

### 🔄 Modification Intelligente
- **Modifications en français ou arabe** : Écrivez vos changements dans votre langue
- **Historique complet** : Toutes les modifications sont sauvegardées
- **Régénération** : Possibilité de régénérer complètement le prompt

### 💾 Synchronisation Multi-Appareils
- **MongoDB Cloud** : Données synchronisées en temps réel
- **Cache local** : Fonctionne hors ligne
- **Auto-sync** : Synchronisation automatique toutes les 30 secondes

### 🎨 Interface Moderne
- **Design responsive** : Optimisé mobile, tablette et desktop
- **Dark mode** : Thème sombre/clair
- **Animations fluides** : Transitions CSS professionnelles
- **Accessibilité** : Interface intuitive et accessible

### 📊 Gestion Avancée
- **Archives** : Tous vos prompts organisés et recherchables
- **Recherche** : Recherche rapide par titre
- **Filtres** : Par genre (garçon/fille)
- **Tri** : Par date ou titre
- **Statistiques** : Dashboard avec métriques

---

## 🛠 Technologies

### Frontend
- **HTML5** : Structure sémantique moderne
- **CSS3** : Variables CSS, Grid, Flexbox, animations
- **JavaScript ES6+** : Classes, async/await, modules

### Backend & Services
- **Google Gemini AI** : Génération de prompts via API
- **MongoDB Atlas** : Base de données cloud
- **Netlify** : Hébergement et fonctions serverless
- **GitHub** : Versioning et déploiement continu

### Bibliothèques
- **Font Awesome 6** : Icônes
- **Google Fonts** : Typographie (Playfair Display, Inter)

---

## 🚀 Installation

### Prérequis
- Un navigateur moderne (Chrome, Firefox, Safari, Edge)
- Un compte Google AI Studio (pour la clé API)
- Un compte MongoDB Atlas (gratuit)
- Un compte GitHub
- Un compte Netlify (gratuit)

### Étape 1 : Cloner le projet

```bash
git clone https://github.com/votre-username/studio-djaidani.git
cd studio-djaidani
```

### Étape 2 : Configuration des clés API

Ouvrez `config.js` et modifiez les variables suivantes :

```javascript
const CONFIG = {
    // Votre clé Google AI Studio
    GOOGLE_AI_API_KEY: 'VOTRE_CLE_ICI',
    
    // Votre URI MongoDB
    MONGODB_URI: 'mongodb+srv://...',
    
    // Autres configurations...
};
```

### Étape 3 : Tester localement

Ouvrez simplement `index.html` dans votre navigateur !

Aucun serveur de développement n'est nécessaire pour les tests de base.

---

## ⚙️ Configuration

### Google AI Studio (Gemini)

1. Allez sur [https://aistudio.google.com/](https://aistudio.google.com/)
2. Connectez-vous avec votre compte Google
3. Créez une nouvelle clé API
4. Copiez la clé dans `config.js`

**Quota gratuit :**
- 60 requêtes par minute
- Largement suffisant pour un usage personnel

### MongoDB Atlas

1. Créez un compte sur [https://www.mongodb.com/cloud/atlas](https://www.mongodb.com/cloud/atlas)
2. Créez un cluster gratuit (M0)
3. Configurez l'accès réseau (0.0.0.0/0 pour un usage public)
4. Créez un utilisateur de base de données
5. Récupérez votre URI de connexion
6. Remplacez dans `config.js`

**Collections créées automatiquement :**
- `prompts` : Tous vos prompts sauvegardés

---

## 📖 Utilisation

### Créer un nouveau prompt

1. **Sélectionnez le genre**
   - Cliquez sur "Garçon" ou "Fille"
   
2. **Écrivez votre description en français**
   ```
   Exemple :
   Un homme algérien portant le drapeau national,
   debout devant une carte de l'Algérie. Photo 
   professionnelle avec costume noir et chemise 
   blanche. Éclairage studio, titre "ALGÉRIE" en or.
   ```

3. **Cliquez sur "Générer"**
   - L'IA transforme votre texte en prompt professionnel
   - Résultat en anglais, structure complète A-J

4. **Modifiez si nécessaire**
   ```
   Exemples de modifications :
   - Change l'âge à 15 ans
   - Ajoute un sourire
   - Rends le fond plus sombre
   - Titre en vert au lieu d'or
   ```

5. **Sauvegardez**
   - Le prompt est automatiquement sauvegardé
   - Synchronisé sur tous vos appareils

### Retrouver vos prompts

- **Accueil** : Les 6 derniers prompts
- **Archives** : Tous vos prompts
  - Recherche par titre
  - Filtre par genre
  - Tri par date ou titre

### Copier un prompt

- Cliquez sur le bouton "Copier"
- Le texte anglais est copié dans votre presse-papier
- Utilisez-le directement dans votre outil d'IA préféré (Midjourney, Stable Diffusion, etc.)

---

## 🌐 Déploiement

### Sur Netlify (Recommandé)

#### Option 1 : Via GitHub (Déploiement continu)

1. **Push sur GitHub**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Connecter à Netlify**
   - Allez sur [https://netlify.com](https://netlify.com)
   - Cliquez sur "Add new site" > "Import an existing project"
   - Sélectionnez votre repo GitHub
   - Configuration :
     - Build command : (laisser vide)
     - Publish directory : `/`
   - Cliquez sur "Deploy site"

3. **Configuration des variables d'environnement**
   - Dans Netlify : Site settings > Environment variables
   - Ajoutez :
     - `GOOGLE_AI_API_KEY`
     - `MONGODB_URI`

4. **Domaine personnalisé (optionnel)**
   - Site settings > Domain management
   - Ajoutez votre domaine

#### Option 2 : Drag & Drop

1. Zippez le dossier du projet
2. Allez sur Netlify
3. Faites glisser le zip dans la zone de déploiement
4. Configurez les variables d'environnement

### Fonctions Serverless Netlify

Pour une meilleure sécurité, créez des fonctions serverless pour MongoDB :

**Créez le dossier :**
```bash
mkdir netlify/functions
```

**save-prompt.js :**
```javascript
const { MongoClient } = require('mongodb');

exports.handler = async (event) => {
    if (event.httpMethod !== 'POST') {
        return { statusCode: 405, body: 'Method Not Allowed' };
    }
    
    const client = new MongoClient(process.env.MONGODB_URI);
    
    try {
        await client.connect();
        const db = client.db('studio_djaidani_1943');
        const collection = db.collection('prompts');
        
        const prompt = JSON.parse(event.body);
        const result = await collection.insertOne(prompt);
        
        return {
            statusCode: 200,
            body: JSON.stringify(result)
        };
    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({ error: error.message })
        };
    } finally {
        await client.close();
    }
};
```

**Installez les dépendances :**
```bash
npm install mongodb
```

**netlify.toml :**
```toml
[build]
  functions = "netlify/functions"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

---

## 📁 Structure du projet

```
studio-djaidani/
│
├── index.html              # Page principale
├── styles.css              # Styles complets (1600+ lignes)
│
├── config.js               # Configuration et API keys
├── templates.js            # Templates de prompts
├── database.js             # Gestion MongoDB
├── gemini.js               # API Google Gemini
├── app.js                  # Application principale
│
├── netlify/                # Fonctions serverless
│   └── functions/
│       ├── save-prompt.js
│       ├── get-prompt.js
│       ├── update-prompt.js
│       └── delete-prompt.js
│
├── netlify.toml            # Configuration Netlify
├── package.json            # Dépendances npm
└── README.md               # Documentation
```

---

## 🔌 API & Intégrations

### Google Gemini API

**Endpoint :**
```
https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent
```

**Exemple de requête :**
```javascript
const response = await fetch(
    `${endpoint}?key=${apiKey}`,
    {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            contents: [{
                parts: [{ text: prompt }]
            }],
            generationConfig: {
                temperature: 0.7,
                maxOutputTokens: 8192
            }
        })
    }
);
```

### MongoDB Atlas

**Structure des documents :**
```javascript
{
    _id: "prompt_1234567890_abc123",
    title: "Portrait Spider-Man",
    gender: "male",
    frenchText: "Un homme avec costume Spider-Man...",
    englishText: "Using the provided selfie...",
    modifications: [
        {
            id: "mod_xxx",
            text: "Change l'âge à 15 ans",
            result: "Updated prompt...",
            timestamp: "2024-02-06T10:30:00Z"
        }
    ],
    createdAt: "2024-02-06T10:00:00Z",
    updatedAt: "2024-02-06T10:30:00Z",
    version: 2
}
```

---

## 🎨 Templates

### Template Masculin (Garçon)

**Sections :**
- **A)** Identity & Alignment - Préservation exacte du visage
- **B)** Outfit - Costume formel élégant
- **C)** Flag - Drapeau algérien identifiable
- **D)** Background - Carte d'Algérie
- **E)** Title - "ALGÉRIE" en or/vert
- **F)** Camera & Framing - Composition photo
- **G)** Lighting - Éclairage studio
- **H)** Technical Quality - 8K, 300 DPI
- **I)** Prohibitions - Restrictions
- **J)** Final Deliverable - Résumé

### Template Féminin (Fille)

Mêmes sections avec adaptations :
- Respect du hijab si présent
- Blazer au lieu de costume
- Posture et éclairage adaptés

---

## 🧪 Tests

### Tester l'API Gemini

```javascript
// Dans la console du navigateur
await geminiTester.testBasicGeneration();
```

### Tester MongoDB

```javascript
// Créer un prompt de test
const testPrompt = await db.createPrompt({
    title: "Test",
    gender: "male",
    frenchText: "Test text",
    englishText: "Test prompt"
});

// Vérifier
console.log(testPrompt);
```

---

## 🔒 Sécurité

### Meilleures pratiques

1. **Ne jamais exposer les clés API** dans le code client
   - Utilisez des fonctions serverless Netlify
   - Variables d'environnement

2. **Validation** de toutes les entrées utilisateur
   - Limites de longueur
   - Nettoyage des données

3. **Rate limiting** sur les appels API
   - Cache des résultats
   - Retry avec backoff exponentiel

4. **MongoDB** : Accès sécurisé
   - Utilisateur avec permissions limitées
   - Whitelist IP si possible

---

## 📱 Responsive Design

### Breakpoints

- **Mobile** : < 768px
- **Tablette** : 768px - 1024px
- **Desktop** : > 1024px

### Optimisations mobiles

- Menu hamburger
- Grilles adaptatives
- Boutons tactiles agrandis
- Texte lisible sans zoom

---

## 🐛 Dépannage

### Problème : "Erreur API Gemini"

**Solution :**
- Vérifiez votre clé API
- Vérifiez votre quota (60 req/min)
- Vérifiez votre connexion Internet

### Problème : "Données non synchronisées"

**Solution :**
- Vérifiez MongoDB URI
- Vérifiez la connexion Internet
- Consultez les logs dans la console

### Problème : "Prompt non généré correctement"

**Solution :**
- Vérifiez que votre texte français a au moins 10 mots
- Soyez plus descriptif
- Vérifiez la console pour les erreurs

---

## 🚀 Améliorations futures

- [ ] Export PDF des prompts
- [ ] Partage de prompts
- [ ] Templates personnalisables
- [ ] Génération d'images directe
- [ ] Multilingue (anglais, arabe)
- [ ] Mode collaboratif
- [ ] Historique des versions
- [ ] Tags et catégories

---

## 📄 License

MIT License - Libre d'utilisation

---

## 👨‍💻 Auteur

**Studio Photo Djaidani**
Fondé en 1943

---

## 🙏 Remerciements

- Google Gemini AI
- MongoDB Atlas
- Netlify
- Font Awesome
- Google Fonts

---

## 📞 Support

Pour toute question ou problème :
- Ouvrez une issue sur GitHub
- Consultez la documentation

---

**🎨 Créez des prompts professionnels en quelques clics !**

*Studio Photo Djaidani 1943 - Portraits Patriotiques Algériens*