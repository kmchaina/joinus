"use client";

import { useLocale } from "next-intl";
import { useParams } from "next/navigation";
import { useTransition } from "react";
import GB from "country-flag-icons/react/3x2/GB";
import TZ from "country-flag-icons/react/3x2/TZ";
import { usePathname, useRouter } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";

const flags: Record<string, React.ElementType> = { en: GB, sw: TZ };
const codes: Record<string, string> = { en: "EN", sw: "SW" };

export default function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const params = useParams();
  const [isPending, startTransition] = useTransition();

  function switchTo(next: string) {
    if (next === locale) return;
    startTransition(() => {
      // @ts-expect-error -- params from the dynamic segment are passed through
      router.replace({ pathname, params }, { locale: next });
    });
  }

  return (
    <div
      className="flex items-center gap-0.5 p-0.5 rounded-lg bg-cream"
      role="group"
      aria-label="Language"
    >
      {routing.locales.map((l) => {
        const Flag = flags[l];
        const active = l === locale;
        return (
          <button
            key={l}
            onClick={() => switchTo(l)}
            disabled={isPending}
            aria-pressed={active}
            className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-md text-xs font-semibold transition-colors disabled:opacity-50 ${
              active
                ? "bg-green text-white shadow-sm"
                : "text-navy/55 hover:text-navy hover:bg-white"
            }`}
          >
            <Flag
              className={`w-4 h-auto rounded-[2px] ${active ? "" : "ring-1 ring-navy/10"}`}
            />
            {codes[l]}
          </button>
        );
      })}
    </div>
  );
}
