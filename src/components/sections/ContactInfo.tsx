import Image from "next/image";

import type { ContactInfoItem } from "@/lib/types";

const contactItems: ContactInfoItem[] = [
  {
    icon: "/assets/pages/contact/icons/pin.svg",
    label: "Service Area",
    value: "Greater London Area",
    altText: "Location icon",
  },
  {
    icon: "/assets/pages/contact/icons/email.svg",
    label: "Email Us",
    value: "info@mophire.com",
    altText: "Email icon",
  },
  {
    icon: "/assets/pages/contact/icons/clock.svg",
    label: "Response Time",
    value: "Within 24 hours",
    altText: "Clock icon",
  },
];

export default function ContactInfo(): React.ReactElement {
  return (
    <section className="container mx-auto w-full overflow-hidden bg-white">
      <div className="grid grid-cols-1 items-stretch gap-2 px-4 py-16 lg:grid-cols-[60%_40%] lg:px-28">
        {/* Left Image - 60% width on desktop */}
        <div className="relative h-[300px] w-full sm:h-[400px] lg:h-auto lg:min-h-[500px]">
          <Image
            src="/assets/pages/contact/images/Image.png"
            alt="Contact Mophire Cleaning Services"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 60vw"
            priority
          />
        </div>

        {/* Right Contact Info - 40% width on desktop */}
        <div className="flex bg-[#4682B4] px-6 py-8 sm:px-8 sm:py-12 lg:px-10 lg:py-16">
          <div className="mx-auto flex w-full max-w-md flex-col justify-center space-y-6 lg:space-y-8">
            {/* Header */}
            <h2 className="mb-8 text-2xl font-bold text-white sm:text-3xl lg:mb-10">
              Contact Info
            </h2>

            {/* Contact Items */}
            <div className="space-y-6">
              {contactItems.map((item) => (
                <div
                  key={item.label}
                  className="flex items-start gap-4 bg-white px-5 py-4 shadow-md transition-shadow hover:shadow-lg"
                >
                  {/* Icon */}
                  <div className="flex-shrink-0">
                    <Image
                      src={item.icon}
                      alt={item.altText}
                      width={24}
                      height={24}
                      className="h-6 w-6"
                    />
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <p className="mb-1 text-xs font-medium uppercase tracking-wide text-gray-500 sm:text-sm">
                      {item.label}
                    </p>
                    <p className="text-base font-semibold text-accent sm:text-lg">
                      {item.value}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
