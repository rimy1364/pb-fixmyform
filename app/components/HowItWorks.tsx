const steps = [
  {
    step: "01",
    title: "Book a Free Call",
    description:
      "Fill out a short form and hop on a 15-minute discovery call with Prateek. No sales pressure — just honest advice.",
  },
  {
    step: "02",
    title: "Get Your Custom Plan",
    description:
      "Within 48 hours you'll receive a fully personalised workout and nutrition plan built for your body and lifestyle.",
  },
  {
    step: "03",
    title: "Execute & Adapt",
    description:
      "Follow your plan with weekly check-ins and real-time support. Plans evolve as you do — nothing is set-and-forget.",
  },
  {
    step: "04",
    title: "Transform & Sustain",
    description:
      "Reach your goal and build habits that last a lifetime. Most clients continue for maintenance after their transformation.",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-3 py-1 rounded-full border border-[#00C2FF]/30 bg-[#00C2FF]/10 text-[#00C2FF] text-xs font-semibold uppercase tracking-widest mb-4">
            The Process
          </div>
          <h2 className="text-4xl md:text-5xl font-black mb-4">
            <span className="text-white">How It</span>{" "}
            <span className="gradient-text">Works</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Four simple steps between where you are and where you want to be.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connector line (desktop) */}
          <div className="hidden md:block absolute top-10 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-[#00C2FF]/20 via-[#00C2FF]/60 to-[#00E5A0]/20" />

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {steps.map((s, i) => (
              <div key={i} className="relative flex flex-col items-center text-center">
                {/* Step circle */}
                <div className="relative z-10 w-20 h-20 rounded-full border-2 border-[#00C2FF]/50 bg-[#0D1528] flex flex-col items-center justify-center mb-5 glow-blue-sm">
                  <span className="text-xs text-gray-500 leading-none">Step</span>
                  <span className="text-lg font-black gradient-text leading-none">{s.step}</span>
                </div>
                <h3 className="text-base font-bold text-white mb-2">{s.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed max-w-48">{s.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
