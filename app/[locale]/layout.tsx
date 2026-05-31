import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import { notFound } from "next/navigation";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { routing } from "@/i18n/routing";
import "../globals.css";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import WhatsAppButton from "@/app/components/WhatsAppButton";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.joinusfinance.co.tz"),
  title: {
    default: "Joinus Finance Company Ltd — Microfinance Tanzania",
    template: "%s — Joinus Finance",
  },
  description:
    "Licensed Tanzanian microfinance. Joinus Finance provides affordable, responsible loans and financial education for women, entrepreneurs, and small businesses.",
  keywords: [
    "microfinance Tanzania",
    "business loans Tanzania",
    "loans for women Tanzania",
    "group loans Tanzania",
    "business loans Dar es Salaam",
    "financial education Tanzania",
    "Joinus Finance Company Ltd",
  ],
  openGraph: {
    title: "Joinus Finance Company Ltd",
    description:
      "Bringing financial freedom closer to women, entrepreneurs, and small businesses across Tanzania.",
    type: "website",
    locale: "en_TZ",
  },
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
  setRequestLocale(locale);

  return (
    <html lang={locale} className={`${inter.variable} ${playfair.variable}`}>
      <body className="min-h-screen flex flex-col bg-white text-[#1a1a2e] antialiased">
        <NextIntlClientProvider>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
          <WhatsAppButton />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
