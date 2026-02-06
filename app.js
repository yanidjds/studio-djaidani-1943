/* ==========================================
   STUDIO PHOTO DJAIDANI 1943 - APP (FIXED)
   Application principale - VERSION CORRIGÉE
   ========================================== */

class StudioApp {
    constructor() {
        this.currentView = 'home';
        this.currentStep = 1;
        this.selectedGender = null;
        this.currentPromptId = null;
        
        this.state = {
            title: '',
            frenchText: '',
            englishText: '',
            modifications: []
        };
        
        console.log('🚀 Initialisation de l\'application...');
        this.init();
    }
    
    init() {
        // Attendre que le DOM soit prêt
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => this.setup());
        } else {
            this.setup();
        }
    }
    
    async setup() {
        try {
            console.log('⚙️ Configuration de l\'application...');
            
            // Forcer le masquage du loader
            this.hideLoader();
            
            // Appliquer le thème
            this.applyTheme();
            
            // Initialiser les événements
            this.initEventListeners();
            
            // Charger les données
            await this.loadInitialData();
            
            console.log('✅ Application prête !');
        } catch (error) {
            console.error('❌ Erreur lors du setup:', error);
        }
    }
    
    hideLoader() {
        const loader = document.getElementById('loader');
        if (loader) {
            setTimeout(() => {
                loader.style.opacity = '0';
                loader.style.transition = 'opacity 0.5s';
                setTimeout(() => {
                    loader.style.display = 'none';
                }, 500);
            }, 500);
        }
    }
    
    applyTheme() {
        const theme = localStorage.getItem('djaidani_theme') || 'light';
        document.body.classList.add(`theme-${theme}`);
    }
    
    initEventListeners() {
        console.log('🔧 Initialisation des événements...');
        
        // Navigation
        document.querySelectorAll('.nav-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                const view = e.currentTarget.dataset.view;
                console.log('Navigation vers:', view);
                this.switchView(view);
            });
        });
        
        // Bouton "Créer un nouveau prompt" (dans le hero)
        const ctaButton = document.querySelector('.cta-button');
        if (ctaButton) {
            ctaButton.addEventListener('click', (e) => {
                e.preventDefault();
                console.log('Clic sur CTA button');
                this.switchView('create');
            });
        }
        
        // Boutons "Créer votre premier prompt" (dans empty state)
        document.querySelectorAll('.btn-secondary').forEach(btn => {
            if (btn.textContent.includes('Créer')) {
                btn.addEventListener('click', (e) => {
                    e.preventDefault();
                    console.log('Clic sur créer prompt');
                    this.switchView('create');
                });
            }
        });
        
        // Menu mobile
        const mobileToggle = document.getElementById('mobileMenuToggle');
        if (mobileToggle) {
            mobileToggle.addEventListener('click', () => {
                document.querySelector('.nav-menu').classList.toggle('show');
            });
        }
        
        // Theme toggle
        const themeToggle = document.getElementById('themeToggle');
        if (themeToggle) {
            themeToggle.addEventListener('click', () => {
                this.toggleTheme();
            });
        }
        
        // Gender selection
        document.querySelectorAll('.gender-card').forEach(card => {
            card.addEventListener('click', (e) => {
                const gender = e.currentTarget.dataset.gender;
                console.log('Genre sélectionné:', gender);
                this.selectGender(gender);
            });
        });
        
        // Generate button
        const generateBtn = document.getElementById('generateBtn');
        if (generateBtn) {
            generateBtn.addEventListener('click', () => {
                console.log('Génération du prompt...');
                this.generatePrompt();
            });
        }
        
        console.log('✅ Événements initialisés');
    }
    
    switchView(viewName) {
        console.log(`📄 Changement de vue: ${this.currentView} → ${viewName}`);
        
        // Masquer toutes les vues
        document.querySelectorAll('.view-section').forEach(view => {
            view.classList.remove('active');
        });
        
        // Afficher la vue demandée
        const targetView = document.getElementById(`${viewName}View`);
        if (targetView) {
            targetView.classList.add('active');
            this.currentView = viewName;
            
            // Mettre à jour la navigation
            document.querySelectorAll('.nav-btn').forEach(btn => {
                btn.classList.remove('active');
                if (btn.dataset.view === viewName) {
                    btn.classList.add('active');
                }
            });
            
            console.log('✅ Vue changée avec succès');
        } else {
            console.error('❌ Vue introuvable:', viewName);
        }
    }
    
    selectGender(gender) {
        this.selectedGender = gender;
        console.log('Genre sélectionné:', gender);
        
        // Mettre à jour l'UI
        document.querySelectorAll('.gender-card').forEach(card => {
            card.classList.remove('selected');
            if (card.dataset.gender === gender) {
                card.classList.add('selected');
            }
        });
        
        // Passer à l'étape suivante
        setTimeout(() => {
            this.goToStep(2);
        }, 300);
    }
    
    goToStep(stepNumber) {
        console.log(`➡️ Passage à l'étape ${stepNumber}`);
        this.currentStep = stepNumber;
        
        // Masquer toutes les étapes
        document.querySelectorAll('.step-content').forEach(step => {
            step.style.display = 'none';
        });
        
        // Afficher l'étape demandée
        const targetStep = document.getElementById(`step${stepNumber}`);
        if (targetStep) {
            targetStep.style.display = 'block';
        }
        
        // Mettre à jour l'indicateur d'étapes
        document.querySelectorAll('.step').forEach((step, index) => {
            step.classList.remove('active');
            if (index + 1 <= stepNumber) {
                step.classList.add('active');
            }
        });
    }
    
    async generatePrompt() {
        const frenchText = document.getElementById('frenchText');
        if (!frenchText || !frenchText.value.trim()) {
            this.showToast('Veuillez entrer du texte en français', 'error');
            return;
        }
        
        this.state.frenchText = frenchText.value;
        
        try {
            this.showToast('Génération en cours...', 'info');
            console.log('🤖 Appel à l\'API Gemini...');
            
            // Simuler la génération (remplacer par vraie API)
            await new Promise(resolve => setTimeout(resolve, 2000));
            
            this.state.englishText = "SAMPLE GENERATED PROMPT\n\nUsing the provided selfie, generate an ULTRA-REALISTIC, HIGH-RESOLUTION patriotic portrait...";
            
            // Afficher le résultat
            const englishOutput = document.getElementById('englishOutput');
            if (englishOutput) {
                englishOutput.textContent = this.state.englishText;
            }
            
            this.showToast('Prompt généré avec succès !', 'success');
            
        } catch (error) {
            console.error('❌ Erreur:', error);
            this.showToast('Erreur lors de la génération', 'error');
        }
    }
    
    async loadInitialData() {
        try {
            console.log('📥 Chargement des données...');
            
            // Charger les statistiques
            const stats = await this.getStats();
            this.updateStats(stats);
            
            // Charger les prompts récents
            const recentPrompts = await this.getRecentPrompts();
            this.displayRecentPrompts(recentPrompts);
            
        } catch (error) {
            console.error('❌ Erreur chargement:', error);
        }
    }
    
    async getStats() {
        return {
            total: 0,
            lastActivity: '-'
        };
    }
    
    async getRecentPrompts() {
        return [];
    }
    
    updateStats(stats) {
        const totalEl = document.getElementById('totalPrompts');
        const lastActivityEl = document.getElementById('lastActivity');
        
        if (totalEl) totalEl.textContent = stats.total;
        if (lastActivityEl) lastActivityEl.textContent = stats.lastActivity;
    }
    
    displayRecentPrompts(prompts) {
        const grid = document.getElementById('recentPromptsGrid');
        if (!grid) return;
        
        if (prompts.length === 0) {
            grid.innerHTML = `
                <div class="empty-state">
                    <i class="fas fa-folder-open"></i>
                    <p>Aucun prompt pour le moment</p>
                    <button class="btn-secondary" onclick="app.switchView('create')">
                        Créer votre premier prompt
                    </button>
                </div>
            `;
        }
    }
    
    toggleTheme() {
        const current = localStorage.getItem('djaidani_theme') || 'light';
        const newTheme = current === 'light' ? 'dark' : 'light';
        localStorage.setItem('djaidani_theme', newTheme);
        
        document.body.classList.remove(`theme-${current}`);
        document.body.classList.add(`theme-${newTheme}`);
    }
    
    showToast(message, type = 'info') {
        console.log(`🔔 Toast [${type}]:`, message);
        
        const container = document.getElementById('toastContainer');
        if (!container) return;
        
        const toast = document.createElement('div');
        toast.className = `toast toast-${type}`;
        toast.textContent = message;
        
        container.appendChild(toast);
        
        setTimeout(() => {
            toast.classList.add('show');
        }, 100);
        
        setTimeout(() => {
            toast.classList.remove('show');
            setTimeout(() => toast.remove(), 300);
        }, 3000);
    }
}

// ==================== FONCTIONS GLOBALES ====================

function switchView(view) {
    if (window.app) {
        window.app.switchView(view);
    }
}

function createNewPrompt() {
    if (window.app) {
        window.app.switchView('create');
        window.app.goToStep(1);
    }
}

// ==================== INITIALISATION ====================

// Créer l'instance de l'application
window.app = new StudioApp();

console.log('✅ Application chargée et prête !');
