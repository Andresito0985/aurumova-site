import { siteConfig } from "@/content/site";

/**
 * Structured data (JSON-LD) for Aurum Nova Wellness Clinic.
 * Injected in the root layout so it appears on every page.
 *
 * Schemas included:
 *  - Organization
 *  - LocalBusiness / MedicalBusiness (non-overclaiming: wellness center)
 */
export default function JsonLd() {
  const organization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${siteConfig.url}/#organization`,
    name: siteConfig.name,
    url: siteConfig.url,
    logo: `${siteConfig.url}/brand/logo.png`,
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: `+1-${siteConfig.phone}`,
        contactType: "customer service",
        areaServed: "PR",
        availableLanguage: ["Spanish", "English"],
      },
    ],
    sameAs: [siteConfig.instagramUrl],
  };

  const localBusiness = {
    "@context": "https://schema.org",
    "@type": ["HealthAndBeautyBusiness", "MedicalBusiness"],
    "@id": `${siteConfig.url}/#business`,
    name: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    telephone: `+1-${siteConfig.phone}`,
    email: siteConfig.email,
    image: `${siteConfig.url}/brand/logo.png`,
    priceRange: "$$",
    currenciesAccepted: "USD",
    paymentAccepted: "Cash, Credit Card",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Arecibo Medical Plaza, Suite 201",
      addressLocality: "Arecibo",
      addressRegion: "PR",
      postalCode: "00612",
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      // Approximate — update with exact coordinates when available
      latitude: 18.4722,
      longitude: -66.7215,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:00",
        closes: "17:00",
      },
    ],
    sameAs: [siteConfig.instagramUrl],
    hasMap: `https://maps.google.com/?q=Arecibo+Medical+Plaza+Suite+201+Arecibo+PR`,
    areaServed: {
      "@type": "State",
      name: "Puerto Rico",
    },
    medicalSpecialty: "GeneralPractice",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }}
      />
    </>
  );
}
