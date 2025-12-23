import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Excursion } from "@/lib/activities";
import { useMemo } from "react";

type FilterTop3Props = {
  setFilterTop3: (isTop3: string) => void;
  excursions: Excursion[];
};

const FilterTop3 = (props: FilterTop3Props) => {
  const { setFilterTop3, excursions } = props;

  const top3Count = useMemo(() => {
    if (Array.isArray(excursions)) {
      return excursions.filter((exc) => exc.isTop3).length;
    }
    return 0;
  }, [excursions]);

  return (
    <div className="my-2 sm:my-5">
      <p className="mb-3 font-bold">Top Activities</p>
      <RadioGroup onValueChange={(value) => setFilterTop3(value)}>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="" id="all-top3" />
          <Label htmlFor="all-top3" className="cursor-pointer">
            All ({excursions.length})
          </Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="true" id="top3-only" />
          <Label htmlFor="top3-only" className="cursor-pointer">
            Top 3 Only ({top3Count})
          </Label>
        </div>
      </RadioGroup>
    </div>
  );
};

export default FilterTop3;
