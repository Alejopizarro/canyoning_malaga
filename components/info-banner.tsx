import { Users, Calendar, MapPin, Clock } from "lucide-react";

interface InfoBannerProps {
  minimumAge?: number;
  ubication?: string;
  province?: string;
  level: "easy" | "moderate" | "advanced";
  duration: number;
}

export default function InfoBanner({
  minimumAge,
  ubication,
  province,
  level,
  duration,
}: InfoBannerProps) {
  // Determinar el texto del nivel
  const getLevelText = (level: string) => {
    if (level === "easy") return "All levels";
    return level.charAt(0).toUpperCase() + level.slice(1);
  };

  // Determinar la ubicación (prioridad a ubication, sino province)
  const location = ubication || province;

  return (
    <div className="flex flex-wrap items-center gap-4">
      {/* Level */}
      <div className="bg-gray-300 flex items-center gap-2 px-3 py-1 text-md rounded-lg shadow-sm">
        <Users size={15} />
        <span className="font-semibold text-gray-700">
          {getLevelText(level)}
        </span>
      </div>

      {/* Age */}
      <div className="flex items-center gap-2 bg-gray-300 text-md px-3 py-1 rounded-lg shadow-sm">
        <Calendar size={15} />
        <span className="font-semibold text-gray-700">
          From {minimumAge} y.o.
        </span>
      </div>

      {/* Location */}
      {location && (
        <div className="flex items-center gap-2 bg-gray-300 px-3 py-1 rounded-lg shadow-sm">
          <MapPin size={15} />
          <span className="font-semibold text-gray-700">{location}</span>
        </div>
      )}

      {/* Duration */}
      <div className="flex items-center gap-2 bg-gray-300 px-3 py-1 rounded-lg shadow-sm">
        <Clock size={15} />
        <span className="font-semibold text-gray-700">{duration} hours</span>
      </div>
    </div>
  );
}
