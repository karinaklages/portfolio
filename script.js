/**
 * Stores arrays of image filenames for each project.
 * @type {Object.<string, string[]>}
 */
const projectImages = {
    projectOne:   ["join-1.jpg", "join-2.jpg", "join-3.jpg", "join-4.jpg", "join-5.jpg"],
    projectTwo:   ["platformer-1.jpg", "platformer-2.jpg", "platformer-3.jpg"],
    projectThree: ["pokedex-1.jpg", "pokedex-2.jpg", "pokedex-3.jpg", "pokedex-4.jpg", "pokedex-5.jpg"]
};


/**
 * Tracks the current image index for each project.
 * @type {Object.<string, number>}
 */
const currentIndex = {
    projectOne:   0,
    projectTwo:   0,
    projectThree: 0
};


/**
 * List of skills with their names and icon paths.
 * @type {{ name: string, icon: string }[]}
 */
const skills = [
    { name: "Mac OS", icon: "./assets/icons/apple.svg" },
    { name: "InDesign", icon: "./assets/icons/indesign.svg" },
    { name: "Illustrator", icon: "./assets/icons/illustrator.svg" },
    { name: "Photoshop", icon: "./assets/icons/photoshop.svg" },
    { name: "Lightroom", icon: "./assets/icons/lightroom.svg" },
    { name: "XD", icon: "./assets/icons/xd.svg" },
    { name: "Figma", icon: "./assets/icons/figma.svg" },
    { name: "HTML", icon: "./assets/icons/html.svg" },
    { name: "CSS", icon: "./assets/icons/css.svg" },
    { name: "JavaScript", icon: "./assets/icons/javascript.svg" },
    // { name: "Angular", icon: "./assets/icons/angular.svg" },
    // { name: "TypeScript", icon: "./assets/icons/typescript.svg" },
    { name: "Bootstrap", icon: "./assets/icons/bootstrap.svg" },
    // { name: "Wordpress", icon: "./assets/icons/wordpress.svg" },
    { name: "VS Code", icon: "./assets/icons/vscode.svg" },
    { name: "Git", icon: "./assets/icons/git.svg" },
    { name: "Github", icon: "./assets/icons/github.svg" },
    { name: "Firebase", icon: "./assets/icons/firebase.svg" },
    { name: "Rest-API", icon: "./assets/icons/api.svg" },
    { name: "Scrum", icon: "./assets/icons/scrum.svg" }
];


/**
 * The DOM element representing the gradient ball that follows the mouse.
 * @type {HTMLElement}
 */
const ball = document.querySelector('.gradient-ball');


/**
 * Initializes the page by rendering skills and the English footer.
 */
function init() {
    renderSkills();
    renderEnFooter();
}

window.onload = init;


/**
 * Moves the gradient ball to follow the mouse cursor.
 * @param {MouseEvent} e - The mousemove event.
 */
document.addEventListener('mousemove', (e) => {
    ball.style.left = e.clientX + 'px';
    ball.style.top = e.clientY + 'px';
});


/**
 * Renders the skills grid using the skills template.
 */
function renderSkills() {
    const grid = document.getElementById('skillsGrid');
    grid.innerHTML = renderSkillsTemplate();
}


/**
 * Renders the English footer using the footer template.
 */
function renderEnFooter() {
    const footer = document.getElementById('footerEn');
    footer.innerHTML = renderEnFooterTemplate();
}


/**
 * Changes the displayed image for a project based on navigation direction.
 * @param {string} projectId - The ID of the project.
 * @param {number} direction - The direction to move in the image array (1 or -1).
 */
function changeImage(projectId, direction) {
    const images = projectImages[projectId];
    currentIndex[projectId] = (currentIndex[projectId] + direction + images.length) % images.length;
    
    const img = document.querySelector(`#${projectId} img`);
    img.src = `./assets/img/${images[currentIndex[projectId]]}`;
}


/**
 * Adds click event listeners to all project navigation buttons to change images.
 */
document.querySelectorAll(".project-navigation").forEach(btn => {
    btn.addEventListener("click", () => {
        changeImage(btn.dataset.project, parseInt(btn.dataset.dir));
    });
});