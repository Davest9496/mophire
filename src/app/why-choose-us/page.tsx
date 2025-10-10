import CTASection from "@/components/sections/CTASection";
import PageHero from "@/components/sections/PageHero";
import Testimonials from "@/components/sections/Testimonials";
import OurPromise from "@/components/sections/OurPromise";
import { ctaContent } from "@/lib/data/ctaContent";
import SetApart from "@/components/sections/SetApart";
import QualityProcess from "@/components/sections/QualityProcess";

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
      <section className="bg-gray-100 py-12 px-4 sm:py-16 sm:px-8 lg:py-20 lg:px-54">
        <p className="mx-auto text-center text-2xl lg:text-3xl font-medium text-gray-700">
          Discover what makes Mophire the preferred choice for professional
          cleaning services in London. <br className="block sm:hidden" /> We are
          committed to exceeding your expectations with every clean.
        </p>
      </section>
      <OurPromise />
      <SetApart />
      <QualityProcess />
      <Testimonials variant="transparent" />
      <CTASection {...ctaContent.whyChooseUs} />
      {/* Rest of page content */}
    </>
  );
}
