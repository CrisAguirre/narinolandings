import re

file_path = 'src/data/municipiosData.js'

with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

matches = re.findall(r'name:\s*"([^"]+)",\s*subregion:\s*"([^"]+)",[\s\S]*?image:\s*"[^"]*Paisaje_de_Guillermo_Silveira_1968_firma\.jpg[^"]*"', content)

for m in matches:
    print(f"{m[0]} ({m[1]})")
