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
} as const satisfies Record<string, CTASectionProps>;
