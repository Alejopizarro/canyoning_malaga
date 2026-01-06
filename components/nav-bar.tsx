import Image from "next/image";
import Link from "next/link";
import SearchInput from "./search-input";
import ItemsMenuMobile from "./items-menu-mobile";
import MenuDesktop from "./menu-desktop";
import { getExcursions } from "@/lib/activities";

const Navbar = async () => {
  // Obtener excursiones desde Google Sheets
  const excursions = await getExcursions();

  // Agrupar excursiones por categoría
  const canyoningExcursions = excursions.filter(
    (exc) => exc.category === "Canyoning"
  );
  const viaFerrataExcursions = excursions.filter(
    (exc) => exc.category === "Via Ferrata"
  );
  const hikingExcursions = excursions.filter(
    (exc) => exc.category === "Hiking"
  );
  const moreActivitiesExcursions = excursions.filter(
    (exc) => exc.category === "More Activities"
  );

  return (
    <>
      <div className="fixed top-4 left-1/2 -translate-x-1/2 lg:top-8 z-[999] w-[calc(100%-2rem)] max-w-5xl">
        <div className="absolute inset-0 bg-neutral-600/50 backdrop-blur-md rounded-full border border-white/10 shadow-lg" />
        <nav className="py-2 px-2 flex items-center justify-between rounded-full gap-x-2 lg:gap-x-3 relative">
          <div className="flex items-center lg:space-x-4 flex-1 lg:flex-none flex-shrink-0">
            {/* Logo Desktop */}
            <Link href="/" className="hidden pl-2 lg:flex flex-shrink-0">
              <Image
                src="/logo-tuur.webp"
                width={90}
                height={90}
                alt="logo tuur canyoning horizontal white"
                priority={true}
                className="cursor-pointer"
              />
            </Link>
            {/* Logo Mobile/Tablet */}
            <Link href="/" className="lg:hidden flex-shrink-0">
              <Image
                src="/logo-tuur-mobile.png"
                width={36}
                height={36}
                alt="logo tuur canyoning vertical white"
                priority={true}
                className="cursor-pointer"
              />
            </Link>
            {/* Menu Desktop */}
            <div className="hidden lg:flex items-center ml-2 flex-shrink-0">
              <MenuDesktop
                canyoningExcursions={canyoningExcursions}
                viaFerrataExcursions={viaFerrataExcursions}
                hikingExcursions={hikingExcursions}
                moreActivitiesExcursions={moreActivitiesExcursions}
              />
            </div>
          </div>

          <div className="flex items-center space-x-2 lg:space-x-3 flex-shrink-0">
            <SearchInput />

            {/* Botón For Companies - Solo Desktop */}
            <Link
              href="/team-building"
              className="hidden lg:flex bg-primary-light hover:bg-primary-light/90 text-black px-3 py-1 rounded-full transition-colors text-[0.875rem] font-medium whitespace-nowrap flex-shrink-0"
            >
              For Companies
            </Link>

            {/* Menu Mobile/Tablet */}
            <div className="lg:hidden">
              <ItemsMenuMobile
                canyoningExcursions={canyoningExcursions}
                viaFerrataExcursions={viaFerrataExcursions}
                hikingExcursions={hikingExcursions}
                moreActivitiesExcursions={moreActivitiesExcursions}
              />
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
