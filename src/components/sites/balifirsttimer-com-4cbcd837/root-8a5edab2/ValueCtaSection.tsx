import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { ScrollColorText } from "@/components/motion/ScrollColorText";

import { ScrollReveal } from "./ScrollReveal";

export function ValueCtaSection() {
  return (
    <section className="px-4 py-10 sm:px-7 lg:py-16">
      <ScrollReveal direction="scale">
        <div className="relative mx-auto max-w-[1380px] overflow-hidden rounded-[2rem] bg-[#071B24] px-6 py-16 text-white shadow-[0_30px_90px_rgba(7,27,36,0.16)] sm:px-12 lg:px-20 lg:py-24">
          <div
            aria-hidden="true"
            className="bft-cta-orbit absolute -top-20 -right-10 size-72 rounded-full bg-[#09B8C8]/28 blur-[1px] sm:size-96"
          />
          <div
            aria-hidden="true"
            className="absolute right-[14%] -bottom-32 size-72 rounded-full bg-[#B8E63D]/10 blur-3xl"
          />
          <div className="relative grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
            <div>
              <span className="text-xs font-bold tracking-[0.2em] text-[#B8E63D] uppercase">
                A first trip should still feel personal
              </span>
              <h2 className="mt-5 max-w-4xl text-4xl leading-[1.02] font-medium tracking-[-0.055em] sm:text-6xl lg:text-7xl">
                <ScrollColorText dark text="Less second-guessing. More of the Bali you came for." />
              </h2>
            </div>
            <div>
              <p className="max-w-xl text-base leading-7 text-white/70">
                Tell us what matters to you and we&apos;ll turn local knowledge into a realistic,
                transparent plan—without rushing your days or padding them with stops that do not fit.
              </p>
              <Link
                href="/about"
                className="group mt-7 inline-flex min-h-13 items-center justify-center gap-3 rounded-full bg-[#B8E63D] px-7 text-sm font-bold text-[#071B24] transition-[transform,background-color] duration-300 hover:-translate-y-0.5 hover:bg-white"
              >
                See how we plan
                <ArrowUpRight
                  aria-hidden="true"
                  className="size-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </Link>
            </div>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
