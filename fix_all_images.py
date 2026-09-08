import re

file_path = 'src/data/municipiosData.js'

with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

placeholder = "https://images.unsplash.com/photo-1596422846543-74c6fc0e6f62?q=80&w=800&auto=format&fit=crop"

# Replace any image that ends with .pdf, .svg, .doc, or has utm_source with the placeholder
def replacer(match):
    url = match.group(1)
    if '.pdf' in url.lower() or '.svg' in url.lower() or 'utm_source' in url.lower():
        return f'image: "{placeholder}"'
    return match.group(0)

# Pattern to find image lines
pattern = re.compile(r'image:\s*"([^"]+)"')
new_content = pattern.sub(replacer, content)

with open(file_path, 'w', encoding='utf-8') as f:
    f.write(new_content)

print("Fixed all remaining bad image formats across all municipalities.")
