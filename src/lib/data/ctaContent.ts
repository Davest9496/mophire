import type { CTASectionProps } from "@/lib/types";

export const ctaContent = {
  home: {
    title: "Ready For A Spotless Space?",
    description:
      "Contact Mophire today for a free, no-obligation quote and discover how our professional cleaning services can transform your home or business.",
    buttonText: "FREE QUOTE",
    buttonHref: "/quote",
    variant: "detailed",
  },
  whyChooseUs: {
    title: "Experience The Mophire Difference Today",
    description:
      "Join hundreds of satisfied clients who trust Mophire for exceptional cleaning services. Get your free quote and see why we're London's preferred cleaning company.",
    buttonText: "FREE QUOTE",
    buttonHref: "/quote",
    variant: "detailed",
  },
  services: {
    title: "Let Us Handle The Cleaning",
    description: "Book your service today and enjoy a spotless environment.",
    buttonText: "BOOK NOW",
    buttonHref: "/contact",
    variant: "detailed",
  },
  about: {
    title: "Ready to Experience the Mophire Difference?",
    description: "Get in touch today and discover the Mophire difference.",
    buttonText: "CONTACT US",
    buttonHref: "/contact",
    variant: "detailed",
  },
  tenancyCleaning: {
    title: "Need End of Tenancy Cleaning?",
    description:
      "Ensure a smooth move-out with Mophire's expert end of tenancy cleaning services. Get your full deposit back with our comprehensive cleaning solutions.",
    buttonText: "FREE QUOTE",
    buttonHref: "/quote",
    variant: "detailed",
  },
  housekeeping: {
    title: "Professional Housekeeping Services",
    description:
      "Maintain a spotless and healthy living environment with Mophire's expert housekeeping services. Book your service today for a cleaner home.",
    buttonText: "BOOK NOW",
    buttonHref: "/contact",
    variant: "detailed",
  },
  commercialCleaning: {
    title: "Expert Commercial Cleaning",
    description:
      "Impress clients and boost productivity with Mophire's professional commercial cleaning services. Contact us today for a free quote.",
    buttonText: "FREE QUOTE",
    buttonHref: "/quote",
    variant: "detailed",
  },
} as const satisfies Record<string, CTASectionProps>;
