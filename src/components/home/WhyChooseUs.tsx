import { Link } from "react-router-dom";
import {
  ArrowRight,
  Calendar,
  ClipboardCheck,
  HandCoins,
  PhoneCall,
} from "lucide-react";

const REASONS = [
  {
    icon: HandCoins,
    title: "Honest, set pricing",
    body: "Detailed quote before we start. No surprises, No hidden fees. What we quote is what you pay.",
  },
  {
    icon: PhoneCall,
    title: "Same-day callbacks",
    body: "Call or text and we answer. We will call you back and address your concerns.",
  },
  {
    icon: ClipboardCheck,
    title: "No upsell pressure",
    body: "We walk the house with you and tell you our thoughts — We never upsell, We want the best for you.",
  },
  {
    icon: Calendar,
    title: "We show up on time",
    body: "Most single-story jobs done in a day. If weather pushes us, you hear it from us first.",
  },
];

export function WhyChooseUs() {
  return (
    <section className="bg-cream">
      <div className="container py-16 md:py-24">
        <div className="grid gap-10 md:grid-cols-[1fr_2fr] md:gap-16">
          <div>
            <p className="eyebrow">Why homeowners hire us</p>
            <h2 className="mt-2 font-display text-3xl font-bold text-navy md:text-4xl">
              Everything you actually want from a gutter contractor — without the runaround.
            </h2>
          </div>
          <div className="space-y-5 text-base leading-relaxed text-navy/80">
            <p>
              Hiring a gutter company in Chattanooga shouldn't feel like a gamble. We built Gutter-It around the four things homeowners told us they were missing from the last contractor: a real human answering the phone, honest pricing, work done by skilled people who know the local homes, and a crew that finishes what it started. Every job — whether it's a simple gutter cleaning in Hixson, a sagging downspout repair in East Ridge, or a full seamless gutter installation on Signal Mountain — gets the same standard.
            </p>
            <p>
              Tennessee weather is hard on gutters. Heavy summer thunderstorms drop an inch of rain in an hour. Oaks, maples, hemlocks, and pines load gutters with debris from March through December. Ice and freeze cycles work seams loose. Sun fades the finish on south-facing runs. We see all of it every week, and we build our work around how Chattanooga homes actually weather — not what looks good in a national franchise brochure.
            </p>
          </div>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {REASONS.map((r) => (
            <div
              key={r.title}
              className="rounded-xl border border-navy/10 bg-white p-6 shadow-card reveal"
            >
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-amber/15 text-amber">
                <r.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-display text-base font-bold text-navy">
                {r.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-navy/70">
                {r.body}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 grid gap-10 md:grid-cols-2 md:gap-12">
          <div>
            <h3 className="font-display text-2xl font-bold text-navy">
              Gutter services across Chattanooga and Hamilton County.
            </h3>
            <p className="mt-4 text-base leading-relaxed text-navy/80">
              From routine gutter cleaning to full seamless aluminum installations, we cover the complete range of residential gutter services Chattanooga homeowners need. Our crew handles gutter repair, downspout repair, gutter resealing, re-pitching, fascia and soffit repair, leak fixes, downspout installation, rain chains, splash blocks, and underground downspout drainage — all the small fixes and big installs that keep water moving off your roof and away from your foundation.
            </p>
            <p className="mt-4 text-base leading-relaxed text-navy/80">
              For homes surrounded by heavy tree cover, we install micro-mesh and reverse-curve gutter guards and leaf guard systems sized to the roof pitch and gutter width — without the high-pressure sales pitch the national companies are known for. We'll tell you honestly whether guards will pay back on your home, or whether two cleanings a year is the smarter call.
            </p>
            <Link
              to="/services"
              className="mt-6 inline-flex items-center gap-2 font-semibold text-amber hover:text-amber/80"
            >
              See all gutter services
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div>
            <h3 className="font-display text-2xl font-bold text-navy">
              Pressure washing and exterior cleaning, too.
            </h3>
            <p className="mt-4 text-base leading-relaxed text-navy/80">
              Because we're already on the ladder, pressure washing grew naturally out of our gutter work. We offer full-service power washing for driveways, sidewalks, patios, concrete, decks, fences, and gutter exteriors — using the right pressure and detergent for each surface so nothing gets damaged in the process.
            </p>
            <p className="mt-4 text-base leading-relaxed text-navy/80">
              For roofs and siding, we use the soft wash method recommended by roofing manufacturers — low pressure plus a house-safe cleaning solution that kills algae, mold, and mildew at the root. House washing, roof cleaning, soft washing, driveway cleaning, deck cleaning, and fence cleaning are all part of the regular menu, and bundling exterior services with a gutter cleaning visit usually saves money on both.
            </p>
            <Link
              to="/services/pressure-washing"
              className="mt-6 inline-flex items-center gap-2 font-semibold text-amber hover:text-amber/80"
            >
              Explore pressure washing
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
