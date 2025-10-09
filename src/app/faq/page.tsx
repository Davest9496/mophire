import type { Metadata } from "next";

import FAQAccordion from "@/components/sections/FAQAccordion";
import PageHero from "@/components/sections/PageHero";
import { faqItems } from "@/lib/data/faq";

export const metadata: Metadata = {
  title: "Frequently Asked Questions",
  description:
    "Find answers to common questions about Mophire cleaning services, booking process, pricing, and policies.",
  openGraph: {
    title: "FAQ - Mophire Cleaning Services",
    description: "Get answers to your questions about our cleaning services",
  },
};

export default function FAQPage(): React.ReactElement {
  return (
    <>
      <PageHero
        title="Frequently Asked Questions"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Frequently Asked Questions", href: "/faq" },
        ]}
      />
      <FAQAccordion items={faqItems} />
    </>
  );
}
