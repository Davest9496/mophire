"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

function CounterAnimation({ target }: { target: number }): React.ReactElement {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const counterRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 },
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000; // 2 seconds
    const steps = 60;
    const increment = target / steps;
    const stepDuration = duration / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, stepDuration);

    return () => clearInterval(timer);
  }, [isVisible, target]);

  return (
    <div ref={counterRef}>
      <p className="mb-1 font-display text-4xl font-bold text-white md:text-5xl">
        {count.toLocaleString()}+
      </p>
    </div>
  );
}

export default function AboutHero(): React.ReactElement {
  return (
    <section className="container mx-auto px-4 py-16 lg:py-24 lg:px-28">
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
            <span className="text-sm font-medium uppercase tracking-wider text-[#008080]">
              About Us
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="mb-6 font-display text-3xl font-bold text-accent md:text-3xl lg:text-4xl">
            About Mophire
          </h1>

          {/* Description */}
          <p className="mb-8 text-base leading-relaxed text-gray-600 md:text-lg">
            Your trusted partner for professional cleaning services in London.
            We&apos;re committed to delivering exceptional results that exceed
            expectations.
          </p>

          {/* Our Story Section */}
          <div className="space-y-4">
            <h2 className="font-display text-2xl font-bold text-accent md:text-3xl">
              Our Story
            </h2>
            <p className="text-base leading-relaxed text-gray-600 md:text-lg">
              Founded with a simple mission: to provide London residents and
              businesses with cleaning services they can truly rely on. Mophire
              was born from the understanding that finding trustworthy,
              professional cleaning services shouldn&apos;t be a challenge.
            </p>
          </div>
        </div>

        {/* Right Images Grid */}
        <div className="grid grid-cols-2 gap-4">
          {/* Full Height Left Image */}
          <div className="relative h-full min-h-[400px]">
            <Image
              src="/assets/pages/about/images/img.png"
              alt="Mophire cleaning professional"
              fill
              className="rounded-lg object-cover"
              sizes="(max-width: 768px) 50vw, 25vw"
            />
          </div>

          {/* Right Stack - Image and Stats Card */}
          <div className="flex flex-col gap-4">
            {/* Top Right Image - Takes 70% height */}
            <div className="relative flex-[7]">
              <Image
                src="/assets/pages/about/images/about.png"
                alt="Professional cleaning tools"
                fill
                className="rounded-lg object-cover"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
            </div>

            {/* Bottom Right Stats Card - Takes 30% height */}
            <div className="relative flex flex-[3] items-center overflow-hidden rounded-lg bg-secondary p-6">
              <Image
                src="/assets/pages/about/icons/bg.svg"
                alt=""
                fill
                className="object-cover"
              />
              <div className="relative z-10 text-left">
                <CounterAnimation target={589} />
                <p className="text-sm font-medium uppercase tracking-wider text-white">
                  Happy Clients
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
