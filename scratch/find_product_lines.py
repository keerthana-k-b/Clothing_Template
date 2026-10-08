import re

with open("index.html", "r", encoding="utf-8") as f:
    lines = f.readlines()

for i, line in enumerate(lines, 1):
    for match in re.finditer(r"product-(\d\d)\.webp", line):
        num = int(match.group(1))
        if num >= 13:
            print(f"L{i:4d}: product-{num:02d}.webp -> {line.strip()[:110]}")
