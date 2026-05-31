import { setRequestLocale, getTranslations } from "next-intl/server";
import { ShieldCheck, ArrowRight } from "lucide-react";
import { Link } from "@/i18n/navigation";
import PageHero from "@/app/components/PageHero";
import PhotoPlaceholder from "@/app/components/PhotoPlaceholder";

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("About");
  const values = t.raw("values") as { title: string; desc: string }[];

  return (
    <>
      <PageHero eyebrow={t("eyebrow")} title={t("title")} subtitle={t("subtitle")} />

      {/* Story */}
      <section className="bg-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="aspect-[4/3] rounded-2xl bg-cream grid place-items-center ring-1 ring-navy/5 order-2 lg:order-1">
            <PhotoPlaceholder
              title="The Joinus team or branch"
              description="A warm, real photo — staff helping a client at the counter, or the office interior in Dar es Salaam. Shows a real, approachable institution."
              spec="Landscape · 4:3"
            />
          </div>
          <div className="order-1 lg:order-2">
            <h2 className="font-heading text-3xl font-bold text-navy mb-5">{t("storyTitle")}</h2>
            <p className="text-navy/70 leading-relaxed">{t("story")}</p>
          </div>
        </div>
      </section>

      {/* Vision / Mission */}
      <section className="bg-cream py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-6">
          <div className="bg-white rounded-2xl p-8 ring-1 ring-navy/5">
            <p className="text-gold font-semibold text-sm uppercase tracking-[0.15em] mb-2">{t("visionLabel")}</p>
            <p className="text-navy/75 leading-relaxed">{t("vision")}</p>
          </div>
          <div className="bg-navy rounded-2xl p-8">
            <p className="text-gold font-semibold text-sm uppercase tracking-[0.15em] mb-2">{t("missionLabel")}</p>
            <p className="text-white/75 leading-relaxed">{t("mission")}</p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-navy mb-12">{t("valuesTitle")}</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-8">
            {values.map((v) => (
              <div key={v.title}>
                <div className="w-8 h-0.5 bg-gold mb-4" />
                <h3 className="font-heading font-bold text-navy text-lg mb-1.5">{v.title}</h3>
                <p className="text-navy/60 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Regulation */}
      <section className="bg-navy py-20 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ShieldCheck className="w-10 h-10 text-gold mx-auto mb-5" strokeWidth={1.5} />
          <h2 className="font-heading text-3xl font-bold text-white mb-4">{t("regulationTitle")}</h2>
          <p className="text-white/65 leading-relaxed">{t("regulation")}</p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-cream py-20 lg:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-3xl font-bold text-navy mb-4">{t("ctaTitle")}</h2>
          <p className="text-navy/60 mb-8">{t("ctaBody")}</p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link href="/apply" className="inline-flex items-center gap-2 bg-gold hover:bg-gold-dark text-white font-semibold px-7 py-3.5 rounded-lg transition-colors">
              {t("ctaApply")} <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/contact" className="inline-flex items-center text-navy font-semibold px-6 py-3.5 ring-1 ring-navy/15 hover:ring-navy/30 rounded-lg transition-colors">
              {t("ctaContact")}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
