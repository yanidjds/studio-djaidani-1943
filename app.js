/* ==========================================
   studio photo djaidani 1943 - app
   application principale
   ========================================== */

class studioapp {
    constructor() {
        this.currentview = 'home';
        this.currentstep = 1;
        this.selectedgender = null;
        this.currentpromptid = null;
        this.generationstarttime = null;
        
        // state
        this.state = {
            title: '',
            frenchText: '',
            englishText: '',
            modifications: []
        };
        
        this.init();
    }
    
    // ==================== INITIALISATION ====================
    
    async init() {
        console.log('🚀 Initialisation de l\'application...');
        
        // Attendre que le DOM soit chargé
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => this.setup());
        } else {
            this.setup();
        }
    }
    
    async setup() {
        // Appliquer le thème
        this.applyTheme();
        
        // Initialiser les event listeners
        this.initEventListeners();
        
        // Charger les données initiales
        await this.loadInitialData();
        
        // Masquer le loader
        setTimeout(() => {
            const loader = document.getElementById('loader');
            if (loader) {
                loader.classList.add('hidden');
            }
        }, 1500);
        
        console.log('✅ Application initialisée');
    }
    
    // ==================== THÈME ====================
    
    applyTheme() {
        const theme = UTILS.getCurrentTheme();
        UTILS.setTheme(theme);
    }
    
    // ==================== EVENT LISTENERS ====================
    
    initEventListeners() {
        // Navigation
        document.querySelectorAll('.nav-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const view = e.currentTarget.dataset.view;
                this.switchView(view);
            });
        });
        
        // Mobile menu
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
                UTILS.toggleTheme();
            });
        }
        
        // Gender selection
        document.querySelectorAll('.gender-card').forEach(card => {
            card.addEventListener('click', (e) => {
                this.selectGender(e.currentTarget.dataset.gender);
            });
        });
        
        // Title input
        const titleInput = document.getElementById('promptTitle');
        if (titleInput) {
            titleInput.addEventListener('input', (e) => {
                this.state.title = e.target.value;
                this.updateCharCounter('title');
            });
        }
        
        // French text
        const frenchText = document.getElementById('frenchText');
        if (frenchText) {
            frenchText.addEventListener('input', (e) => {
                this.state.frenchText = e.target.value;
                this.updateWordCount('french');
            });
        }
        
        // Buttons
        const clearFrenchBtn = document.getElementById('clearFrenchBtn');
        if (clearFrenchBtn) {
            clearFrenchBtn.addEventListener('click', () => this.clearFrenchText());
        }
        
        const pasteBtn = document.getElementById('pasteBtn');
        if (pasteBtn) {
            pasteBtn.addEventListener('click', () => this.pasteText());
        }
        
        const copyEnglishBtn = document.getElementById('copyEnglishBtn');
        if (copyEnglishBtn) {
            copyEnglishBtn.addEventListener('click', () => this.copyEnglishText());
        }
        
        const regenerateBtn = document.getElementById('regenerateBtn');
        if (regenerateBtn) {
            regenerateBtn.addEventListener('click', () => this.regeneratePrompt());
        }
        
        const generateBtn = document.getElementById('generateBtn');
        if (generateBtn) {
            generateBtn.addEventListener('click', () => this.generatePrompt());
        }
        
        const saveBtn = document.getElementById('saveBtn');
        if (saveBtn) {
            saveBtn.addEventListener('click', () => this.savePrompt());
        }
        
        const applyModificationBtn = document.getElementById('applyModificationBtn');
        if (applyModificationBtn) {
            applyModificationBtn.addEventListener('click', () => this.applyModification());
        }
        
        // Search
        const searchInput = document.getElementById('searchInput');
        if (searchInput) {
            searchInput.addEventListener('input', 
                UTILS.debounce((e) => this.handleSearch(e.target.value), 300)
            );
        }
        
        const clearSearchBtn = document.getElementById('clearSearchBtn');
        if (clearSearchBtn) {
            clearSearchBtn.addEventListener('click', () => this.clearSearch());
        }
        
        // Filters
        document.querySelectorAll('.filter-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                this.applyFilter(e.currentTarget.dataset.filter);
            });
        });
        
        // Sort
        const sortBtn = document.getElementById('sortBtn');
        if (sortBtn) {
            sortBtn.addEventListener('click', () => {
                document.getElementById('sortMenu').classList.toggle('show');
            });
        }
        
        document.querySelectorAll('.sort-option').forEach(option => {
            option.addEventListener('click', (e) => {
                this.applySort(e.currentTarget.dataset.sort);
            });
        });
        
        // Fermer le menu de tri en cliquant ailleurs
        document.addEventListener('click', (e) => {
            const sortMenu = document.getElementById('sortMenu');
            const sortBtn = document.getElementById('sortBtn');
            if (sortMenu && sortBtn && !sortBtn.contains(e.target) && !sortMenu.contains(e.target)) {
                sortMenu.classList.remove('show');
            }
        });
    }
    
    // ==================== NAVIGATION ====================
    
    switchView(viewName) {
        // Cacher toutes les vues
        document.querySelectorAll('.view-section').forEach(section => {
            section.classList.remove('active');
        });
        
        // Afficher la vue sélectionnée
        const targetView = document.getElementById(`${viewName}View`);
        if (targetView) {
            targetView.classList.add('active');
        }
        
        // Mettre à jour la navigation
        document.querySelectorAll('.nav-btn').forEach(btn => {
            btn.classList.remove('active');
            if (btn.dataset.view === viewName) {
                btn.classList.add('active');
            }
        });
        
        this.currentView = viewName;
        
        // Charger les données si nécessaire
        if (viewName === 'archive') {
            this.loadArchive();
        } else if (viewName === 'home') {
            this.loadHome();
        }
        
        // Fermer le menu mobile
        document.querySelector('.nav-menu')?.classList.remove('show');
    }
    
    goToStep(step) {
        // Masquer tous les steps
        document.querySelectorAll('.step-content').forEach(content => {
            content.style.display = 'none';
        });
        
        // Afficher le step demandé
        const targetStep = document.getElementById(`step${step}`);
        if (targetStep) {
            targetStep.style.display = 'block';
        }
        
        // Mettre à jour l'indicateur
        document.querySelectorAll('.step').forEach((stepEl, index) => {
            stepEl.classList.remove('active', 'completed');
            if (index + 1 < step) {
                stepEl.classList.add('completed');
            } else if (index + 1 === step) {
                stepEl.classList.add('active');
            }
        });
        
        this.currentStep = step;
    }
    
    // ==================== GENDER SELECTION ====================
    
    selectGender(gender) {
        // Retirer la sélection précédente
        document.querySelectorAll('.gender-card').forEach(card => {
            card.classList.remove('selected');
        });
        
        // Ajouter la sélection
        const selectedCard = document.querySelector(`.gender-card[data-gender="${gender}"]`);
        if (selectedCard) {
            selectedCard.classList.add('selected');
        }
        
        this.selectedGender = gender;
        UTILS.saveLastGender(gender);
        
        // Passer au step suivant après un court délai
        setTimeout(() => {
            this.goToStep(2);
        }, 300);
    }
    
    // ==================== TEXT MANAGEMENT ====================
    
    updateCharCounter(type) {
        if (type === 'title') {
            const counter = document.getElementById('titleCounter');
            if (counter) {
                counter.textContent = this.state.title.length;
            }
        }
    }
    
    updateWordCount(type) {
        if (type === 'french') {
            const counter = document.getElementById('frenchWordCount');
            if (counter) {
                const count = UTILS.countWords(this.state.frenchText);
                counter.textContent = count;
            }
        } else if (type === 'english') {
            const counter = document.getElementById('englishWordCount');
            if (counter) {
                const count = UTILS.countWords(this.state.englishText);
                counter.textContent = count;
            }
        }
    }
    
    clearFrenchText() {
        if (confirm('Êtes-vous sûr de vouloir effacer le texte français ?')) {
            this.state.frenchText = '';
            const textarea = document.getElementById('frenchText');
            if (textarea) {
                textarea.value = '';
            }
            this.updateWordCount('french');
        }
    }
    
    async pasteText() {
        try {
            const text = await navigator.clipboard.readText();
            const textarea = document.getElementById('frenchText');
            if (textarea) {
                textarea.value = text;
                this.state.frenchText = text;
                this.updateWordCount('french');
                this.showToast('success', 'Collé !', 'Texte collé avec succès');
            }
        } catch (error) {
            this.showToast('error', 'Erreur', 'Impossible de coller le texte');
        }
    }
    
    async copyEnglishText() {
        if (!this.state.englishText) {
            this.showToast('error', 'Erreur', 'Aucun texte à copier');
            return;
        }
        
        const success = await UTILS.copyToClipboard(this.state.englishText);
        
        if (success) {
            this.showToast('success', 'Copié !', SUCCESS_MESSAGES.COPIED);
        } else {
            this.showToast('error', 'Erreur', ERROR_MESSAGES.COPY_ERROR);
        }
    }
    
    // ==================== GENERATION ====================
    
    async generatePrompt() {
        // Validation
        const genderValidation = VALIDATORS.validateGender(this.selectedGender);
        if (!genderValidation.valid) {
            this.showToast('error', 'Erreur', genderValidation.message);
            return;
        }
        
        const textValidation = VALIDATORS.validateFrenchText(this.state.frenchText);
        if (!textValidation.valid) {
            this.showToast('error', 'Erreur', textValidation.message);
            return;
        }
        
        const titleValidation = VALIDATORS.validateTitle(this.state.title);
        if (!titleValidation.valid) {
            this.showToast('error', 'Erreur', titleValidation.message);
            return;
        }
        
        // Désactiver le bouton
        const generateBtn = document.getElementById('generateBtn');
        if (generateBtn) {
            generateBtn.disabled = true;
            generateBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> <span>Génération en cours...</span>';
        }
        
        try {
            this.generationStartTime = Date.now();
            
            // Appeler l'API Gemini
            const result = await gemini.generatePrompt(
                this.selectedGender,
                this.state.frenchText
            );
            
            // Valider la réponse
            const validation = gemini.validatePrompt(result);
            if (!validation.valid) {
                throw new Error(validation.message);
            }
            
            // Sauvegarder le résultat
            this.state.englishText = result;
            
            // Afficher le résultat
            this.displayEnglishText(result);
            
            // Afficher les contrôles
            this.showGenerationControls();
            
            // Calculer le temps
            const duration = Date.now() - this.generationStartTime;
            const timeElement = document.getElementById('generationTime');
            if (timeElement) {
                timeElement.textContent = `${(duration / 1000).toFixed(1)}s`;
            }
            
            this.showToast('success', 'Succès !', SUCCESS_MESSAGES.PROMPT_GENERATED);
            
        } catch (error) {
            console.error('Erreur génération:', error);
            this.showToast('error', 'Erreur', error.message);
        } finally {
            // Réactiver le bouton
            if (generateBtn) {
                generateBtn.disabled = false;
                generateBtn.innerHTML = '<i class="fas fa-magic"></i> <span>Générer le prompt professionnel</span>';
            }
        }
    }
    
    async regeneratePrompt() {
        if (!confirm('Voulez-vous régénérer le prompt ? Le texte actuel sera remplacé.')) {
            return;
        }
        
        await this.generatePrompt();
    }
    
    displayEnglishText(text) {
        const display = document.getElementById('englishText');
        if (!display) return;
        
        display.innerHTML = '';
        display.textContent = text;
        
        // Mettre à jour le compteur
        this.updateWordCount('english');
    }
    
    showGenerationControls() {
        // Afficher les boutons de contrôle
        const copyBtn = document.getElementById('copyEnglishBtn');
        const regenerateBtn = document.getElementById('regenerateBtn');
        const saveBtn = document.getElementById('saveBtn');
        const modificationSection = document.getElementById('modificationSection');
        const footer = document.getElementById('englishFooter');
        
        if (copyBtn) copyBtn.style.display = 'flex';
        if (regenerateBtn) regenerateBtn.style.display = 'flex';
        if (saveBtn) saveBtn.style.display = 'inline-flex';
        if (modificationSection) modificationSection.style.display = 'block';
        if (footer) footer.style.display = 'flex';
    }
    
    // ==================== MODIFICATION ====================
    
    async applyModification() {
        const modificationText = document.getElementById('modificationText');
        if (!modificationText) return;
        
        const modifications = modificationText.value.trim();
        
        const validation = VALIDATORS.validateModification(modifications);
        if (!validation.valid) {
            this.showToast('error', 'Erreur', validation.message);
            return;
        }
        
        if (!this.state.englishText) {
            this.showToast('error', 'Erreur', 'Aucun prompt à modifier');
            return;
        }
        
        // Désactiver le bouton
        const applyBtn = document.getElementById('applyModificationBtn');
        if (applyBtn) {
            applyBtn.disabled = true;
            applyBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Application...';
        }
        
        try {
            // Appeler l'API Gemini pour modifier
            const result = await gemini.modifyPrompt(
                this.state.englishText,
                modifications
            );
            
            // Sauvegarder la modification
            this.state.modifications.push({
                text: modifications,
                result: result,
                timestamp: new Date().toISOString()
            });
            
            // Mettre à jour le texte anglais
            this.state.englishText = result;
            this.displayEnglishText(result);
            
            // Vider le champ de modification
            modificationText.value = '';
            
            this.showToast('success', 'Modifié !', 'Modifications appliquées avec succès');
            
        } catch (error) {
            console.error('Erreur modification:', error);
            this.showToast('error', 'Erreur', error.message);
        } finally {
            if (applyBtn) {
                applyBtn.disabled = false;
                applyBtn.innerHTML = '<i class="fas fa-check"></i> Appliquer les modifications';
            }
        }
    }
    
    // ==================== SAVE ====================
    
    async savePrompt() {
        if (!this.state.englishText) {
            this.showToast('error', 'Erreur', 'Aucun prompt à sauvegarder');
            return;
        }
        
        try {
            const promptData = {
                title: this.state.title || 'Sans titre',
                gender: this.selectedGender,
                frenchText: this.state.frenchText,
                englishText: this.state.englishText,
                modifications: this.state.modifications
            };
            
            const savedPrompt = await db.createPrompt(promptData);
            this.currentPromptId = savedPrompt._id;
            
            this.showToast('success', 'Sauvegardé !', SUCCESS_MESSAGES.PROMPT_SAVED);
            
            // Passer au step de succès
            this.goToStep(3);
            
        } catch (error) {
            console.error('Erreur sauvegarde:', error);
            this.showToast('error', 'Erreur', error.message);
        }
    }
    
    // ==================== HOME ====================
    
    async loadHome() {
        await this.loadStats();
        await this.loadRecentPrompts();
    }
    
    async loadStats() {
        try {
            const stats = await db.getStats();
            
            const totalElement = document.getElementById('totalPrompts');
            const activityElement = document.getElementById('lastActivity');
            
            if (totalElement) {
                totalElement.textContent = stats.total;
            }
            
            if (activityElement) {
                activityElement.textContent = stats.lastActivity;
            }
            
        } catch (error) {
            console.error('Erreur chargement stats:', error);
        }
    }
    
    async loadRecentPrompts() {
        try {
            const prompts = await db.getAllPrompts({ 
                sort: 'recent',
                limit: CONFIG.RECENT_ITEMS_COUNT 
            });
            
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
                return;
            }
            
            grid.innerHTML = prompts.map(prompt => this.createPromptCard(prompt)).join('');
            
            // Ajouter les event listeners
            this.attachPromptCardListeners();
            
        } catch (error) {
            console.error('Erreur chargement prompts récents:', error);
        }
    }
    
    // ==================== ARCHIVE ====================
    
    async loadArchive(options = {}) {
        try {
            const prompts = await db.getAllPrompts(options);
            
            const grid = document.getElementById('archiveGrid');
            const countElement = document.getElementById('archiveCount');
            
            if (countElement) {
                countElement.textContent = `${prompts.length} prompt${prompts.length > 1 ? 's' : ''}`;
            }
            
            if (!grid) return;
            
            if (prompts.length === 0) {
                grid.innerHTML = `
                    <div class="empty-state">
                        <i class="fas fa-folder-open"></i>
                        <p>Aucun prompt archivé</p>
                        <button class="btn-secondary" onclick="app.switchView('create')">
                            Créer votre premier prompt
                        </button>
                    </div>
                `;
                return;
            }
            
            grid.innerHTML = prompts.map(prompt => this.createPromptCard(prompt)).join('');
            
            // Ajouter les event listeners
            this.attachPromptCardListeners();
            
        } catch (error) {
            console.error('Erreur chargement archive:', error);
        }
    }
    
    createPromptCard(prompt) {
        const preview = UTILS.extractPreview(prompt.englishText, 100);
        const date = UTILS.formatRelativeDate(prompt.updatedAt);
        const genderIcon = prompt.gender === 'male' ? 'fa-male' : 'fa-female';
        
        return `
            <div class="prompt-card" data-id="${prompt._id}">
                <div class="prompt-card-header">
                    <div class="prompt-card-title">
                        <h4>${prompt.title}</h4>
                        <div class="prompt-card-gender">
                            <i class="fas ${genderIcon}"></i>
                        </div>
                    </div>
                    <div class="prompt-card-date">${date}</div>
                </div>
                <div class="prompt-card-body">
                    <div class="prompt-card-preview">${preview}</div>
                    <div class="prompt-card-actions">
                        <button class="prompt-card-btn view" data-action="view">
                            <i class="fas fa-eye"></i>
                            Voir
                        </button>
                        <button class="prompt-card-btn copy" data-action="copy">
                            <i class="fas fa-copy"></i>
                            Copier
                        </button>
                    </div>
                </div>
            </div>
        `;
    }
    
    attachPromptCardListeners() {
        document.querySelectorAll('.prompt-card').forEach(card => {
            const id = card.dataset.id;
            
            card.querySelectorAll('[data-action]').forEach(btn => {
                btn.addEventListener('click', (e) => {
                    e.stopPropagation();
                    const action = btn.dataset.action;
                    
                    if (action === 'view') {
                        this.viewPrompt(id);
                    } else if (action === 'copy') {
                        this.copyPrompt(id);
                    }
                });
            });
            
            // Clic sur la carte pour voir
            card.addEventListener('click', () => this.viewPrompt(id));
        });
    }
    
    // ==================== PROMPT ACTIONS ====================
    
    async viewPrompt(id) {
        try {
            const prompt = await db.getPrompt(id);
            if (!prompt) {
                this.showToast('error', 'Erreur', 'Prompt non trouvé');
                return;
            }
            
            this.openPromptModal(prompt);
            
        } catch (error) {
            console.error('Erreur affichage prompt:', error);
            this.showToast('error', 'Erreur', error.message);
        }
    }
    
    async copyPrompt(id) {
        try {
            const prompt = await db.getPrompt(id);
            if (!prompt) {
                this.showToast('error', 'Erreur', 'Prompt non trouvé');
                return;
            }
            
            const success = await UTILS.copyToClipboard(prompt.englishText);
            
            if (success) {
                this.showToast('success', 'Copié !', SUCCESS_MESSAGES.COPIED);
            } else {
                this.showToast('error', 'Erreur', ERROR_MESSAGES.COPY_ERROR);
            }
            
        } catch (error) {
            console.error('Erreur copie prompt:', error);
            this.showToast('error', 'Erreur', error.message);
        }
    }
    
    async deletePrompt(id) {
        try {
            await db.deletePrompt(id);
            this.closeModal('promptModal');
            this.showToast('success', 'Supprimé !', SUCCESS_MESSAGES.PROMPT_DELETED);
            
            // Recharger la vue actuelle
            if (this.currentView === 'archive') {
                this.loadArchive();
            } else if (this.currentView === 'home') {
                this.loadHome();
            }
            
        } catch (error) {
            console.error('Erreur suppression prompt:', error);
            this.showToast('error', 'Erreur', error.message);
        }
    }
    
    // ==================== SEARCH & FILTER ====================
    
    handleSearch(query) {
        const clearBtn = document.getElementById('clearSearchBtn');
        if (clearBtn) {
            clearBtn.style.display = query ? 'flex' : 'none';
        }
        
        this.loadArchive({ search: query });
    }
    
    clearSearch() {
        const searchInput = document.getElementById('searchInput');
        if (searchInput) {
            searchInput.value = '';
        }
        
        const clearBtn = document.getElementById('clearSearchBtn');
        if (clearBtn) {
            clearBtn.style.display = 'none';
        }
        
        this.loadArchive();
    }
    
    applyFilter(filter) {
        // Mettre à jour les boutons
        document.querySelectorAll('.filter-btn').forEach(btn => {
            btn.classList.remove('active');
            if (btn.dataset.filter === filter) {
                btn.classList.add('active');
            }
        });
        
        // Appliquer le filtre
        const options = {};
        if (filter !== 'all') {
            options.gender = filter;
        }
        
        this.loadArchive(options);
    }
    
    applySort(sort) {
        // Mettre à jour l'affichage
        document.querySelectorAll('.sort-option').forEach(option => {
            option.classList.remove('active');
            if (option.dataset.sort === sort) {
                option.classList.add('active');
            }
        });
        
        const sortBtn = document.getElementById('sortBtn');
        const sortText = sortBtn?.querySelector('span');
        if (sortText) {
            const labels = {
                'recent': 'Plus récent',
                'oldest': 'Plus ancien',
                'title': 'Titre (A-Z)'
            };
            sortText.textContent = labels[sort] || 'Plus récent';
        }
        
        // Fermer le menu
        document.getElementById('sortMenu')?.classList.remove('show');
        
        // Appliquer le tri
        this.loadArchive({ sort });
    }
    
    // ==================== MODALS ====================
    
    openPromptModal(prompt) {
        const modal = document.getElementById('promptModal');
        const title = document.getElementById('modalPromptTitle');
        const body = document.getElementById('modalPromptBody');
        const copyBtn = document.getElementById('modalCopyBtn');
        const deleteBtn = document.getElementById('modalDeleteBtn');
        
        if (!modal) return;
        
        if (title) {
            title.textContent = prompt.title;
        }
        
        if (body) {
            body.innerHTML = `
                <div style="margin-bottom: 1.5rem;">
                    <div style="display: flex; gap: 1rem; margin-bottom: 1rem;">
                        <span style="padding: 0.25rem 0.75rem; background: var(--primary-color); color: white; border-radius: 999px; font-size: 0.875rem;">
                            <i class="fas fa-${prompt.gender === 'male' ? 'male' : 'female'}"></i>
                            ${prompt.gender === 'male' ? 'Garçon' : 'Fille'}
                        </span>
                        <span style="color: var(--text-tertiary); font-size: 0.875rem;">
                            <i class="fas fa-clock"></i>
                            ${UTILS.formatDate(prompt.updatedAt)}
                        </span>
                    </div>
                </div>
                
                <div style="margin-bottom: 1.5rem;">
                    <h4 style="margin-bottom: 0.5rem; font-size: 1rem;">Texte français</h4>
                    <div style="padding: 1rem; background: var(--bg-secondary); border-radius: 0.5rem; white-space: pre-wrap; font-size: 0.875rem; max-height: 200px; overflow-y: auto;">
                        ${prompt.frenchText}
                    </div>
                </div>
                
                <div>
                    <h4 style="margin-bottom: 0.5rem; font-size: 1rem;">Prompt professionnel (anglais)</h4>
                    <div style="padding: 1rem; background: var(--bg-secondary); border-radius: 0.5rem; white-space: pre-wrap; font-size: 0.875rem; max-height: 300px; overflow-y: auto;">
                        ${prompt.englishText}
                    </div>
                </div>
                
                ${prompt.modifications && prompt.modifications.length > 0 ? `
                    <div style="margin-top: 1.5rem;">
                        <h4 style="margin-bottom: 0.5rem; font-size: 1rem;">
                            Modifications (${prompt.modifications.length})
                        </h4>
                        ${prompt.modifications.map((mod, i) => `
                            <div style="padding: 0.75rem; background: var(--bg-tertiary); border-radius: 0.5rem; margin-bottom: 0.5rem; font-size: 0.875rem;">
                                <strong>#${i + 1}:</strong> ${mod.text}
                            </div>
                        `).join('')}
                    </div>
                ` : ''}
            `;
        }
        
        if (copyBtn) {
            copyBtn.onclick = async () => {
                const success = await UTILS.copyToClipboard(prompt.englishText);
                if (success) {
                    this.showToast('success', 'Copié !', SUCCESS_MESSAGES.COPIED);
                }
            };
        }
        
        if (deleteBtn) {
            deleteBtn.onclick = () => {
                this.closeModal('promptModal');
                this.confirmDelete(prompt._id);
            };
        }
        
        modal.classList.add('show');
    }
    
    confirmDelete(id) {
        const modal = document.getElementById('confirmModal');
        const title = document.getElementById('confirmTitle');
        const message = document.getElementById('confirmMessage');
        const actionBtn = document.getElementById('confirmActionBtn');
        
        if (!modal) return;
        
        if (title) title.textContent = 'Confirmer la suppression';
        if (message) message.textContent = 'Êtes-vous sûr de vouloir supprimer ce prompt ? Cette action est irréversible.';
        
        if (actionBtn) {
            actionBtn.onclick = () => {
                this.closeModal('confirmModal');
                this.deletePrompt(id);
            };
        }
        
        modal.classList.add('show');
    }
    
    closeModal(modalId) {
        const modal = document.getElementById(modalId);
        if (modal) {
            modal.classList.remove('show');
        }
    }
    
    // ==================== TOAST ====================
    
    showToast(type, title, message) {
        const container = document.getElementById('toastContainer');
        if (!container) return;
        
        const toast = document.createElement('div');
        toast.className = `toast ${type}`;
        
        const icons = {
            success: 'fa-check-circle',
            error: 'fa-exclamation-circle',
            info: 'fa-info-circle'
        };
        
        toast.innerHTML = `
            <div class="toast-icon">
                <i class="fas ${icons[type] || icons.info}"></i>
            </div>
            <div class="toast-content">
                <div class="toast-title">${title}</div>
                <div class="toast-message">${message}</div>
            </div>
            <button class="toast-close">
                <i class="fas fa-times"></i>
            </button>
        `;
        
        container.appendChild(toast);
        
        // Fermer au clic
        const closeBtn = toast.querySelector('.toast-close');
        closeBtn.addEventListener('click', () => {
            toast.remove();
        });
        
        // Auto-fermer
        setTimeout(() => {
            toast.remove();
        }, CONFIG.TOAST_DURATION);
    }
    
    // ==================== UTILITIES ====================
    
    async loadInitialData() {
        await this.loadHome();
    }
    
    createNewPrompt() {
        this.state = {
            title: '',
            frenchText: '',
            englishText: '',
            modifications: []
        };
        
        this.selectedGender = null;
        this.currentPromptId = null;
        
        // Réinitialiser le formulaire
        const titleInput = document.getElementById('promptTitle');
        const frenchText = document.getElementById('frenchText');
        const modificationText = document.getElementById('modificationText');
        
        if (titleInput) titleInput.value = '';
        if (frenchText) frenchText.value = '';
        if (modificationText) modificationText.value = '';
        
        document.getElementById('englishText').innerHTML = `
            <div class="empty-state-editor">
                <i class="fas fa-magic"></i>
                <p>Votre prompt professionnel apparaîtra ici</p>
                <small>Cliquez sur "Générer" pour créer votre prompt anglais</small>
            </div>
        `;
        
        // Masquer les contrôles
        const controls = ['copyEnglishBtn', 'regenerateBtn', 'saveBtn', 'modificationSection', 'englishFooter'];
        controls.forEach(id => {
            const el = document.getElementById(id);
            if (el) el.style.display = 'none';
        });
        
        // Retirer la sélection de genre
        document.querySelectorAll('.gender-card').forEach(card => {
            card.classList.remove('selected');
        });
        
        // Revenir au step 1
        this.goToStep(1);
        
        // Aller à la vue création
        this.switchView('create');
    }
    
    copyFinalPrompt() {
        this.copyEnglishText();
    }
}

// ==================== FONCTIONS GLOBALES ====================

function switchView(view) {
    app.switchView(view);
}

function goToStep(step) {
    app.goToStep(step);
}

function createNewPrompt() {
    app.createNewPrompt();
}

function copyFinalPrompt() {
    app.copyFinalPrompt();
}

function closeModal(modalId) {
    app.closeModal(modalId);
}

// ==================== INITIALISATION ====================

// Créer l'instance de l'application
window.app = new StudioApp();

console.log('✅ Application chargée');