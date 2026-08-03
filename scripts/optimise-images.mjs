/**
 * Optimise dropped artwork in public/img.
 *
 * Generators hand back multi-megabyte PNGs. Shipping those makes the site crawl
 * — Next has to decode and re-encode every one on first request. This converts
 * them to right-sized JPEGs and parks the originals outside the repo.
 *
 *   node scripts/optimise-images.mjs           convert every PNG
 *   node scripts/optimise-images.mjs --dry     report only, change nothing
 *
 * Safe to re-run: it only touches .png files, so already-converted slots are
 * left alone. Originals are moved, never deleted.
 */

import sharp from "sharp";
import fs from "node:fs";
import path from "node:path";

const DIR = path.join(process.cwd(), "public", "img");
const BACKUP = "C:/tmp/indus-valley-img-originals";
const DRY = process.argv.includes("--dry");

/** Cap width by how large the slot ever renders, at 2× for retina. */
function maxWidthFor(slot) {
  if (/^HOME-TEAM-/.test(slot)) return 900; // renders ~120px wide
  if (/HERO$|^VISION-HORIZON$|^TEXTURE-CLAY$|^DI-MESH$/.test(slot)) return 2400;
  return 1600;
}

const pngs = fs.readdirSync(DIR).filter((f) => /\.png$/i.test(f));

if (!pngs.length) {
  console.log("Nothing to do — no PNGs in public/img.");
  process.exit(0);
}

if (!DRY) fs.mkdirSync(BACKUP, { recursive: true });

let before = 0;
let after = 0;

for (const file of pngs) {
  const slot = file.replace(/\.png$/i, "");
  const src = path.join(DIR, file);
  const out = path.join(DIR, `${slot}.jpg`);
  const size = fs.statSync(src).size;
  before += size;

  const meta = await sharp(src).metadata();
  const width = Math.min(meta.width, maxWidthFor(slot));

  if (DRY) {
    console.log(`${slot.padEnd(20)} ${meta.width}px -> ${width}px  ${(size / 1048576).toFixed(1)}MB`);
    continue;
  }

  await sharp(src)
    .resize({ width, withoutEnlargement: true })
    .jpeg({ quality: 82, mozjpeg: true, chromaSubsampling: "4:4:4" })
    .toFile(out);

  const outSize = fs.statSync(out).size;
  after += outSize;
  fs.renameSync(src, path.join(BACKUP, file));

  console.log(
    `${slot.padEnd(20)} ${meta.width}x${meta.height} -> ${width}px   ` +
      `${(size / 1048576).toFixed(1)}MB -> ${(outSize / 1024).toFixed(0)}KB`,
  );
}

if (!DRY) {
  console.log(
    `\n${pngs.length} images   ${(before / 1048576).toFixed(1)}MB -> ${(after / 1048576).toFixed(1)}MB` +
      `   (${(100 - (after / before) * 100).toFixed(0)}% smaller)`,
  );
  console.log(`Originals moved to ${BACKUP}`);
}
