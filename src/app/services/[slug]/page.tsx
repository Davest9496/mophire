import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PageHero from "@/components/sections/PageHero";
import Image from "next/image";
import { ctaContent } from "@/lib/data/ctaContent";
import type { ServicePageData } from "@/lib/types";
import CTASection from "@/components/sections/CTASection";

// Service data configuration
const servicesData: Record<string, ServicePageData> = {
  "tenancy-cleaning": {
    slug: "tenancy-cleaning",
    title: "End of Tenancy Cleaning",
    description:
      "Comprehensive cleaning service designed to help tenants get their full deposit back and ensure properties are spotless for new occupants.",
    icon: "/assets/pages/homepage/icons/tenancy_cleaning.svg",
    image: "/assets/pages/homepage/images/service2.png",
    metaDescription:
      "Professional end of tenancy cleaning services. Get your full deposit back with our comprehensive cleaning solution.",
    ctaContent: { ...ctaContent.tenancyCleaning },
  },
  housekeeping: {
    slug: "housekeeping",
    title: "Housekeeping",
    description:
      "Professional cleaning services for homes and residential properties, ensuring a clean and healthy living space and environment.",
    icon: "/assets/pages/homepage/icons/housekeeping.svg",
    image: "/assets/pages/homepage/images/service1.png",
    metaDescription:
      "Expert housekeeping services for homes. Maintain a spotless, healthy living environment with our professional cleaners.",
    ctaContent: { ...ctaContent.housekeeping },
  },
  "commercial-cleaning": {
    slug: "commercial-cleaning",
    title: "Office & Commercial Cleaning",
    description:
      "Professional cleaning services for offices, retail spaces, and commercial premises. Maintain a pristine environment that impresses clients and boosts productivity.",
    icon: "/assets/pages/homepage/icons/commercial_cleaning.svg",
    image: "/assets/pages/homepage/images/service3.png",
    metaDescription:
      "Commercial cleaning services for offices and businesses. Professional solutions that enhance your workspace and productivity.",
    ctaContent: { ...ctaContent.commercialCleaning },
  },
};

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

// Generate metadata for each service page
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

// Generate static paths for all services
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

  // Show 404 if service doesn't exist
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

      {/* Service Content Section */}
      <section className="container mx-auto px-4 py-16 xl:px-28">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left Column - Image */}
          <div className="relative h-[400px] overflow-hidden rounded-lg shadow-xl lg:h-[500px]">
            <Image
              src={service.image}
              alt={service.title}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

          {/* Right Column - Content */}
          <div className="flex flex-col justify-center">
            {/* Icon */}
            <div className="mb-6 flex items-center gap-4">
              <div
                className="h-16 w-16 bg-primary"
                style={{
                  maskImage: `url(${service.icon})`,
                  WebkitMaskImage: `url(${service.icon})`,
                  maskSize: "contain",
                  WebkitMaskSize: "contain",
                  maskRepeat: "no-repeat",
                  WebkitMaskRepeat: "no-repeat",
                  maskPosition: "center",
                  WebkitMaskPosition: "center",
                }}
              />
              <h2 className="text-3xl font-bold text-accent">
                {service.title}
              </h2>
            </div>

            {/* Description */}
            <p className="mb-8 text-lg leading-relaxed text-gray-700">
              {service.description}
            </p>

            {/* Additional content placeholder */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-accent">
                What&apos;s Included
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="mt-1 text-primary">✓</span>
                  <span>Professional cleaning equipment and supplies</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 text-primary">✓</span>
                  <span>Experienced and vetted cleaning professionals</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 text-primary">✓</span>
                  <span>Flexible scheduling to suit your needs</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 text-primary">✓</span>
                  <span>100% satisfaction guarantee</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* CTA Button */}
      </section>
      <CTASection {...service.ctaContent} />
    </>
  );
}
