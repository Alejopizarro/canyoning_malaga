import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Excursion } from "@/lib/activities";
import { useMemo } from "react";

type FilterProvinceProps = {
  setFilterProvince: (province: string) => void;
  excursions: Excursion[];
};

const FilterProvince = (props: FilterProvinceProps) => {
  const { setFilterProvince, excursions } = props;

  const { provinces, provinceCounts } = useMemo(() => {
    const counts: { [key: string]: number } = {};
    const uniqueProvinces = new Set<string>();

    if (Array.isArray(excursions)) {
      excursions.forEach((excursion) => {
        const province = excursion.province;
        uniqueProvinces.add(province);
        counts[province] = (counts[province] || 0) + 1;
      });
    }

    return {
      provinces: Array.from(uniqueProvinces).sort(),
      provinceCounts: counts,
    };
  }, [excursions]);

  return (
    <div className="my-5">
      <p className="mb-3 font-bold">Province</p>
      <RadioGroup onValueChange={(value) => setFilterProvince(value)}>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="" id="all-provinces" />
          <Label htmlFor="all-provinces" className="cursor-pointer">
            All ({excursions.length})
          </Label>
        </div>
        {provinces.map((province: string) => (
          <div key={province} className="flex items-center space-x-2">
            <RadioGroupItem value={province} id={province} />
            <Label htmlFor={province} className="cursor-pointer">
              {province} ({provinceCounts[province] || 0})
            </Label>
          </div>
        ))}
      </RadioGroup>
    </div>
  );
};

export default FilterProvince;
