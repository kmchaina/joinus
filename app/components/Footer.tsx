import { useTranslations } from "next-intl";
import { Phone, Mail, ShieldCheck, ArrowRight } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { site, productKeys } from "@/lib/site";
import Logo from "./Logo";

const companyKeys = ["about", "impact", "education", "partners", "careers", "resources"] as const;

export default function Footer() {
  const t = useTranslations("Footer");
  const tn = useTranslations("Nav");
  const tp = useTranslations("Home.products.items");

  return (
    <footer className="bg-navy text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Brand + slogan */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 py-12 border-b border-white/10">
          <div>
            <Logo variant="light" />
            <p className="text-white/55 text-sm mt-4 max-w-xs">{t("tagline")}</p>
          </div>
          <p className="font-heading italic text-gold text-2xl lg:text-3xl">
            {t("slogan")}
          </p>
        </div>

        {/* Links */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 py-12">
          <div>
            <h4 className="text-white/40 text-xs font-semibold uppercase tracking-[0.18em] mb-4">
              {t("loansTitle")}
            </h4>
            <ul className="space-y-2.5">
              {productKeys.map((p) => (
                <li key={p.key}>
                  <Link href={p.href} className="text-white/70 hover:text-gold text-sm transition-colors">
                    {tp(`${p.key}.name`)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white/40 text-xs font-semibold uppercase tracking-[0.18em] mb-4">
              {t("companyTitle")}
            </h4>
            <ul className="space-y-2.5">
              {companyKeys.map((key) => {
                const href =
                  key === "about" ? "/about"
                  : key === "impact" ? "/impact"
                  : key === "education" ? "/financial-education"
                  : key === "partners" ? "/partners"
                  : key === "careers" ? "/careers"
                  : "/resources";
                return (
                  <li key={key}>
                    <Link href={href} className="text-white/70 hover:text-gold text-sm transition-colors">
                      {tn(key)}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="col-span-2 lg:col-span-2">
            <h4 className="text-white/40 text-xs font-semibold uppercase tracking-[0.18em] mb-4">
              {t("connectTitle")}
            </h4>
            <div className="space-y-2.5 text-sm">
              <a href={`mailto:${site.email}`} className="flex items-center gap-2.5 text-white/70 hover:text-gold transition-colors">
                <Mail className="w-4 h-4 text-gold/80" />
                {site.email}
              </a>
              {site.phones.map((p, i) => (
                <a key={p} href={`tel:${site.phonesTel[i]}`} className="flex items-center gap-2.5 text-white/70 hover:text-gold transition-colors">
                  <Phone className="w-4 h-4 text-gold/80" />
                  {p}
                </a>
              ))}
            </div>
            <Link
              href="/apply"
              className="inline-flex items-center gap-2 mt-5 bg-gold hover:bg-gold-dark text-white font-semibold text-sm px-5 py-2.5 rounded-lg transition-colors"
            >
              {tn("apply")}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Regulatory */}
        <div className="flex items-center gap-2.5 text-white/45 text-xs pb-8">
          <ShieldCheck className="w-4 h-4 text-gold/70 flex-shrink-0" />
          {t("regulated")}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/45 text-xs">
            &copy; {new Date().getFullYear()} {site.name}. {t("rights")}
          </p>
          <div className="flex items-center gap-6">
            <Link href="/resources" className="text-white/45 hover:text-white text-xs transition-colors">
              {t("privacy")}
            </Link>
            <Link href="/resources" className="text-white/45 hover:text-white text-xs transition-colors">
              {t("terms")}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
