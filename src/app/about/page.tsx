import PageHero from "@/components/sections/PageHero";

export default function AboutPage(): React.ReactElement {
  return (
    <>
      <PageHero
        title="About Us"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "About Us", href: "/about" },
        ]}
      />
      {/* Rest of page content */}
    </>
  );
}
