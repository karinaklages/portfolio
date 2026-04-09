/**
 * Renders the header HTML template.
 * Contains logo, navigation, and toggle menu.
 * @returns {string} HTML string for the header.
 */
function renderHeaderTemplate () {
    return `
        <div class="header-container">
            <a href="index.html">
                <img src="./assets/icons/kk-logo.svg" alt="Logo">
            </a>
            <div class="navigation">
                <button id="languageEn">EN</button>
                <button id="languageDe">DE</button>
                <label class="burger-menu">
                    <div class="burger-icon">
                        <img src="./assets/icons/burger.svg" class="frame f1">
                        <img src="./assets/icons/burger-transition-1.svg" class="frame f2">
                        <img src="./assets/icons/burger-transition-2.svg" class="frame f3">
                        <img src="./assets/icons/burger-transition-3.svg" class="frame f4">
                    </div>
                </label>
            </div>
        </div>
        <div class="toggle-menu d-none" id="toggleMenu">
            <div class="open-menu width">
                <a class="open-nav-link" href="index.html#about">About Me</a>
                <a class="open-nav-link" href="index.html#skills">My Skills</a>
                <a class="open-nav-link" href="index.html#portfolio">Portfolio</a>
            </div>
            <footer class="toggle-footer">
                <div class="width footer-direction">
                    <div class="toggle-menu-left">
                        <h2 class="toggle-footer-heading">Say Hi</h2>
                        <p class="footer-link-text">karina.klages@web.de</p>
                    </div>
                    <div class="toggle-menu-right">
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
                    </div>
                </div>
            </footer>
        </div>
    `;
}