// src/components/common/contact-modal/useContactForm.js
import { useMemo, useState } from "react";
import { validateContact } from "./validators";

export default function useContactForm({ onClose }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    category: "프로젝트 협업",
    message: "",
  });

  const [touched, setTouched] = useState({
    name: false,
    email: false,
    category: false,
    message: false,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const errors = useMemo(() => validateContact(form), [form]);
  const isValid = Object.keys(errors).length === 0;

  const onChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const onBlur = (e) => {
    const { name } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
  };

  const touchAll = () => {
    setTouched({ name: true, email: true, category: true, message: true });
  };

  const showError = (key) => touched[key] && errors[key];

  const onSubmit = async (e) => {
    e.preventDefault();
    touchAll();

    if (!isValid) return;

    setIsSubmitting(true);
    try {
      console.log("CONTACT SUBMIT:", form);
      await new Promise((r) => setTimeout(r, 350));
      onClose();
    } finally {
      setIsSubmitting(false);
    }
  };

  const count = form.message.trim().length;

  return {
    form,
    setForm,
    errors,
    isValid,
    isSubmitting,
    onChange,
    onBlur,
    onSubmit,
    showError,
    count,
  };
}
