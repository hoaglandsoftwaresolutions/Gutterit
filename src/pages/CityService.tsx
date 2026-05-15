import { useParams, Navigate, Link } from "react-router-dom";
import { Check, Droplets, Hammer, Sparkles, Wrench } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { PageSeoTags } from "../components/seo/usePageSeo";
import { TrustBar } from "../components/layout/TrustBar";
import { CtaSection } from "../components/ui/CtaSection";
import { Faq } from "../components/home/Faq";
import { AREAS } from "../data/areas";
import { BUSINESS } from "../data/business";
import {
  cityFromSlug,
  cityServicePath,
  serviceFromSlug,
} from "../data/seo";
import { SERVICES } from "../data/services";

const ICONS: Record<string, LucideIcon> = {
  Droplets,
  Wrench,
  Hammer,
  Sparkles,
};

export default function CityService() {
  const { slug } = useParams<{ slug: string }>();
  const parsed = parseSlug(slug ?? "");

  if (!parsed) {
    return <Navigate to="/services" replace />;
  }

  const { service, city } = parsed;
  const Icon = ICONS[service.icon];

  return (
    <>
      <PageSeoTags path={cityServicePath(service.slug, city)} />

      <section className="bg-navy">
        <div className="container py-16 md:py-20">
          <nav
            aria-label="Breadcrumb"
            className="mb-4 text-xs text-cream/60"
          >
            <Link to="/" className="hover:text-cream">
              Home
            </Link>{" "}
            ·{" "}
            <Link to="/services" className="hover:text-cream">
              Services
            </Link>{" "}
            · <span className="text-cream/80">{service.title} in {city}</span>
          </nav>
          <p className="eyebrow text-amber-200">
            {city}, TN · Hamilton County
          </p>
          <h1 className="mt-2 font-display text-3xl font-bold text-cream md:text-4xl">
            {service.title} in {city}, TN
          </h1>
          <p className="mt-4 max-w-2xl text-base text-cream/80">
            Local, family-owned {service.title.toLowerCase()} in {city} and the
            surrounding area. {service.blurb}
          </p>
        </div>
      </section>

      <TrustBar />

      <section className="bg-cream">
        <div className="container py-16 md:py-20">
          <article className="mx-auto max-w-4xl rounded-xl border border-navy/5 bg-white p-6 shadow-card md:p-8 reveal">
            <div className="grid gap-6 md:grid-cols-[auto_1fr] md:items-start md:gap-8">
              <div className="md:w-32 md:flex md:flex-col md:items-start">
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-navy text-cream">
                  <Icon className="h-5 w-5" />
                </div>
                <p className="mt-4 text-xs font-semibold uppercase tracking-wider text-muted">
                  Pricing
                </p>
                <p className="mt-1 font-display text-xl font-bold text-amber">
                  {service.priceLabel}
                </p>
              </div>
              <div>
                <h2 className="font-display text-2xl font-bold text-navy">
                  What's included
                </h2>
                <p className="mt-2 text-base text-navy/70 leading-relaxed">
                  {introCopy(service.slug, city)}
                </p>
                <ul className="mt-5 space-y-3">
                  {service.bullets.map((b) => (
                    <li
                      key={b}
                      className="flex items-start gap-2 text-sm text-navy/80"
                    >
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-amber" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </article>
        </div>
      </section>

      <section className="bg-white">
        <div className="container py-16 md:py-20">
          <div className="mx-auto max-w-3xl">
            <p className="eyebrow">Serving {city}</p>
            <h2 className="mt-2 font-display text-3xl font-bold text-navy md:text-4xl">
              Why {city} homeowners hire us.
            </h2>
            <p className="prose-body mt-6 text-base text-navy/80">
              <span>
                We're based right here in Chattanooga and we cover {city}{" "}
                routinely — usually the same week you call. No travel
                surcharges within Hamilton County. We pick up the phone at{" "}
                <a
                  href={BUSINESS.phoneHref}
                  className="font-semibold text-navy underline underline-offset-4 hover:text-amber"
                >
                  {BUSINESS.phone}
                </a>{" "}
                and call back the same day if we miss you.
              </span>
            </p>
          </div>
        </div>
      </section>

      <Faq
        heading={`${service.title} questions from ${city} homeowners.`}
        intro={`If you don't see your question here, give us a call. We'd rather talk it through than have you guess.`}
      />

      <CtaSection
        eyebrow={`${service.title} in ${city}`}
        heading="Get your free quote."
        body={`We'll get back to you within 1 business day with pricing for your ${city} home.`}
      />

      <section className="bg-cream">
        <div className="container py-12 md:py-16">
          <p className="eyebrow text-center">Also serving</p>
          <h2 className="mt-2 text-center font-display text-2xl font-bold text-navy md:text-3xl">
            {service.title} in nearby cities
          </h2>
          <div className="mt-6 flex flex-wrap justify-center gap-2">
            {AREAS.filter((c) => c !== city).map((c) => (
              <Link
                key={c}
                to={cityServicePath(service.slug, c)}
                className="rounded-full border border-navy/15 bg-white px-4 py-1.5 text-sm font-medium text-navy hover:border-navy/40 hover:text-amber"
              >
                {service.title} in {c}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function parseSlug(slug: string) {
  // pattern: <service>-in-<city-slug>
  const marker = "-in-";
  const idx = slug.lastIndexOf(marker);
  if (idx === -1) return null;
  const servicePart = slug.slice(0, idx);
  const cityPart = slug.slice(idx + marker.length);

  // service slugs include hyphens (e.g. "pressure-washing"), so try longest first
  const matchedService = SERVICES.find((s) => s.slug === servicePart);
  if (!matchedService) return null;

  const city = cityFromSlug(cityPart);
  if (!city) return null;

  // Sanity: also verify the resolved service via helper.
  const svc = serviceFromSlug(matchedService.slug);
  if (!svc) return null;

  return { service: svc, city };
}

function introCopy(slug: string, city: string) {
  if (slug === "cleaning")
    return `Hand-clear leaves and debris from every section, flush every downspout, and haul everything away. Most ${city} homes are done in under 90 minutes.`;
  if (slug === "repair")
    return `Sagging sections, leaky seams, broken downspouts — most ${city} repairs run $50–$200 fixed. We'll tell you if it's really a repair job versus a full replacement.`;
  if (slug === "installation")
    return `Seamless aluminum gutters formed on your driveway and cut to fit your roof line exactly. Most full installs on a ${city} home wrap up in one day.`;
  return `Driveways, sidewalks, siding, decks, and gutter exteriors cleaned without damage. We adjust pressure for each surface — vinyl, brick, and fiber cement get different treatment.`;
}
