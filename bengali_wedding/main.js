document.addEventListener('DOMContentLoaded', () => {
  initLoader();
  initNavigation();
  initScrollReveal();
  initCountdown();
  initHeroParallax();
  initCardInteractions();
});

function initLoader() {
  const loader = document.getElementById('loader');
  if (!loader) return;
  setTimeout(() => {
    loader.classList.add('hidden');
    setTimeout(() => {
      document.querySelectorAll('.hero .reveal-up').forEach(el => {
        el.classList.add('revealed');
      });
    }, 250);
  }, 1800);
}

function initNavigation() {
  const nav = document.getElementById('nav');
  const toggle = document.getElementById('navToggle');
  const mobileMenu = document.getElementById('mobileMenu');

  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 80);
  }, { passive: true });

  if (toggle && mobileMenu) {
    toggle.addEventListener('click', () => {
      toggle.classList.toggle('active');
      mobileMenu.classList.toggle('active');
      document.body.style.overflow = mobileMenu.classList.contains('active') ? 'hidden' : '';
    });

    mobileMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        toggle.classList.remove('active');
        mobileMenu.classList.remove('active');
        document.body.style.overflow = '';
      });
    });
  }

  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', e => {
      const target = document.querySelector(anchor.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
}

function initScrollReveal() {
  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
        }
      });
    },
    { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
  );

  document.querySelectorAll('.reveal-up').forEach(el => observer.observe(el));
}

function initCountdown() {
  const weddingDate = new Date('2027-01-24T19:00:00+05:30').getTime();

  function update() {
    const diff = Math.max(0, weddingDate - Date.now());
    const days = document.getElementById('cd-days');
    const hours = document.getElementById('cd-hours');
    const minutes = document.getElementById('cd-minutes');
    const seconds = document.getElementById('cd-seconds');

    if (days) days.textContent = String(Math.floor(diff / 864e5)).padStart(3, '0');
    if (hours) hours.textContent = String(Math.floor((diff % 864e5) / 36e5)).padStart(2, '0');
    if (minutes) minutes.textContent = String(Math.floor((diff % 36e5) / 6e4)).padStart(2, '0');
    if (seconds) seconds.textContent = String(Math.floor((diff % 6e4) / 1e3)).padStart(2, '0');
  }

  update();
  setInterval(update, 1000);
}

function initHeroParallax() {
  const heroContent = document.querySelector('.hero-content');
  const heroBg = document.querySelector('.hero-bg-pattern');
  const corners = document.querySelectorAll('.hero-corner');

  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    const vh = window.innerHeight;

    if (scrollY < vh) {
      const p = scrollY / vh;

      if (heroContent) {
        heroContent.style.transform = `translateY(${p * 80}px)`;
        heroContent.style.opacity = String(Math.max(0, 1 - p * 1.5));
      }

      if (heroBg) {
        heroBg.style.transform = `translateY(${p * 30}px)`;
      }

      corners.forEach(corner => {
        corner.style.opacity = String(Math.max(0, 0.12 - p * 0.2));
      });
    }
  }, { passive: true });
}

function initCardInteractions() {
  document.querySelectorAll('.event-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
      card.style.transition = 'all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
    });
  });

  document.querySelectorAll('.gallery-item').forEach(item => {
    item.addEventListener('mouseenter', () => {
      item.style.transition = 'all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
    });
  });
}
