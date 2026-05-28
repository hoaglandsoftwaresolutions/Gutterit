import { Link } from "react-router-dom";
import { ArrowRight, Droplets, Hammer, Shield, Sparkles, Wrench } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { SERVICES } from "../../data/services";
import type { ServiceCategory } from "../../data/services";

const ICONS: Record<string, LucideIcon> = {
  Droplets,
  Wrench,
  Hammer,
  Sparkles,
  Shield,
};

type Props = { related: ServiceCategory[] };

export function RelatedServices({ related }: Props) {
  if (related.length === 0) return null;
  const items = SERVICES.filter((s) => related.includes(s.slug));
  if (items.length === 0) return null;

  return (
    <section className="bg-cream">
      <div className="container py-16 md:py-20">
        <p className="eyebrow">Related services</p>
        <h2 className="mt-2 font-display text-3xl font-bold text-navy md:text-4xl">
          While we're out there.
        </h2>
        <p className="mt-3 max-w-2xl text-base text-navy/70">
          Most quotes cover more than one thing at once. Here's what neighbors
          usually pair this with.
        </p>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((s) => {
            const Icon = ICONS[s.icon] ?? Hammer;
            return (
              <Link
                key={s.slug}
                to={`/services/${s.slug}`}
                className="group flex flex-col rounded-xl border border-navy/5 bg-white p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-amber/40 hover:shadow-cta reveal"
              >
                <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-navy text-cream transition-colors group-hover:bg-amber">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="font-display text-lg font-bold text-navy">
                  {s.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
                  {s.blurb}
                </p>
                <div className="mt-5 flex items-center justify-between text-sm font-semibold text-amber">
                  <span>{s.priceLabel}</span>
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
