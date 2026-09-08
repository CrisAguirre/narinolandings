import re

file_path = 'src/data/municipiosData.js'

with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

# Using Special:FilePath which is the official and most stable way to hotlink Wikimedia images
image_map = {
    "Leiva": "https://commons.wikimedia.org/wiki/Special:FilePath/Leiva_(Nari%C3%B1o).jpg",
    "Taminango": "https://commons.wikimedia.org/wiki/Special:FilePath/TAMINANGO.jpg",
    "Barbacoas": "https://commons.wikimedia.org/wiki/Special:FilePath/R%C3%ADo_Telemb%C3%AD_-_Barbacoas,_noviembre_de_2024.jpg",
    "Samaniego": "https://commons.wikimedia.org/wiki/Special:FilePath/GUACHAVES_PANORAMICA.jpg",
    "Providencia": "https://commons.wikimedia.org/wiki/Special:FilePath/Dibujo_de_las_monta%C3%B1as_de_Yacuanquer.jpg",
    "El Peñol": "https://commons.wikimedia.org/wiki/Special:FilePath/Funesnari%C3%B1o.jpg",
    "Colón (Génova)": "https://commons.wikimedia.org/wiki/Special:FilePath/Nari%C3%B1o_iglesia.jpg",
    "El Tablón de Gómez": "https://commons.wikimedia.org/wiki/Special:FilePath/Parque_tangua_a_noite_-_panoramio.jpg",
    "El Charco": "https://commons.wikimedia.org/wiki/Special:FilePath/Tumaco_-_Parque_Col%C3%B3n.jpg",
    "Magüí Payán": "https://commons.wikimedia.org/wiki/Special:FilePath/R%C3%ADo_Telemb%C3%AD_-_Barbacoas,_noviembre_de_2024.jpg",
    "Roberto Payán": "https://commons.wikimedia.org/wiki/Special:FilePath/Tumaco_-_Parque_Col%C3%B3n.jpg",
}

replaced = 0
for muni_name, new_url in image_map.items():
    escaped_name = re.escape(muni_name)
    pattern = re.compile(
        r'(name:\s*"' + escaped_name + r'"[\s\S]*?image:\s*")[^"]+(")',
        re.DOTALL
    )
    
    new_content, count = pattern.subn(r'\g<1>' + new_url + r'\g<2>', content, count=1)
    if count > 0:
        content = new_content
        replaced += 1
        print(f"OK: {muni_name} fixed to use Special:FilePath")
    else:
        print(f"FAILED: Could not find {muni_name}")

with open(file_path, 'w', encoding='utf-8') as f:
    f.write(content)

print(f"\nReplaced {replaced}/{len(image_map)} municipalities with stable URLs.")
