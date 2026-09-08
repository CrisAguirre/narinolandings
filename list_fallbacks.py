import re

FALLBACK = "Sandon"
content = open('src/data/municipiosData.js', 'r', encoding='utf-8').read()

pattern = re.compile(r'name:\s*"([^"]+)",[\s\S]*?image:\s*"([^"]+)"')
matches = pattern.findall(content)

fallback_munis = []
for name, img in matches:
    if FALLBACK in img and "Sandoná" not in name:
        fallback_munis.append(name)

print(f"Found {len(fallback_munis)} municipalities still using fallback:")
for m in fallback_munis:
    print(f"  - {m}")
