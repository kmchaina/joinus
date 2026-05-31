"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { CheckCircle2 } from "lucide-react";

const fieldClass =
  "w-full border border-navy/15 rounded-lg px-4 py-3 text-sm text-navy placeholder:text-navy/30 focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/20 bg-white";

export default function ContactForm() {
  const t = useTranslations("Common");
  const tc = useTranslations("Contact");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 900));
    setLoading(false);
    setSubmitted(true);
  }

  const subjects = tc.raw("subjects") as string[];

  if (submitted) {
    return (
      <div className="bg-green-light border border-green/20 rounded-2xl p-8 text-center">
        <CheckCircle2 className="w-10 h-10 text-green mx-auto mb-3" />
        <h3 className="font-heading font-bold text-navy text-xl mb-2">{t("successTitle")}</h3>
        <p className="text-navy/70 text-sm">{t("successBody")}</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-semibold text-navy mb-1.5">{t("fullName")}</label>
          <input type="text" required className={fieldClass} />
        </div>
        <div>
          <label className="block text-sm font-semibold text-navy mb-1.5">{t("phone")}</label>
          <input type="tel" required className={fieldClass} />
        </div>
      </div>
      <div>
        <label className="block text-sm font-semibold text-navy mb-1.5">
          {t("email")} <span className="text-navy/40 font-normal">({t("optional")})</span>
        </label>
        <input type="email" className={fieldClass} />
      </div>
      <div>
        <label className="block text-sm font-semibold text-navy mb-1.5">{t("subject")}</label>
        <select required defaultValue="" className={fieldClass}>
          <option value="" disabled>{t("selectPlaceholder")}</option>
          {subjects.map((s) => (
            <option key={s}>{s}</option>
          ))}
        </select>
      </div>
      <div>
        <label className="block text-sm font-semibold text-navy mb-1.5">{t("message")}</label>
        <textarea required rows={5} className={`${fieldClass} resize-none`} />
      </div>
      <button
        type="submit"
        disabled={loading}
        className="w-full bg-navy hover:bg-navy-dark disabled:opacity-60 text-white font-semibold py-3.5 rounded-lg transition-colors"
      >
        {loading ? t("sending") : t("send")}
      </button>
    </form>
  );
}
