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

// Additional service names from the Google Business Profile listing that
// don't map 1:1 to our top-level service slugs, but should still appear in
// the LocalBusiness OfferCatalog so search engines see us offering them.
// Keep in sync with GBP_ADDITIONAL_SERVICES in src/data/seo.ts.
export const GBP_ADDITIONAL_SERVICES = [
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

export const SERVICES = [
  {
    slug: "installation",
    title: "Gutter Installation",
    blurb:
      "Seamless aluminum gutters formed on your driveway, cut to fit your roof line exactly.",
  },
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
    slug: "gutter-guards",
    title: "Gutter Guards",
    blurb:
      "Leaf-protection systems installed honestly — we'll tell you when they make sense and when they don't.",
  },
  {
    slug: "pressure-washing",
    title: "Pressure Washing",
    blurb:
      "Gutter exteriors, driveways, sidewalks, and siding — cleaned without damage.",
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
      itemListElement: [
        ...SERVICES.map((s) => ({
          "@type": "Offer",
          itemOffered: { "@type": "Service", name: s.title },
          ...(s.price
            ? { price: s.price.value, priceCurrency: s.price.currency }
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
  return { "@context": "https://schema.org", "@type": "WebSite", name: BUSINESS.name, url: SITE_ORIGIN };
}

function faqPageSchema(items = FAQ) {
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

function installationHowToSchema(howTo) {
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How a seamless gutter install runs in Chattanooga",
    description: howTo.description,
    step: howTo.steps.map((step, i) => ({
      "@type": "HowToStep",
      position: i + 1,
      name: step.title,
      text: step.body,
    })),
  };
}

function serviceDetailSchema(s) {
  const url = `${SITE_ORIGIN}/services/${s.slug}/`;
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

// Mirror of SERVICE_DETAILS[slug].seo + .faq from src/data/serviceDetails.ts.
// Update both files when copy changes.
export const SERVICE_PAGE_META = {
  installation: {
    title:
      "Gutter Installation in Chattanooga, TN | Seamless Aluminum | Gutter-It LLC",
    description:
      "Seamless aluminum gutter installation in Chattanooga, TN. Formed on your driveway, hidden hangers, written 5-year warranty. Free on-site quote.",
    image: "/images/jobs/installation/gutter.jpg",
    howTo: {
      description:
        "Aluminum gutters cut to fit your roof line in one continuous run — no shop-cut joints to fail in five years.",
      steps: [
        {
          title: "Walk-through and final measurement",
          body:
            "We re-walk the house, confirm color and downspout placement with you, and lay drop cloths or move planters out of the drip zone.",
        },
        {
          title: "Tear-off and fascia check",
          body:
            "Old gutters come down in sections. We inspect the fascia and call you over if we find rot — repair or replacement gets agreed before we form anything new.",
        },
        {
          title: "Form gutters on the driveway",
          body:
            "Coil aluminum runs through the brake machine and comes out as one continuous gutter, cut to the exact length of the roof above it. Corners are cut and sealed on the ground.",
        },
        {
          title: "Hang the new run",
          body:
            "Pitch is set toward the downspouts — usually a quarter-inch of drop per ten feet. Hidden hangers go in every 24 inches with #10 lag screws into the fascia.",
        },
        {
          title: "Downspouts, elbows, and splash blocks",
          body:
            "Downspouts get strapped to the wall every six feet. Elbows handle the kick-out at the bottom. Splash blocks or buried extensions where water needs to go away from the foundation.",
        },
        {
          title: "Cleanup and walk-through",
          body:
            "We pick up every screw, every aluminum scrap, and every piece of old debris. Then we walk the job with you and water-test the runs with a hose if you want it.",
        },
      ],
    },
    faq: [
      {
        q: "How much does a full seamless gutter installation cost?",
        a: "For aluminum seamless gutters in Chattanooga, expect roughly $5.40–$9.40 per linear foot installed — so a typical 150-foot home runs around $800–$1,400. We give a fixed written quote on-site after we measure. No padded estimates over the phone.",
      },
      {
        q: "How long does a gutter install take?",
        a: "Most one-story homes are a single-day job. Two-story homes or jobs with fascia repair run into a second day. We don't leave a job half-finished overnight — if it's not done, we come back the next morning.",
      },
      {
        q: "What color options are available?",
        a: "Standard aluminum coil comes in about a dozen colors — white, almond, clay, tan, brown, dark bronze, black, and a few in between. We bring the color chart on the quote visit so you can match it to your trim or siding before we order.",
      },
      {
        q: "Do you offer a warranty?",
        a: "Yes. Five-year workmanship warranty in writing on every install. That covers any seam we cut, any hanger we set, and any fastener we drove. The aluminum itself carries the manufacturer's finish warranty — usually 20+ years.",
      },
      {
        q: "Can you install on a home with no existing gutters?",
        a: "Yes, that's actually easier than a tear-off because we're not undoing anyone else's work. We mark hanger spacing, set pitch toward where you want the water to go, and run the system from scratch.",
      },
      {
        q: "What's the difference between sectional and seamless gutters?",
        a: "Sectional gutters come in 10-foot store-bought pieces that get joined with sealed connectors. Every connector is a future leak. Seamless gutters are formed in one continuous run on-site, so there are no joints between corners. They cost a little more upfront and they're worth every dollar.",
      },
    ],
  },
  cleaning: {
    title:
      "Gutter Cleaning in Chattanooga, TN | From $100 | Gutter-It LLC",
    description:
      "Hand-clean gutter service in Chattanooga from $100. Every section cleared, downspouts flushed, debris hauled away. Same-day callback, free quotes.",
    image: "/images/jobs/cleaning/leavesingutter.jpg",
    faq: [
      {
        q: "How often should I clean my gutters in Chattanooga?",
        a: "For most Chattanooga homes with mature trees, twice a year — once in late spring after the oaks and maples drop pollen and seed pods, and again in late fall after the leaves come down. Homes with lots of pines or hemlocks usually need a third visit because needles fall year-round and pack into downspouts.",
      },
      {
        q: "How much does gutter cleaning cost?",
        a: "Most single-story homes in the Chattanooga area run $100–$175. Two-story homes are typically $150–$250 depending on roof line and accessibility. We give a firm number on-site before we start — no surprise add-ons after the work is done.",
      },
      {
        q: "Do I need to be home for the cleaning?",
        a: "No. We work outside the house. If we need to access a side gate or pet area, just let us know when you book. Payment can be left, mailed, or done by card after we send the invoice.",
      },
      {
        q: "What if my downspouts are clogged underground?",
        a: "If we run a hose into the downspout and water doesn't come out the bottom, there's a blockage below the ground we can't reach with the cleaning tools we bring. We'll tell you, show you, and quote the fix separately. Most underground blockages can be cleared with a longer snake on a follow-up visit.",
      },
      {
        q: "Do you clean the inside of the gutter or just the top?",
        a: "Inside. Every section gets hand-cleared. We're not running a leaf blower along the top and calling it done.",
      },
    ],
  },
  repair: {
    title:
      "Gutter Repair in Chattanooga, TN | From $50 | Gutter-It LLC",
    description:
      "Gutter repair in Chattanooga from $50. Sagging sections, leaky seams, broken downspouts. We'll fix it instead of selling you a full replacement.",
    image: "/images/jobs/repair/undergutter.jpg",
    faq: [
      {
        q: "Do I really need new gutters, or can mine just be repaired?",
        a: "Most of the time, a $50–$200 repair handles it. Sagging sections, leaky seams, separated downspouts — those are repair jobs. Full replacement only makes sense when the gutters themselves are corroded through, undersized for the roof line, or pitched so badly that water sits and rots the fascia. We'll tell you straight.",
      },
      {
        q: "Can you fix gutters someone else installed?",
        a: "Yes. We don't care who installed them — we'll work on any aluminum or steel system. Older copper or galvanized systems we'll look at case-by-case.",
      },
      {
        q: "How fast can you get out for storm damage?",
        a: "Storm damage and active leaks jump the line. Call us — don't use the form — if water is actively making your house wet. Most storm calls we're out within 24–48 hours.",
      },
      {
        q: "Will the repair match my existing gutter color?",
        a: "We bring matching aluminum stock for the common colors. If yours is a discontinued or unusual color, we'll get as close as we can and tell you upfront if there'll be a visible difference.",
      },
    ],
  },
  "gutter-guards": {
    title:
      "Gutter Guards in Chattanooga, TN | Honest Advice | Gutter-It LLC",
    description:
      "Gutter guard installation in Chattanooga, TN. Micro-mesh and reverse-curve options. Straight talk on when guards make sense and when they don't.",
    image: "/images/jobs/installation/gutter.jpg",
    faq: [
      {
        q: "Are gutter guards (like LeafFilter) worth it?",
        a: "Honest answer: it depends on your trees and your budget. Good guards reduce cleaning frequency but they don't eliminate it — pine needles, shingle grit, and roof tar still build up on top. For most homes, two cleanings a year is cheaper than a $3,000+ guard install. We're happy to install them if you want them, but we won't push them on you.",
      },
      {
        q: "What's the difference between micro-mesh and reverse-curve?",
        a: "Micro-mesh has a fine stainless steel screen that blocks almost everything but lets water through. Reverse-curve uses surface tension — water curves around a lip and into the gutter while leaves shed off the front. Micro-mesh blocks more debris; reverse-curve self-cleans better on steep roofs.",
      },
      {
        q: "Do guards void my roof warranty?",
        a: "Ours don't, because we don't touch the roofing. We attach guards to the gutter, never under the shingles. If a guard company is lifting shingles to install, that can void the roof warranty — ask before you sign.",
      },
      {
        q: "Will I really never have to clean my gutters again?",
        a: "No, and don't believe anyone who says so. Guards reduce cleaning dramatically — usually from two or three visits a year to one — but the tops of the guards still collect debris and need a periodic brush-off. We're honest about this on every quote.",
      },
    ],
  },
  "pressure-washing": {
    title:
      "Pressure Washing in Chattanooga, TN | Gutters, Driveways, Siding | Gutter-It LLC",
    description:
      "Pressure washing in Chattanooga: gutter exteriors, driveways, sidewalks, and siding. Cleaned without damage. Free quote, locally owned.",
    image: "/images/jobs/pressure-washing/pressurewashing.jpg",
    faq: [
      {
        q: "Will pressure washing damage my siding?",
        a: "Not the way we do it. House siding gets a soft-wash — low pressure plus the right detergent. High-pressure blasting can drive water behind vinyl or chip paint, so we don't do that on siding.",
      },
      {
        q: "Can you get oil stains out of concrete?",
        a: "Most fresh oil stains come up with degreaser and hot water. Old, set-in stains may lighten but not disappear entirely. We'll tell you on-site what to expect.",
      },
      {
        q: "Do you use bleach or harsh chemicals?",
        a: "We use a sodium hypochlorite-based solution for organic growth (mildew, algae) on siding and concrete — diluted to safe levels and rinsed off thoroughly. For driveways we use a surface cleaner with degreaser. Nothing we leave behind.",
      },
      {
        q: "Can you wash the gutter exteriors during a gutter cleaning visit?",
        a: "Yes, and it's the most common bundle we do. Adding gutter exterior wash to a cleaning visit usually adds $75–$125 depending on the linear footage.",
      },
    ],
  },
};

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
      "Gutter cleaning from $100, repair from $50, seamless installation, and pressure washing in Chattanooga, TN. Honest pricing, Solid quotes, no surprises.",
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

  const servicePages = SERVICES.map((s) => {
    const meta = SERVICE_PAGE_META[s.slug];
    return {
      path: `/services/${s.slug}`,
      title: meta.title,
      description: meta.description,
      ogImage: meta.image ? `${SITE_ORIGIN}${meta.image}` : undefined,
      priority: 0.85,
      changefreq: "monthly",
      jsonLd: [
        breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
          { name: s.title, path: `/services/${s.slug}` },
        ]),
        serviceDetailSchema(s),
        ...(meta.faq.length ? [faqPageSchema(meta.faq)] : []),
        ...(meta.howTo ? [installationHowToSchema(meta.howTo)] : []),
      ],
    };
  });

  return [home, services, ...servicePages, about, contact];
}
