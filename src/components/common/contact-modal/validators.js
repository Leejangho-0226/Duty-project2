// src/components/common/contact-modal/validators.js
export function validateContact(v) {
  const errors = {};

  if (!v.name.trim()) errors.name = "이름을 입력해 주세요.";

  if (!v.email.trim()) errors.email = "이메일을 입력해 주세요.";
  else if (!/^\S+@\S+\.\S+$/.test(v.email)) {
    errors.email = "이메일 형식이 올바르지 않습니다.";
  }

  if (!v.category.trim()) errors.category = "문의 유형을 선택해 주세요.";

  if (!v.message.trim()) errors.message = "문의 내용을 입력해 주세요.";
  else if (v.message.trim().length < 10) {
    errors.message = "문의 내용은 10자 이상 작성해 주세요.";
  }

  return errors;
}
