import { setRequestLocale, getTranslations } from "next-intl/server";
import { MapPin, Phone, Mail, Globe, MessageCircle, ArrowRight } from "lucide-react";
import PageHero from "@/app/components/PageHero";
import ContactForm from "@/app/components/ContactForm";
import { site } from "@/lib/site";

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("Contact");

  const whatsappUrl = `https://wa.me/${site.whatsapp}`;
  const mapsUrl = `https://maps.google.com/?q=${encodeURIComponent(site.mapsQuery)}`;

  return (
    <>
      <PageHero eyebrow={t("eyebrow")} title={t("title")} subtitle={t("subtitle")} />

      <section className="bg-white py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-5 gap-12">
          {/* Info */}
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h2 className="font-heading text-2xl font-bold text-navy mb-6">{t("infoTitle")}</h2>
              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <span className="grid place-items-center w-10 h-10 rounded-lg bg-gold/10 flex-shrink-0">
                    <MapPin className="w-5 h-5 text-gold" />
                  </span>
                  <div>
                    <p className="font-semibold text-navy text-sm mb-0.5">{t("addressLabel")}</p>
                    <p className="text-navy/60 text-sm leading-relaxed">
                      PSSSF Commercial Complex<br />Sam Nujoma Road, Ground &amp; 8th Floor<br />Dar es Salaam, Tanzania
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="grid place-items-center w-10 h-10 rounded-lg bg-gold/10 flex-shrink-0">
                    <Phone className="w-5 h-5 text-gold" />
                  </span>
                  <div>
                    <p className="font-semibold text-navy text-sm mb-0.5">{t("phoneLabel")}</p>
                    {site.phones.map((p, i) => (
                      <a key={p} href={`tel:${site.phonesTel[i]}`} className="block text-navy/60 text-sm hover:text-gold transition-colors">
                        {p}
                      </a>
                    ))}
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="grid place-items-center w-10 h-10 rounded-lg bg-gold/10 flex-shrink-0">
                    <Mail className="w-5 h-5 text-gold" />
                  </span>
                  <div>
                    <p className="font-semibold text-navy text-sm mb-0.5">{t("emailLabel")}</p>
                    <a href={`mailto:${site.email}`} className="text-navy/60 text-sm hover:text-gold transition-colors">
                      {site.email}
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="grid place-items-center w-10 h-10 rounded-lg bg-gold/10 flex-shrink-0">
                    <Globe className="w-5 h-5 text-gold" />
                  </span>
                  <div>
                    <p className="font-semibold text-navy text-sm mb-0.5">{t("websiteLabel")}</p>
                    <p className="text-navy/60 text-sm">{site.website}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[#25D366]/10 border border-[#25D366]/20 rounded-xl p-5">
              <p className="font-semibold text-navy text-sm mb-1">{t("whatsappTitle")}</p>
              <p className="text-navy/60 text-xs mb-4">{t("whatsappBody")}</p>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5c] text-white font-semibold text-sm px-5 py-2.5 rounded-lg transition-colors"
              >
                <MessageCircle className="w-4 h-4" /> {t("whatsappCta")}
              </a>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            <h2 className="font-heading text-2xl font-bold text-navy mb-6">{t("formTitle")}</h2>
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="bg-cream py-16 border-t border-navy/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-2xl font-bold text-navy mb-6 text-center">{t("mapTitle")}</h2>
          <div className="rounded-2xl overflow-hidden ring-1 ring-navy/10 h-[400px] bg-navy/[0.04] grid place-items-center">
            <div className="text-center text-navy/40">
              <MapPin className="w-10 h-10 mx-auto mb-3" strokeWidth={1.25} />
              <p className="text-sm font-medium">PSSSF Commercial Complex, Sam Nujoma Road</p>
              <a href={mapsUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 mt-3 text-gold text-sm font-semibold hover:gap-2.5 transition-all">
                {t("openMaps")} <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
