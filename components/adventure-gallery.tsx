"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { X, ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";
import { Excursion } from "@/lib/activities";

interface AdventureGalleryProps {
  excursions: Excursion[];
}

export default function AdventureGallery({
  excursions,
}: AdventureGalleryProps) {
  // Extraer todas las mainImage de las excursiones
  const galleryImages = excursions.map((excursion) => ({
    src: excursion.mainImage.src,
    alt: excursion.mainImage.alt,
    title: excursion.title,
    categoryPath: excursion.categoryPath,
    slug: excursion.slug,
  }));
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openLightbox = (index: number) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    document.body.style.overflow = "auto";
  };

  const goToPrevious = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? galleryImages.length - 1 : prev - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prev) =>
      prev === galleryImages.length - 1 ? 0 : prev + 1
    );
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") closeLightbox();
    if (e.key === "ArrowLeft") goToPrevious();
    if (e.key === "ArrowRight") goToNext();
  };

  // Solo mostramos las primeras 4 imágenes en el grid
  const visibleImages = galleryImages.slice(0, 4);
  const remainingCount = galleryImages.length - 4;

  return (
    <>
      <section className="py-16 sm:py-24 px-4 sm:px-8 max-w-[1440px] mx-auto bg-background">
        <div>
          {/* Header */}
          <div className="text-center mb-10">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
              Adventure Gallery
            </h2>
            <p className="text-gray-600">
              Explore breathtaking moments from our thrilling adventures!
            </p>
          </div>

          {/* Grid - Custom Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 h-auto md:h-[600px]">
            {/* Left Side - Large Vertical Image */}
            <div className="grid grid-rows-2 gap-4">
              {/* Large Image Top Left */}
              <div
                className="relative h-full min-h-[300px] overflow-hidden cursor-pointer group"
                onClick={() => openLightbox(0)}
              >
                <Image
                  src={visibleImages[0].src}
                  alt={visibleImages[0].alt}
                  fill
                  className="object-cover rounded-2xl transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
              </div>

              {/* Small Image Bottom Left */}
              <div
                className="relative h-full min-h-[200px] overflow-hidden cursor-pointer group"
                onClick={() => openLightbox(1)}
              >
                <Image
                  src={visibleImages[1].src}
                  alt={visibleImages[1].alt}
                  fill
                  className="object-cover rounded-2xl transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
              </div>
            </div>

            {/* Right Side - Two Images Stacked */}
            <div className="grid grid-rows-[1fr_2fr] gap-4">
              {/* Small Image Top Right */}
              <div
                className="relative h-full min-h-[150px] overflow-hidden cursor-pointer group"
                onClick={() => openLightbox(2)}
              >
                <Image
                  src={visibleImages[2].src}
                  alt={visibleImages[2].alt}
                  fill
                  className="object-cover rounded-2xl transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
              </div>

              {/* Large Image Bottom Right - With counter overlay */}
              <div
                className="relative h-full min-h-[350px] overflow-hidden cursor-pointer group"
                onClick={() => openLightbox(3)}
              >
                <Image
                  src={visibleImages[3].src}
                  alt={visibleImages[3].alt}
                  fill
                  className="object-cover rounded-2xl transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />

                {/* Counter Badge */}
                {remainingCount > 0 && (
                  <div className="absolute bottom-4 right-4 bg-black/70 text-white px-4 py-2 text-sm font-medium">
                    +{remainingCount} more
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
          onClick={closeLightbox}
          onKeyDown={handleKeyDown}
          tabIndex={0}
        >
          {/* Close Button */}
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 z-50 w-12 h-12 flex items-center justify-center text-white hover:bg-white/10 transition-colors"
            aria-label="Close gallery"
          >
            <X className="w-8 h-8" />
          </button>

          {/* Previous Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              goToPrevious();
            }}
            className="absolute left-4 z-50 w-12 h-12 flex items-center justify-center text-white hover:bg-white/10 transition-colors"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-8 h-8" />
          </button>

          {/* Next Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              goToNext();
            }}
            className="absolute right-4 z-50 w-12 h-12 flex items-center justify-center text-white hover:bg-white/10 transition-colors"
            aria-label="Next image"
          >
            <ChevronRight className="w-8 h-8" />
          </button>

          {/* Main Image */}
          <div
            className="relative w-full h-full max-w-5xl max-h-[70vh] mx-4"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={galleryImages[currentIndex].src}
              alt={galleryImages[currentIndex].alt}
              fill
              className="object-contain"
              priority
            />
          </div>

          {/* Excursion Link */}
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-50">
            <Link
              href={`/${galleryImages[currentIndex].categoryPath}/${galleryImages[currentIndex].slug}`}
              className="flex items-center gap-2 text-white hover:underline"
              onClick={(e) => e.stopPropagation()}
            >
              <span>{galleryImages[currentIndex].title}</span>
              <ExternalLink className="w-4 h-4" />
            </Link>
          </div>

          {/* Image Counter */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white text-sm bg-black/50 px-4 py-2 ">
            {currentIndex + 1} / {galleryImages.length}
          </div>

          {/* Thumbnails */}
          <div className="absolute bottom-16 left-1/2 -translate-x-1/2 flex gap-2 overflow-x-auto max-w-[90vw] pb-2 scrollbar-hide">
            {galleryImages.map((image, index) => (
              <button
                key={index}
                onClick={(e) => {
                  e.stopPropagation();
                  setCurrentIndex(index);
                }}
                className={`relative w-16 h-16 flex-shrink-0 overflow-hidden transition-all ${
                  currentIndex === index
                    ? "ring-2 ring-white opacity-100"
                    : "opacity-50 hover:opacity-75"
                }`}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover"
                />
              </button>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
