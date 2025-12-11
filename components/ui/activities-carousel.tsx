"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useRef } from "react";
import { Excursion } from "@/lib/activities";

interface AllActivitiesCarouselProps {
  excursions: Excursion[];
}

const ActivitiesCarousel = ({ excursions }: AllActivitiesCarouselProps) => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const scrollToIndex = (index: number) => {
    if (carouselRef.current) {
      const cardWidth = carouselRef.current.scrollWidth / excursions.length;
      carouselRef.current.scrollTo({
        left: cardWidth * index,
        behavior: "smooth",
      });
      setCurrentIndex(index);
    }
  };

  const handlePrev = () => {
    const newIndex = Math.max(0, currentIndex - 1);
    scrollToIndex(newIndex);
  };

  const handleNext = () => {
    const newIndex = Math.min(excursions.length - 5, currentIndex + 1);
    scrollToIndex(newIndex);
  };

  return (
    <>
      {/* Carousel Container */}
      <div className="relative max-w-7xl mx-auto">
        {/* Cards Carousel */}
        <div
          ref={carouselRef}
          className="flex gap-4 overflow-x-auto scrollbar-hide scroll-smooth pb-4"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {excursions.map((excursion) => (
            <div
              key={excursion.id}
              className="flex-shrink-0 w-[250px] md:w-[220px]"
            >
              <article className="bg-white rounded-xl overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow duration-300">
                {/* Image */}
                <div className="relative h-40 bg-gray-200 overflow-hidden">
                  <Image
                    src={excursion.mainImage.src}
                    alt={excursion.mainImage.alt}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Content */}
                <div className="p-3">
                  {/* Title & Price Row */}
                  <div className="flex justify-between items-start mb-1">
                    <h3 className="text-sm line-clamp-1 font-bold text-gray-900 leading-tight">
                      {excursion.title}
                    </h3>
                    <span className="text-sm font-bold text-gray-900 whitespace-nowrap ml-2">
                      {excursion.price} €
                    </span>
                  </div>

                  {/* Category */}
                  <span className="text-xs text-gray-400">
                    {excursion.category}
                  </span>

                  {/* Button */}
                  <Link
                    href={`/${excursion.categoryPath}/${excursion.slug}`}
                    className="mt-3 w-full inline-flex items-center justify-center px-4 py-2 border-2 border-teal-500 text-teal-500 hover:bg-teal-500 hover:text-white text-sm font-semibold rounded-lg transition-all duration-300"
                  >
                    More Info
                  </Link>
                </div>
              </article>
            </div>
          ))}
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-between mt-6 relative z-10">
          {/* Dots */}
          <div className="flex gap-1.5">
            {Array.from({ length: Math.min(6, excursions.length) }).map(
              (_, index) => (
                <button
                  key={index}
                  onClick={() => scrollToIndex(index)}
                  className={`w-2 h-2 rounded-full transition-colors duration-300 cursor-pointer ${
                    currentIndex === index ? "bg-gray-800" : "bg-gray-300"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                  type="button"
                />
              )
            )}
          </div>

          {/* Arrows */}
          <div className="flex gap-2">
            <button
              onClick={handlePrev}
              disabled={currentIndex === 0}
              className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:border-gray-400 disabled:opacity-40 disabled:cursor-not-allowed transition-colors duration-300 cursor-pointer"
              aria-label="Previous"
              type="button"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="text-gray-600 pointer-events-none"
              >
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>

            <button
              onClick={handleNext}
              disabled={currentIndex >= excursions.length - 5}
              className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:border-gray-400 disabled:opacity-40 disabled:cursor-not-allowed transition-colors duration-300 cursor-pointer"
              aria-label="Next"
              type="button"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="text-gray-600 pointer-events-none"
              >
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ActivitiesCarousel;
