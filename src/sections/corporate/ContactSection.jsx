// src/sections/corporate/ContactSection.jsx
import { useState } from "react";
import ContactModal from "../../components/common/contact-modal/ContactModal";

import "./contact-section.css";

export default function ContactSection() {
  const [open, setOpen] = useState(false);

  return (
    <section id="contact" className="contact-section">
      <div className="contact-inner">
        {/* LEFT */}
        <div className="contact-left">
          <p className="contact-label">CONTACT</p>

          {/* 메인 타이틀 */}
          <h2 className="contact-title">문의</h2>

          {/* 서브 타이틀 */}
          <p className="contact-subtitle">빠르게 연결해 드릴게요</p>

          {/* 설명 */}
          <p className="contact-desc">
            프로젝트 협업, 서비스 제휴, 도입 상담 등 무엇이든 편하게 남겨주세요.
            <br />
            확인 후 가장 빠른 채널로 답변드립니다.
          </p>
        </div>

        {/* RIGHT */}
        <div className="contact-right">
          <div className="contact-ctaCard">
            <p className="contact-ctaTitle">지금 문의 남기기</p>
            <p className="contact-ctaDesc">영업일 기준 24시간 내 회신드립니다.</p>

            <button
              type="button"
              className="contact-ctaBtn"
              onClick={() => setOpen(true)}
            >
              문의하기
            </button>

            {/* 카드 하단: 즉시 연락 */}
            <div className="contact-ctaMeta">
              <div className="contact-ctaRow">
                <span>이메일</span>
                <strong>prore0606@gmail.com</strong>
              </div>

              <div className="contact-ctaRow">
                <span>전화번호</span>
                <strong>010-8490-1181</strong>
              </div>

              <div className="contact-ctaRow">
                <span>위치</span>
                <strong>
                  02832 서울특별시 동대문구 경희대로26
                  <br />
                  삼의원창업센터 307호
                </strong>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ContactModal open={open} onClose={() => setOpen(false)} />
    </section>
  );
}
