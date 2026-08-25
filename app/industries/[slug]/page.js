import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, ArrowUpRight, Check, X } from "lucide-react";
import { FinalCTA } from "@/components/Layout";
import { Reveal } from "@/components/Primitives";
import { INDUSTRIES, SITE } from "@/lib/content";

export function generateStaticParams() {
  return INDUSTRIES.map((ind) => ({ slug: ind.slug }));
}

export function generateMetadata({ params }) {
  const ind = INDUSTRIES.find((i) => i.slug === params.slug);
  if (!ind) return {};
  return {
    title: `${ind.name} Remodeling Appointments | ${SITE.name}`,
    description: ind.lede,
    alternates: { canonical: `/industries/${ind.slug}` },
    openGraph: { title: `${ind.name} | ${SITE.name}`, description: ind.lede, type: "website" },
  };
}

export default function IndustryPage({ params }) {
  const ind = INDUSTRIES.find((i) => i.slug === params.slug);
  if (!ind) notFound();

  const others = INDUSTRIES.filter((i) => i.slug !== ind.slug);

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `${ind.name} Remodeling Appointment Setting`,
    description: ind.lede,
    provider: { "@type": "Organization", name: SITE.legalName },
    areaServed: "United States",
    url: `${SITE.domain}/industries/${ind.slug}`,
  };

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />

      <section className="page-hero">
        <div className="grid-bg" aria-hidden="true" />
        <div className="glow" aria-hidden="true" />
        <div className="wrap">
          <Link href="/industries" className="post-back">&larr; All industries</Link>
          <div className="eyebrow mono anim-up">{ind.eyebrow}</div>
          <h1 className="page-h1 anim-up d1">{ind.title}</h1>
          <p className="page-sub anim-up d2">{ind.lede}</p>
          <div className="hero-cta anim-up d3" style={{ marginTop: 28 }}>
            <Link href="/contact" className="btn btn-brass">Secure Your Market <ArrowUpRight size={17} /></Link>
            <Link href="/how-it-works" className="btn btn-ghost">See How It Works</Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <Reveal className="ind-intro">
            <p>{ind.intro}</p>
          </Reveal>
        </div>
      </section>

      <section className="section model">
        <div className="wrap">
          <Reveal className="sec-head">
            <div className="eyebrow mono brass">WHAT GETS IN THE WAY</div>
            <h2>Why {ind.name.toLowerCase()} leads usually disappoint.</h2>
            <p className="sec-lede">The problems are specific to your niche. So is the fix.</p>
          </Reveal>
          <div className="pillar-grid">
            {ind.pains.map((p, i) => (
              <Reveal className="pillar ind-pain" delay={i * 80} key={p.t}>
                <div className="ind-pain-ico"><X size={18} strokeWidth={2.2} /></div>
                <h3>{p.t}</h3><p>{p.b}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <Reveal className="sec-head">
            <div className="eyebrow mono brass">HOW WE FIX IT</div>
            <h2>Built to book {ind.name.toLowerCase()} projects.</h2>
          </Reveal>
          <div className="svc-rows">
            {ind.approach.map((a, i) => (
              <Reveal className="svc-row" delay={i * 40} key={a.t}>
                <div className="svc-row-num mono">0{i + 1}</div>
                <div className="svc-ico"><Check size={20} strokeWidth={2} /></div>
                <div className="svc-row-copy"><h3>{a.t}</h3><p>{a.b}</p></div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section model">
        <div className="wrap">
          <Reveal className="sec-head">
            <div className="eyebrow mono brass">PROJECTS WE BOOK</div>
            <h2>The {ind.name.toLowerCase()} work we drive appointments for.</h2>
          </Reveal>
          <div className="ind-projects">
            {ind.projects.map((p, i) => (
              <Reveal className="ind-project" delay={i * 50} key={p}>
                <ind.icon size={18} strokeWidth={1.8} />
                <span>{p}</span>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <Reveal className="sec-head">
            <div className="eyebrow mono brass">OTHER NICHES</div>
            <h2>We also book for these remodelers.</h2>
          </Reveal>
          <div className="ind-other-grid">
            {others.map((o, i) => (
              <Reveal className="ind-other" delay={i * 40} key={o.slug} as="article">
                <Link href={`/industries/${o.slug}`} className="ind-other-link">
                  <div className="svc-ico"><o.icon size={18} strokeWidth={1.8} /></div>
                  <div className="ind-other-copy">
                    <h3>{o.name}</h3>
                    <span className="link-arrow">View <ArrowRight size={14} /></span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <FinalCTA h={`Ready to fill your calendar with ${ind.name.toLowerCase()} consultations?`}
        sub="Territories are exclusive. One quick call confirms whether your market is still open and what a shown appointment is worth in your area." />
    </main>
  );
}
