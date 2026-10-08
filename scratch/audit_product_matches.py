import json, re

with open("js/products.js", "r", encoding="utf-8") as f:
    text = f.read()

pattern = r"{\s*id:\s*'([^']+)',\s*name:\s*'([^']+)',\s*category:\s*'([^']+)',\s*categoryName:\s*'([^']+)',.*?images:\s*\[(.*?)\]"
matches = re.findall(pattern, text, re.DOTALL)

# Image visual descriptions dictionary
visuals = {
    "hero-01.webp": "Teal & champagne draped cape evening gown",
    "hero-02.webp": "Sapphire navy & metallic champagne couture gown (back view)",
    "hero-03.webp": "Emerald silk handloom saree drape with gold zari",
    "hero-04.webp": "Architectural ivory evening gown with sculpted pleated drape",
    "hero-05.webp": "Fluid sage & champagne pleated skirt in motion",
    "collection-01.webp": "Royal garnet red pure silk saree drape with gold zari border",
    "collection-02.webp": "Tailored ivory double-breasted blazer dress",
    "collection-03.webp": "Champagne rose gold gala gown",
    "collection-04.webp": "Amber gold & ruby tissue silk anarkali",
    "collection-05.webp": "Organic sand linen co-ord tunic & trousers",
    "collection-06.webp": "Contemporary fluid warm taupe trench & ivory trousers",
    "collection-07.webp": "Intricate gold zardozi bullion wire & seed pearl vest",
    "collection-08.webp": "Royal navy & gold woven silk flared long coat",
    "product-01.webp": "Crimson pure mulberry silk kurta set with organza dupatta",
    "product-02.webp": "Imperial emerald pure silk saree with zari border",
    "product-03.webp": "Antique gold tissue silk suit",
    "product-04.webp": "Ivory sculpted corset evening gown",
    "product-05.webp": "Ivory French lace evening gown",
    "product-06.webp": "Champagne & silver beaded fit-and-flare gown",
    "product-07.webp": "Ivory minimalist pearl silk slip gown",
    "product-08.webp": "Champagne couture slip & embroidered sheer cape",
    "product-09.webp": "Blush pink pleated organza ensemble",
    "product-10.webp": "Fuchsia zari chevron flared ensemble",
    "product-11.webp": "Emerald velvet longline jacket suit",
    "product-12.webp": "Antique gold tiered tissue silk drape",
    "product-13.webp": "Organic sand linen co-ord (upper tunic crop of collection-05, mirrored)",
    "product-14.webp": "Royal garnet red pure silk drape (upper crop of collection-01)",
    "product-15.webp": "Antique gold tissue suit (bodice & dupatta crop of product-03)",
    "product-16.webp": "Zardozi bullion wire vest (upper embroidery crop of collection-07, mirrored)",
    "product-17.webp": "Crimson silk kurta set (neckline crop of product-01, mirrored)",
    "product-18.webp": "Emerald pure silk saree (pallu crop of product-02)",
    "product-19.webp": "Ivory French lace evening gown (bodice crop of product-05)",
    "product-20.webp": "Blush pink pleated organza (tunic crop of product-09)",
    "product-21.webp": "Royal garnet red silk drape (right drape crop of collection-01, mirrored)",
    "product-22.webp": "Champagne & silver beaded gown (bodice crop of product-06)",
    "product-23.webp": "Antique gold tiered tissue drape (bodice crop of product-12)",
    "product-24.webp": "Emerald velvet jacket suit (lapel crop of product-11)",
    "product-25.webp": "Champagne couture slip & cape (upper crop of product-08)",
    "product-26.webp": "Zardozi bullion wire vest (left embroidery crop of collection-07)",
    "product-27.webp": "Ivory pearl silk slip gown (cowl neckline crop of product-07)",
    "product-28.webp": "Royal navy & gold woven silk coat (torso crop of collection-08)",
    "product-29.webp": "Tailored ivory blazer dress (lapel crop of collection-02, mirrored)",
    "product-30.webp": "Amber gold tissue anarkali (upper kalidar crop of collection-04)",
    "product-31.webp": "Fuchsia zari chevron flare (tunic crop of product-10)",
    "product-32.webp": "Antique gold tiered tissue drape (metallic weave crop of product-12, mirrored)",
    "product-33.webp": "Ivory sculpted corset gown (bodice crop of product-04)",
    "product-34.webp": "Teal & champagne draped cape evening gown (cape silhouette crop of hero-01)",
    "story-01.webp": "Fluid trench & trousers (crop of collection-06)",
    "story-02.webp": "Rose gold gala gown detail (crop of collection-03)",
    "story-03.webp": "Macro zardozi bullion embroidery detail (crop of collection-07)",
    "story-04.webp": "Fluid sage silk skirt in motion (crop of hero-05)",
    "social-01.webp": "Organic sand linen tunic (crop of collection-05)",
    "social-02.webp": "Tailored ivory blazer dress (crop of collection-02)",
    "reel-poster-01.webp": "Emerald silk handloom drape (crop of hero-03)",
    "reel-poster-02.webp": "Architectural ivory evening gown (crop of hero-04)",
    "reel-poster-03.webp": "Fluid sage pleated drape (crop of hero-05)",
    "reel-poster-04.webp": "Teal & champagne draped gown (crop of hero-01)",
    "reel-poster-05.webp": "Sapphire & champagne couture gown (crop of hero-02)",
    "reel-poster-06.webp": "Architectural ivory evening gown (mirrored crop of hero-04)",
    "reel-poster-07.webp": "Emerald silk handloom drape (mirrored crop of hero-03)"
}

print("=== CHECKING PRODUCTS IN JS/PRODUCTS.JS ===")
for pid, name, cat, cat_name, imgs_str in matches:
    imgs = [i.strip().strip("'\"").replace("assets/images/", "") for i in imgs_str.split(',') if i.strip()]
    lead_img = imgs[0] if imgs else "None"
    lead_visual = visuals.get(lead_img, "Unknown")
    print(f"{pid:7s} | {name:40s} | Lead: {lead_img:18s} -> Visual: {lead_visual}")
