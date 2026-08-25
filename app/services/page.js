import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { PageHero, FinalCTA } from "@/components/Layout";
import { Reveal } from "@/components/Primitives";
import { NICHES } from "@/lib/content";

export const metadata = {
  title: "Home Service Niches We Generate Leads & Appointments For",
  description: "Exclusive leads and shown appointments for 15+ home service trades: roofing, junk removal, tree service, painting, HVAC, remodeling, concrete, landscaping, and more. We cover the ad spend, you pay for results.",
  keywords: [
    "home service leads", "exclusive home service leads", "contractor lead generation",
    "roofing leads", "junk removal leads", "hvac appointments", "remodeling appointments",
    "painting leads", "tree service leads", "pest control leads",
  ],
  alternates: { canonical: "/services" },
};

const leadNiches = NICHES.filter((n) => n.model === "lead");
const apptNiches = NICHES.filter((n) => n.model === "appointment");

function NicheCard({ n, i }) {
  return (
    <Reveal className="svc-card niche-full" delay={i * 40} key={n.slug} as="article">
      {n.live ? (
        <Link href={`/services/${n.slug}`} className="niche-full-link">
          <div className="svc-ico"><n.icon size={20} strokeWidth={1.8} /></div>
          <h3>{n.name}</h3>
          <p>{n.lede}</p>
          <span className="link-arrow ind-card-arrow">
            {n.model === "appointment" ? `${n.name} appointments` : `${n.name} leads`} <ArrowRight size={15} />
          </span>
        </Link>
      ) : (
        <Link href="/contact" className="niche-full-link">
          <div className="svc-ico"><n.icon size={20} strokeWidth={1.8} /></div>
          <div className="niche-full-head">
            <h3>{n.name}</h3>
            <span className="niche-soon mono">Now onboarding</span>
          </div>
          <p>{n.lede}</p>
          <span className="link-arrow ind-card-arrow">Request early access <ArrowRight size={15} /></span>
        </Link>
      )}
    </Reveal>
  );
}

export default function ServicesPage() {
  return (
    <main>
      <PageHero eyebrow="SERVICES WE SERVE" title="Exclusive leads and appointments, tuned to your trade."
        sub="One system across 15+ home service niches. Most run on exclusive pay per lead. Remodeling and HVAC run on pay per shown appointment. We cover the ad spend on both." />

      <section className="section">
        <div className="wrap">
          <Reveal className="sec-head">
            <div className="eyebrow mono brass">PAY PER LEAD</div>
            <h2>Exclusive leads, delivered within 24 hours.</h2>
            <p className="sec-lede">Verified homeowners in your service area, 100% exclusive, with volume you control. Start on a 3-day trial.</p>
          </Reveal>
          <div className="svc-grid">
            {leadNiches.map((n, i) => <NicheCard n={n} i={i} key={n.slug} />)}
          </div>
        </div>
      </section>

      <section className="section model">
        <div className="wrap">
          <Reveal className="sec-head">
            <div className="eyebrow mono brass">PAY PER SHOWN APPOINTMENT</div>
            <h2>Higher ticket trades, booked and confirmed.</h2>
            <p className="sec-lede">For remodeling and HVAC we qualify and confirm the homeowner, then book the visit. You pay only when they show.</p>
          </Reveal>
          <div className="svc-grid">
            {apptNiches.map((n, i) => <NicheCard n={n} i={i} key={n.slug} />)}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap final-inner" style={{ textAlign: "center" }}>
          <Reveal>
            <h2 style={{ fontSize: "clamp(24px,3vw,34px)", fontWeight: 800 }}>Don&apos;t see your trade?</h2>
            <p className="sec-lede" style={{ margin: "14px auto 26px" }}>We are expanding fast across home services. If you run an established company with a team ready to follow up, we can likely open your niche.</p>
            <Link href="/contact" className="btn btn-brass btn-lg">Ask About Your Trade <ArrowUpRight size={18} /></Link>
          </Reveal>
        </div>
      </section>

      <FinalCTA />
    </main>
  );
}
