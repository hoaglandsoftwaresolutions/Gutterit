import { SERVICES, type Service, type ServiceCategory } from "./services";
import { SERVICE_DETAILS, type ServiceDetail } from "./serviceDetails";
import { AREAS } from "./areas";
import { BUSINESS } from "./business";
import { FAQ, FAQ_FULL } from "./faq";
import { LOCAL_GUTTER_CLEANING_CHATTANOOGA } from "./localPages";
import { EXTRA_SERVICES, serviceUrl, locationUrl } from "./extraServices";
import { LOCATIONS, type LocationContent } from "./locations";

export const SITE_ORIGIN = "https://www.gutteritllc.com";

// Additional service names from the Google Business Profile listing that don't
// map 1:1 to our top-level service slugs, but should still appear in the
// LocalBusiness OfferCatalog so search engines see us offering them.
const GBP_ADDITIONAL_SERVICES = [
  "Seamless Gutter Installation",
  "Gutter Replacement",
  "Gutter Guard Installation",
  "Leaf Guard Installation",
  "Downspout Cleaning",
  "Downspout Unclogging",
  "Downspout Repair",
  "Downspout Installation",
  "Gutter Flushing",
  "Roof Debris Removal",
  "Gutter Inspection",
  "Gutter Resealing",
  "Gutter Realignment and Re-Pitching",
  "Leak Repair",
  "Fascia Repair",
  "Soffit Repair",
  "Rain Chain Installation",
  "Rainwater Diversion",
  "Splash Block Installation",
  "Underground Downspout Drainage",
  "Residential Gutter Services",
  "Roof Cleaning",
  "House Washing",
  "Soft Washing",
  "Driveway Cleaning",
  "Concrete Cleaning",
  "Deck Cleaning",
  "Fence Cleaning",
];

export type PageSeo = {
  path: string;
  title: string;
  description: string;
  ogImage?: string;
  jsonLd?: object[];
};

export function serviceSlug(service: Service) {
  return service.slug;
}

function fullUrl(path: string) {
  if (path === "/") return `${SITE_ORIGIN}/`;
  return `${SITE_ORIGIN}${path.replace(/\/+$/, "")}`;
}

// Stable, build-time list of all routes that should be pre-rendered, sitemapped,
// and discoverable. Used by both the React router (via generated arrays) and the
// build-time prerender + sitemap scripts.
export function getStaticRoutes(): PageSeo[] {
  const home: PageSeo = {
    path: "/",
    title:
      "Gutter-It LLC | Gutter Cleaning, Installation & Repair in Chattanooga, TN",
    description:
      "Family-owned gutter cleaning, repair, seamless installation, and pressure washing in Chattanooga, TN. Licensed, insured, free quotes. Cleaning from $100.",
    jsonLd: [
      localBusinessSchema(),
      faqPageSchema(FAQ),
      websiteSchema(),
    ],
  };

  const services: PageSeo = {
    path: "/services",
    title: "Services & Pricing | Gutter-It LLC, Chattanooga TN",
    description:
      "Gutter cleaning from $100, repair from $50, seamless installation, and pressure washing in Chattanooga, TN. Honest pricing, solid quotes, no surprises.",
    jsonLd: [
      breadcrumbSchema([
        { name: "Home", path: "/" },
        { name: "Services", path: "/services" },
      ]),
      ...SERVICES.map(serviceSchema),
    ],
  };

  const servicePages: PageSeo[] = SERVICES.map((service) => {
    const detail = SERVICE_DETAILS[service.slug];
    return {
      path: `/services/${service.slug}`,
      title: detail.seo.metaTitle,
      description: detail.seo.metaDescription,
      ogImage: `${SITE_ORIGIN}${detail.hero.image}`,
      jsonLd: [
        breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
          { name: service.title, path: `/services/${service.slug}` },
        ]),
        serviceDetailSchema(service.slug, service),
        ...(detail.faq.length ? [faqPageSchema(detail.faq)] : []),
        ...(service.slug === "installation"
          ? [installationHowToSchema(detail)]
          : []),
      ],
    };
  });

  const about: PageSeo = {
    path: "/about",
    title: "About | Gutter-It LLC, Chattanooga TN",
    description:
      "Family-owned, locally operated gutter and pressure washing company in Chattanooga. Meet Jakob, learn our standards, and see why neighbors hire us back.",
    jsonLd: [
      breadcrumbSchema([
        { name: "Home", path: "/" },
        { name: "About", path: "/about" },
      ]),
    ],
  };

  const gutterCleaningChattanooga: PageSeo = {
    path: "/gutter-cleaning-chattanooga",
    title:
      "Gutter Cleaning in Chattanooga, TN | From $100 | Gutter-It LLC",
    description:
      "Local, family-owned gutter cleaning in Chattanooga, TN from $100. Every section cleared by hand, downspouts flushed, debris hauled. Same-day callback.",
    ogImage: `${SITE_ORIGIN}/images/jobs/cleaning/leavesingutter.jpg`,
    jsonLd: [
      breadcrumbSchema([
        { name: "Home", path: "/" },
        { name: "Gutter Cleaning in Chattanooga", path: "/gutter-cleaning-chattanooga" },
      ]),
      localServiceSchema({
        path: "/gutter-cleaning-chattanooga",
        name: "Gutter Cleaning in Chattanooga, TN",
        serviceType: "Gutter Cleaning",
        description:
          "Hand gutter cleaning for homes in Chattanooga and Hamilton County: every section cleared, downspouts flushed, debris hauled away. From $100.",
        price: "100",
      }),
      faqPageSchema(LOCAL_GUTTER_CLEANING_CHATTANOOGA.faq),
    ],
  };

  const faq: PageSeo = {
    path: "/faq",
    title: "FAQ | Gutter-It LLC, Chattanooga TN",
    description:
      "Common gutter questions in Chattanooga: cleaning frequency and cost, repair vs. replacement, gutter guards, service area, and getting a free quote.",
    jsonLd: [
      breadcrumbSchema([
        { name: "Home", path: "/" },
        { name: "FAQ", path: "/faq" },
      ]),
      faqPageSchema(FAQ_FULL),
    ],
  };

  const contact: PageSeo = {
    path: "/contact",
    title: "Contact | Gutter-It LLC, Chattanooga TN",
    description:
      "Call (423) 475-3158, email jakobdemoss@gutter-itllc.com, or request a free quote from Gutter-It LLC in Chattanooga, TN.",
    jsonLd: [
      breadcrumbSchema([
        { name: "Home", path: "/" },
        { name: "Contact", path: "/contact" },
      ]),
    ],
  };

  // Silo hub display names + slugs, used for breadcrumb hierarchy on the
  // extended service pages.
  const SILO_HUB = {
    gutters: { name: "Residential Gutter Services", slug: "residential-gutter-services" },
    exterior: { name: "Exterior Cleaning", slug: "exterior-cleaning" },
  } as const;

  const extraServicePages: PageSeo[] = EXTRA_SERVICES.map((s) => {
    const path = serviceUrl(s.slug, s.silo);
    const hub = SILO_HUB[s.silo];
    const isHub = s.slug === hub.slug;
    const crumbs = isHub
      ? [
          { name: "Home", path: "/" },
          { name: hub.name, path },
        ]
      : [
          { name: "Home", path: "/" },
          { name: hub.name, path: serviceUrl(hub.slug, s.silo) },
          { name: s.title, path },
        ];
    return {
      path,
      title: s.seo.metaTitle,
      description: s.seo.metaDescription,
      ogImage: `${SITE_ORIGIN}${s.hero.image}`,
      jsonLd: [
        breadcrumbSchema(crumbs),
        extraServiceSchema(s.slug, s.silo, s.title, s.seo.metaDescription),
        ...(s.faq.length ? [faqPageSchema(s.faq)] : []),
      ],
    };
  });

  const locationsIndex: PageSeo = {
    path: "/service-areas",
    title: "Service Areas | Gutter-It LLC, Chattanooga TN",
    description:
      "Gutter cleaning, repair, installation, and pressure washing across the Chattanooga metro — Hixson, Red Bank, Soddy-Daisy, North Georgia, and beyond.",
    jsonLd: [
      breadcrumbSchema([
        { name: "Home", path: "/" },
        { name: "Service Areas", path: "/service-areas" },
      ]),
    ],
  };

  const locationPages: PageSeo[] = LOCATIONS.map((loc) => ({
    path: locationUrl(loc.slug),
    title: loc.seo.metaTitle,
    description: loc.seo.metaDescription,
    ogImage: `${SITE_ORIGIN}${loc.hero.image}`,
    jsonLd: [
      breadcrumbSchema([
        { name: "Home", path: "/" },
        { name: "Service Areas", path: "/service-areas" },
        { name: `${loc.city}, ${loc.state}`, path: locationUrl(loc.slug) },
      ]),
      locationServiceSchema(loc),
      ...(loc.faq.length ? [faqPageSchema(loc.faq)] : []),
    ],
  }));

  return [
    home,
    services,
    ...servicePages,
    ...extraServicePages,
    locationsIndex,
    ...locationPages,
    gutterCleaningChattanooga,
    about,
    faq,
    contact,
  ];
}

export function getAllRoutes(): PageSeo[] {
  return getStaticRoutes();
}

// ---------- Structured-data builders ----------

function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "RoofingContractor",
    "@id": `${SITE_ORIGIN}/#business`,
    name: BUSINESS.name,
    image: `${SITE_ORIGIN}/gutterit.logo.png`,
    url: SITE_ORIGIN,
    telephone: BUSINESS.phone,
    email: BUSINESS.email,
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: BUSINESS.address.street,
      addressLocality: BUSINESS.address.city,
      addressRegion: BUSINESS.address.region,
      postalCode: BUSINESS.address.postal,
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 35.0456,
      longitude: -85.3097,
    },
    // NOTE: no aggregateRating here. A self-serving rating on the business
    // entity (without genuine Review nodes visible on-page) violates Google's
    // structured-data review policy and gets flagged invalid in Search Console.
    // Reviews live on the Google Business Profile instead.
    areaServed: AREAS.map((c) => `${c}, TN`),
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        opens: "07:00",
        closes: "19:00",
      },
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Gutter & Exterior Services",
      itemListElement: [
        ...SERVICES.map((s) => ({
          "@type": "Offer",
          itemOffered: { "@type": "Service", name: s.title },
          ...(s.slug === "cleaning"
            ? { price: "100", priceCurrency: "USD" }
            : s.slug === "gutter-repair"
              ? { price: "50", priceCurrency: "USD" }
              : {}),
        })),
        ...GBP_ADDITIONAL_SERVICES.map((name) => ({
          "@type": "Offer",
          itemOffered: { "@type": "Service", name },
        })),
      ],
    },
  };
}

function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: BUSINESS.name,
    url: SITE_ORIGIN,
  };
}

function faqPageSchema(items: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((it) => ({
      "@type": "Question",
      name: it.q,
      acceptedAnswer: { "@type": "Answer", text: it.a },
    })),
  };
}

function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: fullUrl(it.path),
    })),
  };
}

function serviceSchema(s: Service) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: s.title,
    provider: { "@id": `${SITE_ORIGIN}/#business` },
    areaServed: AREAS.map((c) => `${c}, TN`),
    description: s.blurb,
    ...(s.slug === "cleaning" || s.slug === "gutter-repair"
      ? {
          offers: {
            "@type": "Offer",
            price: s.slug === "cleaning" ? "100" : "50",
            priceCurrency: "USD",
          },
        }
      : {}),
  };
}

// Schema for standalone local landing pages — a Service tied to the
// LocalBusiness with explicit areaServed cities so search engines read it as a
// location-targeted offering.
function localServiceSchema(opts: {
  path: string;
  name: string;
  serviceType: string;
  description: string;
  price?: string;
}) {
  const url = fullUrl(opts.path);
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${url}#service`,
    name: opts.name,
    serviceType: opts.serviceType,
    url,
    description: opts.description,
    provider: { "@id": `${SITE_ORIGIN}/#business` },
    areaServed: AREAS.map((c) => ({
      "@type": "City",
      name: `${c}, TN`,
    })),
    ...(opts.price
      ? {
          offers: {
            "@type": "Offer",
            price: opts.price,
            priceCurrency: "USD",
          },
        }
      : {}),
  };
}

// Schema for a location landing page. A Service tied to the LocalBusiness,
// areaServed scoped to that specific city (with correct state) plus the page's
// own geo coordinates.
function locationServiceSchema(loc: LocationContent) {
  const url = `${SITE_ORIGIN}${locationUrl(loc.slug)}`;
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${url}#service`,
    name: `Gutter Services in ${loc.city}, ${loc.state}`,
    serviceType: "Gutter Cleaning, Repair & Installation",
    url,
    description: loc.seo.metaDescription,
    provider: { "@id": `${SITE_ORIGIN}/#business` },
    areaServed: {
      "@type": "City",
      name: `${loc.city}, ${loc.state}`,
      ...(loc.geo
        ? {
            geo: {
              "@type": "GeoCoordinates",
              latitude: loc.geo.lat,
              longitude: loc.geo.lng,
            },
          }
        : {}),
    },
  };
}

// Schema for the extended (Core-30) service pages. A Service tied to the
// LocalBusiness with the full areaServed list.
function extraServiceSchema(
  slug: string,
  silo: "gutters" | "exterior",
  name: string,
  description: string,
) {
  const url = `${SITE_ORIGIN}${serviceUrl(slug, silo)}`;
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${url}#service`,
    serviceType: name,
    name,
    url,
    provider: { "@id": `${SITE_ORIGIN}/#business` },
    areaServed: AREAS.map((c) => `${c}, TN`),
    description,
  };
}

function installationHowToSchema(detail: ServiceDetail) {
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How a seamless gutter install runs in Chattanooga",
    description: detail.hero.lede,
    step: detail.process.steps.map((step, i) => ({
      "@type": "HowToStep",
      position: i + 1,
      name: step.title,
      text: step.body,
    })),
  };
}

function serviceDetailSchema(slug: ServiceCategory, s: Service) {
  const url = `${SITE_ORIGIN}/services/${slug}`;
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${url}#service`,
    serviceType: s.title,
    name: s.title,
    url,
    provider: { "@id": `${SITE_ORIGIN}/#business` },
    areaServed: AREAS.map((c) => `${c}, TN`),
    description: s.blurb,
    ...(slug === "cleaning" || slug === "gutter-repair"
      ? {
          offers: {
            "@type": "Offer",
            price: slug === "cleaning" ? "100" : "50",
            priceCurrency: "USD",
          },
        }
      : {}),
  };
}

