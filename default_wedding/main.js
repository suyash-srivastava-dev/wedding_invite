(() => {
  'use strict';

  // ═══════════════════════════════════
  // TRANSLATIONS
  // ═══════════════════════════════════

  const TRANSLATIONS = {
    en: {
      sealHint: 'Tap the seal to open',
      navDay: 'The Day', navCouple: 'The Couple', navEvents: 'Events', navGallery: 'Gallery', navVenue: 'Venue',
      heroInvite: 'You are cordially invited',
      groomName: 'Arjun', brideName: 'Priya',
      heroLocation: 'Jaipur, Rajasthan',
      heroExplore: 'Explore',
      countdownLabel: 'Save the date', countdownTitle: 'The Big Day',
      cdDays: 'Days', cdHours: 'Hours', cdMin: 'Min', cdSec: 'Sec',
      countdownNote: 'With blessings of our families',
      coupleLabel: 'Two souls, one journey', coupleTitle: 'The Couple',
      groomFull: 'Arjun Mehta', groomParents: 'Son of Mr. Rajesh & Mrs. Sunita Mehta',
      groomBio: 'A dreamer with a golden heart, who believes every love story deserves a grand celebration.',
      brideFull: 'Priya Sharma', brideParents: 'Daughter of Mr. Vikram & Mrs. Anjali Sharma',
      brideBio: 'An artist at heart, who paints the world with love, laughter, and infinite grace.',
      eventsLabel: 'Three days of celebration', eventsTitle: 'The Festivities',
      mehndiTag: 'The Art of Love', mehndiName: 'Mehndi',
      mehndiDesc: 'An intimate afternoon of intricate henna artistry, music, and celebration with close family and friends.',
      mehndiDate: 'December 13, 2026', mehndiTime: '4:00 PM onwards', mehndiVenue: 'Mehta Family Residence, Jaipur',
      sangeetTag: 'The Night of Stars', sangeetName: 'Sangeet',
      sangeetDesc: 'An enchanting evening of music, dance performances, and joyous celebrations under the stars.',
      sangeetDate: 'December 14, 2026', sangeetTime: '7:00 PM onwards', sangeetVenue: 'The Royal Ballroom, Taj Jai Mahal Palace',
      weddingTag: 'The Sacred Union', weddingName: 'Wedding',
      weddingDesc: 'The sacred union of two souls, celebrated with traditional Vedic rituals amidst royal splendor.',
      weddingDate: 'December 15, 2026', weddingTime: '10:00 AM — Baraat at 9:00 AM', weddingVenue: 'Samode Palace, Jaipur',
      galleryLabel: 'Captured moments', galleryTitle: 'Gallery',
      galImg1: 'Pre-Wedding', galImg2: 'Mehendi', galImg3: 'Sangeet Night',
      galImg4: 'Haldi Ceremony', galImg5: 'The Vows', galImg6: 'Together Forever',
      venueLabel: 'Where it all happens', venueTitle: 'The Venue',
      venueName: 'Samode Palace',
      venueDesc: 'A 475-year-old royal heritage palace nestled in the Aravalli hills — hand-painted walls, mirror-work halls, and manicured Mughal gardens await.',
      venueDirections: 'Get Directions', venueAddress: 'Village Samode, Tehsil Chomu, Jaipur',
      venueQrLabel: 'Scan for directions',
      footerWaiting: "We can't wait to celebrate with you",
      footerNote: 'Made with love in Jaipur',
    },
    hi: {
      sealHint: 'खोलने के लिए टैप करें',
      navDay: 'शुभ दिन', navCouple: 'दूल्हा-दुल्हन', navEvents: 'कार्यक्रम', navGallery: 'गैलरी', navVenue: 'स्थान',
      heroInvite: 'आप सादर आमंत्रित हैं',
      groomName: 'अर्जुन', brideName: 'प्रिया',
      heroLocation: 'जयपुर, राजस्थान',
      heroExplore: 'देखें',
      countdownLabel: 'तारीख़ याद रखें', countdownTitle: 'शुभ दिन',
      cdDays: 'दिन', cdHours: 'घंटे', cdMin: 'मिनट', cdSec: 'सेकंड',
      countdownNote: 'हमारे परिवारों के आशीर्वाद के साथ',
      coupleLabel: 'दो आत्माएँ, एक सफ़र', coupleTitle: 'दूल्हा-दुल्हन',
      groomFull: 'अर्जुन मेहता', groomParents: 'श्री राजेश एवं श्रीमती सुनीता मेहता के सुपुत्र',
      groomBio: 'सुनहरे दिल का एक सपने देखने वाला, जो मानता है कि हर प्रेम कहानी एक भव्य उत्सव की हक़दार है।',
      brideFull: 'प्रिया शर्मा', brideParents: 'श्री विक्रम एवं श्रीमती अंजलि शर्मा की सुपुत्री',
      brideBio: 'दिल से एक कलाकार, जो दुनिया को प्यार, हँसी और अनंत ख़ूबसूरती से रंगती है।',
      eventsLabel: 'तीन दिन का उत्सव', eventsTitle: 'कार्यक्रम',
      mehndiTag: 'प्रेम की कला', mehndiName: 'मेहंदी',
      mehndiDesc: 'परिवार और करीबी दोस्तों के साथ मेहंदी, संगीत और उत्सव की एक अंतरंग दोपहर।',
      mehndiDate: '13 दिसंबर, 2026', mehndiTime: 'शाम 4:00 बजे से', mehndiVenue: 'मेहता परिवार निवास, जयपुर',
      sangeetTag: 'तारों भरी रात', sangeetName: 'संगीत',
      sangeetDesc: 'तारों के नीचे संगीत, नृत्य प्रदर्शन और आनंदमय उत्सव की एक मनमोहक शाम।',
      sangeetDate: '14 दिसंबर, 2026', sangeetTime: 'शाम 7:00 बजे से', sangeetVenue: 'द रॉयल बॉलरूम, ताज जय महल पैलेस',
      weddingTag: 'पवित्र बंधन', weddingName: 'विवाह',
      weddingDesc: 'दो आत्माओं का पवित्र मिलन, पारंपरिक वैदिक रीतियों के साथ शाही भव्यता में।',
      weddingDate: '15 दिसंबर, 2026', weddingTime: 'सुबह 10:00 बजे — बारात सुबह 9:00 बजे', weddingVenue: 'सामोद पैलेस, जयपुर',
      galleryLabel: 'कैद किए गए पल', galleryTitle: 'गैलरी',
      galImg1: 'प्री-वेडिंग', galImg2: 'मेहंदी', galImg3: 'संगीत की रात',
      galImg4: 'हल्दी', galImg5: 'वचन', galImg6: 'सदा साथ',
      venueLabel: 'जहाँ सब कुछ होगा', venueTitle: 'स्थान',
      venueName: 'सामोद पैलेस',
      venueDesc: 'अरावली की पहाड़ियों में बसा 475 साल पुराना शाही विरासत महल — हाथ से पेंट की गई दीवारें, शीशे की कारीगरी और मुग़ल बागान।',
      venueDirections: 'दिशा-निर्देश', venueAddress: 'गाँव सामोद, तहसील चोमू, जयपुर',
      venueQrLabel: 'दिशा के लिए स्कैन करें',
      footerWaiting: 'हम आपके साथ जश्न मनाने के लिए बेताब हैं',
      footerNote: 'जयपुर से प्यार के साथ बनाया',
    },
    bn: {
      sealHint: 'খুলতে ট্যাপ করুন',
      navDay: 'শুভ দিন', navCouple: 'বর-কনে', navEvents: 'অনুষ্ঠান', navGallery: 'গ্যালারি', navVenue: 'স্থান',
      heroInvite: 'আপনাকে সাদর আমন্ত্রণ জানানো হচ্ছে',
      groomName: 'অর্জুন', brideName: 'প্রিয়া',
      heroLocation: 'জয়পুর, রাজস্থান',
      heroExplore: 'দেখুন',
      countdownLabel: 'তারিখটি মনে রাখুন', countdownTitle: 'শুভ দিন',
      cdDays: 'দিন', cdHours: 'ঘণ্টা', cdMin: 'মিনিট', cdSec: 'সেকেন্ড',
      countdownNote: 'আমাদের পরিবারের আশীর্বাদে',
      coupleLabel: 'দুটি আত্মা, একটি পথ', coupleTitle: 'বর-কনে',
      groomFull: 'অর্জুন মেহতা', groomParents: 'শ্রী রাজেশ ও শ্রীমতী সুনীতা মেহতার পুত্র',
      groomBio: 'সোনার হৃদয়ের একজন স্বপ্নদ্রষ্টা, যিনি বিশ্বাস করেন প্রতিটি প্রেমের গল্প একটি মহান উদযাপনের যোগ্য।',
      brideFull: 'প্রিয়া শর্মা', brideParents: 'শ্রী বিক্রম ও শ্রীমতী অঞ্জলি শর্মার কন্যা',
      brideBio: 'হৃদয়ে একজন শিল্পী, যিনি পৃথিবীকে ভালোবাসা, হাসি আর অসীম সৌন্দর্যে রাঙিয়ে তোলেন।',
      eventsLabel: 'তিন দিনের উৎসব', eventsTitle: 'অনুষ্ঠানমালা',
      mehndiTag: 'ভালোবাসার শিল্প', mehndiName: 'মেহেন্দি',
      mehndiDesc: 'পরিবার ও ঘনিষ্ঠ বন্ধুদের সাথে মেহেন্দি, সঙ্গীত ও উৎসবের একটি আন্তরিক বিকেল।',
      mehndiDate: '১৩ ডিসেম্বর, ২০২৬', mehndiTime: 'বিকেল ৪:০০ টা থেকে', mehndiVenue: 'মেহতা পরিবার নিবাস, জয়পুর',
      sangeetTag: 'তারাভরা রাত', sangeetName: 'সঙ্গীত',
      sangeetDesc: 'তারার নীচে সঙ্গীত, নৃত্য পরিবেশনা ও আনন্দময় উদযাপনের এক মুগ্ধকর সন্ধ্যা।',
      sangeetDate: '১৪ ডিসেম্বর, ২০২৬', sangeetTime: 'সন্ধ্যা ৭:০০ টা থেকে', sangeetVenue: 'দ্য রয়্যাল বলরুম, তাজ জয় মহল প্যালেস',
      weddingTag: 'পবিত্র মিলন', weddingName: 'বিবাহ',
      weddingDesc: 'দুই আত্মার পবিত্র মিলন, ঐতিহ্যবাহী বৈদিক রীতিতে রাজকীয় জাঁকজমকে।',
      weddingDate: '১৫ ডিসেম্বর, ২০২৬', weddingTime: 'সকাল ১০:০০ টা — বরযাত্রী সকাল ৯:০০ টা', weddingVenue: 'সামোদ প্যালেস, জয়পুর',
      galleryLabel: 'ধরে রাখা মুহূর্ত', galleryTitle: 'গ্যালারি',
      galImg1: 'প্রি-ওয়েডিং', galImg2: 'মেহেন্দি', galImg3: 'সঙ্গীতের রাত',
      galImg4: 'হলুদ অনুষ্ঠান', galImg5: 'পবিত্র প্রতিশ্রুতি', galImg6: 'চিরসাথী',
      venueLabel: 'যেখানে সব হবে', venueTitle: 'স্থান',
      venueName: 'সামোদ প্যালেস',
      venueDesc: 'আরাবল্লী পাহাড়ে অবস্থিত ৪৭৫ বছরের পুরনো রাজকীয় ঐতিহ্য প্রাসাদ — হাতে আঁকা দেয়াল, আয়নার কারুকাজ ও মুঘল বাগান।',
      venueDirections: 'দিকনির্দেশ', venueAddress: 'গ্রাম সামোদ, তহসিল চোমু, জয়পুর',
      venueQrLabel: 'দিকনির্দেশের জন্য স্ক্যান করুন',
      footerWaiting: 'আপনার সাথে উদযাপন করতে আমরা অধীর আগ্রহে অপেক্ষা করছি',
      footerNote: 'জয়পুর থেকে ভালোবাসায় তৈরি',
    }
  };

  const LANG_LABELS = { en: 'EN', hi: 'हि', bn: 'বা' };
  let currentLang = 'en';
  let currentTheme = 'modern';

  // ═══ Apply Language ═══
  function applyLanguage(lang) {
    currentLang = lang;
    const strings = TRANSLATIONS[lang];
    if (!strings) return;

    document.documentElement.setAttribute('data-lang', lang);

    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (strings[key]) el.textContent = strings[key];
    });

    const langLabel = document.querySelector('.lang-label');
    if (langLabel) langLabel.textContent = LANG_LABELS[lang];

    document.querySelectorAll('.lang-option').forEach(btn => {
      btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
    });
  }

  // ═══ Theme Toggle ═══
  const THEMES = ['modern', 'indian', 'colorful'];
  const QR_BASE = 'https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=https%3A%2F%2Fmaps.google.com%2F%3Fq%3DSamode%2BPalace%2BJaipur&format=svg';
  const QR_THEMES = {
    modern: QR_BASE + '&bgcolor=141414&color=c8a97d',
    indian: QR_BASE + '&bgcolor=FFFFFF&color=5C1018',
    colorful: QR_BASE + '&bgcolor=FEFCF8&color=7C3AED',
  };

  function toggleTheme() {
    const idx = THEMES.indexOf(currentTheme);
    currentTheme = THEMES[(idx + 1) % THEMES.length];
    document.documentElement.setAttribute('data-theme', currentTheme);

    const qr = document.getElementById('venueQr');
    if (qr) qr.src = QR_THEMES[currentTheme];
  }

  // ═══ Seal Opening ═══
  function initSeal() {
    const sealScreen = document.getElementById('sealScreen');
    const sealButton = document.getElementById('sealButton');
    const invitation = document.getElementById('invitation');
    const nav = document.getElementById('nav');
    const controls = document.getElementById('controls');

    if (!sealScreen || !sealButton) return;

    function openInvitation() {
      sealScreen.classList.add('opened');
      setTimeout(() => {
        invitation.classList.add('visible');
        nav.classList.add('visible');
        controls.classList.add('visible');
        setTimeout(() => {
          document.querySelectorAll('.hero .anim-fade').forEach(el => el.classList.add('show'));
        }, 300);
      }, 400);
    }

    sealButton.addEventListener('click', openInvitation);
    sealButton.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openInvitation(); }
    });
  }

  // ═══ Navigation ═══
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
        if (target) { e.preventDefault(); target.scrollIntoView({ behavior: 'smooth' }); }
      });
    });
  }

  // ═══ Controls: Music, Theme, Language ═══
  function initControls() {
    const musicBtn = document.getElementById('musicToggle');
    const themeBtn = document.getElementById('themeToggle');
    const langBtn = document.getElementById('langToggle');
    const langDropdown = document.getElementById('langDropdown');

    if (musicBtn) {
      let isMuted = true;
      musicBtn.classList.add('muted');
      musicBtn.addEventListener('click', () => {
        isMuted = !isMuted;
        musicBtn.classList.toggle('muted', isMuted);
      });
    }

    if (themeBtn) {
      themeBtn.addEventListener('click', toggleTheme);
    }

    if (langBtn && langDropdown) {
      langBtn.addEventListener('click', e => {
        e.stopPropagation();
        langDropdown.classList.toggle('open');
      });

      langDropdown.querySelectorAll('.lang-option').forEach(btn => {
        btn.addEventListener('click', () => {
          const lang = btn.getAttribute('data-lang');
          applyLanguage(lang);
          langDropdown.classList.remove('open');
        });
      });

      document.addEventListener('click', () => langDropdown.classList.remove('open'));
    }
  }

  // ═══ Scroll Reveal ═══
  function initScrollReveal() {
    const observer = new IntersectionObserver(
      entries => { entries.forEach(entry => { if (entry.isIntersecting) entry.target.classList.add('visible'); }); },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
  }

  // ═══ Countdown ═══
  function initCountdown() {
    const weddingDate = new Date('2026-12-15T10:00:00+05:30').getTime();

    function update() {
      const diff = Math.max(0, weddingDate - Date.now());
      const el = (id) => document.getElementById(id);
      const d = el('cd-days'), h = el('cd-hours'), m = el('cd-minutes'), s = el('cd-seconds');
      if (d) d.textContent = String(Math.floor(diff / 864e5)).padStart(3, '0');
      if (h) h.textContent = String(Math.floor((diff % 864e5) / 36e5)).padStart(2, '0');
      if (m) m.textContent = String(Math.floor((diff % 36e5) / 6e4)).padStart(2, '0');
      if (s) s.textContent = String(Math.floor((diff % 6e4) / 1e3)).padStart(2, '0');
    }

    update();
    setInterval(update, 1000);
  }

  // ═══ Hero Parallax ═══
  function initHeroParallax() {
    const heroContent = document.querySelector('.hero-content');
    const heroPattern = document.querySelector('.hero-pattern');

    window.addEventListener('scroll', () => {
      const scrollY = window.scrollY;
      const vh = window.innerHeight;
      if (scrollY < vh && heroContent) {
        const p = scrollY / vh;
        heroContent.style.transform = `translateY(${p * 70}px)`;
        heroContent.style.opacity = String(Math.max(0, 1 - p * 1.4));
      }
      if (scrollY < vh && heroPattern) {
        heroPattern.style.transform = `translateY(${scrollY * 0.15}px)`;
      }
    }, { passive: true });
  }

  // ═══ Init ═══
  function init() {
    initSeal();
    initNavigation();
    initControls();
    initScrollReveal();
    initCountdown();
    initHeroParallax();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
