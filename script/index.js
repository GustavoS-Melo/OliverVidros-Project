//MENU HAMBURGUER

const menuBtn = document.getElementById('menu-btn');
const navLinks = document.getElementById('nav-links');

menuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});


//FADE IN SCRIPT

const fadeElements = document.querySelectorAll(".fade-in");

function checkFade() {
    fadeElements.forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
            el.classList.add("show");
        }
    });
}

window.addEventListener("scroll", checkFade);
window.addEventListener("load", checkFade);

// ABRIR CATALOGO
const openCatalogo = document.getElementById('open-catalogo');
const modalCatalogo = document.getElementById('catalogo-modal');
const iframeCatalogo = modalCatalogo.querySelector('iframe');
const closeCatalogo = modalCatalogo.querySelector('.close-catalogo');

openCatalogo.addEventListener('click', () => {
    if (!iframeCatalogo.src) {
        iframeCatalogo.src = './assets/catalogo/Catalogo_Oliver_Vidros.pdf';
    }

    modalCatalogo.classList.add('active');
    document.body.style.overflow = 'hidden';
});

closeCatalogo.addEventListener('click', closeModal);

modalCatalogo.addEventListener('click', (e) => {
    if (e.target === modalCatalogo) {
        closeModal();
    }
});

function closeModal() {
    modalCatalogo.classList.remove('active');
    document.body.style.overflow = '';
}

// Bot para recepção do usuário (codigo vindo do cliente)

(function(d,t) {
    var BASE_URL="https://chat.olivervidros.com.br";
    var g=d.createElement(t),s=d.getElementsByTagName(t)[0];
    g.src=BASE_URL+"/packs/js/sdk.js";
    g.async = true;
    s.parentNode.insertBefore(g,s);
    g.onload=function(){
      window.chatwootSDK.run({
        websiteToken: 'VHDgg9HWjZHBm3WR6fqQaC2W',
        baseUrl: BASE_URL
      })
    }
})(document,"script");