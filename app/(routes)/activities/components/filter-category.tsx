import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Excursion } from "@/lib/activities";
import { useMemo } from "react";

type FilterCategoryProps = {
  setFilterCategory: (category: string) => void;
  excursions: Excursion[];
};

const FilterCategory = (props: FilterCategoryProps) => {
  const { setFilterCategory, excursions } = props;

  const categories = [
    { label: "Canyoning", path: "canyoning" },
    { label: "Via Ferrata", path: "via-ferrata" },
    { label: "Hiking", path: "hiking" },
    { label: "More Activities", path: "activities" },
  ];

  const categoryCounts = useMemo(() => {
    const counts: { [key: string]: number } = {};
    if (Array.isArray(excursions)) {
      excursions.forEach((excursion) => {
        const path = excursion.categoryPath;
        counts[path] = (counts[path] || 0) + 1;
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
          <Label htmlFor="all-categories" className="cursor-pointer">
            All ({excursions.length})
          </Label>
        </div>
        {categories.map((category) => (
          <div key={category.path} className="flex items-center space-x-2">
            <RadioGroupItem value={category.path} id={category.path} />
            <Label htmlFor={category.path} className="cursor-pointer">
              {category.label} ({categoryCounts[category.path] || 0})
            </Label>
          </div>
        ))}
      </RadioGroup>
    </div>
  );
};

export default FilterCategory;
