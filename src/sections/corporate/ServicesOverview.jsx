// src/sections/corporate/ServicesOverview.jsx
import { useState } from "react";
import "./services-section.css";

import proreImg from "../../assets/prore/images/prore.png";
import healingyouImg from "../../assets/healingyou/images/healingyou.png";
import dutyonImg from "../../assets/dutyon/images/dutyon.png";

import ServiceModal from "../../components/common/service-modal/ServiceModal";

const services = [
  {
    key: "prore",
    title: "Prore",
    desc: "국내 유일한 통합형 재활 교육 플랫폼",
    image: proreImg,
    externalUrl: "https://www.prore.co.kr/main",
    bullets: [
      "재활·운동·국시 대비 통합 교육",
      "의료 전문가 기반 커리큘럼",
      "현장 중심 실무 콘텐츠 제공",
    ],
  },
  {
    key: "healingyou",
    title: "HealingYou",
    desc: "따뜻한 감성 헬스케어 커머스",
    image: healingyouImg,
    externalUrl: "https://www.xn--9y2bo8vwym.kr/",
    bullets: [
      "헬스케어 상품 큐레이션",
      "전문가 추천 기반 콘텐츠",
      "일상 속 회복을 돕는 서비스",
    ],
  },
  {
    key: "dutyon",
    title: "DutyOn",
    desc: "AI 간호 스케줄링 & 커뮤니티 플랫폼",
    image: dutyonImg,
    externalUrl: "https://duty-one.vercel.app/",
    bullets: [
      "AI 기반 간호 근무 스케줄 자동화",
      "교대 근무 피로도 최소화 설계",
      "간호사 커뮤니티 및 협업 기능",
    ],
  },
];

export default function ServicesOverview() {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(null);

  const openModal = (service) => {
    setSelected(service);
    setOpen(true);
  };

  const closeModal = () => {
    setOpen(false);
    setSelected(null);
  };

  return (
    <>
      <section id="services" className="svc">
        <div className="svc__inner">
          <header className="svc__header">
            <h2 className="svc__title">서비스</h2>
          </header>

          <div className="svc__grid">
            {services.map((s) => (
              <article
                key={s.key}
                className="svc-card"
                style={{ "--bg": `url(${s.image})` }}
              >
                <div className="svc-card__bg" aria-hidden="true" />
                <div className="svc-card__overlay" aria-hidden="true" />
                <div className="svc-card__grain" aria-hidden="true" />

                <div className="svc-card__content">
                  <h3 className="svc-card__title">{s.title}</h3>
                  <p className="svc-card__desc">{s.desc}</p>
                </div>

                <button
                  type="button"
                  className="svc-card__arrow"
                  aria-label={`${s.title} 상세 보기`}
                  onClick={() => openModal(s)}
                >
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M5 12h12"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                    <path
                      d="M13 6l6 6-6 6"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </article>
            ))}
          </div>
        </div>
      </section>

      {selected && (
        <ServiceModal
          open={open}
          onClose={closeModal}
          title={selected.title}
          image={selected.image}
          bullets={selected.bullets}
          externalUrl={selected.externalUrl}
        />
      )}
    </>
  );
}
