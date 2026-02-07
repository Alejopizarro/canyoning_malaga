import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import { Excursion } from "@/lib/activities";
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
    <NavigationMenu delayDuration={0}>
      <NavigationMenuList className="space-x-0">
        <NavigationMenuItem>
          <NavigationMenuTrigger className="text-[0.875rem] font-medium text-white/90 hover:text-white bg-transparent hover:bg-white/10 data-[state=open]:bg-white/10 px-2.5 rounded-full transition-all whitespace-nowrap">
            Activities
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="bg-neutral-600/50 backdrop-blur-md p-2 w-[800px] shadow-xl">
              <div className="grid grid-cols-4 gap-3 max-h-[500px] pr-1 overflow-y-auto">
                {/* Canyoning */}
                <div className="space-y-2">
                  <Image
                    src="/guadalmina-1.webp"
                    alt="Canyoning in Malaga"
                    width={300}
                    height={200}
                    className="rounded-2xl w-48 h-32 object-cover mb-2"
                  />
                  <a
                    href="/activities?category=canyoning"
                    className="font-bold px-2 text-sm text-primary-light mb-3"
                  >
                    Canyoning
                  </a>
                  {canyoningExcursions.slice(0, 3).map((excursion) => (
                    <Link
                      key={excursion.slug}
                      href={`/${excursion.categoryPath || "canyoning"}/${
                        excursion.slug
                      }`}
                      className="block select-none rounded-md p-2 leading-none no-underline outline-none transition-colors hover:bg-neutral-600/80 hover:text-primary focus:bg-gray-100"
                    >
                      <div className="text-sm font-medium leading-tight text-background">
                        {excursion.title}
                      </div>
                    </Link>
                  ))}
                </div>

                {/* Via Ferrata */}
                <div className="space-y-2">
                  <Image
                    src="/casares-4.webp"
                    alt="Via Ferrata in Malaga"
                    width={300}
                    height={200}
                    className="rounded-lg w-48 h-32 object-cover mb-2"
                  />
                  <a
                    href="/activities?category=Via+Ferrata"
                    className="font-bold px-2 text-sm text-primary-light mb-3"
                  >
                    Via Ferrata
                  </a>
                  {viaFerrataExcursions.slice(0, 3).map((excursion) => (
                    <Link
                      key={excursion.slug}
                      href={`/${excursion.categoryPath || "via-ferrata"}/${
                        excursion.slug
                      }`}
                      className="block select-none rounded-md p-2 leading-none no-underline outline-none transition-colors hover:bg-neutral-600/80 hover:text-primary focus:bg-gray-100"
                    >
                      <div className="text-sm font-medium leading-tight text-background">
                        {excursion.title}
                      </div>
                    </Link>
                  ))}
                </div>

                {/* Hiking */}
                <div className="space-y-2">
                  <Image
                    src="/la-concha-1.webp"
                    alt="Hiking in Malaga"
                    width={300}
                    height={200}
                    className="rounded-lg w-48 h-32 object-cover mb-2"
                  />
                  <a
                    href="/activities?category=Hiking"
                    className="font-bold px-2 text-sm text-primary-light mb-3"
                  >
                    Hiking
                  </a>
                  {hikingExcursions.slice(0, 3).map((excursion) => (
                    <Link
                      key={excursion.slug}
                      href={`/${excursion.categoryPath || "hiking"}/${
                        excursion.slug
                      }`}
                      className="block select-none rounded-md p-2 leading-none no-underline outline-none transition-colors hover:bg-neutral-600/80 hover:text-primary focus:bg-gray-100"
                    >
                      <div className="text-sm font-medium leading-tight text-background">
                        {excursion.title}
                      </div>
                    </Link>
                  ))}
                </div>

                {/* More Activities */}
                <div className="space-y-2">
                  <Image
                    src="/costa-del-sol.webp"
                    alt="More Activities in Malaga"
                    width={300}
                    height={200}
                    className="rounded-lg w-48 h-32 object-cover mb-2"
                  />
                  <a
                    href="/activities?category=More+Activities"
                    className="font-bold px-2 text-sm text-primary-light mb-3"
                  >
                    More Activities
                  </a>
                  {moreActivitiesExcursions.slice(0, 3).map((excursion) => (
                    <Link
                      key={excursion.slug}
                      href={`/${excursion.categoryPath || "activities"}/${
                        excursion.slug
                      }`}
                      className="block select-none rounded-md p-2 leading-none no-underline outline-none transition-colors hover:bg-neutral-600/80 hover:text-primary focus:bg-gray-100"
                    >
                      <div className="text-sm font-medium leading-tight text-background">
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
                  className="flex items-center justify-center rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-neutral-600/80 text-primary-light font-semibold"
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
            className="text-[0.875rem] font-medium text-white/90 hover:text-white hover:bg-white/10 py-1.5 px-2.5 rounded-full transition-all inline-block whitespace-nowrap"
          >
            About Us
          </NavigationMenuLink>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuLink
            href="/blog"
            className="text-[0.875rem] font-medium text-white/90 hover:text-white hover:bg-white/10 py-1.5 px-2.5 rounded-full transition-all inline-block whitespace-nowrap"
          >
            Blog
          </NavigationMenuLink>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuLink
            href="/contact"
            className="text-[0.875rem] font-medium text-white/90 hover:text-white hover:bg-white/10 py-1.5 px-2.5 rounded-full transition-all inline-block whitespace-nowrap"
          >
            Contact
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default MenuDesktop;
