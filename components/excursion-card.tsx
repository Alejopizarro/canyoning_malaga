import { Excursion } from "@/lib/activities";
import { ArrowRight, MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

type ExcursionCardProps = {
  excursion: Excursion;
  showDescription?: boolean;
};

const ExcursionCard = (props: ExcursionCardProps) => {
  const { excursion, showDescription = true } = props;

  return (
    <div className="hover:shadow-lg rounded-2xl transition-shadow duration-300 h-auto w-full max-w-[380px] flex flex-col">
      <div className="p-0">
        <Image
          width={400}
          height={400}
          src={excursion.mainImage.src}
          alt={excursion.mainImage.alt}
          className="rounded-t-2xl object-cover h-[280px] w-[380px]"
        />
        <div
          className={`px-4 flex flex-col py-6 bg-white rounded-b-2xl ${
            showDescription ? "h-[220px]" : "h-[140px]"
          }`}
        >
          <div className="flex items-center mb-1 text-gray-600 gap-1 text-sm">
            {!excursion.subcategory
              ? excursion.category
              : excursion.subcategory}
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

          {showDescription && (
            <div className="flex-grow mb-2">
              <p className="text-sm text-gray-600 line-clamp-3">
                {excursion.description}
              </p>
            </div>
          )}

          <Link
            className="font-light text-primary-dark hover:underline"
            href={`/${excursion.categoryPath}/${excursion.route}`}
          >
            More information{" "}
            <ArrowRight size={20} className="inline-flex ml-0.5" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ExcursionCard;
