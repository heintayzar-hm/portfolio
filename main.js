const hamburgerBtn = document.querySelector('#hamburger-btn');
const crossBtn = document.querySelector('#cross-btn');
const mobileMenu = document.querySelector('#mobile-menu');

const mobileLinks = document.querySelectorAll('.mobile-link');

hamburgerBtn.addEventListener('click', () => {
  mobileMenu.style.display = 'block';
});

crossBtn.addEventListener('click', () => {
  mobileMenu.style.display = 'none';
});

mobileLinks.forEach(
  (link) => {
    link.addEventListener('click', () => {
      mobileMenu.style.display = 'none';
    });
  },
);