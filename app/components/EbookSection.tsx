"use client";

import { useState } from "react";
import EbookModal from "./EbookModal";

export default function EbookSection() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <section className="py-16 px-6" style={{ background: "#080f1d" }}>
        <div
          className="max-w-3xl mx-auto rounded-2xl px-8 py-12 text-center relative overflow-hidden"
          style={{
            background: "linear-gradient(135deg, rgba(0,212,170,0.08) 0%, rgba(0,100,80,0.10) 100%)",
            border: "1px solid rgba(0,212,170,0.20)",
          }}
        >
          {/* Glow */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{ background: "radial-gradient(ellipse at 50% 0%, rgba(0,212,170,0.12) 0%, transparent 70%)" }}
          />

          <div className="relative">
            <div className="text-5xl mb-4">📖</div>
            <div
              className="inline-block mb-4 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest"
              style={{ background: "rgba(0,212,170,0.10)", color: "#00d4aa", border: "1px solid rgba(0,212,170,0.25)" }}
            >
              Free Resource
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-white mb-3">
              Get Our Free Ebook
            </h2>
            <p className="text-sm max-w-lg mx-auto mb-8" style={{ color: "rgba(255,255,255,0.55)" }}>
              Everything you need to start your fitness journey — nutrition basics, workout principles, and the mindset shifts that actually create lasting results.
            </p>
            <button
              onClick={() => setOpen(true)}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-base cursor-pointer transition-all duration-200 hover:opacity-90"
              style={{ background: "#00d4aa", color: "#080f1d", border: "none", boxShadow: "0 0 30px rgba(0,212,170,0.30)" }}
            >
              Download Free Ebook →
            </button>
            <p className="mt-4 text-xs" style={{ color: "rgba(255,255,255,0.25)" }}>
              Free. No credit card required.
            </p>
          </div>
        </div>
      </section>

      <EbookModal open={open} onClose={() => setOpen(false)} />
    </>
  );
}
