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
    name: "Tom L.",
    city: "Collegedale",
    quote:
      "We thought we needed a full replacement. Jakob came out, looked at it, and told us it was really just two bad sections — saved us about $1,800. Hard to find contractors who'll talk you OUT of work. Hiring him for the pressure washing next.",
    services: ["repair", "pressure-washing"],
  },
];
