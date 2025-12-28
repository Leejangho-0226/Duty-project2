// src/components/common/contact-modal/useModalBehavior.js
import { useEffect } from "react";

export default function useModalBehavior({ open, onClose, initialFocusRef }) {
  useEffect(() => {
    if (!open) return;

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKeyDown);

    const t = setTimeout(() => {
      initialFocusRef?.current?.focus();
    }, 0);

    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKeyDown);
      clearTimeout(t);
    };
  }, [open, onClose, initialFocusRef]);
}
