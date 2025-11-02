"use client";

import Image from "next/image";
import { useState } from "react";

interface GridHeroImage {
  src: string;
  alt: string;
}

export const images: GridHeroImage[] = [
  {
    src: "/guadalmina-canyon.jpg",
    alt: "Guadalmina canyon - The Best Canyoning Experience Near Marbella",
  },
  {
    src: "/guadalmina-canyon.jpg",
    alt: "Guadalmina canyon - The Best Canyoning Experience Near Marbella",
  },
  {
    src: "/guadalmina-canyon.jpg",
    alt: "Guadalmina canyon - The Best Canyoning Experience Near Marbella",
  },
  {
    src: "/guadalmina-canyon.jpg",
    alt: "Guadalmina canyon - The Best Canyoning Experience Near Marbella",
  },
];

const GridHero = () => {
  const [currentImage, setCurrentImage] = useState(0);

  return (
    <div>
      <div className="hidden md:grid md:grid-cols-2 gap-8 h-[600px]">
        <div className="h-full">
          <Image
            src="/guadalmina-canyon.jpg"
            width={600}
            height={600}
            className="object-cover w-full h-full rounded-lg"
            alt="Guadalmina canyon - The Best Canyoning Experience Near Marbella"
          />
        </div>

        {/* Grid de 4 imágenes */}
        <div className="grid grid-cols-2 gap-4 h-full">
          {images.map((img, index) => (
            <div key={index} className="h-full">
              <Image
                src={img.src}
                width={300}
                height={300}
                className="object-cover w-full h-full rounded-lg"
                alt={img.alt}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Mobile: Imagen grande arriba + carousel abajo */}
      <div className="md:hidden">
        {/* Imagen principal grande */}
        <div className="w-full h-[400px] mb-4">
          <Image
            src={images[currentImage].src}
            width={600}
            height={400}
            className="object-cover w-full h-full rounded-lg"
            alt={images[currentImage].alt}
          />
        </div>

        {/* Carousel de miniaturas */}
        <div className="flex gap-3 overflow-x-auto py-2">
          {images.map((img, index) => (
            <button
              key={index}
              onClick={() => setCurrentImage(index)}
              className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-all ${
                currentImage === index
                  ? "border-blue-500 scale-105"
                  : "border-transparent opacity-70"
              }`}
            >
              <Image
                src={img.src}
                width={80}
                height={80}
                className="object-cover w-full h-full"
                alt={img.alt}
              />
            </button>
          ))}
        </div>

        {/* Indicadores opcionales */}
        <div className="flex justify-center gap-2 mt-4">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImage(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                currentImage === index ? "bg-blue-500 w-6" : "bg-gray-300"
              }`}
              aria-label={`Go to image ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default GridHero;
