import type { CTASectionProps } from "@/lib/types";

export const ctaContent = {
  home: {
    title: "Ready For A Spotless Space?",
    buttonText: "FREE QUOTE",
    buttonHref: "/quote",
    variant: "default",
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
    title: "Ready To Work With London's Best?",
    description: "Get in touch today and discover the Mophire difference.",
    buttonText: "CONTACT US",
    buttonHref: "/contact",
    variant: "detailed",
  },
} as const satisfies Record<string, CTASectionProps>;
