const steps = [
  {
    step: "01",
    title: "Get Enrolled",
    description: "Sign up and take the first step toward a body you're proud of. Simple, quick, no guesswork.",
  },
  {
    step: "02",
    title: "Detailed Assessment",
    description: "We dive deep into your current fitness level, nutrition habits, lifestyle, and goals — nothing generic.",
  },
  {
    step: "03",
    title: "1-on-1 Expert Connect",
    description: "A personal call with our expert to align on your targets, clear doubts, and set the right expectations.",
  },
  {
    step: "04",
    title: "Custom Plan Goes Live",
    description: "Your personalised meal and workout plan is activated within 48 hours — built for your body, your schedule.",
  },
  {
    step: "05",
    title: "Daily Guidance & 24×7 Support",
    description: "Form corrections, motivation, and answers whenever you need them — round-the-clock WhatsApp access.",
  },
  {
    step: "06",
    title: "Fortnightly Check-Ins",
    description: "Every two weeks we review your progress, tweak the plan, and keep momentum building in the right direction.",
  },
  {
    step: "07",
    title: "Gym Independence",
    description: "Leave with the knowledge, habits, and confidence to train on your own — results that last a lifetime.",
  },
];

export default function HowItWorks() {
  const row1 = steps.slice(0, 4);
  const row2 = steps.slice(4);

  return (
    <section className="pt-20 pb-16 px-5" style={{ background: "#080f1d" }}>
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-12">
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
            Seven steps that take you from where you are to where you want to be.
          </p>
        </div>

        {/* Desktop: 4 + 3 rows. Mobile: vertical list */}
        <div className="hidden md:block space-y-12">

          {/* Row 1 — 4 steps */}
          <div className="relative">
            <div
              className="absolute top-10 left-[12.5%] right-[12.5%] h-px"
              style={{ background: "linear-gradient(to right, transparent, rgba(0,212,170,0.35), transparent)" }}
            />
            <div className="grid grid-cols-4 gap-6">
              {row1.map((s) => (
                <StepCard key={s.step} s={s} />
              ))}
            </div>
          </div>

          {/* Row 2 — 3 steps, centred */}
          <div className="relative">
            <div
              className="absolute top-10 left-[18%] right-[18%] h-px"
              style={{ background: "linear-gradient(to right, transparent, rgba(0,212,170,0.35), transparent)" }}
            />
            <div className="grid grid-cols-3 gap-6 max-w-3xl mx-auto">
              {row2.map((s) => (
                <StepCard key={s.step} s={s} />
              ))}
            </div>
          </div>
        </div>

        {/* Mobile: vertical list */}
        <div className="md:hidden relative">
          <div
            className="absolute left-8 top-8 bottom-8 w-px"
            style={{ background: "linear-gradient(to bottom, transparent, rgba(0,212,170,0.40), transparent)" }}
          />
          <div className="flex flex-col gap-6">
            {steps.map((s) => (
              <div key={s.step} className="flex items-start gap-5">
                <div
                  className="relative z-10 flex-shrink-0 w-16 h-16 rounded-full flex flex-col items-center justify-center"
                  style={{ border: "2px solid rgba(0,212,170,0.50)", background: "#0a1628" }}
                >
                  <span style={{ fontSize: "9px", color: "rgba(255,255,255,0.35)", lineHeight: 1 }}>Step</span>
                  <span style={{ fontSize: "16px", fontWeight: 900, color: "#00d4aa", lineHeight: 1 }}>{s.step}</span>
                </div>
                <div className="pt-3">
                  <h3 className="text-sm font-bold text-white mb-1">{s.title}</h3>
                  <p className="text-xs leading-relaxed" style={{ color: "rgba(255,255,255,0.50)" }}>{s.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

function StepCard({ s }: { s: { step: string; title: string; description: string } }) {
  return (
    <div className="flex flex-col items-center text-center">
      <div
        className="relative z-10 w-20 h-20 rounded-full flex flex-col items-center justify-center mb-4"
        style={{ border: "2px solid rgba(0,212,170,0.50)", background: "#0a1628" }}
      >
        <span style={{ fontSize: "10px", color: "rgba(255,255,255,0.35)", lineHeight: 1 }}>Step</span>
        <span style={{ fontSize: "18px", fontWeight: 900, color: "#00d4aa", lineHeight: 1 }}>{s.step}</span>
      </div>
      <h3 className="text-sm font-bold text-white mb-1.5">{s.title}</h3>
      <p className="text-xs leading-relaxed" style={{ color: "rgba(255,255,255,0.50)" }}>{s.description}</p>
    </div>
  );
}
