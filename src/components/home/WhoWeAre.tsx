import { Link } from "react-router-dom";
import { ArrowRight, MapPin, ShieldCheck, Users, Wrench } from "lucide-react";
import { BUSINESS } from "../../data/business";
import { AREAS } from "../../data/areas";

const HIGHLIGHTS = [
  {
    icon: Users,
    title: "Locally owned and operated",
    body: "Founded and run by Jakob Demoss out of Chattanooga. The same crew that quotes your job is the crew that does the work — no subcontractors, no rotating teams.",
  },
  {
    icon: ShieldCheck,
    title: "Licensed, insured, and standing behind the work",
    body: "Liability insurance on every visit, honest quotes before we start, and a 5-year workmanship warranty on every gutter installation we hang.",
  },
  {
    icon: Wrench,
    title: "Gutter specialists, not generalists",
    body: "We don't pretend to be roofers, painters, or handymen. Gutter cleaning, repair, installation, guards, and pressure washing — that's what we do every day.",
  },
];

export function WhoWeAre() {
  return (
    <section className="bg-white">
      <div className="container py-16 md:py-24">
        <div className="grid gap-10 md:grid-cols-[1fr_2fr] md:gap-16">
          <div>
            <p className="eyebrow">Who we are</p>
            <h2 className="mt-2 font-display text-3xl font-bold text-navy md:text-4xl">
              A Chattanooga gutter company built on showing up and doing the work right.
            </h2>
          </div>
          <div className="space-y-5 text-base leading-relaxed text-navy/80">
            <p>
              {BUSINESS.name} is a family-owned, locally operated gutter and exterior cleaning company based right here in Chattanooga, Tennessee. We started because too many homeowners across Hamilton County were getting burned — overpriced gutter installations, no-show cleanings, contractors that disappeared after the deposit cleared, and "free estimates" that turned into pressure-sales pitches in the living room.
            </p>
            <p>
              We do things differently. Every quote is honest and written down on-site. Every job is handled by our own crew — never subcontracted out. And we tell you the truth, even when the truth is "your gutters don't need replacing, they need a $75 repair." That approach has built our reputation across Chattanooga, Hixson, East Brainerd, Ooltewah, Signal Mountain, Lookout Mountain, Soddy-Daisy, Red Bank, East Ridge, and Collegedale — neighborhoods where we work week in and week out.
            </p>
            <p>
              Whether you're dealing with overflowing gutters in a fall storm, a sagging downspout that's been dripping all summer, or you're finally ready to put seamless aluminum on a home that's still running 1980s sectional gutters, we're the local crew you can actually count on. Free on-site quotes, same-day callbacks, and most jobs scheduled within the week.
            </p>
            <p>
              Our work covers the full lifecycle of a gutter system — from a brand-new seamless installation formed on your driveway, to twice-a-year cleanings that keep leaves and debris from packing the downspouts, to repairs that catch fascia rot before it spreads. We also handle gutter guards, leaf protection, downspout extensions, splash blocks, and underground drainage runs that move water far enough from your foundation to actually do some good. If it has to do with how water gets off your roof and away from your house, it's what we do.
            </p>
          </div>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {HIGHLIGHTS.map((h) => (
            <div
              key={h.title}
              className="rounded-xl border border-navy/10 bg-cream/60 p-6 shadow-card reveal"
            >
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-navy text-cream">
                <h.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-display text-lg font-bold text-navy">
                {h.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-navy/70">
                {h.body}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-14 rounded-2xl border border-navy/10 bg-cream/60 p-6 md:p-8">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="flex items-start gap-3">
              <MapPin className="mt-1 h-5 w-5 shrink-0 text-amber" />
              <div>
                <p className="font-display text-lg font-bold text-navy">
                  Serving Chattanooga and all of Hamilton County, TN.
                </p>
                <p className="mt-1 text-sm text-navy/70">
                  Free on-site estimates across our full service area.
                </p>
              </div>
            </div>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 self-start rounded-lg bg-navy px-5 py-3 text-sm font-semibold text-cream hover:bg-amber hover:text-navy md:self-auto"
            >
              Get a Free Quote
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <ul className="mt-6 grid grid-cols-2 gap-2 text-sm text-navy/80 sm:grid-cols-3 md:grid-cols-5">
            {AREAS.map((area) => (
              <li key={area} className="flex items-center gap-2">
                <MapPin className="h-4 w-4 shrink-0 text-amber" />
                {area}, TN
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
