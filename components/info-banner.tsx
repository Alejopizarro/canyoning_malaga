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
    <div className="flex flex-wrap items-center gap-2">
      {/* Level */}
      <span className="flex bg-gray-200 px-4 py-1 rounded-lg items-center gap-1 text-xs font-semibold text-gray-500">
        <Users size={15} />
        {getLevelText(level)}
      </span>
      {/* Age */}
      <span className="flex bg-gray-200 px-4 py-1 rounded-lg items-center gap-1 text-xs font-semibold text-gray-500">
        <Calendar size={15} />
        From {minimumAge} y.o.
      </span>

      {/* Location */}
      {location && (
        <span className="flex bg-gray-200 px-4 py-1 rounded-lg items-center gap-1 text-xs font-semibold text-gray-500">
          <MapPin size={15} />
          {location}
        </span>
      )}

      {/* Duration */}
      <span className="flex bg-gray-200 px-4 py-1 rounded-lg items-center gap-1 text-xs font-semibold text-gray-500">
        <Clock size={15} />
        {duration} hours
      </span>
    </div>
  );
}
