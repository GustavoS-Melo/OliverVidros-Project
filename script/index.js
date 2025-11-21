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
