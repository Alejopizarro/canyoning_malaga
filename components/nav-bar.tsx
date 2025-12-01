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
    <nav className="w-full py-4 px-4 flex items-center justify-between relative">
      <div className="flex items-center sm:space-x-8">
        <Link href="/">
          <Image
            src="/tuur-logo.png"
            width={100}
            height={100}
            alt="logo tuur canyoning horizontal black"
            priority={true}
            className="hidden md:flex cursor-pointer"
          />
        </Link>
        <Link href="/">
          <Image
            src="/tuur-logo-vertical.png"
            width={40}
            height={40}
            alt="logo tuur canyoning vertical black"
            priority={true}
            className="md:hidden cursor-pointer"
          />
        </Link>
        <div className="hidden md:flex space-x-8 ml-10 text-lg font-medium">
          <MenuDesktop
            canyoningExcursions={canyoningExcursions}
            viaFerrataExcursions={viaFerrataExcursions}
            hikingExcursions={hikingExcursions}
            moreActivitiesExcursions={moreActivitiesExcursions}
          />
        </div>
      </div>

      <div className="flex items-center space-x-4 mr-2">
        <SearchInput />
      </div>
      <button className="bg-primary hidden md:flex text-white px-4 py-2 rounded-sm hover:bg-primary/90 transition-colors text-md">
        For Companies
      </button>
      <div className="md:hidden">
        <ItemsMenuMobile
          canyoningExcursions={canyoningExcursions}
          viaFerrataExcursions={viaFerrataExcursions}
          hikingExcursions={hikingExcursions}
          moreActivitiesExcursions={moreActivitiesExcursions}
        />
      </div>
    </nav>
  );
};

export default Navbar;
