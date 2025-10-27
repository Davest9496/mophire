"use client";

import Image from "next/image";
import { useState } from "react";

import type { ContactMessageForm } from "@/lib/types";

export default function ContactMessage(): React.ReactElement {
  const [formData, setFormData] = useState<ContactMessageForm>({
    fullName: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
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
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = (await response.json()) as { error?: string };

      if (!response.ok) {
        throw new Error(data.error ?? "Failed to send message");
      }

      setSubmitStatus("success");

      // Reset form on success
      setFormData({
        fullName: "",
        email: "",
        message: "",
      });

      // Auto-hide success message after 5 seconds
      setTimeout(() => {
        setSubmitStatus("idle");
      }, 5000);
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
                Send Message
              </p>
            </div>
            <h2 className="font-display text-3xl font-bold text-[#153C78] sm:text-4xl">
              Have Any Specific Query?
            </h2>
            <p className="mt-2 text-sm text-gray-600">Just Send A Message</p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name and Email Row - Side by side on large screens */}
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
                placeholder="Write Your Comments"
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
                {isSubmitting ? "Sending..." : "Send Message"}
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
              <div className="rounded-md bg-green-50 p-4 text-center text-green-800">
                <p className="font-semibold">Message sent successfully!</p>
                <p className="mt-1 text-sm">
                  We&apos;ve sent you a confirmation email and will get back to
                  you within 24 hours.
                </p>
              </div>
            )}
            {submitStatus === "error" && (
              <div className="rounded-md bg-red-50 p-4 text-center text-red-800">
                <p className="font-semibold">Failed to send message</p>
                <p className="mt-1 text-sm">
                  Please try again or contact us directly at info@mophire.com
                </p>
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
