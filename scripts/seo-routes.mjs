// Build-time mirror of src/data/seo.ts — kept in plain JS so Node scripts can
// import it without a TS toolchain. If you add a new service or static page,
// update both this file and src/data/seo.ts.

export const SITE_ORIGIN = "https://gutter-itllc.com";

export const AREAS = [
  "Chattanooga",
  "Hixson",
  "East Brainerd",
  "Ooltewah",
  "Signal Mountain",
  "Lookout Mountain",
  "Soddy-Daisy",
  "Red Bank",
  "East Ridge",
  "Collegedale",
];

export const SERVICES = [
  {
    slug: "cleaning",
    title: "Gutter Cleaning",
    blurb:
      "Hand-clear leaves, pine needles, and debris. Flush every downspout. Bag and haul away.",
    price: { value: "100", currency: "USD" },
  },
  {
    slug: "repair",
    title: "Gutter Repair",
    blurb:
      "Sagging sections, leaky seams, broken downspouts — fixed without selling you a full replacement.",
    price: { value: "50", currency: "USD" },
  },
  {
    slug: "installation",
    title: "Gutter Installation",
    blurb:
      "Seamless aluminum gutters formed on your driveway, cut to fit your roof line exactly.",
  },
  {
    slug: "pressure-washing",
    title: "Pressure Washing",
    blurb:
      "Driveways, sidewalks, siding, and gutters cleaned without damage.",
  },
];

export const BUSINESS = {
  name: "Gutter-It LLC",
  phone: "(423) 475-3158",
  email: "jakobdemoss@gutter-itllc.com",
  street: "252 Bass Road",
  city: "Chattanooga",
  region: "TN",
  postal: "37406",
};

export const FAQ = [
  {
    q: "How often should I clean my gutters in Chattanooga?",
    a: "For most Chattanooga homes with mature trees, twice a year — once in late spring after the oaks and maples drop pollen and seed pods, and again in late fall after the leaves come down. Homes with lots of pines or hemlocks usually need a third visit because needles fall year-round and pack into downspouts.",
  },
  {
    q: "How much does gutter cleaning cost?",
    a: "Most single-story homes in the Chattanooga area run $100–$175. Two-story homes are typically $150–$250 depending on roof line and accessibility. We give a firm number on-site before we start — no surprise add-ons after the work is done.",
  },
  {
    q: "Do I really need new gutters, or can mine just be repaired?",
    a: "Most of the time, a $50–$200 repair handles it. Sagging sections, leaky seams, separated downspouts — those are repair jobs. Full replacement only makes sense when the gutters themselves are corroded through, undersized for the roof line, or pitched so badly that water sits and rots the fascia. We'll tell you straight.",
  },
  {
    q: "Are gutter guards (like LeafFilter) worth it?",
    a: "Honest answer: it depends on your trees and your budget. Good guards reduce cleaning frequency but they don't eliminate it — pine needles, shingle grit, and roof tar still build up on top. For most homes, two cleanings a year is cheaper than a $3,000+ guard install. We're happy to install them if you want them, but we won't push them on you.",
  },
  {
    q: "Why does my gutter overflow during heavy rain even when it's clean?",
    a: "Usually one of three things: the gutters are undersized for your roof area, the downspouts are clogged below the visible section, or the pitch is wrong so water pools instead of flowing. We diagnose all three on-site.",
  },
  {
    q: "How fast can you get out for a quote?",
    a: "Same-day callback when you reach out, and most on-site quotes happen within 2–4 business days. Storm damage and active leaks jump the line — call us, don't fill out the form, if it's actively making your house wet.",
  },
];

function fullUrl(path) {
  if (path === "/") return `${SITE_ORIGIN}/`;
  return `${SITE_ORIGIN}${path.endsWith("/") ? path : path + "/"}`;
}

// ----- structured-data builders -----

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
      streetAddress: BUSINESS.street,
      addressLocality: BUSINESS.city,
      addressRegion: BUSINESS.region,
      postalCode: BUSINESS.postal,
      addressCountry: "US",
    },
    geo: { "@type": "GeoCoordinates", latitude: 35.0456, longitude: -85.3097 },
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
        ...(s.price
          ? { price: s.price.value, priceCurrency: s.price.currency }
          : {}),
      })),
    },
  };
}

function websiteSchema() {
  return { "@context": "https://schema.org", "@type": "WebSite", name: BUSINESS.name, url: SITE_ORIGIN };
}

function faqPageSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQ.map((it) => ({
      "@type": "Question",
      name: it.q,
      acceptedAnswer: { "@type": "Answer", text: it.a },
    })),
  };
}

function breadcrumbSchema(items) {
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

function serviceSchema(s) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: s.title,
    provider: { "@id": `${SITE_ORIGIN}/#business` },
    areaServed: AREAS.map((c) => `${c}, TN`),
    description: s.blurb,
    ...(s.price
      ? {
          offers: {
            "@type": "Offer",
            price: s.price.value,
            priceCurrency: s.price.currency,
          },
        }
      : {}),
  };
}

export function getAllRoutes() {
  const home = {
    path: "/",
    title:
      "Gutter-It LLC | Gutter Cleaning, Installation & Repair in Chattanooga, TN",
    description:
      "Family-owned gutter and pressure washing in Chattanooga, TN. Cleaning from $100, repair from $50, seamless installation, pressure washing. Licensed, insured, free quotes.",
    priority: 1.0,
    changefreq: "weekly",
    jsonLd: [localBusinessSchema(), faqPageSchema(), websiteSchema()],
  };

  const services = {
    path: "/services",
    title: "Services & Pricing | Gutter-It LLC, Chattanooga TN",
    description:
      "Gutter cleaning from $100, repair from $50, seamless installation, and pressure washing in Chattanooga, TN. Honest pricing, written quotes, no surprises.",
    priority: 0.9,
    changefreq: "monthly",
    jsonLd: [
      breadcrumbSchema([
        { name: "Home", path: "/" },
        { name: "Services", path: "/services" },
      ]),
      ...SERVICES.map(serviceSchema),
    ],
  };

  const gallery = {
    path: "/gallery",
    title: "Gallery | Gutter-It LLC, Chattanooga TN",
    description:
      "Before-and-after gutter cleaning, installation, repair, and pressure washing projects across Chattanooga and Hamilton County.",
    priority: 0.7,
    changefreq: "monthly",
    jsonLd: [
      breadcrumbSchema([
        { name: "Home", path: "/" },
        { name: "Gallery", path: "/gallery" },
      ]),
    ],
  };

  const about = {
    path: "/about",
    title: "About | Gutter-It LLC, Chattanooga TN",
    description:
      "Family-owned, locally operated gutter and pressure washing company in Chattanooga. Meet Jakob, learn our standards, and see why neighbors hire us back.",
    priority: 0.6,
    changefreq: "monthly",
    jsonLd: [
      breadcrumbSchema([
        { name: "Home", path: "/" },
        { name: "About", path: "/about" },
      ]),
    ],
  };

  const contact = {
    path: "/contact",
    title: "Contact | Gutter-It LLC, Chattanooga TN",
    description:
      "Call (423) 475-3158, email jakobdemoss@gutter-itllc.com, or request a free quote from Gutter-It LLC in Chattanooga, TN.",
    priority: 0.8,
    changefreq: "monthly",
    jsonLd: [
      breadcrumbSchema([
        { name: "Home", path: "/" },
        { name: "Contact", path: "/contact" },
      ]),
    ],
  };

  return [home, services, gallery, about, contact];
}
