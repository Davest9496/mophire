"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Mail,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Search,
  Menu,
  X,
} from "lucide-react";

interface NavLink {
  label: string;
  href: string;
}

export default function Header(): React.ReactElement {
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  const navLinks: NavLink[] = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "About Us", href: "/about" },
    { label: "Why Choose Us", href: "/why-choose-us" },
    { label: "FAQ", href: "/faq" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full">
      <div className="flex w-full">
        {/* Logo Section - Spans Both Rows */}
        <div className="hidden lg:flex items-center justify-center bg-white px-4 lg:px-4">
          <Link href="/">
            <Image
              src="/logo/mophire.png"
              alt="Mophire Cleaning Services"
              width={160}
              height={80}
              className="h-12 w-auto xl:h-16"
              priority
            />
          </Link>
        </div>

        {/* Right Side - Two Rows */}
        <div className="flex-1 w-full">
          {/* Top Banner - Navy with Teal Slanted Section */}
          <div className="relative bg-[#153C78] text-white w-full h-12">
            {/* Teal Section with Clip Path */}
            <div
              className="absolute left-0 top-0 h-full bg-[#008080] flex items-center px-4 sm:px-6 lg:px-10"
              style={{
                clipPath:
                  "polygon(0 0, calc(100% - 1rem) 0, 100% 100%, 0 100%)",
                width: "auto",
                paddingRight: "3rem",
              }}
            >
              <span className="text-xs sm:text-sm whitespace-nowrap relative z-10">
                Professional Cleaning Services in London
              </span>
            </div>

            {/* Navy Section - Location and Email */}
            <div className="absolute right-0 top-0 h-full flex items-center justify-end gap-4 sm:gap-6 lg:gap-8 px-4 sm:px-6 lg:px-8">
              <div className="flex items-center gap-2">
                <Image
                  src="/assets/header_footer/icons/location.png"
                  alt="Location"
                  width={16}
                  height={20}
                  className="w-3 h-5 sm:w-4 sm:h-5 flex-shrink-0"
                />
                <span className="text-xs sm:text-sm whitespace-nowrap border-r pr-8">
                  London - UK 🇬🇧
                </span>
              </div>
              <a
                href="mailto:info@mophire.com"
                className="flex items-center gap-2 hover:underline"
              >
                <Image
                  src="/assets/header_footer/icons/mail.png"
                  alt="Mail"
                  width={20}
                  height={16}
                  className="w-5 h-4 sm:w-5 sm:h-4 flex-shrink-0"
                />
                <span className="text-xs sm:text-sm whitespace-nowrap">
                  Email: info@mophire.com
                </span>
              </a>
            </div>
          </div>

          {/* Main Navigation - White */}
          <div className="bg-gray-50 shadow-md w-full h-16 lg:h-20">
            <div className="max-w-full px-4 sm:px-6 lg:px-8 h-full">
              <div className="flex items-center justify-between h-full gap-4">
                {/* Mobile Logo */}
                <div className="lg:hidden flex-shrink-0">
                  <Link href="/">
                    <Image
                      src="/logo/mophire.png"
                      alt="Mophire Cleaning Services"
                      width={100}
                      height={40}
                      className="h-10 w-auto"
                      priority
                    />
                  </Link>
                </div>

                {/* Desktop Navigation */}
                <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="text-[#153C78] hover:text-[#008080] font-medium transition-colors duration-200 text-sm xl:text-base whitespace-nowrap"
                    >
                      {link.label}
                    </Link>
                  ))}
                </nav>

                {/* Right Section - Social Icons, Search, CTA */}
                <div className="hidden lg:flex items-center gap-4 xl:gap-6 ml-auto">
                  {/* Social Icons */}
                  <div className="flex items-center gap-2 xl:gap-3 border-r-2 border-gray-400 pr-4">
                    <Link
                      href="https://facebook.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-gray-500 border-2 rounded-full p-2 bg-white transition-colors duration-200"
                      aria-label="Facebook"
                    >
                      <Facebook className="w-2 h-2 xl:w-3 xl:h-3" />
                    </Link>
                    <Link
                      href="https://twitter.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-gray-500 border-2 rounded-full p-2 bg-white transition-colors duration-200"
                      aria-label="Twitter"
                    >
                      <Twitter className="w-2 h-2 xl:w-3 xl:h-3" />
                    </Link>
                    <Link
                      href="https://instagram.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-gray-500 border-2 rounded-full p-2 bg-white transition-colors duration-200"
                      aria-label="Instagram"
                    >
                      <Instagram className="w-2 h-2 xl:w-3 xl:h-3" />
                    </Link>
                    <Link
                      href="https://linkedin.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-gray-500  border-2 rounded-full p-2 bg-white transition-colors duration-200"
                      aria-label="LinkedIn"
                    >
                      <Linkedin className="w-2 h-2 xl:w-3 xl:h-3" />
                    </Link>
                  </div>

                  {/* Search Icon */}
                  <button
                    className="text-gray-400 hover:text-gray-500 transition-colors duration-200"
                    aria-label="Search"
                  >
                    <Search className="w-4 h-4 xl:w-5 xl:h-5" />
                  </button>

                  {/* CTA Button */}
                  <Link
                    href="/quote"
                    className="bg-[#008080] text-white px-4 xl:px-6 py-2 xl:py-2.5 hover:bg-[#006666] transition-colors duration-200 font-medium flex items-center gap-2 text-sm xl:text-base whitespace-nowrap"
                  >
                    FREE QUOTE
                    <span className="text-base xl:text-lg">→</span>
                  </Link>
                </div>

                {/* Mobile Menu Button */}
                <button
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  className="lg:hidden text-gray-400 hover:text-gray-500 transition-colors duration-200 ml-auto"
                  aria-label="Toggle menu"
                  aria-expanded={mobileMenuOpen}
                >
                  {mobileMenuOpen ? (
                    <X className="w-6 h-6" />
                  ) : (
                    <Menu className="w-6 h-6" />
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200 shadow-lg w-full">
          <nav className="px-4 py-4 space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block text-gray-400 hover:text-gray-500 font-medium py-2 transition-colors duration-200"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}

            {/* Mobile Social Icons */}
            <div className="flex items-center gap-4 pt-4 border-t border-gray-200">
              <Link
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-gray-400 hover:text-gray-500 transition-colors duration-200"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </Link>
              <Link
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-gray-500 transition-colors duration-200"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </Link>
              <Link
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-gray-500 transition-colors duration-200"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </Link>
              <Link
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-gray-500 transition-colors duration-200"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </Link>
            </div>

            {/* Mobile Email (visible on mobile only) */}
            <div className="md:hidden flex items-center gap-2 pt-4 border-t border-gray-200">
              <Mail className="w-4 h-4 text-[#153C78]" />
              <a
                href="mailto:info@mophire.com"
                className="text-[#153C78] hover:text-[#008080] text-sm"
              >
                info@mophire.com
              </a>
            </div>

            {/* Mobile CTA */}
            <Link
              href="/quote"
              className="block bg-[#008080] text-white px-6 py-3 hover:bg-[#006666] transition-colors duration-200 font-medium text-center mt-4"
            >
              FREE QUOTE →
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
