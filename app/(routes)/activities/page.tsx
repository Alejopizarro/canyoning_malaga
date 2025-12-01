"use client";

import { excursions } from "../../data";
import { Separator } from "@/components/ui/separator";
import { useState } from "react";
import { Excursion } from "../../data";
import ExcursionCard from "@/components/excursion-card";
import CategoryBanner from "./components/category-banner";
import { Button } from "@/components/ui/button";
import TopActivities from "@/components/top-activities";
import FilterControlsMobile from "./components/filter-controls-mobile";
import FiltersControlsExcursions from "./filters-controls";

const ExcursionesPage = () => {
  const [filterCategory, setFilterCategory] = useState("");
  const [filterLevel, setFilterLevel] = useState("");
  const [filterProvince, setFilterProvince] = useState("");
  const [visibleCount, setVisibleCount] = useState(9);
  const [visibleCountMobile, setVisibleCountMobile] = useState(3);

  const filteredExcursions = excursions.filter(
    (excursion: Excursion) =>
      (filterCategory === "" || excursion.category === filterCategory) &&
      (filterLevel === "" || excursion.level === filterLevel) &&
      (filterProvince === "" || excursion.province === filterProvince)
  );

  const visibleExcursions = filteredExcursions.slice(0, visibleCount);
  const visibleExcursionsMobile = filteredExcursions.slice(
    0,
    visibleCountMobile
  );
  const hasMore = visibleCount < filteredExcursions.length;

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 9);
    setVisibleCountMobile((prev) => prev + 3);
  };

  return (
    <div className="bg-gradient-to-br from-white to-slate-50">
      <CategoryBanner />
      <div className="max-w-8xl py-4 px-4 mx-auto sm:py-16 sm:px-24">
        <h1 className="pb-4 text-3xl font-light">All excursions</h1>
        <Separator />

        <div className="sm:flex sm:justify-between">
          <div className="hidden sm:block">
            <FiltersControlsExcursions
              setFilterCategory={setFilterCategory}
              setFilterLevel={setFilterLevel}
              setFilterProvince={setFilterProvince}
              excursions={excursions}
            />
          </div>
          <div className="sm:hidden block">
            <FilterControlsMobile
              setFilterCategory={setFilterCategory}
              setFilterLevel={setFilterLevel}
              setFilterProvince={setFilterProvince}
              excursions={excursions}
            />
          </div>

          <div className="hidden sm:flex flex-col items-center w-full">
            <div className="grid gap-4 mt-8 sm:grid-cols-2 md:grid-cols-3 md:gap-10 w-full">
              {visibleExcursions.map((excursion: Excursion) => (
                <ExcursionCard key={excursion.route} excursion={excursion} />
              ))}

              {filteredExcursions.length === 0 && (
                <p className="text-gray-400 p-6">
                  No hay excursiones con estos filtros.
                </p>
              )}
            </div>

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
          <div className="flex flex-col sm:hidden items-center w-full">
            <div className="grid gap-4 mt-8 sm:grid-cols-2 md:grid-cols-3 md:gap-10 w-full">
              {visibleExcursionsMobile.map((excursion: Excursion) => (
                <ExcursionCard key={excursion.route} excursion={excursion} />
              ))}

              {filteredExcursions.length === 0 && (
                <p className="text-gray-400 p-6">
                  No hay excursiones con estos filtros.
                </p>
              )}
            </div>

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
      </div>
      <TopActivities />
    </div>
  );
};

export default ExcursionesPage;
