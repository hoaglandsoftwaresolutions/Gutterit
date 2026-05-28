import { Link } from "react-router-dom";
import {
  ArrowRight,
  Droplets,
  Hammer,
  Shield,
  Sparkles,
  Wrench,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { PageSeoTags } from "../components/seo/usePageSeo";
import { TrustBar } from "../components/layout/TrustBar";
import { ServingBar } from "../components/layout/ServingBar";
import { SERVICES } from "../data/services";
import { SERVICE_DETAILS } from "../data/serviceDetails";
import { PriceEstimator } from "../components/pricing/PriceEstimator";
import { CtaSection } from "../components/ui/CtaSection";

const ICONS: Record<string, LucideIcon> = {
  Droplets,
  Wrench,
  Hammer,
  Sparkles,
  Shield,
};

const WHEN_YOU_NEED_IT: Record<string, string> = {
  installation: "New construction, full replacement, or a new roof line",
  cleaning: "Twice a year for most homes — more if you've got pines",
  repair: "Sagging, leaks, separations after a storm",
  "gutter-guards": "Heavy leaf load and you're tired of climbing the ladder",
  "pressure-washing": "Tiger-striped gutters, mossy driveways, dingy siding",
};

export default function Services() {
  return (
    <>
      <PageSeoTags path="/services" />

      <section className="bg-navy">
        <div className="container py-16 md:py-20">
          <p className="eyebrow text-amber-200">Services &amp; Pricing</p>
          <h1 className="mt-2 font-display text-3xl font-bold text-cream md:text-4xl">
            What we do.
          </h1>
          <p className="mt-4 max-w-2xl text-base text-cream/80">
            Five services. Honest pricing. Pick the one you need — or call and
            we'll help you figure it out.
          </p>
        </div>
      </section>

      <TrustBar />

      <section className="bg-cream">
        <div className="container py-16 md:py-20">
          <p className="eyebrow">The full menu</p>
          <h2 className="mt-2 font-display text-3xl font-bold text-navy md:text-4xl">
            Five services, one phone number.
          </h2>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((s) => {
              const Icon = ICONS[s.icon] ?? Hammer;
              const detail = SERVICE_DETAILS[s.slug];
              return (
                <Link
                  key={s.slug}
                  to={`/services/${s.slug}`}
                  className="group flex flex-col overflow-hidden rounded-xl border border-navy/5 bg-white shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-amber/40 hover:shadow-cta reveal"
                >
                  <div className="aspect-[16/9] overflow-hidden bg-navy/5">
                    <img
                      src={detail.hero.image}
                      alt={detail.hero.imageAlt}
                      loading="lazy"
                      decoding="async"
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-navy text-cream transition-colors group-hover:bg-amber">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="font-display text-lg font-bold text-navy">
                      {s.title}
                    </h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
                      {s.blurb}
                    </p>
                    <div className="mt-5 flex items-center justify-between border-t border-navy/5 pt-4 text-sm font-semibold text-amber">
                      <span>{s.priceLabel}</span>
                      <span className="flex items-center gap-1 text-navy/80">
                        Read more
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </span>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Price at a glance */}
      <section className="bg-white">
        <div className="container py-16 md:py-20">
          <p className="eyebrow">Price at a glance</p>
          <h2 className="mt-2 font-display text-3xl font-bold text-navy md:text-4xl">
            Ballpark numbers, before you call.
          </h2>
          <p className="mt-4 max-w-2xl text-base text-navy/70">
            Final number always comes from an on-site look. But here's where
            most jobs land so you're not guessing.
          </p>
          <div className="mt-10 overflow-hidden rounded-xl border border-navy/10 bg-cream/50">
            <table className="w-full text-left text-sm">
              <thead className="bg-navy text-cream">
                <tr>
                  <th className="px-5 py-4 font-semibold">Service</th>
                  <th className="px-5 py-4 font-semibold">Typical price</th>
                  <th className="hidden px-5 py-4 font-semibold md:table-cell">
                    When you need it
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-navy/10">
                {SERVICES.map((s) => (
                  <tr key={s.slug} className="hover:bg-white/60">
                    <td className="px-5 py-4 font-semibold text-navy">
                      <Link
                        to={`/services/${s.slug}`}
                        className="hover:text-amber"
                      >
                        {s.title}
                      </Link>
                    </td>
                    <td className="px-5 py-4 text-navy/80">{s.priceLabel}</td>
                    <td className="hidden px-5 py-4 text-navy/70 md:table-cell">
                      {WHEN_YOU_NEED_IT[s.slug]}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <PriceEstimator />

      <ServingBar />

      <CtaSection eyebrow="Ready when you are" heading="Get your free quote." />
    </>
  );
}
