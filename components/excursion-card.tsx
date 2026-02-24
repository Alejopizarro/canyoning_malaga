import { Excursion } from "@/lib/activities";
import { ArrowRight, Bell, Clock, MapPin, Users } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

type ExcursionCardProps = {
  excursion: Excursion;
  showDescription?: boolean;
};

const ExcursionCard = (props: ExcursionCardProps) => {
  const { excursion, showDescription = false } = props;
  const isAvailable = excursion.isDisponible !== false;

  const cardContent = (
    <div className="p-0">
      <div className="relative">
        <Image
          width={400}
          height={400}
          src={excursion.mainImage.src}
          alt={excursion.mainImage.alt}
          className="rounded-t-2xl object-cover h-[280px] w-[380px]"
        />
        {!isAvailable && (
          <div className="absolute top-3 left-3 bg-gray-800 text-white text-xs font-semibold px-3 py-1.5 rounded-full">
            Coming Soon
          </div>
        )}
      </div>
      <div
        className={`px-4 flex flex-col py-6 bg-white rounded-b-2xl ${
          showDescription ? "h-[230px]" : "h-[190px]"
        }`}
      >
        <div className="flex items-center mb-1 text-gray-600 gap-1 text-sm">
          {!excursion.subcategory ? excursion.category : excursion.subcategory}
        </div>
        <div className="flex justify-between items-center mb-2">
          <h4 className="max-w-lg text-lg font-semibold line-clamp-1">
            {excursion.title}
          </h4>
          <div className="flex items-center gap-1">
            <span className="text-sm text-gray-500">From</span>
            <span className="text-2xl font-bold ml-1 -mt-2 text-primary">
              {excursion.price}€
            </span>
          </div>
        </div>
        {!showDescription && (
          <div className="flex flex-wrap gap-2 my-2">
            <span className="flex line-clamp-1 bg-gray-200 px-2 py-1 rounded-lg items-center gap-1 text-xs font-semibold text-gray-500">
              <MapPin size={12} />
              {excursion.ubication}
            </span>
            <span className="flex bg-gray-200 px-2 py-1 rounded-lg items-center gap-1 text-xs font-semibold text-gray-500">
              <Users size={12} />
              {excursion.level === "easy" ? "all levels" : excursion.level}
            </span>
            <span className="flex bg-gray-200 px-2 py-1 rounded-lg items-center gap-1 text-xs font-semibold text-gray-500">
              <Clock size={12} />
              {excursion.duration} hs
            </span>
          </div>
        )}
        {showDescription && (
          <div className="flex-grow mb-2">
            <p className="text-sm text-gray-600 line-clamp-3">
              {excursion.description}
            </p>
          </div>
        )}

        {isAvailable ? (
          <Link
            className="font-light text-primary-dark self-baseline hover:underline mt-auto"
            href={`/${excursion.categoryPath}/${excursion.route}`}
          >
            More information{" "}
            <ArrowRight size={20} className="inline-flex ml-0.5" />
          </Link>
        ) : (
          <button
            type="button"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              window.dispatchEvent(
                new CustomEvent("notify-activity", {
                  detail: excursion.title,
                }),
              );
              document
                .getElementById("form-section")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            className="font-light text-primary-dark self-baseline hover:underline mt-auto flex items-center gap-1.5 cursor-pointer"
          >
            <Bell size={16} />
            Notify me
          </button>
        )}
      </div>
    </div>
  );

  if (isAvailable) {
    return (
      <Link
        href={`/${excursion.categoryPath}/${excursion.route}`}
        className="hover:shadow-lg hover:cursor-pointer rounded-2xl transition-shadow duration-300 h-auto w-full max-w-[380px] flex flex-col"
      >
        {cardContent}
      </Link>
    );
  }

  return (
    <div className="rounded-2xl transition-shadow duration-300 h-auto w-full max-w-[380px] flex flex-col opacity-50 grayscale">
      {cardContent}
    </div>
  );
};

export default ExcursionCard;
