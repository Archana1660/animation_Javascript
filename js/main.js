//Select DOM elements
const menuBtn = document.querySelector('.menu_btn');
const menu = document.querySelector('.menu');
const menuBranding = document.querySelector('.menu-branding');
const menuNav = document.querySelector('.menu-nav');
const navitems = document.querySelectorAll('.nav-items');

//Set intial state of menu
let showMenu = false;

menuBtn.addEventListener('click', toggleMenu);

function toggleMenu(){
    if(!showMenu){
        menuBtn.classList.add('close');
        menu.classList.add('show');
        menuBranding.classList.add('show');
        menuNav.classList.add('show');
        navitems.forEach(item => item.classList.add('show'));

        //reset menu state

        showMenu = true;
    }else{
        menuBtn.classList.remove('close');
        menu.classList.remove('show');
        menuBranding.classList.remove('show');
        menuNav.classList.remove('show');
        navitems.forEach(item => item.classList.remove('show'));

        //reset menu state

        showMenu = false;
    }
}