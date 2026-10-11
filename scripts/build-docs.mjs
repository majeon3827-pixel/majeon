// Builds web-optimised product PDFs + WebP thumbnails into public/docs/.
//
//   MAJEON_DOC_SRC=/path/to/original/pdfs npm run build:docs
//
// Step 1 runs scripts/build-docs.py (PyMuPDF) which writes <name>.pdf and
// <name>.thumb.png. Step 2 converts the PNG thumbnails to WebP with sharp and
// removes the PNGs. Set MAJEON_PYTHON to point at a python with pymupdf
// installed (defaults to `python3`).
import { spawnSync } from "node:child_process";
import { readdir, unlink } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const outDir = path.join(root, "public", "docs");
const python = process.env.MAJEON_PYTHON ?? "python3";

const run = spawnSync(python, ["-I", path.join(root, "scripts", "build-docs.py")], {
  stdio: "inherit",
  env: process.env,
});
if (run.status !== 0) process.exit(run.status ?? 1);

for (const file of await readdir(outDir)) {
  if (!file.endsWith(".thumb.png")) continue;
  const src = path.join(outDir, file);
  const dst = path.join(outDir, file.replace(/\.thumb\.png$/, ".webp"));
  await sharp(src).webp({ quality: 80 }).toFile(dst);
  await unlink(src);
  console.log(`thumb ${path.basename(dst)}`);
}
