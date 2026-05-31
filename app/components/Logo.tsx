import { Link } from "@/i18n/navigation";

// Brand lockup. Monogram is a refined placeholder until the real logo asset
// is supplied; swap the monogram block for an <Image> when it arrives.
export default function Logo({
  variant = "dark",
}: {
  variant?: "dark" | "light";
}) {
  const wordmark = variant === "light" ? "text-white" : "text-navy";
  const sub = "text-gold";

  return (
    <Link href="/" className="flex items-center gap-3 flex-shrink-0 group">
      <span
        className={`grid place-items-center w-11 h-11 rounded-lg ${
          variant === "light" ? "bg-white/10" : "bg-navy"
        } ring-1 ring-gold/40 transition-transform group-hover:scale-105`}
      >
        <span className="font-heading font-bold text-gold text-base leading-none">
          JF
        </span>
      </span>
      <span className="leading-tight">
        <span className={`block font-heading font-bold text-lg ${wordmark}`}>
          Joinus Finance
        </span>
        <span
          className={`block text-[10px] font-semibold uppercase tracking-[0.2em] ${sub}`}
        >
          Company Ltd
        </span>
      </span>
    </Link>
  );
}
