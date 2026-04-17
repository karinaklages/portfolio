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
    // { name: 'TypeScript', icon: './assets/icons/typescript.svg', alt: 'TypeScript Icon' },
    // { name: 'Angular', icon: './assets/icons/angular.svg', alt: 'Angular Icon' },
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
        description_de: 'Die Web-App "Join" wurde in Zusammenarbeit mit drei weiteren Teammitgliedern unter Verwendung von HTML, CSS, JavaScript, Git und Firebase entwickelt – als ein Projektmanagement-Tool für Aufgaben.',
        liveUrl: 'https://join.karina-klages.de/',
        githubUrl: 'https://github.com/karinaklages/join',
        images: ['join-1.jpg', 'join-2.jpg', 'join-3.jpg', 'join-4.jpg', 'join-5.jpg']
    },
    {
        id: 'projectTwo',
        counter: '02/05',
        headline: 'Roots & Dust',
        subhead: 'HTML | CSS | JavaScript | Git',
        description: 'The platformer "Roots & Dust" was developed using JavaScript and object-oriented programming. Please click the live view to help Brave Viking defeat the Dark Knight!',
        description_de: 'Das Jump and Run Spiel „Roots & Dust“ wurde mit JavaScript und unter Verwendung objektorientierter Programmierung entwickelt. Hilf dem tapferen Wikinger den dunklen Ritter zu besiegen.',
        liveUrl: 'https://platformer.karina-klages.de/',
        githubUrl: 'https://github.com/karinaklages/platformer-game',
        images: ['platformer-1.jpg', 'platformer-2.jpg', 'platformer-3.jpg']
    },
    {
        id: 'projectThree',
        counter: '03/05',
        headline: 'Pokédex',
        subhead: 'HTML | CSS | JavaScript | Git | Rest-API',
        description: 'In this project, a Pokémon trainer registry was developed based on the official PokéAPI. The goal was to make systems and data retrieval compatible. Try to find your favorite Pokémon.',
        description_de: 'Im Rahmen dieses Projekts wurde auf Basis der offiziellen PokéAPI ein Pokémon-Trainer-Register entwickelt. Ziel war es, die Systeme und den Datenabruf kompatibel zu gestalten.',
        liveUrl: 'https://pokedex.karina-klages.de/',
        githubUrl: 'https://github.com/karinaklages/pokedex',
        images: ['pokedex-1.jpg', 'pokedex-2.jpg', 'pokedex-3.jpg', 'pokedex-4.jpg', 'pokedex-5.jpg']
    },
    {
        id: 'projectFour',
        counter: '04/05',
        headline: 'Aji Teekunst',
        subhead: 'Conception | Brand Design | Web Design | Photography',
        description: 'A concept and corporate identity were developed to bring the Aji Teekunst brand to life. A visual identity was created, numerous teas were photographed, and infusions were tasted.<br><br>In addition, a website was designed and an online store was set up. The brand also features matching business stationery as well as its own product and packaging designs.',
        description_de: 'Um die Marke Aji Teekunst zum Leben zu erwecken, wurde ein Konzept entwickelt und ein Corporate Design erstellt. Es wurde eine visuelle Identität geschaffen, zahlreiche Teesorten wurden fotografiert und Aufgüsse verkostet.<br><br>Darüber hinaus wurde eine Website gestaltet und ein Online-Shop eingerichtet. Zur Marke gehören außerdem Geschäftspapiere sowie eigene Produkt- und Verpackungsdesigns.',
        liveUrl: '',
        githubUrl: '',
        images: ['aji-1.jpg', 'aji-2.jpg', 'aji-3.jpg', 'aji-4.jpg', 'aji-5.jpg', 'aji-6.jpg', 'aji-7.jpg', 'aji-8.jpg']
    },
    {
        id: 'projectFive',
        counter: '05/05',
        headline: 'The Fish Club',
        subhead: 'Conception | Brand Design',
        description: 'An established seafood restaurant was looking for a modern logo design that would appeal primarily to a younger audience and reflect the renovated space and updated menu.<br><br>I also developed the entire brand identity so that the owners could consistently apply the design language in the future. The design is bold, playful, and humorous.',
        description_de: 'Ein Fischrestaurant suchte nach einem modernen Logo-Design, das vor allem ein jüngeres Publikum ansprechen und die renovierten Räumlichkeiten sowie die überarbeitete Speisekarte widerspiegeln sollte.<br><br>Zudem entwickelte ich die gesamte Markenidentität, damit die Inhaber die Designsprache künftig einheitlich umsetzen können. Das Design ist markant, verspielt und humorvoll.',       
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
    initContactForm();
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
    updatePageTranslations();
}


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
    updatePageTranslations();
}


/**
 * Renders the contact section into the footer element.
 */
function renderContact() {
    const footer = document.getElementById('footer');
    footer.insertAdjacentHTML('afterbegin', renderContactTemplate());
    updatePageTranslations();
}


/**
 * Renders the footer into the footer element, after the contact section.
 */
function renderFooter() {
    const footer = document.getElementById('footer');
    footer.insertAdjacentHTML('beforeend', renderFooterTemplate());
    updatePageTranslations();
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


/**
 * Dynamically generates projectImages and currentIndex objects from the portfolioProjects array.
 * This creates a mapping of project IDs to their image arrays and initializes the current index for each project to 0.
 * @type {Object.<string, string[]>} projectImages - Maps project IDs to their respective image file names.
 * @type {Object.<string, number>} currentIndex - Maps project IDs to their current image index (initially 0).
 */
portfolioProjects.forEach(project => {
    projectImages[project.id] = project.images;
    currentIndex[project.id] = 0;
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
 * Validates a form field and updates the UI with feedback.
 * Wraps the field, adds a status icon, and shows an error message if invalid.
 * @param {string} id - The ID of the input or textarea element.
 * @param {boolean} valid - Indicates whether the field value is valid.
 * @returns {boolean} Returns the validation result.
 */
function validateField(id, valid) {
    const field = document.getElementById(id);
    removeFieldFeedback(id);
    const wrapper = document.createElement('div');
    wrapper.className = 'field-wrapper';
    wrapper.dataset.field = id;
    field.before(wrapper);
    wrapper.append(field);
    const icon = document.createElement('span');
    icon.className = 'field-icon';
    icon.innerHTML = valid ? iconValid() : iconInvalid();
    wrapper.append(icon);
    if (!valid) {
        const error = document.createElement('p');
        error.className = 'field-error';
        error.dataset.error = id;
        error.textContent = translations[currentLang][`error_${id}`];
        wrapper.after(error);
    }
    return valid;
}


/**
 * Validates the privacy policy checkbox and displays an error message if it is not checked.
 * Removes any existing error message before re-validation.
 * @returns {boolean} Returns true if the checkbox is checked, otherwise false.
 */
function validateCheckbox() {
    const checkbox = document.getElementById('privacy');
    const existing = document.querySelector('[data-error="privacy"]');
    if (existing) existing.remove();
    if (!checkbox.checked) {
        const error = document.createElement('p');
        error.classList.add('field-error');
        error.dataset.error = 'privacy';
        error.textContent = translations[currentLang].error_valid;
        checkbox.closest('.form-checkbox-label')
            .insertAdjacentElement('afterend', error);
        return false;
    }
    return true;
}


/**
 * Initializes the contact form behavior.
 * Attaches a submit event listener to the form with the ID "contactForm".
 * On submit, it prevents the default form submission, displays a toast message for a few seconds, and then resets the form fields.
 */
function initContactForm() {
    const form = document.getElementById('contactForm');
    const toast = document.querySelector('.toast-message');
    if (!form || !toast) return;
    form.addEventListener('submit', function (e) {
        e.preventDefault();
        toast.classList.add('show');
        setTimeout(() => {
            toast.classList.remove('show');
        }, 3000);
        form.reset();
    });
}


/**
 * Sends form data to the PHP mail endpoint.
 * @param {Object} formData - The form data containing name, email, and message.
 * @returns {Promise<Object>} The parsed JSON response from the server.
 */
function sendFormData(formData) {
    return fetch("/mail.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
    })
    .then(r => r.json());
}


/**
 * Handles the server response after form submission.
 * Shows a toast message on success or logs an error on failure.
 * @param {Object} data - The server response object.
 * @param {boolean} data.success - Whether the email was sent successfully.
 * @param {string} [data.error] - Error message returned by the server.
 * @param {HTMLFormElement} form - The contact form element to reset on success.
 */
function handleSubmitResponse(data, form) {
    if (data.success) {
        const toast = document.querySelector('.toast-message');
        if (toast) {
            toast.classList.add('show');
            setTimeout(() => toast.classList.remove('show'), 3000);
        }
        form.reset();
    } else {
        console.error('Fehler:', data.error);
    }
}


/**
 * Initializes the contact form submit handler after the page has loaded.
 * Collects form field values, sends them via fetch, and handles the response.
 * @listens window#load
 */
window.addEventListener("load", () => {
    const form = document.getElementById("contactForm");
    if (!form) return;
    form.addEventListener("submit", function(e) {
        e.preventDefault();
        const formData = {
            name: document.querySelector("#name").value,
            email: document.querySelector("#email").value,
            message: document.querySelector("#message").value
        };
        sendFormData(formData)
            .then(data => handleSubmitResponse(data, form))
            .catch(err => console.error('Netzwerkfehler:', err));
    });
});