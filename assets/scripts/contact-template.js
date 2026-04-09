/**
 * Renders the contact form section HTML template.
 * Contains heading, subtitle, and a form with name, email, message, privacy checkbox, and submit button.
 * @returns {string} HTML string for the contact section
 */
function renderContactTemplate() {
    return `
        <section id="contact" class="contact-section">
            <h2 class="contact-heading">Say Hi</h2>
            <div class="contact-inner">
                <p class="contact-subtitle">Want to discuss a new project?</p>
                <p class="contact-body">Let's talk and make it happen.</p>
                <form class="contact-form">
                    <input type="text" id="name" class="form-field" placeholder="Your Name" />
                    <input type="email" id="email" class="form-field" placeholder="Your Email" />
                    <textarea id="message" class="form-field form-textarea" placeholder="Your Message"></textarea>
                    <label class="form-checkbox-label">
                        <input type="checkbox" class="form-checkbox" id="privacy" />
                        <span class="form-checkbox-custom"></span>
                        <span>I've read the <a href="privacy-policy.html" class="form-privacy-link inline-link" data-text="Privacy Policy">Privacy Policy</a><span class="checkbox-text-rest"> and agree to the processing of my data as outlined.</span></span>
                    </label>
                    <button type="button" class="form-submit">Send Message</button>
                </form>
            </div>
        </section>
    `;
}