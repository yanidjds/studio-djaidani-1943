# 🚀 GUIDE D'INSTALLATION COMPLET - STUDIO PHOTO DJAIDANI 1943

## 📋 CE QUE VOUS ALLEZ FAIRE

Vous allez déployer votre site web sur **Netlify** (hébergement gratuit) qui pourra être accessible partout dans le monde via une URL comme `votre-site.netlify.app`.

---

## ✅ PHASE 1 : GITHUB (5 minutes)

### Étape 1 : Créer un compte GitHub

1. Allez sur **https://github.com**
2. Cliquez sur **"Sign up"**
3. Entrez votre email
4. Créez un mot de passe
5. Choisissez un nom d'utilisateur (exemple: `djaidani-adam`)
6. Vérifiez votre email
7. Activez votre compte

### Étape 2 : Créer un repository

1. Une fois connecté, cliquez sur le bouton **"+"** en haut à droite
2. Sélectionnez **"New repository"**
3. **Repository name** : `studio-djaidani-1943`
4. Sélectionnez **"Public"**
5. Cochez **"Add a README file"**
6. Cliquez sur **"Create repository"** (bouton vert)

### Étape 3 : Uploader les fichiers

1. Dans votre repository, cliquez sur **"Add file"** → **"Upload files"**
2. Faites glisser ou sélectionnez **TOUS** les fichiers :
   - `index.html`
   - `styles.css`
   - `app.js`
   - `config.js`
   - `database.js` (**version modifiée**)
   - `gemini.js`
   - `templates.js`
   - `README.md`
   - `package.json`
   - `netlify.toml`
   - `.gitignore`
   - **Dossier complet** `netlify/functions/` (avec les 4 fichiers dedans)

3. En bas, écrivez : `Initial commit - Premier déploiement`
4. Cliquez sur **"Commit changes"**

✅ **Vos fichiers sont maintenant sur GitHub !**

---

## ✅ PHASE 2 : NETLIFY (10 minutes)

### Étape 4 : Créer un compte Netlify

1. Allez sur **https://netlify.com**
2. Cliquez sur **"Sign up"**
3. Choisissez **"Sign up with GitHub"** (recommandé)
4. Autorisez Netlify à accéder à GitHub

### Étape 5 : Déployer le site

1. Dans Netlify, cliquez sur **"Add new site"**
2. Sélectionnez **"Import an existing project"**
3. Cliquez sur **"Deploy with GitHub"**
4. Si demandé, autorisez l'accès
5. Sélectionnez votre repository **`studio-djaidani-1943`**

6. **Configuration du build** :
   - **Branch to deploy** : `main` (ou `master`)
   - **Build command** : *Laissez VIDE*
   - **Publish directory** : `/`
   - **Functions directory** : `netlify/functions`

7. Cliquez sur **"Deploy site"** (bouton bleu/violet)

⏳ **Attendez 2-3 minutes... Le déploiement est en cours !**

### Étape 6 : Configurer les variables d'environnement

**C'EST L'ÉTAPE LA PLUS IMPORTANTE !**

1. Dans Netlify, allez dans votre site déployé
2. Cliquez sur **"Site settings"** (dans le menu du haut)
3. Dans le menu de gauche, cliquez sur **"Environment variables"**
4. Cliquez sur **"Add a variable"**

**Variable 1 - Google AI API :**
- **Key** : `GOOGLE_AI_API_KEY`
- **Value** : `AIzaSyChPuVLJTY_oKhUNYZA5IT8x5Ft7SlugOs`
- Cliquez sur **"Create variable"**

**Variable 2 - MongoDB URI :**
- **Key** : `MONGODB_URI`
- **Value** : `mongodb+srv://djaidaniadam02_db_user:0WZcqW2iFYDyiDtb@cluster0.vlltcxf.mongodb.net/?retryWrites=true&w=majority&appName=cluster0`
- Cliquez sur **"Create variable"**

### Étape 7 : Redéployer le site

**IMPORTANT** : Après avoir ajouté les variables d'environnement, il faut redéployer :

1. Allez dans **"Deploys"** (dans le menu du haut)
2. Cliquez sur **"Trigger deploy"** → **"Deploy site"**
3. Attendez 1-2 minutes

---

## ✅ PHASE 3 : TESTER LE SITE

### Étape 8 : Accéder à votre site

1. Dans Netlify, en haut de la page, vous verrez une URL comme :
   ```
   https://votre-site-random-name.netlify.app
   ```

2. Cliquez sur cette URL pour ouvrir votre site !

### Étape 9 : Tester les fonctionnalités

✅ **Checklist de test :**
- [ ] Le site s'affiche correctement
- [ ] Le menu fonctionne (Accueil, Nouveau, Archives)
- [ ] Le bouton "Dark Mode" fonctionne
- [ ] Vous pouvez sélectionner un genre (Garçon/Fille)
- [ ] Vous pouvez écrire du texte français
- [ ] Le bouton "Générer" fonctionne
- [ ] Un prompt en anglais est généré
- [ ] Le prompt peut être copié
- [ ] Le prompt est sauvegardé dans les Archives

---

## 🔧 DÉPANNAGE

### Problème 1 : "Erreur lors de la génération"

**Solution :**
- Vérifiez que vous avez bien ajouté `GOOGLE_AI_API_KEY` dans les variables d'environnement
- Redéployez le site après avoir ajouté la variable

### Problème 2 : "Erreur de base de données"

**Solution :**
- Vérifiez que vous avez bien ajouté `MONGODB_URI` dans les variables d'environnement
- Vérifiez que l'URI MongoDB est correcte
- Redéployez le site

### Problème 3 : Les fonctions Netlify ne fonctionnent pas

**Solution :**
- Vérifiez que le dossier `netlify/functions` a bien été uploadé sur GitHub
- Vérifiez que le fichier `netlify.toml` est à la racine du projet
- Dans Netlify, allez dans "Functions" pour voir si elles sont déployées

### Problème 4 : Le CSS ne s'applique pas

**Solution :**
- Videz le cache de votre navigateur
- Faites un "Hard Refresh" : `Ctrl + Shift + R` (Windows) ou `Cmd + Shift + R` (Mac)

---

## 🎯 PERSONNALISATION

### Changer le nom du site

1. Dans Netlify, allez dans **"Site settings"**
2. Cliquez sur **"Change site name"**
3. Entrez un nouveau nom (exemple: `studio-djaidani`)
4. Votre site sera accessible à : `https://studio-djaidani.netlify.app`

### Ajouter un domaine personnalisé

1. Achetez un nom de domaine (exemple: `www.studio-djaidani.com`)
2. Dans Netlify, allez dans **"Domain settings"**
3. Cliquez sur **"Add custom domain"**
4. Suivez les instructions pour configurer les DNS

---

## 📱 UTILISATION SUR MOBILE

Votre site est **100% responsive** et fonctionne parfaitement sur :
- 📱 Téléphones (Android, iOS)
- 📱 Tablettes (iPad, Android)
- 💻 Ordinateurs (Windows, Mac, Linux)

Vous pouvez l'ajouter à l'écran d'accueil de votre téléphone !

---

## 🔐 SÉCURITÉ

✅ **Bonnes pratiques :**
- Ne partagez JAMAIS vos clés API publiquement
- Les clés sont stockées de manière sécurisée dans Netlify
- MongoDB est accessible uniquement via les fonctions serverless
- HTTPS activé automatiquement par Netlify

---

## 📊 MONITORING

### Voir les logs

1. Dans Netlify, allez dans **"Functions"**
2. Cliquez sur une fonction (exemple: `save-prompt`)
3. Vous verrez les logs d'exécution

### Voir les déploiements

1. Allez dans **"Deploys"**
2. Vous verrez l'historique de tous vos déploiements
3. Vous pouvez revenir à une version précédente si nécessaire

---

## 🎉 FÉLICITATIONS !

Votre site **Studio Photo Djaidani 1943** est maintenant en ligne et accessible partout dans le monde !

**URL de votre site :** `https://votre-site.netlify.app`

Partagez cette URL avec vos amis, votre famille, ou vos clients !

---

## 📞 BESOIN D'AIDE ?

Si vous rencontrez des problèmes :
1. Vérifiez d'abord la section **DÉPANNAGE** ci-dessus
2. Consultez les logs dans Netlify
3. Vérifiez la console du navigateur (F12)
4. N'hésitez pas à me contacter pour de l'aide !

---

**Créé avec ❤️ par Studio Photo Djaidani 1943**
