"use client";
import React, { useEffect, useRef } from "react";
import Link from "next/link";

export function useReveal() {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      el.classList.add("is-in");
      return;
    }
    const obs = new IntersectionObserver(
      (es) => es.forEach((e) => {
        if (e.isIntersecting) { el.classList.add("is-in"); obs.unobserve(el); }
      }),
      { threshold: 0.14 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return ref;
}

export function Reveal({ children, className = "", delay = 0, as = "div", style }) {
  const ref = useReveal();
  const Tag = as;
  return (
    <Tag ref={ref} className={`reveal ${className}`} style={{ transitionDelay: `${delay}ms`, ...(style || {}) }}>
      {children}
    </Tag>
  );
}

export function Logo({ size = 33 }) {
  return (
    <Link href="/" className="logo" aria-label="InstantAppointment AI home">
      <svg viewBox="0 0 40 40" width={size} height={size} className="logo-mark" aria-hidden="true">
        <defs>
          <linearGradient id="lg" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#1A1F27" /><stop offset="1" stopColor="#0D1015" /></linearGradient>
          <linearGradient id="lb" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#E6CE9E" /><stop offset="1" stopColor="#C6A667" /></linearGradient>
        </defs>
        <rect x="0.5" y="0.5" width="39" height="39" rx="9.4" fill="url(#lg)" />
        <rect x="3.2" y="3.2" width="33.6" height="33.6" rx="7" fill="none" stroke="#C6A667" strokeWidth="0.9" opacity="0.5" />
        <g stroke="url(#lb)" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" fill="none">
          <line x1="15.8" y1="13.4" x2="15.8" y2="26.6" />
          <line x1="20.8" y1="26.6" x2="23.7" y2="13.4" />
          <line x1="23.7" y1="13.4" x2="26.6" y2="26.6" />
          <line x1="21.7" y1="22.6" x2="25.7" y2="22.6" />
        </g>
      </svg>
      <span className="logo-word">InstantAppointment<span className="logo-ai">AI</span></span>
    </Link>
  );
}

export function SocialIcons({ className = "" }) {
  return (
    <div className={`socials ${className}`}>
      <a href="https://www.linkedin.com/company/instantestimate-ai/" aria-label="LinkedIn" title="LinkedIn" target="_blank" rel="noopener noreferrer">
        <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45z" /></svg>
      </a>
      <a href="https://www.instagram.com/instantappointment_ai/" aria-label="Instagram" title="Instagram" target="_blank" rel="noopener noreferrer">
        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.2" cy="6.8" r="1.1" fill="currentColor" stroke="none" /></svg>
      </a>
      <a href="https://www.trustpilot.com/review/instantappointment-ai.com" aria-label="Trustpilot" title="Trustpilot" target="_blank" rel="noopener noreferrer">
        <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M12 2l2.94 6.26L21.5 9.2l-4.75 4.4L17.9 20 12 16.6 6.1 20l1.15-6.4L2.5 9.2l6.56-.94L12 2z" /></svg>
      </a>
    </div>
  );
}
