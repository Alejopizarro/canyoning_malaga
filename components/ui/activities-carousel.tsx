"use client";

import { useState, useRef } from "react";
import { Excursion } from "@/lib/activities";
import ExcursionCard from "../excursion-card";

interface AllActivitiesCarouselProps {
  excursions: Excursion[];
}

const ActivitiesCarousel = ({ excursions }: AllActivitiesCarouselProps) => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Limitar a los primeros 12 resultados
  const limitedExcursions = excursions.slice(0, 10);

  const getMaxIndex = () => {
    if (!carouselRef.current) return limitedExcursions.length - 1;
    const cardWidth =
      carouselRef.current.scrollWidth / limitedExcursions.length;
    const containerWidth = carouselRef.current.clientWidth;
    const visibleCards = Math.floor(containerWidth / cardWidth);
    return Math.max(0, limitedExcursions.length - visibleCards);
  };

  const scrollToIndex = (index: number) => {
    if (carouselRef.current) {
      const cardWidth =
        carouselRef.current.scrollWidth / limitedExcursions.length;
      const containerWidth = carouselRef.current.clientWidth;
      const maxScroll = carouselRef.current.scrollWidth - containerWidth;

      // Calcular el scroll deseado
      let scrollLeft = cardWidth * index;

      // Si el scroll calculado excede el máximo, usar el máximo para mostrar la última tarjeta completa
      if (scrollLeft > maxScroll) {
        scrollLeft = maxScroll;
      }

      carouselRef.current.scrollTo({
        left: scrollLeft,
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
    const maxIndex = getMaxIndex();
    const newIndex = Math.min(maxIndex, currentIndex + 1);
    scrollToIndex(newIndex);
  };

  return (
    <>
      {/* Carousel Container */}
      <div className="relative max-w-[1440px] mx-auto">
        {/* Cards Carousel */}
        <div
          ref={carouselRef}
          className="flex gap-4 overflow-x-auto scrollbar-hide scroll-smooth pb-4"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {limitedExcursions.map((excursion) => (
            <div
              className="flex-shrink-0 h-[484px] w-[280px] md:w-[calc((100%-3rem)/4.25)]"
              key={excursion.id}
            >
              <ExcursionCard showDescription={false} excursion={excursion} />
            </div>
          ))}
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-between mt-6 relative z-10">
          {/* Dots */}
          <div className="flex gap-1.5">
            {Array.from({ length: Math.min(6, limitedExcursions.length) }).map(
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
              disabled={currentIndex >= getMaxIndex()}
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
