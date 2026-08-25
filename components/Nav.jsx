"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";
import { Logo, SocialIcons } from "./Primitives";
import { NICHES } from "@/lib/content";

const NAV_LINKS = [
  { href: "/services", label: "Services" },
  { href: "/how-it-works", label: "How It Works" },
  { href: "/pricing", label: "Pricing" },
  { href: "/results", label: "Results" },
  { href: "/blog", label: "Blog" },
  { href: "/about", label: "About" },
];

const leadNiches = NICHES.filter((n) => n.model === "lead" && n.live);
const apptNiches = NICHES.filter((n) => n.model === "appointment" && n.live);

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [ddOpen, setDdOpen] = useState(false);
  const [mNiches, setMNiches] = useState(false);

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
            <Link href="/services">Services</Link>
            <div
              className="nav-dd"
              onMouseEnter={() => setDdOpen(true)}
              onMouseLeave={() => setDdOpen(false)}
            >
              <button className="nav-dd-btn" aria-expanded={ddOpen} onClick={() => setDdOpen((v) => !v)}>
                Niches <ChevronDown size={14} className={`nav-dd-caret ${ddOpen ? "up" : ""}`} />
              </button>
              <div className={`nav-dd-menu ${ddOpen ? "show" : ""}`} onClick={() => setDdOpen(false)}>
                <div className="nav-dd-col">
                  <div className="nav-dd-h mono">Pay Per Lead</div>
                  <div className="nav-dd-grid">
                    {leadNiches.map((n) => (
                      <Link key={n.slug} href={`/services/${n.slug}`} className="nav-dd-item">
                        <n.icon size={15} /> {n.name}
                      </Link>
                    ))}
                  </div>
                </div>
                <div className="nav-dd-col">
                  <div className="nav-dd-h mono">Pay Per Shown Appointment</div>
                  <div className="nav-dd-grid">
                    {apptNiches.map((n) => (
                      <Link key={n.slug} href={`/services/${n.slug}`} className="nav-dd-item">
                        <n.icon size={15} /> {n.name}
                      </Link>
                    ))}
                  </div>
                  <Link href="/services" className="nav-dd-all">See all services &rarr;</Link>
                </div>
              </div>
            </div>
            {NAV_LINKS.filter((l) => l.href !== "/services").map((l) => <Link key={l.href} href={l.href}>{l.label}</Link>)}
          </nav>
          <div className="nav-right">
            <Link href="/contact" className="btn btn-brass nav-cta">Book a Call</Link>
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
        <nav className="drawer-links">
          <Link href="/" onClick={() => setOpen(false)}>Home</Link>
          <Link href="/services" onClick={() => setOpen(false)}>Services</Link>
          <button className="drawer-acc" onClick={() => setMNiches((v) => !v)} aria-expanded={mNiches}>
            Niches <ChevronDown size={18} className={`nav-dd-caret ${mNiches ? "up" : ""}`} />
          </button>
          {mNiches && (
            <div className="drawer-niches">
              {NICHES.filter((n) => n.live).map((n) => (
                <Link key={n.slug} href={`/services/${n.slug}`} onClick={() => setOpen(false)}>
                  <n.icon size={15} /> {n.name}
                </Link>
              ))}
            </div>
          )}
          {NAV_LINKS.filter((l) => l.href !== "/services").map((l) => (
            <Link key={l.href} href={l.href} onClick={() => setOpen(false)}>{l.label}</Link>
          ))}
          <Link href="/contact" onClick={() => setOpen(false)}>Contact Us</Link>
        </nav>
        <Link href="/contact" className="btn btn-brass drawer-cta" onClick={() => setOpen(false)}>Start a Trial</Link>
        <div className="drawer-socials"><SocialIcons /></div>
      </aside>
    </>
  );
}
