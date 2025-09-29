import type { Metadata } from "next";
import "./globals.css";
import { beVietnam, roboto } from "./fonts";
import Header from "@/components/layout/Header";

export const metadata: Metadata = {
  metadataBase: new URL("https://mophire.com"),
  title: {
    default: "Mophire - Professional Cleaning Services",
    template: "%s | Mophire Cleaning",
  },
  description: "Professional residential and commercial cleaning services.",
  keywords: ["cleaning services", "house cleaning", "commercial cleaning"],
  authors: [{ name: "Mophire" }],
  openGraph: {
    type: "website",
    locale: "en_GB",
    siteName: "Mophire Cleaning Services",
  },
  twitter: {
    card: "summary_large_image",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>): React.ReactElement {
  return (
    <html lang="en-GB" className={`${beVietnam.variable} ${roboto.variable}`}>
      <body className="font-body antialiased">
        <Header />
        <main className="pt-32">{children}</main>
      </body>
    </html>
  );
}
