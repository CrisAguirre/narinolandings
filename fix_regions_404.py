import re

file_path = 'src/data/regionsData.js'

with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

pattern = re.compile(r'https://upload\.wikimedia\.org/wikipedia/commons/(?:thumb/)?[a-f0-9]/[a-f0-9]{2}/([^"\?\s]+)')

def replacer(match):
    filename = match.group(1)
    return f"https://commons.wikimedia.org/wiki/Special:FilePath/{filename}"

new_content, count = pattern.subn(replacer, content)

print(f"Replaced {count} image URLs in regionsData.")

with open(file_path, 'w', encoding='utf-8') as f:
    f.write(new_content)
