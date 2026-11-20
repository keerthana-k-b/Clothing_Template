/**
 * Your Brand — Master Product & Collection Catalog
 * Contains all product and photography data grouped by category slugs:
 * ethnic-wear, western-wear, occasion-wear, festive-collection, casual-wear, new-arrivals, artisanal-craft, signature-series
 */

const CATEGORIES = [
  { slug: 'all', name: 'All Collections', desc: 'Complete contemporary fashion & ready-to-wear apparel' },
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
  {
    "id": "prod-01",
    "name": "Kaveri Ivory & Crimson Kanjivaram Silk Saree",
    "category": "ethnic-wear",
    "categoryName": "Ethnic Wear",
    "price": "\u20b918,500",
    "badge": "Best Seller",
    "images": [
      "assets/images/product-01.webp",
      "assets/images/collection-01.webp"
    ],
    "description": "Handwoven ivory Kanjivaram silk saree framed with a bright crimson border and antique gold temple zari pallu, paired with a matching red silk blouse featuring intricate gold sleeve embroidery.",
    "fabric": "Pure Kanjivaram Mulberry Silk & Antique Gold Zari",
    "work": "Traditional Zari Border Weave with Hand-Embroidered Blouse Sleeves",
    "details": [
      "Pure handloom silk certified with Silk Mark authentication",
      "Self-woven brocade patterns across the ivory drape",
      "Includes matching red blouse fabric with gold zari sleeve border",
      "Coordinated blouse fabric and styling guidance available on request",
      "Estimated crafting & delivery timeframe: 2\u20133 weeks"
    ]
  },
  {
    "id": "prod-02",
    "name": "Gulshan Embroidered Organza Stole",
    "category": "artisanal-craft",
    "categoryName": "Artisanal Craft",
    "price": "\u20b922,000",
    "badge": "Editorial Pick",
    "images": [
      "assets/images/product-02.webp",
      "assets/images/social-01.webp"
    ],
    "description": "Artisanal ivory sheer silk organza dupatta and stole embellished with vibrant Kashmiri multicolour floral threadwork, scalloped borders, and hand-knotted crimson silk fringe tassels.",
    "fabric": "Pure Silk Sheer Organza & Mulberry Silk Resham Threads",
    "work": "Handcrafted Floral Resham Needlework with Scalloped Silk Tassels",
    "details": [
      "Flared anarkali silhouette with structured mandarin neckline",
      "All-over gold foil botanical accents across bodice and skirt",
      "Includes matching straight-cut trousers and bordered dupatta",
      "Custom sleeve length options available for festive orders",
      "Estimated crafting timeframe: 2\u20133 weeks"
    ]
  },
  {
    "id": "prod-03",
    "name": "Niloufer Royal Blue Embroidered Lehenga",
    "category": "occasion-wear",
    "categoryName": "Occasion Wear",
    "price": "\u20b919,500",
    "badge": "Heirloom",
    "images": [
      "assets/images/product-03.webp",
      "assets/images/product-34.webp"
    ],
    "description": "Regal royal blue raw silk lehenga ensemble adorned with shimmering antique gold sequin bootis, hand-embroidered zari floral border, fitted choli, and matching sheer blue dupatta.",
    "fabric": "Pure Raw Silk, Fine Tulle & Metallic Gold Sequins",
    "work": "Hand-Embroidered Zari Borders with All-Over Sequin Embellishments",
    "details": [
      "Traditional handloom weaving with rich burnt-orange sheen",
      "Dense scalloped antique gold brocade across the pallu",
      "Contrasting deep maroon border along the drape edge",
      "Preserved with protective anti-tarnish tissue wrapping",
      "Estimated crafting timeframe: 2\u20133 weeks"
    ]
  },
  {
    "id": "prod-04",
    "name": "Maya Botanical Floral Tie-Belt Shirt Dress",
    "category": "western-wear",
    "categoryName": "Western Wear",
    "price": "\u20b921,000",
    "badge": "Classic Weave",
    "images": [
      "assets/images/product-04.webp",
      "assets/images/hero-04.webp"
    ],
    "description": "Tailored midi shirt dress crafted from premium viscose-silk twill, featuring a sophisticated beige botanical floral placement print against deep black, spread collar, and matching waist belt.",
    "fabric": "Premium Viscose Silk Twill",
    "work": "Artisanal Botanical Screen Print with Tailored Belt & French Cuffs",
    "details": [
      "Sleeveless raw silk bodice worked with silver and gold florals",
      "Architectural box-pleated peplum waist accented with zari trim",
      "Paired with a full-length micro-pleated skirt and matching stole",
      "Custom neckline and strap adjustments included",
      "Estimated crafting timeframe: 3 weeks"
    ]
  },
  {
    "id": "prod-05",
    "name": "Rhea Breton Striped Crop Top & Denim Set",
    "category": "casual-wear",
    "categoryName": "Casual Wear",
    "price": "\u20b916,500",
    "badge": "Festive Edit",
    "images": [
      "assets/images/product-05.webp",
      "assets/images/social-02.webp"
    ],
    "description": "Contemporary casual separates featuring an off-the-shoulder knit crop top in horizontal black-and-white stripes with ruffled bell cuffs, paired with dark wash high-waisted denim jeans.",
    "fabric": "Ribbed Modal-Cotton Knit & Ring-Spun Indigo Denim",
    "work": "Off-Shoulder Elasticated Ruffle Finish with Tiered Flared Cuffs",
    "details": [
      "Relaxed kaftan drape designed for effortless evening comfort",
      "Broad geometric metallic embroidery framing the neckline and sleeves",
      "Breathable inner cotton voile lining for warm-weather wear",
      "Easy customization of tunic length on request",
      "Estimated crafting timeframe: 2 weeks"
    ]
  },
  {
    "id": "prod-06",
    "name": "Rupali Crimson Brocade Banarasi Saree",
    "category": "festive-collection",
    "categoryName": "Festive Collection",
    "price": "\u20b924,000",
    "badge": "New Edition",
    "images": [
      "assets/images/product-06.webp",
      "assets/images/reel-poster-01.webp"
    ],
    "description": "Celebratory crimson red brocade Banarasi silk saree handwoven with dense gold zari floral jaal patterns across the body, grand ornate pallu, and festive scalloped selvedge.",
    "fabric": "Pure Katan Silk & Electroplated Antique Gold Zari",
    "work": "Traditional Banarasi Kadwa Brocade Weaving with Floral Jaal",
    "details": [
      "Woven scalloped motif pattern spanning the entire pallu",
      "Rich rust-orange body with subtle tonal self-texture",
      "Includes matching unstitched silk blouse piece",
      "Complimentary fall and edging finish before dispatch",
      "Estimated crafting timeframe: 2\u20133 weeks"
    ]
  },
  {
    "id": "prod-07",
    "name": "Ananya Crimson & Emerald Architectural Saree",
    "category": "signature-series",
    "categoryName": "Signature Series",
    "price": "\u20b928,000",
    "badge": "Contemporary Edit",
    "images": [
      "assets/images/product-07.webp",
      "assets/images/story-01.webp"
    ],
    "description": "House signature statement saree pairing rich crimson silk velvet and fluid emerald green georgette, embellished with handcrafted antique gold zardozi border work and matching embroidered blouse.",
    "fabric": "Silk Micro-Velvet, Flowing Georgette & Antique Zari",
    "work": "Micro-Velvet Border Appliqu\u00e9 with Hand Zardozi Embroidery",
    "details": [
      "Cropped boxy silhouette with wide ribbed hem and cuffs",
      "Quarter-zip collar with cognac leather-look zipper pull",
      "Front right utility flap pocket with tonal topstitching",
      "Paired with high-waisted dark olive faux-leather trousers",
      "Estimated crafting timeframe: 1\u20132 weeks"
    ]
  },
  {
    "id": "prod-08",
    "name": "Panna Emerald Silk Saree with Temple Zari",
    "category": "ethnic-wear",
    "categoryName": "Ethnic Wear",
    "price": "\u20b918,500",
    "badge": "Minimalist Grace",
    "images": [
      "assets/images/product-08.webp",
      "assets/images/collection-07.webp"
    ],
    "description": "Handloom emerald green pure mulberry silk saree featuring glowing antique gold temple zari borders, subtle self-textured body, and a lightweight metallic tissue pallu.",
    "fabric": "Pure Handloom Mulberry Silk & Muga Gold Zari",
    "work": "Handwoven Temple Motif Border with Contrast Gold Pallu",
    "details": [
      "Warm rose, cream, and sage botanical print on deep black ground",
      "Short cuffed sleeves and classic pointed shirt collar",
      "Adjustable matching fabric tie belt to define the waist",
      "Ankle-grazing straight midi cut with side seam pockets",
      "Estimated crafting timeframe: 1\u20132 weeks"
    ]
  },
  {
    "id": "prod-09",
    "name": "Tara White Floral Block-Printed Kurta Set",
    "category": "new-arrivals",
    "categoryName": "New Arrivals",
    "price": "\u20b921,000",
    "badge": "Resort Edit",
    "images": [
      "assets/images/product-09.webp",
      "assets/images/reel-poster-03.webp"
    ],
    "description": "Pure white chanderi cotton straight kurta set featuring delicate hand block-printed pink botanical lotus motifs, crochet lace hem inserts, and matching cropped straight trousers.",
    "fabric": "Pure Cotton Chanderi & Mulmul Cotton Lining",
    "work": "Artisanal Hand Block Print with Delicate Cotton Lace Inserts",
    "details": [
      "Crisp graphic ivory leaf pattern across deep charcoal-black base",
      "Sleeveless V-neck wrap top with clean asymmetric closure",
      "Relaxed straight-leg trousers with deep side pockets",
      "Ideal for resort getaways, brunches, and warm-weather travel",
      "Estimated crafting timeframe: 1\u20132 weeks"
    ]
  },
  {
    "id": "prod-10",
    "name": "Gulnar Dusty Rose Floral Tunic Co-ord",
    "category": "casual-wear",
    "categoryName": "Casual Wear",
    "price": "\u20b919,000",
    "badge": "Tailored Luxury",
    "images": [
      "assets/images/product-10.webp",
      "assets/images/product-15.webp"
    ],
    "description": "Relaxed dusty rose and coral pink tunic co-ord set adorned with oversized cream botanical floral placement prints, notched neckline with placket detailing, and matching straight trousers.",
    "fabric": "Breathable Cotton Satin & Slub Weave",
    "work": "Botanical Floral Placement Print with Clean Tailored Hemlines",
    "details": [
      "Crisp white pearl-button placket and folded shirt collar",
      "Three-quarter sleeves with buttoned cuffs for easy styling",
      "High-waisted wide-leg trousers in matching floral print",
      "Pre-washed for breathable softness and zero shrinkage",
      "Estimated crafting timeframe: 1\u20132 weeks"
    ]
  },
  {
    "id": "prod-11",
    "name": "Suhani Heritage Bridal Red Silk Saree",
    "category": "ethnic-wear",
    "categoryName": "Ethnic Wear",
    "price": "\u20b922,500",
    "badge": "Evening Edit",
    "images": [
      "assets/images/product-11.webp",
      "assets/images/product-33.webp"
    ],
    "description": "Timeless vermilion red bridal Banarasi silk saree woven with dense antique gold zari floral vines, grand traditional pallu, and accompanied by a gold embroidered matching blouse piece.",
    "fabric": "Pure Banarasi Katan Silk & Antique Gold Zari",
    "work": "Dense Floral Zari Weaving with Hand-Embroidered Border Finishing",
    "details": [
      "Available in deep midnight navy or rich wine maroon colorways",
      "Voluminous pleated skirt finished with a wide ruffled hem",
      "Botanical gold threadwork ascending from the lower skirt and cuffs",
      "Custom sleeve and neckline styling available to order",
      "Estimated crafting timeframe: 3\u20134 weeks"
    ]
  },
  {
    "id": "prod-12",
    "name": "Vaishnavi Scarlet Red Kanchipuram Saree",
    "category": "ethnic-wear",
    "categoryName": "Ethnic Wear",
    "price": "\u20b923,000",
    "badge": "Daylight Chic",
    "images": [
      "assets/images/product-12.webp",
      "assets/images/product-32.webp"
    ],
    "description": "Grand scarlet red Kanchipuram bridal silk saree with wide contrast gold zari borders featuring temple spires, heavy floral brocade pallu, and traditional south Indian bridal styling.",
    "fabric": "Heavyweight Pure Kanchipuram Silk & Pure Gold Zari",
    "work": "Handloom Korvai Temple Weave with Floral Zari Border",
    "details": [
      "Clean notched V-neckline tailored for everyday comfort",
      "Slit-cuff three-quarter sleeves framed with cream rose motifs",
      "Matching dusty rose straight pants with floral hem border",
      "Pre-shrunk fabric suitable for effortless warm-weather wear",
      "Estimated crafting timeframe: 1\u20132 weeks"
    ]
  },
  {
    "id": "prod-13",
    "name": "Noorani Ivory Georgette Kundan Lehenga",
    "category": "occasion-wear",
    "categoryName": "Occasion Wear",
    "price": "\u20b926,000",
    "badge": "Evening Glow",
    "images": [
      "assets/images/product-13.webp",
      "assets/images/product-26.webp"
    ],
    "description": "Luminous ivory white georgette lehenga ensemble with subtle tone-on-tone gold resham embroidery, micro-sequin highlights, plunging choli, and sheer embroidered net dupatta.",
    "fabric": "Pure Silk Georgette & Soft Net Dupatta",
    "work": "Resham Threadwork with Micro-Sequin and Gold Cutdana Border",
    "details": [
      "Sweetheart-neckline olive and maroon velvet choli with elbow sleeves",
      "Multi-panel flared maroon skirt with upper chevron zari work",
      "Elaborate scenic and floral embroidered border panels along the hem",
      "Precision sizing adjusted to individual height and measurements",
      "Estimated crafting timeframe: 3\u20134 weeks"
    ]
  },
  {
    "id": "prod-14",
    "name": "Paloma Monochrome Leaf-Print Wrap Set",
    "category": "casual-wear",
    "categoryName": "Casual Wear",
    "price": "\u20b925,000",
    "badge": "Heritage Classic",
    "images": [
      "assets/images/product-14.webp",
      "assets/images/product-17.webp"
    ],
    "description": "Modern monochrome resort co-ord featuring an oversized wrap tunic blouse with abstract black and ivory leaf prints, relaxed kimono sleeves, and wide-leg culotte trousers.",
    "fabric": "Premium Crepe Silk & Viscose Twill",
    "work": "Abstract Botanical Placement Print with Wrap Tie Detailing",
    "details": [
      "Cream-ivory body woven with subtle self-floral silk brocade",
      "Contrasting bright crimson and antique gold temple borders",
      "Includes matching red blouse with pearl-edged zari sleeve cuffs",
      "Authenticated pure silk craftsmanship",
      "Estimated crafting timeframe: 2\u20133 weeks"
    ]
  },
  {
    "id": "prod-15",
    "name": "Aanya Coral Botanical Tunic",
    "category": "casual-wear",
    "categoryName": "Casual Wear",
    "price": "\u20b924,000",
    "badge": "Resort Luxe",
    "images": [
      "assets/images/product-15.webp",
      "assets/images/product-10.webp"
    ],
    "description": "Tailored coral pink cotton-satin tunic top featuring delicate white botanical floral placement prints, notched V-neck, clean front placket, and relaxed 3/4 sleeves.",
    "fabric": "Soft Cotton Satin & Linen Blend",
    "work": "Precision Screen Printing with Hand-Stitched Placket Detailing",
    "details": [
      "Easy A-line tunic silhouette with three-quarter sleeves",
      "Vibrant coral, peach, and cream floral pattern on deep forest green",
      "Coordinating wide-leg ankle-length trousers with elasticated waist",
      "Ideal for daytime gatherings, travel, and resort lounging",
      "Estimated crafting timeframe: 1\u20132 weeks"
    ]
  },
  {
    "id": "prod-16",
    "name": "Sierra Off-Shoulder Smocked Crop Top",
    "category": "western-wear",
    "categoryName": "Western Wear",
    "price": "\u20b919,500",
    "badge": "Festive Glow",
    "images": [
      "assets/images/product-16.webp",
      "assets/images/product-19.webp"
    ],
    "description": "Crisp white off-shoulder smocked crop top crafted in stretch cotton poplin, featuring fine elasticated ruching throughout the bodice and micro-ruffled lettuce trims at neckline and sleeves.",
    "fabric": "Elasticated Smocked Stretch Cotton Poplin",
    "work": "Smocked Shirring with Ruffled Lettuce Trim",
    "details": [
      "Rich burnt-orange hue accented with warm metallic embroidery",
      "Wide kimono-style draped sleeves with detailed floral borders",
      "V-neckline trimmed with vertical mirror-like sequin bands",
      "Custom length adjustments available at no extra charge",
      "Estimated crafting timeframe: 2\u20133 weeks"
    ]
  },
  {
    "id": "prod-17",
    "name": "Isha Black & Ivory Wrap Blouse",
    "category": "casual-wear",
    "categoryName": "Casual Wear",
    "price": "\u20b927,500",
    "badge": "Everyday Edit",
    "images": [
      "assets/images/product-17.webp",
      "assets/images/product-14.webp"
    ],
    "description": "Contemporary monochrome leaf-pattern wrap blouse with relaxed crossover V-neckline, self-tie waist sash, and tailored 3/4 kimono-cut sleeves in fluid twill crepe.",
    "fabric": "Breathable Twill Crepe & Viscose Blend",
    "work": "Monochrome Abstract Leaf Screen Print with Sash Tie",
    "details": [
      "Tailored notched neckline with clean tonal princess seams",
      "Ivory rose sketch print placed along cuffs, hem, and trousers",
      "Soft breathable finish crafted for all-day comfort",
      "Includes matching straight-cut cotton trousers",
      "Estimated crafting timeframe: 1\u20132 weeks"
    ]
  },
  {
    "id": "prod-18",
    "name": "Surya Sunshine Yellow & Grey Silk Saree",
    "category": "ethnic-wear",
    "categoryName": "Ethnic Wear",
    "price": "\u20b924,000",
    "badge": "Festive Edit",
    "images": [
      "assets/images/product-18.webp",
      "assets/images/product-30.webp"
    ],
    "description": "Radiant sunshine yellow and slate grey pure Kanchipuram silk saree handwoven with silver floral zari jaal, contrast grey border, and traditional silver jewelry styling.",
    "fabric": "Pure Kanchipuram Silk & Silver Electroplated Zari",
    "work": "Silver Floral Jaal Weave with Traditional Contrast Border",
    "details": [
      "Structured olive-green and maroon velvet blouse with intricate sleeve work",
      "Chevron gold zari waist panel transitioning into diamond motifs",
      "Reinforced structured hemline for grand bridal and festive flare",
      "Includes protective garment storage box",
      "Estimated crafting timeframe: 3\u20134 weeks"
    ]
  },
  {
    "id": "prod-19",
    "name": "Dakota Smocked Ruffle Top",
    "category": "western-wear",
    "categoryName": "Western Wear",
    "price": "\u20b929,000",
    "badge": "Statement Print",
    "images": [
      "assets/images/product-19.webp",
      "assets/images/product-16.webp"
    ],
    "description": "Fitted white smocked off-shoulder bodice in breathable cotton poplin, highlighting intricate multi-row elastic shirring and delicate flutter ruffles along the shoulders.",
    "fabric": "100% Cotton Shirred Poplin",
    "work": "Hand-Guided Smocking with Elasticated Shirred Finish",
    "details": [
      "Deep indigo canvas printed with crisp ivory flower and teal leaf motifs",
      "Relaxed shirt-collar neckline with pearl button closure",
      "Coordinating wide-leg trousers for effortless two-piece dressing",
      "Tailored with breathable natural cotton finish",
      "Estimated crafting timeframe: 1\u20132 weeks"
    ]
  },
  {
    "id": "prod-20",
    "name": "Luka Relaxed Crisp White Linen Shirt",
    "category": "casual-wear",
    "categoryName": "Casual Wear",
    "price": "\u20b922,500",
    "badge": "Modern Runway",
    "images": [
      "assets/images/product-20.webp",
      "assets/images/product-28.webp"
    ],
    "description": "Relaxed oversized white button-down shirt woven from 100% pure European organic linen, featuring classic spread collar, front patch pocket, and roll-tab cuffed sleeves.",
    "fabric": "100% Pure European Organic Linen",
    "work": "Garment Washed Linen with Mother-of-Pearl Button Closures",
    "details": [
      "Wide sweetheart neckline paired with a matching embroidered choker",
      "Dramatic flared bell sleeves embroidered in antique gold florals",
      "Knife-pleated hemline tier adding fluid movement",
      "Standard sizing with regular comfort fit",
      "Estimated crafting timeframe: 3 weeks"
    ]
  },
  {
    "id": "prod-21",
    "name": "Chandrika Silver-Grey & Yellow Silk Saree",
    "category": "ethnic-wear",
    "categoryName": "Ethnic Wear",
    "price": "\u20b920,000",
    "badge": "Festive Edit",
    "images": [
      "assets/images/product-21.webp",
      "assets/images/product-25.webp"
    ],
    "description": "Sophisticated silver-grey handloom silk saree with warm marigold yellow borders, delicate silver zari check weft, and styled with antique oxidized silver jewelry.",
    "fabric": "Handloom Mulberry Silk & Pure Silver Zari",
    "work": "Handwoven Silver Zari Lattice with Contrast Silk Selvedge",
    "details": [
      "Radiant ivory silk weave balanced by a vibrant vermilion-red border",
      "Intricate antique gold zari motifs along the red blouse sleeves",
      "Hand-finished pearl bead edging along the sleeve cuff",
      "Delivery with protective hanging suit bag",
      "Estimated crafting timeframe: 2\u20133 weeks"
    ]
  },
  {
    "id": "prod-22",
    "name": "Rajwada Maroon Zardozi Chevron Lehenga",
    "category": "occasion-wear",
    "categoryName": "Occasion Wear",
    "price": "\u20b914,000",
    "badge": "Daily Luxury",
    "images": [
      "assets/images/product-22.webp",
      "assets/images/reel-poster-05.webp"
    ],
    "description": "Imperial deep maroon silk bridal lehenga ensemble featuring geometric chevron zardozi embroidery in antique gold dabka and sequins, paired with a fitted velvet choli and veil.",
    "fabric": "Silk Velvet, Raw Silk & Metallic Antique Zari",
    "work": "Hand Zardozi Needlework in Geometric Chevron Pattern",
    "details": [
      "Soft mauve-rose cotton tailored for warm-weather comfort",
      "Three-quarter sleeves with subtle side slit cuffs",
      "Straight-fit trousers with matching ivory floral print at ankle",
      "Pre-washed and pre-shrunk for effortless home care",
      "Estimated crafting timeframe: 1\u20132 weeks"
    ]
  },
  {
    "id": "prod-23",
    "name": "Sunehri Marigold Peplum & Pleated Skirt",
    "category": "festive-collection",
    "categoryName": "Festive Collection",
    "price": "\u20b917,500",
    "badge": "Daywear Edit",
    "images": [
      "assets/images/product-23.webp",
      "assets/images/hero-03.webp"
    ],
    "description": "Festive marigold yellow co-ord featuring a hand-embroidered floral peplum bodice with sharp knife-pleated flare, paired with an ankle-length accordion pleated georgette skirt.",
    "fabric": "Pure Chanderi Silk & Flowing Georgette",
    "work": "Hand Zardozi Floral Bodice Embroidery with Accordion Pleating",
    "details": [
      "Rich black base lifted by warm earthy floral patterns",
      "Relaxed silhouette suitable for brunch, travel, or casual evenings",
      "Detachable matching fabric waist belt for adjustable shaping",
      "Breathable unlined drape with clean inside French seams",
      "Estimated crafting timeframe: 1\u20132 weeks"
    ]
  },
  {
    "id": "prod-24",
    "name": "Shahana Midnight Teal & Wine Flared Gown",
    "category": "occasion-wear",
    "categoryName": "Occasion Wear",
    "price": "\u20b916,000",
    "badge": "Relaxed Tailoring",
    "images": [
      "assets/images/product-24.webp",
      "assets/images/reel-poster-06.webp"
    ],
    "description": "Evening ensemble showcasing a midnight teal silk flared maxi gown with intricate gold floral vine tilla embroidery, fitted bodice, and dramatic flared hemline.",
    "fabric": "Pure Silk Georgette & Bamberg Satin",
    "work": "Gold Tilla Needlework with Micro-Pleated Hem Finishing",
    "details": [
      "Rich indigo-blue cotton printed with oversized cream iris florals",
      "Versatile shirt-collar tunic with half button placket",
      "Paired with relaxed straight-leg printed trousers",
      "Hand-finished cuffs with genuine mother-of-pearl buttons",
      "Estimated crafting timeframe: 1\u20132 weeks"
    ]
  },
  {
    "id": "prod-25",
    "name": "Kanchana Silver & Gold Weave Silk Saree",
    "category": "artisanal-craft",
    "categoryName": "Artisanal Craft",
    "price": "\u20b913,500",
    "badge": "Staff Favorite",
    "images": [
      "assets/images/product-25.webp",
      "assets/images/product-21.webp"
    ],
    "description": "Artisan-crafted silver-grey handloom silk saree with marigold yellow selvedge, highlighting traditional handloom weaving techniques and antique silver jewelry ornamentation.",
    "fabric": "Handwoven Mulberry Silk & Silver Zari",
    "work": "Precision Handloom Weaving with Antique Silver Border",
    "details": [
      "Airy cream silk organza base embroidered with colourful garden vines",
      "Wide floral-embroidered border framing all four sides",
      "Hand-knotted crimson thread tassels along the edges",
      "Pairs effortlessly with solid ivory, red, or emerald kurtas",
      "Estimated crafting timeframe: 2 weeks"
    ]
  },
  {
    "id": "prod-26",
    "name": "Chandni Ivory Resham Embroidered Choli",
    "category": "occasion-wear",
    "categoryName": "Occasion Wear",
    "price": "\u20b916,500",
    "badge": "Seasonal Drop",
    "images": [
      "assets/images/product-26.webp",
      "assets/images/product-13.webp"
    ],
    "description": "Ivory silk georgette embroidered blouse choli featuring delicate gold gota-patti piping, plunging neckline, sheer dupatta drape, and kundan statement jewelry styling.",
    "fabric": "Pure Silk Georgette & Tulle Netting",
    "work": "Gota Patti and Kundan Embroidery on Sweetheart Neckline",
    "details": [
      "Rich forest-green background with multi-hued floral tapestry print",
      "Mandarin collar tunic with comfortable A-line flare",
      "Includes coordinating straight-cut printed trousers",
      "Comes packaged in a signature fabric keepsake garment bag",
      "Estimated crafting timeframe: 1\u20132 weeks"
    ]
  },
  {
    "id": "prod-27",
    "name": "Sindoor Vermilion Red Banarasi Silk Saree",
    "category": "ethnic-wear",
    "categoryName": "Ethnic Wear",
    "price": "\u20b917,500",
    "badge": "Special Edit",
    "images": [
      "assets/images/product-27.webp",
      "assets/images/hero-01.webp"
    ],
    "description": "Regal vermilion red bridal Banarasi silk saree handwoven with lustrous satin-finish silk, antique gold floral bootis, ornate zari border, and traditional bridal adornments.",
    "fabric": "Pure Satin Silk & Antique Gold Zari",
    "work": "Handwoven Kadwa Zari Weave with Intricate Pallu Detailing",
    "details": [
      "Luminous champagne raw silk with natural handloom slub texture",
      "Sheer organza flared bell sleeves worked in pastel floral motifs",
      "Tailored empire bodice transitioning into an expansive flared skirt",
      "Matching embroidered floral border along the hemline",
      "Estimated crafting timeframe: 3 weeks"
    ]
  },
  {
    "id": "prod-28",
    "name": "Sora Classic White Linen Button-Down",
    "category": "casual-wear",
    "categoryName": "Casual Wear",
    "price": "\u20b925,000",
    "badge": "Runway Pick",
    "images": [
      "assets/images/product-28.webp",
      "assets/images/product-20.webp"
    ],
    "description": "Crisp white European organic linen button-down shirt featuring spread collar, French front placket, single chest pocket, and relaxed tailored sleeves with roll-tabs.",
    "fabric": "100% Breathable Washed Linen",
    "work": "Single-Needle Tailoring with Natural Pearl Shell Buttons",
    "details": [
      "Gathered waist anarkali kurta with gold-striped sleeve cuffs",
      "Matching straight trousers dotted with subtle gold motifs",
      "Flowing magenta dupatta framed with woven gold borders",
      "Customized tailor fitting included with every order",
      "Estimated crafting timeframe: 2\u20133 weeks"
    ]
  },
  {
    "id": "prod-29",
    "name": "Aranya Forest Green Floral Co-ord",
    "category": "casual-wear",
    "categoryName": "Casual Wear",
    "price": "\u20b912,500",
    "badge": "Artisanal Embroidery",
    "images": [
      "assets/images/product-29.webp",
      "assets/images/story-04.webp"
    ],
    "description": "Earthy forest green cotton chanderi tunic and straight trousers co-ord set printed with delicate white botanical floral branches, side slits, and comfortable elastic-back waistband.",
    "fabric": "Lightweight Cotton Silk Chanderi",
    "work": "Hand-Screen Botanical Print with Slit Cuff Detailing",
    "details": [
      "Intricate floral and leafy vine needlework across sheer cream organza",
      "Dense crimson, periwinkle, and olive embroidery along the border",
      "Finished with hand-tied bright red silk tassels",
      "Pairs seamlessly with plain silk kurtas or evening separates",
      "Estimated crafting timeframe: 2\u20133 weeks"
    ]
  },
  {
    "id": "prod-30",
    "name": "Mayuri Sunshine & Slate Handloom Saree",
    "category": "ethnic-wear",
    "categoryName": "Ethnic Wear",
    "price": "\u20b911,000",
    "badge": "Heritage Brocade",
    "images": [
      "assets/images/product-30.webp",
      "assets/images/product-18.webp"
    ],
    "description": "Handloom sunshine yellow pure silk saree with slate grey geometric borders, silver zari pallu detailing, and lightweight drape ideal for festive gatherings.",
    "fabric": "Pure Handloom Silk & Fine Silver Zari",
    "work": "Geometric Silver Zari Weft Weave with Hand-Tied Tassels",
    "details": [
      "Intricate repeating scalloped arch motif in antique gold zari",
      "Crisp contrasting maroon border framing the woven brocade",
      "Pure silk drape with lightweight fluidity and luminous sheen",
      "Includes matching unstitched silk blouse fabric",
      "Estimated crafting timeframe: 2 weeks"
    ]
  },
  {
    "id": "prod-31",
    "name": "Noor Jahan Antique Gold Royal Lehenga",
    "category": "signature-series",
    "categoryName": "Signature Series",
    "price": "\u20b913,500",
    "badge": "Master Craft",
    "images": [
      "assets/images/product-31.webp",
      "assets/images/collection-04.webp"
    ],
    "description": "Imperial antique gold raw silk bridal lehenga covered entirely in hand-embroidered zardozi, dabka, and pearl work, paired with a matching sheer veil and royal jewelry styling.",
    "fabric": "Vintage Gold Tissue, Raw Silk & Kundan Pearls",
    "work": "Heritage Zardozi Needlework with Hand-Set Pearl Embellishments",
    "details": [
      "Dense multi-stitch zardozi, sequin, and resham embroidery on bodice",
      "Precision chevron gold work transitioning into diamond botanical panels",
      "Tailored exclusively to individual body measurements",
      "Includes custom blouse fitting session",
      "Estimated crafting timeframe: 3\u20134 weeks"
    ]
  },
  {
    "id": "prod-32",
    "name": "Devika Scarlet Gold Temple Silk Saree",
    "category": "ethnic-wear",
    "categoryName": "Ethnic Wear",
    "price": "Price on Request",
    "badge": "Handcrafted",
    "images": [
      "assets/images/product-32.webp",
      "assets/images/product-12.webp"
    ],
    "description": "Heirloom scarlet red Kanchipuram silk saree featuring grand temple gold brocade borders, temple spire motifs, rich zari pallu, and paired with an embroidered bridal blouse.",
    "fabric": "Heavy Pure Mulberry Silk & 24K Gold Plated Zari",
    "work": "Authentic Kanchipuram Korvai Weave with Hand-Embroidered Blouse",
    "details": [
      "Custom embroidery color palettes and border widths made to order",
      "Fine hand-guided needlework on translucent silk organza",
      "Hand-knotted tassel finishing in custom dye shades",
      "Available as finished dupattas, stoles, or saree trims",
      "Lead time: 3\u20134 weeks"
    ]
  },
  {
    "id": "prod-33",
    "name": "Roshni Crimson Red Zari Bridal Saree",
    "category": "ethnic-wear",
    "categoryName": "Ethnic Wear",
    "price": "\u20b928,000",
    "badge": "Archive Edit",
    "images": [
      "assets/images/product-33.webp",
      "assets/images/product-11.webp"
    ],
    "description": "Detailed view of the pure vermilion red bridal Banarasi silk saree highlighting dense gold floral zari border weaving, self-brocade patterns, and matching bridal veil.",
    "fabric": "Heavy Pure Katan Silk & Antique Gold Zari",
    "work": "Intricate Gold Zari Jaal Weave with Zardozi Border",
    "details": [
      "Rich midnight navy hue accented with fine metallic gold florals",
      "Full-length sleeves with detailed embroidered cuffs",
      "Deep knife-pleated lower ruffle for dramatic movement",
      "Private salon fitting session included at our flagship studio",
      "Estimated crafting timeframe: 3\u20134 weeks"
    ]
  },
  {
    "id": "prod-34",
    "name": "Zarina Royal Blue Sequin Lehenga Set",
    "category": "occasion-wear",
    "categoryName": "Occasion Wear",
    "price": "\u20b915,000",
    "badge": "Legacy Edition",
    "images": [
      "assets/images/product-34.webp",
      "assets/images/product-03.webp"
    ],
    "description": "Royal blue raw silk lehenga choli ensemble featuring shimmering antique gold sequin bootis, sweetheart neckline, and sheer matching dupatta with embroidered borders.",
    "fabric": "Pure Raw Silk, Soft Netting & Gold Sequins",
    "work": "Dense Sequin Hand-Embroidery with Scalloped Zari Edge",
    "details": [
      "Striking deep maroon lehenga with contrasting olive embroidered choli",
      "Ideal for bridal ceremonies, receptions, and grand festive galas",
      "Multi-layered skirt hem finished with architectural embroidery",
      "Custom size tailoring and trial fitting included",
      "Estimated crafting timeframe: 3\u20134 weeks"
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
