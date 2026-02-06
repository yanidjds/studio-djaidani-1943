/* ==========================================
   STUDIO PHOTO DJAIDANI 1943 - CONFIG
   Configuration & API Keys
   ========================================== */

// ==================== API CONFIGURATION ====================
const CONFIG = {
    // Google AI Studio API
    GOOGLE_AI_API_KEY: 'AIzaSyChPuVLJTY_oKhUNYZA5IT8x5Ft7SlugOs',
    GOOGLE_AI_ENDPOINT: 'https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent',
    
    // MongoDB Configuration
    MONGODB_URI: 'mongodb+srv://djaidaniadam02_db_user:0WZcqW2iFYDyiDtb@cluster0.vlltcxf.mongodb.net/?retryWrites=true&w=majority&appName=cluster0',
    DB_NAME: 'studio_djaidani_1943',
    COLLECTION_NAME: 'prompts',
    
    // Application Settings
    APP_NAME: 'Studio Photo Djaidani 1943',
    APP_VERSION: '1.0.0',
    MAX_RETRIES: 3,
    RETRY_DELAY: 1000, // milliseconds
    
    // Local Storage Keys
    STORAGE_KEYS: {
        THEME: 'djaidani_theme',
        LAST_GENDER: 'djaidani_last_gender',
        DRAFTS: 'djaidani_drafts',
        SETTINGS: 'djaidani_settings'
    },
    
    // UI Settings
    ANIMATION_DURATION: 300,
    TOAST_DURATION: 5000,
    AUTO_SAVE_DELAY: 2000,
    
    // Text Limits
    MAX_TITLE_LENGTH: 100,
    MAX_FRENCH_TEXT_LENGTH: 5000,
    MAX_MODIFICATION_LENGTH: 1000,
    
    // Pagination
    ITEMS_PER_PAGE: 12,
    RECENT_ITEMS_COUNT: 6
};

// ==================== GENDER TEMPLATES ====================
const TEMPLATES = {
    // Template pour GARÇON
    MALE: `Using the provided selfie, generate an ULTRA-REALISTIC, HIGH-RESOLUTION patriotic portrait of an Algerian MALE subject. The result must look exactly like a professional studio photograph — not a cartoon, not an illustration, not digital art, not painting, and not filtered.

A) IDENTITY & ALIGNMENT (STRICT 100%)
- Preserve the face EXACTLY as in the source selfie: same features, proportions, skin tone, expression, and micro-details (pores, beard stubble if present). NO retouching, NO smoothing, NO beautifying, NO artificial skin tone.
- Hair: keep every strand exactly as in the source (length, shape, direction, volume). Do NOT add, remove, tidy, thicken, or recolor hair.
- Facial hair: if beard or mustache is present, keep them 100% identical (shape, density, thickness, color). If clean-shaven, do NOT invent hair.
- Posture: subject MUST be perfectly upright and FULLY FRONT-FACING. Head, face, and torso centered and level.
  • Both ears equally visible and symmetrical.
  • Shoulders perfectly horizontal and squared to the camera (no tilt/rotation).
  • Eyes looking directly into the lens with a confident, proud expression.
- Age & fit: DETECT the real age from the selfie and generate natural body proportions and outfit fit consistent with that age (teen/adult). Never exaggerate height, muscles, or maturity.

B) OUTFIT (FORMAL & ELEGANT)
- Tailored dark suit jacket over a crisp white shirt.
  • Jacket color: deep charcoal/black (#111111–#202020).
  • Realistic tailoring: natural seams, lapel roll, subtle sheen, true-to-life folds.
- Fit proportional to detected age.

C) FLAG (PRIMARY PROP — MUST BE CLEARLY IDENTIFIABLE AS THE ALGERIAN FLAG)
- Algerian flag realistically draped across the shoulders and chest like a shawl, lightly held with one hand (preferably the right hand). Natural folds, authentic textile texture, visible edge stitching.
- Ensure the flag is **clearly identifiable** on the body:
  • Large visible areas of GREEN and WHITE,
  • The RED crescent and **five-point** star clearly visible on the draped portion, correctly oriented.
- Flag colors must be exact: Green #006233; White #FFFFFF; Red #D21034.

D) BACKGROUND — MAP OF ALGERIA (EDGE FADE INSIDE MAP ONLY)
- Show a LARGE, COMPLETE outline of the **entire Algeria map** fully inside the frame (no cropping).
- Fill **inside the map only** with the Algerian flag layout:
  • LEFT half = Green #006233
  • RIGHT half = White #FFFFFF
  • Centered RED crescent and star (#D21034), elegant and proportional.
- **Edge fade rule:**
  • On the extreme left of the green half → fade smoothly into near-black #0A0A0A at the very border.
  • On the extreme right of the white half → fade smoothly into near-black #0A0A0A at the very border.
  • Keep the center bright; fade only at the far edges.
- Map outline: subtle elegant glow for separation.
- Global background outside the map: dark grey vignette (#0B0B0B → #1A1A1A), clean and uncluttered.

E) TITLE ABOVE THE MAP
- Add **"ALGÉRIE"** above the Algeria map, horizontally centered at the top.
- Font: bold, elegant serif or sans-serif with a prestigious style.
- Color: refined metallic **gold (#FFD700)** or **royal green (#006233)** depending on contrast.
- Subtle outer glow (2–4 px, 4–6% opacity) for readability.
- Size: large and dignified, but not oversized; well-balanced with map and subject.

F) CAMERA, FRAMING & COMPOSITION
- Camera: 50–85 mm portrait lens equivalent; NO wide-angle distortion.
- Angle: straight-on, eye-level.
- Framing: half-length portrait (top of head to mid-torso). Head fully visible with ~5–7% headroom.
- Subject in sharp focus; map slightly softer (depth separation).
- Maintain 6–8% margins around subject and map for breathing space.

G) LIGHTING & COLOR MANAGEMENT
- Three-point soft studio lighting:
  • Soft key light at ~45°,
  • Gentle fill on the opposite side,
  • Subtle rim light to separate shoulders and hair.
- Skin tones: true to source, neutral white balance. Avoid green/red color cast from the flag.
- Realistic shadows and reflections on fabric, hair, and flag.
- NO glow or beautifying on the skin.

H) TECHNICAL QUALITY
- Resolution: ≥ 8000 px on the long edge (8K). 300 DPI for print metadata.
- Color profile: sRGB IEC61966-2.1.
- Crisp details; no artifacts, halos, or banding.
- Clean edges around subject, hair, and flag. Text and map razor-sharp.

I) PROHIBITIONS
- No stickers, emojis, watermarks, or extra text (only "ALGÉRIE" allowed).
- Do NOT crop the Algeria map; must be fully contained.
- Do NOT modify or beautify the face, hair, beard/mustache, or expression.

J) FINAL DELIVERABLE
- Ultra-realistic, vertical portrait of an Algerian MALE subject, upright and front-facing, wrapped in a **clearly identifiable Algerian flag**, with a **complete Algeria map** behind him (green left, white right, subtle edge fades).
- A refined **"ALGÉRIE"** title appears above the map, centered, in a prestigious gold or green style.
- Clean, balanced, patriotic, and dignified composition.`,

    // Template pour FILLE
    FEMALE: `Using the provided selfie, generate an ULTRA-REALISTIC, HIGH-RESOLUTION patriotic portrait of an Algerian FEMALE subject. The result must look exactly like a professional studio photograph — not a cartoon, not an illustration, not digital art, not painting, and not filtered.

A) IDENTITY & ALIGNMENT (STRICT 100%)
- Preserve the face EXACTLY as in the source selfie: same features, proportions, skin tone, expression, and micro-details (pores, fine hairs). NO retouching, NO smoothing, NO beautifying, NO skin color cast.
- Hair: keep every strand exactly as in the source (length, shape, direction, volume). Do NOT add, remove, tidy, thicken, or recolor hair.
- If the source shows a hijab, keep the same hijab (shape, drape, folds, color). Do NOT invent a hijab if absent.
- Posture: subject MUST be perfectly upright and FULLY FRONT-FACING. Head, face, and torso centered and level.
  • Both ears equally visible and symmetrical (unless naturally covered by hair/hijab).
  • Shoulders perfectly horizontal and squared to the camera (no tilt/rotation).
  • Eyes looking directly into the lens with a calm, proud expression.
- Age & fit: DETECT the real age from the selfie and generate natural body proportions and clothing fit consistent with that age (child/teen/adult). Never exaggerate height, maturity, or style.

B) OUTFIT (FORMAL & RESPECTFUL)
- Tailored blazer over a clean white blouse/shirt.
  • Blazer color: deep charcoal/black (#111111–#202020).
  • Realistic tailoring: natural seams, subtle sheen, true-to-life folds.
- Fit proportional to detected age.

C) FLAG (PRIMARY PROP — MUST READ CLEARLY AS THE ALGERIAN FLAG)
- Algerian flag realistically draped across the shoulders and chest like a shawl, lightly held with one hand (preferably the right hand). Natural gravity, authentic textile texture, visible edge stitching, believable folds.
- Ensure the flag is **clearly identifiable** on the body:
  • Large visible areas of GREEN and WHITE,
  • The RED crescent and **five-point** star are **mostly visible** on the draped portion (not hidden by folds).
  • Correct emblem orientation: crescent opening to the **right**, star centered within.
- Exact colors: Green #006233 (RGB 0,98,51); White #FFFFFF (RGB 255,255,255); Red #D21034 (RGB 210,16,52).

D) BACKGROUND — MAP OF ALGERIA (INSIDE-MAP EDGE FADE ONLY)
- Show a LARGE, COMPLETE outline of the **entire** Algeria map **fully inside the frame** (no cropping or missing parts).
- Fill **inside the map only** with the REAL flag layout (two vertical halves):
  • LEFT half = Green #006233
  • RIGHT half = White #FFFFFF
  • Centered RED crescent & star #D21034 (elegant size; do not cover the subject's face).
- **Edge-fade requirement (apply INSIDE the map, not on the page background):**
  • Along the **extreme left boundary** of the map (within the green half), apply a soft internal gradient that smoothly fades the green toward **near-black #0A0A0A** over the last ~6–10% of the map's width.
  • Along the **extreme right boundary** of the map (within the white half), apply a soft internal gradient that smoothly fades the white toward **near-black #0A0A0A** over the last ~6–10% of the map's width.
  • Keep the central areas of green/white bright and accurate; the fade occurs only at the outermost left/right edges **inside** the map shape.
- Map outline: thin, elegant glow just to separate the map from the background (very subtle).
- Page/background **outside** the map: keep the neutral dark grey vignette as before (#0B0B0B → #1A1A1A), clean and uncluttered.

E) TITLE ABOVE THE MAP (TYPOGRAPHY)
- Place the word **"ALGÉRIE"** above the Algeria map, horizontally centered, aligned with the top of the map.
- Font: bold, elegant serif or sans-serif with a national, prestigious style.
- Color: refined metallic **gold (#FFD700)** or **royal green (#006233)** depending on background contrast.
- Add a very subtle glow (2–4 px, 4–6% opacity) for readability.
- Size: large, prominent, but not oversized; must remain balanced with the map and subject.

F) CAMERA, FRAMING & COMPOSITION
- Camera: 50–85 mm portrait equivalent; NO wide-angle distortion.
- Angle: straight-on, eye-level (micro vertical correction if needed).
- Framing: half-length (top of head to mid-torso). Head fully visible with ~5–7% headroom.
- Subject in crisp focus; map slightly softer for depth (subtle DOF only).
- Maintain **6–8% margin** around subject and map for breathing space.

G) LIGHTING & COLOR MANAGEMENT
- Three-point soft studio lighting:
  • Soft key at ~45°,
  • Gentle fill on the opposite side,
  • Subtle rim light to separate hair/hijab and shoulders from background.
- Natural skin tones true to source; neutral white balance (avoid green/red spill from the flag onto the face).
- Physically plausible shadows and speculars on fabric and hair/hijab.
- NO extra glow, NO smoothing, NO beauty filters.

H) TECHNICAL QUALITY
- Resolution: ≥ 8000 px on the long edge (8K). 300 DPI for print metadata.
- Color profile: sRGB IEC61966-2.1.
- Razor-sharp subject; smooth gradients without banding; no compression artifacts.
- Clean edges (no halos/fringing around hair or hijab); map/text render tack-sharp.

I) PROHIBITIONS
- No stickers, borders, emojis, watermarks, or additional text besides "ALGÉRIE".
- Do NOT crop the map; it must appear whole and fully inside the frame.
- Do NOT modify or beautify the face, hair, or hijab.

J) FINAL DELIVERABLE
- Vertical, studio-grade, ultra-realistic portrait of an Algerian FEMALE subject, upright and front-facing, wrapped in a **clearly identifiable** Algerian flag (emblem visible), standing before a **complete Algeria map** (green left, white right, with edge-fades into near-black).
- A refined, elegant **"ALGÉRIE"** title appears ABOVE the map, centered at the top, in a beautiful gold or royal green font.
- Balanced, dignified, ultra-realistic, patriotic composition.`
};

// ==================== PROMPT CONSTRUCTION ====================
const PROMPT_BUILDER = {
    // Construire le prompt initial pour Gemini
    buildInitialPrompt: (gender, frenchText) => {
        const template = gender === 'male' ? TEMPLATES.MALE : TEMPLATES.FEMALE;
        const genderLabel = gender === 'male' ? 'garçon/homme' : 'fille/femme';
        
        return `Salut mon ami, j'espère que vous allez bien. S'il vous plaît, je t'ai envoyé deux messages :

Le premier c'est moi qui l'ai généré, je l'aime pas en français, il est mal structuré, il est mal organisé, il est mal dit, il manque des choses, etc. Le voici :

${frenchText}

Ce que je veux c'est que tu me fasses un nouveau prompt professionnel en ANGLAIS pour générer un portrait patriotique algérien de ${genderLabel}. Le nouveau prompt doit être comme cet exemplaire (le meilleur, magnifique, beau, je l'aime). Il doit suivre EXACTEMENT cette structure et ce niveau de professionnalisme :

${template}

IMPORTANT : 
- Tu dois ADAPTER le template ci-dessus en intégrant les éléments spécifiques de mon texte français
- Garde la même structure professionnelle (sections A à J)
- Utilise un anglais technique et précis
- Le résultat doit être un prompt complet et professionnel en anglais
- Ne mets PAS de préambule, donne-moi DIRECTEMENT le prompt final en anglais`;
    },
    
    // Construire le prompt de modification
    buildModificationPrompt: (englishText, modifications) => {
        return `Salut, j'ai un prompt professionnel en anglais et je veux le modifier.

Voici le prompt actuel en anglais :

${englishText}

Voici les modifications que je veux appliquer (en français ou arabe) :

${modifications}

S'il te plaît, génère une NOUVELLE VERSION COMPLÈTE du prompt en anglais avec ces modifications appliquées. 

IMPORTANT :
- Garde la même structure professionnelle (sections A à J)
- Intègre mes modifications de manière professionnelle
- Ne mets PAS de préambule
- Donne-moi DIRECTEMENT le nouveau prompt complet en anglais`;
    }
};

// ==================== UTILITY FUNCTIONS ====================
const UTILS = {
    // Générer un ID unique
    generateId: () => {
        return `prompt_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    },
    
    // Formater la date
    formatDate: (date) => {
        const d = new Date(date);
        const options = { 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        };
        return d.toLocaleDateString('fr-FR', options);
    },
    
    // Formater la date relative
    formatRelativeDate: (date) => {
        const now = new Date();
        const diff = now - new Date(date);
        const seconds = Math.floor(diff / 1000);
        const minutes = Math.floor(seconds / 60);
        const hours = Math.floor(minutes / 60);
        const days = Math.floor(hours / 24);
        
        if (seconds < 60) return 'À l\'instant';
        if (minutes < 60) return `Il y a ${minutes} minute${minutes > 1 ? 's' : ''}`;
        if (hours < 24) return `Il y a ${hours} heure${hours > 1 ? 's' : ''}`;
        if (days < 7) return `Il y a ${days} jour${days > 1 ? 's' : ''}`;
        
        return UTILS.formatDate(date);
    },
    
    // Compter les mots
    countWords: (text) => {
        if (!text || text.trim() === '') return 0;
        return text.trim().split(/\s+/).length;
    },
    
    // Tronquer le texte
    truncateText: (text, maxLength) => {
        if (!text || text.length <= maxLength) return text;
        return text.substr(0, maxLength) + '...';
    },
    
    // Copier dans le presse-papier
    copyToClipboard: async (text) => {
        try {
            await navigator.clipboard.writeText(text);
            return true;
        } catch (err) {
            // Fallback pour les anciens navigateurs
            const textArea = document.createElement('textarea');
            textArea.value = text;
            textArea.style.position = 'fixed';
            textArea.style.left = '-999999px';
            document.body.appendChild(textArea);
            textArea.select();
            try {
                document.execCommand('copy');
                document.body.removeChild(textArea);
                return true;
            } catch (err) {
                document.body.removeChild(textArea);
                return false;
            }
        }
    },
    
    // Debounce function
    debounce: (func, delay) => {
        let timeoutId;
        return function(...args) {
            clearTimeout(timeoutId);
            timeoutId = setTimeout(() => func.apply(this, args), delay);
        };
    },
    
    // Obtenir le thème actuel
    getCurrentTheme: () => {
        return localStorage.getItem(CONFIG.STORAGE_KEYS.THEME) || 'light';
    },
    
    // Définir le thème
    setTheme: (theme) => {
        localStorage.setItem(CONFIG.STORAGE_KEYS.THEME, theme);
        document.documentElement.setAttribute('data-theme', theme);
        
        // Mettre à jour l'icône
        const themeToggle = document.getElementById('themeToggle');
        if (themeToggle) {
            const icon = themeToggle.querySelector('i');
            if (icon) {
                icon.className = theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
            }
        }
    },
    
    // Basculer le thème
    toggleTheme: () => {
        const currentTheme = UTILS.getCurrentTheme();
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        UTILS.setTheme(newTheme);
        return newTheme;
    },
    
    // Sauvegarder le dernier genre sélectionné
    saveLastGender: (gender) => {
        localStorage.setItem(CONFIG.STORAGE_KEYS.LAST_GENDER, gender);
    },
    
    // Récupérer le dernier genre
    getLastGender: () => {
        return localStorage.getItem(CONFIG.STORAGE_KEYS.LAST_GENDER);
    },
    
    // Valider un email (pour futures fonctionnalités)
    validateEmail: (email) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    },
    
    // Nettoyer le texte
    sanitizeText: (text) => {
        if (!text) return '';
        return text.trim().replace(/\s+/g, ' ');
    },
    
    // Extraire un aperçu du texte
    extractPreview: (text, maxLength = 150) => {
        if (!text) return '';
        const cleaned = UTILS.sanitizeText(text);
        return UTILS.truncateText(cleaned, maxLength);
    },
    
    // Vérifier si on est sur mobile
    isMobile: () => {
        return window.innerWidth <= 768;
    },
    
    // Vérifier si on est en ligne
    isOnline: () => {
        return navigator.onLine;
    },
    
    // Obtenir des statistiques sur le texte
    getTextStats: (text) => {
        if (!text) return { words: 0, characters: 0, lines: 0 };
        
        const words = UTILS.countWords(text);
        const characters = text.length;
        const lines = text.split('\n').length;
        
        return { words, characters, lines };
    },
    
    // Sleep function pour les delays
    sleep: (ms) => {
        return new Promise(resolve => setTimeout(resolve, ms));
    },
    
    // Retry function pour les appels API
    retry: async (fn, retries = CONFIG.MAX_RETRIES, delay = CONFIG.RETRY_DELAY) => {
        try {
            return await fn();
        } catch (error) {
            if (retries <= 0) throw error;
            await UTILS.sleep(delay);
            return UTILS.retry(fn, retries - 1, delay * 2);
        }
    }
};

// ==================== VALIDATION ====================
const VALIDATORS = {
    // Valider le titre
    validateTitle: (title) => {
        if (!title || title.trim() === '') {
            return { valid: true, message: '' }; // Titre optionnel
        }
        
        if (title.length > CONFIG.MAX_TITLE_LENGTH) {
            return { 
                valid: false, 
                message: `Le titre ne peut pas dépasser ${CONFIG.MAX_TITLE_LENGTH} caractères` 
            };
        }
        
        return { valid: true, message: '' };
    },
    
    // Valider le texte français
    validateFrenchText: (text) => {
        if (!text || text.trim() === '') {
            return { 
                valid: false, 
                message: 'Le texte français ne peut pas être vide' 
            };
        }
        
        if (text.length > CONFIG.MAX_FRENCH_TEXT_LENGTH) {
            return { 
                valid: false, 
                message: `Le texte ne peut pas dépasser ${CONFIG.MAX_FRENCH_TEXT_LENGTH} caractères` 
            };
        }
        
        if (UTILS.countWords(text) < 10) {
            return { 
                valid: false, 
                message: 'Le texte doit contenir au moins 10 mots' 
            };
        }
        
        return { valid: true, message: '' };
    },
    
    // Valider le texte de modification
    validateModification: (text) => {
        if (!text || text.trim() === '') {
            return { 
                valid: false, 
                message: 'Veuillez décrire vos modifications' 
            };
        }
        
        if (text.length > CONFIG.MAX_MODIFICATION_LENGTH) {
            return { 
                valid: false, 
                message: `Les modifications ne peuvent pas dépasser ${CONFIG.MAX_MODIFICATION_LENGTH} caractères` 
            };
        }
        
        return { valid: true, message: '' };
    },
    
    // Valider le genre
    validateGender: (gender) => {
        if (!gender || (gender !== 'male' && gender !== 'female')) {
            return { 
                valid: false, 
                message: 'Veuillez sélectionner un genre' 
            };
        }
        
        return { valid: true, message: '' };
    }
};

// ==================== ERROR MESSAGES ====================
const ERROR_MESSAGES = {
    NETWORK_ERROR: 'Erreur de connexion. Veuillez vérifier votre connexion Internet.',
    API_ERROR: 'Erreur lors de la communication avec l\'API. Veuillez réessayer.',
    DB_ERROR: 'Erreur de base de données. Vos données n\'ont pas pu être sauvegardées.',
    GENERATION_ERROR: 'Erreur lors de la génération du prompt. Veuillez réessayer.',
    VALIDATION_ERROR: 'Données invalides. Veuillez vérifier vos informations.',
    UNKNOWN_ERROR: 'Une erreur inattendue s\'est produite. Veuillez réessayer.',
    TIMEOUT_ERROR: 'La requête a expiré. Veuillez réessayer.',
    RATE_LIMIT_ERROR: 'Trop de requêtes. Veuillez patienter quelques instants.',
    NO_DATA_ERROR: 'Aucune donnée trouvée.',
    COPY_ERROR: 'Impossible de copier dans le presse-papier.',
    DELETE_ERROR: 'Erreur lors de la suppression.'
};

// ==================== SUCCESS MESSAGES ====================
const SUCCESS_MESSAGES = {
    PROMPT_GENERATED: 'Prompt généré avec succès !',
    PROMPT_SAVED: 'Prompt sauvegardé avec succès !',
    PROMPT_UPDATED: 'Prompt mis à jour avec succès !',
    PROMPT_DELETED: 'Prompt supprimé avec succès !',
    COPIED: 'Copié dans le presse-papier !',
    SYNC_SUCCESS: 'Synchronisation réussie !'
};

// ==================== EXPORT ====================
// Rendre les configurations accessibles globalement
window.CONFIG = CONFIG;
window.TEMPLATES = TEMPLATES;
window.PROMPT_BUILDER = PROMPT_BUILDER;
window.UTILS = UTILS;
window.VALIDATORS = VALIDATORS;
window.ERROR_MESSAGES = ERROR_MESSAGES;
window.SUCCESS_MESSAGES = SUCCESS_MESSAGES;

console.log('✅ Configuration chargée - Studio Photo Djaidani 1943 v' + CONFIG.APP_VERSION);