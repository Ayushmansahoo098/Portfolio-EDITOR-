// ========================================
// MOBILE MENU TOGGLE
// ========================================
function initMobileMenu() {
  const menuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  const mobileLinks = document.querySelectorAll('.mobile-nav-link');
  
  // Toggle menu on button click
  menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('open');
    mobileMenu.classList.toggle('open');
    document.body.style.overflow = mobileMenu.classList.contains('open') ? 'hidden' : '';
  });
  
  // Close menu when clicking a link
  mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
      menuBtn.classList.remove('open');
      mobileMenu.classList.remove('open');
      document.body.style.overflow = '';
    });
  });
}

// ========================================
// SCROLL PROGRESS BAR
// ========================================
function initProgressBar() {
  const progressBar = document.getElementById('progress-bar');
  const appWrapper = document.querySelector('.app-wrapper');
  
  appWrapper.addEventListener('scroll', () => {
    const scrollTop = appWrapper.scrollTop;
    const scrollHeight = appWrapper.scrollHeight - appWrapper.clientHeight;
    const scrollPercentage = (scrollTop / scrollHeight) * 100;
    
    progressBar.style.width = scrollPercentage + '%';
  });
}

// ========================================
// BACK TO TOP BUTTON
// ========================================
function initBackToTop() {
  const backToTop = document.getElementById('back-to-top');
  const appWrapper = document.querySelector('.app-wrapper');
  
  // Show/hide button based on scroll position
  appWrapper.addEventListener('scroll', () => {
    if (appWrapper.scrollTop > 300) {
      backToTop.classList.add('show');
    } else {
      backToTop.classList.remove('show');
    }
  });
  
  // Scroll to top on click
  backToTop.addEventListener('click', () => {
    appWrapper.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}

// ========================================
// SCROLL REVEAL ANIMATION
// ========================================
function initScrollReveal() {
  const reveals = document.querySelectorAll('.reveal');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        // Stagger the animation
        setTimeout(() => {
          entry.target.classList.add('active');
        }, index * 100);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });
  
  reveals.forEach(el => observer.observe(el));
}

// ========================================
// COUNTER ANIMATION (ABOUT SECTION)
// ========================================
function initCounters() {
  const counters = document.querySelectorAll('.counter');
  let started = false;
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !started) {
        started = true;
        
        counters.forEach(counter => {
          const target = parseFloat(counter.dataset.target);
          const isDecimal = target % 1 !== 0;
          let current = 0;
          const increment = target / 80; // Animation speed
          
          const update = () => {
            current += increment;
            if (current < target) {
              counter.textContent = isDecimal 
                ? current.toFixed(1) 
                : Math.floor(current);
              requestAnimationFrame(update);
            } else {
              counter.textContent = isDecimal 
                ? target.toFixed(1) 
                : target + '+';
            }
          };
          
          update();
        });
      }
    });
  }, { threshold: 0.4 });
  
  const aboutSection = document.getElementById('about');
  if (aboutSection) {
    observer.observe(aboutSection);
  }
}

// ========================================
// INITIALIZE ALL FUNCTIONS
// ========================================
document.addEventListener('DOMContentLoaded', () => {
  initMobileMenu();
  initProgressBar();
  initBackToTop();
  initScrollReveal();
  initCounters();
  
  console.log('Portfolio initialized successfully! 🎉');
});