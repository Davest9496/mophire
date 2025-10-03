import Image from "next/image";

interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
}

export default function FeatureCard({
  icon,
  title,
  description,
}: FeatureCardProps): React.ReactElement {
  return (
    <div className="group relative overflow-hidden bg-white p-6 shadow-md transition-all duration-300 hover:shadow-xl">
      {/* Hover Background Effect */}
      <div
        className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          backgroundImage: "url('/assets/pages/homepage/icons/hover.svg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* Content */}
      <div className="relative z-10">
        {/* Icon and Title - Side by Side */}
        <div className="mb-3 flex items-center gap-3">
          <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center">
            <Image
              src={icon}
              alt=""
              width={28}
              height={28}
              className="transition-all duration-300 [filter:brightness(0)_saturate(100%)_invert(15%)_sepia(55%)_saturate(2076%)_hue-rotate(198deg)_brightness(95%)_contrast(94%)] group-hover:[filter:brightness(0)_invert(1)]"
            />
          </div>

          <h3 className="text-base font-semibold text-[#153C78] transition-colors duration-300 group-hover:text-white">
            {title}
          </h3>
        </div>

        {/* Description */}
        <p className="text-sm leading-relaxed text-gray-600 transition-colors duration-300 group-hover:text-white">
          {description}
        </p>
      </div>
    </div>
  );
}
