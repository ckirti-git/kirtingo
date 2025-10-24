window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    const navItems = document.querySelector('.navbar-nav');
    const contactBtn = document.querySelector('.contact-btn');

    if (window.scrollY > 50) {
      // Hide nav items and contact button when scrolling
      navItems.style.opacity = '0';
      navItems.style.pointerEvents = 'none';
      contactBtn.style.opacity = '0';
      contactBtn.style.pointerEvents = 'none';
    } else {
      // Show them again when scrolled back to top
      navItems.style.opacity = '1';
      navItems.style.pointerEvents = 'auto';
      contactBtn.style.opacity = '1';
      contactBtn.style.pointerEvents = 'auto';
    }
  });
  
  //VISION
  // Wait for everything to load
    document.addEventListener("DOMContentLoaded", function() {
      const images = document.querySelectorAll('.ux-image img');
      let index = 0;

      setInterval(() => {
        images[index].classList.remove('active');
        index = (index + 1) % images.length;
        images[index].classList.add('active');
      }, 3000); // change every 3 seconds
    });