import type { Metadata } from "next";

import AboutDifferentiators from "@/components/sections/AboutDifferentiators";
import AboutHero from "@/components/sections/AboutHero";
import CTASection from "@/components/sections/CTASection";
import MissionValues from "@/components/sections/MissionValues";
import PageHero from "@/components/sections/PageHero";
import { ctaContent } from "@/lib/data/ctaContent";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Mophire's mission to provide London with trusted, professional cleaning services. Discover our story, values, and what makes us different.",
};

export default function AboutPage(): React.ReactElement {
  return (
    <>
      <PageHero
        title="About Us"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "About Us", href: "/about" },
        ]}
      />
      <AboutHero />
      <MissionValues />
      <AboutDifferentiators />
      <CTASection {...ctaContent.about} />
    </>
  );
}
