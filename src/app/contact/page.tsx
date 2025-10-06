import PageHero from "@/components/sections/PageHero";

export default function ContactPage(): React.ReactElement {
  return (
    <>
      <PageHero
        title="Contact Us"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Contact", href: "/contact" },
        ]}
      />
      {/* Rest of page content */}
    </>
  );
}
