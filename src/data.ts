import { PortfolioItem, ServiceDetail, PricePackage, Testimonial, FAQItem, StudioStats, SkillItem } from './types';

export const STUDIO_STATS: StudioStats = {
  experienceYears: 7, // 4 apprentice + 3 years professional
  projectsCompleted: 200,
  happyClients: 150,
  awardsWon: 12
};

export const SKILLS_LIST: SkillItem[] = [
  { name: 'Wedding Narrative & Timing', level: 95 },
  { name: 'Studio & Environmental Lighting', level: 90 },
  { name: 'Commercial Branding & Direction', level: 88 },
  { name: 'High-Fidelity Retouching', level: 92 },
  { name: 'Portraiture & Wardrobe Consultation', level: 85 },
  { name: 'Live Event Coverage', level: 94 }
];

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  // Wedding
  {
    id: 'w1',
    title: 'A Wedding Tale — Eternal Vows',
    category: 'wedding',
    date: 'January 2020',
    imageUrl: '/wedding/DSC_0521.jpg',
    relatedImages: [
      '/wedding/DSC_0521.jpg',
      '/wedding/DSC_0528.jpg',
      '/wedding/DSC_0594.jpg',
      '/wedding/DSC_0601.jpg'
    ],
    description: 'A classic minimal couple edit capturing pure connection during the golden hour.',
    featured: true
  },
  {
    id: 'w2',
    title: 'A Wedding Tale — The Tender Glance',
    category: 'wedding',
    date: 'January 2020',
    imageUrl: '/wedding/DSC_0691.jpg',
    relatedImages: [
      '/wedding/DSC_0691.jpg',
      '/wedding/DSC_0710.jpg',
      '/wedding/DSC_0820-1.jpg',
      '/wedding/DSC_0901.jpg'
    ],
    description: 'Unrehearsed emotional reactions framing the couples celebratory entrance.'
  },
  {
    id: 'w3',
    title: 'Wedding Glow — Details of Preparation',
    category: 'wedding',
    date: 'June 2023',
    imageUrl: '/wedding/Jennifer-and-King_24.jpg',
    relatedImages: [
      '/wedding/Jennifer-and-King_24.jpg',
      '/wedding/Jennifer-and-King_27.jpg',
      '/wedding/Jennifer-and-King_29.jpg',
      '/wedding/Jennifer-and-King_35.jpg'
    ],
    description: 'Fine-art editorial preview displaying standard lace details, jewelry, and calm poise.'
  },
  {
    id: 'w4',
    title: 'Grand Ballroom Celebration',
    category: 'wedding',
    date: 'November 2024',
    imageUrl: '/wedding/SINO4215.jpg',
    relatedImages: [
      '/wedding/SINO4215.jpg',
      '/wedding/SINO4227.jpg',
      '/wedding/SINO4232.jpg',
      '/wedding/SINO4254.jpg'
    ],
    description: 'Breathtaking floral styling and standard seating structures in high-contrast candle lighting.'
  },

  // Portraits
  {
    id: 'p1',
    title: 'Face of Resilience — Studio Portrait',
    category: 'portrait',
    date: 'March 2024',
    imageUrl: '/portrait/DSC01163.jpg',
    relatedImages: [
      '/portrait/DSC01163.jpg',
      '/portrait/DSC01151.jpg',
      '/portrait/DSC01143.jpg',
      '/portrait/DSC01129.jpg'
    ],
    description: 'The iconic portrait exhibiting powerful facial features, minimal background, and masterful key light.',
    featured: true
  },
  {
    id: 'p2',
    title: 'Shadow play — Silhouette Study',
    category: 'portrait',
    date: 'September 2023',
    imageUrl: '/portrait/_DEL2067BW.jpg',
    relatedImages: [
      '/portrait/_DEL2067BW.jpg',
      '/portrait/_DEL2042.JPG',
      '/portrait/DSC_1542.jpg',
      '/portrait/DSC_1546.jpg'
    ],
    description: 'Exploring sharp modern contrasts, side lighting, and character depth in black and white.'
  },
  {
    id: 'p3',
    title: 'Calm Intensity',
    category: 'portrait',
    date: 'February 2024',
    imageUrl: '/portrait/DSC_0334.jpg',
    relatedImages: [
      '/portrait/DSC_0334.jpg',
      '/portrait/DSC_0335.jpg',
      '/portrait/DSC_0337.jpg',
      '/portrait/DSC_0338.jpg'
    ],
    description: 'Minimal studio headshot showing strong features with absolute focus.'
  },
  {
    id: 'p4',
    title: 'The Modern Idealist',
    category: 'portrait',
    date: 'July 2024',
    imageUrl: '/portrait/Becky_2.JPG',
    relatedImages: [
      '/portrait/Becky_2.JPG',
      '/portrait/Becky_4.JPG',
      '/portrait/Zinta_5.jpg',
      '/portrait/Zinta_6.jpg'
    ],
    description: 'Beautiful, high-contrast female model showcasing professional studio lighting.'
  },

  // Model & Fashion
  {
    id: 'm1',
    title: 'Top Abuja Fashion Designer Editorial',
    category: 'model',
    date: 'January 2025',
    imageUrl: '/model/DSC05581.jpg',
    relatedImages: [
      '/model/DSC05581.jpg',
      '/model/DSC05661.jpg',
      '/model/DSC05670.jpg',
      '/model/DSC05689.jpg'
    ],
    description: 'Vibrant modern textiles highlighted on a rich studio backdrop for commercial use.',
    featured: true
  },
  {
    id: 'm2',
    title: 'Asymmetry & Haute Couture',
    category: 'model',
    date: 'January 2025',
    imageUrl: '/model/DSC06101.jpg',
    relatedImages: [
      '/model/DSC06101.jpg',
      '/model/DSC06437.jpg',
      '/model/DSC06482.jpg',
      '/model/DSC06533.jpg'
    ],
    description: 'Crisp detailing of textured garments in an high-fashion editorial editorial frame.'
  },
  {
    id: 'm3',
    title: 'Contrast Editorial Study',
    category: 'model',
    date: 'October 2024',
    imageUrl: '/model/Jemima.jpg',
    relatedImages: [
      '/model/Jemima.jpg',
      '/model/Jemima_2.jpg',
      '/model/IFE_0049.JPG',
      '/model/IFE_0066.jpg'
    ],
    description: 'A striking profile photo designed for promotional banners and premium catalogs.'
  },

  // Corporate Headshots
  {
    id: 'c1',
    title: 'CEO Executive Portrait — Abuja Tech Hub',
    category: 'corporate',
    date: 'December 2024',
    imageUrl: '/coorporate/DSC01153.jpg',
    relatedImages: [
      '/coorporate/DSC01153.jpg',
      '/coorporate/DSC01159.jpg',
      '/coorporate/DSC_0309.jpg',
      '/coorporate/IMG_6149.jpg'
    ],
    description: 'A polished, confident business profile showcasing clean background styling and perfect lighting.',
    featured: true
  },
  {
    id: 'c2',
    title: 'Environmental Portrait — Lead Counsel',
    category: 'corporate',
    date: 'August 2024',
    imageUrl: '/coorporate/IMG_6177.jpg',
    relatedImages: [
      '/coorporate/IMG_6177.jpg',
      '/coorporate/IMG_6264.jpg',
      '/coorporate/IMG_6269.jpg',
      '/coorporate/IMG_6150.jpg'
    ],
    description: 'A comfortable corporate expression focusing on approachability and leadership.'
  },
  {
    id: 'c3',
    title: 'Tech Founder Confident Angle',
    category: 'corporate',
    date: 'April 2024',
    imageUrl: '/coorporate/Trust-Charitos-(5).jpg',
    relatedImages: [
      '/coorporate/Trust-Charitos-(5).jpg',
      '/coorporate/Trust-Charitos-(33).jpg',
      '/coorporate/Trust-Charitos-(37).jpg',
      '/coorporate/DSC_0309.jpg'
    ],
    description: 'High-contrast professional portrait emphasizing clean lines and sophisticated modern apparel.'
  },

  // Events
  {
    id: 'e1',
    title: 'Nationwide Excellence Gala and Summit',
    category: 'events',
    date: 'November 2024',
    imageUrl: '/event/DSC00462.jpg',
    relatedImages: [
      '/event/DSC00462.jpg',
      '/event/DSC00581.jpg',
      '/event/DSC00586.jpg',
      '/event/DSC06946.jpg'
    ],
    description: 'A wide-angle perspective capturing the vibrant architecture and dynamic stage lighting.'
  },
  {
    id: 'e2',
    title: 'Candid Keynote Presenter',
    category: 'events',
    date: 'September 2024',
    imageUrl: '/event/DSC06990.jpg',
    relatedImages: [
      '/event/DSC06990.jpg',
      '/event/DSC07003.jpg',
      '/event/DSC07056.jpg',
      '/event/DSC07058.jpg'
    ],
    description: 'Capturing dynamic raw motion and emotional engagement from the primary speaker.',
    featured: true
  },
  {
    id: 'e3',
    title: 'The Toast of Abuja Elite',
    category: 'events',
    date: 'February 2025',
    imageUrl: '/event/KHA_4150.jpg',
    relatedImages: [
      '/event/KHA_4150.jpg',
      '/event/KHA_4206.jpg',
      '/event/KHA_4309.jpg',
      '/event/DSC08466.jpg'
    ],
    description: 'Intimate guest interactions caught in a beautifully soft-focused background.'
  },

  // Family Sessions
  {
    id: 'f1',
    title: 'The Generation Golden Embrace',
    category: 'family',
    date: 'December 2024',
    imageUrl: '/family/DSC01789.jpg',
    relatedImages: [
      '/family/DSC01789.jpg',
      '/family/DSC01834.jpg',
      '/family/DSC05639.jpg',
      '/family/DSC05743.jpg'
    ],
    description: 'Studio sunset session with clean, unified earth tones bringing warmth and character.'
  },
  {
    id: 'f2',
    title: 'Maternity Radiance',
    category: 'family',
    date: 'October 2024',
    imageUrl: '/family/_DEL9536.jpg',
    relatedImages: [
      '/family/_DEL9536.jpg',
      '/family/_DEL9555 (1).jpg',
      '/family/_DEL9586.jpg',
      '/family/_DEL9615.jpg'
    ],
    description: 'A pure silhouette portrait honoring anticipation with sophisticated modern studio lighting.'
  },
  {
    id: 'f3',
    title: 'Joy of the Sunlit Garden',
    category: 'family',
    date: 'July 2024',
    imageUrl: '/family/DSC06601.jpg',
    relatedImages: [
      '/family/DSC06601.jpg',
      '/family/DSC06620.jpg',
      '/family/DSC06632.jpg',
      '/family/DSC06714.jpg'
    ],
    description: 'Dynamic outdoor candids conveying connection, energy, and love.'
  },

  // Products
  {
    id: 'pr1',
    title: 'Sculptural Cosmetics — Minimal Design',
    category: 'products',
    date: 'November 2024',
    imageUrl: '/product/DEL_1276.jpg',
    relatedImages: [
      '/product/DEL_1276.jpg',
      '/product/DEL_1519.jpg',
      '/product/DSC_0382.jpg',
      '/product/DSC_0512.jpg'
    ],
    description: 'Clean product-focused lighting setting off premium ingredients on earthy clay blocks.',
    featured: true
  },
  {
    id: 'pr2',
    title: 'Elegant Timepiece Detail',
    category: 'products',
    date: 'September 2024',
    imageUrl: '/product/DEL_1519.jpg',
    relatedImages: [
      '/product/DEL_1519.jpg',
      '/product/DSC_0382.jpg',
      '/product/DSC_0512.jpg',
      '/product/DEL_1276.jpg'
    ],
    description: 'Extreme close up macro shot showcasing metal grain, reflections, and luxury textures.'
  },
  {
    id: 'pr3',
    title: 'Contour — Athletic Design',
    category: 'products',
    date: 'August 2024',
    imageUrl: '/product/DSC_0542 (1).jpg',
    relatedImages: [
      '/product/DSC_0542 (1).jpg',
      '/product/DEL_1276.jpg',
      '/product/DEL_1519.jpg',
      '/product/DSC_0382.jpg'
    ],
    description: 'Striking shadow angles accenting shoe contours for direct client web catalog placements.'
  }
];

export const SERVICES_LIST: ServiceDetail[] = [
  {
    id: 's_wedding',
    title: 'Wedding Photography',
    category: 'wedding',
    shortDescription: 'Your wedding day deserves to be remembered in every perfect detail.',
    description: 'We blend seamlessly into your celebration, capturing candid emotions, heartfelt moments, and the joy that defines your special day. From the ceremony to the reception, every frame is a timeless memory.',
    bullets: [
      'Full-day coverage from preparation to reception',
      'Candid and posed shots for a comprehensive story',
      'Edited gallery delivered within 1 week',
      'Unlimited photo prints & digital files included'
    ],
    imageUrl: '/wedding/DSC_0521.jpg'
  },
  {
    id: 's_portrait',
    title: 'Portrait Sessions',
    category: 'portrait',
    shortDescription: 'Studio and outdoor portrait photography bringing out the best in you.',
    description: "Whether it's a family portrait, maternity shoot, or personal branding session, our portrait photography brings out the best in every subject. We create a relaxed and comfortable environment so your personality shines through every image.",
    bullets: [
      'Studio and outdoor session options',
      'Professional lighting & backdrop setups',
      'Same-week delivery of edited images',
      'Wardrobe consultation included'
    ],
    imageUrl: '/portrait/DSC01163.jpg'
  },
  {
    id: 's_commercial',
    title: 'Commercial Photography',
    category: 'model',
    shortDescription: 'Helping businesses communicate their story through grand striking visuals.',
    description: 'From product photography to brand campaigns, we help businesses communicate their story through striking visuals. Our commercial photography is crafted to meet the demands of marketing, advertising, and e-commerce.',
    bullets: [
      'Product photography for e-commerce & catalogues',
      'Brand campaign and advertising imagery',
      'High-resolution files ready for print & digital',
      'Creative direction and prop styling available'
    ],
    imageUrl: '/model/DSC05581.jpg'
  },
  {
    id: 's_corporate',
    title: 'Corporate Headshots',
    category: 'corporate',
    shortDescription: 'Make a powerful first impression with professional corporate headshots.',
    description: 'Make a powerful first impression with professional corporate headshots. We work with businesses and professionals across Nigeria to produce polished, confident portraits for websites, LinkedIn, press releases, and corporate directories.',
    bullets: [
      'Individual and group headshot packages',
      'On-site studio setup available',
      'Background options: solid, environmental, or branded',
      'Quick turnaround for corporate teams'
    ],
    imageUrl: '/coorporate/DSC01153.jpg'
  }
];

export const PRICING_PACKAGES: PricePackage[] = [
  // Wedding Package 1
  {
    id: 'wedding_pkg1_1day',
    name: 'Wedding Package 1 (1 Day)',
    price: 400000,
    description: 'Beautiful 1-day coverage of your ceremony and celebration.',
    duration: '1 Full Day',
    photosCount: 'Edited (Color Enhanced) delivery',
    locationsCount: 'Full event venue',
    bullets: [
      'Full Event Photography',
      '2 Wall Frames (16 by 20 inches)',
      'Edited (Color Enhanced) Online delivery',
      '1 Photobook (10 by 12 inches)',
      'Delight and assistant'
    ]
  },
  {
    id: 'wedding_pkg1_2days',
    name: 'Wedding Package 1 (2 Days)',
    price: 450000,
    description: 'Extensive 2-day coverage perfect for multi-day weddings or traditional + white ceremonies.',
    duration: '2 Full Days',
    photosCount: 'Edited (Color Enhanced) delivery',
    locationsCount: 'Multi-day venues',
    bullets: [
      'Full Event Photography (2 full days)',
      '2 Wall Frames (16 by 20 inches)',
      'Edited (Color Enhanced) Online delivery',
      '1 Photobook (10 by 12 inches)',
      'Delight and assistant'
    ]
  },
  // Wedding Package 2
  {
    id: 'wedding_pkg2_1day',
    name: 'Wedding Package 2 (1 Day)',
    price: 700000,
    description: 'Our highly recommended wedding package including videography and a dedicated pre-wedding shoot.',
    duration: '1 Full Day + Pre-wedding',
    photosCount: 'Edited (Color Enhanced) delivery + flash',
    locationsCount: 'Studio & event venues',
    bullets: [
      'Pre-wedding photoshoot',
      'Full Event Photography',
      '2 Wall Frames (20 by 24 inches)',
      'Edited (Color Enhanced) online delivery',
      '1 Photobook (10 by 12 inches + flash)',
      '1 Videographer included',
      'Delight and assistant'
    ],
    popular: true
  },
  {
    id: 'wedding_pkg2_2days',
    name: 'Wedding Package 2 (2 Days)',
    price: 750000,
    description: 'Our premier package covering 2 full days with videography and pre-wedding catalog.',
    duration: '2 Full Days + Pre-wedding',
    photosCount: 'Edited (Color Enhanced) delivery + flash',
    locationsCount: 'Studio & multi-day venues',
    bullets: [
      'Pre-wedding photoshoot',
      'Full Event Photography (2 full days)',
      '2 Wall Frames (20 by 24 inches)',
      'Edited (Color Enhanced) online delivery',
      '1 Photobook (10 by 12 inches + flash)',
      '1 Videographer included',
      'Delight and assistant'
    ]
  },
  // Wedding Package 3
  {
    id: 'wedding_pkg3_1day',
    name: 'Wedding Package 3 (1 Day)',
    price: 1200000,
    description: 'Luxury high-end cinematography experience with multiple photographers and synthetic books.',
    duration: '1 Full Day + Pre-wedding',
    photosCount: 'Synthetic Edited + Ultra High Res',
    locationsCount: 'Studio, Outdoor & event venues',
    bullets: [
      'Pre-wedding (complimentary)',
      'Full Event Photography',
      '2 Acrylic Wall Frames (20 by 24 inches)',
      '2 Synthetic Photobooks (12 by 36 inches + flash)',
      'Cinematography (1 Minute Trailer + Full Length Video)',
      'Delight + 1 photographer + 2 assistants'
    ]
  },
  {
    id: 'wedding_pkg3_2days',
    name: 'Wedding Package 3 (2 Days)',
    price: 1300000,
    description: 'The ultimate luxury masterclass covering 2 days of grand wedding ceremonies and multi-angle cinematography.',
    duration: '2 Full Days + Pre-wedding',
    photosCount: 'Synthetic Edited + Ultra High Res',
    locationsCount: 'Studio, Outdoor & multi-day venues',
    bullets: [
      'Pre-wedding (complimentary)',
      'Full Event Photography (2 full days)',
      '2 Acrylic Wall Frames (20 by 24 inches)',
      '2 Synthetic Photobooks (12 by 36 inches + flash)',
      'Cinematography (1 Minute Trailer + Full Length Video)',
      'Delight + 1 photographer + 2 assistants'
    ]
  },

  // Photoshoot Sessions - Studio Sessions
  {
    id: 'photoshoot_studio_1outfit',
    name: 'Studio Session (1 Outfit)',
    price: 65000,
    description: 'Professional high-contrast studio session with 1 outfit swap.',
    duration: '1 Outfit session',
    photosCount: '8 Edited Pictures',
    locationsCount: 'Delight Notions Studio',
    bullets: [
      'Studio Session (1 Outfit)',
      '8 beautifully color enhanced & edited pictures',
      'High-contrast professional studio lighting',
      'Digital delivery in 24-48 hours'
    ]
  },
  {
    id: 'photoshoot_studio_2outfits',
    name: 'Studio Session (2 Outfits)',
    price: 110000,
    description: 'Studio portrait capture with 2 select outfits.',
    duration: '2 Outfits session',
    photosCount: '16 Edited Pictures',
    locationsCount: 'Delight Notions Studio',
    bullets: [
      'Studio Session (2 Outfits)',
      '16 beautifully color enhanced & edited pictures',
      'Lighting adjustment for varying garments',
      'Digital delivery to personal client portal'
    ]
  },
  {
    id: 'photoshoot_studio_3outfits',
    name: 'Studio Session (3 Outfits)',
    price: 150000,
    description: 'Creative environmental studio session spanning 3 outfit variations.',
    duration: '3 Outfits session',
    photosCount: '24 Edited Pictures',
    locationsCount: 'Delight Notions Studio',
    bullets: [
      'Studio Session (3 Outfits)',
      '24 beautifully color enhanced & edited pictures',
      'Dynamic key backdrop configurations',
      'Standard digital drive delivery'
    ]
  },
  {
    id: 'photoshoot_studio_4outfits',
    name: 'Studio Session (4 Outfits)',
    price: 190000,
    description: 'Professional model or branding lookbook session spanning 4 outfit configurations.',
    duration: '4 Outfits session',
    photosCount: '32 Edited Pictures',
    locationsCount: 'Delight Notions Studio',
    bullets: [
      'Studio Session (4 Outfits)',
      '32 beautifully color enhanced & edited pictures',
      'Complete wardrobe consultation and layout',
      'Priority fast-track processing'
    ]
  },

  // Photoshoot Sessions - Outdoor Sessions
  {
    id: 'photoshoot_outdoor_1outfit',
    name: 'Outdoor Session (1 Outfit)',
    price: 80000,
    description: 'Golden hour environmental portrait capture with 1 outfit.',
    duration: '1 Outfit session',
    photosCount: '8 Edited Pictures',
    locationsCount: 'Selected Outdoor Location',
    bullets: [
      'Outdoor Session (1 Outfit)',
      '8 beautifully edit and color-enhanced images',
      'Environmental lighting setups',
      'High resolution print-ready digital files'
    ]
  },
  {
    id: 'photoshoot_outdoor_2outfits',
    name: 'Outdoor Session (2 Outfits)',
    price: 130000,
    description: 'Beautiful outdoor session with 2 outfit swaps.',
    duration: '2 Outfits session',
    photosCount: '16 Edited Pictures',
    locationsCount: 'Selected Outdoor Locations',
    bullets: [
      'Outdoor Session (2 Outfits)',
      '16 beautifully edit and color-enhanced images',
      'Varied backdrops & settings',
      'High resolution print-ready digital files'
    ]
  },
  {
    id: 'photoshoot_outdoor_3outfits',
    name: 'Outdoor Session (3 Outfits)',
    price: 170000,
    description: 'Complete outdoor campaign/editorial session with 3 outfits.',
    duration: '3 Outfits session',
    photosCount: '24 Edited Pictures',
    locationsCount: 'Multiple Outdoor Locations',
    bullets: [
      'Outdoor Session (3 Outfits)',
      '24 beautifully edit and color-enhanced images',
      'Storytelling environmental direction',
      'High resolution print-ready digital files'
    ]
  },
  {
    id: 'photoshoot_outdoor_4outfits',
    name: 'Outdoor Session (4 Outfits)',
    price: 210000,
    description: 'Ultimate outdoor lookbook or fashion campaign session with 4 outfits.',
    duration: '4 Outfits session',
    photosCount: '32 Edited Pictures',
    locationsCount: 'Multiple Outdoor Locations',
    bullets: [
      'Outdoor Session (4 Outfits)',
      '32 beautifully edit and color-enhanced images',
      'Comprehensive creative direction',
      'Priority digital delivery queue'
    ]
  },

  // Family Portraits - Home Service
  {
    id: 'family_home_pkg1',
    name: 'Family Portrait: Home Service (1 Outfit)',
    price: 160000,
    description: 'Cherish family moments in the comfort of your home with 1 outfit configuration.',
    duration: 'Home Service (1 Outfit)',
    photosCount: 'Custom Edited Pictures',
    locationsCount: 'Client Home Location',
    bullets: [
      'Home Service Session',
      '1 outfit configuration setup',
      'Professional mobile studio lighting brought to you',
      'Timeless high-contrast family editing'
    ]
  },
  {
    id: 'family_home_pkg2',
    name: 'Family Portrait: Home Service (2 Outfits)',
    price: 240000,
    description: 'Complete comfortable home session spanning 2 coordinated family outfits.',
    duration: 'Home Service (2 Outfits)',
    photosCount: 'Custom Edited Pictures',
    locationsCount: 'Client Home Location',
    bullets: [
      'Home Service Session',
      '2 outfits configuration swaps',
      'Multiple mobile backdrop selections',
      'Timeless high-contrast family editing'
    ]
  },

  // Family Portraits - Studio Session
  {
    id: 'family_studio_pkg1',
    name: 'Family Portrait: Studio Session (1 Outfit)',
    price: 140000,
    description: 'Sophisticated studio family portraits with 1 curated outfit.',
    duration: 'Studio Session (1 Outfit)',
    photosCount: 'Custom Edited Pictures',
    locationsCount: 'Delight Notions Studio',
    bullets: [
      'Studio Session',
      '1 outfit configuration layout',
      'Elite strobe lighting and multi-tier poses',
      'High-resolution digital archives'
    ]
  },
  {
    id: 'family_studio_pkg2',
    name: 'Family Portrait: Studio Session (2 Outfits)',
    price: 220000,
    description: 'Comprehensive family session in-studio with 2 matching outfits.',
    duration: 'Studio Session (2 Outfits)',
    photosCount: 'Custom Edited Pictures',
    locationsCount: 'Delight Notions Studio',
    bullets: [
      'Studio Session',
      '2 outfits configuration layouts',
      'Earthy backdrop transitions',
      'High-resolution digital archives'
    ]
  },

  // Corporate Headshots
  {
    id: 'corporate_pkg1',
    name: 'Corporate Headshot (1 Outfit)',
    price: 80000,
    description: 'Polished executive headshot with 1 elite outfit.',
    duration: 'Individual Studio Session',
    photosCount: 'Custom Professional Edits',
    locationsCount: 'Studio / Office',
    bullets: [
      'Clean professional lighting',
      '1 outfit configuration swap',
      'Color tone match for dynamic CV/LinkedIn usage',
      'Standard processing speeds'
    ]
  },
  {
    id: 'corporate_pkg2',
    name: 'Corporate Headshot (2 Outfits)',
    price: 120000,
    description: 'Premium executive profiling across 2 outfits for lookbooks and company catalogs.',
    duration: 'Premium Studio Session',
    photosCount: 'Extended Professional Edits',
    locationsCount: 'Studio / Office',
    bullets: [
      'Adjusted corporate backdrops',
      '2 outfits configurations',
      'Includes formal and executive style consultations',
      'Express priority digital delivery'
    ]
  }
];

export const FAQ_ITEMS: FAQItem[] = [
  {
    id: 'faq1',
    question: 'What types of photography files do you provide?',
    answer: 'All our packages include high-resolution print-ready files and optimized digital files for trouble-free social sharing. We deliver them through an elegant, private, secure online gallery that is easy to download and share.'
  },
  {
    id: 'faq2',
    question: 'How do we book a custom session or coordinate dates?',
    answer: 'You can check our package guides and drop dynamic details directly into our "Book a Session" portal. After submiting your form, Momoh Elias will respond within 24 hours to confirm schedules, requirements, and secure your retainer.'
  },
  {
    id: 'faq3',
    question: 'Do you travel or work outside of Abuja and Lagos?',
    answer: 'Absolutely! While Delight Notions Studio is based in Nigeria, our team operates nationwide. Let us know your event destination, and we will tailor custom travel packages to match your needs perfectly.'
  },
  {
    id: 'faq4',
    question: 'What is the standard delivery timeframe for edited galleries?',
    answer: 'Standard portrait and product packages are ready in under a week. Major wedding or corporate event galleries take exactly one week, as verified by our quick turnaround promise.'
  },
  {
    id: 'faq5',
    question: 'How does your professional editing and retouching process function?',
    answer: 'We utilize state-of-the-art editing software to handle white-balancing, skin-toning, color grading, and standard blemishes while maintaining the raw skin texture and true emotions of the moments captured.'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    author: 'Adaeze Okonkwo',
    location: 'Lagos, Nigeria',
    quote: "Delight Notions Studio's photography doesn't just capture moments; it captures emotions. Their work is simply mesmerizing — our wedding photos are breathtaking!",
    rating: 5
  },
  {
    id: 't2',
    author: 'Chukwuemeka Eze',
    location: 'Abuja, Nigeria',
    quote: "Delight Notions Studio's didn't just capture moments; they captured the essence of our brand. Momoh's professionalism and eye for detail are unmatched.",
    rating: 5
  },
  {
    id: 't3',
    author: 'Fatima Aliyu',
    location: 'Kano, Nigeria',
    quote: "I was blown away by their ability to capture the essence of our event. The photographs are our most cherished memories — absolutely stunning!",
    rating: 5
  }
];
