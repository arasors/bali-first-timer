import { mkdir, writeFile } from "node:fs/promises";
import { join } from "node:path";

const SOURCE_URL = "https://balifirsttimer.com/";
const OUTPUT_DIR = new URL(
  "../public/sites/balifirsttimer-com-4cbcd837/root-8a5edab2/images/",
  import.meta.url,
);

const fileNamesByAlt = new Map([
  ["Visitor seated among stone dragon statues at the Sacred Monkey Forest, Ubud", "monkey-forest-ubud.jpg"],
  ["Holy spring water fountains at Tirta Empul temple", "tirta-empul.jpg"],
  ["Healthy grilled halloumi salad bowl with fresh coconut", "healthy-bali-lunch.jpg"],
  ["Father and daughter wading into a calm crater lake", "family-crater-lake.jpg"],
  ["Grilled seafood platter with crab, prawns, and lobster", "seafood-feast.jpg"],
  ["Interior of a modern multi-level shopping mall", "bali-shopping.jpg"],
  ["Woman browsing handwoven rattan bags at a market stall", "artisan-market.jpg"],
  ["Tomahawk steak sliced and plated with fresh thyme", "tomahawk-steak.jpg"],
  ["Group posing on ATVs in front of a jungle stone gate", "jungle-atv.jpg"],
  ["Person standing in the pool below Sekumpul Waterfall", "sekumpul-waterfall.jpg"],
  ["Overhead spread of brunch dishes, coffees, and a fruit and granola bowl", "bali-brunch.jpg"],
  ["Spread of Turkish mezze dishes with a glass of red wine", "mezze-dinner.jpg"],
  ["Bebek betutu, Balinese slow-cooked duck, served with rice and sambal", "bebek-betutu.jpg"],
  ["Grilled chicken focaccia sandwich with arugula and tomato", "focaccia-lunch.jpg"],
  ["Sliced steak taco topped with slaw and microgreens", "steak-taco.jpg"],
  ["Loaded ground beef tacos with avocado and cheese", "loaded-tacos.jpg"],
  ["Latte art in a glass on a pink saucer", "bali-coffee.jpg"],
  ["Iced coffee with a thick layered foam top", "iced-coffee.jpg"],
  ["Balinese babi guling plate with crispy pork skin and rice", "babi-guling.jpg"],
  ["Two plates of babi guling with crispy skin, satay, and rice", "babi-guling-feast.jpg"],
  ["Fried chicken and waffles with butter and syrup", "chicken-waffles.jpg"],
  ["Layered tropical cocktail with a pineapple garnish", "tropical-cocktail.jpg"],
  ["Fresh oysters on ice with lemon and herbs", "fresh-oysters.jpg"],
]);

function readAttribute(tag, name) {
  const match = tag.match(new RegExp(`${name}=["']([^"']*)["']`, "i"));
  return match?.[1] ?? "";
}

function decodeDataUri(uri) {
  const match = uri.match(/^data:(image\/(?:jpeg|png|webp));base64,(.+)$/s);
  if (!match) {
    throw new Error("Unsupported image data URI");
  }

  return {
    mimeType: match[1],
    buffer: Buffer.from(match[2], "base64"),
  };
}

const response = await fetch(SOURCE_URL);
if (!response.ok) {
  throw new Error(`Unable to download ${SOURCE_URL}: ${response.status}`);
}

const html = await response.text();
await mkdir(OUTPUT_DIR, { recursive: true });

const savedSources = new Set();
const manifest = [];

for (const match of html.matchAll(/<img\b[^>]*>/gi)) {
  const tag = match[0];
  const src = readAttribute(tag, "src");
  const alt = readAttribute(tag, "alt");
  const fileName = fileNamesByAlt.get(alt);

  if (!fileName || !src.startsWith("data:image/") || savedSources.has(src)) {
    continue;
  }

  const { buffer } = decodeDataUri(src);
  await writeFile(join(OUTPUT_DIR.pathname, fileName), buffer);
  savedSources.add(src);
  manifest.push({ fileName, alt, bytes: buffer.length });
}

const backgroundMatch = html.match(/url\(["']?(data:image\/jpeg;base64,[^)"']+)["']?\)/i);
if (backgroundMatch) {
  const { buffer } = decodeDataUri(backgroundMatch[1]);
  const fileName = "hero-bali.jpg";
  await writeFile(join(OUTPUT_DIR.pathname, fileName), buffer);
  manifest.push({ fileName, alt: "Bali coastline and tropical landscape", bytes: buffer.length });
}

for (const expectedFile of fileNamesByAlt.values()) {
  if (!manifest.some(({ fileName }) => fileName === expectedFile)) {
    throw new Error(`Missing expected asset: ${expectedFile}`);
  }
}

if (!manifest.some(({ fileName }) => fileName === "hero-bali.jpg")) {
  throw new Error("Missing expected hero background image");
}

await writeFile(
  join(OUTPUT_DIR.pathname, "manifest.json"),
  `${JSON.stringify({ source: SOURCE_URL, assets: manifest }, null, 2)}\n`,
);

console.log(`Saved ${manifest.length} assets to ${OUTPUT_DIR.pathname}`);
console.log(`Total bytes: ${manifest.reduce((total, asset) => total + asset.bytes, 0)}`);
