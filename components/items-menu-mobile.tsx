"use client";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu, X } from "lucide-react";
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
        <button
          className="flex items-center justify-center w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
          aria-label="Open menu"
        >
          <Menu className="w-5 h-5 text-white" />
        </button>
      </SheetTrigger>
      <SheetContent className="z-[10000] flex flex-col bg-white">
        <SheetHeader className="flex-shrink-0 border-b border-gray-100 pb-4">
          <SheetTitle className="text-left text-lg font-bold text-gray-900">
            Menu
          </SheetTitle>
        </SheetHeader>
        <div className="px-2 flex flex-col gap-y-2 text-[1.25rem] overflow-y-auto flex-1 py-4">
          <Accordion type="single" collapsible className="w-full">
            {/* Home */}
            <AccordionItem value="item-1" className="border-none">
              <button
                className="w-full text-left font-semibold py-3 px-2 hover:bg-gray-50 rounded-lg transition-colors text-gray-900"
                onClick={() => router.push("/")}
              >
                Home
              </button>
            </AccordionItem>

            {/* Activities */}
            <AccordionItem value="item-2" className="border-none">
              <AccordionTrigger className="font-semibold py-3 px-2 text-[1.25rem] hover:bg-gray-50 rounded-lg hover:no-underline text-gray-900">
                Activities
              </AccordionTrigger>
              <AccordionContent className="flex flex-col space-y-4 items-start px-2 pt-2">
                {/* Canyoning */}
                <div className="w-full">
                  <p className="font-bold text-sm text-primary mb-2">
                    Canyoning
                  </p>
                  <div className="flex flex-col space-y-1">
                    {canyoningExcursions.slice(0, 5).map((excursion) => (
                      <Link
                        key={excursion.route}
                        href={`/${excursion.categoryPath || "excursions"}/${
                          excursion.route
                        }`}
                        className="text-sm text-gray-600 hover:text-primary transition-colors py-1.5 hover:bg-gray-50 rounded"
                      >
                        {excursion.title}
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Via Ferrata */}
                <div className="w-full">
                  <p className="font-bold text-sm text-primary mb-2">
                    Via Ferrata
                  </p>
                  <div className="flex flex-col space-y-1">
                    {viaFerrataExcursions.slice(0, 5).map((excursion) => (
                      <Link
                        key={excursion.route}
                        href={`/${excursion.categoryPath || "excursions"}/${
                          excursion.route
                        }`}
                        className="text-sm text-gray-600 hover:text-primary transition-colors py-1.5 hover:bg-gray-50 rounded"
                      >
                        {excursion.title}
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Hiking */}
                <div className="w-full">
                  <p className="font-bold text-sm text-primary mb-2">Hiking</p>
                  <div className="flex flex-col space-y-1">
                    {hikingExcursions.slice(0, 5).map((excursion) => (
                      <Link
                        key={excursion.route}
                        href={`/${excursion.categoryPath || "hiking"}/${
                          excursion.route
                        }`}
                        className="text-sm text-gray-600 hover:text-primary transition-colors py-1.5 hover:bg-gray-50 rounded"
                      >
                        {excursion.title}
                      </Link>
                    ))}
                  </div>
                </div>

                {/* More Activities */}
                <div className="w-full">
                  <p className="font-bold text-sm text-primary mb-2">
                    More Activities
                  </p>
                  <div className="flex flex-col space-y-1">
                    {moreActivitiesExcursions.slice(0, 5).map((excursion) => (
                      <Link
                        key={excursion.route}
                        href={`/${excursion.categoryPath || "activities"}/${
                          excursion.route
                        }`}
                        className="text-sm text-gray-600 hover:text-primary transition-colors py-1.5 hover:bg-gray-50 rounded"
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

            {/* About Us */}
            <AccordionItem value="item-3" className="border-none">
              <button
                className="w-full text-left font-semibold py-3 px-2 hover:bg-gray-50 rounded-lg transition-colors text-gray-900"
                onClick={() => router.push("/about-us")}
              >
                About Us
              </button>
            </AccordionItem>

            {/* Blog */}
            <AccordionItem value="item-4" className="border-none">
              <button
                className="w-full text-left font-semibold py-3 px-2 hover:bg-gray-50 rounded-lg transition-colors text-gray-900"
                onClick={() => router.push("/blog")}
              >
                Blog
              </button>
            </AccordionItem>

            {/* Contact */}
            <AccordionItem value="item-5" className="border-none">
              <button
                className="w-full text-left font-semibold py-3 px-2 hover:bg-gray-50 rounded-lg transition-colors text-gray-900"
                onClick={() => router.push("/contact")}
              >
                Contact
              </button>
            </AccordionItem>
          </Accordion>
        </div>

        {/* Footer con botón For Companies */}
        <SheetFooter className="flex-shrink-0 border-t border-gray-100 pt-4">
          <div className="w-full space-y-3">
            <Link
              href="/team-building"
              className="flex items-center justify-center w-full bg-primary text-white px-4 py-3 rounded-full hover:bg-primary/90 transition-colors text-sm font-medium"
            >
              For Companies
            </Link>
            <SheetClose asChild>
              <button className="flex items-center justify-center w-full text-gray-500 hover:text-gray-700 py-2 transition-colors">
                <X className="w-5 h-5 mr-2" />
                <span className="text-sm">Close</span>
              </button>
            </SheetClose>
          </div>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};

export default ItemsMenuMobile;
