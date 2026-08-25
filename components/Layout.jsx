"use client";
import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Logo, SocialIcons, Reveal } from "./Primitives";

export function Footer() {
  return (
    <footer className="footer">
      <div className="wrap footer-inner">
        <div className="footer-brand">
          <Logo />
          <div className="footer-contact">
            <p>117 S Lexington St Ste 100<br />Harrisonville, 64701<br />Missouri, United States</p>
            <p><a href="mailto:team@instantappointment-ai.com">team@instantappointment-ai.com</a></p>
            <p><a href="tel:+14694614559">+1 (469) 461-4559</a></p>
          </div>
          <SocialIcons className="footer-socials" />
        </div>
        <div className="footer-cols">
          <div>
            <div className="footer-h mono">Company</div>
            <Link href="/services">Services</Link>
            <Link href="/how-it-works">How It Works</Link>
            <Link href="/pricing">Pricing</Link>
            <Link href="/results">Results</Link>
            <Link href="/about">About</Link>
          </div>
          <div>
            <div className="footer-h mono">Top Trades</div>
            <Link href="/services/roofing">Roofing Leads</Link>
            <Link href="/services/junk-removal">Junk Removal Leads</Link>
            <Link href="/services/remodeling">Remodeling Appointments</Link>
            <Link href="/services/hvac">HVAC Appointments</Link>
            <Link href="/blog">Blog</Link>
          </div>
        </div>
      </div>
      <div className="wrap footer-bottom">
        <span>&copy; 2026 InstantAppointment AI LLC. All rights reserved.</span>
        <span className="footer-legal">
          <Link href="/contact">Contact</Link>
          <Link href="/privacy">Privacy Policy</Link>
          <Link href="/terms">Terms of Service</Link>
        </span>
      </div>
    </footer>
  );
}

export function FinalCTA({
  h = "Ready to see if your market is still open?",
  sub = "Territories are exclusive. Once a remodeler locks a market with us, we will not run a competing account next door.",
  href = "/contact",
  cta = "Book Your Growth Call",
}) {
  return (
    <section className="section final">
      <div className="glow" aria-hidden="true" />
      <div className="wrap final-inner">
        <Reveal>
          <h2 className="final-h">{h}</h2>
          <p className="final-sub">{sub}</p>
          <Link href={href} className="btn btn-brass btn-lg">{cta} <ArrowUpRight size={18} /></Link>
        </Reveal>
      </div>
    </section>
  );
}

export function PageHero({ eyebrow, title, sub }) {
  return (
    <section className="page-hero">
      <div className="grid-bg" aria-hidden="true" />
      <div className="wrap">
        <div className="eyebrow mono anim-up">{eyebrow}</div>
        <h1 className="page-h1 anim-up d1">{title}</h1>
        {sub && <p className="page-sub anim-up d2">{sub}</p>}
      </div>
    </section>
  );
}