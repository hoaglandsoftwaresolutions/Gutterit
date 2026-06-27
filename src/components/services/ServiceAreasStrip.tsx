import { Link } from "react-router-dom";
import { ArrowRight, MapPin } from "lucide-react";
import { LOCATIONS } from "../../data/locations";
import { locationUrl, SERVICE_AREAS_ROOT } from "../../data/extraServices";

// Cross-links the location silo from a service page (brief requirement:
// "service pages link to relevant locations"). Shows the metro hub plus the
// nearby cities, linking each to its location landing page.
export function ServiceAreasStrip({ serviceName }: { serviceName?: string }) {
  const hub = LOCATIONS.find((l) => l.isHub);
  const others = LOCATIONS.filter((l) => !l.isHub);

  return (
    <section className="bg-white">
      <div className="container py-16 md:py-20">
        <p className="eyebrow">Service areas</p>
        <h2 className="mt-2 font-display text-3xl font-bold text-navy md:text-4xl">
          {serviceName ? `${serviceName} across the Chattanooga metro.` : "Where we work."}
        </h2>
        <p className="mt-3 max-w-2xl text-base text-navy/70">
          We're based in {hub?.city ?? "Chattanooga"} and cover the surrounding
          metro and North Georgia. Pick your town for local details.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          {hub && (
            <Link
              to={locationUrl(hub.slug)}
              className="inline-flex items-center gap-2 rounded-full border border-amber/40 bg-cream px-4 py-2 text-sm font-semibold text-navy transition-colors hover:border-amber hover:bg-amber/10"
            >
              <MapPin className="h-4 w-4 text-amber" />
              {hub.city}, {hub.state}
            </Link>
          )}
          {others.map((loc) => (
            <Link
              key={loc.slug}
              to={locationUrl(loc.slug)}
              className="inline-flex items-center gap-2 rounded-full border border-navy/10 bg-white px-4 py-2 text-sm text-navy/80 transition-colors hover:border-amber/40 hover:text-navy"
            >
              <MapPin className="h-4 w-4 text-amber" />
              {loc.city}, {loc.state}
            </Link>
          ))}
        </div>

        <Link
          to={SERVICE_AREAS_ROOT}
          className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-amber hover:underline"
        >
          See all service areas
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </section>
  );
}
