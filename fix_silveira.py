import re
import urllib.request
import urllib.parse
import json
import time

file_path = 'src/data/municipiosData.js'

with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

# Fallback images by subregion
subregion_fallbacks = {
    "Centro": "Laguna_de_La_Cocha.jpg",
    "Obando": "Santuario_de_Las_Lajas_Colombia.jpg",
    "Sabana": "Volcan_Azufral.jpg",
    "Occidente": "Volcan_Galeras.jpg",
    "Abades": "GUACHAVES_PANORAMICA.jpg",
    "Guambuyaco": "Funesnari%C3%B1o.jpg",
    "Juanambú": "Puente_Juanamb%C3%BA.jpg",
    "Río Mayo": "Nari%C3%B1o_iglesia.jpg",
    "Cordillera": "Cordillera_Occidental_Colombia.jpg",
    "Sanquianga": "Manglares_de_San_Quianga.jpg",
    "Pacífico Sur": "Tumaco_-_Parque_Col%C3%B3n.jpg", # Will use Parquecol%C3%B3n.jpg actually!
    "Telembí": "R%C3%ADo_Telemb%C3%AD_-_Barbacoas,_noviembre_de_2024.jpg",
    "Piedemonte Costero": "Reserva_Natural_La_Planada.jpg"
}

# Correct the Tumaco fallback in the dict just in case
subregion_fallbacks["Pacífico Sur"] = "Parquecol%C3%B3n.jpg"

matches = re.findall(r'name:\s*"([^"]+)",\s*subregion:\s*"([^"]+)",[\s\S]*?image:\s*"[^"]*Paisaje_de_Guillermo_Silveira_1968_firma\.jpg[^"]*"', content)

def get_wiki_image(muni_name):
    search_queries = [
        f"{muni_name} Nariño parque",
        f"{muni_name} Nariño",
        muni_name
    ]
    
    for query in search_queries:
        url = f"https://commons.wikimedia.org/w/api.php?action=query&list=search&srsearch={urllib.parse.quote(query)}&srnamespace=6&format=json"
        req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
        try:
            with urllib.request.urlopen(req) as response:
                data = json.loads(response.read().decode())
                for res in data['query']['search']:
                    title = res['title'].replace("File:", "")
                    # Filter out flags, maps, coat of arms
                    lower_title = title.lower()
                    if any(x in lower_title for x in ['flag', 'bandera', 'map', 'mapa', 'escudo', 'coat', 'location', 'ubicaci', 'symbol', 'logo']):
                        continue
                    if not title.lower().endswith(('.jpg', '.jpeg', '.png')):
                        continue
                        
                    return title.replace(' ', '_')
        except Exception as e:
            print(f"Error fetching {query}: {e}")
        time.sleep(0.5)
    return None

replaced = 0
for muni, subregion in matches:
    print(f"Processing {muni}...")
    # Specifically for Pasto which is easy
    if "Pasto" in muni:
        new_filename = "Parque_Nari%C3%B1o_Pasto.JPG"
    elif "Tumaco" in muni:
        new_filename = "Parquecol%C3%B3n.jpg"
    else:
        found = get_wiki_image(muni)
        if found:
            new_filename = urllib.parse.quote(found)
        else:
            print(f"  -> No specific image found for {muni}, using subregion {subregion} fallback")
            new_filename = subregion_fallbacks.get(subregion, "Laguna_de_La_Cocha.jpg")
            
    new_url = f"https://commons.wikimedia.org/wiki/Special:FilePath/{new_filename}"
    
    # Replace in content
    escaped_name = re.escape(muni)
    pattern = re.compile(r'(name:\s*"' + escaped_name + r'"[\s\S]*?image:\s*")[^"]+Paisaje_de_Guillermo_Silveira_1968_firma\.jpg[^"]*(")')
    content, count = pattern.subn(r'\g<1>' + new_url + r'\g<2>', content, count=1)
    if count > 0:
        print(f"  -> Success: {new_filename}")
        replaced += 1
        
with open(file_path, 'w', encoding='utf-8') as f:
    f.write(content)
    
print(f"Total fixed: {replaced}/{len(matches)}")
