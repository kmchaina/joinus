import { setRequestLocale, getTranslations } from "next-intl/server";
import { Phone, Mail } from "lucide-react";
import PageHero from "@/app/components/PageHero";
import ApplyForm from "@/app/components/ApplyForm";
import { site } from "@/lib/site";

export default async function ApplyPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("Apply");
  const steps = t.raw("steps") as { title: string; desc: string }[];

  return (
    <>
      <PageHero eyebrow={t("eyebrow")} title={t("title")} subtitle={t("subtitle")} />

      {/* Steps */}
      <section className="bg-cream py-12 border-b border-navy/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((s, i) => (
            <div key={s.title} className="flex gap-3 items-start">
              <span className="font-heading font-bold text-gold text-xl flex-shrink-0">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <p className="font-semibold text-navy text-sm">{s.title}</p>
                <p className="text-navy/55 text-xs leading-relaxed mt-0.5">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Form + sidebar */}
      <section className="bg-white py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-3 gap-12">
          <aside className="lg:col-span-1">
            <div className="bg-cream rounded-2xl p-6 ring-1 ring-navy/5">
              <h3 className="font-heading font-bold text-navy text-lg mb-2">{t("helpTitle")}</h3>
              <p className="text-navy/60 text-sm mb-5">{t("helpBody")}</p>
              <div className="space-y-3 text-sm">
                {site.phones.map((p, i) => (
                  <a key={p} href={`tel:${site.phonesTel[i]}`} className="flex items-center gap-2 text-navy/70 hover:text-gold transition-colors">
                    <Phone className="w-4 h-4 text-gold" /> {p}
                  </a>
                ))}
                <a href={`mailto:${site.email}`} className="flex items-center gap-2 text-navy/70 hover:text-gold transition-colors">
                  <Mail className="w-4 h-4 text-gold" /> {site.email}
                </a>
              </div>
            </div>
          </aside>

          <div className="lg:col-span-2">
            <ApplyForm />
          </div>
        </div>
      </section>
    </>
  );
}
