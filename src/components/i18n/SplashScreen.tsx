"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

import { LOGO_IMAGE } from "@/lib/site-config";

import { useI18n } from "./I18nProvider";
import type { Locale } from "./messages";

const splashLabels: Record<Locale, string> = {
  en: "Preparing your Bali",
  ru: "Готовим ваш Бали",
  fr: "Votre Bali se prépare",
  de: "Ihr Bali wird vorbereitet",
  ar: "نحضّر رحلتك إلى بالي",
};

export function SplashScreen() {
  const { locale, ready } = useI18n();
  const [isLeaving, setIsLeaving] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  useEffect(() => {
    if (!ready) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const exitTimer = window.setTimeout(() => setIsLeaving(true), reducedMotion ? 120 : 1150);
    const removeTimer = window.setTimeout(() => {
      setIsVisible(false);
      document.body.style.overflow = "";
    }, reducedMotion ? 260 : 1650);

    return () => {
      window.clearTimeout(exitTimer);
      window.clearTimeout(removeTimer);
    };
  }, [ready]);

  if (!isVisible) return null;

  return (
    <div
      role="status"
      aria-live="polite"
      aria-label={splashLabels[locale]}
      data-i18n-skip
      className={`bft-splash ${isLeaving ? "bft-splash-leaving" : ""}`}
    >
      <div aria-hidden="true" className="bft-splash-grid" />
      <div aria-hidden="true" className="bft-splash-glow" />
      <div className="bft-splash-mark">
        <span aria-hidden="true" className="bft-splash-orbit bft-splash-orbit-one" />
        <span aria-hidden="true" className="bft-splash-orbit bft-splash-orbit-two" />
        <Image
          src={LOGO_IMAGE}
          alt=""
          width={1254}
          height={1254}
          priority
          className="relative z-10 size-32 object-contain sm:size-40"
        />
      </div>
      <div className="mt-9 flex flex-col items-center">
        <p className="text-[10px] font-bold tracking-[0.26em] text-[#B8E63D] uppercase sm:text-xs">
          {splashLabels[locale]}
        </p>
        <div aria-hidden="true" className="mt-5 h-px w-44 overflow-hidden bg-white/12 sm:w-56">
          <span className="bft-splash-progress block h-full bg-gradient-to-r from-[#09B8C8] to-[#B8E63D]" />
        </div>
      </div>
    </div>
  );
}
