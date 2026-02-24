import SearchInput from "@/components/search-input";
import { getExcursions } from "@/lib/activities";
import Link from "next/link";

export default async function NotFound() {
  const excursions = await getExcursions();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 pt-20 pb-10">
      <p className="text-8xl sm:text-9xl font-bold text-primary/20">404</p>
      <h1 className="mt-4 text-3xl sm:text-5xl font-bold text-center text-neutral-800">
        Oops... this page cannot be found
      </h1>
      <p className="mt-4 text-neutral-500 text-center max-w-md">
        The page you are looking for might have been removed or is temporarily
        unavailable. Try searching for an activity below.
      </p>

      <div className="mt-8 w-full flex justify-center">
        <SearchInput variant="page" excursions={excursions} />
      </div>

      <Link
        href="/"
        className="mt-8 inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white px-6 py-3 rounded-full font-medium transition-colors"
      >
        Back to Home
      </Link>
    </div>
  );
}
