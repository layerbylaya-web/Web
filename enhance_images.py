import os
from PIL import Image, ImageEnhance
import json

base_dir = "public/assets/images"
enhanced_dir = os.path.join(base_dir, "enhanced")

def enhance_image(img_path, out_path):
    os.makedirs(os.path.dirname(out_path), exist_ok=True)
    try:
        with Image.open(img_path) as img:
            img = img.convert("RGB")
            # Resize
            max_size = 2200
            if max(img.size) > max_size:
                ratio = max_size / max(img.size)
                new_size = (int(img.width * ratio), int(img.height * ratio))
                img = img.resize(new_size, Image.Resampling.LANCZOS)
            
            # Contrast (mild)
            enhancer = ImageEnhance.Contrast(img)
            img = enhancer.enhance(1.05)
            
            # Warm tone (adjust RGB channels slightly)
            r, g, b = img.split()
            r = r.point(lambda i: min(int(i * 1.05), 255))
            b = b.point(lambda i: max(int(i * 0.95), 0))
            img = Image.merge("RGB", (r, g, b))
            
            # Sharpening (mild)
            enhancer = ImageEnhance.Sharpness(img)
            img = enhancer.enhance(1.2)
            
            # Save
            img.save(out_path, format="JPEG", quality=85)
            return True
    except Exception as e:
        print(f"Error processing {img_path}: {e}")
        return False

log = []
for root, dirs, files in os.walk(base_dir):
    if "enhanced" in root or "ai-editorial" in root or "social-reference" in root:
        continue
    for file in files:
        if file.lower().endswith(('.jpg', '.jpeg', '.png', '.webp')):
            in_path = os.path.join(root, file)
            rel_path = os.path.relpath(in_path, base_dir)
            out_path = os.path.join(enhanced_dir, rel_path)
            # change extension to jpg
            out_path = os.path.splitext(out_path)[0] + ".jpg"
            if enhance_image(in_path, out_path):
                log.append({
                    "original": in_path,
                    "enhanced": out_path,
                    "type": "Mild Contrast + Warm Tone + Soft Sharpening"
                })

with open("retouch_log.json", "w") as f:
    json.dump(log, f, indent=2)

print(f"Enhanced {len(log)} images.")
