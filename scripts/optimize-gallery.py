import os
from PIL import Image

output_dir = "public/gallery"
os.makedirs(output_dir, exist_ok=True)

images = [
    {"src": "jitendra before after.jpeg", "name": "jitendra", "client": "Jitendra - Fitness & Transformation"},
    {"src": "sunita before after.jpeg", "name": "sunita", "client": "Sunita - Beauty & Lifestyle Studio"},
    {"src": "suryaprakah before after.jpeg", "name": "suryaprakash", "client": "Surya Prakash - Doctor & Clinic"},
    {"src": "swiftliner befor after.jpeg", "name": "swiftliner", "client": "SwiftLiner - Logistics & Auto Brand"},
]

print("Starting Image Compression & Optimization...")

for img_info in images:
    src_path = img_info["src"]
    if not os.path.exists(src_path):
        continue

    original_size = os.path.getsize(src_path)
    with Image.open(src_path) as im:
        if im.mode in ("RGBA", "P"):
            im = im.convert("RGB")
        
        # Resize if width exceeds 1200px for web performance
        max_dim = 1200
        if max(im.size) > max_dim:
            im.thumbnail((max_dim, max_dim), Image.Resampling.LANCZOS)
        
        webp_path = os.path.join(output_dir, f"{img_info['name']}.webp")
        im.save(webp_path, "WEBP", quality=72, method=6)
        webp_size = os.path.getsize(webp_path)
        
        reduction = (1 - (webp_size / original_size)) * 100
        print(f"Optimized: {src_path} ({original_size/1024:.1f} KB) -> {webp_path} ({webp_size/1024:.1f} KB) [{reduction:.1f}% size reduction]")

print("All gallery images successfully optimized!")
