import json
import re
import time
import urllib.request
import urllib.parse

file_path = 'src/data/municipiosData.js'

with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

# Find municipalities with 'Flag_' or 'Bandera_' in their image
pattern = re.compile(r'name:\s*"([^"]+)",\s*subregion:\s*"[^"]+",\s*color:\s*"[^"]+",\s*image:\s*"([^"]*(Flag_|Bandera_)[^"]*)"')

matches = pattern.findall(content)

print(f"Found {len(matches)} municipalities with flags instead of photos.")

def search_image(muni_name):
    query = f"{muni_name} Nariño parque principal"
    url = f"https://commons.wikimedia.org/w/api.php?action=query&list=search&srsearch={urllib.parse.quote(query)}&srnamespace=6&format=json"
    req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'})
    try:
        with urllib.request.urlopen(req) as response:
            data = json.loads(response.read().decode())
            if data['query']['search']:
                title = data['query']['search'][0]['title']
                img_url_req = f"https://commons.wikimedia.org/w/api.php?action=query&titles={urllib.parse.quote(title)}&prop=imageinfo&iiprop=url&format=json"
                req2 = urllib.request.Request(img_url_req, headers={'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'})
                with urllib.request.urlopen(req2) as response2:
                    img_data = json.loads(response2.read().decode())
                    pages = img_data['query']['pages']
                    page_id = list(pages.keys())[0]
                    if 'imageinfo' in pages[page_id]:
                        return pages[page_id]['imageinfo'][0]['url']
    except Exception as e:
        print(f"Error for {muni_name}: {e}")
    return None

for muni_name, old_img, _ in matches:
    print(f"Searching for {muni_name}...")
    new_img = search_image(muni_name)
    if new_img:
        print(f"Found: {new_img}")
        # Replace only this occurrence
        # Be careful to escape
        block_regex = re.compile(r'(name:\s*"' + re.escape(muni_name) + r'",\s*subregion:\s*"[^"]+",\s*color:\s*"[^"]+",\s*image:\s*")[^"]+(")')
        content = block_regex.sub(r'\g<1>' + new_img.replace('\\', '\\\\') + r'\g<2>', content, count=1)
    else:
        print(f"No image found for {muni_name}")
    time.sleep(1)

with open(file_path, 'w', encoding='utf-8') as f:
    f.write(content)

print("Done updating.")
