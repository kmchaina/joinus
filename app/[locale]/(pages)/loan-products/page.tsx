import { setRequestLocale, getTranslations } from "next-intl/server";
import {
  Users,
  Building2,
  Briefcase,
  Home as HomeIcon,
  Car,
  Bike,
  Zap,
  CheckCircle2,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import { Link } from "@/i18n/navigation";
import PageHero from "@/app/components/PageHero";
import { productKeys } from "@/lib/site";

const productIcons: Record<string, React.ElementType> = {
  Users, Building2, Briefcase, Home: HomeIcon, Car, Bike, Zap,
};

const anchorIds: Record<string, string> = {
  group: "group-loans",
  business: "business-loans",
  salaried: "salaried-loans",
  property: "property-financing",
  vehicle: "vehicle-financing",
  motorcycle: "motorcycle-bajaji",
  emergency: "emergency-loans",
};

export default async function LoanProductsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("LoanProducts");
  const requirements = t.raw("requirements") as string[];

  const featuredKey = "business";
  const featured = productKeys.find((p) => p.key === featuredKey)!;
  const rest = productKeys.filter((p) => p.key !== featuredKey);

  const FeaturedIcon = productIcons[featured.icon] ?? Users;
  const featuredSuitable = t.raw(`items.${featuredKey}.suitable`) as string[];

  return (
    <>
      <PageHero eyebrow={t("eyebrow")} title={t("title")} subtitle={t("subtitle")} />

      <section className="bg-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          {/* Featured flagship product — navy banner */}
          <div
            id={anchorIds[featuredKey]}
            className="scroll-mt-24 relative overflow-hidden bg-navy rounded-3xl p-8 lg:p-12 grid lg:grid-cols-12 gap-8 items-center"
          >
            <div className="absolute -top-24 -right-24 w-80 h-80 rounded-full bg-gold/[0.08] blur-3xl pointer-events-none" />
            <div className="relative lg:col-span-8">
              <div className="flex items-center gap-3 mb-5">
                <span className="grid place-items-center w-14 h-14 rounded-2xl bg-gold/15">
                  <FeaturedIcon className="w-7 h-7 text-gold" strokeWidth={1.5} />
                </span>
                <span className="inline-flex items-center gap-1.5 bg-gold text-white text-xs font-semibold px-3 py-1.5 rounded-full">
                  <Sparkles className="w-3.5 h-3.5" />
                  {t(`items.${featuredKey}.highlight`)}
                </span>
              </div>
              <h2 className="font-heading text-3xl lg:text-4xl font-bold text-white mb-3">
                {t(`items.${featuredKey}.name`)}
              </h2>
              <p className="text-white/65 leading-relaxed max-w-2xl mb-6">
                {t(`items.${featuredKey}.desc`)}
              </p>
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-white/40 text-xs font-semibold uppercase tracking-wider mr-1">
                  {t("suitableLabel")}
                </span>
                {featuredSuitable.map((s) => (
                  <span key={s} className="bg-white/10 text-white/80 text-xs font-medium px-3 py-1.5 rounded-full">
                    {s}
                  </span>
                ))}
              </div>
            </div>
            <div className="relative lg:col-span-4 lg:text-right">
              <Link
                href={`/apply?type=${featuredKey}`}
                className="inline-flex items-center gap-2 bg-gold hover:bg-gold-dark text-white font-semibold px-7 py-3.5 rounded-lg transition-colors"
              >
                {t("applyFor")} <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Remaining products — varied grid with badges */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {rest.map((p) => {
              const Icon = productIcons[p.icon] ?? Users;
              const suitable = t.raw(`items.${p.key}.suitable`) as string[];
              const hasHighlight = t.has(`items.${p.key}.highlight`);
              return (
                <article
                  key={p.key}
                  id={anchorIds[p.key]}
                  className="scroll-mt-24 group relative flex flex-col bg-white rounded-2xl ring-1 ring-navy/[0.07] hover:ring-gold/30 hover:shadow-lg transition-all p-7"
                >
                  <div className="flex items-start justify-between mb-5">
                    <span className="grid place-items-center w-12 h-12 rounded-xl bg-navy/[0.05] group-hover:bg-gold/10 transition-colors">
                      <Icon className="w-6 h-6 text-navy/70 group-hover:text-gold transition-colors" strokeWidth={1.5} />
                    </span>
                    {hasHighlight && (
                      <span className="inline-flex items-center gap-1 bg-green-light text-green text-xs font-semibold px-2.5 py-1 rounded-full">
                        {t(`items.${p.key}.highlight`)}
                      </span>
                    )}
                  </div>

                  <h2 className="font-heading text-xl font-bold text-navy mb-2">
                    {t(`items.${p.key}.name`)}
                  </h2>
                  <p className="text-navy/60 text-sm leading-relaxed mb-5">
                    {t(`items.${p.key}.desc`)}
                  </p>

                  <div className="mb-6">
                    <p className="text-navy/40 text-xs font-semibold uppercase tracking-wider mb-2">
                      {t("suitableLabel")}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {suitable.map((s) => (
                        <span key={s} className="bg-navy/[0.05] text-navy/70 text-xs font-medium px-3 py-1 rounded-full">
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>

                  <Link
                    href={`/apply?type=${p.key}`}
                    className="mt-auto inline-flex items-center gap-1.5 text-gold font-semibold text-sm hover:gap-2.5 transition-all"
                  >
                    {t("applyFor")} <ArrowRight className="w-4 h-4" />
                  </Link>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="bg-navy py-20 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl font-bold text-white mb-8 text-center">
            {t("requirementsTitle")}
          </h2>
          <div className="grid sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
            {requirements.map((r) => (
              <div key={r} className="flex items-center gap-3 bg-white/[0.04] ring-1 ring-white/10 rounded-xl px-5 py-4">
                <CheckCircle2 className="w-5 h-5 text-gold flex-shrink-0" />
                <span className="text-white/80 text-sm">{r}</span>
              </div>
            ))}
          </div>
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
