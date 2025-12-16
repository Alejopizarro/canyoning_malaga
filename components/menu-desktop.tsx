import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import { Excursion } from "@/app/data";
import Image from "next/image";

interface MenuDesktopProps {
  canyoningExcursions: Excursion[];
  viaFerrataExcursions: Excursion[];
  hikingExcursions: Excursion[];
  moreActivitiesExcursions: Excursion[];
}

const MenuDesktop = ({
  canyoningExcursions,
  viaFerrataExcursions,
  hikingExcursions,
  moreActivitiesExcursions,
}: MenuDesktopProps) => {
  return (
    <NavigationMenu>
      <NavigationMenuList className="space-x-0">
        <NavigationMenuItem>
          <NavigationMenuTrigger className="text-xs font-medium text-white/90 hover:text-white bg-transparent hover:bg-white/10 data-[state=open]:bg-white/10 py-1.5 px-2.5 rounded-full transition-all whitespace-nowrap">
            Activities
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="w-[800px] p-4 bg-white rounded-xl shadow-xl">
              <div className="grid grid-cols-4 gap-3 max-h-[500px] overflow-y-auto">
                {/* Canyoning */}
                <div className="space-y-2">
                  <Image
                    src="/guadalmina-1.webp"
                    alt="Canyoning in Malaga"
                    width={300}
                    height={200}
                    className="rounded-lg w-48 h-32 object-cover mb-2"
                  />
                  <h3 className="font-bold px-2 text-sm text-primary mb-3">
                    Canyoning
                  </h3>
                  {canyoningExcursions.slice(0, 3).map((excursion) => (
                    <Link
                      key={excursion.route}
                      href={`/${excursion.categoryPath || "canyoning"}/${
                        excursion.route
                      }`}
                      className="block select-none rounded-md p-2 leading-none no-underline outline-none transition-colors hover:bg-gray-100 hover:text-primary focus:bg-gray-100"
                    >
                      <div className="text-sm font-medium leading-tight text-gray-700">
                        {excursion.title}
                      </div>
                    </Link>
                  ))}
                </div>

                {/* Via Ferrata */}
                <div className="space-y-2">
                  <Image
                    src="/VF-Ronda-1.jpg"
                    alt="Via Ferrata in Malaga"
                    width={300}
                    height={200}
                    className="rounded-lg w-48 h-32 object-cover mb-2"
                  />
                  <h3 className="font-bold px-2 text-sm text-primary mb-3">
                    Via Ferrata
                  </h3>
                  {viaFerrataExcursions.slice(0, 3).map((excursion) => (
                    <Link
                      key={excursion.route}
                      href={`/${excursion.categoryPath || "via-ferrata"}/${
                        excursion.route
                      }`}
                      className="block select-none rounded-md p-2 leading-none no-underline outline-none transition-colors hover:bg-gray-100 hover:text-primary focus:bg-gray-100"
                    >
                      <div className="text-sm font-medium leading-tight text-gray-700">
                        {excursion.title}
                      </div>
                    </Link>
                  ))}
                </div>

                {/* Hiking */}
                <div className="space-y-2">
                  <Image
                    src="/la-concha-1.jpg"
                    alt="Hiking in Malaga"
                    width={300}
                    height={200}
                    className="rounded-lg w-48 h-32 object-cover mb-2"
                  />
                  <h3 className="font-bold px-2 text-sm text-primary mb-3">
                    Hiking
                  </h3>
                  {hikingExcursions.slice(0, 3).map((excursion) => (
                    <Link
                      key={excursion.route}
                      href={`/${excursion.categoryPath || "hiking"}/${
                        excursion.route
                      }`}
                      className="block select-none rounded-md p-2 leading-none no-underline outline-none transition-colors hover:bg-gray-100 hover:text-primary focus:bg-gray-100"
                    >
                      <div className="text-sm font-medium leading-tight text-gray-700">
                        {excursion.title}
                      </div>
                    </Link>
                  ))}
                </div>

                {/* More Activities */}
                <div className="space-y-2">
                  <Image
                    src="/kayak-banus-2.png"
                    alt="More Activities in Malaga"
                    width={300}
                    height={200}
                    className="rounded-lg w-48 h-32 object-cover mb-2"
                  />
                  <h3 className="font-bold px-2 text-sm text-primary mb-3">
                    More Activities
                  </h3>
                  {moreActivitiesExcursions.slice(0, 3).map((excursion) => (
                    <Link
                      key={excursion.route}
                      href={`/${excursion.categoryPath || "activities"}/${
                        excursion.route
                      }`}
                      className="block select-none rounded-md p-2 leading-none no-underline outline-none transition-colors hover:bg-gray-100 hover:text-primary focus:bg-gray-100"
                    >
                      <div className="text-sm font-medium leading-tight text-gray-700">
                        {excursion.title}
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* See all activities link at the bottom */}
              <div className="mt-4 pt-3 border-t border-gray-200">
                <Link
                  href="/activities"
                  className="flex items-center justify-center rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-gray-100 text-primary font-semibold"
                >
                  <div className="text-sm leading-tight">
                    See all activities →
                  </div>
                </Link>
              </div>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuLink
            href="/about-us"
            className="text-xs font-medium text-white/90 hover:text-white hover:bg-white/10 py-1.5 px-2.5 rounded-full transition-all inline-block whitespace-nowrap"
          >
            About Us
          </NavigationMenuLink>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuLink
            href="/blog"
            className="text-xs font-medium text-white/90 hover:text-white hover:bg-white/10 py-1.5 px-2.5 rounded-full transition-all inline-block whitespace-nowrap"
          >
            Blog
          </NavigationMenuLink>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuLink
            href="/contact"
            className="text-xs font-medium text-white/90 hover:text-white hover:bg-white/10 py-1.5 px-2.5 rounded-full transition-all inline-block whitespace-nowrap"
          >
            Contact
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default MenuDesktop;
