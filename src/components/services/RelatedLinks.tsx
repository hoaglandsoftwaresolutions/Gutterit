import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import type { RelatedLink } from "../../data/extraServices";

type Props = { related: RelatedLink[]; heading?: string };

// Related-services renderer for pages outside the core-five ServiceCategory
// system. Mirrors RelatedServices.tsx visually but takes arbitrary links so it
// can cross-link any service page, not just the typed five.
export function RelatedLinks({ related, heading }: Props) {
  if (related.length === 0) return null;

  return (
    <section className="bg-cream">
      <div className="container py-16 md:py-20">
        <p className="eyebrow">Related services</p>
        <h2 className="mt-2 font-display text-3xl font-bold text-navy md:text-4xl">
          {heading ?? "While we're out there."}
        </h2>
        <p className="mt-3 max-w-2xl text-base text-navy/70">
          Most quotes cover more than one thing at once. Here's what neighbors
          usually pair this with.
        </p>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {related.map((s) => (
            <Link
              key={s.to}
              to={s.to}
              className="group flex flex-col rounded-xl border border-navy/5 bg-white p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-amber/40 hover:shadow-cta reveal"
            >
              <h3 className="font-display text-lg font-bold text-navy">
                {s.title}
              </h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
                {s.blurb}
              </p>
              <div className="mt-5 flex items-center justify-end text-sm font-semibold text-amber">
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
