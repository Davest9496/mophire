import Image from "next/image";
import type { Promise } from "@/lib/types";

interface PromiseCardProps {
  promise: Promise;
}

export default function PromiseCard({
  promise,
}: PromiseCardProps): React.ReactElement {
  return (
    <article className="relative overflow-hidden p-6 sm:p-8 border border-gray-200 shadow-sm hover:shadow-md transition-shadow bg-gray-50 rounded-2xl">
      {/* Background Pattern - Decorative SVG as full cover */}
      <Image
        src="/assets/pages/Why_Choose_Mophire/icons/bg.svg"
        alt=""
        fill
        className="absolute inset-0 object-cover"
        aria-hidden="true"
        priority
      />
      <div className="relative z-10">
        {/* Icon */}
        <div className="mb-6 -ml-2 flex h-16 w-16 items-center justify-center">
          <Image
            src={promise.icon}
            alt=""
            width={32}
            height={32}
            className="h-16 w-16"
            aria-hidden="true"
          />
        </div>

        {/* Title */}
        <h3 className="mb-3 text-xl font-bold text-[#102A43] sm:text-base">
          {promise.title}
        </h3>

        {/* Description */}
        <p className="mb-6 text-sm leading-relaxed text-gray-700 sm:text-base lg:text-sm">
          {promise.description}
        </p>

        {/* Features List */}
        <ul className="space-y-3" role="list">
          {promise.features.map((feature, index) => (
            <li key={index} className="flex items-start gap-3">
              <Image
                src="/assets/pages/Why_Choose_Mophire/icons/chekmark.svg"
                alt=""
                width={20}
                height={20}
                className="mt-0.5 h-5 w-5 flex-shrink-0"
                aria-hidden="true"
              />
              <span className="text-sm text-gray-800 sm:text-base lg:text-sm">
                {feature.text}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}
