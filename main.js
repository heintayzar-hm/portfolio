let hamburgerBtn = document.querySelector('#hamburger-btn');
let crossBtn = document.querySelector('#cross-btn');
let mobileMenu = document.querySelector('#mobile-menu');

let mobileLinks = document.querySelectorAll(".mobile-link");

hamburgerBtn.addEventListener('click', () => {
    mobileMenu.style.display = "block";
})

crossBtn.addEventListener('click', () => {
    mobileMenu.style.display = "none";
})

mobileLinks.forEach(
    (link) => {
        link.addEventListener('click', () => {
            mobileMenu.style.display = "none";
        })
    }
)