"use client";

import { useState, useRef } from "react";

const testimonials = [
  { chatImage: "/testimonials/chat1.jpeg" },
  { chatImage: "/testimonials/chat2.jpeg" },
  { chatImage: "/testimonials/chat3.jpeg" },
  { chatImage: "/testimonials/chat4.jpeg" },
];

const TOTAL = testimonials.length;

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [animKey, setAnimKey] = useState(0);
  const [slideFrom, setSlideFrom] = useState<"right" | "left">("right");

  const prev = () => { setSlideFrom("left"); setCurrent((c) => (c - 1 + TOTAL) % TOTAL); setAnimKey((k) => k + 1); };
  const next = () => { setSlideFrom("right"); setCurrent((c) => (c + 1) % TOTAL); setAnimKey((k) => k + 1); };
  const goTo = (i: number) => { setSlideFrom(i > current ? "right" : "left"); setCurrent(i); setAnimKey((k) => k + 1); };

  const touchStartX = useRef<number | null>(null);
  const handleTouchStart = (e: React.TouchEvent) => { touchStartX.current = e.touches[0].clientX; };
  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (diff > 50) next();
    else if (diff < -50) prev();
    touchStartX.current = null;
  };

  const t = testimonials[current];

  return (
    <section id="testimonials" className="pt-20 pb-16 px-5 relative overflow-hidden">
      <style>{`
        @keyframes slideInRight { from { transform: translateX(100%); opacity: 0; } to { transform: translateX(0); opacity: 1; } }
        @keyframes slideInLeft  { from { transform: translateX(-100%); opacity: 0; } to { transform: translateX(0); opacity: 1; } }
      `}</style>
      {/* Top divider line */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00d4aa]/30 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div
            className="inline-block mb-3"
            style={{
              padding: "4px 14px",
              borderRadius: "999px",
              border: "1px solid rgba(0,212,170,0.30)",
              background: "rgba(0,212,170,0.08)",
              color: "#00d4aa",
              fontSize: "11px",
              fontWeight: 600,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
            }}
          >
            Testimonials
          </div>
          <h2 className="text-3xl sm:text-4xl font-black mb-2">
            <span className="text-white">What Clients </span>
            <span style={{ color: "#00d4aa" }}>Are Saying</span>
          </h2>
          <p className="text-sm max-w-xl mx-auto" style={{ color: "rgba(255,255,255,0.50)" }}>
            Don&apos;t take our word for it — hear from people who made the leap.
          </p>
        </div>

        {/* Card */}
        <div className="flex justify-center mb-8">
          <div className="w-full max-w-md overflow-hidden" onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}>
            <div key={animKey} style={{ animation: `${slideFrom === "right" ? "slideInRight" : "slideInLeft"} 0.35s ease` }}>
            <div className="rounded-2xl overflow-hidden" style={{ border: "1px solid rgba(255,255,255,0.10)" }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={t.chatImage} alt="Testimonial chat" className="w-full" style={{ display: "block" }} />
            </div>
          </div></div>
        </div>

        {/* Dots */}
        <div className="flex items-center justify-center gap-2">
          {Array.from({ length: TOTAL }).map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className="transition-all duration-300 rounded-full"
              style={{
                height: "8px",
                width: i === current ? "24px" : "8px",
                background: i === current ? "#00d4aa" : "rgba(255,255,255,0.20)",
                border: "none",
                cursor: "pointer",
                padding: 0,
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
