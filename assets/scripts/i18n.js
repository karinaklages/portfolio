/**
 * i18n.js - Internationalization Module
 * Handles language switching and text translation across the website.
 */
let currentLang = localStorage.getItem('lang') || 'en';


/**
 * Sets the current language and updates all translatable elements on the page.
 * @param {string} lang - Language code ('en' or 'de').
 */
function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('lang', lang);
    renderPortfolio();
    updatePageTranslations();
    setActiveLanguage();
}


/**
 * Updates all elements with data-i18n attributes to the current language.
 * Should be called after language change or after loading new content.
 */
function updatePageTranslations() {
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[currentLang] && translations[currentLang][key]) {
            element.innerHTML = translations[currentLang][key];
            if (element.hasAttribute('data-text')) {
                element.setAttribute('data-text', translations[currentLang][key]);
            }
        }
    });
    
    document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
        const key = element.getAttribute('data-i18n-placeholder');
        if (translations[currentLang] && translations[currentLang][key]) {
            element.placeholder = translations[currentLang][key];
        }
    });
    
    document.querySelectorAll('[data-i18n-aria]').forEach(element => {
        const key = element.getAttribute('data-i18n-aria');
        if (translations[currentLang] && translations[currentLang][key]) {
            element.setAttribute('aria-label', translations[currentLang][key]);
        }
    });
}


/**
 * Gets the current language setting.
 * @returns {string} Current language code.
 */
function getCurrentLanguage() {
    return currentLang;
}


/**
 * Initializes the i18n system on page load.
 * Should be called after DOM is ready.
 */
function initI18n() {
    currentLang = localStorage.getItem('lang') || 'en';
    updatePageTranslations();
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initI18n);
} else {
    initI18n();
}