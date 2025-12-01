"use client";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu, PanelRightClose } from "lucide-react";
import { useRouter } from "next/navigation";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import { Excursion } from "@/app/data";
import Link from "next/link";

interface ItemsMenuMobileProps {
  canyoningExcursions: Excursion[];
  viaFerrataExcursions: Excursion[];
  hikingExcursions: Excursion[];
  moreActivitiesExcursions: Excursion[];
}

const ItemsMenuMobile = ({
  canyoningExcursions,
  viaFerrataExcursions,
  hikingExcursions,
  moreActivitiesExcursions,
}: ItemsMenuMobileProps) => {
  const router = useRouter();
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          variant="outline"
          className="flex items-center gap-x-2 text-gray-950 text-sm font-semibold"
        >
          <Menu width={20} color="black" />
        </Button>
      </SheetTrigger>
      <SheetContent className="z-1000">
        <SheetHeader>
          <SheetTitle>Menu</SheetTitle>
        </SheetHeader>
        <div className="px-4 flex flex-col gap-y-4">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <button
                className="font-semibold mb-4"
                onClick={() => router.push("/")}
              >
                Inicio
              </button>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className="font-semibold text-md">
                Activities
              </AccordionTrigger>
              <AccordionContent className="flex flex-col space-y-4 items-start">
                {/* Canyoning */}
                <div className="w-full">
                  <h3 className="font-bold text-sm text-primary mb-2">
                    Canyoning
                  </h3>
                  <div className="flex flex-col space-y-2 pl-2">
                    {canyoningExcursions.slice(0, 5).map((excursion) => (
                      <Link
                        key={excursion.route}
                        href={`/${excursion.categoryPath || "excursions"}/${
                          excursion.route
                        }`}
                        className="text-sm hover:text-primary transition-colors"
                      >
                        {excursion.title}
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Via Ferrata */}
                <div className="w-full">
                  <h3 className="font-bold text-sm text-primary mb-2">
                    Via Ferrata
                  </h3>
                  <div className="flex flex-col space-y-2 pl-2">
                    {viaFerrataExcursions.slice(0, 5).map((excursion) => (
                      <Link
                        key={excursion.route}
                        href={`/${excursion.categoryPath || "excursions"}/${
                          excursion.route
                        }`}
                        className="text-sm hover:text-primary transition-colors"
                      >
                        {excursion.title}
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Hiking */}
                <div className="w-full">
                  <h3 className="font-bold text-sm text-primary mb-2">
                    Hiking
                  </h3>
                  <div className="flex flex-col space-y-2 pl-2">
                    {hikingExcursions.slice(0, 5).map((excursion) => (
                      <Link
                        key={excursion.route}
                        href={`/${excursion.categoryPath || "hiking"}/${
                          excursion.route
                        }`}
                        className="text-sm hover:text-primary transition-colors"
                      >
                        {excursion.title}
                      </Link>
                    ))}
                  </div>
                </div>

                {/* More Activities */}
                <div className="w-full">
                  <h3 className="font-bold text-sm text-primary mb-2">
                    More Activities
                  </h3>
                  <div className="flex flex-col space-y-2 pl-2">
                    {moreActivitiesExcursions.slice(0, 5).map((excursion) => (
                      <Link
                        key={excursion.route}
                        href={`/${excursion.categoryPath || "activities"}/${
                          excursion.route
                        }`}
                        className="text-sm hover:text-primary transition-colors"
                      >
                        {excursion.title}
                      </Link>
                    ))}
                  </div>
                </div>

                {/* See all activities */}
                <Link
                  href="/activities"
                  className="w-full text-center text-sm font-semibold text-primary hover:underline pt-2"
                >
                  See all activities →
                </Link>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3" className="py-4">
              <button
                className="font-semibold"
                onClick={() => router.push("/about-us")}
              >
                About Us
              </button>
            </AccordionItem>
            <AccordionItem value="item-4" className="py-4">
              <button
                className="font-semibold"
                onClick={() => router.push("/blog")}
              >
                Blog
              </button>
            </AccordionItem>
            <AccordionItem value="item-5" className="py-4">
              <button
                className="font-semibold"
                onClick={() => router.push("/contact")}
              >
                Contact
              </button>
            </AccordionItem>
          </Accordion>
        </div>
        <SheetFooter>
          <SheetClose asChild>
            <PanelRightClose width={20} />
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};

export default ItemsMenuMobile;
