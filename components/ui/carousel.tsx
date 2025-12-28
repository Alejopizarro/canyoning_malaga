"use client";

import { useState, useRef, ReactNode } from "react";

interface CarouselProps {
  children: ReactNode[];
  itemWidth?: string;
  showDots?: boolean;
  maxDots?: number;
  loop?: boolean;
}

const Carousel = ({
  children,
  itemWidth = "w-[250px]",
  showDots = true,
  maxDots = 6,
  loop = false,
}: CarouselProps) => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalItems = children.length;

  const scrollToIndex = (index: number) => {
    if (carouselRef.current) {
      const cardWidth = carouselRef.current.scrollWidth / totalItems;
      carouselRef.current.scrollTo({
        left: cardWidth * index,
        behavior: "smooth",
      });
      setCurrentIndex(index);
    }
  };

  const handlePrev = () => {
    if (loop && currentIndex === 0) {
      scrollToIndex(totalItems - 1);
    } else {
      const newIndex = Math.max(0, currentIndex - 1);
      scrollToIndex(newIndex);
    }
  };

  const handleNext = () => {
    if (loop && currentIndex >= totalItems - 1) {
      scrollToIndex(0);
    } else {
      const newIndex = Math.min(totalItems - 1, currentIndex + 1);
      scrollToIndex(newIndex);
    }
  };

  return (
    <div className="relative">
      {/* Cards Container */}
      <div
        ref={carouselRef}
        className="flex gap-4 overflow-x-auto scrollbar-hide scroll-smooth pb-4 items-stretch"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {children.map((child, index) => (
          <div key={index} className={`flex-shrink-0 ${itemWidth} flex`}>
            {child}
          </div>
        ))}
      </div>

      {/* Navigation */}
      <div className="flex items-center justify-between mt-6">
        {/* Dots */}
        {showDots && (
          <div className="flex gap-1.5">
            {Array.from({ length: Math.min(maxDots, totalItems) }).map(
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
        )}

        {/* Arrows */}
        <div className="flex gap-2 ml-auto">
          <button
            onClick={handlePrev}
            disabled={!loop && currentIndex === 0}
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
            disabled={!loop && currentIndex >= totalItems - 1}
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
  );
};

export default Carousel;
