"use client";

import { useState, useEffect } from "react";

const CALENDLY_URL = "https://calendly.com/bnsl-prateek/30min";

export default function CalendlyModal() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handler = () => setOpen(true);
    window.addEventListener("open-calendly", handler);
    return () => window.removeEventListener("open-calendly", handler);
  }, []);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ background: "rgba(0,0,0,0.75)", backdropFilter: "blur(4px)" }}
      onClick={() => setOpen(false)}
    >
      <div
        className="relative w-full rounded-2xl overflow-hidden"
        style={{ maxWidth: "480px", height: "700px", background: "#fff" }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={() => setOpen(false)}
          className="absolute top-3 right-3 z-10 flex items-center justify-center rounded-full"
          style={{ width: "32px", height: "32px", background: "rgba(0,0,0,0.10)", border: "none", cursor: "pointer", fontSize: "18px", color: "#333" }}
        >
          ×
        </button>
        <iframe
          src={`${CALENDLY_URL}?hide_gdpr_banner=1`}
          width="100%"
          height="100%"
          frameBorder="0"
          title="Book a call"
        />
      </div>
    </div>
  );
}
