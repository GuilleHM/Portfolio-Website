// Select DOM Items
const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const menuNav = document.querySelector('.menu-nav');
const menuBranding = document.querySelector('.menu-branding');
const navItems = document.querySelectorAll('.nav-item');
const smallHeading = document.querySelector('.sm-heading');
const main = document.querySelector('main');
const preFooter = document.querySelector('.pre-footer');
const footer = document.querySelector('footer');


// Set initial state of Menu
let showMenu = false;

menuBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
    if (!showMenu) {
        menuBtn.classList.add('close');
        menu.classList.add('show');
        menuNav.classList.add('show');
        menuBranding.classList.add('show');
        navItems.forEach(item => item.classList.add('show'));
        smallHeading.classList.add('no-bg');
        main.classList.add('hide');
        preFooter.classList.add('hide');
        footer.classList.add('hide');

        // Reset Menu State
        showMenu = true;

    } else {
        menuBtn.classList.remove('close');
        menu.classList.remove('show');
        menuNav.classList.remove('show');
        menuBranding.classList.remove('show');
        navItems.forEach(item => item.classList.remove('show'));
        smallHeading.classList.remove('no-bg');
        main.classList.remove('hide');
        preFooter.classList.remove('hide');
        footer.classList.remove('hide');


        // Reset Menu State
        showMenu = false;

    }
}