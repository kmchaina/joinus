"use client";

import { useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import {
  Menu,
  X,
  ChevronDown,
  ArrowRight,
  Users,
  Building2,
  Briefcase,
  Home as HomeIcon,
  Car,
  Bike,
  Zap,
  Info,
  TrendingUp,
  Quote,
  Handshake,
} from "lucide-react";
import { Link, usePathname } from "@/i18n/navigation";
import { mainNav, productKeys } from "@/lib/site";
import Logo from "./Logo";
import LanguageSwitcher from "./LanguageSwitcher";

const productIcons: Record<string, React.ElementType> = {
  Users,
  Building2,
  Briefcase,
  Home: HomeIcon,
  Car,
  Bike,
  Zap,
};

const companyIcons: Record<string, React.ElementType> = {
  Info,
  TrendingUp,
  Quote,
  Handshake,
  Briefcase,
};

export default function Navbar() {
  const t = useTranslations("Nav");
  const tProd = useTranslations("Home.products.items");
  const tMenu = useTranslations("CompanyMenu");
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [openMobile, setOpenMobile] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
    setOpenMobile(null);
  }, [pathname]);

  const childLabel = (parentNs: string | undefined, key: string) =>
    parentNs === "products" ? tProd(`${key}.name`) : t(key);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-md shadow-[0_1px_0_rgba(26,46,90,0.06)]"
          : "bg-white"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-[72px]">
          <Logo />

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {mainNav.map((item) => {
              const hasChildren = "children" in item && item.children;
              if (!hasChildren) {
                const active = pathname === item.href;
                return (
                  <Link
                    key={item.key}
                    href={item.href!}
                    className={`text-sm font-medium px-3.5 py-2 rounded-lg transition-colors ${
                      active ? "text-navy" : "text-navy/70 hover:text-navy hover:bg-cream"
                    }`}
                  >
                    {t(item.key)}
                  </Link>
                );
              }

              const isLoans = item.key === "loans";
              return (
                <div key={item.key} className="relative group">
                  <button className="flex items-center gap-1 text-sm font-medium px-3.5 py-2 rounded-lg text-navy/70 group-hover:text-navy group-hover:bg-cream transition-colors">
                    {t(item.key)}
                    <ChevronDown className="w-3.5 h-3.5 transition-transform duration-200 group-hover:rotate-180" />
                  </button>

                  {/* Dropdown */}
                  <div className="absolute left-1/2 -translate-x-1/2 top-full pt-3 opacity-0 invisible translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-200 ease-out">
                    {isLoans ? (
                      <div className="w-[480px] bg-white rounded-2xl shadow-2xl ring-1 ring-navy/10 p-3">
                        <div className="grid grid-cols-2 gap-1">
                          {productKeys.map((p) => {
                            const Icon = productIcons[p.icon] ?? Users;
                            return (
                              <Link
                                key={p.key}
                                href={p.href}
                                className="flex items-start gap-3 p-3 rounded-xl hover:bg-cream transition-colors group/item"
                              >
                                <span className="grid place-items-center w-9 h-9 rounded-lg bg-navy/[0.05] group-hover/item:bg-gold/10 transition-colors flex-shrink-0">
                                  <Icon className="w-[18px] h-[18px] text-navy/70 group-hover/item:text-gold transition-colors" strokeWidth={1.5} />
                                </span>
                                <span className="min-w-0">
                                  <span className="block font-semibold text-navy text-sm leading-tight">
                                    {tProd(`${p.key}.name`)}
                                  </span>
                                  <span className="block text-navy/45 text-xs mt-0.5">
                                    {tProd(`${p.key}.tag`)}
                                  </span>
                                </span>
                              </Link>
                            );
                          })}
                        </div>
                        <Link
                          href="/loan-products"
                          className="flex items-center justify-center gap-1.5 mt-2 pt-3 border-t border-navy/5 text-sm font-semibold text-gold hover:gap-2.5 transition-all"
                        >
                          {t("loans")}
                          <ArrowRight className="w-4 h-4" />
                        </Link>
                      </div>
                    ) : (
                      <div className="w-72 bg-white rounded-2xl shadow-2xl ring-1 ring-navy/10 p-2">
                        {item.children!.map((child) => {
                          const Icon = companyIcons[child.icon ?? ""] ?? Info;
                          return (
                            <Link
                              key={child.key}
                              href={child.href}
                              className="flex items-start gap-3 p-3 rounded-xl hover:bg-cream transition-colors group/item"
                            >
                              <span className="grid place-items-center w-9 h-9 rounded-lg bg-navy/[0.05] group-hover/item:bg-gold/10 transition-colors flex-shrink-0">
                                <Icon className="w-[18px] h-[18px] text-navy/70 group-hover/item:text-gold transition-colors" strokeWidth={1.5} />
                              </span>
                              <span className="min-w-0">
                                <span className="block font-semibold text-navy text-sm leading-tight">
                                  {childLabel(item.labelNs, child.key)}
                                </span>
                                <span className="block text-navy/45 text-xs mt-0.5">
                                  {tMenu(child.key)}
                                </span>
                              </span>
                            </Link>
                          );
                        })}
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </nav>

          <div className="flex items-center gap-1.5">
            <LanguageSwitcher />
            <Link
              href="/apply"
              className="hidden sm:inline-flex items-center gap-1.5 bg-gold hover:bg-gold-dark text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition-colors"
            >
              {t("apply")}
            </Link>
            <button
              onClick={() => setMenuOpen((v) => !v)}
              className="lg:hidden grid place-items-center w-10 h-10 rounded-lg text-navy hover:bg-cream transition-colors"
              aria-label="Toggle menu"
              aria-expanded={menuOpen}
            >
              {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="lg:hidden bg-white border-t border-navy/5 shadow-lg max-h-[calc(100vh-72px)] overflow-y-auto">
          <nav className="max-w-7xl mx-auto px-4 py-3 flex flex-col">
            <Link href="/" className="text-navy font-medium py-2.5 px-3 rounded-lg hover:bg-cream transition-colors text-sm">
              {t("home")}
            </Link>

            {mainNav.map((item) => {
              const hasChildren = "children" in item && item.children;
              if (!hasChildren) {
                return (
                  <Link key={item.key} href={item.href!} className="text-navy font-medium py-2.5 px-3 rounded-lg hover:bg-cream transition-colors text-sm">
                    {t(item.key)}
                  </Link>
                );
              }
              const expanded = openMobile === item.key;
              const children = item.key === "loans" ? productKeys : item.children!;
              return (
                <div key={item.key}>
                  <button
                    onClick={() => setOpenMobile(expanded ? null : item.key)}
                    className="w-full flex items-center justify-between text-navy font-medium py-2.5 px-3 rounded-lg hover:bg-cream transition-colors text-sm"
                  >
                    {t(item.key)}
                    <ChevronDown className={`w-4 h-4 transition-transform ${expanded ? "rotate-180" : ""}`} />
                  </button>
                  {expanded && (
                    <div className="pl-3 pb-1">
                      {children.map((child) => (
                        <Link
                          key={child.key}
                          href={child.href}
                          className="block py-2 px-3 rounded-lg text-navy/70 hover:text-navy hover:bg-cream transition-colors text-sm"
                        >
                          {item.key === "loans" ? tProd(`${child.key}.name`) : childLabel(item.labelNs, child.key)}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}

            <Link href="/apply" className="mt-3 bg-gold hover:bg-gold-dark text-white font-semibold py-3 px-4 rounded-lg text-center text-sm transition-colors">
              {t("apply")}
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
