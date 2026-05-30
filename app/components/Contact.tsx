"use client";

import { useState } from "react";

// ── REPLACE THESE WITH YOUR REAL VALUES ──────────────────────────────────────
const WHATSAPP_NUMBER   = "919205802858";
const WHATSAPP_MESSAGE  = "Hi Prateek, I am interested in FIXYOURBODY coaching. Can we connect?";
const ENQUIRY_FORM_URL  = "https://pbenquiryform1.vercel.app/";
const INSTAGRAM_HANDLE  = "fixyourbody__";
// ─────────────────────────────────────────────────────────────────────────────

const waLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

export default function Contact() {
  const [formOpen, setFormOpen] = useState(false);

  return (
    <>
      {/* ── Enquiry Form Modal ── */}
      {formOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
          style={{ background: "rgba(0,0,0,0.75)", backdropFilter: "blur(6px)" }}
          onClick={() => setFormOpen(false)}
        >
          <div
            className="relative w-full flex flex-col"
            style={{
              maxWidth: "680px",
              height: "85vh",
              background: "#0d1a2e",
              border: "1.5px solid rgba(0,212,170,0.30)",
              borderRadius: "20px",
              overflow: "hidden",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal header */}
            <div
              className="flex items-center justify-between px-6 py-4 flex-shrink-0"
              style={{ borderBottom: "1px solid rgba(255,255,255,0.08)" }}
            >
              <span style={{ fontSize: "15px", fontWeight: 700, color: "#ffffff" }}>
                Enquiry Form
              </span>
              <button
                onClick={() => setFormOpen(false)}
                className="flex items-center justify-center hover:opacity-70 transition-opacity"
                style={{
                  width: "32px", height: "32px",
                  borderRadius: "50%",
                  background: "rgba(255,255,255,0.08)",
                  border: "none",
                  color: "#ffffff",
                  fontSize: "18px",
                  cursor: "pointer",
                  lineHeight: 1,
                }}
              >
                ✕
              </button>
            </div>

            {/* iframe */}
            <iframe
              src={ENQUIRY_FORM_URL}
              className="flex-1 w-full"
              style={{ border: "none" }}
              title="Enquiry Form"
            />
          </div>
        </div>
      )}

    <section id="contact" className="pt-20 pb-16 px-5" style={{ background: "#0d1a2e" }}>
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <div className="text-center mb-12">
          <div
            className="inline-block mb-4"
            style={{
              padding: "4px 14px",
              borderRadius: "999px",
              border: "1px solid rgba(0,212,170,0.35)",
              background: "rgba(0,212,170,0.08)",
              color: "#00d4aa",
              fontSize: "11px",
              fontWeight: 600,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
            }}
          >
            Get In Touch
          </div>
          <h2 className="font-black text-white" style={{ fontSize: "clamp(1.8rem, 4vw, 2.6rem)" }}>
            Contact <span style={{ color: "#00d4aa" }}>Us</span>
          </h2>
          <p style={{ fontSize: "15px", color: "rgba(255,255,255,0.50)", marginTop: "10px" }}>
            Choose how you&apos;d like to connect with us.
          </p>
        </div>

        {/* 3 Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

          {/* 1 — WhatsApp */}
          <a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center text-center rounded-2xl p-8 transition-all duration-300 hover:scale-[1.02]"
            style={{
              background: "#0a1628",
              border: "1.5px solid rgba(0,212,170,0.25)",
              textDecoration: "none",
            }}
          >
            {/* WhatsApp icon */}
            <div
              className="flex items-center justify-center mb-5"
              style={{
                width: "64px",
                height: "64px",
                borderRadius: "50%",
                background: "rgba(37,211,102,0.12)",
                border: "1.5px solid rgba(37,211,102,0.3)",
              }}
            >
              <svg width="28" height="28" viewBox="0 0 24 24" fill="#25D366">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
            </div>

            <h3 className="font-bold text-white mb-2" style={{ fontSize: "17px" }}>
              Connect on WhatsApp
            </h3>
            <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.50)", lineHeight: 1.6, marginBottom: "20px" }}>
              Message Prateek directly on WhatsApp right now. Fastest way to get a response.
            </p>
            <span
              className="mt-auto font-bold"
              style={{
                background: "#25D366",
                color: "#fff",
                borderRadius: "999px",
                padding: "10px 24px",
                fontSize: "13px",
              }}
            >
              Message Us →
            </span>
          </a>

          {/* 2 — Enquiry Form */}
          <div
            className="group flex flex-col items-center text-center rounded-2xl p-8 transition-all duration-300 hover:scale-[1.02] cursor-pointer"
            style={{ background: "#0a1628", border: "1.5px solid rgba(0,212,170,0.25)" }}
            onClick={() => setFormOpen(true)}
          >
            {/* Form icon */}
            <div
              className="flex items-center justify-center mb-5"
              style={{
                width: "64px", height: "64px",
                borderRadius: "50%",
                background: "rgba(0,212,170,0.10)",
                border: "1.5px solid rgba(0,212,170,0.30)",
              }}
            >
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#00d4aa" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                <polyline points="14 2 14 8 20 8"/>
                <line x1="16" y1="13" x2="8" y2="13"/>
                <line x1="16" y1="17" x2="8" y2="17"/>
                <polyline points="10 9 9 9 8 9"/>
              </svg>
            </div>

            <h3 className="font-bold text-white mb-2" style={{ fontSize: "17px" }}>
              Fill an Enquiry Form
            </h3>
            <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.50)", lineHeight: 1.6, marginBottom: "20px" }}>
              Share your goals and current fitness level. Team will review and get back within 24 hours.
            </p>
            <span
              className="mt-auto font-bold"
              style={{
                background: "#00d4aa",
                color: "#0a0f1e",
                borderRadius: "999px",
                padding: "10px 24px",
                fontSize: "13px",
              }}
            >
              Fill Form →
            </span>
          </div>

          {/* 3 — Consultation Call */}
          <div
            className="flex flex-col items-center text-center rounded-2xl p-8 transition-all duration-300 hover:scale-[1.02] cursor-pointer"
            style={{
              background: "#0a1628",
              border: "1.5px solid rgba(0,212,170,0.25)",
            }}
            onClick={() => alert("Payment integration coming soon — ₹99 consultation call with Prateek.")}
          >
            {/* Call icon */}
            <div
              className="flex items-center justify-center mb-5"
              style={{
                width: "64px",
                height: "64px",
                borderRadius: "50%",
                background: "rgba(0,212,170,0.10)",
                border: "1.5px solid rgba(0,212,170,0.30)",
              }}
            >
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#00d4aa" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.96a16 16 0 0 0 6.13 6.13l.96-.96a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
            </div>

            <h3 className="font-bold text-white mb-2" style={{ fontSize: "17px" }}>
              Book a Consultation Call
            </h3>
            <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.50)", lineHeight: 1.6, marginBottom: "20px" }}>
              15-mins 1-on-1 call with our expert to understand your goals and map out a plan.
            </p>

            <div className="mt-auto w-full">
              <div style={{ fontSize: "11px", color: "rgba(255,255,255,0.40)", marginBottom: "8px" }}>
                One-time fee
              </div>
              <button
                className="w-full font-bold transition-opacity hover:opacity-90"
                style={{
                  background: "#00d4aa",
                  color: "#0a0f1e",
                  borderRadius: "999px",
                  padding: "10px 24px",
                  fontSize: "13px",
                  fontWeight: 700,
                  cursor: "pointer",
                }}
              >
                Book for ₹99 →
              </button>
            </div>
          </div>

          {/* 4 — Instagram DM */}
          <a
            href={`https://ig.me/m/${INSTAGRAM_HANDLE}`}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center text-center rounded-2xl p-8 transition-all duration-300 hover:scale-[1.02]"
            style={{
              background: "#0a1628",
              border: "1.5px solid rgba(0,212,170,0.25)",
              textDecoration: "none",
            }}
          >
            {/* Instagram icon */}
            <div
              className="flex items-center justify-center mb-5"
              style={{
                width: "64px",
                height: "64px",
                borderRadius: "50%",
                background: "rgba(225,48,108,0.10)",
                border: "1.5px solid rgba(225,48,108,0.30)",
              }}
            >
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="url(#igGrad)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <defs>
                  <linearGradient id="igGrad" x1="0%" y1="100%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#f09433"/>
                    <stop offset="25%" stopColor="#e6683c"/>
                    <stop offset="50%" stopColor="#dc2743"/>
                    <stop offset="75%" stopColor="#cc2366"/>
                    <stop offset="100%" stopColor="#bc1888"/>
                  </linearGradient>
                </defs>
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
              </svg>
            </div>

            <h3 className="font-bold text-white mb-2" style={{ fontSize: "17px" }}>
              DM on Instagram
            </h3>
            <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.50)", lineHeight: 1.6, marginBottom: "20px" }}>
              Slide into our DMs on Instagram. See transformations, tips, and connect directly.
            </p>
            <span
              className="mt-auto font-bold"
              style={{
                background: "linear-gradient(135deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888)",
                color: "#fff",
                borderRadius: "999px",
                padding: "10px 24px",
                fontSize: "13px",
              }}
            >
              DM Us →
            </span>
          </a>

        </div>
      </div>
    </section>
    </>
  );
}
