import { useMemo, useState } from "react";
import { Seo } from "../components/seo/Seo";
import { JOBS } from "../data/jobs";
import { JobCard } from "../components/gallery/JobCard";
import {
  GalleryFilter,
  type FilterValue,
} from "../components/gallery/GalleryFilter";
import { QuoteForm } from "../components/ui/QuoteForm";

export default function Gallery() {
  const [filter, setFilter] = useState<FilterValue>("all");

  const visible = useMemo(
    () => (filter === "all" ? JOBS : JOBS.filter((j) => j.category === filter)),
    [filter],
  );

  return (
    <>
      <Seo
        title="Gallery | Gutter-It LLC"
        description="Before-and-after gutter and pressure washing projects in Chattanooga. See our work."
        canonical="https://gutter-itllc.com/gallery"
      />

      <section className="bg-navy">
        <div className="container py-16 md:py-20">
          <p className="eyebrow text-amber-200">Gallery</p>
          <h1 className="mt-2 font-display text-3xl font-bold text-cream md:text-4xl">
            See our work.
          </h1>
          <p className="mt-4 max-w-2xl text-base text-cream/80">
            A sampling of recent jobs around Chattanooga. Drag the slider on
            before/after photos to see the difference.
          </p>
        </div>
      </section>

      <section className="bg-cream">
        <div className="container py-16 md:py-20">
          <GalleryFilter value={filter} onChange={setFilter} />

          {visible.length > 0 ? (
            <div className="mt-8 grid gap-6 md:grid-cols-2">
              {visible.map((job) => (
                <JobCard key={job.id} job={job} />
              ))}
            </div>
          ) : (
            <p className="mt-12 text-center text-sm text-muted">
              No projects match those filters yet — check back soon.
            </p>
          )}
        </div>
      </section>

      <section className="bg-white">
        <div className="container py-16 md:py-20">
          <div className="mx-auto max-w-2xl text-center">
            <p className="eyebrow">Want your home in here?</p>
            <h2 className="mt-2 font-display text-3xl font-bold text-navy md:text-4xl">
              Get a free quote.
            </h2>
          </div>
          <div className="mx-auto mt-10 max-w-xl">
            <QuoteForm />
          </div>
        </div>
      </section>
    </>
  );
}
