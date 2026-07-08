import { ArrowRight, MapPin, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import { PageSeoTags } from "../components/seo/usePageSeo";
import { TrustBar } from "../components/layout/TrustBar";
import { ButtonAnchor, ButtonLink } from "../components/ui/Button";
import { BUSINESS } from "../data/business";
import { AREAS } from "../data/areas";
import { SignsList } from "../components/services/SignsList";
import { IncludedList } from "../components/services/IncludedList";
import { ProcessList } from "../components/services/ProcessList";
import { PricingBlock } from "../components/services/PricingBlock";
import { RelatedServices } from "../components/services/RelatedServices";
import { Faq } from "../components/home/Faq";
import { Testimonials } from "../components/home/Testimonials";
import { CtaSection } from "../components/ui/CtaSection";
import { LOCAL_GUTTER_CLEANING_EAST_BRAINERD as L } from "../data/localPages";

const HERO_IMAGE = "/images/jobs/cleaning/leavesingutter.jpg";

export default function GutterCleaningEastBrainerd() {
  return (
    <>
      <PageSeoTags path="/gutter-cleaning-east-brainerd" />

      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-navy">
        <img
          src={HERO_IMAGE}
          alt=""
          fetchPriority="high"
          decoding="async"
          className="absolute inset-0 h-full w-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-800/95 via-navy-700/80 to-amber-900/20" />

        <div className="relative container py-16 md:py-24 lg:py-28">
          <p className="eyebrow text-amber-200 animate-fade-in-down">
            East Brainerd, TN · Hamilton County
          </p>
          <h1 className="mt-3 max-w-3xl font-display text-3xl font-bold leading-tight text-white md:text-4xl lg:text-5xl drop-shadow-[0_2px_8px_rgba(15,41,66,0.35)] animate-fade-in">
            Gutter cleaning in East Brainerd, done by hand.
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-cream/85 animate-fade-in-up md:text-lg">
            Local, family-owned, and on the ladder ourselves — not a national
            chain dispatching a stranger to your house. Every section cleared,
            every downspout flushed, debris hauled away. We provide a quote
            before we start.
          </p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:gap-4">
            <ButtonLink to="/contact">
              Get Free Quote <ArrowRight className="h-4 w-4" />
            </ButtonLink>
            <ButtonAnchor
              href={BUSINESS.phoneHref}
              variant="tile"
              className="bg-white/5 text-white hover:bg-white/10 hover:border-white/20"
            >
              <Phone className="h-4 w-4" />
              {BUSINESS.phone}
            </ButtonAnchor>
          </div>
        </div>
      </section>

      <TrustBar />

      {/* Local intro */}
      <section className="bg-white">
        <div className="container py-16 md:py-20">
          <div className="grid gap-10 md:grid-cols-[1fr_2fr] md:items-start md:gap-16">
            <div>
              <p className="eyebrow">Local to East Brainerd</p>
              <h2 className="mt-2 font-display text-3xl font-bold text-navy md:text-4xl">
                {L.intro.heading}
              </h2>
            </div>
            <div className="space-y-5 text-base leading-relaxed text-navy/80">
              {L.intro.body.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
              {/* In-body internal links (2) — to the core cleaning service and
                  the nearby Chattanooga local page. */}
              <p>
                Want the full rundown of how we clean?{" "}
                <Link
                  to="/services/cleaning"
                  className="font-semibold text-amber hover:underline"
                >
                  See our gutter cleaning service
                </Link>{" "}
                for everything a visit covers, or if you're just over the line
                in the city, head to our{" "}
                <Link
                  to="/gutter-cleaning-chattanooga"
                  className="font-semibold text-amber hover:underline"
                >
                  Chattanooga gutter cleaning page
                </Link>
                .
              </p>
            </div>
          </div>
        </div>
      </section>

      <SignsList heading={L.signs.heading} items={L.signs.items} />

      <IncludedList
        heading={L.whatsIncluded.heading}
        items={L.whatsIncluded.items}
      />

      <ProcessList heading={L.process.heading} steps={L.process.steps} />

      <PricingBlock
        headline={L.pricing.headline}
        body={L.pricing.body}
        bullets={L.pricing.bullets}
      />

      {/* Neighborhoods we cover */}
      <section className="bg-cream">
        <div className="container py-16 md:py-20">
          <div className="grid gap-10 md:grid-cols-[1.2fr_1fr] md:items-start md:gap-16">
            <div>
              <p className="eyebrow">Where we work</p>
              <h2 className="mt-2 font-display text-3xl font-bold text-navy md:text-4xl">
                {L.serviceArea.heading}
              </h2>
              <div className="mt-5 space-y-4 text-base leading-relaxed text-navy/80">
                {L.serviceArea.body.map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>
            </div>
            <ul className="grid grid-cols-2 gap-2 rounded-xl border border-navy/5 bg-white p-6 shadow-card">
              {AREAS.map((area) => (
                <li
                  key={area}
                  className="flex items-center gap-2 text-sm text-navy/80"
                >
                  <MapPin className="h-4 w-4 shrink-0 text-amber" />
                  {area}, TN
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <Testimonials
        heading="What East Brainerd homeowners said."
        eyebrow="Testimony"
        subhead="A few of the neighbors we've cleaned for recently."
        filterService="cleaning"
      />

      <Faq
        heading="Gutter cleaning questions, East Brainerd edition."
        intro="If your question isn't here, call. We'd rather talk it through than have you guess."
        items={L.faq}
      />

      <RelatedServices
        related={["gutter-repair", "gutter-guards", "pressure-washing"]}
      />

      <CtaSection
        eyebrow="Ready when you are"
        heading="Get your free East Brainerd gutter cleaning quote."
        body="Name, phone, and your address. We'll call you back the same day."
      />
    </>
  );
}
