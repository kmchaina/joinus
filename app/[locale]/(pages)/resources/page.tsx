import { setRequestLocale, getTranslations } from "next-intl/server";
import { FileText, Download, ShieldCheck, ScrollText } from "lucide-react";
import PageHero from "@/app/components/PageHero";

export default async function ResourcesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("Resources");
  const downloads = t.raw("downloads") as { title: string; desc: string }[];
  const articles = t.raw("articles") as { title: string; category: string }[];

  return (
    <>
      <PageHero eyebrow={t("eyebrow")} title={t("title")} subtitle={t("subtitle")} />

      {/* Downloads */}
      <section className="bg-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl font-bold text-navy mb-10">{t("downloadsTitle")}</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {downloads.map((d) => (
              <a key={d.title} href="#" className="group bg-cream hover:bg-white ring-1 ring-navy/5 hover:ring-gold/30 rounded-2xl p-6 transition-all">
                <span className="grid place-items-center w-11 h-11 rounded-xl bg-white ring-1 ring-navy/5 mb-4">
                  <FileText className="w-5 h-5 text-gold" strokeWidth={1.5} />
                </span>
                <h3 className="font-semibold text-navy text-sm mb-1 group-hover:text-gold transition-colors">{d.title}</h3>
                <p className="text-navy/50 text-xs leading-relaxed mb-3">{d.desc}</p>
                <span className="inline-flex items-center gap-1.5 text-gold text-xs font-semibold">
                  <Download className="w-3.5 h-3.5" /> {t("download")}
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Articles */}
      <section className="bg-cream py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl font-bold text-navy mb-10">{t("articlesTitle")}</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((a) => (
              <div key={a.title} className="bg-white rounded-2xl p-6 ring-1 ring-navy/5">
                <span className="inline-block bg-gold/10 text-gold text-xs font-semibold px-3 py-1 rounded-full mb-3">{a.category}</span>
                <h3 className="font-heading font-bold text-navy text-lg leading-snug mb-3">{a.title}</h3>
                <span className="text-gold text-sm font-semibold">{t("readArticle")} →</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Policies */}
      <section id="privacy-policy" className="bg-white py-20 lg:py-24 scroll-mt-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-10">
          <div>
            <ShieldCheck className="w-8 h-8 text-gold mb-4" strokeWidth={1.5} />
            <h2 className="font-heading text-2xl font-bold text-navy mb-3">{t("privacyTitle")}</h2>
            <p className="text-navy/65 text-sm leading-relaxed">{t("privacyBody")}</p>
          </div>
          <div id="terms" className="scroll-mt-24">
            <ScrollText className="w-8 h-8 text-gold mb-4" strokeWidth={1.5} />
            <h2 className="font-heading text-2xl font-bold text-navy mb-3">{t("termsTitle")}</h2>
            <p className="text-navy/65 text-sm leading-relaxed">{t("termsBody")}</p>
          </div>
        </div>
      </section>
    </>
  );
}
