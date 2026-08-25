"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Logo, SocialIcons } from "./Primitives";

const NAV_LINKS = [
  { href: "/services", label: "What We Run" },
  { href: "/industries", label: "Industries" },
  { href: "/how-it-works", label: "How It Works" },
  { href: "/results", label: "Results" },
  { href: "/blog", label: "Blog" },
  { href: "/about", label: "About" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 20);
    on();
    window.addEventListener("scroll", on);
    return () => window.removeEventListener("scroll", on);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      <header className={`nav ${scrolled ? "nav-solid" : ""}`}>
        <div className="wrap nav-inner">
          <Logo />
          <nav className="nav-links">
            {NAV_LINKS.map((l) => <Link key={l.href} href={l.href}>{l.label}</Link>)}
          </nav>
          <div className="nav-right">
            <Link href="/contact" className="btn btn-brass nav-cta">Book a Growth Call</Link>
            <button className="burger" aria-label="Open menu" onClick={() => setOpen(true)}><Menu size={24} /></button>
          </div>
        </div>
      </header>

      <div className={`drawer-bg ${open ? "show" : ""}`} onClick={() => setOpen(false)} />
      <aside className={`drawer ${open ? "show" : ""}`} aria-hidden={!open}>
        <div className="drawer-top">
          <Logo size={28} />
          <button className="burger" aria-label="Close menu" onClick={() => setOpen(false)}><X size={24} /></button>
        </div>
        <nav className="drawer-links" onClick={() => setOpen(false)}>
          <Link href="/">Home</Link>
          {NAV_LINKS.map((l) => <Link key={l.href} href={l.href}>{l.label}</Link>)}
          <Link href="/contact">Contact Us</Link>
        </nav>
        <Link href="/contact" className="btn btn-brass drawer-cta" onClick={() => setOpen(false)}>Book a Growth Call</Link>
        <div className="drawer-socials"><SocialIcons /></div>
      </aside>
    </>
  );
}
