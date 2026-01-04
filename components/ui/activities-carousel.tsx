"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useRef } from "react";
import { Excursion } from "@/lib/activities";
import { ArrowRight } from "lucide-react";

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
      <div className="relative max-w-[1440px] mx-auto">
        {/* Cards Carousel */}
        <div
          ref={carouselRef}
          className="flex gap-4 overflow-x-auto scrollbar-hide scroll-smooth pb-4"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {excursions.map((excursion) => (
            <div
              key={excursion.id}
              className="flex-shrink-0 h-[484px] w-[280px] md:w-[calc((100%-3rem)/4.25)]"
            >
              <article className="overflow-hidden">
                {/* Image */}
                <div className="relative h-[364px] overflow-hidden">
                  <Image
                    src={excursion.mainImage.src}
                    alt={excursion.mainImage.alt}
                    fill
                    className="object-cover rounded-t-2xl"
                  />
                </div>

                {/* Content */}
                <div className="py-4 px-2 flex flex-col space-y-2">
                  {/* Title & Price Row */}
                  <div className="flex justify-between items-baseline mb-1">
                    <h3 className="text-xl line-clamp-1 mt-0.5 font-semibold text-gray-900">
                      {excursion.title}
                    </h3>
                    <span className="text-xl font-extrabold text-primary-dark flex items-start">
                      {excursion.price} <span className="ml-0.5 mt-0.5">€</span>
                    </span>
                  </div>

                  {/* Category */}
                  <span className="text-md  text-gray-400">
                    {!excursion.subcategory
                      ? excursion.category
                      : `${excursion.subcategory}`}
                  </span>

                  {/* Button */}
                  <Link
                    href={`/${excursion.categoryPath}/${excursion.slug}`}
                    className="mt-1 flex items-center text-primary hover:underline hover:text-primary-dark text-sm font-semibold"
                  >
                    More Information <ArrowRight className="ml-1" size={15} />
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
