"use client";

import { Check } from "lucide-react";

const plans = [
  {
    name: "Transform",
    price: "₹14,999",
    duration: "/ quarter",
    tag: "Most Popular",
    description: "The complete package for serious, lasting transformation.",
    features: [
      "Personalised workout plan",
      "Custom meal plan",
      "Daily exercise form correction",
      "Fortnight progress check-ins",
      "24×7 WhatsApp support",
    ],
    cta: "Start Transforming",
    highlight: false,
  },
  {
    name: "Elite",
    price: "₹14,999",
    duration: "/ month",
    tag: "Premium",
    description: "1-on-1 intensive coaching for maximum, accelerated results.",
    features: [
      "Everything in Transform",
      "Daily check-ins",
      "Live training sessions",
      "Blood work & health analysis",
      "Priority 24/7 access",
      "Nutrition & recovery planning",
    ],
    cta: "Go Elite",
    highlight: true,
  },
];

export default function Plans() {
  return (
    <section id="plans" className="pt-20 pb-14 px-6" style={{ background: "#080f1d" }}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
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
            Pricing
          </div>
          <h2 className="text-3xl md:text-4xl font-black mb-2">
            <span className="text-white">Choose Your </span>
            <span style={{ color: "#00d4aa" }}>Transformation Plan</span>
          </h2>
          <p className="text-sm max-w-xl mx-auto" style={{ color: "rgba(255,255,255,0.50)" }}>
            No lock-ins. Cancel anytime. Every plan is built around your goals, not a generic template.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6 max-w-3xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className="relative rounded-2xl p-6 flex flex-col transition-all duration-300"
              style={{
                background: plan.highlight ? "rgba(0,212,170,0.06)" : "#0a1628",
                border: plan.highlight ? "2px solid rgba(0,212,170,0.60)" : "1px solid rgba(255,255,255,0.08)",
                boxShadow: plan.highlight ? "0 0 40px rgba(0,212,170,0.12)" : "none",
              }}
            >
              {/* Tag */}
              {plan.tag && (
                <div
                  className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-black uppercase tracking-wider whitespace-nowrap"
                  style={{ background: "#00d4aa", color: "#080f1d" }}
                >
                  {plan.tag}
                </div>
              )}

              {/* Plan info */}
              <div className="mb-4">
                <h3 className="text-lg font-black text-white mb-1">{plan.name}</h3>
                <div className="flex items-baseline gap-1 mb-2">
                  <span className="text-3xl font-black" style={{ color: plan.highlight ? "#00d4aa" : "#ffffff" }}>
                    {plan.price}
                  </span>
                  <span className="text-sm" style={{ color: "rgba(255,255,255,0.40)" }}>{plan.duration}</span>
                </div>
                <p className="text-xs leading-relaxed" style={{ color: "rgba(255,255,255,0.50)" }}>{plan.description}</p>
              </div>

              {/* Features */}
              <ul className="space-y-2 mb-5 flex-1">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center gap-2.5 text-sm" style={{ color: "rgba(255,255,255,0.75)" }}>
                    <span
                      className="flex-shrink-0 flex items-center justify-center"
                      style={{ width: "16px", height: "16px", borderRadius: "50%", background: "#00d4aa" }}
                    >
                      <Check size={9} strokeWidth={3} color="#080f1d" />
                    </span>
                    {f}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <button
                className="w-full py-3 rounded-xl font-bold text-sm transition-all duration-200 cursor-pointer hover:opacity-90"
                style={
                  plan.highlight
                    ? { background: "#00d4aa", color: "#080f1d", border: "none", boxShadow: "0 0 20px rgba(0,212,170,0.30)" }
                    : { background: "transparent", color: "#00d4aa", border: "1.5px solid rgba(0,212,170,0.50)" }
                }
                onClick={() => alert("Booking coming soon! Payment integration in progress.")}
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>

        {/* Note */}
        <p className="text-center text-sm mt-6" style={{ color: "rgba(255,255,255,0.35)" }}>
          Not sure which plan is right for you?{" "}
          <a href="#contact" style={{ color: "#00d4aa" }} className="hover:underline">
            Book a quick 15-min call.
          </a>
        </p>
      </div>
    </section>
  );
}
