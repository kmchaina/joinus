import Image from "next/image";

// Renders a partner's real logo when available, otherwise a tasteful
// wordmark placeholder. To use a real logo: drop the file in
// /public/partners/ and set `logo: "/partners/<file>.svg"` in lib/site.ts.
export default function PartnerLogo({
  name,
  monogram,
  logo,
}: {
  name: string;
  monogram: string;
  logo?: string;
}) {
  if (logo) {
    return (
      <Image
        src={logo}
        alt={name}
        width={150}
        height={48}
        className="max-h-10 w-auto object-contain opacity-70 grayscale group-hover:opacity-100 group-hover:grayscale-0 transition duration-300"
      />
    );
  }
  return (
    <span className="font-heading font-bold text-lg text-navy/45 group-hover:text-navy transition-colors text-center px-3 leading-tight">
      {monogram}
    </span>
  );
}
