import Link from "next/link";

type Props = {
  active: "en" | "es";
};

export default function LanguageSwitcher({ active }: Props) {
  return (
    <div className="flex items-center bg-white/15 backdrop-blur-sm border border-white/25 rounded-full p-1">
      <Link
        href="/summer-camp"
        className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-semibold transition-colors ${
          active === "en"
            ? "bg-white text-gray-900"
            : "text-white/80 hover:text-white hover:bg-white/10"
        }`}
      >
        <span>EN</span>
      </Link>
      <Link
        href="/campamento-de-verano"
        className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-semibold transition-colors ${
          active === "es"
            ? "bg-white text-gray-900"
            : "text-white/80 hover:text-white hover:bg-white/10"
        }`}
      >
        <span>ES</span>
      </Link>
    </div>
  );
}
