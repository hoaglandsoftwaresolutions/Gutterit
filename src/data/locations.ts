import type { DetailItem, DetailParagraph, DetailPriceRow } from "./serviceDetails";
import type { FaqItem } from "./faq";
import { serviceUrl, type RelatedLink } from "./extraServices";

// ---------------------------------------------------------------------------
// Location landing pages (the "Core 30" location silo).
//
// Chattanooga is the hub; every other city links back to it. Each page must
// carry genuinely localized, non-duplicate copy — local landmarks,
// neighborhoods, and why-gutters-matter-here specifics — so the pages don't
// read as doorway pages. The brief calls this out specifically for Hixson /
// Hamilton County (which overlap Chattanooga) and Knoxville / Huntsville
// (which are outside the immediate metro).
//
// URL pattern: /locations/{slug}. Chosen over /gutter-cleaning-{city} so it
// doesn't collide with the existing /cleaning-in-* etc. 301 wildcards in
// public/_redirects.
//
// Each page added here must also be registered in THREE places:
//   1. src/App.tsx               (handled by the /locations/:citySlug route)
//   2. src/data/seo.ts           (runtime SEO tags — getStaticRoutes)
//   3. scripts/seo-routes.mjs    (build-time prerender + sitemap)
// ---------------------------------------------------------------------------

export type LocationContent = {
  slug: string; // url segment, e.g. "hixson"
  city: string; // "Hixson"
  state: "TN" | "GA" | "AL";
  isHub?: boolean; // Chattanooga
  hero: {
    eyebrow: string;
    h1: string;
    lede: string;
    image: string;
  };
  intro: { heading: string; body: DetailParagraph[] };
  // Why gutters matter specifically here — the localized hook.
  localContext: { heading: string; items: DetailItem[] };
  // Neighborhoods / sub-areas we serve within this location.
  neighborhoods: { heading: string; body: DetailParagraph[]; list: string[] };
  pricing: { headline: string; body: DetailParagraph[]; bullets?: DetailPriceRow[] };
  faq: FaqItem[];
  // Service links shown on the page (cross-link service silo from location).
  services: RelatedLink[];
  seo: { metaTitle: string; metaDescription: string };
  // Approx geo for schema (optional; falls back to business geo).
  geo?: { lat: number; lng: number };
};

const HERO = {
  install: "/images/jobs/installation/gutter.jpg",
  cleaning: "/images/jobs/cleaning/leavesingutter.jpg",
  repair: "/images/jobs/repair/undergutter.jpg",
  main: "/images/hero/hero-main.jpg",
};

// Core service links shown on every location page (cross-linking the service
// silo from the location silo, per the brief's internal-linking requirement).
const LOCATION_SERVICES: RelatedLink[] = [
  {
    to: "/services/cleaning",
    title: "Gutter Cleaning",
    blurb: "Hand-clear leaves and debris, flush every downspout. From $50.",
  },
  {
    to: "/services/gutter-repair",
    title: "Gutter Repair",
    blurb: "Sagging sections, leaky seams, broken downspouts. From $100.",
  },
  {
    to: "/services/installation",
    title: "Seamless Installation",
    blurb: "Custom aluminum gutters formed on-site to fit your roof line.",
  },
  {
    to: "/services/gutter-guards",
    title: "Gutter Guards",
    blurb: "Leaf protection sized to your roof and tree load.",
  },
  {
    to: serviceUrl("residential-gutter-services", "gutters"),
    title: "All Gutter Services",
    blurb: "Every residential gutter service we offer, under one phone number.",
  },
  {
    to: "/services/pressure-washing",
    title: "Pressure Washing",
    blurb: "Gutter exteriors, driveways, siding, decks — cleaned without damage.",
  },
];

export const LOCATIONS: LocationContent[] = [
  // =====================================================================
  // CHATTANOOGA — HUB
  // =====================================================================
  {
    slug: "chattanooga",
    city: "Chattanooga",
    state: "TN",
    isHub: true,
    geo: { lat: 35.0456, lng: -85.3097 },
    hero: {
      eyebrow: "Service Area Hub",
      h1: "Gutter and exterior cleaning services in Chattanooga, TN.",
      lede: "Gutter-It is family-owned and based right here on Bass Road in Chattanooga. From the North Shore to East Brainerd, we clean, repair, and install gutters and wash exteriors across the whole city — and the surrounding metro from this hub.",
      image: HERO.main,
    },
    intro: {
      heading: "Your local Chattanooga gutter company.",
      body: [
        "Chattanooga sits in a green bowl ringed by ridges — Lookout Mountain, Signal Mountain, Missionary Ridge — with the Tennessee River cutting through the middle and mature hardwoods and pines over most every neighborhood. Add 50-plus inches of rain a year and you have a city that is genuinely hard on gutters. That's the work we do, and we do it from right here in town.",
        "We're not a national chain routing your call to whichever subcontractor is closest. We're a local, family-owned crew — the person who quotes your job is the person on your ladder. That's the difference between a $79 'special' that blows debris into your shrubs and a real cleaning that flushes every downspout and leaves you an honest report.",
        "This is our hub page for the whole metro. Chattanooga proper is home base; from here we also cover Hixson, Red Bank, Soddy-Daisy, the rest of Hamilton County, and out into North Georgia and beyond. Pick your service or your town below.",
      ],
    },
    localContext: {
      heading: "Why gutters work overtime in Chattanooga.",
      items: [
        {
          title: "Ridge-and-valley tree cover",
          body: "Oaks, maples, sweetgums, and pines blanket neighborhoods from St. Elmo to Hixson. That canopy is beautiful and it packs gutters faster than almost anywhere in the country.",
        },
        {
          title: "50+ inches of rain a year",
          body: "Chattanooga gets more annual rainfall than Seattle. Undersized or clogged gutters can't move that volume, and the overflow finds your fascia and foundation.",
        },
        {
          title: "Humid summers grow everything",
          body: "Our humidity turns trapped gutter debris into compost and grows algae on roofs and siding. Standing water in a clogged gutter becomes a mosquito nursery fast.",
        },
        {
          title: "Mountain pine and hemlock",
          body: "Homes on and below Lookout and Signal Mountain deal with year-round needle drop that weaves into mats water can't pass.",
        },
        {
          title: "Older housing stock downtown",
          body: "Established neighborhoods like Highland Park, North Chattanooga, and Brainerd have original gutters and fascia that have done their decades and need attention.",
        },
        {
          title: "Clay soil and sloped lots",
          body: "Much of the area is sloped with clay-heavy soil that doesn't drink water fast — so drainage away from the foundation matters more here than in flatter, sandier regions.",
        },
      ],
    },
    neighborhoods: {
      heading: "Chattanooga neighborhoods we cover.",
      body: [
        "We're on the road across the whole city most weeks — downtown and the North Shore, the historic neighborhoods, the East Brainerd and Hixson growth corridors, and up the mountain routes.",
      ],
      list: [
        "North Chattanooga / North Shore",
        "Downtown & Southside",
        "St. Elmo & Alton Park",
        "Highland Park",
        "Brainerd",
        "East Brainerd",
        "Hixson",
        "Lookout Mountain",
        "Signal Mountain",
        "Riverview & Stuart Heights",
      ],
    },
    pricing: {
      headline: "Gutter service pricing in Chattanooga.",
      body: [
        "Single-story Chattanooga homes typically run $100–$175 for a cleaning; two-story homes $150–$250 depending on roof line and footage. Repairs start at $50, and seamless installation runs roughly $5.40–$9.40 per linear foot.",
        "You get a firm written number before we start — never a surprise add-on. Mountain and steep-roof homes are quoted on-site.",
      ],
      bullets: [
        { label: "Cleaning, 1 story", value: "$100–$175" },
        { label: "Cleaning, 2 story", value: "$150–$250" },
        { label: "Repair", value: "From $50" },
        { label: "Seamless install", value: "$5.40–$9.40/ft" },
      ],
    },
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
    services: LOCATION_SERVICES,
    seo: {
      metaTitle: "Gutter Services in Chattanooga, TN | Gutter-It",
      metaDescription:
        "Family-owned gutter cleaning, repair, installation, and pressure washing in Chattanooga, TN. Local crew, honest quotes, free estimates. Serving the whole metro.",
    },
  },

  // =====================================================================
  // HAMILTON COUNTY
  // =====================================================================
  {
    slug: "hixson",
    city: "Hixson",
    state: "TN",
    geo: { lat: 35.1559, lng: -85.2502 },
    hero: {
      eyebrow: "Serving Hixson, TN",
      h1: "Gutter cleaning, repair, and installation in Hixson, TN.",
      lede: "Hixson's wooded subdivisions and lake-adjacent homes pack gutters fast. We're a Chattanooga-based, family-owned crew that's in Hixson constantly — cleaning, repairing, and installing seamless gutters across the whole 37343.",
      image: HERO.install,
    },
    intro: {
      heading: "Local gutter service for Hixson homes.",
      body: [
        "Hixson sits just north of Chattanooga along the Tennessee River and Chickamauga Lake, and it's one of the areas we work most. The mix here — established subdivisions with mature hardwoods, newer construction off Hixson Pike, and lake homes catching wind-blown debris — keeps gutters busy year-round.",
        "We're based a short drive away in Chattanooga, so Hixson is effectively home turf. A good share of our seamless installs happen here, on homes with original gutters that have finally done their forty years. The person who quotes your Hixson job is the same person who hangs the gutters.",
        "Whether you're off Gadd Road, near Northgate, or out toward the lake, you get the same thing: a firm written quote, work done by the crew that quoted it, and an honest walk-through at the end.",
      ],
    },
    localContext: {
      heading: "Why Hixson gutters fill up fast.",
      items: [
        {
          title: "Mature subdivision tree canopy",
          body: "Established Hixson neighborhoods are full of big oaks and maples. That shade is great in July and brutal on gutters every fall.",
        },
        {
          title: "Lake-driven wind and debris",
          body: "Homes near Chickamauga Lake catch wind-blown leaves and seed debris that pile into gutters from every direction.",
        },
        {
          title: "Pine pockets off Hixson Pike",
          body: "Several Hixson areas back up to pine stands, and year-round needle drop weaves into mats that clog downspouts.",
        },
        {
          title: "Aging gutters on original homes",
          body: "A lot of Hixson's housing stock is reaching the age where the original gutters are corroded, undersized, or leaking at every seam — prime replacement territory.",
        },
        {
          title: "Newer builds with cheap builder-grade gutters",
          body: "Some newer Hixson construction went up with thin builder-grade gutters and too few downspouts. They overflow even clean and benefit from re-pitching or upsizing.",
        },
      ],
    },
    neighborhoods: {
      heading: "Areas of Hixson we serve.",
      body: [
        "We cover all of Hixson and the immediately surrounding north-river areas — from the Northgate corridor out to the lake and up toward Middle Valley.",
      ],
      list: [
        "Northgate area",
        "Gadd Road corridor",
        "Middle Valley",
        "Lakesite (adjacent)",
        "Big Ridge",
        "Hixson Pike corridor",
      ],
    },
    pricing: {
      headline: "Gutter service pricing in Hixson.",
      body: [
        "Hixson pricing matches our Chattanooga rates — single-story cleanings typically $100–$175, two-story $150–$250, repairs from $50. Because Hixson is close to home base, there's no added trip charge.",
        "Seamless installation and replacement are quoted on-site after we measure. You get a firm written number before any work starts.",
      ],
      bullets: [
        { label: "Cleaning, 1 story", value: "$100–$175" },
        { label: "Cleaning, 2 story", value: "$150–$250" },
        { label: "Repair", value: "From $50" },
        { label: "Install / replacement", value: "Quoted on-site" },
      ],
    },
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
    services: LOCATION_SERVICES,
    seo: {
      metaTitle: "Gutter Services in Hixson, TN | Gutter-It",
      metaDescription:
        "Gutter cleaning, repair, and seamless installation in Hixson, TN. Local Chattanooga-based crew, no trip charge, free quotes. Same-day callback.",
    },
  },

  // =====================================================================
  {
    slug: "red-bank",
    city: "Red Bank",
    state: "TN",
    geo: { lat: 35.1131, lng: -85.2937 },
    hero: {
      eyebrow: "Serving Red Bank, TN",
      h1: "Gutter cleaning, repair, and installation in Red Bank, TN.",
      lede: "Red Bank's older homes and steep, wooded lots between the ridges make for tricky gutters. We're a Chattanooga-based family crew minutes away, handling cleaning, repair, and seamless installation across Red Bank.",
      image: HERO.cleaning,
    },
    intro: {
      heading: "Gutter service built for Red Bank's older homes.",
      body: [
        "Red Bank sits just north of downtown Chattanooga, tucked between Stringer's Ridge and the slopes leading up toward Signal Mountain. It's an established, leafy community — a lot of mid-century homes on mature, sloped lots — and that combination throws gutters more curveballs than a flat new subdivision does.",
        "Because Red Bank is a five-minute drive from our Chattanooga base, we're there often. The older housing stock means we do plenty of repair and replacement here: original gutters that have corroded, fascia that's softened from years of overflow, and downspouts that were never sized for the tree load above them.",
        "From Dayton Boulevard to the ridge streets, you get a firm written quote, work done by the crew that quoted it, and a straight answer about whether you need a repair or a replacement.",
      ],
    },
    localContext: {
      heading: "What makes Red Bank gutters work hard.",
      items: [
        {
          title: "Heavy mature-tree cover",
          body: "Red Bank's established streets are shaded by big old hardwoods. Beautiful canopy, relentless leaf load every fall.",
        },
        {
          title: "Steep, sloped lots",
          body: "Homes built into the ridge slopes mean gutters at varying heights and runoff that has to be managed carefully so it doesn't sheet down the hill into the foundation.",
        },
        {
          title: "Aging mid-century housing stock",
          body: "Many Red Bank homes still have original or first-replacement gutters that are corroded, undersized, or leaking at the seams.",
        },
        {
          title: "Overflow-damaged fascia",
          body: "Decades of clogged gutters have softened fascia on a lot of older Red Bank homes — repair work we handle alongside the gutters.",
        },
        {
          title: "Ridge-side pine and hemlock",
          body: "The streets climbing toward Signal Mountain pick up year-round needle drop that mats and clogs downspouts.",
        },
      ],
    },
    neighborhoods: {
      heading: "Areas of Red Bank we serve.",
      body: [
        "We cover all of Red Bank — the Dayton Boulevard corridor, the ridge-side streets, and the neighborhoods bordering Stringer's Ridge and North Chattanooga.",
      ],
      list: [
        "Dayton Boulevard corridor",
        "Stringer's Ridge side",
        "Morrison Springs area",
        "Ashland Terrace area",
        "Fairview",
      ],
    },
    pricing: {
      headline: "Gutter service pricing in Red Bank.",
      body: [
        "Red Bank pricing matches our Chattanooga rates — single-story cleanings $100–$175, two-story $150–$250, repairs from $50 — with no trip charge since it's right next door.",
        "Steep ridge-side lots are quoted on-site since access affects the work. You always get a firm written number before we start.",
      ],
      bullets: [
        { label: "Cleaning, 1 story", value: "$100–$175" },
        { label: "Cleaning, 2 story", value: "$150–$250" },
        { label: "Repair", value: "From $50" },
        { label: "Steep / ridge-side lot", value: "Quoted on-site" },
      ],
    },
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
    services: LOCATION_SERVICES,
    seo: {
      metaTitle: "Gutter Services in Red Bank, TN | Gutter-It",
      metaDescription:
        "Gutter cleaning, repair, and seamless installation in Red Bank, TN. Local crew minutes away, no trip charge, honest repair-or-replace advice. Free quotes.",
    },
  },

  // =====================================================================
  {
    slug: "soddy-daisy",
    city: "Soddy-Daisy",
    state: "TN",
    geo: { lat: 35.2342, lng: -85.1907 },
    hero: {
      eyebrow: "Serving Soddy-Daisy, TN",
      h1: "Gutter cleaning, repair, and installation in Soddy-Daisy, TN.",
      lede: "Soddy-Daisy's lakeside and wooded-mountain homes deal with heavy debris and serious rain runoff. We're a Chattanooga-based family crew covering the whole Soddy-Daisy area with cleaning, repair, and seamless installation.",
      image: HERO.repair,
    },
    intro: {
      heading: "Gutter service for Soddy-Daisy and the north lake.",
      body: [
        "Soddy-Daisy stretches along the western shore of Chickamauga Lake at the northern edge of Hamilton County, where the foothills start climbing toward the Cumberland Plateau. It's a community of lake homes, wooded acreage, and ridge properties — terrain that's beautiful to live on and demanding on a gutter system.",
        "We come up from our Chattanooga base regularly. The homes here often have long roof lines, heavy surrounding tree cover, and steep lots where roof runoff has to be carried well away from the house. That makes drainage and proper downspout work as important as the cleaning itself.",
        "From the lakeshore neighborhoods to the homes tucked up Sequoyah Road and the ridges, you get a firm written quote and work done by the crew that quoted it — no subcontractors sent up the mountain in your place.",
      ],
    },
    localContext: {
      heading: "Why Soddy-Daisy gutters need attention.",
      items: [
        {
          title: "Heavy wooded-acreage tree load",
          body: "Many Soddy-Daisy properties sit on wooded lots with dense surrounding trees, so leaf and needle load is heavier than a typical suburban yard.",
        },
        {
          title: "Lakeside wind and debris",
          body: "Homes along Chickamauga Lake catch wind-driven debris off the water and the wooded shoreline.",
        },
        {
          title: "Steep ridge and foothill lots",
          body: "Where the land climbs toward the plateau, roof runoff has to be carried carefully away from foundations on sloped ground — drainage matters as much as cleaning.",
        },
        {
          title: "Long roof lines on bigger lots",
          body: "Larger homes on acreage often have long gutter runs and multiple roof planes, which means more linear footage to keep clear and properly pitched.",
        },
        {
          title: "Year-round pine and hemlock",
          body: "The foothill and ridge properties deal with constant needle drop that mats in gutters and clogs downspouts.",
        },
      ],
    },
    neighborhoods: {
      heading: "Areas of Soddy-Daisy we serve.",
      body: [
        "We cover Soddy-Daisy from the lakeshore through the town center and up into the foothill and ridge neighborhoods, plus adjacent Sale Creek to the north.",
      ],
      list: [
        "Lakeshore neighborhoods",
        "Sequoyah Road area",
        "Sequoyah Access / Big Soddy",
        "Daisy",
        "Sale Creek (adjacent)",
        "Montlake area",
      ],
    },
    pricing: {
      headline: "Gutter service pricing in Soddy-Daisy.",
      body: [
        "Soddy-Daisy cleanings run in the same range as the rest of the area — $100–$175 single-story, $150–$250 two-story — with larger acreage homes and long roof lines quoted on-site. The drive is a little longer, but the visit price stays the same.",
        "Steep ridge lots, drainage work, and seamless installation are quoted on-site after we see the property.",
      ],
      bullets: [
        { label: "Cleaning, 1 story", value: "$100–$175" },
        { label: "Cleaning, 2 story", value: "$150–$250" },
        { label: "Repair", value: "From $50" },
        { label: "Acreage / long roof line", value: "Quoted on-site" },
      ],
    },
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
    services: LOCATION_SERVICES,
    seo: {
      metaTitle: "Gutter Services in Soddy-Daisy, TN | Gutter-It",
      metaDescription:
        "Gutter cleaning, repair, installation, and drainage in Soddy-Daisy, TN. Local crew for lakeside and wooded-mountain homes. Free quotes, same-day callback.",
    },
  },

  // =====================================================================
  {
    slug: "hamilton-county",
    city: "Hamilton County",
    state: "TN",
    geo: { lat: 35.18, lng: -85.16 },
    hero: {
      eyebrow: "Serving All of Hamilton County, TN",
      h1: "Gutter and exterior cleaning across Hamilton County, TN.",
      lede: "From the city out to Ooltewah, Collegedale, Signal Mountain, and beyond — Gutter-It covers the whole county. One local, family-owned crew for gutters and exterior washing, wherever you are in Hamilton County.",
      image: HERO.main,
    },
    intro: {
      heading: "Countywide gutter service from a local crew.",
      body: [
        "Hamilton County wraps around Chattanooga and runs from the Tennessee River valley up onto Signal and Lookout Mountains and out to the growing eastern suburbs. It's a big, varied service area — dense city neighborhoods, mountain communities, lake towns, and fast-growing suburbs like Ooltewah and Collegedale — and we cover all of it from our Chattanooga base.",
        "Wherever you are in the county, the same things hold: heavy tree cover, 50-plus inches of rain a year, and humid summers that grow algae and breed mosquitoes in any gutter left to clog. And wherever you are, you get the same local crew — the person who quotes the job is on the ladder, not a subcontractor dispatched in our name.",
        "This page covers the county as a whole. Several towns within it — Hixson, Red Bank, Soddy-Daisy, and of course Chattanooga — have their own pages with local detail. If your town isn't listed separately, you're still covered: call and we'll confirm.",
      ],
    },
    localContext: {
      heading: "What gutter service across Hamilton County involves.",
      items: [
        {
          title: "Mountain communities",
          body: "Signal Mountain and Lookout Mountain homes deal with year-round pine and hemlock needle drop and steep roof lines that need careful work.",
        },
        {
          title: "Fast-growing eastern suburbs",
          body: "Ooltewah and Collegedale are full of newer construction — sometimes with builder-grade gutters that are undersized for the roof and need re-pitching or upsizing.",
        },
        {
          title: "River and lake corridors",
          body: "Communities along the Tennessee River and Chickamauga Lake catch wind-driven debris and need extra attention to drainage.",
        },
        {
          title: "Dense, leafy city neighborhoods",
          body: "Established Chattanooga and East Ridge streets have mature canopy and older gutters that need regular cleaning and frequent repair.",
        },
        {
          title: "Clay soil countywide",
          body: "The county's clay-heavy, often-sloped soil makes carrying roof water away from foundations a priority everywhere we work.",
        },
      ],
    },
    neighborhoods: {
      heading: "Towns and communities across Hamilton County.",
      body: [
        "We serve the entire county. Chattanooga, Hixson, Red Bank, and Soddy-Daisy have dedicated pages; the towns below are all covered from the same local crew.",
      ],
      list: [
        "Ooltewah",
        "Collegedale",
        "East Ridge",
        "Signal Mountain",
        "Lookout Mountain",
        "East Brainerd",
        "Apison",
        "Harrison",
        "Lakesite",
        "Walden",
      ],
    },
    pricing: {
      headline: "Gutter service pricing across Hamilton County.",
      body: [
        "Pricing is consistent countywide — single-story cleanings $100–$175, two-story $150–$250, repairs from $50, seamless installation $5.40–$9.40 per linear foot. Mountain and steep-roof homes are quoted on-site.",
        "The farther reaches take a little longer to reach, but the visit price stays the same — no mountain or distance surcharge.",
      ],
      bullets: [
        { label: "Cleaning, 1 story", value: "$100–$175" },
        { label: "Cleaning, 2 story", value: "$150–$250" },
        { label: "Repair", value: "From $50" },
        { label: "Mountain / steep roof", value: "Quoted on-site" },
      ],
    },
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
    services: LOCATION_SERVICES,
    seo: {
      metaTitle: "Gutter Services in Hamilton County, TN | Gutter-It",
      metaDescription:
        "Gutter cleaning, repair, installation, and pressure washing across Hamilton County, TN — Ooltewah, Collegedale, Signal Mountain and beyond. Local crew, free quotes.",
    },
  },

  // =====================================================================
  // OUTER METRO — TN
  // =====================================================================
  {
    slug: "cleveland",
    city: "Cleveland",
    state: "TN",
    geo: { lat: 35.1595, lng: -84.8766 },
    hero: {
      eyebrow: "Serving Cleveland, TN",
      h1: "Gutter cleaning, repair, and installation in Cleveland, TN.",
      lede: "Cleveland's mix of historic homes and newer growth off APD-40 keeps gutters busy. We travel out from Chattanooga to cover Cleveland and Bradley County with cleaning, repair, and seamless installation.",
      image: HERO.cleaning,
    },
    intro: {
      heading: "Gutter service in Cleveland and Bradley County.",
      body: [
        "Cleveland sits about 30 minutes northeast of Chattanooga, the seat of Bradley County and home to Lee University and a growing ring of new construction. It's far enough from the city to feel like its own place, and we make the trip out regularly to serve it — gutters and exterior washing for both the historic core and the newer subdivisions.",
        "The older neighborhoods around downtown and the university have mature trees and aging gutters that need regular cleaning and frequent repair. The newer growth off APD-40 and Paul Huff Parkway often went up with builder-grade gutters that are undersized for the roof and overflow even when clean.",
        "Cleveland is a bit of a drive for us, but the visit price is the same as a city call. You get a firm written quote and the same local crew that serves Chattanooga — we don't hand Cleveland off to a subcontractor.",
      ],
    },
    localContext: {
      heading: "What Cleveland gutters deal with.",
      items: [
        {
          title: "Historic-district tree cover",
          body: "The older neighborhoods near downtown and Lee University are shaded by mature hardwoods that load gutters heavily each fall.",
        },
        {
          title: "Builder-grade gutters on new growth",
          body: "The fast-growing areas off APD-40 and Paul Huff often have thin, undersized gutters with too few downspouts — they overflow even when they're clean.",
        },
        {
          title: "Aging gutters on historic homes",
          body: "Cleveland's older housing stock frequently has original or corroded gutters that are past cleaning and into repair or replacement territory.",
        },
        {
          title: "Same heavy regional rainfall",
          body: "Cleveland gets the same wet Southeast-Tennessee climate as Chattanooga, so undersized or clogged gutters overflow onto fascia and foundations the same way.",
        },
        {
          title: "Pine pockets in the surrounding county",
          body: "Bradley County properties backing onto pine stands deal with year-round needle drop that mats and clogs downspouts.",
        },
      ],
    },
    neighborhoods: {
      heading: "Areas of Cleveland and Bradley County we serve.",
      body: [
        "We cover Cleveland from the historic core and university area out to the newer growth corridors, plus the surrounding Bradley County communities.",
      ],
      list: [
        "Downtown / historic district",
        "Lee University area",
        "Paul Huff Parkway corridor",
        "APD-40 growth area",
        "Stuart Park area",
        "Bradley County (surrounding)",
      ],
    },
    pricing: {
      headline: "Gutter service pricing in Cleveland.",
      body: [
        "Cleveland cleanings run in the same range as Chattanooga — $100–$175 single-story, $150–$250 two-story, repairs from $50. The drive out is a little longer, but the visit price is the same.",
        "Seamless installation and replacement on Cleveland homes are quoted on-site after we measure.",
      ],
      bullets: [
        { label: "Cleaning, 1 story", value: "$100–$175" },
        { label: "Cleaning, 2 story", value: "$150–$250" },
        { label: "Repair", value: "From $50" },
        { label: "Install / replacement", value: "Quoted on-site" },
      ],
    },
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
    services: LOCATION_SERVICES,
    seo: {
      metaTitle: "Gutter Services in Cleveland, TN | Gutter-It",
      metaDescription:
        "Gutter cleaning, repair, and seamless installation in Cleveland, TN and Bradley County. Local crew from Chattanooga, no distance surcharge. Free quotes.",
    },
  },

  // =====================================================================
  // NORTH GEORGIA
  // =====================================================================
  {
    slug: "ringgold",
    city: "Ringgold",
    state: "GA",
    geo: { lat: 34.9162, lng: -85.1091 },
    hero: {
      eyebrow: "Serving Ringgold, GA",
      h1: "Gutter cleaning, repair, and installation in Ringgold, GA.",
      lede: "Just over the Georgia line, Ringgold's wooded lots and tornado-rebuilt neighborhoods keep gutters working. We cross down from Chattanooga regularly to serve Ringgold and Catoosa County.",
      image: HERO.repair,
    },
    intro: {
      heading: "Gutter service for Ringgold and Catoosa County.",
      body: [
        "Ringgold sits just across the Georgia state line, about 20 minutes south of Chattanooga in Catoosa County. It's close enough that we cross the line regularly — the same local crew, just a short hop down I-75. Ringgold's mix of historic downtown, wooded residential lots, and the neighborhoods rebuilt after the 2011 tornado all keep gutters busy.",
        "The wooded subdivisions and acreage around Ringgold carry heavy tree load, and the same wet Southeast climate as Chattanooga means clogged or undersized gutters overflow the same way. We handle cleaning, repair, seamless installation, and the drainage work that sloped North Georgia lots often need.",
        "You're just over the state line, so service is straightforward — a firm written quote, the same crew that serves Chattanooga, and no Georgia surcharge.",
      ],
    },
    localContext: {
      heading: "What Ringgold gutters deal with.",
      items: [
        {
          title: "Heavily wooded residential lots",
          body: "Ringgold's subdivisions and acreage sit among dense trees, so leaf and needle load is heavier than an open suburban lot.",
        },
        {
          title: "Post-tornado rebuilt homes",
          body: "Neighborhoods rebuilt after the 2011 tornado often have newer gutters that, depending on the builder, may be undersized for the roof and tree load.",
        },
        {
          title: "Sloped North Georgia terrain",
          body: "Ridge-and-valley terrain means roof runoff has to be carried carefully away from foundations on sloped ground.",
        },
        {
          title: "Historic-district older homes",
          body: "Around Ringgold's historic downtown, older homes carry aging gutters that need regular cleaning and frequent repair.",
        },
        {
          title: "Same wet regional climate",
          body: "Catoosa County gets the same heavy Southeast-Tennessee/North-Georgia rainfall, so gutters have to move serious water.",
        },
      ],
    },
    neighborhoods: {
      heading: "Areas of Ringgold and Catoosa County we serve.",
      body: [
        "We cover Ringgold from the historic downtown out through the surrounding wooded subdivisions and into the nearby Catoosa County communities.",
      ],
      list: [
        "Historic downtown Ringgold",
        "Boynton area",
        "Graysville (adjacent)",
        "Catoosa County subdivisions",
        "Battlefield Parkway corridor",
      ],
    },
    pricing: {
      headline: "Gutter service pricing in Ringgold.",
      body: [
        "Ringgold pricing matches our Chattanooga rates — $100–$175 single-story cleanings, $150–$250 two-story, repairs from $50. Crossing the state line adds no surcharge.",
        "Seamless installation and drainage work on sloped lots are quoted on-site after we see the property.",
      ],
      bullets: [
        { label: "Cleaning, 1 story", value: "$100–$175" },
        { label: "Cleaning, 2 story", value: "$150–$250" },
        { label: "Repair", value: "From $50" },
        { label: "Install / drainage", value: "Quoted on-site" },
      ],
    },
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
    services: LOCATION_SERVICES,
    seo: {
      metaTitle: "Gutter Services in Ringgold, GA | Gutter-It",
      metaDescription:
        "Gutter cleaning, repair, and seamless installation in Ringgold, GA and Catoosa County. Local Chattanooga crew, no state-line surcharge. Free quotes.",
    },
  },

  // =====================================================================
  {
    slug: "fort-oglethorpe",
    city: "Fort Oglethorpe",
    state: "GA",
    geo: { lat: 34.9492, lng: -85.2569 },
    hero: {
      eyebrow: "Serving Fort Oglethorpe, GA",
      h1: "Gutter cleaning, repair, and installation in Fort Oglethorpe, GA.",
      lede: "Bordering the Chickamauga battlefield just over the Georgia line, Fort Oglethorpe's leafy historic streets pack gutters fast. We come down from Chattanooga to cover Fort Oglethorpe and the Catoosa/Walker County line.",
      image: HERO.cleaning,
    },
    intro: {
      heading: "Gutter service for Fort Oglethorpe homes.",
      body: [
        "Fort Oglethorpe sits right against the Chickamauga and Chattanooga National Military Park, just over the Georgia line and about 15 minutes south of downtown Chattanooga. The town grew up around the old Army post, and its established neighborhoods are shaded by the same mature hardwoods that ring the battlefield — gorgeous tree cover that loads gutters heavily every fall.",
        "Because it's so close to our Chattanooga base, Fort Oglethorpe is an easy regular stop. We handle cleaning, repair, seamless installation, and exterior washing for the historic streets near the park and the newer growth out along Battlefield Parkway and toward Ringgold.",
        "Straddling the Catoosa and Walker County line, you're well inside our service range. You get a firm written quote, the same crew that serves the city, and no Georgia surcharge.",
      ],
    },
    localContext: {
      heading: "What Fort Oglethorpe gutters deal with.",
      items: [
        {
          title: "Battlefield-edge mature canopy",
          body: "The streets bordering the national military park are shaded by the same old-growth hardwoods as the park itself — heavy, constant leaf load.",
        },
        {
          title: "Historic post-era housing",
          body: "Older homes from the town's Army-post era often carry aging gutters and fascia that need regular repair, not just cleaning.",
        },
        {
          title: "Newer growth along Battlefield Parkway",
          body: "The commercial-and-residential growth corridor has newer homes that sometimes went up with undersized builder-grade gutters.",
        },
        {
          title: "Same wet North Georgia climate",
          body: "Fort Oglethorpe gets the same heavy regional rainfall as Chattanooga, so gutters have to move real volume to keep water off the house.",
        },
        {
          title: "Wooded lots toward Walker County",
          body: "Properties stretching toward the Walker County side back onto wooded terrain with heavier needle and leaf drop.",
        },
      ],
    },
    neighborhoods: {
      heading: "Areas of Fort Oglethorpe we serve.",
      body: [
        "We cover Fort Oglethorpe from the battlefield-edge historic streets through the Battlefield Parkway corridor and out toward the Catoosa/Walker County line.",
      ],
      list: [
        "Battlefield-edge neighborhoods",
        "Battlefield Parkway corridor",
        "Lakeview area",
        "Catoosa County side",
        "Walker County side",
      ],
    },
    pricing: {
      headline: "Gutter service pricing in Fort Oglethorpe.",
      body: [
        "Fort Oglethorpe pricing matches our Chattanooga rates — $100–$175 single-story cleanings, $150–$250 two-story, repairs from $50 — with no surcharge for crossing the state line.",
        "Seamless installation and replacement are quoted on-site after we measure your home.",
      ],
      bullets: [
        { label: "Cleaning, 1 story", value: "$100–$175" },
        { label: "Cleaning, 2 story", value: "$150–$250" },
        { label: "Repair", value: "From $50" },
        { label: "Install / replacement", value: "Quoted on-site" },
      ],
    },
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
    services: LOCATION_SERVICES,
    seo: {
      metaTitle: "Gutter Services in Fort Oglethorpe, GA | Gutter-It",
      metaDescription:
        "Gutter cleaning, repair, and seamless installation in Fort Oglethorpe, GA. Local Chattanooga crew, no state-line surcharge, honest quotes. Same-day callback.",
    },
  },

  // =====================================================================
  // EXTENDED REACH — TN / AL
  // =====================================================================
  {
    slug: "knoxville",
    city: "Knoxville",
    state: "TN",
    geo: { lat: 35.9606, lng: -83.9207 },
    hero: {
      eyebrow: "Serving Knoxville, TN",
      h1: "Gutter cleaning, repair, and installation in Knoxville, TN.",
      lede: "For larger gutter and exterior projects, we travel up I-75 to serve Knoxville. The same honest, family-owned approach — seamless installation, repair, and exterior washing for East Tennessee's biggest city.",
      image: HERO.install,
    },
    intro: {
      heading: "Gutter service in Knoxville for the right project.",
      body: [
        "Knoxville is about an hour and a half up I-75 from Chattanooga — well outside our daily metro, but a city we travel to for larger projects worth the trip. If you're a Knoxville homeowner looking for a seamless installation, a full replacement, or a substantial repair-and-cleaning project done by a crew that actually shows up and does what it says, we make the drive.",
        "Knoxville shares East Tennessee's wet, wooded character — the foothills of the Smokies, the Tennessee River, mature neighborhoods full of hardwoods, and the same heavy rainfall that's hard on gutters. The gutter problems are the same as down here; we just travel to solve the bigger ones.",
        "Because of the distance, Knoxville work is best suited to scheduled projects rather than a quick same-day cleaning. Call us, tell us what you've got, and we'll let you know honestly whether the trip makes sense for your job.",
      ],
    },
    localContext: {
      heading: "What Knoxville gutters deal with.",
      items: [
        {
          title: "Smoky Mountain foothill tree cover",
          body: "Knoxville's wooded neighborhoods at the foot of the Smokies carry heavy leaf and needle load, just like the ridges around Chattanooga.",
        },
        {
          title: "Mature established neighborhoods",
          body: "Older Knoxville areas like Sequoyah Hills, Fountain City, and Bearden have big trees and aging gutters that overflow when clogged or undersized.",
        },
        {
          title: "Tennessee River humidity",
          body: "The river and the region's humidity grow algae on roofs and siding and breed mosquitoes in standing gutter water — the same issues we treat down south.",
        },
        {
          title: "Hilly terrain and runoff",
          body: "Knoxville's rolling terrain means roof runoff has to be carried carefully away from foundations on sloped lots.",
        },
        {
          title: "Same heavy East-Tennessee rainfall",
          body: "Knoxville gets the same wet regional climate, so gutters have to move serious water to keep the house dry.",
        },
      ],
    },
    neighborhoods: {
      heading: "Knoxville areas we'll travel for.",
      body: [
        "For scheduled projects we'll travel to Knoxville's established and growing neighborhoods. Given the distance, these are best booked as planned installation, replacement, or larger combined jobs.",
      ],
      list: [
        "Bearden",
        "Sequoyah Hills",
        "Fountain City",
        "West Knoxville",
        "Farragut (adjacent)",
        "North Knoxville",
      ],
    },
    pricing: {
      headline: "Gutter service pricing in Knoxville.",
      body: [
        "Because Knoxville is a longer haul, we focus on scheduled projects — seamless installation (roughly $5.40–$9.40 per linear foot), full replacement, and larger repair-and-cleaning jobs — rather than quick one-off cleanings.",
        "Every Knoxville project gets a firm written quote up front. Call us with the details and we'll tell you honestly whether the trip is a good fit for your job.",
      ],
      bullets: [
        { label: "Seamless install", value: "$5.40–$9.40/ft" },
        { label: "Full replacement", value: "Quoted on-site" },
        { label: "Larger repair project", value: "Quoted on-site" },
        { label: "One-off cleaning", value: "Best for our nearer areas" },
      ],
    },
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
    services: LOCATION_SERVICES,
    seo: {
      metaTitle: "Gutter Services in Knoxville, TN | Gutter-It",
      metaDescription:
        "Seamless gutter installation, replacement, and larger gutter projects in Knoxville, TN. Family-owned crew that travels for the right job. Free written quotes.",
    },
  },

  // =====================================================================
  {
    slug: "huntsville",
    city: "Huntsville",
    state: "AL",
    geo: { lat: 34.7304, lng: -86.5861 },
    hero: {
      eyebrow: "Serving Huntsville, AL",
      h1: "Gutter cleaning, repair, and installation in Huntsville, AL.",
      lede: "For larger gutter and exterior projects, we travel down to Huntsville. The same family-owned, no-nonsense approach — seamless installation, replacement, and substantial repair work for North Alabama's growing tech hub.",
      image: HERO.install,
    },
    intro: {
      heading: "Gutter service in Huntsville for scheduled projects.",
      body: [
        "Huntsville is about an hour and three-quarters southwest of Chattanooga, down across the Alabama line — outside our daily service metro, but a fast-growing city we travel to for larger projects. If you're a Huntsville homeowner who wants a seamless installation, a full replacement, or a serious repair-and-cleaning job done by a crew that does exactly what it promises, we'll make the trip.",
        "Huntsville's explosive growth has put up a lot of new construction, often with builder-grade gutters that are undersized for the roof, while the established neighborhoods around Five Points and Blossomwood carry mature trees and aging gutters. The North Alabama climate is wet and humid, hard on gutters the same way Tennessee is.",
        "Given the distance, Huntsville work is best as a scheduled project rather than a quick cleaning. Call us with what you have in mind and we'll tell you honestly whether the trip is a good fit.",
      ],
    },
    localContext: {
      heading: "What Huntsville gutters deal with.",
      items: [
        {
          title: "Rapid new construction",
          body: "Huntsville's growth has produced a lot of newer homes with thin, undersized builder-grade gutters that overflow even when clean and benefit from upsizing.",
        },
        {
          title: "Established-neighborhood tree cover",
          body: "Older areas like Five Points, Blossomwood, and Twickenham have mature hardwoods and aging gutters that need regular cleaning and repair.",
        },
        {
          title: "Monte Sano and the mountain edge",
          body: "Homes along Monte Sano and the wooded mountain edge deal with heavier, more constant tree debris and steep lots.",
        },
        {
          title: "Wet, humid North Alabama climate",
          body: "Huntsville gets heavy rainfall and humidity, which overflows undersized gutters and grows algae on roofs and siding.",
        },
        {
          title: "Tennessee River valley runoff",
          body: "Valley terrain means roof runoff has to be carried carefully away from foundations on the area's varied lots.",
        },
      ],
    },
    neighborhoods: {
      heading: "Huntsville areas we'll travel for.",
      body: [
        "For scheduled projects we'll travel to Huntsville's established and fast-growing neighborhoods. Given the distance, these are best booked as planned installation, replacement, or larger combined jobs.",
      ],
      list: [
        "Five Points",
        "Blossomwood",
        "Twickenham",
        "Monte Sano",
        "Hampton Cove",
        "Madison (adjacent)",
      ],
    },
    pricing: {
      headline: "Gutter service pricing in Huntsville.",
      body: [
        "Because Huntsville is a longer haul, we focus on scheduled projects — seamless installation (roughly $5.40–$9.40 per linear foot), full replacement, and larger repair-and-cleaning jobs — rather than quick one-off cleanings.",
        "Every Huntsville project gets a firm written quote up front. Call with the details and we'll tell you honestly whether the trip is a good fit for your job.",
      ],
      bullets: [
        { label: "Seamless install", value: "$5.40–$9.40/ft" },
        { label: "Full replacement", value: "Quoted on-site" },
        { label: "Larger repair project", value: "Quoted on-site" },
        { label: "One-off cleaning", value: "Best for our nearer areas" },
      ],
    },
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
    services: LOCATION_SERVICES,
    seo: {
      metaTitle: "Gutter Services in Huntsville, AL | Gutter-It",
      metaDescription:
        "Seamless gutter installation, replacement, and larger gutter projects in Huntsville, AL. Family-owned crew that travels for the right job. Free written quotes.",
    },
  },
];
