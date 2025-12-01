"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import StarRating from "./stars-rating";
import Image from "next/image";

interface Review {
  rating: number;
  user: string;
  position?: string;
  date: string;
  description: string;
  avatar?: string;
}

interface ReviewsCarouselProps {
  reviews?: Review[];
  title?: string;
  averageRating?: number;
  totalReviews?: number;
  autoPlay?: boolean;
  autoPlayInterval?: number;
}

const defaultReviews: Review[] = [
  {
    rating: 5,
    user: "Name Surname",
    position: "Position, Company name",
    date: "2024-11",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.",
  },
  {
    rating: 5,
    user: "Name Surname",
    position: "Position, Company name",
    date: "2024-10",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.",
  },
  {
    rating: 5,
    user: "Name Surname",
    position: "Position, Company name",
    date: "2024-09",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.",
  },
  {
    rating: 4.5,
    user: "Name Surname",
    position: "Position, Company name",
    date: "2024-08",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.",
  },
  {
    rating: 5,
    user: "Name Surname",
    position: "Position, Company name",
    date: "2024-07",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.",
  },
  {
    rating: 4,
    user: "Name Surname",
    position: "Position, Company name",
    date: "2024-06",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.",
  },
];

export default function ReviewsCarousel({
  reviews = defaultReviews,
  title = "Customer Testimonials",
  averageRating = 4.9,
  totalReviews = 2048,
  autoPlay = false,
  autoPlayInterval = 5000,
}: ReviewsCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Número de cards visibles según el breakpoint
  const getVisibleCards = () => {
    if (typeof window === "undefined") return 3;
    if (window.innerWidth < 640) return 1;
    if (window.innerWidth < 1024) return 2;
    return 3;
  };

  const [visibleCards, setVisibleCards] = useState(3);

  useEffect(() => {
    const handleResize = () => setVisibleCards(getVisibleCards());
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Ahora navegamos de a 1 elemento
  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    if (!autoPlay) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
    }, autoPlayInterval);
    return () => clearInterval(interval);
  }, [autoPlay, autoPlayInterval, reviews.length]);

  return (
    <section className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            {title}
          </h2>
          <div className="flex items-center gap-2 border-l-0 sm:border-l-2 border-gray-300 sm:pl-4">
            <span className="text-3xl md:text-4xl font-bold text-gray-900">
              {averageRating}
            </span>
            <div className="flex flex-col">
              <StarRating value={averageRating} showText={false} size="sm" />
              <span className="text-sm text-gray-600">
                Based on {totalReviews.toLocaleString("es-ES")} reviews
              </span>
            </div>
          </div>
        </div>

        {/* Carousel */}
        <div className="relative">
          {/* Botón Prev */}
          <button
            onClick={handlePrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-6 z-10 w-10 h-10 md:w-12 md:h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors border border-gray-200"
            aria-label="Previous reviews"
          >
            <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 text-gray-600" />
          </button>

          {/* Cards Container */}
          <div className="overflow-hidden mx-6 md:mx-8">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${
                  currentIndex * (100 / visibleCards)
                }%)`,
              }}
            >
              {/* Mostramos todas las reviews en una fila continua */}
              {reviews.map((review, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 px-2"
                  style={{ width: `${100 / visibleCards}%` }}
                >
                  <ReviewCard review={review} />
                </div>
              ))}
            </div>
          </div>

          {/* Botón Next */}
          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-6 z-10 w-10 h-10 md:w-12 md:h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors border border-gray-200"
            aria-label="Next reviews"
          >
            <ChevronRight className="w-5 h-5 md:w-6 md:h-6 text-gray-600" />
          </button>
        </div>
      </div>
    </section>
  );
}

// Componente de la tarjeta individual
function ReviewCard({ review }: { review: Review }) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
      {/* Estrellas */}
      <div className="mb-4">
        <StarRating value={review.rating} showText={false} size="sm" />
      </div>

      {/* Descripción */}
      <p className="text-gray-700 text-sm leading-relaxed mb-6">
        &quot;{review.description}&quot;
      </p>

      {/* Usuario */}
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
          {review.avatar ? (
            <Image
              src={review.avatar}
              alt={review.user}
              width={40}
              height={40}
              className="w-full h-full rounded-full object-cover"
            />
          ) : (
            <span className="text-gray-500 text-sm font-medium">
              {review.user.charAt(0)}
            </span>
          )}
        </div>
        <div>
          <p className="font-semibold text-sm text-gray-900">{review.user}</p>
          {review.position && (
            <p className="text-xs text-gray-500">{review.position}</p>
          )}
        </div>
      </div>
    </div>
  );
}
