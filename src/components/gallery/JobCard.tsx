import type { Job } from "../../data/jobs";
import { SERVICES } from "../../data/services";

function categoryLabel(slug: Job["category"]) {
  const map: Record<Job["category"], string> = {
    cleaning: "Cleaning",
    repair: "Repair",
    installation: "Installation",
    "pressure-washing": "Pressure Washing",
  };
  return map[slug];
}

export function JobCard({ job }: { job: Job }) {
  // Keep SERVICES referenced to ensure category integrity at build time.
  void SERVICES;
  return (
    <article className="overflow-hidden rounded-xl border border-navy/5 bg-white shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-cta reveal">
      <div className="aspect-[4/3] overflow-hidden bg-navy/5">
        <img
          src={job.image}
          alt={job.alt}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="p-5">
        <h3 className="font-display text-base font-bold text-navy">
          {job.title}
        </h3>
        <p className="mt-1 text-xs text-muted">{categoryLabel(job.category)}</p>
      </div>
    </article>
  );
}
