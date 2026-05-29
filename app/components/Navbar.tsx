"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { label: "About", href: "#about" },
  { label: "Transformations", href: "#transformations" },
  { label: "Plans", href: "#plans" },
  { label: "Testimonials", href: "#testimonials" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0A0F1E]/95 backdrop-blur-md border-b border-white/10 shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <span className="text-xl font-black tracking-widest">
            <span className="gradient-text">FIX</span>
            <span className="text-white">YOUR</span>
            <span className="gradient-text">BODY</span>
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-white transition-colors relative group"
            >
              {l.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#00C2FF] group-hover:w-full transition-all duration-300 rounded-full" />
            </a>
          ))}
        </nav>

        {/* CTA */}
        <a
          href="#plans"
          className="hidden md:block px-5 py-2 text-sm font-bold rounded-full bg-gradient-to-r from-[#00C2FF] to-[#00E5A0] text-[#0A0F1E] hover:opacity-90 transition-opacity"
        >
          Start Now
        </a>

        {/* Mobile menu button — larger tap target */}
        <button
          className="md:hidden text-white p-2 -mr-2"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-[#0A0F1E]/98 backdrop-blur-md border-b border-white/10">
          <nav className="flex flex-col gap-1 px-5 py-3">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="py-4 text-base font-medium text-white border-b border-white/5 transition-colors active:text-[#00C2FF]"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#plans"
              onClick={() => setOpen(false)}
              className="mt-4 py-3 text-center text-sm font-bold rounded-full bg-gradient-to-r from-[#00C2FF] to-[#00E5A0] text-[#0A0F1E]"
            >
              Start Now
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
