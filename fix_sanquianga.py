import re

file_path = 'src/data/municipiosData.js'

with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

# Replace the fake/non-existent filename with a real one from Wikimedia Commons
new_content = content.replace("Manglares_de_San_Quianga.jpg", "Crep%C3%BAsculo_en_el_parque_Natural_Sanquianga.jpg")

if content != new_content:
    print("Fixed Sanquianga image in municipiosData.")
    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(new_content)
else:
    print("Could not find the Sanquianga image to fix in municipiosData.")
