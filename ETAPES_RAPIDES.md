# 🎯 ÉTAPES RAPIDES - LANCER VOTRE SITE

## ⚡ RÉSUMÉ EN 3 PHASES

### 📦 PHASE 1 : GITHUB (5 min)
1. Créer compte sur **github.com**
2. Créer repository `studio-djaidani-1943`
3. Uploader TOUS les fichiers du ZIP

### 🚀 PHASE 2 : NETLIFY (10 min)
1. Créer compte sur **netlify.com** (avec GitHub)
2. Importer votre repository GitHub
3. Déployer (cliquer "Deploy site")

### 🔑 PHASE 3 : CONFIGURATION (5 min)
1. Ajouter 2 variables d'environnement dans Netlify :
   - `GOOGLE_AI_API_KEY` = `AIzaSyChPuVLJTY_oKhUNYZA5IT8x5Ft7SlugOs`
   - `MONGODB_URI` = `mongodb+srv://djaidaniadam02_db_user:0WZcqW2iFYDyiDtb@cluster0.vlltcxf.mongodb.net/?retryWrites=true&w=majority&appName=cluster0`

2. Redéployer le site (Trigger deploy)

---

## ✅ C'EST FAIT !

Votre site est en ligne : `https://votre-site.netlify.app`

---

## 📋 CHECKLIST FINALE

Avant de dire que c'est terminé, vérifiez :

- [ ] Le site s'ouvre (pas d'erreur 404)
- [ ] Les styles CSS sont appliqués
- [ ] Le menu de navigation fonctionne
- [ ] Vous pouvez sélectionner un genre
- [ ] Vous pouvez écrire du texte français
- [ ] Le bouton "Générer" crée un prompt anglais
- [ ] Le prompt peut être copié
- [ ] Le prompt apparaît dans les Archives

---

## ❓ PROBLÈMES COURANTS

### "Le site ne s'ouvre pas"
→ Attendez 2-3 minutes après le déploiement

### "Erreur lors de la génération"
→ Vérifiez que `GOOGLE_AI_API_KEY` est bien ajoutée et redéployez

### "Erreur de base de données"
→ Vérifiez que `MONGODB_URI` est bien ajoutée et redéployez

### "Les fonctions ne fonctionnent pas"
→ Vérifiez que le dossier `netlify/functions/` a bien été uploadé sur GitHub

---

## 📞 BESOIN D'AIDE ?

Consultez le fichier **GUIDE_INSTALLATION.md** pour plus de détails !

---

**🎉 Bon déploiement !**
