import Image from "next/image";
import Link from "next/link";
import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  Check,
  MessageCircle,
  Phone,
} from "lucide-react";

import { PHONE_DISPLAY, PHONE_HREF, services, WHATSAPP_HREF } from "./data";
import { ContactDetailsSection } from "./ContactDetailsSection";
import type { InnerPageContent } from "./innerPageData";
import { ScrollReveal } from "./ScrollReveal";
import { SiteFooter } from "./SiteFooter";
import { SiteHeader } from "./SiteHeader";
import { WhatsAppFab } from "./WhatsAppFab";

type InnerPageTemplateProps = {
  page: InnerPageContent;
};

export function InnerPageTemplate({ page }: InnerPageTemplateProps) {
  const isContactPage = page.path === "contact";
  const isExperiencesPage = page.path === "experiences";
  const relatedServices = services
    .filter((service) => !page.path.endsWith(service.slug))
    .slice(0, isExperiencesPage ? 6 : 3);

  return (
    <div className="bft-site">
      <SiteHeader />
      <main>
        <section className="relative isolate overflow-hidden bg-[#F4F0E6]">
          <div aria-hidden="true" className="bft-hero-grid absolute inset-0 opacity-30" />
          <div aria-hidden="true" className="bft-ambient bft-ambient-one" />
          <div className="relative mx-auto grid min-h-[calc(100svh-74px)] max-w-[1480px] items-center gap-10 px-5 py-12 sm:px-8 lg:min-h-[720px] lg:grid-cols-[0.92fr_1.08fr] lg:px-10 lg:py-16">
            <div className="relative z-10 max-w-3xl">
              <nav aria-label="Breadcrumb" className="mb-9 flex items-center gap-2 text-[10px] font-bold tracking-[0.17em] text-[#0A6E78] uppercase">
                <Link href="/" className="transition-colors hover:text-[#071B24]">
                  Home
                </Link>
                <span aria-hidden="true" className="text-[#09B8C8]/45">/</span>
                {page.path.startsWith("experiences/") ? (
                  <>
                    <Link href="/experiences" className="transition-colors hover:text-[#071B24]">
                      Experiences
                    </Link>
                    <span aria-hidden="true" className="text-[#09B8C8]/45">/</span>
                  </>
                ) : null}
                <span className="max-w-48 truncate text-[#071B24]/55">{page.title}</span>
              </nav>

              <p className="text-xs font-bold tracking-[0.2em] text-[#0A6E78] uppercase">
                {page.eyebrow}
              </p>
              <h1 className="mt-5 max-w-4xl text-[clamp(2.9rem,6.1vw,6.75rem)] leading-[0.94] font-normal tracking-[-0.065em] text-[#071B24]">
                {page.title}
              </h1>
              <p className="mt-7 max-w-2xl text-base leading-7 text-[#465C5D] sm:text-lg sm:leading-8">
                {page.summary}
              </p>
              <div className="mt-9 flex flex-wrap gap-3">
                <a
                  href={WHATSAPP_HREF}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex min-h-12 items-center gap-3 rounded-full bg-[#071B24] px-6 text-sm font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-[#073747] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#09B8C8]"
                >
                  <MessageCircle aria-hidden="true" className="size-4" />
                  Plan my Bali trip
                  <ArrowRight aria-hidden="true" className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
                </a>
                <a
                  href={PHONE_HREF}
                  className="inline-flex min-h-12 items-center gap-2 rounded-full border border-[#071B24]/15 bg-white/55 px-6 text-sm font-semibold text-[#071B24] backdrop-blur-md transition-colors duration-300 hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#09B8C8]"
                >
                  <Phone aria-hidden="true" className="size-4" />
                  <bdi dir="ltr">{PHONE_DISPLAY}</bdi>
                </a>
              </div>
            </div>

            <div className="relative min-h-[500px] sm:min-h-[620px] lg:min-h-[640px]">
              <div className="absolute top-[4%] right-[1%] h-[84%] w-[83%] overflow-hidden bg-[#D9E5E1] shadow-[0_42px_110px_rgba(7,27,36,0.2)] [clip-path:polygon(13%_0,100%_5%,88%_100%,0_94%)]">
                <Image
                  src={page.image}
                  alt={page.imageAlt}
                  fill
                  priority
                  sizes="(max-width:1024px) 84vw, 46vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#071B24]/35 via-transparent to-white/5" />
              </div>
              <div className="absolute bottom-[4%] left-[2%] z-10 flex size-32 rotate-[-6deg] flex-col items-center justify-center rounded-full border border-[#09B8C8]/30 bg-[#FBFDFB]/95 text-center shadow-[0_20px_55px_rgba(7,27,36,0.16)] backdrop-blur-sm sm:size-40">
                <span className="text-[9px] font-bold tracking-[0.19em] text-[#0A6E78] uppercase">Local insight</span>
                <span className="mt-2 max-w-24 text-base leading-tight text-[#071B24] sm:text-lg">
                  First trip, done right
                </span>
                <ArrowDownRight aria-hidden="true" className="mt-3 size-4 text-[#09B8C8]" />
              </div>
            </div>
          </div>
        </section>

        {isContactPage ? (
          <ScrollReveal>
            <ContactDetailsSection />
          </ScrollReveal>
        ) : (
          <ScrollReveal>
            <section className="mx-auto grid max-w-[1380px] gap-12 px-5 py-20 sm:px-8 lg:grid-cols-[0.72fr_1.28fr] lg:py-28">
              <div>
                <span className="text-xs font-bold tracking-[0.2em] text-[#0A6E78] uppercase">
                  01 — The idea
                </span>
                <h2 className="mt-5 max-w-md text-4xl leading-[1.04] font-normal tracking-[-0.045em] text-[#071B24] sm:text-5xl">
                  {page.introTitle}
                </h2>
              </div>
              <div>
                <p className="text-2xl leading-[1.35] font-medium tracking-[-0.035em] text-[#17363D] sm:text-3xl lg:text-[2.4rem]">
                  {page.intro}
                </p>
                <ul className="mt-10 grid gap-px overflow-hidden rounded-3xl border border-[#071B24]/10 bg-[#071B24]/10 sm:grid-cols-3">
                  {page.highlights.map((highlight, index) => (
                    <li key={highlight} className="flex min-h-44 flex-col justify-between bg-[#F8FBF9] p-6 sm:min-h-48 sm:p-7">
                      <span className="flex items-start justify-between">
                        <span className="flex size-10 items-center justify-center rounded-full bg-[#071B24] text-[#B8E63D]">
                          <Check aria-hidden="true" className="size-4" strokeWidth={2} />
                        </span>
                        <span className="text-[10px] font-bold tracking-[0.15em] text-[#0A6E78]/60">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                      </span>
                      <span className="mt-10 max-w-[15rem] text-base leading-[1.3] font-semibold tracking-[-0.02em] text-[#071B24] sm:text-lg">
                        {highlight}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </section>
          </ScrollReveal>
        )}

        <ScrollReveal direction="scale">
          <section className="bg-[#071B24] px-5 py-20 text-white sm:px-8 lg:py-28">
            <div className="mx-auto max-w-[1380px]">
              <span className="text-xs font-bold tracking-[0.2em] text-[#B8E63D] uppercase">
                02 — What to know
              </span>
              <div className="mt-9 grid gap-px overflow-hidden rounded-[1.75rem] border border-white/12 bg-white/12 lg:grid-cols-2">
                {page.sections.map((section, index) => (
                  <article key={section.title} className="min-h-72 bg-[#071B24] p-7 sm:p-10 lg:p-12">
                    <span className="text-xs font-semibold tracking-[0.15em] text-[#4DDBF2]">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <h2 className="mt-12 max-w-lg text-3xl leading-tight font-normal tracking-[-0.035em] sm:text-4xl">
                      {section.title}
                    </h2>
                    <p className="mt-5 max-w-xl text-sm leading-7 text-white/65 sm:text-base">
                      {section.body}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          </section>
        </ScrollReveal>

        <ScrollReveal>
          <section className="mx-auto max-w-[1380px] px-5 py-20 sm:px-8 lg:py-28">
            <header className="mb-10 flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
              <div>
                <span className="text-xs font-bold tracking-[0.2em] text-[#0A6E78] uppercase">
                  03 — Keep exploring
                </span>
                <h2 className="mt-4 text-4xl font-normal tracking-[-0.045em] text-[#071B24] sm:text-5xl">
                  More ways to experience Bali
                </h2>
              </div>
              <Link href="/experiences" className="group flex items-center gap-2 text-sm font-semibold text-[#0A6E78]">
                See all experiences
                <ArrowUpRight aria-hidden="true" className="size-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </Link>
            </header>

            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {relatedServices.map((service, index) => (
                <Link key={service.slug} href={service.href} className="group rounded-[1.4rem] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#09B8C8]">
                  <div className="relative aspect-[4/3] overflow-hidden rounded-[1.25rem] bg-[#D9E5E1]">
                    <Image
                      src={service.image}
                      alt={service.imageAlt}
                      fill
                      sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw"
                      className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.055]"
                    />
                    <span className="absolute top-5 right-5 z-10 flex size-10 items-center justify-center rounded-full bg-white/90 text-[#071B24] backdrop-blur-md transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1">
                      <ArrowUpRight aria-hidden="true" className="size-4" />
                    </span>
                  </div>
                  <div className="flex items-start gap-4 px-2 pt-5">
                    <span className="text-[10px] font-semibold tracking-[0.14em] text-[#0A6E78]">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <h3 className="text-lg font-normal tracking-[-0.025em] text-[#071B24]">{service.label}</h3>
                      <p className="mt-2 max-w-sm text-sm leading-6 text-[#5D6B69]">{service.description}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        </ScrollReveal>

        <ScrollReveal direction="scale">
          <section className="px-4 pb-12 sm:px-7 lg:pb-20">
            <div className="relative mx-auto max-w-[1380px] overflow-hidden rounded-[2rem] bg-[#09B8C8] px-6 py-14 text-[#071B24] sm:px-12 lg:px-20 lg:py-20">
              <div aria-hidden="true" className="bft-cta-orbit absolute -top-40 -right-28 size-[32rem] rounded-full border border-white/25" />
              <div className="relative grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
                <h2 className="max-w-4xl text-4xl leading-[1.02] font-normal tracking-[-0.05em] sm:text-6xl">
                  Your first Bali trip should feel exciting, not overwhelming.
                </h2>
                <div>
                  <p className="text-sm leading-6 text-[#071B24]/75">
                    Share your dates, travel group and wish list. We will help turn it into a clear conversation and a realistic plan.
                  </p>
                  <a
                    href={WHATSAPP_HREF}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-flex min-h-12 items-center gap-3 rounded-full bg-[#071B24] px-6 text-sm font-semibold text-white transition-transform duration-300 hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
                  >
                    Start on WhatsApp
                    <ArrowRight aria-hidden="true" className="size-4" />
                  </a>
                </div>
              </div>
            </div>
          </section>
        </ScrollReveal>
      </main>
      <SiteFooter />
      <WhatsAppFab />
    </div>
  );
}
