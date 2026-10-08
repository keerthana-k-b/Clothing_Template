from bs4 import BeautifulSoup
import re

with open("index.html", "r", encoding="utf-8") as f:
    soup = BeautifulSoup(f.read(), "html.parser")

for img in soup.find_all("img"):
    src = img.get("src", "")
    if any(f"product-{i:02d}.webp" in src for i in range(13, 35)):
        # print parent card info or section info
        parent_card = img.find_parent(class_=re.compile(r"product|card|item|slide"))
        section = img.find_parent("section")
        sec_id = section.get("id") if section else "no-sec"
        card_title = ""
        if parent_card:
            t = parent_card.find(class_=re.compile(r"title|name|heading")) or parent_card.find(["h3", "h4", "h5"])
            if t:
                card_title = t.get_text(strip=True)
        print(f"SRC: {src:30s} | Section: {sec_id:15s} | Title: {card_title}")
