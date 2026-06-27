import type {
  DetailItem,
  DetailParagraph,
  DetailPhoto,
  DetailPriceRow,
} from "./serviceDetails";
import type { FaqItem } from "./faq";

// ---------------------------------------------------------------------------
// Extended service pages (the "Core 30" expansion).
//
// These deliberately live OUTSIDE the typed five-service `ServiceCategory`
// system in src/data/services.ts. That core array drives the header dropdown,
// the home services grid, and the footer — we don't want 18 items auto-dumped
// into the nav. Instead these are curated silo pages reached from the two hub
// pages (Residential Gutter Services / Pressure Washing) and from internal
// links, exactly the way localPages.ts sits outside the core system.
//
// They reuse the SAME section shapes and render through the SAME
// ServiceDetailPage component, so the pages are visually indistinguishable
// from the core five.
//
// Every page added here must also be registered in THREE places:
//   1. src/App.tsx               (the <Route>)
//   2. src/data/seo.ts           (runtime SEO tags — getStaticRoutes)
//   3. scripts/seo-routes.mjs    (build-time prerender + sitemap)
// ---------------------------------------------------------------------------

export type RelatedLink = { to: string; title: string; blurb: string };

export type ExtraServiceDetail = {
  slug: string; // url segment, e.g. "gutter-replacement"
  silo: "gutters" | "exterior";
  title: string; // human service name, used in hero name + headings
  hero: {
    eyebrow: string;
    h1: string;
    lede: string;
    image: string;
    imageAlt: string;
  };
  intro: {
    heading: string;
    body: DetailParagraph[];
    image?: { src: string; alt: string; caption?: string };
  };
  signs: { heading: string; items: DetailItem[] };
  whatsIncluded: { heading: string; items: DetailItem[] };
  process: { heading: string; steps: DetailItem[] };
  photos: DetailPhoto[];
  pricing: {
    headline: string;
    body: DetailParagraph[];
    bullets?: DetailPriceRow[];
  };
  serviceArea: { heading: string; body: DetailParagraph[] };
  faq: FaqItem[];
  related: RelatedLink[];
  seo: { metaTitle: string; metaDescription: string };
  // Optional testimonial filter — which core service these reviews relate to.
  testimonialFilter?: "installation" | "cleaning" | "gutter-repair" | "gutter-guards" | "pressure-washing";
};

// ---------------------------------------------------------------------------
// URL helpers — single source of truth for extra-service + location paths.
//
// KEEP IN SYNC: serviceUrl / locationUrl below are mirrored in plain JS in
// scripts/seo-routes.mjs. Both must produce identical paths, or the prerendered
// HTML (build) will drift from the runtime React (PageSeoTags lookup).
//
// Silo hubs live at their silo ROOT (e.g. /residential-gutter-services); every
// other slug nests under its silo (e.g. /residential-gutter-services/fascia-repair).
// The core-5 service pages are NOT handled here — they keep their flat
// /services/<slug> URLs.
// ---------------------------------------------------------------------------
export const SILO_ROOT = {
  gutters: "/residential-gutter-services",
  exterior: "/exterior-cleaning",
} as const;

const HUB_SLUG = {
  gutters: "residential-gutter-services",
  exterior: "exterior-cleaning",
} as const;

export function serviceUrl(slug: string, silo: "gutters" | "exterior"): string {
  const root = SILO_ROOT[silo];
  return slug === HUB_SLUG[silo] ? root : `${root}/${slug}`;
}

export const SERVICE_AREAS_ROOT = "/service-areas";

export function locationUrl(slug: string): string {
  return `${SERVICE_AREAS_ROOT}/${slug}`;
}

// Shared image fallbacks (we only have a handful of real job photos; reuse the
// closest match rather than ship broken images).
const IMG = {
  installGutter: "/images/jobs/installation/gutter.jpg",
  repairUnder: "/images/jobs/repair/undergutter.jpg",
  repairFascia: "/images/jobs/repair/damaged-gutter-fascia-v3.jpg",
  cleaningLeaves: "/images/jobs/cleaning/leavesingutter.jpg",
  pressure: "/images/jobs/pressure-washing/pressurewashing.jpg",
  hero: "/images/hero/hero-main.jpg",
};

// Reusable related-link snippets so cross-linking stays consistent.
const REL = {
  cleaning: {
    to: "/services/cleaning",
    title: "Gutter Cleaning",
    blurb: "Hand-clear leaves and debris, flush every downspout. From $50.",
  },
  repair: {
    to: "/services/gutter-repair",
    title: "Gutter Repair",
    blurb: "Sagging sections, leaky seams, broken downspouts — fixed, not replaced. From $100.",
  },
  installation: {
    to: "/services/installation",
    title: "Seamless Gutter Installation",
    blurb: "Custom aluminum gutters formed on your driveway to fit your roof line.",
  },
  guards: {
    to: "/services/gutter-guards",
    title: "Gutter Guards",
    blurb: "Leaf-protection systems installed honestly — straight talk on the tradeoffs.",
  },
  pressure: {
    to: "/services/pressure-washing",
    title: "Pressure Washing",
    blurb: "Gutter exteriors, driveways, sidewalks, and siding — cleaned without damage.",
  },
  hub: {
    to: serviceUrl("residential-gutter-services", "gutters"),
    title: "Residential Gutter Services",
    blurb: "Every gutter service we offer for homeowners, under one phone number.",
  },
  exteriorHub: {
    to: serviceUrl("exterior-cleaning", "exterior"),
    title: "Exterior Cleaning",
    blurb: "Pressure washing, house washing, roof, driveway, deck & fence — all under one crew.",
  },
  replacement: {
    to: serviceUrl("gutter-replacement", "gutters"),
    title: "Gutter Replacement",
    blurb: "Full tear-out and replacement when the old system is past repair.",
  },
  downspouts: {
    to: serviceUrl("downspout-services", "gutters"),
    title: "Downspout Services",
    blurb: "Cleaning, unclogging, repair, and new downspout installation.",
  },
  leakRepair: {
    to: serviceUrl("gutter-leak-repair", "gutters"),
    title: "Gutter Leak Repair & Resealing",
    blurb: "Reseal leaking seams, end caps, and corners on your existing gutters.",
  },
  realignment: {
    to: serviceUrl("gutter-realignment", "gutters"),
    title: "Gutter Realignment & Re-Pitching",
    blurb: "Fix standing water and wrong-direction drainage by resetting the pitch.",
  },
  inspection: {
    to: serviceUrl("gutter-inspection", "gutters"),
    title: "Gutter Inspection",
    blurb: "Photo report with an honest repair-or-replace recommendation.",
  },
  fascia: {
    to: serviceUrl("fascia-repair", "gutters"),
    title: "Fascia Repair",
    blurb: "Replace rotted, water-damaged fascia board behind the gutter.",
  },
  soffit: {
    to: serviceUrl("soffit-repair", "gutters"),
    title: "Soffit Repair",
    blurb: "Repair sagging or rotted soffit and the pest/moisture issues behind it.",
  },
  roofDebris: {
    to: serviceUrl("roof-debris-removal", "gutters"),
    title: "Roof Debris Removal",
    blurb: "Clear leaves, branches, and pine needles off the roof before they hit the gutters.",
  },
  drainage: {
    to: serviceUrl("drainage-solutions", "gutters"),
    title: "Drainage Solutions",
    blurb: "Move roof water away from the foundation — extensions, splash blocks, underground drains.",
  },
  houseWashing: {
    to: serviceUrl("house-washing", "exterior"),
    title: "House Washing & Soft Washing",
    blurb: "Low-pressure soft wash that's safe for vinyl, brick, stucco, and wood.",
  },
  roofCleaning: {
    to: serviceUrl("roof-cleaning", "exterior"),
    title: "Roof Cleaning",
    blurb: "Soft-wash removal of black streaks, algae, and moss — no high pressure.",
  },
  driveway: {
    to: serviceUrl("driveway-cleaning", "exterior"),
    title: "Driveway & Concrete Cleaning",
    blurb: "Surface-cleaner finish on driveways, sidewalks, and patios. Oil and rust treated.",
  },
  deckFence: {
    to: serviceUrl("deck-fence-cleaning", "exterior"),
    title: "Deck & Fence Cleaning",
    blurb: "Wood and composite decks, wood/vinyl/metal fences — cleaned at the right pressure.",
  },
} as const;

export const EXTRA_SERVICES: ExtraServiceDetail[] = [
  // =====================================================================
  // GUTTER SILO HUB
  // =====================================================================
  {
    slug: "residential-gutter-services",
    silo: "gutters",
    title: "Residential Gutter Services",
    hero: {
      eyebrow: "Chattanooga · Hamilton County",
      h1: "Every residential gutter service, one local phone number.",
      lede: "Cleaning, repair, seamless installation, guards, downspouts, drainage — the whole gutter system, handled by the same family-owned crew. No call center, no subcontractors, no upsell theater.",
      image: IMG.installGutter,
      imageAlt: "Seamless aluminum gutters on a Chattanooga home",
    },
    intro: {
      heading: "One crew for the entire gutter system on your home.",
      body: [
        "Most homeowners don't need a 'gutter cleaning company' and a separate 'gutter installer' and a third guy for downspouts. They need one crew that shows up, looks at the whole system, and tells them the truth about what it actually needs. That's what Gutter-It does across Chattanooga and Hamilton County.",
        "We're family-owned and based on Bass Road right here in Chattanooga. The person who quotes your job is the person on the ladder. That matters when the honest answer is 'your gutters are fine, you just need them cleaned' instead of a $3,000 replacement quote — which is the answer we give more often than not.",
        "This page is the front door to everything we do on the gutter side. Pick the service you came for, or call and describe the problem and we'll point you to the right fix.",
      ],
    },
    signs: {
      heading: "Not sure which gutter service you need?",
      items: [
        {
          title: "Water pours over the edge in the rain",
          body: "Usually a cleaning issue — packed gutters or a clogged downspout. Sometimes a pitch problem. We diagnose which on-site so you don't pay for the wrong fix.",
        },
        {
          title: "Gutters are sagging or pulling away",
          body: "That's a repair — new hidden hangers and re-securing the run. Only a full replacement if the fascia behind them has rotted through.",
        },
        {
          title: "You're tired of climbing the ladder twice a year",
          body: "Gutter guards reduce cleaning frequency. We'll tell you honestly whether they make sense for your tree load and budget.",
        },
        {
          title: "The gutters themselves are corroded or undersized",
          body: "When the system is past saving, seamless replacement is the right call. We form new gutters on your driveway to fit the roof exactly.",
        },
        {
          title: "Water sits in the gutter after it stops raining",
          body: "Standing water means the pitch is off. Realignment and re-pitching fixes it without replacing anything.",
        },
        {
          title: "The fascia or soffit behind the gutter looks rotted",
          body: "Overflow damage. We repair the wood and fix the gutter problem that caused it, in the same visit.",
        },
      ],
    },
    whatsIncluded: {
      heading: "The full residential gutter menu.",
      items: [
        {
          title: "Gutter cleaning",
          body: "Hand-clearing every section and flushing every downspout, twice a year for most Chattanooga homes. From $50.",
        },
        {
          title: "Gutter repair & resealing",
          body: "Re-hanging sagging runs, resealing leaky seams and end caps, replacing damaged downspouts. From $100.",
        },
        {
          title: "Seamless installation & replacement",
          body: "New aluminum gutters formed on-site, and full tear-outs when the old system is beyond repair.",
        },
        {
          title: "Gutter guards",
          body: "Micro-mesh and reverse-curve leaf protection, sized to your roof and tree load.",
        },
        {
          title: "Downspouts & drainage",
          body: "Unclogging, repair, new downspouts, and getting roof water away from the foundation.",
        },
        {
          title: "Fascia & soffit repair",
          body: "Fixing the wood the old leaking gutters rotted, so the new work lasts.",
        },
      ],
    },
    process: {
      heading: "How working with us goes, whatever the job.",
      steps: [
        {
          title: "Same-day callback",
          body: "Call or text and you hear back the same day. Active leaks jump the line.",
        },
        {
          title: "On-site look, honest read",
          body: "We walk the whole system, not just the part you called about, and tell you what actually needs doing.",
        },
        {
          title: "Firm written quote",
          body: "A real number before any work starts. No 'starting at' bait, no phone estimates.",
        },
        {
          title: "Done by the crew that quoted it",
          body: "The same people. No mystery subcontractor showing up not knowing what was promised.",
        },
        {
          title: "Walk-through before you pay",
          body: "We show you the finished work and point out anything we noticed for next time.",
        },
      ],
    },
    photos: [
      {
        src: IMG.installGutter,
        alt: "Seamless aluminum gutter system on a Chattanooga home",
      },
    ],
    pricing: {
      headline: "Pricing depends on the service — here's the lay of the land.",
      body: [
        "Cleaning starts at $50 and most single-story homes land $100–$175. Repairs start at $100. Seamless installation runs roughly $5.40–$9.40 per linear foot. Guards, drainage, and fascia work are quoted on-site after we see the home.",
        "Whatever the job, you get a firm written number before we start — never a surprise add-on after the fact.",
      ],
      bullets: [
        { label: "Gutter cleaning", value: "From $50" },
        { label: "Gutter repair", value: "From $100" },
        { label: "Seamless install", value: "$5.40–$9.40/ft" },
        { label: "Guards & drainage", value: "Quoted on-site" },
      ],
    },
    serviceArea: {
      heading: "Residential gutter service across Chattanooga and Hamilton County.",
      body: [
        "We cover Chattanooga proper, Hixson, Red Bank, Soddy-Daisy, East Brainerd, Ooltewah, Signal Mountain, Lookout Mountain, East Ridge, and Collegedale — essentially all of Hamilton County. We also reach Cleveland TN, Ringgold and Fort Oglethorpe GA for the right job.",
        "Not sure if you're in range? Call and we'll tell you straight.",
      ],
    },
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
    related: [REL.cleaning, REL.repair, REL.installation, REL.guards, REL.downspouts, REL.drainage],
    seo: {
      metaTitle: "Residential Gutter Services in Chattanooga, TN | Gutter-It",
      metaDescription:
        "Full residential gutter services in Chattanooga, TN — cleaning, repair, seamless installation, guards, and drainage. Family-owned. Free quotes.",
    },
  },

  // =====================================================================
  // GUTTER SILO — INDIVIDUAL SERVICES
  // =====================================================================
  {
    slug: "gutter-replacement",
    silo: "gutters",
    title: "Gutter Replacement",
    testimonialFilter: "installation",
    hero: {
      eyebrow: "Chattanooga · Hamilton County",
      h1: "Gutter replacement, when repair isn't worth it anymore.",
      lede: "When the gutters are corroded, undersized, or have failed at every seam, patching them is throwing money away. We tear out the old system and replace it with seamless aluminum formed to your roof — usually in a single day.",
      image: IMG.installGutter,
      imageAlt: "New seamless aluminum gutters replacing an old system in Chattanooga",
    },
    intro: {
      heading: "When it's time to replace instead of repair.",
      body: [
        "There's a point where a gutter system stops being worth fixing. The aluminum is pitted and corroded, the seams have all let go, the pitch is wrong on every run, and you've already paid for two or three repairs in as many years. In Chattanooga's wet, tree-heavy climate, a lot of original 1980s gutters hit that point right about now.",
        "We don't lead with replacement. We lead with the truth — and sometimes the truth is that a tear-out is cheaper over five years than chasing leaks around a system that's already gone. When that's the case, we say so, and we form a brand-new seamless system on your driveway to replace it.",
        "Replacement is a full tear-off: old gutters and hardware come down and leave in our truck, the fascia gets checked (and repaired if it's rotted), and new aluminum goes up with hidden hangers, correct pitch, and properly sized downspouts.",
      ],
    },
    signs: {
      heading: "Signs your gutters need replacing, not repairing.",
      items: [
        {
          title: "Leaking at most or all of the seams",
          body: "On sectional gutters, every joint is a future leak. When five of them are streaked and dripping, sealing one at a time is a losing game — seamless eliminates the joints entirely.",
        },
        {
          title: "Visible corrosion, pitting, or rust-through",
          body: "Once aluminum is pitted or steel gutters are rusting through, there's no repair. The metal itself is failing and water finds every weak spot.",
        },
        {
          title: "Undersized for the roof",
          body: "Old 4- and 5-inch gutters with 2x3 downspouts can't move the water a modern storm drops on an 1,800-square-foot roof. They overflow even clean. Upsizing means new gutters.",
        },
        {
          title: "Sagging that won't stay fixed",
          body: "If the run has been re-hung twice and still sags, the gutter itself has lost its shape or the fascia is too far gone to hold hangers.",
        },
        {
          title: "A mismatched patchwork from past owners",
          body: "Different colors, sizes, and eras of hardware all on one house. Pulling it all and starting clean is usually cheaper than fixing the Frankenstein.",
        },
        {
          title: "You're already replacing the roof",
          body: "New shingles and drip edge are the right time to do gutters too. Doing them together is the only way to guarantee water leaves the roof correctly.",
        },
      ],
    },
    whatsIncluded: {
      heading: "What a gutter replacement includes.",
      items: [
        {
          title: "Full tear-off and haul-away",
          body: "Old gutters, downspouts, brackets, and hardware come down and leave with us. We recycle the aluminum and you don't have to schedule a city pickup.",
        },
        {
          title: "Fascia inspection before we hang anything",
          body: "We check the wood behind the old gutters. If it's rotted from years of overflow, we tell you and quote the fascia repair before any new gutter goes up — new gutters on bad fascia just fail again.",
        },
        {
          title: "Seamless aluminum, formed on-site",
          body: "6-inch K-style aluminum run through the brake on your driveway to the exact length of each roof line. No shop-cut joints in the middle of a run.",
        },
        {
          title: "Correctly sized, properly pitched downspouts",
          body: "3x4 downspouts as standard, sized up to 4x5 on big roofs, pitched to actually move the water away from the house.",
        },
        {
          title: "5-year workmanship warranty in writing",
          body: "Every seam, hanger, and fastener is covered for five years, written on the receipt.",
        },
      ],
    },
    process: {
      heading: "How a replacement day runs.",
      steps: [
        {
          title: "Measure and confirm color",
          body: "We re-walk the house, confirm linear footage, downspout placement, and color from the swatch book before ordering coil.",
        },
        {
          title: "Tear off the old system",
          body: "Old gutters come down in sections into the truck. Nothing gets left in your yard.",
        },
        {
          title: "Check and repair fascia",
          body: "We inspect the fascia board and flag any rot. Repair gets agreed and handled before new gutters go up.",
        },
        {
          title: "Form and hang seamless runs",
          body: "Aluminum is formed on the driveway and hung with hidden hangers every 24 inches, pitched toward the downspouts.",
        },
        {
          title: "Downspouts and drainage",
          body: "New downspouts strapped and pitched, with splash blocks or extensions to move water off the foundation.",
        },
        {
          title: "Cleanup and walk-through",
          body: "Every screw and scrap picked up, then we walk the finished system with you and water-test if you want.",
        },
      ],
    },
    photos: [
      {
        src: IMG.installGutter,
        alt: "Newly replaced seamless aluminum gutter on a Chattanooga home",
      },
    ],
    pricing: {
      headline: "What gutter replacement costs in Chattanooga.",
      body: [
        "Replacement is priced like installation plus tear-off — roughly $5.40 to $9.40 per linear foot for seamless aluminum, with the tear-off and haul-away built into the quote. A typical 1,500-square-foot home runs around $900 to $1,600.",
        "If the fascia behind the old gutters has rotted, that's quoted separately and shown to you before we proceed. You get a fixed written number on-site — no padded phone estimates.",
      ],
      bullets: [
        { label: "1 story, 120–150 ft", value: "$900–$1,400" },
        { label: "2 story, 150–180 ft", value: "$1,400–$2,000" },
        { label: "Complex roof line", value: "$2,000–$3,200" },
        { label: "Fascia repair", value: "Quoted on-site" },
      ],
    },
    serviceArea: {
      heading: "Gutter replacement across Hamilton County.",
      body: [
        "We replace gutters all over Chattanooga, Hixson, Red Bank, Soddy-Daisy, Signal Mountain, and the rest of Hamilton County. The Hixson and Signal Mountain corridors keep us busy with original gutters that have done their forty years.",
        "Outside the county? Call anyway — we've done replacements as far as Cleveland and Ringgold.",
      ],
    },
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
    related: [REL.installation, REL.repair, REL.fascia, REL.hub],
    seo: {
      metaTitle: "Gutter Replacement in Chattanooga, TN | Gutter-It",
      metaDescription:
        "Gutter replacement in Chattanooga, TN. Full tear-out and seamless aluminum replacement when repair isn't worth it. Free on-site quote, 5-year warranty.",
    },
  },

  // ---------------------------------------------------------------------
  {
    slug: "downspout-services",
    silo: "gutters",
    title: "Downspout Services",
    testimonialFilter: "cleaning",
    hero: {
      eyebrow: "Chattanooga · Hamilton County",
      h1: "Downspout cleaning, unclogging, repair, and installation.",
      lede: "Your gutters can be spotless and still flood the foundation if the downspouts can't move the water. We clear clogs, fix broken sections, and add new downspouts where the roof needs them — above ground and below.",
      image: IMG.repairUnder,
      imageAlt: "Downspout being cleared and repaired on a Chattanooga home",
    },
    intro: {
      heading: "The part of the gutter system everyone forgets.",
      body: [
        "Downspouts are the whole point of a gutter. The trough just collects water — the downspout is what actually carries it away from your house. When one clogs, the gutter above it backs up, overflows, and dumps water exactly where you don't want it: against the fascia and down the foundation wall.",
        "In Chattanooga, downspouts clog from two directions. Leaves and shingle grit pack the top elbow, and underground extensions silt up below the ground line where you can't see them. We handle both — and we can tell the difference by hosing the downspout and watching where the water stops.",
        "If a downspout is crushed, disconnected, or dumping right next to the foundation, we repair or re-route it. And if your roof drains too much water to one corner, we add a downspout so a single one isn't doing the work of two.",
      ],
    },
    signs: {
      heading: "Signs your downspouts need attention.",
      items: [
        {
          title: "A silent downspout in a downpour",
          body: "If it's pouring and the downspout isn't gushing at the bottom, it's clogged — and the water is going behind the gutter instead.",
        },
        {
          title: "Water pooling at the base of the house",
          body: "A downspout dumping right at the foundation saturates the soil and finds its way into crawlspaces and basements. It needs an extension or a buried drain.",
        },
        {
          title: "A downspout that's come loose or fallen off",
          body: "Straps fail, elbows pop off, and sections separate. A disconnected downspout sends roof water straight down the wall.",
        },
        {
          title: "Erosion or a washed-out trench below the outlet",
          body: "If the ground under the downspout is gullied out, too much water is hitting one spot. We fix the discharge so it stops eroding.",
        },
        {
          title: "Overflowing gutters that are otherwise clean",
          body: "Sometimes the trough is fine and the downspout is the bottleneck — undersized or clogged underground. We diagnose which.",
        },
        {
          title: "Ice or staining around the downspout in winter",
          body: "Water backing up at a clogged downspout freezes and stains the siding. Clearing the blockage stops it.",
        },
      ],
    },
    whatsIncluded: {
      heading: "What downspout service covers.",
      items: [
        {
          title: "Flushing and clearing every downspout",
          body: "We hose each downspout until clean water runs out the bottom. Blocked ones get snaked from the top.",
        },
        {
          title: "Underground blockage diagnosis",
          body: "If water doesn't exit the bottom, the clog is below ground. We locate it, show you, and clear what we can or quote the dig.",
        },
        {
          title: "Repairing damaged sections and elbows",
          body: "Crushed or separated downspouts, failed straps, and broken elbows replaced in matching color.",
        },
        {
          title: "New downspout installation",
          body: "Additional downspouts added where the roof overloads a single outlet, sized and pitched to actually move the water.",
        },
        {
          title: "Discharge that goes the right direction",
          body: "Splash blocks, extensions, or buried drains so the water ends up away from the foundation, not against it.",
        },
      ],
    },
    process: {
      heading: "How a downspout visit runs.",
      steps: [
        {
          title: "Same-day callback",
          body: "Reach out and hear back the same day. Active foundation flooding jumps the line.",
        },
        {
          title: "Test every downspout",
          body: "We run a hose through each one and watch where the water goes — top clog, underground clog, or clear.",
        },
        {
          title: "Clear or repair",
          body: "Snake the clogs, replace the damaged sections, re-strap what's loose.",
        },
        {
          title: "Fix the discharge",
          body: "Add splash blocks or extensions so water exits away from the house.",
        },
        {
          title: "Confirm flow and walk-through",
          body: "We re-test, show you clean flow, and flag anything underground that needs a follow-up dig.",
        },
      ],
    },
    photos: [
      { src: IMG.repairUnder, alt: "Cleared and repaired downspout on a Chattanooga home" },
    ],
    pricing: {
      headline: "What downspout work costs in Chattanooga.",
      body: [
        "Clearing and flushing downspouts is usually part of a gutter cleaning visit. A standalone downspout unclog runs $75–$150 depending on access and how deep the blockage is. Repairs and new downspout installs are quoted on-site based on length and material.",
        "Underground blockages that need digging or a longer snake are quoted separately — we always show you the problem first.",
      ],
      bullets: [
        { label: "Downspout unclog (above ground)", value: "$75–$150" },
        { label: "Replace damaged section", value: "From $85" },
        { label: "New downspout install", value: "Quoted on-site" },
        { label: "Underground blockage", value: "Quoted on-site" },
      ],
    },
    serviceArea: {
      heading: "Downspout service across Hamilton County.",
      body: [
        "We work on downspouts everywhere we clean gutters — Chattanooga, Hixson, Red Bank, Soddy-Daisy, East Brainerd, and the rest of Hamilton County.",
        "Underground drainage problems are common in older Chattanooga neighborhoods where downspouts were tied into clay pipe decades ago. We see them constantly.",
      ],
    },
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
    related: [REL.cleaning, REL.drainage, REL.repair, REL.hub],
    seo: {
      metaTitle: "Downspout Services in Chattanooga, TN | Gutter-It",
      metaDescription:
        "Downspout cleaning, unclogging, repair, and installation in Chattanooga, TN. We get roof water away from your foundation. Free quote, same-day callback.",
    },
  },

  // ---------------------------------------------------------------------
  {
    slug: "gutter-leak-repair",
    silo: "gutters",
    title: "Gutter Leak Repair & Resealing",
    testimonialFilter: "gutter-repair",
    hero: {
      eyebrow: "Chattanooga · Hamilton County",
      h1: "Gutter leak repair and resealing, done right the first time.",
      lede: "Drips at the seams, corners, and end caps don't mean you need new gutters. We strip the failed sealant, clean the joint, and reseal it properly — so it stops leaking instead of leaking again in a month.",
      image: IMG.repairFascia,
      imageAlt: "Sealing a leaking gutter seam on a Chattanooga home",
    },
    intro: {
      heading: "Why your gutters leak at the joints.",
      body: [
        "On sectional gutters, every place two pieces meet — seams, inside and outside corners, end caps — is sealed with gutter sealant. That sealant has a lifespan. Chattanooga's sun bakes it, the freeze-thaw cycles work it loose, and after ten or fifteen years it cracks and the joint starts to drip.",
        "Most companies will use a leak as an excuse to quote you a full replacement. We don't. If the gutter itself is sound and only the joints are failing, resealing is a fraction of the cost and lasts for years — if it's done right.",
        "Done right means stripping the old sealant completely, cleaning and drying the joint, and applying the correct gutter-grade sealant — not smearing a bead of caulk over the top of crumbling old sealant and calling it fixed. That's why our resealing holds.",
      ],
    },
    signs: {
      heading: "Signs you've got a sealing problem, not a replacement problem.",
      items: [
        {
          title: "Dripping at a seam or corner during rain",
          body: "A steady drip from a specific joint — not the whole run — is a classic failed-sealant leak. Reseal the joint and it stops.",
        },
        {
          title: "A stain or streak below one spot",
          body: "Vertical staining under a single seam or corner means that joint has been weeping for a while. The metal's fine; the seal isn't.",
        },
        {
          title: "Water dripping behind the gutter at an end cap",
          body: "End caps are a common failure point. When the seal there goes, water runs down behind the gutter and onto the fascia.",
        },
        {
          title: "Visible cracked or peeling old sealant",
          body: "If you can see crumbling gray or black sealant at the joints, it's done its job and needs to be stripped and redone.",
        },
        {
          title: "A leak that came back after a quick patch",
          body: "Someone caulked over old sealant and it failed again. Resealing only lasts if the old material comes off first — which is how we do it.",
        },
        {
          title: "Drips at an inside corner (the worst offender)",
          body: "Inside corners take the most water and are the hardest to seal cheaply. We strip and reseal them properly so they hold.",
        },
      ],
    },
    whatsIncluded: {
      heading: "What gutter resealing includes.",
      items: [
        {
          title: "Stripping the failed sealant",
          body: "We remove the old, cracked sealant completely instead of caulking over it. That's the difference between a fix and a temporary patch.",
        },
        {
          title: "Cleaning and drying the joint",
          body: "The joint gets cleaned of debris, grit, and old residue, then dried so the new sealant actually bonds to the metal.",
        },
        {
          title: "Proper gutter-grade sealant",
          body: "We use the correct flexible, weather-rated gutter sealant — not hardware-store silicone that lets go in a season.",
        },
        {
          title: "Sealing seams, corners, and end caps",
          body: "Every leaking joint on the run gets treated, not just the one you noticed. We check the whole length while we're up there.",
        },
        {
          title: "A leak test before we leave",
          body: "We run water through the resealed section to confirm it's dry before we call it done.",
        },
      ],
    },
    process: {
      heading: "How a resealing visit runs.",
      steps: [
        {
          title: "Find every leak",
          body: "We run water through the gutters and watch where it weeps — not just the joint you reported.",
        },
        {
          title: "Strip the old sealant",
          body: "Failed sealant comes off the joint completely.",
        },
        {
          title: "Clean and dry",
          body: "The joint gets prepped so the new sealant bonds to bare metal.",
        },
        {
          title: "Reseal properly",
          body: "Correct gutter-grade sealant applied to every leaking joint.",
        },
        {
          title: "Water-test and confirm",
          body: "We re-run water to confirm the joint is dry before we pack up.",
        },
      ],
    },
    photos: [
      { src: IMG.repairFascia, alt: "Resealed gutter joint on a Chattanooga home" },
    ],
    pricing: {
      headline: "What gutter resealing costs in Chattanooga.",
      body: [
        "Resealing is priced by how many joints need attention and the height of the run. A single corner or end cap is usually $75–$150. A full run with multiple failed seams runs more but is still a fraction of a replacement.",
        "We give a firm number on-site. If we get up there and find the gutter metal itself is corroded rather than just the sealant, we'll tell you honestly that resealing won't hold and walk you through the options.",
      ],
      bullets: [
        { label: "Single corner / end cap", value: "$75–$150" },
        { label: "Multiple seams on a run", value: "$150–$350" },
        { label: "Whole-house reseal", value: "Quoted on-site" },
        { label: "If metal is corroded", value: "We'll tell you straight" },
      ],
    },
    serviceArea: {
      heading: "Gutter leak repair across Hamilton County.",
      body: [
        "We reseal leaking gutters throughout Chattanooga, Hixson, Red Bank, Soddy-Daisy, and the rest of Hamilton County. Older sectional gutters in established neighborhoods are our most common resealing job.",
        "If a leak is actively making your house wet, call us directly — leaks jump the line.",
      ],
    },
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
    related: [REL.repair, REL.realignment, REL.fascia, REL.hub],
    seo: {
      metaTitle: "Gutter Leak Repair & Resealing in Chattanooga, TN | Gutter-It",
      metaDescription:
        "Gutter leak repair and resealing in Chattanooga, TN. Leaking seams, corners, and end caps stripped and resealed properly. Free quote, same-day callback.",
    },
  },

  // ---------------------------------------------------------------------
  {
    slug: "gutter-realignment",
    silo: "gutters",
    title: "Gutter Realignment & Re-Pitching",
    testimonialFilter: "gutter-repair",
    hero: {
      eyebrow: "Chattanooga · Hamilton County",
      h1: "Gutter realignment and re-pitching for water that won't drain.",
      lede: "If water sits in your gutters after the rain stops, the pitch is wrong. We reset the slope so every run drains to the downspout the way it should — no standing water, no mosquito breeding, no overflow.",
      image: IMG.repairUnder,
      imageAlt: "Re-pitching a gutter run on a Chattanooga home",
    },
    intro: {
      heading: "Why standing water in a gutter is a real problem.",
      body: [
        "Gutters are supposed to slope — about a quarter inch of drop for every ten feet — so water runs toward the downspout instead of sitting in the trough. Over time, hangers loosen, sections sag, and the pitch flattens or even reverses. Then water pools, and a pool of standing water in a gutter is bad news.",
        "Standing water means added weight that sags the gutter further, a perfect mosquito nursery in our Chattanooga summers, debris that won't flush because there's no flow to carry it, and overflow at the low spot every time it rains hard. None of that gets better on its own.",
        "Realignment fixes it. We find the low spots, reset the hangers, and re-establish proper pitch toward the downspouts. It's far cheaper than replacement and it's the actual fix for the 'my gutters overflow even when they're clean' problem.",
      ],
    },
    signs: {
      heading: "Signs your gutters need re-pitching.",
      items: [
        {
          title: "Water still sitting in the gutter a day after rain",
          body: "If you can see standing water or a waterline stain inside the trough when it's dry out, the pitch is flat or reversed at that spot.",
        },
        {
          title: "Overflow at one spot even when clean",
          body: "A gutter that spills at the same place every storm, despite being debris-free, is draining the wrong direction toward that low point.",
        },
        {
          title: "Mosquitoes or algae in the gutter",
          body: "Standing water breeds mosquitoes and grows green slime. Both are signs the water isn't moving.",
        },
        {
          title: "A visibly sagging or wavy run",
          body: "If the gutter line dips in the middle instead of running straight to the downspout, the hangers have let go and the pitch is gone.",
        },
        {
          title: "Debris that won't flush out",
          body: "With no slope, there's no flow to carry debris to the downspout, so it packs in the low spot and clogs.",
        },
        {
          title: "Downspout on the high end of a run",
          body: "Sometimes the downspout placement and the pitch fight each other. We re-pitch toward the actual outlet.",
        },
      ],
    },
    whatsIncluded: {
      heading: "What realignment includes.",
      items: [
        {
          title: "Finding the low spots",
          body: "We check the pitch along each run with water or a level and identify exactly where it's flat, reversed, or sagging.",
        },
        {
          title: "Resetting and adding hangers",
          body: "Loose or failed hidden hangers get re-secured or replaced, and we add hangers where the run needs more support to hold its line.",
        },
        {
          title: "Re-establishing proper slope",
          body: "We reset the run to a quarter-inch of drop per ten feet toward the downspout so water actually flows.",
        },
        {
          title: "Confirming flow with water",
          body: "We run water through the re-pitched section to confirm it drains clean to the downspout with no pooling.",
        },
        {
          title: "Flagging anything beyond re-pitching",
          body: "If the fascia behind the run has rotted and won't hold hangers, we tell you — that has to be addressed for the realignment to hold.",
        },
      ],
    },
    process: {
      heading: "How a re-pitching visit runs.",
      steps: [
        {
          title: "Diagnose the slope",
          body: "We measure pitch along each run and find the low and reversed sections.",
        },
        {
          title: "Reset the hangers",
          body: "Loose hangers re-secured, failed ones replaced, extra ones added where needed.",
        },
        {
          title: "Re-pitch the run",
          body: "The line is reset to proper slope toward the downspout.",
        },
        {
          title: "Water-test",
          body: "We run water to confirm it drains with no standing water left behind.",
        },
        {
          title: "Walk-through",
          body: "We show you the corrected flow and note anything else we saw up there.",
        },
      ],
    },
    photos: [
      { src: IMG.repairUnder, alt: "Re-pitched gutter run draining properly on a Chattanooga home" },
    ],
    pricing: {
      headline: "What gutter realignment costs in Chattanooga.",
      body: [
        "Re-pitching is priced by the length of run that needs correcting and how many hangers it takes. A single sagging run is usually $100–$250. Multiple runs or a whole-house realignment is quoted on-site.",
        "It's almost always far cheaper than replacement — and it's the right fix when the gutters are otherwise sound but just draining wrong.",
      ],
      bullets: [
        { label: "Single run re-pitch", value: "$100–$250" },
        { label: "Multiple runs", value: "$250–$500" },
        { label: "Whole-house realignment", value: "Quoted on-site" },
        { label: "Fascia repair (if needed)", value: "Quoted on-site" },
      ],
    },
    serviceArea: {
      heading: "Gutter realignment across Hamilton County.",
      body: [
        "We re-pitch gutters throughout Chattanooga, Hixson, Red Bank, Soddy-Daisy, Signal Mountain, and the rest of Hamilton County.",
        "Standing-water complaints spike here after big storms loosen hangers. If yours are overflowing even though they're clean, this is usually the fix.",
      ],
    },
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
    related: [REL.repair, REL.leakRepair, REL.fascia, REL.hub],
    seo: {
      metaTitle: "Gutter Realignment & Re-Pitching in Chattanooga, TN | Gutter-It",
      metaDescription:
        "Gutter realignment and re-pitching in Chattanooga, TN. Fix standing water and gutters that overflow even when clean. Free quote, same-day callback.",
    },
  },

  // ---------------------------------------------------------------------
  {
    slug: "gutter-inspection",
    silo: "gutters",
    title: "Gutter Inspection",
    testimonialFilter: "cleaning",
    hero: {
      eyebrow: "Chattanooga · Hamilton County",
      h1: "Honest gutter inspection with a photo report.",
      lede: "Before you buy a house, after a storm, or just because something looks off — we get up on the ladder, document the whole system with photos, and give you a straight repair-or-replace recommendation with no pressure to buy anything.",
      image: IMG.cleaningLeaves,
      imageAlt: "Inspecting a gutter system on a Chattanooga home",
    },
    intro: {
      heading: "A real look at your gutters, documented.",
      body: [
        "Most 'gutter inspections' are a salesperson glancing from the driveway and quoting a replacement. Ours is different: we actually get on the ladder, look inside every run, check the hangers, seams, pitch, downspouts, fascia, and soffit, and photograph what we find so you can see it yourself.",
        "You get a report with photos and a plain-English summary: what's fine, what needs a small repair, what to keep an eye on, and whether anything genuinely needs replacing. If your gutters are in good shape, the report says so — we're not going to invent problems.",
        "It's the right call before buying a home in Chattanooga (gutter and fascia damage is easy to miss and expensive to fix), after a big storm, or any time you suspect a problem but can't see it from the ground.",
      ],
    },
    signs: {
      heading: "When a gutter inspection is worth it.",
      items: [
        {
          title: "You're buying or selling a home",
          body: "Gutter, fascia, and soffit damage is easy to miss on a walkthrough and expensive to fix later. A documented inspection protects you either way.",
        },
        {
          title: "After a major storm or wind event",
          body: "Storms loosen hangers, dent runs, and tear downspouts loose in ways you can't always see from the ground.",
        },
        {
          title: "You see staining but can't find the source",
          body: "Streaks on the siding or fascia mean overflow somewhere. We find exactly where and why.",
        },
        {
          title: "Another company quoted a big replacement",
          body: "Get a documented second opinion before you spend thousands. We'll tell you honestly whether it's warranted.",
        },
        {
          title: "You've never had them looked at",
          body: "If you don't know the age or condition of your gutters, an inspection gives you a baseline and a maintenance plan.",
        },
        {
          title: "Water's getting into the crawlspace or basement",
          body: "Often the gutters and downspouts are the cause. We check whether roof water is being sent toward the foundation.",
        },
      ],
    },
    whatsIncluded: {
      heading: "What the inspection covers.",
      items: [
        {
          title: "Every run, inside and out",
          body: "We get on the ladder and look inside each gutter run for debris, standing water, corrosion, and sagging — not a driveway glance.",
        },
        {
          title: "Hangers, seams, and pitch",
          body: "We check that hangers are holding, seams aren't leaking, and the run is pitched to drain properly.",
        },
        {
          title: "Downspouts and drainage",
          body: "We confirm downspouts are clear, connected, and discharging away from the foundation.",
        },
        {
          title: "Fascia and soffit condition",
          body: "We check the wood behind and below the gutters for rot, the most common (and costly) overflow damage.",
        },
        {
          title: "A photo report with a clear recommendation",
          body: "You get photos of what we found and a plain summary: keep, repair, watch, or replace — with no pressure.",
        },
      ],
    },
    process: {
      heading: "How an inspection visit runs.",
      steps: [
        {
          title: "Schedule the visit",
          body: "Same-day callback; we set a time that works, including quick turnarounds for home-sale deadlines.",
        },
        {
          title: "Full system walk and climb",
          body: "We inspect every run, downspout, and the fascia/soffit, photographing as we go.",
        },
        {
          title: "Document the findings",
          body: "Photos plus notes on condition, organized by what's fine and what needs attention.",
        },
        {
          title: "Honest recommendation",
          body: "A clear repair-or-replace summary with rough costs — and 'they're fine' if they're fine.",
        },
        {
          title: "No-pressure follow-up",
          body: "If you want the work done we'll quote it; if not, the report is yours to use however you like.",
        },
      ],
    },
    photos: [
      { src: IMG.cleaningLeaves, alt: "Documented gutter inspection on a Chattanooga home" },
    ],
    pricing: {
      headline: "What a gutter inspection costs in Chattanooga.",
      body: [
        "A standalone documented inspection with a photo report is a flat, modest fee that we'll quote when you call — and we credit it toward the work if you decide to have us do any repairs.",
        "If you're already booking a cleaning, the visual inspection is included free; the standalone fee is for when you want the full documented report on its own.",
      ],
      bullets: [
        { label: "Documented inspection + photo report", value: "Flat fee, quoted on call" },
        { label: "Visual check during a cleaning", value: "Included free" },
        { label: "Credited toward repairs", value: "Yes" },
        { label: "Pre-purchase / home-sale rush", value: "Available" },
      ],
    },
    serviceArea: {
      heading: "Gutter inspections across Hamilton County.",
      body: [
        "We inspect gutters throughout Chattanooga, Hixson, Red Bank, Soddy-Daisy, and the rest of Hamilton County — including quick-turnaround pre-purchase inspections for home buyers on a closing deadline.",
        "Buying outside the immediate area? Call and we'll let you know if we can reach it.",
      ],
    },
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
    related: [REL.cleaning, REL.repair, REL.replacement, REL.hub],
    seo: {
      metaTitle: "Gutter Inspection in Chattanooga, TN | Gutter-It",
      metaDescription:
        "Honest gutter inspection in Chattanooga, TN with a photo report and a straight repair-or-replace recommendation. Pre-purchase inspections available.",
    },
  },

  // ---------------------------------------------------------------------
  {
    slug: "fascia-repair",
    silo: "gutters",
    title: "Fascia Repair",
    testimonialFilter: "installation",
    hero: {
      eyebrow: "Chattanooga · Hamilton County",
      h1: "Fascia repair for the rot that overflowing gutters cause.",
      lede: "The fascia board is what your gutters hang on. When gutters overflow for years, that board rots — and new gutters won't hold on rotted wood. We replace the damaged fascia and fix the gutter problem that caused it.",
      image: IMG.repairFascia,
      imageAlt: "Replacing rotted fascia board behind a gutter on a Chattanooga home",
    },
    intro: {
      heading: "Why fascia rots, and why it matters.",
      body: [
        "Fascia is the horizontal board running along the edge of the roof, right behind the gutter. It's what the gutter hangers screw into, and it's the last line of defense before water reaches the roof structure. In Chattanooga's wet climate, fascia takes a beating — and overflowing gutters are the number-one cause of fascia rot.",
        "When a gutter clogs and overflows month after month, water runs down behind it and soaks the fascia board. The paint blisters, the wood softens, and eventually it rots through. Once that happens, the gutter has nothing solid to hang on, and you get sagging runs, more overflow, and a cycle that feeds itself.",
        "We replace the rotted fascia with new material, prime and paint it to match, and re-hang the gutter properly — and we fix whatever was causing the overflow so it doesn't rot again. Fascia repair and gutter work go together, which is why doing them with one crew makes sense.",
      ],
    },
    signs: {
      heading: "Signs your fascia is rotting.",
      items: [
        {
          title: "Peeling or blistering paint along the roof edge",
          body: "Paint lifts when moisture is trapped behind it. It's the first visible sign the fascia is taking on water.",
        },
        {
          title: "Soft or spongy wood behind the gutter",
          body: "If the fascia gives when you press on it, the rot is already underway and the board needs replacing.",
        },
        {
          title: "Gutters pulling away or sagging",
          body: "Hangers can't hold in rotted wood. A run that sags or pulls off the house usually means the fascia behind it has failed.",
        },
        {
          title: "Dark staining or visible water damage",
          body: "Streaks and dark patches on the fascia mean it's been wet repeatedly — the overflow has been going on a while.",
        },
        {
          title: "Wood-boring pests at the roof line",
          body: "Carpenter ants and termites are drawn to soft, wet wood. Activity at the fascia often means rot is already present.",
        },
        {
          title: "A gutter that overflowed for years",
          body: "If you've had chronically clogged or overflowing gutters, assume the fascia behind them has taken damage and have it checked.",
        },
      ],
    },
    whatsIncluded: {
      heading: "What fascia repair includes.",
      items: [
        {
          title: "Removing the gutter and damaged board",
          body: "We take down the affected gutter section and remove the rotted fascia back to sound wood.",
        },
        {
          title: "Checking what's behind it",
          body: "We look at the roof edge and rafter tails for any rot that spread beyond the fascia, and flag it if the damage goes deeper.",
        },
        {
          title: "New fascia, primed and painted",
          body: "We install new fascia material, prime it, and paint it to match your trim so the repair blends in.",
        },
        {
          title: "Re-hanging the gutter properly",
          body: "The gutter goes back up on solid wood with proper hangers and pitch.",
        },
        {
          title: "Fixing the cause",
          body: "We address the overflow problem — cleaning, re-pitching, or downspout work — so the new fascia doesn't rot the same way.",
        },
      ],
    },
    process: {
      heading: "How a fascia repair runs.",
      steps: [
        {
          title: "Inspect and quote",
          body: "We assess how far the rot extends and give a firm number before any wood comes off.",
        },
        {
          title: "Remove gutter and rotted fascia",
          body: "The gutter section comes down and the damaged board is removed back to sound material.",
        },
        {
          title: "Check the structure behind",
          body: "We confirm the rot didn't spread to the rafter tails or roof edge.",
        },
        {
          title: "Install, prime, and paint new fascia",
          body: "New board goes up, primed and painted to match your trim.",
        },
        {
          title: "Re-hang and fix the cause",
          body: "Gutter goes back on solid wood, and we address whatever caused the overflow.",
        },
      ],
    },
    photos: [
      { src: IMG.repairFascia, alt: "New fascia board installed behind a gutter on a Chattanooga home" },
    ],
    pricing: {
      headline: "What fascia repair costs in Chattanooga.",
      body: [
        "Fascia repair is priced by the linear footage of board that needs replacing and the height/access of the work. A single damaged section runs $150–$400; longer runs or two-story access cost more.",
        "We quote it on-site after we see how far the rot extends. If the damage spread to the rafter tails behind the fascia, that's flagged and quoted separately before we proceed.",
      ],
      bullets: [
        { label: "Single section", value: "$150–$400" },
        { label: "Longer run", value: "$400–$900" },
        { label: "Two-story access", value: "Quoted on-site" },
        { label: "Structural rot behind fascia", value: "Quoted on-site" },
      ],
    },
    serviceArea: {
      heading: "Fascia repair across Hamilton County.",
      body: [
        "We repair fascia throughout Chattanooga, Hixson, Red Bank, Soddy-Daisy, and the rest of Hamilton County — usually as part of a gutter repair or replacement where the overflow already did its damage.",
        "Older homes in established neighborhoods see the most fascia rot, since the gutters above have had decades to overflow.",
      ],
    },
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
    related: [REL.soffit, REL.repair, REL.replacement, REL.hub],
    seo: {
      metaTitle: "Fascia Repair in Chattanooga, TN | Gutter-It",
      metaDescription:
        "Fascia repair in Chattanooga, TN. Replace rotted, water-damaged fascia board behind your gutters and fix the overflow that caused it. Free on-site quote.",
    },
  },

  // ---------------------------------------------------------------------
  {
    slug: "soffit-repair",
    silo: "gutters",
    title: "Soffit Repair",
    testimonialFilter: "installation",
    hero: {
      eyebrow: "Chattanooga · Hamilton County",
      h1: "Soffit repair for sagging, rot, and the pests behind it.",
      lede: "The soffit is the underside of your roof overhang. When it sags, stains, or rots, it's usually moisture from a gutter problem above — and an open invitation to wasps, birds, and squirrels. We repair the soffit and stop what's getting in.",
      image: IMG.repairFascia,
      imageAlt: "Repairing rotted soffit under a roof overhang on a Chattanooga home",
    },
    intro: {
      heading: "What the soffit does, and why it fails.",
      body: [
        "Soffit is the panel that closes in the underside of your roof's overhang, between the fascia and the wall. It does two jobs: it seals the roof structure off from pests and weather, and (when it's vented) it lets air into the attic to keep the roof healthy. When the soffit fails, both of those jobs stop happening.",
        "In Chattanooga, soffit usually fails from moisture above — a leaking or overflowing gutter, a roof drip, or fascia rot that spread. The panel stains, sags, and eventually rots or pulls loose. Once there's a gap, wasps build nests, birds and squirrels move into the attic, and the problem compounds fast.",
        "We repair or replace the damaged soffit, restore proper venting where it matters, and address the moisture source above so it doesn't come back. Like fascia, soffit problems are tied to the gutters — which is why we handle them together.",
      ],
    },
    signs: {
      heading: "Signs your soffit needs repair.",
      items: [
        {
          title: "Sagging or drooping panels",
          body: "Soffit that's pulling down from the overhang has lost its support to moisture or rot and needs attention before it falls.",
        },
        {
          title: "Staining or discoloration underneath",
          body: "Brown or dark stains on the soffit mean water has been getting in from above — usually a gutter or roof issue.",
        },
        {
          title: "Visible holes or gaps",
          body: "Any opening is a doorway for wasps, birds, and squirrels into your attic. Pests will find it fast.",
        },
        {
          title: "Wasp nests or bird activity at the overhang",
          body: "If something's nesting under your eaves, there's a gap in the soffit they're using.",
        },
        {
          title: "Peeling paint or soft, crumbling material",
          body: "Like fascia, soffit gives away its rot through failing paint and soft spots in the panel.",
        },
        {
          title: "Higher attic humidity or heat",
          body: "Damaged or blocked vented soffit stops the attic from breathing, which shows up as heat and moisture problems up top.",
        },
      ],
    },
    whatsIncluded: {
      heading: "What soffit repair includes.",
      items: [
        {
          title: "Removing damaged soffit",
          body: "We take out the rotted, sagging, or pest-damaged panels back to sound material.",
        },
        {
          title: "Checking for pests and nests",
          body: "We look for and clear out wasp nests or animal entry before closing things back up.",
        },
        {
          title: "New soffit, vented where needed",
          body: "We install new soffit material and restore proper venting so the attic can still breathe.",
        },
        {
          title: "Sealing the entry points",
          body: "Gaps that let pests in get closed properly, not just covered over.",
        },
        {
          title: "Addressing the moisture source",
          body: "We fix the gutter or fascia problem above that caused the soffit to fail in the first place.",
        },
      ],
    },
    process: {
      heading: "How a soffit repair runs.",
      steps: [
        {
          title: "Inspect and quote",
          body: "We find the extent of the damage and the moisture source, then give a firm number.",
        },
        {
          title: "Remove damaged panels",
          body: "Rotted or pest-damaged soffit comes out back to sound material.",
        },
        {
          title: "Clear pests and check the cavity",
          body: "Nests and animal entry get cleared and the cavity checked before we close it.",
        },
        {
          title: "Install new vented soffit",
          body: "New panels go up with proper venting restored.",
        },
        {
          title: "Fix the source above",
          body: "We address the gutter or fascia issue that let the water in.",
        },
      ],
    },
    photos: [
      { src: IMG.repairFascia, alt: "New soffit installed under a roof overhang on a Chattanooga home" },
    ],
    pricing: {
      headline: "What soffit repair costs in Chattanooga.",
      body: [
        "Soffit repair is priced by the area that needs replacing and the access. A small section runs $150–$450; larger runs or two-story access cost more.",
        "We quote on-site after we see the damage and the moisture source. If pests have gotten into the attic, we'll point you to whether you need a wildlife pro before we seal it up.",
      ],
      bullets: [
        { label: "Small section", value: "$150–$450" },
        { label: "Larger run", value: "$450–$1,000" },
        { label: "Two-story access", value: "Quoted on-site" },
        { label: "Combined with fascia repair", value: "Bundled quote" },
      ],
    },
    serviceArea: {
      heading: "Soffit repair across Hamilton County.",
      body: [
        "We repair soffit throughout Chattanooga, Hixson, Red Bank, Soddy-Daisy, and the rest of Hamilton County, usually alongside fascia and gutter work.",
        "Older homes with original wood soffit see the most damage — decades of gutter overflow and humidity take their toll.",
      ],
    },
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
    related: [REL.fascia, REL.repair, REL.roofDebris, REL.hub],
    seo: {
      metaTitle: "Soffit Repair in Chattanooga, TN | Gutter-It",
      metaDescription:
        "Soffit repair in Chattanooga, TN. Fix sagging, rotted soffit and the pest and moisture problems behind it. Vented replacement, free on-site quote.",
    },
  },

  // ---------------------------------------------------------------------
  {
    slug: "roof-debris-removal",
    silo: "gutters",
    title: "Roof Debris Removal",
    testimonialFilter: "cleaning",
    hero: {
      eyebrow: "Chattanooga · Hamilton County",
      h1: "Roof debris removal before it ends up in your gutters.",
      lede: "Leaves, branches, and pine needles piled on the roof don't stay there — they slide into the gutters at the next rain and rot the shingles in the meantime. We clear the roof so your cleaning lasts and your roof stays healthy.",
      image: IMG.cleaningLeaves,
      imageAlt: "Clearing leaves and debris off a roof on a Chattanooga home",
    },
    intro: {
      heading: "Why debris on the roof is a gutter problem too.",
      body: [
        "In Chattanooga's tree-heavy neighborhoods, roofs collect debris fast — especially in valleys where two roof planes meet, and on the low side of anything overhung by oaks, maples, or pines. That pile doesn't just sit there. Every rain washes a fresh load of it straight into the gutters, which is why a cleaning that ignores the roof never lasts as long as it should.",
        "It's also bad for the roof itself. Wet leaf debris holds moisture against the shingles, grows moss and algae, and accelerates granule loss. Pine needles wedge under shingle edges and lift them. Branches scuff and puncture. Clearing the roof protects both the gutters below and the shingles underneath.",
        "We clear leaves, pine straw, branches, and seed debris off the roof surface and out of the valleys, then make sure it's hauled away — not blown into your beds. It pairs naturally with a gutter cleaning, and doing both means the gutters stay clean longer.",
      ],
    },
    signs: {
      heading: "Signs your roof needs clearing.",
      items: [
        {
          title: "Visible piles in the roof valleys",
          body: "Valleys are where debris collects and where it slides into the gutters from. If you can see piles up there, they're feeding your gutters.",
        },
        {
          title: "Gutters that re-clog fast after cleaning",
          body: "If your gutters fill back up weeks after a cleaning, debris on the roof above is washing right back into them.",
        },
        {
          title: "Pine needles packed under shingle edges",
          body: "Needles wedge under shingles and lift them, which lets water in. Common on any Chattanooga home near pines or hemlocks.",
        },
        {
          title: "Moss or algae growing on the shingles",
          body: "Debris holds moisture that grows moss and algae, which shortens shingle life. Clearing the debris slows it down.",
        },
        {
          title: "Branches or large debris after a storm",
          body: "Storms drop limbs and heavy debris that scuff and puncture shingles if they're left to sit and shift.",
        },
        {
          title: "Overhanging trees dropping year-round",
          body: "If oaks, maples, or pines hang over the roof, debris is constant and periodic clearing keeps it manageable.",
        },
      ],
    },
    whatsIncluded: {
      heading: "What roof debris removal includes.",
      items: [
        {
          title: "Clearing the roof surface",
          body: "Leaves, pine straw, seed pods, and loose branches removed from the shingle surface by hand or blower as appropriate.",
        },
        {
          title: "Clearing the valleys",
          body: "Roof valleys — where debris piles deepest and slides into gutters — get cleared so the next rain doesn't re-clog you.",
        },
        {
          title: "Checking under shingle edges",
          body: "We pull needles and debris wedged under shingle edges where they lift the shingle and let water in.",
        },
        {
          title: "Haul-away, not blow-into-the-beds",
          body: "Debris gets bagged and hauled, not blown into your landscaping or piled by the trash cans.",
        },
        {
          title: "A look at shingle condition",
          body: "While we're up there we note any moss, lifted shingles, or damage worth keeping an eye on.",
        },
      ],
    },
    process: {
      heading: "How a roof clearing runs.",
      steps: [
        {
          title: "Assess the roof",
          body: "We check pitch, access, and where the debris has collected before getting up.",
        },
        {
          title: "Clear surface and valleys",
          body: "Debris removed from the shingle surface and out of the valleys where it piles.",
        },
        {
          title: "Free the shingle edges",
          body: "Needles and debris wedged under shingles get pulled.",
        },
        {
          title: "Bag and haul",
          body: "Everything gets bagged and taken away — your yard is left clean.",
        },
        {
          title: "Walk-through",
          body: "We note shingle condition and whether a gutter cleaning should follow.",
        },
      ],
    },
    photos: [
      { src: IMG.cleaningLeaves, alt: "Cleared roof and valley on a Chattanooga home" },
    ],
    pricing: {
      headline: "What roof debris removal costs in Chattanooga.",
      body: [
        "Roof debris removal is priced by roof size, pitch, and how much debris has built up. Added to a gutter cleaning it usually runs $75–$200; as a standalone visit it's quoted on-site based on access.",
        "Steep or high roofs that need extra safety equipment are quoted accordingly — we'll give you the number before we start.",
      ],
      bullets: [
        { label: "Added to a gutter cleaning", value: "$75–$200" },
        { label: "Standalone, standard roof", value: "Quoted on-site" },
        { label: "Steep / high roof", value: "Quoted on-site" },
        { label: "Storm debris cleanup", value: "Quoted on-site" },
      ],
    },
    serviceArea: {
      heading: "Roof debris removal across Hamilton County.",
      body: [
        "We clear roofs throughout Chattanooga, Hixson, Red Bank, Soddy-Daisy, Signal Mountain, Lookout Mountain, and the rest of Hamilton County. The mountain and wooded routes — heavy pine and hemlock — need it most.",
        "Pairing it with a gutter cleaning is the most common (and most cost-effective) way to book it.",
      ],
    },
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
    related: [REL.cleaning, REL.guards, REL.roofCleaning, REL.hub],
    seo: {
      metaTitle: "Roof Debris Removal in Chattanooga, TN | Gutter-It",
      metaDescription:
        "Roof debris removal in Chattanooga, TN. Clear leaves, branches, and pine needles off the roof and out of the valleys before they clog your gutters.",
    },
  },

  // ---------------------------------------------------------------------
  {
    slug: "drainage-solutions",
    silo: "gutters",
    title: "Drainage Solutions",
    testimonialFilter: "installation",
    hero: {
      eyebrow: "Chattanooga · Hamilton County",
      h1: "Drainage solutions that move roof water away from your foundation.",
      lede: "Clean gutters and clear downspouts still cause problems if the water dumps right next to the house. We design and install the diversion — splash blocks, extensions, underground drains, and rain chains — that carries it where it belongs.",
      image: IMG.repairUnder,
      imageAlt: "Installing underground downspout drainage on a Chattanooga home",
    },
    intro: {
      heading: "The last step the gutter system depends on.",
      body: [
        "Your gutters can be spotless and your downspouts wide open, and you can still get a wet crawlspace, eroded beds, and a soggy foundation — because the water is being delivered efficiently to exactly the wrong spot: the base of your house. Drainage is the part of the system that finishes the job by carrying that water away.",
        "Chattanooga's clay-heavy soil makes this worse. Clay doesn't absorb water quickly, so roof water that pools at the foundation sits there, saturates the soil, and finds its way into basements and crawlspaces. On sloped lots — and a lot of this area is sloped — it can also wash out landscaping and walkways.",
        "We solve it with the right tool for the situation: splash blocks and above-ground extensions where that's enough, buried downspout drains that carry water to the street or yard where it isn't, and rain chains or rainwater diversion features where you want it to look good while it works. We diagnose the whole path the water takes, not just the downspout.",
      ],
    },
    signs: {
      heading: "Signs you have a drainage problem.",
      items: [
        {
          title: "Water pooling at the foundation",
          body: "Standing water against the house after rain saturates the soil and works toward the basement or crawlspace. The discharge needs to move away.",
        },
        {
          title: "A wet or musty crawlspace or basement",
          body: "Roof water delivered to the foundation is one of the most common causes of crawlspace and basement moisture in Chattanooga.",
        },
        {
          title: "Eroded mulch beds or washed-out trenches",
          body: "If the downspout outlet is gullying out your landscaping, too much water is hitting one spot with nowhere to go.",
        },
        {
          title: "A downspout dumping right at the wall",
          body: "Downspouts that end at the foundation with no splash block or extension are sending all that water straight down.",
        },
        {
          title: "Soggy spots or standing water in the yard",
          body: "Roof water has to go somewhere — if it's creating a swamp in the yard, the drainage path needs designing.",
        },
        {
          title: "Ice and slick spots near the house in winter",
          body: "Water pooling and freezing at the foundation and walkways is both a drainage problem and a hazard.",
        },
      ],
    },
    whatsIncluded: {
      heading: "What drainage solutions cover.",
      items: [
        {
          title: "Splash blocks and extensions",
          body: "The simplest fix — splash blocks and above-ground extensions that carry water a few feet off the foundation where that's all it takes.",
        },
        {
          title: "Underground downspout drainage",
          body: "Buried drain pipe tied into the downspouts that carries water well away — to the street, a lower part of the yard, or a designated drain.",
        },
        {
          title: "Rainwater diversion",
          body: "Surface grading, channels, and diversion that redirect roof water away from the foundation, beds, and walkways.",
        },
        {
          title: "Rain chains",
          body: "A decorative alternative to a closed downspout that guides water from the gutter to the ground at entryways or garden features.",
        },
        {
          title: "Diagnosing the whole water path",
          body: "We look at where the water starts and where it needs to end up, then design the shortest reliable path between the two.",
        },
      ],
    },
    process: {
      heading: "How a drainage project runs.",
      steps: [
        {
          title: "Walk the water path",
          body: "We trace where roof water is going now and where it needs to go, accounting for slope and soil.",
        },
        {
          title: "Design the solution",
          body: "We recommend the right mix — extensions, buried drains, diversion, or rain chains — and quote it.",
        },
        {
          title: "Install",
          body: "Trenching and pipe for underground drains, or set splash blocks and extensions for surface solutions.",
        },
        {
          title: "Tie in and test",
          body: "We connect to the downspouts and run water to confirm it flows where it should.",
        },
        {
          title: "Restore and walk-through",
          body: "Backfill and tidy the work area, then show you the finished path.",
        },
      ],
    },
    photos: [
      { src: IMG.repairUnder, alt: "Underground downspout drainage carrying water away on a Chattanooga home" },
    ],
    pricing: {
      headline: "What drainage solutions cost in Chattanooga.",
      body: [
        "Surface fixes — splash blocks and extensions — are inexpensive and often added to another visit. Underground downspout drainage is priced by the length of the run, the trenching, and where the water has to go; most residential runs fall in a few-hundred-dollar range, more for long runs or hard digging.",
        "Every drainage job is quoted on-site after we walk the water path, because the right solution depends entirely on your lot and soil.",
      ],
      bullets: [
        { label: "Splash blocks / extensions", value: "From $40" },
        { label: "Underground drain (short run)", value: "Quoted on-site" },
        { label: "Underground drain (long run)", value: "Quoted on-site" },
        { label: "Rain chain install", value: "Quoted on-site" },
      ],
    },
    serviceArea: {
      heading: "Drainage solutions across Hamilton County.",
      body: [
        "We design and install drainage throughout Chattanooga, Hixson, Red Bank, Soddy-Daisy, and the rest of Hamilton County. The clay soil and sloped lots common here make good drainage especially important.",
        "Crawlspace and foundation moisture from roof water is one of the most common problems we solve — if your downspouts dump at the wall, this is the fix.",
      ],
    },
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
    related: [REL.downspouts, REL.realignment, REL.installation, REL.hub],
    seo: {
      metaTitle: "Drainage Solutions in Chattanooga, TN | Gutter-It",
      metaDescription:
        "Drainage solutions in Chattanooga, TN — splash blocks, extensions, underground downspout drainage, and rain chains that move roof water away from your foundation.",
    },
  },

  // =====================================================================
  // EXTERIOR-CLEANING SILO HUB
  // =====================================================================
  {
    slug: "exterior-cleaning",
    silo: "exterior",
    title: "Exterior Cleaning",
    testimonialFilter: "pressure-washing",
    hero: {
      eyebrow: "Chattanooga · Hamilton County",
      h1: "Exterior cleaning that's matched to the surface, not just blasted.",
      lede: "Pressure washing, house and soft washing, roof cleaning, driveways, decks, and fences — one family-owned crew that dials the pressure to each surface so nothing gets damaged. The same honest approach we bring to gutters.",
      image: IMG.pressure,
      imageAlt: "Exterior cleaning of a Chattanooga home",
    },
    intro: {
      heading: "One crew for the whole outside of your house.",
      body: [
        "Chattanooga's humidity is hard on everything outside. Algae and mildew creep across shaded siding, black streaks run down roofs, driveways grow a slick green film, and decks gray out within a couple of seasons. The fix isn't a single high-pressure wand pointed at all of it — it's the right method for each surface. That's what we do.",
        "We're the same family-owned Gutter-It crew that cleans and repairs gutters, based on Bass Road here in Chattanooga. When we wash a house we soft-wash it; when we clean a roof we never put high pressure on the shingles; when we do a driveway we use a surface cleaner so there are no zebra stripes. Matching the method to the surface is the whole job.",
        "This page is the front door to everything we do on the exterior-cleaning side. Pick the service you came for, or call and describe what needs cleaning and we'll point you to the right approach.",
      ],
    },
    signs: {
      heading: "Not sure which exterior service you need?",
      items: [
        {
          title: "Green or black film on your siding",
          body: "That's algae and mildew, and it needs a soft wash — low pressure plus a solution that kills it at the root, not a high-pressure blast that drives water behind the siding.",
        },
        {
          title: "Black streaks running down the roof",
          body: "Roof algae. It comes off with a low-pressure soft wash; a pressure washer would strip the shingle granules and shorten the roof's life.",
        },
        {
          title: "A slick, stained driveway or patio",
          body: "Concrete wants high pressure — applied with a surface cleaner for an even finish, with oil and rust pre-treated.",
        },
        {
          title: "A grayed-out or mildewed deck",
          body: "Wood and composite need lower pressure and a solution so the boards don't splinter or etch — and it preps the wood if you're about to re-stain.",
        },
        {
          title: "Tiger-striped gutter exteriors",
          body: "Those streaks on the front of the gutter clean off with the right pressure, often bundled with a gutter cleaning visit.",
        },
        {
          title: "Dingy fencing",
          body: "Wood, vinyl, and metal fences each take a different approach. We clean off the grime, mildew, and surface oxidation without damage.",
        },
      ],
    },
    whatsIncluded: {
      heading: "The full exterior-cleaning menu.",
      items: [
        {
          title: "Pressure washing",
          body: "The hub service — gutter exteriors, driveways, sidewalks, patios, and siding, each at the right pressure.",
        },
        {
          title: "House washing & soft washing",
          body: "Low-pressure soft wash that's safe for vinyl, brick, stucco, and wood, killing mildew and algae at the root.",
        },
        {
          title: "Roof cleaning",
          body: "Soft-wash removal of black streaks, algae, and moss — no high pressure, no voided shingle warranty.",
        },
        {
          title: "Driveway & concrete cleaning",
          body: "Even surface-cleaner finish on driveways, sidewalks, and patios, with oil and rust treated.",
        },
        {
          title: "Deck & fence cleaning",
          body: "Wood, composite, vinyl, and metal cleaned at the pressure each can take — no splintering or etching.",
        },
        {
          title: "Bundled with gutter work",
          body: "Adding an exterior wash to a gutter cleaning visit saves you a second trip charge — the most common way neighbors book.",
        },
      ],
    },
    process: {
      heading: "How exterior cleaning goes, whatever the surface.",
      steps: [
        {
          title: "Same-day callback",
          body: "Call or text and you hear back the same day.",
        },
        {
          title: "Match the method to the surface",
          body: "We identify each surface — siding, roof, concrete, wood — and set the right pressure and solution for it.",
        },
        {
          title: "Protect the surroundings",
          body: "Plantings and nearby surfaces get wet down and protected before any solution goes on.",
        },
        {
          title: "Clean and rinse thoroughly",
          body: "We clean at the correct pressure and rinse so nothing's left behind.",
        },
        {
          title: "Walk-through before you pay",
          body: "We show you the finished result and point out anything else worth addressing.",
        },
      ],
    },
    photos: [
      { src: IMG.pressure, alt: "Exterior cleaning in progress on a Chattanooga home" },
    ],
    pricing: {
      headline: "Pricing depends on the service — here's the lay of the land.",
      body: [
        "House washing runs $200–$400 for most single-story homes, roof cleaning $300–$600, and a standard driveway $100–$250. Decks, fences, and gutter-exterior washing are quoted by size and material.",
        "Whatever the surface, you get a firm written number before we start, and bundling services saves a trip charge.",
      ],
      bullets: [
        { label: "House wash, 1 story", value: "$200–$400" },
        { label: "Roof cleaning", value: "$300–$600" },
        { label: "Standard driveway", value: "$100–$250" },
        { label: "Decks / fences", value: "Quoted on-site" },
      ],
    },
    serviceArea: {
      heading: "Exterior cleaning across Chattanooga and Hamilton County.",
      body: [
        "We cover Chattanooga proper, Hixson, Red Bank, Soddy-Daisy, East Brainerd, Ooltewah, Signal Mountain, Lookout Mountain, East Ridge, and Collegedale — essentially all of Hamilton County.",
        "Shaded, wooded, and humid lots grow the most algae and mildew, so they're where we do the most exterior cleaning.",
      ],
    },
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
    related: [REL.pressure, REL.houseWashing, REL.roofCleaning, REL.driveway, REL.deckFence, REL.hub],
    seo: {
      metaTitle: "Exterior Cleaning in Chattanooga, TN | Gutter-It",
      metaDescription:
        "Exterior cleaning in Chattanooga, TN — pressure washing, house & soft washing, roof, driveway, deck, and fence cleaning. Method matched to each surface. Free quotes.",
    },
  },

  // =====================================================================
  // EXTERIOR-CLEANING SILO
  // =====================================================================
  {
    slug: "house-washing",
    silo: "exterior",
    title: "House Washing & Soft Washing",
    testimonialFilter: "pressure-washing",
    hero: {
      eyebrow: "Chattanooga · Hamilton County",
      h1: "House washing and soft washing that cleans without damage.",
      lede: "High-pressure water doesn't belong on your siding — it drives water behind vinyl and chips paint. We soft-wash with low pressure and the right detergent to strip mildew, algae, and grime safely off vinyl, brick, stucco, and wood.",
      image: IMG.pressure,
      imageAlt: "Soft washing the siding of a Chattanooga home",
    },
    intro: {
      heading: "Why soft washing is the right method for siding.",
      body: [
        "Chattanooga's humidity is hard on the outside of a house. Mildew, algae, and that green-black film creep across the north and shaded sides, dirt dauber nests tuck under the eaves, and pollen cakes everything every spring. It's tempting to blast it off with a pressure washer — but high pressure on siding is how you force water behind vinyl, chip paint, and gouge soft surfaces.",
        "Soft washing is the correct method. It uses low pressure plus a cleaning solution that actually kills the organic growth at the root instead of just blasting the surface layer off. The result lasts longer because the algae and mildew don't grow right back, and your siding doesn't take any damage in the process.",
        "We soft-wash vinyl, brick, stucco, fiber cement, and wood siding, rinse thoroughly so nothing's left behind, and protect your plantings while we work. It's the same care we bring to a roof — match the method to the surface, never the other way around.",
      ],
    },
    signs: {
      heading: "Signs your house needs washing.",
      items: [
        {
          title: "Green or black film on the shaded sides",
          body: "Algae and mildew thrive on the north and tree-shaded walls. That film is organic growth that soft washing kills at the root.",
        },
        {
          title: "Dingy, chalky-looking siding",
          body: "Years of dirt, pollen, and exhaust dull the color. A wash brings it back without repainting.",
        },
        {
          title: "Dirt dauber nests and cobwebs under the eaves",
          body: "Soft washing clears the nests and webs that collect in the overhangs and around light fixtures.",
        },
        {
          title: "Stains streaking down from the gutters",
          body: "Overflowing gutters leave vertical stains on the siding below. We can wash those off — and fix the gutter that caused them.",
        },
        {
          title: "You're about to sell or list the house",
          body: "A clean exterior is the cheapest curb-appeal upgrade there is and it photographs far better for a listing.",
        },
        {
          title: "Spring pollen season just ended",
          body: "Chattanooga's pollen coats everything. A wash after the season resets the whole exterior.",
        },
      ],
    },
    whatsIncluded: {
      heading: "What house washing includes.",
      items: [
        {
          title: "Low-pressure soft wash",
          body: "We use low pressure and a cleaning solution, not a high-pressure blast, so siding doesn't get water driven behind it or paint chipped off.",
        },
        {
          title: "Killing the growth at the root",
          body: "The solution kills mildew and algae rather than just rinsing the surface, so it stays clean longer before it grows back.",
        },
        {
          title: "Safe on every siding type",
          body: "Vinyl, brick, stucco, fiber cement, and wood each get the right pressure and dilution for that surface.",
        },
        {
          title: "Eaves, soffits, and fixtures",
          body: "We clear cobwebs, dirt dauber nests, and grime from the overhangs and around lights and vents.",
        },
        {
          title: "Plant protection and thorough rinse",
          body: "We wet down and protect your landscaping, then rinse everything thoroughly so no solution is left behind.",
        },
      ],
    },
    process: {
      heading: "How a house wash runs.",
      steps: [
        {
          title: "Walk the house and quote",
          body: "We look at the siding type, the growth, and the square footage, and give you a firm number.",
        },
        {
          title: "Protect the plantings",
          body: "Landscaping gets wet down and protected before any solution goes on.",
        },
        {
          title: "Apply and dwell",
          body: "The cleaning solution goes on at low pressure and is given time to kill the growth.",
        },
        {
          title: "Soft-wash and rinse",
          body: "We wash the siding at safe pressure and rinse thoroughly, top to bottom.",
        },
        {
          title: "Walk-through",
          body: "We check the result with you and note anything, like gutter staining, worth addressing.",
        },
      ],
    },
    photos: [
      { src: IMG.pressure, alt: "Freshly soft-washed siding on a Chattanooga home" },
    ],
    pricing: {
      headline: "What house washing costs in Chattanooga.",
      body: [
        "A full house soft wash is priced by square footage, the number of stories, and how heavy the growth is. Most single-story Chattanooga homes run $200–$400; two-story homes run more.",
        "Bundling a house wash with a gutter cleaning or driveway wash saves you a trip charge — combining services is the most cost-effective way to book.",
      ],
      bullets: [
        { label: "1 story, standard home", value: "$200–$400" },
        { label: "2 story, standard home", value: "$350–$600" },
        { label: "Heavy growth / large home", value: "Quoted on-site" },
        { label: "Bundled with other service", value: "Trip charge saved" },
      ],
    },
    serviceArea: {
      heading: "House washing across Hamilton County.",
      body: [
        "We soft-wash homes throughout Chattanooga, Hixson, Red Bank, Soddy-Daisy, East Brainerd, and the rest of Hamilton County.",
        "Shaded and wooded lots — common on the mountains and in older neighborhoods — grow the most algae and mildew, so they're our most frequent house-wash jobs.",
      ],
    },
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
    related: [REL.exteriorHub, REL.roofCleaning, REL.driveway, REL.deckFence],
    seo: {
      metaTitle: "House Washing & Soft Washing in Chattanooga, TN | Gutter-It",
      metaDescription:
        "House washing and soft washing in Chattanooga, TN. Low-pressure cleaning safe for vinyl, brick, stucco, and wood. Kills mildew and algae. Free quote.",
    },
  },

  // ---------------------------------------------------------------------
  {
    slug: "roof-cleaning",
    silo: "exterior",
    title: "Roof Cleaning",
    testimonialFilter: "pressure-washing",
    hero: {
      eyebrow: "Chattanooga · Hamilton County",
      h1: "Roof cleaning that removes black streaks without high pressure.",
      lede: "Those black streaks on your shingles are algae, not dirt — and a pressure washer will tear the granules off your roof trying to remove them. We soft-wash the roof at low pressure to kill the algae and moss safely, the way roofers recommend.",
      image: IMG.pressure,
      imageAlt: "Soft washing black streaks off a roof on a Chattanooga home",
    },
    intro: {
      heading: "What those black streaks actually are.",
      body: [
        "The dark streaks running down so many Chattanooga roofs are a blue-green algae called Gloeocapsa magma. It feeds on the limestone filler in asphalt shingles, and our warm, humid climate is ideal for it. Left alone it spreads, holds moisture against the shingles, and shortens the roof's life — and it makes an otherwise good roof look twenty years old.",
        "The wrong way to remove it is a pressure washer. High pressure strips the protective granules off asphalt shingles, voids most shingle warranties, and can force water under the shingles. You'll get a clean roof and a dramatically shortened roof life.",
        "The right way — and the method shingle manufacturers and roofers actually recommend — is low-pressure soft washing with a cleaning solution that kills the algae and moss at the root. We rinse it gently, protect your plantings and gutters, and leave the granules where they belong. The roof comes clean and stays clean for years.",
      ],
    },
    signs: {
      heading: "Signs your roof needs cleaning.",
      items: [
        {
          title: "Black streaks running down the shingles",
          body: "That's algae, not dirt. It spreads, holds moisture, and shortens shingle life — and only a soft wash removes it safely.",
        },
        {
          title: "Green moss growing on the north side",
          body: "Moss takes hold in the shaded, damp areas and lifts shingles as it grows, letting water underneath. It needs treating before it does real damage.",
        },
        {
          title: "Dark patches in the shaded, tree-covered areas",
          body: "The parts of the roof that stay damp longest grow the most algae and moss. Common on wooded Chattanooga lots.",
        },
        {
          title: "Your roof looks far older than it is",
          body: "Algae streaking makes a 10-year-old roof look ready for replacement. Cleaning it can restore the appearance for a fraction of a re-roof.",
        },
        {
          title: "A neighbor just had theirs cleaned and yours stands out",
          body: "Algae spreads, and once it's visibly worse than the houses around you, it drags down curb appeal.",
        },
        {
          title: "You're selling and the roof reads as a liability",
          body: "Buyers see a streaked roof as a replacement cost. A soft wash removes that objection cheaply.",
        },
      ],
    },
    whatsIncluded: {
      heading: "What roof cleaning includes.",
      items: [
        {
          title: "Low-pressure soft wash only",
          body: "We never pressure-wash shingles. The roof is cleaned with low pressure and a solution, the method roofers and manufacturers recommend.",
        },
        {
          title: "Killing algae and moss at the root",
          body: "The solution kills the organic growth so it doesn't simply grow back, rather than blasting the surface layer off.",
        },
        {
          title: "Protecting granules and warranty",
          body: "Because there's no high pressure, the protective granules stay on the shingles and your shingle warranty stays intact.",
        },
        {
          title: "Plant and gutter protection",
          body: "We wet down and protect landscaping and manage the runoff so the solution doesn't harm your plantings.",
        },
        {
          title: "A gutter check while we're up there",
          body: "Since we're already on the roof, we note gutter and shingle condition and flag anything worth a follow-up.",
        },
      ],
    },
    process: {
      heading: "How a roof cleaning runs.",
      steps: [
        {
          title: "Assess the roof and quote",
          body: "We check pitch, access, and the extent of the algae and moss, and give a firm number.",
        },
        {
          title: "Protect plants and gutters",
          body: "Landscaping gets wet down and protected and runoff is managed before we start.",
        },
        {
          title: "Apply the solution",
          body: "The cleaning solution goes on at low pressure and is given time to kill the growth.",
        },
        {
          title: "Gentle rinse",
          body: "We rinse at low pressure so the granules stay put and the roof comes clean.",
        },
        {
          title: "Walk-through",
          body: "We show you the result and note any shingle or gutter issues we saw.",
        },
      ],
    },
    photos: [
      { src: IMG.pressure, alt: "Roof with black streaks removed by soft washing on a Chattanooga home" },
    ],
    pricing: {
      headline: "What roof cleaning costs in Chattanooga.",
      body: [
        "Roof soft washing is priced by roof size, pitch, and how heavy the algae and moss are. Most single-story Chattanooga homes run $300–$600; steeper or larger roofs run more.",
        "It's a fraction of the cost of a re-roof, and because the soft wash kills the algae at the root, the result holds for years. We quote on-site after we see the roof.",
      ],
      bullets: [
        { label: "1 story, standard roof", value: "$300–$600" },
        { label: "2 story / steep roof", value: "Quoted on-site" },
        { label: "Heavy moss treatment", value: "Quoted on-site" },
        { label: "Bundled with house wash", value: "Trip charge saved" },
      ],
    },
    serviceArea: {
      heading: "Roof cleaning across Hamilton County.",
      body: [
        "We soft-wash roofs throughout Chattanooga, Hixson, Red Bank, Soddy-Daisy, Signal Mountain, Lookout Mountain, and the rest of Hamilton County.",
        "Shaded, wooded, and mountain lots grow the most algae and moss, so they're where we do the most roof cleaning.",
      ],
    },
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
    related: [REL.exteriorHub, REL.houseWashing, REL.roofDebris, REL.guards],
    seo: {
      metaTitle: "Roof Cleaning in Chattanooga, TN | Gutter-It",
      metaDescription:
        "Roof cleaning in Chattanooga, TN. Low-pressure soft wash removes black streaks, algae, and moss without damaging shingles or voiding your warranty. Free quote.",
    },
  },

  // ---------------------------------------------------------------------
  {
    slug: "driveway-cleaning",
    silo: "exterior",
    title: "Driveway & Concrete Cleaning",
    testimonialFilter: "pressure-washing",
    hero: {
      eyebrow: "Chattanooga · Hamilton County",
      h1: "Driveway and concrete cleaning that gets an even, finished look.",
      lede: "Concrete is one surface that does want high pressure — but done with a surface cleaner, not a wand that leaves zebra stripes. We clean driveways, sidewalks, and patios evenly, and treat the oil, rust, and organic stains that a plain rinse won't touch.",
      image: IMG.pressure,
      imageAlt: "Pressure washing a driveway with a surface cleaner in Chattanooga",
    },
    intro: {
      heading: "Why a surface cleaner makes the difference.",
      body: [
        "Driveways, sidewalks, and patios collect everything: tire marks, oil drips, rust from a planter or grill, and the green-black organic film that grows in Chattanooga's damp shade. Unlike siding, concrete actually does want high pressure to come clean — but how that pressure is applied is what separates a professional job from a streaky mess.",
        "Most DIY pressure washing leaves 'zebra stripes' — the wand cleans in overlapping arcs and you can see every pass. We use a surface cleaner, a spinning attachment that applies even pressure across the whole width at once, so the concrete comes out uniformly clean with no stripes, no swirl marks, no missed lines.",
        "For the stains a plain rinse won't lift — oil, rust, and set-in organic growth — we pre-treat with the right degreaser or solution before we clean. Some old stains lighten rather than vanish entirely, and we'll tell you honestly what to expect on yours before we start.",
      ],
    },
    signs: {
      heading: "Signs your concrete needs cleaning.",
      items: [
        {
          title: "Green or black organic film",
          body: "Damp, shaded concrete grows algae and mildew that gets slick and ugly. High-pressure surface cleaning removes it.",
        },
        {
          title: "Oil and grease stains",
          body: "Drips under where you park don't rinse off. We pre-treat them with degreaser before cleaning to lift as much as possible.",
        },
        {
          title: "Rust stains from planters, grills, or fertilizer",
          body: "Rust needs a specific treatment, not just pressure. We treat it before we clean.",
        },
        {
          title: "Zebra stripes from a past DIY job",
          body: "If your last cleaning left visible wand arcs, a surface cleaner evens the whole slab back out.",
        },
        {
          title: "Tire marks and general grime at the entrance",
          body: "Driveway entrances and garage aprons collect the worst of it. A surface-cleaner pass resets them.",
        },
        {
          title: "Slick, mossy walkways",
          body: "Organic growth on sidewalks and patios isn't just ugly, it's a slip hazard. Cleaning it makes the surface safe again.",
        },
      ],
    },
    whatsIncluded: {
      heading: "What driveway and concrete cleaning includes.",
      items: [
        {
          title: "Even surface-cleaner finish",
          body: "A spinning surface cleaner applies uniform pressure across the full width so there are no zebra stripes or missed passes.",
        },
        {
          title: "Oil and grease pre-treatment",
          body: "Oil drips and grease get a degreaser pre-treatment before cleaning to lift as much of the stain as the concrete will release.",
        },
        {
          title: "Rust and stain treatment",
          body: "Rust from planters, grills, and fertilizer gets a targeted treatment rather than just a pressure rinse.",
        },
        {
          title: "Organic growth removal",
          body: "Algae, mildew, and moss on driveways, sidewalks, and patios cleaned off and the slip hazard with it.",
        },
        {
          title: "An honest read on set-in stains",
          body: "We tell you up front which stains will fully clear and which will lighten but not vanish, so there are no surprises.",
        },
      ],
    },
    process: {
      heading: "How a concrete cleaning runs.",
      steps: [
        {
          title: "Assess and quote",
          body: "We look at the square footage and the stains and give you a firm number with honest expectations.",
        },
        {
          title: "Pre-treat the stains",
          body: "Oil, rust, and heavy organic growth get the appropriate pre-treatment.",
        },
        {
          title: "Surface-clean the slab",
          body: "The surface cleaner passes the whole area for an even, stripe-free finish.",
        },
        {
          title: "Detail the edges",
          body: "We wand the edges and corners the surface cleaner can't reach so the whole slab matches.",
        },
        {
          title: "Final rinse and walk-through",
          body: "We rinse off residue and walk the finished surface with you.",
        },
      ],
    },
    photos: [
      { src: IMG.pressure, alt: "Evenly cleaned driveway after surface-cleaner pressure washing in Chattanooga" },
    ],
    pricing: {
      headline: "What driveway and concrete cleaning costs in Chattanooga.",
      body: [
        "Concrete cleaning is priced by square footage and how stained the surface is. A standard two-car driveway typically runs $100–$250; add sidewalks and a patio and we'll quote the whole area together.",
        "Heavy oil, rust, or set-in stains add treatment time. Bundling concrete cleaning with a house wash or gutter cleaning saves a trip charge.",
      ],
      bullets: [
        { label: "Standard 2-car driveway", value: "$100–$250" },
        { label: "Driveway + sidewalks", value: "Quoted together" },
        { label: "Patio / large area", value: "Quoted on-site" },
        { label: "Heavy oil / rust treatment", value: "Added to quote" },
      ],
    },
    serviceArea: {
      heading: "Driveway and concrete cleaning across Hamilton County.",
      body: [
        "We clean driveways, sidewalks, and patios throughout Chattanooga, Hixson, Red Bank, Soddy-Daisy, East Brainerd, and the rest of Hamilton County.",
        "Shaded driveways under our heavy tree canopy grow the most organic film, so they're our most common concrete jobs.",
      ],
    },
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
    related: [REL.exteriorHub, REL.houseWashing, REL.deckFence, REL.roofCleaning],
    seo: {
      metaTitle: "Driveway & Concrete Cleaning in Chattanooga, TN | Gutter-It",
      metaDescription:
        "Driveway and concrete cleaning in Chattanooga, TN. Even surface-cleaner finish on driveways, sidewalks, and patios. Oil and rust stains treated. Free quote.",
    },
  },

  // ---------------------------------------------------------------------
  {
    slug: "deck-fence-cleaning",
    silo: "exterior",
    title: "Deck & Fence Cleaning",
    testimonialFilter: "pressure-washing",
    hero: {
      eyebrow: "Chattanooga · Hamilton County",
      h1: "Deck and fence cleaning at the pressure each surface can take.",
      lede: "Wood decks, composite boards, and vinyl or metal fences each need different handling — too much pressure splinters wood and etches composite. We clean each at the right pressure to strip the gray, the mildew, and the grime without damage.",
      image: IMG.pressure,
      imageAlt: "Cleaning a wood deck at safe pressure in Chattanooga",
    },
    intro: {
      heading: "Why decks and fences need a careful touch.",
      body: [
        "A deck or fence is the surface where pressure-washing mistakes show the most. Crank the pressure on a wood deck and you'll splinter and furrow the boards — that fuzzy, raised-grain look that never quite goes away. Hit composite too hard and you can etch and dull the surface. Vinyl and metal fences want a gentler approach again. One pressure setting does not fit all of them.",
        "In Chattanooga, decks and fences gray out and grow mildew fast. The humidity, the shade, and the rain leave wood looking weathered and green-streaked within a couple of seasons, and that film makes a deck slick and a fence dingy. Cleaning it the right way brings the surface back and, on wood, preps it properly if you're planning to re-stain.",
        "We dial the pressure and technique to the surface: lower pressure and a cleaning solution for wood and composite, the appropriate approach for vinyl and metal. The grime, mildew, and gray come off; the wood grain and the surface stay intact.",
      ],
    },
    signs: {
      heading: "Signs your deck or fence needs cleaning.",
      items: [
        {
          title: "Wood that's gone gray and weathered",
          body: "Untreated and weathered wood grays as the surface oxidizes. Cleaning brings the color back and is the right first step before re-staining.",
        },
        {
          title: "Green mildew or algae film",
          body: "Shaded, damp decks and fences grow a green-black film that's slick underfoot and ugly. It cleans off with the right solution.",
        },
        {
          title: "A deck that's slick when it's wet",
          body: "That slick feel is organic growth, and it's a real slip hazard. Cleaning it makes the deck safe to walk on again.",
        },
        {
          title: "You're about to stain or seal the wood",
          body: "Stain won't bond to a dirty, mildewed surface. A proper cleaning is what makes a re-stain actually last.",
        },
        {
          title: "Dingy vinyl or rusting metal fencing",
          body: "Vinyl fences hold grime and mildew; metal collects rust and oxidation. Both clean up with the right pressure and approach.",
        },
        {
          title: "Furring or splinters from a past bad wash",
          body: "If a previous high-pressure wash raised the grain, we clean at proper pressure so we don't make it worse.",
        },
      ],
    },
    whatsIncluded: {
      heading: "What deck and fence cleaning includes.",
      items: [
        {
          title: "Pressure matched to the material",
          body: "Wood and composite get lower pressure and a solution; vinyl and metal get the right approach for them. We never use one setting on everything.",
        },
        {
          title: "Stripping the gray and mildew",
          body: "Weathered gray, green film, and grime come off so the surface looks like itself again.",
        },
        {
          title: "Re-stain prep on wood",
          body: "If you're planning to stain or seal, we clean to a surface the new finish will actually bond to.",
        },
        {
          title: "Vinyl and metal fence cleaning",
          body: "Vinyl fencing gets its grime and mildew removed; metal gets cleaned of oxidation and surface rust.",
        },
        {
          title: "Care around the surrounding area",
          body: "We protect plantings and surrounding surfaces and rinse thoroughly when we're done.",
        },
      ],
    },
    process: {
      heading: "How a deck or fence cleaning runs.",
      steps: [
        {
          title: "Identify the material and quote",
          body: "We confirm whether it's wood, composite, vinyl, or metal and set the right approach, then give a firm number.",
        },
        {
          title: "Protect the surroundings",
          body: "Nearby plantings and surfaces get protected before we start.",
        },
        {
          title: "Apply solution where needed",
          body: "Wood and composite get a cleaning solution to lift mildew and gray.",
        },
        {
          title: "Clean at the right pressure",
          body: "We clean at the pressure the surface can take — never enough to splinter wood or etch composite.",
        },
        {
          title: "Rinse and walk-through",
          body: "We rinse thoroughly and walk the finished surface with you — and note if it's ready to stain.",
        },
      ],
    },
    photos: [
      { src: IMG.pressure, alt: "Freshly cleaned wood deck in Chattanooga" },
    ],
    pricing: {
      headline: "What deck and fence cleaning costs in Chattanooga.",
      body: [
        "Deck and fence cleaning is priced by square footage (decks) or linear footage (fences) and the material. A standard deck typically runs $150–$350; fence pricing depends on length and whether it's one or both sides.",
        "If you're cleaning a wood deck to re-stain, mention it when you book — the prep is the same job but it's worth coordinating timing so the wood is dry when you stain.",
      ],
      bullets: [
        { label: "Standard deck", value: "$150–$350" },
        { label: "Fence (per side, by length)", value: "Quoted on-site" },
        { label: "Re-stain prep cleaning", value: "Same job, coordinate timing" },
        { label: "Bundled with house wash", value: "Trip charge saved" },
      ],
    },
    serviceArea: {
      heading: "Deck and fence cleaning across Hamilton County.",
      body: [
        "We clean decks and fences throughout Chattanooga, Hixson, Red Bank, Soddy-Daisy, East Brainerd, and the rest of Hamilton County.",
        "Shaded backyard decks under our tree canopy gray and grow mildew the fastest, so they're our most frequent deck jobs.",
      ],
    },
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
    related: [REL.exteriorHub, REL.driveway, REL.houseWashing, REL.roofCleaning],
    seo: {
      metaTitle: "Deck & Fence Cleaning in Chattanooga, TN | Gutter-It",
      metaDescription:
        "Deck and fence cleaning in Chattanooga, TN. Wood, composite, vinyl, and metal cleaned at the right pressure — no splintering. Re-stain prep available. Free quote.",
    },
  },
];
