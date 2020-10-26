let burgerImg = document.querySelector('.burger-img'),
    hamburgerList = document.querySelector('.hamburger-list'),
    headerLogo = document.querySelector('.header__logo'),
    menuBtn = document.querySelector('.menu__btn'),
    shadow = document.querySelector('.shadow'),



'use strict'
let disabled = document.querySelectorAll('.disabled');
disabled.forEach(item => {
    item.style.pointerEvents = 'none';
});
document.querySelector('#focus').onclick = () => {
    window.scrollTo(0, 0);
    burger();
}
document.querySelector('#menu__toggle').addEventListener('click', () => {
    burger();
});

//OPEN-CLOSE BURGER MENU
function burger() {
    burgerImg.style.transform = 'rotate(90deg)';
    hamburgerList.classList.toggle('visible');
    menuBtn.style.position = 'fixed';
    headerLogo.style.marginLeft = '-100%';
    shadow.style.display = 'block';
    document.body.style.overflow = 'hidden';

    if (!hamburgerList.classList.contains('visible')) {
        burgerImg.style.transform = 'rotate(0deg)';
        menuBtn.style.position = 'absolute';
        headerLogo.style.marginLeft = '0';
        shadow.style.display = 'none';
        document.body.style.overflow = 'scroll';
    }
}
shadow.onclick = (event) => {

    if (!document.querySelector('.hamburger-menu').contains(event.target)) {
        burger();
    }

}

