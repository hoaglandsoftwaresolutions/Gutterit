import { Send } from "lucide-react";
import { JobberForm } from "./JobberForm";

type Props = {
  variant?: "card" | "plain";
  className?: string;
};

// QuoteForm is a thin wrapper around the Jobber embedded form. The card
// variant matches the styled containers seen on the Home/About/Gallery
// pages; the plain variant is used on /contact where the form sits in its
// own column.
export function QuoteForm({ variant = "card", className }: Props) {
  const inner = (
    <>
      <div className="mb-4 flex items-center gap-2 text-navy">
        <Send className="h-4 w-4 text-electric" />
        <h3 className="font-display text-lg font-bold">Get a free quote</h3>
      </div>
      <p className="mb-5 text-sm text-muted">
        Three quick fields. We'll get back to you within 1 business day.
      </p>
      <JobberForm />
      <p className="mt-4 text-center text-sm text-muted">
        Or call us directly:{" "}
        <a
          href="tel:+14234753158"
          className="font-semibold text-navy underline underline-offset-4 hover:text-amber"
        >
          (423) 475-3158
        </a>
      </p>
    </>
  );

  if (variant === "plain") {
    return <div className={className}>{inner}</div>;
  }

  return (
    <div
      className={
        "rounded-xl border border-navy/10 bg-white p-6 shadow-card md:p-8 " +
        (className ?? "")
      }
    >
      {inner}
    </div>
  );
}
