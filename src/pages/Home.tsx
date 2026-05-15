import { Seo } from "../components/seo/Seo";
import { Hero } from "../components/home/Hero";
import { TrustBar } from "../components/layout/TrustBar";
import { ServingBar } from "../components/layout/ServingBar";
import { ServicesGrid } from "../components/home/ServicesGrid";
import { Testimonials } from "../components/home/Testimonials";
import { Faq } from "../components/home/Faq";
import { QuoteForm } from "../components/ui/QuoteForm";

export default function Home() {
  return (
    <>
      <Seo
        title="Gutter-It LLC | Gutter Cleaning, Installation & Repair in Chattanooga, TN"
        description="Family-owned gutter and pressure washing company serving Chattanooga, Hixson, Ooltewah, Signal Mountain & all Hamilton County. Cleaning from $100, repairs from $50. Licensed, insured, free quotes."
        canonical="https://gutter-itllc.com/"
      />
      <Hero />
      <TrustBar />
      <ServingBar />
      <ServicesGrid />
      <Testimonials />
      <Faq />
      <section className="bg-cream">
        <div className="container py-16 md:py-20">
          <div className="mx-auto max-w-2xl text-center">
            <p className="eyebrow">Ready to talk gutters?</p>
            <h2 className="mt-2 font-display text-3xl font-bold text-navy md:text-4xl">
              Get your free quote.
            </h2>
            <p className="mt-3 text-base text-navy/70">
              Name, phone, and what you need. We'll call you back the same day
              to talk it through.
            </p>
          </div>
          <div className="mx-auto mt-10 max-w-xl">
            <QuoteForm />
          </div>
        </div>
      </section>
    </>
  );
}
