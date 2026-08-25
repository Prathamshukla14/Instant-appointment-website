import Link from "next/link";
import { ArrowUpRight, ArrowRight, Wallet, ShieldCheck, MapPin } from "lucide-react";
import { Reveal } from "@/components/Primitives";
import { FinalCTA } from "@/components/Layout";
import { GCal, NotifyMock } from "@/components/Showcase";
import FaqList from "@/components/FaqList";
import { SERVICES, PILLARS, REVIEWS, INDUSTRIES } from "@/lib/content";

export default function HomePage() {
  return (
    <main>
      <section className="hero">
        <div className="grid-bg" aria-hidden="true" />
        <div className="glow" aria-hidden="true" />
        <div className="wrap hero-inner">
          <div className="hero-left">
            <div className="eyebrow mono anim-up">KITCHEN &middot; BATH &middot; WHOLE HOME REMODELS</div>
            <h1 className="hero-h1">
              <span className="anim-up d1">We fill your calendar</span>
              <span className="anim-up d2">with qualified, <span className="brass">shown</span></span>
              <span className="anim-up d3">remodeling appointments.</span>
            </h1>
            <p className="hero-sub anim-up d4">Or you don&apos;t pay. Built for remodeling contractors who want booked consultations, not shared leads or a monthly ad bill.</p>
            <div className="hero-cta anim-up d5">
              <Link href="/contact" className="btn btn-brass">Secure Your Market <ArrowUpRight size={17} /></Link>
              <Link href="/how-it-works" className="btn btn-ghost">See How It Works</Link>
            </div>
            <div className="hero-pills anim-up d6">
              <span><Wallet size={14} /> We cover the ad spend</span>
              <span><ShieldCheck size={14} /> Pay per shown appointment</span>
              <span><MapPin size={14} /> Exclusive territory</span>
            </div>
          </div>
        </div>
        <div className="wrap hero-cal anim-up d5"><GCal /></div>
        <div className="wrap">
          <div className="stat-band">
            <div className="stat"><div className="stat-num">&lt;5<span>min</span></div><div className="stat-label mono">speed to lead</div></div>
            <div className="stat"><div className="stat-num">$0</div><div className="stat-label mono">ad spend billed to you</div></div>
            <div className="stat"><div className="stat-num">1</div><div className="stat-label mono">contractor per market</div></div>
            <div className="stat"><div className="stat-num">$0</div><div className="stat-label mono">paid until they show</div></div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <Reveal className="sec-head">
            <div className="eyebrow mono brass">WHAT WE RUN</div>
            <h2>Everything that feeds the calendar. Nothing that doesn&apos;t.</h2>
            <p className="sec-lede">One focus, remodeling. One deliverable, a shown appointment. These are the six pieces we stack to get there.</p>
          </Reveal>
          <div className="svc-grid">
            {SERVICES.map((s, i) => (
              <Reveal className="svc-card" delay={i * 55} key={s.title}>
                <div className="svc-ico"><s.icon size={20} strokeWidth={1.8} /></div>
                <h3>{s.title}</h3><p>{s.body}</p>
              </Reveal>
            ))}
          </div>
          <Reveal className="sec-more"><Link href="/services" className="link-arrow">Explore everything we run <ArrowRight size={16} /></Link></Reveal>
        </div>
      </section>

      <section className="section model">
        <div className="wrap">
          <Reveal className="sec-head">
            <div className="eyebrow mono brass">WHO WE BOOK FOR</div>
            <h2>Specialists in the remodeling niches we serve.</h2>
            <p className="sec-lede">Same system, tuned to your projects. Pick your niche and see exactly how we fill your calendar.</p>
          </Reveal>
          <div className="ind-home-grid">
            {INDUSTRIES.map((ind, i) => (
              <Reveal className="ind-home-card" delay={i * 45} key={ind.slug} as="article">
                <Link href={`/industries/${ind.slug}`} className="ind-home-link">
                  <div className="svc-ico"><ind.icon size={20} strokeWidth={1.8} /></div>
                  <h3>{ind.name}</h3>
                  <span className="ind-home-arrow"><ArrowUpRight size={16} /></span>
                </Link>
              </Reveal>
            ))}
          </div>
          <Reveal className="sec-more"><Link href="/industries" className="link-arrow">See all industries we serve <ArrowRight size={16} /></Link></Reveal>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <Reveal className="sec-head">
            <div className="eyebrow mono brass">THE MODEL</div>
            <h2>The risk sits with us. On purpose.</h2>
            <p className="sec-lede">Most agencies get paid whether your phone rings or not. We built the opposite incentive.</p>
          </Reveal>
          <div className="pillar-grid">
            {PILLARS.map((p, i) => (
              <Reveal className="pillar" delay={i * 80} key={p.title}>
                <div className="pillar-ico"><p.icon size={22} strokeWidth={1.8} /></div>
                <div className="pillar-lead mono">{p.lead}</div>
                <h3>{p.title}</h3><p>{p.body}</p>
              </Reveal>
            ))}
          </div>
          <Reveal className="sec-more"><Link href="/how-it-works" className="link-arrow">See the full process <ArrowRight size={16} /></Link></Reveal>
        </div>
      </section>

      <section className="section notify-sec">
        <div className="wrap">
          <Reveal className="sec-head">
            <div className="eyebrow mono brass">HOW APPOINTMENTS ARRIVE</div>
            <h2>Straight to your phone. Straight to your calendar.</h2>
            <p className="sec-lede">Every shown appointment comes with the homeowner&apos;s name, project type, verified details, and a confirmed time. You just show up to the visit.</p>
          </Reveal>
          <NotifyMock />
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <Reveal className="sec-head">
            <div className="eyebrow mono brass">REAL OPERATORS. REAL BOOKED CALENDARS.</div>
            <h2>What remodelers say.</h2>
          </Reveal>
          <div className="tst-grid">
            {REVIEWS.slice(0, 3).map((r, i) => (
              <a
                key={i}
                href="https://www.trustpilot.com/review/instantappointment-ai.com"
                target="_blank"
                rel="noopener noreferrer"
                className="tst-card-link"
              >
                <Reveal className="tst-card" delay={i * 70}>
                  <div className="tst-stars">{"\u2605\u2605\u2605\u2605\u2605"}</div>
                  <p className="tst-quote">&ldquo;{r.quote}&rdquo;</p>
                  <div className="tst-meta">
                    <div className="tst-avatar mono">
                      {r.logo ? <img src={r.logo} alt={r.company} className="tst-avatar-img" /> : "CL"}
                    </div>
                    <div><div className="tst-name">{r.name}</div><div className="tst-co mono">{r.company}</div></div>
                  </div>
                </Reveal>
              </a>
            ))}
          </div>
          <Reveal className="sec-more"><Link href="/results" className="link-arrow">See all results &amp; testimonials <ArrowRight size={16} /></Link></Reveal>
        </div>
      </section>

      <section className="section model">
        <div className="wrap faq-wrap">
          <Reveal className="sec-head"><div className="eyebrow mono brass">FREQUENTLY ASKED</div><h2>Questions remodelers ask before signing.</h2></Reveal>
          <FaqList />
        </div>
      </section>

      <FinalCTA />
    </main>
  );
}
