import PageHero from "@/components/sections/PageHero";

export default function FreeQuotePage(): React.ReactElement {
  return (
    <>
      <PageHero
        title="Request A Quote"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Request A Quote", href: "/quote" },
        ]}
      />
      {/* Rest of page content */}
    </>
  );
}
