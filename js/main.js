const closeNav = document.querySelector('.main__close');
const openNav = document.querySelector('.main__hamburger');
const logo = document.querySelector('.main__logo');
const nav = document.querySelector('.main__nav');

openNav.addEventListener('click', () => {
    closeNav.style.display = 'inline-block';
    openNav.style.display = 'none';
    logo.style.display = 'none';
    nav.classList.add('main__nav-active');
});

closeNav.addEventListener('click', () => {
    closeNav.style.display = 'none';
    openNav.style.display = 'inline-block';
    logo.style.display = 'inline-block'
    nav.classList.remove('main__nav-active');
});