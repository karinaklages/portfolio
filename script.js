// Variables

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

const ball = document.querySelector('.gradient-ball');


// Functions

function init() {
    renderSkills();
    renderEnFooter();
}

window.onload = init;

document.addEventListener('mousemove', (e) => {
    ball.style.left = e.clientX + 'px';
    ball.style.top = e.clientY + 'px';
});

function renderSkills() {
    const grid = document.getElementById('skillsGrid');
    grid.innerHTML = renderSkillsTemplate();
}

function renderEnFooter() {
    const footer = document.getElementById('footerEn');
    footer.innerHTML = renderEnFooterTemplate();
}