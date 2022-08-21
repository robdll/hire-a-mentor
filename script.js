// navbar
const menu = document.querySelector('.menu');
const navbar = document.querySelector('.nav-list');

menu.addEventListener('click', () => {
    navbar.classList.toggle('toggle-navmenu');
    menu.classList.toggle('toggle-navmenu');
})
