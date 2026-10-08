import os
from PIL import Image

brain_dir = r"C:\Users\HP\.gemini\antigravity-ide\brain\3acd9a7a-0c1b-4dba-8e03-8c0b0915857d"
dest_dir = r"d:\Clothing_Template\assets\images"

specs = [
    ("prod_10_samira_1791435806653.jpg", "product-10.webp", 600, 800),
    ("prod_11_althea_1791435837466.jpg", "product-11.webp", 600, 800),
    ("prod_12_veda_1791435874401.jpg", "product-12.webp", 600, 800),
]

def crop_and_save(src_name, dst_name, target_w, target_h):
    src_path = os.path.join(brain_dir, src_name)
    dst_path = os.path.join(dest_dir, dst_name)
    with Image.open(src_path) as img:
        img = img.convert('RGB')
        w, h = img.size
        target_ratio = target_w / target_h
        current_ratio = w / h

        if current_ratio > target_ratio:
            new_w = int(h * target_ratio)
            left = (w - new_w) // 2
            img = img.crop((left, 0, left + new_w, h))
        else:
            new_h = int(w / target_ratio)
            top = (h - new_h) // 2
            img = img.crop((0, top, w, top + new_h))

        img = img.resize((target_w, target_h), Image.Resampling.LANCZOS)
        img.save(dst_path, format="WEBP", quality=85, method=6)
        size_kb = os.path.getsize(dst_path) / 1024
        print(f"Saved {dst_name}: {target_w}x{target_h} px, {size_kb:.2f} KB (under 150 KB: {size_kb < 150})")

print("Processing product-10, product-11, product-12...")
for src, dst, w, h in specs:
    crop_and_save(src, dst, w, h)
print("Processing complete.")
