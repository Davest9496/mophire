"use client";

import Image from "next/image";
import { useState } from "react";

import type { QuoteForm } from "@/lib/types";

const serviceOptions = [
  { value: "", label: "Select a Cleaning Service" },
  { value: "end-of-tenancy", label: "End of Tenancy Cleaning" },
  { value: "housekeeping", label: "Housekeeping" },
  { value: "office-commercial", label: "Office/Commercial Cleaning" },
];

export default function GetQuote(): React.ReactElement {
  const [formData, setFormData] = useState<QuoteForm>({
    fullName: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ): void => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>,
  ): Promise<void> => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      // TODO: Replace with actual API call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      console.log("Quote form submitted:", formData);
      setSubmitStatus("success");

      // Reset form on success
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        service: "",
        message: "",
      });
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="w-full bg-gray-50 py-16 lg:py-20">
      <div className="container mx-auto px-4 lg:px-28">
        <div className="mx-auto max-w-2xl">
          {/* Header */}
          <div className="mb-8 text-center lg:mb-12">
            <div className="mb-4 flex items-center justify-center gap-2">
              <Image
                src="/assets/pages/contact/icons/email-send.svg"
                alt=""
                width={24}
                height={24}
                className="h-6 w-6"
              />
              <p className="text-sm font-medium uppercase tracking-wider text-[#008080]">
                Get A Quote
              </p>
            </div>
            <h2 className="font-display text-3xl font-bold text-[#153C78] sm:text-4xl">
              Get Your Free Cleaning Quote
            </h2>
            <p className="mt-2 text-sm text-gray-600">
              Tell us what you need, and we&apos;ll send you a personalised
              quote within 24 hours
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name and Email Row */}
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
              {/* Full Name Input */}
              <div className="relative">
                <div className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2">
                  <Image
                    src="/assets/pages/contact/icons/profile.svg"
                    alt=""
                    width={20}
                    height={20}
                    className="h-5 w-5 text-gray-400"
                  />
                </div>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Full name"
                  required
                  className="w-full border border-gray-300 bg-white py-4 pl-12 pr-4 text-gray-900 placeholder-gray-500 transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                />
              </div>

              {/* Email Input */}
              <div className="relative">
                <div className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2">
                  <Image
                    src="/assets/pages/contact/icons/open-mail.svg"
                    alt=""
                    width={20}
                    height={20}
                    className="h-5 w-5 text-gray-400"
                  />
                </div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your email"
                  required
                  className="w-full border border-gray-300 bg-white py-4 pl-12 pr-4 text-gray-900 placeholder-gray-500 transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                />
              </div>
            </div>

            {/* Phone and Service Row */}
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
              {/* Phone Input */}
              <div className="relative">
                <div className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2">
                  <Image
                    src="/assets/pages/contact/icons/phone.svg"
                    alt=""
                    width={20}
                    height={20}
                    className="h-5 w-5 text-gray-400"
                  />
                </div>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Phone Number"
                  required
                  className="w-full border border-gray-300 bg-white py-4 pl-12 pr-4 text-gray-900 placeholder-gray-500 transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                />
              </div>

              {/* Service Select */}
              <div className="relative">
                <div className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2">
                  <Image
                    src="/assets/pages/contact/icons/down-arrow.svg"
                    alt=""
                    width={16}
                    height={16}
                    className="h-4 w-4 text-gray-400"
                  />
                </div>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                  className="w-full appearance-none border border-gray-300 bg-white py-4 pl-4 pr-12 text-gray-900 transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                >
                  {serviceOptions.map((option) => (
                    <option
                      key={option.value}
                      value={option.value}
                      disabled={option.value === ""}
                    >
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Message Textarea */}
            <div className="relative">
              <div className="pointer-events-none absolute left-4 top-4">
                <Image
                  src="/assets/pages/contact/icons/message.svg"
                  alt=""
                  width={20}
                  height={20}
                  className="h-5 w-5 text-gray-400"
                />
              </div>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us about your cleaning requirements. For larger service, include property size, number of rooms, preferred date, and any special needs."
                required
                rows={6}
                className="w-full resize-none border border-gray-300 bg-white py-4 pl-12 pr-4 text-gray-900 placeholder-gray-500 transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
              />
            </div>

            {/* Submit Button */}
            <div className="flex justify-center pt-4">
              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex items-center gap-2 bg-[#008080] px-8 py-4 font-semibold uppercase text-white transition-all hover:bg-[#008080]/90 focus:outline-none focus:ring-4 focus:ring-[#008080]/20 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {isSubmitting ? "Submitting..." : "Get My Free Quote"}
                {!isSubmitting && (
                  <Image
                    src="/assets/pages/contact/icons/right-arrow.svg"
                    alt=""
                    width={20}
                    height={20}
                    className="h-5 w-5"
                  />
                )}
              </button>
            </div>

            {/* Status Messages */}
            {submitStatus === "success" && (
              <div className="bg-green-50 p-4 text-center text-green-800">
                Quote request received! We&apos;ll send you a personalised quote
                within 24 hours.
              </div>
            )}
            {submitStatus === "error" && (
              <div className="bg-red-50 p-4 text-center text-red-800">
                Failed to submit request. Please try again.
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
