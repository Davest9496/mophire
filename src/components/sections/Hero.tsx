import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export function Hero(): React.ReactElement {
  return (
    <section className="relative min-h-[600px] overflow-hidden bg-[#0B3980] text-white lg:min-h-[700px]">
      {/* Hexagon Background Shape - All screens */}
      <div
        className="pointer-events-none absolute right-0 top-0 h-[350px] w-[70vw] bg-contain bg-right bg-no-repeat lg:h-full lg:w-[50vw] xl:w-[45vw]"
        style={{
          backgroundImage: "url('/assets/pages/homepage/banner/BG-2.png')",
        }}
        aria-hidden="true"
      />

      {/* Image - Extends from right viewport edge - All screens */}
      <div className="pointer-events-none absolute right-0 top-0 flex h-[350px] w-[98vw] items-center justify-end lg:h-full lg:w-[50vw] xl:w-[53vw]">
        <div className="relative h-[90%] w-full lg:h-[98%] xl:h-[95%]">
          <Image
            src="/assets/pages/homepage/images/Right_Image.png"
            alt="A lady cleaning with a smile on her face"
            fill
            className="object-contain object-right rounded-tl-[100px] rounded-bl-[100px]"
            priority
          />
        </div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 py-20 lg:py-42 xl:px-26 2xl:ml-0 2xl:mr-auto 2xl:pl-57">
        {/* Left Decorative SVGs - All screens now */}
        <div className="pointer-events-none absolute left-4 top-[280px] h-[200px] w-[300px] lg:top-1/2 lg:h-[70%] lg:w-[450px] lg:-translate-y-1/2 xl:left-26 xl:w-[500px] 2xl:left-57">
          {/* Vector SVG on the left */}
          <div className="absolute left-0 top-0 h-full w-[50px] lg:w-[80px] xl:w-[100px]">
            <Image
              src="/assets/pages/homepage/banner/Vector.svg"
              alt=""
              fill
              className="object-contain object-left"
            />
          </div>

          {/* Elements SVG on the right - with gap */}
          <div className="absolute left-[80px] top-0 h-full w-[200px] lg:left-[200px] lg:w-[300px] xl:left-[250px] xl:w-[350px] 2xl:left-[350]">
            <Image
              src="/assets/pages/homepage/banner/Elements.svg"
              alt=""
              fill
              className="object-contain object-left"
            />
          </div>
        </div>

        <div className="flex flex-col gap-12 lg:grid lg:grid-cols-2 lg:gap-16">
          {/* Spacer for mobile - takes up space where image is positioned */}
          <div className="h-[250px] w-full lg:hidden" aria-hidden="true" />

          {/* Content */}
          <div className="relative z-20">
            <div className="relative flex items-center gap-3">
              {/* Star Icon */}
              <div className="relative h-10 w-20">
                <Image
                  src="/assets/pages/homepage/icons/rating.svg"
                  alt=""
                  fill
                  className="object-contain object-left"
                />
              </div>
              <p className="inline-block text-sm uppercase underline">
                trusted by 500+ customers
              </p>
            </div>
            {/* Heading & Subheading */}
            <h1 className="mb-6 font-display text-3xl font-bold leading-tight lg:text-4xl 2xl:text-5xl">
              Professional <br />
              Cleaning Services <br /> In London
            </h1>
            <p className="mb-8 text-base leading-relaxed text-white/90 lg:text-md 2xl:text-lg">
              Expert end of tenancy and office cleaning services. <br />{" "}
              Stress-free, reliable, and guaranteed to exceed expectations.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col gap-4 sm:flex-row">
              <Link
                href="/quote"
                className="flex cursor-pointer items-center justify-center gap-2 bg-[#008080] px-8 py-4 text-center font-medium text-white shadow-lg transition-all hover:bg-white hover:text-[#008080] hover:shadow-xl"
              >
                Get Free Quote
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                href="/services"
                className="flex cursor-pointer items-center justify-center gap-2 border-2 border-white bg-white px-8 py-4 text-center font-medium text-[#0B3980] transition-all hover:bg-transparent hover:text-white"
              >
                View Services
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
