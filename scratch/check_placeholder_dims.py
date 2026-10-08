import os
from PIL import Image

img_dir = r"d:\Clothing_Template\assets\images"
files = sorted(os.listdir(img_dir))

for f in files:
    fp = os.path.join(img_dir, f)
    sz = os.path.getsize(fp)
    if sz <= 15 * 1024 and f != "logo-badge.png":
        with Image.open(fp) as im:
            print(f"{f:22s} | Size: {sz/1024:5.2f} KB | Dimensions: {im.size[0]}x{im.size[1]}")
