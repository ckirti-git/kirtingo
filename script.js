// ================= Navbar Hide on Scroll =================
window.addEventListener('scroll', () => {
  const navItems = document.querySelector('.navbar-nav');
  const contactBtn = document.querySelector('.contact-btn');

  if (!navItems || !contactBtn) return; // Prevent errors if elements not found

  if (window.scrollY > 50) {
    navItems.style.opacity = '0';
    navItems.style.pointerEvents = 'none';
    contactBtn.style.opacity = '0';
    contactBtn.style.pointerEvents = 'none';
  } else {
    navItems.style.opacity = '1';
    navItems.style.pointerEvents = 'auto';
    contactBtn.style.opacity = '1';
    contactBtn.style.pointerEvents = 'auto';
  }
});

// ================= DOMContentLoaded =================
document.addEventListener("DOMContentLoaded", () => {

  // ----- Vision Image Slider -----
  const images = document.querySelectorAll('.ux-image img');
  if (images.length) {
    let index = 0;
    images[index].classList.add('active'); // Show first image

    setInterval(() => {
      images[index].classList.remove('active');
      index = (index + 1) % images.length;
      images[index].classList.add('active');
    }, 3000); // Change every 3 seconds
  }

});


// Number Count Animation
const counters = document.querySelectorAll('.count');
const speed = 150; // Adjust speed

const animateCounts = () => {
  counters.forEach(counter => {
    const updateCount = () => {
      const target = +counter.getAttribute('data-target');
      const count = +counter.innerText;

      const increment = target / speed;

      if (count < target) {
        counter.innerText = Math.ceil(count + increment);
        setTimeout(updateCount, 20);
      } else {
        counter.innerText = target;
      }
    };
    updateCount();
  });
};

// Run animation on scroll into view
const section = document.querySelector('.achievements-section');
let animated = false;

window.addEventListener('scroll', () => {
  const sectionTop = section.getBoundingClientRect().top;
  const triggerPoint = window.innerHeight / 1.3;
  if (sectionTop < triggerPoint && !animated) {
    animateCounts();
    animated = true;
  }
});
