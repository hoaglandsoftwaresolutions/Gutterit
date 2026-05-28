import { ArrowRight, Phone } from "lucide-react";
import { BUSINESS } from "../../data/business";
import { ButtonAnchor, ButtonLink } from "../ui/Button";

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-navy">
      <img
        src="/images/hero/hero-main.jpg"
        alt=""
        fetchPriority="high"
        decoding="async"
        className="absolute inset-0 h-full w-full object-cover opacity-65"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-navy-900/85 via-navy-800/45 to-transparent" />

      <div className="relative container py-20 md:py-36 lg:py-40">
        <p className="eyebrow text-amber-200 animate-fade-in-down">
          Chattanooga, TN · Hamilton County
        </p>
        <h1 className="mt-3 font-display text-3xl font-bold leading-tight text-white md:text-4xl drop-shadow-[0_2px_8px_rgba(15,41,66,0.35)] animate-fade-in">
          Best in Chattanooga Gutter Installation and Cleaning 
        </h1>
        <p className="mt-4 text-lg font-semibold text-cream/90 animate-fade-in-up md:text-xl">
          Honest, Affordable, On Time.
        </p>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:gap-4">
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
  );
}
