import Link from "next/link";

type Props = {
  active: "en" | "es";
  enHref?: string;
  esHref?: string;
  variant?: "glass" | "solid";
};

export default function LanguageSwitcher({
  active,
  enHref = "/summer-camp",
  esHref = "/campamento-de-verano",
  variant = "glass",
}: Props) {
  const container =
    variant === "glass"
      ? "flex items-center bg-white/15 backdrop-blur-sm border border-white/25 rounded-full p-1"
      : "flex items-center bg-gray-100 border border-gray-200 rounded-full p-1";

  const activeClass =
    variant === "glass"
      ? "bg-white text-gray-900"
      : "bg-white text-gray-900 shadow-sm border border-gray-200";

  const inactiveClass =
    variant === "glass"
      ? "text-white/80 hover:text-white hover:bg-white/10"
      : "text-gray-400 hover:text-gray-600";

  return (
    <div className={container}>
      <Link
        href={enHref}
        className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-semibold transition-colors ${
          active === "en" ? activeClass : inactiveClass
        }`}
      >
        <span>EN</span>
      </Link>
      <Link
        href={esHref}
        className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-semibold transition-colors ${
          active === "es" ? activeClass : inactiveClass
        }`}
      >
        <span>ES</span>
      </Link>
    </div>
  );
}
