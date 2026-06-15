import { PageSeoTags } from "../components/seo/usePageSeo";
import { Faq } from "../components/home/Faq";
import { TrustBar } from "../components/layout/TrustBar";
import { ServingBar } from "../components/layout/ServingBar";
import { CtaSection } from "../components/ui/CtaSection";
import { FAQ_FULL } from "../data/faq";

export default function FaqPage() {
  return (
    <>
      <PageSeoTags path="/faq" />

      <section className="bg-navy">
        <div className="container py-16 md:py-20">
          <p className="eyebrow text-amber-200">FAQ</p>
          <h1 className="mt-2 font-display text-3xl font-bold text-cream md:text-4xl">
            Questions, answered straight.
          </h1>
          <p className="mt-4 max-w-2xl text-base text-cream/80">
            Pricing, scheduling, gutter guards, repair vs. replacement — here's
            what folks in Chattanooga ask us most. If your question isn't here,
            just call.
          </p>
        </div>
      </section>

      <TrustBar />

      <Faq
        heading="Everything we get asked."
        intro="Honest answers, no upsell. Still stuck? Call (423) 475-3158 and we'll talk it through."
        items={FAQ_FULL}
      />

      <ServingBar />

      <CtaSection eyebrow="Ready when you are" heading="Get your free quote." />
    </>
  );
}
