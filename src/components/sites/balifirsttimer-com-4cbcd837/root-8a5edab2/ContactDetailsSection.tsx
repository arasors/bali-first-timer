import { ArrowUpRight, MapPin, MessageCircle, Phone, Send } from "lucide-react";

import {
  ADDRESS,
  MAP_EMBED_HREF,
  MAPS_HREF,
  PHONE_DISPLAY,
  PHONE_HREF,
  WHATSAPP_HREF,
} from "./data";

export function ContactDetailsSection() {
  return (
    <section className="px-4 py-16 sm:px-7 lg:py-24">
      <div className="mx-auto max-w-[1380px] overflow-hidden rounded-[2rem] border border-[#071B24]/10 bg-[#071B24] shadow-[0_30px_90px_rgba(7,27,36,0.14)] lg:grid lg:grid-cols-2">
        <div className="relative min-h-[430px] overflow-hidden bg-[#073747] sm:min-h-[520px] lg:min-h-[640px]">
          <iframe
            src={MAP_EMBED_HREF}
            title="Map of Bali, Indonesia"
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            className="absolute inset-0 size-full border-0 grayscale contrast-125 invert-[0.87] hue-rotate-[135deg] saturate-[1.35]"
          />
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,transparent_38%,rgba(7,27,36,0.5)_100%)]" />
          <div className="pointer-events-none absolute top-5 left-5 flex items-center gap-2 rounded-full border border-white/20 bg-[#071B24]/75 px-4 py-2 text-[10px] font-bold tracking-[0.16em] text-white uppercase shadow-sm backdrop-blur-md sm:top-7 sm:left-7">
            <span className="size-2 rounded-full bg-[#B8E63D] shadow-[0_0_16px_#B8E63D]" />
            Bali, Indonesia
          </div>
        </div>

        <div className="relative flex min-h-[580px] flex-col justify-between overflow-hidden px-6 py-12 text-white sm:px-10 sm:py-14 lg:min-h-[640px] lg:px-14 lg:py-16">
          <div aria-hidden="true" className="absolute -top-36 -right-32 size-[28rem] rounded-full border border-[#09B8C8]/15" />
          <div aria-hidden="true" className="absolute -top-10 -right-12 size-[17rem] rounded-full border border-[#B8E63D]/10" />

          <div className="relative">
            <span className="text-xs font-bold tracking-[0.2em] text-[#B8E63D] uppercase">
              Let&apos;s shape the trip
            </span>
            <h2 className="mt-5 max-w-xl text-4xl leading-[1.02] font-normal tracking-[-0.045em] sm:text-5xl lg:text-6xl">
              Start with what you know. We&apos;ll help with the rest.
            </h2>
            <p className="mt-6 max-w-xl text-sm leading-7 text-white/65 sm:text-base">
              Send your dates, number of travellers, children&apos;s ages where relevant, where you expect to stay and a few places on your wish list. WhatsApp keeps the conversation simple and useful.
            </p>
          </div>

          <div className="relative mt-12 space-y-3">
            <a
              href={WHATSAPP_HREF}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex min-h-20 items-center justify-between gap-5 rounded-2xl bg-[#B8E63D] p-5 text-[#071B24] transition duration-300 hover:-translate-y-0.5 hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#4DDBF2] sm:p-6"
            >
              <span className="flex items-center gap-4">
                <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-[#071B24] text-[#B8E63D]">
                  <MessageCircle aria-hidden="true" className="size-5" />
                </span>
                <span>
                  <span className="block text-[9px] font-bold tracking-[0.18em] text-[#071B24]/55 uppercase">Fastest way to reach us</span>
                  <span className="mt-1.5 block text-base font-semibold">Plan on WhatsApp</span>
                </span>
              </span>
              <Send aria-hidden="true" className="size-4 shrink-0 transition-transform duration-300 group-hover:translate-x-1" />
            </a>

            <div className="grid gap-3 sm:grid-cols-2">
              <a
                href={PHONE_HREF}
                className="group flex min-h-20 items-center gap-4 rounded-2xl border border-white/12 bg-white/[0.04] p-5 transition-colors duration-300 hover:bg-white/[0.08] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#4DDBF2]"
              >
                <span className="flex size-10 shrink-0 items-center justify-center rounded-full border border-[#4DDBF2]/35 text-[#4DDBF2]">
                  <Phone aria-hidden="true" className="size-4" />
                </span>
                <span>
                  <span className="block text-[9px] font-bold tracking-[0.18em] text-white/40 uppercase">Call</span>
                  <bdi dir="ltr" className="mt-1.5 block text-sm font-semibold text-white">{PHONE_DISPLAY}</bdi>
                </span>
              </a>
              <a
                href={MAPS_HREF}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex min-h-20 items-center justify-between gap-4 rounded-2xl border border-white/12 bg-white/[0.04] p-5 transition-colors duration-300 hover:bg-white/[0.08] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#4DDBF2]"
              >
                <span className="flex items-center gap-4">
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-full border border-[#4DDBF2]/35 text-[#4DDBF2]">
                    <MapPin aria-hidden="true" className="size-4" />
                  </span>
                  <span>
                    <span className="block text-[9px] font-bold tracking-[0.18em] text-white/40 uppercase">Our base</span>
                    <span className="mt-1.5 block text-sm font-semibold text-white">{ADDRESS}</span>
                  </span>
                </span>
                <ArrowUpRight aria-hidden="true" className="size-4 shrink-0 text-[#B8E63D] transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
