"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Compass, MapPin } from "lucide-react";
import { useEffect, useRef, useState } from "react";

import { ASSET_ROOT } from "./data";

const heroSlides = [
  {
    eyebrow: "Your first Bali, planned properly",
    title: "Bali that feels made for you.",
    description:
      "We shape your first trip around the people you travel with, the pace you enjoy and the Bali moments you actually want to remember.",
    image: `${ASSET_ROOT}/hero-bali.jpg`,
    alt: "Travellers taking part in a Balinese water purification ritual",
  },
  {
    eyebrow: "Wild Bali, with the right guide",
    title: "Chase waterfalls, not schedules.",
    description:
      "Explore jungle trails and dramatic falls with honest weather advice, a dedicated local guide and a route matched to your group.",
    image: `${ASSET_ROOT}/sekumpul-waterfall.jpg`,
    alt: "Traveller standing beneath Sekumpul Waterfall in Bali",
  },
  {
    eyebrow: "Eat your way around the island",
    title: "Find the Bali worth tasting.",
    description:
      "From family-run favourites to memorable destination dining, we choose every table around your appetite, budget and mood.",
    image: `${ASSET_ROOT}/bali-brunch.jpg`,
    alt: "A colourful brunch spread with coffee and fresh fruit in Bali",
  },
] as const;

const supportImages = [
  {
    src: `${ASSET_ROOT}/monkey-forest-ubud.jpg`,
    alt: "Moss-covered statues in Ubud's Monkey Forest",
  },
  {
    src: `${ASSET_ROOT}/jungle-atv.jpg`,
    alt: "ATV adventure through a Balinese jungle gate",
  },
] as const;

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeSlide, setActiveSlide] = useState(0);
  const [isInView, setIsInView] = useState(true);
  const slide = heroSlides[activeSlide];

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => setIsInView(entry.isIntersecting));
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reducedMotion || !isInView) {
      return;
    }

    const timer = window.setTimeout(() => {
      setActiveSlide((current) => (current + 1) % heroSlides.length);
    }, 5600);

    return () => window.clearTimeout(timer);
  }, [activeSlide, isInView]);

  const changeSlide = (direction: number) => {
    setActiveSlide(
      (current) => (current + direction + heroSlides.length) % heroSlides.length,
    );
  };

  return (
    <section
      ref={sectionRef}
      aria-labelledby="hero-heading"
      data-scroll-scene="hero"
      data-scene-active={isInView}
      data-pointer-scene
      className="relative isolate min-h-screen overflow-hidden bg-[#052B40] text-white"
    >
      <div aria-hidden="true" className="bft-hero-backdrop absolute inset-0">
        <Image
          src="/hero-bg.png"
          alt=""
          fill
          preload
          sizes="100vw"
          className="object-cover"
        />
      </div>
      <div aria-hidden="true" className="absolute inset-0 bg-[linear-gradient(90deg,rgba(3,29,45,0.91)_0%,rgba(4,40,58,0.74)_32%,rgba(3,38,57,0.15)_74%,rgba(2,23,37,0.18)_100%)]" />
      <div aria-hidden="true" className="absolute inset-0 bg-[linear-gradient(180deg,rgba(2,24,38,0.38)_0%,transparent_42%,rgba(2,23,36,0.64)_100%)]" />
      <div aria-hidden="true" className="bft-hero-grid bft-hero-grid-dark absolute inset-0" />
      <div aria-hidden="true" className="bft-ambient bft-ambient-one" />
      <div aria-hidden="true" className="bft-ambient bft-ambient-two" />

      <div className="relative mx-auto grid min-h-screen max-w-[1480px] grid-cols-1 items-center gap-4 px-5 pt-28 pb-40 sm:px-8 sm:pt-32 lg:grid-cols-[0.86fr_1.14fr] lg:gap-10 lg:px-10 lg:pt-32 lg:pb-36 xl:px-14">
        <div className="relative z-20 max-w-2xl lg:py-12">
          <div className="mb-5 flex items-center gap-3 sm:mb-7">
            <span className="flex size-10 items-center justify-center rounded-full border border-white/18 bg-white/10 text-[#73E6EE] backdrop-blur-md">
              <Compass aria-hidden="true" className="size-[18px]" />
            </span>
            <span className="text-[10px] font-bold tracking-[0.19em] text-white/72 uppercase sm:text-xs">
              Local insight · Personal pace · Clear planning
            </span>
          </div>

          <div key={`copy-${activeSlide}`} className="bft-hero-copy" aria-live="polite">
            <p className="mb-4 text-xs font-bold tracking-[0.19em] text-[#73E6EE] uppercase sm:text-sm">
              {slide.eyebrow}
            </p>
            <h1
              id="hero-heading"
              className="max-w-[760px] text-[clamp(2.9rem,6.1vw,6.4rem)] leading-[0.98] font-bold tracking-[-0.065em] text-white drop-shadow-[0_8px_28px_rgba(0,0,0,0.18)]"
            >
              {slide.title}
            </h1>
            <p className="mt-5 max-w-xl text-base leading-7 text-white/72 sm:mt-7 sm:text-lg sm:leading-8">
              {slide.description}
            </p>
          </div>

          <div className="mt-7 flex flex-wrap items-center gap-3 sm:mt-9">
            <Link
              href="/contact"
              className="group inline-flex min-h-13 items-center justify-center gap-3 rounded-full bg-[#B8E63D] px-6 text-sm font-bold text-[#052B40] shadow-[0_18px_45px_rgba(0,0,0,0.22)] transition-[transform,background-color] duration-300 hover:-translate-y-0.5 hover:bg-white sm:px-7 sm:text-base"
            >
              Plan my Bali trip
              <ArrowRight
                aria-hidden="true"
                className="size-[18px] transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
            <Link
              href="/experiences"
              className="inline-flex min-h-13 items-center justify-center rounded-full border border-white/24 bg-white/8 px-6 text-sm font-semibold text-white backdrop-blur-md transition-[transform,border-color,background-color] duration-300 hover:-translate-y-0.5 hover:border-white/55 hover:bg-white/15 sm:text-base"
            >
              Explore experiences
            </Link>
          </div>

          <div data-i18n-skip className="mt-8 flex items-center gap-3 sm:mt-10" aria-label="Choose a hero story">
            <button
              type="button"
              onClick={() => changeSlide(-1)}
              aria-label="Previous hero story"
              className="flex size-10 items-center justify-center rounded-full border border-white/20 bg-white/5 text-white transition-colors hover:border-[#73E6EE] hover:bg-white/12"
            >
              <ArrowLeft aria-hidden="true" className="size-4" />
            </button>
            <span className="min-w-6 text-xs font-bold tracking-[0.14em] text-white">
              {String(activeSlide + 1).padStart(2, "0")}
            </span>
            <div className="flex gap-1.5">
              {heroSlides.map((item, index) => (
                <button
                  key={item.title}
                  type="button"
                  aria-label={`Show hero story ${index + 1}: ${item.eyebrow}`}
                  aria-current={activeSlide === index ? "true" : undefined}
                  onClick={() => setActiveSlide(index)}
                  className="relative h-10 w-9 overflow-hidden rounded-full"
                >
                  <span className="absolute top-1/2 left-0 h-px w-full -translate-y-1/2 bg-white/24" />
                  {activeSlide === index ? (
                    <span className="bft-hero-progress absolute top-1/2 left-0 h-[2px] -translate-y-1/2 bg-[#73E6EE] motion-reduce:animate-none" />
                  ) : null}
                </button>
              ))}
            </div>
            <span className="min-w-6 text-xs font-medium tracking-[0.14em] text-white/42">
              {String(heroSlides.length).padStart(2, "0")}
            </span>
            <button
              type="button"
              onClick={() => changeSlide(1)}
              aria-label="Next hero story"
              className="flex size-10 items-center justify-center rounded-full border border-white/20 bg-white/5 text-white transition-colors hover:border-[#73E6EE] hover:bg-white/12"
            >
              <ArrowRight aria-hidden="true" className="size-4" />
            </button>
          </div>
        </div>

        <div className="bft-hero-composition relative z-10 -mt-3 min-h-[500px] sm:mt-0 sm:min-h-[660px] lg:min-h-[min(730px,76vh)]">
          <div className="bft-depth-back absolute top-[7%] right-[2%] h-[32%] w-[31%]">
            <div className="bft-hero-satellite bft-hero-satellite-top relative h-full w-full overflow-hidden border-[5px] border-white/35 bg-[#073747] shadow-[0_24px_70px_rgba(0,0,0,0.32)] sm:border-[7px]">
              <Image
                src={supportImages[1].src}
                alt={supportImages[1].alt}
                fill
                sizes="(max-width: 1024px) 28vw, 16vw"
                className="object-cover saturate-[0.88]"
              />
              <div className="absolute inset-0 bg-[#073747]/12" />
            </div>
          </div>

          <div className="bft-depth-main absolute top-[2%] left-[9%] h-[77%] w-[72%]">
            <div className="bft-portal-float h-full w-full">
              <div
                key={`image-${activeSlide}`}
                className="bft-hero-portal bft-hero-image relative h-full w-full overflow-hidden border-[5px] border-white/65 bg-[#D9E5E1] shadow-[0_42px_100px_rgba(0,0,0,0.38)] sm:border-[7px]"
              >
                <Image
                  src={slide.image}
                  alt={slide.alt}
                  fill
                  loading="eager"
                  sizes="(max-width: 1024px) 68vw, 38vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#031D2D]/45 via-transparent to-white/8" />
              </div>
            </div>
          </div>

          <div className="bft-depth-front absolute bottom-[5%] left-0 h-[30%] w-[29%]">
            <div className="bft-hero-satellite bft-hero-satellite-bottom relative h-full w-full overflow-hidden border-[5px] border-white/35 bg-[#B8E63D] shadow-[0_24px_70px_rgba(0,0,0,0.32)] sm:border-[7px]">
              <Image
                src={supportImages[0].src}
                alt={supportImages[0].alt}
                fill
                sizes="(max-width: 1024px) 32vw, 18vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#071B24]/30 to-transparent" />
            </div>
          </div>

          <div className="bft-depth-badge absolute right-[1%] bottom-[25%] z-20 flex size-24 rotate-3 flex-col items-center justify-center rounded-full border border-white/35 bg-[#B8E63D] text-center text-[#052B40] shadow-[0_24px_65px_rgba(0,0,0,0.28)] sm:size-28">
            <MapPin aria-hidden="true" className="mb-1 size-4" />
            <span className="text-[9px] font-bold tracking-[0.17em] uppercase">
              First trip
            </span>
            <span className="mt-1 font-[var(--font-heading)] text-[17px] leading-5">Local eyes</span>
          </div>

          <div key={`caption-${activeSlide}`} className="bft-hero-caption bft-hero-copy absolute right-[1%] bottom-[2%] left-[35%] z-30 rounded-3xl border border-white/25 bg-[#052B40]/78 px-5 py-4 shadow-[0_18px_40px_rgba(0,0,0,0.18)] backdrop-blur-xl sm:px-6 sm:py-5">
            <p className="text-[9px] font-bold tracking-[0.17em] text-[#B8E63D] uppercase sm:text-[10px]">{slide.eyebrow}</p>
            <p className="mt-2 text-sm leading-snug font-semibold text-white sm:text-base">{slide.title}</p>
          </div>
        </div>
      </div>

      <div aria-hidden="true" className="bft-hero-wave absolute right-0 bottom-[-1px] left-0 h-24 sm:h-32">
        <svg viewBox="0 0 1440 150" preserveAspectRatio="none" className="h-full w-full">
          <path className="bft-wave-layer bft-wave-back" d="M-720,78 C-490,150 -350,20 -110,85 C115,146 314,42 720,96 C950,150 1090,20 1330,85 C1555,146 1754,42 2160,96 L2160,250 L-720,250 Z" fill="rgba(115,230,238,0.4)" />
          <path className="bft-wave-layer bft-wave-front" d="M-720,103 C-460,35 -250,153 20,92 C280,34 465,132 720,72 C980,35 1190,153 1460,92 C1720,34 1905,132 2160,72 L2160,250 L-720,250 Z" fill="#FBFDFB" />
        </svg>
      </div>
    </section>
  );
}
