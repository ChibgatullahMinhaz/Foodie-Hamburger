// Initialize AOS (Animate On Scroll)
AOS.init();

const themeToggleButton = document.querySelector('.theme-toggle');
const body = document.body;

// Theme toggle functionality
themeToggleButton.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    themeToggleButton.textContent = body.classList.contains('dark-mode') ? '☀️' : '🌙';
});

// Scroll to Top Button
const goToTopBtn = document.getElementById("goToTopBtn");
window.onscroll = () => {
    goToTopBtn.style.display = (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) ? "block" : "none";
};

goToTopBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});

// Toggle Menu for Mobile
const menuIcon = document.querySelector('.menu-icon');
const menu = document.querySelector('.nav_menu');

// Set initial aria-expanded attribute
menuIcon.setAttribute('aria-expanded', 'false');

menuIcon.addEventListener('click', () => {
    const isActive = menu.classList.toggle('active');
    menuIcon.setAttribute('aria-expanded', isActive);
});

// Close menu on outside click
document.addEventListener('click', (event) => {
    const isClickInsideMenu = menu.contains(event.target);
    const isClickOnMenuIcon = menuIcon.contains(event.target);
    
    if (!isClickInsideMenu && !isClickOnMenuIcon && menu.classList.contains('active')) {
        menu.classList.remove('active');
        menuIcon.setAttribute('aria-expanded', 'false'); // Update aria-expanded
    }
});
