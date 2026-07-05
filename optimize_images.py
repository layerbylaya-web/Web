import os
from PIL import Image

def optimize_images(directory, max_size_bytes=1500000, max_dimension=2200):
    total_saved = 0
    for root, _, files in os.walk(directory):
        for file in files:
            filepath = os.path.join(root, file)
            try:
                file_size = os.path.getsize(filepath)
                if file_size > max_size_bytes and filepath.lower().endswith(('.jpg', '.jpeg', '.png')):
                    print(f"Optimizing {filepath} ({file_size / 1024 / 1024:.2f} MB)")
                    
                    with Image.open(filepath) as img:
                        # Convert RGBA to RGB for JPEG compatibility if needed
                        if img.mode in ('RGBA', 'P') and filepath.lower().endswith(('.jpg', '.jpeg')):
                            img = img.convert('RGB')
                            
                        # Resize if larger than max_dimension
                        if img.width > max_dimension or img.height > max_dimension:
                            img.thumbnail((max_dimension, max_dimension), Image.Resampling.LANCZOS)
                        
                        # Overwrite as optimized format
                        if filepath.lower().endswith('.png'):
                            img.save(filepath, optimize=True)
                        else:
                            img.save(filepath, "JPEG", quality=80, optimize=True)
                            
                    new_size = os.path.getsize(filepath)
                    saved = file_size - new_size
                    total_saved += saved
                    print(f"  -> Reduced to {new_size / 1024 / 1024:.2f} MB (Saved {saved / 1024 / 1024:.2f} MB)")
            except Exception as e:
                print(f"Failed to optimize {filepath}: {e}")
                
    print(f"\nTotal space saved: {total_saved / 1024 / 1024:.2f} MB")

if __name__ == "__main__":
    optimize_images('public/assets')
