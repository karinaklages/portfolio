/**
 * Renders the header template and initializes all header functionality.
 */
function renderHeader() {
    document.getElementById('main-header').innerHTML = renderHeaderTemplate();
    setLanguages();
    setBurgerMenu();
    setMenuLinks();
}


/**
 * Attaches click event listeners to the EN and DE language buttons.
 * Stores the selected language in localStorage and updates the active button state.
 */
function setLanguages() {
    document.getElementById('languageEn').addEventListener('click', () => {
        localStorage.setItem('lang', 'en');
        setActiveLanguage();
    });
    document.getElementById('languageDe').addEventListener('click', () => {
        localStorage.setItem('lang', 'de');
        setActiveLanguage();
    });
}


/**
 * Updates the active state of the language buttons.
 */
function setActiveLanguage() {
    const currentLang = localStorage.getItem('lang') || 'en';
    document.getElementById('languageEn').classList.toggle('active', currentLang === 'en');
    document.getElementById('languageDe').classList.toggle('active', currentLang === 'de');
}


/**
 * Attaches a click event listener to the burger menu button.
 * Toggles the menu open/closed and triggers the corresponding burger icon animation.
 */
function setBurgerMenu() {
    document.querySelector('.burger-menu').addEventListener('click', () => {
        const header = document.querySelector('header');
        const frames = document.querySelectorAll('.frame');
        const menu = document.getElementById('toggleMenu');
        const isOpen = header.classList.contains('menu-open');
        frames.forEach(f => { f.style.opacity = '0'; f.style.animation = 'none'; });
        if (isOpen) {
            header.classList.remove('menu-open');
            menu.classList.add('d-none');
            animateBurgerClose(frames);
        } else {
            header.classList.add('menu-open');
            menu.classList.remove('d-none');
            animateBurgerOpen(frames);
        }
    });
}


/**
 * Animates the burger icon frames forward (burger → X).
 */
function animateBurgerOpen(frames) {
    setTimeout(() => { frames[0].style.opacity = '0'; }, 0);
    setTimeout(() => { frames[1].style.opacity = '1'; }, 0);
    setTimeout(() => { frames[1].style.opacity = '0'; }, 67);
    setTimeout(() => { frames[2].style.opacity = '1'; }, 67);
    setTimeout(() => { frames[2].style.opacity = '0'; }, 133);
    setTimeout(() => { frames[3].style.opacity = '1'; }, 133);
}


/**
 * Animates the burger icon frames backward (X → burger).
 */
function animateBurgerClose(frames) {
    setTimeout(() => { frames[3].style.opacity = '0'; }, 0);
    setTimeout(() => { frames[2].style.opacity = '1'; }, 0);
    setTimeout(() => { frames[2].style.opacity = '0'; }, 67);
    setTimeout(() => { frames[1].style.opacity = '1'; }, 67);
    setTimeout(() => { frames[1].style.opacity = '0'; }, 133);
    setTimeout(() => { frames[0].style.opacity = '1'; }, 133);
}


/**
 * Attaches click event listeners to all navigation links in the open menu.
 * Closes the menu with a short delay after a link is clicked.
 */
function setMenuLinks() {
    document.querySelectorAll('.open-menu a').forEach(link => {
        link.addEventListener('click', () => {
            setTimeout(() => {
                const header = document.querySelector('header');
                const frames = document.querySelectorAll('.frame');
                const menu = document.getElementById('toggleMenu');
                frames.forEach(f => { f.style.opacity = '0'; f.style.animation = 'none'; });
                header.classList.remove('menu-open');
                menu.classList.add('d-none');
                animateBurgerClose(frames);
            }, 300);
        });
    });
}