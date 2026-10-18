import { stats } from "./data";
import { ScrollReveal } from "./ScrollReveal";

export function StatsSection() {
  return (
    <section aria-label="What Bali First Timer offers" className="px-5 py-18 sm:px-8 lg:py-24">
      <ScrollReveal>
        <dl className="mx-auto grid max-w-[1180px] grid-cols-1 border-y border-[#09B8C8]/20 sm:grid-cols-3">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={`px-5 py-9 text-center sm:py-12 ${
                index > 0 ? "border-t border-[#09B8C8]/20 sm:border-t-0 sm:border-l" : ""
              }`}
            >
              <dt className="text-4xl leading-none font-medium tracking-[-0.055em] text-[#087F8B] sm:text-5xl">
                {stat.value}
              </dt>
              <dd className="mt-3 text-xs font-semibold tracking-[0.08em] text-[#5D6B69] uppercase sm:text-sm">
                {stat.label}
              </dd>
            </div>
          ))}
        </dl>
      </ScrollReveal>
    </section>
  );
}
