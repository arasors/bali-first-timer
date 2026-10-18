import { Compass, MapPinned, PlaneLanding } from "lucide-react";

import { ScrollReveal } from "./ScrollReveal";

const steps = [
  {
    label: "Tell us about your trip",
    description:
      "Share your dates, group, pace and the Bali moments already on your wish list.",
    Icon: Compass,
  },
  {
    label: "Receive a clear plan",
    description:
      "We turn your ideas into a realistic route, with sensible timing and honest local context.",
    Icon: MapPinned,
  },
  {
    label: "Arrive with details handled",
    description:
      "Travel knowing the essential bookings, meeting points and day plans are already organised.",
    Icon: PlaneLanding,
  },
] as const;

export function WholesaleBenefitsSection() {
  return (
    <section
      aria-labelledby="how-it-works-heading"
      className="bg-white px-5 py-24 sm:px-8 lg:py-32"
    >
      <div className="mx-auto max-w-[1380px]">
        <ScrollReveal>
          <header className="grid gap-6 border-b border-[#d9e5e1] pb-10 lg:grid-cols-[0.72fr_1.28fr] lg:items-end">
            <p className="text-xs font-bold tracking-[0.22em] text-[#077987] uppercase">
              04 — How it works
            </p>
            <div>
              <h2
                id="how-it-works-heading"
                className="max-w-4xl text-4xl leading-[0.98] font-semibold tracking-[-0.045em] text-[#071b24] sm:text-6xl"
              >
                From first idea to an easy arrival.
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-7 text-[#5d6b69]">
                A straightforward planning process, guided by people who know
                the island and understand what first-time visitors need.
              </p>
            </div>
          </header>
        </ScrollReveal>

        <ol className="mt-8 grid gap-4 lg:grid-cols-3">
          {steps.map(({ label, description, Icon }, index) => (
            <li key={label}>
              <ScrollReveal
                delay={index === 0 ? "none" : index === 1 ? "short" : "medium"}
                className="h-full"
              >
                <article className="group relative flex h-full min-h-72 flex-col rounded-[1.5rem] border border-[#d9e5e1] bg-[#f4f0e6]/50 p-7 transition-[transform,border-color,background-color] duration-500 hover:-translate-y-1 hover:border-[#09b8c8]/45 hover:bg-[#f4f0e6] sm:p-8">
                  <div className="flex items-start justify-between gap-5">
                    <span className="flex size-12 items-center justify-center rounded-full bg-[#073747] text-[#b8e63d] transition-transform duration-500 group-hover:rotate-3 group-hover:scale-105">
                      <Icon
                        aria-hidden="true"
                        className="size-5"
                        strokeWidth={1.7}
                      />
                    </span>
                    <span className="text-xs font-bold tracking-[0.16em] text-[#077987]">
                      0{index + 1}
                    </span>
                  </div>
                  <h3 className="font-heading mt-auto pt-12 text-2xl leading-tight text-[#071b24]">
                    {label}
                  </h3>
                  <p className="mt-3 max-w-sm text-sm leading-6 text-[#5d6b69]">
                    {description}
                  </p>
                </article>
              </ScrollReveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
