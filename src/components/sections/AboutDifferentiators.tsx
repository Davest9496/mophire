import Image from "next/image";

interface DifferentiatorProps {
  title: string;
  description: string;
}

const differentiators: DifferentiatorProps[] = [
  {
    title: "Quality Focused",
    description:
      "We use proven cleaning methods, premium products, and systematic approaches to ensure consistent, outstanding results every single time.",
  },
  {
    title: "Professional Team",
    description:
      "Our cleaners are experienced professionals who undergo thorough background checks and receive ongoing training to maintain our high standards.",
  },
  {
    title: "Customer Care",
    description:
      "Your satisfaction is our priority. We listen to your needs, respect your property, and go above and beyond to ensure you're completely happy.",
  },
] as const;

function DifferentiatorItem({
  title,
  description,
}: DifferentiatorProps): React.ReactElement {
  return (
    <div className="border-b-2 border-[#1E6EE7] bg-gray-100 p-6 lg:p-8">
      <h3 className="mb-3 font-display text-xl font-bold text-accent md:text-2xl">
        {title}
      </h3>
      <p className="text-base leading-relaxed text-gray-600">{description}</p>
    </div>
  );
}

export default function AboutDifferentiators(): React.ReactElement {
  return (
    <section className="py-16 lg:py-24">
      <div className="container mx-auto px-4 lg:px-28">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12">
          {/* Left Content */}
          <div className="flex flex-col justify-center">
            {/* Section Label */}
            <div className="mb-4 flex items-center gap-3">
              <Image
                src="/assets/pages/about/icons/Icon.svg"
                alt=""
                width={24}
                height={24}
              />
              <span className="text-sm font-medium uppercase tracking-wider text-primary">
                Why Choose Us
              </span>
            </div>

            {/* Main Heading */}
            <h2 className="mb-4 font-display text-3xl font-bold text-accent md:text-3xl lg:text-4xl">
              What Makes Mophire Different
            </h2>

            {/* Subtitle */}
            <p className="mb-8 text-base text-gray-600 md:text-lg">
              We&apos;re not just another cleaning company. Here&apos;s what
              sets us apart in the London cleaning market:
            </p>

            {/* Differentiators List */}
            <div className="space-y-6">
              {differentiators.map((item) => (
                <DifferentiatorItem
                  key={item.title}
                  title={item.title}
                  description={item.description}
                />
              ))}
            </div>
          </div>

          {/* Right Image */}
          <div className="relative min-h-[500px] lg:min-h-[600px]">
            <Image
              src="/assets/pages/about/images/why_choose_us.png"
              alt="Professional cleaning equipment and service"
              fill
              className="rounded-lg object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
