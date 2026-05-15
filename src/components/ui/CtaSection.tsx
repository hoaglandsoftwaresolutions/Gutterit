import { ArrowRight, Phone } from "lucide-react";
import { BUSINESS } from "../../data/business";
import { ButtonAnchor, ButtonLink } from "./Button";

type Props = {
  eyebrow?: string;
  heading?: string;
  body?: string;
  bg?: "cream" | "white";
};

export function CtaSection({
  eyebrow = "Ready to talk gutters?",
  heading = "Get your free quote.",
  body = "We'll get back to you within 1 business day.",
  bg = "cream",
}: Props) {
  return (
    <section className={bg === "cream" ? "bg-cream" : "bg-white"}>
      <div className="container py-16 md:py-20">
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow">{eyebrow}</p>
          <h2 className="mt-2 font-display text-3xl font-bold text-navy md:text-4xl">
            {heading}
          </h2>
          <p className="mt-3 text-base text-navy/70">{body}</p>
          <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
            <ButtonLink to="/contact">
              Get Free Quote <ArrowRight className="h-4 w-4" />
            </ButtonLink>
            <ButtonAnchor href={BUSINESS.phoneHref} variant="outline">
              <Phone className="h-4 w-4" />
              {BUSINESS.phone}
            </ButtonAnchor>
          </div>
        </div>
      </div>
    </section>
  );
}
