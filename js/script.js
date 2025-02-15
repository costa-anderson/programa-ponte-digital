var themeToggleDarkIcon = document.getElementById('theme-toggle-dark-icon');
var themeToggleLightIcon = document.getElementById('theme-toggle-light-icon');

// Change the icons inside the button based on previous settings
if (localStorage.getItem('color-theme') === 'dark' || (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    themeToggleLightIcon.classList.remove('hidden');
} else {
    themeToggleDarkIcon.classList.remove('hidden');
}

var themeToggleBtn = document.getElementById('theme-toggle');

themeToggleBtn.addEventListener('click', function() {

    // toggle icons inside button
    themeToggleDarkIcon.classList.toggle('hidden');
    themeToggleLightIcon.classList.toggle('hidden');

    // if set via local storage previously
    if (localStorage.getItem('color-theme')) {
        if (localStorage.getItem('color-theme') === 'light') {
            document.documentElement.classList.add('dark');
            localStorage.setItem('color-theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('color-theme', 'light');
        }

    // if NOT set via local storage previously
    } else {
        if (document.documentElement.classList.contains('dark')) {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('color-theme', 'light');
        } else {
            document.documentElement.classList.add('dark');
            localStorage.setItem('color-theme', 'dark');
        }
    }
    
});


// identificar qual section o navbar esta
document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".nav-link");

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    navLinks.forEach((link) => {
                        link.classList.remove("text-blue-500", "font-bold");
                        if (link.getAttribute("href") === `#${entry.target.id}`) {
                            link.classList.add("text-blue-500", "font-bold");
                        }
                    });
                }
            });
        },
        { threshold: 0.5 } // Detecta quando pelo menos 50% da seção está visível
    );

    sections.forEach((section) => observer.observe(section));
});

// zoom na imagem ao clicar sobre a galeria
document.addEventListener("DOMContentLoaded", function () {
    const images = document.querySelectorAll(".grid img");
    const modal = document.getElementById("imageModal");
    const modalContent = document.getElementById("modalContent");
    const modalImage = document.getElementById("modalImage");
    const closeModal = document.getElementById("closeModal");

    images.forEach(img => {
        img.addEventListener("click", function () {
            modalImage.src = this.src; // Define a imagem clicada no modal
            modal.classList.remove("hidden"); // Mostra o modal

            // Pequeno delay para Tailwind aplicar a transição corretamente
            setTimeout(() => {
                modal.classList.add("opacity-100"); // Faz o fundo aparecer suavemente
                modalContent.classList.add("scale-100"); // Aplica o zoom suave
            }, 10);
        });
    });

    function close() {
        modal.classList.remove("opacity-100");
        modalContent.classList.remove("scale-100");

        // Aguarda a transição antes de esconder completamente
        setTimeout(() => {
            modal.classList.add("hidden");
        }, 300);
    }

    closeModal.addEventListener("click", close);
    modal.addEventListener("click", function (e) {
        if (e.target === modal) close();
    });
});
