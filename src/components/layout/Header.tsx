"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Mail,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Search,
  Menu,
  X,
  ArrowRight,
} from "lucide-react";

interface NavLink {
  label: string;
  href: string;
}

export default function Header(): React.ReactElement {
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const pathname = usePathname();

  const navLinks: NavLink[] = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "About Us", href: "/about" },
    { label: "Why Choose Us", href: "/why-choose-us" },
    { label: "FAQ", href: "/faq" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <header className="fixed left-0 right-0 top-0 z-50 w-full">
      <div className="flex w-full">
        {/* Logo Section - Spans Both Rows */}
        <div className="hidden items-center justify-center bg-white px-4 lg:flex lg:px-4">
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
        <div className="w-full flex-1">
          {/* Top Banner - Navy with Teal Slanted Section */}
          <div className="relative h-12 w-full bg-[#153C78] text-white">
            {/* Teal Section with Clip Path */}
            <div
              className="absolute left-0 top-0 flex h-full items-center bg-[#008080] px-4 sm:px-6 lg:px-10"
              style={{
                clipPath:
                  "polygon(0 0, calc(100% - 1rem) 0, 100% 100%, 0 100%)",
                width: "auto",
                paddingRight: "3rem",
              }}
            >
              <span className="relative z-10 whitespace-nowrap text-xs sm:text-sm">
                Professional Cleaning Services in London
              </span>
            </div>

            {/* Navy Section - Location and Email */}
            <div className="absolute right-0 top-0 flex h-full items-center justify-end gap-4 px-4 sm:gap-6 sm:px-6 lg:gap-8 lg:px-8">
              <div className="flex items-center gap-2">
                <Image
                  src="/assets/header_footer/icons/location.png"
                  alt="Location"
                  width={16}
                  height={20}
                  className="h-5 w-3 flex-shrink-0 sm:h-5 sm:w-4"
                />
                <span className="whitespace-nowrap text-xs sm:text-sm">
                  London - UK 🇬🇧
                </span>
              </div>
              <Link
                href="mailto:info@mophire.com"
                className="hidden items-center gap-2 border-l pl-8 hover:underline md:flex"
              >
                <Image
                  src="/assets/header_footer/icons/mail.png"
                  alt="Mail"
                  width={20}
                  height={16}
                  className="h-4 w-5 flex-shrink-0 sm:h-4 sm:w-5"
                />
                <span className="whitespace-nowrap text-xs sm:text-sm">
                  Email: info@mophire.com
                </span>
              </Link>
            </div>
          </div>

          {/* Main Navigation - White */}
          <div className="h-16 w-full bg-gray-50 shadow-md lg:h-20">
            <div className="h-full max-w-full px-4 sm:px-6 lg:px-8">
              <div className="flex h-full items-center justify-between gap-4">
                {/* Mobile Logo */}
                <div className="flex-shrink-0 lg:hidden">
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
                <nav className="hidden items-center gap-6 lg:flex xl:gap-8">
                  {navLinks.map((link) => {
                    const isActive = pathname === link.href;
                    return (
                      <Link
                        key={link.href}
                        href={link.href}
                        className={`whitespace-nowrap border-b-2 pb-1 font-medium transition-colors duration-200 text-sm xl:text-base ${
                          isActive
                            ? "border-[#008080] text-[#008080]"
                            : "border-transparent text-[#153C78] hover:text-[#008080]"
                        }`}
                      >
                        {link.label}
                      </Link>
                    );
                  })}
                </nav>

                {/* Right Section - Social Icons, Search, CTA */}
                <div className="ml-auto hidden items-center gap-4 lg:flex xl:gap-6">
                  {/* Social Icons */}
                  <div className="flex items-center gap-2 border-r-2 border-gray-400 pr-4 xl:gap-3">
                    <Link
                      href="https://facebook.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-full border-2 bg-white p-2 text-gray-400 transition-colors duration-200 hover:text-gray-500"
                      aria-label="Facebook"
                    >
                      <Facebook className="h-2 w-2 xl:h-3 xl:w-3" />
                    </Link>
                    <Link
                      href="https://twitter.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-full border-2 bg-white p-2 text-gray-400 transition-colors duration-200 hover:text-gray-500"
                      aria-label="Twitter"
                    >
                      <Twitter className="h-2 w-2 xl:h-3 xl:w-3" />
                    </Link>
                    <Link
                      href="https://instagram.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-full border-2 bg-white p-2 text-gray-400 transition-colors duration-200 hover:text-gray-500"
                      aria-label="Instagram"
                    >
                      <Instagram className="h-2 w-2 xl:h-3 xl:w-3" />
                    </Link>
                    <Link
                      href="https://linkedin.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-full border-2 bg-white p-2 text-gray-400 transition-colors duration-200 hover:text-gray-500"
                      aria-label="LinkedIn"
                    >
                      <Linkedin className="h-2 w-2 xl:h-3 xl:w-3" />
                    </Link>
                  </div>

                  {/* Search Icon */}
                  <button
                    className="text-gray-400 transition-colors duration-200 hover:text-gray-500"
                    aria-label="Search"
                  >
                    <Search className="h-4 w-4 xl:h-5 xl:w-5" />
                  </button>

                  {/* CTA Button */}
                  <Link
                    href="/quote"
                    className="flex items-center gap-2 bg-[#008080] px-4 py-2 font-medium text-white transition-colors duration-200 hover:bg-[#006666] xl:px-6 xl:py-2.5 text-sm xl:text-base whitespace-nowrap"
                  >
                    FREE QUOTE
                    <ArrowRight className="h-5 w-5" />
                  </Link>
                </div>

                {/* Mobile Menu Button */}
                <button
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  className="ml-auto text-gray-400 transition-colors duration-200 hover:text-gray-500 lg:hidden"
                  aria-label="Toggle menu"
                  aria-expanded={mobileMenuOpen}
                >
                  {mobileMenuOpen ? (
                    <X className="h-6 w-6" />
                  ) : (
                    <Menu className="h-6 w-6" />
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="w-full border-t border-gray-200 bg-white shadow-lg lg:hidden">
          <nav className="space-y-3 px-4 py-4">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`block py-2 font-medium transition-colors duration-200 ${
                    isActive
                      ? "text-[#008080]"
                      : "text-gray-400 hover:text-gray-500"
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              );
            })}

            {/* Mobile Social Icons */}
            <div className="flex items-center gap-4 border-t border-gray-200 pt-4">
              <Link
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 transition-colors duration-200 hover:text-gray-500"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </Link>
              <Link
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 transition-colors duration-200 hover:text-gray-500"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </Link>
              <Link
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 transition-colors duration-200 hover:text-gray-500"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </Link>
              <Link
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 transition-colors duration-200 hover:text-gray-500"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </Link>
            </div>

            {/* Mobile Email (visible on mobile only) */}
            <div className="flex items-center gap-2 border-t border-gray-200 pt-4 md:hidden">
              <Mail className="h-4 w-4 text-[#153C78]" />
              <Link
                href="mailto:info@mophire.com"
                className="text-sm text-[#153C78] hover:text-[#008080]"
              >
                info@mophire.com
              </Link>
            </div>

            {/* Mobile CTA */}
            <Link
              href="/quote"
              className="mt-4 block bg-[#008080] px-6 py-3 text-center font-medium text-white transition-colors duration-200 hover:bg-[#006666]"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="mr-2 inline-block align-middle">FREE QUOTE</span>
              <span className="inline-block align-middle">
                <ArrowRight className="h-5 w-5" />
              </span>
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
