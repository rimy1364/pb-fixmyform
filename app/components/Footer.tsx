"use client";

const links = {
  Quick: [
    { label: "About",           href: "#about" },
    { label: "Transformations", href: "#transformations" },
    { label: "Plans",           href: "#plans" },
    { label: "Testimonials",    href: "#testimonials" },
  ],
  Programs: [
    { label: "Transform",          href: "#plans" },
    { label: "Elite",              href: "#plans" },
    { label: "Free Consultation",  href: "#contact" },
    { label: "Contact Us",         href: "#contact" },
  ],
};

export default function Footer() {
  return (
    <footer className="relative border-t pt-10 pb-8 px-5" style={{ background: "#080f1d", borderColor: "rgba(255,255,255,0.08)" }}>
      {/* Top teal line */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(to right, transparent, rgba(0,212,170,0.40), transparent)" }}
      />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-10">
          {/* Brand */}
          <div className="col-span-2 md:col-span-2">
            <div className="text-2xl font-black tracking-widest mb-4" style={{ letterSpacing: "-0.5px" }}>
              <span className="text-white">FIX</span>
              <span style={{ color: "#00d4aa" }}>YOUR</span>
              <span className="text-white">BODY</span>
            </div>
            <p className="text-sm leading-relaxed max-w-xs mb-6" style={{ color: "rgba(255,255,255,0.45)" }}>
              Science-backed fitness consulting that transforms your body and your mindset. Founded by Prateek Bansal.
            </p>
            {/* Social icons */}
            <div className="flex gap-4">
              {[
                {
                  href: "https://ig.me/m/fixyourbody__",
                  label: "Instagram",
                  svg: (
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                    </svg>
                  ),
                },
                {
                  href: `https://wa.me/919205802858`,
                  label: "WhatsApp",
                  svg: (
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                  ),
                },
              ].map(({ href, label, svg }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-full flex items-center justify-center transition-all"
                  style={{ border: "1px solid rgba(255,255,255,0.15)", color: "rgba(255,255,255,0.45)" }}
                  onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.borderColor = "#00d4aa"; (e.currentTarget as HTMLAnchorElement).style.color = "#00d4aa"; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(255,255,255,0.15)"; (e.currentTarget as HTMLAnchorElement).style.color = "rgba(255,255,255,0.45)"; }}
                >
                  {svg}
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(links).map(([group, items]) => (
            <div key={group}>
              <h4 className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: "rgba(255,255,255,0.30)", letterSpacing: "0.12em" }}>
                {group}
              </h4>
              <ul className="space-y-3">
                {items.map((item) => (
                  <li key={item.label}>
                    <a href={item.href} className="text-sm transition-colors hover:text-white" style={{ color: "rgba(255,255,255,0.50)" }}>
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4" style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}>
          <p className="text-xs" style={{ color: "rgba(255,255,255,0.30)" }}>
            © {new Date().getFullYear()} FIXYOURBODY. All rights reserved. Founded by Prateek Bansal.
          </p>
          <div className="flex gap-6">
            {["Privacy Policy", "Terms of Service", "Refund Policy"].map((l) => (
              <a key={l} href="#" className="text-xs transition-colors hover:text-white" style={{ color: "rgba(255,255,255,0.30)" }}>{l}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
