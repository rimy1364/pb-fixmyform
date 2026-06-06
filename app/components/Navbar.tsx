"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { label: "About",           href: "#about" },
  { label: "Transformations", href: "#transformations" },
  { label: "Plans",           href: "#plans" },
  { label: "Testimonials",    href: "#testimonials" },
  { label: "Contact",         href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen]       = useState(false);
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
          ? "backdrop-blur-md border-b border-white/10 shadow-lg"
          : "bg-transparent"
      }`}
      style={scrolled ? { background: "rgba(8,15,29,0.95)" } : {}}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

        {/* Logo */}
        <a href="#" className="flex items-center">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/logo.png" alt="Fix Your Body" style={{ height: "44px", width: "44px", objectFit: "contain", borderRadius: "50%" }} />
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="relative group transition-colors"
              style={{ fontSize: "15px", fontWeight: 500, color: "#ffffff" }}
            >
              {l.label}
              <span
                className="absolute -bottom-1 left-0 w-0 h-0.5 group-hover:w-full transition-all duration-300 rounded-full"
                style={{ background: "#00d4aa" }}
              />
            </a>
          ))}
        </nav>

        {/* Contact Us CTA */}
        <a
          href="#contact"
          className="hidden md:block font-bold hover:opacity-90 transition-opacity"
          style={{
            background: "#00d4aa",
            color: "#0a0f1d",
            borderRadius: "999px",
            padding: "8px 22px",
            fontSize: "14px",
            fontWeight: 700,
          }}
        >
          Contact Us
        </a>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-white p-2 -mr-2"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div
          className="md:hidden backdrop-blur-md border-b border-white/10"
          style={{ background: "rgba(8,15,29,0.98)" }}
        >
          <nav className="flex flex-col gap-1 px-5 py-3">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="py-4 text-base font-medium text-white border-b border-white/5 transition-colors active:text-[#00d4aa]"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-4 py-3 text-center font-bold rounded-full"
              style={{ background: "#00d4aa", color: "#0a0f1d", fontSize: "14px" }}
            >
              Contact Us
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
