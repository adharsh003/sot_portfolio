import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const QUALITY = 80;
const PUBLIC_DIR = 'public';

function getAllImages(dir) {
  const results = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      results.push(...getAllImages(full));
    } else if (/\.(png|jpg|jpeg)$/i.test(entry.name)) {
      results.push(full);
    }
  }
  return results;
}

const images = getAllImages(PUBLIC_DIR);
let totalBefore = 0, totalAfter = 0, count = 0;

for (const imgPath of images) {
  const ext = path.extname(imgPath);
  const webpPath = imgPath.replace(ext, '.webp');

  // skip if webp already exists
  if (fs.existsSync(webpPath)) continue;

  const before = fs.statSync(imgPath).size;
  await sharp(imgPath).webp({ quality: QUALITY }).toFile(webpPath);
  const after = fs.statSync(webpPath).size;

  totalBefore += before;
  totalAfter += after;
  count++;

  console.log(`✓ ${imgPath.padEnd(60)} ${(before/1024/1024).toFixed(2)}MB → ${(after/1024/1024).toFixed(2)}MB`);
}

console.log(`\n─────────────────────────────────────────────`);
console.log(`Converted: ${count} images`);
console.log(`Before:    ${(totalBefore/1024/1024).toFixed(1)} MB`);
console.log(`After:     ${(totalAfter/1024/1024).toFixed(1)} MB`);
console.log(`Saved:     ${((1 - totalAfter/totalBefore)*100).toFixed(0)}% smaller`);
