import Image from "next/image";
import FeatureCard from "./FeatureCard";

interface Feature {
  icon: string;
  title: string;
  description: string;
}

export default function WhyChooseUs(): React.ReactElement {
  const features: Feature[] = [
    {
      icon: "/assets/pages/homepage/icons/duster.svg",
      title: "100% Satisfaction Guarantee",
      description:
        "We stand behind our work. If you're not completely satisfied, we'll make it right at no extra cost.",
    },
    {
      icon: "/assets/pages/homepage/icons/hand-glove.svg",
      title: "Experienced & Vetted Cleaners",
      description:
        "Our professional team is thoroughly background-checked, trained, and insured for your peace of mind.",
    },
    {
      icon: "/assets/pages/homepage/icons/towel.svg",
      title: "Spotless Results Every Time",
      description:
        "We use proven techniques and quality equipment to deliver consistently exceptional cleaning results.",
    },
    {
      icon: "/assets/pages/homepage/icons/working-hours.svg",
      title: "Flexible Scheduling",
      description:
        "We work around your schedule with convenient booking times that fit your busy lifestyle.",
    },
    {
      icon: "/assets/pages/homepage/icons/best-price.svg",
      title: "Transparent Pricing",
      description:
        "No hidden fees or surprises. You'll know exactly what you're paying for with our upfront pricing.",
    },
    {
      icon: "/assets/pages/homepage/icons/cleaning-liquid.svg",
      title: "Eco-Friendly Options",
      description:
        "Choose from our range of environmentally safe cleaning products for a healthier space.",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-gray-50">
      {/* Container with grid - no overflow hidden on container */}
      <div className="relative mx-auto px-4">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-4 xl:gap-0">
          {/* Left Column - Content */}
          <div className="py-16 lg:py-20 xl:py-28 xl:pl-8 2xl:pl-8 max-w-7xl">
            <div className="flex gap-8">
              {/* Decorative background icon - hidden on small screens */}
              <div className="hidden flex-shrink-0 opacity-90 lg:block">
                <Image
                  src="/assets/pages/homepage/icons/why_choose_us.svg"
                  alt=""
                  width={120}
                  height={0}
                  className="h-full w-auto object-contain"
                />
              </div>

              {/* Content */}
              <div className="flex-1">
                {/* Section Header */}
                <div className="mb-12">
                  <p className="mb-2 flex items-center gap-2 text-sm font-medium uppercase tracking-wide text-[#008080]">
                    <Image
                      src="/assets/pages/homepage/icons/sparkle.png"
                      alt=""
                      width={20}
                      height={20}
                    />
                    Why Choose Us?
                  </p>
                  <h2 className="text-3xl font-bold text-[#153C78] lg:text-4xl">
                    Why Choose Mophire?
                  </h2>
                  <p className="mt-4 max-w-2xl text-gray-600">
                    We&apos;re committed to delivering exceptional cleaning
                    services that exceed your expectations. Here&apos;s what
                    sets us apart from the competition.
                  </p>
                </div>

                {/* Feature Cards Grid */}
                <div className="grid gap-6 sm:grid-cols-2">
                  {features.map((feature, index) => (
                    <FeatureCard
                      key={index}
                      icon={feature.icon}
                      title={feature.title}
                      description={feature.description}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Full Height Image extending to viewport edge */}
          <div className="relative lg:absolute lg:inset-y-0 lg:right-0 lg:w-[45vw]">
            <div className="relative h-[400px] lg:h-full">
              <Image
                src="/assets/pages/homepage/images/why_choose_us.png"
                alt="Professional cleaning service in action"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
