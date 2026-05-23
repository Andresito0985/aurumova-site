import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppFloat from "@/components/layout/WhatsAppFloat";
import StickyMobileCTA from "@/components/layout/StickyMobileCTA";
import JsonLd from "@/components/JsonLd";
import AnalyticsScripts from "@/components/analytics/AnalyticsScripts";
import SiteLockScreen from "@/components/SiteLockScreen";
import { siteConfig } from "@/content/site";

const geistSans = Geist({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} | ${siteConfig.tagline}`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "clínica wellness Arecibo",
    "control de peso Arecibo",
    "programa metabólico Arecibo",
    "depilación láser diodo Arecibo",
    "láser diodo Puerto Rico",
    "sueroterapia NAD Puerto Rico",
    "sueroterapia Arecibo",
    "inyectables metabólicos Arecibo",
    "wellness clinic Puerto Rico",
    "control metabólico Puerto Rico",
  ],
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: `${siteConfig.name} | ${siteConfig.tagline}`,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    locale: siteConfig.ogLocale,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | ${siteConfig.tagline}`,
    description: siteConfig.description,
    creator: siteConfig.instagram,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const siteLocked = process.env.NEXT_PUBLIC_SITE_LOCKED === "true";

  return (
    <html lang="es-PR" className={`${geistSans.variable} h-full`}>
      <body className="min-h-full flex flex-col bg-white text-[#1A1A1A]">
        <AnalyticsScripts />
        <JsonLd />
        {siteLocked ? (
          <main className="flex-1">
            <SiteLockScreen />
          </main>
        ) : (
          <>
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
            <WhatsAppFloat />
            <StickyMobileCTA />
          </>
        )}
      </body>
    </html>
  );
}
