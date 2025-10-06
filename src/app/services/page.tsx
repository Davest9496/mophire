import PageHero from "@/components/sections/PageHero";

export default function ServicesPage(): React.ReactElement {
  return (
    <>
      <PageHero
        title="Services"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
        ]}
      />
      {/* Rest of page content */}
    </>
  );
}
