import re
import urllib.request
import urllib.parse
import time

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

print(f"Checking {len(unique)} unique images...")

broken = []
for img in unique:
    url = f"https://commons.wikimedia.org/wiki/Special:FilePath/{img}"
    req = urllib.request.Request(url, method='HEAD', headers={'User-Agent': 'Mozilla/5.0'})
    try:
        with urllib.request.urlopen(req) as resp:
            print(f"OK ({resp.status}): {urllib.parse.unquote(img)[:60]}")
    except urllib.error.HTTPError as e:
        print(f"BROKEN ({e.code}): {urllib.parse.unquote(img)[:60]}")
        broken.append(img)
    except Exception as e:
        print(f"ERROR: {urllib.parse.unquote(img)[:60]} -> {e}")
        broken.append(img)
    time.sleep(0.3)

print(f"\n--- BROKEN IMAGES: {len(broken)} ---")
for b in broken:
    print(f"  {urllib.parse.unquote(b)}")
