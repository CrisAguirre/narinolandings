import re
import urllib.parse

def replace_image(file_path, name, is_region=False):
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()

    placeholder = "https://images.unsplash.com/photo-1596422846543-74c6fc0e6f62?q=80&w=800&auto=format&fit=crop"
    
    if is_region:
        # Search for Occidente block in regionsData
        pattern = r'(name:\s*"' + re.escape(name) + r'".*?image:\s*")[^"]+(")'
    else:
        # Search for municipality block in municipiosData
        pattern = r'(name:\s*"' + re.escape(name) + r'".*?image:\s*")[^"]+(")'

    new_content, count = re.subn(pattern, r'\g<1>' + placeholder + r'\g<2>', content, count=1, flags=re.DOTALL)
    
    if count > 0:
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(new_content)
        print(f"Replaced image for {name} in {file_path}")
    else:
        print(f"Could not find {name} in {file_path}")

replace_image('src/data/regionsData.js', 'Subregión Occidente', True)
replace_image('src/data/municipiosData.js', 'Mosquera')
replace_image('src/data/municipiosData.js', 'Olaya Herrera')
replace_image('src/data/municipiosData.js', 'La Tola')
replace_image('src/data/municipiosData.js', 'Santa Bárbara (Iscuandé)')
