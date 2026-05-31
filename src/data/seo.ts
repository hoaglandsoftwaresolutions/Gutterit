import { SERVICES, type Service, type ServiceCategory } from "./services";
import { SERVICE_DETAILS, type ServiceDetail } from "./serviceDetails";
import { AREAS } from "./areas";
import { BUSINESS } from "./business";
import { FAQ } from "./faq";

export const SITE_ORIGIN = "https://gutteritllc.com";

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
      "Family-owned gutter and pressure washing in Chattanooga, TN. Cleaning from $100, repair from $50, seamless installation, pressure washing. Licensed, insured, free quotes.",
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

  return [home, services, ...servicePages, about, contact];
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
            : s.slug === "repair"
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
    ...(s.slug === "cleaning" || s.slug === "repair"
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
    ...(slug === "cleaning" || slug === "repair"
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

