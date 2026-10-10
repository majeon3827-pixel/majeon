// One-off asset pipeline: source images (from product PDFs / original site) -> optimized WebP in public/images
import sharp from "sharp";
import { mkdir } from "node:fs/promises";
import path from "node:path";

const SRC = process.env.MAJEON_IMG_SRC; // directory holding the raw source files
const OUT = path.resolve("public/images");
if (!SRC) throw new Error("MAJEON_IMG_SRC is required");

const jobs = [
  // [source, output, maxWidth, options]
  ["drive/img/plus-intro-p4-x4308.jpg", "hero-plus.webp", 1800, { trim: true }],
  ["drive/img/plus-intro-p4-x4308.jpg", "plus-main.webp", 1600, { trim: true }],
  ["drive/img/plus-intro-p3-x3160.jpg", "plus-angle.webp", 1400],
  ["drive/img/plus-intro-p3-x3164.jpg", "plus-rod.webp", 1400],
  ["drive/img/fushion-intro-p1-x148.jpg", "fusion-main.webp", 1600, { trim: true }],
  ["drive/img/fushion-intro-p1-x147.jpg", "fusion-angle.webp", 1400, { trim: true }],
  ["drive/img/fushion-intro-p1-x153.jpg", "fusion-front.webp", 1400, { trim: true }],
  ["drive/img/light-intro-p1-x159.jpg", "light-main.webp", 1600, { trim: true }],
  ["drive/img/light-intro-p1-x161.jpg", "light-angle.webp", 1400, { trim: true }],
  ["drive/img/light-intro-p1-x155.jpg", "light-front.webp", 1600, { trim: true }],
  ["drive/img/plus-intro-p2-x1534.jpg", "feature-detach.webp", 1000],
  ["drive/img/plus-intro-p2-x1538.jpg", "feature-u-rod.webp", 1000],
  ["drive/img/plus-install-p2-x19.jpg", "feature-fan.webp", 1000],
  ["drive/img/plus-install-p1-x422.jpg", "feature-led.webp", 800],
  ["drive/img/fushion-intro-p1-x150.jpg", "remote.webp", 400, { trim: true }],
  ["canva/media/5871fb0e81be7f746a2beee3f5c23fa4.jpg", "story-linen.webp", 1600],
  ["canva/media/e180a6717c3a54dae659c89bb1892628.png", "story-basket.webp", 1200],
];

await mkdir(OUT, { recursive: true });
for (const [src, out, width, opts = {}] of jobs) {
  let img = sharp(path.join(SRC, src));
  if (opts.trim) img = img.trim({ threshold: 12 });
  const info = await img
    .resize({ width, withoutEnlargement: true })
    .webp({ quality: 82, effort: 5 })
    .toFile(path.join(OUT, out));
  console.log(out.padEnd(22), `${info.width}x${info.height}`, `${Math.round(info.size / 1024)}KB`);
}
