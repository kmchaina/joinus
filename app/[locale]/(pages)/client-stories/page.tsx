import { setRequestLocale, getTranslations } from "next-intl/server";
import { ArrowRight } from "lucide-react";
import { Link } from "@/i18n/navigation";
import PageHero from "@/app/components/PageHero";
import PhotoPlaceholder from "@/app/components/PhotoPlaceholder";

type Story = {
  name: string;
  business: string;
  location: string;
  loanType: string;
  before: string;
  after: string;
};

export default async function ClientStoriesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("ClientStories");
  const items = t.raw("items") as Story[];

  return (
    <>
      <PageHero eyebrow={t("eyebrow")} title={t("title")} subtitle={t("subtitle")} />

      <section className="bg-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            {items.map((s) => (
              <article
                key={s.name}
                className="grid sm:grid-cols-12 bg-cream rounded-2xl ring-1 ring-navy/5 overflow-hidden"
              >
                {/* Portrait */}
                <div className="sm:col-span-4 lg:col-span-3 bg-white border-b sm:border-b-0 sm:border-r border-navy/5 grid place-items-center min-h-[240px] p-6">
                  <PhotoPlaceholder
                    title={`Portrait of ${s.name}`}
                    description="A real photo of this client at their business — captured with their written consent."
                    spec="Portrait · 3:4"
                  />
                </div>

                {/* Content */}
                <div className="sm:col-span-8 lg:col-span-9 p-7 lg:p-8">
                  <div className="mb-5">
                    <h3 className="font-heading font-bold text-navy text-xl">{s.name}</h3>
                    <p className="text-navy/55 text-sm">{s.business} · {s.location}</p>
                    <span className="inline-block mt-2 bg-gold/10 text-gold text-xs font-semibold px-3 py-1 rounded-full">
                      {s.loanType}
                    </span>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="bg-white rounded-xl p-4 ring-1 ring-navy/5">
                      <p className="text-xs font-semibold text-navy/40 uppercase tracking-wider mb-2">{t("beforeLabel")}</p>
                      <p className="text-navy/70 text-sm leading-relaxed">{s.before}</p>
                    </div>
                    <div className="bg-navy rounded-xl p-4">
                      <p className="text-xs font-semibold text-gold/80 uppercase tracking-wider mb-2">{t("afterLabel")}</p>
                      <p className="text-white/80 text-sm leading-relaxed">{s.after}</p>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
          <p className="text-center text-navy/35 text-xs mt-10">{t("note")}</p>
        </div>
      </section>

      {/* Share */}
      <section className="bg-cream py-16 lg:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-3xl font-bold text-navy mb-3">{t("shareTitle")}</h2>
          <p className="text-navy/60 mb-8">{t("shareBody")}</p>
          <Link href="/contact" className="inline-flex items-center gap-2 bg-gold hover:bg-gold-dark text-white font-semibold px-7 py-3.5 rounded-lg transition-colors">
            {t("shareCta")} <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy py-20 lg:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-3xl font-bold text-white mb-6">{t("ctaTitle")}</h2>
          <Link href="/apply" className="inline-flex items-center gap-2 bg-gold hover:bg-gold-dark text-white font-semibold px-7 py-3.5 rounded-lg transition-colors">
            {t("ctaApply")} <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
