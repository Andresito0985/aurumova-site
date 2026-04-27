import type { Metadata } from "next";

const BASE_URL = "https://aurumnovawellnessclinic.com";
const SITE_NAME = "Aurum Nova Wellness Clinic";

interface BuildMetadataOptions {
  title: string;
  description: string;
  path: string;
  /** Additional keywords beyond the defaults */
  keywords?: string[];
  /** noindex for legal/privacy/utility pages */
  noIndex?: boolean;
}

/**
 * Generates a complete Next.js Metadata object with canonical URL,
 * Open Graph tags, and Twitter card tags for a given page.
 */
export function buildMetadata({
  title,
  description,
  path,
  keywords = [],
  noIndex = false,
}: BuildMetadataOptions): Metadata {
  const url = `${BASE_URL}${path}`;

  return {
    title,
    description,
    keywords: [
      "clínica wellness Arecibo",
      "wellness clinic Puerto Rico",
      "medicina metabólica Puerto Rico",
      ...keywords,
    ],
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: SITE_NAME,
      locale: "es_PR",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
    ...(noIndex && {
      robots: { index: false, follow: false },
    }),
  };
}

/** Canonical URL helper (use in JSON-LD or href attributes) */
export function canonicalUrl(path: string) {
  return `${BASE_URL}${path}`;
}
