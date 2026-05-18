
const SCROLL_FADE = 350;

window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
    if (window.scrollY > SCROLL_FADE) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
})

function gotoList(value="") {
    window.location.href = `file:///C:/Users/Lenovo/Documents/Development/Bobs-Watches/list.html?filter=${value}`;
}