"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const transformations = [
  { name: "Client",    duration: "12 Weeks", result: "-18 kg",       description: "Lost 18kg while maintaining muscle and energy for 12-hour work shifts.", image: "/transform1.jpg" },
  { name: "Sneha P.",  duration: "16 Weeks", result: "-14 kg",       description: "Postpartum fat loss journey — regained her confidence and strength.",    image: null },
  { name: "Arjun K.",  duration: "8 Weeks",  result: "+6 kg muscle", description: "Skinny-to-muscular lean bulk — first time seeing visible abs.",           image: null },
  { name: "Divya R.",  duration: "12 Weeks", result: "-12 kg",       description: "From zero gym experience to a complete body recomposition.",               image: null },
  { name: "Vikram S.", duration: "20 Weeks", result: "-22 kg",       description: "Reversed pre-diabetes markers alongside a 22kg transformation.",           image: null },
  { name: "Priya T.",  duration: "10 Weeks", result: "-10 kg",       description: "Wedding prep transformation — achieved her dream look in 10 weeks.",       image: null },
];

const VISIBLE = 2;
const TOTAL   = transformations.length;

export default function Transformations() {
  const [current, setCurrent] = useState(0);
  const prev = () => setCurrent((c) => (c - 1 + TOTAL) % TOTAL);
  const next = () => setCurrent((c) => (c + 1) % TOTAL);
  const getVisible = () => Array.from({ length: VISIBLE }, (_, i) => transformations[(current + i) % TOTAL]);

  return (
    <section id="transformations" className="pt-20 pb-14 px-6 relative overflow-hidden" style={{ background: "#0d1a2e" }}>
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6">
          {getVisible().map((t, i) => (
            <div
              key={`${t.name}-${i}`}
              className="relative rounded-2xl overflow-hidden transition-all duration-300"
              style={{ background: "#0a1628", border: "1px solid rgba(255,255,255,0.08)" }}
            >
              {/* Image area */}
              <div className="relative overflow-hidden" style={{ background: "#080f1d", height: "420px" }}>
                {t.image ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={t.image} alt="Transformation" className="w-full h-full object-contain" />
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
              </div>

              {/* Info */}
              <div className="p-4">
                <div className="flex items-center justify-between mb-1.5">
                  <h3 className="font-bold text-white text-sm">{t.name}</h3>
                  <span
                    className="text-xs px-2 py-0.5 rounded-full"
                    style={{ color: "#00d4aa", background: "rgba(0,212,170,0.10)" }}
                  >
                    {t.duration}
                  </span>
                </div>
                <p className="text-xs leading-relaxed" style={{ color: "rgba(255,255,255,0.50)" }}>{t.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-center gap-4">
          <button
            onClick={prev}
            className="w-9 h-9 rounded-full flex items-center justify-center transition-all"
            style={{ border: "1px solid rgba(255,255,255,0.20)", color: "rgba(255,255,255,0.50)", background: "transparent", cursor: "pointer" }}
            onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.borderColor = "#00d4aa"; (e.currentTarget as HTMLButtonElement).style.color = "#00d4aa"; }}
            onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.borderColor = "rgba(255,255,255,0.20)"; (e.currentTarget as HTMLButtonElement).style.color = "rgba(255,255,255,0.50)"; }}
          >
            <ChevronLeft size={16} />
          </button>
          <div className="flex gap-2">
            {Array.from({ length: TOTAL }).map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className="rounded-full transition-all duration-300"
                style={{
                  height: "8px", width: i === current ? "24px" : "8px",
                  background: i === current ? "#00d4aa" : "rgba(255,255,255,0.20)",
                  border: "none", cursor: "pointer", padding: 0,
                }}
              />
            ))}
          </div>
          <button
            onClick={next}
            className="w-9 h-9 rounded-full flex items-center justify-center transition-all"
            style={{ border: "1px solid rgba(255,255,255,0.20)", color: "rgba(255,255,255,0.50)", background: "transparent", cursor: "pointer" }}
            onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.borderColor = "#00d4aa"; (e.currentTarget as HTMLButtonElement).style.color = "#00d4aa"; }}
            onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.borderColor = "rgba(255,255,255,0.20)"; (e.currentTarget as HTMLButtonElement).style.color = "rgba(255,255,255,0.50)"; }}
          >
            <ChevronRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
}
