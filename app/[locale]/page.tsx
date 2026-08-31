import { setRequestLocale, getTranslations } from "next-intl/server";
import Image from "next/image";
import { Link } from "@/i18n/navigation";
import {
  Users,
  Building2,
  Briefcase,
  Home as HomeIcon,
  Car,
  Bike,
  Zap,
  ShieldCheck,
  HeartHandshake,
  GraduationCap,
  Gauge,
  ArrowRight,
  ArrowUpRight,
  Quote,
  MessageCircle,
  MapPin,
  TrendingUp,
  Phone,
  Mail,
} from "lucide-react";
import PartnerLogo from "@/app/components/PartnerLogo";
import StatCounter from "@/app/components/StatCounter";
import { site, productKeys, impactStats, partners } from "@/lib/site";

const productIcons: Record<string, React.ElementType> = {
  Users,
  Building2,
  Briefcase,
  Home: HomeIcon,
  Car,
  Bike,
  Zap,
};

const whyIcons = {
  regulated: ShieldCheck,
  women: HeartHandshake,
  education: GraduationCap,
  fast: Gauge,
} as const;

const trustItems = [
  { icon: ShieldCheck, key: "regulated", subKey: "regulatedSub" },
  { icon: MapPin, key: "location", subKey: "locationSub" },
  { icon: TrendingUp, key: "repayment", subKey: "repaymentSub" },
  { icon: Users, key: "served", subKey: "servedSub" },
] as const;

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("Home");
  const tTrust = await getTranslations("Trust");

  const whatsappUrl = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(
    t("hero.ctaWhatsapp")
  )}`;

  return (
    <>
      {/* ───────── HERO (with integrated trust band) ───────── */}
      <section className="relative bg-navy overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-40 right-0 w-[560px] h-[560px] rounded-full bg-gold/[0.07] blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-36 pb-20 lg:pt-44 lg:pb-24">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="animate-fade-up">
              <span className="inline-flex items-center gap-2 text-gold text-xs font-semibold uppercase tracking-[0.2em] mb-8">
                <span className="w-6 h-px bg-gold" />
                {t("hero.eyebrow")}
              </span>

              <h1 className="font-heading text-5xl sm:text-6xl lg:text-[4rem] font-bold text-white leading-[1.03] mb-7 text-balance">
                {t("hero.title")}
              </h1>

              <p className="text-white/65 text-lg leading-relaxed mb-10 max-w-xl">
                {t("hero.subtitle")}
              </p>

              <div className="flex flex-wrap items-center gap-3">
                <Link
                  href="/apply"
                  className="inline-flex items-center gap-2 bg-gold hover:bg-gold-dark text-white font-semibold px-7 py-3.5 rounded-lg transition-colors"
                >
                  {t("hero.ctaPrimary")}
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/loan-products"
                  className="inline-flex items-center text-white/85 hover:text-white font-semibold px-5 py-3.5 transition-colors"
                >
                  {t("hero.ctaSecondary")}
                </Link>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-white/55 hover:text-white font-medium px-4 py-3.5 transition-colors"
                >
                  <MessageCircle className="w-4 h-4 text-[#25D366]" />
                  {t("hero.ctaWhatsapp")}
                </a>
              </div>
            </div>

            {/* Hero photo */}
            <div className="animate-fade-up" style={{ animationDelay: "120ms" }}>
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden bg-navy-light ring-1 ring-white/10">
                <Image
                  src="/photos/hero-portrait.jpg"
                  alt="Joinus Finance team members in conversation"
                  fill
                  priority
                  sizes="(min-width: 1024px) 40vw, 100vw"
                  className="object-cover"
                />
                <div className="absolute bottom-4 right-4 w-16 h-16 border border-gold/30 rounded-xl pointer-events-none" />
              </div>
            </div>
          </div>
        </div>

        {/* Trust band — part of the hero, not a floating strip */}
        <div className="relative border-t border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-white/10">
              {trustItems.map(({ icon: Icon, key, subKey }) => (
                <div key={key} className="flex items-center gap-3 py-5 sm:px-6 first:pl-0 last:pr-0">
                  <Icon className="w-5 h-5 text-gold flex-shrink-0" strokeWidth={1.5} />
                  <div className="min-w-0">
                    <p className="text-white text-sm font-semibold leading-tight">
                      {tTrust(key)}
                    </p>
                    <p className="text-white/45 text-xs leading-tight mt-0.5">
                      {tTrust(subKey)}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ───────── LOANS ───────── */}
      <section className="bg-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-end justify-between gap-4 mb-12">
            <div>
              <p className="text-gold font-semibold text-sm uppercase tracking-[0.18em]">
                {t("products.eyebrow")}
              </p>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-navy mt-2">
                {t("products.title")}
              </h2>
            </div>
            <Link
              href="/loan-products"
              className="hidden sm:inline-flex items-center gap-2 text-navy font-semibold hover:text-gold transition-colors"
            >
              {t("products.cta")}
              <ArrowRight className="w-4 h-4 text-gold" />
            </Link>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-navy/[0.08] rounded-2xl overflow-hidden ring-1 ring-navy/[0.08]">
            {productKeys.map((p) => {
              const Icon = productIcons[p.icon] ?? Users;
              return (
                <Link
                  key={p.key}
                  href={p.href}
                  className="group bg-cream p-6 lg:p-7 hover:bg-white transition-colors"
                >
                  <Icon
                    className="w-6 h-6 text-navy/70 group-hover:text-gold transition-colors mb-8"
                    strokeWidth={1.5}
                  />
                  <h3 className="font-heading font-bold text-navy text-lg leading-tight">
                    {t(`products.items.${p.key}.name`)}
                  </h3>
                  <p className="text-navy/45 text-xs mt-1.5 uppercase tracking-wide">
                    {t(`products.items.${p.key}.tag`)}
                  </p>
                </Link>
              );
            })}
            <Link
              href="/loan-products"
              className="group bg-navy p-6 lg:p-7 flex flex-col justify-between hover:bg-navy-dark transition-colors"
            >
              <ArrowUpRight className="w-6 h-6 text-gold" />
              <span className="font-heading font-bold text-white text-lg leading-tight mt-8">
                {t("products.cta")}
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* ───────── WHY ───────── */}
      <section className="bg-navy py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-4">
              <p className="text-gold font-semibold text-sm uppercase tracking-[0.18em]">
                {t("why.eyebrow")}
              </p>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white mt-2 text-balance">
                {t("why.title")}
              </h2>
            </div>

            <div className="lg:col-span-8 grid sm:grid-cols-2 gap-x-10 gap-y-10">
              {(Object.keys(whyIcons) as Array<keyof typeof whyIcons>).map((key) => {
                const Icon = whyIcons[key];
                return (
                  <div key={key} className="flex gap-4">
                    <Icon className="w-6 h-6 text-gold flex-shrink-0 mt-0.5" strokeWidth={1.5} />
                    <div>
                      <h3 className="font-heading font-bold text-white text-lg mb-1">
                        {t(`why.items.${key}.title`)}
                      </h3>
                      <p className="text-white/55 text-sm leading-relaxed">
                        {t(`why.items.${key}.desc`)}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ───────── IMPACT ───────── */}
      <section className="bg-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-navy text-center mb-14">
            {t("impact.title")}
          </h2>
          <div className="grid grid-cols-2 lg:grid-cols-5 gap-y-10 gap-x-6">
            {impactStats.map((stat) => (
              <div
                key={stat.key}
                className="text-center border-l border-navy/10 first:border-l-0 lg:border-l"
              >
                <StatCounter
                  value={stat.value}
                  prefix={stat.prefix}
                  suffix={stat.suffix}
                  className="font-heading text-4xl lg:text-5xl font-bold text-navy"
                />
                <p className="text-navy/55 text-sm font-medium mt-2">
                  {t(`impact.stats.${stat.key}`)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───────── STORIES ───────── */}
      <section className="bg-gold py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-white/70 font-semibold text-sm uppercase tracking-[0.18em]">
              {t("stories.eyebrow")}
            </p>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white mt-2">
              {t("stories.title")}
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {(["one", "two"] as const).map((k) => {
              const name = t(`stories.items.${k}.name`);
              return (
                <figure key={k} className="bg-white rounded-2xl p-8 lg:p-9 flex flex-col">
                  <Quote className="w-8 h-8 text-gold/30 mb-4" />
                  <blockquote className="font-heading text-xl lg:text-2xl text-navy leading-snug flex-1">
                    &ldquo;{t(`stories.items.${k}.quote`)}&rdquo;
                  </blockquote>
                  <figcaption className="flex items-center gap-3 mt-7 pt-6 border-t border-navy/5">
                    <span className="grid place-items-center w-11 h-11 rounded-full bg-cream text-navy font-heading font-bold ring-1 ring-navy/10">
                      {name.charAt(0)}
                    </span>
                    <span>
                      <span className="block font-semibold text-navy text-sm">{name}</span>
                      <span className="block text-navy/45 text-xs">
                        {t(`stories.items.${k}.detail`)}
                      </span>
                    </span>
                  </figcaption>
                </figure>
              );
            })}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/client-stories"
              className="inline-flex items-center gap-2 bg-navy hover:bg-navy-dark text-white font-semibold px-6 py-3 rounded-lg transition-colors"
            >
              {t("stories.cta")}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ───────── PARTNERS (logo wall) ───────── */}
      <section className="bg-white py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-navy/40 text-xs font-semibold uppercase tracking-[0.2em] mb-10">
            {t("partners.title")}
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-px bg-navy/[0.07] rounded-2xl overflow-hidden ring-1 ring-navy/[0.07]">
            {partners.map((p) => (
              <div
                key={p.name}
                className="group bg-white h-24 grid place-items-center transition-colors hover:bg-cream"
                title={p.name}
              >
                <PartnerLogo name={p.name} monogram={p.monogram} logo={p.logo} />
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              href="/partners"
              className="inline-flex items-center gap-1.5 text-navy/60 hover:text-navy text-sm font-medium transition-colors"
            >
              {t("partners.cta")}
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* ───────── CONTACT CTA (light — separates from navy footer) ───────── */}
      <section className="bg-cream py-20 lg:py-28 border-t border-navy/5">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-navy leading-tight text-balance mb-5">
            {t("contactCta.title")}
          </h2>
          <p className="text-navy/60 mb-9">{t("contactCta.body")}</p>

          <div className="flex flex-wrap justify-center gap-3 mb-10">
            <Link
              href="/apply"
              className="inline-flex items-center gap-2 bg-gold hover:bg-gold-dark text-white font-semibold px-7 py-3.5 rounded-lg transition-colors"
            >
              {t("contactCta.ctaApply")}
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center text-navy font-semibold px-6 py-3.5 ring-1 ring-navy/15 hover:ring-navy/30 rounded-lg transition-colors"
            >
              {t("contactCta.ctaContact")}
            </Link>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm">
            <a
              href={`tel:${site.phonesTel[0]}`}
              className="inline-flex items-center gap-2 text-navy/60 hover:text-gold transition-colors"
            >
              <Phone className="w-4 h-4 text-gold" />
              {site.phones[0]}
            </a>
            <a
              href={`mailto:${site.email}`}
              className="inline-flex items-center gap-2 text-navy/60 hover:text-gold transition-colors"
            >
              <Mail className="w-4 h-4 text-gold" />
              {site.email}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
