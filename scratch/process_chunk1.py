import os
from PIL import Image

brain_dir = r"C:\Users\HP\.gemini\antigravity-ide\brain\3acd9a7a-0c1b-4dba-8e03-8c0b0915857d"
dest_dir = r"d:\Clothing_Template\assets\images"

chunk1_specs = [
    ("coll_04_festive_1791435305203.jpg", "collection-04.webp", 600, 840),
    ("coll_05_casual_1791435341842.jpg", "collection-05.webp", 600, 840),
    ("coll_06_arrivals_1791435373361.jpg", "collection-06.webp", 600, 840),
    ("coll_07_craft_1791435403797.jpg", "collection-07.webp", 600, 840),
    ("coll_08_signature_1791435439023.jpg", "collection-08.webp", 600, 840),
    ("prod_05_seraphina_1791435469863.jpg", "product-05.webp", 600, 800),
    ("prod_06_ophelia_1791435502167.jpg", "product-06.webp", 600, 800),
    ("prod_07_valerie_1791435540008.jpg", "product-07.webp", 600, 800),
    ("prod_08_elysian_1791435575729.jpg", "product-08.webp", 600, 800),
    ("prod_09_noor_1791435608651.jpg", "product-09.webp", 600, 800),
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
        # Save as WEBP, quality=85 ensures good compression and crisp quality
        img.save(dst_path, format="WEBP", quality=85, method=6)
        size_kb = os.path.getsize(dst_path) / 1024
        print(f"Saved {dst_name}: {target_w}x{target_h} px, {size_kb:.2f} KB (under 150 KB: {size_kb < 150})")

print("Processing Chunk 1...")
for src, dst, w, h in chunk1_specs:
    crop_and_save(src, dst, w, h)
print("Chunk 1 processing complete.")
