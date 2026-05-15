import { useMemo, useState } from "react";
import { PageSeoTags } from "../components/seo/usePageSeo";
import { JOBS } from "../data/jobs";
import { JobCard } from "../components/gallery/JobCard";
import {
  GalleryFilter,
  type FilterValue,
} from "../components/gallery/GalleryFilter";
import { CtaSection } from "../components/ui/CtaSection";

export default function Gallery() {
  const [filter, setFilter] = useState<FilterValue>("all");

  const visible = useMemo(
    () => (filter === "all" ? JOBS : JOBS.filter((j) => j.category === filter)),
    [filter],
  );

  return (
    <>
      <PageSeoTags path="/gallery" />

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

      <CtaSection
        eyebrow="Want your home in here?"
        heading="Get a free quote."
        bg="white"
      />
    </>
  );
}
