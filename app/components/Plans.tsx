"use client";

import { useState, useRef, useCallback } from "react";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Elite",
    tag: "Premium",
    highlight: true,
    description: "1-on-1 intensive coaching for maximum, accelerated results.",
    features: [
      "Daily 1-on-1 video coaching",
      "Live form correction",
      "Personalised workout plan",
      "Custom meal plan",
      "Fortnight progress check-ins",
      "Priority 24×7 on call / WhatsApp access",
      
    ],
    durations: [
      { label: "1 Month", price: "₹19,999", was: "₹24,999" },
      { label: "3 Months", price: "₹49,999", was: "₹64,999" },
      { label: "6 Months", price: "₹74,999", was: "₹99,999" },
    ],
    cta: "Go Elite",
  },
  {
    name: "Transform",
    tag: "Most Popular",
    highlight: false,
    description: "The complete package for serious, lasting transformation.",
    features: [
      "Daily exercise form correction via whatsapp",
      "Personalised workout plan",
      "Custom meal plan",
      "Fortnight progress check-ins",
      "24×7 WhatsApp support",
    ],
    durations: [
      { label: "3 Months", price: "₹14,999", was: "₹19,999" },
      { label: "6 Months", price: "₹24,999", was: "₹34,999" },
      { label: "12 Months", price: "₹44,999", was: "₹59,999" },
    ],
    cta: "Start Transforming",
  },
  {
    name: "Basic",
    tag: "Starter",
    highlight: false,
    description: "Start your fitness journey with the essentials.",
    features: [
      
      "Personalised workout plan",
      "Custom meal plan",
      "Fortnight progress check-ins",
      "WhatsApp support",
    ],
    durations: [
      { label: "3 Months", price: "₹9,999", was: "₹12,999" },
      { label: "6 Months", price: "₹14,999", was: "₹19,999" },
      { label: "12 Months", price: "₹24,999", was: "₹34,999" },
    ],
    cta: "Get Started",
  },
];

const WHATSAPP_NUMBER = "919205802858";

const openWhatsApp = (planName: string, duration: string) => {
  const message = `Hi Prateek, I'd like to get started with the ${planName.toUpperCase()} plan (${duration}) on FIXYOURBODY. Can we connect?`;
  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`, "_blank");
};

export default function Plans() {
  const [selected, setSelected] = useState([0, 0, 0]);
  const touchStartX = useRef<number | null>(null);

  const handleSwipe = useCallback((pi: number, startX: number, endX: number) => {
    const diff = startX - endX;
    if (Math.abs(diff) < 40) return;
    const total = plans[pi].durations.length;
    setSelected(prev => {
      const next = [...prev];
      next[pi] = diff > 0
        ? Math.min(prev[pi] + 1, total - 1)
        : Math.max(prev[pi] - 1, 0);
      return next;
    });
  }, []);

  return (
    <section id="plans" className="pt-20 pb-14 px-6" style={{ background: "#080f1d" }}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-black mb-2">
            <span className="text-white">Choose Your </span>
            <span style={{ color: "#00d4aa" }}>Transformation Plan</span>
          </h2>
          <p className="text-sm max-w-xl mx-auto" style={{ color: "rgba(255,255,255,0.50)" }}>
            No lock-ins. Cancel anytime. Every plan is built around your goals, not a generic template.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {plans.map((plan, pi) => {
            const dur = plan.durations[selected[pi]];
            return (
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

                {/* Plan name + description */}
                <div className="mb-4">
                  <h3 className="text-lg font-black text-white mb-1">{plan.name}</h3>
                  <p className="text-xs leading-relaxed" style={{ color: "rgba(255,255,255,0.50)" }}>{plan.description}</p>
                </div>

                {/* Duration picker — all visible, swipe to change */}
                <div
                  className="flex gap-1.5 mb-4 p-1 rounded-xl select-none"
                  style={{ background: "rgba(255,255,255,0.04)", touchAction: "pan-y" }}
                  onTouchStart={e => { touchStartX.current = e.touches[0].clientX; }}
                  onTouchEnd={e => {
                    if (touchStartX.current === null) return;
                    handleSwipe(pi, touchStartX.current, e.changedTouches[0].clientX);
                    touchStartX.current = null;
                  }}
                >
                  {plan.durations.map((d, di) => (
                    <button
                      key={d.label}
                      onClick={() => { const next = [...selected]; next[pi] = di; setSelected(next); }}
                      className="flex-1 py-1.5 rounded-lg text-xs font-bold transition-all duration-200 cursor-pointer whitespace-nowrap"
                      style={
                        selected[pi] === di
                          ? { background: "#00d4aa", color: "#080f1d", border: "none" }
                          : { background: "transparent", color: "rgba(255,255,255,0.45)", border: "none" }
                      }
                    >
                      {d.label}
                    </button>
                  ))}
                </div>

                {/* Price */}
                <div className="mb-4">
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl font-black" style={{ color: plan.highlight ? "#00d4aa" : "#ffffff" }}>
                      {dur.price}
                    </span>
                    <span className="text-sm" style={{ color: "rgba(255,255,255,0.40)" }}>/ {dur.label.toLowerCase()}</span>
                  </div>
                  <div className="flex items-center gap-2 mt-0.5">
                    <span className="text-sm line-through" style={{ color: "rgba(255,255,255,0.30)" }}>{dur.was}</span>
                    <span className="text-xs font-bold px-2 py-0.5 rounded-full" style={{ background: "rgba(255,183,0,0.15)", color: "#ffb700", border: "1px solid rgba(255,183,0,0.30)" }}>
                      Launch Price
                    </span>
                  </div>
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
                  onClick={() => openWhatsApp(plan.name, dur.label)}
                >
                  {plan.cta}
                </button>
              </div>
            );
          })}
        </div>

        {/* Note */}
        <p className="text-center text-sm mt-6" style={{ color: "rgba(255,255,255,0.35)" }}>
          Not sure which plan is right for you?{" "}
          <button
            onClick={() => window.dispatchEvent(new Event("open-calendly"))}
            style={{ color: "#00d4aa", background: "none", border: "none", cursor: "pointer", padding: 0, fontSize: "inherit" }}
            className="hover:underline"
          >
            Book a free 15-min call.
          </button>
        </p>
      </div>
    </section>
  );
}
