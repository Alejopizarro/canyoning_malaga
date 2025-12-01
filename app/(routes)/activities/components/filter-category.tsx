import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Excursion } from "../../../data";
import { useMemo } from "react";

type FilterCategoryProps = {
  setFilterCategory: (category: string) => void;
  excursions: Excursion[];
};

const FilterCategory = (props: FilterCategoryProps) => {
  const { setFilterCategory, excursions } = props;

  const categories = ["Canyoning", "Via Ferrata", "Hiking", "More Activities"];

  const categoryCounts = useMemo(() => {
    const counts: { [key: string]: number } = {};
    if (Array.isArray(excursions)) {
      excursions.forEach((excursion) => {
        const category = excursion.category;
        counts[category] = (counts[category] || 0) + 1;
      });
    }
    return counts;
  }, [excursions]);

  return (
    <div className="my-2 sm:my-5">
      <p className="mb-3 font-bold">Category</p>
      <RadioGroup onValueChange={(value) => setFilterCategory(value)}>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="" id="all-categories" />
          <Label htmlFor="all-categories">All ({excursions.length})</Label>
        </div>
        {categories.map((category: string) => (
          <div key={category} className="flex items-center space-x-2">
            <RadioGroupItem value={category} id={category} />
            <Label htmlFor={category}>
              {category} ({categoryCounts[category] || 0})
            </Label>
          </div>
        ))}
      </RadioGroup>
    </div>
  );
};

export default FilterCategory;
