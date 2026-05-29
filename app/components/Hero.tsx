import { ChevronDown } from "lucide-react";

const stats = [
  { value: "500+", label: "Clients Transformed" },
  { value: "98%", label: "Success Rate" },
  { value: "5+", label: "Years Experience" },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Clean radial gradient background — no particles */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 40%, #0d1f3c 0%, #0A0F1E 60%, #060a14 100%)",
        }}
      />
      {/* Subtle teal glow at centre */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
        <div
          className="w-[600px] h-[400px] rounded-full opacity-20"
          style={{
            background:
              "radial-gradient(ellipse at center, #00C2FF 0%, transparent 70%)",
            filter: "blur(80px)",
          }}
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center flex flex-col items-center">

        {/* Pill label */}
        <div className="inline-flex items-center gap-2 mb-8 px-5 py-2 rounded-full border border-[#00C2FF]/40 bg-[#00C2FF]/10 text-[#00C2FF] text-sm font-semibold tracking-wider">
          <span className="w-1.5 h-1.5 rounded-full bg-[#00C2FF] animate-pulse" />
          Online Fitness Coaching
        </div>

        {/* Headline hierarchy */}
        <div className="mb-6 leading-none">
          {/* Setup line — small, light */}
          <p className="text-xl md:text-2xl font-light text-white/60 tracking-[0.2em] uppercase mb-2">
            Fix Your
          </p>

          {/* Hero word — massive teal */}
          <h1
            className="font-black tracking-tight gradient-text"
            style={{ fontSize: "clamp(5rem, 18vw, 13rem)", lineHeight: 0.9 }}
          >
            FORM.
          </h1>

          {/* Payoff line — medium white */}
          <p className="text-2xl md:text-3xl font-semibold text-white tracking-wide mt-4">
            Fix Your Life.
          </p>
        </div>

        {/* Coach row — avatar + subheadline */}
        <div className="flex items-center justify-center gap-4 mb-8">
          {/* Circular headshot */}
          <div className="relative flex-shrink-0">
            <div className="w-14 h-14 rounded-full border-2 border-[#00C2FF] bg-gradient-to-br from-[#0d2a40] to-[#0A1A2E] flex items-center justify-center text-xl font-black text-[#00C2FF]">
              PB
            </div>
            {/* Teal verified badge */}
            <div className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-[#00C2FF] flex items-center justify-center border-2 border-[#0A0F1E]">
              <svg width="9" height="7" viewBox="0 0 9 7" fill="none">
                <path d="M1 3.5L3.2 5.5L8 1" stroke="#0A0F1E" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </div>

          {/* Subheadline */}
          <p className="text-sm md:text-base text-gray-400 text-left max-w-xs leading-snug">
            Work directly with{" "}
            <span className="text-white font-semibold">Prateek Bansal</span> —
            science-backed coaching that fits your life.
          </p>
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center mb-14">
          <a
            href="#plans"
            className="px-9 py-3.5 rounded-full bg-[#00C2FF] text-white font-bold text-sm tracking-wide hover:bg-[#00AADD] transition-colors"
            style={{ boxShadow: "0 0 24px rgba(0,194,255,0.35)" }}
          >
            Explore Plans
          </a>
          <a
            href="#transformations"
            className="px-9 py-3.5 rounded-full border-2 border-white/70 text-white font-bold text-sm tracking-wide hover:bg-white/10 hover:border-white transition-colors"
          >
            See Transformations
          </a>
        </div>

        {/* Stats bar */}
        <div className="flex items-center divide-x divide-white/15 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm overflow-hidden">
          {stats.map((s) => (
            <div key={s.label} className="flex-1 px-8 py-4 text-center">
              <div
                className="text-2xl md:text-3xl font-black gradient-text"
                style={{ textShadow: "0 0 20px rgba(0,194,255,0.5)" }}
              >
                {s.value}
              </div>
              <div className="text-xs text-gray-400 mt-1 whitespace-nowrap">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gray-500 hover:text-[#00C2FF] transition-colors animate-bounce"
      >
        <ChevronDown size={24} />
      </a>
    </section>
  );
}
