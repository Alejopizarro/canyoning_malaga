import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import FiltersControlsExcursions from "../filters-controls";
import { Excursion } from "@/lib/activities";

interface FilterControlsMobileProps {
  setFilterCategory: (category: string) => void;
  setFilterLevel: (level: string) => void;
  setFilterProvince: (province: string) => void;
  setFilterTop3: (isTop3: string) => void;
  setFilterMostPopular: (isMostPopular: string) => void;
  setSortByPrice: (sort: string) => void;
  filterCategory: string;
  filterLevel: string;
  filterProvince: string;
  filterTop3: string;
  filterMostPopular: string;
  sortByPrice: string;
  onClearAll: () => void;
  excursions: Excursion[];
}

const FilterControlsMobile = (props: FilterControlsMobileProps) => {
  const {
    setFilterCategory,
    setFilterLevel,
    setFilterProvince,
    setFilterTop3,
    setFilterMostPopular,
    setSortByPrice,
    filterCategory,
    filterLevel,
    filterProvince,
    filterTop3,
    filterMostPopular,
    sortByPrice,
    onClearAll,
    excursions,
  } = props;

  return (
    <>
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="filters" className="border-0 px-0">
          <AccordionTrigger className="px-0 [&[data-state=open]]:bg-background">
            <p className="font-medium text-xl">Filters</p>
          </AccordionTrigger>
          <AccordionContent className="px-0">
            <FiltersControlsExcursions
              setFilterCategory={setFilterCategory}
              setFilterLevel={setFilterLevel}
              setFilterProvince={setFilterProvince}
              setFilterTop3={setFilterTop3}
              setFilterMostPopular={setFilterMostPopular}
              setSortByPrice={setSortByPrice}
              filterCategory={filterCategory}
              filterLevel={filterLevel}
              filterProvince={filterProvince}
              filterTop3={filterTop3}
              filterMostPopular={filterMostPopular}
              sortByPrice={sortByPrice}
              onClearAll={onClearAll}
              excursions={excursions}
            />
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </>
  );
};

export default FilterControlsMobile;
