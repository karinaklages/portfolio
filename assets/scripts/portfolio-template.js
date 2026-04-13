/**
 * Renders the entire portfolio section with all projects.
 */
function renderPortfolio() {
    const container = document.getElementById('portfolioContainer');
    container.innerHTML = '';
    portfolioProjects.forEach((project, index) => {
        const isOdd = index % 2 === 0;
        container.innerHTML += renderProjectTemplate(project, isOdd);
    });
    initializeProjectNavigation();
}


/**
 * Generates the HTML template for a single project.
 * @param {Object} project - The project data object.
 * @param {boolean} isOdd - Whether this project should use odd layout (true) or even layout (false).
 * @returns {string} The HTML string for the project.
 */
function renderProjectTemplate(project, isOdd) {
    const imageSection = `
        <div class="project-image-side">
            <div class="project-images" id="${project.id}">
                <img src="./assets/img/${project.images[0]}" alt="${project.headline} Project">
            </div>
            <div class="project-navigation-container">
                <button class="project-navigation" data-project="${project.id}" data-dir="-1">
                    <img src="./assets/icons/arrow-left.svg" alt="Previous Project Icon">
                </button>
                <button class="project-navigation" data-project="${project.id}" data-dir="1">
                    <img src="./assets/icons/arrow-right.svg" alt="Next Project Icon">
                </button>
            </div>
        </div>
    `;
    
    const detailsSection = `
        <div class="project-details-container">
            <h4 class="project-counter">${project.counter}</h4>
            <div class="project-details">
                <span class="project-headline">${project.headline}</span>
                <span class="project-subhead">${project.subhead}</span>
                <p>${project.description}</p>
                <div class="button-area">
                    ${project.liveUrl && project.liveUrl.trim() !== '' ? `
                        <a href="${project.liveUrl}" target="_blank"><button>Live</button></a>
                    ` : ''}
                    ${project.githubUrl && project.githubUrl.trim() !== '' ? `
                        <a href="${project.githubUrl}" target="_blank"><button>GitHub</button></a>
                    ` : ''}
                </div>
            </div>
        </div>
    `;
    
    // Odd: Image left, Details right | Even: Details left, Image right
    if (isOdd) {
        return `<div class="project-wrapper-odd">${imageSection}${detailsSection}</div>`;
    } else {
        return `<div class="project-wrapper-even">${detailsSection}${imageSection}</div>`;
    }
}


/**
 * Initializes click event listeners for project navigation buttons.
 * Must be called after portfolio is rendered.
 */
function initializeProjectNavigation() {
    document.querySelectorAll(".project-navigation").forEach(btn => {
        btn.addEventListener("click", () => {
            changeImage(btn.dataset.project, parseInt(btn.dataset.dir));
        });
    });
}