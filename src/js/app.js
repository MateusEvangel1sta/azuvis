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