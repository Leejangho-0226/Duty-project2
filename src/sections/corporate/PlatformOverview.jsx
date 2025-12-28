// src/sections/corporate/PlatformOverview.jsx
import "./platform-overview.css";

// 아이콘 이미지 import
import customerIcon from "@/assets/corporate/images/platform-customer.png";
import growthIcon from "@/assets/corporate/images/platform-growth.png";
import innovationIcon from "@/assets/corporate/images/platform-innovation.png";
import trustIcon from "@/assets/corporate/images/platform-trust.png";

export default function PlatformOverview() {
  const items = [
    {
      no: "01",
      title: "고객 중심 문제 해결",
      icon: customerIcon,
    },
    {
      no: "02",
      title: "함께 성장하는 조직",
      icon: growthIcon,
    },
    {
      no: "03",
      title: "창의적 기술 혁신",
      icon: innovationIcon,
    },
    {
      no: "04",
      title: "신뢰 기반 지속 성장",
      icon: trustIcon,
    },
  ];

  return (
    <section id="tech" className="platform-overview" aria-label="Platform Overview">
      <div className="platform-overview__inner">
        <div className="platform-overview__grid">
          {/* LEFT */}
          <div className="platform-overview__intro">
            <h2 className="platform-overview__title">
              저희는 지속 가능한 가치를 만들어 성장합니다.
            </h2>

            <p className="platform-overview__desc">
              고객의 문제를 기준으로 구조를 설계하고, 기술로 경험을 연결해
              서비스가 자연스럽게 확장되도록 만듭니다.
            </p>
          </div>

          {/* RIGHT (깔끔 버전) */}
          <div className="platform-overview__cards platform-overview__cards--clean">
            {items.map((item, idx) => (
              <div
                key={item.no}
                className={`platform-tile platform-tile--${idx + 1}`}
              >
                <img
                  src={item.icon}
                  alt={item.title}
                  className="platform-tile__img"
                />

                <div className="platform-tile__meta">
                  <span className="platform-tile__no">{item.no}</span>
                  <h3 className="platform-tile__title">{item.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
