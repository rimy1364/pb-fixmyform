import { ChevronDown } from "lucide-react";

const stats = [
  { value: "500+", label: "Clients Transformed" },
  { value: "98%", label: "Success Rate" },
  { value: "5+", label: "Years Experience" },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-4">
      {/* Clean radial gradient background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 40%, #0d1f3c 0%, #0A0F1E 60%, #060a14 100%)",
        }}
      />
      {/* Subtle teal glow */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
        <div
          className="w-[400px] h-[300px] md:w-[600px] md:h-[400px] rounded-full opacity-20"
          style={{
            background: "radial-gradient(ellipse at center, #00C2FF 0%, transparent 70%)",
            filter: "blur(80px)",
          }}
        />
      </div>

      <div className="relative z-10 w-full max-w-4xl mx-auto text-center flex flex-col items-center">

        {/* Headline hierarchy */}
        <div className="mb-8 leading-none">
          <p className="text-lg sm:text-xl md:text-2xl font-light text-white/60 tracking-[0.2em] uppercase mb-2">
            Fix Your
          </p>
          <h1
            className="font-black tracking-tight gradient-text"
            style={{ fontSize: "clamp(4rem, 18vw, 13rem)", lineHeight: 0.9 }}
          >
            FORM.
          </h1>
          <p className="text-xl sm:text-2xl md:text-3xl font-semibold text-white tracking-wide mt-4">
            Fix Your Life.
          </p>
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center mb-12 w-full sm:w-auto">
          <a
            href="#plans"
            className="px-8 py-3.5 rounded-full bg-[#00C2FF] text-white font-bold text-sm tracking-wide hover:bg-[#00AADD] transition-colors text-center"
            style={{ boxShadow: "0 0 24px rgba(0,194,255,0.35)" }}
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

        {/* Stats bar */}
        <div className="flex items-stretch divide-x divide-white/15 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm overflow-hidden w-full sm:w-auto">
          {stats.map((s) => (
            <div key={s.label} className="flex-1 px-4 sm:px-8 py-4 text-center">
              <div
                className="text-xl sm:text-2xl md:text-3xl font-black gradient-text"
                style={{ textShadow: "0 0 20px rgba(0,194,255,0.5)" }}
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
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-gray-500 hover:text-[#00C2FF] transition-colors animate-bounce"
      >
        <ChevronDown size={22} />
      </a>
    </section>
  );
}
