import { Link } from "react-router-dom";
import { ArrowRight, Droplets, Hammer, Shield, Sparkles, Wrench } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { SERVICES } from "../../data/services";

const ICONS: Record<string, LucideIcon> = {
  Droplets,
  Wrench,
  Hammer,
  Sparkles,
  Shield,
};

export function ServicesGrid() {
  return (
    <section className="bg-cream">
      <div className="container py-16 md:py-20">
        <p className="eyebrow">Top Services</p>
        <h2 className="mt-2 font-display text-3xl font-bold text-navy md:text-4xl">
          Top 5 services in Hamilton County, TN.
        </h2>
        <p className="mt-4 max-w-2xl text-base text-navy/70">
          We don't pretend to be roofers, painters, or handymen. Gutters and
          exterior washing are what we specialize in — and what we've been
          doing across Chattanooga for years.
        </p>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {SERVICES.map((s) => {
            const Icon = ICONS[s.icon] ?? Hammer;
            return (
              <Link
                key={s.slug}
                to={`/services/${s.slug}`}
                className="group bg-white rounded-xl p-6 shadow-card hover:shadow-cta hover:-translate-y-1 transition-all duration-300 border border-navy/5 hover:border-amber/40 flex flex-col reveal"
              >
                <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-navy text-cream group-hover:bg-amber transition-colors">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="font-display text-lg font-bold text-navy">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm text-muted leading-relaxed flex-1">
                  {s.blurb}
                </p>
                <div className="mt-5 flex items-center justify-between text-sm font-semibold text-amber">
                  <span>{s.priceLabel}</span>
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
