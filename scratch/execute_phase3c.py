import os
import csv
from PIL import Image

images_dir = r"d:\Clothing_Template\assets\images"
csv_path = r"d:\Clothing_Template\assets\REUSE_MAP.csv"

# (dst_file, src_file, zoom, shift_x, shift_y, mirror, target_w, target_h, desc)
tasks = [
    # Products 13..34 (600x800)
    ("product-13.webp", "collection-05.webp", 0.85, 0.0, -0.5, True, 600, 800, "Casual Wear organic linen - 85% upper tunic zoom, mirrored"),
    ("product-14.webp", "collection-01.webp", 0.85, 0.0, -0.4, False, 600, 800, "Royal garnet pure silk drape - 85% upper torso zoom"),
    ("product-15.webp", "product-03.webp", 0.85, 0.0, -0.4, False, 600, 800, "Antique gold tissue suit - 85% bodice & dupatta zoom"),
    ("product-16.webp", "collection-07.webp", 0.85, 0.0, -0.3, True, 600, 800, "Zardozi wire vest - 85% upper embroidery zoom, mirrored"),
    ("product-17.webp", "product-01.webp", 0.80, 0.0, -0.4, True, 600, 800, "Crimson silk kurta - 80% neckline zoom, mirrored"),
    ("product-18.webp", "product-02.webp", 0.85, 0.0, -0.4, False, 600, 800, "Emerald silk saree - 85% pallu & pleats zoom"),
    ("product-19.webp", "product-05.webp", 0.85, 0.0, -0.4, False, 600, 800, "Ivory French lace gown - 85% neckline & bodice zoom"),
    ("product-20.webp", "product-09.webp", 0.85, 0.0, -0.4, False, 600, 800, "Blush pink pleated organza - 85% tunic & stole zoom"),
    ("product-21.webp", "collection-01.webp", 0.80, 0.2, -0.3, True, 600, 800, "Royal garnet drape - 80% right drape zoom, mirrored"),
    ("product-22.webp", "product-06.webp", 0.85, 0.0, -0.4, False, 600, 800, "Ophelia beaded gown - 85% bodice & flare zoom"),
    ("product-23.webp", "product-12.webp", 0.85, 0.0, -0.4, False, 600, 800, "Veda gold tiered tissue - 85% upper bodice zoom"),
    ("product-24.webp", "product-11.webp", 0.85, 0.0, -0.4, False, 600, 800, "Emerald velvet jacket - 85% lapel & tailored fit zoom"),
    ("product-25.webp", "product-08.webp", 0.85, 0.0, -0.4, False, 600, 800, "Champagne couture slip & sheer cape - 85% upper body zoom"),
    ("product-26.webp", "collection-07.webp", 0.80, -0.2, -0.3, False, 600, 800, "Zardozi craft vest - 80% left embroidery zoom"),
    ("product-27.webp", "product-07.webp", 0.85, 0.0, -0.4, False, 600, 800, "Valerie silk slip gown - 85% cowl neckline & pearls zoom"),
    ("product-28.webp", "collection-08.webp", 0.85, 0.0, -0.4, False, 600, 800, "Signature royal navy & gold woven coat - 85% torso zoom"),
    ("product-29.webp", "collection-02.webp", 0.80, 0.0, -0.4, True, 600, 800, "Tailored ivory blazer dress - 80% lapel & waist zoom, mirrored"),
    ("product-30.webp", "collection-04.webp", 0.85, 0.0, -0.4, False, 600, 800, "Amber gold tissue anarkali - 85% upper kalidar zoom"),
    ("product-31.webp", "product-10.webp", 0.85, 0.0, -0.4, False, 600, 800, "Samira fuchsia chevron flare - 85% tunic & stole zoom"),
    ("product-32.webp", "product-12.webp", 0.80, 0.0, -0.3, True, 600, 800, "Gold tiered tissue drape - 80% metallic weave detail zoom, mirrored"),
    ("product-33.webp", "product-04.webp", 0.85, 0.0, -0.4, False, 600, 800, "Zahara corset gown - 85% bodice & waist zoom"),
    ("product-34.webp", "hero-01.webp", 0.80, 0.0, -0.4, False, 600, 800, "Teal & champagne draped gown - 80% cape silhouette zoom"),

    # Story Panels (story-01..04)
    ("story-01.webp", "collection-06.webp", 0.85, 0.0, -0.3, False, 600, 870, "Fluid trench & trousers - 85% upper silhouette zoom"),
    ("story-02.webp", "collection-03.webp", 0.75, 0.0, -0.4, False, 800, 560, "Rose gold gala gown - 75% horizontal drape & neckline detail"),
    ("story-03.webp", "collection-07.webp", 0.70, 0.0, -0.2, False, 800, 560, "Zardozi craft vest - 70% macro embroidery detail crop"),
    ("story-04.webp", "hero-05.webp", 0.85, 0.0, -0.2, False, 600, 870, "Fluid sage silk skirt - 85% motion drape zoom"),

    # Social / Instagram Flat-lays (social-01..02, 600x750)
    ("social-01.webp", "collection-05.webp", 0.80, 0.0, -0.2, False, 600, 750, "Organic sand linen tunic - 80% relaxed styling zoom"),
    ("social-02.webp", "collection-02.webp", 0.80, 0.0, -0.3, False, 600, 750, "Tailored ivory blazer dress - 80% clean silhouette zoom"),

    # Reel Posters (reel-poster-01..07, 540x960, cropped from hero images)
    ("reel-poster-01.webp", "hero-03.webp", 0.85, 0.0, -0.3, False, 540, 960, "Hero 03 emerald silk drape - 85% vertical reel zoom"),
    ("reel-poster-02.webp", "hero-04.webp", 0.85, 0.0, -0.3, False, 540, 960, "Hero 04 architectural ivory gown - 85% vertical reel zoom"),
    ("reel-poster-03.webp", "hero-05.webp", 0.85, 0.0, -0.3, False, 540, 960, "Hero 05 fluid sage pleated drape - 85% vertical reel zoom"),
    ("reel-poster-04.webp", "hero-01.webp", 0.85, 0.0, -0.3, False, 540, 960, "Hero 01 teal & champagne gown - 85% vertical reel zoom"),
    ("reel-poster-05.webp", "hero-02.webp", 0.85, 0.0, -0.3, False, 540, 960, "Hero 02 sapphire couture gown - 85% vertical reel zoom"),
    ("reel-poster-06.webp", "hero-04.webp", 0.75, 0.2, -0.2, True, 540, 960, "Hero 04 architectural ivory gown - 75% zoom, mirrored"),
    ("reel-poster-07.webp", "hero-03.webp", 0.75, -0.2, -0.2, True, 540, 960, "Hero 03 emerald silk drape - 75% zoom, mirrored")
]

csv_rows = []

print("=== STARTING PHASE 3C REUSE GENERATION ===")

for dst_name, src_name, zoom, sx, sy, mirror, tw, th, desc in tasks:
    src_path = os.path.join(images_dir, src_name)
    dst_path = os.path.join(images_dir, dst_name)

    # Safety checks
    if not os.path.exists(src_path):
        raise FileNotFoundError(f"Source file missing: {src_path}")
    if os.path.getsize(src_path) <= 15 * 1024:
        raise ValueError(f"Source file is placeholder, not real photo: {src_name}")

    if not os.path.exists(dst_path):
        raise FileNotFoundError(f"Destination placeholder missing: {dst_path}")
    existing_dst_size = os.path.getsize(dst_path)
    if existing_dst_size > 15 * 1024:
        raise ValueError(f"Target file {dst_name} is already a real photo ({existing_dst_size/1024:.2f} KB)! Never overwrite real photos!")

    with Image.open(src_path) as img:
        img = img.convert('RGB')
        w, h = img.size
        target_ratio = tw / th

        # Find base box matching target_ratio
        if (w / h) > target_ratio:
            base_h = h
            base_w = int(h * target_ratio)
        else:
            base_w = w
            base_h = int(w / target_ratio)

        # Apply zoom
        crop_w = int(base_w * zoom)
        crop_h = int(base_h * zoom)

        # Compute slacks
        slack_x = w - crop_w
        slack_y = h - crop_h

        cx = slack_x / 2.0
        cy = slack_y / 2.0

        left = int(cx + sx * (slack_x / 2.0))
        top = int(cy + sy * (slack_y / 2.0))

        left = max(0, min(left, w - crop_w))
        top = max(0, min(top, h - crop_h))

        crop_box = (left, top, left + crop_w, top + crop_h)
        cropped = img.crop(crop_box)

        if mirror:
            cropped = cropped.transpose(Image.FLIP_LEFT_RIGHT)

        final_img = cropped.resize((tw, th), Image.Resampling.LANCZOS)
        
        # Save directly to dst_path
        final_img.save(dst_path, format="WEBP", quality=85, method=6)

        final_size_kb = os.path.getsize(dst_path) / 1024.0

        if final_size_kb >= 150.0:
            # lower quality slightly if needed
            final_img.save(dst_path, format="WEBP", quality=80, method=6)
            final_size_kb = os.path.getsize(dst_path) / 1024.0

        mirror_str = "Yes (horizontal flip)" if mirror else "No"
        crop_str = f"Zoom {int(zoom*100)}%, crop ({left},{top},{left+crop_w},{top+crop_h}), {desc}"

        csv_rows.append({
            "Placeholder File": dst_name,
            "Source Photo Used": src_name,
            "Crop/Mirror Applied": f"{crop_str}; Mirror: {mirror_str}",
            "Target Dimensions": f"{tw}x{th}",
            "Final Size (KB)": f"{final_size_kb:.2f}"
        })

        print(f"Processed {dst_name:20s} from {src_name:18s} -> {tw}x{th} px, {final_size_kb:5.2f} KB (Mirror: {mirror_str[:3]})")

# Write CSV
with open(csv_path, "w", newline="", encoding="utf-8") as f:
    writer = csv.DictWriter(f, fieldnames=["Placeholder File", "Source Photo Used", "Crop/Mirror Applied", "Target Dimensions", "Final Size (KB)"])
    writer.writeheader()
    writer.writerows(csv_rows)

print(f"\nSuccessfully wrote {csv_path} with {len(csv_rows)} entries.")
print("=== PHASE 3C PROCESSING COMPLETE ===")
