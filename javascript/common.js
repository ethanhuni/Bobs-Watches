
const SCROLL_FADE = 350;

window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
    if (window.scrollY > SCROLL_FADE) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
})