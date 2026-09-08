import re

file_path = 'src/data/municipiosData.js'

with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

# Matches URLs like:
# https://upload.wikimedia.org/wikipedia/commons/6/6d/Tumaco_-_Parque_Col%C3%B3n.jpg
# and converts them to:
# https://commons.wikimedia.org/wiki/Special:FilePath/Tumaco_-_Parque_Col%C3%B3n.jpg

# The regex captures the filename at the end.
pattern = re.compile(r'https://upload\.wikimedia\.org/wikipedia/commons/(?:thumb/)?[a-f0-9]/[a-f0-9]{2}/([^"\?\s]+)')

def replacer(match):
    filename = match.group(1)
    # If it's a thumbnail URL, it might have a secondary slash, but the pattern stops at / so the group(1) might be wrong for thumbs?
    # Actually our URLs don't seem to be thumbs based on the 404 the user sent.
    return f"https://commons.wikimedia.org/wiki/Special:FilePath/{filename}"

new_content, count = pattern.subn(replacer, content)

print(f"Replaced {count} image URLs.")

with open(file_path, 'w', encoding='utf-8') as f:
    f.write(new_content)
