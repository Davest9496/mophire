import Image from "next/image";
import Link from "next/link";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

interface FooterLink {
  label: string;
  href: string;
}

const quickLinks: FooterLink[] = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Why Choose Us", href: "/why-choose-us" },
  { label: "Our Blog", href: "/blog" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact Us", href: "/contact" },
];

const serviceLinks: FooterLink[] = [
  { label: "End Of Tenancy Cleaning", href: "/services/end-of-tenancy" },
  { label: "Office Cleaning", href: "/services/office-cleaning" },
  { label: "Commercial Cleaning", href: "/services/commercial-cleaning" },
];

const instagramImages: string[] = ["1", "2", "3", "4", "5", "6"];

export default function Footer(): React.ReactElement {
  return (
    <footer className="relative mt-auto">
      {/* Background Image Layer */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/assets/pages/homepage/images/footer_bg.png"
          alt=""
          fill
          className="object-cover"
          priority={false}
          quality={85}
        />
        <div className="absolute inset-0 bg-accent/80" />
      </div>

      {/* Content */}
      <div className="relative text-white">
        <div className="mx-auto max-w-7xl lg:px-27">
          {/* 4 Column Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            {/* Column 1: Mophire Brand + Service Area */}
            <div className="space-y-6 bg-[#153C78] pb-16 text-center sm:text-left">
              {/* Logo with Blue Background */}
              <div className="mb-8 inline-block bg-[#0066D0] px-6 py-4">
                <Image
                  src="/assets/header_footer/images/mophire_white 1.png"
                  alt="Mophire"
                  width={180}
                  height={60}
                  className="h-[40px] w-auto object-contain xl:h-[60px]"
                />
              </div>

              {/* Service Area */}
              <div className="px-10">
                <h3 className="mb-3 text-sm font-medium tracking-wide">
                  Service Area
                </h3>
                <p className="text-sm font-normal">London Area</p>
              </div>

              {/* Email */}
              <div className="px-10">
                <h3 className="mb-3 text-sm font-medium tracking-wide">
                  Email Us
                </h3>
                <a
                  href="mailto:info@mophire.com"
                  className="text-sm font-normal transition-colors hover:text-primary"
                >
                  info@mophire.com
                </a>
              </div>

              {/* Response Time */}
              <div className="px-10">
                <h3 className="mb-3 text-sm font-medium tracking-wide">
                  Response Time
                </h3>
                <p className="text-sm font-normal">Within 24 hours</p>
              </div>

              {/* Social Links */}
              <div className="px-10">
                <h3 className="mb-4 text-sm font-medium tracking-wide">
                  Following
                </h3>
                <div className="flex justify-center gap-4 sm:justify-start">
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-colors hover:text-primary"
                    aria-label="Facebook"
                  >
                    <Facebook className="h-5 w-5" />
                  </a>
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-colors hover:text-primary"
                    aria-label="Twitter"
                  >
                    <Twitter className="h-5 w-5" />
                  </a>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-colors hover:text-primary"
                    aria-label="Instagram"
                  >
                    <Instagram className="h-5 w-5" />
                  </a>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-colors hover:text-primary"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>

            {/* Column 2: Quick Links */}
            <div className="px-6 py-16 text-center sm:text-left">
              <h3 className="mb-6 text-lg font-semibold">Quick Links</h3>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="inline-block text-sm transition-colors hover:text-primary"
                    >
                      &gt; {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Our Services */}
            <div className="px-6 py-16 text-center sm:text-left">
              <h3 className="mb-6 text-lg font-semibold">Our Services</h3>
              <ul className="space-y-3">
                {serviceLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="inline-block text-sm  transition-colors hover:text-primary"
                    >
                      &gt; {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 4: Instagram - Full width on mobile */}
            <div className="col-span-1 px-6 py-16 text-center sm:col-span-2 sm:text-left lg:col-span-1">
              <h3 className="mb-6 text-lg font-semibold">Instagram</h3>
              <div className="grid grid-cols-3 gap-3">
                {instagramImages.map((img) => (
                  <a
                    key={img}
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative aspect-square overflow-hidden"
                  >
                    <Image
                      src={`/assets/header_footer/images/${img}.png`}
                      alt={`Instagram post ${img}`}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-110"
                      sizes="(max-width: 640px) 33vw, (max-width: 1024px) 16vw, 100px"
                    />
                    {/* Instagram overlay on hover */}
                    <div className="absolute inset-0 flex items-center justify-center bg-primary/0 transition-all duration-300 group-hover:bg-primary/70">
                      <Instagram className="h-6 w-6 translate-y-2 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100" />
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
