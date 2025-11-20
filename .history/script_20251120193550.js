// Mobile menu toggle functionality
function toggleMenu() {
  const navLinks = document.querySelector('.nav-links');
  const menuToggle = document.querySelector('.menu-toggle');
  
  navLinks.classList.toggle('active');
  menuToggle.classList.toggle('active');
}

// Close mobile menu when clicking outside
document.addEventListener('click', function(event) {
  const navLinks = document.querySelector('.nav-links');
  const menuToggle = document.querySelector('.menu-toggle');
  
  if (navLinks && menuToggle && 
      !navLinks.contains(event.target) && 
      !menuToggle.contains(event.target) && 
      navLinks.classList.contains('active')) {
    navLinks.classList.remove('active');
    menuToggle.classList.remove('active');
  }
});

// Handle window resize events
window.addEventListener('resize', function() {
  const navLinks = document.querySelector('.nav-links');
  const menuToggle = document.querySelector('.menu-toggle');
  
  // Close mobile menu if window is resized to desktop size
  if (window.innerWidth > 768 && navLinks && menuToggle) {
    navLinks.classList.remove('active');
    menuToggle.classList.remove('active');
  }
});