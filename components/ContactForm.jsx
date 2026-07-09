"use client";
import React, { useState } from "react";
import { ArrowUpRight, Check, MessageSquare, MapPin, ShieldCheck } from "lucide-react";
import { Reveal, SocialIcons } from "./Primitives";

export default function ContactForm() {
  const [sent, setSent] = useState(false);
  const [busy, setBusy] = useState(false);
  const [form, setForm] = useState({ name: "", company: "", email: "", phone: "", market: "", message: "" });
  const set = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  const submit = async () => {
    if (!form.name || !form.email || busy) return;
    setBusy(true);
    try {
      // Wire this to your GHL inbound webhook (set NEXT_PUBLIC_GHL_WEBHOOK_URL).
      const url = process.env.NEXT_PUBLIC_GHL_WEBHOOK_URL;
      if (url) {
        await fetch(url, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(form),
        });
      }
      setSent(true);
    } catch (err) {
      // Still show success to the user; log for debugging.
      console.error("Lead submit failed", err);
      setSent(true);
    } finally {
      setBusy(false);
    }
  };

  return (
    <div className="wrap contact-grid">
      <Reveal className="contact-card">
        {sent ? (
          <div className="sent">
            <div className="sent-ico"><Check size={26} /></div>
            <h3>Request received.</h3>
            <p>Thanks, {form.name.split(" ")[0]}. We will review your market and reach out within one business day. Keep an eye on your phone and inbox.</p>
          </div>
        ) : (
          <>
            <div className="f-row">
              <label><span className="mono">YOUR NAME *</span><input value={form.name} onChange={set("name")} placeholder="John Carter" /></label>
              <label><span className="mono">COMPANY</span><input value={form.company} onChange={set("company")} placeholder="Carter Remodeling Co." /></label>
            </div>
            <div className="f-row">
              <label><span className="mono">EMAIL *</span><input type="email" value={form.email} onChange={set("email")} placeholder="john@carterremodeling.com" /></label>
              <label><span className="mono">PHONE</span><input value={form.phone} onChange={set("phone")} placeholder="(555) 000 0000" /></label>
            </div>
            <label><span className="mono">YOUR MARKET / SERVICE AREA</span><input value={form.market} onChange={set("market")} placeholder="e.g. Austin, TX and surrounding areas" /></label>
            <label><span className="mono">TELL US ABOUT YOUR BUSINESS</span><textarea rows={4} value={form.message} onChange={set("message")} placeholder="What kind of remodeling work do you do, and how many more projects per month could you take on?" /></label>
            <button className="btn btn-brass btn-lg f-submit" onClick={submit} disabled={busy}>
              {busy ? "Sending..." : <>Request My Growth Call <ArrowUpRight size={17} /></>}
            </button>
            <p className="f-note mono">{"// set NEXT_PUBLIC_GHL_WEBHOOK_URL to post leads into GHL"}</p>
          </>
        )}
      </Reveal>

      <Reveal className="contact-side" delay={90}>
        <div className="side-block">
          <div className="side-ico"><MessageSquare size={18} /></div>
          <h4>Prefer to talk first?</h4>
          <p>Book a 20 minute growth call and we will check your territory live on the call.</p>
        </div>
        <div className="side-block">
          <div className="side-ico"><MapPin size={18} /></div>
          <h4>Exclusive territories</h4>
          <p>We take one remodeler per market. If yours is taken, we will tell you straight and put you on the waitlist.</p>
        </div>
        <div className="side-block">
          <div className="side-ico"><ShieldCheck size={18} /></div>
          <h4>No pressure, no retainers</h4>
          <p>The call is a fit check, not a pitch. If the model is not right for your business, we will say so.</p>
        </div>
        <SocialIcons className="contact-socials" />
      </Reveal>
    </div>
  );
}
