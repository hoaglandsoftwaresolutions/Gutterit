import type { DetailItem } from "../../data/serviceDetails";

type Props = { heading: string; steps: DetailItem[] };

export function ProcessList({ heading, steps }: Props) {
  return (
    <section className="bg-cream">
      <div className="container py-16 md:py-20">
        <div className="max-w-2xl">
          <p className="eyebrow">How we do it</p>
          <h2 className="mt-2 font-display text-3xl font-bold text-navy md:text-4xl">
            {heading}
          </h2>
        </div>
        <ol className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {steps.map((step, i) => (
            <li
              key={step.title}
              className="relative rounded-xl border border-navy/5 bg-white p-6 shadow-card reveal"
            >
              <div className="font-display text-4xl font-bold text-amber/80 leading-none">
                {String(i + 1).padStart(2, "0")}
              </div>
              <h3 className="mt-3 font-display text-lg font-bold text-navy">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-navy/70">
                {step.body}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
