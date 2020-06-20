const hamburguer = document.getElementById('hamburguer');
const bar = document.getElementById('bar');
const list = document.getElementById('list');

hamburguer.addEventListener('click', () => {
    bar.classList.toggle('bar--x');
    list.classList.toggle('header__list--open')
});