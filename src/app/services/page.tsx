import PageHero from "@/components/sections/PageHero";
import ServicePitch from "@/components/sections/ServicePitch";
import Services from "@/components/sections/Services";

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
      <ServicePitch />
      <Services />
    </>
  );
}
