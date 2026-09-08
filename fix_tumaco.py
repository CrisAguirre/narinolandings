import re

file_path = 'src/data/municipiosData.js'

with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

# Replace the fake/non-existent filename with a real one from Wikimedia Commons
new_content = content.replace("Tumaco_-_Parque_Col%C3%B3n.jpg", "Parquecol%C3%B3n.jpg")
new_content = new_content.replace("Tumaco_-_Parque_Colón.jpg", "Parquecol%C3%B3n.jpg")
new_content = new_content.replace("Tumaco_-_Parque_Colon.jpg", "Parquecol%C3%B3n.jpg")

if content != new_content:
    print("Fixed Tumaco image in municipiosData.")
    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(new_content)
else:
    print("Could not find the Tumaco image to fix in municipiosData.")
