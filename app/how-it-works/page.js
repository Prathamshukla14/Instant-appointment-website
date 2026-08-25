import Link from "next/link";
import { Check, X, ArrowUpRight } from "lucide-react";
import { PageHero, FinalCTA } from "@/components/Layout";
import { Reveal } from "@/components/Primitives";
import FaqList from "@/components/FaqList";
import { LEAD_STEPS, APPT_STEPS, WHO_FOR, WHO_NOT, SPEED_POINTS, PILLARS } from "@/lib/content";

export const metadata = {
  title: "How It Works | Exclusive Leads & Pay Per Shown Appointments",
  description: "How InstantAppointment AI delivers exclusive home service leads and shown appointments. The 5-step lead engine, who it's for, why speed matters, and the pay per shown appointment model.",
  keywords: ["how lead generation works", "exclusive leads process", "pay per shown appointment", "home service lead generation"],
  alternates: { canonical: "/how-it-works" },
};

export default function HowItWorksPage() {
  return (
    <main>
      <PageHero eyebrow="HOW IT WORKS" title="From your market to your pipeline, every morning."
        sub="Two models, one principle: you pay for results, and every lead is exclusive to you. Here is exactly how each one runs." />

      {/* Lead engine */}
      <section className="section">
        <div className="wrap steps-wrap">
          <Reveal className="sec-head">
            <div className="eyebrow mono brass">THE LEAD ENGINE · MOST NICHES</div>
            <h2>Exclusive leads, in five steps.</h2>
            <p className="sec-lede">For roofing, junk removal, painting, and most home service trades. We build the list, work your market daily, and route verified homeowners straight to your phone.</p>
          </Reveal>
          {LEAD_STEPS.map((s, i) => (
            <Reveal className="step lead-step-row" delay={i * 55} key={s.n}>
              <div className="step-num mono">{s.n}</div>
              <div className="lead-step-body">
                <div className="lead-step-head">
                  <div className="lead-step-ico sm"><s.icon size={18} strokeWidth={1.8} /></div>
                  <h3>{s.t}</h3>
                </div>
                <p>{s.b}</p>
                <div className="lead-chips">
                  {s.chips.map((c) => <span className="lead-chip mono" key={c}><Check size={12} strokeWidth={2.6} /> {c}</span>)}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Who for / not for */}
      <section className="section model">
        <div className="wrap">
          <Reveal className="sec-head">
            <div className="eyebrow mono brass">HONEST FIT</div>
            <h2>Who this is, and isn&apos;t, for.</h2>
            <p className="sec-lede">Exclusive lead generation is a growth engine for the right company and a waste of money for the wrong one. We qualify our clients as carefully as we qualify homeowners.</p>
          </Reveal>
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

      {/* Speed */}
      <section className="section">
        <div className="wrap speed-wrap">
          <Reveal className="sec-head">
            <div className="eyebrow mono brass">WHY SPEED MATTERS</div>
            <h2>Call within 5 minutes. Book 40–50% into estimates.</h2>
            <p className="sec-lede">Leads are hottest in the first five minutes. We deliver the opportunity, warm and exclusive. You do the closing.</p>
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

      {/* Appointment model */}
      <section className="section model">
        <div className="wrap steps-wrap">
          <Reveal className="sec-head">
            <div className="eyebrow mono brass">THE APPOINTMENT MODEL · REMODELING &amp; HVAC</div>
            <h2>Pay per shown appointment, start to finish.</h2>
            <p className="sec-lede">For higher ticket trades, we go further: we qualify the homeowner, book the visit, confirm it, and bill you only when they show.</p>
          </Reveal>
          {APPT_STEPS.map((s, i) => (
            <Reveal className="step" delay={i * 55} key={s.n}>
              <div className="step-num mono">{s.n}</div>
              <div><h3>{s.t}</h3><p>{s.b}</p></div>
            </Reveal>
          ))}
          <Reveal className="sec-more">
            <Link href="/pricing" className="btn btn-brass">See Pricing <ArrowUpRight size={16} /></Link>
          </Reveal>
        </div>
      </section>

      {/* Commitments */}
      <section className="section">
        <div className="wrap">
          <Reveal className="sec-head"><div className="eyebrow mono brass">THE THREE COMMITMENTS</div><h2>What makes the model hold.</h2></Reveal>
          <div className="pillar-grid">
            {PILLARS.map((p, i) => (
              <Reveal className="pillar" delay={i * 80} key={p.title}>
                <div className="pillar-ico"><p.icon size={22} strokeWidth={1.8} /></div>
                <div className="pillar-lead mono">{p.lead}</div>
                <h3>{p.title}</h3><p>{p.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section model">
        <div className="wrap faq-wrap">
          <Reveal className="sec-head"><div className="eyebrow mono brass">FREQUENTLY ASKED</div><h2>Common questions about the model.</h2></Reveal>
          <FaqList />
        </div>
      </section>

      <FinalCTA />
    </main>
  );
}
