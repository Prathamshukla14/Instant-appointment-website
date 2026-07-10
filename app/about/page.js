import { PageHero, FinalCTA } from "@/components/Layout";
import { Reveal } from "@/components/Primitives";

export const metadata = {
  title: "About Us",
  description: "InstantAppointment AI is built on the opposite incentive from most agencies: if we do not book qualified homeowners onto your calendar, we do not get paid.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <main>
      <PageHero eyebrow="ABOUT US" title="Built by an operator, not a middleman."
        sub="InstantAppointment AI exists because the standard agency model is broken for contractors." />
      <section className="section">
        <div className="wrap founder-inner">
          <Reveal className="founder-photo">
            <img src="/founder.png" alt="Founder, InstantAppointment AI" className="founder-img" />
            <div className="founder-caption">
              <div className="founder-caption-name">Pranshu Bansal</div>
              <div className="founder-caption-co mono">INSTANTAPPOINTMENT AI</div>
            </div>
          </Reveal>
          <Reveal className="founder-copy" delay={80}>
            <div className="eyebrow mono brass">MEET THE FOUNDER</div>
            <h2>If we don&apos;t book, we don&apos;t get paid.</h2>
            <p>Most agencies get paid whether the phone rings or not. I built InstantAppointment AI on the opposite incentive: if we do not book qualified homeowners onto your calendar, we do not get paid. That is what keeps our team sharp on creative, speed to lead, and show rate. The things that actually decide whether this works.</p>
            <p>We stay deliberately narrow. Remodeling contractors, exclusive territories, one deliverable. That focus is why the playbook compounds for every client instead of being spread across ten industries.</p>
            <div className="founder-sign mono">Founder, InstantAppointment AI</div>
          </Reveal>
        </div>
      </section>
      <FinalCTA />
    </main>
  );
}
