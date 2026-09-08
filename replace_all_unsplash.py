import json
import re
import time
import urllib.request
import urllib.parse

# Known good Wikimedia fallback (Sandoná image)
FALLBACK_IMG = "https://upload.wikimedia.org/wikipedia/commons/7/7f/Sandon%C3%A1_-_Nari%C3%B1o_2888600484824800467_n.jpg"
UNSPLASH_STR = "unsplash.com"

def get_wikimedia_jpg(muni_name):
    query = f"{muni_name} Nariño"
    url = f"https://commons.wikimedia.org/w/api.php?action=query&list=search&srsearch={urllib.parse.quote(query)}&srnamespace=6&format=json"
    req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) NariñoApp/1.0'})
    
    try:
        with urllib.request.urlopen(req) as response:
            data = json.loads(response.read().decode())
            if data['query']['search']:
                for item in data['query']['search']:
                    title = item['title']
                    if title.lower().endswith(('.jpg', '.jpeg', '.png')):
                        img_url_req = f"https://commons.wikimedia.org/w/api.php?action=query&titles={urllib.parse.quote(title)}&prop=imageinfo&iiprop=url&format=json"
                        req2 = urllib.request.Request(img_url_req, headers={'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) NariñoApp/1.0'})
                        
                        with urllib.request.urlopen(req2) as response2:
                            img_data = json.loads(response2.read().decode())
                            pages = img_data['query']['pages']
                            page_id = list(pages.keys())[0]
                            if 'imageinfo' in pages[page_id]:
                                return pages[page_id]['imageinfo'][0]['url']
        return FALLBACK_IMG
    except Exception as e:
        print(f"Error fetching for {muni_name}: {e}")
        return FALLBACK_IMG

def process_file(file_path):
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()

    # Find blocks with name and image
    pattern = re.compile(r'name:\s*"([^"]+)",[\s\S]*?image:\s*"([^"]+)"')
    
    def replacer(match):
        name = match.group(1)
        current_img = match.group(2)
        
        if UNSPLASH_STR in current_img:
            print(f"Fetching image for {name}...")
            new_img = get_wikimedia_jpg(name)
            time.sleep(0.5) # Prevent rate limits
            return match.group(0).replace(current_img, new_img)
        return match.group(0)
        
    new_content = pattern.sub(replacer, content)
    
    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(new_content)
    print(f"Done processing {file_path}")

process_file('src/data/municipiosData.js')
process_file('src/data/regionsData.js')
