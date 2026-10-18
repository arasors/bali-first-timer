import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { ScrollColorText } from "@/components/motion/ScrollColorText";

import { ASSET_ROOT } from "./data";
import { ScrollReveal } from "./ScrollReveal";

const storyPoints = [
  "Recommendations chosen for your group, not a generic must-see list",
  "Travel times and first-timer energy built into every day",
  "Clear advice before you book, including when an experience is not the right fit",
];

export function StorySection() {
  return (
    <section className="px-5 py-18 sm:px-8 lg:py-28">
      <div className="mx-auto grid max-w-[1380px] items-center gap-12 lg:grid-cols-[0.88fr_1.12fr] lg:gap-20">
        <ScrollReveal direction="left" className="relative min-h-[510px] sm:min-h-[620px]">
          <div className="absolute top-0 left-0 h-[86%] w-[88%] overflow-hidden rounded-[1.75rem] shadow-[0_30px_75px_rgba(7,27,36,0.16)]">
            <Image
              src={`${ASSET_ROOT}/family-crater-lake.jpg`}
              alt="A family enjoying a calm day beside a Bali crater lake"
              fill
              loading="lazy"
              sizes="(max-width: 1024px) 88vw, 40vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#071B24]/35 via-transparent to-transparent" />
          </div>
          <div className="absolute right-0 bottom-0 max-w-[15rem] rounded-2xl border border-white/70 bg-[#F4F0E6]/92 p-5 shadow-[0_18px_45px_rgba(7,27,36,0.14)] backdrop-blur-lg sm:max-w-[18rem] sm:p-6">
            <p className="text-[10px] font-bold tracking-[0.18em] text-[#087F8B] uppercase">
              Our planning principle
            </p>
            <p className="mt-3 font-[var(--font-heading)] text-xl leading-7 text-[#071B24]">
              A better day beats a busier day.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal direction="right" delay="short">
          <span className="text-xs font-bold tracking-[0.2em] text-[#087F8B] uppercase">
            02 — Bali, at your rhythm
          </span>
          <h2 className="mt-4 max-w-3xl text-4xl leading-[1.02] font-semibold tracking-[-0.055em] text-[#071B24] sm:text-6xl">
            <ScrollColorText text="Local recommendations with a first-timer's perspective." />
          </h2>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-[#5D6B69]">
            Bali First Timer helps travellers see the island with more confidence and less noise.
            We combine knowledge on the ground with honest conversations about your budget, interests,
            comfort and pace—then build a trip that leaves room to enjoy where you are.
          </p>

          <ul className="mt-8 space-y-4">
            {storyPoints.map((point) => (
              <li key={point} className="flex gap-3 text-sm leading-6 text-[#314A4A] sm:text-base">
                <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-[#B8E63D] text-[#071B24]">
                  <Check aria-hidden="true" className="size-3.5" strokeWidth={2.4} />
                </span>
                {point}
              </li>
            ))}
          </ul>

          <div className="mt-9 flex flex-wrap gap-5">
            <Link
              href="/about"
              className="group inline-flex items-center gap-2 border-b border-[#09B8C8]/35 pb-1 text-sm font-semibold text-[#073747] transition-[gap,border-color] hover:gap-3 hover:border-[#09B8C8]"
            >
              Meet our approach
              <ArrowRight aria-hidden="true" className="size-4" />
            </Link>
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 border-b border-[#09B8C8]/35 pb-1 text-sm font-semibold text-[#073747] transition-[gap,border-color] hover:gap-3 hover:border-[#09B8C8]"
            >
              Start a conversation
              <ArrowRight aria-hidden="true" className="size-4" />
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
