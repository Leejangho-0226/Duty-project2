import React, { useEffect, useState } from "react";
import "./back-to-top.css";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      // 280px 이상 내려가면 표시
      setVisible(window.scrollY > 280);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll(); // 처음 로딩 시 현재 위치 반영

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const goTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      type="button"
      className={`back-to-top ${visible ? "is-visible" : ""}`}
      onClick={goTop}
      aria-label="맨 위로 이동"
      title="맨 위로"
    >
      ↑
    </button>
  );
}
