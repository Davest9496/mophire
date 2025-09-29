import React from "react";
export {};
import Link from "next/link";
import { Sparkles, Shield, Clock } from "lucide-react";

const features = [
  {
    icon: Sparkles,
    title: "Professional Service",
    description: "Experienced and vetted cleaning professionals",
  },
  {
    icon: Shield,
    title: "Fully Insured",
    description: "Complete peace of mind with full insurance coverage",
  },
  {
    icon: Clock,
    title: "Flexible Scheduling",
    description: "Book at times that work for you",
  },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#008080] via-[#4682B4] to-[#102A43] px-4 py-20 text-white lg:py-32">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC40Ij48cGF0aCBkPSJNMzYgMzRjMC0yLjIxLTEuNzktNC00LTRzLTQgMS43OS00IDQgMS43OSA0IDQgNCA0LTEuNzkgNC00em0wLTMwYzAtMi4yMS0xLjc5LTQtNC00cy00IDEuNzktNCA0IDEuNzkgNCA0IDQgNC0xLjc5IDQtNHpNNiAzNGMwLTIuMjEtMS43OS00LTQtNHMtNCAxLjc5LTQgNCAxLjc5IDQgNCA0IDQtMS43OSA0LTR6Ii8+PC9nPjwvZz48L3N2Zz4=')] bg-repeat" />
      </div>

      <div className="relative mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Content */}
          <div className="flex flex-col justify-center">
            <h1 className="mb-6 font-display text-4xl font-bold leading-tight lg:text-6xl">
              Professional Cleaning Services In London
            </h1>
            <p className="mb-8 text-lg leading-relaxed text-white/90 lg:text-xl">
              Experience spotless results with our trusted cleaning
              professionals. From homes to offices, we deliver exceptional
              service every time.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col gap-4 sm:flex-row">
              <Link
                href="/quote"
                className="rounded-md bg-white px-8 py-4 text-center font-medium text-[#008080] shadow-lg transition-all hover:bg-gray-50 hover:shadow-xl"
              >
                Get Free Quote
              </Link>
              <Link
                href="/services"
                className="rounded-md border-2 border-white px-8 py-4 text-center font-medium text-white transition-all hover:bg-white/10"
              >
                View Services
              </Link>
            </div>
          </div>

          {/* Features */}
          <div className="flex items-center">
            <div className="grid gap-6">
              {features.map((feature) => {
                const Icon = feature.icon;
                return (
                  <div
                    key={feature.title}
                    className="flex gap-4 rounded-lg bg-white/10 p-6 backdrop-blur-sm transition-all hover:bg-white/20"
                  >
                    <div className="flex-shrink-0">
                      <Icon className="h-8 w-8" />
                    </div>
                    <div>
                      <h3 className="mb-2 font-semibold text-lg">
                        {feature.title}
                      </h3>
                      <p className="text-sm text-white/80">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
