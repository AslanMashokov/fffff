const burgerMenu = document.querySelector('.burger-menu');
const menu = document.querySelector('.header__nav');
burgerMenu.addEventListener('click', function () {
    this.classList.toggle('active');
    menu.classList.toggle('active');
});