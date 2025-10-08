import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PageHero from "@/components/sections/PageHero";
import ServiceDetail from "@/components/sections/ServiceDetail";
import CTASection from "@/components/sections/CTASection";
import ServiceFeatures from "@/components/sections/ServiceFeatures";
import { ctaContent } from "@/lib/data/ctaContent";
import type { ServicePageData } from "@/lib/types";

// Service data configuration with features
const servicesData: Record<string, ServicePageData> = {
  "tenancy-cleaning": {
    slug: "tenancy-cleaning",
    title: "End of Tenancy Cleaning",
    description:
      "Comprehensive cleaning service designed to help tenants get their full deposit back and ensure properties are spotless for new occupants. Our thorough deep clean covers every corner of the property, meeting the strictest landlord and letting agent standards.",
    icon: "/assets/pages/homepage/icons/tenancy_cleaning.svg",
    image1: "/assets/pages/homepage/images/service2.png",
    image2: "/assets/pages/homepage/images/service2.png",
    image3: "/assets/pages/homepage/images/service2.png",
    metaDescription:
      "Professional end of tenancy cleaning services. Get your full deposit back with our comprehensive cleaning solution.",
    ctaContent: { ...ctaContent.tenancyCleaning },
    features: [
      "Deep cleaning of all rooms, including kitchen and bathrooms",
      "Oven and appliance cleaning",
      "Window cleaning (interior)",
      "Carpet and upholstery cleaning",
      "Wall and skirting board cleaning",
      "Deposit-back guarantee",
      "Flexible scheduling to suit your move-out date",
    ],
  },
  housekeeping: {
    slug: "housekeeping",
    title: "Housekeeping",
    description:
      "Professional cleaning services for homes and residential properties, ensuring a clean and healthy living space and environment. Our experienced team delivers consistent, high-quality cleaning tailored to your home's unique needs.",
    icon: "/assets/pages/homepage/icons/housekeeping.svg",
    image1: "/assets/pages/services/images/housekeep1.png",
    image2: "/assets/pages/services/images/housekeep2.png",
    image3: "/assets/pages/services/images/housekeep3.png",
    metaDescription:
      "Expert housekeeping services for homes. Maintain a spotless, healthy living environment with our professional cleaners.",
    ctaContent: { ...ctaContent.housekeeping },
    features: [
      "Regular or one-off cleaning services",
      "Dusting and vacuuming throughout",
      "Kitchen and bathroom sanitisation",
      "Floor cleaning and mopping",
      "Bed linen changes",
      "Flexible scheduling to suit your routine",
    ],
  },
  "commercial-cleaning": {
    slug: "commercial-cleaning",
    title: "Office & Commercial Cleaning",
    description:
      "Professional cleaning services for offices, retail spaces, and commercial premises. Maintain a pristine environment that impresses clients and boosts productivity. Our dedicated teams work around your business hours to minimise disruption.",
    icon: "/assets/pages/homepage/icons/commercial_cleaning.svg",
    image1: "/assets/pages/services/images/office1.png",
    image2: "/assets/pages/services/images/office2.png",
    image3: "/assets/pages/services/images/office3.png",
    metaDescription:
      "Commercial cleaning services for offices and businesses. Professional solutions that enhance your workspace and productivity.",
    ctaContent: { ...ctaContent.commercialCleaning },
    features: [
      "Daily, weekly, or monthly cleaning schedules",
      "Desk and workstation sanitisation",
      "Restroom deep cleaning and restocking",
      "Reception and common area maintenance",
      "Floor care (vacuuming, mopping, polishing)",
      "Flexible timing to suit business hours",
    ],
  },
};

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata(props: PageProps): Promise<Metadata> {
  const params = await props.params;
  const service = servicesData[params.slug];

  if (!service) {
    return {
      title: "Service Not Found",
    };
  }

  return {
    title: service.title,
    description: service.metaDescription,
  };
}

export function generateStaticParams(): { slug: string }[] {
  return Object.keys(servicesData).map((slug) => ({
    slug,
  }));
}

export default async function ServicePage(
  props: PageProps,
): Promise<React.ReactElement> {
  const params = await props.params;
  const service = servicesData[params.slug];

  if (!service) {
    notFound();
  }

  return (
    <>
      <PageHero
        title={service.title}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: service.title, href: `/services/${service.slug}` },
        ]}
      />

      <ServiceDetail
        title={service.title}
        description={service.description}
        image={service.image1}
      />

      <ServiceFeatures
        features={service.features || []}
        image2={service.image2}
        image3={service.image3}
      />

      <CTASection {...service.ctaContent} />
    </>
  );
}
