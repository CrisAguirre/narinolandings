import re

file_path = 'src/data/municipiosData.js'

with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

FALLBACK = "Sandon%C3%A1_-_Nari%C3%B1o_2888600484824800467_n.jpg"

# Specific images found via Wikimedia Commons API + web search
# Using clean URLs without utm_source tracking parameters
image_map = {
    # Leiva: Panorama del pueblo de Leiva desde la vereda La Garganta
    "Leiva": "https://upload.wikimedia.org/wikipedia/commons/8/87/Leiva_%28Nari%C3%B1o%29.jpg",
    
    # Taminango: Vista general del municipio
    "Taminango": "https://upload.wikimedia.org/wikipedia/commons/4/47/TAMINANGO.jpg",
    
    # Barbacoas: Río Telembí en Barbacoas
    "Barbacoas": "https://upload.wikimedia.org/wikipedia/commons/f/f0/R%C3%ADo_Telemb%C3%AD_-_Barbacoas%2C_noviembre_de_2024.jpg",
    
    # Samaniego: No hay foto específica del pueblo en Wikimedia, usar paisaje andino nariñense
    "Samaniego": "https://upload.wikimedia.org/wikipedia/commons/5/50/GUACHAVES_PANORAMICA.jpg",
    
    # Providencia: Municipio pequeño sin fotos, usar paisaje andino
    "Providencia": "https://upload.wikimedia.org/wikipedia/commons/9/93/Dibujo_de_las_monta%C3%B1as_de_Yacuanquer.jpg",
    
    # El Peñol: Municipio sin fotos propias, usar paisaje de la subregión Guambuyaco
    "El Peñol": "https://upload.wikimedia.org/wikipedia/commons/b/b2/Funesnari%C3%B1o.jpg",
    
    # Colón (Génova): Sin fotos, usar paisaje del Río Mayo (su subregión)
    "Colón (Génova)": "https://upload.wikimedia.org/wikipedia/commons/d/d1/Nari%C3%B1o_iglesia.jpg",
    
    # El Tablón de Gómez: Sin fotos, usar paisaje andino nariñense
    "El Tablón de Gómez": "https://upload.wikimedia.org/wikipedia/commons/d/d4/Parque_tangua_a_noite_-_panoramio.jpg",
    
    # El Charco: Municipio pacífico, usar paisaje costero pacífico
    "El Charco": "https://upload.wikimedia.org/wikipedia/commons/6/6d/Tumaco_-_Parque_Col%C3%B3n.jpg",
    
    # Magüí Payán: Municipio remoto Telembí, usar río Telembí de Barbacoas
    "Magüí Payán": "https://upload.wikimedia.org/wikipedia/commons/f/f0/R%C3%ADo_Telemb%C3%AD_-_Barbacoas%2C_noviembre_de_2024.jpg",
    
    # Roberto Payán: Municipio remoto Telembí, usar foto del Charco o Tumaco
    "Roberto Payán": "https://upload.wikimedia.org/wikipedia/commons/6/6d/Tumaco_-_Parque_Col%C3%B3n.jpg",
}

replaced = 0
for muni_name, new_url in image_map.items():
    # Build pattern to find the municipality and replace its image
    escaped_name = re.escape(muni_name)
    pattern = re.compile(
        r'(name:\s*"' + escaped_name + r'"[\s\S]*?image:\s*")[^"]+(")',
        re.DOTALL
    )
    
    new_content, count = pattern.subn(r'\g<1>' + new_url + r'\g<2>', content, count=1)
    if count > 0:
        content = new_content
        replaced += 1
        print(f"OK: {muni_name} -> {new_url.split('/')[-1][:50]}")
    else:
        print(f"FAILED: Could not find {muni_name}")

with open(file_path, 'w', encoding='utf-8') as f:
    f.write(content)

print(f"\nReplaced {replaced}/{len(image_map)} municipalities.")
