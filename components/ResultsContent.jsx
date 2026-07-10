"use client";
import React, { useEffect, useState } from "react";
import { X, PlayCircle, ChevronLeft, ChevronRight } from "lucide-react";
import { Reveal } from "./Primitives";
import { FinalCTA } from "./Layout";
import { VIDEOS, REVIEWS } from "@/lib/content";

function VideoLightbox({ video, onClose }) {
  useEffect(() => {
    if (!video) return;
    const onKey = (e) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => { document.removeEventListener("keydown", onKey); document.body.style.overflow = prev; };
  }, [video, onClose]);
  if (!video) return null;
  return (
    <div className="vb-bg" onClick={onClose}>
      <div className="vb-inner" onClick={(e) => e.stopPropagation()}>
        <button className="vb-close" aria-label="Close" onClick={onClose}><X size={22} /></button>
        <div className="vb-frame">
          {video.embed ? (
            <iframe
              src={video.embed}
              title={video.company}
              frameBorder="0"
              allow="autoplay"
              allowFullScreen
              style={{ width: "100%", height: "100%", border: "none" }}
            />
          ) : (
            <div className="vb-placeholder">
              <PlayCircle size={54} />
              <p>Video goes here</p>
            </div>
          )}
        </div>
        <div className="vb-cap"><b>{video.name}</b><span className="mono"> {video.company}</span></div>
      </div>
    </div>
  );
}

function VideoCarousel() {
  const [playing, setPlaying] = useState(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const scrollRef = React.useRef(null);

  const updateScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  useEffect(() => {
    updateScroll();
    const el = scrollRef.current;
    if (el) el.addEventListener("scroll", updateScroll);
    return () => el?.removeEventListener("scroll", updateScroll);
  }, []);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 340;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <div className="carousel-wrap">
        {canScrollLeft && (
          <button className="carousel-nav carousel-nav-left" onClick={() => scroll("left")} aria-label="Previous">
            <ChevronLeft size={24} />
          </button>
        )}
        <div className="carousel-container" ref={scrollRef}>
          {VIDEOS.map((v, i) => (
            <Reveal key={i} className="carousel-card" delay={i * 50}>
              <div className="vid-thumb" onClick={() => setPlaying(v)}>
                {v.poster ? (
                  <img src={v.poster} alt={v.name} className="vid-thumb-img" />
                ) : (
                  <div className="vid-thumb-ph mono">TESTIMONIAL</div>
                )}
                <div className="vid-thumb-overlay" />
                <button className="vid-play" aria-label="Play testimonial" onClick={() => setPlaying(v)}>
                  <PlayCircle size={54} />
                </button>
                <span className="vid-badge mono">VIDEO</span>
                {v.result && <span className="vid-result">{v.result}</span>}
              </div>
              <div className="vid-info">
                <div className="vid-name">{v.name}</div>
                <div className="vid-co mono">{v.company} • {v.tag}</div>
              </div>
            </Reveal>
          ))}
        </div>
        {canScrollRight && (
          <button className="carousel-nav carousel-nav-right" onClick={() => scroll("right")} aria-label="Next">
            <ChevronRight size={24} />
          </button>
        )}
      </div>
      <VideoLightbox video={playing} onClose={() => setPlaying(null)} />
    </>
  );
}

export default function ResultsContent() {
  return (
    <>
      <section className="section" style={{ paddingTop: 20 }}>
        <div className="wrap">
          <div className="results-stats">
            <div className="rstat"><div className="rstat-num">5,000+</div><div className="rstat-label mono">appointments booked</div></div>
            <div className="rstat"><div className="rstat-num">1</div><div className="rstat-label mono">contractor per market</div></div>
            <div className="rstat"><div className="rstat-num">$0</div><div className="rstat-label mono">paid until they show</div></div>
            <div className="rstat"><div className="rstat-num">&lt;5<span>min</span></div><div className="rstat-label mono">speed to lead</div></div>
          </div>
        </div>
      </section>

      <section className="section vid-sec" style={{ paddingTop: 20 }}>
        <div className="wrap">
          <Reveal className="sec-head">
            <div className="eyebrow mono brass">IN THEIR OWN WORDS</div>
            <h2>Video testimonials from our clients.</h2>
            <p className="sec-lede">Watch how contractors like you filled their calendars with qualified appointments.</p>
          </Reveal>
          <VideoCarousel />
        </div>
      </section>

      <section className="section model">
        <div className="wrap">
          <Reveal className="sec-head">
            <div className="eyebrow mono brass">WRITTEN REVIEWS</div>
            <h2>More from remodelers we work with.</h2>
          </Reveal>
          <div className="tst-grid">
            {REVIEWS.map((r, i) => (
            <a
              key={i}
              href="https://www.trustpilot.com/review/instantappointment-ai.com"
                target="_blank"
                rel="noopener noreferrer"
                className="tst-card-link"
              >
                <Reveal className="tst-card" delay={(i % 3) * 60}>
                  <div className="tst-stars">{"\u2605\u2605\u2605\u2605\u2605"}</div>
                  <p className="tst-quote">&ldquo;{r.quote}&rdquo;</p>
                  <div className="tst-meta">
                    <div className="tst-avatar mono">
                      {r.logo ? <img src={r.logo} alt={r.company} className="tst-avatar-img" /> : "CL"}
                    </div>
                    <div>
                      <div className="tst-name">{r.name}</div>
                      <div className="tst-co mono">{r.company} &middot; {r.tag}</div>
                    </div>
                  </div>
                </Reveal>
                </a>
            ))}
          </div>
        </div>
      </section>

      <FinalCTA h="Want to be the next name on this page?" />
    </>
  );
}