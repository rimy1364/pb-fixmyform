"use client";

const credentials = [
  "8+ Years of Coaching Experience",
  "INFS Certified Nutrition & Fitness Professional",
  "Resistance Training Specialist (RTS Certified)",
  "500+ Successful Transformations",
  "Fat Loss & Body Recomposition Specialist",
  "Muscle Building & Strength Development Coach",
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

            {/* Headline */}
            <h2 className="font-black leading-tight mb-1" style={{ fontSize: "clamp(1.8rem, 4vw, 2.5rem)" }}>
              <span className="text-white">About </span>
              <span style={{ color: "#00d4aa" }}>Us</span>
            </h2>

            {/* Sub-title */}
            <p className="mb-5" style={{ fontSize: "14px", color: "rgba(255,255,255,0.45)", fontWeight: 500 }}>
              Founder of FIXYOURBODY
            </p>

            {/* Body */}
            <p
              className="mb-6"
              style={{
                fontSize: "15px",
                color: "rgba(255,255,255,0.65)",
                lineHeight: 1.75,
                maxWidth: "480px",
              }}
            >
              Unlike generic fitness programs, Prateek&apos;s coaching focuses on personalized nutrition, structured training, lifestyle optimization, and continuous accountability — helping clients achieve results that last long after the coaching period ends.
            </p>

            {/* Credentials label */}
            <p className="mb-3" style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.1em", color: "rgba(255,255,255,0.35)", textTransform: "uppercase" }}>
              Credentials &amp; Experience
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
                Consult Now →
              </a>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
