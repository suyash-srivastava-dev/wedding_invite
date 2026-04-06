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
      groomFull: 'Kishore Das', groomParents: 'Son of Shri Somnath Das and Smt. Anima Das',
      groomBio: 'A soul who finds poetry in the smallest of moments and beauty in a well thought out plan. He believes that anything worth doing is worth doing with intention, a little bit of art, and the right song playing in the background.',
      brideFull: 'Chandra Haldar', brideParents: 'Daughter of Shri Ratan Haldar and Smt. Deepali Haldar',
      brideBio: 'A woman who loves deeply and lives loudly, equally at home in a kitchen full of aromas as she is in a room full of people she adores. She takes her time with everything she chooses in life and honestly, given how well she chooses, nobody is complaining.',
      storyLabel: 'How it all began', 
      storyTitle: 'Our Story',
      storyP1: '"I was not supposed to stay long that afternoon. One cup of black coffee, a quiet corner of the café, and back to my perfectly planned day. Then she walked in. Big glasses, a smile that somehow filled the room before she even sat down, and a bag so wonderfully overstuffed with chocolates, keychains and little trinkets that it looked like she had been quietly collecting the world, one small piece at a time. I do not know what exactly it was about that moment, but I forgot about leaving. I forgot about the plan entirely.',
      storyP2: 'We talked for three hours that felt like twenty minutes. Somewhere in that conversation we found out that we both love Biryani with an intensity that is slightly unreasonable and completely non-negotiable. When we finally stepped out into the evening, we shared a cab home, sitting in that quiet backseat with the city lights blurring past the windows, neither of us in any hurry to reach our stop. I remember thinking somewhere on that ride that this felt like the beginning of something. I just did not know yet how much.',
      storyP3: 'A few weeks later at the ice skating rink, she slipped and I caught her. Time slowed down just enough in that moment for our eyes to meet and say everything that words could not. That was it for me. And somewhere between that moment and everything that followed, we also somehow ended up at Barbeque Nation celebrating our anniversary. Our fake anniversary. We had invented a date, walked in like a couple who had been married for years, and sat there eating way too much and laughing even more. The waiter wished us and we thanked him with completely straight faces. I think that evening told me everything I needed to know about her and about us.',
      storyP4: 'She is spontaneous and lives fully in every moment. I plan, I organise, I make spreadsheets for things that probably do not need spreadsheets. She makes me forget the plan. I help her find the destination. Together we dance like fools when no one is watching, eat like there is no tomorrow, and have very seriously agreed that Biryani counts as a love language. We are opposites who make perfect, beautiful sense of each other. And when we both knew this was it, we did what felt right. We brought our families into the same room. We had both quietly set it up, each of us nudging our parents toward that one evening without making it feel like a big thing, and somehow it was the easiest conversation anyone had ever had. Our families sat together, laughed together, and got along like they had known each other for years. We looked at each other across the room that evening and understood immediately why. Our parents are just carbon copies of us. Turns out, the chaos and the calm run in the family.',
      storyP5: 'And now, we are getting married. For real this time. No fake anniversaries. I still cannot believe I get to say that.”',
      familiesLabel: 'The roots of our love', familiesTitle: 'The Families',
      dasFamilyDesc: 'The Das family carries a legacy rooted in simplicity, strength, and deep cultural values. Known for their warmth and grounded nature, they believe in growing together while staying connected to their traditions. Every celebration in the Das household is filled with laughter, togetherness, and a sense of belonging—whether its sharing stories over a meal or coming together during festivals like Durga Puja. They value respect, resilience, and relationships, building a home where love is expressed not just in words, but in everyday actions',
      haldarFamilyDesc: 'The Haldar family is a beautiful blend of grace, tradition, and modern outlook. Known for their warmth and welcoming spirit, they embrace life with joy and elegance.Their home is one where traditions are cherished, yet individuality is celebrated. From festive gatherings to quiet moments of togetherness, the Haldar family reflects a deep sense of unity and affection. They believe in nurturing bonds that last a lifetime—where every relationship is built on trust, respect, and heartfelt connection',
      eventsLabel: 'Celebrations of Love', eventsTitle: 'The Festivities',
      sangeetTag: 'The Night of Stars', sangeetName: 'Mehndi & Sangeet',
      sangeetDate: 'Monday, 20 April 2026', sangeetTime: '7:00 PM',
      sangeetVenueBride: '1722/17 gali no. 22/1 D-block shukla colony Mukundpur,  Delhi-110042', 
      sangeetVenueGroom: '14/78 Trilokpuri, Delhi-110091',
      baraatTag: 'The Grand Procession', baraatName: 'Baraat Departure',
      baraatDate: 'Tuesday, 21 April 2026', baraatTime: '7:00 PM', baraatVenue: 'House no. 14/78 Trilokpuri, Delhi-110091',
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
      footerNote: 'Made with ❤️ love',
    },
    hi: {
      sealHint: 'खोलने के लिए टैप करें',
      navDay: 'शुभ दिन', navCouple: 'दूल्हा-दुल्हन', navEvents: 'कार्यक्रम', navGallery: 'ग্যালরী', navVenue: 'स्थान',
      heroInvite: 'आप सादर आमंत्रित हैं',
      groomName: 'किशोर', brideName: 'चंद्रा',
      heroLocation: 'दिल्ली',
      heroExplore: 'देखें',
      countdownLabel: 'मंगलवार, 21 अप्रैल 2026', countdownTitle: 'शुभ दिन',
      cdDays: 'दिन', cdHours: 'घंटे', cdMin: 'मिनट', cdSec: 'सेकंड',
      countdownNote: 'श्रीमती अनिमा एवं श्री सोमनाथ दास आपको सादर आमंत्रित करते हैं',
      coupleLabel: 'दो आत्माएँ, एक सफ़र', coupleTitle: 'दूल्हा-दुल्हन',
      groomFull: 'किशोर दास', groomParents: 'श्री सोमनाथ दास एवं श्रीमती अनिमा दास के सुपुत्र',
      groomBio: 'ऐसा व्यक्ति जो छोटी-छोटी बातों में कविता और हर योजना में सुंदरता ढूंढ लेता है। उनका मानना है कि करने योग्य कोई भी काम पूरे मन और कलात्मकता के साथ किया जाना चाहिए।',
      brideFull: 'चंद्रा हालदार', brideParents: 'श्री रतन हालदार एवं श्रीमती दीपाली हालदार की सुपुत्री',
      brideBio: 'ऐसी महिला जो गहराई से प्रेम करती है और उन्मुक्त होकर जीती है। वह जीवन में जो कुछ भी चुनती है, उसके लिए पूरा समय लेती है, और पूरी शिদ্দত के साथ उसे निभाती है।',
      storyLabel: 'शुरुआत कैसे हुई', 
      storyTitle: 'हमारी कहानी',
      storyP1: '“उस दोपहर मेरा ज्यादा देर रुकने का इरादा नहीं था। बस एक कप ब्लैक कॉफी और अपने दिन की योजनाओं में वापस। तभी वह अंदर आई। बड़े चश्मे, एक ऐसी मुस्कान जिसने बैठने से पहले ही कमरे को भर दिया, और एक बैग जो चॉकलेट और चाबियों के गुच्छों से भरा हुआ था।”',
      storyP2: '“मुझे नहीं पता कि उस पल में ऐसा क्या था, पर मैं जाना भूल गया। पूरी योजना ही भूल गया। हमने तीन घंटे तक बात की जो सिर्फ बीस मिनट जैसा लगा। उसी बातचीत के दौरान हमें पता चला कि हम दोनों को बिरयानी से एक अलग ही लगाव है।”',
      storyP3: '“कुछ हफ़्तों बाद आइस स्केटिंग रिंक पर, वह फिसली और मैंने उसे संभाल लिया। उस पल में वक्त जैसे रुक गया। वही मेरे लिए वो पल था। और उसके बाद, हमने अपनी फर्जी एनिवर्सरी भी मनाई। हमने एक तारीख चुनी और ऐसे पहुंचे जैसे बरसों से साथ हों।”',
      storyP4: '“वह सहज है और हर पल को जीती है। मैं योजना बनाता हूँ, स्प्रेडशीट्स बनाता हूँ। वह मुझे योजना भूलना सिखाती है। मैं उसे मंजिल ढूंढने में मदद करता हूँ। साथ में हम पागलों की तरह नाचते हैं और बिरयानी को अपनी प्रेम भाषा मानते हैं।”',
      familiesLabel: 'हमारे प्रेम की जड़ें', familiesTitle: 'परिवार',
      dasFamilyDesc: 'दास परिवार साদगी, शक्ति और गहरे सांस्कृतिक मूल्यों में विश्वास रखता है। अपनी गर्मजोशी के लिए जाने जाने वाले, वे अपनी परंपराओं से जुड़े रहकर साथ बढ़ने में विश्वास करते हैं।',
      haldarFamilyDesc: 'हालदार परिवार शालीनता, परंपरा और आधुनिक दृष्टिकोण का एक सुंदर मिश्रण है। वे हर रिश्ते को विश्वास और सम्मान के साथ संजोते हैं।',
      eventsLabel: 'प्रेम के उत्सव', eventsTitle: 'कार्यक्रम',
      sangeetTag: 'तारों भरी रात', sangeetName: 'मेहंदी और संगीत',
      baraatTag: 'शाही बारात', baraatName: 'बारात प्रस्थान',
      baraatDate: 'मंगलवार, 21 अप्रैल 2026', baraatTime: 'शाम 4:00 बजे', baraatVenue: '14/78 त्रिलोकपुरी, दिल्ली',
      weddingTag: 'पवित्र बंधन', weddingName: 'विवाह',
      weddingDesc: 'दो आत्माओं का पवित्र मिलन, पारंपरिक रीति-रिवाजों के साथ।',
      weddingDate: 'मंगलवार, 21 अप्रैल 2026', weddingTime: 'बारात का स्वागत: रात 8:00 बजे', weddingVenue: 'मरीना ड्रीम्स बैंक्वेट, वज़ीरपुर, दिल्ली',
      receptionTag: 'एक भव्य उत्सव', receptionName: 'प्रीतिभोज (रिसेप्शन)',
      receptionDesc: 'श्री सोमनाथ दास एवं श्रीमती अनिमा दास आपको विवाह रिसेप्शन में सस्नेह आमंत्रित करते हैं।',
      receptionDate: '23 अप्रैल, 2026', receptionTime: 'शाम 7:00 बजे से', receptionVenue: 'एस.के ईस्टएंड बैंक्वेट, मयুর विहार, दिल्ली',
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
      heroExplore: 'দেখুন',
      countdownLabel: 'মঙ্গলবার, ২১ এপ্রিল ২০২৬', countdownTitle: 'শুভ দিন',
      cdDays: 'দিন', cdHours: 'ঘণ্টা', cdMin: 'মিনিট', cdSec: 'সেকেন্ড',
      countdownNote: 'শ্রীমতী অনিমা ও শ্রী সোমনাথ দাস আপনাকে সাদর আমন্ত্রণ জানাচ্ছেন',
      coupleLabel: 'দুটি আত্মা, একটি পথ', coupleTitle: 'বর-কনে',
      groomFull: 'কিশোর দাস', groomParents: 'শ্রী সোমনাথ দাস ও শ্রীমতী অনিমা দাসের পুত্র',
      groomBio: 'একজন মানুষ যিনি মুহূর্তের মধ্যে কবিতা এবং প্রতিটি পরিকল্পনার মধ্যে সৌন্দর্য খুঁজে পান। তিনি বিশ্বাস করেন যে কোনও কাজ করার যোগ্য হলে তা নিষ্ঠা ও শিল্পের সাথে করা উচিত।',
      brideFull: 'চন্দ্রা হালদার', brideParents: 'শ্রী রতন হালদার ও শ্রীমতী দীপালী হালদারের কন্যা',
      brideBio: 'এমন একজন নারী যিনি গভীরভাবে ভালোবাসেন এবং প্রাণখুলে বাঁচেন। তিনি জীবনের প্রতিটি পছন্দ নিয়ে সময় নেন এবং সেই পছন্দগুলো নিখুঁত হয়।',
      storyLabel: 'যেভাবে সব শুরু হয়েছিল', 
      storyTitle: 'আমাদের গল্প',
      storyP1: '“সেদিন বিকেলে বেশি সময় কাটানোর ইচ্ছা ছিল না। শুধু এক কাপ কফি আর আমার চেনা রুটিনে ফিরে যাওয়া। ঠিক তখনই সে এল। বড় চশমা, একটা হাসি যা বসার আগেই ঘরটাকে ভরিয়ে দিল।”',
      storyP2: '“আমি জানি না ঠিক কি ছিল সেই মুহূর্তে, কিন্তু আমি ফিরে যাওয়ার কথা ভুলে গেলাম। পুরো পরিকল্পনাটাই ভুলে গেলাম। আমরা তিন ঘণ্টা কথা বললাম যা মাত্র কুড়ি মিনিট মনে হচ্ছিল। সেই কথাতেই জানলাম আমরা দুজনেই বিরিয়ানি খুব ভালোবাসি।”',
      storyP3: '“কয়েক সপ্তাহ পরে আইস স্কেটিং রিঙ্কে সে পিছলে যাচ্ছিল আর আমি তাকে ধরে ফেললাম। সময় যেন থমকে গেল। সেই মুহূর্তেই আমি বুঝেছিলাম এটাই সেই মানুষটা। তারপর আমরা আমাদের সেই ভুয়া বিবাহবার্ষিকীও পালন করি।”',
      storyP4: '“সে খুব সহজ এবং প্রতিটি মুহূর্তকে প্রাণভরে বাঁচে। আমি পরিকল্পনা করি, স্প্রেডশিট বানাই। সে আমাকে সব ভুলে থাকতে শেখায়। আমি তাকে গন্তব্য খুঁজে পেতে সাহায্য করি। আমরা বিরিয়ানিকেই আমাদের প্রেমের ভাষা মনে করি।”',
      familiesLabel: 'আমাদের ভালোবাসার শিকড়', familiesTitle: 'পরিবারদ্বয়',
      dasFamilyDesc: 'দাস পরিবার সরলতা, শক্তি এবং গভীর সাংস্কৃতিক ঐতিহ্যে বিশ্বাসী। তারা নিজেদের ঐতিহ্যকে আঁকড়ে ধরে একসাথে এগিয়ে চলায় বিশ্বাস করেন।',
      haldarFamilyDesc: 'হালদার পরিবার আভিজাত্য, ঐতিহ্য এবং আধুনিকতার এক সুন্দর মিশেল। তারা প্রতিটি সম্পর্ককে বিশ্বাস ও সম্মানের সাথে গড়ে তোলেন।',
      eventsLabel: 'ভালোবাসার উদযাপন', eventsTitle: 'অনুষ্ঠানমালা',
      sangeetTag: 'তারাভরা রাত', sangeetName: 'মেহেন্দি ও সঙ্গীত',
      baraatTag: 'রাজকীয় বরযাত্রী', baraatName: 'বরযাত্রা প্রস্থান',
      baraatDate: 'মঙ্গলবার, ২১ এপ্রিল ২০২৬', baraatTime: 'বিকাল ৪:০০ টা', baraatVenue: '১৪/৭৮ ত্রিলোকপুরী, দিল্লি',
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

    if (currentSide) {
      document.querySelectorAll('.event-item').forEach(el => {
        const type = el.getAttribute('data-event-type');
        if (type === 'mehndi' || type === 'sangeet' || type === 'pre-wedding') {
          el.classList.remove('side-filtered-out');
        } else {
          el.classList.add('side-filtered-out');
        }
      });
    } else {
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

  function initHeroAnimations() {
    const heroParticles = document.getElementById('heroParticles');
    if (!heroParticles) return;

    for (let i = 0; i < 25; i++) {
      const p = document.createElement('div');
      p.className = 'particle';
      const size = Math.random() * 6 + 4;
      p.style.width = size + 'px';
      p.style.height = size + 'px';
      p.style.left = Math.random() * 100 + '%';
      p.style.animationDuration = (Math.random() * 8 + 8) + 's';
      p.style.animationDelay = (Math.random() * 10) + 's';
      heroParticles.appendChild(p);
    }
  }

  function initLightbox() {
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = lightbox?.querySelector('.lightbox-image');
    const lightboxCaption = lightbox?.querySelector('.lightbox-caption');
    const closeBtn = lightbox?.querySelector('.lightbox-close');
    const galleryItems = document.querySelectorAll('.gallery-item');

    if (!lightbox || !lightboxImg) return;

    galleryItems.forEach(item => {
      item.addEventListener('click', () => {
        const img = item.querySelector('img');
        const caption = item.querySelector('.gallery-hover span')?.textContent;
        if (img) {
          lightboxImg.src = img.src;
          if (lightboxCaption) lightboxCaption.textContent = caption || '';
          lightbox.classList.add('active');
          document.body.style.overflow = 'hidden';
        }
      });
    });

    const closeLightbox = () => {
      lightbox.classList.remove('active');
      document.body.style.overflow = '';
      setTimeout(() => {
        if (lightboxImg) lightboxImg.src = '';
      }, 500);
    };

    closeBtn?.addEventListener('click', (e) => {
      e.stopPropagation();
      closeLightbox();
    });

    lightbox.addEventListener('click', closeLightbox);
    
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && lightbox.classList.contains('active')) {
        closeLightbox();
      }
    });
  }

  function init() {
    initSeal();
    initNavigation();
    initControls();
    initScrollReveal();
    initCountdown();
    initHeroParallax();
    initHeroAnimations();
    initLightbox();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
