import {
  ADDRESS,
  PHONE_DISPLAY,
  WHATSAPP_HREF,
} from "@/components/sites/balifirsttimer-com-4cbcd837/root-8a5edab2/data";
import {
  absoluteUrl,
  LOGO_IMAGE,
  SITE_DESCRIPTION,
  SITE_NAME,
  SOCIAL_IMAGE,
} from "@/lib/site-config";

export function StructuredData() {
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${absoluteUrl("/")}#website`,
        url: absoluteUrl("/"),
        name: SITE_NAME,
        description: SITE_DESCRIPTION,
        inLanguage: "en-US",
      },
      {
        "@type": "TravelAgency",
        "@id": `${absoluteUrl("/")}#business`,
        name: SITE_NAME,
        description: SITE_DESCRIPTION,
        url: absoluteUrl("/"),
        logo: absoluteUrl(LOGO_IMAGE),
        image: absoluteUrl(SOCIAL_IMAGE),
        telephone: PHONE_DISPLAY,
        address: {
          "@type": "PostalAddress",
          addressLocality: "Bali",
          addressCountry: "ID",
        },
        areaServed: {
          "@type": "AdministrativeArea",
          name: "Bali",
        },
        contactPoint: {
          "@type": "ContactPoint",
          telephone: PHONE_DISPLAY,
          contactType: "customer service",
          areaServed: "ID",
          availableLanguage: ["English", "Indonesian"],
        },
        hasMap: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(ADDRESS)}`,
        sameAs: [WHATSAPP_HREF],
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}
