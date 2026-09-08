import json
import re
import time
import urllib.request
import urllib.parse

FALLBACK_IMG = "7/7f/Sandon%C3%A1_-_Nari%C3%B1o_2888600484824800467_n.jpg"

def get_wikimedia_jpg(muni_name):
    query = f"{muni_name} Nariño"
    url = f"https://commons.wikimedia.org/w/api.php?action=query&list=search&srsearch={urllib.parse.quote(query)}&srnamespace=6&format=json"
    req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) Bot-Antigravity/2.0'})
    
    try:
        with urllib.request.urlopen(req) as response:
            data = json.loads(response.read().decode())
            if data['query']['search']:
                for item in data['query']['search']:
                    title = item['title']
                    if title.lower().endswith(('.jpg', '.jpeg', '.png')):
                        if 'Bandera' in title or 'Flag' in title or 'Escudo' in title:
                            continue
                        img_url_req = f"https://commons.wikimedia.org/w/api.php?action=query&titles={urllib.parse.quote(title)}&prop=imageinfo&iiprop=url&format=json"
                        req2 = urllib.request.Request(img_url_req, headers={'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) Bot-Antigravity/2.0'})
                        time.sleep(1) # delay between search and fetch
                        with urllib.request.urlopen(req2) as response2:
                            img_data = json.loads(response2.read().decode())
                            pages = img_data['query']['pages']
                            page_id = list(pages.keys())[0]
                            if 'imageinfo' in pages[page_id]:
                                return pages[page_id]['imageinfo'][0]['url']
        return None
    except Exception as e:
        print(f"Error fetching for {muni_name}: {e}")
        return None

def process_file(file_path):
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()

    pattern = re.compile(r'name:\s*"([^"]+)",[\s\S]*?image:\s*"([^"]+)"')
    
    def replacer(match):
        name = match.group(1)
        current_img = match.group(2)
        
        # If it has the Sandoná fallback image (but is not Sandoná itself)
        if FALLBACK_IMG in current_img and name != "Sandoná":
            print(f"Fetching for {name}...")
            time.sleep(5) # 5 seconds delay to prevent 429
            new_img = get_wikimedia_jpg(name)
            
            if not new_img:
                print(f"  Trying broader search for {name}...")
                time.sleep(5)
                new_img = get_wikimedia_jpg(name.split(" ")[0])
                
            if new_img:
                print(f"  Found: {new_img}")
                return match.group(0).replace(current_img, new_img)
            else:
                print(f"  Still no image found for {name}.")
        return match.group(0)
        
    new_content = pattern.sub(replacer, content)
    
    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(new_content)
    print(f"Done processing {file_path}")

print("Starting deep search to replace fallback images...")
process_file('src/data/municipiosData.js')
