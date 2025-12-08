import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Excursion } from "../../../data";
import { useMemo } from "react";

type FilterLevelProps = {
  setFilterLevel: (level: string) => void;
  excursions: Excursion[];
};

const FilterLevel = (props: FilterLevelProps) => {
  const { setFilterLevel, excursions } = props;

  const levels = [
    { value: "easy", label: "Easy" },
    { value: "moderate", label: "Moderate" },
    { value: "advanced", label: "Advanced" },
  ];

  const levelCounts = useMemo(() => {
    const counts: { [key: string]: number } = {};
    if (Array.isArray(excursions)) {
      excursions.forEach((excursion) => {
        const level = excursion.level;
        counts[level] = (counts[level] || 0) + 1;
      });
    }
    return counts;
  }, [excursions]);

  return (
    <div className="my-5">
      <p className="mb-3 font-bold">Level</p>
      <RadioGroup onValueChange={(value) => setFilterLevel(value)}>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="" id="all-levels" />
          <Label htmlFor="all-levels" className="cursor-pointer">
            All ({excursions.length})
          </Label>
        </div>
        {levels.map((level) => (
          <div key={level.value} className="flex items-center space-x-2">
            <RadioGroupItem value={level.value} id={level.value} />
            <Label htmlFor={level.value} className="cursor-pointer">
              {level.label} ({levelCounts[level.value] || 0})
            </Label>
          </div>
        ))}
      </RadioGroup>
    </div>
  );
};

export default FilterLevel;
