with open("js/products.js", "r", encoding="utf-8") as f:
    lines = f.readlines()

for i, line in enumerate(lines, 1):
    for num in range(13, 35):
        target = f"product-{num:02d}.webp"
        if target in line:
            # find the product block around this line
            start = max(0, i - 15)
            end = min(len(lines), i + 5)
            # find product name
            name = ""
            cat = ""
            for l in lines[start:i]:
                if "name:" in l:
                    name = l.strip()
                if "category:" in l:
                    cat = l.strip()
            print(f"L{i:3d}: {target} -> {name} | {cat}")
