import type { ServiceCategory } from "./services";

export type Testimonial = {
  name: string;
  city: string;
  quote: string;
  services?: ServiceCategory[];
};

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Sarah M.",
    city: "Chattanooga",
    quote:
      "Called Jakob on a Monday because we had water pouring off the back gutter every time it rained. He came out Wednesday morning, found a clogged downspout I didn't even know about, and was done in under an hour. $120, no nickel-and-diming.",
    services: ["cleaning"],
  },
  {
    name: "Mike R.",
    city: "Hixson",
    quote:
      "Got three quotes for new gutters on our place in Hixson. Gutter-It wasn't the cheapest but Jakob actually showed up when he said he would and walked the whole roof with me before quoting. Other guys just glanced from the driveway. Easy choice.",
    services: ["installation"],
  },
  {
    name: "Sean H.",
    city: "Hixson",
    quote:
      "I had a corner gutter that was leaking for so long which caused the fascia and soffit to rot. Jakob came out to my house in Hixson and fixed it in no time! He was very professional, honest, and did a great job!",
    services: ["gutter-repair", "installation"],
  },
];
