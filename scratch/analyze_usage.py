import os, re, glob

placeholders = [
    f"product-{i:02d}.webp" for i in range(13, 35)
] + [
    f"story-{i:02d}.webp" for i in range(1, 5)
] + [
    f"social-{i:02d}.webp" for i in range(1, 3)
] + [
    f"reel-poster-{i:02d}.webp" for i in range(1, 8)
]

print(f"Total placeholders to fill: {len(placeholders)}")

html_files = glob.glob("*.html") + ["js/products.js"]
usage_map = {p: [] for p in placeholders}

for fname in html_files:
    with open(fname, "r", encoding="utf-8") as f:
        content = f.read()
    for p in placeholders:
        if p in content:
            # find context or section
            matches = [m.start() for m in re.finditer(re.escape(p), content)]
            usage_map[p].append(f"{fname} ({len(matches)}x)")

for p in placeholders:
    print(f"{p:20s}: {', '.join(usage_map[p])}")
