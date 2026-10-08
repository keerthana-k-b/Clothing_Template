import re

with open('js/products.js', 'r', encoding='utf-8') as f:
    text = f.read()

# Match each object in PRODUCTS = [ ... ]
pattern = r"{\s*id:\s*'([^']+)',\s*name:\s*'([^']+)',\s*category:\s*'([^']+)',\s*categoryName:\s*'([^']+)',.*?images:\s*\[(.*?)\]"
matches = re.findall(pattern, text, re.DOTALL)

print(f"Matched {len(matches)} products:")
for pid, name, cat, cat_name, imgs_str in matches:
    imgs = [i.strip().strip("'\"") for i in imgs_str.split(',') if i.strip()]
    print(f"{pid} | {cat} | {name} | {imgs}")
