import { ArrowRight, Clock, Mail, MapPin, Phone } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Seo } from "../components/seo/Seo";
import { BUSINESS } from "../data/business";
import { QuoteForm } from "../components/ui/QuoteForm";

type Info = {
  icon: LucideIcon;
  label: string;
  value: string;
  href?: string;
  cta?: string;
};

const INFO: Info[] = [
  {
    icon: Phone,
    label: "Phone",
    value: BUSINESS.phone,
    href: BUSINESS.phoneHref,
    cta: "Call now",
  },
  {
    icon: Mail,
    label: "Email",
    value: BUSINESS.email,
    href: BUSINESS.emailHref,
    cta: "Send email",
  },
  {
    icon: MapPin,
    label: "Address",
    value: `${BUSINESS.address.street}\n${BUSINESS.address.city}, ${BUSINESS.address.region}`,
  },
  {
    icon: Clock,
    label: "Hours",
    value: BUSINESS.hours,
  },
];

export default function Contact() {
  return (
    <>
      <Seo
        title="Contact | Gutter-It LLC"
        description="Call, email, or request a quote from Gutter-It LLC in Chattanooga, TN. We answer the phone and call back the same day."
        canonical="https://gutter-itllc.com/contact"
      />

      <section className="bg-navy">
        <div className="container py-16 md:py-20">
          <p className="eyebrow text-amber-200">Contact</p>
          <h1 className="mt-2 font-display text-3xl font-bold text-cream md:text-4xl">
            Get in touch.
          </h1>
          <p className="mt-4 max-w-2xl text-base text-cream/80">
            Call us, email us, or fill out the form below. We'll get back to you
            within 1 business day.
          </p>
        </div>
      </section>

      <section className="bg-cream">
        <div className="container py-16 md:py-20 grid gap-10 lg:grid-cols-[1fr_1.2fr]">
          <div className="space-y-4">
            {INFO.map(({ icon: Icon, label, value, href, cta }) => (
              <div
                key={label}
                className="rounded-xl border border-navy/5 bg-white p-5 shadow-card"
              >
                <div className="flex items-start gap-3">
                  <div className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-sky-50 text-electric">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div className="flex-1">
                    <p className="text-xs font-semibold uppercase tracking-wider text-sky-500">
                      {label}
                    </p>
                    <p className="mt-1 whitespace-pre-line text-base font-semibold text-navy">
                      {value}
                    </p>
                    {href && cta && (
                      <a
                        href={href}
                        className="mt-1 inline-flex items-center gap-1 text-sm font-semibold text-amber hover:text-amber-600"
                      >
                        {cta} <ArrowRight className="h-3.5 w-3.5" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}

            <div className="overflow-hidden rounded-xl border border-navy/5 bg-white shadow-card">
              <iframe
                src={BUSINESS.mapEmbedSrc}
                title="Map of Gutter-It LLC, Chattanooga, TN"
                loading="lazy"
                className="h-64 w-full border-0"
              />
            </div>
          </div>

          <QuoteForm />
        </div>
      </section>
    </>
  );
}
