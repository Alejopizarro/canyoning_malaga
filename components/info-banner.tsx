import {
  Users,
  Calendar,
  MapPin,
  Clock,
  ChartNoAxesColumnIncreasing,
  TimerReset,
  PersonStanding,
} from "lucide-react";
import { levelLabel } from "@/lib/level";

interface InfoBannerProps {
  minimumAge?: number;
  maxAge?: number;
  ubication?: string;
  province?: string;
  level: "easy" | "moderate" | "advanced";
  duration: number;
}

export default function InfoBanner({
  minimumAge,
  maxAge,
  ubication,
  province,
  level,
  duration,
}: InfoBannerProps) {
  // Determinar la ubicación (prioridad a ubication, sino province)
  const location = ubication || province;

  return (
    <div className="flex my-4 flex-wrap items-center gap-2">
      {/* Level */}
      <span className="flex bg-gray-100 px-4 py-1 rounded-lg items-center gap-1 text-xs font-semibold text-gray-900">
        <ChartNoAxesColumnIncreasing size={12} />
        {levelLabel(level)}
      </span>
      {/* Age */}

      <span className="flex bg-gray-100 px-4 py-1 rounded-lg items-center gap-1 text-xs font-semibold text-gray-900">
        <TimerReset size={15} />
        ~{duration} hours
      </span>

      {/* Location */}
      {location && (
        <span className="flex bg-gray-100 px-4 py-1 rounded-lg items-center gap-1 text-xs font-semibold text-gray-900">
          <MapPin size={12} />
          {location}
        </span>
      )}

      <span className="flex bg-gray-100 px-4 py-1 rounded-lg items-center gap-1 text-xs font-semibold text-gray-900">
        <PersonStanding size={12} />
        From {minimumAge}{maxAge ? ` to ${maxAge}` : ""} y.o.
      </span>
    </div>
  );
}
