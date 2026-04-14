/**
 * Renders the contact form section HTML template.
 * Contains heading, subtitle, and a form with name, email, message, privacy checkbox, and submit button.
 * @returns {string} HTML string for the contact section.
 */
function renderContactTemplate() {
    return `
        <section id="contact" class="contact-section">
            <h2 class="contact-heading">Say Hi</h2>
            <div class="contact-inner">
                <p class="contact-subtitle" data-i18n="contact_subtitle">Want to discuss a new project?</p>
                <p class="contact-body" data-i18n="contact_body">Let's talk and make it happen.</p>
                <form class="contact-form">
                    <input type="text" id="name" data-i18n-placeholder="contact_name" class="form-field" placeholder="Your Name" />
                    <input type="email" id="email" data-i18n-placeholder="contact_email" class="form-field" placeholder="Your Email" />
                    <textarea id="message" data-i18n-placeholder="contact_message" class="form-field form-textarea" placeholder="Your Message"></textarea>
                    <label class="form-checkbox-label">
                        <input type="checkbox" class="form-checkbox" id="privacy" />
                        <span class="form-checkbox-custom"></span>
                        <span data-i18n="error_text"></span>
                    </label>
                    <button type="button" data-i18n="contact_button" class="form-submit">Send Message</button>
                </form>
            </div>
        </section>
    `;
}