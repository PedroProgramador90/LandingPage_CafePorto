let openBtn = document.getElementById('open-btn');
let menu = document.getElementById('menu-mobile');
let overlay = document.getElementById('overlay-menu')

openBtn.addEventListener('click',() => {
   menu.classList.add('show-menu');
});

menu.addEventListener('click',() => {
   menu.classList.remove('show-menu');
});

overlay.addEventListener('click',() => {
   menu.classList.remove('show-menu');
});