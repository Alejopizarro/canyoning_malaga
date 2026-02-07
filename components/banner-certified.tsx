import Image from "next/image";

const certifications = [
  {
    name: "Federación Española de Deportes de Montaña",
    logo: "/uimla-2.webp",
  },
  {
    name: "Ministerio de Educación y Formación Profesional",
    logo: "/ministerio.webp",
  },
  {
    name: "ICAN - International Canyoning Association",
    logo: "/guias.webp",
  },
  {
    name: "AEGM - Asociación Española de Guías de Montaña",
    logo: "/aegm.webp",
  },
];

export default function BannerCertified() {
  return (
    <section className="bg-gray-100 relative z-20">
      <div className="py-12 sm:py-16 px-4 sm:px-8 max-w-[1440px] mx-auto">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-8">
          {/* Title */}
          <h3 className="font-bold text-gray-900 whitespace-nowrap">
            We Are Certified By
          </h3>

          {/* Logos */}
          <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="relative w-[150px] h-[150px] hover:grayscale-0 transition-all duration-300"
              >
                <Image
                  src={cert.logo}
                  alt={cert.name}
                  fill
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
