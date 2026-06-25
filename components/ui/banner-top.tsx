"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { X } from "lucide-react";
import { usePathname } from "next/navigation";

const VISIBLE_PATHS = ["/summer-camp", "/campamento-de-verano"];

interface BannerTopProps {
  agotado?: boolean;
}

const BannerTop = ({ agotado = false }: BannerTopProps) => {
  const pathname = usePathname();
  const [closedByUser, setClosedByUser] = useState(false);

  const hidden = closedByUser || !VISIBLE_PATHS.includes(pathname);

  useEffect(() => {
    document.documentElement.style.setProperty(
      "--banner-h",
      hidden ? "0.8rem" : "2.5rem",
    );
  }, [hidden]);

  if (hidden) return null;

  return (
    <div
      className={`font-semibold text-center text-sm py-2 px-4 w-full fixed top-0 z-50 flex items-center justify-center ${
        agotado ? "bg-red-500 text-white" : "bg-yellow-300"
      }`}
    >
      <p className="flex-1 text-center">
        {agotado ? (
          "No spots available for this year, see you next year!"
        ) : (
          <>
            Summer Camp 2026 for Kids -{" "}
            <Link className="underline" href="/summer-camp">
              Register Now!
            </Link>
          </>
        )}
      </p>
      <button
        onClick={() => setClosedByUser(true)}
        aria-label="Close banner"
        className={`shrink-0 ml-2 p-0.5 rounded transition-colors ${
          agotado ? "hover:bg-red-600" : "hover:bg-yellow-400"
        }`}
      >
        <X size={16} />
      </button>
    </div>
  );
};

export default BannerTop;
