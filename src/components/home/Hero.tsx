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
        className="absolute inset-0 h-full w-full object-cover opacity-40"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-navy-800/90 via-navy-700/65 to-amber-900/15" />

      <div className="relative container py-16 md:py-28 lg:py-32">
        <p className="eyebrow text-amber-200 animate-fade-in-down">
          Chattanooga, TN · Hamilton County
        </p>
        <h1 className="mt-3 font-display text-3xl font-bold leading-tight text-white md:text-4xl drop-shadow-[0_2px_8px_rgba(15,41,66,0.35)] animate-fade-in">
          Enhancing your home's value,{" "}
          <span className="italic text-amber-200">
            one gutter at a time.
          </span>
        </h1>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-cream/85 animate-fade-in-up">
          Chattanooga's local choice for seamless gutter cleaning, installation,
          repair, and pressure washing — cleaning from $100, repairs from $50,
          full installs, and we've got the rest of your home's exterior covered
          too.
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
