import { useMemo, useState } from "react";
import { Calculator } from "lucide-react";
import { cn } from "../../lib/utils";

const STORIES = [1, 2, 3] as const;
const MATERIALS = ["Aluminum", "Copper"] as const;

type Story = (typeof STORIES)[number];
type Material = (typeof MATERIALS)[number];

function estimate(feet: number, stories: Story, material: Material) {
  const baseLow = feet * 0.9;
  const baseHigh = feet * 1.5;
  const storyMult = stories === 1 ? 1 : stories === 2 ? 1.3 : 1.6;
  const materialMult = material === "Copper" ? 3.5 : 1;
  const low = Math.round((baseLow * storyMult * materialMult) / 10) * 10;
  const high = Math.round((baseHigh * storyMult * materialMult) / 10) * 10;
  return { low, high };
}

export function PriceEstimator() {
  const [feet, setFeet] = useState(150);
  const [stories, setStories] = useState<Story>(1);
  const [material, setMaterial] = useState<Material>("Aluminum");

  const { low, high } = useMemo(
    () => estimate(feet, stories, material),
    [feet, stories, material],
  );

  return (
    <section className="bg-white">
      <div className="container py-16 md:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <p className="eyebrow">Quick estimate</p>
          <h2 className="mt-2 font-display text-3xl font-bold text-navy md:text-4xl">
            Get a ballpark in seconds.
          </h2>
          <p className="mt-3 text-base text-navy/70">
            Adjust the inputs below for a rough range. We give exact pricing
            on-site at no charge.
          </p>
        </div>

        <div className="mx-auto mt-10 max-w-3xl rounded-xl border border-navy/10 bg-white p-6 shadow-card md:p-8">
          <div className="flex items-center gap-2 text-navy">
            <Calculator className="h-5 w-5 text-amber" />
            <h3 className="font-display text-lg font-bold">
              Quick price estimator
            </h3>
          </div>
          <p className="mt-2 text-sm text-muted">
            Get a rough range in seconds. Adjust the inputs to match your home.
          </p>

          <div className="mt-6">
            <div className="flex items-baseline justify-between">
              <label
                htmlFor="feet"
                className="text-sm font-semibold text-navy"
              >
                Linear feet of gutter
              </label>
              <span className="font-display text-lg font-bold text-navy tabular-nums">
                {feet} ft
              </span>
            </div>
            <input
              id="feet"
              type="range"
              min={50}
              max={400}
              step={10}
              value={feet}
              onChange={(e) => setFeet(Number(e.target.value))}
              className="mt-3 w-full accent-electric"
            />
            <div className="mt-1 flex justify-between text-xs text-muted">
              <span>50 ft</span>
              <span>400 ft</span>
            </div>
          </div>

          <div className="mt-6 grid gap-5 md:grid-cols-2 md:gap-8">
            <div>
              <p className="text-sm font-semibold text-navy">Stories</p>
              <div className="mt-3 grid grid-cols-3 gap-2">
                {STORIES.map((n) => (
                  <button
                    key={n}
                    type="button"
                    onClick={() => setStories(n)}
                    className={cn(
                      "h-11 rounded-lg border text-sm font-semibold transition-colors",
                      stories === n
                        ? "bg-electric border-electric text-white"
                        : "border-navy/15 bg-white text-navy hover:border-navy/40",
                    )}
                  >
                    {n}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <p className="text-sm font-semibold text-navy">Material</p>
              <div className="mt-3 grid grid-cols-2 gap-2">
                {MATERIALS.map((m) => (
                  <button
                    key={m}
                    type="button"
                    onClick={() => setMaterial(m)}
                    className={cn(
                      "h-11 rounded-lg border text-sm font-semibold transition-colors",
                      material === m
                        ? "bg-electric border-electric text-white"
                        : "border-navy/15 bg-white text-navy hover:border-navy/40",
                    )}
                  >
                    {m}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-6 rounded-lg bg-navy p-5 text-cream">
            <p className="text-xs font-semibold uppercase tracking-wider text-cream/70">
              Estimated range
            </p>
            <p className="mt-1 font-display text-3xl font-bold md:text-4xl text-white tabular-nums animate-fade-in">
              ${low.toLocaleString()} – ${high.toLocaleString()}
            </p>
            <p className="mt-3 text-xs text-cream/75">
              This is a rough estimate, not a quote. Final pricing depends on
              your specific roof line, accessibility, and condition. We provide
              honest quotes on-site at no charge.
            </p>
          </div>
        </div>

        <p className="mt-4 text-sm text-muted text-center reveal max-w-3xl mx-auto">
          Estimator shows cleaning pricing. For installation, repair, or
          pressure washing pricing, request a free quote.
        </p>
      </div>
    </section>
  );
}
