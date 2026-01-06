"use client";

import Link from "next/link";
import ActivitiesCarousel from "./ui/activities-carousel";
import { Excursion } from "@/lib/activities";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";

interface AllActivitiesSectionProps {
  excursions: Excursion[];
}

export default function AllActivitiesSection({
  excursions,
}: AllActivitiesSectionProps) {
  const router = useRouter();
  return (
    <section className="relative z-10 w-full bg-background py-12 px-4 md:px-8 max-w-[1440px] mx-auto">
      {/* Header */}
      <div className="mb-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <div>
            <span className="text-md text-primary tracking-wide">
              Explore More
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-1">
              All Our Activities
            </h2>
            <p className="text-gray-500 mt-2 max-w-md">
              Whether you are a beginner or an expert. Whether it&apos;s sunny
              or raining. We&apos;ve got you covered.
            </p>
          </div>

          <Button size="lg" onClick={() => router.push("/activities")}>
            Explore All Activities
          </Button>
        </div>
      </div>
      <ActivitiesCarousel excursions={excursions} />
    </section>
  );
}
