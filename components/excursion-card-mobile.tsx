import { Excursion } from "@/lib/activities";
import { ArrowRight, MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

type ExcursionCardMobileProps = {
  excursion: Excursion;
};

const ExcursionCardMobile = (props: ExcursionCardMobileProps) => {
  const { excursion } = props;

  return (
    <div className="hover:shadow-lg transition-shadow duration-300 h-auto w-full max-w-[380px] flex flex-col">
      <div className="p-0">
        <Image
          width={400}
          height={400}
          src={excursion.mainImage.src}
          alt={excursion.mainImage.alt}
          className="object-cover h-[250px] w-[380px]"
        />
        <div className="h-[220px] flex flex-col py-2">
          <div className="flex items-center mb-1 text-gray-600 gap-1 text-sm">
            {!excursion.subcategory
              ? excursion.category
              : excursion.subcategory}
          </div>
          <div className="flex justify-between items-start mb-2">
            <a
              href={`/${excursion.categoryPath}/${excursion.route}`}
              className="text-lg font-semibold line-clamp-1"
            >
              {excursion.title}
            </a>
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

export default ExcursionCardMobile;
