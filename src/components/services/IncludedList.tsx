import { Check } from "lucide-react";
import type { DetailItem } from "../../data/serviceDetails";

type Props = { heading: string; items: DetailItem[] };

export function IncludedList({ heading, items }: Props) {
  return (
    <section className="bg-white">
      <div className="container py-16 md:py-20">
        <div className="max-w-2xl">
          <p className="eyebrow">What's included</p>
          <h2 className="mt-2 font-display text-3xl font-bold text-navy md:text-4xl">
            {heading}
          </h2>
        </div>
        <ul className="mt-10 grid gap-6 md:grid-cols-2">
          {items.map((it) => (
            <li
              key={it.title}
              className="flex gap-3 reveal"
            >
              <div className="mt-0.5 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-electric/10 text-electric">
                <Check className="h-4 w-4" />
              </div>
              <div>
                <h3 className="font-display text-lg font-bold text-navy">
                  {it.title}
                </h3>
                <p className="mt-1 text-sm leading-relaxed text-navy/70">
                  {it.body}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
