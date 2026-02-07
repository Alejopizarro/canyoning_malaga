"use client";

import { useState, useMemo, useCallback } from "react";
import { useSearchParams, useRouter, usePathname } from "next/navigation";
import { Excursion } from "@/lib/activities";
import ExcursionCard from "@/components/excursion-card";
import { Button } from "@/components/ui/button";
import FilterControlsMobile from "./components/filter-controls-mobile";
import FiltersControlsExcursions from "./filters-controls";
import ExcursionCardMobile from "@/components/excursion-card-mobile";

interface ExcursionsClientProps {
  excursions: Excursion[];
}

const ExcursionsClient = ({ excursions }: ExcursionsClientProps) => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const filterCategory = searchParams.get("category") || "";
  const filterLevel = searchParams.get("level") || "";
  const filterProvince = searchParams.get("province") || "";
  const filterTop3 = searchParams.get("top3") || "";
  const filterMostPopular = searchParams.get("popular") || "";
  const sortByPrice = searchParams.get("sort") || "";

  const [visibleCount, setVisibleCount] = useState(9);
  const [visibleCountMobile, setVisibleCountMobile] = useState(6);

  const updateParam = useCallback(
    (key: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      if (value) {
        params.set(key, value);
      } else {
        params.delete(key);
      }
      const qs = params.toString();
      router.replace(qs ? `${pathname}?${qs}` : pathname, { scroll: false });
    },
    [searchParams, router, pathname]
  );

  const setFilterCategory = useCallback(
    (v: string) => updateParam("category", v),
    [updateParam]
  );
  const setFilterLevel = useCallback(
    (v: string) => updateParam("level", v),
    [updateParam]
  );
  const setFilterProvince = useCallback(
    (v: string) => updateParam("province", v),
    [updateParam]
  );
  const setFilterTop3 = useCallback(
    (v: string) => updateParam("top3", v),
    [updateParam]
  );
  const setFilterMostPopular = useCallback(
    (v: string) => updateParam("popular", v),
    [updateParam]
  );
  const setSortByPrice = useCallback(
    (v: string) => updateParam("sort", v),
    [updateParam]
  );

  const handleClearAllFilters = useCallback(() => {
    router.replace(pathname, { scroll: false });
  }, [router, pathname]);

  const filteredAndSortedExcursions = useMemo(() => {
    // Primero filtrar
    let filtered = excursions.filter(
      (excursion: Excursion) =>
        (filterCategory === "" ||
          excursion.category.toLowerCase() ===
            filterCategory.toLowerCase()) &&
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
            <ExcursionCardMobile key={excursion.route} excursion={excursion} />
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
