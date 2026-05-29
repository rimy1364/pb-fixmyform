import { ChevronDown } from "lucide-react";

const stats = [
  { value: "500+", label: "Clients Transformed" },
  { value: "98%", label: "Success Rate" },
  { value: "5+", label: "Years Experience" },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-4">
      {/* Dark navy base */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 40%, #0d1f3c 0%, #0A0F1E 60%, #060a14 100%)",
        }}
      />

      {/* Radial teal glow behind BODY. — 6% opacity, 600px radius */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: "30%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "600px",
          height: "600px",
          background: "radial-gradient(circle, rgba(0,212,170,0.06) 0%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />

      <div className="relative z-10 w-full max-w-4xl mx-auto text-center flex flex-col items-center">

        {/* Headline */}
        <div className="leading-none">
          {/* Setup — white 55% opacity, tight tracking */}
          <p
            className="text-lg sm:text-xl md:text-2xl font-light uppercase mb-2"
            style={{ color: "rgba(255,255,255,0.55)", letterSpacing: "0.15em" }}
          >
            FIX YOUR
          </p>

          {/* Hero word — solid #00d4aa, no gradient */}
          <h1
            className="font-black tracking-tight"
            style={{
              fontSize: "clamp(4rem, 18vw, 13rem)",
              lineHeight: 0.9,
              color: "#00d4aa",
            }}
          >
            BODY.
          </h1>

          {/* Payoff — all-caps, white, font-weight 700 */}
          <p
            className="uppercase tracking-wide font-bold text-white mt-4"
            style={{ fontSize: "clamp(1.1rem, 4vw, 2rem)" }}
          >
            FIX YOUR LIFE.
          </p>
        </div>

        {/* 48px gap between payoff and CTAs */}
        <div style={{ height: "48px" }} />

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center w-full sm:w-auto">
          <a
            href="#plans"
            className="px-8 py-3.5 rounded-full bg-[#00d4aa] text-white font-bold text-sm tracking-wide hover:bg-[#00bfa0] transition-colors text-center"
            style={{ boxShadow: "0 0 24px rgba(0,212,170,0.35)" }}
          >
            Explore Plans
          </a>
          <a
            href="#transformations"
            className="px-8 py-3.5 rounded-full border-2 border-white/70 text-white font-bold text-sm tracking-wide hover:bg-white/10 hover:border-white transition-colors text-center"
          >
            See Transformations
          </a>
        </div>

        {/* 56px gap between buttons and stats */}
        <div style={{ height: "56px" }} />

        {/* Stats — bare, no card, vertical dividers only */}
        <div className="flex items-center w-full sm:w-auto">
          {stats.map((s, i) => (
            <div
              key={s.label}
              className="flex-1 sm:flex-none text-center"
              style={{
                paddingLeft: i === 0 ? 0 : "2.5rem",
                paddingRight: i === stats.length - 1 ? 0 : "2.5rem",
                borderLeft: i === 0 ? "none" : "1px solid rgba(255,255,255,0.15)",
              }}
            >
              <div
                className="text-2xl sm:text-3xl font-black"
                style={{ color: "#00d4aa" }}
              >
                {s.value}
              </div>
              <div className="text-xs text-gray-400 mt-1 leading-tight">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#about"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-gray-500 hover:text-[#00d4aa] transition-colors animate-bounce"
      >
        <ChevronDown size={22} />
      </a>
    </section>
  );
}
