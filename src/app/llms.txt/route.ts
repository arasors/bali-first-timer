import { innerPages } from "@/components/sites/balifirsttimer-com-4cbcd837/root-8a5edab2/innerPageData";
import { absoluteUrl, SITE_DESCRIPTION, SITE_NAME } from "@/lib/site-config";

export function GET() {
  const experiencePages = innerPages.filter((page) => page.path.startsWith("experiences/"));
  const primaryPaths = ["experiences", "destinations", "about"];
  const primaryPages = primaryPaths
    .map((path) => innerPages.find((page) => page.path === path))
    .filter((page) => page !== undefined);
  const optionalPages = innerPages.filter((page) => page.path === "contact");

  const document = [
    `# ${SITE_NAME}`,
    "",
    `> ${SITE_DESCRIPTION}`,
    "",
    "Bali First Timer helps first-time visitors plan personal Bali itineraries, guided waterfall days, food experiences and activities.",
    "",
    "## Main pages",
    "",
    `- [Home](${absoluteUrl("/")}): Bali First Timer services and planning approach.`,
    ...primaryPages.map(
      (page) => `- [${page.title}](${absoluteUrl(`/${page.path}`)}): ${page.summary}`,
    ),
    "",
    "## Experiences",
    "",
    ...experiencePages.map(
      (page) => `- [${page.title}](${absoluteUrl(`/${page.path}`)}): ${page.summary}`,
    ),
    "",
    "## Optional",
    "",
    ...optionalPages.map(
      (page) => `- [${page.title}](${absoluteUrl(`/${page.path}`)}): ${page.summary}`,
    ),
    "",
  ].join("\n");

  return new Response(document, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
