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
          <p className="footer-tag">Done for you appointment setting for remodeling contractors. You pay only when a qualified homeowner shows.</p>
          <SocialIcons className="footer-socials" />
        </div>
        <div className="footer-cols">
          <div>
            <div className="footer-h mono">Company</div>
            <Link href="/services">What We Run</Link>
            <Link href="/how-it-works">How It Works</Link>
            <Link href="/results">Results</Link>
            <Link href="/about">About</Link>
          </div>
          <div>
            <div className="footer-h mono">Resources</div>
            <Link href="/blog">Blog</Link>
            <Link href="/contact">Contact Us</Link>
            <Link href="/privacy">Privacy Policy</Link>
            <Link href="/terms">Terms of Service</Link>
          </div>
        </div>
      </div>
      <div className="wrap footer-bottom">
        <span>&copy; 2026 InstantAppointment AI LLC. All rights reserved.</span>
      </div>
    </footer>
  );
}

export function FinalCTA({
  h = "Ready to see if your market is still open?",
  sub = "Territories are exclusive. Once a remodeler locks a market with us, we will not run a competing account next door.",
}) {
  return (
    <section className="section final">
      <div className="glow" aria-hidden="true" />
      <div className="wrap final-inner">
        <Reveal>
          <h2 className="final-h">{h}</h2>
          <p className="final-sub">{sub}</p>
          <Link href="/contact" className="btn btn-brass btn-lg">Book Your Growth Call <ArrowUpRight size={18} /></Link>
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
