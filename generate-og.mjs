import sharp from 'sharp';
import { readFileSync } from 'fs';

const W = 1200;
const H = 630;

// Load logo, resize to fit nicely centered
const logoBuffer = await sharp(readFileSync('./public/logo.PNG'))
  .resize(500, 500, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
  .negate({ alpha: false })  // invert black strokes to white so they show on dark bg
  .toBuffer();

// Black background + centered logo
await sharp({
  create: { width: W, height: H, channels: 3, background: { r: 0, g: 0, b: 0 } }
})
.composite([
  { input: logoBuffer, top: Math.round((H - 500) / 2), left: Math.round((W - 500) / 2) }
])
.jpeg({ quality: 92 })
.toFile('./public/og-image.jpg');

console.log('✅  public/og-image.jpg generated (1200×630)');
