"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  MapPin,
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
        <div className="flex items-center justify-center bg-white px-6 lg:px-8">
          <Link href="/">
            <Image
              src="/logo/mophire.png"
              alt="Mophire Cleaning Services"
              width={160}
              height={80}
              className="h-10 w-auto"
              priority
            />
          </Link>
        </div>

        {/* Right Side - Two Rows */}
        <div className="flex-1">
          {/* Top Banner - Navy with grid layout */}
          <div className="bg-[#153C78] text-white w-full">
            <div className="max-w-full ">
              <div className="grid grid-cols-3 h-12 text-sm items-stretch">
                {/* Left: Service Text (1/3) */}
                <div className="flex items-center bg-[#008080] justify-start">
                  <span className="px-10">
                    Professional Cleaning Services in London
                  </span>
                </div>
                {/* Right: Location and Email (2/3) */}
                <div className="col-span-2 flex items-center justify-end gap-8 sm:px-6 lg:px-8 pl-4 h-full">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    <span>Greater London Area</span>
                  </div>
                  <div className="hidden sm:flex items-center gap-2 border-l border-white/30 pl-4">
                    <Mail className="w-4 h-4" />
                    <span>Email: info@mophire.com</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Main Navigation - White */}
          <div className="bg-white shadow-md w-full h-16">
            <div className="max-w-full px-4 sm:px-6 lg:px-8 h-full">
              <div className="flex items-center justify-between h-full">
                {/* Desktop Navigation */}
                <nav className="hidden lg:flex items-center gap-8">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="text-[#153C78] hover:text-[#008080] font-medium transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  ))}
                </nav>

                {/* Right Section - Social Icons, Search, CTA */}
                <div className="hidden lg:flex items-center gap-6 ml-auto">
                  {/* Social Icons */}
                  <div className="flex items-center gap-3">
                    <Link
                      href="https://facebook.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#153C78] hover:text-[#008080] transition-colors duration-200"
                      aria-label="Facebook"
                    >
                      <Facebook className="w-5 h-5" />
                    </Link>
                    <Link
                      href="https://twitter.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#153C78] hover:text-[#008080] transition-colors duration-200"
                      aria-label="Twitter"
                    >
                      <Twitter className="w-5 h-5" />
                    </Link>
                    <Link
                      href="https://instagram.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#153C78] hover:text-[#008080] transition-colors duration-200"
                      aria-label="Instagram"
                    >
                      <Instagram className="w-5 h-5" />
                    </Link>
                    <Link
                      href="https://linkedin.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#153C78] hover:text-[#008080] transition-colors duration-200"
                      aria-label="LinkedIn"
                    >
                      <Linkedin className="w-5 h-5" />
                    </Link>
                  </div>

                  {/* Search Icon */}
                  <button
                    className="text-[#153C78] hover:text-[#008080] transition-colors duration-200"
                    aria-label="Search"
                  >
                    <Search className="w-5 h-5" />
                  </button>

                  {/* CTA Button */}
                  <Link
                    href="/quote"
                    className="bg-[#008080] text-white px-6 py-2.5 rounded hover:bg-[#006666] transition-colors duration-200 font-medium flex items-center gap-2"
                  >
                    FREE QUOTE
                    <span className="text-lg">→</span>
                  </Link>
                </div>

                {/* Mobile Menu Button */}
                <button
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  className="lg:hidden text-[#153C78] hover:text-[#008080] transition-colors duration-200 ml-auto"
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
                className="block text-[#153C78] hover:text-[#008080] font-medium py-2 transition-colors duration-200"
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
                className="text-[#153C78] hover:text-[#008080] transition-colors duration-200"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </Link>
              <Link
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#153C78] hover:text-[#008080] transition-colors duration-200"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </Link>
              <Link
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#153C78] hover:text-[#008080] transition-colors duration-200"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </Link>
              <Link
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#153C78] hover:text-[#008080] transition-colors duration-200"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </Link>
            </div>

            {/* Mobile CTA */}
            <Link
              href="/quote"
              className="block bg-[#008080] text-white px-6 py-3 rounded hover:bg-[#006666] transition-colors duration-200 font-medium text-center mt-4"
            >
              FREE QUOTE →
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
