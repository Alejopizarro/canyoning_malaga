import { X } from "lucide-react";

interface ActiveFiltersProps {
  filterCategory: string;
  filterLevel: string;
  filterProvince: string;
  filterTop3: string;
  filterMostPopular: string;
  sortByPrice: string;
  onRemoveCategory: () => void;
  onRemoveLevel: () => void;
  onRemoveProvince: () => void;
  onRemoveTop3: () => void;
  onRemoveMostPopular: () => void;
  onRemoveSortByPrice: () => void;
  onClearAll: () => void;
}

const ActiveFilters = ({
  filterCategory,
  filterLevel,
  filterProvince,
  filterTop3,
  filterMostPopular,
  sortByPrice,
  onRemoveCategory,
  onRemoveLevel,
  onRemoveProvince,
  onRemoveTop3,
  onRemoveMostPopular,
  onRemoveSortByPrice,
  onClearAll,
}: ActiveFiltersProps) => {
  const hasActiveFilters =
    filterCategory ||
    filterLevel ||
    filterProvince ||
    filterTop3 ||
    filterMostPopular ||
    sortByPrice;

  if (!hasActiveFilters) return null;

  const getSortLabel = (sort: string) => {
    if (sort === "asc") return "Price: Low to High";
    if (sort === "desc") return "Price: High to Low";
    return "";
  };

  return (
    <div className="w-full mb-4 pr-2">
      <div className="flex items-center justify-between mb-2">
        <p className="text-sm font-medium text-gray-700">Active Filters:</p>
        <button
          onClick={onClearAll}
          className="text-xs text-primary hover:text-primary-dark underline"
        >
          Clear All
        </button>
      </div>
      <div className="flex flex-wrap gap-2">
        {filterCategory && (
          <div className="inline-flex items-center gap-1 px-3 py-1 bg-white border border-gray-300 rounded-full text-sm">
            <span className="font-medium text-gray-700">Category:</span>
            <span className="text-gray-600">{filterCategory}</span>
            <button
              onClick={onRemoveCategory}
              className="ml-1 hover:bg-gray-100 rounded-full p-0.5"
            >
              <X className="h-3 w-3 text-gray-500" />
            </button>
          </div>
        )}

        {filterLevel && (
          <div className="inline-flex items-center gap-1 px-3 py-1 bg-white border border-gray-300 rounded-full text-sm">
            <span className="font-medium text-gray-700">Level:</span>
            <span className="text-gray-600 capitalize">{filterLevel}</span>
            <button
              onClick={onRemoveLevel}
              className="ml-1 hover:bg-gray-100 rounded-full p-0.5"
            >
              <X className="h-3 w-3 text-gray-500" />
            </button>
          </div>
        )}

        {filterProvince && (
          <div className="inline-flex items-center gap-1 px-3 py-1 bg-white border border-gray-300 rounded-full text-sm">
            <span className="font-medium text-gray-700">Province:</span>
            <span className="text-gray-600">{filterProvince}</span>
            <button
              onClick={onRemoveProvince}
              className="ml-1 hover:bg-gray-100 rounded-full p-0.5"
            >
              <X className="h-3 w-3 text-gray-500" />
            </button>
          </div>
        )}

        {filterTop3 === "true" && (
          <div className="inline-flex items-center gap-1 px-3 py-1 bg-white border border-gray-300 rounded-full text-sm">
            <span className="text-gray-600">Top 3</span>
            <button
              onClick={onRemoveTop3}
              className="ml-1 hover:bg-gray-100 rounded-full p-0.5"
            >
              <X className="h-3 w-3 text-gray-500" />
            </button>
          </div>
        )}

        {filterMostPopular === "true" && (
          <div className="inline-flex items-center gap-1 px-3 py-1 bg-white border border-gray-300 rounded-full text-sm">
            <span className="text-gray-600">Most Popular</span>
            <button
              onClick={onRemoveMostPopular}
              className="ml-1 hover:bg-gray-100 rounded-full p-0.5"
            >
              <X className="h-3 w-3 text-gray-500" />
            </button>
          </div>
        )}

        {sortByPrice && (
          <div className="inline-flex items-center gap-1 px-3 py-1 bg-white border border-gray-300 rounded-full text-sm">
            <span className="text-gray-600">{getSortLabel(sortByPrice)}</span>
            <button
              onClick={onRemoveSortByPrice}
              className="ml-1 hover:bg-gray-100 rounded-full p-0.5"
            >
              <X className="h-3 w-3 text-gray-500" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ActiveFilters;
