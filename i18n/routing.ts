import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  // English is the default and first language; Swahili is the toggle.
  locales: ["en", "sw"],
  defaultLocale: "en",
  // Default locale (English) has no prefix: "/", "/about".
  // Swahili is served under "/sw", "/sw/about".
  localePrefix: "as-needed",
});

export type Locale = (typeof routing.locales)[number];
