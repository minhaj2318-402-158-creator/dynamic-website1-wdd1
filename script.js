const header = document.querySelector("header");
const menu = document.querySelector("#menu-icon");
const navbar = document.querySelector(".navbar");

// Sticky header
window.addEventListener("scroll", () => {
    header.classList.toggle("sticky", window.scrollY > 0);
    navbar.classList.remove("open");
});

// Mobile menu toggle
menu.addEventListener("click", () => {
    navbar.classList.toggle("open");
});

/* ===== ScrollReveal ===== */
const sr = ScrollReveal({
    distance: '60px',
    delay: 400,
    duration: 2500,
    reset: false
});

sr.reveal('.home-text', {
    delay: 200,
    origin: 'top'
});

sr.reveal('.feature, .product, .cta, .contact', {
    delay: 200,
    origin: 'top'
});
// Toggle heart filled
document.querySelectorAll('.heart').forEach(item => {
    item.addEventListener('click', () => {
        item.firstElementChild.classList.toggle('ri-heart-fill');
        item.firstElementChild.classList.toggle('ri-heart-line');
    });
});
// Toggle cart filled
document.querySelectorAll('.cart').forEach(item => {
    item.addEventListener('click', () => {
        item.firstElementChild.classList.toggle('ri-shopping-cart-fill');
        item.firstElementChild.classList.toggle('ri-shopping-cart-line');
    });
});