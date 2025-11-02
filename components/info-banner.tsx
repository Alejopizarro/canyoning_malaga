import { Star, Users, Calendar, MapPin, Clock } from "lucide-react";

export default function InfoBanner() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="flex flex-wrap items-center justify-between gap-6 text-xl ">
        {/* Rating */}
        <div className="flex items-center gap-2">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className="w-8 h-8 fill-yellow-400 text-yellow-400"
              />
            ))}
          </div>
          <span className="font-semibold text-gray-700">2,487 reviews</span>
        </div>

        {/* Divider */}
        <div className="hidden sm:block w-px h-6 bg-gray-300"></div>

        {/* All levels */}
        <div className="grid grid-cols-2 gap-6 md:flex md:items-center md:gap-8">
          <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm">
            <Users className="w-4 h-4 text-blue-600" />
            <span className="font-medium text-gray-700">All levels</span>
          </div>

          {/* Age */}
          <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm">
            <Calendar className="w-4 h-4 text-blue-600" />
            <span className="font-medium text-gray-700">From 6 y.o.</span>
          </div>

          {/* Location */}
          <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm">
            <MapPin className="w-4 h-4 text-blue-600" />
            <span className="font-medium text-gray-700">Marbella</span>
          </div>

          {/* Duration */}
          <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm">
            <Clock className="w-4 h-4 text-blue-600" />
            <span className="font-medium text-gray-700">3 hours</span>
          </div>
        </div>
      </div>
    </div>
  );
}
