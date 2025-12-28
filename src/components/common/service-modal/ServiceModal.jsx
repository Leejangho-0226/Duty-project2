// src/components/common/service-modal/ServiceModal.jsx
import { useEffect, useMemo } from "react";
import "./service-modal.css";

export default function ServiceModal({
  open,
  onClose,
  title,
  image,
  bullets = [],
  externalUrl,
}) {
  const titleId = useMemo(() => {
    const safe = String(title || "service").replace(/\s+/g, "-").toLowerCase();
    return `svc-modal-title-${safe}`;
  }, [title]);

  useEffect(() => {
    if (!open) return;

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };

    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open, onClose]);

  if (!open) return null;

  const hasUrl = Boolean(externalUrl);

  const goExternal = () => {
    if (!hasUrl) return;
    window.open(externalUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <div
      className="svc-modal"
      role="dialog"
      aria-modal="true"
      aria-labelledby={titleId}
    >
      <button
        type="button"
        className="svc-modal__backdrop"
        aria-label="모달 닫기"
        onClick={onClose}
      />

      <div className="svc-modal__panel">
        <button
          type="button"
          className="svc-modal__close"
          aria-label="닫기"
          onClick={onClose}
        >
          ×
        </button>

        <div className="svc-modal__layout">
          <div className="svc-modal__left">
            <img className="svc-modal__img" src={image} alt={`${title} 이미지`} />
          </div>

          <div className="svc-modal__right">
            <div className="svc-modal__head">
              <div id={titleId} className="svc-modal__title">
                {title}
              </div>
            </div>

            <div className="svc-modal__desc">
              {bullets.map((t, i) => (
                <div key={`${title}-${i}`} className="svc-modal__line">
                  {t}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="svc-modal__footer">
          <button
            type="button"
            className={`svc-modal__cta ${hasUrl ? "" : "is-disabled"}`}
            onClick={goExternal}
            aria-disabled={!hasUrl}
            title={!hasUrl ? "외부 링크가 없습니다" : "외부 링크로 이동"}
          >
            바로가기
          </button>
        </div>
      </div>
    </div>
  );
}
