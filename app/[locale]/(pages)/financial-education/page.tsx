import { setRequestLocale, getTranslations } from "next-intl/server";
import Image from "next/image";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { Link } from "@/i18n/navigation";
import PageHero from "@/app/components/PageHero";

export default async function FinancialEducationPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("Education");
  const topics = t.raw("topics") as { title: string; desc: string }[];
  const partnerTypes = t.raw("partnerTypes") as string[];

  return (
    <>
      <PageHero eyebrow={t("eyebrow")} title={t("title")} subtitle={t("subtitle")} />

      {/* Intro */}
      <section className="bg-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <h2 className="font-heading text-3xl font-bold text-navy mb-5">{t("introTitle")}</h2>
            <p className="text-navy/70 leading-relaxed">{t("intro")}</p>
          </div>
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden ring-1 ring-navy/5">
            <Image
              src="/photos/education-session.jpg"
              alt="A facilitator leading a training session at Joinus Finance"
              fill
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Topics */}
      <section className="bg-cream py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-navy mb-12 text-center">
            {t("topicsTitle")}
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {topics.map((topic) => (
              <div key={topic.title} className="bg-white rounded-2xl p-6 ring-1 ring-navy/5">
                <h3 className="font-heading font-bold text-navy text-lg mb-2">{topic.title}</h3>
                <p className="text-navy/60 text-sm leading-relaxed">{topic.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership */}
      <section className="bg-navy py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <h2 className="font-heading text-3xl font-bold text-white mb-5">{t("partnerTitle")}</h2>
            <p className="text-white/65 leading-relaxed mb-8">{t("partnerBody")}</p>
            <Link href="/contact" className="inline-flex items-center gap-2 bg-gold hover:bg-gold-dark text-white font-semibold px-7 py-3.5 rounded-lg transition-colors">
              {t("partnerCta")} <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid sm:grid-cols-2 gap-3">
            {partnerTypes.map((pt) => (
              <div key={pt} className="flex items-center gap-2.5 bg-white/[0.04] ring-1 ring-white/10 rounded-lg px-4 py-3">
                <CheckCircle2 className="w-4 h-4 text-gold flex-shrink-0" />
                <span className="text-white/80 text-sm">{pt}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
