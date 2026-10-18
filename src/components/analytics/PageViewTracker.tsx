"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { useEffect, useRef } from "react";

declare global {
  interface Window {
    dataLayer?: unknown[];
    fbq?: (...args: unknown[]) => void;
    gtag?: (...args: unknown[]) => void;
    ym?: (...args: unknown[]) => void;
  }
}

type PageViewTrackerProps = {
  gaMeasurementId?: string;
  gtmEnabled: boolean;
  metaPixelEnabled: boolean;
  yandexMetricaId?: string;
};

export function PageViewTracker({
  gaMeasurementId,
  gtmEnabled,
  metaPixelEnabled,
  yandexMetricaId,
}: PageViewTrackerProps) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const isInitialRender = useRef(true);

  useEffect(() => {
    if (isInitialRender.current) {
      isInitialRender.current = false;
      return;
    }

    const query = searchParams.toString();
    const pagePath = query ? `${pathname}?${query}` : pathname;
    const pageUrl = `${window.location.origin}${pagePath}`;

    if (gaMeasurementId && window.gtag) {
      window.gtag("config", gaMeasurementId, { page_path: pagePath });
    }

    if (gtmEnabled && window.dataLayer) {
      window.dataLayer.push({ event: "virtual_page_view", page_path: pagePath, page_url: pageUrl });
    }

    if (yandexMetricaId && window.ym) {
      window.ym(Number(yandexMetricaId), "hit", pageUrl);
    }

    if (metaPixelEnabled && window.fbq) {
      window.fbq("track", "PageView");
    }
  }, [gaMeasurementId, gtmEnabled, metaPixelEnabled, pathname, searchParams, yandexMetricaId]);

  return null;
}
