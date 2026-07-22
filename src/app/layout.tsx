import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { CustomCursor } from "@/components/ui/CustomCursor";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppFloat } from "@/components/ui/WhatsAppFloat";
import { site, mapsLink } from "@/lib/site";
import { rateCard } from "@/lib/pricing";
import { faqs } from "@/lib/faq";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const title = "Silver Carz | Premium Car Detailing & Car Wash in Nagpur";
const description =
  "Nagpur's premium car detailing studio — car wash from ₹200, interior deep cleaning, ceramic coating, PPF-safe wash, denting & painting. Rajendra Nagar, Takli Seem. Book on WhatsApp or call +91 90284 68412.";

export const metadata: Metadata = {
  metadataBase: new URL(site.domain),
  title: {
    default: title,
    template: "%s | Silver Carz Nagpur",
  },
  description,
  keywords: [
    "car detailing Nagpur",
    "car wash Nagpur",
    "premium car wash Nagpur",
    "ceramic coating Nagpur",
    "car spa Nagpur",
    "interior car cleaning Nagpur",
    "car polishing Nagpur",
    "PPF wash Nagpur",
    "car detailing Rajendra Nagar",
    "car wash Takli Seem",
    "car wash Wardha Road Nagpur",
    "car denting painting Nagpur",
    "engine bay cleaning Nagpur",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: site.domain,
    siteName: site.name,
    locale: "en_IN",
    title,
    description,
    images: [
      {
        url: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=1200&h=630&q=80",
        width: 1200,
        height: 630,
        alt: "Silver Carz premium car detailing studio in Nagpur",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

// schema.org LocalBusiness — this is what powers the Google Maps / local pack
// result. Type AutoWash + AutoRepair covers washing, detailing, and repairs.
const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": ["AutoWash", "AutoRepair"],
  "@id": `${site.domain}/#business`,
  name: site.name,
  description,
  url: site.domain,
  telephone: site.phone,
  priceRange: "₹200 - ₹18,000",
  currenciesAccepted: "INR",
  image: `${site.domain}/rate-card.png`,
  address: {
    "@type": "PostalAddress",
    streetAddress: site.address.street,
    addressLocality: site.address.city,
    addressRegion: site.address.state,
    postalCode: site.address.postalCode,
    addressCountry: site.address.country,
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: site.geo.latitude,
    longitude: site.geo.longitude,
  },
  hasMap: mapsLink,
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: [...site.hours.days],
    opens: site.hours.opens,
    closes: site.hours.closes,
  },
  areaServed: site.serviceAreas.map((area) => ({
    "@type": "Place",
    name: `${area}, Nagpur, Maharashtra`,
  })),
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Car wash & detailing rate card",
    itemListElement: rateCard.map((row) => ({
      "@type": "Offer",
      itemOffered: { "@type": "Service", name: row.service },
      priceSpecification: {
        "@type": "PriceSpecification",
        priceCurrency: "INR",
        minPrice: row.range[0],
        maxPrice: row.range[1],
      },
    })),
  },
};

// FAQPage schema — enables FAQ rich results under the Google listing.
const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full`}>
      <body className="min-h-full flex flex-col font-sans antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessJsonLd),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
        <CustomCursor />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppFloat />
        <Analytics />
      </body>
    </html>
  );
}
