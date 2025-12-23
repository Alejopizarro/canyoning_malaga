import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Excursion } from "@/lib/activities";

type FilterSortPriceProps = {
  setSortByPrice: (sort: string) => void;
  excursions: Excursion[];
};

const FilterSortPrice = (props: FilterSortPriceProps) => {
  const { setSortByPrice } = props;

  return (
    <div className="my-2 sm:my-5">
      <p className="mb-3 font-bold">Sort by Price</p>
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
            Price: Low to High
          </Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="desc" id="price-desc" />
          <Label htmlFor="price-desc" className="cursor-pointer">
            Price: High to Low
          </Label>
        </div>
      </RadioGroup>
    </div>
  );
};

export default FilterSortPrice;
