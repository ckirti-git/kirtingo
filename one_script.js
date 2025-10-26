// Hide navbar items and contact button on scroll
window.addEventListener('scroll', function() {
  const navbar = document.querySelector('.navbar');
  const navItems = document.querySelector('.navbar-nav');
  const contactBtn = document.querySelector('.contact-btn');

  if (!navItems || !contactBtn) return; // Prevent errors if elements not found

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


// Wait for everything to load before running image and scroll animations
document.addEventListener("DOMContentLoaded", function() {

  // ===== VISION IMAGE SLIDER =====
  const images = document.querySelectorAll('.ux-image img');
  if (images.length > 0) {
    let index = 0;
    images[index].classList.add('active'); // Ensure first image is visible

    setInterval(() => {
      images[index].classList.remove('active');
      index = (index + 1) % images.length;
      images[index].classList.add('active');
    }, 3000); // change every 3 seconds
  }

  // ===== ACHIEVEMENTS FADE-UP ANIMATION =====
  const fadeElements = document.querySelectorAll(".fade-up");
  if (fadeElements.length > 0) {
    const appearOnScroll = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    fadeElements.forEach(el => {
      appearOnScroll.observe(el);
    });
  }

});
