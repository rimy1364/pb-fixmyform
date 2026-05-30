"use client";

const credentials = [
  "8+ Years of Coaching Experience",
  "INFS Certified Nutrition & Fitness Professionals",
  "Resistance Training Specialists (RTS Certified)",
  "500+ Successful Transformations",
  "Fat Loss & Body Recomposition Specialists",
  "Muscle Building & Strength Development Coaches",
];

export default function About() {
  return (
    <section id="about" className="py-20 px-5" style={{ background: "#0d1a2e" }}>
      <div className="max-w-3xl mx-auto">

        {/* Headline */}
        <h2 className="font-black leading-tight mb-6" style={{ fontSize: "clamp(1.8rem, 4vw, 2.5rem)" }}>
          <span className="text-white">About </span>
          <span style={{ color: "#00d4aa" }}>Us</span>
        </h2>

        {/* Body */}
        <p
          className="mb-4"
          style={{ fontSize: "15px", color: "rgba(255,255,255,0.65)", lineHeight: 1.80 }}
        >
          At FIXYOURBODY, we believe real fitness means training with confidence — not dependency. Our coaching system is built to make you trainer-independent: equipped with the knowledge, technique, and discipline to work out effectively on your own terms.
        </p>
        <p
          className="mb-8"
          style={{ fontSize: "15px", color: "rgba(255,255,255,0.65)", lineHeight: 1.80 }}
        >
          We don&apos;t do one-size-fits-all. Every client gets a plan built around them — the right nutrition, the right training, and constant support — so the results stick well beyond the coaching period.
        </p>

        {/* Credentials label */}
        <p className="mb-4" style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.1em", color: "rgba(255,255,255,0.35)", textTransform: "uppercase" }}>
          Credentials &amp; Experience
        </p>

        {/* Credentials */}
        <ul style={{ display: "flex", flexDirection: "column", gap: "10px", marginBottom: "32px" }}>
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

        {/* CTA */}
        <a
          href="#contact"
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
    </section>
  );
}
