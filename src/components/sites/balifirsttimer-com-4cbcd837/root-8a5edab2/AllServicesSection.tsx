import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { services } from "./data";
import { ScrollReveal } from "./ScrollReveal";

export function AllServicesSection() {
  return (
    <section
      id="experiences"
      aria-labelledby="all-experiences-heading"
      className="scroll-mt-24 bg-[#f4f0e6] px-5 py-24 sm:px-8 lg:py-32"
    >
      <div className="mx-auto max-w-[1380px]">
        <ScrollReveal>
          <header className="mb-11 grid gap-6 lg:grid-cols-[1fr_0.55fr] lg:items-end">
            <div>
              <p className="text-xs font-bold tracking-[0.22em] text-[#077987] uppercase">
                03 — Explore your way
              </p>
              <h2
                id="all-experiences-heading"
                className="mt-4 max-w-3xl text-4xl leading-[0.98] font-semibold tracking-[-0.045em] text-[#071b24] sm:text-6xl"
              >
                One island. Many ways to experience it.
              </h2>
            </div>
            <p className="max-w-lg text-base leading-7 text-[#5d6b69] lg:justify-self-end">
              Start with a place, a flavour or a feeling. We will shape the
              practical details around the kind of Bali trip you want.
            </p>
          </header>
        </ScrollReveal>

        <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4 lg:gap-4">
          {services.map((service, index) => (
            <ScrollReveal
              key={service.slug}
              delay={
                index % 4 === 0 ? "none" : index % 4 === 1 ? "short" : "medium"
              }
              className="h-full"
            >
              <Link
                href={service.href}
                aria-label={`Explore ${service.label}`}
                className="group relative flex h-full min-h-[18rem] overflow-hidden rounded-[1.35rem] bg-[#073747] text-white outline-none ring-[#b8e63d] transition-transform duration-500 hover:-translate-y-1 focus-visible:ring-4 sm:min-h-[24rem]"
              >
                <Image
                  src={service.image}
                  alt={service.imageAlt}
                  fill
                  sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw"
                  className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.06] group-focus-visible:scale-[1.06]"
                />
                <span className="absolute inset-0 bg-gradient-to-t from-[#071b24] via-[#071b24]/24 to-transparent" />
                <span className="absolute inset-x-0 bottom-0 z-10 p-4 sm:p-6">
                  <span className="mb-5 flex items-center justify-between text-[10px] font-bold tracking-[0.18em] text-[#b8e63d] uppercase">
                    Experience {String(index + 1).padStart(2, "0")}
                    <ArrowUpRight
                      aria-hidden="true"
                      className="size-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    />
                  </span>
                  <span className="font-heading block text-lg leading-tight sm:text-2xl">
                    {service.label}
                  </span>
                  <span className="mt-2 hidden text-sm leading-6 text-white/72 sm:block">
                    {service.description}
                  </span>
                </span>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
