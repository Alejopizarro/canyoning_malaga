import Image from "next/image";
import Link from "next/link";
import SearchInput from "./search-input";
import ItemsMenuMobile from "./items-menu-mobile";
import { excursions } from "@/app/data";
import MenuDesktop from "./menu-desktop";

const Navbar = () => {
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
      <nav className="py-2 px-2 flex items-center justify-between fixed top-4 left-1/2 -translate-x-1/2 lg:top-8 z-[999] rounded-full bg-neutral-600/30 backdrop-blur-md shadow-lg border border-white/10 gap-x-2 lg:gap-x-3 w-[calc(100%-2rem)] max-w-4xl mx-auto">
        <div className="flex items-center lg:space-x-4 flex-1 lg:flex-none flex-shrink-0">
          {/* Logo Desktop */}
          <Link href="/" className="hidden lg:flex flex-shrink-0">
            <Image
              src="/logo-tuur.png"
              width={75}
              height={75}
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
            className="hidden lg:flex bg-primary-light text-white px-3 py-1.5 rounded-full hover:bg-primary/90 transition-colors text-xs font-medium whitespace-nowrap flex-shrink-0"
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
    </>
  );
};

export default Navbar;
