// components/StarRating.tsx
import { Star } from "lucide-react";

interface StarRatingProps {
  value: number;
  totalReviews?: number;
  showText?: boolean;
  size?: "sm" | "md" | "lg";
}

export default function StarRating({
  value,
  totalReviews,
  showText = true,
  size = "sm",
}: StarRatingProps) {
  const sizeClasses = {
    sm: "w-4 h-4",
    md: "w-5 h-5",
    lg: "w-6 h-6",
  };

  const starSize = sizeClasses[size];

  // Calcula el porcentaje de relleno para cada estrella
  const getStarFill = (starIndex: number): number => {
    const diff = value - starIndex;
    if (diff >= 1) return 100;
    if (diff <= 0) return 0;
    return diff * 100;
  };

  // Si no hay reviews, mostrar mensaje
  if (value === 0 && totalReviews === 0) {
    return (
      <div className="flex items-center gap-2">
        <span className="font-semibold text-sm text-gray-500">No reviews</span>
      </div>
    );
  }

  // Si no hay reviews, mostrar mensaje
  if (value === 0 && totalReviews === 0) {
    return (
      <div className="flex items-center gap-2">
        <span className="font-semibold text-sm text-gray-500">No reviews</span>
      </div>
    );
  }

  return (
    <div className="flex items-center gap-2">
      <div className="flex">
        {[...Array(5)].map((_, i) => {
          const fillPercentage = getStarFill(i);

          return (
            <div key={i} className="relative">
              {/* Estrella vacía de fondo */}
              <Star className={`${starSize} text-gray-300`} />

              {/* Estrella rellena con clip */}
              {fillPercentage > 0 && (
                <div
                  className="absolute top-0 left-0 overflow-hidden"
                  style={{ width: `${fillPercentage}%` }}
                >
                  <Star className={`${starSize} fill-cyan-700 text-cyan-700`} />
                </div>
              )}
            </div>
          );
        })}
      </div>

      {showText && (
        <span className="font-semibold text-sm text-gray-700">
          ({value.toFixed(1).replace(".", ",")} stars)
          {totalReviews && ` - ${totalReviews.toLocaleString("es-ES")} reviews`}
        </span>
      )}
    </div>
  );
}
