/**
 * Renders the HTML template for the skills section.
 * Iterates over the global 'skills' array and creates a list item for each skill.
 * @returns {string} HTML string for the skills list
 */
function renderSkillsTemplate() {
    return skills.map((skill, index) => `
        <li class="skills-card" tabindex="${index + 1}">
            <img src="${skill.icon}" alt="${skill.alt}">
            <span>${skill.name}</span>
        </li>
    `).join('');
}


/**
 * Renders the English footer HTML template.
 * Contains logo, copyright, social media, and legal links.
 * @returns {string} HTML string for the English footer
 */
function renderFooterTemplate () {
    return `
        <div id="contact"></div>
        <div class="footer-container">
            <div class="footer-left">
                <a href="index.html">
                    <img src="./assets/icons/kk-logo-cream.svg" alt="Logo">
                </a>
                <p class="copywrite">© Karina Klages 2026</p>
            </div>
            <div class="footer-right">
                <div class="social-media-icon">
                    <a href="mailto:karina.klages@web.de" target="_blank">
                        <img src="./assets/icons/mail-icon.svg" alt="Mail Icon">
                    </a>
                    <a href="https://github.com/karinaklages" target="_blank">
                        <img src="./assets/icons/github-icon.svg" alt="GitHub Icon">
                    </a>
                    <a href="https://www.linkedin.com/in/karinaklages/" target="_blank">
                        <img src="./assets/icons/linkedin-icon.svg" alt="LinkedIn Icon">
                    </a>
                </div>
                <div class="link-area">
                    <a class="footer-links" href="privacy-policy.html" data-text="Privacy Policy">Privacy Policy</a>
                    <a class="footer-links" href="legal-notice.html" data-text="Legal Notice">Legal Notice</a>
                </div>
            </div>
        </div>
    `;
}