"use client";

import { useEffect, useState } from "react";
import EbookModal from "./EbookModal";

export default function EbookPopup() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setOpen(true), 10000);
    return () => clearTimeout(timer);
  }, []);

  return <EbookModal open={open} onClose={() => setOpen(false)} />;
}
