import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Excursion } from "@/lib/activities";
import { useMemo } from "react";

type FilterPopularProps = {
  setFilterTop3: (isTop3: string) => void;
  setFilterMostPopular: (isMostPopular: string) => void;
  setSortByPrice: (sort: string) => void;
  excursions: Excursion[];
};

const FilterPopular = (props: FilterPopularProps) => {
  const { setFilterTop3, setFilterMostPopular, setSortByPrice, excursions } =
    props;

  const top3Count = useMemo(() => {
    if (Array.isArray(excursions)) {
      return excursions.filter((exc) => exc.isTop3).length;
    }
    return 0;
  }, [excursions]);

  const mostPopularCount = useMemo(() => {
    if (Array.isArray(excursions)) {
      return excursions.filter((exc) => exc.isMostPopular).length;
    }
    return 0;
  }, [excursions]);

  // Manejar el cambio de filtro popular (Top 3 o Most Popular son excluyentes)
  const handlePopularFilterChange = (value: string) => {
    if (value === "top3") {
      setFilterTop3("true");
      setFilterMostPopular("");
    } else if (value === "popular") {
      setFilterTop3("");
      setFilterMostPopular("true");
    } else {
      // "all" - limpiar ambos filtros
      setFilterTop3("");
      setFilterMostPopular("");
    }
  };

  return (
    <div className="my-2 sm:my-5">
      <p className="mb-3 font-bold">Popular Filters</p>

      {/* Top 3 y Most Popular agrupados */}
      <div className="mb-4">
        <p className="mb-2 text-sm font-medium text-gray-700">Show</p>
        <RadioGroup onValueChange={handlePopularFilterChange}>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="all" id="all-activities" />
            <Label htmlFor="all-activities" className="cursor-pointer">
              All ({excursions.length})
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="top3" id="top3-only" />
            <Label htmlFor="top3-only" className="cursor-pointer">
              Top 3 ({top3Count})
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="popular" id="most-popular-only" />
            <Label htmlFor="most-popular-only" className="cursor-pointer">
              Most Popular ({mostPopularCount})
            </Label>
          </div>
        </RadioGroup>
      </div>

      {/* Sort by Price */}
      <div>
        <p className="mb-2 text-sm font-medium text-gray-700">Sort by Price</p>
        <RadioGroup onValueChange={(value) => setSortByPrice(value)}>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="" id="no-sort" />
            <Label htmlFor="no-sort" className="cursor-pointer">
              Default
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="asc" id="price-asc" />
            <Label htmlFor="price-asc" className="cursor-pointer">
              Low to High
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="desc" id="price-desc" />
            <Label htmlFor="price-desc" className="cursor-pointer">
              High to Low
            </Label>
          </div>
        </RadioGroup>
      </div>
    </div>
  );
};

export default FilterPopular;
