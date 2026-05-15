import { Link } from "react-router-dom";
import { Seo } from "../components/seo/Seo";
import { SITE_ORIGIN } from "../data/seo";

export default function NotFound() {
  return (
    <>
      <Seo
        title="Page Not Found | Gutter-It LLC"
        description="The page you're looking for doesn't exist."
        canonical={`${SITE_ORIGIN}/`}
        noindex
      />
      <section className="bg-cream">
        <div className="container py-24 text-center">
          <p className="eyebrow">404</p>
          <h1 className="mt-2 font-display text-3xl font-bold text-navy md:text-4xl">
            Page not found.
          </h1>
          <p className="mt-4 text-base text-navy/70">
            The page you're looking for doesn't exist or has moved.
          </p>
          <Link
            to="/"
            className="mt-6 inline-flex items-center gap-2 rounded-lg bg-electric px-5 py-2.5 text-sm font-semibold text-white shadow-cta hover:bg-electric-600"
          >
            Back to home
          </Link>
        </div>
      </section>
    </>
  );
}
