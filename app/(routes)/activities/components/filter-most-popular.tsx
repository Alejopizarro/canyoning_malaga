import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Excursion } from "@/lib/activities";
import { useMemo } from "react";

type FilterMostPopularProps = {
  setFilterMostPopular: (isMostPopular: string) => void;
  excursions: Excursion[];
};

const FilterMostPopular = (props: FilterMostPopularProps) => {
  const { setFilterMostPopular, excursions } = props;

  const mostPopularCount = useMemo(() => {
    if (Array.isArray(excursions)) {
      return excursions.filter((exc) => exc.isMostPopular).length;
    }
    return 0;
  }, [excursions]);

  return (
    <div className="my-2 sm:my-5">
      <p className="mb-3 font-bold">Popular</p>
      <RadioGroup onValueChange={(value) => setFilterMostPopular(value)}>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="" id="all-popular" />
          <Label htmlFor="all-popular" className="cursor-pointer">
            All ({excursions.length})
          </Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="true" id="most-popular-only" />
          <Label htmlFor="most-popular-only" className="cursor-pointer">
            Most Popular ({mostPopularCount})
          </Label>
        </div>
      </RadioGroup>
    </div>
  );
};

export default FilterMostPopular;
