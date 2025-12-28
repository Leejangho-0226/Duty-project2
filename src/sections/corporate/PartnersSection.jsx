// src/sections/corporate/PartnersSection.jsx
import React from "react";
import "./partners-section.css";

import google from "../../assets/common/icons/google.svg";
import hyundai from "../../assets/common/icons/hyundai.svg";
import kakao from "../../assets/common/icons/kakao.svg";
import lg from "../../assets/common/icons/lg.svg";
import line from "../../assets/common/icons/line.svg";
import naver from "../../assets/common/icons/naver.svg";
import nexon from "../../assets/common/icons/nexon.svg";
import samsung from "../../assets/common/icons/samsung.svg";

export default function PartnersSection() {
  const partners = [
    { name: "Kakao", src: kakao },
    { name: "Samsung", src: samsung },
    { name: "Naver", src: naver },
    { name: "LG", src: lg },
    { name: "Google", src: google },
    { name: "LINE", src: line },
    { name: "Hyundai", src: hyundai },
    { name: "Nexon", src: nexon },
  ];

  return (
    <section id="partners" className="partners-section" aria-label="Partners">
      <div className="partners-inner">
        {/* 상단 타이틀 */}
        <div className="partners-header">
          <div className="partners-label">PARTNERS</div>
          <h2 className="partners-title">신뢰로 연결된 우리의 파트너</h2>
          <p className="partners-sub">
            의료 · 교육 · 플랫폼 기업과 함께합니다
          </p>
        </div>

        {/* 로고 그리드 */}
        <div className="partners-logos" role="list">
          {partners.map((p) => (
            <div key={p.name} className="partners-logo" role="listitem">
              <img
                className="partners-logo__img"
                src={p.src}
                alt={p.name}
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
