"use client";

import { useState, useRef } from "react";
import Image from "next/image";

const transformations = [
  { name: "Rachit",         occupation: "Software Engineer", duration: "32 Weeks", result: "-22 kg", weightBefore: "88 kg", weightAfter: "66 kg",  image: "/transformation/result8.jpeg" },
  { name: "Sourabh",        occupation: "Fitness Coach",        duration: "6 Weeks", result: "-7 kg", weightBefore: "71 kg", weightAfter: "64 kg",  image: "/transformation/Sourabh.jpeg" },
  { name: "Gulshan Kumar",  occupation: "Businessman",       duration: "28 Weeks", result: "-19 kg", weightBefore: "87 kg", weightAfter: "68 kg",  image: "/transformation/result7.jpeg" },
  { name: "Deep Chheda",    occupation: "Software Engineer", duration: "80 Weeks", result: "-49 kg", weightBefore: "134 kg", weightAfter: "85 kg",  image: "/transformation/result2.jpeg" },
  { name: "Anupam Tiwari",  occupation: "Veterinarian",      duration: "32 Weeks",  result: "-11 kg",  weightBefore: "70 kg", weightAfter: "59 kg",  image: "/transformation/result3.jpeg" },
  { name: "Nikhil John",    occupation: "Armed Forces",      duration: "36 Weeks", result: "-10 kg", weightBefore: "73 kg", weightAfter: "63 kg",  image: "/transformation/result4.jpeg" },
  { name: "Sameer Kapoor",  occupation: "Businessman",       duration: "28 Weeks", result: "-18 kg", weightBefore: "97 kg", weightAfter: "79 kg",  image: "/transformation/result5.jpeg" },
  { name: "CharanDeep Singh", occupation: "CNC Programmer",         duration: "44 Weeks", result: "-16 kg", weightBefore: "84 kg", weightAfter: "68 kg",  image: "/transformation/result6.jpeg" },
  { name: "Mandeep Singh",  occupation: "Security Manager",  duration: "32 Weeks", result: "-17 kg", weightBefore: "119 kg", weightAfter: "102 kg",  image: "/transformation/result1.jpeg" },
];

const TOTAL = transformations.length;

export default function Transformations() {
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

  return (
    <section id="transformations" className="pt-20 pb-14 px-2 relative overflow-hidden" style={{ background: "#0d1a2e" }}>
      <style>{`
        @keyframes slideInRight { from { transform: translateX(100%) scale(0.96); } to { transform: translateX(0) scale(1); } }
        @keyframes slideInLeft  { from { transform: translateX(-100%) scale(0.96); } to { transform: translateX(0) scale(1); } }
      `}</style>
      {/* Top/bottom divider lines */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px" style={{ background: "linear-gradient(to right, transparent, rgba(0,212,170,0.25), transparent)" }} />
        <div className="absolute bottom-0 left-0 right-0 h-px" style={{ background: "linear-gradient(to right, transparent, rgba(0,212,170,0.25), transparent)" }} />
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div
            className="inline-block mb-3"
            style={{
              padding: "4px 14px", borderRadius: "999px",
              border: "1px solid rgba(0,212,170,0.30)",
              background: "rgba(0,212,170,0.08)",
              color: "#00d4aa", fontSize: "11px", fontWeight: 600,
              letterSpacing: "0.12em", textTransform: "uppercase",
            }}
          >
            Real Results
          </div>
          <h2 className="text-3xl md:text-4xl font-black mb-2">
            <span style={{ color: "#00d4aa" }}>Transformations </span>
            <span className="text-white">That Speak for Themselves</span>
          </h2>
          <p className="text-sm max-w-xl mx-auto" style={{ color: "rgba(255,255,255,0.50)" }}>
            Every story is different. Every result is real. These are clients who committed and delivered.
          </p>
        </div>

        {/* Cards */}
        <div className="flex justify-center mb-6">
          <div className="w-full max-w-md overflow-hidden">
          {(() => { const t = transformations[current]; return (
            <div
              key={animKey}
              className="relative rounded-2xl overflow-hidden"
              style={{ background: "#0a1628", border: "1px solid rgba(255,255,255,0.08)", animation: `${slideFrom === "right" ? "slideInRight" : "slideInLeft"} 0.35s ease` }}
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
            >
              {/* Image area — flush to card edges horizontally */}
              <div className="relative overflow-hidden" style={{ background: "#080f1d", aspectRatio: "2 / 3" }}>
                {t.image ? (
                  <Image src={t.image} alt={`${t.name} transformation`} fill className="object-cover" sizes="(max-width: 768px) 100vw, 448px" priority={false} />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center gap-2">
                    <div className="flex gap-6">
                      <div className="text-center">
                        <div className="w-12 h-12 rounded-full mx-auto mb-1 flex items-center justify-center text-xl" style={{ background: "rgba(255,255,255,0.04)" }}>📸</div>
                        <span className="text-xs uppercase tracking-widest" style={{ color: "rgba(255,255,255,0.30)" }}>Before</span>
                      </div>
                      <div className="text-center">
                        <div className="w-12 h-12 rounded-full mx-auto mb-1 flex items-center justify-center text-xl" style={{ background: "rgba(0,212,170,0.08)" }}>💪</div>
                        <span className="text-xs uppercase tracking-widest" style={{ color: "#00d4aa" }}>After</span>
                      </div>
                    </div>
                  </div>
                )}

                {/* Result badge */}
                <div
                  className="absolute top-4 right-4 px-4 py-1.5 rounded-full text-xs font-black whitespace-nowrap"
                  style={{ background: "#00d4aa", color: "#080f1d" }}
                >
                  {t.result}
                </div>

                {/* Floating weight pills at bottom */}
                {(t.weightBefore || t.weightAfter) && (
                  <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-3 px-4">
                    {t.weightBefore && (
                      <div
                        className="px-4 py-2 rounded-full text-xs font-bold"
                        style={{ background: "rgba(0,0,0,0.65)", backdropFilter: "blur(8px)", border: "1px solid rgba(255,255,255,0.15)", color: "rgba(255,255,255,0.85)" }}
                      >
                        {t.weightBefore}
                      </div>
                    )}
                    {t.weightAfter && (
                      <div
                        className="px-4 py-2 rounded-full text-xs font-bold"
                        style={{ background: "rgba(0,212,170,0.20)", backdropFilter: "blur(8px)", border: "1px solid rgba(0,212,170,0.50)", color: "#00d4aa" }}
                      >
                        {t.weightAfter}
                      </div>
                    )}
                  </div>
                )}
              </div>

              {/* Info */}
              <div className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-bold text-white text-sm">{t.name}</h3>
                    <p className="text-xs mt-0.5" style={{ color: "rgba(255,255,255,0.40)" }}>{t.occupation}</p>
                  </div>
                  <span
                    className="text-xs px-2 py-0.5 rounded-full"
                    style={{ color: "#00d4aa", background: "rgba(0,212,170,0.10)" }}
                  >
                    {t.duration}
                  </span>
                </div>
              </div>
            </div>
          ); })()}
          </div>
        </div>

        {/* Dots */}
        <div className="flex items-center justify-center gap-2">
          {Array.from({ length: TOTAL }).map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className="rounded-full transition-all duration-300"
              style={{
                height: "8px", width: i === current ? "24px" : "8px",
                background: i === current ? "#00d4aa" : "rgba(255,255,255,0.20)",
                border: "none", cursor: "pointer", padding: 0,
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
