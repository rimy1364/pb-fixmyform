"use client";

const credentials = [
  "Certified Strength & Conditioning Coach",
  "Sports Nutrition Specialist",
  "5+ Years Coaching Experience",
  "500+ Successful Transformations",
];

export default function About() {
  return (
    <section id="about" className="py-20 px-5" style={{ background: "#0d1a2e" }}>
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-[45%_55%] gap-16 items-stretch">

          {/* ── PHOTO COLUMN ── */}
          <div className="relative order-2 md:order-1 flex">
            {/* Full rectangle frame */}
            <div
              className="relative w-full flex flex-col items-center justify-center"
              style={{
                background: "#0a1628",
                border: "2px solid #00d4aa",
                borderRadius: "16px",
                padding: "48px 24px 56px",
                minHeight: "380px",
              }}
            >
              {/* Avatar — centered */}
              <div
                className="flex items-center justify-center font-black mb-4"
                style={{
                  width: "96px",
                  height: "96px",
                  borderRadius: "50%",
                  background: "#00d4aa",
                  color: "#0a0f1d",
                  fontSize: "30px",
                  flexShrink: 0,
                }}
              >
                PB
              </div>

              {/* Name */}
              <p style={{ fontSize: "16px", fontWeight: 700, color: "#ffffff", marginBottom: "4px" }}>
                Prateek Bansal
              </p>

              {/* Role */}
              <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.45)" }}>
                Head Coach · FIXYOURBODY
              </p>

              {/* Floating stat — bottom-left */}
              <div
                className="absolute flex flex-col"
                style={{
                  bottom: "-18px",
                  left: "24px",
                  background: "#0d1a2e",
                  border: "2px solid #00d4aa",
                  borderRadius: "10px",
                  padding: "10px 14px",
                  boxShadow: "0 8px 24px rgba(0,0,0,0.45)",
                  zIndex: 10,
                }}
              >
                <span style={{ fontSize: "20px", fontWeight: 800, color: "#00d4aa", lineHeight: 1 }}>500+</span>
                <span style={{ fontSize: "11px", color: "rgba(255,255,255,0.55)", marginTop: "3px" }}>Clients</span>
              </div>

              {/* Floating stat — bottom-right */}
              <div
                className="absolute flex flex-col"
                style={{
                  bottom: "-18px",
                  right: "24px",
                  background: "#0d1a2e",
                  border: "2px solid #00d4aa",
                  borderRadius: "10px",
                  padding: "10px 14px",
                  boxShadow: "0 8px 24px rgba(0,0,0,0.45)",
                  zIndex: 10,
                }}
              >
                <span style={{ fontSize: "20px", fontWeight: 800, color: "#00d4aa", lineHeight: 1 }}>98%</span>
                <span style={{ fontSize: "11px", color: "rgba(255,255,255,0.55)", marginTop: "3px" }}>Success Rate</span>
              </div>
            </div>
          </div>

          {/* ── TEXT COLUMN ── */}
          <div className="order-1 md:order-2 flex flex-col justify-center" style={{ paddingTop: "8px" }}>

            {/* Pill label */}
            <div
              className="self-start mb-5"
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
              About The Founder
            </div>

            {/* Headline — max 40px, never orphans Bansal alone */}
            <h2 className="font-black leading-tight mb-5" style={{ fontSize: "clamp(1.8rem, 4vw, 2.5rem)" }}>
              <span style={{ color: "#ffffff", display: "block" }}>Meet</span>
              <span style={{ display: "block" }}>
                <span style={{ color: "#00d4aa" }}>Prateek </span>
                <span style={{ color: "#ffffff" }}>Bansal</span>
              </span>
            </h2>

            {/* Single-sentence body */}
            <p
              className="mb-7"
              style={{
                fontSize: "16px",
                color: "rgba(255,255,255,0.70)",
                lineHeight: 1.7,
                maxWidth: "480px",
              }}
            >
              Prateek founded <strong style={{ color: "#ffffff", fontWeight: 600 }}>FIXYOURBODY</strong> to cut through fitness noise — real coaching, zero gimmicks, results that last.
            </p>

            {/* Credentials */}
            <ul style={{ display: "flex", flexDirection: "column", gap: "10px", marginBottom: "28px" }}>
              {credentials.map((c) => (
                <li key={c} className="flex items-center gap-3">
                  <span
                    className="flex-shrink-0 flex items-center justify-center"
                    style={{ width: "20px", height: "20px", borderRadius: "50%", background: "#00d4aa" }}
                  >
                    <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                      <path d="M1 4L3.5 6.5L9 1" stroke="#0a0f1d" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  <span style={{ fontSize: "14px", color: "rgba(255,255,255,0.75)" }}>{c}</span>
                </li>
              ))}
            </ul>

            {/* CTA button */}
            <div>
              <a
                href="#plans"
                className="inline-block font-bold hover:opacity-90 transition-opacity"
                style={{
                  background: "#00d4aa",
                  color: "#0a0f1e",
                  borderRadius: "999px",
                  padding: "13px 28px",
                  fontSize: "14px",
                  fontWeight: 700,
                  boxShadow: "0 0 24px rgba(0,212,170,0.25)",
                }}
              >
                Book a Free Call →
              </a>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
