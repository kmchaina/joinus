import { useTranslations } from "next-intl";
import { ShieldCheck, MapPin, TrendingUp, Users } from "lucide-react";

const items = [
  { icon: ShieldCheck, key: "regulated", subKey: "regulatedSub" },
  { icon: MapPin, key: "location", subKey: "locationSub" },
  { icon: TrendingUp, key: "repayment", subKey: "repaymentSub" },
  { icon: Users, key: "served", subKey: "servedSub" },
] as const;

// Sits directly beneath the hero. The single most important credibility
// element on the site — leads with Bank of Tanzania regulation.
export default function TrustStrip() {
  const t = useTranslations("Trust");

  return (
    <section className="bg-white border-b border-navy/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-navy/5">
          {items.map(({ icon: Icon, key, subKey }) => (
            <div
              key={key}
              className="flex items-start gap-3 py-5 sm:px-6 first:pl-0 last:pr-0"
            >
              <span className="grid place-items-center w-10 h-10 rounded-lg bg-gold/10 flex-shrink-0">
                <Icon className="w-5 h-5 text-gold" />
              </span>
              <div className="min-w-0">
                <p className="font-semibold text-navy text-sm leading-snug">
                  {t(key)}
                </p>
                <p className="text-navy/50 text-xs leading-snug mt-0.5">
                  {t(subKey)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
