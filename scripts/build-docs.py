#!/usr/bin/env python3
"""Compress product PDFs for the web and render first-page thumbnails (PNG).

Run through `npm run build:docs` (see scripts/build-docs.mjs), which converts
the PNG thumbnails to WebP afterwards. Direct use:

    MAJEON_DOC_SRC=/path/to/original/pdfs python3 scripts/build-docs.py

Requires PyMuPDF (pip install pymupdf). Writes to public/docs/:
    <name>.pdf        – web-optimised PDF
    <name>.thumb.png  – first page at 640px wide (converted to .webp by node)

Strategy per file:
  1. Downsample embedded images to ~120 dpi JPEG and deflate streams. Keeps
     real text selectable.
  2. If the result is still above RASTER_THRESHOLD_MB (the print brochures
     carry thousands of vector objects and outlined text), rasterise every
     page to a 200 dpi JPEG instead. Nothing selectable is lost there because
     those files contain no fonts.

Light shares its manual/installation guide with Fusion (identical files), so
only Fusion copies are produced and referenced from content/site.ts.
"""
from __future__ import annotations

import io
import os
import sys
from pathlib import Path

import fitz  # PyMuPDF

ROOT = Path(__file__).resolve().parent.parent
SRC = Path(os.environ.get("MAJEON_DOC_SRC", ROOT / "docs-src"))
OUT = ROOT / "public" / "docs"

# source filename -> output stem
FILES = {
    "plus-intro.pdf": "plus-intro",
    "plus-manual.pdf": "plus-manual",
    "plus-install.pdf": "plus-install",
    "fushion-intro.pdf": "fusion-intro",
    "fushion-manual.pdf": "fusion-manual",
    "fushion-install.pdf": "fusion-install",
    "light-intro.pdf": "light-intro",
}

THUMB_WIDTH = 640
RASTER_THRESHOLD_MB = 3.0
RASTER_DPI = 200
RASTER_QUALITY = 78


def rewrite_images(src: Path) -> bytes:
    doc = fitz.open(src)
    doc.rewrite_images(
        dpi_threshold=150,
        dpi_target=120,
        quality=75,
        lossy=True,
        lossless=True,
        bitonal=True,
        color=True,
        gray=True,
    )
    data = doc.tobytes(garbage=4, deflate=True, clean=True)
    doc.close()
    return data


def rasterise(src: Path) -> bytes:
    doc = fitz.open(src)
    out = fitz.open()
    for page in doc:
        pix = page.get_pixmap(dpi=RASTER_DPI, alpha=False, colorspace=fitz.csRGB)
        jpg = pix.tobytes("jpeg", jpg_quality=RASTER_QUALITY)
        new = out.new_page(width=page.rect.width, height=page.rect.height)
        new.insert_image(new.rect, stream=jpg)
    data = out.tobytes(garbage=4, deflate=True)
    out.close()
    doc.close()
    return data


def has_fonts(src: Path) -> bool:
    doc = fitz.open(src)
    found = any(page.get_fonts() for page in doc)
    doc.close()
    return found


def thumbnail(pdf_bytes: bytes, dst: Path) -> None:
    doc = fitz.open(stream=io.BytesIO(pdf_bytes), filetype="pdf")
    page = doc[0]
    zoom = THUMB_WIDTH / page.rect.width
    pix = page.get_pixmap(matrix=fitz.Matrix(zoom, zoom), alpha=False, colorspace=fitz.csRGB)
    pix.save(dst, output="png")
    doc.close()


def main() -> int:
    if not SRC.is_dir():
        print(f"source dir not found: {SRC}", file=sys.stderr)
        return 1
    OUT.mkdir(parents=True, exist_ok=True)
    for src_name, stem in FILES.items():
        src = SRC / src_name
        if not src.exists():
            print(f"skip (missing): {src}", file=sys.stderr)
            continue
        data = rewrite_images(src)
        mode = "images"
        if len(data) > RASTER_THRESHOLD_MB * 1e6:
            data = rasterise(src)
            mode = "raster" + (" (text lost!)" if has_fonts(src) else "")
        pdf_out = OUT / f"{stem}.pdf"
        pdf_out.write_bytes(data)
        thumbnail(data, OUT / f"{stem}.thumb.png")
        pages = fitz.open(pdf_out).page_count
        print(
            f"{stem:15s} {pages}p  {src.stat().st_size / 1e6:7.1f} MB -> "
            f"{len(data) / 1e6:5.1f} MB  [{mode}]"
        )
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
