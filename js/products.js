/**
 * Your Brand — Master Product & Collection Catalog
 * Contains all product and photography data grouped by category slugs:
 * ethnic-wear, western-wear, occasion-wear, festive-collection, casual-wear, new-arrivals, artisanal-craft, signature-series
 */

const CATEGORIES = [
  { slug: 'all', name: 'All Collections', desc: 'Complete contemporary fashion & bespoke apparel' },
  { slug: 'ethnic-wear', name: 'Ethnic Wear', desc: 'Handcrafted traditional silhouettes & festive weaves' },
  { slug: 'western-wear', name: 'Western Wear', desc: 'Tailored suits, evening dresses & modern silhouettes' },
  { slug: 'occasion-wear', name: 'Occasion Wear', desc: 'Statement ensembles & celebratory evening wear' },
  { slug: 'festive-collection', name: 'Festive Collection', desc: 'Rich textures, festive palettes & artisanal craft' },
  { slug: 'casual-wear', name: 'Casual Wear', desc: 'Everyday luxury, breathable coordinates & essentials' },
  { slug: 'new-arrivals', name: 'New Arrivals', desc: 'Fresh seasonal drops & contemporary edits' },
  { slug: 'artisanal-craft', name: 'Artisanal Craft', desc: 'Hand embroidery, detailed beadwork & textures' },
  { slug: 'signature-series', name: 'Signature Series', desc: 'Exclusive house archives & tailored capsule pieces' }
];

const PRODUCTS = [
  // ==========================================
  // ETHNIC WEAR
  // ==========================================
  {
    id: 'prod-01',
    name: 'Aurelia Crimson Silk Kurta Set',
    category: 'ethnic-wear',
    categoryName: 'Ethnic Wear',
    price: '₹18,500',
    badge: 'Best Seller',
    images: [
      'assets/images/collection-01.webp',
      'assets/images/hero-03.webp',
      'assets/images/story-04.webp'
    ],
    description: '(Sample specification) Pure mulberry silk kurta set handwoven with subtle zari motifs along the neckline and cuffs. Paired with tailored cigarette trousers and a coordinating sheer organza dupatta.',
    fabric: 'Pure Mulberry Silk & Muted Gold Zari',
    work: 'Authentic Handloom Weave with Delicate Embroidered Edging',
    details: [
      'Pure handloom silk certified with Silk Mark authentication',
      'Fine zari butta detailing across the bodice and dupatta border',
      'Includes tailored straight-cut trousers with elasticated waistband',
      'Bespoke fitting and sleeve customization available on request',
      'Estimated crafting & delivery timeframe: 2–3 weeks'
    ]
  },
  {
    id: 'prod-02',
    name: 'Ananya Saffron Organza Anarkali',
    category: 'ethnic-wear',
    categoryName: 'Ethnic Wear',
    price: '₹22,000',
    badge: 'Editorial Pick',
    images: [
      'assets/images/product-01.webp',
      'assets/images/collection-07.webp'
    ],
    description: '(Sample specification) Luminous saffron yellow flared anarkali suit crafted in sheer silk organza. Finished with delicate hand-embroidered lace edging and tonal sequin accents along the hemline.',
    fabric: 'Raw Silk Bodice & Fine Silk Organza Flare',
    work: 'Hand-Embroidered Zardozi Kiran Edging with Micro Sequins',
    details: [
      'Multi-panel kalidar flare with structured inner lining',
      'Intricately embellished neckline with fine thread and mirror detailing',
      'Includes matching sheer organza stole with hand-finished tassels',
      'Custom color options available for festive group orders',
      'Estimated crafting timeframe: 3–4 weeks'
    ]
  },
  {
    id: 'prod-03',
    name: 'Mayura Tangerine Silk Ensemble',
    category: 'ethnic-wear',
    categoryName: 'Ethnic Wear',
    price: '₹19,500',
    badge: 'Heirloom',
    images: [
      'assets/images/product-02.webp',
      'assets/images/collection-01.webp'
    ],
    description: '(Sample specification) Vibrant tangerine pure silk ensemble with bottle green border accents. Tailored with interlocking zari borders and auspicious geometric motifs.',
    fabric: 'Heirloom Heavy-Ply Pure Silk',
    work: 'Interlocked Zari Border with Hand-Finished Detailing',
    details: [
      'Traditional handloom weaving techniques with dual-tone sheen',
      'Contrasting deep emerald trims along sleeve cuffs and placket',
      'Coordinating tailored bottom fabric with soft silk lining',
      'Preserved with protective anti-tarnish tissue wrapping',
      'Estimated crafting timeframe: 2–3 weeks'
    ]
  },
  {
    id: 'prod-04',
    name: 'Kalyani Woven Gold Silk Suit',
    category: 'ethnic-wear',
    categoryName: 'Ethnic Wear',
    price: '₹21,000',
    badge: 'Classic Weave',
    images: [
      'assets/images/product-03.webp',
      'assets/images/product-15.webp'
    ],
    description: '(Sample specification) Radiant woven gold tissue suit featuring delicate floral boota patterns and hand-tasseled borders. Tailored for classic evening celebrations.',
    fabric: 'Pure Gold Tissue Silk with Soft Cotton Lining',
    work: 'Solid Gold Zari Brocade & Hand-Tasseled Hemlines',
    details: [
      'All-over micro-butta detailing woven with antique gold yarn',
      'Handcrafted tassels along the dupatta perimeter',
      'Comes with embroidered raw silk trousers',
      'Custom neckline and sleeve tailoring included',
      'Estimated crafting timeframe: 3 weeks'
    ]
  },
  {
    id: 'prod-05',
    name: 'Samriddhi Festive Silk Coord Set',
    category: 'ethnic-wear',
    categoryName: 'Ethnic Wear',
    price: '₹16,500',
    badge: 'Festive Edit',
    images: [
      'assets/images/story-02.webp',
      'assets/images/social-02.webp'
    ],
    description: '(Sample specification) Coordinated pure silk festive set featuring a contemporary asymmetric tunic paired with pleated palazzos in a rich jewel-tone palette.',
    fabric: '100% Pure Mulberry Silk & Metallic Zari Highlights',
    work: 'Contrast Piping with Delicate Gota Embroidery',
    details: [
      'Available in coordinating seasonal jewel colorways',
      'Lightweight and fluid drape designed for day-long festive comfort',
      'Includes detachable waist belt with hand-sewn embellishments',
      'Easy customization of length and trouser silhouette',
      'Estimated crafting timeframe: 2 weeks'
    ]
  },
  {
    id: 'prod-06',
    name: 'Devika Crimson Velvet Jacket Suit',
    category: 'ethnic-wear',
    categoryName: 'Ethnic Wear',
    price: '₹24,000',
    badge: 'New Edition',
    images: [
      'assets/images/story-04.webp',
      'assets/images/product-01.webp'
    ],
    description: '(Sample specification) Regal crimson velvet longline jacket suit enriched with hand-cutwork zardozi borders and seed pearl embroidery over tailored silk trousers.',
    fabric: 'Plush Silk Velvet & Pure Silk Dupion',
    work: 'Hand-Cutwork Border, Micro Pearls & Dabka Wire Embroidery',
    details: [
      'Dimensional wirework embroidery on lapels and sleeve cuffs',
      'Paired with straight-fit silk trousers and sheer tissue dupatta',
      'Complimentary personalized trial and fitting session',
      'Custom monogramming option available on jacket lining',
      'Estimated crafting timeframe: 3–4 weeks'
    ]
  },

  // ==========================================
  // WESTERN WEAR
  // ==========================================
  {
    id: 'prod-07',
    name: 'Seraphina French Lace Evening Gown',
    category: 'western-wear',
    categoryName: 'Western Wear',
    price: '₹28,000',
    badge: 'Couture Signature',
    images: [
      'assets/images/collection-02.webp',
      'assets/images/hero-05.webp',
      'assets/images/product-11.webp'
    ],
    description: '(Sample specification) Architectural corseted evening gown featuring hand-placed French Chantilly lace, scalloped hemline, and an illusion back tailored to bespoke measurements.',
    fabric: 'French Chantilly Lace, Silk Tulle & Duchess Satin',
    work: 'Hand-Appliquéd Lace, Micro Crystals & Pearl Boning',
    details: [
      'Inner corset boning with comfortable structured support',
      'Scalloped hemline hand-cut along the organic lace pattern',
      'Concealed back zip with hand-covered satin button facade',
      'Complimentary garment bag and personalized hanger included',
      'Estimated crafting timeframe: 3–5 weeks'
    ]
  },
  {
    id: 'prod-08',
    name: 'Valerie Architectural Satin Gown',
    category: 'western-wear',
    categoryName: 'Western Wear',
    price: '₹18,500',
    badge: 'Minimalist Grace',
    images: [
      'assets/images/product-04.webp',
      'assets/images/collection-04.webp'
    ],
    description: '(Sample specification) Heavyweight duchess satin evening dress crafted with clean minimalist lines, an elegant boat neckline, and structured box pleats with deep hidden pockets.',
    fabric: 'Ultra-Luxe Heavy Duchess Satin & Silk Lining',
    work: 'Architectural Seaming & Hand-Covered Fabric Buttons',
    details: [
      'Timeless clean silhouette tailored for modern formal evenings',
      'Concealed deep side pockets seamlessly integrated into pleated skirt',
      'Sweeping train with interior bustle loop for evening events',
      'Available in ivory, champagne, and midnight navy',
      'Estimated crafting timeframe: 3 weeks'
    ]
  },
  {
    id: 'prod-09',
    name: 'Celeste Pearl-Embroidered Cape Dress',
    category: 'western-wear',
    categoryName: 'Western Wear',
    price: '₹21,000',
    badge: 'Bespoke Edit',
    images: [
      'assets/images/product-05.webp',
      'assets/images/collection-07.webp'
    ],
    description: '(Sample specification) Shimmering ivory organza dress paired with a detachable sheer cape embellished with hand-embroidered pearl borders and delicate tonal floral threadwork.',
    fabric: 'Pure Shimmer Silk Organza & French Lace',
    work: 'Hand Cutwork, Natural Seed Pearls & Silk Floss Embroidery',
    details: [
      'Detachable cape adds two distinct styling looks in one garment',
      'Scalloped perimeter hand-worked with lustrous seed pearls',
      'Tailored with soft stretch lining for effortless movement',
      'Custom length adjustments included at no additional charge',
      'Estimated crafting timeframe: 3–4 weeks'
    ]
  },
  {
    id: 'prod-10',
    name: 'Evangeline Tailored Shimmer Blazer Set',
    category: 'western-wear',
    categoryName: 'Western Wear',
    price: '₹19,000',
    badge: 'Tailored Luxury',
    images: [
      'assets/images/product-06.webp',
      'assets/images/product-16.webp'
    ],
    description: '(Sample specification) Luminous antique gold tissue pantsuit featuring a double-breasted structured blazer, peaked lapels, and high-waisted pleated wide-leg trousers.',
    fabric: 'Metallic Tissue Silk & Pure Wool Crepe Blend',
    work: 'Precision Tailoring with Hand-Stitched Pick Lapel Detailing',
    details: [
      'Subtle metallic sheen that reflects warm ambient evening light',
      'Horn buttons and functional interior passport pocket',
      'High-waisted trousers with adjustable side tabs',
      'Crafted in limited numbers per seasonal edition',
      'Estimated crafting timeframe: 2–3 weeks'
    ]
  },

  // ==========================================
  // OCCASION WEAR
  // ==========================================
  {
    id: 'prod-11',
    name: 'Noor Blush Pink Pleated Skirt Set',
    category: 'occasion-wear',
    categoryName: 'Occasion Wear',
    price: '₹22,500',
    badge: 'Pastel Edit',
    images: [
      'assets/images/collection-03.webp',
      'assets/images/hero-01.webp',
      'assets/images/product-07.webp'
    ],
    description: '(Sample specification) Ethereal blush pink skirt set adorned with champagne beads, floral threadwork, and sheer dupatta crafted for celebratory galas and receptions.',
    fabric: 'Pure Silk Organza, Soft Net & Butter Silk Lining',
    work: 'Resham Floral Threadwork, Micro Pearls & Champagne Cutdana',
    details: [
      'Voluminous 16-panel flared skirt with canvas inner flare',
      'Sweetheart neckline top with hand-embroidered cap sleeves',
      'Lightweight dupatta with delicate four-sided scalloped borders',
      'Detachable embroidered waist belt included',
      'Estimated crafting timeframe: 3–4 weeks'
    ]
  },
  {
    id: 'prod-12',
    name: 'Aurelia Floral Organza Maxi Ensemble',
    category: 'occasion-wear',
    categoryName: 'Occasion Wear',
    price: '₹23,000',
    badge: 'Romantic Glamour',
    images: [
      'assets/images/product-07.webp',
      'assets/images/collection-03.webp'
    ],
    description: '(Sample specification) Romantic pastel ensemble handcrafted in sheer silk organza, adorned with hand-painted botanical motifs and glistening champagne sequin handwork.',
    fabric: 'Hand-Painted Silk Organza & Shimmer Crepe',
    work: 'Watercolour Botanical Print with Hand Sequin Embellishment',
    details: [
      'Bespoke botanical print exclusive to our atelier collection',
      'Delicate micro-pleated waistband with handcrafted fabric tassels',
      'Tailored top with sheer illusion back and mother-of-pearl buttons',
      'Ideal for garden parties, sunset soirées, and gallery openings',
      'Estimated crafting timeframe: 3 weeks'
    ]
  },
  {
    id: 'prod-13',
    name: 'Samira Fuchsia Georgette Gown',
    category: 'occasion-wear',
    categoryName: 'Occasion Wear',
    price: '₹26,000',
    badge: 'Evening Glow',
    images: [
      'assets/images/product-08.webp',
      'assets/images/product-15.webp'
    ],
    description: '(Sample specification) Radiant fuchsia silk georgette gown lavishly embellished with antique gold geometric chevron patterns and a hand-worked crystal bodice.',
    fabric: 'Pure Silk Georgette & Fine Metallic Gold Thread',
    work: 'Chevron Zari Geometrics & Hand-Encrusted Crystal Bodice',
    details: [
      'Elongated silhouette engineered with fluid drape and posture',
      'Built-in cup support with customizable neckline depth',
      'Includes matching sheer shoulder wrap with embellished borders',
      'Precision sizing adjusted to individual height and measurements',
      'Estimated crafting timeframe: 3–4 weeks'
    ]
  },
  {
    id: 'prod-14',
    name: 'Althea Emerald Velvet Evening Robe',
    category: 'occasion-wear',
    categoryName: 'Occasion Wear',
    price: '₹25,000',
    badge: 'Winter Royale',
    images: [
      'assets/images/product-09.webp',
      'assets/images/product-24.webp'
    ],
    description: '(Sample specification) Deep emerald velvet evening ensemble embroidered with antique dabka and tilla threadwork, designed for formal winter galas and award evenings.',
    fabric: 'Micro-Velvet & Shimmer Tissue Lining',
    work: 'Antique Dabka, Nakshi Wirework & Emerald Crystal Accents',
    details: [
      'Rich jewel tone with deep light absorption and luxurious handfeel',
      'Features 3D organza floral shoulder appliqués',
      'Reinforced structured hemline for elegant architectural drape',
      'Custom color adaptations available on request',
      'Estimated crafting timeframe: 3–4 weeks'
    ]
  },
  {
    id: 'prod-15',
    name: 'Sitara Ivory Embellished Tunic Set',
    category: 'occasion-wear',
    categoryName: 'Occasion Wear',
    price: '₹24,000',
    badge: 'Heirloom Luxe',
    images: [
      'assets/images/product-10.webp',
      'assets/images/product-12.webp'
    ],
    description: '(Sample specification) Ivory heirloom silk tunic and trouser set designed with subtle reflective mirror motifs, scalloped borders, and an ethereal sheer stole.',
    fabric: 'Ivory Dupion Silk & Translucent Net',
    work: 'Fine Mirror Work Borders, Ivory Thread Embroidery & Zardozi',
    details: [
      'Subtle metallic shimmer designed for candlelit evening dinners',
      'Customized sleeve lengths (sleeveless, three-quarter, or full)',
      'Includes matching embellished fabric clutch purse',
      'Private styling consultation included with every order',
      'Estimated crafting timeframe: 3 weeks'
    ]
  },
  {
    id: 'prod-16',
    name: 'Veda Metallic Tiered Flare Dress',
    category: 'occasion-wear',
    categoryName: 'Occasion Wear',
    price: '₹19,500',
    badge: 'Festive Twirl',
    images: [
      'assets/images/product-23.webp',
      'assets/images/hero-02.webp'
    ],
    description: '(Sample specification) Shimmering gold and ochre tiered dress silhouette engineered for effortless movement and fluid 360-degree rotation on the dance floor.',
    fabric: 'Tissue Georgette & Pure Gold Brocade Trim',
    work: 'Sequinned Chevron Flare with Floral Embroidered Hemline',
    details: [
      'Lightweight multi-tiered construction for effortless movement',
      'Contrast jewel-tone handwork accents along hem',
      'Custom-fitted bodice with tie-up back fastening',
      'Dry-clean only with protective garment bag included',
      'Estimated crafting timeframe: 2–3 weeks'
    ]
  },
  {
    id: 'prod-17',
    name: 'Elysian Champagne Couture Slip & Cape',
    category: 'occasion-wear',
    categoryName: 'Occasion Wear',
    price: '₹27,500',
    badge: 'Runway Edit',
    images: [
      'assets/images/product-25.webp',
      'assets/images/hero-04.webp'
    ],
    description: '(Sample specification) Champagne slip dress and floor-sweeping cape tailored with delicate sequins, liquid silk crepe drape, and subtle micro crystal accents.',
    fabric: 'Champagne Shimmer Tulle & Duchess Crepe',
    work: 'Vertical Bugle Bead Encrusting & Micro Crystal Cascade',
    details: [
      'Flattering elongated silhouette that catches light dynamically',
      'Removable cape piece allows versatile day-to-evening styling',
      'Silk crepe lining that feels breathable against the skin',
      'Private fitting room session available upon appointment',
      'Estimated crafting timeframe: 3–4 weeks'
    ]
  },

  // ==========================================
  // FESTIVE COLLECTION
  // ==========================================
  {
    id: 'prod-18',
    name: 'Ophelia Beaded Tulle Party Gown',
    category: 'festive-collection',
    categoryName: 'Festive Collection',
    price: '₹24,000',
    badge: 'Festive Edit',
    images: [
      'assets/images/collection-04.webp',
      'assets/images/product-04.webp'
    ],
    description: '(Sample specification) Graceful fit-and-flare dress rendered in micro-pleated tulle with hand-embroidered pearl vines along the neckline and corset back.',
    fabric: 'Micro-Pleated Silk Tulle & Soft Crepe Lining',
    work: 'Hand-Embroidered Pearl Vines & Crystal Bodice Applique',
    details: [
      'Structured internal bodice with flexible boning',
      'Lace-up back allowing adjustable micro-adjustments for perfect fit',
      'Built-in support cups and hidden waist stay band',
      'Includes protective garment storage box',
      'Estimated crafting timeframe: 3–4 weeks'
    ]
  },
  {
    id: 'prod-19',
    name: 'Giselle Embroidered Festive Anarkali',
    category: 'festive-collection',
    categoryName: 'Festive Collection',
    price: '₹29,000',
    badge: 'Statement Piece',
    images: [
      'assets/images/product-11.webp',
      'assets/images/collection-04.webp'
    ],
    description: '(Sample specification) Bespoke ivory festive anarkali with sheer pearl-embellished cape, handcrafted floral lace embroidery, and sweeping graceful hemline.',
    fabric: 'Ivory Silk Organza, Beaded Lace & French Tulle Cape',
    work: 'Dimensional Cape Embroidery, Pearl Droplets & Floral Applique',
    details: [
      'Detachable 2.5-meter sheer cape with pearl-encrusted shoulders',
      'Flared silhouette underneath for dual styling versatility',
      'Hemline reinforced with horsehair braid for dramatic flare',
      'Handcrafted under the direct guidance of master tailors',
      'Estimated crafting timeframe: 4–5 weeks'
    ]
  },
  {
    id: 'prod-20',
    name: 'Rosalind Pearl Fringe Cocktail Dress',
    category: 'festive-collection',
    categoryName: 'Festive Collection',
    price: '₹22,500',
    badge: 'Modern Runway',
    images: [
      'assets/images/product-12.webp',
      'assets/images/product-18.webp'
    ],
    description: '(Sample specification) Modern champagne cocktail dress crafted with architectural boning, delicate pearl fringe tassels, and a softly cascading fluid skirt.',
    fabric: 'Champagne Fluid Silk Crepe & Fine Netting',
    work: 'Hand-Strung Pearl Fringe Tassels & Geometric Cutdana',
    details: [
      'Pearl fringe sways gracefully with every step and movement',
      'Plunging illusion neckline with ultra-fine mesh',
      'Low open back with delicate horizontal pearl strap detail',
      'Made-to-measure tailoring option included',
      'Estimated crafting timeframe: 3 weeks'
    ]
  },
  {
    id: 'prod-21',
    name: 'Adeline Jewel-Collar Satin Evening Gown',
    category: 'festive-collection',
    categoryName: 'Festive Collection',
    price: '₹20,000',
    badge: 'Cocktail Couture',
    images: [
      'assets/images/product-18.webp',
      'assets/images/product-12.webp'
    ],
    description: '(Sample specification) Sophisticated champagne reception gown featuring an architectural high neckline and structured bodice designed for formal evening celebrations.',
    fabric: 'Duchess Satin & Beaded Silk Tulle',
    work: 'Micro-Beaded Choker Collar & Fine Pleated Bodice',
    details: [
      'Designed to pair harmoniously with high-end statement jewelry',
      'Flattering mermaid contour with concealed back zipper',
      'Tailored to individual bust, waist, and hip specifications',
      'Delivery with protective hanging suit bag and anti-wrinkle care',
      'Estimated crafting timeframe: 3 weeks'
    ]
  },

  // ==========================================
  // CASUAL WEAR
  // ==========================================
  {
    id: 'prod-22',
    name: 'Avani Organic Linen Tunic & Trousers',
    category: 'casual-wear',
    categoryName: 'Casual Wear',
    price: '₹14,000',
    badge: 'Daily Luxury',
    images: [
      'assets/images/collection-05.webp',
      'assets/images/product-13.webp'
    ],
    description: '(Sample specification) Pure organic linen two-piece set woven with delicate metallic border yarns, balancing relaxed everyday comfort with refined contemporary appeal.',
    fabric: 'Organic Handloom Linen & Muted Metallic Thread',
    work: 'Handloom Shuttle Weave with Refined Geometric Borders',
    details: [
      'Woven by master artisans upholding handloom heritage',
      'Naturally breathable fabric ideal for warm climates',
      'Straight-fit cropped trousers with drawstring waist',
      'Pre-washed and pre-shrunk for effortless home care',
      'Estimated crafting timeframe: 1–2 weeks'
    ]
  },
  {
    id: 'prod-23',
    name: 'Vrinda Pure Cotton Handloom Coord',
    category: 'casual-wear',
    categoryName: 'Casual Wear',
    price: '₹17,500',
    badge: 'Artisan Weave',
    images: [
      'assets/images/product-13.webp',
      'assets/images/collection-05.webp'
    ],
    description: '(Sample specification) Timeless handloom cotton-silk coord set featuring an emerald body and contrasting maroon accents, woven with understated border motifs.',
    fabric: 'Fine Cotton-Silk Blend & Natural Vegetable Dyes',
    work: 'Two-Tone Contrast Weave with Fine Needlework Trims',
    details: [
      'Dual-tone colorway with exceptional handfeel and breathability',
      'Relaxed silhouette suitable for office, travel, or casual dinners',
      'Includes coordinating patch-pocket detail on tunic front',
      'Handcrafted fabric buttons made from leftover textile cuttings',
      'Estimated crafting timeframe: 2 weeks'
    ]
  },
  {
    id: 'prod-24',
    name: 'Tharavadu Relaxed Woven Silk Shirt',
    category: 'casual-wear',
    categoryName: 'Casual Wear',
    price: '₹16,000',
    badge: 'Relaxed Tailoring',
    images: [
      'assets/images/story-01.webp',
      'assets/images/social-01.webp'
    ],
    description: '(Sample specification) Contemporary relaxed-fit woven silk shirt with subtle self-stripes and dropped shoulders, designed for understated smart-casual dressing.',
    fabric: 'Organic Handloom Raw Silk & Soft Cotton Blend',
    work: 'Handloom Shuttle Weave with Hand-Rolled Seams',
    details: [
      'Authentic handloom texture with organic raw-silk slubs',
      'Versatile camp collar styling that dresses up or down',
      'Available in off-white, oat beige, and charcoal black',
      'Hand-finished cuffs with genuine mother-of-pearl buttons',
      'Estimated crafting timeframe: 1–2 weeks'
    ]
  },
  {
    id: 'prod-25',
    name: 'Souparnika Handwoven Everyday Dress',
    category: 'casual-wear',
    categoryName: 'Casual Wear',
    price: '₹13,500',
    badge: 'Atelier Favorite',
    images: [
      'assets/images/social-01.webp',
      'assets/images/story-01.webp'
    ],
    description: '(Sample specification) Refined handloom shift dress curated for warm-weather styling, featuring subtle metallic pinstripes and functional side seam pockets.',
    fabric: 'Fine Count Handloom Cotton & Silk Weft',
    work: 'Featherweight Handloom Drape with Delicate Metallic Weft',
    details: [
      'Ultra-breathable weave ideal for tropical climates',
      'A-line cut that flatters diverse body silhouettes',
      'Deep concealed side pockets for daily essentials',
      'Machine washable on delicate cycle',
      'Estimated crafting timeframe: 1–2 weeks'
    ]
  },

  // ==========================================
  // NEW ARRIVALS
  // ==========================================
  {
    id: 'prod-26',
    name: 'Imperial Crimson Embroidered Kurta',
    category: 'new-arrivals',
    categoryName: 'New Arrivals',
    price: '₹16,500',
    badge: 'Seasonal Drop',
    images: [
      'assets/images/collection-06.webp',
      'assets/images/product-14.webp'
    ],
    description: '(Sample specification) Deep crimson silk kurta enriched with intricate scalloped zardozi embroidery along the placket and cuffs, from our latest seasonal drop.',
    fabric: 'Signature Crimson Pure Silk & Heavy Gold Thread',
    work: 'Hand-Cut Scalloped Zardozi with Bullion Wire Detailing',
    details: [
      'Signature shade of crimson exclusively dyed for our collection',
      'Hand-cut scalloped borders embroidered on wooden frames',
      'Includes tailored straight-leg silk trousers',
      'Comes packaged in signature fabric keepsake garment bag',
      'Estimated crafting timeframe: 2–3 weeks'
    ]
  },
  {
    id: 'prod-27',
    name: 'Charulata Duo-Tone Silk Slip Dress',
    category: 'new-arrivals',
    categoryName: 'New Arrivals',
    price: '₹17,500',
    badge: 'Dual Tone Edit',
    images: [
      'assets/images/product-14.webp',
      'assets/images/collection-06.webp'
    ],
    description: '(Sample specification) Exquisite chartreuse silk slip dress complemented by a plum border detail and delicate floral buttas, reflecting modern evening minimalism.',
    fabric: 'Dual-Tone Shot Silk (Chartreuse & Royal Plum)',
    work: 'Fine Bias-Cut Tailoring with Delicate Hand-Stitched Hem',
    details: [
      'Color-shifting shot silk that captures distinct tones in warm light',
      'Flattering bias cut that contours naturally to body curves',
      'Adjustable spaghetti straps with gold-tone hardware',
      'Handloom authenticity certified with Silk Mark tag',
      'Estimated crafting timeframe: 2 weeks'
    ]
  },
  {
    id: 'prod-28',
    name: 'Gulzar Deep Garnet Tailored Pantsuit',
    category: 'new-arrivals',
    categoryName: 'New Arrivals',
    price: '₹25,000',
    badge: 'Runway Pick',
    images: [
      'assets/images/product-24.webp',
      'assets/images/collection-06.webp'
    ],
    description: '(Sample specification) Statement garnet red velvet and silk tailored pantsuit featuring an embroidered shawl lapel and straight-leg trousers from the winter capsule.',
    fabric: 'Plush Silk Velvet & Shimmer Organza Highlights',
    work: 'Dense Kasab & Tilla Hand Embroidery on Collar and Pockets',
    details: [
      'Tailored blazer with lightly padded shoulders for strong posture',
      'Matching trousers with tailored front crease and slash pockets',
      'Smooth silk lining for frictionless layering over tops',
      'Customized tailor fitting included with every order',
      'Estimated crafting timeframe: 3–4 weeks'
    ]
  },

  // ==========================================
  // ARTISANAL CRAFT
  // ==========================================
  {
    id: 'prod-29',
    name: 'Dahlia Cutwork & Pearl Embroidered Top',
    category: 'artisanal-craft',
    categoryName: 'Artisanal Craft',
    price: '₹12,500',
    badge: 'Artisanal Cutwork',
    images: [
      'assets/images/collection-07.webp',
      'assets/images/product-16.webp'
    ],
    description: '(Sample specification) Architectural laser and hand cutwork top enriched with Swarovski seed pearls, kasab zardozi, and hand-tasseled back fastening.',
    fabric: 'Raw Silk & Fine Net Base',
    work: 'Laser & Hand Cutwork, Seed Pearls & Fine Kasab Wire',
    details: [
      'Over 60 hours of meticulous hand-needle embroidery per piece',
      'Reinforced cutwork edges that maintain shape across wears',
      'Custom back neckline cutouts tailored to client preference',
      'Pairs seamlessly with plain organza skirts or tailored trousers',
      'Estimated crafting timeframe: 2–3 weeks'
    ]
  },
  {
    id: 'prod-30',
    name: 'Marquise Hand-Embroidered Silk Top',
    category: 'artisanal-craft',
    categoryName: 'Artisanal Craft',
    price: '₹11,000',
    badge: 'Hand Zardozi',
    images: [
      'assets/images/product-15.webp',
      'assets/images/hero-02.webp',
      'assets/images/product-16.webp'
    ],
    description: '(Sample specification) Intricate bullion wire zardozi embroidery with micro pearl enhancements on raw silk, meticulously handcrafted by our master artisans.',
    fabric: 'Pure Mulberry Raw Silk & Gold Bullion Wires',
    work: 'Authentic Frame Zardozi, French Knots & Seed Pearls',
    details: [
      'Pure metal bullion wires that retain their rich luster over decades',
      'Tailored with premium inner lining for complete comfort against skin',
      'Padded bust cups and side zip fastening for a sculpted fit',
      'Color can be customized to match any client fabric swatch',
      'Estimated crafting timeframe: 2 weeks'
    ]
  },
  {
    id: 'prod-31',
    name: 'Artisanal Wire-Embroidered Vest',
    category: 'artisanal-craft',
    categoryName: 'Artisanal Craft',
    price: '₹13,500',
    badge: 'Master Craft',
    images: [
      'assets/images/product-16.webp',
      'assets/images/story-03.webp'
    ],
    description: '(Sample specification) Signature artisan-crafted waistcoat featuring dimensional zardozi wire embroidery, micro seed pearls, and hand-cut metallic borders.',
    fabric: 'Pure Silk Canvas & Metallic Gilt Threads',
    work: 'Master Adda Embroidery with Raised 3D Threadwork',
    details: [
      'Showcases the apex of traditional artisanal hand embroidery',
      'Directly worked on heritage wooden embroidery frames',
      'Tailored exclusively to individual body measurements',
      'Custom monogram embroidery option included',
      'Estimated crafting timeframe: 2–3 weeks'
    ]
  },
  {
    id: 'prod-32',
    name: 'Made-to-Measure Atelier Silhouette',
    category: 'artisanal-craft',
    categoryName: 'Artisanal Craft',
    price: 'Price on Request',
    badge: 'Bespoke Atelier',
    images: [
      'assets/images/story-03.webp',
      'assets/images/product-16.webp'
    ],
    description: '(Sample specification) Bespoke one-on-one couture service, from custom concept sketching to personalized fabric sourcing, embroidery design, and private fittings.',
    fabric: 'Curated Silks, Fine Laces & Exclusive Handloom Weaves',
    work: 'Custom Bespoke Development, Personalized Silhouette & Embroidery',
    details: [
      'Initial 1-on-1 design consultation with our head stylist',
      'Custom conceptual sketches and moodboard development',
      'Personalized fabric swatching and exclusive embroidery sampling',
      'Two progressive fitting sessions before final dispatch',
      'Lead time: 4–6 weeks (express booking available upon request)'
    ]
  },

  // ==========================================
  // SIGNATURE SERIES
  // ==========================================
  {
    id: 'prod-33',
    name: 'Signature Heritage Crimson Ensemble',
    category: 'signature-series',
    categoryName: 'Signature Series',
    price: '₹28,000',
    badge: 'Archive Edit',
    images: [
      'assets/images/product-17.webp',
      'assets/images/collection-06.webp'
    ],
    description: '(Sample specification) Ornate crimson red flared ensemble and embroidered stole embodying timeless glamour with dual-tone antique gold zari and dense floral artistry.',
    fabric: 'Heirloom Crimson Silk & Antique Gold Tissue',
    work: 'Royal Archive Zari Brocade & Hand-Appliqued Borders',
    details: [
      'Heritage archive design celebrating the inception of our couture line',
      'Dual-tone antique zari creating deep dimensional shadows and shine',
      'Comes with commemorative engraved brass archival tag',
      'Private salon fitting session included at our flagship studio',
      'Estimated crafting timeframe: 3–4 weeks'
    ]
  },
  {
    id: 'prod-34',
    name: 'Signature Royal Plum Silk Kurta',
    category: 'signature-series',
    categoryName: 'Signature Series',
    price: '₹15,000',
    badge: 'Legacy Edition',
    images: [
      'assets/images/product-28.webp',
      'assets/images/product-15.webp'
    ],
    description: '(Sample specification) Rich purple silk kurta with intricate gold pinstripes and structured collar. Pure mulberry silk woven with antique gold zari motifs and border work.',
    fabric: 'Pure Mulberry Silk & Antique Gold Zari Stripes',
    work: 'Fine Warp-Striped Gold Zari Weave with Clean Tailoring',
    details: [
      'Striking royal purple body woven with alternating gold pinstripes',
      'Ideal for festive evenings, dinner galas, and celebratory receptions',
      'Includes tailored designer trousers with gold border accent',
      'Certified Silk Mark India authentication included',
      'Estimated crafting timeframe: 2 weeks'
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
