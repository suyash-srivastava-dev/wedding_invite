(() => {
  'use strict';

  // ── Scroll Reveal Logic ──
  function initScrollReveal() {
    const revealElements = document.querySelectorAll('.reveal');
    
    const observerOptions = {
      threshold: 0.15,
      rootMargin: '0px 0px -50px 0px'
    };

    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          // Once animated, we can stop observing this element
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    revealElements.forEach(el => revealObserver.observe(el));
  }

  // ── Navigation Behavior ──
  function initNavigation() {
    const nav = document.querySelector('.showcase-nav');
    
    function updateNav() {
      if (window.scrollY > 50) {
        nav.classList.add('scrolled');
        // If we want to change padding or background on scroll
        nav.style.padding = '12px 0';
        nav.style.background = 'rgba(252, 251, 249, 0.95)';
      } else {
        nav.classList.remove('scrolled');
        nav.style.padding = '20px 0';
        nav.style.background = 'rgba(252, 251, 249, 0.85)';
      }
    }

    window.addEventListener('scroll', updateNav, { passive: true });
    updateNav(); // Initial check

    // Smooth scroll for internal links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          e.preventDefault();
          const navHeight = nav.offsetHeight;
          const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - navHeight;
          
          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
          });
        }
      });
    });
  }

  // ── Asset Preloading (Optional) ──
  function preloadHero() {
    const hero = document.querySelector('.lp-hero');
    if (hero) {
      const bgUrl = getComputedStyle(hero).backgroundImage.replace(/url\((['"])?(.*?)\1\)/, '$2');
      if (bgUrl && bgUrl !== 'none') {
        const img = new Image();
        img.src = bgUrl;
      }
    }
  }

  // ── Initialize ──
  function init() {
    initScrollReveal();
    initNavigation();
    preloadHero();
    
    // Log for debug
    console.log('Digital Vows Main Website Initialized');
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
