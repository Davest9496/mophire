import ContactInfo from "@/components/sections/ContactInfo";
import ContactMessage from "@/components/sections/ContactMessage";
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
      <ContactInfo />
      <ContactMessage />
    </>
  );
}
