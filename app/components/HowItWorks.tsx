const steps = [
  {
    step: "01",
    title: "Book a Free Call",
    description: "Fill out a short form and hop on a 15-minute discovery call with Prateek. No sales pressure — just honest advice.",
  },
  {
    step: "02",
    title: "Get Your Custom Plan",
    description: "Within 48 hours you'll receive a fully personalised workout and nutrition plan built for your body and lifestyle.",
  },
  {
    step: "03",
    title: "Execute & Adapt",
    description: "Follow your plan with weekly check-ins and real-time support. Plans evolve as you do — nothing is set-and-forget.",
  },
  {
    step: "04",
    title: "Transform & Sustain",
    description: "Reach your goal and build habits that last a lifetime. Most clients continue for maintenance after their transformation.",
  },
];

export default function HowItWorks() {
  return (
    <section className="pt-20 pb-16 px-5" style={{ background: "#080f1d" }}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <div
            className="inline-block mb-3"
            style={{
              padding: "4px 14px", borderRadius: "999px",
              border: "1px solid rgba(0,212,170,0.30)",
              background: "rgba(0,212,170,0.08)",
              color: "#00d4aa", fontSize: "11px", fontWeight: 600,
              letterSpacing: "0.12em", textTransform: "uppercase",
            }}
          >
            The Process
          </div>
          <h2 className="text-3xl sm:text-4xl font-black mb-3">
            <span className="text-white">How It </span>
            <span style={{ color: "#00d4aa" }}>Works</span>
          </h2>
          <p className="text-sm sm:text-base max-w-xl mx-auto" style={{ color: "rgba(255,255,255,0.50)" }}>
            Four simple steps between where you are and where you want to be.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connector line — desktop */}
          <div
            className="hidden md:block absolute top-10 left-[12.5%] right-[12.5%] h-px"
            style={{ background: "linear-gradient(to right, transparent, rgba(0,212,170,0.4), transparent)" }}
          />
          {/* Connector line — mobile */}
          <div
            className="md:hidden absolute left-8 top-8 bottom-8 w-px"
            style={{ background: "linear-gradient(to bottom, transparent, rgba(0,212,170,0.4), transparent)" }}
          />

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-8">
            {steps.map((s, i) => (
              <div key={i} className="relative flex md:flex-col items-start md:items-center gap-5 md:gap-0 md:text-center">
                {/* Step circle */}
                <div
                  className="relative z-10 flex-shrink-0 w-16 h-16 md:w-20 md:h-20 rounded-full flex flex-col items-center justify-center md:mb-5"
                  style={{
                    border: "2px solid rgba(0,212,170,0.50)",
                    background: "#0a1628",
                  }}
                >
                  <span style={{ fontSize: "10px", color: "rgba(255,255,255,0.35)", lineHeight: 1 }}>Step</span>
                  <span style={{ fontSize: "18px", fontWeight: 900, color: "#00d4aa", lineHeight: 1 }}>{s.step}</span>
                </div>
                <div>
                  <h3 className="text-sm sm:text-base font-bold text-white mb-1 md:mb-2">{s.title}</h3>
                  <p className="text-xs sm:text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.50)" }}>{s.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
