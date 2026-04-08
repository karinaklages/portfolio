/**
 * Initializes the page by rendering skills and the English footer.
 */
function init() {
    renderHeader();
    renderFooter();
}

window.onload = init;


/**
 * Renders the footer using the footer template.
 */
function renderFooter() {
    const footer = document.getElementById('footer');
    footer.innerHTML = renderFooterTemplate();
}