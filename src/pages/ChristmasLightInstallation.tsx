import { ArrowRight, Building2, Check, MapPin, Phone, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { PageSeoTags } from "../components/seo/usePageSeo";
import { TrustBar } from "../components/layout/TrustBar";
import { ButtonAnchor, ButtonLink } from "../components/ui/Button";
import { Faq } from "../components/home/Faq";
import { CtaSection } from "../components/ui/CtaSection";
import { Garland, GarlandDivider } from "../components/holiday/Garland";
import { LightFrame } from "../components/holiday/LightFrame";
import { BUSINESS } from "../data/business";
import { cn } from "../lib/utils";
import {
  ADD_ONS,
  COMMERCIAL_PRICING_FACTORS,
  COMMERCIAL_SERVICES,
  HOLIDAY_FAQ,
  HOLIDAY_LIGHTING_PATH,
  HOLIDAY_SERVICE_AREA,
  RESIDENTIAL_PACKAGES,
  RESIDENTIAL_RATE_TABLE,
} from "../data/holidayLighting";

const HERO_IMAGE = "/images/hero/hero-main.jpg";

export default function ChristmasLightInstallation() {
  return (
    <>
      <PageSeoTags path={HOLIDAY_LIGHTING_PATH} />

      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-navy">
        <img
          src={HERO_IMAGE}
          alt=""
          fetchPriority="high"
          decoding="async"
          className="absolute inset-0 h-full w-full object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-800/95 via-navy-700/85 to-navy-800/70" />
        <Garland className="absolute inset-x-0 top-0" />

        <div className="relative container py-16 md:py-24 lg:py-28">
          <p className="eyebrow text-amber-200 animate-fade-in-down">
            Residential &amp; Commercial Holiday Lighting in Chattanooga, TN
          </p>
          <h1 className="mt-3 max-w-3xl font-display text-3xl font-bold leading-tight text-white md:text-4xl lg:text-5xl drop-shadow-[0_2px_8px_rgba(15,41,66,0.35)] animate-fade-in">
            Professional Christmas Light Installation
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-cream/85 animate-fade-in-up md:text-lg">
            Professional Christmas lighting installation, commercial-grade LED
            packages, seasonal maintenance, and post-holiday removal.
          </p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:gap-4">
            <ButtonLink to="/contact">
              Request an Estimate <ArrowRight className="h-4 w-4" />
            </ButtonLink>
            <ButtonAnchor
              href={BUSINESS.phoneHref}
              variant="tile"
              className="bg-white/5 text-white hover:bg-white/10 hover:border-white/20"
            >
              <Phone className="h-4 w-4" />
              Call Gutter-It LLC
            </ButtonAnchor>
          </div>
          <p className="mt-4 text-sm text-cream/70">
            Free measurement and estimate · {BUSINESS.phone}
          </p>
        </div>
      </section>

      <TrustBar />

      {/* Intro */}
      <section className="bg-white">
        <div className="container py-16 md:py-20">
          <div className="grid gap-10 md:grid-cols-[1fr_2fr] md:items-start md:gap-16">
            <div>
              <p className="eyebrow">Holiday lighting done right</p>
              <h2 className="mt-2 font-display text-3xl font-bold text-navy md:text-4xl">
                Make your home or business stand out this season.
              </h2>
            </div>
            <div className="space-y-5 text-base leading-relaxed text-navy/80">
              <p>
                We're already on your roofline for gutter work, so we know how
                to get up there safely and get the job done right. This season,
                Gutter-It LLC is offering professional Christmas light
                installation for homes and businesses across the Chattanooga
                area.
              </p>
              <p>
                Bring your own lights and we'll hang them, or let us handle
                everything: commercial-grade C9 LEDs custom-cut to your home,
                professional installation, in-season maintenance, and takedown
                in January.
              </p>
              <p>
                Need gutter work before the lights go up? Check out our{" "}
                <Link
                  to="/services/cleaning"
                  className="font-semibold text-amber hover:underline"
                >
                  gutter cleaning service
                </Link>
                . Clean gutters make for a cleaner lighting install.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Residential packages */}
      <GarlandDivider />
      <section className="bg-cream" id="residential">
        <div className="container py-16 md:py-20">
          <div className="mx-auto max-w-2xl text-center">
            <p className="eyebrow">Residential lighting</p>
            <h2 className="mt-2 font-display text-3xl font-bold text-navy md:text-4xl">
              Three ways to light up your home.
            </h2>
            <p className="mt-4 text-base text-navy/70">
              Priced per linear foot of lighting. We measure your property
              first, so you get a firm number before we start.
            </p>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {RESIDENTIAL_PACKAGES.map((pkg) => {
              const card = (
              <div
                className={cn(
                  "relative flex h-full flex-col rounded-xl border bg-white p-6 shadow-card md:p-8",
                  pkg.featured
                    ? "border-electric ring-2 ring-electric/30"
                    : "border-navy/10",
                )}
              >
                {pkg.featured && (
                  <span className="absolute -top-3.5 left-1/2 z-20 inline-flex -translate-x-1/2 items-center gap-1 whitespace-nowrap rounded-full bg-electric px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white shadow-cta">
                    <Sparkles className="h-3.5 w-3.5" /> Most popular
                  </span>
                )}
                <h3 className="font-display text-xl font-bold text-navy">
                  {pkg.name}
                </h3>
                <p className="mt-2 text-sm text-navy/70">{pkg.summary}</p>
                <div className="mt-5 flex items-baseline gap-2">
                  <span className="font-display text-4xl font-bold text-navy">
                    {pkg.rate}
                  </span>
                  <span className="text-sm text-navy/60">{pkg.unit}</span>
                </div>
                <p className="mt-1 text-sm font-semibold text-amber">
                  {pkg.minimum}
                </p>
                <ul className="mt-6 flex-1 space-y-3">
                  {pkg.includes.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-sm text-navy/80"
                    >
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-electric" />
                      {item}
                    </li>
                  ))}
                </ul>
                {pkg.note && (
                  <p className="mt-6 border-t border-navy/10 pt-4 text-xs leading-relaxed text-navy/60">
                    {pkg.note}
                  </p>
                )}
                <ButtonLink
                  to="/contact"
                  variant={pkg.featured ? "primary" : "outline"}
                  className="mt-6 w-full"
                >
                  Request an Estimate
                </ButtonLink>
              </div>
              );
              return pkg.featured ? (
                <LightFrame key={pkg.name} across={11} down={18}>
                  {card}
                </LightFrame>
              ) : (
                <div key={pkg.name}>{card}</div>
              );
            })}
          </div>

          {/* Rate summary table */}
          <div className="mx-auto mt-12 max-w-3xl overflow-hidden rounded-xl border border-navy/10 bg-white shadow-card">
            <table className="w-full text-left text-sm">
              <caption className="sr-only">Residential lighting rates</caption>
              <thead className="bg-navy text-cream">
                <tr>
                  <th scope="col" className="px-4 py-3 font-semibold md:px-6">
                    Service
                  </th>
                  <th scope="col" className="px-4 py-3 font-semibold md:px-6">
                    Rate
                  </th>
                  <th scope="col" className="px-4 py-3 font-semibold md:px-6">
                    Minimum
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-navy/10">
                {RESIDENTIAL_RATE_TABLE.map((row) => (
                  <tr key={row.service}>
                    <td className="px-4 py-3 text-navy/80 md:px-6">
                      {row.service}
                    </td>
                    <td className="px-4 py-3 font-semibold text-navy md:px-6">
                      {row.rate}
                    </td>
                    <td className="px-4 py-3 text-navy/80 md:px-6">
                      {row.minimum}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Add-ons */}
      <section className="bg-white" id="add-ons">
        <div className="container py-16 md:py-20">
          <div className="grid gap-10 md:grid-cols-[1fr_1.4fr] md:items-start md:gap-16">
            <div>
              <p className="eyebrow">Add-on lighting</p>
              <h2 className="mt-2 font-display text-3xl font-bold text-navy md:text-4xl">
                Trees, bushes, wreaths, and more.
              </h2>
              <p className="mt-4 text-base leading-relaxed text-navy/80">
                Finish the look beyond the roofline. Tree and landscape pricing
                depends on height, size, density, and accessibility.
              </p>
            </div>
            <LightFrame across={9} down={6}>
            <ul className="divide-y divide-navy/10 rounded-xl border border-navy/10 bg-cream">
              {ADD_ONS.map((item) => (
                <li
                  key={item.service}
                  className="flex items-center justify-between gap-4 px-5 py-4"
                >
                  <span className="text-sm text-navy/80 md:text-base">
                    {item.service}
                  </span>
                  <span className="whitespace-nowrap text-sm font-semibold text-navy md:text-base">
                    {item.price}
                  </span>
                </li>
              ))}
            </ul>
            </LightFrame>
          </div>
        </div>
      </section>

      {/* Commercial */}
      <GarlandDivider />
      <section className="bg-navy" id="commercial">
        <div className="container py-16 md:py-20">
          <div className="grid gap-10 md:grid-cols-2 md:items-start md:gap-16">
            <div>
              <p className="eyebrow text-amber-200">Commercial holiday lighting</p>
              <h2 className="mt-2 font-display text-3xl font-bold text-cream md:text-4xl">
                Custom lighting for businesses, starting at $1,500.
              </h2>
              <p className="mt-4 text-base leading-relaxed text-cream/80">
                We put together custom lighting proposals for offices, retail
                locations, multi-building properties, and commercial
                facilities.
              </p>
              <h3 className="mt-8 text-sm font-semibold uppercase tracking-wider text-cream">
                Commercial pricing is based on
              </h3>
              <ul className="mt-4 space-y-3">
                {COMMERCIAL_PRICING_FACTORS.map((f) => (
                  <li
                    key={f}
                    className="flex items-start gap-2 text-sm text-cream/80"
                  >
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-electric" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
            <LightFrame across={9} down={10}>
            <div className="rounded-xl border border-white/10 bg-white/5 p-6 md:p-8">
              <div className="flex items-center gap-2 text-cream">
                <Building2 className="h-5 w-5 text-electric" />
                <h3 className="font-display text-lg font-bold">
                  Commercial services
                </h3>
              </div>
              <ul className="mt-5 divide-y divide-white/10">
                {COMMERCIAL_SERVICES.map((s) => (
                  <li
                    key={s.service}
                    className="flex items-center justify-between gap-4 py-4"
                  >
                    <span className="text-sm text-cream/85">{s.service}</span>
                    <span className="text-right text-sm font-semibold text-white">
                      {s.price}
                    </span>
                  </li>
                ))}
              </ul>
              <ButtonLink to="/contact" className="mt-6 w-full">
                Request a Commercial Proposal{" "}
                <ArrowRight className="h-4 w-4" />
              </ButtonLink>
            </div>
            </LightFrame>
          </div>
        </div>
      </section>

      {/* Service area */}
      <section className="bg-cream" id="service-area">
        <div className="container py-16 md:py-20">
          <div className="grid gap-10 md:grid-cols-[1.2fr_1fr] md:items-start md:gap-16">
            <div>
              <p className="eyebrow">Service area</p>
              <h2 className="mt-2 font-display text-3xl font-bold text-navy md:text-4xl">
                Chattanooga and surrounding communities.
              </h2>
              <div className="mt-5 space-y-4 text-base leading-relaxed text-navy/80">
                <p>
                  We install holiday lighting within roughly a 100-mile radius
                  of Chattanooga, across Southeast Tennessee and North Georgia.
                </p>
                <p className="text-sm text-navy/60">
                  Travel charges or minimum project sizes may apply outside the
                  Chattanooga core service area.
                </p>
              </div>
            </div>
            <ul className="grid grid-cols-2 gap-2 rounded-xl border border-navy/5 bg-white p-6 shadow-card">
              {HOLIDAY_SERVICE_AREA.map((area) => (
                <li
                  key={area}
                  className="flex items-center gap-2 text-sm text-navy/80"
                >
                  <MapPin className="h-4 w-4 shrink-0 text-amber" />
                  {area}
                </li>
              ))}
              <li className="col-span-2 mt-1 text-sm text-navy/60">
                …and surrounding communities
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Important pricing information */}
      <section className="bg-white">
        <div className="container py-12 md:py-16">
          <div className="mx-auto max-w-3xl rounded-xl border border-navy/10 bg-sky-50 p-6 md:p-8">
            <h2 className="font-display text-xl font-bold text-navy">
              Important pricing information
            </h2>
            <div className="mt-4 space-y-3 text-sm leading-relaxed text-navy/75">
              <p>
                All prices are starting rates. Final pricing is determined after
                measuring the property and reviewing roofline footage, access,
                lighting requirements, and project complexity.
              </p>
              <p>
                Customer-supplied lights must be functional, compatible, and
                rated for outdoor use. Additional charges may apply for steep
                roofs, difficult access, specialty equipment, or unusually
                complex installations.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Faq
        heading="Christmas light questions."
        intro="Don't see your question here? Give us a call. We're happy to talk it through."
        items={HOLIDAY_FAQ}
      />

      <GarlandDivider />
      <CtaSection
        eyebrow="Free measurement & estimate"
        heading="Request your Christmas lighting estimate."
        body="Tell us your address and what you have in mind. We'll measure and get you a firm number."
        bg="white"
      />
    </>
  );
}
