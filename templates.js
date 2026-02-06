/* ==========================================
   STUDIO PHOTO DJAIDANI 1943 - TEMPLATES
   Templates complets pour les prompts
   ========================================== */

// Ce fichier contient les templates déjà définis dans config.js
// Il sert de référence supplémentaire et pourrait être étendu

const EXTENDED_TEMPLATES = {
    // Informations sur les templates
    INFO: {
        VERSION: '1.0.0',
        LAST_UPDATED: '2024-02-06',
        TOTAL_TEMPLATES: 2,
        SUPPORTED_GENDERS: ['male', 'female']
    },
    
    // Métadonnées des templates
    METADATA: {
        male: {
            name: 'Portrait Patriotique Masculin Algérien',
            description: 'Template professionnel ultra-réaliste pour portraits masculins',
            sections: 10, // A à J
            wordCount: 650,
            features: [
                'Préservation exacte du visage',
                'Costume formel élégant',
                'Drapeau algérien clairement identifiable',
                'Carte d\'Algérie en arrière-plan',
                'Titre "ALGÉRIE" en or/vert',
                'Qualité 8K ultra-réaliste',
                'Éclairage studio professionnel',
                'Composition patriotique équilibrée'
            ],
            colorScheme: {
                flag: {
                    green: '#006233',
                    white: '#FFFFFF',
                    red: '#D21034'
                },
                background: {
                    nearBlack: '#0A0A0A',
                    darkGrey: '#0B0B0B',
                    vignette: '#1A1A1A'
                },
                title: {
                    gold: '#FFD700',
                    royalGreen: '#006233'
                },
                outfit: {
                    jacket: '#111111-#202020',
                    shirt: '#FFFFFF'
                }
            }
        },
        female: {
            name: 'Portrait Patriotique Féminin Algérien',
            description: 'Template professionnel ultra-réaliste pour portraits féminins',
            sections: 10, // A à J
            wordCount: 680,
            features: [
                'Préservation exacte du visage',
                'Respect du hijab si présent',
                'Blazer formel respectueux',
                'Drapeau algérien clairement identifiable',
                'Carte d\'Algérie en arrière-plan',
                'Titre "ALGÉRIE" en or/vert',
                'Qualité 8K ultra-réaliste',
                'Éclairage studio professionnel',
                'Composition patriotique équilibrée'
            ],
            colorScheme: {
                flag: {
                    green: '#006233',
                    white: '#FFFFFF',
                    red: '#D21034'
                },
                background: {
                    nearBlack: '#0A0A0A',
                    darkGrey: '#0B0B0B',
                    vignette: '#1A1A1A'
                },
                title: {
                    gold: '#FFD700',
                    royalGreen: '#006233'
                },
                outfit: {
                    blazer: '#111111-#202020',
                    blouse: '#FFFFFF'
                }
            }
        }
    },
    
    // Exemples de textes français typiques
    FRENCH_EXAMPLES: {
        basic: {
            male: `Un homme algérien portant le drapeau de l'Algérie, debout devant une carte de l'Algérie. Photo professionnelle avec costume noir et chemise blanche. Éclairage studio, fond sombre, titre "ALGÉRIE" en haut.`,
            female: `Une femme algérienne avec le drapeau algérien sur les épaules, devant une carte de l'Algérie. Photo professionnelle avec blazer noir et chemise blanche. Éclairage studio, fond sombre, titre "ALGÉRIE" en or.`
        },
        detailed: {
            male: `Une prise de vue cinématographique photoréaliste montre un homme algérien portant un costume formel noir avec chemise blanche. Le drapeau algérien est drapé sur ses épaules comme un châle. Il se tient debout, face à la caméra, expression fière et confiante. En arrière-plan, une grande carte de l'Algérie remplie avec les couleurs du drapeau (vert à gauche, blanc à droite, croissant et étoile rouge au centre). Le titre "ALGÉRIE" apparaît en lettres dorées élégantes au-dessus de la carte. Éclairage studio professionnel, qualité ultra-réaliste 8K.`,
            female: `Une prise de vue cinématographique photoréaliste montre une femme algérienne portant un blazer formel noir avec chemise blanche. Le drapeau algérien est drapé sur ses épaules. Elle se tient debout, face à la caméra, expression calme et fière. En arrière-plan, une grande carte de l'Algérie avec les couleurs du drapeau national (vert gauche, blanc droite, croissant rouge et étoile). Le titre "ALGÉRIE" en or raffiné apparaît au-dessus de la carte. Éclairage studio trois points, résolution 8K ultra-réaliste.`
        },
        custom: {
            spiderman: `Une prise de vue cinématographique photoréaliste en plongée montre un homme portant un costume de Spider-Man rouge et bleu, tombant les pieds en premier à travers une ligne d'horizon urbaine dense. Il regarde directement vers l'objectif, tendant une main vers l'avant dans un geste de lancement de toile. L'arrière-plan présente des gratte-ciel en verre flous et des rues lointaines. Éclairage naturel lumineux, rendu 8K avec ray tracing.`,
            military: `Un portrait patriotique d'un jeune homme algérien en uniforme militaire, tenant le drapeau national avec fierté. Posture droite et professionnelle, regard déterminé. Fond avec la carte d'Algérie et le titre "ALGÉRIE" en lettres dorées. Photo de studio ultra-réaliste, éclairage dramatique.`,
            celebration: `Une jeune femme algérienne souriante, célébrant avec le drapeau algérien autour de ses épaules. Expression joyeuse et patriotique. Hijab vert coordonné avec le drapeau. Arrière-plan avec carte d'Algérie illuminée. Titre "ALGÉRIE" en or brillant. Photo de studio festive, haute résolution.`
        }
    },
    
    // Exemples de modifications typiques
    MODIFICATION_EXAMPLES: {
        age: [
            "Change l'âge à 15 ans",
            "Rends-le plus jeune, environ 12 ans",
            "Fais-en un adulte d'environ 30 ans",
            "Il doit avoir l'air d'un adolescent"
        ],
        expression: [
            "Ajoute un sourire",
            "Expression plus sérieuse",
            "Regard plus confiant",
            "Visage neutre et calme",
            "Ajoute une expression de fierté"
        ],
        outfit: [
            "Change la couleur du costume en bleu marine",
            "Ajoute une cravate verte",
            "Blazer blanc au lieu de noir",
            "Ajoute des décorations militaires",
            "Costume plus décontracté"
        ],
        background: [
            "Rends l'arrière-plan plus lumineux",
            "Ajoute plus de détails sur la carte",
            "Fond complètement noir",
            "Plus de contraste sur le drapeau",
            "Titre en vert au lieu d'or"
        ],
        pose: [
            "Main sur le cœur",
            "Les deux mains tenant le drapeau",
            "Bras croisés",
            "Main levée en signe de victoire",
            "Posture plus détendue"
        ],
        lighting: [
            "Éclairage plus dramatique",
            "Lumière plus douce",
            "Plus de contraste",
            "Éclairage naturel au lieu de studio",
            "Ajoute un effet de contre-jour"
        ],
        details: [
            "Ajoute plus de détails sur le drapeau",
            "Rends le costume plus texturé",
            "Plus de détails sur le visage",
            "Améliore les plis du drapeau",
            "Carte d'Algérie plus détaillée"
        ],
        composition: [
            "Cadrage plus serré sur le visage",
            "Plus d'espace autour du sujet",
            "Centré différemment",
            "Format plus panoramique",
            "Vue de trois-quarts au lieu de face"
        ]
    },
    
    // Conseils d'utilisation
    TIPS: {
        french_text: [
            "Soyez aussi descriptif que possible",
            "Mentionnez les couleurs, l'éclairage, la pose",
            "N'hésitez pas à être créatif",
            "Utilisez des exemples visuels si vous en avez",
            "Plus de détails = meilleur résultat"
        ],
        modifications: [
            "Soyez précis dans vos demandes",
            "Une modification à la fois pour de meilleurs résultats",
            "Utilisez un langage simple et clair",
            "Mentionnez ce qui doit changer et comment",
            "Vous pouvez écrire en français ou en arabe"
        ],
        best_practices: [
            "Commencez avec un texte français simple",
            "Laissez l'IA générer le premier prompt",
            "Testez-le et notez ce qui doit changer",
            "Faites des modifications incrémentales",
            "Sauvegardez vos meilleures versions"
        ]
    },
    
    // Sections des templates expliquées
    SECTIONS_EXPLAINED: {
        A: {
            name: "IDENTITY & ALIGNMENT",
            purpose: "Préservation exacte du visage source",
            key_points: [
                "Aucune retouche ni embellissement",
                "Conservation des proportions exactes",
                "Respect de l'âge réel",
                "Posture droite et frontale"
            ]
        },
        B: {
            name: "OUTFIT",
            purpose: "Tenue formelle et élégante",
            key_points: [
                "Costume/blazer sombre professionnel",
                "Chemise/blouse blanche impeccable",
                "Coupe adaptée à l'âge",
                "Détails réalistes (coutures, plis)"
            ]
        },
        C: {
            name: "FLAG",
            purpose: "Drapeau algérien clairement identifiable",
            key_points: [
                "Drapé réaliste sur les épaules",
                "Couleurs exactes (vert, blanc, rouge)",
                "Croissant et étoile visibles",
                "Texture textile authentique"
            ]
        },
        D: {
            name: "BACKGROUND - MAP",
            purpose: "Carte d'Algérie en arrière-plan",
            key_points: [
                "Contour complet de l'Algérie",
                "Remplie avec couleurs du drapeau",
                "Dégradés subtils aux bords",
                "Fond sombre élégant"
            ]
        },
        E: {
            name: "TITLE",
            purpose: "Titre 'ALGÉRIE' au-dessus de la carte",
            key_points: [
                "Police élégante et prestigieuse",
                "Couleur or ou vert royal",
                "Lueur subtile pour lisibilité",
                "Taille équilibrée et dignifiée"
            ]
        },
        F: {
            name: "CAMERA & FRAMING",
            purpose: "Composition photographique professionnelle",
            key_points: [
                "Objectif portrait 50-85mm",
                "Cadrage mi-longueur",
                "Sujet net, fond légèrement flou",
                "Marges respirantes autour"
            ]
        },
        G: {
            name: "LIGHTING",
            purpose: "Éclairage studio trois points",
            key_points: [
                "Lumière clé douce à 45°",
                "Fill light opposé",
                "Rim light de séparation",
                "Tons de peau naturels"
            ]
        },
        H: {
            name: "TECHNICAL QUALITY",
            purpose: "Spécifications techniques haute résolution",
            key_points: [
                "Résolution 8K minimum",
                "300 DPI pour impression",
                "Profil couleur sRGB",
                "Détails ultra-nets"
            ]
        },
        I: {
            name: "PROHIBITIONS",
            purpose: "Ce qu'il ne faut absolument pas faire",
            key_points: [
                "Pas de stickers ni emojis",
                "Pas de recadrage de la carte",
                "Pas de modification du visage",
                "Pas de texte supplémentaire"
            ]
        },
        J: {
            name: "FINAL DELIVERABLE",
            purpose: "Résumé du livrable final",
            key_points: [
                "Portrait vertical ultra-réaliste",
                "Composition patriotique équilibrée",
                "Digne et professionnel",
                "Prêt pour utilisation"
            ]
        }
    }
};

// Fonction pour obtenir des exemples de modifications
function getModificationExamples(category = null) {
    if (!category) {
        return EXTENDED_TEMPLATES.MODIFICATION_EXAMPLES;
    }
    return EXTENDED_TEMPLATES.MODIFICATION_EXAMPLES[category] || [];
}

// Fonction pour obtenir des conseils
function getTips(category = null) {
    if (!category) {
        return EXTENDED_TEMPLATES.TIPS;
    }
    return EXTENDED_TEMPLATES.TIPS[category] || [];
}

// Fonction pour obtenir les métadonnées d'un template
function getTemplateMetadata(gender) {
    return EXTENDED_TEMPLATES.METADATA[gender] || null;
}

// Fonction pour obtenir un exemple de texte français
function getFrenchExample(type = 'basic', gender = 'male') {
    const examples = EXTENDED_TEMPLATES.FRENCH_EXAMPLES[type];
    return examples ? examples[gender] : null;
}

// Fonction pour obtenir l'explication d'une section
function getSectionExplanation(section) {
    return EXTENDED_TEMPLATES.SECTIONS_EXPLAINED[section] || null;
}

// Export vers le scope global
window.EXTENDED_TEMPLATES = EXTENDED_TEMPLATES;
window.getModificationExamples = getModificationExamples;
window.getTips = getTips;
window.getTemplateMetadata = getTemplateMetadata;
window.getFrenchExample = getFrenchExample;
window.getSectionExplanation = getSectionExplanation;

console.log('✅ Templates étendus chargés');