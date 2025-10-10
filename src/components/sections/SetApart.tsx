import Image from "next/image";
import { setApartFeatures } from "@/lib/data/setApart";

export default function SetApart(): React.ReactElement {
  return (
    <section
      className="relative bg-gray-100 py-22 sm:py-16 lg:py-38 -mb-15"
      style={{
        clipPath: "polygon(0 5%, 100% 0, 100% 95%, 0 100%)",
      }}
    >
      <div className="relative z-10 mx-auto max-w-7xl px-4 lg:px-28 sm:px-8">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-4 lg:items-center">
          {/* Right Images Container - Shows FIRST on mobile, SECOND on desktop */}
          <div className="order-1 flex items-center justify-center lg:order-2 lg:justify-start">
            <div className="grid h-[400px] w-full grid-cols-4 gap-3 sm:h-[500px] sm:gap-4 lg:h-[500px]">
              {/* Left Column (25%) - Years + Red Check Stacked */}
              <div className="col-span-1 flex h-full flex-col gap-3 sm:gap-4">
                {/* Years Badge - 30% of height */}
                <div className="relative h-[30%]">
                  <Image
                    src="/assets/pages/Why_Choose_Mophire/icons/years.svg"
                    alt="05+ Years of experience"
                    fill
                    className="object-contain drop-shadow-lg"
                  />
                </div>

                {/* Red Check Image - 70% of height */}
                <div className="relative h-[70%]">
                  <Image
                    src="/assets/pages/Why_Choose_Mophire/Images/red-check.png"
                    alt="Quality checked"
                    fill
                    className="rounded-lg object-cover shadow-2xl"
                    sizes="(max-width: 768px) 25vw, 15vw"
                  />
                </div>
              </div>

              {/* Right Column (75%) - Background Image Full Height */}
              <div className="col-span-3 h-full">
                <div className="relative h-full">
                  <Image
                    src="/assets/pages/Why_Choose_Mophire/Images/bg.png"
                    alt="Professional cleaning service"
                    fill
                    className="rounded-lg object-cover shadow-xl"
                    sizes="(max-width: 768px) 60vw, 40vw"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Left Content - Shows SECOND on mobile, FIRST on desktop */}
          <div className="order-2 flex flex-col justify-center lg:order-1 pr-10">
            {/* Header */}
            <div className="mb-8">
              <div className="mb-4 flex items-center gap-3">
                <Image
                  src="/assets/pages/Why_Choose_Mophire/icons/Icon.svg"
                  alt=""
                  width={28}
                  height={28}
                  className="h-7 w-7"
                  aria-hidden="true"
                />
                <p className="text-sm font-semibold uppercase tracking-wider text-[#008080] sm:text-base">
                  Why Choose Us?
                </p>
              </div>
              <h2 className="mb-4 text-3xl font-bold text-[#102A43] sm:text-3xl lg:text-4xl">
                What Sets Us Apart
              </h2>
              <p className="text-base text-gray-600 sm:text-lg lg:text-base">
                Beyond our core guarantees, here&apos;s what makes Mophire
                unique in the London cleaning market.
              </p>
            </div>

            {/* Features List */}
            <div className="space-y-6">
              {setApartFeatures.map((feature) => (
                <div key={feature.id} className="flex gap-4">
                  {/* Icon */}
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-white">
                    <Image
                      src={feature.icon}
                      alt=""
                      width={24}
                      height={24}
                      className="h-6 w-6"
                      aria-hidden="true"
                    />
                  </div>

                  {/* Content */}
                  <div>
                    <h3 className="mb-2 text-lg font-bold text-[#102A43] sm:text-xl">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-gray-600 sm:text-base lg:text-base">
                      {feature.description}
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
