import type { DetailPhoto } from "../../data/serviceDetails";
import { Camera } from "lucide-react";

type Props = { photos: DetailPhoto[]; emptyNote?: string };

export function PhotoStrip({ photos, emptyNote }: Props) {
  if (photos.length === 0 && !emptyNote) return null;

  return (
    <section className="bg-white">
      <div className="container py-16 md:py-20">
        <p className="eyebrow">From the job site</p>
        <h2 className="mt-2 font-display text-3xl font-bold text-navy md:text-4xl">
          Real work, real photos.
        </h2>

        {photos.length === 0 ? (
          <div className="mt-10 flex flex-col items-center gap-3 rounded-xl border border-dashed border-navy/15 bg-cream p-10 text-center reveal">
            <Camera className="h-8 w-8 text-navy/40" />
            <p className="text-sm text-navy/60 max-w-md">{emptyNote}</p>
          </div>
        ) : (
          <div
            className={
              "mt-10 grid gap-5 " +
              (photos.length === 1
                ? "md:grid-cols-1"
                : photos.length === 2
                  ? "md:grid-cols-2"
                  : "md:grid-cols-3")
            }
          >
            {photos.map((p) => (
              <figure
                key={p.src}
                className="overflow-hidden rounded-xl border border-navy/5 bg-cream shadow-card reveal"
              >
                <img
                  src={p.src}
                  alt={p.alt}
                  loading="lazy"
                  decoding="async"
                  className="aspect-[4/3] h-auto w-full object-cover"
                />
                {p.caption && (
                  <figcaption className="px-5 py-4 text-sm text-navy/70">
                    {p.caption}
                  </figcaption>
                )}
              </figure>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
