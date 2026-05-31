import { setRequestLocale, getTranslations } from "next-intl/server";
import { ArrowRight } from "lucide-react";
import { Link } from "@/i18n/navigation";
import PageHero from "@/app/components/PageHero";
import PartnerLogo from "@/app/components/PartnerLogo";
import { site, partners } from "@/lib/site";

export default async function PartnersPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("Partners");
  const items = t.raw("items") as { name: string; desc: string }[];
  const benefits = t.raw("benefits") as { title: string; desc: string }[];

  return (
    <>
      <PageHero eyebrow={t("eyebrow")} title={t("title")} subtitle={t("subtitle")} />

      {/* Current partners */}
      <section className="bg-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-navy mb-12 text-center">
            {t("currentTitle")}
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {items.map((p, i) => {
              const meta = partners[i];
              return (
                <div key={p.name} className="group bg-white rounded-2xl ring-1 ring-navy/[0.07] overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="h-24 grid place-items-center bg-cream border-b border-navy/5">
                    <PartnerLogo name={p.name} monogram={meta?.monogram ?? p.name} logo={meta?.logo} />
                  </div>
                  <div className="p-6 text-center">
                    <h3 className="font-heading font-bold text-navy text-base mb-2">{p.name}</h3>
                    <p className="text-navy/60 text-sm leading-relaxed">{p.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-navy py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white mb-12 text-center">
            {t("benefitsTitle")}
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((b) => (
              <div key={b.title} className="bg-white/[0.04] ring-1 ring-white/10 rounded-2xl p-6">
                <div className="w-8 h-0.5 bg-gold mb-4" />
                <h3 className="font-heading font-bold text-white text-lg mb-2">{b.title}</h3>
                <p className="text-white/55 text-sm leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Become a partner */}
      <section className="bg-cream py-20 lg:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-3xl font-bold text-navy mb-4">{t("becomeTitle")}</h2>
          <p className="text-navy/60 mb-8">{t("becomeBody")}</p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link href="/contact" className="inline-flex items-center gap-2 bg-navy hover:bg-navy-dark text-white font-semibold px-7 py-3.5 rounded-lg transition-colors">
              {t("becomeCta")} <ArrowRight className="w-4 h-4" />
            </Link>
            <a href={`mailto:${site.email}`} className="inline-flex items-center text-navy font-semibold px-6 py-3.5 ring-1 ring-navy/15 hover:ring-navy/30 rounded-lg transition-colors">
              {t("emailCta")}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
