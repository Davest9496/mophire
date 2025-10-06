import CTASection from "@/components/sections/CTASection";
import PageHero from "@/components/sections/PageHero";
import Testimonials from "@/components/sections/Testimonials";
import { ctaContent } from "@/lib/data/ctaContent";

export default function WhyChooseUsPage(): React.ReactElement {
  return (
    <>
      <PageHero
        title="Why Choose Us"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Why Choose Us", href: "/why-choose-us" },
        ]}
      />
      <Testimonials variant="transparent" />
      <CTASection {...ctaContent.whyChooseUs} />
      {/* Rest of page content */}
    </>
  );
}
