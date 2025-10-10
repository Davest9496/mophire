import Image from "next/image";
import PromiseCard from "@/components/ui/PromiseCard";
import { promises } from "@/lib/data/promises";

export default function OurPromise(): React.ReactElement {
  return (
    <section className="bg-white px-4 py-12 sm:px-8 lg:px-57 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <div className="mb-4 flex items-center justify-center gap-3">
            <Image
              src="/assets/pages/Why_Choose_Mophire/icons/Icon.svg"
              alt=""
              width={28}
              height={28}
              className="h-7 w-7"
              aria-hidden="true"
            />
            <p className="text-sm font-semibold uppercase tracking-wider text-[#008080] sm:text-base">
              Our Promise
            </p>
          </div>
          <h2 className="text-3xl font-bold text-[#102A43] sm:text-3xl lg:text-4xl">
            Our Promise To You
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-gray-700 sm:text-md">
            When you choose Mophire, you&apos;re choosing quality, reliability,
            and peace of mind. Here&apos;s what we guarantee with every service.
          </p>
        </div>

        {/* Promise Cards Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {promises.map((promise) => (
            <PromiseCard key={promise.id} promise={promise} />
          ))}
        </div>
      </div>
    </section>
  );
}
