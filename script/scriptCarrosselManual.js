// CARROSSEL MANUAL 
const manualCarousel = document.querySelector('.carousel.manual');
const manualTrack = manualCarousel.querySelector('.carousel-track');
const manualSlides = manualTrack.children;

let manualIndex = 0;

// Função para atualizar o carrossel manual
function updateManualCarousel() {
    manualTrack.style.transform = `translateX(-${manualIndex * 100}%)`;
}

// Botão para navegar para o próximo slide
document.querySelector('.manual .next').addEventListener('click', () => {
    manualIndex = (manualIndex + 1) % manualSlides.length;  // Avança para o próximo slide
    updateManualCarousel();
});

// Botão para navegar para o slide anterior
document.querySelector('.manual .prev').addEventListener('click', () => {
    manualIndex = (manualIndex - 1 + manualSlides.length) % manualSlides.length;  // Volta para o slide anterior
    updateManualCarousel();
});
