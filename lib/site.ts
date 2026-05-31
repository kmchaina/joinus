// Single source of truth for non-translated site data (contact details,
// navigation structure, product metadata). Copy strings live in /messages.

export const site = {
  name: "Joinus Finance Company Ltd",
  shortName: "Joinus Finance",
  website: "www.joinusfinance.co.tz",
  email: "joyce@joinusfinance.co.tz",
  phones: ["+255 656 934 343", "+255 755 356 053"],
  // Digits only, for tel: and wa.me links. Primary WhatsApp number.
  whatsapp: "255656934343",
  phonesTel: ["+255656934343", "+255755356053"],
  mapsQuery:
    "PSSSF Commercial Complex Sam Nujoma Road Dar es Salaam Tanzania",
} as const;

// Flat list (used by the footer). `key` maps to the Nav namespace.
export const navItems = [
  { key: "about", href: "/about" },
  { key: "loans", href: "/loan-products" },
  { key: "education", href: "/financial-education" },
  { key: "impact", href: "/impact" },
  { key: "stories", href: "/client-stories" },
  { key: "resources", href: "/resources" },
  { key: "careers", href: "/careers" },
  { key: "partners", href: "/partners" },
  { key: "contact", href: "/contact" },
] as const;

// Header navigation — grouped into a handful of top-level items with
// dropdowns, instead of one long flat menu.
//   - `loans`   → mega-dropdown of the 7 products (labels from products.items)
//   - `company` → About, Impact, Client Stories, Partners, Careers
// `labelNs` tells the navbar which translation namespace a child uses.
type NavChild = { key: string; href: string; icon?: string };
type NavGroup = {
  key: string;
  href?: string;
  labelNs?: "products" | "nav";
  children?: NavChild[];
};

export const mainNav: NavGroup[] = [
  {
    key: "loans",
    href: "/loan-products",
    labelNs: "products" as const,
    children: [
      { key: "group", href: "/loan-products#group-loans" },
      { key: "business", href: "/loan-products#business-loans" },
      { key: "salaried", href: "/loan-products#salaried-loans" },
      { key: "property", href: "/loan-products#property-financing" },
      { key: "vehicle", href: "/loan-products#vehicle-financing" },
      { key: "motorcycle", href: "/loan-products#motorcycle-bajaji" },
      { key: "emergency", href: "/loan-products#emergency-loans" },
    ],
  },
  {
    key: "company",
    labelNs: "nav" as const,
    children: [
      { key: "about", href: "/about", icon: "Info" },
      { key: "impact", href: "/impact", icon: "TrendingUp" },
      { key: "stories", href: "/client-stories", icon: "Quote" },
      { key: "partners", href: "/partners", icon: "Handshake" },
      { key: "careers", href: "/careers", icon: "Briefcase" },
    ],
  },
  { key: "education", href: "/financial-education" },
  { key: "resources", href: "/resources" },
  { key: "contact", href: "/contact" },
];

// Loan products. `key` maps to Home.products.items.<key> in /messages.
// `icon` is a lucide-react icon name resolved in the component.
export const productKeys = [
  { key: "group", icon: "Users", href: "/loan-products#group-loans" },
  { key: "business", icon: "Building2", href: "/loan-products#business-loans" },
  { key: "salaried", icon: "Briefcase", href: "/loan-products#salaried-loans" },
  { key: "property", icon: "Home", href: "/loan-products#property-financing" },
  { key: "vehicle", icon: "Car", href: "/loan-products#vehicle-financing" },
  { key: "motorcycle", icon: "Bike", href: "/loan-products#motorcycle-bajaji" },
  { key: "emergency", icon: "Zap", href: "/loan-products#emergency-loans" },
] as const;

// Impact figures — PLACEHOLDERS. Replace with verified data before launch.
// `value` is numeric so the counter can animate; prefix/suffix wrap it.
export const impactStats: {
  key: string;
  value: number;
  prefix?: string;
  suffix?: string;
}[] = [
  { key: "women", value: 1200, suffix: "+" },
  { key: "businesses", value: 450, suffix: "+" },
  { key: "trained", value: 850, suffix: "+" },
  { key: "portfolio", value: 2, prefix: "TZS ", suffix: "B+" },
  { key: "repayment", value: 98, suffix: "%" },
];

// Partners. `monogram` is the placeholder wordmark shown until a real logo
// is supplied. To show a real logo: add the file to /public/partners/ and
// set `logo: "/partners/<file>.svg"`.
export const partners: { name: string; monogram: string; logo?: string }[] = [
  { name: "NMB Bank", monogram: "NMB" },
  { name: "CRDB Bank", monogram: "CRDB" },
  { name: "SELF Microfinance Fund", monogram: "SELF" },
  { name: "Starlink Gulf Trading Company Ltd", monogram: "Starlink" },
  { name: "Magic Builders International", monogram: "Magic Builders" },
  { name: "Climax Company Ltd", monogram: "Climax" },
];
