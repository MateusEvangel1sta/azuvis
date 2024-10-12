const nav = document.querySelector('#header nav');
const toggle = document.querySelectorAll('nav .toggle');

// Exibição do menu
for (const elemento of toggle) {
  elemento.addEventListener('click', () => {
    nav.classList.toggle('show');
  });
}

// Ao clicar em um link, fechar o menu
const links = document.querySelectorAll('#header nav ul a');

console.log(links);
for (const link of links) {
  link.addEventListener('click', () => {
    nav.classList.remove('show');
  });
}


// Slider com Swiper
const swiper = new Swiper('.swiper', {
  slidesPerview: 1,
  pagination: {
    el: '.swiper.pagination'
  },
  mousewheel: true,
  keyboard: true,
  breakpoints: {
    767: {
      slidesPerview: 2,
      setWrapperSize: true
    }
  }
});
