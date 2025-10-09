"use client";

import Image from "next/image";
import { useState } from "react";

import type { FAQAccordionProps } from "@/lib/types";

export default function FAQAccordion({
  items,
}: FAQAccordionProps): React.ReactElement {
  const [activeId, setActiveId] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  const toggleAccordion = (id: string): void => {
    setActiveId((current) => (current === id ? null : id));
  };

  // Filter FAQ items based on search query
  const filteredItems = items.filter(
    (item) =>
      item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  return (
    <section className="mx-auto w-full max-w-4xl px-4 py-12 sm:px-6 lg:px-28 lg:py-16">
      {/* Header */}
      <div className="mb-8 text-center lg:mb-12">
        <div className="mb-4 flex items-center justify-center gap-3">
          <Image
            src="/assets/pages/FAQ/icons/help.svg"
            alt=""
            width={32}
            height={32}
          />
          <h2 className="text-lg font-medium uppercase tracking-wider text-[#008080] sm:text-xl">
            Quick Help
          </h2>
        </div>
        <h1 className="text-3xl font-bold text-[#153c78] sm:text-4xl lg:text-5xl">
          Frequently Asked Questions
        </h1>
      </div>

      {/* Search Bar */}
      <div className="mb-8 lg:mb-12">
        <div className="relative">
          <input
            type="text"
            placeholder="Search Keyword"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full border border-gray-300 py-3 pl-4 pr-12 text-sm text-gray-700 placeholder-gray-400 focus:border-[#4682B4] focus:outline-none focus:ring-2 focus:ring-[#4682B4]/20"
          />
          <button
            type="button"
            className="absolute right-0 top-0 flex h-full items-center justify-center bg-[#4682B4] px-4 transition-colors hover:bg-[#3a6d99]"
            aria-label="Search"
          >
            <Image
              src="/assets/pages/FAQ/icons/search.svg"
              alt=""
              width={20}
              height={20}
            />
          </button>
        </div>
      </div>

      {/* Accordion */}
      <div className="space-y-4">
        {filteredItems.length === 0 ? (
          <p className="py-8 text-center text-gray-500">
            No questions found matching your search.
          </p>
        ) : (
          filteredItems.map((item) => {
            const isActive = activeId === item.id;

            return (
              <div
                key={item.id}
                className={`overflow-hidden border transition-all ${
                  isActive
                    ? "border-[#008080] bg-[#008080]/5"
                    : "border-gray-200 bg-white"
                }`}
              >
                <button
                  onClick={() => toggleAccordion(item.id)}
                  className="flex w-full items-center justify-between gap-4 px-4 py-4 text-left transition-colors sm:px-6 sm:py-5"
                  aria-expanded={isActive}
                >
                  <span
                    className={`text-sm font-medium sm:text-base ${
                      isActive ? "text-[#008080]" : "text-[#102A43]"
                    }`}
                  >
                    {item.question}
                  </span>
                  <Image
                    src={
                      isActive
                        ? "/assets/pages/FAQ/icons/up-arrow.svg"
                        : "/assets/pages/FAQ/icons/down-arrow.svg"
                    }
                    alt={isActive ? "Collapse" : "Expand"}
                    width={20}
                    height={20}
                    className="flex-shrink-0"
                  />
                </button>

                {/* Answer - Animated */}
                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    isActive ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="border-t border-gray-200 px-4 pb-4 pt-3 sm:px-6 sm:pb-5 sm:pt-4">
                      <p className="text-sm leading-relaxed text-gray-600 sm:text-base">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })
        )}
      </div>
    </section>
  );
}
