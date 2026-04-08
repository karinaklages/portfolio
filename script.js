const projectImages = {
    projectOne:   ["join-1.jpg", "join-2.jpg", "join-3.jpg", "join-4.jpg", "join-5.jpg"],
    projectTwo:   ["platformer-1.jpg", "platformer-2.jpg", "platformer-3.jpg"],
    projectThree: ["pokedex-1.jpg", "pokedex-2.jpg", "pokedex-3.jpg", "pokedex-4.jpg", "pokedex-5.jpg"]
};

const currentIndex = {
    projectOne:   0,
    projectTwo:   0,
    projectThree: 0
};

const skills = [
    { name: "Mac OS", icon: "./assets/icons/apple.svg", alt: "Apple Icon" },
    { name: "InDesign", icon: "./assets/icons/indesign.svg", alt: "InDesign Icon" },
    { name: "Illustrator", icon: "./assets/icons/illustrator.svg", alt: "Illustrator Icon" },
    { name: "Photoshop", icon: "./assets/icons/photoshop.svg", alt: "Photoshop Icon" },
    { name: "Lightroom", icon: "./assets/icons/lightroom.svg", alt: "Lightroom Icon" },
    { name: "XD", icon: "./assets/icons/xd.svg", alt: "XD Icon" },
    { name: "Figma", icon: "./assets/icons/figma.svg", alt: "Figma Icon" },
    { name: "HTML", icon: "./assets/icons/html.svg", alt: "HTML Icon" },
    { name: "CSS", icon: "./assets/icons/css.svg", alt: "CSS Icon" },
    { name: "JavaScript", icon: "./assets/icons/javascript.svg", alt: "JavaScript Icon" },
    // { name: "Angular", icon: "./assets/icons/angular.svg", alt: "Angular Icon" },
    // { name: "TypeScript", icon: "./assets/icons/typescript.svg", alt: "TypeScript Icon" },
    { name: "Bootstrap", icon: "./assets/icons/bootstrap.svg", alt: "Bootstrap Icon" },
    // { name: "Wordpress", icon: "./assets/icons/wordpress.svg", alt: "WordPress Icon" },
    { name: "VS Code", icon: "./assets/icons/vscode.svg", alt: "VS Code Icon" },
    { name: "Git", icon: "./assets/icons/git.svg", alt: "Git Icon" },
    { name: "Github", icon: "./assets/icons/github.svg", alt: "GitHub Icon" },
    { name: "Firebase", icon: "./assets/icons/firebase.svg", alt: "Firebase Icon" },
    { name: "Rest-API", icon: "./assets/icons/api.svg", alt: "Rest-API Icon" },
    { name: "Scrum", icon: "./assets/icons/scrum.svg", alt: "Scrum Icon" }
];

const ball = document.querySelector('.gradient-ball');


/**
 * Initializes the page by rendering sections.
 */
function init() {
    renderHeader();
    renderSkills();
    renderContact();
    renderFooter();
    setActiveLanguage();
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
 * Renders the contact section into the footer element.
 */
function renderContact() {
    const footer = document.getElementById('footer');
    footer.insertAdjacentHTML('afterbegin', renderContactTemplate());
}


/**
 * Renders the footer into the footer element, after the contact section.
 */
function renderFooter() {
    const footer = document.getElementById('footer');
    footer.insertAdjacentHTML('beforeend', renderFooterTemplate());
}


/**
 * Updates the active state of the language buttons based on the currently selected language.
 * The active language button receives the 'active' CSS class.
 */
function setActiveLanguage() {
    const currentLang = localStorage.getItem('lang') || 'en';
    document.getElementById('languageEn').classList.toggle('active', currentLang === 'en');
    document.getElementById('languageDe').classList.toggle('active', currentLang === 'de');
}


/**
 * Adds the 'moved' class to the left scroll-down arrow when the mouse enters it.
 */
document.querySelectorAll('.scroll-down-left-arrow').forEach(function (arrow) {
    arrow.addEventListener('mouseenter', function () {
        this.classList.add('moved');
    });
});


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