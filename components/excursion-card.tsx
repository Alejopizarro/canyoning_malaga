import { Excursion } from "@/app/data";
import { ArrowRight, MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

type ExcursionCardProps = {
  excursion: Excursion;
};

const ExcursionCard = (props: ExcursionCardProps) => {
  const { excursion } = props;

  return (
    <div className="hover:shadow-lg transition-shadow duration-300 h-auto w-full max-w-[280px] flex flex-col">
      <div className="p-0">
        <Image
          width={400}
          height={400}
          src={excursion.mainImage.src}
          alt={excursion.mainImage.alt}
          className="sm:rounded-t-md object-cover h-[250px] sm:h-[280px] w-[280px]"
        />
        <div className="sm:px-4 sm:py-6 py-2 sm:bg-white sm:rounded-b-md">
          <div className="flex items-center mb-1 text-gray-600 gap-1 text-sm">
            <MapPin className="w-3 h-3" />
            <span>{excursion.province}</span>
          </div>
          <div className="flex justify-between items-start mb-2">
            <h4 className="max-w-lg text-lg line-clamp-1">{excursion.title}</h4>
            <div className="hidden sm:flex items-center gap-1">
              <span className="text-2xl font-bold text-primary">
                {excursion.price}
              </span>
              <span className="text-sm text-gray-500">/person</span>
            </div>
          </div>

          <div className="flex-grow mb-2">
            <p className="text-sm text-gray-600 line-clamp-3">
              {excursion.description}
            </p>
          </div>

          <div className="flex sm:hidden items-center gap-1 mb-2">
            <span className="text-2xl font-bold text-primary">
              {excursion.price}
            </span>
            <span className="text-sm text-gray-500">/person</span>
          </div>

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
