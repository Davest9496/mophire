import Image from "next/image";
import type { ServiceFeaturesProps } from "@/lib/types";

export default function ServiceFeatures({
  features,
  image2,
  image3,
}: ServiceFeaturesProps): React.ReactElement {
  return (
    <section className=" py-16 lg:py-24">
      <div className="container  mx-auto px-4 sm:px-6 lg:px-28">
        {/* Services Include Section */}
        <div className="bg-gray-100 p-6 lg:p-8 rounded-lg">
          {/* Title - Spans full width */}
          <h3 className="mb-6 font-display text-2xl text-[#153C78] font-bold text-accent lg:mb-8 lg:text-3xl">
            What&apos;s Included:
          </h3>

          {/* Images and Features List */}
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12">
            {/* Left Side - Images */}
            <div className="grid h-full grid-cols-2 gap-4 lg:gap-6">
              {/* Image 2 */}
              <div className="relative h-full min-h-[400px] w-full overflow-hidden">
                <Image
                  src={image2}
                  alt="Service feature"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 50vw, 25vw"
                />
              </div>

              {/* Image 3 */}
              <div className="relative h-full min-h-[400px] w-full overflow-hidden">
                <Image
                  src={image3}
                  alt="Service feature"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 50vw, 25vw"
                />
              </div>
            </div>

            {/* Right Side - Features List */}
            <div className="flex h-full flex-col">
              {/* Features List - Will grow to fill available space */}
              <ul className="flex flex-1 flex-col justify-center space-y-4">
                {features.map((feature, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-4 bg-white px-6 py-4 shadow-sm transition-shadow hover:shadow-md"
                  >
                    {/* Checkmark Icon */}
                    <div className="flex-shrink-0">
                      <Image
                        src="/assets/pages/services/icons/checkmark.svg"
                        alt=""
                        width={24}
                        height={24}
                        className="h-6 w-6"
                      />
                    </div>

                    {/* Feature Text */}
                    <span className="text-base text-gray-700 lg:text-lg">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Feature Cards Section */}
        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3 lg:mt-24">
          {/* Quality Guaranteed Card */}
          <div className="relative overflow-hidden shadow-sm bg-gray-100">
            {/* Background Pattern */}
            <div className="absolute right-0 top-0 h-50 w-[65%]">
              <Image
                src="/assets/pages/services/icons/Line.svg"
                alt=""
                fill
                className="object-cover"
              />
            </div>

            {/* Content */}
            <div className="relative z-10 p-10">
              {/* Icon */}
              <div className="mb-4 -ml-2">
                <Image
                  src="/assets/pages/services/icons/best_seller.svg"
                  alt=""
                  width={56}
                  height={56}
                  className="h-16 w-16"
                />
              </div>

              {/* Title */}
              <h4 className="mb-2 font-display text-xl font-bold text-[#153C78]">
                Quality
                <br />
                Guaranteed
              </h4>

              {/* Description */}
              <p className="text-sm text-gray-700">
                100% satisfaction guarantee on all our <br /> cleaning services.
              </p>
            </div>
          </div>

          {/* Fully Insured Card */}
          <div className="relative overflow-hidden shadow-sm bg-gray-100">
            {/* Background Pattern */}
            <div className="absolute right-0 top-0 h-50 w-[65%]">
              <Image
                src="/assets/pages/services/icons/Line.svg"
                alt=""
                fill
                className="object-cover"
              />
            </div>

            {/* Content */}
            <div className="relative z-10 p-10">
              {/* Icon */}
              <div className="mb-4 -ml-2">
                <Image
                  src="/assets/pages/services/icons/protect.svg"
                  alt=""
                  width={56}
                  height={56}
                  className="h-16 w-16"
                />
              </div>

              {/* Title */}
              <h4 className="mb-2 font-display text-xl font-bold text-[#153C78]">
                Fully
                <br />
                Insured
              </h4>

              {/* Description */}
              <p className="text-sm text-gray-700">
                Complete insurance coverage for your <br /> peace of mind.
              </p>
            </div>
          </div>

          {/* Punctual Service Card */}
          <div className="relative overflow-hidden shadow-sm bg-gray-100">
            {/* Background Pattern */}
            <div className="absolute right-0 top-0 h-50 w-[65%]">
              <Image
                src="/assets/pages/services/icons/Line.svg"
                alt=""
                fill
                className="object-cover"
              />
            </div>

            {/* Content */}
            <div className="relative z-10 p-10">
              {/* Icon */}
              <div className="mb-4 -ml-2">
                <Image
                  src="/assets/pages/services/icons/clock.svg"
                  alt=""
                  width={56}
                  height={56}
                  className="h-16 w-16"
                />
              </div>

              {/* Title */}
              <h4 className="mb-2 font-display text-xl font-bold text-[#153C78]">
                Punctual
                <br />
                Service
              </h4>

              {/* Description */}
              <p className="text-sm text-gray-700">
                Always on time, every time. Reliability <br /> you can count on.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
