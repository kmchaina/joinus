"use client";

import { useTranslations } from "next-intl";
import { MessageCircle } from "lucide-react";
import { site } from "@/lib/site";

export default function WhatsAppButton() {
  const t = useTranslations("WhatsApp");
  const url = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(
    t("message")
  )}`;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={t("aria")}
      className="group fixed bottom-5 right-5 z-50 flex items-center gap-0 overflow-hidden rounded-full bg-[#25D366] shadow-lg shadow-black/20 hover:bg-[#1ebe5c] transition-all duration-300"
    >
      <span className="grid place-items-center w-14 h-14 flex-shrink-0">
        <MessageCircle className="w-7 h-7 text-white" fill="white" />
      </span>
      <span className="max-w-0 group-hover:max-w-[160px] transition-all duration-300 ease-out overflow-hidden whitespace-nowrap">
        <span className="pr-5 text-white font-semibold text-sm">
          {t("tooltip")}
        </span>
      </span>
    </a>
  );
}
