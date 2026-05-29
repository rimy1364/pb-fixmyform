// Social icons as inline SVGs to avoid lucide version issues

const links = {
  Quick: [
    { label: "About", href: "#about" },
    { label: "Transformations", href: "#transformations" },
    { label: "Plans", href: "#plans" },
    { label: "Testimonials", href: "#testimonials" },
  ],
  Programs: [
    { label: "Kickstart", href: "#plans" },
    { label: "Transform", href: "#plans" },
    { label: "Elite", href: "#plans" },
    { label: "Free Consultation", href: "#plans" },
  ],
};

export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 pt-10 pb-8 px-5">
      {/* Top gradient line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00C2FF]/40 to-transparent" />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-10">
          {/* Brand */}
          <div className="col-span-2 md:col-span-2">
            <div className="text-2xl font-black tracking-widest mb-4">
              <span className="gradient-text">FIX</span>
              <span className="text-white">YOUR</span>
              <span className="gradient-text">BODY</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs mb-6">
              Science-backed fitness consulting that transforms your body and
              your mindset. Founded by Prateek Bansal.
            </p>
            {/* Social */}
            <div className="flex gap-4">
              {[
                {
                  href: "#",
                  label: "Instagram",
                  svg: (
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                    </svg>
                  ),
                },
                {
                  href: "#",
                  label: "YouTube",
                  svg: (
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"/>
                    </svg>
                  ),
                },
                {
                  href: "#",
                  label: "Twitter/X",
                  svg: (
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                    </svg>
                  ),
                },
              ].map(({ href, label, svg }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-gray-400 hover:border-[#00C2FF] hover:text-[#00C2FF] transition-all"
                >
                  {svg}
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(links).map(([group, items]) => (
            <div key={group}>
              <h4 className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-4">
                {group}
              </h4>
              <ul className="space-y-3">
                {items.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      className="text-sm text-gray-400 hover:text-white transition-colors"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} FIXYOURBODY. All rights reserved. Founded by Prateek Bansal.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-xs text-gray-500 hover:text-gray-300 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-xs text-gray-500 hover:text-gray-300 transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-xs text-gray-500 hover:text-gray-300 transition-colors">
              Refund Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
