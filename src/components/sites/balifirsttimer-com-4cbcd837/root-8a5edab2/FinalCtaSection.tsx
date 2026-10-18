"use client";

import { ArrowUpRight, Check, MessageCircle } from "lucide-react";
import { useMemo, useState } from "react";

import { useI18n } from "@/components/i18n/I18nProvider";

import { WHATSAPP_NUMBER } from "./data";

const dayOptions = ["3", "5", "7", "10"] as const;
const travellerOptions = [
  "Couple",
  "Family · children over 8",
  "Family · young children",
  "Friends",
  "Company trip",
] as const;
const interestOptions = [
  "Waterfalls",
  "Food",
  "Culture",
  "Beaches",
  "Adventure",
  "Shopping",
] as const;

type Traveller = (typeof travellerOptions)[number];
type Interest = (typeof interestOptions)[number];

export function FinalCtaSection() {
  const { t } = useI18n();
  const [days, setDays] = useState<(typeof dayOptions)[number]>("5");
  const [travellers, setTravellers] = useState<Traveller>("Couple");
  const [interests, setInterests] = useState<Interest[]>([
    "Waterfalls",
    "Food",
  ]);

  const toggleInterest = (interest: Interest) => {
    setInterests((current) =>
      current.includes(interest)
        ? current.filter((item) => item !== interest)
        : [...current, interest],
    );
  };

  const plannerHref = useMemo(() => {
    const selectedInterests = interests.length > 0
      ? interests.map((interest) => t(interest)).join(", ")
      : t("Open to recommendations");
    const message = [
      t("Hi Bali First Timer!"),
      "",
      t("I would like help planning my Bali trip."),
      `${t("Trip length")}: ${t(`${days} days`)}`,
      `${t("Travellers")}: ${t(travellers)}`,
      `${t("Interests")}: ${selectedInterests}`,
      "",
      t("Could you help me shape an itinerary?"),
    ].join("\n");

    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  }, [days, travellers, interests, t]);

  return (
    <section id="plan-trip" className="px-4 py-10 sm:px-7 lg:py-20">
      <div className="relative mx-auto max-w-[1380px] overflow-hidden rounded-[2rem] bg-gradient-to-br from-[#09b8c8] via-[#087788] to-[#073747] px-6 py-16 text-white sm:px-10 lg:px-16 lg:py-20">
        <div
          aria-hidden="true"
          className="absolute -top-44 -right-32 size-[34rem] rounded-full border border-white/15"
        />
        <div
          aria-hidden="true"
          className="absolute -bottom-64 -left-32 size-[36rem] rounded-full bg-[#b8e63d]/15 blur-3xl"
        />

        <div className="relative grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-center lg:gap-16">
          <div>
            <p className="text-xs font-bold tracking-[0.22em] text-[#dffb7c] uppercase">
              Build your starting point
            </p>
            <h2 className="mt-5 max-w-3xl text-4xl leading-[0.96] font-semibold tracking-[-0.045em] sm:text-6xl lg:text-7xl">
              Your Bali story starts before take-off.
            </h2>
            <p className="mt-6 max-w-xl text-base leading-7 text-white/78">
              Choose a few trip basics and send them straight to our local team.
              We will continue the conversation on WhatsApp with honest,
              practical suggestions.
            </p>
          </div>

          <div className="rounded-[1.5rem] border border-white/20 bg-white/10 p-5 shadow-2xl shadow-[#071b24]/20 backdrop-blur-xl sm:p-7">
            <div className="grid gap-7">
              <label className="block" htmlFor="trip-days">
                <span className="mb-3 block text-xs font-bold tracking-[0.16em] text-white/75 uppercase">
                  Trip length
                </span>
                <span className="relative block">
                  <select
                    id="trip-days"
                    value={days}
                    onChange={(event) =>
                      setDays(event.target.value as (typeof dayOptions)[number])
                    }
                    className="min-h-12 w-full appearance-none rounded-xl border border-white/20 bg-[#073747]/55 px-4 pr-10 text-base font-semibold text-white outline-none transition focus:border-[#b8e63d] focus:ring-4 focus:ring-[#b8e63d]/25"
                  >
                    {dayOptions.map((day) => (
                      <option key={day} value={day} className="bg-[#073747]">
                        {day} days
                      </option>
                    ))}
                  </select>
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute top-1/2 right-4 -translate-y-1/2 text-[#b8e63d]"
                  >
                    ↓
                  </span>
                </span>
              </label>

              <fieldset>
                <legend className="mb-3 text-xs font-bold tracking-[0.16em] text-white/75 uppercase">
                  Who is travelling?
                </legend>
                <div className="flex flex-wrap gap-2">
                  {travellerOptions.map((option) => {
                    const isSelected = option === travellers;
                    return (
                      <button
                        key={option}
                        type="button"
                        aria-pressed={isSelected}
                        onClick={() => setTravellers(option)}
                        className={`min-h-11 rounded-full border px-4 py-2 text-left text-sm font-semibold outline-none transition focus-visible:ring-4 focus-visible:ring-[#b8e63d]/35 ${
                          isSelected
                            ? "border-[#b8e63d] bg-[#b8e63d] text-[#071b24]"
                            : "border-white/20 bg-white/8 text-white hover:border-white/50 hover:bg-white/14"
                        }`}
                      >
                        {option}
                      </button>
                    );
                  })}
                </div>
              </fieldset>

              <fieldset>
                <legend className="mb-3 text-xs font-bold tracking-[0.16em] text-white/75 uppercase">
                  What sounds good?
                </legend>
                <div className="flex flex-wrap gap-2">
                  {interestOptions.map((interest) => {
                    const isSelected = interests.includes(interest);
                    return (
                      <button
                        key={interest}
                        type="button"
                        aria-pressed={isSelected}
                        onClick={() => toggleInterest(interest)}
                        className={`inline-flex min-h-11 items-center gap-2 rounded-full border px-4 py-2 text-sm font-semibold outline-none transition focus-visible:ring-4 focus-visible:ring-[#b8e63d]/35 ${
                          isSelected
                            ? "border-white/40 bg-white text-[#073747]"
                            : "border-white/20 bg-white/8 text-white hover:border-white/50 hover:bg-white/14"
                        }`}
                      >
                        {isSelected && (
                          <Check aria-hidden="true" className="size-4" />
                        )}
                        {interest}
                      </button>
                    );
                  })}
                </div>
              </fieldset>

              <a
                href={plannerHref}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex min-h-13 w-full items-center justify-center gap-3 rounded-full bg-[#071b24] px-6 text-sm font-bold text-white outline-none transition-transform duration-300 hover:-translate-y-0.5 focus-visible:ring-4 focus-visible:ring-[#b8e63d]/45"
              >
                <MessageCircle
                  aria-hidden="true"
                  className="size-5 text-[#b8e63d]"
                />
                Send this plan on WhatsApp
                <ArrowUpRight
                  aria-hidden="true"
                  className="size-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
