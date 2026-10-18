"use client";

import { useI18n } from "@/components/i18n/I18nProvider";

export function ScrollColorText({ text, dark = false }: { text: string; dark?: boolean }) {
  const { t, locale } = useI18n();
  const localized = t(text);
  // Arabic stays joined so letter animation never breaks its shaping.
  const segments = locale === "ar" ? localized.split(/(\s+)/) : Array.from(localized);

  return (
    <span data-scroll-color data-i18n-skip data-color-theme={dark ? "dark" : "light"} className="bft-scroll-color">
      <span className="sr-only">{localized}</span>
      <span aria-hidden="true" key={locale}>
        {segments.map((segment, index) => (
          <span key={index} data-color-letter>{segment}</span>
        ))}
      </span>
    </span>
  );
}
