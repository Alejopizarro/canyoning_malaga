import Image from "next/image";
import Link from "next/link";

export default function BannerContact() {
  return (
    <section className="relative h-[300px] sm:h-[350px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <Image
        src="/banner-contact-bg.jpg"
        alt="Adventure background"
        fill
        className="object-cover"
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-2xl mx-auto">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
          Not Sure What To Choose?
        </h2>
        <p className="text-sm sm:text-base opacity-90 mb-6 max-w-lg mx-auto">
          Tell us what you have in mind and let our adventure experts recommend
          the best activities for you.
        </p>
        <Link
          href="/contact"
          className="inline-flex items-center px-6 py-3 bg-teal-500 text-white font-semibold rounded-lg hover:bg-teal-600 transition-colors"
        >
          Contact Us
        </Link>
      </div>
    </section>
  );
}
