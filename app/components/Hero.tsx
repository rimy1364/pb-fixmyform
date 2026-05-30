import { ChevronDown } from "lucide-react";

const stats = [
  { value: "500+", label: "Lives Transformed" },
  { value: "98%",  label: "Success Rate" },
  { value: "8+",   label: "Years Experience" },
];

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-4"
      style={{ background: "#080f1d" }}
    >
      {/* Centered radial glow behind headline — #00d4aa @ 5%, 500px */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: "42%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "500px",
          height: "500px",
          background: "radial-gradient(circle, rgba(0,212,170,0.05) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />

      <div className="relative z-10 w-full max-w-4xl mx-auto text-center flex flex-col items-center">

        {/* Eyebrow label */}
        <p
          className="uppercase"
          style={{
            fontSize: "12px",
            letterSpacing: "0.2em",
            color: "rgba(255,255,255,0.40)",
            marginBottom: "16px",
          }}
        >
          Your Transformation Starts Here
        </p>

        {/* Main headline — single line, FIX white · YOUR teal · BODY white */}
        <h1
          className="leading-none"
          style={{
            fontSize: "clamp(52px, 8vw, 96px)",
            fontWeight: 900,
            letterSpacing: "-2px",
            lineHeight: 1,
          }}
        >
          <span style={{ color: "#ffffff" }}>FIX </span>
          <span style={{ color: "#00d4aa" }}>YOUR </span>
          <span style={{ color: "#ffffff" }}>BODY</span>
        </h1>

        {/* Divider — 48px wide, 2px, teal */}
        <div
          style={{
            width: "48px",
            height: "2px",
            background: "#00d4aa",
            margin: "20px auto",
            borderRadius: "1px",
          }}
        />

        {/* Subheadline — social proof */}
        <p
          style={{
            fontSize: "15px",
            color: "rgba(255,255,255,0.60)",
            fontWeight: 400,
            lineHeight: 1.6,
          }}
        >
          500+ Lives transformed. Science-backed. Real Results.
        </p>

        {/* 36px gap then CTAs */}
        <div style={{ height: "36px" }} />

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
          <a
            href="#plans"
            className="w-full sm:w-auto text-center font-bold transition-opacity hover:opacity-90"
            style={{
              background: "#00d4aa",
              color: "#0a0f1d",
              borderRadius: "999px",
              padding: "14px 32px",
              fontSize: "14px",
              fontWeight: 700,
              boxShadow: "0 0 28px rgba(0,212,170,0.30)",
            }}
          >
            Explore Plans
          </a>
          <a
            href="#transformations"
            className="w-full sm:w-auto text-center font-bold transition-colors hover:bg-white/5"
            style={{
              background: "transparent",
              color: "#ffffff",
              border: "1.5px solid rgba(255,255,255,0.75)",
              borderRadius: "999px",
              padding: "14px 32px",
              fontSize: "14px",
              fontWeight: 700,
            }}
          >
            See Transformations
          </a>
        </div>

        {/* 48px gap then stats */}
        <div style={{ height: "48px" }} />

        {/* Stats bar — bare, no card */}
        <div className="flex items-center justify-center w-full sm:w-auto">
          {stats.map((s, i) => (
            <div
              key={s.label}
              className="text-center"
              style={{
                paddingLeft:  i === 0 ? 0 : "40px",
                paddingRight: i === stats.length - 1 ? 0 : "40px",
                borderLeft: i === 0 ? "none" : "1px solid rgba(255,255,255,0.12)",
              }}
            >
              <div
                style={{
                  fontSize: "28px",
                  fontWeight: 800,
                  color: "#00d4aa",
                  lineHeight: 1,
                }}
              >
                {s.value}
              </div>
              <div
                style={{
                  fontSize: "12px",
                  color: "rgba(255,255,255,0.50)",
                  marginTop: "6px",
                  lineHeight: 1.3,
                }}
              >
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll cue */}
      <a
        href="#about"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce transition-colors hover:text-[#00d4aa]"
        style={{ color: "rgba(255,255,255,0.30)" }}
      >
        <ChevronDown size={22} />
      </a>
    </section>
  );
}
