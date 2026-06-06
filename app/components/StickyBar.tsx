"use client";

import { useState, useEffect } from "react";

export default function StickyBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const hero = document.getElementById("about") ?? document.querySelector("section");
    const onScroll = () => {
      const threshold = hero ? hero.offsetTop - 80 : window.innerHeight;
      setVisible(window.scrollY > threshold);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <div
      className="md:hidden fixed bottom-0 left-0 right-0 flex items-center justify-between px-5"
      style={{
        height: "56px",
        background: "#0d1117",
        borderTop: "1px solid rgba(255,255,255,0.08)",
        zIndex: 50,
      }}
    >
      <span style={{ fontSize: "13px", fontWeight: 600, color: "rgba(255,255,255,0.85)" }}>
        Start Transforming — <span style={{ color: "#00d4aa" }}>₹4,999/mo</span>
      </span>
      <a
        href="#contact"
        className="font-bold transition-opacity hover:opacity-90"
        style={{
          background: "#00d4aa",
          color: "#080f1d",
          borderRadius: "999px",
          padding: "8px 20px",
          fontSize: "13px",
          fontWeight: 700,
          textDecoration: "none",
          whiteSpace: "nowrap",
        }}
      >
        Get Started
      </a>
    </div>
  );
}
