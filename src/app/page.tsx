import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import Services from "@/components/sections/Services";
import Testimonials from "@/components/sections/Testimonials";

export const metadata: Metadata = {
  title: "Mophire - Professional Cleaning Services in London",
  description:
    "Trusted professional cleaning services for homes and businesses across Greater London. Eco-friendly solutions, experienced cleaners, satisfaction guaranteed.",
};

export default function Home() {
  return (
    <>
      <Hero />
      <WhyChooseUs />
      <Services />
      <Testimonials />
      {/* Additional sections will go here */}
    </>
  );
}
