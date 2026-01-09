// CARROSSEL AUTOMÁTICO 
const autoCarousel = document.querySelector('.carousel.auto');
const autoTrack = autoCarousel.querySelector('.carousel-track');
const autoSlides = autoTrack.children;

let autoIndex = 0;

// Função para atualizar o carrossel automático
function updateAutoCarousel() {
    autoTrack.style.transform = `translateX(-${autoIndex * 100}%)`;
}

// Intervalo para trocar o slide a cada 3 segundos
setInterval(() => {
    autoIndex = (autoIndex + 1) % autoSlides.length;  // Avança automaticamente
    updateAutoCarousel();
}, 3000);