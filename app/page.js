import Link from "next/link";
import { ArrowUpRight, ArrowRight, Lock, Wallet, GaugeCircle, Check } from "lucide-react";
import { Reveal } from "@/components/Primitives";
import { FinalCTA } from "@/components/Layout";
import { GCal, NotifyMock } from "@/components/Showcase";
import FaqList from "@/components/FaqList";
import { NICHES, OFFERS, LEAD_STEPS, SPEED_POINTS, PILLARS, REVIEWS } from "@/lib/content";

export default function HomePage() {
  return (
    <main>
      <section className="hero">
        <div className="grid-bg" aria-hidden="true" />
        <div className="glow" aria-hidden="true" />
        <div className="wrap hero-inner">
          <div className="hero-left">
            <div className="eyebrow mono anim-up">EXCLUSIVE LEADS &amp; SHOWN APPOINTMENTS FOR HOME SERVICES</div>
            <h1 className="hero-h1">
              <span className="anim-up d1">We fill your pipeline with</span>
              <span className="anim-up d2">exclusive <span className="brass">leads</span> and shown</span>
              <span className="anim-up d3">appointments.</span>
            </h1>
            <p className="hero-sub anim-up d4">For established home service companies across 15+ trades. We cover the ad spend and lead generation. You get exclusive homeowners, never shared, and you control the volume.</p>
            <div className="hero-cta anim-up d5">
              <Link href="/pricing" className="btn btn-brass">Start a 3-Day Trial <ArrowUpRight size={17} /></Link>
              <Link href="/how-it-works" className="btn btn-ghost">See How It Works</Link>
            </div>
            <div className="hero-pills anim-up d6">
              <span><Wallet size={14} /> We cover the ad spend</span>
              <span><Lock size={14} /> 100% exclusive leads</span>
              <span><GaugeCircle size={14} /> You control the volume</span>
            </div>
          </div>
        </div>
        <div className="wrap hero-cal anim-up d5"><GCal /></div>
        <div className="wrap">
          <div className="stat-band">
            <div className="stat"><div className="stat-num">15+</div><div className="stat-label mono">home service niches</div></div>
            <div className="stat"><div className="stat-num">24<span>hr</span></div><div className="stat-label mono">to first leads</div></div>
            <div className="stat"><div className="stat-num">100<span>%</span></div><div className="stat-label mono">exclusive to you</div></div>
            <div className="stat"><div className="stat-num">$0</div><div className="stat-label mono">ad spend billed to you</div></div>
          </div>
        </div>
      </section>

      {/* Niches */}
      <section className="section">
        <div className="wrap">
          <Reveal className="sec-head">
            <div className="eyebrow mono brass">WHO WE GENERATE FOR</div>
            <h2>One engine, built for every home service trade.</h2>
            <p className="sec-lede">Pick your trade and see exactly how we fill your pipeline. Most niches run on exclusive pay per lead. Remodeling and HVAC run on pay per shown appointment.</p>
          </Reveal>
          <div className="niche-grid">
            {NICHES.map((n, i) => (
              <Reveal className="niche-card" delay={i * 25} key={n.slug} as="article">
                <Link href={n.live ? `/services/${n.slug}` : "/services"} className="niche-link">
                  <div className="niche-ico"><n.icon size={19} strokeWidth={1.8} /></div>
                  <div className="niche-copy">
                    <h3>{n.name}</h3>
                    <span className={`niche-tag mono ${n.model}`}>{n.model === "appointment" ? "Appointments" : "Leads"}</span>
                  </div>
                  {!n.live && <span className="niche-soon mono">Soon</span>}
                </Link>
              </Reveal>
            ))}
          </div>
          <Reveal className="sec-more"><Link href="/services" className="link-arrow">See all services we generate for <ArrowRight size={16} /></Link></Reveal>
        </div>
      </section>

      {/* Two offers */}
      <section className="section model">
        <div className="wrap">
          <Reveal className="sec-head">
            <div className="eyebrow mono brass">TWO WAYS TO WORK WITH US</div>
            <h2>Leads or appointments. You always pay for results.</h2>
            <p className="sec-lede">We cover the ad spend either way. The only question is whether you want exclusive leads to call, or qualified appointments already booked.</p>
          </Reveal>
          <div className="offer-grid">
            {[OFFERS.lead, OFFERS.appointment].map((o, i) => (
              <Reveal className="offer-card" delay={i * 90} key={o.key}>
                <div className="offer-top">
                  <span className="offer-badge mono">{o.badge}</span>
                  <h3>{o.name}</h3>
                  <p className="offer-tag">{o.tagline}</p>
                </div>
                <ul className="offer-points">
                  {o.points.map((p) => (
                    <li key={p}><Check size={16} strokeWidth={2.4} /> <span>{p}</span></li>
                  ))}
                </ul>
                <div className="offer-price mono">{o.priceLine}</div>
                <Link href="/pricing" className={`btn ${i === 0 ? "btn-brass" : "btn-ghost"} offer-cta`}>{o.cta} <ArrowUpRight size={16} /></Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* How lead gen works (teaser) */}
      <section className="section">
        <div className="wrap">
          <Reveal className="sec-head">
            <div className="eyebrow mono brass">HOW THE LEAD ENGINE RUNS</div>
            <h2>From target list to a lead on your phone.</h2>
            <p className="sec-lede">Every morning our system works your market so your team wakes up to verified, exclusive homeowners ready for a quote.</p>
          </Reveal>
          <div className="lead-steps">
            {LEAD_STEPS.map((s, i) => (
              <Reveal className="lead-step" delay={i * 55} key={s.n}>
                <div className="lead-step-top">
                  <div className="lead-step-ico"><s.icon size={20} strokeWidth={1.8} /></div>
                  <span className="lead-step-num mono">{s.n}</span>
                </div>
                <h3>{s.t}</h3>
                <p>{s.b}</p>
              </Reveal>
            ))}
          </div>
          <Reveal className="sec-more"><Link href="/how-it-works" className="link-arrow">See the full process <ArrowRight size={16} /></Link></Reveal>
        </div>
      </section>

      {/* Speed matters */}
      <section className="section model">
        <div className="wrap speed-wrap">
          <Reveal className="sec-head">
            <div className="eyebrow mono brass">WHY SPEED MATTERS</div>
            <h2>Call within 5 minutes. Book 40–50% into estimates.</h2>
            <p className="sec-lede">Leads are hottest in the first five minutes. The sooner you call, the higher your close rate. We deliver the opportunity. You close.</p>
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

      {/* How appointments arrive */}
      <section className="section notify-sec">
        <div className="wrap">
          <Reveal className="sec-head">
            <div className="eyebrow mono brass">HOW LEADS &amp; APPOINTMENTS ARRIVE</div>
            <h2>Straight to your phone. Straight to your calendar.</h2>
            <p className="sec-lede">Every lead comes with the homeowner&apos;s name, contact info, address, and the conversation history, by SMS and email, the moment they respond.</p>
          </Reveal>
          <NotifyMock />
        </div>
      </section>

      {/* The commitments */}
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
        </div>
      </section>

      {/* Reviews */}
      <section className="section model">
        <div className="wrap">
          <Reveal className="sec-head">
            <div className="eyebrow mono brass">REAL OPERATORS. REAL BOOKED CALENDARS.</div>
            <h2>What home service owners say.</h2>
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
                  <div className="tst-stars">{"★★★★★"}</div>
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

      {/* FAQ */}
      <section className="section">
        <div className="wrap faq-wrap">
          <Reveal className="sec-head"><div className="eyebrow mono brass">FREQUENTLY ASKED</div><h2>Questions owners ask before starting.</h2></Reveal>
          <FaqList />
        </div>
      </section>

      <FinalCTA h="Ready for exclusive homeowners in your pipeline?"
        sub="Start with a low risk 3-day trial. If you have a team ready to follow up, we can have leads hitting your phone within 24 hours." />
    </main>
  );
}
