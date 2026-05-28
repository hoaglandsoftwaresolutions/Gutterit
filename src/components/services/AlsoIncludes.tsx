import type { AlsoIncludedItem } from "../../data/serviceDetails";

type Props = {
  heading: string;
  intro?: string;
  items: AlsoIncludedItem[];
};

export function AlsoIncludes({ heading, intro, items }: Props) {
  return (
    <section className="bg-cream">
      <div className="container py-16 md:py-20">
        <div className="max-w-2xl">
          <p className="eyebrow">We also handle</p>
          <h2 className="mt-2 font-display text-3xl font-bold text-navy md:text-4xl">
            {heading}
          </h2>
          {intro && (
            <p className="mt-4 text-base leading-relaxed text-navy/70">
              {intro}
            </p>
          )}
        </div>
        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((it) => (
            <li
              key={it.name}
              className="rounded-xl border border-navy/10 bg-white p-5 shadow-card reveal"
            >
              <h3 className="font-display text-base font-bold text-navy">
                {it.name}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-navy/70">
                {it.body}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
