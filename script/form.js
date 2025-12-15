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