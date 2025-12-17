"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import ActivitiesCarousel from "./ui/activities-carousel";
import { Excursion } from "@/lib/activities";

export default function AllActivitiesCarousel() {
  const [excursions, setExcursions] = useState<Excursion[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadExcursions() {
      try {
        const response = await fetch("/api/excursions");
        const data = await response.json();
        setExcursions(data);
      } catch (error) {
        console.error(
          "❌ AllActivitiesCarousel: Error loading excursions:",
          error
        );
      } finally {
        setLoading(false);
        console.log("🏁 AllActivitiesCarousel: Loading finalizado");
      }
    }
    loadExcursions();
  }, []);

  if (loading) {
    return (
      <section className="relative z-10 w-full bg-white py-12 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-500">Loading activities...</p>
        </div>
      </section>
    );
  }

  return (
    <section className="relative z-10 w-full bg-white py-12 px-4 md:px-8 lg:px-16">
      {/* Header */}
      <div className="max-w-7xl mx-auto mb-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <div>
            <span className="text-sm text-gray-500 uppercase tracking-wide">
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

          <Link
            href="/activities"
            className="inline-flex items-center justify-center px-6 py-3 bg-teal-500 hover:bg-teal-600 text-white font-semibold rounded-lg transition-colors duration-300 whitespace-nowrap"
          >
            Explore All Activities
          </Link>
        </div>
      </div>
      <ActivitiesCarousel excursions={excursions} />
    </section>
  );
}
