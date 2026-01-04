"use client";

import { useState, useMemo } from "react";
import { Excursion } from "@/lib/activities";
import ExcursionCard from "@/components/excursion-card";
import { Button } from "@/components/ui/button";
import FilterControlsMobile from "./components/filter-controls-mobile";
import FiltersControlsExcursions from "./filters-controls";

interface ExcursionsClientProps {
  excursions: Excursion[];
}

const ExcursionsClient = ({ excursions }: ExcursionsClientProps) => {
  const [filterCategory, setFilterCategory] = useState("");
  const [filterLevel, setFilterLevel] = useState("");
  const [filterProvince, setFilterProvince] = useState("");
  const [filterTop3, setFilterTop3] = useState("");
  const [filterMostPopular, setFilterMostPopular] = useState("");
  const [sortByPrice, setSortByPrice] = useState("");
  const [visibleCount, setVisibleCount] = useState(9);
  const [visibleCountMobile, setVisibleCountMobile] = useState(6);

  const handleClearAllFilters = () => {
    setFilterCategory("");
    setFilterLevel("");
    setFilterProvince("");
    setFilterTop3("");
    setFilterMostPopular("");
    setSortByPrice("");
  };

  const filteredAndSortedExcursions = useMemo(() => {
    // Primero filtrar
    let filtered = excursions.filter(
      (excursion: Excursion) =>
        (filterCategory === "" || excursion.category === filterCategory) &&
        (filterLevel === "" || excursion.level === filterLevel) &&
        (filterProvince === "" || excursion.province === filterProvince) &&
        (filterTop3 === "" || (filterTop3 === "true" && excursion.isTop3)) &&
        (filterMostPopular === "" ||
          (filterMostPopular === "true" && excursion.isMostPopular))
    );

    // Luego ordenar por precio si está activo (el precio ya es un número)
    if (sortByPrice === "asc") {
      filtered = [...filtered].sort((a, b) => a.price - b.price);
    } else if (sortByPrice === "desc") {
      filtered = [...filtered].sort((a, b) => b.price - a.price);
    }

    return filtered;
  }, [
    excursions,
    filterCategory,
    filterLevel,
    filterProvince,
    filterTop3,
    filterMostPopular,
    sortByPrice,
  ]);

  const visibleExcursions = filteredAndSortedExcursions.slice(0, visibleCount);
  const visibleExcursionsMobile = filteredAndSortedExcursions.slice(
    0,
    visibleCountMobile
  );
  const hasMore = visibleCount < filteredAndSortedExcursions.length;

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 9);
    setVisibleCountMobile((prev) => prev + 6);
  };

  return (
    <div className="sm:flex max-w-[1440px] mx-auto sm:justify-between">
      <div className="hidden sm:block">
        <FiltersControlsExcursions
          setFilterCategory={setFilterCategory}
          setFilterLevel={setFilterLevel}
          setFilterProvince={setFilterProvince}
          setFilterTop3={setFilterTop3}
          setFilterMostPopular={setFilterMostPopular}
          setSortByPrice={setSortByPrice}
          filterCategory={filterCategory}
          filterLevel={filterLevel}
          filterProvince={filterProvince}
          filterTop3={filterTop3}
          filterMostPopular={filterMostPopular}
          sortByPrice={sortByPrice}
          onClearAll={handleClearAllFilters}
          excursions={excursions}
        />
      </div>
      <div className="sm:hidden block">
        <FilterControlsMobile
          setFilterCategory={setFilterCategory}
          setFilterLevel={setFilterLevel}
          setFilterProvince={setFilterProvince}
          setFilterTop3={setFilterTop3}
          setFilterMostPopular={setFilterMostPopular}
          setSortByPrice={setSortByPrice}
          filterCategory={filterCategory}
          filterLevel={filterLevel}
          filterProvince={filterProvince}
          filterTop3={filterTop3}
          filterMostPopular={filterMostPopular}
          sortByPrice={sortByPrice}
          onClearAll={handleClearAllFilters}
          excursions={excursions}
        />
      </div>

      <div className="flex flex-col items-center w-full">
        {/* Desktop Grid */}
        <div className="hidden sm:grid gap-4 mt-4 grid-cols-2 sm:grid-cols-3 w-full">
          {visibleExcursions.map((excursion: Excursion) => (
            <ExcursionCard key={excursion.route} excursion={excursion} />
          ))}

          {filteredAndSortedExcursions.length === 0 && (
            <p className="text-gray-400 p-6">
              No excursions found with these filters.
            </p>
          )}
        </div>

        {/* Mobile Grid */}
        <div className="grid sm:hidden gap-x-2 gap-y-6 mt-4 grid-cols-2 md:grid-cols-3 md:gap-10 w-full">
          {visibleExcursionsMobile.map((excursion: Excursion) => (
            <ExcursionCard key={excursion.route} excursion={excursion} />
          ))}

          {filteredAndSortedExcursions.length === 0 && (
            <p className="text-gray-400 p-6">
              No excursions found with these filters.
            </p>
          )}
        </div>

        {/* Load More Button */}
        {hasMore && (
          <Button
            onClick={handleLoadMore}
            variant="outline"
            size="lg"
            className="mt-8 mb-4"
          >
            Load More
          </Button>
        )}
      </div>
    </div>
  );
};

export default ExcursionsClient;
