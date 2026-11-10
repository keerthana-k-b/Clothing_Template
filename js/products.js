/**
 * Your Brand — Master Product & Collection Catalog
 * Contains all product and photography data grouped by category slugs:
 * ethnic-wear, western-wear, occasion-wear, festive-collection, casual-wear, new-arrivals, artisanal-craft, signature-series
 */

const CATEGORIES = [
  { slug: 'all', name: 'All Collections', desc: 'Complete contemporary fashion & bespoke apparel' },
  { slug: 'ethnic-wear', name: 'Ethnic Wear', desc: 'Handcrafted traditional silhouettes & festive weaves' },
  { slug: 'western-wear', name: 'Western Wear', desc: 'Tailored separates, dresses & modern silhouettes' },
  { slug: 'occasion-wear', name: 'Occasion Wear', desc: 'Statement ensembles & celebratory evening wear' },
  { slug: 'festive-collection', name: 'Festive Collection', desc: 'Rich textures, festive palettes & artisanal craft' },
  { slug: 'casual-wear', name: 'Casual Wear', desc: 'Everyday luxury, breathable coordinates & essentials' },
  { slug: 'new-arrivals', name: 'New Arrivals', desc: 'Fresh seasonal drops & contemporary edits' },
  { slug: 'artisanal-craft', name: 'Artisanal Craft', desc: 'Hand embroidery, intricate needlework & weaves' },
  { slug: 'signature-series', name: 'Signature Series', desc: 'Exclusive house archives & tailored capsule pieces' }
];

const PRODUCTS = [
  // ==========================================
  // ETHNIC WEAR
  // ==========================================
  {
    id: 'prod-01',
    name: 'Kaveri Ivory & Crimson Kanjivaram Silk Saree',
    category: 'ethnic-wear',
    categoryName: 'Ethnic Wear',
    price: '₹18,500',
    badge: 'Best Seller',
    images: [
      'assets/images/collection-01.webp',
      'assets/images/product-09.webp',
      'assets/images/product-18.webp'
    ],
    description: 'Handwoven ivory Kanjivaram silk saree framed with a bright crimson border and antique gold temple zari pallu, paired with a matching red silk blouse featuring intricate gold sleeve embroidery.',
    fabric: 'Pure Kanjivaram Mulberry Silk & Antique Gold Zari',
    work: 'Traditional Zari Border Weave with Hand-Embroidered Blouse Sleeves',
    details: [
      'Pure handloom silk certified with Silk Mark authentication',
      'Self-woven brocade patterns across the ivory drape',
      'Includes matching red blouse fabric with gold zari sleeve border',
      'Bespoke blouse fitting and sleeve customization available on request',
      'Estimated crafting & delivery timeframe: 2–3 weeks'
    ]
  },
  {
    id: 'prod-02',
    name: 'Meher Rani Pink & Gold Foil Anarkali Set',
    category: 'ethnic-wear',
    categoryName: 'Ethnic Wear',
    price: '₹22,000',
    badge: 'Editorial Pick',
    images: [
      'assets/images/product-01.webp',
      'assets/images/product-24.webp',
      'assets/images/hero-01.webp'
    ],
    description: 'Rani pink flared anarkali kurta with a mandarin collar and delicate gold foil motifs, paired with matching straight trousers and a gold-striped bordered dupatta.',
    fabric: 'Soft Silk-Blend Chanderi with Breathable Cotton Lining',
    work: 'Metallic Gold Foil Botanical Motifs & Striped Zari Borders',
    details: [
      'Flared anarkali silhouette with structured mandarin neckline',
      'All-over gold foil botanical accents across bodice and skirt',
      'Includes matching straight-cut trousers and bordered dupatta',
      'Custom sleeve length options available for festive orders',
      'Estimated crafting timeframe: 2–3 weeks'
    ]
  },
  {
    id: 'prod-03',
    name: 'Nandini Rust-Orange Banarasi Silk Saree',
    category: 'ethnic-wear',
    categoryName: 'Ethnic Wear',
    price: '₹19,500',
    badge: 'Heirloom',
    images: [
      'assets/images/product-02.webp',
      'assets/images/product-26.webp',
      'assets/images/product-15.webp'
    ],
    description: 'Vibrant rust-orange pure silk saree woven with an ornate scalloped antique gold brocade pallu and contrasting deep maroon selvedge border.',
    fabric: 'Pure Handloom Banarasi Silk & Antique Gold Zari',
    work: 'Scalloped Gold Brocade Pallu with Contrasting Maroon Border',
    details: [
      'Traditional handloom weaving with rich burnt-orange sheen',
      'Dense scalloped antique gold brocade across the pallu',
      'Contrasting deep maroon border along the drape edge',
      'Preserved with protective anti-tarnish tissue wrapping',
      'Estimated crafting timeframe: 2–3 weeks'
    ]
  },
  {
    id: 'prod-04',
    name: 'Sunehri Marigold Embroidered Peplum Lehenga',
    category: 'ethnic-wear',
    categoryName: 'Ethnic Wear',
    price: '₹21,000',
    badge: 'Classic Weave',
    images: [
      'assets/images/product-03.webp',
      'assets/images/product-34.webp',
      'assets/images/hero-05.webp'
    ],
    description: 'Marigold yellow sleeveless peplum blouse with floral metallic embroidery and a crisp box-pleated flare, paired with a flowing floor-length pleated skirt and matching stole.',
    fabric: 'Pure Raw Silk Bodice & Flowing Georgette Pleated Skirt',
    work: 'Hand-Embroidered Floral Bodice with Box-Pleated Peplum',
    details: [
      'Sleeveless raw silk bodice worked with silver and gold florals',
      'Architectural box-pleated peplum waist accented with zari trim',
      'Paired with a full-length micro-pleated skirt and matching stole',
      'Custom neckline and strap adjustments included',
      'Estimated crafting timeframe: 3 weeks'
    ]
  },
  {
    id: 'prod-05',
    name: 'Zariya Rust-Orange Embroidered Silk Kaftan',
    category: 'ethnic-wear',
    categoryName: 'Ethnic Wear',
    price: '₹16,500',
    badge: 'Festive Edit',
    images: [
      'assets/images/story-02.webp',
      'assets/images/product-23.webp'
    ],
    description: 'Regal burnt-orange textured silk kaftan tunic lavishly framed with dense antique gold and silver floral embroidery along the V-neckline, placket, and wide draped sleeves.',
    fabric: 'Textured Raw Silk-Linen Blend',
    work: 'Heavy Metallic Zari, Resham & Sequin Border Embroidery',
    details: [
      'Relaxed kaftan drape designed for effortless evening comfort',
      'Broad geometric metallic embroidery framing the neckline and sleeves',
      'Breathable inner cotton voile lining for warm-weather wear',
      'Easy customization of tunic length on request',
      'Estimated crafting timeframe: 2 weeks'
    ]
  },
  {
    id: 'prod-06',
    name: 'Arundhati Rust & Gold Brocade Pallu Saree',
    category: 'ethnic-wear',
    categoryName: 'Ethnic Wear',
    price: '₹24,000',
    badge: 'New Edition',
    images: [
      'assets/images/story-04.webp',
      'assets/images/hero-02.webp',
      'assets/images/product-15.webp'
    ],
    description: 'Lustrous rust-orange woven silk saree featuring an expansive scalloped gold brocade pallu and structured maroon edging tailored for fluid festive draping.',
    fabric: 'Pure Woven Mulberry Silk & Metallic Zari',
    work: 'All-Over Scalloped Gold Zari Brocade Pallu',
    details: [
      'Woven scalloped motif pattern spanning the entire pallu',
      'Rich rust-orange body with subtle tonal self-texture',
      'Includes matching unstitched silk blouse piece',
      'Complimentary fall and edging finish before dispatch',
      'Estimated crafting timeframe: 2–3 weeks'
    ]
  },

  // ==========================================
  // WESTERN WEAR
  // ==========================================
  {
    id: 'prod-07',
    name: 'Sienna Mustard Half-Zip Sweatshirt & Olive Set',
    category: 'western-wear',
    categoryName: 'Western Wear',
    price: '₹28,000',
    badge: 'Contemporary Edit',
    images: [
      'assets/images/collection-02.webp',
      'assets/images/product-20.webp',
      'assets/images/product-31.webp'
    ],
    description: 'Mustard yellow cropped half-zip cotton fleece pullover with a structured front flap pocket and ribbed cuffs, styled with dark olive faux-leather trousers.',
    fabric: 'Heavyweight Combed Cotton Fleece & Matte Faux Leather',
    work: 'Clean Contrast Zip Hardware & Structured Utility Pocket',
    details: [
      'Cropped boxy silhouette with wide ribbed hem and cuffs',
      'Quarter-zip collar with cognac leather-look zipper pull',
      'Front right utility flap pocket with tonal topstitching',
      'Paired with high-waisted dark olive faux-leather trousers',
      'Estimated crafting timeframe: 1–2 weeks'
    ]
  },
  {
    id: 'prod-08',
    name: 'Clara Black Floral Belted Midi Shirt-Dress',
    category: 'western-wear',
    categoryName: 'Western Wear',
    price: '₹18,500',
    badge: 'Minimalist Grace',
    images: [
      'assets/images/product-04.webp',
      'assets/images/product-13.webp',
      'assets/images/product-29.webp'
    ],
    description: 'Black botanical floral-printed short-sleeve midi shirt-dress tailored with a crisp collar, concealed button placket, and matching self-tie waist belt.',
    fabric: 'Breathable Viscose Crepe Cotton',
    work: 'All-Over Vintage Botanical Print with Self-Tie Waist Belt',
    details: [
      'Warm rose, cream, and sage botanical print on deep black ground',
      'Short cuffed sleeves and classic pointed shirt collar',
      'Adjustable matching fabric tie belt to define the waist',
      'Ankle-grazing straight midi cut with side seam pockets',
      'Estimated crafting timeframe: 1–2 weeks'
    ]
  },
  {
    id: 'prod-09',
    name: 'Paloma Monochrome Leaf-Print Wrap Co-ord',
    category: 'western-wear',
    categoryName: 'Western Wear',
    price: '₹21,000',
    badge: 'Resort Edit',
    images: [
      'assets/images/product-05.webp',
      'assets/images/product-21.webp',
      'assets/images/hero-04.webp'
    ],
    description: 'Monochrome black and ivory leaf-printed sleeveless V-neck wrap top paired with matching high-rise straight-leg relaxed trousers.',
    fabric: 'Lightweight Printed Linen-Cotton Blend',
    work: 'Tailored Wrap Bodice & Relaxed Straight-Cut Trousers',
    details: [
      'Crisp graphic ivory leaf pattern across deep charcoal-black base',
      'Sleeveless V-neck wrap top with clean asymmetric closure',
      'Relaxed straight-leg trousers with deep side pockets',
      'Ideal for resort getaways, brunches, and warm-weather travel',
      'Estimated crafting timeframe: 1–2 weeks'
    ]
  },
  {
    id: 'prod-10',
    name: 'Marina Indigo Floral Collared Co-ord Set',
    category: 'western-wear',
    categoryName: 'Western Wear',
    price: '₹19,000',
    badge: 'Tailored Luxury',
    images: [
      'assets/images/product-06.webp',
      'assets/images/product-22.webp',
      'assets/images/product-32.webp'
    ],
    description: 'Deep indigo collared tunic and matching wide-leg trousers patterned with ivory and sky-blue botanical floral motifs and three-quarter cuffed sleeves.',
    fabric: 'Soft Pure Cotton Poplin',
    work: 'Botanical Block-Style Floral Print with Relaxed Shirt Collar',
    details: [
      'Crisp white pearl-button placket and folded shirt collar',
      'Three-quarter sleeves with buttoned cuffs for easy styling',
      'High-waisted wide-leg trousers in matching floral print',
      'Pre-washed for breathable softness and zero shrinkage',
      'Estimated crafting timeframe: 1–2 weeks'
    ]
  },

  // ==========================================
  // OCCASION WEAR
  // ==========================================
  {
    id: 'prod-11',
    name: 'Noor Navy & Wine Embroidered Anarkali Gowns',
    category: 'occasion-wear',
    categoryName: 'Occasion Wear',
    price: '₹22,500',
    badge: 'Evening Edit',
    images: [
      'assets/images/collection-03.webp',
      'assets/images/product-17.webp',
      'assets/images/product-12.webp'
    ],
    description: 'Floor-length pleated silk-crepe evening anarkali gowns in deep midnight navy and rich wine maroon, adorned with shimmering gold botanical hem and sleeve embroidery.',
    fabric: 'Flowing Silk Crepe & Fine Net Lining',
    work: 'Handcrafted Gold Metallic Floral Embroidery & Pleated Hem',
    details: [
      'Available in deep midnight navy or rich wine maroon colorways',
      'Voluminous pleated skirt finished with a wide ruffled hem',
      'Botanical gold threadwork ascending from the lower skirt and cuffs',
      'Custom sleeve and neckline styling available to order',
      'Estimated crafting timeframe: 3–4 weeks'
    ]
  },
  {
    id: 'prod-12',
    name: 'Tara Dusty Rose Floral Cotton Kurta Set',
    category: 'casual-wear',
    categoryName: 'Casual Wear',
    price: '₹23,000',
    badge: 'Daylight Chic',
    images: [
      'assets/images/product-07.webp',
      'assets/images/product-25.webp',
      'assets/images/social-02.webp'
    ],
    description: 'Dusty rose pink V-neck cotton kurta with three-quarter slit sleeves featuring ivory floral print along the cuffs, hemline, and matching straight trousers.',
    fabric: '100% Breathable Combed Cotton',
    work: 'Ivory Botanical Placement Print with Slit-Sleeve Tailoring',
    details: [
      'Clean notched V-neckline tailored for everyday comfort',
      'Slit-cuff three-quarter sleeves framed with cream rose motifs',
      'Matching dusty rose straight pants with floral hem border',
      'Pre-shrunk fabric suitable for effortless warm-weather wear',
      'Estimated crafting timeframe: 1–2 weeks'
    ]
  },
  {
    id: 'prod-13',
    name: 'Ruhani Maroon & Gold Chevron Bridal Lehenga',
    category: 'occasion-wear',
    categoryName: 'Occasion Wear',
    price: '₹26,000',
    badge: 'Evening Glow',
    images: [
      'assets/images/product-08.webp',
      'assets/images/product-16.webp',
      'assets/images/product-28.webp'
    ],
    description: 'Deep maroon and olive-green richly embroidered lehenga choli featuring geometric chevron gold zari patterns, sequin highlights, and intricate floral border motifs.',
    fabric: 'Plush Silk Velvet & Heavy Raw Silk',
    work: 'Dense Antique Gold Zardozi, Chevron Sequins & Resham',
    details: [
      'Sweetheart-neckline olive and maroon velvet choli with elbow sleeves',
      'Multi-panel flared maroon skirt with upper chevron zari work',
      'Elaborate scenic and floral embroidered border panels along the hem',
      'Precision sizing adjusted to individual height and measurements',
      'Estimated crafting timeframe: 3–4 weeks'
    ]
  },
  {
    id: 'prod-14',
    name: 'Vaidehi Ivory & Red Zari Kanjivaram Saree',
    category: 'occasion-wear',
    categoryName: 'Occasion Wear',
    price: '₹25,000',
    badge: 'Heritage Classic',
    images: [
      'assets/images/product-09.webp',
      'assets/images/product-18.webp',
      'assets/images/collection-01.webp'
    ],
    description: 'Lustrous ivory brocade Kanjivaram silk saree accented with wide gold zari borders and a crimson selvedge, styled with an embroidered red silk blouse.',
    fabric: 'Pure Kanjivaram Silk & Gold Zari',
    work: 'Self-Woven Brocade Body with Zari Sleeve Embroidery',
    details: [
      'Cream-ivory body woven with subtle self-floral silk brocade',
      'Contrasting bright crimson and antique gold temple borders',
      'Includes matching red blouse with pearl-edged zari sleeve cuffs',
      'Authenticated pure silk craftsmanship',
      'Estimated crafting timeframe: 2–3 weeks'
    ]
  },
  {
    id: 'prod-15',
    name: 'Vana Forest Green Floral Tunic Co-ord',
    category: 'casual-wear',
    categoryName: 'Casual Wear',
    price: '₹24,000',
    badge: 'Resort Luxe',
    images: [
      'assets/images/product-10.webp',
      'assets/images/product-19.webp',
      'assets/images/product-30.webp'
    ],
    description: 'Forest green mandarin-collar relaxed tunic and wide-leg trousers covered in vibrant coral, mustard, and teal botanical floral prints.',
    fabric: 'Lightweight Breathable Cotton Lawn',
    work: 'All-Over Multicolor Botanical Print with Stand Collar',
    details: [
      'Easy A-line tunic silhouette with three-quarter sleeves',
      'Vibrant coral, peach, and cream floral pattern on deep forest green',
      'Coordinating wide-leg ankle-length trousers with elasticated waist',
      'Ideal for daytime gatherings, travel, and resort lounging',
      'Estimated crafting timeframe: 1–2 weeks'
    ]
  },
  {
    id: 'prod-16',
    name: 'Meera Burnt-Orange Zari Embroidered Kaftan',
    category: 'occasion-wear',
    categoryName: 'Occasion Wear',
    price: '₹19,500',
    badge: 'Festive Glow',
    images: [
      'assets/images/product-23.webp',
      'assets/images/story-02.webp'
    ],
    description: 'Statement burnt-orange festive kaftan richly ornamented with geometric silver and gold metallic threadwork and embroidered sleeve panels.',
    fabric: 'Textured Raw Silk & Cotton Voile Lining',
    work: 'Ornate Gold Zari, Sequin & Geometric Trim Embroidery',
    details: [
      'Rich burnt-orange hue accented with warm metallic embroidery',
      'Wide kimono-style draped sleeves with detailed floral borders',
      'V-neckline trimmed with vertical mirror-like sequin bands',
      'Custom length adjustments available at no extra charge',
      'Estimated crafting timeframe: 2–3 weeks'
    ]
  },
  {
    id: 'prod-17',
    name: 'Kavya Rose Pink Botanical Kurta Co-ord',
    category: 'casual-wear',
    categoryName: 'Casual Wear',
    price: '₹27,500',
    badge: 'Everyday Edit',
    images: [
      'assets/images/product-25.webp',
      'assets/images/product-07.webp',
      'assets/images/collection-05.webp'
    ],
    description: 'Soft rose pink everyday kurta set accented with cream rose prints along the cuffs and border, paired with coordinated straight-fit cotton pants.',
    fabric: 'Pure Mercerized Cotton',
    work: 'Delicate Ivory Floral Placement Print',
    details: [
      'Tailored notched neckline with clean tonal princess seams',
      'Ivory rose sketch print placed along cuffs, hem, and trousers',
      'Soft breathable finish crafted for all-day comfort',
      'Includes matching straight-cut cotton trousers',
      'Estimated crafting timeframe: 1–2 weeks'
    ]
  },

  // ==========================================
  // FESTIVE COLLECTION
  // ==========================================
  {
    id: 'prod-18',
    name: 'Rajwada Maroon Zardozi Chevron Lehenga',
    category: 'festive-collection',
    categoryName: 'Festive Collection',
    price: '₹24,000',
    badge: 'Festive Edit',
    images: [
      'assets/images/collection-04.webp',
      'assets/images/product-08.webp',
      'assets/images/product-16.webp'
    ],
    description: 'Opulent deep maroon festive lehenga paired with an olive-and-maroon embroidered sweetheart blouse, featuring shimmering chevron gold work and scenic hemline panels.',
    fabric: 'Silk Velvet Blouse & Heavy Raw Silk Skirt',
    work: 'Hand-Worked Chevron Zardozi, Cutdana & Floral Applique',
    details: [
      'Structured olive-green and maroon velvet blouse with intricate sleeve work',
      'Chevron gold zari waist panel transitioning into diamond motifs',
      'Reinforced structured hemline for grand bridal and festive flare',
      'Includes protective garment storage box',
      'Estimated crafting timeframe: 3–4 weeks'
    ]
  },
  {
    id: 'prod-19',
    name: 'Neela Indigo Botanical Collared Co-ord',
    category: 'casual-wear',
    categoryName: 'Casual Wear',
    price: '₹29,000',
    badge: 'Statement Print',
    images: [
      'assets/images/product-11.webp',
      'assets/images/product-06.webp',
      'assets/images/story-01.webp'
    ],
    description: 'Relaxed indigo blue collared tunic and straight trousers highlighted with ivory floral sketches and subtle teal leaf accents.',
    fabric: '100% Soft Printed Cotton',
    work: 'Two-Tone Indigo & Ivory Botanical Print with Shirt Cuffs',
    details: [
      'Deep indigo canvas printed with crisp ivory flower and teal leaf motifs',
      'Relaxed shirt-collar neckline with pearl button closure',
      'Coordinating wide-leg trousers for effortless two-piece dressing',
      'Tailored with breathable natural cotton finish',
      'Estimated crafting timeframe: 1–2 weeks'
    ]
  },
  {
    id: 'prod-20',
    name: 'Rubina Wine Maroon Embroidered Anarkali Gown',
    category: 'festive-collection',
    categoryName: 'Festive Collection',
    price: '₹22,500',
    badge: 'Modern Runway',
    images: [
      'assets/images/product-12.webp',
      'assets/images/collection-03.webp'
    ],
    description: 'Deep wine maroon floor-length flared anarkali gown with dramatic bell sleeves, an embroidered choker collar, and antique gold floral motifs along the pleated hem.',
    fabric: 'Fluid Georgette & Silk Crepe',
    work: 'Gold Metallic Floral Embroidery on Bell Sleeves & Hem',
    details: [
      'Wide sweetheart neckline paired with a matching embroidered choker',
      'Dramatic flared bell sleeves embroidered in antique gold florals',
      'Knife-pleated hemline tier adding fluid movement',
      'Made-to-measure tailoring option included',
      'Estimated crafting timeframe: 3 weeks'
    ]
  },
  {
    id: 'prod-21',
    name: 'Lavanya Ivory & Crimson Temple Silk Saree',
    category: 'festive-collection',
    categoryName: 'Festive Collection',
    price: '₹20,000',
    badge: 'Festive Couture',
    images: [
      'assets/images/product-18.webp',
      'assets/images/product-09.webp',
      'assets/images/collection-01.webp'
    ],
    description: 'Classic cream Kanjivaram silk saree woven with fine self-check motifs, wide antique gold zari borders, and a rich crimson border paired with an embroidered red blouse.',
    fabric: 'Pure Mulberry Kanjivaram Silk',
    work: 'Woven Gold Zari Border & Pearl-Edged Blouse Sleeves',
    details: [
      'Radiant ivory silk weave balanced by a vibrant vermilion-red border',
      'Intricate antique gold zari motifs along the red blouse sleeves',
      'Hand-finished pearl bead edging along the sleeve cuff',
      'Delivery with protective hanging suit bag',
      'Estimated crafting timeframe: 2–3 weeks'
    ]
  },

  // ==========================================
  // CASUAL WEAR
  // ==========================================
  {
    id: 'prod-22',
    name: 'Anvi Mauve Rose Printed Kurta Set',
    category: 'casual-wear',
    categoryName: 'Casual Wear',
    price: '₹14,000',
    badge: 'Daily Luxury',
    images: [
      'assets/images/collection-05.webp',
      'assets/images/product-07.webp'
    ],
    description: 'Mauve-rose relaxed cotton kurta set featuring a notched V-neckline and cream botanical prints across the hem, sleeves, and tailored trousers.',
    fabric: 'Breathable Pure Handloom Cotton',
    work: 'Crisp Cream Botanical Print with Notched Neckline',
    details: [
      'Soft mauve-rose cotton tailored for warm-weather comfort',
      'Three-quarter sleeves with subtle side slit cuffs',
      'Straight-fit trousers with matching ivory floral print at ankle',
      'Pre-washed and pre-shrunk for effortless home care',
      'Estimated crafting timeframe: 1–2 weeks'
    ]
  },
  {
    id: 'prod-23',
    name: 'Maya Black Botanical Belted Midi Dress',
    category: 'casual-wear',
    categoryName: 'Casual Wear',
    price: '₹17,500',
    badge: 'Daywear Edit',
    images: [
      'assets/images/product-13.webp',
      'assets/images/product-04.webp',
      'assets/images/hero-03.webp'
    ],
    description: 'Easygoing black short-sleeve shirt-dress covered in warm coral, cream, and sage floral motifs with a cinching waist tie.',
    fabric: 'Soft Cotton-Viscose Blend',
    work: 'All-Over Floral Print with Tailored Shirt Collar',
    details: [
      'Rich black base lifted by warm earthy floral patterns',
      'Relaxed silhouette suitable for brunch, travel, or casual evenings',
      'Detachable matching fabric waist belt for adjustable shaping',
      'Breathable unlined drape with clean inside French seams',
      'Estimated crafting timeframe: 1–2 weeks'
    ]
  },
  {
    id: 'prod-24',
    name: 'Saanvi Indigo Floral Printed Tunic Set',
    category: 'casual-wear',
    categoryName: 'Casual Wear',
    price: '₹16,000',
    badge: 'Relaxed Tailoring',
    images: [
      'assets/images/story-01.webp',
      'assets/images/product-11.webp'
    ],
    description: 'Deep indigo printed button-placket tunic and matching wide trousers in breathable cotton, designed for effortless smart-casual daytime dressing.',
    fabric: 'Pure Combed Cotton',
    work: 'Botanical Hand-Screen Print with Three-Quarter Sleeves',
    details: [
      'Rich indigo-blue cotton printed with oversized cream iris florals',
      'Versatile shirt-collar tunic with half button placket',
      'Paired with relaxed straight-leg printed trousers',
      'Hand-finished cuffs with genuine mother-of-pearl buttons',
      'Estimated crafting timeframe: 1–2 weeks'
    ]
  },
  {
    id: 'prod-25',
    name: 'Gulbahar Embroidered Cream Organza Dupatta',
    category: 'artisanal-craft',
    categoryName: 'Artisanal Craft',
    price: '₹13,500',
    badge: 'Atelier Favorite',
    images: [
      'assets/images/social-01.webp',
      'assets/images/collection-07.webp',
      'assets/images/story-03.webp'
    ],
    description: 'Translucent cream organza stole hand-embroidered with trailing vines and vibrant crimson, violet, and sage floral borders finished with red thread tassels.',
    fabric: 'Sheer Pure Silk Organza',
    work: 'Dense Multicolor Resham Floral Embroidery & Red Tassels',
    details: [
      'Airy cream silk organza base embroidered with colourful garden vines',
      'Wide floral-embroidered border framing all four sides',
      'Hand-knotted crimson thread tassels along the edges',
      'Pairs effortlessly with solid ivory, red, or emerald kurtas',
      'Estimated crafting timeframe: 2 weeks'
    ]
  },

  // ==========================================
  // NEW ARRIVALS
  // ==========================================
  {
    id: 'prod-26',
    name: 'Aranya Emerald Botanical Tunic Co-ord',
    category: 'new-arrivals',
    categoryName: 'New Arrivals',
    price: '₹16,500',
    badge: 'Seasonal Drop',
    images: [
      'assets/images/collection-06.webp',
      'assets/images/product-10.webp',
      'assets/images/product-19.webp'
    ],
    description: 'Fresh forest green two-piece co-ord set featuring a relaxed stand-collar tunic and wide-leg trousers in rich coral and ochre floral motifs.',
    fabric: 'Lightweight Cotton-Linen Blend',
    work: 'Vibrant Botanical Print with Relaxed Three-Quarter Sleeves',
    details: [
      'Rich forest-green background with multi-hued floral tapestry print',
      'Mandarin collar tunic with comfortable A-line flare',
      'Includes coordinating straight-cut printed trousers',
      'Comes packaged in a signature fabric keepsake garment bag',
      'Estimated crafting timeframe: 1–2 weeks'
    ]
  },
  {
    id: 'prod-27',
    name: 'Zoya Champagne Raw-Silk Bell-Sleeve Gown',
    category: 'new-arrivals',
    categoryName: 'New Arrivals',
    price: '₹17,500',
    badge: 'Couture Edit',
    images: [
      'assets/images/product-14.webp',
      'assets/images/collection-08.webp',
      'assets/images/product-33.webp'
    ],
    description: 'Warm champagne raw-silk flared evening gown featuring an embroidered V-neckline and sheer organza bell sleeves detailed with pastel floral needlework.',
    fabric: 'Pure Raw Silk & Sheer Organza Sleeves',
    work: 'Pastel Floral Thread & Sequin Embroidery on Neckline & Cuffs',
    details: [
      'Luminous champagne raw silk with natural handloom slub texture',
      'Sheer organza flared bell sleeves worked in pastel floral motifs',
      'Tailored empire bodice transitioning into an expansive flared skirt',
      'Matching embroidered floral border along the hemline',
      'Estimated crafting timeframe: 3 weeks'
    ]
  },
  {
    id: 'prod-28',
    name: 'Aafreen Magenta & Gold Foil Kurta Set',
    category: 'new-arrivals',
    categoryName: 'New Arrivals',
    price: '₹25,000',
    badge: 'Runway Pick',
    images: [
      'assets/images/product-24.webp',
      'assets/images/product-01.webp',
      'assets/images/hero-01.webp'
    ],
    description: 'Rich magenta flared kurta with a slit mandarin neckline and shimmering gold foil botanical prints, accompanied by matching trousers and a gold-trimmed dupatta.',
    fabric: 'Silk-Blend Chanderi with Soft Cotton Lining',
    work: 'Gold Foil Botanical Print & Striped Zari Borders',
    details: [
      'Gathered waist anarkali kurta with gold-striped sleeve cuffs',
      'Matching straight trousers dotted with subtle gold motifs',
      'Flowing magenta dupatta framed with woven gold borders',
      'Customized tailor fitting included with every order',
      'Estimated crafting timeframe: 2–3 weeks'
    ]
  },

  // ==========================================
  // ARTISANAL CRAFT
  // ==========================================
  {
    id: 'prod-29',
    name: 'Nargis Floral Embroidered Organza Stole',
    category: 'artisanal-craft',
    categoryName: 'Artisanal Craft',
    price: '₹12,500',
    badge: 'Artisanal Embroidery',
    images: [
      'assets/images/collection-07.webp',
      'assets/images/story-03.webp',
      'assets/images/social-01.webp'
    ],
    description: 'Artisanal cream sheer organza drape adorned with dense multicolor botanical needlework along wide floral borders and handcrafted red tassels.',
    fabric: 'Fine Sheer Silk Organza',
    work: 'Hand-Worked Multicolor Satin-Stitch Floral Embroidery',
    details: [
      'Intricate floral and leafy vine needlework across sheer cream organza',
      'Dense crimson, periwinkle, and olive embroidery along the border',
      'Finished with hand-tied bright red silk tassels',
      'Pairs seamlessly with plain silk kurtas or evening separates',
      'Estimated crafting timeframe: 2–3 weeks'
    ]
  },
  {
    id: 'prod-30',
    name: 'Kalyani Rust & Gold Brocade Silk Saree',
    category: 'artisanal-craft',
    categoryName: 'Artisanal Craft',
    price: '₹11,000',
    badge: 'Heritage Brocade',
    images: [
      'assets/images/product-15.webp',
      'assets/images/product-02.webp',
      'assets/images/product-26.webp'
    ],
    description: 'Close-up heritage weave showcasing a scalloped antique gold brocade pallu woven onto luminous rust-orange pure silk with a contrasting maroon selvedge.',
    fabric: 'Pure Handloom Silk & Antique Gold Zari',
    work: 'Dense Scalloped Brocade Pallu Weave',
    details: [
      'Intricate repeating scalloped arch motif in antique gold zari',
      'Crisp contrasting maroon border framing the woven brocade',
      'Pure silk drape with lightweight fluidity and luminous sheen',
      'Includes matching unstitched silk blouse fabric',
      'Estimated crafting timeframe: 2 weeks'
    ]
  },
  {
    id: 'prod-31',
    name: 'Zardozi Olive & Maroon Bridal Lehenga',
    category: 'artisanal-craft',
    categoryName: 'Artisanal Craft',
    price: '₹13,500',
    badge: 'Master Craft',
    images: [
      'assets/images/product-16.webp',
      'assets/images/product-08.webp',
      'assets/images/collection-04.webp'
    ],
    description: 'Intricately hand-worked olive-green and maroon velvet blouse paired with a deep maroon skirt embroidered in antique gold chevron zari and floral motifs.',
    fabric: 'Micro-Velvet & Heavy Silk',
    work: 'Hand-Embroidered Zardozi, Sequins & Chevron Bullion Work',
    details: [
      'Dense multi-stitch zardozi, sequin, and resham embroidery on bodice',
      'Precision chevron gold work transitioning into diamond botanical panels',
      'Tailored exclusively to individual body measurements',
      'Includes custom blouse fitting session',
      'Estimated crafting timeframe: 3–4 weeks'
    ]
  },
  {
    id: 'prod-32',
    name: 'Kashida Hand-Embroidered Organza Border',
    category: 'artisanal-craft',
    categoryName: 'Artisanal Craft',
    price: 'Price on Request',
    badge: 'Bespoke Atelier',
    images: [
      'assets/images/story-03.webp',
      'assets/images/collection-07.webp',
      'assets/images/social-01.webp'
    ],
    description: 'Macro craft study of our cream sheer organza border featuring layered crimson, lavender, and leaf-green floral needlework finished with hand-tied red tassels.',
    fabric: 'Pure Sheer Silk Organza',
    work: 'Artisanal Multicolor Floral Threadwork & Tassel Edging',
    details: [
      'Custom embroidery color palettes and border widths made to order',
      'Fine hand-guided needlework on translucent silk organza',
      'Hand-knotted tassel finishing in custom dye shades',
      'Available as bespoke dupattas, stoles, or saree trims',
      'Lead time: 3–4 weeks'
    ]
  },

  // ==========================================
  // SIGNATURE SERIES
  // ==========================================
  {
    id: 'prod-33',
    name: 'Signature Midnight Navy Embroidered Gown',
    category: 'signature-series',
    categoryName: 'Signature Series',
    price: '₹28,000',
    badge: 'Archive Edit',
    images: [
      'assets/images/product-17.webp',
      'assets/images/collection-03.webp'
    ],
    description: 'Deep midnight navy full-skirted pleated anarkali gown enriched with antique gold floral embroidery across the bodice, cuffs, and tiered hem.',
    fabric: 'Pure Mulberry Silk Crepe',
    work: 'Signature Gold Botanical Embroidery & Knife-Pleated Hem',
    details: [
      'Rich midnight navy hue accented with fine metallic gold florals',
      'Full-length sleeves with detailed embroidered cuffs',
      'Deep knife-pleated lower ruffle for dramatic movement',
      'Private salon fitting session included at our flagship studio',
      'Estimated crafting timeframe: 3–4 weeks'
    ]
  },
  {
    id: 'prod-34',
    name: 'Signature Royal Maroon Chevron Lehenga',
    category: 'signature-series',
    categoryName: 'Signature Series',
    price: '₹15,000',
    badge: 'Legacy Edition',
    images: [
      'assets/images/product-28.webp',
      'assets/images/product-08.webp',
      'assets/images/product-16.webp'
    ],
    description: 'Heirloom deep maroon and olive bridal lehenga choli encrusted with geometric gold chevron zari, sequin highlights, and dense botanical border panels.',
    fabric: 'Plush Silk Velvet & Heavy Raw Silk',
    work: 'Master Zardozi, Antique Gold Chevron & Mirror Accents',
    details: [
      'Striking deep maroon lehenga with contrasting olive embroidered choli',
      'Ideal for bridal ceremonies, receptions, and grand festive galas',
      'Multi-layered skirt hem finished with architectural embroidery',
      'Custom size tailoring and trial fitting included',
      'Estimated crafting timeframe: 3–4 weeks'
    ]
  }
];

// Attach to window object for universal script access
if (typeof window !== 'undefined') {
  window.PRODUCTS = PRODUCTS;
  window.CATEGORIES = CATEGORIES;
}

// Support CommonJS if loaded in Node environment
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { CATEGORIES, PRODUCTS };
}
