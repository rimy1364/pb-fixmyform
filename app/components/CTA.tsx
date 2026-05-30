"use client";

export default function CTA() {
  return (
    <section className="pt-20 pb-16 px-5" style={{ background: "#080f1d" }}>
      <div className="max-w-4xl mx-auto">
        <div
          className="relative rounded-3xl overflow-hidden p-8 sm:p-12 md:p-16 text-center"
          style={{
            border: "1.5px solid rgba(0,212,170,0.30)",
            background: "rgba(0,212,170,0.04)",
            boxShadow: "0 0 60px rgba(0,212,170,0.08)",
          }}
        >
          {/* Radial glow */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{ background: "radial-gradient(ellipse at center, rgba(0,212,170,0.07) 0%, transparent 70%)" }}
          />

          {/* Corner accents */}
          <div className="absolute top-0 left-0 w-16 h-16 sm:w-24 sm:h-24 border-t-2 border-l-2 rounded-tl-3xl" style={{ borderColor: "rgba(0,212,170,0.40)" }} />
          <div className="absolute bottom-0 right-0 w-16 h-16 sm:w-24 sm:h-24 border-b-2 border-r-2 rounded-br-3xl" style={{ borderColor: "rgba(0,212,170,0.40)" }} />

          <div className="relative z-10">
            <div
              className="inline-block mb-5"
              style={{
                padding: "4px 14px", borderRadius: "999px",
                border: "1px solid rgba(0,212,170,0.30)",
                background: "rgba(0,212,170,0.08)",
                color: "#00d4aa", fontSize: "11px", fontWeight: 600,
                letterSpacing: "0.12em", textTransform: "uppercase",
              }}
            >
              Limited Spots Available
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-6xl font-black mb-5 leading-tight">
              <span className="text-white">Ready to</span>
              <br />
              <span style={{ color: "#00d4aa" }}>Fix Your Body?</span>
            </h2>

            <p className="text-sm sm:text-base mb-8 max-w-xl mx-auto leading-relaxed" style={{ color: "rgba(255,255,255,0.50)" }}>
              Stop waiting for the &quot;right time.&quot; Start your transformation today.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <button
                onClick={() => alert("Booking coming soon! Payment integration in progress.")}
                className="px-8 py-3.5 rounded-full font-bold text-sm cursor-pointer hover:opacity-90 transition-opacity"
                style={{ background: "#00d4aa", color: "#080f1d", border: "none", boxShadow: "0 0 24px rgba(0,212,170,0.35)" }}
              >
                Book Consultation — ₹99
              </button>
              <a
                href="#plans"
                className="px-8 py-3.5 rounded-full font-bold text-sm text-center hover:bg-white/10 transition-colors"
                style={{ border: "2px solid rgba(255,255,255,0.50)", color: "#ffffff" }}
              >
                View Plans
              </a>
            </div>

            <p className="mt-5 text-xs" style={{ color: "rgba(255,255,255,0.30)" }}>
              ✓ 100% personalised &nbsp;·&nbsp; ✓ Results guaranteed &nbsp;·&nbsp; ✓ Cancel anytime
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
