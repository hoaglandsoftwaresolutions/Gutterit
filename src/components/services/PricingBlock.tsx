import type {
  DetailParagraph,
  DetailPriceRow,
} from "../../data/serviceDetails";

type Props = {
  headline: string;
  body: DetailParagraph[];
  bullets?: DetailPriceRow[];
};

export function PricingBlock({ headline, body, bullets }: Props) {
  return (
    <section id="pricing" className="bg-navy">
      <div className="container py-16 md:py-20">
        <div className="grid gap-10 md:grid-cols-[1.2fr_1fr] md:items-start lg:gap-16">
          <div className="reveal">
            <p className="eyebrow text-amber-200">Straight pricing</p>
            <h2 className="mt-2 font-display text-3xl font-bold text-cream md:text-4xl">
              {headline}
            </h2>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-cream/80">
              {body.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
          </div>

          {bullets && bullets.length > 0 && (
            <div className="rounded-xl border border-white/10 bg-white/5 p-6 reveal">
              <p className="text-xs font-semibold uppercase tracking-wider text-amber-200">
                Typical ranges
              </p>
              <dl className="mt-4 divide-y divide-white/10">
                {bullets.map((row) => (
                  <div
                    key={row.label}
                    className="flex items-baseline justify-between gap-4 py-3"
                  >
                    <dt className="text-sm text-cream/80">{row.label}</dt>
                    <dd className="font-display text-lg font-bold text-cream">
                      {row.value}
                    </dd>
                  </div>
                ))}
              </dl>
              <p className="mt-5 text-xs text-cream/60">
                Final price is written down on-site after we measure. No
                surprise add-ons.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
