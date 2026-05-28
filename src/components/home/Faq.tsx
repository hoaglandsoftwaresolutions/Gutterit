import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";
import { FAQ, type FaqItem } from "../../data/faq";

type Props = {
  heading?: string;
  intro?: string;
  items?: FaqItem[];
};

export function Faq({
  heading = "Questions we get a lot.",
  intro = "If you don't see your question here, just call. We'd rather talk it through than have you guess.",
  items = FAQ,
}: Props) {
  return (
    <section className="bg-cream">
      <div className="container py-16 md:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <p className="eyebrow">FAQ</p>
          <h2 className="mt-2 font-display text-3xl font-bold text-navy md:text-4xl">
            {heading}
          </h2>
          <p className="mt-4 text-base text-navy/70">{intro}</p>
        </div>

        <Accordion.Root
          type="single"
          collapsible
          className="mx-auto mt-10 max-w-3xl divide-y divide-navy/10 border-y border-navy/10"
        >
          {items.map((item, i) => (
            <Accordion.Item key={i} value={`q-${i}`}>
              <Accordion.Header>
                <Accordion.Trigger className="flex w-full items-center justify-between gap-4 py-5 text-left text-base font-semibold text-navy [&[data-state=open]>svg]:rotate-180">
                  <span>{item.q}</span>
                  <ChevronDown className="h-5 w-5 shrink-0 text-electric transition-transform duration-300" />
                </Accordion.Trigger>
              </Accordion.Header>
              <Accordion.Content className="pb-5 pr-8 text-sm leading-relaxed text-navy/70">
                {item.a}
              </Accordion.Content>
            </Accordion.Item>
          ))}
        </Accordion.Root>
      </div>
    </section>
  );
}
