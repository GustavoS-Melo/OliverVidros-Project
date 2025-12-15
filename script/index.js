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

// FORMULARIO EMAIL JS
emailjs.init("NXLW-n0BeYcoaDqI7");

const successScreen = document.querySelector('#success-screen');

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

    emailjs.send(serviceId, templateId, formData).then(() => {
        successScreen.style.display = 'flex';

        setTimeout(() => {
            window.location.href = '../index.html';
        }, 4000)
    })
    .catch(error => {
        console.error(error);
        alert('Erro ao enviar o formulário, por favor atualize a página e tente novamente. Caso o erro persista por favor nos procure através de nossos outros canais de comunicação');
    });
});