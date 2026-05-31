import { ImageIcon } from "lucide-react";

// A descriptive image placeholder that briefs what the photo should show,
// so whoever sources the images knows exactly what's needed. Sits inside a
// framed container (which supplies the aspect ratio / background).
export default function PhotoPlaceholder({
  title,
  description,
  spec,
  compact = false,
  dark = false,
}: {
  title: string;
  description?: string;
  spec?: string;
  compact?: boolean;
  dark?: boolean;
}) {
  const titleColor = dark ? "text-white/75" : "text-navy/60";
  const descColor = dark ? "text-white/45" : "text-navy/40";
  const specColor = dark ? "text-white/35" : "text-navy/30";
  const iconBg = dark ? "bg-white/10" : "bg-navy/[0.06]";
  const iconColor = dark ? "text-white/50" : "text-navy/35";

  if (compact) {
    return (
      <div className="text-center px-3">
        <ImageIcon className={`w-5 h-5 ${iconColor} mx-auto mb-1.5`} strokeWidth={1.5} />
        <p className={`text-xs font-medium leading-snug ${dark ? "text-white/60" : "text-navy/50"}`}>
          {title}
        </p>
      </div>
    );
  }

  return (
    <div className="text-center px-6 max-w-xs mx-auto">
      <span className={`inline-grid place-items-center w-11 h-11 rounded-full ${iconBg} mb-3`}>
        <ImageIcon className={`w-5 h-5 ${iconColor}`} strokeWidth={1.5} />
      </span>
      <p className={`font-semibold text-sm ${titleColor}`}>{title}</p>
      {description && <p className={`text-xs leading-relaxed mt-1.5 ${descColor}`}>{description}</p>}
      {spec && (
        <p className={`text-[10px] uppercase tracking-[0.15em] mt-2.5 ${specColor}`}>{spec}</p>
      )}
    </div>
  );
}
