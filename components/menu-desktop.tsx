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
    <>
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger className="text-lg font-medium hover:text-primary transition-colors">
              Activities
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <div className="w-[800px] p-4">
                <div className="grid grid-cols-4 gap-3 max-h-[500px] overflow-y-auto">
                  {/* Canyoning */}
                  <div className="space-y-2">
                    <h3 className="font-bold px-2 text-sm text-primary mb-3">
                      Canyoning
                    </h3>
                    {canyoningExcursions.slice(0, 8).map((excursion) => (
                      <NavigationMenuLink key={excursion.route} asChild>
                        <Link
                          href={`/${excursion.categoryPath || "excursions"}/${
                            excursion.route
                          }`}
                          className="block select-none rounded-md p-2 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        >
                          <div className="text-sm font-medium leading-tight">
                            {excursion.title}
                          </div>
                        </Link>
                      </NavigationMenuLink>
                    ))}
                  </div>

                  {/* Via Ferrata */}
                  <div className="space-y-2">
                    <h3 className="font-bold px-2 text-sm text-primary mb-3">
                      Via Ferrata
                    </h3>
                    {viaFerrataExcursions.slice(0, 8).map((excursion) => (
                      <NavigationMenuLink key={excursion.route} asChild>
                        <Link
                          href={`/${excursion.categoryPath || "excursions"}/${
                            excursion.route
                          }`}
                          className="block select-none rounded-md p-2 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        >
                          <div className="text-sm font-medium leading-tight">
                            {excursion.title}
                          </div>
                        </Link>
                      </NavigationMenuLink>
                    ))}
                  </div>

                  {/* Hiking */}
                  <div className="space-y-2">
                    <h3 className="font-bold px-2 text-sm text-primary mb-3">
                      Hiking
                    </h3>
                    {hikingExcursions.slice(0, 8).map((excursion) => (
                      <Link
                        key={excursion.route}
                        href={`/${excursion.categoryPath || "hiking"}/${
                          excursion.route
                        }`}
                        className="block select-none rounded-md p-2 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      >
                        <div className="text-sm font-medium leading-tight">
                          {excursion.title}
                        </div>
                      </Link>
                    ))}
                  </div>

                  {/* More Activities */}
                  <div className="space-y-2">
                    <h3 className="font-bold px-2 text-sm text-primary mb-3">
                      More Activities
                    </h3>
                    {moreActivitiesExcursions.slice(0, 8).map((excursion) => (
                      <Link
                        key={excursion.route}
                        href={`/${excursion.categoryPath || "activities"}/${
                          excursion.route
                        }`}
                        className="block select-none rounded-md p-2 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      >
                        <div className="text-sm font-medium leading-tight">
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
                    className="flex items-center justify-center rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground text-primary font-semibold"
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
              className="text-lg font-medium hover:text-primary transition-colors"
            >
              About Us
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink
              href="/blog"
              className="text-lg font-medium hover:text-primary transition-colors"
            >
              Blog
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink
              href="/contact"
              className="text-lg font-medium hover:text-primary transition-colors"
            >
              Contact
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </>
  );
};

export default MenuDesktop;
