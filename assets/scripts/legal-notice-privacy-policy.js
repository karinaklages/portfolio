/**
 * Initializes the page by rendering skills and the English footer.
 */
function init() {
    renderFooter();
}

window.onload = init;


/**
 * Renders the English footer using the footer template.
 */
function renderFooter() {
    const footer = document.getElementById('footer');
    footer.innerHTML = renderFooterTemplate();
}