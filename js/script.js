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







// Lista de imagens
const images = [
    "images/projetos/autonomia digital/20240914091127_IMG_4141.jpg",
"images/projetos/autonomia digital/20240914091208_IMG_4144.jpg",
"images/projetos/autonomia digital/20240914091214_IMG_4145.jpg",
"images/projetos/autonomia digital/20240914091300_IMG_4149.jpg",
"images/projetos/autonomia digital/20240914091528_IMG_4152.jpg",
"images/projetos/autonomia digital/20240914093157_IMG_4195.jpg",
"images/projetos/autonomia digital/20240914093419_IMG_4197.jpg",
"images/projetos/autonomia digital/20240914093431_IMG_4198.jpg",
"images/projetos/autonomia digital/20240914093437_IMG_4199.jpg",
"images/projetos/autonomia digital/20240914093504_IMG_4200.jpg",
"images/projetos/autonomia digital/20240914093507_IMG_4201.jpg",
"images/projetos/autonomia digital/20240914093526_IMG_4202.jpg",
"images/projetos/autonomia digital/20240914093556_IMG_4203.jpg",
"images/projetos/autonomia digital/20240914093632_IMG_4206.jpg",
"images/projetos/autonomia digital/20240914093939_IMG_4221.jpg",
"images/projetos/autonomia digital/20240914093944_IMG_4222.jpg",
"images/projetos/autonomia digital/20240914093959_IMG_4224.jpg",
"images/projetos/autonomia digital/20240914094014_IMG_4225.jpg",
"images/projetos/autonomia digital/20240914094026_IMG_4226.jpg",
"images/projetos/autonomia digital/20240914094032_IMG_4227.jpg",
"images/projetos/autonomia digital/20240914094134_IMG_4229.jpg",
"images/projetos/autonomia digital/20240914094140_IMG_4230.jpg",
"images/projetos/autonomia digital/20240914094142_IMG_4231.jpg",
"images/projetos/autonomia digital/20240914094147_IMG_4232.jpg",
"images/projetos/autonomia digital/20240914094204_IMG_4234.jpg",
"images/projetos/autonomia digital/20240914094225_IMG_4236.jpg",
"images/projetos/autonomia digital/20240914094402_IMG_4240.jpg",
"images/projetos/autonomia digital/20240914094411_IMG_4241.jpg",
"images/projetos/autonomia digital/20240914094419_IMG_4242.jpg",
"images/projetos/autonomia digital/20240914094450_IMG_4243.jpg",
"images/projetos/autonomia digital/20240914094521_IMG_4245.jpg",
"images/projetos/autonomia digital/20240914101300_IMG_4290.jpg",
"images/projetos/autonomia digital/20240914101542_IMG_4295.jpg",
"images/projetos/autonomia digital/20240914101548_IMG_4296.jpg",
"images/projetos/autonomia digital/20240914101630_IMG_4297.jpg",
"images/projetos/autonomia digital/20240914101656_IMG_4298.jpg",
"images/projetos/autonomia digital/20240914101716_IMG_4299.jpg",
"images/projetos/autonomia digital/20240914101720_IMG_4300.jpg",
"images/projetos/autonomia digital/20240914101801_IMG_4302.jpg",
"images/projetos/autonomia digital/20240914101812_IMG_4303.jpg",
"images/projetos/autonomia digital/20240914102230_IMG_4310.jpg",
"images/projetos/autonomia digital/20240914105942_IMG_4330.jpg",
"images/projetos/autonomia digital/20240914110951_IMG_4331.jpg",
"images/projetos/capacitatech/20240914092308_IMG_4169.jpg",
"images/projetos/capacitatech/20240914092500_IMG_4176.jpg",
"images/projetos/capacitatech/20240914092537_IMG_4177.jpg",
"images/projetos/capacitatech/20240914092625_IMG_4182.jpg",
"images/projetos/capacitatech/20240914092630_IMG_4183.jpg",
"images/projetos/capacitatech/20240914092656_IMG_4184.jpg",
"images/projetos/capacitatech/20240914092811_IMG_4187.jpg",
"images/projetos/capacitatech/20240914095606_IMG_4265.jpg",
"images/projetos/capacitatech/20240914095635_IMG_4267.jpg",
"images/projetos/capacitatech/20240914095640_IMG_4269.jpg",
"images/projetos/capacitatech/20240914095656_IMG_4271.jpg",
"images/projetos/capacitatech/20240914095741_IMG_4273.jpg",
"images/projetos/capacitatech/20240914095800_IMG_4274.jpg",
"images/projetos/capacitatech/20240914095818_IMG_4276.jpg",
"images/projetos/capacitatech/20240914095841_IMG_4278.jpg",
"images/projetos/capacitatech/20240914095901_IMG_4279.jpg",
"images/projetos/capacitatech/20240914100022_IMG_4281.jpg",
"images/projetos/capacitatech/20240914100031_IMG_4282.jpg",
"images/projetos/capacitatech/20240914100040_IMG_4284.jpg",
"images/projetos/capacitatech/20240914102732_IMG_4321.jpg",
"images/projetos/capacitatech/20240914115122_IMG_4337.jpg",
"images/projetos/inspiratech/20240914091723_IMG_4156.jpg",
"images/projetos/inspiratech/20240914091735_IMG_4157.jpg",
"images/projetos/inspiratech/20240914091759_IMG_4159.jpg",
"images/projetos/inspiratech/20240914091820_IMG_4160.jpg",
"images/projetos/inspiratech/20240914091959_IMG_4162.jpg",
"images/projetos/inspiratech/20240914092017_IMG_4163.jpg",
"images/projetos/inspiratech/20240914094732_IMG_4248.jpg",
"images/projetos/inspiratech/20240914094756_IMG_4250.jpg",
"images/projetos/inspiratech/20240914094810_IMG_4251.jpg",
"images/projetos/inspiratech/20240914094852_IMG_4253.jpg",
"images/projetos/inspiratech/20240914094903_IMG_4254.jpg",
"images/projetos/inspiratech/20240914095034_IMG_4258.jpg",
"images/projetos/inspiratech/20240914095050_IMG_4259.jpg",
"images/projetos/inspiratech/20240914095147_IMG_4260.jpg",
"images/projetos/inspiratech/20240914095152_IMG_4261.jpg",
"images/projetos/inspiratech/20240914095208_IMG_4262.jpg",
"images/projetos/inspiratech/20240914101026_IMG_4287.jpg",
"images/projetos/inspiratech/20240914102448_IMG_4313.jpg",
"images/projetos/inspiratech/20240914115122_IMG_4337.jpg"
];

const itemsPerPage = 12;
let currentPage = 1;

function renderGallery() {
    const galleryContainer = document.getElementById("galleryContainer");
    galleryContainer.innerHTML = ""; // Limpa antes de renderizar

    const start = (currentPage - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    const currentImages = images.slice(start, end);

    currentImages.forEach(src => {
        const div = document.createElement("div");
        div.innerHTML = `<img class="h-48 w-full object-cover rounded-lg cursor-pointer" src="${src}" alt="">`;
        galleryContainer.appendChild(div);
    });

    // Atualiza paginação
    document.getElementById("pageInfo").innerText = `Página ${currentPage} de ${Math.ceil(images.length / itemsPerPage)}`;
    document.getElementById("prevPage").disabled = currentPage === 1;
    document.getElementById("nextPage").disabled = currentPage === Math.ceil(images.length / itemsPerPage);
}

document.getElementById("prevPage").addEventListener("click", () => {
    if (currentPage > 1) {
        currentPage--;
        renderGallery();
    }
});

document.getElementById("nextPage").addEventListener("click", () => {
    if (currentPage < Math.ceil(images.length / itemsPerPage)) {
        currentPage++;
        renderGallery();
    }
});

renderGallery();