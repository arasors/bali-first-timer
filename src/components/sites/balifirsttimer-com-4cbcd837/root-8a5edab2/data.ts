import type { FeatureService, ServiceItem, SiteLink, StatItem } from "./types";

export const ASSET_ROOT = "/sites/balifirsttimer-com-4cbcd837/root-8a5edab2/images";
export const SHARED_ASSET_ROOT = "/sites/balifirsttimer-com-4cbcd837/shared";
export const LOGO_IMAGE = `${SHARED_ASSET_ROOT}/logo.png`;

const fallbackPhoneNumber = "6281283808333";
const configuredPhoneNumber = process.env.NEXT_PUBLIC_PHONE_NUMBER?.replace(/\D/g, "");
const configuredWhatsAppNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER?.replace(/\D/g, "");

export const PHONE_NUMBER = configuredPhoneNumber || fallbackPhoneNumber;
export const WHATSAPP_NUMBER = configuredWhatsAppNumber || PHONE_NUMBER;
export const PHONE_DISPLAY =
  process.env.NEXT_PUBLIC_PHONE_DISPLAY?.trim() || "+62 812-8380-8333";
export const PHONE_HREF = `tel:+${PHONE_NUMBER}`;
export const WHATSAPP_HREF = `https://wa.me/${WHATSAPP_NUMBER}`;
export const ADDRESS = process.env.NEXT_PUBLIC_BUSINESS_LOCATION?.trim() || "Bali, Indonesia";
export const MAPS_HREF = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(ADDRESS)}`;
export const MAP_EMBED_HREF = `https://www.google.com/maps?q=${encodeURIComponent(ADDRESS)}&output=embed`;

export const navigation: SiteLink[] = [
  { label: "Home", href: "/" },
  { label: "Experiences", href: "/experiences" },
  { label: "Destinations", href: "/destinations" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const featureServices: FeatureService[] = [
  {
    label: "Personal itinerary",
    href: "/experiences/personal-itinerary",
    image: `${ASSET_ROOT}/tirta-empul.jpg`,
    imageAlt: "Sacred spring fountains at Tirta Empul in Bali",
    description:
      "A day-by-day Bali plan shaped around your pace, your travel style and who is travelling with you.",
  },
  {
    label: "Waterfall hunting",
    href: "/experiences/waterfall-hunting",
    image: `${ASSET_ROOT}/sekumpul-waterfall.jpg`,
    imageAlt: "Traveller standing below Sekumpul Waterfall in Bali",
    description:
      "A dedicated local guide, carefully matched trails and honest weather calls for Bali's wilder side.",
  },
  {
    label: "Culinary hunting",
    href: "/experiences/culinary-hunting",
    image: `${ASSET_ROOT}/bali-brunch.jpg`,
    imageAlt: "Colourful Bali brunch spread with coffee and fresh fruit",
    description:
      "From legendary local dishes to family-friendly tables, every stop is chosen around what you enjoy.",
  },
];

export const stats: StatItem[] = [
  { value: "100%", label: "Transparent recommendations" },
  { value: "1:1", label: "Personal trip planning" },
  { value: "Local", label: "Bali knowledge on the ground" },
];

const serviceRows: Array<[string, string, string, string]> = [
  ["Personal Itinerary", "tirta-empul.jpg", "personal-itinerary", "A calm, realistic plan for your first Bali trip."],
  ["Waterfall Hunting", "sekumpul-waterfall.jpg", "waterfall-hunting", "Guided waterfall days matched to your fitness and group."],
  ["Culinary Hunting", "babi-guling.jpg", "culinary-hunting", "Local flavours, destination dining and the right table for your group."],
  ["Bali Activities", "jungle-atv.jpg", "bali-activities", "ATV, rafting, surfing, cycling and more, organised before arrival."],
  ["Temple & Culture", "tirta-empul.jpg", "temple-culture", "Respectful visits to temples, water palaces and cultural landmarks."],
  ["Ubud & Jungle", "monkey-forest-ubud.jpg", "ubud-jungle", "Forest paths, craft villages, terraces and a slower inland rhythm."],
  ["Lake & Hot Springs", "family-crater-lake.jpg", "lakes-hot-springs", "Cooler highlands, crater views and restorative thermal stops."],
  ["Beach & Beach Clubs", "tropical-cocktail.jpg", "beaches-beach-clubs", "The right coast, beach and sunset setting for your travel style."],
  ["Local Food Trails", "bebek-betutu.jpg", "local-food-trails", "Babi guling, bebek betutu, night markets and local favourites."],
  ["Cafe & Brunch Trails", "healthy-bali-lunch.jpg", "cafe-brunch-trails", "Coffee, fresh breakfasts and easy-going stops between adventures."],
  ["Markets & Shopping", "artisan-market.jpg", "markets-shopping", "Artisan finds, local markets and practical shopping stops."],
  ["Family-Friendly Bali", "bali-shopping.jpg", "family-friendly-bali", "Flexible days with realistic travel time and family-ready stops."],
];

export const services: ServiceItem[] = serviceRows.map(
  ([label, image, slug, description]) => ({
    label,
    href: `/experiences/${slug}`,
    image: `${ASSET_ROOT}/${image}`,
    imageAlt: `${label} in Bali`,
    description,
    slug,
  }),
);

export const inspirationImages = [
  `${ASSET_ROOT}/monkey-forest-ubud.jpg`,
  `${ASSET_ROOT}/tirta-empul.jpg`,
  `${ASSET_ROOT}/family-crater-lake.jpg`,
  `${ASSET_ROOT}/jungle-atv.jpg`,
  `${ASSET_ROOT}/artisan-market.jpg`,
  `${ASSET_ROOT}/bali-shopping.jpg`,
  `${ASSET_ROOT}/seafood-feast.jpg`,
  `${ASSET_ROOT}/tropical-cocktail.jpg`,
];

export const inspirationAlts = [
  "Sacred Monkey Forest in Ubud",
  "Holy spring fountains at Tirta Empul",
  "Family enjoying a calm crater lake",
  "ATV adventure at a jungle gate",
  "Handwoven bags at a Bali market",
  "A modern Bali shopping destination",
  "Fresh seafood feast in Bali",
  "Tropical sunset drink in Bali",
];

export const productImages = [
  `${ASSET_ROOT}/bali-brunch.jpg`,
  `${ASSET_ROOT}/babi-guling-feast.jpg`,
  `${ASSET_ROOT}/fresh-oysters.jpg`,
  `${ASSET_ROOT}/steak-taco.jpg`,
  `${ASSET_ROOT}/bebek-betutu.jpg`,
  `${ASSET_ROOT}/bali-coffee.jpg`,
  `${ASSET_ROOT}/loaded-tacos.jpg`,
  `${ASSET_ROOT}/tomahawk-steak.jpg`,
  `${ASSET_ROOT}/mezze-dinner.jpg`,
  `${ASSET_ROOT}/focaccia-lunch.jpg`,
  `${ASSET_ROOT}/chicken-waffles.jpg`,
  `${ASSET_ROOT}/iced-coffee.jpg`,
];

export const footerServices: SiteLink[] = services.slice(0, 6).map(({ label, href }) => ({
  label,
  href,
}));

export const footerCorporate: SiteLink[] = [
  { label: "All Experiences", href: "/experiences" },
  { label: "Bali Destinations", href: "/destinations" },
  { label: "How We Plan", href: "/about" },
  { label: "Waterfall Hunt", href: "/experiences/waterfall-hunting" },
  { label: "Culinary Hunt", href: "/experiences/culinary-hunting" },
  { label: "Contact", href: "/contact" },
];
