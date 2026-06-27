"use client";

import { useEffect, useState } from "react";
import EbookModal from "./EbookModal";

export default function EbookPopup() {
  const [open, setOpen] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setOpen(true), 6000);
    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setOpen(false);
    setDismissed(true);
  };

  return (
    <>
      <EbookModal open={open} onClose={handleClose} />

      {/* Floating button — always visible after dismissal */}
      {dismissed && !open && (
        <button
          onClick={() => setOpen(true)}
          className="fixed bottom-6 right-6 z-40 flex items-center gap-2 px-4 py-3 rounded-full font-bold text-sm shadow-lg cursor-pointer transition-all duration-200 hover:opacity-90"
          style={{ background: "#00d4aa", color: "#080f1d", border: "none", boxShadow: "0 0 24px rgba(0,212,170,0.40)" }}
        >
          Fix Your Gut — Free
        </button>
      )}
    </>
  );
}
