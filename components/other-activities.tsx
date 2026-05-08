import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

type Activity = {
  title: string;
  description: string;
  image: { src: string; alt: string };
  href: string;
  category: string;
};

type OtherActivitiesProps = {
  activities: Activity[];
};

export default function OtherActivities({ activities }: OtherActivitiesProps) {
  return (
    <section className="max-w-[1440px] mx-auto px-4 sm:px-16 py-12">
      <h2 className="text-2xl font-bold text-gray-900 mb-8">Similar Activities</h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {activities.map((activity) => (
          <Link
            key={activity.href}
            href={activity.href}
            className="group rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300 bg-white"
          >
            <div className="relative h-[220px] w-full">
              <Image
                src={activity.image.src}
                alt={activity.image.alt}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-4 flex flex-col gap-2">
              <span className="text-xs font-semibold text-primary uppercase tracking-wide">
                {activity.category}
              </span>
              <h3 className="text-lg font-semibold text-gray-900">
                {activity.title}
              </h3>
              <p className="text-sm text-gray-600 line-clamp-2">
                {activity.description}
              </p>
              <span className="text-primary-dark font-light mt-2 flex items-center gap-1 text-sm">
                More information{" "}
                <ArrowRight size={16} className="inline" />
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
