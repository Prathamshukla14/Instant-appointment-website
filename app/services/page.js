import { PageHero, FinalCTA } from "@/components/Layout";
import { Reveal } from "@/components/Primitives";
import { NotifyMock } from "@/components/Showcase";
import { SERVICES } from "@/lib/content";

export const metadata = {
  title: "What We Run | Marketing Services for Remodeling Contractors",
  description: "Meta Ads, Google Search Ads, landing pages, speed to lead automation, live appointment setting, and retargeting, all built to book shown remodeling appointments.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <main>
      <PageHero eyebrow="WHAT WE RUN" title="Marketing services built for remodeling contractors."
        sub="Six pieces, one system. Every part exists to produce a single outcome: a qualified homeowner, on your calendar, who shows up." />
      <section className="section">
        <div className="wrap">
          <div className="svc-rows">
            {SERVICES.map((s, i) => (
              <Reveal className="svc-row" delay={i * 40} key={s.title}>
                <div className="svc-row-num mono">0{i + 1}</div>
                <div className="svc-ico"><s.icon size={20} strokeWidth={1.8} /></div>
                <div className="svc-row-copy"><h3>{s.title}</h3><p>{s.body}</p></div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <section className="section notify-sec alt">
        <div className="wrap">
          <Reveal className="sec-head">
            <div className="eyebrow mono brass">THE OUTPUT</div>
            <h2>What lands on your phone when the system runs.</h2>
          </Reveal>
          <NotifyMock />
        </div>
      </section>
      <FinalCTA h="Want this system running in your market?" />
    </main>
  );
}
