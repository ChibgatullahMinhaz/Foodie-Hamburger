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

// popup outside click
document.addEventListener('click', (event) => {
    const isClickInsideMenu = menu.contains(event.target);
    const isClickOnMenuIcon = menuIcon.contains(event.target);
    
    if (!isClickInsideMenu && !isClickOnMenuIcon && menu.classList.contains('active')) {
        menu.classList.remove('active');
        menuIcon.setAttribute('aria-expanded', 'false'); // Update aria-expanded
    }
});
// pupup

const newsletterButton = document.querySelector('.newsletter-btn');
const newsletterPopup = document.getElementById('newsletterPopup');
const closePopupButton = document.querySelector('.close-popup');
const subscribeBtn = document.querySelector(".subscribe-btn");
const emailInput = document.getElementById("email");


// Show the popup when the button is clicked
newsletterButton.addEventListener('click', () => {
    newsletterPopup.style.display = 'block';
    newsletterPopup.classList.add('show');

    // Check if dark mode is active and apply it to popup
    if (body.classList.contains('dark-mode')) {
        newsletterPopup.classList.add('dark-mode');
    }
});

// Close the popup when the close button is clicked
closePopupButton.addEventListener('click', () => {
    newsletterPopup.style.display = 'none';
    newsletterPopup.classList.remove('dark-mode');
});

subscribeBtn.addEventListener("click", ()=>{
    if ( emailInput.value== "") {
        alert("Please Enter Your Email")

    }else{
        alert("Thanks")
                newsletterPopup.style.display = 'none';

    }

})
