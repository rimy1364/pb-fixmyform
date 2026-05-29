"use client";

import { Check } from "lucide-react";

const plans = [
  {
    name: "Kickstart",
    price: "₹4,999",
    duration: "/ month",
    tag: null,
    description: "Perfect for beginners ready to build the right foundation.",
    features: [
      "Personalised workout plan",
      "Basic nutrition guidelines",
      "Weekly check-in (WhatsApp)",
      "Form correction tips",
      "Access to exercise library",
    ],
    cta: "Get Started",
    highlight: false,
  },
  {
    name: "Transform",
    price: "₹9,999",
    duration: "/ month",
    tag: "Most Popular",
    description: "The complete package for serious, lasting transformation.",
    features: [
      "Everything in Kickstart",
      "Custom meal plan",
      "2× weekly video calls",
      "24/7 chat support",
      "Progress photo analysis",
      "Supplement guidance",
    ],
    cta: "Start Transforming",
    highlight: true,
  },
  {
    name: "Elite",
    price: "₹18,999",
    duration: "/ month",
    tag: "Premium",
    description: "1-on-1 intensive coaching for maximum, accelerated results.",
    features: [
      "Everything in Transform",
      "Daily check-ins",
      "Live training sessions",
      "Blood work & health analysis",
      "Competition prep support",
      "Priority 24/7 access",
    ],
    cta: "Go Elite",
    highlight: false,
  },
];

export default function Plans() {
  return (
    <section id="plans" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-3 py-1 rounded-full border border-[#00C2FF]/30 bg-[#00C2FF]/10 text-[#00C2FF] text-xs font-semibold uppercase tracking-widest mb-4">
            Pricing
          </div>
          <h2 className="text-4xl md:text-5xl font-black mb-4">
            <span className="text-white">Choose Your</span>
            <br />
            <span className="gradient-text">Transformation Plan</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            No lock-ins. Cancel anytime. Every plan is built around your goals,
            not a generic template.
          </p>
        </div>

        {/* Cards — pt-5 gives room for the absolute tags */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-5">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl p-8 flex flex-col transition-all duration-300 ${
                plan.highlight
                  ? "bg-gradient-to-b from-[#00C2FF]/15 to-[#00E5A0]/5 border-2 border-[#00C2FF]/60 glow-blue"
                  : "bg-[#0D1528] border border-white/10 hover:border-[#00C2FF]/30"
              }`}
            >
              {/* Tag */}
              {plan.tag && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-[#00C2FF] to-[#00E5A0] text-[#0A0F1E] text-xs font-black uppercase tracking-wider whitespace-nowrap">
                  {plan.tag}
                </div>
              )}

              {/* Plan info */}
              <div className="mb-6">
                <h3 className="text-xl font-black text-white mb-2">{plan.name}</h3>
                <div className="flex items-baseline gap-1 mb-3">
                  <span
                    className={`text-4xl font-black ${
                      plan.highlight ? "gradient-text" : "text-white"
                    }`}
                  >
                    {plan.price}
                  </span>
                  <span className="text-gray-500 text-sm">{plan.duration}</span>
                </div>
                <p className="text-sm text-gray-400 leading-relaxed">{plan.description}</p>
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-8 flex-1">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm text-gray-300">
                    <span
                      className={`flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5 ${
                        plan.highlight
                          ? "bg-gradient-to-br from-[#00C2FF] to-[#00E5A0]"
                          : "bg-[#00C2FF]/20"
                      }`}
                    >
                      <Check
                        size={11}
                        strokeWidth={3}
                        className={plan.highlight ? "text-[#0A0F1E]" : "text-[#00C2FF]"}
                      />
                    </span>
                    {f}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <button
                className={`w-full py-3.5 rounded-xl font-bold text-sm transition-all duration-200 cursor-pointer ${
                  plan.highlight
                    ? "bg-gradient-to-r from-[#00C2FF] to-[#00E5A0] text-[#0A0F1E] hover:opacity-90 glow-blue"
                    : "border border-[#00C2FF]/40 text-[#00C2FF] hover:bg-[#00C2FF]/10"
                }`}
                onClick={() => alert("Booking coming soon! Payment integration in progress.")}
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>

        {/* Note */}
        <p className="text-center text-sm text-gray-500 mt-10">
          Not sure which plan is right for you?{" "}
          <a href="#" className="text-[#00C2FF] hover:underline">
            Book a free 15-min call
          </a>{" "}
          with Prateek.
        </p>
      </div>
    </section>
  );
}
