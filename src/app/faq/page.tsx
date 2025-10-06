import PageHero from "@/components/sections/PageHero";

export default function FreeQuotePage(): React.ReactElement {
  return (
    <>
      <PageHero
        title="Frequently Asked Questions"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Frequently Asked Questions", href: "/faq" },
        ]}
      />
      {/* Rest of page content */}
    </>
  );
}
