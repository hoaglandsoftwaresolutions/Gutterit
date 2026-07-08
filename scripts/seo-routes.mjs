// Build-time mirror of src/data/seo.ts — kept in plain JS so Node scripts can
// import it without a TS toolchain. If you add a new service or static page,
// update both this file and src/data/seo.ts.

export const SITE_ORIGIN = "https://www.gutteritllc.com";

// URL helpers — KEEP IN SYNC with serviceUrl / locationUrl in
// src/data/extraServices.ts. Both must produce identical paths.
export const SILO_ROOT = {
  gutters: "/residential-gutter-services",
  exterior: "/exterior-cleaning",
};
const HUB_SLUG = {
  gutters: "residential-gutter-services",
  exterior: "exterior-cleaning",
};
export function serviceUrl(slug, silo) {
  const root = SILO_ROOT[silo];
  return slug === HUB_SLUG[silo] ? root : `${root}/${slug}`;
}
export const SERVICE_AREAS_ROOT = "/service-areas";
export function locationUrl(slug) {
  return `${SERVICE_AREAS_ROOT}/${slug}`;
}

// Which extra-service slugs belong to the exterior silo (everything else in
// EXTRA_SERVICES_META is gutters). KEEP IN SYNC with the `silo` fields in
// src/data/extraServices.ts.
const EXTERIOR_SLUGS = new Set([
  "exterior-cleaning",
  "house-washing",
  "roof-cleaning",
  "driveway-cleaning",
  "deck-fence-cleaning",
]);
function siloFor(slug) {
  return EXTERIOR_SLUGS.has(slug) ? "exterior" : "gutters";
}
const SILO_HUB = {
  gutters: { name: "Residential Gutter Services", slug: "residential-gutter-services" },
  exterior: { name: "Exterior Cleaning", slug: "exterior-cleaning" },
};

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
    slug: "gutter-repair",
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

// Extended FAQ used on the dedicated /faq page. Keep in sync with FAQ_FULL in
// src/data/faq.ts.
export const FAQ_FULL = [
  ...FAQ,
  {
    q: "How much does a full seamless gutter installation cost?",
    a: "For aluminum seamless gutters in Chattanooga, expect roughly $5.40–$9.40 per linear foot installed — so a typical 150-foot home runs around $800–$1,400. We give a fixed written quote on-site after we measure. No padded estimates over the phone.",
  },
  {
    q: "What areas do you serve?",
    a: "We're based in Chattanooga and serve the surrounding Hamilton County area — including Hixson, East Brainerd, Ooltewah, Signal Mountain, Lookout Mountain, Soddy-Daisy, Red Bank, East Ridge, and Collegedale. If you're nearby and not on that list, call us anyway and we'll let you know.",
  },
  {
    q: "Are you licensed and insured?",
    a: "Yes. Gutter-It LLC is a licensed, insured, locally owned business. If anything goes wrong on your property, you're covered — and we're happy to show proof of insurance before we start.",
  },
  {
    q: "Do you offer free quotes?",
    a: "Yes. Quotes are free and we give you a firm, written number on-site before any work begins. We don't do high-pressure sales or padded phone estimates.",
  },
  {
    q: "How do I get on the schedule?",
    a: "Call or text (423) 475-3158, email jakobdemoss@gutter-itllc.com, or request a quote through the contact page. You'll get a same-day callback, and most on-site quotes happen within 2–4 business days.",
  },
  {
    q: "What's the difference between pressure washing and soft washing?",
    a: "Pressure washing uses high-pressure water for hard surfaces like driveways and concrete. Soft washing uses low pressure plus a cleaning solution for delicate surfaces like roofs, siding, and painted areas — so we don't damage shingles or force water behind your siding. We choose the right method for each surface.",
  },
  {
    q: "Can you clean my gutters and pressure wash on the same visit?",
    a: "Yes, bundling is the most common job we do. Adding a gutter exterior wash to a cleaning visit usually adds $75–$125 depending on the linear footage, and combining services saves you a second trip charge.",
  },
];

// FAQ for the /gutter-cleaning-chattanooga local landing page. Keep in sync
// with LOCAL_GUTTER_CLEANING_CHATTANOOGA.faq in src/data/localPages.ts.
export const FAQ_GUTTER_CLEANING_CHATTANOOGA = [
  {
    q: "How often should I clean my gutters in Chattanooga?",
    a: "Twice a year for most Chattanooga homes with mature trees — once in late spring after the oaks and maples drop pollen and seed pods, and again in late fall after the leaves come down. Homes under pine or hemlock (common on Signal and Lookout Mountain) usually need a third visit because needles fall year-round.",
  },
  {
    q: "How much does gutter cleaning cost in Chattanooga?",
    a: "Most single-story Chattanooga homes run $100–$175, and two-story homes $150–$250 depending on roof line and accessibility. We give a firm number on-site before we start — no surprise add-ons.",
  },
  {
    q: "What Chattanooga areas do you serve?",
    a: "Chattanooga, Hixson, East Brainerd, Ooltewah, Signal Mountain, Lookout Mountain, Soddy-Daisy, Red Bank, East Ridge, and Collegedale — basically all of Hamilton County. If you're nearby and not listed, call and we'll let you know.",
  },
  {
    q: "Do I need to be home for the cleaning?",
    a: "No. We work outside the house. Just let us know about side gates or pets when you book. You can pay by card after we send the invoice.",
  },
  {
    q: "What if my downspouts are clogged underground?",
    a: "If we hose a downspout and water doesn't come out the bottom, there's a blockage below the ground line. We'll show you, explain it, and quote the fix separately — most underground clogs clear with a longer snake on a follow-up.",
  },
  {
    q: "How fast can you come out?",
    a: "Same-day callback when you reach out, with most on-site quotes within 2–4 business days. Active leaks and storm damage jump the line — call us directly if it's actively making your house wet.",
  },
];

// FAQ for the /gutter-cleaning-east-brainerd local landing page. Keep in sync
// with LOCAL_GUTTER_CLEANING_EAST_BRAINERD.faq in src/data/localPages.ts.
export const FAQ_GUTTER_CLEANING_EAST_BRAINERD = [
  {
    q: "How often should I clean my gutters in East Brainerd?",
    a: "Twice a year for most East Brainerd homes with mature trees — once in late spring after the oaks and sweetgums drop pollen and seed pods, and again in late fall after the leaves come down. Newer homes with less tree cover can sometimes stretch to once a year.",
  },
  {
    q: "How much does gutter cleaning cost in East Brainerd?",
    a: "Most single-story East Brainerd homes run $100–$175, and two-story homes $150–$250 depending on roof line and accessibility. We give a firm number on-site before we start — no surprise add-ons.",
  },
  {
    q: "My newer East Brainerd home's gutters overflow even when clean — why?",
    a: "A lot of newer construction in East Brainerd went up with undersized builder-grade gutters and too few downspouts, so they overflow even debris-free. We'll tell you honestly on-site whether it's a cleaning issue or a system that needs re-pitching, added downspouts, or upsizing.",
  },
  {
    q: "Do I need to be home for the cleaning?",
    a: "No. We work outside the house. Just let us know about side gates or pets when you book. You can pay by card after we send the invoice.",
  },
  {
    q: "What if my downspouts are clogged underground?",
    a: "If we hose a downspout and water doesn't come out the bottom, there's a blockage below the ground line. We'll show you, explain it, and quote the fix separately — most underground clogs clear with a longer snake on a follow-up.",
  },
  {
    q: "How fast can you come out to East Brainerd?",
    a: "Same-day callback when you reach out, with most on-site quotes within 2–4 business days. Active leaks and storm damage jump the line — call us directly if it's actively making your house wet.",
  },
];

function fullUrl(path) {
  if (path === "/") return `${SITE_ORIGIN}/`;
  return `${SITE_ORIGIN}${path.replace(/\/+$/, "")}`;
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
    // NOTE: no aggregateRating here — see the matching comment in
    // src/data/seo.ts. Self-serving business ratings get flagged invalid in
    // Google Search Console; reviews live on the Google Business Profile.
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

// Keep in sync with localServiceSchema in src/data/seo.ts.
function localServiceSchema(opts) {
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
    areaServed: AREAS.map((c) => ({ "@type": "City", name: `${c}, TN` })),
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

// Schema for a location landing page.
// Keep in sync with locationServiceSchema in src/data/seo.ts.
function locationServiceSchema(loc) {
  const url = `${SITE_ORIGIN}${locationUrl(loc.slug)}`;
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${url}#service`,
    name: `Gutter Services in ${loc.city}, ${loc.state}`,
    serviceType: "Gutter Cleaning, Repair & Installation",
    url,
    description: loc.description,
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

// Schema for the extended (Core-30) service pages.
// Keep in sync with extraServiceSchema in src/data/seo.ts.
function extraServiceSchema(slug, silo, name, description) {
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

function serviceDetailSchema(s) {
  const url = `${SITE_ORIGIN}/services/${s.slug}`;
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
      "Seamless Gutter Installation in Chattanooga, TN | Gutter-It",
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
  "gutter-repair": {
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
      "Gutter Guards in Chattanooga, TN | Gutter-It LLC",
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
      "Pressure Washing in Chattanooga, TN | Gutter-It LLC",
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

// Build-time SEO mirror of the extended (Core-30) service pages.
// Source of truth for the page CONTENT is src/data/extraServices.ts; this
// array mirrors only the SEO-critical fields (slug, title, description, image,
// faq) used for prerender + sitemap. KEEP IN SYNC: when you add a page to
// extraServices.ts, add its SEO fields here too, or the prerendered HTML will
// drift from the runtime React.
export const EXTRA_SERVICES_META = [
  {
    slug: "exterior-cleaning",
    title: "Exterior Cleaning in Chattanooga, TN | Gutter-It",
    description:
      "Exterior cleaning in Chattanooga, TN — pressure washing, house & soft washing, roof, driveway, deck, and fence cleaning. Method matched to each surface. Free quotes.",
    image: "/images/jobs/pressure-washing/pressurewashing.jpg",
    name: "Exterior Cleaning",
    faq: [
      {
        q: "Do you do all exterior cleaning, or just pressure washing?",
        a: "All of it — pressure washing, house and soft washing, roof cleaning, driveways and concrete, and decks and fences. One crew, one phone number, with the method matched to each surface.",
      },
      {
        q: "What's the difference between pressure washing and soft washing?",
        a: "Pressure washing uses high-pressure water for hard surfaces like driveways and concrete. Soft washing uses low pressure plus a cleaning solution for delicate surfaces like roofs, siding, and wood — so we clean off the growth without driving water behind the siding or stripping roof granules.",
      },
      {
        q: "Can you bundle exterior cleaning with my gutter cleaning?",
        a: "Yes, and it's the most common way neighbors book. Adding a gutter exterior wash or a house wash to a gutter cleaning visit saves you a separate trip charge.",
      },
      {
        q: "What areas do you serve?",
        a: "Chattanooga and all of Hamilton County, plus nearby Cleveland TN and the North Georgia towns. If you're close and not sure, call us.",
      },
    ],
  },
  {
    slug: "residential-gutter-services",
    title: "Residential Gutter Services in Chattanooga, TN | Gutter-It",
    description:
      "Full residential gutter services in Chattanooga, TN — cleaning, repair, seamless installation, guards, and drainage. Family-owned. Free quotes.",
    image: "/images/jobs/installation/gutter.jpg",
    name: "Residential Gutter Services",
    faq: [
      {
        q: "Do you handle everything gutter-related, or just cleaning?",
        a: "Everything. Cleaning, repair, resealing, seamless installation, full replacement, guards, downspouts, drainage, and the fascia/soffit repair that gutter overflow causes. One crew, one phone number.",
      },
      {
        q: "Will you tell me if I don't actually need the work?",
        a: "Yes, and we do it constantly. If your gutters just need a cleaning instead of the replacement another company quoted, we'll say so. Our reputation in Chattanooga is built on not selling people work they don't need.",
      },
      {
        q: "Can you bundle services on one visit?",
        a: "That's the most common way we work — a cleaning plus a small repair, or a gutter exterior wash added to a cleaning. Bundling saves you a second trip charge.",
      },
      {
        q: "What areas do you serve?",
        a: "Chattanooga and all of Hamilton County, plus nearby Cleveland TN, Ringgold and Fort Oglethorpe GA. If you're close and not sure, call us.",
      },
    ],
  },
  {
    slug: "gutter-replacement",
    title: "Gutter Replacement in Chattanooga, TN | Gutter-It",
    description:
      "Gutter replacement in Chattanooga, TN. Full tear-out and seamless aluminum replacement when repair isn't worth it. Free on-site quote, 5-year warranty.",
    image: "/images/jobs/installation/gutter.jpg",
    name: "Gutter Replacement",
    faq: [
      {
        q: "How do I know if I need replacement or just repair?",
        a: "If the gutters are corroded, undersized, or leaking at most seams, replacement usually wins over five years. If it's a few sagging sections or a couple of leaks, that's a repair. We give you the honest read on-site — and we recommend repair more often than replacement.",
      },
      {
        q: "How long does a full replacement take?",
        a: "Most one-story homes are a single day. Two-story homes or jobs with fascia repair run into a second day. We don't leave a house gutterless overnight if rain is coming.",
      },
      {
        q: "Do you replace just one side or does it have to be the whole house?",
        a: "We can replace a single run or elevation if that's all that's failed. But if the whole system is the same age and condition, doing it all at once is usually cheaper per foot and gives you one matching color.",
      },
      {
        q: "What happens if you find rotted fascia during the tear-off?",
        a: "We stop, show you, and quote the fascia repair before going further. New gutters hung on rotted fascia will just pull away again, so it has to be fixed first. We handle the fascia work ourselves.",
      },
    ],
  },
  {
    slug: "downspout-services",
    title: "Downspout Services in Chattanooga, TN | Gutter-It",
    description:
      "Downspout cleaning, unclogging, repair, and installation in Chattanooga, TN. We get roof water away from your foundation. Free quote, same-day callback.",
    image: "/images/jobs/repair/undergutter.jpg",
    name: "Downspout Services",
    faq: [
      {
        q: "How do I know if my downspout is clogged underground?",
        a: "If we run a hose into the downspout and water doesn't come out the bottom, the blockage is below the ground line. We'll show you, explain it, and quote clearing it separately — most clear with a longer snake on a follow-up.",
      },
      {
        q: "Can you add a downspout where there isn't one?",
        a: "Yes. If your roof drains too much water to one corner, adding a downspout splits the load so a single one isn't overwhelmed. We size and pitch it to match the system.",
      },
      {
        q: "My downspout dumps right next to the house — can you fix that?",
        a: "Yes. We add splash blocks, above-ground extensions, or buried drains to carry the water well away from the foundation so it stops saturating the soil.",
      },
      {
        q: "Is downspout cleaning included in a gutter cleaning?",
        a: "Yes — flushing every downspout is part of every gutter cleaning we do. Standalone downspout work (repairs, new installs, underground clogs) is quoted on its own.",
      },
    ],
  },
  {
    slug: "gutter-leak-repair",
    title: "Gutter Leak Repair & Resealing in Chattanooga, TN | Gutter-It",
    description:
      "Gutter leak repair and resealing in Chattanooga, TN. Leaking seams, corners, and end caps stripped and resealed properly. Free quote, same-day callback.",
    image: "/images/jobs/repair/damaged-gutter-fascia-v3.jpg",
    name: "Gutter Leak Repair & Resealing",
    faq: [
      {
        q: "Do leaking gutters mean I need new ones?",
        a: "Usually not. If the metal is sound and only the joints are leaking, resealing is a fraction of the cost and lasts for years when it's done properly. We only recommend replacement when the gutter itself is corroded or failing.",
      },
      {
        q: "Why did my last gutter repair leak again so fast?",
        a: "Almost always because someone caulked over the old failed sealant instead of stripping it off first. New sealant won't bond to crumbling old sealant. We strip the joint to bare metal, which is why ours holds.",
      },
      {
        q: "Can you reseal end caps and inside corners?",
        a: "Yes — those are the most common leak points. Inside corners especially take a lot of water and need a proper strip-and-reseal to hold up.",
      },
      {
        q: "How long does resealing last?",
        a: "Done right — old sealant stripped, joint cleaned and dried, correct gutter-grade sealant — it typically lasts several years before that joint needs attention again.",
      },
    ],
  },
  {
    slug: "gutter-realignment",
    title: "Gutter Realignment & Re-Pitching in Chattanooga, TN | Gutter-It",
    description:
      "Gutter realignment and re-pitching in Chattanooga, TN. Fix standing water and gutters that overflow even when clean. Free quote, same-day callback.",
    image: "/images/jobs/repair/undergutter.jpg",
    name: "Gutter Realignment & Re-Pitching",
    faq: [
      {
        q: "Why does my gutter overflow even though it's clean?",
        a: "Usually the pitch is wrong. If the run is flat or sloped away from the downspout, water pools and spills at the low point instead of draining. Re-pitching corrects the slope so it flows to the downspout.",
      },
      {
        q: "Is re-pitching cheaper than replacing the gutters?",
        a: "Far cheaper. If the gutters themselves are sound and just draining wrong, realignment is a small fraction of a replacement cost. We only recommend replacement when the gutters are actually failing.",
      },
      {
        q: "Will standing water damage my gutters?",
        a: "Over time, yes. The extra weight sags the run further, the trapped water breeds mosquitoes and algae, and debris packs in because there's no flow to carry it. Fixing the pitch stops all of that.",
      },
      {
        q: "What if the fascia is too rotted to hold the hangers?",
        a: "Then the fascia has to be repaired first — hangers won't hold in rotted wood. We'll flag it on-site and quote the fascia work so the realignment actually lasts.",
      },
    ],
  },
  {
    slug: "gutter-inspection",
    title: "Gutter Inspection in Chattanooga, TN | Gutter-It",
    description:
      "Honest gutter inspection in Chattanooga, TN with a photo report and a straight repair-or-replace recommendation. Pre-purchase inspections available.",
    image: "/images/jobs/cleaning/leavesingutter.jpg",
    name: "Gutter Inspection",
    faq: [
      {
        q: "What do I get from a gutter inspection?",
        a: "A photo report documenting the condition of every run, the downspouts, and the fascia/soffit, plus a plain-English recommendation: keep, repair, watch, or replace. No pressure to buy anything.",
      },
      {
        q: "Can you do a pre-purchase inspection before I close?",
        a: "Yes. We do quick-turnaround inspections for home buyers on a closing deadline so you know what you're getting into before you sign.",
      },
      {
        q: "Will you just tell me I need new gutters?",
        a: "Only if you actually do. The whole point of the report is honesty — if your gutters are in good shape, the report says so. We make our living on repeat customers, not one-time oversells.",
      },
      {
        q: "Is the inspection fee credited if I have you do the work?",
        a: "Yes. If you decide to have us do any of the recommended repairs, we credit the inspection fee toward the job.",
      },
    ],
  },
  {
    slug: "fascia-repair",
    title: "Fascia Board Repair in Chattanooga, TN | Gutter-It",
    description:
      "Fascia board repair in Chattanooga, TN. Replace rotted, water-damaged fascia board behind your gutters and fix the overflow that caused it. Free on-site quote.",
    image: "/images/jobs/repair/damaged-gutter-fascia-v3.jpg",
    name: "Fascia Board Repair",
    faq: [
      {
        q: "What causes fascia to rot?",
        a: "Overflowing gutters, mostly. When a clogged or wrongly-pitched gutter spills water down behind it month after month, the fascia board soaks up the moisture, the paint fails, and the wood rots. Fixing the gutter problem is part of fixing the fascia.",
      },
      {
        q: "Can you put new gutters on rotted fascia?",
        a: "No — and any company that does is setting you up to fail. Hangers won't hold in rotted wood, so the gutters will just sag and pull away. The fascia has to be replaced first, which is why we handle both.",
      },
      {
        q: "Will the new fascia match my house?",
        a: "Yes. We prime and paint the new board to match your existing trim color so the repair blends in rather than standing out.",
      },
      {
        q: "What if the rot goes deeper than the fascia?",
        a: "Sometimes overflow rots the rafter tails or roof edge behind the fascia. If we find that, we'll show you and quote the additional work before proceeding — we won't cover over structural rot.",
      },
    ],
  },
  {
    slug: "soffit-repair",
    title: "Soffit Repair in Chattanooga, TN | Gutter-It",
    description:
      "Soffit repair in Chattanooga, TN. Fix sagging, rotted soffit and the pest and moisture problems behind it. Vented replacement, free on-site quote.",
    image: "/images/jobs/repair/damaged-gutter-fascia-v3.jpg",
    name: "Soffit Repair",
    faq: [
      {
        q: "What causes soffit damage?",
        a: "Almost always moisture from above — a leaking or overflowing gutter, a roof drip, or fascia rot that spread. The panel stains, sags, and rots, and then pests get in through the gaps. Fixing the water source is part of the repair.",
      },
      {
        q: "Why do I have wasps or birds in my soffit?",
        a: "There's a gap or hole in the soffit they're using to get into the overhang or attic. We clear what's nesting there and seal the entry properly so it doesn't happen again.",
      },
      {
        q: "Does soffit need to be vented?",
        a: "In most cases yes — vented soffit lets air into the attic to keep the roof structure healthy and prevent heat and moisture buildup. When we replace it, we restore proper venting.",
      },
      {
        q: "Can you fix the fascia and soffit at the same time?",
        a: "Yes, and it's usually smart to. They sit right next to each other, share the same moisture source, and are easier (and cheaper) to do together than as two separate visits.",
      },
    ],
  },
  {
    slug: "roof-debris-removal",
    title: "Roof Debris Removal in Chattanooga, TN | Gutter-It",
    description:
      "Roof debris removal in Chattanooga, TN. Clear leaves, branches, and pine needles off the roof and out of the valleys before they clog your gutters.",
    image: "/images/jobs/cleaning/leavesingutter.jpg",
    name: "Roof Debris Removal",
    faq: [
      {
        q: "Why clear the roof if I'm getting the gutters cleaned?",
        a: "Because debris left on the roof — especially in the valleys — washes straight into the gutters at the next rain. Clearing the roof is what makes a gutter cleaning actually last instead of re-clogging in weeks.",
      },
      {
        q: "Does debris really damage the roof?",
        a: "Yes. Wet leaf debris holds moisture against the shingles, grows moss and algae, and speeds up granule loss. Pine needles wedge under shingle edges and lift them, letting water in. Clearing it protects the shingles.",
      },
      {
        q: "Can you do the roof and gutters in one visit?",
        a: "That's the ideal way to book it. We clear the roof first so the debris doesn't undo the gutter cleaning, then clean the gutters — one trip, longer-lasting result.",
      },
      {
        q: "Will you walk on my roof?",
        a: "Only where it's safe to. On steep or fragile roofs we work from ladders and the edges and use the right equipment. We'll tell you on-site how we'll approach yours.",
      },
    ],
  },
  {
    slug: "drainage-solutions",
    title: "Drainage Solutions in Chattanooga, TN | Gutter-It",
    description:
      "Drainage solutions in Chattanooga, TN — splash blocks, extensions, underground downspout drainage, and rain chains that move roof water away from your foundation.",
    image: "/images/jobs/repair/undergutter.jpg",
    name: "Drainage Solutions",
    faq: [
      {
        q: "My gutters are clean but I still have water at the foundation — why?",
        a: "Because the downspouts are delivering the water efficiently to the wrong place: the base of the house. Drainage — extensions or a buried drain — carries it away from the foundation so it stops saturating the soil and finding your crawlspace.",
      },
      {
        q: "What's underground downspout drainage?",
        a: "Buried drain pipe tied into your downspouts that carries roof water well away from the house — to the street, a lower part of the yard, or a designated drain — instead of dumping it at the foundation. It's the right fix on lots where a splash block isn't enough.",
      },
      {
        q: "Do rain chains actually work?",
        a: "Yes, as an alternative to a closed downspout at entryways or garden features. They guide water from the gutter to the ground and look good doing it — but they still need somewhere for the water to go at the bottom, which we plan for.",
      },
      {
        q: "Why is drainage such a big deal in Chattanooga?",
        a: "Our clay-heavy soil doesn't absorb water quickly, and a lot of lots are sloped. That combination means roof water pooled at the foundation sits there and works into basements and crawlspaces. Getting it away from the house matters more here than in sandy-soil regions.",
      },
    ],
  },
  {
    slug: "house-washing",
    title: "House Washing & Soft Washing in Chattanooga, TN | Gutter-It",
    description:
      "House washing and soft washing in Chattanooga, TN. Low-pressure cleaning safe for vinyl, brick, stucco, and wood. Kills mildew and algae. Free quote.",
    image: "/images/jobs/pressure-washing/pressurewashing.jpg",
    name: "House Washing & Soft Washing",
    faq: [
      {
        q: "What's the difference between pressure washing and soft washing?",
        a: "Pressure washing uses high-pressure water for hard surfaces like driveways. Soft washing uses low pressure plus a cleaning solution for delicate surfaces like siding and roofs — so we clean off the growth without driving water behind the siding or chipping paint. We match the method to the surface.",
      },
      {
        q: "Will washing damage my siding or paint?",
        a: "Not the way we do it. Siding gets a soft wash at low pressure, never a high-pressure blast. High pressure is what damages siding; soft washing is specifically the safe method for it.",
      },
      {
        q: "How long does the clean last?",
        a: "Longer than a plain pressure rinse, because the soft-wash solution kills the mildew and algae at the root instead of just blasting the surface. It takes much longer to grow back.",
      },
      {
        q: "Is the cleaning solution safe for my plants?",
        a: "We wet down and protect your landscaping before we start and rinse everything thoroughly afterward. Used and rinsed properly, it's safe for your plantings.",
      },
    ],
  },
  {
    slug: "roof-cleaning",
    title: "Roof Cleaning in Chattanooga, TN | Gutter-It",
    description:
      "Roof cleaning in Chattanooga, TN. Low-pressure soft wash removes black streaks, algae, and moss without damaging shingles or voiding your warranty. Free quote.",
    image: "/images/jobs/pressure-washing/pressurewashing.jpg",
    name: "Roof Cleaning",
    faq: [
      {
        q: "Will cleaning my roof damage the shingles?",
        a: "Not the way we do it. We only soft-wash roofs — low pressure plus a cleaning solution. High-pressure washing is what damages shingles by stripping the granules; that's exactly the method we don't use on roofs.",
      },
      {
        q: "What are the black streaks on my roof?",
        a: "A blue-green algae called Gloeocapsa magma that feeds on the filler in asphalt shingles. Our humid climate is ideal for it. It spreads, holds moisture against the shingles, and shortens roof life if left untreated.",
      },
      {
        q: "Will pressure washing remove the streaks faster?",
        a: "It would remove them and your shingle granules along with them, voiding most shingle warranties and shortening your roof's life. That's why we never pressure-wash a roof — soft washing is the only safe way.",
      },
      {
        q: "How long does a roof cleaning last?",
        a: "Years, because the soft-wash solution kills the algae and moss at the root rather than just rinsing the surface. It takes a long time to re-establish.",
      },
    ],
  },
  {
    slug: "driveway-cleaning",
    title: "Driveway & Concrete Cleaning in Chattanooga, TN | Gutter-It",
    description:
      "Driveway and concrete cleaning in Chattanooga, TN. Even surface-cleaner finish on driveways, sidewalks, and patios. Oil and rust stains treated. Free quote.",
    image: "/images/jobs/pressure-washing/pressurewashing.jpg",
    name: "Driveway & Concrete Cleaning",
    faq: [
      {
        q: "Can you get oil stains out of my driveway?",
        a: "Most fresh oil comes up with a degreaser pre-treatment and hot water. Old, set-in oil may lighten significantly but not disappear entirely — concrete is porous and absorbs it. We'll tell you on-site what to realistically expect on yours.",
      },
      {
        q: "Why does my driveway have stripes after washing?",
        a: "Those zebra stripes come from cleaning with a pressure wand in overlapping arcs. We use a surface cleaner, which applies even pressure across the whole width at once, so the finish is uniform with no stripes.",
      },
      {
        q: "Can you remove rust stains?",
        a: "Yes, with a targeted rust treatment rather than just pressure. Rust from planters, grills, and fertilizer responds to the right solution — plain pressure washing alone won't lift it.",
      },
      {
        q: "Can you clean the driveway and wash the house in one visit?",
        a: "Yes, and bundling is the most cost-effective way to book — it saves you a separate trip charge. Driveway, sidewalks, house wash, and gutter cleaning can all happen in one visit.",
      },
    ],
  },
  {
    slug: "deck-fence-cleaning",
    title: "Deck & Fence Cleaning in Chattanooga, TN | Gutter-It",
    description:
      "Deck and fence cleaning in Chattanooga, TN. Wood, composite, vinyl, and metal cleaned at the right pressure — no splintering. Re-stain prep available. Free quote.",
    image: "/images/jobs/pressure-washing/pressurewashing.jpg",
    name: "Deck & Fence Cleaning",
    faq: [
      {
        q: "Will pressure washing damage my wood deck?",
        a: "It can if it's done at full pressure — high pressure splinters and furrs the wood, raising the grain. We clean wood at lower pressure with a solution, which removes the gray and mildew without damaging the boards.",
      },
      {
        q: "Can you clean my deck before I stain it?",
        a: "Yes — and you should clean before staining. Stain won't bond to a dirty, mildewed, or grayed-out surface. A proper cleaning is what makes a re-stain actually take and last. Let the wood dry fully before you apply the stain.",
      },
      {
        q: "Do you clean composite and vinyl too, or just wood?",
        a: "All of them. Composite decking, vinyl and wood fencing, and metal fencing each get the right pressure and approach. The whole point is matching the method to the material so nothing gets etched or damaged.",
      },
      {
        q: "My fence is rusting — can you help?",
        a: "We can clean surface rust and oxidation off metal fencing. Deep structural rust is past cleaning, but for surface staining and grime, the right approach brings it back.",
      },
    ],
  },
];

// Build-time SEO mirror of the location landing pages.
// Source of truth for the page CONTENT is src/data/locations.ts; this array
// mirrors only the SEO-critical fields. KEEP IN SYNC with locations.ts.
export const LOCATIONS_META = [
  {
    slug: "chattanooga",
    city: "Chattanooga",
    state: "TN",
    isHub: true,
    geo: { lat: 35.0456, lng: -85.3097 },
    image: "/images/hero/hero-main.jpg",
    title: "Gutter Services in Chattanooga, TN | Gutter-It",
    description:
      "Family-owned gutter cleaning, repair, installation, and pressure washing in Chattanooga, TN. Local crew, honest quotes, free estimates. Serving the whole metro.",
    faq: [
      {
        q: "What part of Chattanooga is Gutter-It based in?",
        a: "We're based on Bass Road in Chattanooga (37406) and serve the entire city plus the surrounding metro. When you call, you reach the local family that runs the business — not a call center.",
      },
      {
        q: "How often should I clean my gutters in Chattanooga?",
        a: "Twice a year for most homes with mature trees — late spring after the oaks and maples drop, and late fall after the leaves come down. Homes under pine or hemlock on Lookout and Signal Mountain usually need a third visit.",
      },
      {
        q: "Do you cover the whole Chattanooga metro?",
        a: "Yes. From this Chattanooga hub we cover Hixson, Red Bank, Soddy-Daisy, the rest of Hamilton County, and out to Cleveland TN and the North Georgia towns. Each area has its own page with local details.",
      },
      {
        q: "How fast can you come out?",
        a: "Same-day callback when you reach out, with most on-site quotes within 2–4 business days. Active leaks and storm damage jump the line — call us directly if it's actively making your house wet.",
      },
    ],
  },
  {
    slug: "hixson",
    city: "Hixson",
    state: "TN",
    geo: { lat: 35.1559, lng: -85.2502 },
    image: "/images/jobs/installation/gutter.jpg",
    title: "Gutter Services in Hixson, TN | Gutter-It",
    description:
      "Gutter cleaning, repair, and seamless installation in Hixson, TN. Local Chattanooga-based crew, no trip charge, free quotes. Same-day callback.",
    faq: [
      {
        q: "Do you charge extra to come out to Hixson?",
        a: "No. Hixson is right next to our Chattanooga home base, so there's no added trip charge — you pay the same rates as homes in the city.",
      },
      {
        q: "How is Hixson different from Chattanooga for gutters?",
        a: "Hixson's mix of mature subdivisions, lake-adjacent homes, and aging original gutters means we do a lot of replacement and repair work here, not just cleaning. The lake wind also blows debris into gutters from directions a typical city lot doesn't see.",
      },
      {
        q: "Can you replace the builder-grade gutters on my newer Hixson home?",
        a: "Yes. A lot of newer Hixson construction went up with thin, undersized gutters and too few downspouts. We can re-pitch and add downspouts, or replace them with properly sized seamless aluminum.",
      },
      {
        q: "How often should Hixson homes clean their gutters?",
        a: "Twice a year for most homes, and a third time if you back up to pines or the lake where debris is heavier and more constant.",
      },
    ],
  },
  {
    slug: "red-bank",
    city: "Red Bank",
    state: "TN",
    geo: { lat: 35.1131, lng: -85.2937 },
    image: "/images/jobs/cleaning/leavesingutter.jpg",
    title: "Gutter Services in Red Bank, TN | Gutter-It",
    description:
      "Gutter cleaning, repair, and seamless installation in Red Bank, TN. Local crew minutes away, no trip charge, honest repair-or-replace advice. Free quotes.",
    faq: [
      {
        q: "Do you serve all of Red Bank?",
        a: "Yes — the Dayton Boulevard corridor, the ridge-side streets, and everything bordering Stringer's Ridge and North Chattanooga. It's minutes from our base, so there's no trip charge.",
      },
      {
        q: "My Red Bank home has old gutters — repair or replace?",
        a: "Depends on their condition. A lot of Red Bank's older gutters are corroded or leaking at every seam, which usually means replacement wins over five years. But if it's a few sagging sections or leaks, that's a repair. We give you the honest read on-site.",
      },
      {
        q: "Can you handle gutters on a steep ridge-side lot?",
        a: "Yes. Sloped Red Bank lots with gutters at varying heights are common for us. We quote those on-site since access affects the work, and we make sure runoff is directed away from the foundation given the slope.",
      },
      {
        q: "How often should Red Bank homes clean their gutters?",
        a: "Twice a year for most, more if you're on a ridge-side street with pines and hemlocks dropping needles year-round.",
      },
    ],
  },
  {
    slug: "soddy-daisy",
    city: "Soddy-Daisy",
    state: "TN",
    geo: { lat: 35.2342, lng: -85.1907 },
    image: "/images/jobs/repair/undergutter.jpg",
    title: "Gutter Services in Soddy-Daisy, TN | Gutter-It",
    description:
      "Gutter cleaning, repair, installation, and drainage in Soddy-Daisy, TN. Local crew for lakeside and wooded-mountain homes. Free quotes, same-day callback.",
    faq: [
      {
        q: "Is Soddy-Daisy too far for you to service?",
        a: "Not at all. We come up from Chattanooga to Soddy-Daisy regularly. The drive is a bit longer than a city call, but the visit price stays the same — no mountain surcharge.",
      },
      {
        q: "My Soddy-Daisy home is on a steep wooded lot — can you handle it?",
        a: "Yes. Steep, wooded lots are common here. We quote those on-site since access and the heavier tree load affect the work, and we pay extra attention to carrying roof runoff away from the foundation on sloped ground.",
      },
      {
        q: "Do lakeside homes need more frequent cleaning?",
        a: "Often, yes. Lakeshore and wooded-acreage homes catch more wind-driven debris, so a third cleaning during the year is common up here.",
      },
      {
        q: "Can you do drainage work, not just cleaning?",
        a: "Yes — drainage matters a lot on Soddy-Daisy's sloped lots. We install extensions, splash blocks, and underground downspout drainage to move roof water well away from the house.",
      },
    ],
  },
  {
    slug: "hamilton-county",
    city: "Hamilton County",
    state: "TN",
    geo: { lat: 35.18, lng: -85.16 },
    image: "/images/hero/hero-main.jpg",
    title: "Gutter Services in Hamilton County, TN | Gutter-It",
    description:
      "Gutter cleaning, repair, installation, and pressure washing across Hamilton County, TN — Ooltewah, Collegedale, Signal Mountain and beyond. Local crew, free quotes.",
    faq: [
      {
        q: "Do you really cover the whole of Hamilton County?",
        a: "Yes — from the city out to Ooltewah, Collegedale, East Ridge, Harrison, Apison, and up onto Signal and Lookout Mountain. Some towns have their own pages; the rest are covered from the same Chattanooga crew.",
      },
      {
        q: "Is there a surcharge for the farther parts of the county?",
        a: "No. The mountain and outer-suburb routes take a little longer to reach, but the visit price is the same as a city call.",
      },
      {
        q: "My town in the county isn't listed — do you still come there?",
        a: "Almost certainly. If you're anywhere in Hamilton County and not sure, just call and we'll confirm. We rarely turn down a county address.",
      },
      {
        q: "Do you do mountain homes on Signal and Lookout?",
        a: "Yes. Mountain homes deal with year-round needle drop and steep roofs, which we quote on-site. Many need a third yearly cleaning because of the constant pine and hemlock debris.",
      },
    ],
  },
  {
    slug: "cleveland",
    city: "Cleveland",
    state: "TN",
    geo: { lat: 35.1595, lng: -84.8766 },
    image: "/images/jobs/cleaning/leavesingutter.jpg",
    title: "Gutter Services in Cleveland, TN | Gutter-It",
    description:
      "Gutter cleaning, repair, and seamless installation in Cleveland, TN and Bradley County. Local crew from Chattanooga, no distance surcharge. Free quotes.",
    faq: [
      {
        q: "Do you charge extra to come to Cleveland?",
        a: "No. Cleveland is about 30 minutes out from our Chattanooga base. The drive is longer than a city call, but the visit price stays the same.",
      },
      {
        q: "Do you serve Bradley County, or just the city of Cleveland?",
        a: "Both. We cover Cleveland proper and the surrounding Bradley County communities. If you're nearby and not sure, give us a call.",
      },
      {
        q: "Can you replace the cheap gutters on my new Cleveland home?",
        a: "Yes. A lot of the newer growth off APD-40 and Paul Huff went up with undersized builder-grade gutters. We can re-pitch and add downspouts or replace them with properly sized seamless aluminum.",
      },
      {
        q: "How fast can you get out to Cleveland?",
        a: "Same-day callback, with most on-site quotes within a few business days. Active leaks jump the line — call us directly if water is getting into the house.",
      },
    ],
  },
  {
    slug: "ringgold",
    city: "Ringgold",
    state: "GA",
    geo: { lat: 34.9162, lng: -85.1091 },
    image: "/images/jobs/repair/undergutter.jpg",
    title: "Gutter Services in Ringgold, GA | Gutter-It",
    description:
      "Gutter cleaning, repair, and seamless installation in Ringgold, GA and Catoosa County. Local Chattanooga crew, no state-line surcharge. Free quotes.",
    faq: [
      {
        q: "Do you cross the state line to serve Ringgold?",
        a: "Yes, regularly. Ringgold is about 20 minutes south of Chattanooga down I-75, in Catoosa County, GA. Same local crew, no Georgia surcharge.",
      },
      {
        q: "Do you serve Catoosa County beyond just Ringgold?",
        a: "Yes — Ringgold proper plus the surrounding Catoosa County subdivisions and communities. If you're close and not sure, call us.",
      },
      {
        q: "Can you handle gutters on sloped North Georgia lots?",
        a: "Yes. The ridge-and-valley terrain around Ringgold means runoff has to be carried away from foundations carefully. We do the drainage work — extensions, splash blocks, underground downspout drains — alongside the gutters.",
      },
      {
        q: "How often should Ringgold homes clean their gutters?",
        a: "Twice a year for most, more if you're on a heavily wooded lot where leaf and needle load is heavier and more constant.",
      },
    ],
  },
  {
    slug: "fort-oglethorpe",
    city: "Fort Oglethorpe",
    state: "GA",
    geo: { lat: 34.9492, lng: -85.2569 },
    image: "/images/jobs/cleaning/leavesingutter.jpg",
    title: "Gutter Services in Fort Oglethorpe, GA | Gutter-It",
    description:
      "Gutter cleaning, repair, and seamless installation in Fort Oglethorpe, GA. Local Chattanooga crew, no state-line surcharge, honest quotes. Same-day callback.",
    faq: [
      {
        q: "Is Fort Oglethorpe within your service area?",
        a: "Yes — it's only about 15 minutes south of downtown Chattanooga, just over the Georgia line. We're there regularly, same local crew, no surcharge.",
      },
      {
        q: "Do you serve both the Catoosa and Walker County sides?",
        a: "Yes. Fort Oglethorpe straddles the county line and we cover both sides, plus the wooded lots stretching toward Walker County.",
      },
      {
        q: "My older Fort Oglethorpe home has aging gutters — can you help?",
        a: "Definitely. A lot of the town's post-era homes have original or corroded gutters and overflow-damaged fascia. We handle the repair and replacement work, not just cleaning, and give you an honest read on which you need.",
      },
      {
        q: "How often should Fort Oglethorpe homes clean their gutters?",
        a: "Twice a year for most, especially the battlefield-edge streets under heavy hardwood canopy that drops a serious leaf load each fall.",
      },
    ],
  },
  {
    slug: "knoxville",
    city: "Knoxville",
    state: "TN",
    geo: { lat: 35.9606, lng: -83.9207 },
    image: "/images/jobs/installation/gutter.jpg",
    title: "Gutter Services in Knoxville, TN | Gutter-It",
    description:
      "Seamless gutter installation, replacement, and larger gutter projects in Knoxville, TN. Family-owned crew that travels for the right job. Free written quotes.",
    faq: [
      {
        q: "Do you really come all the way to Knoxville?",
        a: "For the right project, yes. Knoxville is about 90 minutes up I-75 from our Chattanooga base — outside our daily metro, so we focus on scheduled installation, replacement, and larger combined jobs there rather than quick cleanings.",
      },
      {
        q: "Is it worth having you travel for a small job?",
        a: "Honestly, for a single small cleaning, a local Knoxville company is probably the better call. We're a fit when you want a seamless installation, a full replacement, or a substantial project done right by a crew you can trust to show up.",
      },
      {
        q: "How do I find out if my Knoxville job is a fit?",
        a: "Call and tell us what you've got. We'll give you a straight answer about whether the trip makes sense and a firm written quote if it does. No pressure either way.",
      },
      {
        q: "Do you offer the same warranty on Knoxville installs?",
        a: "Yes. Our five-year written workmanship warranty applies to every seamless install, wherever we do it.",
      },
    ],
  },
  {
    slug: "huntsville",
    city: "Huntsville",
    state: "AL",
    geo: { lat: 34.7304, lng: -86.5861 },
    image: "/images/jobs/installation/gutter.jpg",
    title: "Gutter Services in Huntsville, AL | Gutter-It",
    description:
      "Seamless gutter installation, replacement, and larger gutter projects in Huntsville, AL. Family-owned crew that travels for the right job. Free written quotes.",
    faq: [
      {
        q: "Do you actually travel to Huntsville?",
        a: "For the right project, yes. Huntsville is about an hour and three-quarters from our Chattanooga base, across the Alabama line — outside our daily metro, so we focus on scheduled installation, replacement, and larger jobs there rather than quick cleanings.",
      },
      {
        q: "Should I hire you for a small Huntsville cleaning?",
        a: "Honestly, for a single small cleaning a local Huntsville company is probably the better call. We're the right fit when you want a seamless installation, a full replacement, or a substantial project done right by a crew you can count on.",
      },
      {
        q: "Can you replace the builder-grade gutters on my new Huntsville home?",
        a: "Yes — that's a common reason homeowners in fast-growing Huntsville call us. We replace thin, undersized builder-grade gutters with properly sized seamless aluminum that actually moves the water.",
      },
      {
        q: "How do I find out if my Huntsville job is a fit?",
        a: "Call and tell us what you've got. We'll give you a straight answer about whether the trip makes sense and a firm written quote if it does — no pressure either way.",
      },
    ],
  },
];

export function getAllRoutes() {
  const home = {
    path: "/",
    title:
      "Gutter-It LLC | Gutter Cleaning, Installation & Repair in Chattanooga, TN",
    description:
      "Family-owned gutter cleaning, repair, seamless installation, and pressure washing in Chattanooga, TN. Licensed, insured, free quotes. Cleaning from $100.",
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

  const gutterCleaningChattanooga = {
    path: "/gutter-cleaning-chattanooga",
    title: "Gutter Cleaning in Chattanooga, TN | From $100 | Gutter-It LLC",
    description:
      "Local, family-owned gutter cleaning in Chattanooga, TN from $100. Every section cleared by hand, downspouts flushed, debris hauled. Same-day callback.",
    ogImage: `${SITE_ORIGIN}/images/jobs/cleaning/leavesingutter.jpg`,
    priority: 0.9,
    changefreq: "monthly",
    jsonLd: [
      breadcrumbSchema([
        { name: "Home", path: "/" },
        {
          name: "Gutter Cleaning in Chattanooga",
          path: "/gutter-cleaning-chattanooga",
        },
      ]),
      localServiceSchema({
        path: "/gutter-cleaning-chattanooga",
        name: "Gutter Cleaning in Chattanooga, TN",
        serviceType: "Gutter Cleaning",
        description:
          "Hand gutter cleaning for homes in Chattanooga and Hamilton County: every section cleared, downspouts flushed, debris hauled away. From $100.",
        price: "100",
      }),
      faqPageSchema(FAQ_GUTTER_CLEANING_CHATTANOOGA),
    ],
  };

  const gutterCleaningEastBrainerd = {
    path: "/gutter-cleaning-east-brainerd",
    title: "Gutter Cleaning in East Brainerd, TN | From $100 | Gutter-It LLC",
    description:
      "Local, family-owned gutter cleaning in East Brainerd, TN from $100. Every section cleared by hand, downspouts flushed, debris hauled. Same-day callback.",
    ogImage: `${SITE_ORIGIN}/images/jobs/cleaning/leavesingutter.jpg`,
    priority: 0.9,
    changefreq: "monthly",
    jsonLd: [
      breadcrumbSchema([
        { name: "Home", path: "/" },
        {
          name: "Gutter Cleaning in East Brainerd",
          path: "/gutter-cleaning-east-brainerd",
        },
      ]),
      localServiceSchema({
        path: "/gutter-cleaning-east-brainerd",
        name: "Gutter Cleaning in East Brainerd, TN",
        serviceType: "Gutter Cleaning",
        description:
          "Hand gutter cleaning for homes in East Brainerd and southeast Chattanooga: every section cleared, downspouts flushed, debris hauled away. From $100.",
        price: "100",
      }),
      faqPageSchema(FAQ_GUTTER_CLEANING_EAST_BRAINERD),
    ],
  };

  const faq = {
    path: "/faq",
    title: "FAQ | Gutter-It LLC, Chattanooga TN",
    description:
      "Common gutter questions in Chattanooga: cleaning frequency and cost, repair vs. replacement, gutter guards, service area, and getting a free quote.",
    priority: 0.7,
    changefreq: "monthly",
    jsonLd: [
      breadcrumbSchema([
        { name: "Home", path: "/" },
        { name: "FAQ", path: "/faq" },
      ]),
      faqPageSchema(FAQ_FULL),
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

  const extraServicePages = EXTRA_SERVICES_META.map((s) => {
    const silo = siloFor(s.slug);
    const path = serviceUrl(s.slug, silo);
    const hub = SILO_HUB[silo];
    const isHub = s.slug === hub.slug;
    const crumbs = isHub
      ? [
          { name: "Home", path: "/" },
          { name: hub.name, path },
        ]
      : [
          { name: "Home", path: "/" },
          { name: hub.name, path: serviceUrl(hub.slug, silo) },
          { name: s.name, path },
        ];
    return {
      path,
      title: s.title,
      description: s.description,
      ogImage: s.image ? `${SITE_ORIGIN}${s.image}` : undefined,
      priority: isHub ? 0.85 : 0.8,
      changefreq: "monthly",
      jsonLd: [
        breadcrumbSchema(crumbs),
        extraServiceSchema(s.slug, silo, s.name, s.description),
        ...(s.faq.length ? [faqPageSchema(s.faq)] : []),
      ],
    };
  });

  const locationsIndex = {
    path: "/service-areas",
    title: "Service Areas | Gutter-It LLC, Chattanooga TN",
    description:
      "Gutter cleaning, repair, installation, and pressure washing across the Chattanooga metro — Hixson, Red Bank, Soddy-Daisy, North Georgia, and beyond.",
    priority: 0.8,
    changefreq: "monthly",
    jsonLd: [
      breadcrumbSchema([
        { name: "Home", path: "/" },
        { name: "Service Areas", path: "/service-areas" },
      ]),
    ],
  };

  const locationPages = LOCATIONS_META.map((loc) => ({
    path: locationUrl(loc.slug),
    title: loc.title,
    description: loc.description,
    ogImage: loc.image ? `${SITE_ORIGIN}${loc.image}` : undefined,
    priority: loc.isHub ? 0.9 : 0.8,
    changefreq: "monthly",
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
    gutterCleaningEastBrainerd,
    about,
    faq,
    contact,
  ];
}
