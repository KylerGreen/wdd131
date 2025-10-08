const menuBtn = document.querySelector('.menu-btn');
const nav = document.querySelector('nav');


menuBtn.addEventListener('click', Hide) 

function Hide(){
    menuBtn.classList.toggle('change');
    nav.classList.toggle('hide');
}