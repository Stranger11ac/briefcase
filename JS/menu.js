const DOM_body = document.body;
const DOM_navbar = document.querySelector("nav .nav_inner");
const hamburger_btn = document.querySelector(".nav_ham_btn");
const nav_layer = document.querySelector(".nav_layer");

const them_switch = document.querySelector('.them_switch');
const switch_item = document.querySelector('.switch_item');

function toggleMenu() {
    DOM_navbar.classList.toggle("menu_open");
    DOM_body.classList.toggle('body_minus');
}

hamburger_btn.addEventListener("click", toggleMenu);

nav_layer.addEventListener("click", toggleMenu);

switch_item.addEventListener("click", ()=>{
    them_switch.classList.toggle('active');
})

