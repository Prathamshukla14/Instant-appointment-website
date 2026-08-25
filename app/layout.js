import "./globals.css";
import Nav from "@/components/Nav";
import { Footer } from "@/components/Layout";
import { SITE } from "@/lib/content";

export const metadata = {
  metadataBase: new URL(SITE.domain),
  title: {
    default: "InstantAppointment AI: Exclusive Leads & Shown Appointments for Home Services",
    template: "%s | InstantAppointment AI",
  },
  description:
    "InstantAppointment AI delivers exclusive leads and shown appointments for home service companies across 15+ trades. We cover the ad spend, leads are never shared, and you pay only for results. Start with a 3-day trial.",
  keywords: [
    "home service leads",
    "exclusive contractor leads",
    "pay per lead",
    "pay per shown appointment",
    "roofing leads",
    "junk removal leads",
    "hvac appointments",
    "remodeling appointments",
    "home service lead generation",
    "exclusive leads for contractors",
  ],
  openGraph: {
    type: "website",
    url: SITE.domain,
    siteName: SITE.name,
    title: "InstantAppointment AI: Exclusive Leads & Shown Appointments for Home Services",
    description:
      "Exclusive leads and shown appointments for home service companies across 15+ trades. We cover the ad spend, leads are never shared, and you pay only for results.",
    images: [{ url: "/logo/emblem_squircle_1000.png", width: 1000, height: 1000, alt: "InstantAppointment AI" }],
  },
  twitter: {
    card: "summary",
    title: "InstantAppointment AI",
    description: "Exclusive leads and shown appointments for home service companies.",
    images: ["/logo/emblem_squircle_1000.png"],
  },
  icons: { icon: "/logo/emblem_squircle_512.png", apple: "/logo/emblem_squircle_512.png" },
  alternates: { canonical: SITE.domain },
};

const orgSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: SITE.name,
  legalName: SITE.legalName,
  url: SITE.domain,
  logo: `${SITE.domain}/logo/emblem_squircle_1000.png`,
  description:
    "InstantAppointment AI is a lead generation and appointment setting agency for home service companies across 15+ trades, delivering exclusive leads and shown appointments on a pay for results model.",
  // Every real profile URL so Google links the entity together.
  sameAs: [
    "https://www.linkedin.com/company/instantestimate-ai/",
    "https://www.instagram.com/instantappointment_ai/",
    "https://www.trustpilot.com/review/instantappointment-ai.com",
  ],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "Sales",
    telephone: "+1-469-461-1559",
    email: "team@instantappointment-ai.com",
  },
  address: {
    "@type": "PostalAddress",
    streetAddress: "117 S Lexington St Ste 100",
    addressLocality: "Harrisonville",
    addressRegion: "MO",
    postalCode: "64701",
    addressCountry: "US",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
