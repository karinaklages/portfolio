/**
 * Checks whether a string is a valid email address format.
 * @param {string} email - The email string to validate.
 * @returns {boolean} True if valid, false otherwise.
 */
function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}


/**
 * Returns an HTML img tag for the valid field indicator.
 * @returns {string} HTML string with the valid icon.
 */
function iconValid() {
    return `<img src="./assets/icons/valid.svg" alt="Valid Icon" width="28" height="28">`;
}


/**
 * Returns an HTML img tag for the invalid field indicator.
 * @returns {string} HTML string with the invalid icon.
 */
function iconInvalid() {
    return `<img src="./assets/icons/invalid.svg" alt="Invalid Icon" width="28" height="28">`;
}


/**
 * Updates the icon and error message for a form field based on its validation state.
 * If touched is false, clears all feedback without showing errors.
 * @param {string} fieldId - The ID of the field to update.
 * @param {boolean} isValid - Whether the field value is valid.
 * @param {boolean} touched - Whether the field has been interacted with.
 */
function setFieldFeedback(fieldId, isValid, touched) {
    const icon = document.querySelector(`[data-field="${fieldId}"] .field-icon`);
    const error = document.querySelector(`[data-error="${fieldId}"]`);
    if (!touched) {
        if (icon) icon.innerHTML = '';
        if (error) {
            error.textContent = '\u00A0';
            error.classList.remove('visible');
        }
        return;
    }
    if (icon) icon.innerHTML = isValid ? iconValid() : iconInvalid();
    if (error) {
        if (!isValid) {
            const messages = {
                name:    translations[currentLang]['error_name'],
                email:   translations[currentLang]['error_email'],
                message: translations[currentLang]['error_message']
            };
            error.textContent = messages[fieldId] || translations[currentLang][`error_${fieldId}`];
        } else {
            error.textContent = '\u00A0';
        }
        error.classList.toggle('visible', !isValid);
    }
}


/**
 * Validates a single form field and triggers visual feedback.
 * @param {string} fieldId - The ID of the field to validate.
 * @param {boolean} isValid - Whether the field value passes validation.
 * @returns {boolean} The validation result.
 */
function validateField(fieldId, isValid) {
    setFieldFeedback(fieldId, isValid, true);
    return isValid;
}


/**
 * Validates the privacy checkbox and shows or hides the error message.
 * @returns {boolean} True if the checkbox is checked, false otherwise.
 */
function validateCheckbox() {
    const checkbox = document.getElementById('privacy');
    const error = document.querySelector('[data-error="privacy"]');
    const valid = checkbox.checked;
    if (error) {
        if (!valid) {
            error.textContent = translations[currentLang].error_valid;
        } else {
            error.textContent = '\u00A0';
        }
        error.classList.toggle('visible', !valid);
    }
    return valid;
}


/**
 * Validates all contact form fields and the privacy checkbox.
 * @returns {boolean} True if all fields are valid, false otherwise.
 */
function validateForm() {
    const nameValid = validateField('name', document.getElementById('name').value.trim() !== '');
    const emailValid = validateField('email', isValidEmail(document.getElementById('email').value.trim()));
    const msgValid = validateField('message', document.getElementById('message').value.trim() !== '');
    const privValid = validateCheckbox();
    return nameValid && emailValid && msgValid && privValid;
}


/**
 * Enables or disables the submit button based on whether
 * name, email, and message fields contain valid values.
 */
function updateSubmitState() {
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    const btn = document.querySelector('.contact-form button[type="submit"]');
    if (btn) btn.disabled = !(name !== '' && isValidEmail(email) && message !== '');
}


/**
 * Initializes live validation for all contact form fields.
 * On blur, validates the field and shows feedback if invalid.
 * On input, clears feedback as soon as the value becomes valid.
 * Also listens for changes on the privacy checkbox.
 */
function initLiveValidation() {
    ['name', 'email', 'message'].forEach(id => {
        const field = document.getElementById(id);
        if (!field) return;
        field.addEventListener('blur', () => {
            const isValid = id === 'email'
                ? isValidEmail(field.value.trim())
                : field.value.trim() !== '';
            setFieldFeedback(id, isValid, true);
            updateSubmitState();
        });
        field.addEventListener('input', () => {
            const isValid = id === 'email'
                ? isValidEmail(field.value.trim())
                : field.value.trim() !== '';
            if (isValid) setFieldFeedback(id, true, true);
            updateSubmitState();
        });
    });
    const privacy = document.getElementById('privacy');
    if (privacy) privacy.addEventListener('change', validateCheckbox);
    updateSubmitState();
}


/**
 * Attaches a submit event listener to the contact form.
 * Prevents submission if validateForm() returns false.
 */
function initFormValidation() {
    const form = document.querySelector('.contact-form');
    if (!form) return;
    form.addEventListener('submit', function(e) {
        if (!validateForm()) e.preventDefault();
    });
}


/**
 * Resets all contact form fields to their empty state
 * and removes all validation feedback and error messages.
 */
function clearForm() {
    ['name', 'email', 'message'].forEach(id => {
        document.getElementById(id).value = '';
        setFieldFeedback(id, true, false);
    });
    document.getElementById('privacy').checked = false;
    const privErr = document.querySelector('[data-error="privacy"]');
    if (privErr) privErr.classList.remove('visible');
    updateSubmitState();
}