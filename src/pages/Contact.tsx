import { PageSeoTags } from "../components/seo/usePageSeo";
import { QuoteForm } from "../components/ui/QuoteForm";

export default function Contact() {
  return (
    <>
      <PageSeoTags path="/contact" />

      <section className="bg-navy">
        <div className="container py-16 md:py-20">
          <p className="eyebrow text-amber-200">Contact</p>
          <h1 className="mt-2 font-display text-3xl font-bold text-cream md:text-4xl">
            Get in touch.
          </h1>
          <p className="mt-4 max-w-2xl text-base text-cream/80">
            Fill out the form below and we'll get back to you within 1 business
            day.
          </p>
        </div>
      </section>

      <section className="bg-cream">
        <div className="container py-16 md:py-20">
          <div className="mx-auto max-w-2xl">
            <QuoteForm />
          </div>
        </div>
      </section>
    </>
  );
}
