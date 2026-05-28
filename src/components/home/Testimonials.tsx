import { Star } from "lucide-react";
import { TESTIMONIALS } from "../../data/testimonials";
import type { ServiceCategory } from "../../data/services";

type Props = {
  heading?: string;
  eyebrow?: string;
  subhead?: string;
  filterService?: ServiceCategory;
};

export function Testimonials({
  heading = "Don't take our word for it.",
  eyebrow = "From actual neighbors",
  subhead = "Real reviews from real Chattanooga homeowners. 5 stars, 25+ jobs.",
  filterService,
}: Props) {
  const filtered = filterService
    ? TESTIMONIALS.filter((t) => t.services?.includes(filterService))
    : TESTIMONIALS;
  const items = filtered.length > 0 ? filtered : TESTIMONIALS;

  return (
    <section className="bg-navy">
      <div className="container py-16 md:py-20">
        <p className="eyebrow text-amber-200">{eyebrow}</p>
        <h2 className="mt-2 font-display text-3xl font-bold text-cream md:text-4xl">
          {heading}
        </h2>
        <p className="mt-3 text-sm text-cream/70">{subhead}</p>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {items.map((t) => (
            <article
              key={t.name}
              className="bg-white/5 rounded-xl p-6 border border-white/10 transition-all duration-300 hover:bg-white/10 hover:border-white/20 hover:-translate-y-1 reveal"
            >
              <div className="flex gap-0.5 text-amber">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <p className="mt-4 text-sm leading-relaxed text-cream/85">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="mt-5 pt-4 border-t border-white/10">
                <p className="text-sm font-semibold text-cream">{t.name}</p>
                <p className="text-xs text-cream/60">{t.city}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
