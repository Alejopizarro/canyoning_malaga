import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import FiltersControlsExcursions from "../filters-controls";
import { Excursion } from "../../../data";

interface FilterControlsMobileProps {
  setFilterCategory: (category: string) => void;
  setFilterLevel: (level: string) => void;
  setFilterProvince: (province: string) => void;
  excursions: Excursion[];
}

const FilterControlsMobile = (props: FilterControlsMobileProps) => {
  const { setFilterCategory, setFilterLevel, setFilterProvince, excursions } =
    props;

  return (
    <>
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="filters" className="border-0 px-0">
          <AccordionTrigger className="px-0 [&[data-state=open]]:bg-background">
            <p className="font-bold text-xl">Filters</p>
          </AccordionTrigger>
          <AccordionContent className="px-0">
            <FiltersControlsExcursions
              setFilterCategory={setFilterCategory}
              setFilterLevel={setFilterLevel}
              setFilterProvince={setFilterProvince}
              excursions={excursions}
            />
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </>
  );
};

export default FilterControlsMobile;
