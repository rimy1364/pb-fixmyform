"use client";

import { useState } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    name: "Rohan Gupta",
    role: "Software Engineer, Bangalore",
    text: "I'd tried gym for 2 years with zero progress. Prateek fixed my fundamentals in week one. By week 12, I was unrecognisable. Best investment I've ever made.",
    stars: 5,
    result: "-16 kg in 12 weeks",
  },
  {
    name: "Ananya Sharma",
    role: "Marketing Manager, Delhi",
    text: "The nutrition plan was so practical — I never felt like I was on a diet. Prateek's WhatsApp check-ins kept me accountable through the toughest weeks.",
    stars: 5,
    result: "-11 kg in 10 weeks",
  },
  {
    name: "Karthik R.",
    role: "Entrepreneur, Mumbai",
    text: "With a 70-hour work week, I thought fitness was impossible. Prateek proved me wrong. His approach fit around my crazy schedule perfectly.",
    stars: 5,
    result: "-20 kg in 16 weeks",
  },
  {
    name: "Meera Joshi",
    role: "Doctor, Pune",
    text: "As a doctor I was sceptical of online coaching. Prateek's evidence-based approach won me over. My bloodwork improved alongside the physical transformation.",
    stars: 5,
    result: "-9 kg in 8 weeks",
  },
  {
    name: "Aditya Verma",
    role: "CA, Hyderabad",
    text: "I went from barely doing 5 pushups to benching 80kg in 6 months. FIXYOURBODY is not just a programme — it's a complete mindset shift.",
    stars: 5,
    result: "+8 kg muscle",
  },
  {
    name: "Sunita Patel",
    role: "Teacher, Ahmedabad",
    text: "Post-pregnancy I felt lost. Prateek built a plan that respected my recovery and delivered results I didn't think were possible for me.",
    stars: 5,
    result: "-14 kg in 14 weeks",
  },
];

const VISIBLE = 2;
const TOTAL = testimonials.length;

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c - 1 + TOTAL) % TOTAL);
  const next = () => setCurrent((c) => (c + 1) % TOTAL);

  const getVisible = () =>
    Array.from({ length: VISIBLE }, (_, i) => testimonials[(current + i) % TOTAL]);

  return (
    <section id="testimonials" className="pt-20 pb-16 px-5 relative overflow-hidden">
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

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-8">
          {getVisible().map((t, i) => (
            <div
              key={`${t.name}-${i}`}
              className="rounded-2xl p-6 flex flex-col transition-all duration-300"
              style={{
                background: "#0D1528",
                border: "1px solid rgba(255,255,255,0.10)",
              }}
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.stars }).map((_, s) => (
                  <Star key={s} size={14} className="fill-[#FFB800] text-[#FFB800]" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-sm leading-relaxed mb-5 flex-1" style={{ color: "rgba(255,255,255,0.75)" }}>
                &ldquo;{t.text}&rdquo;
              </p>

              {/* Footer */}
              <div className="flex items-center justify-between pt-4" style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}>
                <div>
                  <div className="font-bold text-white text-sm">{t.name}</div>
                  <div className="text-xs mt-0.5" style={{ color: "rgba(255,255,255,0.40)" }}>{t.role}</div>
                </div>
                <div
                  className="text-xs font-bold px-2 py-1 rounded-full"
                  style={{ color: "#00d4aa", background: "rgba(0,212,170,0.10)", whiteSpace: "nowrap" }}
                >
                  {t.result}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Controls — matching Transformations style */}
        <div className="flex items-center justify-center gap-4">
          <button
            onClick={prev}
            className="flex items-center justify-center transition-all"
            style={{
              width: "40px", height: "40px",
              borderRadius: "50%",
              border: "1px solid rgba(255,255,255,0.20)",
              color: "rgba(255,255,255,0.50)",
              background: "transparent",
              cursor: "pointer",
            }}
            onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.borderColor = "#00d4aa"; (e.currentTarget as HTMLButtonElement).style.color = "#00d4aa"; }}
            onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.borderColor = "rgba(255,255,255,0.20)"; (e.currentTarget as HTMLButtonElement).style.color = "rgba(255,255,255,0.50)"; }}
          >
            <ChevronLeft size={16} />
          </button>

          {/* Dots */}
          <div className="flex gap-2">
            {Array.from({ length: TOTAL }).map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
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

          <button
            onClick={next}
            className="flex items-center justify-center transition-all"
            style={{
              width: "40px", height: "40px",
              borderRadius: "50%",
              border: "1px solid rgba(255,255,255,0.20)",
              color: "rgba(255,255,255,0.50)",
              background: "transparent",
              cursor: "pointer",
            }}
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
