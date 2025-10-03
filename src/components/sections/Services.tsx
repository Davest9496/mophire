import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface Service {
  id: string;
  title: string;
  description: string;
  image: string;
  icon: string;
  href: string;
}

const services: Service[] = [
  {
    id: "tenancy",
    title: "End of Tenancy Cleaning",
    description:
      "Comprehensive cleaning service designed to help tenants get their full deposit back and ensure properties are spotless for new occupants.",
    image: "/assets/pages/homepage/images/service2.png",
    icon: "tenancy_cleaning",
    href: "/services/tenancy-cleaning",
  },
  {
    id: "office",
    title: "Housekeeping",
    description:
      "Professional cleaning services for homes and residential properties, ensuring a clean and healthy living space and environment.",
    image: "/assets/pages/homepage/images/service1.png",
    icon: "housekeeping",
    href: "/services/housekeeping",
  },
  {
    id: "commercial",
    title: "Commercial Cleaning",
    description:
      "Professional cleaning services for offices, retail spaces, and commercial premises. Maintain a pristine environment that impresses clients and boosts productivity.",
    image: "/assets/pages/homepage/images/service3.png",
    icon: "commercial_cleaning",
    href: "/services/commercial-cleaning",
  },
];

export default function Services(): React.ReactElement {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/pages/homepage/images/services_bg.png"
          alt=""
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 xl:px-28">
        {/* Section Header */}
        <div className="flex items-center justify-center gap-3 mb-4">
          <div className="w-6 h-6 relative">
            <Image
              src="/assets/pages/homepage/icons/Icon.png"
              alt=""
              width={24}
              height={24}
              className="w-full h-full"
              style={{
                filter:
                  "invert(48%) sepia(79%) saturate(2476%) hue-rotate(186deg) brightness(97%) contrast(101%)",
              }}
            />
          </div>
          <span className="text-[#008080] font-medium uppercase tracking-wide text-sm">
            Our Services
          </span>
        </div>

        <h2 className="text-4xl md:text-4xl 2xl:text-5xl font-bold text-center text-[#153C78] mb-16">
          Professional Cleaning
          <br />
          Services For You
        </h2>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}

interface ServiceCardProps {
  service: Service;
}

function ServiceCard({ service }: ServiceCardProps): React.ReactElement {
  const iconPath = `/assets/pages/homepage/icons/${service.icon}.svg`;

  return (
    <article className="group bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:bg-[#0066D0]">
      {/* Icon & Title */}
      <div className="p-6 pb-4">
        <div className="flex items-center gap-4 mb-4">
          <div
            className="relative w-12 h-12 flex-shrink-0 bg-[#008080] group-hover:bg-white transition-colors duration-300"
            style={{
              maskImage: `url(${iconPath})`,
              WebkitMaskImage: `url(${iconPath})`,
              maskSize: "contain",
              WebkitMaskSize: "contain",
              maskRepeat: "no-repeat",
              WebkitMaskRepeat: "no-repeat",
              maskPosition: "center",
              WebkitMaskPosition: "center",
            }}
          />
          <h3 className="text-xl font-bold text-accent group-hover:text-white transition-colors duration-300 leading-tight">
            {service.title}
          </h3>
        </div>
      </div>

      {/* Image */}
      <div className="relative w-full h-56 overflow-hidden">
        <Image
          src={service.image}
          alt={service.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Description */}
      <div className="p-6">
        <p className="text-gray-600 group-hover:text-white/90 transition-colors duration-300 text-sm leading-relaxed mb-6">
          {service.description}
        </p>

        {/* CTA Button */}
        <Link
          href={service.href}
          className="inline-flex items-center gap-2 bg-[#008080] text-white group-hover:bg-white group-hover:text-[#153C78] font-semibold px-6 py-3 transition-all duration-300 hover:gap-3"
        >
          READ MORE
          <ArrowRight className="w-5 h-5" />
        </Link>
      </div>
    </article>
  );
}
