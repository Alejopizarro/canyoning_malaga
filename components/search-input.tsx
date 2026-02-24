"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */
import { cn } from "@/lib/utils";
import { Search, X } from "lucide-react";
import Link from "next/link";
import { useState, useEffect, useRef, useMemo } from "react";

interface SearchExcursion {
  title: string;
  slug: string;
  description: string;
  category: string;
  categoryPath: string;
  province: string;
  price: number;
}

interface SearchInputProps {
  variant?: "navbar" | "page";
  excursions: SearchExcursion[];
}

const SearchInput = ({ variant = "navbar", excursions }: SearchInputProps) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [debouncedQuery, setDebouncedQuery] = useState("");
  const searchRef = useRef<HTMLDivElement>(null);

  const isPage = variant === "page";

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
  }, [debouncedQuery, excursions]);

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

  if (isPage) {
    return (
      <div ref={searchRef} className="relative w-full max-w-md">
        <div className="flex items-center rounded-full px-4 py-3 border border-neutral-300 bg-white shadow-sm">
          <Search className="text-neutral-500 h-5 w-5 flex-shrink-0" />
          <input
            type="text"
            placeholder="Search Activities..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="bg-transparent flex-1 px-3 outline-none text-base text-neutral-800 placeholder:text-neutral-400"
          />
          {searchQuery && (
            <button
              onClick={handleClearSearch}
              className="rounded-full p-1 transition-colors hover:bg-neutral-100"
            >
              <X className="h-4 w-4 text-neutral-500" />
            </button>
          )}
        </div>

        {/* Search results */}
        {searchQuery && (
          <div className="absolute top-full mt-2 left-1/2 -translate-x-1/2 w-full max-w-md bg-white rounded-2xl shadow-xl border border-neutral-200 max-h-96 overflow-y-auto z-40 animate-in fade-in-0 slide-in-from-top-2 duration-300">
            {searchResults.length > 0 ? (
              <div className="p-2">
                <p className="text-xs text-neutral-500 px-3 py-2">
                  {searchResults.length}{" "}
                  {searchResults.length === 1 ? "result" : "results"}
                </p>
                {searchResults.slice(0, 8).map((excursion: any) => (
                  <Link
                    key={excursion.slug}
                    href={`/${excursion.categoryPath}/${excursion.slug}`}
                    className="flex items-start gap-3 p-3 hover:bg-neutral-100 rounded-lg transition-colors"
                  >
                    <div className="flex-1">
                      <h4 className="font-semibold text-sm text-neutral-800">
                        {excursion.title}
                      </h4>
                      <p className="text-xs text-neutral-500 mt-1 line-clamp-1">
                        {excursion.description}
                      </p>
                      <div className="flex items-center gap-2 mt-2">
                        <span className="text-xs bg-neutral-100 text-neutral-600 px-2 py-1 rounded">
                          {excursion.category}
                        </span>
                        <span className="text-xs text-neutral-500">
                          {excursion.province}
                        </span>
                      </div>
                    </div>
                    <span className="text-sm font-bold text-primary">
                      {excursion.price}€
                    </span>
                  </Link>
                ))}
                {searchResults.length > 8 && (
                  <Link
                    href={`/excursion?search=${searchQuery}`}
                    onClick={() => {
                      setSearchQuery("");
                    }}
                    className="block text-center text-[0.875rem] text-primary hover:underline py-2"
                  >
                    View all results ({searchResults.length})
                  </Link>
                )}
              </div>
            ) : (
              <div className="p-6 text-center">
                <p className="text-neutral-500 text-[0.875rem]">
                  No results found for &quot;{searchQuery}&quot;
                </p>
              </div>
            )}
          </div>
        )}
      </div>
    );
  }

  return (
    <div ref={searchRef} className="relative">
      {/* Desktop: Always open */}
      <div className="hidden md:flex items-center rounded-full px-2 py-1 border border-background w-[188px] 2xl:w-[227px]">
        <Search className="text-background h-3 w-3 flex-shrink-0" />
        <input
          type="text"
          placeholder="Search Activities..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="bg-transparent flex-1 px-2 outline-none text-[0.875rem] text-background placeholder:text-background"
        />
        {searchQuery && (
          <button
            onClick={handleClearSearch}
            className="rounded-full p-1 transition-colors"
          >
            <X className="h-3 w-3 text-background" />
          </button>
        )}
      </div>

      {/* Mobile: Collapsible, opens to the left */}
      <div className="md:hidden">
        <div
          className={cn(
            "flex items-center  rounded-full transition-all duration-300 ease-in-out shadow-sm border border-background",
            isSearchOpen ? "w-60 sm:w-72" : "w-10 h-10 cursor-pointer"
          )}
          onClick={() => !isSearchOpen && setIsSearchOpen(true)}
        >
          {isSearchOpen ? (
            <>
              <Search className="ml-3 h-5 w-5 text-background flex-shrink-0" />
              <input
                type="text"
                placeholder="Search Activities..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="flex-1 px-3 py-2 outline-none text-[0.875rem] text-background placeholder:text-background animate-in fade-in-0 slide-in-from-right-2 duration-300"
                autoFocus
              />
              {searchQuery && (
                <button
                  onClick={handleClearSearch}
                  className="mr-3 rounded-full pr-1 transition-colors animate-in fade-in-0 zoom-in-95 duration-200"
                >
                  <X className="h-4 w-4 text-background" />
                </button>
              )}
            </>
          ) : (
            <Search className="m-auto h-5 w-5 text-background" />
          )}
        </div>
      </div>

      {/* Search results */}
      {searchQuery && (
        <div className="absolute top-12 mt-2 -right-13 md:right-0 w-screen backdrop-blur-md max-w-[calc(100vw-2rem)] sm:max-w-md md:w-96 bg-neutral-600/50 backdrop-blur-md rounded-2xl shadow-xl border border-white/10 max-h-96 overflow-y-auto z-40 animate-in fade-in-0 slide-in-from-top-2 duration-300">
          {searchResults.length > 0 ? (
            <div className="p-2">
              <p className="text-xs text-background px-3 py-2">
                {searchResults.length}{" "}
                {searchResults.length === 1 ? "result" : "results"}
              </p>
              {searchResults.slice(0, 8).map((excursion: any) => (
                <Link
                  key={excursion.slug}
                  href={`/${excursion.categoryPath}/${excursion.slug}`}
                  onClick={() => {
                    setIsSearchOpen(false);
                    setSearchQuery("");
                  }}
                  className="flex items-start gap-3 p-3 hover:bg-neutral-600/80 rounded-lg transition-colors group"
                >
                  <div className="flex-1">
                    <h4 className="font-semibold text-sm text-background transition-colors">
                      {excursion.title}
                    </h4>
                    <p className="text-xs text-gray-300 mt-1 line-clamp-1">
                      {excursion.description}
                    </p>
                    <div className="flex items-center gap-2 mt-2">
                      <span className="text-xs bg-gray-300 px-2 py-1 rounded">
                        {excursion.category}
                      </span>
                      <span className="text-xs text-gray-300">
                        {excursion.province}
                      </span>
                    </div>
                  </div>
                  <span className="text-sm font-bold text-primary-light">
                    {excursion.price}€
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
                  className="block text-center text-[0.875rem] text-primary hover:underline py-2"
                >
                  View all results ({searchResults.length})
                </Link>
              )}
            </div>
          ) : (
            <div className="p-6 text-center">
              <p className="text-background text-[0.875rem]">
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
