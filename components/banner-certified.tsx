import Image from "next/image";

const certifications = [
  {
    name: "Federación Española de Deportes de Montaña",
    logo: "/uimla.png",
  },
  {
    name: "Ministerio de Educación y Formación Profesional",
    logo: "/ministerio.png",
  },
  {
    name: "ICAN - International Canyoning Association",
    logo: "/guias.png",
  },
  {
    name: "AEGM - Asociación Española de Guías de Montaña",
    logo: "/barrancos.jpg",
  },
];

export default function BannerCertified() {
  return (
    <section className="py-12 sm:py-16 px-4 sm:px-8 lg:px-16 bg-gray-100">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-8">
          {/* Title */}
          <h3 className="text-xl sm:text-2xl font-bold text-gray-900 whitespace-nowrap">
            We Are Certified By
          </h3>

          {/* Logos */}
          <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="relative w-16 h-16 sm:w-20 sm:h-20 hover:grayscale-0 transition-all duration-300"
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
