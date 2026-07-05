import os
from PIL import Image

def make_contact_sheet(image_dir, file_suffix, out_name):
    files = [f for f in os.listdir(image_dir) if f.endswith(file_suffix)]
    if not files: return
    files.sort()
    images = [Image.open(os.path.join(image_dir, f)) for f in files]
    
    # Scale all images to same width
    target_width = 800
    scaled_images = []
    for img in images:
        ratio = target_width / img.width
        new_height = int(img.height * ratio)
        scaled_images.append(img.resize((target_width, new_height), Image.Resampling.LANCZOS))
    
    # Arrange in a grid, e.g., 4 columns
    cols = 4
    rows = (len(scaled_images) + cols - 1) // cols
    max_height_per_row = [0] * rows
    for i, img in enumerate(scaled_images):
        row = i // cols
        max_height_per_row[row] = max(max_height_per_row[row], img.height)
    
    total_height = sum(max_height_per_row)
    total_width = cols * target_width
    
    contact_sheet = Image.new('RGB', (total_width, total_height), (255, 255, 255))
    
    x_offset = 0
    y_offset = 0
    for i, img in enumerate(scaled_images):
        row = i // cols
        col = i % cols
        if col == 0 and i != 0:
            x_offset = 0
            y_offset += max_height_per_row[row - 1]
        
        contact_sheet.paste(img, (x_offset, y_offset))
        x_offset += target_width
        
    contact_sheet.save(out_name)
    print(f"Saved {out_name}")

make_contact_sheet('qa-screenshots', '-desktop.png', 'desktop-contact-sheet.jpg')
make_contact_sheet('qa-screenshots', '-mobile.png', 'mobile-contact-sheet.jpg')
