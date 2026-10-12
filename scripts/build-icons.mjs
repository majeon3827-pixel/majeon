// Generates the favicon set from a single geometric "m" mark in the brand red.
//
//   node scripts/build-icons.mjs
//
// Outputs (Next.js App Router file conventions, picked up automatically):
//   app/icon.svg         vector favicon (transparent background)
//   app/favicon.ico      16/32/48 px PNG-in-ICO for legacy browsers
//   app/apple-icon.png   180 px, white background (iOS home screen)
import { writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const RED = "#e0202e"; // --accent (light) in app/globals.css

// Rounded lowercase "m": one stem + two arches, drawn as a thick round stroke so
// it stays legible at 16 px. 64 x 64 box, glyph spans x 4..60, y 17..60.
const mark = `
  <path d="M10 54V24M10 32C10 20 32 20 32 32V54M32 32C32 20 54 20 54 32V54"
        fill="none" stroke="${RED}" stroke-width="12" stroke-linecap="round" stroke-linejoin="round"/>`;

const svg = (bg) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">${
  bg ? `<rect width="64" height="64" rx="14" fill="${bg}"/>` : ""
}${mark}
</svg>
`;

const png = (size, bg) => sharp(Buffer.from(svg(bg))).resize(size, size).png().toBuffer();

// ICO container holding PNG images (supported by all current browsers).
function ico(images) {
  const header = Buffer.alloc(6);
  header.writeUInt16LE(0, 0);
  header.writeUInt16LE(1, 2);
  header.writeUInt16LE(images.length, 4);
  const entries = [];
  let offset = 6 + 16 * images.length;
  for (const { size, data } of images) {
    const e = Buffer.alloc(16);
    e.writeUInt8(size === 256 ? 0 : size, 0);
    e.writeUInt8(size === 256 ? 0 : size, 1);
    e.writeUInt8(0, 2); // palette
    e.writeUInt8(0, 3); // reserved
    e.writeUInt16LE(1, 4); // planes
    e.writeUInt16LE(32, 6); // bpp
    e.writeUInt32LE(data.length, 8);
    e.writeUInt32LE(offset, 12);
    offset += data.length;
    entries.push(e);
  }
  return Buffer.concat([header, ...entries, ...images.map((i) => i.data)]);
}

await writeFile(path.join(root, "app", "icon.svg"), svg(null));
const icoImages = await Promise.all(
  [16, 32, 48].map(async (size) => ({ size, data: await png(size, null) })),
);
await writeFile(path.join(root, "app", "favicon.ico"), ico(icoImages));
await writeFile(path.join(root, "app", "apple-icon.png"), await png(180, "#ffffff"));
console.log("icons written: app/icon.svg, app/favicon.ico, app/apple-icon.png");
