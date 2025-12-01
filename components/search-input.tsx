"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */
import { excursions } from "@/app/data";
import { cn } from "@/lib/utils";
import { Search, X } from "lucide-react";
import Link from "next/link";
import { useState, useEffect, useRef, useMemo } from "react";

const SearchInput = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [debouncedQuery, setDebouncedQuery] = useState("");
  const searchRef = useRef<HTMLDivElement>(null);

  // Debounce the query
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedQuery(searchQuery);
    }, 150);

    return () => clearTimeout(timer);
  }, [searchQuery]);

  // Calculate results with useMemo (more efficient)
  const searchResults = useMemo(() => {
    if (debouncedQuery.trim() === "") {
      return excursions;
    }

    return excursions.filter(
      (excursion) =>
        excursion.title.toLowerCase().includes(debouncedQuery.toLowerCase()) ||
        excursion.category
          .toLowerCase()
          .includes(debouncedQuery.toLowerCase()) ||
        excursion.province
          .toLowerCase()
          .includes(debouncedQuery.toLowerCase()) ||
        excursion.description
          .toLowerCase()
          .includes(debouncedQuery.toLowerCase())
    );
  }, [debouncedQuery]);

  // Close when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        searchRef.current &&
        !searchRef.current.contains(event.target as Node)
      ) {
        setIsSearchOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleClearSearch = () => {
    setSearchQuery("");
  };

  return (
    <div ref={searchRef} className="relative">
      <div
        className={cn(
          "flex items-center bg-gray-100 rounded-full transition-all duration-300 ease-in-out",
          isSearchOpen
            ? "w-60 sm:w-72"
            : "w-10 h-10 cursor-pointer hover:bg-gray-200"
        )}
        onClick={() => !isSearchOpen && setIsSearchOpen(true)}
      >
        <Search
          className={cn(
            "text-gray-600 transition-all duration-300",
            isSearchOpen ? "ml-3 h-5 w-5" : "m-auto h-5 w-5"
          )}
        />

        {isSearchOpen && (
          <>
            <input
              type="text"
              placeholder="Search activities..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="bg-transparent flex-1 px-3 py-2 outline-none text-sm animate-in fade-in-0 slide-in-from-left-2 duration-300"
              autoFocus
            />
            {searchQuery && (
              <button
                onClick={handleClearSearch}
                className="mr-3 hover:bg-gray-200 rounded-full p-1 transition-colors animate-in fade-in-0 zoom-in-95 duration-200"
              >
                <X className="h-4 w-4 text-gray-600" />
              </button>
            )}
          </>
        )}
      </div>

      {/* Search results */}
      {isSearchOpen && searchQuery && (
        <div className="absolute top-full mt-2 -right-15 w-92 md:w-96 bg-white rounded-lg shadow-xl border border-gray-200 max-h-96 overflow-y-auto z-50 animate-in fade-in-0 slide-in-from-top-2 duration-300">
          {searchResults.length > 0 ? (
            <div className="p-2">
              <p className="text-xs text-gray-500 px-3 py-2">
                {searchResults.length}{" "}
                {searchResults.length === 1 ? "result" : "results"}
              </p>
              {searchResults.slice(0, 8).map((excursion: any) => (
                <Link
                  key={excursion.route}
                  href={`/${excursion.categoryPath}/${excursion.route}`}
                  onClick={() => {
                    setIsSearchOpen(false);
                    setSearchQuery("");
                  }}
                  className="flex items-start gap-3 p-3 hover:bg-gray-50 rounded-lg transition-colors group"
                >
                  <div className="flex-1">
                    <h4 className="font-semibold text-sm group-hover:text-primary transition-colors">
                      {excursion.title}
                    </h4>
                    <p className="text-xs text-gray-500 mt-1 line-clamp-1">
                      {excursion.description}
                    </p>
                    <div className="flex items-center gap-2 mt-2">
                      <span className="text-xs bg-gray-100 px-2 py-1 rounded">
                        {excursion.category}
                      </span>
                      <span className="text-xs text-gray-500">
                        {excursion.province}
                      </span>
                    </div>
                  </div>
                  <span className="text-sm font-bold text-primary">
                    {excursion.price}
                  </span>
                </Link>
              ))}
              {searchResults.length > 8 && (
                <Link
                  href={`/excursion?search=${searchQuery}`}
                  onClick={() => {
                    setIsSearchOpen(false);
                    setSearchQuery("");
                  }}
                  className="block text-center text-sm text-primary hover:underline py-2"
                >
                  View all results ({searchResults.length})
                </Link>
              )}
            </div>
          ) : (
            <div className="p-6 text-center">
              <p className="text-gray-500 text-sm">
                No results found for {searchQuery}
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default SearchInput;
