import type { ServiceCategory } from "./services";
import type { FaqItem } from "./faq";

export type DetailParagraph = string;

export type DetailItem = { title: string; body: string };

export type DetailPhoto = { src: string; alt: string; caption?: string };

export type DetailPriceRow = { label: string; value: string };

export type AlsoIncludedItem = { name: string; body: string };

export type ServiceDetail = {
  slug: ServiceCategory;
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
  alsoIncludes?: { heading: string; intro?: string; items: AlsoIncludedItem[] };
  process: { heading: string; steps: DetailItem[] };
  materials?: { heading: string; body: DetailParagraph[] };
  photos: DetailPhoto[];
  pricing: {
    headline: string;
    body: DetailParagraph[];
    bullets?: DetailPriceRow[];
  };
  serviceArea: { heading: string; body: DetailParagraph[] };
  faq: FaqItem[];
  related: ServiceCategory[];
  seo: { metaTitle: string; metaDescription: string };
};

const INSTALLATION: ServiceDetail = {
  slug: "installation",
  hero: {
    eyebrow: "Chattanooga · Hamilton County",
    h1: "Seamless gutter installation, formed on your driveway.",
    lede:
      "Aluminum gutters cut to fit your roof line in one continuous run — no shop-cut joints to fail in five years. We measure, form, hang, and haul the old stuff away in a single day for most homes.",
    image: "/images/jobs/installation/gutter.jpg",
    imageAlt: "Seamless aluminum gutter installed along a Chattanooga roof line",
  },
  intro: {
    heading: "What a real gutter installation actually looks like.",
    body: [
      "Most homes in Hamilton County are running 6-inch K-style aluminum, and for good reason — it handles the rainfall we get here without overwhelming the fascia. We pull up with a roll of coil aluminum, set the machine on your driveway, and form each run to the exact length of the roof line above it. No splices in the middle of a 40-foot run unless your roof bends.",
      "We don't subcontract. The same crew that quotes the job hangs the gutters and walks the work with you before we get paid. If you've ever had a contractor disappear after the deposit cleared and a different crew show up that didn't know what was promised — that's not how this goes.",
      "Tear-off, install, and haul-away on a typical 150-foot home runs about a day. Bigger or steeper jobs take two. We don't leave a pile of bent aluminum in your yard, and we don't leave hanger screws in the grass for your kids to find with their feet.",
    ],
  },
  signs: {
    heading: "When a new gutter installation actually make sense.",
    items: [
      {
        title: "The fascia behind the gutter is soft or rotting",
        body: "If your gutter has been holding water against the wood for years, the back of the gutter and the fascia board are both shot. New gutters on rotted fascia just fail again. We'll tell you straight when the wood needs to come off first.",
      },
      {
        title: "Old gutters are undersized for the roof",
        body: "A lot of older Chattanooga homes were built with 4-inch gutters and 2-inch downspouts that can't move the volume of water a 1,800-square-foot roof drops in a real storm. If yours overflow even when they're clean, that's the issue.",
      },
      {
        title: "Sectional gutters with leaking seams everywhere",
        body: "If you can see five seams from the driveway and three of them are streaked black, it's not a repair anymore — every joint is going to keep failing. Seamless solves it because there are no joints between corners.",
      },
      {
        title: "Mismatched repairs from previous owners",
        body: "Different colors, different sizes, hangers from three different decades. We see this constantly in homes that have changed hands. Pulling all of it and starting over is usually cheaper than fixing the patchwork.",
      },
      {
        title: "New roof going on",
        body: "If you're tearing off shingles, that's the right time to do gutters. Roofers will tell you the same thing — fresh drip edge and a new gutter system together is the only way to make sure water actually leaves the roof the way it's supposed to.",
      },
      {
        title: "Adding an addition or changing the roof line",
        body: "Any time the roof line changes, the existing run is wrong. We can tie new seamless into the old where it makes sense or replace the whole side cleanly.",
      },
    ],
  },
  whatsIncluded: {
    heading: "Everything that goes into gutter installation.",
    items: [
      {
        title: "On-site measurement and a written quote",
        body: "We walk every side of the house with you, measure the runs, check the fascia, and write a number down before we leave. No phone quotes. No 'starts at' lies.",
      },
      {
        title: "Tear-off and disposal of the old system",
        body: "Old aluminum goes in the truck and gets recycled. Old hardware, brackets, and downspouts go with it. You don't have to call the city for a pickup.",
      },
      {
        title: "Seamless 6-inch aluminum, formed on-site",
        body: "Standard is .027-gauge aluminum in your choice of color. We can upgrade to .032 for big runs or coastal-style homes that need it. We bring the swatch book.",
      },
      {
        title: "Hidden hangers spaced for our climate",
        body: "Hangers go in every 24 inches as a baseline — closer if your roof catches snow load on the north face. Screwed into the fascia with #10 lag screws, not nailed.",
      },
      {
        title: "3x4 downspouts, properly pitched",
        body: "Standard is 3x4 inch downspouts in matching color. We size up to 4x5 on big roofs. Splash blocks or extensions where the ground needs them.",
      },
      {
        title: "5-year workmanship warranty in writing",
        body: "If any seam we cut, any hanger we set, or any fastener we drove fails inside five years, we come back and fix it. Written on the receipt, not buried in fine print.",
      },
    ],
  },
  alsoIncludes: {
    heading: "Other installs we handle.",
    intro:
      "Most install jobs are full seamless replacements, but we also handle one-off install work as part of the same visit or on its own.",
    items: [
      {
        name: "Seamless Gutter Installation",
        body: "Custom-fabricated on your driveway to fit your home exactly — fewer joints, fewer leaks, cleaner look. Multiple colors and gauges.",
      },
      {
        name: "Gutter Replacement",
        body: "Full tear-off and replacement when the old system is corroded, undersized, or beyond repair. New hangers, downspouts, and proper pitch.",
      },
      {
        name: "Downspout Installation",
        body: "New or additional downspouts sized to your roof area, properly strapped and pitched to move water away from the foundation.",
      },
      {
        name: "Rain Chain Installation",
        body: "Decorative rain chain alternative to traditional downspouts — guides water from gutter to ground at entryways or garden features.",
      },
      {
        name: "Rainwater Diversion",
        body: "Extensions, splash blocks, and surface drainage that redirect roof water away from the foundation, landscaping, and walkways.",
      },
      {
        name: "Splash Block Installation",
        body: "Splash blocks set at downspout outlets to prevent erosion and soil saturation against the foundation.",
      },
      {
        name: "Underground Downspout Drainage",
        body: "Trench, drain pipe, and downspout tie-in that carries water well away from the house — to the street, yard, or a designated drain.",
      },
      {
        name: "Residential Gutter Services",
        body: "Complete residential gutter service for homeowners — cleaning, repair, installation, and guards under one phone number.",
      },
    ],
  },
  process: {
    heading: "What gutter installation day actually looks like.",
    steps: [
      {
        title: "Walk-through and final measurement",
        body: "We re-walk the house, confirm color and downspout placement with you, and lay drop cloths or move planters out of the drip zone.",
      },
      {
        title: "Tear-off and fascia check",
        body: "Old gutters come down in sections. We inspect the fascia and call you over if we find rot — repair or replacement gets agreed before we form anything new.",
      },
      {
        title: "Form gutters on the driveway",
        body: "Coil aluminum runs through the brake machine and comes out as one continuous gutter, cut to the exact length of the roof above it. Corners are cut and sealed on the ground.",
      },
      {
        title: "Hang the new run",
        body: "Pitch is set toward the downspouts — usually a quarter-inch of drop per ten feet. Hidden hangers go in every 24 inches with #10 lag screws into the fascia.",
      },
      {
        title: "Downspouts, elbows, and splash blocks",
        body: "Downspouts get strapped to the wall every six feet. Elbows handle the kick-out at the bottom. Splash blocks or buried extensions where water needs to go away from the foundation.",
      },
      {
        title: "Cleanup and walk-through",
        body: "We pick up every screw, every aluminum scrap, and every piece of old debris. Then we walk the job with you and water-test the runs with a hose if you want it.",
      },
    ],
  },
  materials: {
    heading: "What's actually on your house when we leave.",
    body: [
      "Standard install is 6-inch K-style aluminum in .027 gauge. That's the right call for 90% of Chattanooga homes — it handles the rain, it doesn't dent from a falling branch, and it's the same profile that matches your neighbors' so resale doesn't suffer. Color options run from white and almond to dark bronze and matte black. We bring the swatch.",
      "If you've got a steep roof, a long run over 40 feet, or you're on Signal Mountain catching ice, we'll quote .032 gauge instead. Thicker aluminum holds its shape better under load and resists denting from ice slides. Costs about $1.20 more per foot installed.",
      "Hangers are hidden — meaning they sit inside the gutter and screw up through the back into the fascia. You don't see them from the ground, and they hold better than the old spike-and-ferrule hardware you'll see on 1980s installs. We use #10 lag screws, not roofing nails, every time.",
      "Downspouts default to 3x4 inch rectangular. They move roughly twice the water of a 2x3 inch and they don't clog the way smaller ones do. We size up to 4x5 on jobs with more than 1,500 square feet of roof draining to one corner.",
    ],
  },
  photos: [
    {
      src: "/images/jobs/installation/gutter.jpg",
      alt: "Newly installed seamless aluminum gutter on a Chattanooga home",
      caption:
        "Fresh seamless aluminum on a two-story job in East Brainerd. Hidden hangers, 3x4 downspouts, .027 gauge in dark bronze.",
    },
  ],
  pricing: {
    headline: "What a full gutter installation costs in Chattanooga.",
    body: [
      "For standard 6-inch aluminum seamless installed, expect roughly $5.40 to $9.40 per linear foot. The wider range covers gauge upgrade, downspout count, height (one story vs two), and whether the fascia needs work before we hang anything.",
      "A typical 1,500-square-foot home runs around 130 to 170 linear feet of gutter — so most installs land between $800 and $1,500. Larger homes with multiple roof lines, dormers, or two stories on the back can run $1,800 to $3,000.",
      "We give a fixed written quote on-site after we measure. No padded phone estimates, no 'change orders' halfway through the day.",
    ],
    bullets: [
      { label: "1 story, 120–150 ft", value: "$800–$1,200" },
      { label: "2 story, 150–180 ft", value: "$1,200–$1,800" },
      { label: "Complex roof line", value: "$1,800–$3,000" },
      { label: "Fascia repair", value: "Quoted on-site" },
    ],
  },
  serviceArea: {
    heading: "We proudly do gutter installation all over Hamilton County.",
    body: [
      "We're based in Chattanooga and work everywhere from Soddy-Daisy to Collegedale. About a third of our installs are in the Hixson and Signal Mountain corridors — older homes with original gutters that have done their forty years and need to come down.",
      "If you're outside Hamilton County, call anyway. We've gone as far as Ringgold and Cleveland for the right job.",
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
  related: ["cleaning", "gutter-guards", "gutter-repair"],
  seo: {
    metaTitle:
      "Gutter Installation in Chattanooga, TN | Seamless Aluminum | Gutter-It LLC",
    metaDescription:
      "Seamless aluminum gutter installation in Chattanooga, TN. Formed on your driveway, hidden hangers, written 5-year warranty. Free on-site quote.",
  },
};

const CLEANING: ServiceDetail = {
  slug: "cleaning",
  hero: {
    eyebrow: "Chattanooga · Hamilton County",
    h1: "Gutter cleaning that actually clears the downspouts.",
    lede:
      "Hand-clear every section, flush every downspout, bag the debris, and haul it off. Most single-story homes done in under an hour. From $100, written on-site, no surprise add-ons.",
    image: "/images/jobs/cleaning/leavesingutter.jpg",
    imageAlt: "Leaves and pine needles packed into a Chattanooga gutter",
  },
  intro: {
    heading: "What gutter cleaning actually means.",
    body: [
      "Most 'gutter cleaning' you'll pay $80 for are someone running a leaf blower along the top of the gutter, scattering half the debris into your shrubs and missing every downspout. We don't work that way. Every section gets cleared by hand. Every downspout gets a hose run through it until water comes out the bottom clean.",
      "If a downspout is blocked under the ground line where we can't see it, we'll tell you and quote the fix before we touch it. We don't surprise you with a $300 charge on a $120 visit.",
      "Twice a year is the right rhythm for most homes in Chattanooga — once in late spring after the oaks and maples drop their pollen and seed pods, and once in late fall after the leaves come down. Homes with pine or hemlock cover usually need a third visit because needles fall year-round and they pack downspouts like a wick.",
    ],
  },
  signs: {
    heading: "How to know it's time.",
    items: [
      {
        title: "Water sheets off the back of the gutter",
        body: "If you can see water curtaining off the back edge during a storm, your gutter is full and water is rolling over the inside lip. That's the moment debris starts soaking the fascia.",
      },
      {
        title: "Plants growing out of the gutter",
        body: "Seedlings sprout fast in wet gutter compost. If you can see green from the driveway, the gutter has been holding a soil layer for a while.",
      },
      {
        title: "Downspout that doesn't drip during rain",
        body: "If it's pouring and your downspout is silent, the downspout is plugged. Water is going somewhere it shouldn't — usually behind the gutter and down the wall.",
      },
      {
        title: "Stains or streaks on the siding below the gutter",
        body: "Vertical stains under the gutter line mean water has been overflowing for a while. Once siding stains, it takes pressure washing to get the marks out.",
      },
      {
        title: "Sagging sections",
        body: "A gutter packed with wet debris is heavy. If a section is dipping or pulling away from the fascia, it's overloaded. Correct gutter cleaning solves the immediate problem; we can also tell you if the hangers need re-spacing.",
      },
      {
        title: "Mosquitoes around the porch",
        body: "Standing water in gutters is a perfect mosquito breeder. If they showed up earlier than usual, your gutters may be the source.",
      },
    ],
  },
  whatsIncluded: {
    heading: "What every gutter cleaning visit covers.",
    items: [
      {
        title: "Hand-removal of all debris",
        body: "We scoop, we don't blow. Every section gets cleared by hand from a ladder. Leaves, pine needles, shingle grit, seed pods, the occasional tennis ball — all of it goes in a bag.",
      },
      {
        title: "Downspout flushing on every downspout",
        body: "We run a hose into each downspout and confirm clean water out the bottom. If one is blocked, we snake it. If it's blocked underground beyond reach, we tell you.",
      },
      {
        title: "Bag and haul-away",
        body: "We don't leave compost piles in your flower beds. Bags go in our truck and go with us.",
      },
      {
        title: "Visual inspection while we're up there",
        body: "Loose hangers, separated seams, sagging sections — we make a note and tell you. No upsell pressure. If it's still good, we say so.",
      },
      {
        title: "Roof valleys cleared",
        body: "Where the roof meets at a valley above a gutter, debris piles up and slides into the gutter the next time it rains. We clear those too.",
      },
    ],
  },
  alsoIncludes: {
    heading: "Other cleaning we handle.",
    intro:
      "Most calls are full gutter cleanings, but we also handle targeted clearing work — either on its own or bundled with the visit.",
    items: [
      {
        name: "Downspout Cleaning",
        body: "Clearing trapped debris, leaves, and shingle grit out of downspouts so water actually moves from the gutter to the ground.",
      },
      {
        name: "Downspout Unclogging",
        body: "Specialized snaking and flushing tools for backed-up downspouts and water pooling around the foundation during rain.",
      },
      {
        name: "Gutter Flushing",
        body: "After-cleaning flush of every section and downspout to confirm water actually flows through the system — no hidden clogs or leaks.",
      },
      {
        name: "Roof Debris Removal",
        body: "Clearing leaves, branches, and pine needles off the roof itself. Debris trapped against shingles holds moisture, grows moss, and clogs gutters from above.",
      },
      {
        name: "Gutter Inspection",
        body: "Walk-around inspection with photos — leaks, sagging, loose hangers, rust, and drainage issues caught before they become bigger repairs.",
      },
    ],
  },
  process: {
    heading: "How a typical gutter cleaning visit runs.",
    steps: [
      {
        title: "Walk-around and quote confirmation",
        body: "We confirm the number we gave you on the phone, look for anything we couldn't see from satellite, and set up the ladder.",
      },
      {
        title: "Top-down clearing",
        body: "Section by section, we hand-clear every run. Debris goes in a contractor bag, not your bushes.",
      },
      {
        title: "Downspout flush",
        body: "Every downspout gets a hose. Clean water out the bottom or we don't leave it alone.",
      },
      {
        title: "Visual gutter check",
        body: "While we're up there: hanger spacing, fascia condition, seam integrity. We make a note.",
      },
      {
        title: "Cleanup",
        body: "Bags in the truck, ladder folded, your yard the way we found it.",
      },
      {
        title: "Walk-through",
        body: "We tell you what we saw. If something needs follow-up — a repair, a re-hang — we quote it. If everything is fine, we say that too.",
      },
    ],
  },
  photos: [
    {
      src: "/images/jobs/cleaning/leavesingutter.jpg",
      alt: "Gutter packed with wet leaves and debris before cleaning",
      caption:
        "What we pulled out of a single 30-foot run in Hixson last fall — about three contractor bags total.",
    },
  ],
  pricing: {
    headline: "What a gutter cleaning service costs.",
    body: [
      "Single-story homes typically run $100–$175. Two-story homes are $150–$250 depending on roof line, gutter linear footage, and how much debris is in there.",
      "We give a firm number before we start, written on the receipt. If we find a clogged underground downspout or a section that needs repair, we quote it separately so you can decide — we don't tack it onto the cleaning total without asking.",
    ],
    bullets: [
      { label: "1 story, standard home", value: "$100–$175" },
      { label: "2 story, standard home", value: "$150–$250" },
      { label: "3+ story or steep roof", value: "Quoted on-site" },
      { label: "Heavy debris (no recent cleaning)", value: "+$25–$50" },
    ],
  },
  serviceArea: {
    heading: "Gutter cleaning is a major service across Hamilton County.",
    body: [
      "Most weeks we're working in Chattanooga, Hixson, East Brainerd, and Ooltewah. We also cover Signal Mountain and Lookout Mountain — those routes take a little longer because of the drive, but the visit price stays the same.",
      "If you're scheduling a fall gutter cleaning, get on the list in September. We book up tight from late October through Thanksgiving.",
    ],
  },
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
      q: "Do I need to be home for a gutter cleaning service?",
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
  related: ["gutter-repair", "gutter-guards", "pressure-washing"],
  seo: {
    metaTitle:
      "Gutter Cleaning in Chattanooga, TN | From $100 | Gutter-It LLC",
    metaDescription:
      "Gutter cleaning service in Chattanooga from $100. Every section cleared, downspouts flushed, debris hauled away. Same-day callback, free quotes.",
  },
};

const REPAIR: ServiceDetail = {
  slug: "gutter-repair",
  hero: {
    eyebrow: "Chattanooga · Hamilton County",
    h1: "Professional Gutter repair in Chattanooga, TN.",
    lede:
      "Sagging sections, leaky seams, broken downspouts, separated corners. Most fixes run $50–$200 and take an hour or two. We are honest if it will need to be fixed or replaced.",
    image: "/images/jobs/repair/undergutter.jpg",
    imageAlt: "Gutter repair work on a Chattanooga home",
  },
  intro: {
    heading: "Why a small gutter problem turns into a big gutter repair.",
    image: {
      src: "/images/jobs/repair/damaged-gutter-fascia-v3.jpg",
      alt: "Damaged aluminum gutter with split fascia board and cracked soffit on a Chattanooga home",
      caption:
        "Real home in Chattanooga: gutter still hanging, but the fascia is splitting and the soffit corner is cracking open from years of overflow.",
    },
    body: [
      "There's a lot of money in selling whole gutter replacements that didn't need to happen. We do installs — but if your problem is two bad seams and a sagging corner, that's a $150 fix, not a $1,500 one.",
      "The catch is that gutter damage almost never stays a gutter problem. Once a seam starts leaking or a section pulls away from the house, water doesn't just disappear — it runs straight down the back of the gutter, soaks the fascia board behind it, and from there finds its way into the soffit, the wall cavity, and eventually the brick or siding below. The photo to the left is a real Chattanooga home: the gutter is still hanging, but the fascia is splitting, the soffit corner is cracking open, and you can see the wood is already wet underneath. A repair at this stage is still in the hundreds of dollars. Wait another season and you're rebuilding fascia, soffit, and possibly a section of roof decking — and that's a five-figure job.",
      "Most calls we get for 'I need new gutters' turn out to be repair jobs caught early enough that the gutter itself is fine. We'll come out, walk the house, and tell you honestly what the gutters need — and just as importantly, what the surrounding wood needs before any of it gets worse. If it's a repair, we quote a repair. If the system is shot, we say that too.",
    ],
  },
  signs: {
    heading: "What we usually find.",
    items: [
      {
        title: "Sagging or pulling-away sections",
        body: "Hangers loosen over time, especially on long runs and homes with heavy leaf load. Re-hanging with new hidden hangers usually solves it.",
      },
      {
        title: "Leaky seams and end caps",
        body: "Old sealant cracks. Corners separate. Both are straightforward seal-and-set jobs if the metal underneath is still sound.",
      },
      {
        title: "Broken or missing downspouts",
        body: "Storms, mowers, kids — downspouts take a beating. We replace damaged sections or add new ones if the system is short on drainage.",
      },
      {
        title: "Wrong pitch (water sits in the gutter)",
        body: "If you can see standing water sitting in a section after a rain, the pitch is wrong. We re-pitch by adjusting hanger height — no replacement needed.",
      },
    ],
  },
  whatsIncluded: {
    heading: "What a typical gutter repair visit covers.",
    items: [
      {
        title: "Re-hang sagging sections",
        body: "New hidden hangers, properly spaced, screwed into solid fascia. We replace any rotted wood we find before we re-hang.",
      },
      {
        title: "Reseal seams and end caps",
        body: "Old sealant out, new gutter-grade sealant in. Done right, a sealed seam lasts ten-plus years.",
      },
      {
        title: "Replace damaged downspouts and elbows",
        body: "Matching color and gauge where available. We bring common sizes on the truck so most fixes happen same-visit.",
      },
      {
        title: "Re-pitch sections that hold water",
        body: "Adjust hanger height across the run so water moves toward the downspouts instead of sitting.",
      },
    ],
  },
  alsoIncludes: {
    heading: "Other repairs we handle.",
    intro:
      "Most repair calls are sagging sections and leaky seams, but we also fix the surrounding damage when overflowing gutters have already done their work.",
    items: [
      {
        name: "Leak Repair",
        body: "Targeted seam, corner, and end-cap leak fixes. Locate the source, clean and prep, then seal with commercial-grade sealant — no full replacement needed.",
      },
      {
        name: "Gutter Resealing",
        body: "Old sealant cracks and fails over time. We clean out seams, end caps, and corners, dry them, and reseal with gutter-grade sealant.",
      },
      {
        name: "Gutter Realignment / Re-Pitching",
        body: "Adjust hanger height and reset slope on sections that sag, pool water, or drain the wrong direction.",
      },
      {
        name: "Downspout Repair",
        body: "Cracked, dented, separated, or detached downspouts — repaired or replaced section-by-section to restore proper drainage.",
      },
      {
        name: "Fascia Repair",
        body: "Rotted or water-damaged fascia from years of overflowing gutters. We replace the wood and reattach gutters securely so the damage doesn't return.",
      },
      {
        name: "Soffit Repair",
        body: "Sagging or rotted soffit boards caused by trapped moisture. We replace boards and fix the gutter or roof issue that caused the damage in the first place.",
      },
      {
        name: "Gutter Inspection",
        body: "Top-to-bottom inspection with photos and an honest report — leaks, sagging, rust, loose hangers, drainage. Repair or replace, we tell you straight.",
      },
    ],
  },
  process: {
    heading: "How a gutter repair visit runs.",
    steps: [
      {
        title: "Walk the house with you",
        body: "Listen to what you're seeing, then look at all of it ourselves. The problem you can see is often only half the story.",
      },
      {
        title: "Quote the repair on-site",
        body: "Fixed number, written down, before we touch anything.",
      },
      {
        title: "Fix it",
        body: "Most repairs take one to two hours. Bigger jobs may take half a day.",
      },
      {
        title: "Test and walk-through",
        body: "We hose-test where it makes sense and walk the work with you before we get paid.",
      },
    ],
  },
  photos: [
    {
      src: "/images/jobs/repair/undergutter.jpg",
      alt: "Repair work under a Chattanooga gutter line",
      caption:
        "Re-hanging a section that had pulled away from the fascia after a wet spring.",
    },
  ],
  pricing: {
    headline: "What gutter repair actually costs.",
    body: [
      "Most repairs run $50 to $200. Small jobs — a single resealed corner or a re-pitched 10-foot section — sit on the low end. Multi-section re-hangs and downspout replacements push toward the higher end.",
      "If you've got several issues, we can usually bundle them on one visit. A $50 seam plus a $90 re-hang plus a $40 downspout doesn't add up to three trip charges — it's one visit.",
    ],
    bullets: [
      { label: "Single seam reseal", value: "$50–$75" },
      { label: "Re-pitch a section", value: "$75–$125" },
      { label: "Re-hang sagging section", value: "$100–$175" },
      { label: "Downspout replacement", value: "$50–$150" },
    ],
  },
  serviceArea: {
    heading: "Gutter repair calls across Hamilton County.",
    body: [
      "We answer repair calls anywhere we clean and install. Most repair work happens in Chattanooga, Hixson, East Brainerd, Red Bank, and East Ridge.",
      "Storm damage gets prioritized — if water is actively making your house wet, call instead of using the contact form.",
    ],
  },
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
  related: ["cleaning", "installation", "gutter-guards"],
  seo: {
    metaTitle:
      "Gutter Repair in Chattanooga, TN | From $50 | Gutter-It LLC",
    metaDescription:
      "Gutter repair in Chattanooga from $50. Sagging sections, leaky seams, broken downspouts. We'll fix it instead of selling you a full replacement.",
  },
};

const GUTTER_GUARDS: ServiceDetail = {
  slug: "gutter-guards",
  hero: {
    eyebrow: "Chattanooga · Hamilton County",
    h1: "Gutter guards installed honestly.",
    lede:
      "We install micro-mesh and reverse-curve leaf protection — and we'll also tell you when guards don't make sense for your house. Straight talk, honest quotes, no high-pressure sales pitch.",
    image: "/images/jobs/installation/gutter.jpg",
    imageAlt: "Gutter line on a Chattanooga home suitable for guard installation",
  },
  intro: {
    heading: "The honest version of the gutter guard conversation.",
    body: [
      "Big-name guard companies sell a story: install our system and you'll never clean your gutters again. The reality is more nuanced. Good gutter guards reduce cleaning frequency a lot, but they don't eliminate it. Pine needles, shingle grit, oak tassels in May, and roof tar still build up on top of any guard system. They just don't fall into the gutter.",
      "For homes with heavy tree cover, that tradeoff is worth it — two roof-top brushings a year beats two ladder-and-bucket cleanings. For homes with light tree load, two normal cleanings is cheaper than a $3,000 guard install. We install what makes sense for your situation, not what makes us the most commission.",
    ],
  },
  signs: {
    heading: "When gutter guards are worth it.",
    items: [
      {
        title: "Heavy oak, maple, or pine canopy directly over the roof",
        body: "If you're cleaning gutters three or more times a year and still finding clogs, gutter guards pay back in a few seasons.",
      },
      {
        title: "Two-story home with steep gutter access",
        body: "If a ladder visit costs $200+ because of height, reducing those visits from two to one a year adds up fast.",
      },
      {
        title: "Health or mobility makes ladder work risky for you",
        body: "Some homeowners just shouldn't be on a 24-foot ladder. Gutter guards plus an annual brush-off is the right answer.",
      },
      {
        title: "Long stretches between visits you'd actually pay for",
        body: "If you'd rather not think about gutters for two years, gutter guards make that realistic for most homes — with a roof rinse on the schedule.",
      },
    ],
  },
  whatsIncluded: {
    heading: "What a gutter guard install looks like.",
    items: [
      {
        title: "On-site assessment first",
        body: "We walk the roof, look at the tree load, and tell you whether guards will actually pay back. If they won't, we say so.",
      },
      {
        title: "Pre-install gutter cleaning",
        body: "Gutter guards go on clean gutters or they're useless. A full cleaning is included in the install price.",
      },
      {
        title: "Micro-mesh or reverse-curve, your choice",
        body: "Both have their place. Micro-mesh stops more debris but needs occasional brushing on top. Reverse-curve handles heavy leaf load and self-cleans better on steeper roofs.",
      },
      {
        title: "Sized to your roof pitch and gutter width",
        body: "Generic gutter guards from big-box stores fit poorly and lift in wind. We size and pitch the guard to your specific roof line.",
      },
      {
        title: "Installed without voiding your roof warranty",
        body: "We don't lift shingles or drill into the roof. Gutter guards attach to the gutter, not the roofing material.",
      },
    ],
  },
  alsoIncludes: {
    heading: "Gutter guard options we install.",
    intro:
      "We install gutter guards on new and existing gutters. We'll talk through which system actually pays back for your roof and tree load before you commit.",
    items: [
      {
        name: "Gutter Guard Installation",
        body: "Proven guard systems matched to your roof type and gutter width. Keeps debris out while letting water in — reduces cleaning frequency and prevents clogs.",
      },
      {
        name: "Leaf Guard Installation",
        body: "Heavier-duty leaf protection for homes surrounded by oak, maple, or pine. Drastically cuts maintenance and prevents seasonal clogs.",
      },
      {
        name: "Micro-Mesh Gutter Guards",
        body: "Fine stainless mesh screen that blocks almost everything — pine needles, shingle grit, and seed pods — while still letting water through.",
      },
      {
        name: "Reverse-Curve Gutter Guards",
        body: "Surface-tension design that pulls water around a lip and into the gutter while leaves shed off the front. Self-cleans better on steep roofs.",
      },
    ],
  },
  process: {
    heading: "How a gutter guard install runs.",
    steps: [
      {
        title: "Assessment and honest recommendation",
        body: "We come look, then we tell you whether gutter guards make sense or whether you'd be better off with twice-yearly cleanings.",
      },
      {
        title: "Pick a system together",
        body: "Micro-mesh vs reverse-curve. We bring samples. You see them in your hand before you decide.",
      },
      {
        title: "Pre-install clean",
        body: "Every section of gutter cleared and flushed before gutter guards go on.",
      },
      {
        title: "Install",
        body: "Gutter guard is measured, cut to fit, and secured to the gutter. Most homes are a one-day job.",
      },
      {
        title: "Walk-through and care notes",
        body: "We show you what to expect over the next year and how often the tops will need a brush-off.",
      },
    ],
  },
  photos: [],
  pricing: {
    headline: "What gutter guards actually cost.",
    body: [
      "Honest range: $7 to $15 per linear foot installed, depending on system and roof access. So a typical 150-foot home runs $1,050 to $2,250 for guards alone, or roughly $1,400 to $2,800 if you're bundling with new gutters.",
      "The big-name companies (you know the ones from TV) will quote $3,500 to $6,000 for the same job. The systems aren't four times better — the marketing budget is.",
    ],
    bullets: [
      { label: "Micro-mesh, 1 story", value: "$7–$10/ft installed" },
      { label: "Reverse-curve, 1 story", value: "$9–$13/ft installed" },
      { label: "2 story upcharge", value: "+$2–$3/ft" },
      { label: "Bundled with new gutters", value: "Discounted" },
    ],
  },
  serviceArea: {
    heading: "Guard installs across Hamilton County.",
    body: [
      "We install gutter guards everywhere we install gutters. Heavy-tree neighborhoods — Lookout Mountain, parts of Signal Mountain, North Chattanooga — are where guards make the most sense.",
    ],
  },
  faq: [
    {
      q: "Are gutter guards (like LeafFilter) worth it?",
      a: "Honest answer: it depends on your trees and your budget. Good gutter guards reduce cleaning frequency but they don't eliminate it — pine needles, shingle grit, and roof tar still build up on top. For most homes, two cleanings a year is cheaper than a $3,000+ guard install. We're happy to install them if you want them, but we won't push them on you.",
    },
    {
      q: "What's the difference between micro-mesh and reverse-curve?",
      a: "Micro-mesh has a fine stainless steel screen that blocks almost everything but lets water through. Reverse-curve uses surface tension — water curves around a lip and into the gutter while leaves shed off the front. Micro-mesh blocks more debris; reverse-curve self-cleans better on steep roofs.",
    },
    {
      q: "Do gutter guards void my roof warranty?",
      a: "Ours don't, because we don't touch the roofing. We attach gutter guards to the gutter, never under the shingles. If a guard company is lifting shingles to install, that can void the roof warranty — ask before you sign.",
    },
    {
      q: "Will I really never have to clean my gutters again?",
      a: "No, and don't believe anyone who says so. Gutter guards reduce cleaning dramatically — usually from two or three visits a year to one — but the tops of the gutter guards still collect debris and need a periodic brush-off. We're honest about this on every quote.",
    },
  ],
  related: ["installation", "cleaning", "gutter-repair"],
  seo: {
    metaTitle:
      "Gutter Guards in Chattanooga, TN | Great Price | Gutter-It LLC",
    metaDescription:
      "Gutter guard installation in Chattanooga, TN. Micro-mesh and reverse-curve options. Straight talk on when gutter guards make sense.",
  },
};

const PRESSURE_WASHING: ServiceDetail = {
  slug: "pressure-washing",
  hero: {
    eyebrow: "Chattanooga · Hamilton County",
    h1: "Pressure washing — gutters, driveways, siding.",
    lede:
      "Tiger-striped gutter exteriors, mossy driveways, dingy siding, and stained concrete — cleaned without damaging the surface underneath. Free quote, locally owned, the same crew on every job.",
    image: "/images/jobs/pressure-washing/pressurewashing.jpg",
    imageAlt: "Pressure washing a Chattanooga driveway",
  },
  intro: {
    heading: "Why Pressure Washing for Gutter-It.",
    body: [
      "Pressure washing started as an add-on to our gutter work — homeowners would ask if we could knock the tiger stripes off the gutter exterior while we were up there. It grew from there.",
      "Today we run a full exterior pressure washing service: driveways, sidewalks, house siding, decks, patios, and (still) gutter exteriors. Same approach as the gutter work — straight quotes, real work, no chemicals you wouldn't want in your kid's sandbox.",
    ],
  },
  signs: {
    heading: "Common things we pressure wash.",
    items: [
      {
        title: "Tiger-striped gutter exteriors",
        body: "Those vertical black streaks on the face of the gutter are oxidation from rainfall pulling shingle residue down the front. Detergent and low pressure takes them off without scratching the aluminum.",
      },
      {
        title: "Driveways and sidewalks",
        body: "Engine oil, tire marks, mildew between the pavers, the green tinge concrete picks up in the shade. Surface cleaner attachment plus the right detergent.",
      },
      {
        title: "House siding (vinyl, brick, fiber cement)",
        body: "Low-pressure soft wash with house-safe detergent. We don't blast siding with 3,000 PSI — that drives water behind it.",
      },
      {
        title: "Decks and patios",
        body: "Wood needs careful pressure and a follow-up brush. We can also clean and seal in one visit if the wood is ready.",
      },
    ],
  },
  whatsIncluded: {
    heading: "What a pressure washing visit covers.",
    items: [
      {
        title: "Pre-wash inspection",
        body: "We walk the surface with you, point out what we can clean and what's permanent staining or material damage, and set expectations before we start.",
      },
      {
        title: "House-safe detergent application",
        body: "Soap goes on first, dwells for a few minutes, then gets rinsed off. The detergent does the work — high pressure damages surfaces.",
      },
      {
        title: "Surface-appropriate pressure",
        body: "Concrete gets a surface cleaner attachment and high pressure. Siding gets a soft-wash tip and 500 PSI. Decks get something in between.",
      },
      {
        title: "Plant and landscaping protection",
        body: "We pre-rinse shrubs and beds adjacent to the pressure washing zone so detergent doesn't sit on roots.",
      },
    ],
  },
  alsoIncludes: {
    heading: "Other surfaces we pressure wash.",
    intro:
      "Pressure washing means different things on different surfaces. We match pressure, tip, and detergent to what we're cleaning — so siding doesn't get blasted and concrete actually comes clean.",
    items: [
      {
        name: "Roof Cleaning",
        body: "Low-pressure soft wash that removes black streaks, algae, moss, and lichen from shingles — the method recommended by roofing manufacturers, not a high-pressure roof beating.",
      },
      {
        name: "House Washing",
        body: "Soft-wash of siding, soffits, and trim to remove dirt, mildew, algae, and cobwebs. Safe for vinyl, brick, stucco, and wood.",
      },
      {
        name: "Soft Washing",
        body: "Low-pressure application with cleaning solutions that kill algae, mold, and mildew at the root — for delicate surfaces like roofs, painted siding, stucco, and wood.",
      },
      {
        name: "Driveway Cleaning",
        body: "Surface cleaner attachment plus hot water to lift oil stains, tire marks, dirt, and mildew from concrete and asphalt driveways.",
      },
      {
        name: "Concrete Cleaning",
        body: "Driveways, sidewalks, patios, garage floors, and pool decks. Commercial surface cleaner removes embedded dirt, algae, rust, and stains.",
      },
      {
        name: "Deck Cleaning",
        body: "Pressure and tip matched to wood or composite. Removes dirt, algae, mildew, and weathering without damaging the surface — preps the deck for sealing, staining, or use.",
      },
      {
        name: "Fence Cleaning",
        body: "Wood, vinyl, and metal fences. Safely removes dirt, mildew, and algae buildup, restoring the original look and extending fence life.",
      },
      {
        name: "Gutter Exterior Wash",
        body: "Removes tiger striping (vertical black streaks) from the face of aluminum gutters using detergent and low pressure — common bundle with a gutter cleaning visit.",
      },
    ],
  },
  process: {
    heading: "How a pressure washing visit runs.",
    steps: [
      {
        title: "Walk the surfaces with you",
        body: "Confirm what's getting washed, identify anything we can't fully clean, set expectations.",
      },
      {
        title: "Pre-rinse plants and beds",
        body: "Water on shrubs first so detergent doesn't soak into root zones.",
      },
      {
        title: "Apply detergent",
        body: "Surface-appropriate soap, applied low-pressure, allowed to dwell.",
      },
      {
        title: "Rinse and clean",
        body: "Pressure and tip matched to the surface. Surface cleaner on flat concrete; soft-wash on siding.",
      },
      {
        title: "Final rinse",
        body: "Walk the whole job with a fresh rinse to make sure no detergent is left behind.",
      },
    ],
  },
  photos: [
    {
      src: "/images/jobs/pressure-washing/pressurewashing.jpg",
      alt: "Pressure washing in progress on a Chattanooga property",
      caption:
        "Driveway clean in Hixson — mildew on the shaded side and tire marks on the sun side. Both gone in a single visit.",
    },
  ],
  pricing: {
    headline: "What pressure washing costs.",
    body: [
      "Pressure washing is quoted by surface and square footage, not by the hour. Most single-family driveways run $150–$300. Full house exterior soft-wash runs $300–$600 depending on size and stories.",
      "If you're bundling — gutter exterior plus driveway, or full house plus deck — we discount the combined visit.",
    ],
    bullets: [
      { label: "Driveway", value: "$150–$300" },
      { label: "Gutter exterior wash", value: "$100–$200" },
      { label: "House soft-wash", value: "$300–$600" },
      { label: "Deck or patio", value: "$150–$400" },
    ],
  },
  serviceArea: {
    heading: "Pressure washing across Hamilton County.",
    body: [
      "Same service area as our gutter work — Chattanooga, Hixson, East Brainerd, Ooltewah, Signal Mountain, Lookout Mountain, Soddy-Daisy, Red Bank, East Ridge, and Collegedale.",
      "Spring and early summer are our busiest months for pressure washing. Get on the schedule by April for the prime window.",
    ],
  },
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
  related: ["cleaning", "gutter-guards", "gutter-repair"],
  seo: {
    metaTitle:
      "Pressure Washing in Chattanooga, TN | Gutters, Driveways, Siding | Gutter-It LLC",
    metaDescription:
      "Pressure washing in Chattanooga: gutter exteriors, driveways, sidewalks, and siding. Cleaned without damage. Free quote, locally owned.",
  },
};

export const SERVICE_DETAILS: Record<ServiceCategory, ServiceDetail> = {
  installation: INSTALLATION,
  cleaning: CLEANING,
  "gutter-repair": REPAIR,
  "gutter-guards": GUTTER_GUARDS,
  "pressure-washing": PRESSURE_WASHING,
};
