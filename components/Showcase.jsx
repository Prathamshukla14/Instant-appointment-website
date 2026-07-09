"use client";
import React, { useEffect, useRef, useState } from "react";
import { CalendarCheck, Clock, MapPin, User, Mail } from "lucide-react";
import { Reveal } from "./Primitives";

/* ---------- Google-calendar style booked week ---------- */
const CAL_EVENTS = [
  { d: 0, start: 9, len: 1.5, name: "Sarah M.", type: "Bathroom Remodel Estimate Visit", c: 1 },
  { d: 0, start: 14, len: 1.5, name: "James R.", type: "Full Kitchen Makeover Estimate Visit", c: 2 },
  { d: 1, start: 10, len: 1.5, name: "Maria G.", type: "Basement Finish Estimate Visit", c: 3 },
  { d: 1, start: 15, len: 1.5, name: "David K.", type: "Whole Home Remodel Consult", c: 1 },
  { d: 2, start: 11, len: 1.5, name: "Linda P.", type: "Kitchen Cabinet Refacing Estimate", c: 2 },
  { d: 3, start: 9, len: 1.5, name: "Robert T.", type: "Primary Bath Renovation Estimate", c: 3 },
  { d: 3, start: 13, len: 1.5, name: "Angela W.", type: "Home Addition Consult Visit", c: 1 },
  { d: 4, start: 10, len: 1.5, name: "Chris B.", type: "Full Kitchen Makeover Estimate Visit", c: 2 },
];
const CAL_DAYS = [
  { day: "MON", date: 9 }, { day: "TUE", date: 10 }, { day: "WED", date: 11 },
  { day: "THU", date: 12 }, { day: "FRI", date: 13 },
];
const HOURS = [8, 9, 10, 11, 12, 13, 14, 15, 16];
const fmtHour = (h) => { const hr = h % 12 === 0 ? 12 : h % 12; return `${hr} ${h < 12 ? "AM" : "PM"}`; };
const fmtTime = (h) => {
  const whole = Math.floor(h); const min = h % 1 ? "30" : "00";
  const hr = whole % 12 === 0 ? 12 : whole % 12;
  return `${hr}:${min} ${whole < 12 ? "AM" : "PM"}`;
};

export function GCal() {
  const ref = useRef(null);
  const [fill, setFill] = useState(0);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const obs = new IntersectionObserver((es) => es.forEach((e) => {
      if (e.isIntersecting) {
        if (reduce) setFill(CAL_EVENTS.length);
        else CAL_EVENTS.forEach((_, i) => setTimeout(() => setFill((f) => Math.max(f, i + 1)), 420 + i * 230));
        obs.unobserve(el);
      }
    }), { threshold: 0.3 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return (
    <div className="gcal" ref={ref}>
      <div className="gcal-bar">
        <div className="gcal-bar-l"><CalendarCheck size={15} /><span>Your Calendar</span></div>
        <span className="gcal-count mono">{fill} booked this week</span>
      </div>
      <div className="gcal-head">
        <div className="gcal-gutter-head mono">GMT-5</div>
        {CAL_DAYS.map((d) => (
          <div className="gcal-dayhead" key={d.day}>
            <span className="gcal-dayname mono">{d.day}</span>
            <span className="gcal-daynum">{d.date}</span>
          </div>
        ))}
      </div>
      <div className="gcal-body">
        <div className="gcal-gutter">
          {HOURS.map((h) => <div className="gcal-hour mono" key={h}>{fmtHour(h)}</div>)}
        </div>
        {CAL_DAYS.map((d, di) => (
          <div className="gcal-col" key={d.day}>
            {HOURS.map((h) => <div className="gcal-cell" key={h} />)}
            {CAL_EVENTS.map((ev, i) => ev.d === di ? (
              <div key={i} className={`gcal-ev c${ev.c} ${i < fill ? "on" : ""}`}
                style={{ top: `${((ev.start - 8) / 9) * 100}%`, height: `${(ev.len / 9) * 100}%` }}>
                <div className="gcal-ev-time mono">{fmtTime(ev.start)}</div>
                <div className="gcal-ev-title">{ev.name} &lt;&gt; {ev.type}</div>
              </div>
            ) : null)}
          </div>
        ))}
      </div>
    </div>
  );
}

/* ---------- SMS + email notification mockups ---------- */
export function NotifyMock() {
  return (
    <div className="notify-grid">
      <Reveal className="phone">
        <div className="phone-notch" />
        <div className="phone-head">
          <div className="phone-avatar mono">IA</div>
          <div>
            <div className="phone-name">InstantAppointment AI</div>
            <div className="phone-sub mono">Text Message</div>
          </div>
        </div>
        <div className="phone-body">
          <div className="sms-time mono">Today 2:04 PM</div>
          <div className="sms in">
            <b>New appointment booked</b><br />
            Sarah M. &lt;&gt; Bathroom Remodel Estimate Visit<br /><br />
            <span className="sms-line"><Clock size={12} /> Tue, Jul 14 at 2:00 PM</span>
            <span className="sms-line"><MapPin size={12} /> 1284 Oakwood Dr</span>
            <span className="sms-line"><User size={12} /> Homeowner, verified budget &amp; timeline</span>
          </div>
          <div className="sms in short">Added to your calendar. Reply R to reschedule.</div>
        </div>
      </Reveal>
      <Reveal className="email-card" delay={100}>
        <div className="email-top"><Mail size={15} /><span>Email Confirmation</span></div>
        <div className="email-subject">Appointment Confirmed: Sarah M. &lt;&gt; Bathroom Remodel Estimate Visit</div>
        <div className="email-meta mono">to you &middot; 2:04 PM</div>
        <div className="email-rule" />
        <div className="email-rows">
          <div><span className="mono">HOMEOWNER</span><b>Sarah M.</b></div>
          <div><span className="mono">PROJECT</span><b>Bathroom Remodel</b></div>
          <div><span className="mono">WHEN</span><b>Tue, Jul 14 &middot; 2:00 PM</b></div>
          <div><span className="mono">STATUS</span><b className="brass">Qualified &amp; Confirmed</b></div>
        </div>
        <div className="email-note">Every appointment arrives by text and email, synced straight to your calendar. You just show up.</div>
      </Reveal>
    </div>
  );
}
