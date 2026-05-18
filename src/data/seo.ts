import { SERVICES, type Service } from "./services";
import { AREAS } from "./areas";
import { BUSINESS } from "./business";
import { FAQ } from "./faq";

export const SITE_ORIGIN = "https://gutter-itllc.com";

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
  return `${SITE_ORIGIN}${path.endsWith("/") ? path : path + "/"}`.replace(
    /\/+$/,
    path === "/" ? "/" : "/",
  );
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
      "Gutter cleaning from $100, repair from $50, seamless installation, and pressure washing in Chattanooga, TN. Honest pricing, written quotes, no surprises.",
    jsonLd: [
      breadcrumbSchema([
        { name: "Home", path: "/" },
        { name: "Services", path: "/services" },
      ]),
      ...SERVICES.map(serviceSchema),
    ],
  };

  const gallery: PageSeo = {
    path: "/gallery",
    title: "Gallery | Gutter-It LLC, Chattanooga TN",
    description:
      "Before-and-after gutter cleaning, installation, repair, and pressure washing projects across Chattanooga and Hamilton County.",
    jsonLd: [
      breadcrumbSchema([
        { name: "Home", path: "/" },
        { name: "Gallery", path: "/gallery" },
      ]),
    ],
  };

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

  return [home, services, gallery, about, contact];
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
      itemListElement: SERVICES.map((s) => ({
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: s.title },
        ...(s.slug === "cleaning"
          ? { price: "100", priceCurrency: "USD" }
          : s.slug === "repair"
            ? { price: "50", priceCurrency: "USD" }
            : {}),
      })),
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

