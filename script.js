function toggleMenu() {
    const navMenu = document.querySelector('.nav_menu');
    navMenu.classList.toggle('active');
  }

function toggleTheme() {
    document.body.classList.toggle('dark-mode');
  
    // Change the icon based on the current theme
    const themeToggleBtn = document.querySelector('.theme-toggle');
    if (document.body.classList.contains('dark-mode')) {
      themeToggleBtn.textContent = '☀️'; // Sun icon for light mode
      localStorage.setItem('theme', 'dark');
    } else {
      themeToggleBtn.textContent = '🌙'; // Moon icon for dark mode
      localStorage.setItem('theme', 'light');
    }
  }
  
  window.onload = () => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      document.body.classList.add('dark-mode');
      document.querySelector('.theme-toggle').textContent = '☀️';
    }
  };
  

  // Get the button
const goToTopBtn = document.getElementById("goToTopBtn");

// Show the button when the user scrolls down 100px from the top of the document
window.onscroll = function() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    goToTopBtn.style.display = "block";
  } else {
    goToTopBtn.style.display = "none";
  }
};

// Scroll to the top of the document smoothly
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth" // This will give a smooth scrolling effect
  });
}

// animation of Scroll 
AOS.init();