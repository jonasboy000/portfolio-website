const toggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('header nav');
toggle.addEventListener('click', () => {
  toggle.classList.toggle('open');
  nav.classList.toggle('open');
});