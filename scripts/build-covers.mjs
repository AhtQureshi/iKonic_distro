// Builds the mock release covers in public/assets/images/covers/: abstract gradient artwork for fictional
// releases, so the site never shows real artists' album art. Titles and artists live in src/data/.
// Run `npm run covers` after changing a cover below, and commit the result.
// Not run on build: it needs sharp, which is only guaranteed locally.
import { mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const OUT = join(ROOT, 'public', 'assets', 'images', 'covers');
const SIZE = 480;
const S = SIZE * 2; // draw at 2x, then downscale for smooth edges

// name: file name (no extension), style: artwork layout, colors: [from, to, accent].
const COVERS = [
  { name: 'midnight-signal', style: 'orb', colors: ['#0b1033', '#3a1c71', '#ff4d6d'] },
  { name: 'glass-horizon', style: 'bands', colors: ['#03252e', '#0f5e6e', '#9ff3e6'] },
  { name: 'neon-tides', style: 'waves', colors: ['#2b0b3f', '#0b2f4f', '#ff3cac'] },
  { name: 'static-bloom', style: 'rings', colors: ['#1a0506', '#5c0f14', '#ff5a3c'] },
  { name: 'amber-frequency', style: 'orb', colors: ['#3d1404', '#c2410c', '#ffd27a'] },
  { name: 'low-orbit-club', style: 'rings', colors: ['#05050f', '#1e1b4b', '#7dd3fc'] },
  { name: 'velvet-circuit', style: 'grid', colors: ['#1c0418', '#4a0d3f', '#f472b6'] },
  { name: 'coastline-echoes', style: 'waves', colors: ['#0c1f3f', '#1d4e89', '#a5d8ff'] },
  { name: 'prism-weather', style: 'bands', colors: ['#2a0845', '#6441a5', '#fbc2eb'] },
  { name: 'after-the-signal', style: 'orb', colors: ['#020617', '#0f3d3e', '#34d399'] },
  { name: 'slow-burn-district', style: 'grid', colors: ['#1f0a00', '#7c2d12', '#fb923c'] },
  { name: 'cobalt-dreams', style: 'waves', colors: ['#020b2b', '#1e3a8a', '#60a5fa'] },
  { name: 'northbound-lights', style: 'bands', colors: ['#04151f', '#134e4a', '#a7f3d0'] },
  { name: 'quiet-voltage', style: 'rings', colors: ['#111111', '#3f3f46', '#facc15'] },
  { name: 'ultraviolet-hours', style: 'orb', colors: ['#12002b', '#5b21b6', '#c084fc'] },
  { name: 'sunset-arcade', style: 'grid', colors: ['#2d0a31', '#b4245b', '#ffb86b'] },
  { name: 'second-gravity', style: 'rings', colors: ['#0a0a0a', '#7f1d1d', '#fca5a5'] },
];

// Small seeded random so every run draws the same artwork.
function random(seed) {
  let h = 2166136261;
  for (const c of seed) h = Math.imul(h ^ c.charCodeAt(0), 16777619);
  return () => ((h = Math.imul(h ^ (h >>> 15), 2246822507) ^ Math.imul(h ^ (h >>> 13), 3266489909)) >>> 0) / 4294967296;
}

const art = {
  orb(r, [, , accent]) {
    const cx = S * (0.35 + r() * 0.3), cy = S * (0.35 + r() * 0.3);
    return `
      <circle cx="${cx}" cy="${cy}" r="${S * 0.34}" fill="${accent}" opacity="0.55" filter="url(#blur)"/>
      <circle cx="${cx}" cy="${cy}" r="${S * 0.16}" fill="${accent}" opacity="0.9"/>
      <circle cx="${S - cx}" cy="${S - cy}" r="${S * 0.06}" fill="#fff" opacity="0.25" filter="url(#soft)"/>`;
  },
  rings(r, [, , accent]) {
    const cx = S * (0.4 + r() * 0.2), cy = S * (0.4 + r() * 0.2);
    let rings = '';
    for (let i = 1; i <= 9; i++) {
      rings += `<circle cx="${cx}" cy="${cy}" r="${S * 0.045 * i * (1 + r() * 0.15)}" fill="none" stroke="${accent}" stroke-width="${S * 0.006}" opacity="${(1 - i / 11).toFixed(2)}"/>`;
    }
    return `<circle cx="${cx}" cy="${cy}" r="${S * 0.3}" fill="${accent}" opacity="0.25" filter="url(#blur)"/>${rings}`;
  },
  waves(r, [, , accent]) {
    let paths = '';
    for (let i = 0; i < 7; i++) {
      const y = S * (0.35 + i * 0.07), amp = S * (0.03 + r() * 0.05), phase = r() * S;
      let d = `M0 ${y}`;
      for (let x = 0; x <= S; x += S / 24) d += ` L${x.toFixed(1)} ${(y + Math.sin((x + phase) / (S / 6)) * amp).toFixed(1)}`;
      paths += `<path d="${d}" fill="none" stroke="${accent}" stroke-width="${S * (0.004 + i * 0.002)}" opacity="${(0.25 + i * 0.1).toFixed(2)}"/>`;
    }
    return `<ellipse cx="${S / 2}" cy="${S * 0.6}" rx="${S * 0.5}" ry="${S * 0.2}" fill="${accent}" opacity="0.2" filter="url(#blur)"/>${paths}`;
  },
  bands(r, [, , accent]) {
    let bands = '';
    for (let i = 0; i < 6; i++) {
      const y = S * (0.45 + i * 0.09);
      bands += `<rect x="0" y="${y}" width="${S}" height="${S * (0.012 + i * 0.008)}" fill="${accent}" opacity="${(0.15 + i * 0.13).toFixed(2)}"/>`;
    }
    return `<circle cx="${S * (0.3 + r() * 0.4)}" cy="${S * 0.42}" r="${S * 0.2}" fill="${accent}" opacity="0.7" filter="url(#soft)"/>${bands}`;
  },
  grid(r, [, , accent]) {
    const horizon = S * (0.55 + r() * 0.08);
    let lines = '';
    for (let i = 1; i <= 8; i++) {
      const y = horizon + (S - horizon) * (i / 8) ** 1.8;
      lines += `<line x1="0" y1="${y}" x2="${S}" y2="${y}" stroke="${accent}" stroke-width="${S * 0.003}" opacity="0.6"/>`;
    }
    for (let i = -8; i <= 8; i++) {
      lines += `<line x1="${S / 2 + i * S * 0.04}" y1="${horizon}" x2="${S / 2 + i * S * 0.22}" y2="${S}" stroke="${accent}" stroke-width="${S * 0.003}" opacity="0.5"/>`;
    }
    return `<circle cx="${S / 2}" cy="${horizon}" r="${S * 0.22}" fill="${accent}" opacity="0.85" clip-path="url(#above)"/>
      <circle cx="${S / 2}" cy="${horizon}" r="${S * 0.32}" fill="${accent}" opacity="0.3" filter="url(#blur)"/>${lines}
      <clipPath id="above"><rect x="0" y="0" width="${S}" height="${horizon}"/></clipPath>`;
  },
};

function svg({ name, style, colors }) {
  const r = random(name);
  const [from, to] = colors;
  const angle = Math.round(r() * 360);
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${S}" height="${S}" viewBox="0 0 ${S} ${S}">
    <defs>
      <linearGradient id="bg" gradientTransform="rotate(${angle} .5 .5)"><stop offset="0" stop-color="${from}"/><stop offset="1" stop-color="${to}"/></linearGradient>
      <radialGradient id="vignette"><stop offset="0.55" stop-color="#000" stop-opacity="0"/><stop offset="1" stop-color="#000" stop-opacity="0.55"/></radialGradient>
      <filter id="blur" x="-50%" y="-50%" width="200%" height="200%"><feGaussianBlur stdDeviation="${S * 0.07}"/></filter>
      <filter id="soft" x="-50%" y="-50%" width="200%" height="200%"><feGaussianBlur stdDeviation="${S * 0.015}"/></filter>
      <filter id="grain"><feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" seed="${Math.round(r() * 100)}"/><feColorMatrix values="0 0 0 0 1  0 0 0 0 1  0 0 0 0 1  0 0 0 0.09 0"/></filter>
    </defs>
    <rect width="${S}" height="${S}" fill="url(#bg)"/>
    ${art[style](r, colors)}
    <rect width="${S}" height="${S}" fill="url(#vignette)"/>
    <rect width="${S}" height="${S}" filter="url(#grain)"/>
  </svg>`;
}

mkdirSync(OUT, { recursive: true });
await Promise.all(COVERS.map((cover) =>
  sharp(Buffer.from(svg(cover))).resize(SIZE, SIZE).webp({ quality: 82 }).toFile(join(OUT, `${cover.name}.webp`)),
));
console.log(`covers: ${COVERS.length}`);
