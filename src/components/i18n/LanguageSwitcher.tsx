"use client";

import { Check, ChevronDown, Globe2 } from "lucide-react";
import { useEffect, useRef, useState } from "react";

import { useI18n } from "./I18nProvider";
import { localeOptions, type Locale } from "./messages";

const languageLabels: Record<Locale, string> = {
  en: "Language",
  ru: "Язык",
  fr: "Langue",
  de: "Sprache",
  ar: "اللغة",
};

export function LanguageSwitcher({
  mobile = false,
  dark = false,
}: {
  mobile?: boolean;
  dark?: boolean;
}) {
  const { locale, setLocale } = useI18n();
  const [isOpen, setIsOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const current = localeOptions.find((option) => option.code === locale) ?? localeOptions[0];

  useEffect(() => {
    if (!isOpen) return;

    const close = (event: MouseEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) setIsOpen(false);
    };
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false);
    };

    document.addEventListener("mousedown", close);
    window.addEventListener("keydown", closeOnEscape);
    return () => {
      document.removeEventListener("mousedown", close);
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [isOpen]);

  if (mobile) {
    return (
      <div data-i18n-skip className="mt-7 border-t border-white/12 pt-5">
        <p className="mb-3 flex items-center gap-2 text-[9px] font-bold tracking-[0.2em] text-white/40 uppercase">
          <Globe2 aria-hidden="true" className="size-3.5 text-[#09B8C8]" />
          {languageLabels[locale]}
        </p>
        <div className="flex flex-wrap gap-2" aria-label="Choose language">
          {localeOptions.map((option) => (
            <button
              key={option.code}
              type="button"
              lang={option.code}
              dir={option.code === "ar" ? "rtl" : "ltr"}
              aria-pressed={locale === option.code}
              onClick={() => setLocale(option.code)}
              className={`min-h-11 rounded-full border px-3.5 text-xs font-bold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#09B8C8] ${
                locale === option.code
                  ? "border-[#B8E63D] bg-[#B8E63D] text-[#071B24]"
                  : "border-white/15 text-white/70 hover:border-white/40 hover:text-white"
              }`}
            >
              {option.short}
            </button>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div ref={rootRef} data-i18n-skip className="relative hidden lg:block">
      <button
        type="button"
        aria-label={languageLabels[locale]}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        onClick={() => setIsOpen((open) => !open)}
        className={`flex min-h-11 items-center gap-2 rounded-full border px-3 text-[11px] font-bold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#09B8C8] ${
          dark
            ? "border-white/18 bg-white/10 text-white hover:border-white/35 hover:bg-white/16"
            : "border-[#071B24]/10 bg-white/45 text-[#071B24] hover:border-[#09B8C8]/50 hover:bg-white"
        }`}
      >
        <Globe2 aria-hidden="true" className={`size-3.5 ${dark ? "text-[#73E6EE]" : "text-[#087F8B]"}`} />
        {current.short}
        <ChevronDown aria-hidden="true" className={`size-3 transition-transform ${isOpen ? "rotate-180" : ""}`} />
      </button>

      {isOpen ? (
        <div
          role="listbox"
          aria-label={languageLabels[locale]}
          className="absolute top-[calc(100%+0.6rem)] right-0 w-44 overflow-hidden rounded-2xl border border-[#071B24]/10 bg-white p-1.5 shadow-[0_18px_50px_rgba(7,27,36,0.16)]"
        >
          {localeOptions.map((option) => (
            <button
              key={option.code}
              type="button"
              role="option"
              lang={option.code}
              dir={option.code === "ar" ? "rtl" : "ltr"}
              aria-selected={locale === option.code}
              onClick={() => {
                setLocale(option.code);
                setIsOpen(false);
              }}
              className={`flex min-h-10 w-full items-center justify-between rounded-xl px-3 text-left text-xs font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-[#09B8C8] ${
                locale === option.code
                  ? "bg-[#D9F4EE] text-[#073747]"
                  : "text-[#455C5C] hover:bg-[#F4F0E6] hover:text-[#071B24]"
              }`}
            >
              <span className="flex items-center gap-2.5">
                <span className="w-6 text-[9px] font-bold tracking-[0.08em] text-[#087F8B]">{option.short}</span>
                {option.label}
              </span>
              {locale === option.code ? <Check aria-hidden="true" className="size-3.5" /> : null}
            </button>
          ))}
        </div>
      ) : null}
    </div>
  );
}
