import { ArrowRight, MapPin, Phone } from "lucide-react";
import { PageSeoTags } from "../seo/usePageSeo";
import { TrustBar } from "../layout/TrustBar";
import { ButtonAnchor, ButtonLink } from "../ui/Button";
import { BUSINESS } from "../../data/business";
import { AREAS } from "../../data/areas";
import { Faq } from "../home/Faq";
import { Testimonials } from "../home/Testimonials";
import { CtaSection } from "../ui/CtaSection";
import { serviceUrl, type ExtraServiceDetail } from "../../data/extraServices";
import { SignsList } from "./SignsList";
import { IncludedList } from "./IncludedList";
import { ProcessList } from "./ProcessList";
import { PhotoStrip } from "./PhotoStrip";
import { PricingBlock } from "./PricingBlock";
import { RelatedLinks } from "./RelatedLinks";
import { ServiceAreasStrip } from "./ServiceAreasStrip";

type Props = { detail: ExtraServiceDetail };

// Renderer for the extended (Core-30) service pages. Reuses the exact same
// section components as ServiceDetailPage so the pages are visually identical;
// the only differences are the typed-vs-string slug and the arbitrary related
// links (RelatedLinks instead of RelatedServices).
export function ExtraServiceDetailPage({ detail }: Props) {
  const path = serviceUrl(detail.slug, detail.silo);

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
              <p className="eyebrow">Overview</p>
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

      <SignsList heading={detail.signs.heading} items={detail.signs.items} />

      <IncludedList
        heading={detail.whatsIncluded.heading}
        items={detail.whatsIncluded.items}
      />

      <ProcessList
        heading={detail.process.heading}
        steps={detail.process.steps}
      />

      <PhotoStrip
        photos={detail.photos}
        emptyNote="We're collecting recent job photos for this service. Check back soon — or call and we'll send you a few examples from recent work in your area."
      />

      <PricingBlock
        headline={detail.pricing.headline}
        body={detail.pricing.body}
        bullets={detail.pricing.bullets}
      />

      {/* Service area */}
      <section className="bg-cream">
        <div className="container py-16 md:py-20">
          <div className="grid gap-10 md:grid-cols-[1.2fr_1fr] md:items-start md:gap-16">
            <div>
              <p className="eyebrow">Where we work</p>
              <h2 className="mt-2 font-display text-3xl font-bold text-navy md:text-4xl">
                {detail.serviceArea.heading}
              </h2>
              <div className="mt-5 space-y-4 text-base leading-relaxed text-navy/80">
                {detail.serviceArea.body.map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>
            </div>
            <ul className="grid grid-cols-2 gap-2 rounded-xl border border-navy/5 bg-white p-6 shadow-card sm:grid-cols-2">
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

      <ServiceAreasStrip serviceName={detail.title} />

      <Testimonials
        heading="What neighbors said."
        eyebrow="Testimony"
        subhead="A few of the homeowners we've helped recently."
        filterService={detail.testimonialFilter}
      />

      {detail.faq.length > 0 && (
        <Faq
          heading={`Questions about ${detail.title.toLowerCase()}.`}
          intro="If your question isn't here, call. We'd rather talk it through."
          items={detail.faq}
        />
      )}

      <RelatedLinks related={detail.related} />

      <CtaSection
        eyebrow="Ready when you are"
        heading="Get your free quote."
        body="Name, phone, and what you need. We'll call you back the same day."
      />
    </>
  );
}
