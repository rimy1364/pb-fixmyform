"use client";

export default function CTA() {
  return (
    <section className="py-16 px-5">
      <div className="max-w-4xl mx-auto">
        <div className="relative rounded-3xl overflow-hidden border border-[#00C2FF]/30 p-8 sm:p-12 md:p-16 text-center glow-blue">
          {/* Background gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#00C2FF]/10 via-[#0D1528] to-[#00E5A0]/5" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(0,194,255,0.12)_0%,_transparent_70%)]" />

          {/* Corner accents */}
          <div className="absolute top-0 left-0 w-16 h-16 sm:w-24 sm:h-24 border-t-2 border-l-2 border-[#00C2FF]/40 rounded-tl-3xl" />
          <div className="absolute bottom-0 right-0 w-16 h-16 sm:w-24 sm:h-24 border-b-2 border-r-2 border-[#00E5A0]/40 rounded-br-3xl" />

          <div className="relative z-10">
            <div className="inline-block px-3 py-1 rounded-full border border-[#00C2FF]/30 bg-[#00C2FF]/10 text-[#00C2FF] text-xs font-semibold uppercase tracking-widest mb-5">
              Limited Spots Available
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-6xl font-black mb-5 leading-tight">
              <span className="text-white">Ready to</span>
              <br />
              <span className="gradient-text">Fix Your Body?</span>
            </h2>

            <p className="text-gray-400 text-sm sm:text-base mb-8 max-w-xl mx-auto leading-relaxed">
              Stop waiting for the &quot;right time.&quot; Start your transformation today
              with a personalised plan from Prateek Bansal.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <button
                onClick={() => alert("Booking coming soon! Payment integration in progress.")}
                className="px-8 py-3.5 rounded-full bg-[#00C2FF] text-white font-bold text-sm hover:bg-[#00AADD] transition-colors cursor-pointer"
                style={{ boxShadow: "0 0 24px rgba(0,194,255,0.35)" }}
              >
                Book Consultation — ₹99
              </button>
              <a
                href="#plans"
                className="px-8 py-3.5 rounded-full border-2 border-white/70 text-white font-bold text-sm hover:bg-white/10 hover:border-white transition-colors text-center"
              >
                View All Plans
              </a>
            </div>

            <p className="mt-5 text-xs text-gray-500">
              ✓ 100% personalised &nbsp;·&nbsp; ✓ Results guaranteed &nbsp;·&nbsp; ✓ Cancel anytime
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
