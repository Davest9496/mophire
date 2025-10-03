import Image from "next/image";
import Link from "next/link";

export default function CTASection(): React.ReactElement {
  return (
    <section className="relative h-[200px] w-full overflow-hidden md:h-[200px]">
      {/* Background Image */}
      <Image
        src="/assets/pages/homepage/images/cta_BG.png"
        alt=""
        fill
        className="object-cover"
        priority={false}
        quality={90}
      />

      {/* Content */}
      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col items-center justify-center gap-8 px-6 lg:px-27 text-center md:flex-row md:justify-between md:text-left">
        <h2 className="max-w-xl text-2xl font-bold text-white md:text-3xl lg:text-4xl">
          Ready For A Spotless Space?
        </h2>

        <Link
          href="/quote"
          className="group flex items-center gap-2 bg-white px-8 py-4 text-lg font-semibold text-brand-navy transition-all hover:bg-brand-teal hover:text-white"
        >
          FREE QUOTE
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
