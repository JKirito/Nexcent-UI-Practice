// Import our SCSS file so it gets processed
import './main.scss'

// Initialize the design project
console.log('Design project initialized');

// Mobile menu functionality
document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.querySelector('.menu-toggle');
  const navLinkContainer = document.querySelector('.navLinkContainer');
  const navLinks = document.querySelectorAll('.navLinkContainer a');
  
  // Toggle mobile menu when hamburger button is clicked
  if (menuToggle) {
    menuToggle.addEventListener('click', () => {
      navLinkContainer.classList.toggle('mobile-menu-open');
      menuToggle.classList.toggle('active');
      
      // Toggle aria-expanded attribute for accessibility
      const isExpanded = menuToggle.classList.contains('active');
      menuToggle.setAttribute('aria-expanded', isExpanded);
      
      // Toggle body scroll when menu is open
      document.body.style.overflow = isExpanded ? 'hidden' : '';
    });
  }
  
  // Close mobile menu when a link is clicked
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      navLinkContainer.classList.remove('mobile-menu-open');
      menuToggle.classList.remove('active');
      menuToggle.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    });
  });
  
  // Close mobile menu when clicking outside
  document.addEventListener('click', (event) => {
    const isClickInsideNav = event.target.closest('.navContainer');
    
    if (!isClickInsideNav && navLinkContainer.classList.contains('mobile-menu-open')) {
      navLinkContainer.classList.remove('mobile-menu-open');
      menuToggle.classList.remove('active');
      menuToggle.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    }
  });
});
