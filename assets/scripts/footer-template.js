/**
 * Renders the English footer HTML template.
 * Contains logo, copyright, social media, and legal links.
 * @returns {string} HTML string for the English footer
 */
function renderFooterTemplate () {
    return `
        <section id="contact" class="contact-section">
            <h2 class="contact-heading">Say Hi</h2>
            <div class="contact-inner">
                <p class="contact-subtitle">Want to discuss a new project?</p>
                <p class="contact-body">Let's talk and make it happen.</p>
                <div class="contact-form">
                    <input type="text" class="form-field" placeholder="Your Name" />
                    <input type="email" class="form-field" placeholder="Your Email" />
                    <textarea class="form-field form-textarea" placeholder="Your Message"></textarea>
                    <label class="form-checkbox-label">
                        <input type="checkbox" class="form-checkbox" id="privacy" />
                        <span class="form-checkbox-custom"></span>
                        <span>I've read the <a href="privacy-policy.html" class="form-privacy-link inline-link" data-text="Privacy Policy">Privacy Policy</a><span class="checkbox-text-rest"> and agree to the processing of my data as outlined.</span></span>
                    </label>
                    <button class="form-submit">Send Message</button>
                </div>
            </div>
        </section>
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



                    // <label class="form-checkbox-label">
                    //     <input type="checkbox" class="form-checkbox" />
                    //     I've read the <a href="privacy-policy.html" class="form-privacy-link">Privacy Policy</a> and agree to the processing of my data as outlined.
                    // </label>