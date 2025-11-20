//MENU HAMBURGUER

const menuBtn = document.getElementById('menu-btn');
const navLinks = document.getElementById('nav-links');

menuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});


// CARROSSEL
let count = 1;
document.getElementById("radio-servico1").checked = true;

setInterval( function(){
    nextImage();

}, 5000)

function nextImage(){
    count++;
    if(count>4){
        count=1;
    }

    document.getElementById("radio-servico"+count).checked = true;
}