import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { ScrollColorText } from "@/components/motion/ScrollColorText";

import { featureServices } from "./data";
import { ScrollReveal } from "./ScrollReveal";

export function ServicesHighlightSection() {
  return (
    <section className="mx-auto max-w-[1380px] px-5 py-20 sm:px-8 lg:py-30">
      <ScrollReveal>
        <header className="mb-14 grid gap-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <span className="text-xs font-bold tracking-[0.2em] text-[#087F8B] uppercase">
              01 — Start with what excites you
            </span>
            <h2 className="mt-4 max-w-2xl text-4xl leading-[0.98] font-semibold tracking-[-0.055em] text-[#071B24] sm:text-6xl">
              <ScrollColorText text="Your kind of Bali, from day one." />
            </h2>
          </div>
          <p className="max-w-2xl text-base leading-7 text-[#5D6B69] lg:justify-self-end lg:text-lg">
            No recycled checklist. We learn how you like to travel, then connect the island&apos;s
            places, flavours and adventures into a trip that flows naturally.
          </p>
        </header>
      </ScrollReveal>

      <div className="grid grid-cols-1 gap-9 md:grid-cols-3 md:gap-4 lg:gap-7">
        {featureServices.map((service, index) => (
          <ScrollReveal
            key={service.label}
            delay={index === 0 ? "none" : index === 1 ? "short" : "medium"}
            className={index === 1 ? "md:translate-y-16" : index === 2 ? "md:translate-y-7" : ""}
          >
            <article className="group">
              <Link
                href={service.href}
                aria-label={`Discover ${service.label}`}
                className="relative block aspect-[4/5] w-full overflow-hidden rounded-[2rem] shadow-[0_24px_65px_rgba(7,27,36,0.12)]"
              >
                <Image
                  src={service.image}
                  alt={service.imageAlt}
                  fill
                  loading="lazy"
                  sizes="(min-width: 768px) calc((min(100vw, 1380px) - 96px) / 3), calc(100vw - 40px)"
                  className="object-cover transition duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.055] group-hover:saturate-[1.08]"
                />
                <span className="absolute top-5 right-6 z-20 text-sm font-semibold tracking-[0.16em] text-white drop-shadow-md">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div className="absolute inset-0 bg-gradient-to-t from-[#071B24]/75 via-[#071B24]/5 to-transparent" />
                <span className="absolute right-7 bottom-7 z-20 flex size-11 items-center justify-center rounded-full bg-[#B8E63D] text-[#071B24] transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1">
                  <ArrowUpRight aria-hidden="true" className="size-[18px]" />
                </span>
              </Link>

              <div className="px-2 pt-6">
                <h3 className="text-2xl font-semibold tracking-[-0.035em] text-[#071B24]">
                  {service.label}
                </h3>
                <p className="mt-3 text-sm leading-6 text-[#5D6B69]">{service.description}</p>
                <Link
                  href={service.href}
                  className="mt-5 inline-flex items-center gap-2 border-b border-[#09B8C8]/35 pb-1 text-sm font-semibold text-[#073747] transition-[gap,border-color] duration-300 hover:gap-3 hover:border-[#09B8C8]"
                >
                  Discover this experience
                  <ArrowUpRight aria-hidden="true" className="size-4" strokeWidth={1.75} />
                </Link>
              </div>
            </article>
          </ScrollReveal>
        ))}
      </div>
      <div className="h-8 md:h-20" />
    </section>
  );
}
