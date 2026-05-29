"use client";

const credentials = [
  "Certified Strength & Conditioning Coach",
  "Sports Nutrition Specialist",
  "5+ Years Coaching Experience",
  "500+ Successful Transformations",
];

export default function About() {
  return (
    <section id="about" className="py-16 px-5">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
          {/* Image placeholder */}
          <div className="relative order-2 md:order-1">
            <div className="relative w-full aspect-[3/4] max-w-xs sm:max-w-sm mx-auto md:mx-0 rounded-2xl overflow-hidden border border-[#00C2FF]/20 glow-blue-sm">
              <div className="absolute inset-0 bg-gradient-to-br from-[#0D1528] via-[#0A1A2E] to-[#0A0F1E] flex items-end p-6">
                <div className="w-full">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#00C2FF] to-[#00E5A0] mx-auto mb-3 flex items-center justify-center text-3xl font-black text-[#0A0F1E]">
                    PB
                  </div>
                  <p className="text-center text-xs text-gray-500 mt-2">
                    Add your photo here
                  </p>
                </div>
              </div>
              <div className="absolute top-4 right-4 w-10 h-10 border-t-2 border-r-2 border-[#00C2FF]/40 rounded-tr-lg" />
              <div className="absolute bottom-4 left-4 w-10 h-10 border-b-2 border-l-2 border-[#00E5A0]/40 rounded-bl-lg" />
            </div>

            {/* Floating badge — anchored so it doesn't overflow on mobile */}
            <div className="absolute bottom-0 right-0 translate-y-1/2 translate-x-0 sm:translate-x-4 bg-[#0D1528] border border-[#00C2FF]/30 rounded-xl p-3 shadow-xl glow-blue-sm">
              <div className="text-xl font-black gradient-text">500+</div>
              <div className="text-xs text-gray-400">Lives Changed</div>
            </div>
          </div>

          {/* Content */}
          <div className="order-1 md:order-2 mt-0 md:mt-0">
            <div className="inline-block px-3 py-1 rounded-full border border-[#00C2FF]/30 bg-[#00C2FF]/10 text-[#00C2FF] text-xs font-semibold uppercase tracking-widest mb-4">
              About The Founder
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-5 leading-tight">
              Meet{" "}
              <span className="gradient-text">Prateek</span>
              <br />
              <span className="text-white">Bansal</span>
            </h2>

            <p className="text-gray-400 leading-relaxed mb-4 text-sm sm:text-base">
              Prateek Bansal founded <strong className="text-white">FIXYOURBODY</strong> with one
              mission — to cut through the noise of the fitness industry and
              deliver real, sustainable results. No gimmicks. No fad diets.
              Just evidence-based coaching tailored to your body and lifestyle.
            </p>

            <p className="text-gray-400 leading-relaxed mb-7 text-sm sm:text-base">
              Having transformed 500+ individuals — from busy professionals to
              competitive athletes — Prateek brings a no-excuse approach to
              every client. He believes the right form is the foundation of
              everything: in the gym and in life.
            </p>

            <ul className="space-y-3">
              {credentials.map((c) => (
                <li key={c} className="flex items-center gap-3 text-sm text-gray-300">
                  <span className="flex-shrink-0 w-5 h-5 rounded-full bg-gradient-to-br from-[#00C2FF] to-[#00E5A0] flex items-center justify-center">
                    <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                      <path d="M1 4L3.5 6.5L9 1" stroke="#0A0F1E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  {c}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
