import { AlertCircle } from "lucide-react";
import type { DetailItem } from "../../data/serviceDetails";

type Props = { heading: string; items: DetailItem[] };

export function SignsList({ heading, items }: Props) {
  return (
    <section className="bg-cream">
      <div className="container py-16 md:py-20">
        <div className="max-w-2xl">
          <p className="eyebrow">Diagnose first</p>
          <h2 className="mt-2 font-display text-3xl font-bold text-navy md:text-4xl">
            {heading}
          </h2>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:gap-6">
          {items.map((it) => (
            <article
              key={it.title}
              className="flex gap-4 rounded-xl border border-navy/5 bg-white p-5 shadow-card reveal"
            >
              <div className="mt-0.5 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-amber/10 text-amber">
                <AlertCircle className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-display text-lg font-bold text-navy">
                  {it.title}
                </h3>
                <p className="mt-1 text-sm leading-relaxed text-navy/70">
                  {it.body}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
