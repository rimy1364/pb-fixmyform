"use client";

import { useState } from "react";
import { X } from "lucide-react";

interface Props {
  open: boolean;
  onClose: () => void;
}

export default function EbookModal({ open, onClose }: Props) {
  const [form, setForm] = useState({ name: "", email: "", phone: "" });
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);
  const [error, setError] = useState("");

  if (!open) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/ebook-lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Failed");
      setDone(true);
      // trigger download
      const a = document.createElement("a");
      a.href = "/Gut Health - Complete Healing Blueprint (FIXYOURBODY).pdf";
      a.download = "Gut Health - Complete Healing Blueprint (FIXYOURBODY).pdf";
      a.click();
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center px-4"
      style={{ background: "rgba(0,0,0,0.75)", backdropFilter: "blur(6px)" }}
      onClick={e => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div
        className="relative w-full max-w-md rounded-2xl p-8"
        style={{ background: "#0a1628", border: "1px solid rgba(0,212,170,0.25)" }}
      >
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 cursor-pointer"
          style={{ background: "none", border: "none", color: "rgba(255,255,255,0.40)" }}
        >
          <X size={20} />
        </button>

        {!done ? (
          <>
            <div className="mb-6">
              <div
                className="inline-block mb-3 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest"
                style={{ background: "rgba(0,212,170,0.10)", color: "#00d4aa", border: "1px solid rgba(0,212,170,0.25)" }}
              >
                Free Download
              </div>
              <h2 className="text-2xl font-black text-white mb-1">Get Your Free Ebook</h2>
              <p className="text-sm" style={{ color: "rgba(255,255,255,0.50)" }}>
                Fill in your details and we&apos;ll give you instant access.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {[
                { key: "name", label: "Full Name", type: "text", placeholder: "Your name" },
                { key: "email", label: "Email Address", type: "email", placeholder: "you@example.com" },
                { key: "phone", label: "Phone Number", type: "tel", placeholder: "+91 98765 43210" },
              ].map(({ key, label, type, placeholder }) => (
                <div key={key}>
                  <label className="block text-xs font-semibold mb-1" style={{ color: "rgba(255,255,255,0.55)" }}>
                    {label}
                  </label>
                  <input
                    required
                    type={type}
                    placeholder={placeholder}
                    value={form[key as keyof typeof form]}
                    onChange={e => setForm(f => ({ ...f, [key]: e.target.value }))}
                    className="w-full px-4 py-3 rounded-xl text-sm text-white outline-none transition-all"
                    style={{
                      background: "rgba(255,255,255,0.05)",
                      border: "1px solid rgba(255,255,255,0.10)",
                    }}
                    onFocus={e => (e.target.style.borderColor = "rgba(0,212,170,0.60)")}
                    onBlur={e => (e.target.style.borderColor = "rgba(255,255,255,0.10)")}
                  />
                </div>
              ))}

              {error && <p className="text-xs" style={{ color: "#ff6b6b" }}>{error}</p>}

              <button
                type="submit"
                disabled={loading}
                className="w-full py-3 rounded-xl font-bold text-sm transition-all duration-200 cursor-pointer hover:opacity-90 disabled:opacity-60"
                style={{ background: "#00d4aa", color: "#080f1d", border: "none" }}
              >
                {loading ? "Please wait…" : "Download Free Ebook →"}
              </button>

              <p className="text-center text-xs" style={{ color: "rgba(255,255,255,0.25)" }}>
                No spam. Unsubscribe anytime.
              </p>
            </form>
          </>
        ) : (
          <div className="text-center py-6">
            <div className="text-5xl mb-4">📥</div>
            <h2 className="text-xl font-black text-white mb-2">Your download has started!</h2>
            <p className="text-sm mb-6" style={{ color: "rgba(255,255,255,0.50)" }}>
              Check your downloads folder. Enjoy the ebook!
            </p>
            <button
              onClick={onClose}
              className="px-6 py-2.5 rounded-xl font-bold text-sm cursor-pointer hover:opacity-90"
              style={{ background: "#00d4aa", color: "#080f1d", border: "none" }}
            >
              Close
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
