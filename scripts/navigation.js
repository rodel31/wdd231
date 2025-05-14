const menuButton = document.getElementById('menu-button');
const nav = document.getElementById('primary-nav');

menuButton.addEventListener('click', () => {
  nav.classList.toggle('open');
  menuButton.classList.toggle('open');
});
