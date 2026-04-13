const ball = document.querySelector('.gradient-ball');

const skills = [
    { name: 'Mac OS', icon: './assets/icons/apple.svg', alt: 'Apple Icon' },
    { name: 'InDesign', icon: './assets/icons/indesign.svg', alt: 'InDesign Icon' },
    { name: 'Illustrator', icon: './assets/icons/illustrator.svg', alt: 'Illustrator Icon' },
    { name: 'Photoshop', icon: './assets/icons/photoshop.svg', alt: 'Photoshop Icon' },
    { name: 'Lightroom', icon: './assets/icons/lightroom.svg', alt: 'Lightroom Icon' },
    { name: 'XD', icon: './assets/icons/xd.svg', alt: 'XD Icon' },
    { name: 'Figma', icon: './assets/icons/figma.svg', alt: 'Figma Icon' },
    { name: 'HTML', icon: './assets/icons/html.svg', alt: 'HTML Icon' },
    { name: 'CSS', icon: './assets/icons/css.svg', alt: 'CSS Icon' },
    { name: 'JavaScript', icon: './assets/icons/javascript.svg', alt: 'JavaScript Icon' },
    // { name: 'Angular', icon: './assets/icons/angular.svg', alt: 'Angular Icon' },
    // { name: 'TypeScript', icon: './assets/icons/typescript.svg', alt: 'TypeScript Icon' },
    { name: 'Bootstrap', icon: './assets/icons/bootstrap.svg', alt: 'Bootstrap Icon' },
    // { name: 'Wordpress', icon: './assets/icons/wordpress.svg', alt: 'WordPress Icon' },
    { name: 'VS Code', icon: './assets/icons/vscode.svg', alt: 'VS Code Icon' },
    { name: 'Git', icon: './assets/icons/git.svg', alt: 'Git Icon' },
    { name: 'Github', icon: './assets/icons/github.svg', alt: 'GitHub Icon' },
    { name: 'Firebase', icon: './assets/icons/firebase.svg', alt: 'Firebase Icon' },
    { name: 'Rest-API', icon: './assets/icons/api.svg', alt: 'Rest-API Icon' },
    { name: 'Scrum', icon: './assets/icons/scrum.svg', alt: 'Scrum Icon' }
];

const portfolioProjects = [
    {
        id: 'projectOne',
        counter: '01/05',
        headline: 'Join',
        subhead: 'HTML | CSS | JavaScript | Git | Firebase',
        description: 'The web app "Join" was built using HTML, CSS, JavaScript, Git and Firebase, in collaboration with three other team partners. The app serves as a project management tool that visualises the status and responsibilities of tasks.',
        liveUrl: 'https://karina-klages.developerakademie.net/join/index.html',
        githubUrl: 'https://github.com/karinaklages/join',
        images: ['join-1.jpg', 'join-2.jpg', 'join-3.jpg', 'join-4.jpg', 'join-5.jpg']
    },
    {
        id: 'projectTwo',
        counter: '02/05',
        headline: 'Roots & Dust',
        subhead: 'HTML | CSS | JavaScript | Git',
        description: 'The platformer "Roots & Dust" was developed using JavaScript and object-oriented programming. Please click the live view to help Brave Viking defeat the Dark Knight!',
        liveUrl: 'https://karina-klages.developerakademie.net/platformer-game/index.html',
        githubUrl: 'https://github.com/karinaklages/platformer-game',
        images: ['platformer-1.jpg', 'platformer-2.jpg', 'platformer-3.jpg']
    },
    {
        id: 'projectThree',
        counter: '03/05',
        headline: 'Pokédex',
        subhead: 'HTML | CSS | JavaScript | Git | Rest-API',
        description: 'In this project, a Pokémon trainer registry was developed based on the official PokéAPI. The goal was to make systems and data retrieval compatible. Try to find your favorite Pokémon.',
        liveUrl: 'https://karina-klages.developerakademie.net/pokedex/index.html',
        githubUrl: 'https://github.com/karinaklages/pokedex',
        images: ['pokedex-1.jpg', 'pokedex-2.jpg', 'pokedex-3.jpg', 'pokedex-4.jpg', 'pokedex-5.jpg']
    },
    {
        id: 'projectFour',
        counter: '04/05',
        headline: 'Aji Teekunst',
        subhead: 'Brand Design | Web Design | Photography',
        description: 'A concept and corporate identity were developed to bring the Aji Teekunst brand to life. A visual identity was created, numerous teas were photographed, and infusions were tasted.<br><br>In addition, a website was designed and an online store was set up. The brand also features matching business stationery as well as its own product and packaging designs.',
        liveUrl: '',
        githubUrl: '',
        images: ['aji-1.jpg', 'aji-2.jpg', 'aji-3.jpg', 'aji-4.jpg', 'aji-5.jpg', 'aji-6.jpg', 'aji-7.jpg']
    },
    {
        id: 'projectFive',
        counter: '05/05',
        headline: 'The Fish Club',
        subhead: 'Conceptual Work | Brand Design',
        description: 'An established seafood restaurant was looking for a modern logo design that would appeal primarily to a younger audience and reflect the renovated space and updated menu.<br><br>I also developed the entire brand identity so that the owners could consistently apply the design language in the future. The design is bold, playful, and humorous.',
        liveUrl: '',
        githubUrl: '',
        images: ['fish-1.jpg', 'fish-2.jpg', 'fish-3.jpg', 'fish-4.jpg', 'fish-5.jpg', 'fish-6.jpg', 'fish-7.jpg']
    }
];

const projectImages = {};
const currentIndex = {};


/**
 * Initializes the page by rendering sections.
 */
function init() {
    renderHeader();
    renderSkills();
    renderPortfolio();
    renderContact();
    renderFooter();
    setActiveLanguage();
    initFormValidation();
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
 * Dynamically generates projectImages and currentIndex objects from the portfolioProjects array.
 * This creates a mapping of project IDs to their image arrays and initializes the current index for each project to 0.
 * 
 * @type {Object.<string, string[]>} projectImages - Maps project IDs to their respective image file names.
 * @type {Object.<string, number>} currentIndex - Maps project IDs to their current image index (initially 0).
 */
portfolioProjects.forEach(project => {
    projectImages[project.id] = project.images;
    currentIndex[project.id] = 0;
});


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