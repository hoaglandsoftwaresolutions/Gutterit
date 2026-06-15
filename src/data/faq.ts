export type FaqItem = { q: string; a: string };

export const FAQ: FaqItem[] = [
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

export const FAQ_INSTALLATION_COST: FaqItem = {
  q: "How much does a full seamless gutter installation cost?",
  a: "For aluminum seamless gutters in Chattanooga, expect roughly $5.40–$9.40 per linear foot installed — so a typical 150-foot home runs around $800–$1,400. We give a fixed written quote on-site after we measure. No padded estimates over the phone.",
};

// Extended FAQ used on the dedicated /faq page. Starts with the core questions
// shown on the home page, then adds service-specific and logistics questions.
export const FAQ_FULL: FaqItem[] = [
  ...FAQ,
  FAQ_INSTALLATION_COST,
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
