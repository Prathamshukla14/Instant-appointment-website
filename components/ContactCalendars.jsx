"use client";
import React, { useState } from "react";
import Script from "next/script";
import { CalendarClock, CalendarCheck } from "lucide-react";

const CALENDARS = {
  leads: {
    label: "Get Exclusive Leads",
    sub: "Book a call to start your 3-day lead trial.",
    src: "https://api.leadconnectorhq.com/widget/booking/DoKQ2vC5go3qh7sUUSPQ",
    id: "DoKQ2vC5go3qh7sUUSPQ_1787682187083",
    allow: "payment",
    title: "Book an Exclusive Leads Call",
  },
  appointments: {
    label: "Book a Growth Call",
    sub: "For remodeling & HVAC — book your RemodelingPro Growth Call.",
    src: "https://api.leadconnectorhq.com/widget/booking/wa1dsl7BTyanmXxlAmLS",
    id: "wa1dsl7BTyanmXxlAmLS_1783592340398",
    allow: undefined,
    title: "Book RemodelingPro Growth Call",
  },
};

export default function ContactCalendars({ defaultType = "leads" }) {
  const initial = defaultType === "appointments" ? "appointments" : "leads";
  const [tab, setTab] = useState(initial);
  // Each iframe mounts once, on first activation, and stays mounted from then on.
  // GHL's resize script only tracks an iframe correctly from its initial load, so
  // remounting on every tab switch left the widget stuck at its starting height.
  const [mounted, setMounted] = useState({ [initial]: true });

  function selectTab(key) {
    setTab(key);
    setMounted((m) => (m[key] ? m : { ...m, [key]: true }));
  }

  return (
    <div className="cal-wrap">
      <div className="cal-tabs" role="tablist">
        <button
          role="tab"
          aria-selected={tab === "leads"}
          className={`cal-tab ${tab === "leads" ? "on" : ""}`}
          onClick={() => selectTab("leads")}
        >
          <CalendarClock size={17} /> Exclusive Leads
        </button>
        <button
          role="tab"
          aria-selected={tab === "appointments"}
          className={`cal-tab ${tab === "appointments" ? "on" : ""}`}
          onClick={() => selectTab("appointments")}
        >
          <CalendarCheck size={17} /> Remodeling &amp; HVAC
        </button>
      </div>
      <p className="cal-sub mono">{CALENDARS[tab].sub}</p>
      <div className="calendar-embed">
        {Object.entries(CALENDARS).map(([key, cal]) => (
          mounted[key] && (
            <iframe
              key={key}
              src={cal.src}
              allow={cal.allow}
              style={{ width: "100%", border: "none", minHeight: "600px", display: tab === key ? "block" : "none" }}
              scrolling="no"
              id={cal.id}
              title={cal.title}
            />
          )
        ))}
      </div>
      <Script src="https://link.msgsndr.com/js/form_embed.js" strategy="afterInteractive" />
    </div>
  );
}
