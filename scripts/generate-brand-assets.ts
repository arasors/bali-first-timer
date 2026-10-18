import { mkdir, readFile, writeFile } from "node:fs/promises";
import { join } from "node:path";
import sharp from "sharp";

import { innerPages } from "../src/components/sites/balifirsttimer-com-4cbcd837/root-8a5edab2/innerPageData";
import { LOGO_IMAGE, SITE_URL } from "../src/lib/site-config";

const root = process.cwd();
const publicDir = join(root, "public");
const ogDir = join(publicDir, "seo/og");
const width = 1200;
const height = 630;

function escapeXml(value: string) {
  return value.replace(/[<>&"']/g, (character) => ({
    "<": "&lt;", ">": "&gt;", "&": "&amp;", '"': "&quot;", "'": "&apos;",
  })[character] ?? character);
}

function wrap(text: string, maxCharacters: number) {
  const lines: string[] = [];
  for (const word of text.split(/\s+/)) {
    const last = lines[lines.length - 1];
    if (last && `${last} ${word}`.length <= maxCharacters) lines[lines.length - 1] = `${last} ${word}`;
    else lines.push(word);
  }
  return lines;
}

function textLines(lines: string[], x: number, y: number, lineHeight: number) {
  return lines.map((line, index) => `<tspan x="${x}" y="${y + index * lineHeight}">${escapeXml(line)}</tspan>`).join("");
}

async function pngData(source: string, resizeWidth: number, resizeHeight: number, fit: "cover" | "contain" = "cover") {
  const buffer = await sharp(source).resize(resizeWidth, resizeHeight, {
    fit,
    background: "transparent",
  }).png().toBuffer();
  return `data:image/png;base64,${buffer.toString("base64")}`;
}

await mkdir(ogDir, { recursive: true });
const markPath = join(publicDir, "seo/brand-mark.svg");
const coast = await pngData(join(publicDir, "hero-bg.png"), width, height);
const logoBuffer = await sharp(join(publicDir, LOGO_IMAGE)).trim().resize(360, 310, { fit: "inside" }).png().toBuffer();
const logo = `data:image/png;base64,${logoBuffer.toString("base64")}`;
const mark = await pngData(markPath, 64, 64, "contain");
const domain = new URL(SITE_URL).hostname;

const pages = [
  {
    path: "home",
    title: "Your first Bali. Made for you.",
    eyebrow: "LOCAL INSIGHT. YOUR KIND OF BALI.",
    summary: "Personal itineraries, local discoveries and island days at your own pace.",
    image: null,
  },
  ...innerPages,
];

for (const page of pages) {
  const isHome = page.path === "home";
  const lines = isHome ? ["Your first Bali.", "Made for you."] : wrap(page.title, 22);
  const fontSize = lines.length > 3 ? 54 : lines.length > 2 ? 62 : 72;
  const lineHeight = fontSize + 6;
  const titleY = lines.length > 3 ? 220 : 243;
  const titleBottom = titleY + (lines.length - 1) * lineHeight;
  const summaryLines = wrap(page.summary, 58).slice(0, 3);
  const photo = page.image ? await pngData(join(publicDir, page.image), 300, 380) : null;
  const visual = isHome
    ? `<circle cx="959" cy="304" r="178" fill="#052C40" fill-opacity="0.35" stroke="#FFFFFF" stroke-opacity="0.3" stroke-width="2"/>
       <circle cx="959" cy="304" r="194" fill="none" stroke="#73E6EE" stroke-opacity="0.2"/>
       <image href="${logo}" x="779" y="157" width="360" height="310" preserveAspectRatio="xMidYMid meet"/>`
    : `<rect x="820" y="127" width="308" height="388" rx="154" fill="#FFFFFF" fill-opacity="0.85"/>
       <image href="${photo}" x="824" y="131" width="300" height="380" clip-path="url(#photo)"/>
       <circle cx="1108" cy="458" r="54" fill="#B8E63D"/>
       <text x="1108" y="452" text-anchor="middle" font-size="13" font-weight="700" fill="#052B40">YOUR</text>
       <text x="1108" y="473" text-anchor="middle" font-size="18" font-weight="800" fill="#052B40">BALI</text>`;

  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">
    <defs>
      <linearGradient id="shade"><stop stop-color="#031D2D" stop-opacity="0.97"/><stop offset="0.58" stop-color="#052B40" stop-opacity="0.84"/><stop offset="1" stop-color="#052B40" stop-opacity="0.1"/></linearGradient>
      <linearGradient id="base" x2="0" y2="1"><stop stop-color="#052B40" stop-opacity="0"/><stop offset="1" stop-color="#052B40"/></linearGradient>
      <clipPath id="photo"><rect x="824" y="131" width="300" height="380" rx="150"/></clipPath>
    </defs>
    <image href="${coast}" width="1200" height="630"/>
    <rect width="1200" height="630" fill="url(#shade)"/>
    <rect width="1200" height="630" fill="url(#base)"/>
    <g font-family="Arial, Helvetica, sans-serif">
      <image href="${mark}" x="64" y="62" width="52" height="52"/>
      <text x="132" y="84" fill="#FFFFFF" font-size="22" font-weight="800" letter-spacing="0.5">BALI FIRST TIMER</text>
      <text x="132" y="106" fill="#FFFFFF" fill-opacity="0.65" font-size="12" letter-spacing="2">PERSONAL BALI TRIP PLANNING</text>
      <text x="68" y="164" fill="#73E6EE" font-size="12" font-weight="700" letter-spacing="2.4">${escapeXml(page.eyebrow.toUpperCase())}</text>
      <text fill="#FFFFFF" font-size="${fontSize}" font-weight="800" letter-spacing="-2.5">${textLines(lines, 64, titleY, lineHeight)}</text>
      <text fill="#FFFFFF" fill-opacity="0.78" font-size="21">${textLines(summaryLines, 68, Math.max(titleBottom + 54, 416), 30)}</text>
      ${visual}
      <path d="M0 552C220 507 364 608 603 556C853 506 1014 575 1200 535V630H0Z" fill="#0B6B8A" fill-opacity="0.7"/>
      <path d="M0 580C250 535 447 604 707 568C939 536 1087 593 1200 565V630H0Z" fill="#052B40"/>
      <text x="68" y="596" fill="#FFFFFF" font-size="18" font-weight="700">${escapeXml(domain)}</text>
      <text x="1132" y="596" text-anchor="end" fill="#B8E63D" font-size="12" font-weight="700" letter-spacing="2">LOCAL INSIGHT. PERSONAL PACE.</text>
    </g>
  </svg>`;

  const filename = `${page.path.replaceAll("/", "-")}.jpg`;
  await sharp(Buffer.from(svg)).jpeg({ quality: 90, mozjpeg: true }).toFile(join(ogDir, filename));
}

// Keep the SVG master editable; derive raster sizes and the multi-resolution ICO.
for (const [size, filename] of [
  [16, "favicon-16x16.png"],
  [32, "favicon-32x32.png"],
  [48, "favicon-48x48.png"],
  [180, "apple-touch-icon.png"],
  [192, "android-chrome-192x192.png"],
  [512, "android-chrome-512x512.png"],
] as const) {
  const icon = sharp(markPath, { density: 768 }).resize(size, size);
  if (filename === "apple-touch-icon.png") icon.flatten({ background: "#052B40" });
  await icon.png().toFile(join(publicDir, filename));
}

const maskable = Buffer.from(`<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512"><rect width="512" height="512" fill="#052B40"/><image href="${mark}" x="80" y="80" width="352" height="352"/></svg>`);
await sharp(maskable).png().toFile(join(publicDir, "android-chrome-maskable-512x512.png"));

const iconSizes = [16, 32, 48];
const iconImages = await Promise.all(iconSizes.map((size) => sharp(markPath, { density: 768 }).resize(size, size).png().toBuffer()));
const header = Buffer.alloc(6 + iconSizes.length * 16);
header.writeUInt16LE(1, 2);
header.writeUInt16LE(iconSizes.length, 4);
let offset = header.length;
iconImages.forEach((buffer, index) => {
  const entry = 6 + index * 16;
  header.writeUInt8(iconSizes[index], entry);
  header.writeUInt8(iconSizes[index], entry + 1);
  header.writeUInt16LE(1, entry + 4);
  header.writeUInt16LE(32, entry + 6);
  header.writeUInt32LE(buffer.length, entry + 8);
  header.writeUInt32LE(offset, entry + 12);
  offset += buffer.length;
});
await writeFile(join(root, "src/app/favicon.ico"), Buffer.concat([header, ...iconImages]));
await writeFile(join(publicDir, "favicon.svg"), await readFile(markPath));

console.log(`Generated ${pages.length} social cards (1200×630), SVG/ICO favicons, Apple and Android icons.`);
