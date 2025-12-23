import { Excursion } from "@/lib/activities";
import FilterCategory from "./components/filter-category";
import FilterLevel from "./components/filter-level";
import FilterProvince from "./components/filter-province";
import FilterPopular from "./components/filter-popular";
import ActiveFilters from "./components/active-filters";

type FiltersControlsExcursionsProps = {
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
};

const FiltersControlsExcursions = (props: FiltersControlsExcursionsProps) => {
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
    <div className="sm:w-[220px] sm:mt-5">
      {/* Active Filters */}
      <ActiveFilters
        filterCategory={filterCategory}
        filterLevel={filterLevel}
        filterProvince={filterProvince}
        filterTop3={filterTop3}
        filterMostPopular={filterMostPopular}
        sortByPrice={sortByPrice}
        onRemoveCategory={() => setFilterCategory("")}
        onRemoveLevel={() => setFilterLevel("")}
        onRemoveProvince={() => setFilterProvince("")}
        onRemoveTop3={() => setFilterTop3("")}
        onRemoveMostPopular={() => setFilterMostPopular("")}
        onRemoveSortByPrice={() => setSortByPrice("")}
        onClearAll={onClearAll}
      />

      <FilterPopular
        setFilterTop3={setFilterTop3}
        setFilterMostPopular={setFilterMostPopular}
        setSortByPrice={setSortByPrice}
        excursions={excursions}
      />
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
