import { innerPages } from "@/components/sites/balifirsttimer-com-4cbcd837/root-8a5edab2/innerPageData";
import {
  ADDRESS,
  PHONE_DISPLAY,
  WHATSAPP_HREF,
} from "@/components/sites/balifirsttimer-com-4cbcd837/root-8a5edab2/data";
import { absoluteUrl, SITE_DESCRIPTION, SITE_NAME } from "@/lib/site-config";

export function GET() {
  const pages = innerPages
    .map((page) => {
      const sections = page.sections
        .map((section) => `### ${section.title}\n\n${section.body}`)
        .join("\n\n");

      return `## ${page.title}\n\nURL: ${absoluteUrl(`/${page.path}`)}\n\n${page.summary}\n\n${page.intro}\n\n${sections}`;
    })
    .join("\n\n");

  const document = [
    `# ${SITE_NAME}`,
    "",
    SITE_DESCRIPTION,
    "",
    "## Business information",
    "",
    `- Location: ${ADDRESS}`,
    `- Phone: ${PHONE_DISPLAY}`,
    `- WhatsApp: ${WHATSAPP_HREF}`,
    "- Services: Personal itineraries, waterfall hunting, culinary hunting, activities and local Bali trip planning.",
    "- Guests: First-time Bali visitors, couples, families, friends and company groups.",
    "",
    "Availability, conditions and suitability can change. Confirm dates and trip details directly with Bali First Timer before relying on an activity plan.",
    "",
    pages,
    "",
  ].join("\n");

  return new Response(document, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
