import Link from "next/link";
import PageHero from "@/components/sections/PageHero";

export default function ServiceNotFound(): React.ReactElement {
  return (
    <>
      <PageHero
        title="Service Not Found"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: "Not Found", href: "/services/not-found" },
        ]}
      />

      <section className="container mx-auto px-4 py-16 text-center">
        <h2 className="mb-4 text-3xl font-bold text-accent">
          Service Not Found
        </h2>
        <p className="mb-8 text-gray-700">
          The service you&apos;re looking for doesn&apos;t exist or has been
          moved.
        </p>
        <Link
          href="/services"
          className="inline-block bg-primary px-8 py-4 font-semibold text-white transition-colors hover:bg-secondary"
        >
          View All Services
        </Link>
      </section>
    </>
  );
}
