import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion-vertical";
import { getExcursionsByCategory } from "../../../data";
import Link from "next/link";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";

const CategoryBanner = () => {
  const canyoningExcursions = getExcursionsByCategory("Canyoning");
  const viaFerrataExcursions = getExcursionsByCategory("Via Ferrata");
  const hikingExcursions = getExcursionsByCategory("Hiking");

  return (
    <div className="max-w-8xl py-4 mx-auto sm:py-8 sm:px-24">
      <h2 className="text-3xl font-semibold mb-4 px-6">Explore by category</h2>
      <Separator />
      <Accordion type="single" collapsible className="w-full mt-4 px-4">
        <AccordionItem value="category-banner">
          <AccordionTrigger>
            <div className="grid grid-cols-1 md:grid-cols-3 w-full md:gap-12">
              <div className="">
                <Image
                  width={400}
                  height={300}
                  src="/guadalmina-canyon.jpg"
                  alt="Excursion Categories"
                  className="rounded-lg object-cover max-h-64 w-full"
                />
                <h2 className="text-2xl font-semibold mt-2 hidden md:flex">
                  Canyoning
                </h2>
              </div>
              <div className="hidden md:flex md:flex-col md:justify-center">
                <Image
                  width={400}
                  height={300}
                  src="/guadalmina-canyon.jpg"
                  alt="Excursion Categories"
                  className="rounded-lg object-cover max-h-64 w-full"
                />
                <h2 className="text-2xl font-semibold mt-2">Via Ferrata</h2>
              </div>
              <div className="hidden md:flex md:flex-col md:justify-center">
                <Image
                  width={400}
                  height={300}
                  src="/guadalmina-canyon.jpg"
                  alt="Excursion Categories"
                  className="col-span-3 md:col-span-1 rounded-lg object-cover max-h-64 w-full"
                />
                <h2 className="text-2xl font-semibold mt-4">Hiking</h2>
              </div>
            </div>
          </AccordionTrigger>
          <AccordionContent className="grid grid-cols-1 md:grid-cols-3 gap-12 text-lg">
            <ul className="flex flex-col space-y-2 ">
              <h2 className="text-2xl font-semibold mb-2 flex md:hidden">
                Canyoning
              </h2>
              {canyoningExcursions.map((excursion) => (
                <Link
                  key={excursion.route}
                  className="hover:underline text-gray-600"
                  href={excursion.route}
                >
                  {excursion.title}
                </Link>
              ))}
            </ul>
            <ul className="flex flex-col space-y-2 ">
              <h2 className="text-2xl font-semibold mb-2 flex md:hidden">
                Via Ferrata
              </h2>
              {viaFerrataExcursions.map((excursion) => (
                <Link
                  key={excursion.route}
                  className="hover:underline text-gray-600"
                  href={excursion.route}
                >
                  {excursion.title}
                </Link>
              ))}
            </ul>
            <ul className="flex flex-col space-y-2 ">
              <h2 className="text-2xl font-semibold mb-2 flex md:hidden">
                Hiking
              </h2>
              {hikingExcursions.map((excursion) => (
                <Link
                  key={excursion.route}
                  className="hover:underline text-gray-600"
                  href={excursion.route}
                >
                  {excursion.title}
                </Link>
              ))}
            </ul>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default CategoryBanner;
