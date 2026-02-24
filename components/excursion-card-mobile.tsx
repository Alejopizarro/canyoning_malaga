import { Excursion } from "@/lib/activities";
import { ArrowRight, Bell } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

type ExcursionCardMobileProps = {
  excursion: Excursion;
};

const ExcursionCardMobile = (props: ExcursionCardMobileProps) => {
  const { excursion } = props;
  const isAvailable = excursion.isDisponible !== false;

  const cardContent = (
    <div className="p-0">
      <div className="relative">
        <Image
          width={400}
          height={400}
          src={excursion.mainImage.src}
          alt={excursion.mainImage.alt}
          className="object-cover h-[250px] w-[380px]"
        />
        {!isAvailable && (
          <div className="absolute top-3 left-3 bg-gray-800 text-white text-xs font-semibold px-3 py-1.5 rounded-full">
            Coming Soon
          </div>
        )}
      </div>
      <div className="h-[220px] flex flex-col py-2">
        <div className="flex items-center mb-1 text-gray-600 gap-1 text-sm">
          {!excursion.subcategory ? excursion.category : excursion.subcategory}
        </div>
        <div className="flex justify-between items-start mb-2">
          <span className="text-lg font-semibold line-clamp-1">
            {excursion.title}
          </span>
        </div>

        <div className="flex-grow mb-2">
          <p className="text-sm text-gray-600 line-clamp-3">
            {excursion.description}
          </p>
        </div>

        <div className="flex items-center gap-2 mb-2">
          <span className="text-md text-gray-500 mt-1.5">From</span>
          <span className="text-2xl font-bold text-primary">
            {excursion.price}€
          </span>
        </div>

        {isAvailable ? (
          <Link
            className="font-light text-primary-dark hover:underline"
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
            className="font-light text-primary-dark hover:underline flex items-center gap-1.5 cursor-pointer"
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
        className="hover:shadow-lg transition-shadow duration-300 h-auto w-full max-w-[380px] flex flex-col"
      >
        {cardContent}
      </Link>
    );
  }

  return (
    <div className="transition-shadow duration-300 h-auto w-full max-w-[380px] flex flex-col opacity-50 grayscale">
      {cardContent}
    </div>
  );
};

export default ExcursionCardMobile;
