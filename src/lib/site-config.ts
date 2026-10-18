const FALLBACK_SITE_URL = "https://balifirsttimer.com";

function resolveSiteUrl() {
  const configuredUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim();

  if (!configuredUrl) {
    return FALLBACK_SITE_URL;
  }

  try {
    return new URL(configuredUrl).origin;
  } catch {
    return FALLBACK_SITE_URL;
  }
}

export const SITE_NAME = "Bali First Timer";
export const SITE_DESCRIPTION =
  "Personal Bali itineraries, waterfall adventures, culinary hunts and local trip planning for first-time visitors, couples and families.";
export const SITE_URL = resolveSiteUrl();
export const SITE_LOCALE = "en_US";
export const SITE_LANGUAGE = "en";
export const SOCIAL_IMAGE = "/seo/og/home.jpg";
export const LOGO_IMAGE =
  "/sites/balifirsttimer-com-4cbcd837/shared/logo.png";

export function absoluteUrl(path = "/") {
  return new URL(path, `${SITE_URL}/`).toString();
}

export function socialImage(path = "home", title = "Your first Bali. Made for you.") {
  return {
    url: absoluteUrl(`/seo/og/${path.replaceAll("/", "-")}.jpg`),
    width: 1200,
    height: 630,
    type: "image/jpeg",
    alt: `${SITE_NAME} — ${title}`,
  };
}
