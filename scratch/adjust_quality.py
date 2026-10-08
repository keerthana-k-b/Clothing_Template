import os, csv
from PIL import Image

images_dir = r"d:\Clothing_Template\assets\images"
csv_path = r"d:\Clothing_Template\assets\REUSE_MAP.csv"

# Adjust quality for product-27 and product-34
adjustments = [
    ("product-27.webp", "product-07.webp", 0.85, 0.0, -0.4, False, 600, 800, 94),
    ("product-34.webp", "hero-01.webp", 0.80, 0.0, -0.4, False, 600, 800, 92),
]

for dst_name, src_name, zoom, sx, sy, mirror, tw, th, q in adjustments:
    src_path = os.path.join(images_dir, src_name)
    dst_path = os.path.join(images_dir, dst_name)
    with Image.open(src_path) as img:
        img = img.convert('RGB')
        w, h = img.size
        target_ratio = tw / th
        if (w / h) > target_ratio:
            base_h = h
            base_w = int(h * target_ratio)
        else:
            base_w = w
            base_h = int(w / target_ratio)

        crop_w = int(base_w * zoom)
        crop_h = int(base_h * zoom)
        slack_x = w - crop_w
        slack_y = h - crop_h
        cx = slack_x / 2.0
        cy = slack_y / 2.0
        left = int(cx + sx * (slack_x / 2.0))
        top = int(cy + sy * (slack_y / 2.0))
        left = max(0, min(left, w - crop_w))
        top = max(0, min(top, h - crop_h))

        cropped = img.crop((left, top, left + crop_w, top + crop_h))
        if mirror:
            cropped = cropped.transpose(Image.FLIP_LEFT_RIGHT)
        final_img = cropped.resize((tw, th), Image.Resampling.LANCZOS)
        final_img.save(dst_path, format="WEBP", quality=q, method=6)
        sz_kb = os.path.getsize(dst_path) / 1024
        print(f"Re-saved {dst_name} at q={q}: {sz_kb:.2f} KB (valid >15KB & <150KB: {15 < sz_kb < 150})")

# Update CSV with new sizes
rows = []
with open(csv_path, "r", encoding="utf-8") as f:
    reader = csv.DictReader(f)
    for row in reader:
        p_name = row["Placeholder File"]
        p_path = os.path.join(images_dir, p_name)
        row["Final Size (KB)"] = f"{os.path.getsize(p_path) / 1024:.2f}"
        rows.append(row)

with open(csv_path, "w", newline="", encoding="utf-8") as f:
    writer = csv.DictWriter(f, fieldnames=["Placeholder File", "Source Photo Used", "Crop/Mirror Applied", "Target Dimensions", "Final Size (KB)"])
    writer.writeheader()
    writer.writerows(rows)

print("Updated CSV sizes successfully.")
