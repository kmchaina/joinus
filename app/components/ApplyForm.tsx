"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { CheckCircle2 } from "lucide-react";
import { site } from "@/lib/site";

const fieldClass =
  "w-full border border-navy/15 rounded-lg px-4 py-3 text-sm text-navy placeholder:text-navy/30 focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/20 bg-white";

export default function ApplyForm() {
  const t = useTranslations("Apply");
  const tc = useTranslations("Common");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1100));
    setLoading(false);
    setSubmitted(true);
  }

  const loanTypes = t.raw("loanTypes") as string[];
  const businessTypes = t.raw("businessTypes") as string[];

  if (submitted) {
    return (
      <div className="bg-green-light border border-green/20 rounded-2xl p-10 text-center">
        <CheckCircle2 className="w-12 h-12 text-green mx-auto mb-4" />
        <h3 className="font-heading font-bold text-navy text-2xl mb-2">{t("successTitle")}</h3>
        <p className="text-navy/70">{t("successBody")}</p>
        <p className="text-navy/60 text-sm mt-4">
          {t("urgent")}{" "}
          <a href={`tel:${site.phonesTel[0]}`} className="text-gold font-semibold">
            {site.phones[0]}
          </a>
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-7">
      {/* Personal */}
      <div>
        <h3 className="font-heading font-bold text-navy text-lg mb-4 pb-2 border-b border-navy/10">
          {t("personalTitle")}
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label className="block text-sm font-semibold text-navy mb-1.5">{tc("fullName")}</label>
            <input type="text" required className={fieldClass} />
          </div>
          <div>
            <label className="block text-sm font-semibold text-navy mb-1.5">{tc("phone")}</label>
            <input type="tel" required className={fieldClass} />
          </div>
          <div>
            <label className="block text-sm font-semibold text-navy mb-1.5">
              {tc("email")} <span className="text-navy/40 font-normal">({tc("optional")})</span>
            </label>
            <input type="email" className={fieldClass} />
          </div>
          <div>
            <label className="block text-sm font-semibold text-navy mb-1.5">{tc("location")}</label>
            <input type="text" required className={fieldClass} />
          </div>
        </div>
      </div>

      {/* Loan */}
      <div>
        <h3 className="font-heading font-bold text-navy text-lg mb-4 pb-2 border-b border-navy/10">
          {t("loanTitle")}
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label className="block text-sm font-semibold text-navy mb-1.5">{t("loanType")}</label>
            <select required defaultValue="" className={fieldClass}>
              <option value="" disabled>{tc("selectPlaceholder")}</option>
              {loanTypes.map((x) => (
                <option key={x}>{x}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-sm font-semibold text-navy mb-1.5">{t("businessType")}</label>
            <select required defaultValue="" className={fieldClass}>
              <option value="" disabled>{tc("selectPlaceholder")}</option>
              {businessTypes.map((x) => (
                <option key={x}>{x}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-sm font-semibold text-navy mb-1.5">{t("amount")}</label>
            <input type="text" required placeholder="5,000,000" className={fieldClass} />
          </div>
          <div>
            <label className="block text-sm font-semibold text-navy mb-1.5">
              {t("uploadId")} <span className="text-navy/40 font-normal">({tc("optional")})</span>
            </label>
            <input
              type="file"
              accept="image/*,.pdf"
              className={`${fieldClass} file:mr-3 file:py-1 file:px-3 file:border file:border-navy/20 file:rounded file:text-xs file:font-medium file:text-navy file:bg-cream cursor-pointer`}
            />
          </div>
        </div>
        <div className="mt-5">
          <label className="block text-sm font-semibold text-navy mb-1.5">{t("purpose")}</label>
          <textarea required rows={4} className={`${fieldClass} resize-none`} />
        </div>
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full bg-gold hover:bg-gold-dark disabled:opacity-60 text-white font-semibold py-4 rounded-lg transition-colors text-base"
      >
        {loading ? tc("submitting") : t("submit")}
      </button>
    </form>
  );
}
