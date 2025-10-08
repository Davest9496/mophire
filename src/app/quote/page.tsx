import GetQuote from "@/components/sections/GetQoute";
import PageHero from "@/components/sections/PageHero";
import Testimonials from "@/components/sections/Testimonials";

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
      <GetQuote />
      <Testimonials variant="transparent" />
    </>
  );
}
