import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, ArrowUpRight, Check, X } from "lucide-react";
import { FinalCTA } from "@/components/Layout";
import { Reveal } from "@/components/Primitives";
import FaqList from "@/components/FaqList";
import {
  NICHES, OFFERS, LEAD_STEPS, APPT_STEPS, WHO_FOR, WHO_NOT,
  SPEED_POINTS, PRICING, SITE,
} from "@/lib/content";

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
  const n = NICHES.find((x) => x.slug === params.slug && x.live);
  if (!n) notFound();

  const isAppt = n.model === "appointment";
  const offer = isAppt ? OFFERS.appointment : OFFERS.lead;
  const steps = isAppt ? APPT_STEPS : LEAD_STEPS;
  const price = isAppt ? PRICING.appointment : PRICING.lead;
  const others = NICHES.filter((x) => x.live && x.slug !== n.slug);

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `${n.name} ${isAppt ? "Appointment Setting" : "Lead Generation"}`,
    serviceType: `${n.name} ${isAppt ? "appointments" : "leads"}`,
    description: n.metaDescription,
    provider: { "@type": "Organization", name: SITE.legalName, url: SITE.domain },
    areaServed: "United States",
    url: `${SITE.domain}/services/${n.slug}`,
  };

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />

      {/* Hero */}
      <section className="page-hero">
        <div className="grid-bg" aria-hidden="true" />
        <div className="glow" aria-hidden="true" />
        <div className="wrap">
          <Link href="/services" className="post-back">&larr; All services</Link>
          <div className="eyebrow mono anim-up">{n.eyebrow}</div>
          <h1 className="page-h1 anim-up d1">{n.h1}</h1>
          <p className="page-sub anim-up d2">{n.lede}</p>
          <div className="hero-cta anim-up d3" style={{ marginTop: 28 }}>
            <Link href="/pricing" className="btn btn-brass">{offer.cta} <ArrowUpRight size={17} /></Link>
            <Link href="/how-it-works" className="btn btn-ghost">See How It Works</Link>
          </div>
          <div className="hero-pills anim-up d4" style={{ marginTop: 26 }}>
            <span><Check size={14} /> {isAppt ? "Pay per shown appointment" : "Pay per exclusive lead"}</span>
            <span><Check size={14} /> We cover the ad spend</span>
            <span><Check size={14} /> 100% exclusive to you</span>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="section">
        <div className="wrap">
          <Reveal className="ind-intro"><p>{n.intro}</p></Reveal>
        </div>
      </section>

      {/* Problems */}
      <section className="section model">
        <div className="wrap">
          <Reveal className="sec-head">
            <div className="eyebrow mono brass">WHAT GETS IN THE WAY</div>
            <h2>Why {n.name.toLowerCase()} lead sources usually disappoint.</h2>
          </Reveal>
          <div className="pillar-grid">
            {n.problems.map((p, i) => (
              <Reveal className="pillar ind-pain" delay={i * 80} key={p.t}>
                <div className="ind-pain-ico"><X size={18} strokeWidth={2.2} /></div>
                <h3>{p.t}</h3><p>{p.b}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section">
        <div className="wrap">
          <Reveal className="sec-head">
            <div className="eyebrow mono brass">HOW WE FIX IT</div>
            <h2>Built to grow {n.plural}.</h2>
          </Reveal>
          <div className="svc-rows">
            {n.benefits.map((b, i) => (
              <Reveal className="svc-row" delay={i * 40} key={b.t}>
                <div className="svc-row-num mono">0{i + 1}</div>
                <div className="svc-ico"><Check size={20} strokeWidth={2} /></div>
                <div className="svc-row-copy"><h3>{b.t}</h3><p>{b.b}</p></div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section model">
        <div className="wrap steps-wrap">
          <Reveal className="sec-head">
            <div className="eyebrow mono brass">{isAppt ? "THE APPOINTMENT PROCESS" : "THE LEAD PROCESS"}</div>
            <h2>{isAppt ? "How a shown appointment reaches your calendar." : "How a lead reaches your phone."}</h2>
          </Reveal>
          {steps.map((s, i) => (
            <Reveal className="step" delay={i * 55} key={s.n}>
              <div className="step-num mono">{s.n}</div>
              <div><h3>{s.t}</h3><p>{s.b}</p></div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Lead-only: who it's for + speed */}
      {!isAppt && (
        <section className="section">
          <div className="wrap">
            <div className="who-grid">
              <Reveal className="who-card is-for">
                <div className="who-badge mono">{WHO_FOR.title}</div>
                <p className="who-lead">{WHO_FOR.lead}</p>
                <p className="who-body">{WHO_FOR.body}</p>
                <ul className="who-list">
                  {WHO_FOR.points.map((p) => <li key={p}><Check size={15} strokeWidth={2.4} /> {p}</li>)}
                </ul>
              </Reveal>
              <Reveal className="who-card is-not" delay={90}>
                <div className="who-badge mono">{WHO_NOT.title}</div>
                <p className="who-lead">{WHO_NOT.lead}</p>
                <p className="who-body">{WHO_NOT.body}</p>
                <ul className="who-list not">
                  {WHO_NOT.points.map((p) => <li key={p}><X size={15} strokeWidth={2.4} /> {p}</li>)}
                </ul>
              </Reveal>
            </div>
          </div>
        </section>
      )}

      {/* Speed matters (both, but especially lead) */}
      <section className="section model">
        <div className="wrap speed-wrap">
          <Reveal className="sec-head">
            <div className="eyebrow mono brass">WHY SPEED MATTERS</div>
            <h2>Call within 5 minutes. Book 40–50% into estimates.</h2>
            <p className="sec-lede">Leads are hottest in the first five minutes. The sooner you call, the higher your close rate.</p>
          </Reveal>
          <div className="speed-band">
            {SPEED_POINTS.map((s, i) => (
              <Reveal className={`speed-cell ${s.strong ? "on" : ""}`} delay={i * 70} key={s.time}>
                <div className="speed-time mono">{s.time}</div>
                <div className="speed-label">{s.label}</div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing teaser */}
      <section className="section">
        <div className="wrap">
          <Reveal className="price-strip">
            <div className="price-strip-l">
              <span className="offer-badge mono">{offer.badge}</span>
              <div className="price-strip-num"><span className="mono">{price.price}</span> <em>{price.unit}</em></div>
              <p>{price.sub}</p>
            </div>
            <Link href="/pricing" className="btn btn-brass btn-lg">{price.cta} <ArrowUpRight size={18} /></Link>
          </Reveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="section model">
        <div className="wrap faq-wrap">
          <Reveal className="sec-head"><div className="eyebrow mono brass">FREQUENTLY ASKED</div><h2>Questions before you start.</h2></Reveal>
          <FaqList />
        </div>
      </section>

      {/* Other niches */}
      <section className="section">
        <div className="wrap">
          <Reveal className="sec-head">
            <div className="eyebrow mono brass">OTHER TRADES</div>
            <h2>We also generate for these.</h2>
          </Reveal>
          <div className="ind-other-grid">
            {others.map((o, i) => (
              <Reveal className="ind-other" delay={i * 40} key={o.slug} as="article">
                <Link href={`/services/${o.slug}`} className="ind-other-link">
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

      <FinalCTA h={`Ready for exclusive ${n.name.toLowerCase()} ${isAppt ? "appointments" : "leads"}?`}
        sub={isAppt
          ? "Territories are exclusive. One quick call confirms whether your market is still open and what a shown appointment is worth in your area."
          : "Start with a low risk 3-day trial. If your team is ready to follow up fast, we can have exclusive homeowners hitting your pipeline within 24 hours."} />
    </main>
  );
}
