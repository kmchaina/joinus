// Shared hero for inner pages — consistent with the home hero language.
export default function PageHero({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <section className="relative bg-navy overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 right-0 w-[520px] h-[520px] rounded-full bg-gold/[0.06] blur-3xl" />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-40 pb-16 lg:pt-44 lg:pb-20">
        <div className="max-w-3xl animate-fade-up">
          <span className="inline-flex items-center gap-2 text-gold text-xs font-semibold uppercase tracking-[0.2em] mb-6">
            <span className="w-6 h-px bg-gold" />
            {eyebrow}
          </span>
          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.05] text-balance">
            {title}
          </h1>
          {subtitle && (
            <p className="text-white/65 text-lg leading-relaxed mt-6 max-w-2xl">
              {subtitle}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
