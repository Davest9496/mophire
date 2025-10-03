"use client";

import Image from "next/image";
import { useState } from "react";

import { testimonials } from "@/lib/data/testimonials";

export default function Testimonials(): React.ReactElement {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevious = (): void => {
    setCurrentIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1,
    );
  };

  const handleNext = (): void => {
    setCurrentIndex((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1,
    );
  };

  const goToSlide = (index: number): void => {
    setCurrentIndex(index);
  };

  return (
    <section className="relative flex w-full overflow-hidden lg:min-h-[600px]">
      {/* Left Image - Hidden on mobile, shown on large screens */}
      <div className="relative hidden lg:block lg:w-1/3">
        <Image
          src="/assets/pages/homepage/images/reviews_side.png"
          alt="Customer satisfaction"
          fill
          className="object-cover"
          sizes="33vw"
          priority
        />
      </div>

      {/* Right Content - Full width on mobile, 2/3 on desktop */}
      <div className="relative w-full lg:w-2/3">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/assets/pages/homepage/images/testimonials_bg.png"
            alt=""
            fill
            className="object-cover"
            sizes="100vw"
          />
        </div>

        {/* Content Overlay */}
        <div className="relative z-10 flex h-full min-h-[600px] flex-col px-4 py-12 sm:px-8 lg:px-12 lg:py-16">
          {/* Header Section */}
          <div className="mb-6 flex w-full flex-col gap-4 lg:mb-8">
            {/* Header Row - Stack on mobile, side-by-side on desktop */}
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-3">
                <Image
                  src="/assets/pages/homepage/icons/Icon.png"
                  alt=""
                  width={28}
                  height={28}
                  className="sm:h-8 sm:w-8"
                />
                <h2 className="text-base font-medium uppercase tracking-wider text-white sm:text-lg">
                  Our Testimonials
                </h2>
              </div>

              {/* Navigation Buttons - Hidden on mobile */}
              <div className="hidden gap-3 sm:flex">
                <button
                  onClick={handlePrevious}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm transition-colors hover:bg-white/30"
                  aria-label="Previous testimonial"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12.5 15L7.5 10L12.5 5"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
                <button
                  onClick={handleNext}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm transition-colors hover:bg-white/30"
                  aria-label="Next testimonial"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.5 15L12.5 10L7.5 5"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
            </div>

            {/* Title */}
            <h3 className="w-full text-2xl font-bold text-white sm:text-2xl lg:text-4xl">
              Why Customers Love Mophire
            </h3>

            {/* Navigation Buttons - Below heading on mobile only */}
            <div className="flex gap-3 sm:hidden">
              <button
                onClick={handlePrevious}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm transition-colors hover:bg-white/30"
                aria-label="Previous testimonial"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.5 15L7.5 10L12.5 5"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              <button
                onClick={handleNext}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm transition-colors hover:bg-white/30"
                aria-label="Next testimonial"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.5 15L12.5 10L7.5 5"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Carousel Container */}
          <div className="relative w-full flex-1">
            {/* Testimonial Cards */}
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{
                  transform: `translateX(-${currentIndex * 100}%)`,
                }}
              >
                {testimonials.map((testimonial) => (
                  <div key={testimonial.id} className="w-full flex-shrink-0">
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 lg:gap-8">
                      {/* Card 1 */}
                      <div className="relative mx-auto flex w-full max-w-md flex-col items-center bg-white p-4 text-center shadow-xl sm:p-6 md:mx-0 md:max-w-none lg:p-8">
                        {/* Quote Icon */}
                        <div className="mb-3 sm:mb-4">
                          <Image
                            src="/assets/pages/homepage/icons/quote.svg"
                            alt=""
                            width={24}
                            height={24}
                            className="sm:h-7 sm:w-7"
                          />
                        </div>

                        {/* Content */}
                        <p className="mb-4 text-sm text-gray-700 sm:mb-6 sm:text-base">
                          {testimonial.content}
                        </p>

                        {/* Rating - Single Icon */}
                        <div className="mb-4 sm:mb-6">
                          <Image
                            src="/assets/pages/homepage/icons/rating.svg"
                            alt="5 star rating"
                            width={90}
                            height={18}
                            className="sm:h-5 sm:w-[110px]"
                          />
                        </div>

                        {/* Author */}
                        <div>
                          <p className="text-sm font-bold text-[#4682B4] sm:text-base">
                            {testimonial.name}
                          </p>
                          <p className="text-xs text-gray-500 sm:text-sm">
                            {testimonial.role} • {testimonial.location}
                          </p>
                        </div>
                      </div>

                      {/* Card 2 - Hidden on mobile, shown on tablet+ */}
                      <div className="relative hidden flex-col items-center bg-white p-4 text-center shadow-xl md:flex sm:p-6 lg:p-8">
                        <div className="mb-3 sm:mb-4">
                          <Image
                            src="/assets/pages/homepage/icons/quote.svg"
                            alt=""
                            width={24}
                            height={24}
                            className="sm:h-7 sm:w-7"
                          />
                        </div>

                        <p className="mb-4 text-sm text-gray-700 sm:mb-6 sm:text-base">
                          {
                            testimonials[
                              (currentIndex + 1) % testimonials.length
                            ]?.content
                          }
                        </p>

                        <div className="mb-4 sm:mb-6">
                          <Image
                            src="/assets/pages/homepage/icons/rating.svg"
                            alt="5 star rating"
                            width={90}
                            height={18}
                            className="sm:h-5 sm:w-[110px]"
                          />
                        </div>

                        <div>
                          <p className="text-sm font-bold text-[#4682B4] sm:text-base">
                            {
                              testimonials[
                                (currentIndex + 1) % testimonials.length
                              ]?.name
                            }
                          </p>
                          <p className="text-xs text-gray-500 sm:text-sm">
                            {
                              testimonials[
                                (currentIndex + 1) % testimonials.length
                              ]?.role
                            }{" "}
                            •{" "}
                            {
                              testimonials[
                                (currentIndex + 1) % testimonials.length
                              ]?.location
                            }
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Dot Indicators */}
            <div className="mt-8 flex justify-center gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`h-2 rounded-full transition-all ${
                    index === currentIndex
                      ? "w-8 bg-white"
                      : "w-2 bg-white/40 hover:bg-white/60"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
