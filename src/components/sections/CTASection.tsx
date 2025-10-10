import Image from "next/image";
import Link from "next/link";
import type { CTASectionProps } from "../../lib/types";

export default function CTASection({
  title,
  description,
  buttonText = "FREE QUOTE",
  buttonHref = "/quote",
  backgroundImage = "/assets/pages/homepage/images/cta_BG.png",
  variant = "default",
}: CTASectionProps): React.ReactElement {
  return (
    <section
      className={`relative w-full overflow-hidden ${
        variant === "detailed"
          ? "h-[350px] md:h-[200px]"
          : "h-[300px] md:h-[200px]"
      }`}
    >
      {/* Background Image */}
      <Image
        src={backgroundImage}
        alt=""
        fill
        className="object-cover"
        priority={false}
        quality={90}
      />

      {/* Content */}
      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col items-center justify-center gap-6 px-6 text-left md:flex-row md:justify-between md:gap-8 lg:px-27">
        {/* Text Content */}
        <div className="max-w-3xl">
          <h2 className="mb-3 text-xl font-bold text-white md:mb-4 md:text-2xl lg:text-3xl">
            {title}
          </h2>
          {description && (
            <p className="text-sm text-white/90 md:text-base lg:pr-6 lg:text-md">
              {description}
            </p>
          )}
        </div>

        {/* CTA Button */}
        <Link
          href={buttonHref}
          className="group flex w-full flex-shrink-0 items-center justify-center gap-2 bg-white px-8 py-4 text-base font-semibold text-brand-navy transition-all hover:bg-brand-teal hover:text-white md:w-auto md:text-lg"
        >
          {buttonText}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="transition-transform group-hover:translate-x-1"
          >
            <path d="M5 12h14" />
            <path d="m12 5 7 7-7 7" />
          </svg>
        </Link>
      </div>
    </section>
  );
}
