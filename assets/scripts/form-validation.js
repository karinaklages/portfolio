/**
 * Initializes form validation on the contact form after it has been rendered.
 * Validates name, email, message, and privacy policy checkbox on submit.
 */
function initFormValidation() {
    const form = document.querySelector('.contact-form');
    if (!form) return;
    const submitBtn = form.querySelector('.form-submit');
    submitBtn.addEventListener('click', () => validateForm());
}


/**
 * Validates all form fields and shows or hides error/success indicators.
 * @returns {boolean} True if all fields are valid, false otherwise.
 */
function validateForm() {
    const nameValid    = validateField('name', document.getElementById('name').value.trim() !== '');
    const emailValid   = validateField('email', isValidEmail(document.getElementById('email').value.trim()));
    const messageValid = validateField('message', document.getElementById('message').value.trim() !== '');
    const privacyValid = validateCheckbox();
    return nameValid && emailValid && messageValid && privacyValid;
}


/**
 * Validates a single input field and renders feedback icons and error messages.
 * @param {string} fieldId - The ID of the input or textarea element.
 * @param {boolean} isValid - Whether the field value passes validation.
 * @returns {boolean} The validation result.
 */
function validateField(fieldId, isValid) {
    const field = document.getElementById(fieldId);
    const errorMessages = { name: 'Name is required.', email: 'Email is required.', message: 'Message is empty.' };
    removeFieldFeedback(fieldId);
    const wrapper = document.createElement('div');
    wrapper.classList.add('field-wrapper');
    wrapper.setAttribute('data-field', fieldId);
    field.parentNode.insertBefore(wrapper, field);
    wrapper.appendChild(field);
    const icon = document.createElement('span');
    icon.classList.add('field-icon');
    icon.innerHTML = isValid ? iconValid() : iconInvalid();
    wrapper.appendChild(icon);
    if (!isValid) {
        const error = document.createElement('p');
        error.classList.add('field-error');
        error.textContent = errorMessages[fieldId];
        wrapper.insertAdjacentElement('afterend', error);
        error.setAttribute('data-error', fieldId);
    }
    return isValid;
}


/**
 * Validates the privacy policy checkbox and shows an error message if unchecked.
 * @returns {boolean} True if checkbox is checked, false otherwise.
 */
function validateCheckbox() {
    const checkbox = document.getElementById('privacy');
    const existing = document.querySelector('[data-error="privacy"]');
    if (existing) existing.remove();
    if (!checkbox.checked) {
        const error = document.createElement('p');
        error.classList.add('field-error');
        error.textContent = 'Please accept the Privacy Policy.';
        error.setAttribute('data-error', 'privacy');
        checkbox.closest('.form-checkbox-label').insertAdjacentElement('afterend', error);
        return false;
    }
    return true;
}


/**
 * Removes existing feedback wrapper and error message for a field.
 * @param {string} fieldId - The ID of the field to clean up.
 */
function removeFieldFeedback(fieldId) {
    const existing = document.querySelector(`[data-field="${fieldId}"]`);
    if (existing) {
        const field = document.getElementById(fieldId);
        existing.parentNode.insertBefore(field, existing);
        existing.remove();
    }
    const error = document.querySelector(`[data-error="${fieldId}"]`);
    if (error) error.remove();
}


/**
 * Checks whether a string is a valid email address format.
 * @param {string} email - The email string to validate.
 * @returns {boolean} True if valid email format, false otherwise.
 */
function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}


/**
 * Returns the SVG placeholder for a valid (green) field indicator.
 * @returns {string} SVG HTML string.
 */
function iconValid() {
    return `<img src="./assets/icons/valid.svg" alt="Valid Icon" width="28" height="28">`;
}


/**
 * Returns the SVG placeholder for an invalid (red) field indicator.
 * @returns {string} SVG HTML string.
 */
function iconInvalid() {
    return `<img src="./assets/icons/invalid.svg" alt="Invalid Icon" width="28" height="28">`;
}