import type { Metadata, Viewport } from "next";

import { TrackingScripts } from "@/components/analytics/TrackingScripts";
import { I18nProvider } from "@/components/i18n/I18nProvider";
import { SplashScreen } from "@/components/i18n/SplashScreen";
import { MotionDirector } from "@/components/motion/MotionDirector";
import { StructuredData } from "@/components/seo/StructuredData";
import {
  absoluteUrl,
  SITE_DESCRIPTION,
  SITE_LOCALE,
  SITE_NAME,
  SITE_URL,
  socialImage,
} from "@/lib/site-config";

import "lenis/dist/lenis.css";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Bali First Timer | Personal Bali Trip Planning",
    template: "%s | Bali First Timer",
  },
  description: SITE_DESCRIPTION,
  applicationName: SITE_NAME,
  keywords: [
    "Bali itinerary planner",
    "Bali first time guide",
    "Bali waterfall tour",
    "Bali food tour",
    "Bali private guide",
    "Bali family itinerary",
    "Bali activity booking",
  ],
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  category: "Travel planning and guided experiences",
  alternates: {
    canonical: "/",
    languages: { "en-US": "/" },
  },
  openGraph: {
    type: "website",
    locale: SITE_LOCALE,
    url: "/",
    siteName: SITE_NAME,
    title: "Bali First Timer | Your First Bali Trip, Planned Properly",
    description: SITE_DESCRIPTION,
    images: [socialImage()],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bali First Timer | Your First Bali Trip, Planned Properly",
    description: SITE_DESCRIPTION,
    images: [socialImage()],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION || undefined,
    yandex: process.env.YANDEX_SITE_VERIFICATION || undefined,
    other: process.env.BING_SITE_VERIFICATION
      ? { "msvalidate.01": process.env.BING_SITE_VERIFICATION }
      : undefined,
  },
  icons: {
    icon: [
      { url: "/favicon-16x16.png?v=2", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png?v=2", sizes: "32x32", type: "image/png" },
      { url: "/favicon-48x48.png?v=2", sizes: "48x48", type: "image/png" },
      { url: "/favicon.svg?v=2", sizes: "any", type: "image/svg+xml" },
    ],
    shortcut: "/favicon.ico?v=2",
    apple: [{ url: "/apple-touch-icon.png?v=2", sizes: "180x180", type: "image/png" }],
  },
  appleWebApp: { capable: true, title: SITE_NAME, statusBarStyle: "black-translucent" },
  manifest: absoluteUrl("/manifest.webmanifest"),
};

export const viewport: Viewport = {
  themeColor: "#052B40",
  colorScheme: "light",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      dir="ltr"
      suppressHydrationWarning
      className="h-full"
    >
      <body className="flex min-h-full flex-col font-sans text-ink">
        <StructuredData />
        <I18nProvider>
          <MotionDirector />
          <SplashScreen />
          {children}
          <TrackingScripts />
        </I18nProvider>
      </body>
    </html>
  );
}
