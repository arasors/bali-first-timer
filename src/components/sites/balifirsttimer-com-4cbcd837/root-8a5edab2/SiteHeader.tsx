"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight, MapPin, Menu, MessageCircle, Phone, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";

import { LanguageSwitcher } from "@/components/i18n/LanguageSwitcher";

import {
  ADDRESS,
  LOGO_IMAGE,
  navigation,
  PHONE_DISPLAY,
  PHONE_HREF,
  WHATSAPP_HREF,
} from "./data";

export function SiteHeader() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const isHome = pathname === "/";

  const closeMenu = () => setIsMenuOpen(false);
  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  useEffect(() => {
    if (!isMenuOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    };

    window.addEventListener("keydown", closeOnEscape);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [isMenuOpen]);

  const darkHeader = isHome || isMenuOpen;

  return (
    <>
      <header
        data-home-header={isHome ? "true" : undefined}
        data-menu-open={isMenuOpen ? "true" : undefined}
        className={`${isHome ? "fixed right-0 left-0" : "sticky"} top-0 z-[70] border-b transition-[background-color,border-color,box-shadow] duration-500 ${
          isMenuOpen
            ? "border-white/10 bg-[#051F30]/96 backdrop-blur-xl"
            : isHome
              ? "bft-home-header border-transparent"
              : "border-[#071B24]/8 bg-[#FBFDFB]/90 backdrop-blur-xl"
        }`}
      >
        <div className="bft-header-inner mx-auto flex h-[78px] max-w-[1480px] items-center justify-between px-4 sm:px-7 lg:h-[92px] lg:px-10">
          <Link
            href="/"
            aria-label="Bali First Timer home"
            onClick={closeMenu}
            className="relative z-[80] flex min-h-11 shrink-0 items-center rounded-xl focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#09B8C8]"
          >
            <Image
              src={LOGO_IMAGE}
              alt="Bali First Timer"
              width={1254}
              height={1254}
              priority
              className={`bft-header-logo h-[62px] w-[62px] object-contain sm:h-[68px] sm:w-[68px] lg:h-[78px] lg:w-[78px] ${darkHeader ? "drop-shadow-[0_8px_24px_rgba(0,0,0,0.25)]" : ""}`}
            />
          </Link>

          <nav aria-label="Main navigation" className="hidden h-full items-center gap-7 lg:flex xl:gap-10">
            {navigation.map((item) => {
              const active = isActive(item.href);
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={`group relative flex h-full items-center text-[13px] font-semibold tracking-[0.01em] transition-colors duration-300 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#09B8C8] ${
                    darkHeader
                      ? active
                        ? "text-white"
                        : "text-white/68 hover:text-white"
                      : active
                        ? "text-[#071B24]"
                        : "text-[#071B24]/58 hover:text-[#071B24]"
                  }`}
                >
                  {item.label}
                  <span
                    aria-hidden="true"
                    className={`absolute right-0 bottom-0 left-0 h-0.5 origin-left transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                      darkHeader ? "bg-[#73E6EE]" : "bg-[#09B8C8]"
                    } ${
                      active ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                    }`}
                  />
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-2.5">
            <LanguageSwitcher dark={darkHeader} />
            <a
              href={PHONE_HREF}
              className={`hidden min-h-11 items-center gap-2 rounded-full px-2 text-xs font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#09B8C8] xl:flex ${
                darkHeader ? "text-white/62 hover:text-white" : "text-[#071B24]/60 hover:text-[#078B9C]"
              }`}
            >
              <Phone aria-hidden="true" className="size-3.5" strokeWidth={1.8} />
              <bdi dir="ltr">{PHONE_DISPLAY}</bdi>
            </a>
            <a
              href={WHATSAPP_HREF}
              target="_blank"
              rel="noopener noreferrer"
              className={`group hidden min-h-11 items-center gap-2.5 rounded-full px-5 text-xs font-bold transition-[transform,background-color,color] duration-300 hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#09B8C8] sm:flex ${
                darkHeader
                  ? "bg-white text-[#063047] shadow-[0_12px_30px_rgba(1,18,29,0.18)] hover:bg-[#B8E63D]"
                  : "bg-[#071B24] text-white hover:bg-[#09B8C8] hover:text-[#071B24]"
              }`}
            >
              Plan my Bali trip
              <ArrowUpRight
                aria-hidden="true"
                className="size-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </a>
            <button
              ref={menuButtonRef}
              type="button"
              aria-label={isMenuOpen ? "Close navigation" : "Open navigation"}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-navigation"
              onClick={() => setIsMenuOpen((open) => !open)}
              className={`relative z-[80] flex size-11 items-center justify-center rounded-full border transition-[color,background-color,border-color] duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#09B8C8] lg:hidden ${
                isMenuOpen
                  ? "border-white/16 bg-white text-[#071B24]"
                  : darkHeader
                    ? "border-white/20 bg-white/10 text-white hover:bg-white hover:text-[#071B24]"
                    : "border-[#071B24]/14 bg-white/40 text-[#071B24] hover:bg-[#071B24] hover:text-white"
              }`}
            >
              {isMenuOpen ? (
                <X aria-hidden="true" className="size-5" strokeWidth={1.8} />
              ) : (
                <Menu aria-hidden="true" className="size-5" strokeWidth={1.8} />
              )}
            </button>
          </div>
        </div>
      </header>

      {isMenuOpen ? (
        <div
          id="mobile-navigation"
          data-lenis-prevent
          className="bft-mobile-menu fixed inset-0 z-[60] overflow-y-auto bg-[#071B24] text-white lg:hidden"
        >
          <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
            <div className="absolute -top-28 -right-44 size-[31rem] rounded-full border border-[#09B8C8]/15" />
            <div className="absolute top-20 -right-16 size-[20rem] rounded-full border border-[#B8E63D]/10" />
            <div className="absolute -bottom-44 -left-32 size-[27rem] rounded-full bg-[#09B8C8]/8 blur-3xl" />
            <div className="absolute top-1/2 right-6 h-px w-28 rotate-[-12deg] bg-gradient-to-r from-transparent via-[#B8E63D]/40 to-transparent" />
          </div>

          <div className="relative mx-auto flex min-h-full max-w-4xl flex-col px-5 pt-28 pb-7 sm:px-9 sm:pt-32">
            <p className="bft-mobile-menu-item flex items-center gap-3 text-[10px] font-bold tracking-[0.24em] text-[#B8E63D] uppercase">
              <span className="h-px w-8 bg-current" />
              Your first Bali, planned properly
            </p>

            <nav aria-label="Mobile navigation" className="mt-6 border-t border-white/12 sm:mt-8">
              {navigation.map((item, index) => {
                const active = isActive(item.href);
                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    onClick={closeMenu}
                    aria-current={active ? "page" : undefined}
                    style={{ animationDelay: `${(index + 1) * 45}ms` }}
                    className="bft-mobile-menu-item group flex min-h-16 items-center justify-between border-b border-white/12 py-4 focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-[#09B8C8] sm:min-h-20 sm:py-5"
                  >
                    <span className="flex items-start gap-4">
                      <span className="mt-1.5 text-[10px] font-semibold tracking-[0.14em] text-[#09B8C8]">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span
                        className={`font-heading text-[clamp(1.75rem,8.5vw,4rem)] leading-none tracking-[-0.045em] transition-colors duration-300 ${
                          active ? "text-[#B8E63D]" : "text-white group-hover:text-[#B8E63D]"
                        }`}
                      >
                        {item.label}
                      </span>
                    </span>
                    <ArrowUpRight
                      aria-hidden="true"
                      className="size-5 text-white/35 transition duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#09B8C8]"
                    />
                  </Link>
                );
              })}
            </nav>

            <div className="bft-mobile-menu-item mt-auto grid gap-5 pt-8 sm:grid-cols-[1fr_auto] sm:items-end sm:gap-8 sm:pt-10">
              <div>
                <span className="text-[9px] font-bold tracking-[0.2em] text-white/40 uppercase">
                  Based in
                </span>
                <p className="mt-2 flex max-w-sm gap-2.5 text-xs leading-5 text-white/62">
                  <MapPin aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-[#09B8C8]" />
                  {ADDRESS}
                </p>
                <a
                  href={PHONE_HREF}
                  className="mt-2 inline-flex min-h-11 items-center gap-2.5 text-sm font-semibold text-white/80 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#09B8C8]"
                >
                  <Phone aria-hidden="true" className="size-4 text-[#09B8C8]" />
                  <bdi dir="ltr">{PHONE_DISPLAY}</bdi>
                </a>
                <LanguageSwitcher mobile />
              </div>
              <a
                href={WHATSAPP_HREF}
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMenu}
                className="group flex min-h-12 items-center justify-center gap-3 rounded-full bg-[#B8E63D] px-6 text-sm font-bold text-[#071B24] transition-transform hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:min-w-52"
              >
                <MessageCircle aria-hidden="true" className="size-4" />
                Plan my Bali trip
              </a>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
