import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { InnerPageTemplate } from "@/components/sites/balifirsttimer-com-4cbcd837/root-8a5edab2/InnerPageTemplate";
import {
  getInnerPage,
  innerPages,
} from "@/components/sites/balifirsttimer-com-4cbcd837/root-8a5edab2/innerPageData";
import { absoluteUrl, SITE_NAME, SITE_LOCALE, socialImage } from "@/lib/site-config";

type InnerPageProps = {
  params: Promise<{ slug: string[] }>;
};

export function generateStaticParams() {
  return innerPages.map((page) => ({ slug: page.path.split("/") }));
}

export async function generateMetadata({ params }: InnerPageProps): Promise<Metadata> {
  const { slug } = await params;
  const page = getInnerPage(slug.join("/"));

  if (!page) {
    return {};
  }

  return {
    title: page.title,
    description: page.summary,
    alternates: {
      canonical: `/${page.path}`,
    },
    openGraph: {
      type: "website",
      url: absoluteUrl(`/${page.path}`),
      siteName: SITE_NAME,
      locale: SITE_LOCALE,
      title: page.title,
      description: page.summary,
      images: [socialImage(page.path, page.title)],
    },
    twitter: {
      card: "summary_large_image",
      title: page.title,
      description: page.summary,
      images: [socialImage(page.path, page.title)],
    },
    robots: { index: true, follow: true },
  };
}

export default async function InnerPage({ params }: InnerPageProps) {
  const { slug } = await params;
  const page = getInnerPage(slug.join("/"));

  if (!page) {
    notFound();
  }

  return <InnerPageTemplate page={page} />;
}
