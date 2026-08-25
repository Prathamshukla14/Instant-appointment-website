/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { ArrowUpRight, ArrowRight, Wallet, ShieldCheck, MapPin, Lock } from "lucide-react";
import { Reveal } from "./Primitives";
import { FinalCTA } from "./Layout";
import { GCal, NotifyMock } from "./Showcase";
import FaqList from "./FaqList";
import { SERVICES, PILLARS, APPT_PILLARS, REVIEWS, nicheFaq } from "@/lib/content";

function HeroTitle({ lines }) {
  return (
    <h1 className="hero-h1">
      {lines.map((line, i) => (
        <span className={`anim-up d${i + 1}`} key={i}>
          {Array.isArray(line)
            ? line.map((tok, j) =>
                typeof tok === "string"
                  ? tok
                  : <span className="brass" key={j}>{tok.brass}</span>
              )
            : line}
        </span>
      ))}
    </h1>
  );
}

function StatBand({ stats }) {
  return (
    <div className="wrap">
      <div className="stat-band">
        {stats.map((s, i) => (
          <div className="stat" key={i}>
            <div className="stat-num" dangerouslySetInnerHTML={{ __html: s.num }} />
            <div className="stat-label mono">{s.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function ReviewsSection({ eyebrow, heading }) {
  return (
    <section className="section">
      <div className="wrap">
        <Reveal className="sec-head">
          <div className="eyebrow mono brass">{eyebrow}</div>
          <h2>{heading}</h2>
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
  );
}

/* ============ LEAD niche (tree-style) ============ */
export function LeadNicheHome({ niche }) {
  const stats = [
    { num: niche.leadsPerMonth, label: "exclusive leads / month" },
    { num: "$0", label: "ad spend billed to you" },
    { num: "1", label: `${niche.proLabel} per market` },
    { num: "24<span>h</span>", label: "to your first leads" },
  ];
  return (
    <main>
      <section className="hero">
        <div className="grid-bg" aria-hidden="true" />
        <div className="glow" aria-hidden="true" />
        <div className="wrap hero-inner">
          <div className="hero-left">
            <div className="eyebrow mono anim-up">{niche.hero.eyebrow}</div>
            <HeroTitle lines={niche.hero.title} />
            <p className="hero-sub anim-up d4">{niche.hero.sub}</p>
            <div className="hero-cta anim-up d5">
              <Link href="/contact?type=leads" className="btn btn-brass">Get Your Leads <ArrowUpRight size={17} /></Link>
              <Link href="/how-it-works" className="btn btn-ghost">See How It Works</Link>
            </div>
            <div className="hero-pills anim-up d6">
              <span><Wallet size={14} /> We cover the ad spend</span>
              <span><Lock size={14} /> 100% exclusive leads</span>
              <span><MapPin size={14} /> Exclusive territory</span>
            </div>
          </div>
        </div>
        <div className="wrap hero-cal anim-up d5"><GCal /></div>
        <StatBand stats={stats} />
      </section>

      <section className="section">
        <div className="wrap">
          <Reveal className="sec-head">
            <div className="eyebrow mono brass">WHAT WE SEND LEADS FOR</div>
            <h2>Every job your crews want. Nothing they don&apos;t.</h2>
            <p className="sec-lede">Homeowners actively searching for the {niche.noun} work you do, pre-qualified and sent straight to you. These are the job types we fill your pipeline with.</p>
          </Reveal>
          <div className="svc-grid">
            {niche.jobTypes.map((s, i) => (
              <Reveal className="svc-card" delay={i * 55} key={s.title}>
                <div className="svc-ico"><s.icon size={20} strokeWidth={1.8} /></div>
                <h3>{s.title}</h3><p>{s.body}</p>
              </Reveal>
            ))}
          </div>
          <Reveal className="sec-more"><Link href="/services" className="link-arrow">See every trade we send leads for <ArrowRight size={16} /></Link></Reveal>
        </div>
      </section>

      <section className="section model">
        <div className="wrap">
          <Reveal className="sec-head">
            <div className="eyebrow mono brass">THE MODEL</div>
            <h2>The risk sits with us. On purpose.</h2>
            <p className="sec-lede">Most lead companies sell the same homeowner to five contractors. We built the opposite incentive.</p>
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
            <div className="eyebrow mono brass">HOW LEADS ARRIVE</div>
            <h2>Straight to your phone. Ready to book.</h2>
            <p className="sec-lede">Every lead comes with the homeowner&apos;s name, job type, address, and verified details. You just call and close.</p>
          </Reveal>
          <NotifyMock />
        </div>
      </section>

      <ReviewsSection eyebrow="REAL OPERATORS. REAL BOOKED CREWS." heading={`What ${niche.plural} say.`} />

      <section className="section model">
        <div className="wrap faq-wrap">
          <Reveal className="sec-head"><div className="eyebrow mono brass">FREQUENTLY ASKED</div><h2>Questions {niche.plural} ask before signing.</h2></Reveal>
          <FaqList items={nicheFaq(niche)} />
        </div>
      </section>

      <FinalCTA h={`Ready for exclusive ${niche.noun} leads?`}
        sub="Start with a low risk 3-day trial. If your team is ready to follow up fast, we can have exclusive homeowners hitting your pipeline within 24 hours."
        href="/contact?type=leads" cta="Start a 3-Day Trial" />
    </main>
  );
}

/* ============ APPOINTMENT niche (remodeling-style) ============ */
export function ApptNicheHome({ niche }) {
  const stats = [
    { num: "&lt;5<span>min</span>", label: "speed to lead" },
    { num: "$0", label: "ad spend billed to you" },
    { num: "1", label: `${niche.proLabel} per market` },
    { num: "$0", label: "paid until they show" },
  ];
  return (
    <main>
      <section className="hero">
        <div className="grid-bg" aria-hidden="true" />
        <div className="glow" aria-hidden="true" />
        <div className="wrap hero-inner">
          <div className="hero-left">
            <div className="eyebrow mono anim-up">{niche.hero.eyebrow}</div>
            <HeroTitle lines={niche.hero.title} />
            <p className="hero-sub anim-up d4">{niche.hero.sub}</p>
            <div className="hero-cta anim-up d5">
              <Link href="/contact?type=appointments" className="btn btn-brass">Secure Your Market <ArrowUpRight size={17} /></Link>
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
        <StatBand stats={stats} />
      </section>

      <section className="section">
        <div className="wrap">
          <Reveal className="sec-head">
            <div className="eyebrow mono brass">WHAT WE RUN</div>
            <h2>Everything that feeds the calendar. Nothing that doesn&apos;t.</h2>
            <p className="sec-lede">One focus, {niche.noun}. One deliverable, a shown appointment. These are the six pieces we stack to get there.</p>
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
            <div className="eyebrow mono brass">THE MODEL</div>
            <h2>The risk sits with us. On purpose.</h2>
            <p className="sec-lede">Most agencies get paid whether your phone rings or not. We built the opposite incentive.</p>
          </Reveal>
          <div className="pillar-grid">
            {APPT_PILLARS.map((p, i) => (
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

      <ReviewsSection eyebrow="REAL OPERATORS. REAL BOOKED CALENDARS." heading={`What ${niche.plural} say.`} />

      <section className="section model">
        <div className="wrap faq-wrap">
          <Reveal className="sec-head"><div className="eyebrow mono brass">FREQUENTLY ASKED</div><h2>Questions {niche.plural} ask before signing.</h2></Reveal>
          <FaqList items={nicheFaq(niche)} />
        </div>
      </section>

      <FinalCTA h={`Ready to fill your calendar with ${niche.noun} appointments?`}
        sub="Territories are exclusive. One quick call confirms whether your market is still open and what a shown appointment is worth in your area."
        href="/contact?type=appointments" cta="Secure Your Market" />
    </main>
  );
}
