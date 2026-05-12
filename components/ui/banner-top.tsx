"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { X } from "lucide-react";
import { usePathname } from "next/navigation";

const HIDDEN_PATHS = ["/summer-camp", "/campamento-de-verano"];

const BannerTop = () => {
  const pathname = usePathname();
  const [closedByUser, setClosedByUser] = useState(false);

  const hidden = closedByUser || HIDDEN_PATHS.includes(pathname);

  useEffect(() => {
    document.documentElement.style.setProperty(
      "--banner-h",
      hidden ? "0.6rem" : "2.5rem",
    );
  }, [hidden]);

  if (hidden) return null;

  return (
    <div className="bg-yellow-300 font-semibold text-center text-sm py-2 px-4 w-full fixed top-0 z-50 flex items-center justify-center">
      <p className="flex-1 text-center">
        Summer Camp 2026 for Kids -{" "}
        <Link className="underline" href="/summer-camp">
          Register Now!
        </Link>
      </p>
      <button
        onClick={() => setClosedByUser(true)}
        aria-label="Close banner"
        className="shrink-0 ml-2 p-0.5 rounded hover:bg-yellow-400 transition-colors"
      >
        <X size={16} />
      </button>
    </div>
  );
};

export default BannerTop;
