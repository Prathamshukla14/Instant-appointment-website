import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageHero, FinalCTA } from "@/components/Layout";
import { Reveal } from "@/components/Primitives";
import { INDUSTRIES } from "@/lib/content";

export const metadata = {
  title: "Industries We Serve | Remodeling Niches We Book Appointments For",
  description: "Exclusive, pay per shown appointment campaigns for kitchen and bath, whole home, additions, basement finishing, and general contractors.",
  alternates: { canonical: "/industries" },
};

export default function IndustriesPage() {
  return (
    <main>
      <PageHero eyebrow="INDUSTRIES WE SERVE" title="One system, tuned to your remodeling niche."
        sub="We stay narrow on purpose. The playbook is the same, shown appointments on your calendar, but the targeting, qualification, and messaging are built around the exact projects you sell." />
      <section className="section">
        <div className="wrap">
          <div className="svc-grid">
            {INDUSTRIES.map((ind, i) => (
              <Reveal className="svc-card" delay={i * 55} key={ind.slug} as="article">
                <Link href={`/industries/${ind.slug}`} className="ind-card-link">
                  <div className="svc-ico"><ind.icon size={20} strokeWidth={1.8} /></div>
                  <h3>{ind.name}</h3>
                  <p>{ind.lede}</p>
                  <span className="link-arrow ind-card-arrow">See how it works for {ind.name.toLowerCase()} <ArrowRight size={15} /></span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <FinalCTA h="Not sure your niche fits?" sub="If you remodel homes and want a calendar of shown appointments instead of shared leads, we should talk. One quick call confirms whether your market is open." />
    </main>
  );
}
