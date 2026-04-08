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
 * Renders the header and sets all event listeners.
 */
function renderHeader() {
    const header = document.getElementById('main-header');
    header.innerHTML = renderHeaderTemplate();

    document.getElementById('languageEn').addEventListener('click', () => {
        localStorage.setItem('lang', 'en');
        setActiveLanguage();
    });

    document.getElementById('languageDe').addEventListener('click', () => {
        localStorage.setItem('lang', 'de');
        setActiveLanguage();
    });

    document.querySelector('.burger-menu').addEventListener('click', () => {
        const header = document.querySelector('header');
        const frames = document.querySelectorAll('.frame');
        const menu = document.getElementById('toggleMenu');
        const isOpen = header.classList.contains('menu-open');
        frames.forEach(f => {
            f.style.opacity = '0';
            f.style.animation = 'none';
        });
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

/**
 * Updates the active state of the language buttons.
 */
function setActiveLanguage() {
    const currentLang = localStorage.getItem('lang') || 'en';
    document.getElementById('languageEn').classList.toggle('active', currentLang === 'en');
    document.getElementById('languageDe').classList.toggle('active', currentLang === 'de');
}