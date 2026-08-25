import { notFound } from "next/navigation";
import { LeadNicheHome, ApptNicheHome } from "@/components/NicheHome";
import { NICHES, SITE } from "@/lib/content";

export function generateStaticParams() {
  return NICHES.filter((n) => n.live).map((n) => ({ slug: n.slug }));
}

export function generateMetadata({ params }) {
  const n = NICHES.find((x) => x.slug === params.slug && x.live);
  if (!n) return {};
  return {
    title: n.metaTitle,
    description: n.metaDescription,
    keywords: n.keywords,
    alternates: { canonical: `/services/${n.slug}` },
    openGraph: { title: n.metaTitle, description: n.metaDescription, type: "website", url: `${SITE.domain}/services/${n.slug}` },
  };
}

export default function NichePage({ params }) {
  const niche = NICHES.find((x) => x.slug === params.slug && x.live);
  if (!niche) notFound();

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `${niche.name} ${niche.model === "appointment" ? "Appointment Setting" : "Lead Generation"}`,
    serviceType: `${niche.name} ${niche.model === "appointment" ? "appointments" : "leads"}`,
    description: niche.metaDescription,
    provider: { "@type": "Organization", name: SITE.legalName, url: SITE.domain },
    areaServed: "United States",
    url: `${SITE.domain}/services/${niche.slug}`,
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      {niche.model === "appointment" ? <ApptNicheHome niche={niche} /> : <LeadNicheHome niche={niche} />}
    </>
  );
}
