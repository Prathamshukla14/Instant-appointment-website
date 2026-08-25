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
  const [tab, setTab] = useState(defaultType === "appointments" ? "appointments" : "leads");
  const cal = CALENDARS[tab];
  return (
    <div className="cal-wrap">
      <div className="cal-tabs" role="tablist">
        <button
          role="tab"
          aria-selected={tab === "leads"}
          className={`cal-tab ${tab === "leads" ? "on" : ""}`}
          onClick={() => setTab("leads")}
        >
          <CalendarClock size={17} /> Exclusive Leads
        </button>
        <button
          role="tab"
          aria-selected={tab === "appointments"}
          className={`cal-tab ${tab === "appointments" ? "on" : ""}`}
          onClick={() => setTab("appointments")}
        >
          <CalendarCheck size={17} /> Remodeling &amp; HVAC
        </button>
      </div>
      <p className="cal-sub mono">{cal.sub}</p>
      <div className="calendar-embed">
        <iframe
          key={tab}
          src={cal.src}
          allow={cal.allow}
          style={{ width: "100%", border: "none", overflow: "hidden", minHeight: "700px" }}
          scrolling="no"
          id={cal.id}
          title={cal.title}
        />
      </div>
      <Script src="https://link.msgsndr.com/js/form_embed.js" strategy="afterInteractive" />
    </div>
  );
}
