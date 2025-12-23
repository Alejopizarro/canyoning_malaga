"use client";

import { Button } from "@/components/ui/button";
import { ArrowUpDown, ArrowUp, ArrowDown, Star, Trophy } from "lucide-react";

interface PopularFiltersProps {
  filterTop3: string;
  filterMostPopular: string;
  sortByPrice: string;
  onFilterTop3: (value: string) => void;
  onFilterMostPopular: (value: string) => void;
  onSortByPrice: (value: string) => void;
}

const PopularFilters = ({
  filterTop3,
  filterMostPopular,
  sortByPrice,
  onFilterTop3,
  onFilterMostPopular,
  onSortByPrice,
}: PopularFiltersProps) => {
  return (
    <div className="flex flex-wrap gap-2 my-4">
      {/* Top 3 Filter */}
      <Button
        variant={filterTop3 === "true" ? "default" : "outline"}
        size="sm"
        onClick={() => onFilterTop3(filterTop3 === "true" ? "" : "true")}
        className="gap-2"
      >
        <Trophy className="h-4 w-4" />
        Top 3
      </Button>

      {/* Most Popular Filter */}
      <Button
        variant={filterMostPopular === "true" ? "default" : "outline"}
        size="sm"
        onClick={() =>
          onFilterMostPopular(filterMostPopular === "true" ? "" : "true")
        }
        className="gap-2"
      >
        <Star className="h-4 w-4" />
        Most Popular
      </Button>

      {/* Sort by Price */}
      <div className="flex gap-1">
        <Button
          variant={sortByPrice === "asc" ? "default" : "outline"}
          size="sm"
          onClick={() => onSortByPrice(sortByPrice === "asc" ? "" : "asc")}
          className="gap-2"
        >
          <ArrowUp className="h-4 w-4" />
          Price: Low to High
        </Button>
        <Button
          variant={sortByPrice === "desc" ? "default" : "outline"}
          size="sm"
          onClick={() => onSortByPrice(sortByPrice === "desc" ? "" : "desc")}
          className="gap-2"
        >
          <ArrowDown className="h-4 w-4" />
          Price: High to Low
        </Button>
      </div>
    </div>
  );
};

export default PopularFilters;
