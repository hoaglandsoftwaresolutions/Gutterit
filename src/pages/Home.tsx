import { PageSeoTags } from "../components/seo/usePageSeo";
import { Hero } from "../components/home/Hero";
import { TrustBar } from "../components/layout/TrustBar";
import { ServingBar } from "../components/layout/ServingBar";
import { ServicesGrid } from "../components/home/ServicesGrid";
import { WhoWeAre } from "../components/home/WhoWeAre";
import { WhyChooseUs } from "../components/home/WhyChooseUs";
import { Testimonials } from "../components/home/Testimonials";
import { Faq } from "../components/home/Faq";
import { CtaSection } from "../components/ui/CtaSection";

export default function Home() {
  return (
    <>
      <PageSeoTags path="/" />
      <Hero />
      <TrustBar />
      <WhyChooseUs />
      <Testimonials />
      <ServicesGrid />
      <WhoWeAre />
      <Faq />
      <CtaSection
        eyebrow="Ready to talk gutters?"
        heading="Get your free quote."
        body="Name, phone, and what you need. We'll call you back the same day to talk it through."
      />
      <ServingBar />
    </>
  );
}
