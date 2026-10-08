import os
from PIL import Image

images_dir = r"d:\Clothing_Template\assets\images"

# Complete mapping table:
# (placeholder_file, source_file, zoom_pct, shift_x, shift_y, mirror, target_w, target_h, note)
# shift_x: -1 (left), 0 (center), 1 (right)
# shift_y: -1 (top), 0 (center), 1 (bottom)

tasks = [
    # Products 13..34 (600x800)
    ("product-13.webp", "collection-05.webp", 0.85, 0.0, -0.5, True, 600, 800, "Casual Wear organic linen - upper tunic focus"),
    ("product-14.webp", "collection-01.webp", 0.85, 0.0, -0.4, False, 600, 800, "Royal garnet pure silk drape - upper body"),
    ("product-15.webp", "product-03.webp", 0.85, 0.0, -0.4, False, 600, 800, "Antique gold tissue suit - bodice & dupatta"),
    ("product-16.webp", "collection-07.webp", 0.85, 0.0, -0.3, True, 600, 800, "Zardozi wire vest - upper embroidery"),
    ("product-17.webp", "product-01.webp", 0.80, 0.0, -0.4, True, 600, 800, "Crimson silk kurta - upper neckline & stole"),
    ("product-18.webp", "product-02.webp", 0.85, 0.0, -0.4, False, 600, 800, "Emerald silk saree - pallu & pleats"),
    ("product-19.webp", "product-05.webp", 0.85, 0.0, -0.4, False, 600, 800, "Ivory French lace gown - neckline & bodice"),
    ("product-20.webp", "product-09.webp", 0.85, 0.0, -0.4, False, 600, 800, "Blush pink pleated organza - tunic & stole"),
    ("product-21.webp", "collection-01.webp", 0.80, 0.2, -0.3, True, 600, 800, "Royal garnet drape - right drape zoom"),
    ("product-22.webp", "product-06.webp", 0.85, 0.0, -0.4, False, 600, 800, "Ophelia beaded gown - fitted bodice & flare"),
    ("product-23.webp", "product-12.webp", 0.85, 0.0, -0.4, False, 600, 800, "Veda gold tiered tissue - upper bodice & pleats"),
    ("product-24.webp", "product-11.webp", 0.85, 0.0, -0.4, False, 600, 800, "Emerald velvet jacket - lapel & tailored fit"),
    ("product-25.webp", "product-08.webp", 0.85, 0.0, -0.4, False, 600, 800, "Champagne couture slip & sheer cape - upper body"),
    ("product-26.webp", "collection-07.webp", 0.80, -0.2, -0.3, False, 600, 800, "Zardozi craft vest - left embroidery zoom"),
    ("product-27.webp", "product-07.webp", 0.85, 0.0, -0.4, False, 600, 800, "Valerie silk slip gown - cowl neckline & pearls"),
    ("product-28.webp", "collection-08.webp", 0.85, 0.0, -0.4, False, 600, 800, "Signature royal navy & gold woven coat - torso"),
    ("product-29.webp", "collection-02.webp", 0.80, 0.0, -0.4, True, 600, 800, "Tailored ivory blazer dress - lapel & waist"),
    ("product-30.webp", "collection-04.webp", 0.85, 0.0, -0.4, False, 600, 800, "Amber gold tissue anarkali - upper kalidar"),
    ("product-31.webp", "product-10.webp", 0.85, 0.0, -0.4, False, 600, 800, "Samira fuchsia chevron flare - tunic & dupatta"),
    ("product-32.webp", "product-12.webp", 0.80, 0.0, -0.3, True, 600, 800, "Gold tiered tissue drape - metallic weave detail"),
    ("product-33.webp", "product-04.webp", 0.85, 0.0, -0.4, False, 600, 800, "Zahara corset gown - bodice & waist detailing"),
    ("product-34.webp", "hero-01.webp", 0.80, 0.0, -0.4, False, 600, 800, "Teal & champagne draped gown - cape silhouette"),

    # Story Panels (story-01..04)
    ("story-01.webp", "collection-06.webp", 0.85, 0.0, -0.3, False, 600, 870, "Left Tall Panel: fluid trench & trouser ensemble"),
    ("story-02.webp", "collection-03.webp", 0.75, 0.0, -0.4, False, 800, 560, "Center Top Panel: rose gold gala drape & neckline"),
    ("story-03.webp", "collection-07.webp", 0.70, 0.0, -0.2, False, 800, 560, "Center Bottom Panel: macro zardozi bullion embroidery"),
    ("story-04.webp", "hero-05.webp", 0.85, 0.0, -0.2, False, 600, 870, "Right Tall Panel: fluid sage silk skirt in motion"),

    # Social / Instagram Flat-lays (social-01..02, 600x750)
    ("social-01.webp", "collection-05.webp", 0.80, 0.0, -0.2, False, 600, 750, "Organic sand linen tunic - relaxed styling"),
    ("social-02.webp", "collection-02.webp", 0.80, 0.0, -0.3, False, 600, 750, "Tailored ivory blazer dress - clean silhouette"),

    # Reel Posters (reel-poster-01..07, 540x960, cropped from hero images)
    ("reel-poster-01.webp", "hero-03.webp", 0.85, 0.0, -0.3, False, 540, 960, "Reel 1: Emerald silk handloom drape on mannequin"),
    ("reel-poster-02.webp", "hero-04.webp", 0.85, 0.0, -0.3, False, 540, 960, "Reel 2: Architectural ivory evening gown"),
    ("reel-poster-03.webp", "hero-05.webp", 0.85, 0.0, -0.3, False, 540, 960, "Reel 3: Fluid sage pleated drape in motion"),
    ("reel-poster-04.webp", "hero-01.webp", 0.85, 0.0, -0.3, False, 540, 960, "Reel 4: Teal & champagne draped cape evening gown"),
    ("reel-poster-05.webp", "hero-02.webp", 0.85, 0.0, -0.3, False, 540, 960, "Reel 5: Sapphire & metallic champagne couture gown"),
    ("reel-poster-06.webp", "hero-04.webp", 0.75, 0.2, -0.2, True, 540, 960, "Reel 6: Architectural ivory gown (mirrored & zoomed)"),
    ("reel-poster-07.webp", "hero-03.webp", 0.75, -0.2, -0.2, True, 540, 960, "Reel 7: Emerald handloom drape (mirrored & zoomed)")
]

print(f"Total planned tasks: {len(tasks)}")

# Validate all files
errors = []
for dst, src, zoom, sx, sy, mir, tw, th, desc in tasks:
    src_p = os.path.join(images_dir, src)
    dst_p = os.path.join(images_dir, dst)
    if not os.path.exists(src_p):
        errors.append(f"Source missing: {src}")
    elif os.path.getsize(src_p) <= 15 * 1024:
        errors.append(f"Source is not a real photo (>15KB): {src}")
    
    if not os.path.exists(dst_p):
        errors.append(f"Destination placeholder missing: {dst}")
    elif os.path.getsize(dst_p) > 15 * 1024:
        errors.append(f"Destination is ALREADY a real photo (>15KB): {dst}")

if errors:
    print("VALIDATION ERRORS:")
    for e in errors:
        print(" ", e)
else:
    print("ALL 35 TASKS VALIDATED PERFECTLY! Ready to execute.")
