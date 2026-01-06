import Image from "next/image";
import Link from "next/link";

const BannerTeamBuilding = () => {
  return (
    <section className="relative w-full h-[50vh] min-h-[400px] overflow-hidden bg-gray-900">
      {/* Background Image */}
      <Image
        src="/team-building-bg.webp"
        alt="Activities for large groups"
        fill
        className="object-cover"
        priority
      />

      {/* Overlay oscuro */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center text-white px-4">
        <h2 className="text-3xl md:text-5xl font-bold mb-4">
          Activities For Large Groups
        </h2>

        <p className="max-w-2xl text-sm md:text-base text-white/80 mb-2">
          Are you looking for something different to do with your work
          colleagues? Perhaps a stag or hen party with friends? Or maybe an
          activity day with your school pupils?
        </p>

        <p className="text-sm md:text-base text-white/80 mb-8">
          Whatever you&apos;re looking for, we can help you!
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            href="/team-building"
            className="px-8 py-3 bg-teal-500 hover:bg-teal-600 text-white font-semibold rounded-full transition-colors duration-300 inline-flex items-center justify-center"
          >
            Explore Group Activities
          </Link>

          <Link
            href="/contact"
            className="px-8 py-3 border-2 border-white/70 hover:border-white hover:bg-white/10 text-white font-semibold rounded-full transition-all duration-300 inline-flex items-center justify-center"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BannerTeamBuilding;
