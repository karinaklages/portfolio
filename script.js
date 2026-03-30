// Variables

const skills = [
    { name: "Mac OS", icon: "./assets/img/apple.svg" },
    { name: "InDesign", icon: "./assets/img/indesign.svg" },
    { name: "Illustrator", icon: "./assets/img/illustrator.svg" },
    { name: "Photoshop", icon: "./assets/img/photoshop.svg" },
    { name: "Lightroom", icon: "./assets/img/lightroom.svg" },
    { name: "XD", icon: "./assets/img/xd.svg" },
    { name: "Figma", icon: "./assets/img/figma.svg" },
    { name: "HTML", icon: "./assets/img/html.svg" },
    { name: "CSS", icon: "./assets/img/css.svg" },
    { name: "JavaScript", icon: "./assets/img/javascript.svg" },
    // { name: "Wordpress", icon: "./assets/img/wordpress.svg" },
    // { name: "Angular", icon: "./assets/img/angular.svg" },
    // { name: "TypeScript", icon: "./assets/img/typescript.svg" },
    { name: "Bootstrap", icon: "./assets/img/bootstrap.svg" },
    { name: "VS Code", icon: "./assets/img/vscode.svg" },
    { name: "Git", icon: "./assets/img/git.svg" },
    { name: "Github", icon: "./assets/img/github.svg" },
    { name: "Firebase", icon: "./assets/img/firebase.svg" },
    { name: "Rest-API", icon: "./assets/img/api.svg" },
    { name: "Scrum", icon: "./assets/img/scrum.svg" }
];

const ball = document.querySelector('.gradient-ball');


// Functions

function init() {
    renderSkills(skills);
}

window.onload = init;

document.addEventListener('mousemove', (e) => {
    ball.style.left = e.clientX + 'px';
    ball.style.top = e.clientY + 'px';
});

function renderSkills(skills) {
    const grid = document.getElementById('skillsGrid');
    grid.innerHTML = skills.map(skill => `
        <li class="skills-card">
            <img src="${skill.icon}" alt="${skill.name} Icon">
            <span>${skill.name}</span>
        </li>
    `).join('');
}

renderSkills(skills);