import { existsSync } from "node:fs";
import { siteConfig } from "@/content/site";

interface JsonLdScriptProps {
  data: unknown;
  id?: string;
}

export function JsonLdScript({ data, id }: JsonLdScriptProps) {
  return (
    <script
      id={id}
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}

const brandLogoPath = "/brand/aurum-nova-logo-transparent-4096.png";
const brandLogoUrl = existsSync(`${process.cwd()}/public${brandLogoPath}`)
  ? `${siteConfig.url}${brandLogoPath}`
  : undefined;

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
    ...(brandLogoUrl ? { logo: brandLogoUrl } : {}),
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: `+${siteConfig.callNumber}`,
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
    telephone: `+${siteConfig.callNumber}`,
    email: siteConfig.email,
    ...(brandLogoUrl ? { image: brandLogoUrl } : {}),
    priceRange: "$$",
    currenciesAccepted: "USD",
    paymentAccepted: "Cash, Credit Card",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Ave. Barbosa 65, Arecibo Medical Plaza, Suite 201",
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
    hasMap: siteConfig.mapsUrl,
    areaServed: {
      "@type": "State",
      name: "Puerto Rico",
    },
    medicalSpecialty: "GeneralPractice",
  };

  return (
    <>
      <JsonLdScript id="organization-json-ld" data={organization} />
      <JsonLdScript id="business-json-ld" data={localBusiness} />
    </>
  );
}
