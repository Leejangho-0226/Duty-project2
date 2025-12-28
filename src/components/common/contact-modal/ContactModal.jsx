// src/components/common/contact-modal/ContactModal.jsx
import { useMemo, useRef } from "react";
import "./contact-modal.css";
import useModalBehavior from "./useModalBehavior";
import useContactForm from "./useContactForm";

export default function ContactModal({ open, onClose }) {
  const titleId = useMemo(() => "contact-modal-title", []);
  const descId = useMemo(() => "contact-modal-desc", []);
  const nameRef = useRef(null);

  useModalBehavior({ open, onClose, initialFocusRef: nameRef });

  const {
    form,
    errors,
    isValid,
    isSubmitting,
    onChange,
    onBlur,
    onSubmit,
    showError,
    count,
  } = useContactForm({ onClose });

  if (!open) return null;

  return (
    <div
      className="cmodal"
      role="dialog"
      aria-modal="true"
      aria-labelledby={titleId}
      aria-describedby={descId}
    >
      <button
        className="cmodal__backdrop"
        onClick={onClose}
        aria-label="닫기(배경)"
      />

      <div className="cmodal__panel" onClick={(e) => e.stopPropagation()}>
        <div className="cmodal__header">
          <div>
            <h3 id={titleId} className="cmodal__title">
              문의
            </h3>
            <p id={descId} className="cmodal__desc">
              남겨주신 내용은 확인 후 빠르게 연락드리겠습니다.
            </p>
          </div>

          <button className="cmodal__close" onClick={onClose} aria-label="닫기">
            ✕
          </button>
        </div>

        <form className="cmodal__body" onSubmit={onSubmit}>
          <div className="cmodal__row">
            <div className="cmodal__field">
              <label htmlFor="cname">이름</label>
              <input
                id="cname"
                ref={nameRef}
                name="name"
                value={form.name}
                onChange={onChange}
                onBlur={onBlur}
                placeholder="홍길동"
                autoComplete="name"
                aria-invalid={!!showError("name")}
              />
              {showError("name") && (
                <p className="cmodal__error">{errors.name}</p>
              )}
            </div>

            <div className="cmodal__field">
              <label htmlFor="cemail">이메일</label>
              <input
                id="cemail"
                name="email"
                value={form.email}
                onChange={onChange}
                onBlur={onBlur}
                placeholder="name@example.com"
                type="email"
                autoComplete="email"
                aria-invalid={!!showError("email")}
              />
              {showError("email") && (
                <p className="cmodal__error">{errors.email}</p>
              )}
            </div>
          </div>

          <div className="cmodal__field cmodal__field--select">
            <label htmlFor="ccategory">문의 유형</label>
            <select
              id="ccategory"
              name="category"
              value={form.category}
              onChange={onChange}
              onBlur={onBlur}
              aria-invalid={!!showError("category")}
            >
              <option>프로젝트 협업</option>
              <option>서비스 제휴</option>
              <option>도입 상담</option>
              <option>기타 문의</option>
            </select>

            <p className="cmodal__help">
              어떤 문의인지 선택하면 답변 속도가 빨라집니다.
            </p>

            {showError("category") && (
              <p className="cmodal__error">{errors.category}</p>
            )}
          </div>

          <div className="cmodal__field">
            <label htmlFor="cmsg">문의 내용</label>
            <textarea
              id="cmsg"
              name="message"
              value={form.message}
              onChange={onChange}
              onBlur={onBlur}
              rows={5}
              placeholder="원하시는 내용을 간단히 적어주세요. (10자 이상)"
              aria-invalid={!!showError("message")}
            />

            <div className="cmodal__meta">
              <span className="cmodal__count">{count}/500</span>
            </div>

            {showError("message") && (
              <p className="cmodal__error">{errors.message}</p>
            )}
          </div>

          <div className="cmodal__footer">
            <button
              type="button"
              className="cmodal__btn ghost"
              onClick={onClose}
              disabled={isSubmitting}
            >
              취소
            </button>

            <button
              type="submit"
              className="cmodal__btn primary"
              disabled={!isValid || isSubmitting}
            >
              {isSubmitting ? "보내는 중..." : "보내기"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
