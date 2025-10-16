import Image from "next/image";

export default function ServicePitch(): React.ReactElement {
  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-28 2xl:max-w-none 2xl:px-57">
        <div className="grid items-stretch gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Right Content Section - Stacked on top for mobile */}
          <div className="order-1 flex flex-col gap-6 lg:order-2">
            {/* Section Header */}
            <div className="flex items-center gap-3">
              <Image
                src="/assets/pages/services/images/Icon.svg"
                alt=""
                width={28}
                height={28}
                className="h-7 w-7"
              />
              <span className="text-sm font-medium uppercase tracking-wider text-[#008080]">
                Why Choose Us
              </span>
            </div>
            {/* Title */}
            <h2 className="text-2xl font-bold text-[#153C78] lg:text-3xl">
              Your Trusted Cleaning Partner
            </h2>

            {/* Description */}
            <p className="text-base leading-relaxed text-gray-600 lg:text-lg">
              Professional cleaning solutions tailored to your specific needs in
              London. We specialise in delivering exceptional results with
              attention to every detail.
            </p>

            {/* Experience Badge & Features - Side by Side */}
            <div className="grid grid-cols-2 gap-4 lg:gap-6">
              {/* Years Badge */}
              <div
                className="flex items-stretch justify-center p-4 text-white lg:p-6"
                style={{ backgroundColor: "#0066D0" }}
              >
                <div className="flex items-center gap-3 lg:gap-4">
                  <span className="text-5xl font-bold leading-none lg:text-6xl">
                    05
                  </span>
                  <div className="flex flex-col justify-center">
                    <span className="text-sm font-medium lg:text-base">
                      Years of
                    </span>
                    <span className="text-sm font-medium lg:text-base">
                      Experience
                    </span>
                  </div>
                </div>
              </div>

              {/* Feature List with WhatsApp-style Double Checkmarks */}
              <ul className="flex flex-col justify-center space-y-3">
                <li className="flex items-center gap-2">
                  <svg
                    className="h-5 w-5 flex-shrink-0 text-primary lg:h-6 lg:w-6"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="gray"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2.5}
                      d="M3 12l4 4l8-8"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2.5}
                      d="M8 12l4 4l8-8"
                    />
                  </svg>
                  <span className="text-sm text-gray-700 lg:text-base">
                    Quality Guaranteed
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <svg
                    className="h-5 w-5 flex-shrink-0 text-primary lg:h-6 lg:w-6"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="gray"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2.5}
                      d="M3 12l4 4l8-8"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2.5}
                      d="M8 12l4 4l8-8"
                    />
                  </svg>
                  <span className="text-sm text-gray-700 lg:text-base">
                    Fully Insured
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <svg
                    className="h-5 w-5 flex-shrink-0 text-primary lg:h-6 lg:w-6"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="gray"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2.5}
                      d="M3 12l4 4l8-8"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2.5}
                      d="M8 12l4 4l8-8"
                    />
                  </svg>
                  <span className="text-sm text-gray-700 lg:text-base">
                    Punctual and Reliable
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <svg
                    className="h-5 w-5 flex-shrink-0 text-primary lg:h-6 lg:w-6"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="gray"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2.5}
                      d="M3 12l4 4l8-8"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2.5}
                      d="M8 12l4 4l8-8"
                    />
                  </svg>
                  <span className="text-sm text-gray-700 lg:text-base">
                    Flexible Scheduling
                  </span>
                </li>
              </ul>
            </div>

            {/* Marketing Copy */}
            <div className="space-y-4 text-gray-700">
              <p className="text-sm leading-relaxed lg:text-base">
                With half a decade of expertise, we&apos;ve perfected our
                approach to delivering spotless results. Our experienced team
                combines professional-grade equipment with eco-friendly products
                to ensure your space is thoroughly cleaned and safe for your
                family or employees.
              </p>
              <p className="text-sm leading-relaxed lg:text-base">
                From residential homes to commercial offices, we bring the same
                commitment to excellence and customer satisfaction that has made
                us London&apos;s trusted cleaning partner.
              </p>
            </div>
          </div>

          {/* Left Image Section - Below content on mobile */}
          <div className="order-2 lg:order-1">
            <div className="relative h-full">
              {/* Green Decorative Box - Bottom left corner */}
              <div className="absolute bottom-0 left-0 z-0 h-24 w-24 lg:h-30 lg:w-30">
                <Image
                  src="/assets/pages/services/images/BG-2.svg"
                  alt=""
                  fill
                  className="object-contain"
                />
              </div>

              {/* Main Service Image - Elevated and offset from green box */}
              <div className="relative z-10 pl-2 pb-2 h-full">
                <div className="relative h-full min-h-[450px] overflow-hidden shadow-xl lg:min-h-[500px]">
                  <Image
                    src="/assets/pages/services/images/services.png"
                    alt="Professional cleaning services"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    priority
                  />

                  {/* Guarantee Badge - Positioned in center */}
                  <div className="absolute bg-white rounded-full p-2 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                    <Image
                      src="/assets/pages/services/images/quality-guaranteed.svg"
                      alt="Quality guaranteed"
                      width={90}
                      height={100}
                      className="drop-shadow-2xl"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
