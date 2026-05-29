"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const transformations = [
  {
    name: "Rahul M.",
    duration: "12 Weeks",
    result: "-18 kg",
    description: "Lost 18kg while maintaining muscle and energy for 12-hour work shifts.",
  },
  {
    name: "Sneha P.",
    duration: "16 Weeks",
    result: "-14 kg",
    description: "Postpartum fat loss journey — regained her confidence and strength.",
  },
  {
    name: "Arjun K.",
    duration: "8 Weeks",
    result: "+6 kg muscle",
    description: "Skinny-to-muscular lean bulk — first time seeing visible abs.",
  },
  {
    name: "Divya R.",
    duration: "12 Weeks",
    result: "-12 kg",
    description: "From zero gym experience to a complete body recomposition.",
  },
  {
    name: "Vikram S.",
    duration: "20 Weeks",
    result: "-22 kg",
    description: "Reversed pre-diabetes markers alongside a 22kg transformation.",
  },
  {
    name: "Priya T.",
    duration: "10 Weeks",
    result: "-10 kg",
    description: "Wedding prep transformation — achieved her dream look in 10 weeks.",
  },
];

export default function Transformations() {
  const [current, setCurrent] = useState(0);
  const visible = 3;
  const total = transformations.length;

  const prev = () => setCurrent((c) => (c - 1 + total) % total);
  const next = () => setCurrent((c) => (c + 1) % total);

  const getVisible = () => {
    const items = [];
    for (let i = 0; i < visible; i++) {
      items.push(transformations[(current + i) % total]);
    }
    return items;
  };

  return (
    <section id="transformations" className="py-24 px-6 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00C2FF]/30 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00C2FF]/30 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-3 py-1 rounded-full border border-[#00C2FF]/30 bg-[#00C2FF]/10 text-[#00C2FF] text-xs font-semibold uppercase tracking-widest mb-4">
            Real Results
          </div>
          <h2 className="text-4xl md:text-5xl font-black mb-4">
            <span className="gradient-text">Transformations</span>
            <br />
            <span className="text-white">That Speak for Themselves</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Every story is different. Every result is real. These are clients
            who committed and delivered.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {getVisible().map((t, i) => (
            <div
              key={`${t.name}-${i}`}
              className="group relative rounded-2xl border border-white/10 bg-[#0D1528] overflow-hidden hover:border-[#00C2FF]/40 transition-all duration-300"
            >
              {/* Before / After placeholder */}
              <div className="relative h-64 bg-gradient-to-br from-[#0A1A2E] to-[#0D1528] flex">
                <div className="flex-1 flex items-center justify-center border-r border-white/10">
                  <div className="text-center">
                    <div className="w-16 h-16 rounded-full bg-white/5 mx-auto mb-2 flex items-center justify-center text-2xl">
                      📸
                    </div>
                    <span className="text-xs text-gray-500 uppercase tracking-widest">Before</span>
                  </div>
                </div>
                <div className="flex-1 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 rounded-full bg-[#00C2FF]/10 mx-auto mb-2 flex items-center justify-center text-2xl">
                      💪
                    </div>
                    <span className="text-xs text-[#00C2FF] uppercase tracking-widest">After</span>
                  </div>
                </div>
                {/* Result badge */}
                <div className="absolute top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-gradient-to-r from-[#00C2FF] to-[#00E5A0] text-[#0A0F1E] text-xs font-black">
                  {t.result}
                </div>
              </div>

              {/* Info */}
              <div className="p-5">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-bold text-white">{t.name}</h3>
                  <span className="text-xs text-[#00C2FF] bg-[#00C2FF]/10 px-2 py-1 rounded-full">
                    {t.duration}
                  </span>
                </div>
                <p className="text-sm text-gray-400 leading-relaxed">{t.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-center gap-4">
          <button
            onClick={prev}
            className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-gray-400 hover:border-[#00C2FF] hover:text-[#00C2FF] transition-all"
          >
            <ChevronLeft size={18} />
          </button>
          <div className="flex gap-2">
            {Array.from({ length: total }).map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-2 h-2 rounded-full transition-all ${
                  i === current
                    ? "bg-[#00C2FF] w-6"
                    : "bg-white/20 hover:bg-white/40"
                }`}
              />
            ))}
          </div>
          <button
            onClick={next}
            className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-gray-400 hover:border-[#00C2FF] hover:text-[#00C2FF] transition-all"
          >
            <ChevronRight size={18} />
          </button>
        </div>

        {/* CTA note */}
        <p className="text-center text-sm text-gray-500 mt-8">
          📸 Add real before/after photos to replace the placeholders above
        </p>
      </div>
    </section>
  );
}
