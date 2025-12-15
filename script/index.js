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

// FORMULARIO EMAIL JS
emailjs.init("NXLW-n0BeYcoaDqI7");


document.querySelector('#contact-form').addEventListener('submit', function (event) {
    event.preventDefault();

    const formData = {
        name: document.querySelector('#name').value,
        email: document.querySelector('#email').value,
        phone: document.querySelector('#phone').value,
        subject: document.querySelector('#subject').value,
        message: document.querySelector('#text').value
    };

    const serviceId = 'service_rg786pf';
    const templateId = 'template_j5ubmze';

    emailjs.send(serviceId, templateId, formData);
});