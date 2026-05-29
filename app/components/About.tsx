"use client";

const credentials = [
  "Certified Strength & Conditioning Coach",
  "Sports Nutrition Specialist",
  "5+ Years Coaching Experience",
  "500+ Successful Transformations",
];

const floatingStats = [
  { value: "500+", label: "Lives Changed", side: "left" },
  { value: "98%",  label: "Success Rate",  side: "right" },
];

export default function About() {
  return (
    <section id="about" className="py-20 px-5" style={{ background: "#0d1a2e" }}>
      <div className="max-w-6xl mx-auto">
        <div
          className="grid md:grid-cols-[45%_55%] gap-12 md:gap-16 items-stretch"
        >

          {/* ── PHOTO COLUMN ── */}
          <div className="relative order-2 md:order-1 flex">
            {/* Frame */}
            <div
              className="relative w-full rounded-2xl overflow-visible flex-1"
              style={{ minHeight: "360px" }}
            >
              {/* Photo / placeholder */}
              <div
                className="w-full h-full rounded-2xl flex items-center justify-center"
                style={{
                  background: "#0a1628",
                  border: "2px solid #00d4aa",
                  borderRadius: "16px",
                  aspectRatio: "4/5",
                  minHeight: "360px",
                }}
              >
                {/* PB initials avatar */}
                <div className="flex flex-col items-center gap-3">
                  <div
                    className="flex items-center justify-center font-black"
                    style={{
                      width: "80px",
                      height: "80px",
                      borderRadius: "50%",
                      background: "#00d4aa",
                      color: "#0a0f1d",
                      fontSize: "28px",
                    }}
                  >
                    PB
                  </div>
                  <p style={{ fontSize: "12px", color: "rgba(255,255,255,0.30)" }}>
                    Add your photo here
                  </p>
                </div>
              </div>

              {/* Floating stat — bottom-left */}
              <div
                className="absolute flex flex-col items-start"
                style={{
                  bottom: "-16px",
                  left: "-16px",
                  background: "#0d1a2e",
                  border: "2px solid #00d4aa",
                  borderRadius: "12px",
                  padding: "12px 16px",
                  boxShadow: "0 8px 32px rgba(0,0,0,0.4)",
                  zIndex: 10,
                }}
              >
                <span style={{ fontSize: "22px", fontWeight: 800, color: "#00d4aa", lineHeight: 1 }}>500+</span>
                <span style={{ fontSize: "11px", color: "rgba(255,255,255,0.55)", marginTop: "4px" }}>Lives Changed</span>
              </div>

              {/* Floating stat — bottom-right */}
              <div
                className="absolute flex flex-col items-start"
                style={{
                  bottom: "-16px",
                  right: "-16px",
                  background: "#0d1a2e",
                  border: "2px solid #00d4aa",
                  borderRadius: "12px",
                  padding: "12px 16px",
                  boxShadow: "0 8px 32px rgba(0,0,0,0.4)",
                  zIndex: 10,
                }}
              >
                <span style={{ fontSize: "22px", fontWeight: 800, color: "#00d4aa", lineHeight: 1 }}>98%</span>
                <span style={{ fontSize: "11px", color: "rgba(255,255,255,0.55)", marginTop: "4px" }}>Success Rate</span>
              </div>
            </div>
          </div>

          {/* ── TEXT COLUMN ── */}
          <div className="order-1 md:order-2 flex flex-col justify-center" style={{ paddingBottom: "32px" }}>

            {/* Pill label */}
            <div
              className="inline-block self-start mb-4"
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

            {/* Headline */}
            <h2
              className="font-black leading-tight mb-6"
              style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
            >
              Meet{" "}
              <span style={{ color: "#00d4aa" }}>Prateek</span>
              <br />
              <span className="text-white">Bansal</span>
            </h2>

            <p
              className="leading-relaxed mb-4"
              style={{ fontSize: "15px", color: "rgba(255,255,255,0.60)" }}
            >
              Prateek Bansal founded{" "}
              <strong style={{ color: "#ffffff" }}>FIXYOURBODY</strong> with one
              mission — to cut through the noise of the fitness industry and
              deliver real, sustainable results. No gimmicks. No fad diets.
              Just evidence-based coaching tailored to your body and lifestyle.
            </p>

            <p
              className="leading-relaxed mb-8"
              style={{ fontSize: "15px", color: "rgba(255,255,255,0.60)" }}
            >
              Having transformed 500+ individuals — from busy professionals to
              competitive athletes — Prateek brings a no-excuse approach to
              every client. He believes the right form is the foundation of
              everything: in the gym and in life.
            </p>

            {/* Credentials */}
            <ul className="space-y-3">
              {credentials.map((c) => (
                <li key={c} className="flex items-center gap-3">
                  <span
                    className="flex-shrink-0 flex items-center justify-center"
                    style={{
                      width: "20px",
                      height: "20px",
                      borderRadius: "50%",
                      background: "#00d4aa",
                    }}
                  >
                    <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                      <path d="M1 4L3.5 6.5L9 1" stroke="#0a0f1d" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  <span style={{ fontSize: "14px", color: "rgba(255,255,255,0.75)" }}>{c}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}
