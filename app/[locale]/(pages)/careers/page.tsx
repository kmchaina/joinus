import { setRequestLocale, getTranslations } from "next-intl/server";
import Image from "next/image";
import { Inbox } from "lucide-react";
import PageHero from "@/app/components/PageHero";

const fieldClass =
  "w-full border border-navy/15 rounded-lg px-4 py-3 text-sm text-navy placeholder:text-navy/30 focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/20 bg-white";

export default async function CareersPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("Careers");
  const tc = await getTranslations("Common");
  const values = t.raw("values") as { title: string; desc: string }[];
  const areas = t.raw("areas") as string[];

  return (
    <>
      <PageHero eyebrow={t("eyebrow")} title={t("title")} subtitle={t("subtitle")} />

      {/* Culture */}
      <section className="bg-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <h2 className="font-heading text-3xl font-bold text-navy mb-5">{t("cultureTitle")}</h2>
            <p className="text-navy/70 leading-relaxed mb-8">{t("cultureBody")}</p>
            <div className="grid sm:grid-cols-2 gap-5">
              {values.map((v) => (
                <div key={v.title}>
                  <div className="w-8 h-0.5 bg-gold mb-3" />
                  <h3 className="font-heading font-bold text-navy text-base mb-1">{v.title}</h3>
                  <p className="text-navy/60 text-sm leading-relaxed">{v.desc}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden ring-1 ring-navy/5">
            <Image
              src="/photos/careers-team.jpg"
              alt="The Joinus Finance team"
              fill
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Openings */}
      <section className="bg-cream py-20 lg:py-24">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-3xl font-bold text-navy mb-8">{t("openingsTitle")}</h2>
          <div className="bg-white rounded-2xl ring-1 ring-navy/5 p-10">
            <Inbox className="w-10 h-10 text-navy/30 mx-auto mb-4" strokeWidth={1.25} />
            <h3 className="font-heading font-bold text-navy text-xl mb-2">{t("noOpeningsTitle")}</h3>
            <p className="text-navy/60 text-sm leading-relaxed">{t("noOpeningsBody")}</p>
          </div>
        </div>
      </section>

      {/* CV form */}
      <section className="bg-white py-20 lg:py-24">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="font-heading text-3xl font-bold text-navy mb-2">{t("cvTitle")}</h2>
            <p className="text-navy/60">{t("cvBody")}</p>
          </div>
          <form className="space-y-5">
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-semibold text-navy mb-1.5">{tc("fullName")}</label>
                <input type="text" required className={fieldClass} />
              </div>
              <div>
                <label className="block text-sm font-semibold text-navy mb-1.5">{tc("phone")}</label>
                <input type="tel" required className={fieldClass} />
              </div>
            </div>
            <div>
              <label className="block text-sm font-semibold text-navy mb-1.5">{tc("email")}</label>
              <input type="email" required className={fieldClass} />
            </div>
            <div>
              <label className="block text-sm font-semibold text-navy mb-1.5">{t("areaLabel")}</label>
              <select defaultValue="" className={fieldClass}>
                <option value="" disabled>{tc("selectPlaceholder")}</option>
                {areas.map((a) => (
                  <option key={a}>{a}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-semibold text-navy mb-1.5">{t("uploadCv")}</label>
              <input type="file" accept=".pdf,.doc,.docx" required className={`${fieldClass} file:mr-3 file:py-1 file:px-3 file:border file:border-navy/20 file:rounded file:text-xs file:font-medium file:text-navy file:bg-cream cursor-pointer`} />
            </div>
            <div>
              <label className="block text-sm font-semibold text-navy mb-1.5">{t("coverNote")}</label>
              <textarea rows={4} className={`${fieldClass} resize-none`} />
            </div>
            <button type="submit" className="w-full bg-gold hover:bg-gold-dark text-white font-semibold py-3.5 rounded-lg transition-colors">
              {t("submitCv")}
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
