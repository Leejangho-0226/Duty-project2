// src/sections/corporate/CompanyHero.jsx
import React, { useRef } from "react";
import "./company-hero.css";

export default function CompanyHero() {
  const heroRef = useRef(null);

  const scrollToNextSection = () => {
    if (!heroRef.current) return;

    // 히어로 다음에 오는 섹션
    const nextSection = heroRef.current.nextElementSibling;
    if (!nextSection) return;

    nextSection.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <section
      ref={heroRef}
      className="company-hero"
      aria-label="Company Hero"
    >
      {/* 배경 비디오 (GitHub Pages base 경로 대응) */}
      <video
        className="company-hero__video"
        src={`${import.meta.env.BASE_URL}videos/company-hero.mp4`}
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
      />

      {/* 오버레이 */}
      <div className="company-hero__overlay" aria-hidden="true" />

      {/* 컨텐츠 */}
      <div className="company-hero__inner">
        <div className="company-hero__topline">
          PRORE · HEALINGYOU · DUTYON
        </div>

        <h1 className="company-hero__title">
          IT 기반 헬스케어 통합 플랫폼
        </h1>

        <p className="company-hero__desc">
          교육 · 커머스 · 간호운영을 하나로 연결해
          <br />
          새로운 헬스케어 경험으로 확장합니다.
        </p>
      </div>

      {/* 스크롤 다운 */}
      <button
        className="company-hero__scroll"
        onClick={scrollToNextSection}
        aria-label="Scroll down"
      >
        <span className="company-hero__mouse" aria-hidden="true" />
        <span className="company-hero__scrollText">SCROLL DOWN</span>
      </button>
    </section>
  );
}
