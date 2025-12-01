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
        <AccordionItem value="filters">
          <AccordionTrigger>
            <p className="font-bold text-xl">Filters</p>
          </AccordionTrigger>
          <AccordionContent>
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
