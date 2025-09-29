import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";

export const metadata: Metadata = {
  title: "Mophire - Professional Cleaning Services in London",
  description:
    "Trusted professional cleaning services for homes and businesses across Greater London. Eco-friendly solutions, experienced cleaners, satisfaction guaranteed.",
};

export default function Home() {
  return (
    <>
      <Hero />
      {/* Additional sections will go here */}
    </>
  );
}
