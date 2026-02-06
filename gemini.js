/* ==========================================
   STUDIO PHOTO DJAIDANI 1943 - GEMINI API
   Intégration Google Gemini AI
   ========================================== */

class GeminiAPI {
    constructor() {
        this.apiKey = CONFIG.GOOGLE_AI_API_KEY;
        this.endpoint = CONFIG.GOOGLE_AI_ENDPOINT;
        this.isProcessing = false;
        this.requestQueue = [];
        this.cache = new Map();
    }
    
    // ==================== GÉNÉRATION DE PROMPTS ====================
    
    async generatePrompt(gender, frenchText) {
        try {
            this.isProcessing = true;
            
            // Construire le prompt
            const prompt = PROMPT_BUILDER.buildInitialPrompt(gender, frenchText);
            
            console.log('🤖 Envoi à Gemini...');
            
            // Appeler l'API
            const response = await this.callGemini(prompt);
            
            console.log('✅ Réponse reçue de Gemini');
            
            this.isProcessing = false;
            return response;
            
        } catch (error) {
            console.error('❌ Erreur génération prompt:', error);
            this.isProcessing = false;
            throw error;
        }
    }
    
    async modifyPrompt(englishText, modifications) {
        try {
            this.isProcessing = true;
            
            // Construire le prompt de modification
            const prompt = PROMPT_BUILDER.buildModificationPrompt(englishText, modifications);
            
            console.log('🤖 Envoi des modifications à Gemini...');
            
            // Appeler l'API
            const response = await this.callGemini(prompt);
            
            console.log('✅ Modifications appliquées');
            
            this.isProcessing = false;
            return response;
            
        } catch (error) {
            console.error('❌ Erreur modification prompt:', error);
            this.isProcessing = false;
            throw error;
        }
    }
    
    // ==================== APPEL API ====================
    
    async callGemini(prompt, retries = 0) {
        try {
            // Vérifier le cache
            const cacheKey = this.getCacheKey(prompt);
            if (this.cache.has(cacheKey)) {
                console.log('📦 Réponse depuis le cache');
                return this.cache.get(cacheKey);
            }
            
            const startTime = Date.now();
            
            // Préparer la requête
            const requestBody = {
                contents: [{
                    parts: [{
                        text: prompt
                    }]
                }],
                generationConfig: {
                    temperature: 0.7,
                    topK: 40,
                    topP: 0.95,
                    maxOutputTokens: 8192,
                }
            };
            
            // Faire l'appel API
            const response = await fetch(
                `${this.endpoint}?key=${this.apiKey}`,
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(requestBody)
                }
            );
            
            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(
                    `API Error: ${response.status} - ${errorData.error?.message || 'Unknown error'}`
                );
            }
            
            const data = await response.json();
            
            // Extraire le texte de la réponse
            const generatedText = this.extractText(data);
            
            if (!generatedText) {
                throw new Error('Aucun texte généré');
            }
            
            const duration = Date.now() - startTime;
            console.log(`⏱️ Génération terminée en ${(duration / 1000).toFixed(2)}s`);
            
            // Mettre en cache
            this.cache.set(cacheKey, generatedText);
            
            // Limiter la taille du cache
            if (this.cache.size > 50) {
                const firstKey = this.cache.keys().next().value;
                this.cache.delete(firstKey);
            }
            
            return generatedText;
            
        } catch (error) {
            console.error('❌ Erreur API Gemini:', error);
            
            // Retry logic
            if (retries < CONFIG.MAX_RETRIES) {
                console.log(`🔄 Tentative ${retries + 1}/${CONFIG.MAX_RETRIES}...`);
                await UTILS.sleep(CONFIG.RETRY_DELAY * (retries + 1));
                return this.callGemini(prompt, retries + 1);
            }
            
            throw this.handleError(error);
        }
    }
    
    // ==================== EXTRACTION DE TEXTE ====================
    
    extractText(data) {
        try {
            // Structure de réponse Gemini:
            // data.candidates[0].content.parts[0].text
            
            if (!data.candidates || data.candidates.length === 0) {
                throw new Error('Pas de candidats dans la réponse');
            }
            
            const candidate = data.candidates[0];
            
            if (!candidate.content || !candidate.content.parts) {
                throw new Error('Format de réponse invalide');
            }
            
            const parts = candidate.content.parts;
            
            if (parts.length === 0) {
                throw new Error('Pas de contenu dans la réponse');
            }
            
            // Concaténer toutes les parties
            const text = parts
                .map(part => part.text || '')
                .join('\n')
                .trim();
            
            return this.cleanResponse(text);
            
        } catch (error) {
            console.error('❌ Erreur extraction texte:', error);
            return null;
        }
    }
    
    // ==================== NETTOYAGE DE LA RÉPONSE ====================
    
    cleanResponse(text) {
        if (!text) return '';
        
        // Supprimer les préambules courants
        let cleaned = text;
        
        // Patterns de préambules à supprimer
        const preamblePatterns = [
            /^(Voici|Here is|Here's).*?:\s*/i,
            /^(Le|The) (nouveau|new) prompt.*?:\s*/i,
            /^```.*?\n/,
            /```\s*$/,
            /^.*?Using the provided selfie/m
        ];
        
        for (const pattern of preamblePatterns) {
            if (pattern.test(cleaned)) {
                // Si on trouve "Using the provided selfie", on garde à partir de là
                if (/Using the provided selfie/i.test(cleaned)) {
                    const match = cleaned.match(/(Using the provided selfie.*)/is);
                    if (match) {
                        cleaned = match[1];
                        break;
                    }
                }
                cleaned = cleaned.replace(pattern, '');
            }
        }
        
        // Nettoyer les espaces multiples
        cleaned = cleaned.replace(/\n{3,}/g, '\n\n');
        cleaned = cleaned.trim();
        
        return cleaned;
    }
    
    // ==================== CACHE ====================
    
    getCacheKey(prompt) {
        // Créer une clé de cache simple basée sur le prompt
        return prompt.substring(0, 100);
    }
    
    clearCache() {
        this.cache.clear();
        console.log('✅ Cache Gemini nettoyé');
    }
    
    // ==================== GESTION DES ERREURS ====================
    
    handleError(error) {
        let message = ERROR_MESSAGES.GENERATION_ERROR;
        
        if (error.message) {
            if (error.message.includes('429')) {
                message = ERROR_MESSAGES.RATE_LIMIT_ERROR;
            } else if (error.message.includes('timeout')) {
                message = ERROR_MESSAGES.TIMEOUT_ERROR;
            } else if (error.message.includes('network') || error.message.includes('fetch')) {
                message = ERROR_MESSAGES.NETWORK_ERROR;
            } else if (error.message.includes('API Error')) {
                message = ERROR_MESSAGES.API_ERROR + '\n' + error.message;
            }
        }
        
        return new Error(message);
    }
    
    // ==================== VALIDATION ====================
    
    validatePrompt(text) {
        if (!text || text.trim() === '') {
            return {
                valid: false,
                message: 'Le texte généré est vide'
            };
        }
        
        // Vérifier que c'est un prompt en anglais
        if (!this.isEnglish(text)) {
            return {
                valid: false,
                message: 'Le texte généré ne semble pas être en anglais'
            };
        }
        
        // Vérifier la longueur minimale
        if (text.length < 100) {
            return {
                valid: false,
                message: 'Le texte généré est trop court'
            };
        }
        
        // Vérifier la présence de sections clés
        const hasStructure = /A\)|B\)|C\)|D\)|E\)/.test(text);
        if (!hasStructure) {
            return {
                valid: false,
                message: 'Le texte généré ne semble pas avoir la structure attendue'
            };
        }
        
        return {
            valid: true,
            message: 'Prompt valide'
        };
    }
    
    isEnglish(text) {
        // Détecter si le texte est principalement en anglais
        const englishWords = ['the', 'and', 'with', 'that', 'this', 'for', 'are', 'from', 'have', 'using'];
        const frenchWords = ['le', 'la', 'les', 'un', 'une', 'des', 'avec', 'pour', 'dans', 'sur'];
        
        const lowerText = text.toLowerCase();
        
        let englishCount = 0;
        let frenchCount = 0;
        
        for (const word of englishWords) {
            if (lowerText.includes(` ${word} `)) englishCount++;
        }
        
        for (const word of frenchWords) {
            if (lowerText.includes(` ${word} `)) frenchCount++;
        }
        
        return englishCount > frenchCount;
    }
    
    // ==================== MÉTHODES UTILITAIRES ====================
    
    getStats() {
        return {
            isProcessing: this.isProcessing,
            cacheSize: this.cache.size,
            queueLength: this.requestQueue.length
        };
    }
    
    // ==================== STREAMING (FUTUR) ====================
    
    async streamPrompt(gender, frenchText, onChunk) {
        // Cette fonction pourrait être implémentée plus tard
        // pour avoir une génération en streaming
        console.log('⚠️ Streaming pas encore implémenté');
        return this.generatePrompt(gender, frenchText);
    }
}

// ==================== TESTS & DEBUGGING ====================

class GeminiTester {
    constructor(api) {
        this.api = api;
    }
    
    async testBasicGeneration() {
        console.log('🧪 Test génération basique...');
        
        try {
            const result = await this.api.generatePrompt(
                'male',
                'Un homme algérien avec le drapeau national, photo professionnelle'
            );
            
            console.log('✅ Test réussi');
            console.log('Longueur:', result.length);
            console.log('Aperçu:', result.substring(0, 200) + '...');
            
            return true;
            
        } catch (error) {
            console.error('❌ Test échoué:', error);
            return false;
        }
    }
    
    async testModification() {
        console.log('🧪 Test modification...');
        
        try {
            const originalPrompt = TEMPLATES.MALE;
            const result = await this.api.modifyPrompt(
                originalPrompt,
                "Change l'âge à 15 ans et ajoute un sourire"
            );
            
            console.log('✅ Test réussi');
            console.log('Longueur:', result.length);
            
            return true;
            
        } catch (error) {
            console.error('❌ Test échoué:', error);
            return false;
        }
    }
    
    async testValidation() {
        console.log('🧪 Test validation...');
        
        const testCases = [
            { text: '', expected: false, name: 'Texte vide' },
            { text: 'Too short', expected: false, name: 'Texte trop court' },
            { text: TEMPLATES.MALE, expected: true, name: 'Template valide' }
        ];
        
        for (const testCase of testCases) {
            const result = this.api.validatePrompt(testCase.text);
            const passed = result.valid === testCase.expected;
            
            console.log(
                passed ? '✅' : '❌',
                testCase.name,
                '-',
                result.message
            );
        }
    }
    
    async runAllTests() {
        console.log('🧪 Début des tests Gemini...\n');
        
        await this.testValidation();
        await UTILS.sleep(1000);
        
        // Tests API désactivés par défaut pour ne pas consommer le quota
        // Décommenter pour tester
        // await this.testBasicGeneration();
        // await UTILS.sleep(2000);
        // await this.testModification();
        
        console.log('\n✅ Tests terminés');
    }
}

// ==================== INITIALISATION ====================

// Créer une instance globale
window.gemini = new GeminiAPI();

// Créer le testeur (optionnel)
window.geminiTester = new GeminiTester(window.gemini);

console.log('✅ Gemini API initialisé');

// Test de validation au chargement
if (CONFIG.GOOGLE_AI_API_KEY && CONFIG.GOOGLE_AI_API_KEY !== 'YOUR_API_KEY') {
    console.log('🔑 Clé API Google AI configurée');
} else {
    console.warn('⚠️ Clé API Google AI manquante ou invalide');
}