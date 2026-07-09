import { PageHero, FinalCTA } from "@/components/Layout";
import { Reveal } from "@/components/Primitives";
import FaqList from "@/components/FaqList";
import { STEPS, PILLARS } from "@/lib/content";

export const metadata = {
  title: "How It Works | Pay Per Shown Appointment Model",
  description: "The InstantAppointment AI model in five steps. We cover the ad spend, qualify every homeowner, and you pay only when they show for the remodeling consultation.",
  alternates: { canonical: "/how-it-works" },
};

export default function HowItWorksPage() {
  return (
    <main>
      <PageHero eyebrow="HOW IT WORKS" title="Pay per shown appointment, start to finish."
        sub="The whole model in five steps. The risk sits with us at every one of them." />
      <section className="section">
        <div className="wrap steps-wrap">
          {STEPS.map((s, i) => (
            <Reveal className="step" delay={i * 60} key={s.n}>
              <div className="step-num mono">{s.n}</div>
              <div><h3>{s.t}</h3><p>{s.b}</p></div>
            </Reveal>
          ))}
        </div>
      </section>
      <section className="section model">
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
      <section className="section">
        <div className="wrap faq-wrap">
          <Reveal className="sec-head"><div className="eyebrow mono brass">FREQUENTLY ASKED</div><h2>Common questions about the model.</h2></Reveal>
          <FaqList />
        </div>
      </section>
      <FinalCTA />
    </main>
  );
}
