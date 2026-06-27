import { ArrowRight, MapPin, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import { PageSeoTags } from "../seo/usePageSeo";
import { TrustBar } from "../layout/TrustBar";
import { ButtonAnchor, ButtonLink } from "../ui/Button";
import { BUSINESS } from "../../data/business";
import { SignsList } from "../services/SignsList";
import { PricingBlock } from "../services/PricingBlock";
import { RelatedLinks } from "../services/RelatedLinks";
import { Faq } from "../home/Faq";
import { Testimonials } from "../home/Testimonials";
import { CtaSection } from "../ui/CtaSection";
import type { LocationContent } from "../../data/locations";
import { locationUrl } from "../../data/extraServices";

type Props = { detail: LocationContent };

// Renderer for the location landing pages. Reuses the same section components
// as the service pages so the pages match the existing design system exactly.
export function LocationPage({ detail }: Props) {
  const path = locationUrl(detail.slug);
  const cityState = `${detail.city}, ${detail.state}`;

  return (
    <>
      <PageSeoTags path={path} />

      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-navy">
        <img
          src={detail.hero.image}
          alt=""
          fetchPriority="high"
          decoding="async"
          className="absolute inset-0 h-full w-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-800/95 via-navy-700/80 to-amber-900/20" />

        <div className="relative container py-16 md:py-24 lg:py-28">
          <p className="eyebrow text-amber-200 animate-fade-in-down">
            {detail.hero.eyebrow}
          </p>
          <h1 className="mt-3 max-w-3xl font-display text-3xl font-bold leading-tight text-white md:text-4xl lg:text-5xl drop-shadow-[0_2px_8px_rgba(15,41,66,0.35)] animate-fade-in">
            {detail.hero.h1}
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-cream/85 animate-fade-in-up md:text-lg">
            {detail.hero.lede}
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

      {/* Intro */}
      <section className="bg-white">
        <div className="container py-16 md:py-20">
          <div className="grid gap-10 md:grid-cols-[1fr_2fr] md:items-center md:gap-16">
            <div>
              <p className="eyebrow">Local to {detail.city}</p>
              <h2 className="mt-2 font-display text-3xl font-bold text-navy md:text-4xl">
                {detail.intro.heading}
              </h2>
            </div>
            <div className="space-y-5 text-base leading-relaxed text-navy/80">
              {detail.intro.body.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why gutters matter here — localized hook */}
      <SignsList
        heading={detail.localContext.heading}
        items={detail.localContext.items}
      />

      {/* Services offered (cross-link to service silo) */}
      <RelatedLinks
        related={detail.services}
        heading={`Our services in ${detail.city}.`}
      />

      {/* Neighborhoods / sub-areas */}
      <section className="bg-cream">
        <div className="container py-16 md:py-20">
          <div className="grid gap-10 md:grid-cols-[1.2fr_1fr] md:items-start md:gap-16">
            <div>
              <p className="eyebrow">Where we work</p>
              <h2 className="mt-2 font-display text-3xl font-bold text-navy md:text-4xl">
                {detail.neighborhoods.heading}
              </h2>
              <div className="mt-5 space-y-4 text-base leading-relaxed text-navy/80">
                {detail.neighborhoods.body.map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>
            </div>
            <ul className="grid grid-cols-1 gap-2 rounded-xl border border-navy/5 bg-white p-6 shadow-card sm:grid-cols-2">
              {detail.neighborhoods.list.map((area) => (
                <li
                  key={area}
                  className="flex items-center gap-2 text-sm text-navy/80"
                >
                  <MapPin className="h-4 w-4 shrink-0 text-amber" />
                  {area}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <PricingBlock
        headline={detail.pricing.headline}
        body={detail.pricing.body}
        bullets={detail.pricing.bullets}
      />

      <Testimonials
        heading={`What ${detail.city} homeowners said.`}
        eyebrow="Testimony"
        subhead="A few of the neighbors we've helped recently."
      />

      {detail.faq.length > 0 && (
        <Faq
          heading={`Gutter questions in ${cityState}.`}
          intro="If your question isn't here, call. We'd rather talk it through."
          items={detail.faq}
        />
      )}

      {/* Link back to the Chattanooga hub (skip on the hub itself) */}
      {!detail.isHub && (
        <section className="bg-white">
          <div className="container py-12">
            <div className="rounded-xl border border-navy/10 bg-cream p-6 text-center shadow-card md:p-8">
              <p className="text-base text-navy/80">
                {detail.city} is part of the greater Chattanooga metro we serve.{" "}
                <Link
                  to={locationUrl("chattanooga")}
                  className="font-semibold text-amber hover:underline"
                >
                  See all our Chattanooga-area service areas →
                </Link>
              </p>
            </div>
          </div>
        </section>
      )}

      <CtaSection
        eyebrow="Ready when you are"
        heading={`Get your free ${detail.city} quote.`}
        body="Name, phone, and what you need. We'll call you back the same day."
      />
    </>
  );
}
