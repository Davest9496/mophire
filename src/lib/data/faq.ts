// src/lib/data/faq.ts

import type { FAQItem } from "@/lib/types";

export const faqItems: FAQItem[] = [
  {
    id: "quote",
    question: "How quickly can I get a quote?",
    answer:
      "You can receive a quote within 24 hours by filling out our online form or calling us directly. For urgent requests, we offer same-day quotes during business hours.",
  },
  {
    id: "supplies",
    question: "Do you provide all cleaning supplies?",
    answer:
      "Yes, we bring all necessary cleaning supplies and equipment. We use eco-friendly options available upon request.",
  },
  {
    id: "insured",
    question: "Are you insured?",
    answer:
      "Yes, we are fully insured and bonded. All our staff members are covered by comprehensive liability insurance for your peace of mind.",
  },
  {
    id: "areas",
    question: "What areas do you cover?",
    answer:
      "We cover all areas within London and the surrounding regions. Contact us to confirm if we service your specific location.",
  },
  {
    id: "weekends",
    question: "Can I book for weekends?",
    answer:
      "Yes, we offer weekend bookings based on availability. Weekend slots fill up quickly, so we recommend booking in advance.",
  },
  {
    id: "cancellation",
    question: "What's your cancellation policy?",
    answer:
      "We require 24 hours notice for cancellations. Cancellations made with less than 24 hours notice may incur a cancellation fee.",
  },
];
