import { Link } from "react-router-dom";
import { ArrowRight, MapPin } from "lucide-react";
import { PageSeoTags } from "../../components/seo/usePageSeo";
import { TrustBar } from "../../components/layout/TrustBar";
import { CtaSection } from "../../components/ui/CtaSection";
import { LOCATIONS } from "../../data/locations";
import { locationUrl, SERVICE_AREAS_ROOT } from "../../data/extraServices";

export default function LocationsIndex() {
  const hub = LOCATIONS.find((l) => l.isHub);
  const rest = LOCATIONS.filter((l) => !l.isHub);

  return (
    <>
      <PageSeoTags path={SERVICE_AREAS_ROOT} />

      <section className="bg-navy">
        <div className="container py-16 md:py-24">
          <p className="eyebrow text-amber-200">Service Areas</p>
          <h1 className="mt-3 max-w-3xl font-display text-3xl font-bold leading-tight text-white md:text-4xl lg:text-5xl">
            Where Gutter-It works.
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-cream/85 md:text-lg">
            Based in Chattanooga, we cover the whole metro and out into North
            Georgia, plus larger projects in Knoxville and Huntsville. Find your
            town below.
          </p>
        </div>
      </section>

      <TrustBar />

      <section className="bg-white">
        <div className="container py-16 md:py-20">
          {hub && (
            <Link
              to={locationUrl(hub.slug)}
              className="group mb-8 flex flex-col rounded-xl border border-amber/30 bg-cream p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-cta md:p-8"
            >
              <div className="flex items-center gap-2 text-amber">
                <MapPin className="h-5 w-5" />
                <span className="eyebrow">Primary service area</span>
              </div>
              <h2 className="mt-2 font-display text-2xl font-bold text-navy md:text-3xl">
                {hub.city}, {hub.state}
              </h2>
              <p className="mt-2 max-w-2xl text-base text-navy/70">
                Our home base. Family-owned gutter and exterior cleaning across
                the whole city and the surrounding metro.
              </p>
              <div className="mt-4 flex items-center gap-1 text-sm font-semibold text-amber">
                Explore {hub.city}{" "}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </div>
            </Link>
          )}

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {rest.map((loc) => (
              <Link
                key={loc.slug}
                to={locationUrl(loc.slug)}
                className="group flex flex-col rounded-xl border border-navy/5 bg-white p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-amber/40 hover:shadow-cta reveal"
              >
                <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-navy text-cream transition-colors group-hover:bg-amber">
                  <MapPin className="h-5 w-5" />
                </div>
                <h3 className="font-display text-lg font-bold text-navy">
                  {loc.city}, {loc.state}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
                  {loc.hero.eyebrow}
                </p>
                <div className="mt-4 flex items-center justify-end text-sm font-semibold text-amber">
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaSection
        eyebrow="Ready when you are"
        heading="Get your free quote."
        body="Name, phone, and what you need. We'll call you back the same day."
      />
    </>
  );
}
