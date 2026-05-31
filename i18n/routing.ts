import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  // English is the default and first language; Swahili is the toggle.
  locales: ["en", "sw"],
  defaultLocale: "en",
  // Static export has no middleware to rewrite paths, so every locale is
  // prefixed: English at "/en/...", Swahili at "/sw/...". The site root "/"
  // redirects to "/en/" via public/.htaccess.
  localePrefix: "always",
});

export type Locale = (typeof routing.locales)[number];
