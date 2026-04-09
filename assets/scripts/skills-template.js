/**
 * Renders the HTML template for the skills section.
 * Iterates over the global 'skills' array and creates a list item for each skill.
 * @returns {string} HTML string for the skills list.
 */
function renderSkillsTemplate() {
    return skills.map((skill, index) => `
        <li class="skills-card" tabindex="${index + 1}">
            <img src="${skill.icon}" alt="${skill.alt}">
            <span>${skill.name}</span>
        </li>
    `).join('');
}