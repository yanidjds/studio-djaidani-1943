/* ==========================================
   STUDIO PHOTO DJAIDANI 1943 - DATABASE
   Gestion MongoDB via Netlify Functions
   ========================================== */

class DatabaseManager {
    constructor() {
        this.isNetlify = window.location.hostname !== 'localhost' && 
                         window.location.hostname !== '127.0.0.1' &&
                         window.location.hostname !== '';
        
        this.apiBase = this.isNetlify ? '/.netlify/functions' : '';
        
        console.log('🗄️ DatabaseManager initialisé');
        console.log('Mode:', this.isNetlify ? 'NETLIFY (Production)' : 'LOCAL (Development)');
    }

    // ==================== SAUVEGARDER UN PROMPT ====================
    async savePrompt(promptData) {
        try {
            console.log('💾 Sauvegarde du prompt...');
            
            // Validation des données
            if (!promptData.title || !promptData.englishText) {
                throw new Error('Données incomplètes');
            }

            // Appel à la fonction Netlify
            const response = await fetch(`${this.apiBase}/save-prompt`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(promptData)
            });

            const result = await response.json();
            
            if (!result.success) {
                throw new Error(result.error || 'Erreur lors de la sauvegarde');
            }

            console.log('✅ Prompt sauvegardé avec succès');
            
            // Mettre à jour le cache local
            this.updateLocalCache(promptData);
            
            return result;
        } catch (error) {
            console.error('❌ Erreur savePrompt:', error);
            
            // Fallback: sauvegarder localement
            this.saveLocally(promptData);
            
            throw error;
        }
    }

    // ==================== RÉCUPÉRER TOUS LES PROMPTS ====================
    async getAllPrompts() {
        try {
            console.log('📥 Récupération de tous les prompts...');
            
            const response = await fetch(`${this.apiBase}/get-prompts`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                }
            });

            const result = await response.json();
            
            if (!result.success) {
                throw new Error(result.error || 'Erreur lors de la récupération');
            }

            console.log(`✅ ${result.prompts.length} prompts récupérés`);
            
            // Mettre à jour le cache local
            localStorage.setItem('cached_prompts', JSON.stringify(result.prompts));
            localStorage.setItem('cache_time', Date.now().toString());
            
            return result.prompts;
        } catch (error) {
            console.error('❌ Erreur getAllPrompts:', error);
            
            // Fallback: récupérer depuis le cache local
            return this.getLocalPrompts();
        }
    }

    // ==================== METTRE À JOUR UN PROMPT ====================
    async updatePrompt(id, updates) {
        try {
            console.log('🔄 Mise à jour du prompt...');
            
            const response = await fetch(`${this.apiBase}/update-prompt`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ id, updates })
            });

            const result = await response.json();
            
            if (!result.success) {
                throw new Error(result.error || 'Erreur lors de la mise à jour');
            }

            console.log('✅ Prompt mis à jour avec succès');
            return result;
        } catch (error) {
            console.error('❌ Erreur updatePrompt:', error);
            throw error;
        }
    }

    // ==================== SUPPRIMER UN PROMPT ====================
    async deletePrompt(id) {
        try {
            console.log('🗑️ Suppression du prompt...');
            
            const response = await fetch(`${this.apiBase}/delete-prompt`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ id })
            });

            const result = await response.json();
            
            if (!result.success) {
                throw new Error(result.error || 'Erreur lors de la suppression');
            }

            console.log('✅ Prompt supprimé avec succès');
            return result;
        } catch (error) {
            console.error('❌ Erreur deletePrompt:', error);
            throw error;
        }
    }

    // ==================== RECHERCHER DES PROMPTS ====================
    async searchPrompts(query) {
        try {
            const allPrompts = await this.getAllPrompts();
            
            if (!query || query.trim() === '') {
                return allPrompts;
            }

            const searchTerm = query.toLowerCase().trim();
            
            return allPrompts.filter(prompt => {
                const titleMatch = prompt.title.toLowerCase().includes(searchTerm);
                const frenchMatch = prompt.frenchText.toLowerCase().includes(searchTerm);
                const englishMatch = prompt.englishText.toLowerCase().includes(searchTerm);
                
                return titleMatch || frenchMatch || englishMatch;
            });
        } catch (error) {
            console.error('❌ Erreur searchPrompts:', error);
            return [];
        }
    }

    // ==================== FILTRER PAR GENRE ====================
    async filterByGender(gender) {
        try {
            const allPrompts = await this.getAllPrompts();
            
            if (gender === 'all') {
                return allPrompts;
            }
            
            return allPrompts.filter(prompt => prompt.gender === gender);
        } catch (error) {
            console.error('❌ Erreur filterByGender:', error);
            return [];
        }
    }

    // ==================== OBTENIR LES PROMPTS RÉCENTS ====================
    async getRecentPrompts(limit = 6) {
        try {
            const allPrompts = await this.getAllPrompts();
            
            return allPrompts
                .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
                .slice(0, limit);
        } catch (error) {
            console.error('❌ Erreur getRecentPrompts:', error);
            return [];
        }
    }

    // ==================== OBTENIR LES STATISTIQUES ====================
    async getStats() {
        try {
            const allPrompts = await this.getAllPrompts();
            
            const stats = {
                total: allPrompts.length,
                male: allPrompts.filter(p => p.gender === 'male').length,
                female: allPrompts.filter(p => p.gender === 'female').length,
                lastActivity: allPrompts.length > 0 ? 
                    this.formatLastActivity(allPrompts[0].createdAt) : '-'
            };
            
            return stats;
        } catch (error) {
            console.error('❌ Erreur getStats:', error);
            return {
                total: 0,
                male: 0,
                female: 0,
                lastActivity: '-'
            };
        }
    }

    // ==================== FONCTIONS UTILITAIRES ====================
    
    // Sauvegarder localement (fallback)
    saveLocally(promptData) {
        try {
            const localPrompts = this.getLocalPrompts();
            localPrompts.unshift(promptData);
            localStorage.setItem('local_prompts', JSON.stringify(localPrompts));
            console.log('💾 Sauvegarde locale effectuée');
        } catch (error) {
            console.error('❌ Erreur sauvegarde locale:', error);
        }
    }

    // Récupérer depuis le cache local
    getLocalPrompts() {
        try {
            const cached = localStorage.getItem('cached_prompts');
            if (cached) {
                return JSON.parse(cached);
            }
            
            const local = localStorage.getItem('local_prompts');
            if (local) {
                return JSON.parse(local);
            }
            
            return [];
        } catch (error) {
            console.error('❌ Erreur récupération locale:', error);
            return [];
        }
    }

    // Mettre à jour le cache local
    updateLocalCache(promptData) {
        try {
            const cached = this.getLocalPrompts();
            cached.unshift(promptData);
            localStorage.setItem('cached_prompts', JSON.stringify(cached));
        } catch (error) {
            console.error('❌ Erreur mise à jour cache:', error);
        }
    }

    // Formater la dernière activité
    formatLastActivity(timestamp) {
        try {
            const date = new Date(timestamp);
            const now = new Date();
            const diff = now - date;
            
            const minutes = Math.floor(diff / 60000);
            const hours = Math.floor(diff / 3600000);
            const days = Math.floor(diff / 86400000);
            
            if (minutes < 1) return 'À l\'instant';
            if (minutes < 60) return `Il y a ${minutes} min`;
            if (hours < 24) return `Il y a ${hours}h`;
            if (days < 7) return `Il y a ${days}j`;
            
            return date.toLocaleDateString('fr-FR');
        } catch (error) {
            return '-';
        }
    }

    // Vérifier la connexion
    async checkConnection() {
        try {
            const response = await fetch(`${this.apiBase}/get-prompts`);
            return response.ok;
        } catch (error) {
            return false;
        }
    }

    // Synchroniser les données locales avec le serveur
    async syncLocalData() {
        try {
            const localPrompts = JSON.parse(localStorage.getItem('local_prompts') || '[]');
            
            if (localPrompts.length === 0) {
                console.log('Aucune donnée locale à synchroniser');
                return;
            }

            console.log(`🔄 Synchronisation de ${localPrompts.length} prompts locaux...`);
            
            for (const prompt of localPrompts) {
                await this.savePrompt(prompt);
            }
            
            // Nettoyer les données locales
            localStorage.removeItem('local_prompts');
            
            console.log('✅ Synchronisation terminée');
        } catch (error) {
            console.error('❌ Erreur lors de la synchronisation:', error);
        }
    }
}

// ==================== INITIALISATION ====================
const db = new DatabaseManager();

// Exposer globalement
window.db = db;

console.log('✅ Database Manager chargé');
