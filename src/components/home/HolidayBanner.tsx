import { ArrowRight } from "lucide-react";
import { Garland } from "../holiday/Garland";
import { ButtonLink } from "../ui/Button";
import {
  HOLIDAY_LIGHTING_PATH,
  HOLIDAY_SEASON_ACTIVE,
} from "../../data/holidayLighting";

// Seasonal promo shown on the homepage. Toggle with HOLIDAY_SEASON_ACTIVE in
// src/data/holidayLighting.ts.
export function HolidayBanner() {
  if (!HOLIDAY_SEASON_ACTIVE) return null;

  return (
    <section className="relative isolate overflow-hidden bg-navy-800">
      <Garland className="absolute inset-x-0 top-0" />
      <div className="container relative pb-8 pt-16 md:pb-10 md:pt-[4.5rem]">
        <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between md:gap-10">
          <div>
            <p className="eyebrow text-amber-200">Now booking for the holidays</p>
            <h2 className="mt-2 font-display text-2xl font-bold text-white md:text-3xl">
              Professional Christmas Light Installation
            </h2>
            <p className="mt-2 max-w-2xl text-sm leading-relaxed text-cream/80 md:text-base">
              Commercial-grade C9 LED packages, installation, in-season
              maintenance, and January takedown. Free measurement and estimate.
            </p>
          </div>
          <ButtonLink to={HOLIDAY_LIGHTING_PATH} className="self-start md:self-auto">
            See Holiday Lighting <ArrowRight className="h-4 w-4" />
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
