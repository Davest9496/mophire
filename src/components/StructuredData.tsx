interface LocalBusinessSchema {
  "@context": "https://schema.org";
  "@type": "LocalBusiness";
  name: string;
  description: string;
  telephone: string;
  address: {
    "@type": "PostalAddress";
    streetAddress: string;
    addressLocality: string;
    addressRegion: string;
    postalCode: string;
  };
}

export function StructuredData() {
  const schema: LocalBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Mophire Cleaning Services",
    description: "Professional cleaning services",
    telephone: "+44-xxx-xxx-xxxx",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Your Street",
      addressLocality: "City",
      addressRegion: "State",
      postalCode: "Post Code",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
