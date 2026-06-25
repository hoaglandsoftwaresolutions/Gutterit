import type { DetailItem, DetailPriceRow } from "./serviceDetails";
import type { FaqItem } from "./faq";

// Content for standalone local SEO landing pages (e.g.
// /gutter-cleaning-chattanooga). These live outside the typed ServiceCategory
// system on purpose — they're location-targeted marketing pages, not entries in
// the core five-service menu. Copy is written to be distinct from
// /services/cleaning so the two pages don't read as duplicate content.

export type LocalPageContent = {
  intro: { heading: string; body: string[] };
  signs: { heading: string; items: DetailItem[] };
  whatsIncluded: { heading: string; items: DetailItem[] };
  process: { heading: string; steps: DetailItem[] };
  pricing: { headline: string; body: string[]; bullets?: DetailPriceRow[] };
  serviceArea: { heading: string; body: string[] };
  faq: FaqItem[];
};

export const LOCAL_GUTTER_CLEANING_CHATTANOOGA: LocalPageContent = {
  intro: {
    heading: "Why gutter cleaning is so important in Chattanooga,TN.",
    body: [
      "Chattanooga sits in a green bowl — oaks, maples, sweetgums, and pine ringing almost every neighborhood, plus 50-plus inches of rain a year. That combination packs gutters faster here than in most of the country. If you've got mature trees over the roof, twice-a-year cleaning isn't being cautious; it's the bare minimum to keep water off your fascia.",
      "We're Gutter-It LLC, family-owned and based right here on Bass Road in Chattanooga. When you call, you're talking to the people who'll actually be on your ladder — not a call center routing you to whichever subcontractor is closest. That's the difference between a $79 'special' that blows debris into your shrubs and a real cleaning that flushes every downspout.",
      "Every visit ends with a straight walk-through: what we pulled out, what we saw up there, and whether anything needs a follow-up. No upsell theater. If your gutters are fine, we tell you they're fine.",
    ],
  },
  signs: {
    heading: "Make sure gutter cleaning is the right service.",
    items: [
      {
        title: "Water sheets off the back of the gutter",
        body: "During one of our afternoon thunderstorms, if water curtains off the back edge instead of running to the downspout, the gutter is packed and overflowing against the fascia.",
      },
      {
        title: "Pine needles you can see from the driveway",
        body: "Lookout Mountain, Signal Mountain, and the wooded parts of Hixson get heavy pine and hemlock. Needles weave into a mat that water can't pass and downspouts can't move.",
      },
      {
        title: "Seedlings or moss growing in the gutter",
        body: "Our humidity turns trapped debris into compost fast. Green growth in the trough means it's been holding a soil layer through more than one rain.",
      },
      {
        title: "Stained siding below the gutter line",
        body: "Vertical streaks under the gutter mean it's been overflowing. Left long enough, those stains need pressure washing to remove.",
      },
      {
        title: "A silent downspout in a downpour",
        body: "If it's pouring and the downspout isn't gushing, it's clogged — and the water is going behind the gutter and down your wall instead.",
      },
      {
        title: "Mosquitoes earlier than the neighbors",
        body: "Standing water in a clogged gutter is a perfect breeder. Chattanooga summers are bad enough without your own roof making it worse.",
      },
    ],
  },
  whatsIncluded: {
    heading: "What's included in a Chattanooga gutter cleaning.",
    items: [
      {
        title: "Hand-clearing, every section",
        body: "We scoop by hand from the ladder — leaves, pine straw, shingle grit, seed pods, the works. No leaf blower scattering it into your beds.",
      },
      {
        title: "Every downspout flushed",
        body: "A hose goes into each downspout until clean water runs out the bottom. Blocked ones get snaked; anything stuck underground we point out and quote separately.",
      },
      {
        title: "Bag and haul-away",
        body: "Debris leaves in our truck. We don't stack wet leaf bags by your trash cans or pile compost in the flower beds.",
      },
      {
        title: "Free visual inspection",
        body: "While we're up there we check hangers, seams, fascia, and pitch — and tell you plainly if anything needs attention.",
      },
      {
        title: "Roof valleys cleared",
        body: "Debris that piles where two roof planes meet slides straight back into the gutter at the next rain. We clear those so the cleaning lasts.",
      },
    ],
  },
  process: {
    heading: "How a Chattanooga gutter cleaning visit runs.",
    steps: [
      {
        title: "Same-day callback",
        body: "Call or text and we get back to you the same day. Most on-site quotes happen within 2–4 business days; active leaks jump the line.",
      },
      {
        title: "Quote confirmed on-site",
        body: "We walk the house, confirm the number, and look for anything satellite measurements missed before a ladder goes up.",
      },
      {
        title: "Hand-clear top to bottom",
        body: "Section by section, every run gets cleared by hand into a contractor bag.",
      },
      {
        title: "Flush every downspout",
        body: "Hose through each one until it runs clean. If one's blocked, we deal with it or tell you what it'll take.",
      },
      {
        title: "Cleanup and haul-away",
        body: "Bags in the truck, ladder folded, your yard left the way we found it.",
      },
      {
        title: "Walk-through and honest notes",
        body: "We tell you what we saw. Repair needed? We quote it. Everything good? We say so and you're done.",
      },
    ],
  },
  pricing: {
    headline: "What gutter cleaning costs in Chattanooga.",
    body: [
      "Single-story Chattanooga homes typically run $100–$175. Two-story homes are $150–$250 depending on roof line, linear footage, and how much debris has built up. Mountain and steep-roof homes are quoted on-site.",
      "You get a firm number written on the receipt before we start. If we find a clogged underground downspout or a section that needs repair, we quote that separately — never tacked onto the cleaning total without asking you first.",
    ],
    bullets: [
      { label: "1 story, standard home", value: "$100–$175" },
      { label: "2 story, standard home", value: "$150–$250" },
      { label: "Mountain / steep roof", value: "Quoted on-site" },
      { label: "Heavy debris (overdue)", value: "+$25–$50" },
    ],
  },
  serviceArea: {
    heading: "Gutter Cleaning Service in Chattanooga and all of Hamilton County.",
    body: [
      "We're on the road most weeks in Chattanooga proper, Hixson, East Brainerd, and Ooltewah. We also cover Signal Mountain, Lookout Mountain, Soddy-Daisy, Red Bank, East Ridge, and Collegedale — the mountain routes take a little longer to reach, but the visit price stays the same.",
      "Booking a fall cleaning? Get on the list in September. From late October through Thanksgiving we book up tight as the leaves come down.",
    ],
  },
  faq: [
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
  ],
};
