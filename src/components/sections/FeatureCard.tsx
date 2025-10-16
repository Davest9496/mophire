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
    <div className="relative overflow-hidden bg-white p-6 shadow-xl">
      {/* Background Effect - Always Visible */}
      <div
        className="absolute inset-0 opacity-80"
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
              className="[filter:brightness(0)_invert(1)]"
            />
          </div>

          <h3 className="text-base font-semibold text-white">{title}</h3>
        </div>

        {/* Description */}
        <p className="text-sm leading-relaxed text-white">{description}</p>
      </div>
    </div>
  );
}
