"use client";

import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useCallback, useRef } from "react";

import { inspirationAlts, inspirationImages } from "./data";

const destinationNames = [
  "Ubud",
  "Tampaksiring",
  "Batur",
  "Bali Jungle",
  "Artisan Markets",
  "Seminyak",
  "Jimbaran",
  "Uluwatu",
] as const;

export function InspirationCarouselSection() {
  const scrollerRef = useRef<HTMLDivElement>(null);

  const scroll = useCallback((direction: -1 | 1) => {
    const scroller = scrollerRef.current;
    const firstCard = scroller?.firstElementChild as HTMLElement | null;
    if (!scroller || !firstCard) return;

    const styles = window.getComputedStyle(scroller);
    const gap = Number.parseFloat(styles.columnGap || styles.gap || "16");
    const step = firstCard.getBoundingClientRect().width + gap;

    scroller.scrollBy({ left: direction * step, behavior: "smooth" });
  }, []);

  return (
    <section
      aria-labelledby="destination-carousel-heading"
      className="overflow-hidden bg-[#073747] py-24 text-white lg:py-32"
    >
      <div className="mx-auto max-w-[1380px] px-5 sm:px-8">
        <header className="mb-11 flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <div>
            <p className="text-xs font-bold tracking-[0.22em] text-[#b8e63d] uppercase">
              05 — Around the island
            </p>
            <h2
              id="destination-carousel-heading"
              className="mt-4 max-w-4xl text-4xl leading-[0.98] font-semibold tracking-[-0.045em] sm:text-6xl"
            >
              Follow curiosity beyond the postcard.
            </h2>
          </div>
          <div className="flex gap-2">
            <button
              type="button"
              aria-label="Show previous destination"
              onClick={() => scroll(-1)}
              className="flex size-12 items-center justify-center rounded-full border border-white/25 text-white outline-none transition-colors duration-300 hover:border-[#b8e63d] hover:bg-[#b8e63d] hover:text-[#071b24] focus-visible:ring-4 focus-visible:ring-[#b8e63d]/50"
            >
              <ArrowLeft aria-hidden="true" className="size-5" />
            </button>
            <button
              type="button"
              aria-label="Show next destination"
              onClick={() => scroll(1)}
              className="flex size-12 items-center justify-center rounded-full border border-white/25 text-white outline-none transition-colors duration-300 hover:border-[#b8e63d] hover:bg-[#b8e63d] hover:text-[#071b24] focus-visible:ring-4 focus-visible:ring-[#b8e63d]/50"
            >
              <ArrowRight aria-hidden="true" className="size-5" />
            </button>
          </div>
        </header>

        <div
          ref={scrollerRef}
          tabIndex={0}
          aria-label="Bali destination gallery"
          className="-mx-5 flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth px-5 pb-4 outline-none sm:-mx-8 sm:px-8 lg:mx-0 lg:px-0 [-ms-overflow-style:none] [scrollbar-width:none] focus-visible:ring-2 focus-visible:ring-[#b8e63d] [&::-webkit-scrollbar]:hidden"
        >
          {inspirationImages.map((image, index) => (
            <figure
              key={image}
              className="group relative aspect-[4/5] w-[78vw] max-w-[360px] shrink-0 snap-start overflow-hidden rounded-[1.4rem] bg-[#071b24] sm:w-[340px]"
            >
              <Image
                src={image}
                alt={inspirationAlts[index] ?? "A memorable place in Bali"}
                fill
                sizes="(min-width: 640px) 360px, 78vw"
                className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.06]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#071b24]/90 via-[#071b24]/12 to-transparent" />
              <figcaption className="absolute inset-x-0 bottom-0 z-10 p-6">
                <span className="mb-2 block text-[10px] font-bold tracking-[0.18em] text-[#b8e63d] uppercase">
                  Destination {String(index + 1).padStart(2, "0")}
                </span>
                <span className="font-heading block text-2xl">
                  {destinationNames[index]}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
