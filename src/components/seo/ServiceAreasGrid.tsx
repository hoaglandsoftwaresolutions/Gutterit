import { Link } from "react-router-dom";
import { AREAS } from "../../data/areas";
import { SERVICES } from "../../data/services";
import { cityServicePath } from "../../data/seo";

export function ServiceAreasGrid() {
  return (
    <section className="bg-white" aria-labelledby="service-areas-heading">
      <div className="container py-16 md:py-20">
        <div className="max-w-3xl">
          <p className="eyebrow">Service areas</p>
          <h2
            id="service-areas-heading"
            className="mt-2 font-display text-3xl font-bold text-navy md:text-4xl"
          >
            Local gutter service across Hamilton County.
          </h2>
          <p className="mt-3 text-base text-navy/70">
            We cover Chattanooga and every surrounding town below. Find your
            city for service-specific pricing and details.
          </p>
        </div>

        <div className="mt-10 grid gap-8 md:grid-cols-2">
          {SERVICES.map((s) => (
            <div key={s.slug}>
              <h3 className="font-display text-lg font-bold text-navy">
                {s.title}
              </h3>
              <ul className="mt-3 grid grid-cols-2 gap-x-4 gap-y-1.5">
                {AREAS.map((city) => (
                  <li key={city}>
                    <Link
                      to={cityServicePath(s.slug, city)}
                      className="text-sm text-navy/80 hover:text-amber"
                    >
                      {s.title} in {city}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
