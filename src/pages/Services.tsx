import { Check, Droplets, Hammer, Sparkles, Wrench } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Seo } from "../components/seo/Seo";
import { TrustBar } from "../components/layout/TrustBar";
import { SERVICES } from "../data/services";
import { PriceEstimator } from "../components/pricing/PriceEstimator";
import { QuoteForm } from "../components/ui/QuoteForm";

const ICONS: Record<string, LucideIcon> = {
  Droplets,
  Wrench,
  Hammer,
  Sparkles,
};

export default function Services() {
  return (
    <>
      <Seo
        title="Services & Pricing | Gutter-It LLC"
        description="Gutter cleaning from $100, repair from $50, seamless installation, and pressure washing in Chattanooga, TN. Free quotes."
        canonical="https://gutter-itllc.com/services"
      />
      <section className="bg-navy">
        <div className="container py-16 md:py-20">
          <p className="eyebrow text-amber-200">Services &amp; Pricing</p>
          <h1 className="mt-2 font-display text-3xl font-bold text-cream md:text-4xl">
            Honest pricing. Quality work.
          </h1>
          <p className="mt-4 max-w-2xl text-base text-cream/80">
            Four services, fair prices, free quotes. Here's what we do and what
            it costs.
          </p>
        </div>
      </section>

      <TrustBar />

      <section className="bg-cream">
        <div className="container py-16 md:py-20 grid gap-6">
          {SERVICES.map((s) => {
            const Icon = ICONS[s.icon];
            return (
              <article
                key={s.slug}
                className="rounded-xl border border-navy/5 bg-white p-6 shadow-card md:p-8 reveal"
              >
                <div className="grid gap-6 md:grid-cols-[auto_1fr] md:items-start md:gap-8">
                  <div className="md:w-32 md:flex md:flex-col md:items-start">
                    <div className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-navy text-cream">
                      <Icon className="h-5 w-5" />
                    </div>
                    <p className="mt-4 text-xs font-semibold uppercase tracking-wider text-muted">
                      Pricing
                    </p>
                    <p className="mt-1 font-display text-xl font-bold text-amber">
                      {s.priceLabel}
                    </p>
                  </div>
                  <div>
                    <h2 className="font-display text-2xl font-bold text-navy">
                      {s.title}
                    </h2>
                    <p className="mt-2 text-base text-navy/70 leading-relaxed">
                      {s.blurb}
                    </p>
                    <ul className="mt-5 space-y-3">
                      {s.bullets.map((b) => (
                        <li
                          key={b}
                          className="flex items-start gap-2 text-sm text-navy/80"
                        >
                          <Check className="mt-0.5 h-4 w-4 shrink-0 text-amber" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <PriceEstimator />

      <section className="bg-cream">
        <div className="container py-16 md:py-20">
          <div className="mx-auto max-w-2xl text-center">
            <p className="eyebrow">Ready when you are</p>
            <h2 className="mt-2 font-display text-3xl font-bold text-navy md:text-4xl">
              Get your free quote.
            </h2>
          </div>
          <div className="mx-auto mt-10 max-w-xl">
            <QuoteForm />
          </div>
        </div>
      </section>
    </>
  );
}
