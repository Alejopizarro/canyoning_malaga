import { Excursion } from "../../data";
import FilterCategory from "./components/filter-category";
import FilterLevel from "./components/filter-level";
import FilterProvince from "./components/filter-province";

type FiltersControlsExcursionsProps = {
  setFilterCategory: (category: string) => void;
  setFilterLevel: (level: string) => void;
  setFilterProvince: (province: string) => void;
  excursions: Excursion[];
};

const FiltersControlsExcursions = (props: FiltersControlsExcursionsProps) => {
  const { setFilterCategory, setFilterLevel, setFilterProvince, excursions } =
    props;

  return (
    <div className="sm:w-[220px] sm:mt-5">
      <FilterCategory
        setFilterCategory={setFilterCategory}
        excursions={excursions}
      />
      <FilterLevel setFilterLevel={setFilterLevel} excursions={excursions} />
      <FilterProvince
        setFilterProvince={setFilterProvince}
        excursions={excursions}
      />
    </div>
  );
};

export default FiltersControlsExcursions;
