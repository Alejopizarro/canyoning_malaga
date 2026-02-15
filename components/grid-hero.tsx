"use client";

import Image from "next/image";
import { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

export interface GridHeroImage {
  src: string;
  alt: string;
}

interface GridHeroProps {
  mainImage: GridHeroImage;
  images: GridHeroImage[];
  videoYoutube?: string;
}

function toEmbedUrl(url: string): string {
  // Already an embed URL
  if (url.includes("/embed/")) return url;
  // Standard watch URL: https://www.youtube.com/watch?v=VIDEO_ID
  const watchMatch = url.match(/[?&]v=([^&]+)/);
  if (watchMatch) return `https://www.youtube.com/embed/${watchMatch[1]}`;
  // Short URL: https://youtu.be/VIDEO_ID
  const shortMatch = url.match(/youtu\.be\/([^?&]+)/);
  if (shortMatch) return `https://www.youtube.com/embed/${shortMatch[1]}`;
  return url;
}

const GridHero = (props: GridHeroProps) => {
  const [currentImage, setCurrentImage] = useState(0);
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [galleryIndex, setGalleryIndex] = useState(0);

  const { mainImage, images } = props;
  const videoYoutube = props.videoYoutube ? toEmbedUrl(props.videoYoutube) : undefined;

  // Si hay video, reservamos 1 slot para él y tomamos máximo 3 imágenes; si no, 4
  const displayImages = videoYoutube ? images.slice(0, 3) : images.slice(0, 4);
  // Array combinado para mobile: mainImage + images
  const allImages = [mainImage, ...images];
  // Array completo para la galería (mainImage + todas las images)
  const galleryImages = [mainImage, ...images];

  const hasMoreImages = images.length > 3;

  const openGallery = (startIndex: number = 0) => {
    setGalleryIndex(startIndex);
    setIsGalleryOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeGallery = () => {
    setIsGalleryOpen(false);
    document.body.style.overflow = "unset";
  };

  const nextImage = () => {
    setGalleryIndex((prev) =>
      prev === galleryImages.length - 1 ? 0 : prev + 1,
    );
  };

  const prevImage = () => {
    setGalleryIndex((prev) =>
      prev === 0 ? galleryImages.length - 1 : prev - 1,
    );
  };

  return (
    <div>
      <div className="hidden md:grid md:grid-cols-2 gap-4 h-[600px] relative">
        {/* Imagen principal grande */}
        <div className="relative h-full">
          <Image
            src={mainImage.src}
            alt={mainImage.alt}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover cursor-pointer rounded-lg"
            onClick={() => openGallery(0)}
            priority
          />
        </div>

        {/* Grid de máximo 4 elementos (video opcional + imágenes) */}
        <div className="grid grid-cols-2 gap-4 h-full relative">
          {videoYoutube && (
            <div className="relative w-full h-full">
              <iframe
                className="absolute top-0 left-0 w-full h-full rounded-lg"
                src={videoYoutube}
                title="Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          )}
          {displayImages.map((img, index) => (
            <div key={index} className="relative h-full">
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(max-width: 768px) 100vw, 25vw"
                className="object-cover cursor-pointer rounded-lg"
                onClick={() => openGallery(index + 1)}
              />
            </div>
          ))}

          {/* Botón "Show all images" si hay más de 4 */}
          {hasMoreImages && (
            <button
              onClick={() => openGallery(0)}
              className="absolute bottom-4 right-4 bg-white hover:bg-gray-100 text-gray-900 px-4 py-2 rounded-lg shadow-lg font-medium text-sm transition-colors border border-gray-200 flex items-center gap-2"
            >
              <span>Show all images</span>
              <span className="text-xs bg-gray-900 text-white rounded-full px-2 py-0.5">
                {galleryImages.length}
              </span>
            </button>
          )}
        </div>
      </div>

      {/* Mobile: Imagen grande arriba + carousel abajo */}
      <div className="md:hidden">
        {/* Imagen principal o video grande */}
        <div className="relative w-full h-[400px] mb-4">
          {videoYoutube && currentImage === 1 ? (
            <iframe
              className="absolute top-0 left-0 w-full h-full rounded-lg"
              src={videoYoutube}
              title="Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          ) : (
            <Image
              src={
                allImages[videoYoutube && currentImage >= 2 ? currentImage - 1 : currentImage]?.src ??
                allImages[0].src
              }
              alt={
                allImages[videoYoutube && currentImage >= 2 ? currentImage - 1 : currentImage]?.alt ??
                allImages[0].alt
              }
              fill
              sizes="100vw"
              className="object-cover rounded-lg"
              priority
            />
          )}
        </div>

        {/* Carousel de miniaturas */}
        <div className="flex gap-3 overflow-x-auto py-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {/* Main image thumbnail - always first */}
          <button
            onClick={() => setCurrentImage(0)}
            className={`relative flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-all ${
              currentImage === 0
                ? "border-blue-500 scale-105"
                : "border-transparent opacity-70"
            }`}
          >
            <Image
              src={mainImage.src}
              alt={mainImage.alt}
              fill
              sizes="80px"
              className="object-cover"
            />
          </button>
          {/* Video thumbnail - second */}
          {videoYoutube && (
            <button
              onClick={() => setCurrentImage(1)}
              className={`relative flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-all ${
                currentImage === 1
                  ? "border-blue-500 scale-105"
                  : "border-transparent opacity-70"
              }`}
            >
              <div className="w-full h-full bg-gray-800 flex items-center justify-center">
                <svg
                  className="w-8 h-8 text-white"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </button>
          )}
          {/* Rest of images */}
          {images.map((img, index) => (
            <button
              key={index}
              onClick={() => setCurrentImage(index + (videoYoutube ? 2 : 1))}
              className={`relative flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-all ${
                currentImage === index + (videoYoutube ? 2 : 1)
                  ? "border-blue-500 scale-105"
                  : "border-transparent opacity-70"
              }`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="80px"
                className="object-cover"
              />
            </button>
          ))}
        </div>

        {/* Indicadores opcionales */}
        <div className="flex justify-center gap-2 mt-4">
          {Array.from({
            length: allImages.length + (videoYoutube ? 1 : 0),
          }).map((_, index) => (
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

      {/* Modal de Galería */}
      {isGalleryOpen && (
        <div
          className="fixed inset-0 z-[1000] bg-black/80 backdrop-blur-sm flex items-center justify-center"
          onClick={closeGallery}
        >
          {/* Botón cerrar */}
          <button
            onClick={closeGallery}
            className="absolute top-4 right-4 z-[1000] w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
            aria-label="Close gallery"
          >
            <X className="w-6 h-6 text-white" />
          </button>

          {/* Contador de imágenes */}
          <div className="absolute top-4 left-1/2 -translate-x-1/2 z-[1000] bg-black/50 text-white px-4 py-2 rounded-full text-sm font-medium">
            {galleryIndex + 1} / {galleryImages.length}
          </div>

          {/* Contenedor de la imagen */}
          <div
            className="relative w-full h-full flex items-center justify-center p-4 md:p-12"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Botón anterior */}
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-[1000] w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-6 h-6 text-white" />
            </button>

            {/* Imagen principal */}
            <div className="relative max-w-5xl max-h-full w-full h-full flex items-center justify-center">
              <Image
                src={galleryImages[galleryIndex].src}
                alt={galleryImages[galleryIndex].alt}
                fill
                sizes="(max-width: 768px) 100vw, 90vw"
                className="object-contain"
                onClick={(e) => e.stopPropagation()}
              />
            </div>

            {/* Botón siguiente */}
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-[1000] w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
              aria-label="Next image"
            >
              <ChevronRight className="w-6 h-6 text-white" />
            </button>
          </div>

          {/* Miniaturas en la parte inferior */}
          <div className="absolute bottom-4 left-0 right-0 z-[1000]">
            <div className="flex gap-2 justify-center overflow-x-auto px-4 py-2 max-w-4xl mx-auto">
              {galleryImages.map((img, index) => (
                <button
                  key={index}
                  onClick={(e) => {
                    e.stopPropagation();
                    setGalleryIndex(index);
                  }}
                  className={`relative flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden border-2 transition-all ${
                    galleryIndex === index
                      ? "border-white scale-110"
                      : "border-transparent opacity-60 hover:opacity-100"
                  }`}
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    sizes="64px"
                    className="object-cover"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default GridHero;
