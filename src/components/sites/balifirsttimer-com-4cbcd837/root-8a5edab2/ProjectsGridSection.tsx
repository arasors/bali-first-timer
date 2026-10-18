import Image from "next/image";

import { productImages } from "./data";
import { ScrollReveal } from "./ScrollReveal";

const mosaicClasses = [
  "col-span-2 row-span-2 sm:col-span-2 sm:row-span-2",
  "",
  "",
  "row-span-2",
  "",
  "col-span-2 sm:col-span-2",
  "",
  "",
  "row-span-2",
  "",
  "",
  "col-span-2",
] as const;

const galleryAlts = [
  "Colourful brunch spread at a Bali cafe",
  "A Balinese babi guling feast",
  "Fresh oysters served on ice",
  "Steak tacos with fresh garnishes",
  "Traditional bebek betutu",
  "A carefully brewed cup of Bali coffee",
  "Loaded tacos ready to share",
  "Tomahawk steak at a Bali restaurant",
  "A relaxed mezze dinner",
  "Fresh focaccia lunch",
  "Chicken and waffles for brunch",
  "Iced coffee at a Bali cafe",
] as const;

export function ProjectsGridSection() {
  return (
    <section
      id="culinary-gallery"
      aria-labelledby="culinary-gallery-heading"
      className="scroll-mt-24 bg-[#f4f0e6] px-5 py-24 sm:px-8 lg:py-32"
    >
      <div className="mx-auto max-w-[1380px]">
        <ScrollReveal>
          <header className="mb-11 grid gap-6 lg:grid-cols-[1fr_0.5fr] lg:items-end">
            <div>
              <p className="text-xs font-bold tracking-[0.22em] text-[#077987] uppercase">
                06 — Bali, by taste
              </p>
              <h2
                id="culinary-gallery-heading"
                className="mt-4 max-w-3xl text-4xl leading-[0.98] font-semibold tracking-[-0.045em] text-[#071b24] sm:text-6xl"
              >
                Good days deserve memorable tables.
              </h2>
            </div>
            <p className="max-w-md text-base leading-7 text-[#5d6b69] lg:justify-self-end">
              Warung classics, serious coffee and destination dining: we match
              the stop to your appetite, not a generic checklist.
            </p>
          </header>
        </ScrollReveal>

        <div className="grid auto-rows-[130px] grid-cols-2 gap-3 sm:auto-rows-[190px] sm:grid-cols-4 lg:auto-rows-[220px]">
          {productImages.map((image, index) => (
            <figure
              key={image}
              className={`group relative overflow-hidden rounded-[1.15rem] bg-[#d9e5e1] ${mosaicClasses[index] ?? ""}`}
            >
              <Image
                src={image}
                alt={galleryAlts[index] ?? "Bali culinary experience"}
                fill
                sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 25vw"
                className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.055]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#071b24]/45 via-transparent to-transparent opacity-40 transition-opacity duration-500 group-hover:opacity-75" />
              <figcaption className="absolute right-4 bottom-4 z-10 text-[10px] font-bold tracking-[0.16em] text-white uppercase opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                Taste / {String(index + 1).padStart(2, "0")}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
