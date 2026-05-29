"use client";

import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Rohan Gupta",
    role: "Software Engineer, Bangalore",
    text: "I'd tried gym for 2 years with zero progress. Prateek fixed my fundamentals in week one. By week 12, I was unrecognisable. Best investment I've ever made.",
    stars: 5,
    result: "-16 kg in 12 weeks",
  },
  {
    name: "Ananya Sharma",
    role: "Marketing Manager, Delhi",
    text: "The nutrition plan was so practical — I never felt like I was on a diet. Prateek's WhatsApp check-ins kept me accountable through the toughest weeks.",
    stars: 5,
    result: "-11 kg in 10 weeks",
  },
  {
    name: "Karthik R.",
    role: "Entrepreneur, Mumbai",
    text: "With a 70-hour work week, I thought fitness was impossible. Prateek proved me wrong. His approach fit around my crazy schedule perfectly.",
    stars: 5,
    result: "-20 kg in 16 weeks",
  },
  {
    name: "Meera Joshi",
    role: "Doctor, Pune",
    text: "As a doctor I was sceptical of online coaching. Prateek's evidence-based approach won me over. My bloodwork improved alongside the physical transformation.",
    stars: 5,
    result: "-9 kg in 8 weeks",
  },
  {
    name: "Aditya Verma",
    role: "CA, Hyderabad",
    text: "I went from barely doing 5 pushups to benching 80kg in 6 months. FIXYOURBODY is not just a programme — it's a complete mindset shift.",
    stars: 5,
    result: "+8 kg muscle",
  },
  {
    name: "Sunita Patel",
    role: "Teacher, Ahmedabad",
    text: "Post-pregnancy I felt lost. Prateek built a plan that respected my recovery and delivered results I didn't think were possible for me.",
    stars: 5,
    result: "-14 kg in 14 weeks",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="pt-20 pb-16 px-5 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00C2FF]/30 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-block px-3 py-1 rounded-full border border-[#00C2FF]/30 bg-[#00C2FF]/10 text-[#00C2FF] text-xs font-semibold uppercase tracking-widest mb-3">
            Testimonials
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-3">
            <span className="text-white">What Clients </span>
            <span className="gradient-text">Are Saying</span>
          </h2>
          <p className="text-gray-400 text-sm sm:text-base max-w-xl mx-auto">
            Don&apos;t take our word for it — hear from people who made the leap.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="rounded-2xl p-6 bg-[#0D1528] border border-white/10 hover:border-[#00C2FF]/30 transition-all duration-300 flex flex-col"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.stars }).map((_, s) => (
                  <Star
                    key={s}
                    size={14}
                    className="fill-[#FFB800] text-[#FFB800]"
                  />
                ))}
              </div>

              {/* Quote */}
              <p className="text-sm text-gray-300 leading-relaxed mb-5 flex-1">
                &ldquo;{t.text}&rdquo;
              </p>

              {/* Footer */}
              <div className="flex items-center justify-between pt-4 border-t border-white/10">
                <div>
                  <div className="font-bold text-white text-sm">{t.name}</div>
                  <div className="text-xs text-gray-500">{t.role}</div>
                </div>
                <div className="text-right">
                  <div className="text-xs font-bold gradient-text">{t.result}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
