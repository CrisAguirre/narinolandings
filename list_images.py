import re

file_path = 'src/data/municipiosData.js'
with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

imgs = re.findall(r'Special:FilePath/([^"?]+)', content)
seen = set()
unique = []
for x in imgs:
    if x not in seen:
        seen.add(x)
        unique.append(x)

print(f"Total unique images: {len(unique)}")
for img in unique:
    print(img)
