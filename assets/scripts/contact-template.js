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
                <form class="contact-form" id="contactForm" novalidate>
                    <div class="form-row">
                        <div class="field-wrapper" data-field="name">
                            <input type="text" id="name" data-i18n-placeholder="contact_name"
                                class="form-field" placeholder="Your Name" />
                            <span class="field-icon"></span>
                        </div>
                        <p class="field-error" data-error="name">&nbsp;</p>
                    </div>
                    <div class="form-row">
                        <div class="field-wrapper" data-field="email">
                            <input type="email" id="email" data-i18n-placeholder="contact_email"
                                class="form-field" placeholder="Your Email" />
                            <span class="field-icon"></span>
                        </div>
                        <p class="field-error" data-error="email">&nbsp;</p>
                    </div>
                    <div class="form-row">
                        <div class="field-wrapper field-wrapper--textarea" data-field="message">
                            <textarea id="message" data-i18n-placeholder="contact_message"
                                class="form-field form-textarea"
                                placeholder="Your Message"></textarea>
                            <span class="field-icon"></span>
                        </div>
                        <p class="field-error" data-error="message">&nbsp;</p>
                    </div>
                    <div class="form-row">
                        <label class="form-checkbox-label">
                            <input type="checkbox" class="form-checkbox" id="privacy" />
                            <span class="form-checkbox-custom"></span>
                            <span data-i18n="error_text"></span>
                        </label>
                        <p class="field-error" data-error="privacy">&nbsp;</p>
                    </div>
                    <button type="submit" data-i18n="contact_button" class="form-submit" disabled>Send Message</button>
                </form>
            </div>
        </section>
    `;
}