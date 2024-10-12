const nav = document.querySelector("#header nav");
const toggle = document.querySelectorAll("nav .toggle");

// Exibição do menu
for (const elemento of toggle) {
  elemento.addEventListener("click", () => {
    nav.classList.toggle("show");
  });
}

// Ao clicar em um link, fechar o menu
const links = document.querySelectorAll("#header nav ul a");

console.log(links);
for (const link of links) {
  link.addEventListener("click", () => {
    nav.classList.remove("show");
  });
}

// Adição de efeito sombreado no header
const header = document.querySelector("#header");
const navHeight = header.offsetHeight;

function changeHeaderWhenScroll() {
  if (window.scrollY >= navHeight) {
    header.classList.add("scroll");
  } else {
    header.classList.remove("scroll");
  }
}

// Slider com Swiper
const swiper = new Swiper(".swiper", {
  slidesPerview: 1,
  pagination: {
    el: ".swiper.pagination",
  },
  mousewheel: true,
  keyboard: true,
  breakpoints: {
    767: {
      slidesPerview: 2,
      setWrapperSize: true,
    },
  },
});

// Quando rolar a página, efeitos irem aparecendo
const scrollReveal = ScrollReveal({
  origin: "left",
  distance: "30px",
  duration: 800,
  reset: false,
});

scrollReveal.reveal(
  `#home .image, #home .text,
   #about .image, #about .text,
   #services header, #services .card,
   #testimonials header,
   #contact .text, #contact .links,
   footer .brand, footer .social`,

  {
    interval: 100,
  }
);

// Menu ativo conforme seção da página
const sections = document.querySelectorAll("main section[id]");

function activateMenuAtCurrentSection() {
  const checkpoint = window.pageYOffset + (window.innerHeight / 8) * 4;

  for (const section of sections) {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    const sectionId = section.getAttribute("id");

    const checkpointStart = checkpoint >= sectionTop;
    const checkpointEnd = checkpoint <= sectionTop + sectionHeight;

    if (checkpointStart && checkpointEnd) {
      document
        .querySelector("nav ul li a[href*=" + sectionId + "]")
        .classList.add("active");
    } else {
      document
        .querySelector("nav ul li a[href*=" + sectionId + "]")
        .classList.remove("active");
    }
  }
}

window.addEventListener("scroll", () => {
  changeHeaderWhenScroll();
  activateMenuAtCurrentSection();
});
