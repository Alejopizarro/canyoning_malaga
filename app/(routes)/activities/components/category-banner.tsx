"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { excursions } from "@/app/data";

interface CategoryConfig {
  name: string;
  categoryPath: string;
  image: string;
}

const categoryConfigs: CategoryConfig[] = [
  {
    name: "Canyoning",
    categoryPath: "canyoning",
    image: "/guadalmina-1.webp",
  },
  {
    name: "Via Ferrata",
    categoryPath: "via-ferrata",
    image: "/VF-Ronda-4.jpg",
  },
  {
    name: "Hiking",
    categoryPath: "hiking",
    image: "/la-concha-1.jpg",
  },
  {
    name: "More Activities",
    categoryPath: "activities",
    image: "/kayak-banus-1.png",
  },
];

const CategoryNavigation = () => {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  // Agrupar excursiones por categoría
  const categories = categoryConfigs.map((config) => ({
    ...config,
    activities: excursions
      .filter((excursion) => excursion.categoryPath === config.categoryPath)
      .map((excursion) => ({
        title: excursion.title,
        route: excursion.route,
      })),
  }));

  const toggleDropdown = (categoryName: string) => {
    setOpenDropdown(openDropdown === categoryName ? null : categoryName);
  };

  const handleClickOutside = () => {
    setOpenDropdown(null);
  };

  return (
    <>
      {openDropdown && (
        <div
          className="fixed inset-0 z-40"
          onClick={handleClickOutside}
          aria-hidden="true"
        />
      )}
      <div className="max-w-8xl py-4 px-4 mx-auto sm:py-8 sm:px-24">
        <div className="w-full">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {categories.map((category) => (
              <div key={category.name} className="relative">
                {/* Imagen de categoría */}
                <div className="relative aspect-[4/3]  overflow-hidden mb-2">
                  <Image
                    src={category.image}
                    alt={category.name}
                    fill
                    className="object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>

                {/* Botón del dropdown */}
                <button
                  onClick={() => toggleDropdown(category.name)}
                  className="flex items-center gap-1 text-gray-800 hover:text-gray-600 transition-colors"
                >
                  <span className="text-sm font-medium">{category.name}</span>
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-200 ${
                      openDropdown === category.name ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {/* Dropdown menu */}
                {openDropdown === category.name && (
                  <div className="absolute top-full left-0 mt-1 w-48 bg-white rounded-lg shadow-lg border border-gray-100 py-2 z-50">
                    {category.activities.map((activity) => (
                      <Link
                        key={activity.route}
                        href={`/${category.categoryPath}/${activity.route}`}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-gray-900 transition-colors"
                        onClick={() => setOpenDropdown(null)}
                      >
                        {activity.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default CategoryNavigation;
