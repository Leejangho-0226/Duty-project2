// src/components/layout/Header.jsx
import { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [serviceOpen, setServiceOpen] = useState(false);
  const closeTimerRef = useRef(null);

  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === "/";

  // 스크롤 감지 (헤더 가독성 전환용)
  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // 특정 id가 DOM에 생길 때까지 잠깐 기다렸다가 스크롤
  const scrollToIdSafely = (id) => {
    const maxTry = 40;
    let count = 0;

    const tryScroll = () => {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
        return;
      }

      count += 1;
      if (count >= maxTry) return;
      setTimeout(tryScroll, 25);
    };

    tryScroll();
  };

  // 로고, 회사 클릭 시 항상 홈 + 맨 위로 이동
  const goTopAlways = () => {
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }, 0);
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }

    setServiceOpen(false);
  };

  // 홈 섹션으로 이동 (기술, 파트너, 문의, 서비스 섹션 등)
  const goHomeSection = (id) => {
    if (location.pathname === "/") {
      scrollToIdSafely(id);
    } else {
      navigate("/");
      setTimeout(() => scrollToIdSafely(id), 0);
    }

    setServiceOpen(false);
  };

  // 외부 링크로 이동
  const goExternal = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
    setServiceOpen(false);
  };

  // 서비스 드롭다운 열기
  const openService = () => {
    if (closeTimerRef.current) clearTimeout(closeTimerRef.current);
    setServiceOpen(true);
  };

  // 서비스 드롭다운 닫기 (딜레이 포함)
  const closeService = () => {
    closeTimerRef.current = setTimeout(() => {
      setServiceOpen(false);
    }, 120);
  };

  // 헤더 스타일 결정
  const headerClass = `header ${
    isHome ? (isScrolled ? "header--solid" : "header--top") : "header--solid"
  }`;

  const dropdownClass = `header__dropdown ${
    serviceOpen ? "header__dropdown--open" : ""
  } ${
    isHome && !isScrolled ? "header__dropdown--dark" : "header__dropdown--light"
  }`;

  return (
    <header className={headerClass}>
      <div className="header__inner">
        {/* 로고 */}
        <button
          type="button"
          className="header__logo header__link"
          onClick={goTopAlways}
        >
          DUTY4
        </button>

        {/* 메뉴 */}
        <nav className="header__nav">
          {/* 회사 : 항상 첫 화면 */}
          <button
            type="button"
            className="header__link"
            onClick={goTopAlways}
          >
            회사
          </button>

          {/* 서비스 : 클릭하면 홈의 services 섹션으로 이동, 호버하면 드롭다운 */}
          <div
            className="header__service"
            onMouseEnter={openService}
            onMouseLeave={closeService}
          >
            <button
              type="button"
              className="header__service-btn header__link"
              aria-haspopup="menu"
              aria-expanded={serviceOpen}
              onClick={() => goHomeSection("services")}
              onFocus={openService}
              onBlur={closeService}
            >
              서비스
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                className={`header__arrow ${
                  serviceOpen ? "header__arrow--open" : ""
                }`}
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6 9l6 6 6-6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            <div className={dropdownClass} role="menu">
              <button
                type="button"
                className="header__dropdown-item"
                onMouseDown={(e) => e.preventDefault()}
                onClick={() => goExternal("https://www.prore.co.kr/main")}
                role="menuitem"
              >
                Prore
              </button>

              <button
                type="button"
                className="header__dropdown-item"
                onMouseDown={(e) => e.preventDefault()}
                onClick={() => goExternal("https://www.xn--9y2bo8vwym.kr/")}
                role="menuitem"
              >
                HealingYou
              </button>

              <button
                type="button"
                className="header__dropdown-item"
                onMouseDown={(e) => e.preventDefault()}
                onClick={() => goExternal("https://duty-one.vercel.app/")}
                role="menuitem"
              >
                DutyOn
              </button>
            </div>
          </div>

          {/* 기술 */}
          <button
            type="button"
            className="header__link"
            onClick={() => goHomeSection("tech")}
          >
            기술
          </button>

          {/* 파트너 */}
          <button
            type="button"
            className="header__link"
            onClick={() => goHomeSection("partners")}
          >
            파트너
          </button>

          {/* 문의 */}
          <button
            type="button"
            className="header__link"
            onClick={() => goHomeSection("contact")}
          >
            문의
          </button>
        </nav>
      </div>
    </header>
  );
}
