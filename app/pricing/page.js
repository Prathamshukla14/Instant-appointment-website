import Link from "next/link";
import { Check, ArrowUpRight } from "lucide-react";
import { PageHero, FinalCTA } from "@/components/Layout";
import { Reveal } from "@/components/Primitives";
import FaqList from "@/components/FaqList";
import { PRICING, LEAD_BADGES } from "@/lib/content";

export const metadata = {
  title: "Pricing | 3-Day Lead Trial & Pay Per Shown Appointment",
  description: "Simple, results-based pricing. Start with a $200 3-day trial for 10–20 exclusive leads, then weekly packages you control. Remodeling & HVAC: $350–450 per shown appointment.",
  keywords: ["lead generation pricing", "pay per lead pricing", "exclusive leads trial", "pay per shown appointment cost", "home service lead pricing"],
  alternates: { canonical: "/pricing" },
};

function PriceCard({ p, highlight }) {
  return (
    <Reveal className={`price-card ${highlight ? "featured" : ""}`}>
      <div className="price-card-head">
        <span className="offer-badge mono">{p.badge}</span>
        <h3>{p.name}</h3>
        <div className="price-card-num"><span className="mono">{p.price}</span> <em>{p.unit}</em></div>
        <p className="price-card-sub">{p.sub}</p>
      </div>
      <div className="price-block">
        <div className="price-block-h mono">{p.trialTitle}</div>
        <ul className="price-list">
          {p.trial.map((t) => <li key={t}><Check size={15} strokeWidth={2.4} /> <span>{t}</span></li>)}
        </ul>
      </div>
      <div className="price-block">
        <div className="price-block-h mono">{p.afterTitle}</div>
        <ul className="price-list">
          {p.after.map((t) => <li key={t}><Check size={15} strokeWidth={2.4} /> <span>{t}</span></li>)}
        </ul>
      </div>
      <Link href="/contact" className={`btn ${highlight ? "btn-brass" : "btn-ghost"} price-cta`}>{p.cta} <ArrowUpRight size={16} /></Link>
    </Reveal>
  );
}

export default function PricingPage() {
  return (
    <main>
      <PageHero eyebrow="PRICING" title="Try it first. Pay weekly if you love it."
        sub="No retainers, no ad spend markup, no long-term contracts. You pay for exclusive results, and you control the volume." />

      <section className="section">
        <div className="wrap">
          <div className="price-grid">
            <PriceCard p={PRICING.lead} highlight />
            <PriceCard p={PRICING.appointment} />
          </div>
          <Reveal className="price-note mono">Weekly and monthly lead packages are sized to your goals and market. Appointment pricing ($350–450) varies by area and service.</Reveal>
        </div>
      </section>

      <section className="section model">
        <div className="wrap">
          <Reveal className="sec-head">
            <div className="eyebrow mono brass">EVERY PLAN INCLUDES</div>
            <h2>Built to protect your money.</h2>
          </Reveal>
          <div className="badge-grid">
            {LEAD_BADGES.map((b, i) => (
              <Reveal className="badge-card" delay={i * 45} key={b.t}>
                <div className="badge-ico"><b.icon size={20} strokeWidth={1.8} /></div>
                <h4>{b.t}</h4>
                <p>{b.b}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap faq-wrap">
          <Reveal className="sec-head"><div className="eyebrow mono brass">FREQUENTLY ASKED</div><h2>Pricing questions.</h2></Reveal>
          <FaqList />
        </div>
      </section>

      <FinalCTA h="Ready to test the lead quality yourself?"
        sub="Start with a 3-day trial. See real, exclusive homeowner estimates before you commit to anything." />
    </main>
  );
}
