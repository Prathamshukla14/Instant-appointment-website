"use client";
import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { Reveal } from "./Primitives";
import { FAQ } from "@/lib/content";

function FaqItem({ q, a, open, onClick }) {
  return (
    <div className={`faq-item ${open ? "open" : ""}`}>
      <button className="faq-q" onClick={onClick} aria-expanded={open}>
        <span>{q}</span>
        <span className="faq-ico">{open ? <Minus size={17} /> : <Plus size={17} />}</span>
      </button>
      <div className="faq-a-wrap"><p className="faq-a">{a}</p></div>
    </div>
  );
}

export default function FaqList({ items }) {
  const [open, setOpen] = useState(0);
  const list = items && items.length ? items : FAQ;
  return (
    <div className="faq-list">
      {list.map((f, i) => (
        <Reveal delay={i * 30} key={f.q}>
          <FaqItem q={f.q} a={f.a} open={open === i} onClick={() => setOpen(open === i ? -1 : i)} />
        </Reveal>
      ))}
    </div>
  );
}
