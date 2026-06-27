import { ArrowRight, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { AREAS } from "../../data/areas";

export function ServingBar() {
  return (
    <section className="border-b border-navy/5 bg-cream">
      <div className="container py-4 md:py-5 grid gap-2 md:grid-cols-[auto_1fr] md:items-center md:gap-5">
        <div className="flex items-center gap-2 text-navy">
          <MapPin className="h-4 w-4 text-electric" />
          <span className="text-xs font-semibold uppercase tracking-wider text-sky-500">
            Proudly serving
          </span>
        </div>
        <p className="text-sm leading-relaxed text-navy/70">
          {AREAS.join(" · ")} and the surrounding Hamilton County, Tennessee
          area.{" "}
          <Link
            to="/service-areas"
            className="inline-flex items-center gap-1 font-semibold text-amber hover:underline"
          >
            See all service areas
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </p>
      </div>
    </section>
  );
}
