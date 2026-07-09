import "./globals.css";
import Nav from "@/components/Nav";
import { Footer } from "@/components/Layout";
import { SITE } from "@/lib/content";

export const metadata = {
  metadataBase: new URL(SITE.domain),
  title: {
    default: "InstantAppointment AI: Pay Per Appointment Marketing for Remodeling Contractors",
    template: "%s | InstantAppointment AI",
  },
  description:
    "InstantAppointment AI books qualified, shown remodeling consultations on a pay per appointment model. We cover the ad spend, run exclusive territories, and you pay only when a homeowner shows.",
  keywords: [
    "remodeling contractor marketing",
    "pay per appointment",
    "remodeling leads",
    "kitchen remodel leads",
    "bathroom remodel leads",
    "appointment setting for contractors",
  ],
  openGraph: {
    type: "website",
    url: SITE.domain,
    siteName: SITE.name,
    title: "InstantAppointment AI: Pay Per Appointment Marketing for Remodeling Contractors",
    description:
      "Qualified, shown remodeling appointments on a pay per appointment model. We cover the ad spend and run exclusive territories.",
    images: [{ url: "/logo/emblem_squircle_1000.png", width: 1000, height: 1000, alt: "InstantAppointment AI" }],
  },
  twitter: {
    card: "summary",
    title: "InstantAppointment AI",
    description: "Pay per appointment marketing for remodeling contractors.",
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
    "InstantAppointment AI is a marketing agency that books qualified, shown remodeling consultations for home remodeling contractors on a pay per appointment model.",
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
