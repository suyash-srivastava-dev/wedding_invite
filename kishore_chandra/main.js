(() => {
  'use strict';

  const TRANSLATIONS = {
    en: {
      sealHint: 'Tap the seal to open',
      navDay: 'The Day', navCouple: 'The Couple', navEvents: 'Events', navGallery: 'Gallery', navVenue: 'Venue',
      heroInvite: 'With the blessings of the Almighty and our beloved elders',
      groomName: 'Kishore', brideName: 'Chandra',
      heroLocation: 'Delhi',
      heroExplore: 'Explore',
      countdownLabel: 'Tuesday, 21 April 2026', countdownTitle: 'The Big Day',
      cdDays: 'Days', cdHours: 'Hours', cdMin: 'Min', cdSec: 'Sec',
      countdownNote: 'Smt. Anima & Sri SOMNATH DAS cordially invite you',
      coupleLabel: 'Two souls, one journey', coupleTitle: 'The Couple',
      groomFull: 'Kishore Das', groomParents: 'Beloved son of Smt. Anima & Sri Somnath Das',
      groomBio: 'A dreamer with a golden heart, who believes every love story deserves a grand celebration.',
      brideFull: 'Chandra Haldar', brideParents: 'Beloved daughter of the Haldar Family',
      brideBio: 'An artist at heart, who paints the world with love, laughter, and infinite grace.',
      eventsLabel: 'Celebrations of Love', eventsTitle: 'The Festivities',
      mehndiTag: 'Auspicious Beginnings', mehndiName: 'Mehndi Ceremony',
      mehndiDesc: 'An intimate afternoon of intricate henna artistry, music, and celebration with close family and friends.',
            mehndiDate: 'Tuesday, 21 April 2026', mehndiTime: '9:00 AM', 
      mehndiVenueGroom: 'Home: 14/78 Trilokpuri, Delhi',
      mehndiVenueBride: 'Haldar Niwas, Vaishali Nagar, Jaipur',
      sangeetTag: 'The Night of Stars', sangeetName: 'Sangeet',
      sangeetDesc: 'An enchanting evening of music, dance performances, and joyous celebrations under the stars.',
      sangeetDate: 'Monday, 20 April 2026', sangeetTime: '7:00 PM onwards', 
      sangeetVenueGroom: 'The Royal Ballroom, Park Hyatt, Delhi',
      sangeetVenueBride: 'Samode Palace, Jaipur',
      weddingTag: 'The Sacred Union', weddingName: 'Wedding Ceremony',
      weddingDesc: 'A joyous celebration as we tie the knot. We look forward to celebrating with you!',
      weddingDate: 'Tuesday, 21 April 2026', weddingTime: 'Welcome of Baraat: 8:00 PM', weddingVenue: 'MARINA DREAMS BANQUET, Wazirpur Industrial Area, Ashok Vihar, Delhi - 10052',
      receptionTag: 'A Grand Celebration', receptionName: 'Reception',
      receptionDesc: 'With great joy and happiness, Sri Somnath Das & Smt. Anima Das request the pleasure of your company at the wedding reception of Kishore & Chandra.',
      receptionDate: 'April 23, 2026', receptionTime: '7:00 PM onwards', receptionVenue: 'S.K EASTEND BANQUET, Mayur Vihar Extension, Delhi',
      galleryLabel: 'Captured moments', galleryTitle: 'Gallery',
      galImg1: 'Pre-Wedding', galImg2: 'Mehendi', galImg3: 'Sangeet Night',
      galImg4: 'Mehndi & Haldi', galImg5: 'The Vows', galImg6: 'Together Forever',
      venueLabel: 'Where it all happens', venueTitle: 'The Venue',
      venueName: 'MARINA DREAMS BANQUET',
      venueDesc: 'Wazirpur Industrial Area, Ashok Vihar, Delhi - 10052',
      venueDirections: 'Get Directions', venueAddress: 'Wazirpur Industrial Area, Delhi',
      venueQrLabel: 'Scan for directions',
      footerWaiting: "We look forward to celebrating with you!",
      footerNote: 'Made with love',
    },
    hi: {
      sealHint: 'खोलने के लिए टैप करें',
      navDay: 'शुभ दिन', navCouple: 'दूल्हा-दुल्हन', navEvents: 'कार्यक्रम', navGallery: 'गैलरी', navVenue: 'स्थान',
      heroInvite: 'आप सादर आमंत्रित हैं',
      groomName: 'किशोर', brideName: 'चंद्रा',
      heroLocation: 'दिल्ली',
      heroExplore: 'देखें',
      countdownLabel: 'मंगलवार, 21 अप्रैल 2026', countdownTitle: 'शुभ दिन',
      cdDays: 'दिन', cdHours: 'घंटे', cdMin: 'मिनट', cdSec: 'सेकंड',
      countdownNote: 'श्रीमती अनिमा एवं श्री सोमनाथ दास आपको सादर आमंत्रित करते हैं',
      coupleLabel: 'दो आत्माएँ, एक सफ़र', coupleTitle: 'दूल्हा-दुल्हन',
      groomFull: 'किशोर दास', groomParents: 'श्रीमती अनिमा एवं श्री सोमनाथ दास के सुपुत्र',
      groomBio: 'सुनहरे दिल का एक सपने देखने वाला, जो मानता है कि हर प्रेम कहानी एक भव्य उत्सव की हक़दार है।',
      brideFull: 'चंद्रा हालदार', brideParents: 'हालदार परिवार की सुपुत्री',
      brideBio: 'दिल से एक कलाकार, जो दुनिया को प्यार, हँसी और अनंत ख़ूबसूरती से रंगती है।',
      eventsLabel: 'प्रेम के उत्सव', eventsTitle: 'कार्यक्रम',
      mehndiTag: 'शुभ शुरुआत', mehndiName: 'मेहंदी और हल्दी',
      mehndiDesc: 'परिवार और करीबी दोस्तों के साथ मेहंदी, फूलों और उत्सव की एक अंतरंग दोपहर।',
            mehndiDate: 'मंगलवार, 21 अप्रैल 2026', mehndiTime: 'सुबह 9:00 बजे', 
      mehndiVenueGroom: 'निवास: 14/78 त्रिलोकपुरी, दिल्ली',
      mehndiVenueBride: 'हालदार निवास, वैशाली नगर, जयपुर',
      sangeetTag: 'तारों भरी रात', sangeetName: 'संगीत',
      sangeetDesc: 'तारों के नीचे संगीत, नृत्य प्रदर्शन और आनंदमय उत्सव की एक मनमोहक शाम।',
      sangeetDate: 'सोमवार, 20 अप्रैल 2026', sangeetTime: 'शाम 7:00 बजे से', 
      sangeetVenueGroom: 'द रॉयल बॉलरूम, दिल्ली',
      sangeetVenueBride: 'सामोद पैलेस, जयपुर',
      weddingTag: 'पवित्र बंधन', weddingName: 'विवाह',
      weddingDesc: 'दो आत्माओं का पवित्र मिलन, पारंपरिक रीति-रिवाजों के साथ।',
      weddingDate: 'मंगलवार, 21 अप्रैल 2026', weddingTime: 'बारात का स्वागत: रात 8:00 बजे', weddingVenue: 'मरीना ड्रीम्स बैंक्वेट, वज़ीरपुर, दिल्ली',
      receptionTag: 'एक भव्य उत्सव', receptionName: 'प्रीतिभोज (रिसेप्शन)',
      receptionDesc: 'श्री सोमनाथ दास एवं श्रीमती अनिमा दास आपको विवाह रिसेप्शन में सस्नेह आमंत्रित करते हैं।',
      receptionDate: '23 अप्रैल, 2026', receptionTime: 'शाम 7:00 बजे से', receptionVenue: 'एस.के ईस्टएंड बैंक्वेट, मयूर विहार, दिल्ली',
      galleryLabel: 'कैद किए गए पल', galleryTitle: 'गैलरी',
      galImg1: 'प्री-वेडिंग', galImg2: 'मेहंदी', galImg3: 'संगीत की रात',
      galImg4: 'हल्दी', galImg5: 'वचन', galImg6: 'सदा साथ',
      venueLabel: 'जहाँ सब कुछ होगा', venueTitle: 'स्थान',
      venueName: 'मरीना ड्रीम्स बैंक्वेट',
      venueDesc: 'वज़ीरपुर, अशोक विहार, दिल्ली - 110052',
      venueDirections: 'दिशा-निर्देश', venueAddress: 'वज़ीरपुर, दिल्ली',
      venueQrLabel: 'दिशा के लिए स्कैन करें',
      footerWaiting: 'हम आपके साथ जश्न मनाने के लिए बेताब हैं',
      footerNote: 'Made with ❤️',
    },
    bn: {
      sealHint: 'খুলতে ট্যাপ করুন',
      navDay: 'শুভ দিন', navCouple: 'বর-কনে', navEvents: 'অনুষ্ঠান', navGallery: 'গ্যালারি', navVenue: 'স্থান',
      heroInvite: 'আপনি সাদর আমন্ত্রিত',
      groomName: 'কিশোর', brideName: 'চন্দ্রা',
      heroLocation: 'দিল্লি',
      heroExplore: 'देखুন',
      countdownLabel: 'মঙ্গলবার, ২১ এপ্রিল ২০২৬', countdownTitle: 'শুভ দিন',
      cdDays: 'দিন', cdHours: 'ঘণ্টা', cdMin: 'মিনিট', cdSec: 'সেকেন্ড',
      countdownNote: 'শ্রীমতী অনিমা ও শ্রী সোমনাথ দাস আপনাকে সাদর আমন্ত্রণ জানাচ্ছেন',
      coupleLabel: 'দুটি আত্মা, একটি পথ', coupleTitle: 'বর-কনে',
      groomFull: 'কিশোর দাস', groomParents: 'শ্রীমতী অনিমা ও শ্রী সোমনাথ দাসের পুত্র',
      groomBio: 'সোনার হৃদয়ের একজন স্বপ্নদ্বষ্টা, যিনি বিশ্বাস করেন প্রতিটি প্রেমের গল্প একটি মহান উদযাপনের যোগ্য।',
      brideFull: 'চন্দ্রা হালদার', brideParents: 'হালদার পরিবারের কন্যা',
      brideBio: 'হৃদয়ে একজন শিল্পী, যিনি পৃথিবীকে ভালোবাসা, হাসি আর অসীম সৌন্দর্যে রাঙিয়ে তোলেন।',
      eventsLabel: 'ভালোবাসার উদযাপন', eventsTitle: 'অনুষ্ঠানমালা',
      mehndiTag: 'শুভ সূচনা', mehndiName: 'মেহেন্দি ও হলুদ অনুষ্ঠান',
      mehndiDesc: 'পরিবার ও ঘনিষ্ঠ বন্ধুদের সাথে মেহেন্দি, ফুলের মেলা আর রূপকথার মতো এক সকাল।',
      mehndiDate: 'মঙ্গলবার, ২১ এপ্রিল ২০২৬', mehndiTime: 'সকাল ৯:০০ টা', mehndiVenue: 'বাসভবন: ১৪/৭৮ ত্রিলোকপুরী, দিল্লি',
      sangeetTag: 'তারাভরা রাত', sangeetName: 'সঙ্গীত',
      sangeetDesc: 'তারার নীচে সঙ্গীত, নৃত্য পরিবেশনা ও আনন্দময় উদযাপনের এক মুগ্ধকর সন্ধ্যা।',
      sangeetDate: 'সোমবার, ২০ এপ্রিল ২০২৬', sangeetTime: 'সন্ধ্যা ৭:০০ টা থেকে', sangeetVenue: 'দ্য রয়্যাল বলরুম',
      weddingTag: 'পবিত্র মিলন', weddingName: 'বিবাহ',
      weddingDesc: 'দুই আত্মার পবিত্র মিলন, ঐতিহ্যবাহী বৈদিক রীতিতে রাজকীয় জাঁকজমকে।',
      weddingDate: 'মঙ্গলবার, ২১ এপ্রিল ২০২৬', weddingTime: 'বরযাত্রী বরণ: রাত ৮:০০ টা', weddingVenue: 'মেরিন ড্রীমস ব্যাংকোয়েট, দিল্লি',
      receptionTag: 'এক আনন্দময় উদযাপন', receptionName: 'রিসেপশন',
      receptionDesc: 'শ্রী সোমনাথ দাস ও শ্রীমতি অনিমা দাস আপনাকে বিবাহ রিসেপশনে সাদর আমন্ত্রণ জানাচ্ছেন।',
      receptionDate: '২৩ এপ্রিল, ২০২৬', receptionTime: 'সন্ধ্যা ৭:০০ টা থেকে', receptionVenue: 'এস.কে ইস্টএন্ড ব্যাংকোয়েট, দিল্লি',
      galleryLabel: 'ধরে রাখা মুহূর্ত', galleryTitle: 'গ্যালারি',
      galImg1: 'প্রি-ওয়েডিং', galImg2: 'মেহেন্দি', galImg3: 'সঙ্গীতের রাত',
      galImg4: 'হলুদ অনুষ্ঠান', galImg5: 'পবিত্র প্রতিশ্রুতি', galImg6: 'চিরসাথী',
      venueLabel: 'যেখানে সব হবে', venueTitle: 'স্থান',
      venueName: 'মেরিনা ড্রিমস ব্যাংকোয়েট',
      venueDesc: 'ওয়াজিরপুর ইন্ডাস্ট্রিয়াল এরিয়া, দিল্লি',
      venueDirections: 'দিকনির্দেশ', venueAddress: 'দিল্লি',
      venueQrLabel: 'দিকনির্দেশের জন্য স্ক্যান করুন',
      footerWaiting: 'আপনার সাথে উদযাপন করতে আমরা অধীর আগ্রহে অপেক্ষা করছি',
      footerNote: 'Made with ❤️',
    }
  };

  const LANG_LABELS = { en: 'EN', hi: 'हि', bn: 'বা' };
  let currentLang = 'en';

  const SIDE_CONFIG = {
    groom: {
      en: {
        mehndiVenue: 'Home: 14/78 Trilokpuri, Delhi',
        sangeetVenue: 'The Royal Ballroom, Park Hyatt, Delhi',
        venueName: 'PARK HYATT BALLROOM',
        venueDesc: 'Asset No. 01, Aerocity, New Delhi, 110037',
        venueAddress: 'Aerocity, New Delhi',
        venueMaps: 'https://maps.app.goo.gl/3q6Z1v1V1v1V1v1V1',
      },
      hi: {
        mehndiVenue: 'निवास: 14/78 त्रिलोकपुरी, दिल्ली',
        sangeetVenue: 'द रॉयल बॉलरूम, पार्क हयात, दिल्ली',
        venueName: 'पार्क हयात बॉलरूम',
        venueDesc: 'एरोसिटी, नई दिल्ली, 110037',
        venueAddress: 'एरोसिटी, नई दिल्ली',
      },
      bn: {
        mehndiVenue: 'বাসভবন: ১৪/৭৮ ত্রিলোকপুরী, দিল্লি',
        sangeetVenue: 'দ্য রয়্যাল বলরুম, পার্ক হায়াত, দিল্লি',
        venueName: 'পার্ক হায়াত বলরুম',
        venueDesc: 'অ্যারোসিটি, নিউ দিল্লি, ১১০০৩৭',
        venueAddress: 'নিউ দিল্লি',
      }
    },
    bride: {
      en: {
        mehndiVenue: 'Haldar Niwas, Vaishali Nagar, Jaipur',
        sangeetVenue: 'Samode Palace, Jaipur',
        venueName: 'SAMODE PALACE',
        venueDesc: 'Village Samode, Tehsil Chomu, Jaipur, Rajasthan 303806',
        venueAddress: 'Samode, Jaipur',
        venueMaps: 'https://maps.app.goo.gl/pQo2wiowwueSvJX69',
      },
      hi: {
        mehndiVenue: 'हालदार निवास, वैशाली नगर, जयपुर',
        sangeetVenue: 'सामोद पैलेस, जयपुर',
        venueName: 'सामोद पैलेस',
        venueDesc: 'गाँव सामोद, तहसील चोमू, जयपुर, राजस्थान',
        venueAddress: 'सामोद, जयपुर',
      },
      bn: {
        mehndiVenue: 'হালদার নিবাস, বৈশালী নগর, জয়পুর',
        sangeetVenue: 'সামোদ প্যালেস, জয়পুর',
        venueName: 'সামোদ প্যালেস',
        venueDesc: 'গ্রাম সামোদ, তহসিল চোমু, জয়পুর, রাজস্থান',
        venueAddress: 'জয়পুর',
      }
    }
  };

  const urlParams = new URLSearchParams(window.location.search);
  const currentSide = urlParams.get('side');

  function applyLanguage(lang) {
    currentLang = lang;
    let strings = {...TRANSLATIONS[lang]};
    if (!strings) return;

    if (currentSide && SIDE_CONFIG[currentSide] && SIDE_CONFIG[currentSide][lang]) {
      strings = {...strings, ...SIDE_CONFIG[currentSide][lang]};
    }

    document.documentElement.setAttribute('data-lang', lang);

    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (strings[key]) el.textContent = strings[key];
    });

    const langLabel = document.querySelector('.lang-label');
    if (langLabel) langLabel.textContent = LANG_LABELS[lang];

    // UPDATED FILTERING LOGIC
    if (currentSide) {
      document.querySelectorAll('.event-item').forEach(el => {
        const type = el.getAttribute('data-event-type');
        if (type === 'mehndi' || type === 'sangeet') {
          el.classList.remove('side-filtered-out');
        } else {
          el.classList.add('side-filtered-out');
        }
      });
      // Also potentially hide Wedding/Reception nav links
      document.querySelectorAll('.nav-links a, #mobileMenu a').forEach(a => {
        const href = a.getAttribute('href');
        // Currently we don't have enough refined nav but we could if needed.
      });
    } else {
      // No side parameter: Show all 4 events
      document.querySelectorAll('.event-item').forEach(el => {
        el.classList.remove('side-filtered-out');
      });
    }

    if (currentSide && SIDE_CONFIG[currentSide][lang] && SIDE_CONFIG[currentSide][lang].venueMaps) {
      const mapsLink = document.querySelector('.venue-directions');
      if (mapsLink) mapsLink.setAttribute('href', SIDE_CONFIG[currentSide][lang].venueMaps);
      
      const qrImg = document.getElementById('venueQr');
      if (qrImg) {
        const qrData = encodeURIComponent(SIDE_CONFIG[currentSide][lang].venueMaps);
        qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=${qrData}&format=svg`;
      }
    }

    document.querySelectorAll('.lang-option').forEach(btn => {
      const baseHref = btn.getAttribute('href');
      if (currentSide) {
        btn.setAttribute('href', baseHref.split('?')[0] + '?side=' + currentSide);
      }
      btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
    });
  }

  function initSeal() {
    const sealScreen = document.getElementById('sealScreen');
    const sealButton = document.getElementById('sealButton');
    const invitation = document.getElementById('invitation');
    const nav = document.getElementById('nav');
    const controls = document.getElementById('controls');
    const particlesContainer = document.getElementById('sealParticles');

    if (!sealScreen || !sealButton) return;

    if (particlesContainer) {
      for (let i = 0; i < 15; i++) {
        const p = document.createElement('div');
        p.className = 'seal-particle';
        p.style.left = Math.random() * 100 + '%';
        p.style.top = Math.random() * 100 + '%';
        p.style.animationDelay = Math.random() * 3 + 's';
        p.style.animationDuration = (3 + Math.random() * 2) + 's';
        particlesContainer.appendChild(p);
      }
    }

    function createPetalShower() {
      const container = document.createElement('div');
      container.className = 'petal-container';
      document.body.appendChild(container);

      const petalCount = 50;
      for (let i = 0; i < petalCount; i++) {
        const petal = document.createElement('div');
        petal.className = 'petal';
        petal.style.left = Math.random() * 100 + 'vw';
        petal.style.animationDuration = (Math.random() * 3 + 4) + 's';
        petal.style.animationDelay = (Math.random() * 2) + 's';
        petal.style.setProperty('--sway', (Math.random() * 2 - 1) * 40 + 'px');
        container.appendChild(petal);
      }

      setTimeout(() => container.remove(), 8000);
    }

    function openInvitation() {
      sealScreen.classList.add('opened');
      createPetalShower();
      setTimeout(() => {
        invitation.classList.add('visible');
        nav.classList.add('visible');
        controls.classList.add('visible');
        setTimeout(() => {
          document.querySelectorAll('.hero .anim-fade').forEach(el => el.classList.add('show'));
        }, 300);
      }, 1600);
      
      const audio = document.getElementById('bgMusic');
      if (audio && audio.paused) {
        audio.play().catch(e => console.log('Music play failed:', e));
      }
    }

    sealButton.addEventListener('click', openInvitation);
    sealScreen.addEventListener('click', (e) => {
      if (e.target !== sealButton) openInvitation();
    });
    sealButton.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openInvitation(); }
    });
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
        if (target) { e.preventDefault(); target.scrollIntoView({ behavior: 'smooth' }); }
      });
    });
  }

  function initControls() {
    const langBtn = document.getElementById('langToggle');
    const langDropdown = document.getElementById('langDropdown');
    const audio = document.getElementById('bgMusic');

    if (audio) {
      audio.volume = 0.35;
    }

    if (langBtn && langDropdown) {
      langBtn.addEventListener('click', e => {
        e.stopPropagation();
        langDropdown.classList.toggle('open');
      });

      document.addEventListener('click', () => langDropdown.classList.remove('open'));
    }

    const htmlLang = document.documentElement.getAttribute('data-lang') || 'en';
    applyLanguage(htmlLang);

    document.querySelectorAll('.lang-option').forEach(opt => {
      opt.addEventListener('click', e => {
        const href = opt.getAttribute('href');
        if (href.includes('hindi')) applyLanguage('hi');
        else if (href.includes('bengali')) applyLanguage('bn');
        else applyLanguage('en');
      });
    });
  }

  function initScrollReveal() {
    const observer = new IntersectionObserver(
      entries => { entries.forEach(entry => { if (entry.isIntersecting) entry.target.classList.add('visible'); }); },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
  }

  function initCountdown() {
    const weddingDate = new Date('2026-04-21T20:00:00+05:30').getTime();

    function update() {
      const diff = Math.max(0, weddingDate - Date.now());
      const el = (id) => document.getElementById(id);
      const d = el('cd-days'), h = el('cd-hours'), m = el('cd-minutes'), s = el('cd-seconds');
      if (d) d.textContent = String(Math.floor(diff / 864e5)).padStart(2, '0');
      if (h) h.textContent = String(Math.floor((diff % 864e5) / 36e5)).padStart(2, '0');
      if (m) m.textContent = String(Math.floor((diff % 36e5) / 6e4)).padStart(2, '0');
      if (s) s.textContent = String(Math.floor((diff % 6e4) / 1e3)).padStart(2, '0');
    }

    update();
    setInterval(update, 1000);
  }

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
