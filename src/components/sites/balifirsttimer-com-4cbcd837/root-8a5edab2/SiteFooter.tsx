import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, MapPin, MessageCircle, Phone } from "lucide-react";
import type { ReactNode } from "react";

import {
  ADDRESS,
  ASSET_ROOT,
  footerCorporate,
  footerServices,
  LOGO_IMAGE,
  MAPS_HREF,
  PHONE_DISPLAY,
  PHONE_HREF,
  WHATSAPP_HREF,
} from "./data";

const footerLinkClass =
  "group inline-flex min-h-8 items-center gap-1.5 text-sm leading-5 text-[#E8F5F1]/68 transition-colors duration-200 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#09B8C8]";

export function SiteFooter() {
  return (
    <footer id="site-footer" data-scroll-scene="footer" className="relative mt-32 bg-[#05273A] text-[#E8F5F1]">
      <div aria-hidden="true" className="absolute right-0 bottom-full left-0 h-24 sm:h-32">
        <svg viewBox="0 0 1440 150" preserveAspectRatio="none" className="h-full w-full">
          <path className="bft-wave-layer bft-wave-back" d="M-720,80 C-500,20 -300,142 -45,82 C210,22 405,142 720,67 C940,20 1140,142 1395,82 C1650,22 1845,142 2160,67 L2160,250 L-720,250 Z" fill="#73E6EE" fillOpacity="0.42" />
          <path className="bft-wave-layer bft-wave-mid" d="M-720,106 C-470,164 -255,44 15,103 C284,162 486,40 720,99 C970,164 1185,44 1455,103 C1724,162 1926,40 2160,99 L2160,250 L-720,250 Z" fill="#0B6B8A" fillOpacity="0.86" />
          <path className="bft-wave-layer bft-wave-front" d="M-720,126 C-450,73 -275,153 40,113 C320,77 480,150 720,105 C990,73 1165,153 1480,113 C1760,77 1920,150 2160,105 L2160,250 L-720,250 Z" fill="#05273A" />
        </svg>
      </div>

      <div className="relative overflow-hidden">
        <Image
          src={`${ASSET_ROOT}/monkey-forest-ubud.jpg`}
          alt=""
          fill
          sizes="100vw"
          className="pointer-events-none object-cover opacity-[0.09] mix-blend-luminosity"
        />
        <div aria-hidden="true" className="pointer-events-none absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-[#05273A] via-[#05273A]/92 to-[#06334A]/80" />
          <div className="absolute -top-52 -right-44 size-[32rem] rounded-full border border-[#73E6EE]/12" />
          <div className="absolute -top-24 -right-12 size-[19rem] rounded-full border border-[#B8E63D]/10" />
          <div className="absolute -bottom-40 left-[8%] size-96 rounded-full bg-[#087F8B]/14 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-[1480px] px-5 pt-14 pb-12 sm:px-8 lg:px-10 lg:pt-16">
          <div className="mb-16 flex flex-col gap-7 border-b border-white/12 pb-12 lg:flex-row lg:items-center lg:justify-between lg:pb-14">
            <div className="max-w-3xl">
              <p className="mb-4 flex items-center gap-3 text-[10px] font-bold tracking-[0.24em] text-[#73E6EE] uppercase">
                <span className="h-px w-8 bg-current" />
                Bali, without the guesswork
              </p>
              <h2 className="font-heading text-3xl leading-[1.08] tracking-[-0.045em] text-white sm:text-4xl lg:text-5xl xl:text-[3.5rem]">
                Arrive curious. Leave with stories worth retelling.
              </h2>
              <p className="mt-4 max-w-xl text-sm leading-6 text-white/58 sm:text-base">
                Personal planning, honest local guidance and room to enjoy the island at your own pace.
              </p>
            </div>
            <a
              href={WHATSAPP_HREF}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex min-h-14 w-fit shrink-0 items-center gap-3 rounded-full bg-[#B8E63D] px-7 text-sm font-bold text-[#052B40] shadow-[0_18px_45px_rgba(0,0,0,0.24)] transition-[transform,background-color] duration-300 hover:-translate-y-0.5 hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Plan my Bali trip
              <ArrowUpRight
                aria-hidden="true"
                className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </a>
          </div>

          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr] lg:gap-8 xl:gap-14">
            <div className="max-w-sm">
              <Link
                href="/"
                aria-label="Bali First Timer home"
                className="inline-flex rounded-xl focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#09B8C8]"
              >
                <Image
                  src={LOGO_IMAGE}
                  alt="Bali First Timer"
                  width={1254}
                  height={1254}
                  className="h-28 w-28 object-contain drop-shadow-[0_12px_28px_rgba(0,0,0,0.24)]"
                />
              </Link>
              <p className="mt-3 text-sm leading-6 text-[#E8F5F1]/68">
                Personal Bali itineraries, local food discoveries and guided adventures for travellers who want their first trip to feel effortless.
              </p>
            </div>

            <nav aria-label="Experience links">
              <FooterHeading>Experiences</FooterHeading>
              <ul className="space-y-1.5">
                {footerServices.map((item) => (
                  <li key={item.label}>
                    <Link href={item.href} className={footerLinkClass}>
                      {item.label}
                      <ArrowUpRight aria-hidden="true" className="size-3 opacity-0 transition-opacity group-hover:opacity-100" />
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <nav aria-label="Company links">
              <FooterHeading>Explore</FooterHeading>
              <ul className="space-y-1.5">
                {footerCorporate.map((item) => (
                  <li key={item.label}>
                    <Link href={item.href} className={footerLinkClass}>
                      {item.label}
                      <ArrowUpRight aria-hidden="true" className="size-3 opacity-0 transition-opacity group-hover:opacity-100" />
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <div>
              <FooterHeading>Start a conversation</FooterHeading>
              <ul className="space-y-2">
                <li>
                  <a href={PHONE_HREF} className={footerLinkClass}>
                    <Phone aria-hidden="true" className="size-4 shrink-0 text-[#73E6EE]" strokeWidth={1.8} />
                    <bdi dir="ltr">{PHONE_DISPLAY}</bdi>
                  </a>
                </li>
                <li>
                  <a
                    href={WHATSAPP_HREF}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={footerLinkClass}
                  >
                    <MessageCircle aria-hidden="true" className="size-4 shrink-0 text-[#B8E63D]" strokeWidth={1.8} />
                    <span>WhatsApp us</span>
                  </a>
                </li>
                <li>
                  <a
                    href={MAPS_HREF}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${footerLinkClass} items-start pt-1`}
                  >
                    <MapPin aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-[#73E6EE]" strokeWidth={1.8} />
                    <span>{ADDRESS}</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="relative border-t border-white/10">
          <div className="mx-auto flex max-w-[1480px] flex-col gap-2 px-5 py-5 text-[11px] tracking-[0.02em] text-[#E8F5F1]/42 sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-10">
            <p>© {new Date().getFullYear()} Bali First Timer. All rights reserved.</p>
            <p>Thoughtful plans · Honest advice · Local perspective</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterHeading({ children }: { children: ReactNode }) {
  return (
    <h2 className="mb-4 text-[10px] font-bold tracking-[0.2em] text-[#09B8C8] uppercase">
      {children}
    </h2>
  );
}
