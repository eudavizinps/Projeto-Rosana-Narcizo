"""Prepare the selected portfolio photos as web assets.

Usage: python scripts/prepare_portfolio_images.py <source-directory>
"""

from pathlib import Path
import sys

from PIL import Image, ImageOps


PHOTOS = {
    "0a9a76cd-957f-407c-bcfe-9434ebaec069.jpg": "coque-baixo-elegante.webp",
    "1a4d084e-f903-4b79-9cde-f167cbb087d6.jpg": "maquiagem-iluminada-cachos.webp",
    "1d6aef99-4e34-4c54-83a9-cf42e2e42372.jpg": "noiva-cachos-naturais.webp",
    "1db5f633-8989-49d8-9d45-9d5bcad15a57.jpg": "producao-celebracao.webp",
    "1eabd836-097c-4031-b5e2-c4cb3d79acee.jpg": "maquiagem-classica.webp",
    "1f4286e4-30ec-4cce-ab99-a31c9a524cd4.jpg": "coque-floral.webp",
    "2baffb14-ad1e-432e-ad3d-172f8c3aa623.jpg": "noiva-tiara.webp",
    "2cd38ce5-25c6-4889-b4ec-500b5bfad6da.jpg": "noiva-coroa-flores.webp",
    "2f7e00d0-46d6-440a-934d-07b0033948fb.jpg": "ondas-com-acessorio.webp",
    "2fcfc1d5-9642-4001-bc8c-2d0d862f0430.jpg": "noiva-coque-buque.webp",
}


def main() -> None:
    source_dir = Path(sys.argv[1])
    destination = Path(__file__).resolve().parents[1] / "src/assets/images/portfolio"
    destination.mkdir(parents=True, exist_ok=True)
    for source_name, target_name in PHOTOS.items():
        with Image.open(source_dir / source_name) as original:
            image = ImageOps.exif_transpose(original).convert("RGB")
            image.thumbnail((1800, 1800), Image.Resampling.LANCZOS)
            target = destination / target_name
            image.save(target, "WEBP", quality=84, method=6)
            print(f"{target_name}: {image.width}x{image.height}, {target.stat().st_size} bytes")


if __name__ == "__main__":
    main()
