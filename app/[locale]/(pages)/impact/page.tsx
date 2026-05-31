import { setRequestLocale, getTranslations } from "next-intl/server";
import { ArrowRight } from "lucide-react";
import { Link } from "@/i18n/navigation";
import PageHero from "@/app/components/PageHero";
import StatCounter from "@/app/components/StatCounter";
import PhotoPlaceholder from "@/app/components/PhotoPlaceholder";
import { impactStats } from "@/lib/site";

// Suggested shot list for the impact gallery — guidance for the photographer.
const galleryShots = [
  "Woman entrepreneur at her shop",
  "Women's group meeting",
  "Market trader with goods",
  "Bodaboda / bajaji rider",
  "Client inside their business",
  "Training / workshop session",
  "Loan officer with a client",
  "Happy client portrait",
];

export default async function ImpactPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("Impact");
  const areas = t.raw("areas") as { title: string; desc: string }[];

  return (
    <>
      <PageHero eyebrow={t("eyebrow")} title={t("title")} subtitle={t("subtitle")} />

      {/* Stats */}
      <section className="bg-gold py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 lg:grid-cols-5 gap-y-10 gap-x-6">
          {impactStats.map((s) => (
            <div key={s.key} className="text-center">
              <StatCounter
                value={s.value}
                prefix={s.prefix}
                suffix={s.suffix}
                className="font-heading text-4xl lg:text-5xl font-bold text-white"
              />
              <p className="text-white/85 text-sm font-medium mt-2">{t(`stats.${s.key}`)}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Areas */}
      <section className="bg-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-navy mb-12 text-center">
            {t("areasTitle")}
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {areas.map((a) => (
              <div key={a.title} className="bg-cream rounded-2xl p-8 ring-1 ring-navy/5">
                <div className="w-8 h-0.5 bg-gold mb-4" />
                <h3 className="font-heading font-bold text-navy text-lg mb-2">{a.title}</h3>
                <p className="text-navy/60 text-sm leading-relaxed">{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="bg-cream py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-2xl font-bold text-navy mb-8 text-center">{t("galleryTitle")}</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {galleryShots.map((shot) => (
              <div key={shot} className="aspect-square rounded-xl bg-white ring-1 ring-navy/[0.07] grid place-items-center">
                <PhotoPlaceholder title={shot} compact />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy py-20 lg:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-3xl font-bold text-white mb-4">{t("ctaTitle")}</h2>
          <p className="text-white/65 mb-8">{t("ctaBody")}</p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link href="/apply" className="inline-flex items-center gap-2 bg-gold hover:bg-gold-dark text-white font-semibold px-7 py-3.5 rounded-lg transition-colors">
              {t("ctaApply")} <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/client-stories" className="inline-flex items-center text-white/85 hover:text-white font-semibold px-6 py-3.5 ring-1 ring-white/15 hover:ring-white/30 rounded-lg transition-colors">
              {t("ctaStories")}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
