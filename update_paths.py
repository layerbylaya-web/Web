import os
import re

src_dir = "src"

def process_file(path):
    with open(path, "r", encoding="utf-8") as f:
        content = f.read()

    # We want to replace /assets/images/ with /assets/images/enhanced/ 
    # EXCEPT when followed by ai-editorial/, social-reference/, or og/
    
    # regex explanation: /assets/images/(?!(ai-editorial|social-reference|og)/)
    pattern = re.compile(r'/assets/images/(?!(ai-editorial|social-reference|og|brand|icons|logo)/)')
    new_content = pattern.sub('/assets/images/enhanced/', content)
    
    if new_content != content:
        with open(path, "w", encoding="utf-8") as f:
            f.write(new_content)
        print(f"Updated {path}")

for root, _, files in os.walk(src_dir):
    for f in files:
        if f.endswith(".tsx") or f.endswith(".ts"):
            process_file(os.path.join(root, f))
