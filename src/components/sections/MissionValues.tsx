import Image from "next/image";

const values = [
  "Excellence in every detail",
  "Trustworthy and reliable service",
  "Respect for your space and time",
  "Environmental responsibility",
  "Transparent, honest communication",
] as const;

export default function MissionValues(): React.ReactElement {
  return (
    <section className=" py-16 lg:py-24">
      <div className="container mx-auto px-4 lg:px-28">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12">
          {/* Our Mission Card */}
          <div className="relative overflow-hidden p-6 sm:p-8 border border-gray-200 shadow-sm hover:shadow-md transition-shadow bg-gray-50 rounded-2xl">
            {/* Background Image - Direct background */}
            <Image
              src="/assets/pages/Why_Choose_Mophire/icons/bg.svg"
              alt=""
              fill
              className="absolute inset-0 object-cover"
              aria-hidden="true"
              priority
            />

            {/* Content - Layered on top */}
            <div className="relative z-10 p-8 lg:p-10">
              {/* Icon */}
              <div className="mb-6 flex h-16 w-16 lg:h-[90px] lg:w-[90px] items-center justify-center rounded-full -ml-4 lg:-ml-6">
                <Image
                  src="/assets/pages/about/icons/Goal.svg"
                  alt=""
                  width={64}
                  height={64}
                  className="lg:w-[48px] lg:h-[48px] w-8 h-8"
                />
              </div>

              {/* Title */}
              <h2 className="mb-4 font-display text-2xl font-bold text-accent md:text-3xl">
                Our Mission
              </h2>

              {/* Description - First Paragraph */}
              <p className="mb-4 text-base leading-relaxed text-gray-600">
                To deliver exceptional cleaning services that create spotless,
                healthy environments where our clients can live and work with
                confidence. We believe that a clean space is fundamental to
                well-being and productivity.
              </p>

              {/* Description - Second Paragraph */}
              <p className="text-base leading-relaxed text-gray-600">
                Every member of the Mophire team is carefully vetted, thoroughly
                trained, and committed to upholding our high standards of
                professionalism and quality.
              </p>
            </div>
          </div>

          {/* Our Values Card */}
          <div className="relative overflow-hidden p-6 sm:p-8 border border-gray-200 shadow-sm hover:shadow-md transition-shadow bg-gray-50 rounded-2xl">
            {/* Background Image - Direct background */}
            <Image
              src="/assets/pages/Why_Choose_Mophire/icons/bg.svg"
              alt=""
              fill
              className="absolute inset-0 object-cover"
              aria-hidden="true"
              priority
            />

            {/* Content - Layered on top */}
            <div className="relative z-10 p-8 lg:p-10">
              {/* Icon */}
              <div className="mb-6 flex h-18 w-18 lg:h-[100px] lg:w-[100px] items-center justify-center rounded-full -ml-4 lg:-ml-6">
                <Image
                  src="/assets/pages/about/icons/values.svg"
                  alt=""
                  width={64}
                  height={64}
                  className="lg:w-[48px] lg:h-[48px] w-10 h-10"
                />
              </div>

              {/* Title */}
              <h2 className="mb-6 font-display text-2xl font-bold text-accent md:text-3xl">
                Our Values
              </h2>

              {/* Values List */}
              <ul className="space-y-3">
                {values.map((value) => (
                  <li key={value} className="flex items-start gap-3">
                    <div className="mt-0.5 flex-shrink-0">
                      <Image
                        src="/assets/pages/about/icons/checkmark.svg"
                        alt=""
                        width={20}
                        height={20}
                      />
                    </div>
                    <span className="text-base text-gray-700">{value}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
