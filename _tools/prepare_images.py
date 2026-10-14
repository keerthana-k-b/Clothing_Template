import io, sys, pathlib
from PIL import Image

if len(sys.argv) != 3:
    sys.exit("Usage: python prepare_images.py <photos_folder> <client_assets_images_folder>")

RAW = pathlib.Path(sys.argv[1])
SITE = pathlib.Path(sys.argv[2])

# safety: never overwrite the template's own photos
if "Clothing_Template" in str(SITE):
    sys.exit("STOP: target is the template folder. Use the client's folder, e.g. D:\\Clients\\Broza_demo\\assets\\images")

photos = sorted(p for p in RAW.iterdir() if p.suffix.lower() in {".jpg", ".jpeg", ".png", ".webp"})
targets = sorted(SITE.glob("*.webp"))   # existing images give each slot's name and size
if not photos:
    sys.exit("No photos found in " + str(RAW))
if not targets:
    sys.exit("No .webp images found in " + str(SITE))

def crop_fit(img, w, h):
    s = max(w / img.width, h / img.height)
    img = img.resize((round(img.width * s), round(img.height * s)), Image.LANCZOS)
    left = (img.width - w) // 2
    top = (img.height - h) // 2          # centre crop (good for flat-lays)
    return img.crop((left, top, left + w, top + h))

def save_webp(img, path, max_kb=150):
    for q in (86, 80, 74, 68, 60):
        buf = io.BytesIO()
        img.save(buf, "WEBP", quality=q)
        if buf.tell() <= max_kb * 1024:
            break
    path.write_bytes(buf.getvalue())

pool = photos[:]
for t in targets:
    with Image.open(t) as cur:
        w, h = cur.size
    if not pool:
        pool = photos[:]                  # reuse photos when they run out
    best = min(pool, key=lambda p: abs(Image.open(p).width / Image.open(p).height - w / h))
    pool.remove(best)
    save_webp(crop_fit(Image.open(best).convert("RGB"), w, h), t)
    print(t.name, "<-", best.name)
print("Done:", len(targets), "images")