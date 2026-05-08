"use client";

import Image from "next/image";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface DayCardSliderProps {
  day: string;
  icon: string;
  label: string;
  location: string;
  activities: string[];
  time: string;
  isNew: boolean;
  images: string[];
  className?: string;
}

export default function DayCardSlider({
  day,
  icon,
  label,
  location,
  activities,
  time,
  isNew,
  images,
  className = "",
}: DayCardSliderProps) {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c - 1 + images.length) % images.length);
  const next = () => setCurrent((c) => (c + 1) % images.length);

  return (
    <div
      className={`bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden flex flex-col ${className}`}
    >
      {/* Image slider */}
      {images.length > 0 && (
        <div className="relative aspect-video overflow-hidden bg-gray-200">
          {images.map((src, i) => (
            <div
              key={src}
              className={`absolute inset-0 transition-opacity duration-400 ${
                i === current ? "opacity-100" : "opacity-0"
              }`}
            >
              <Image
                src={src}
                alt={`${label} — foto ${i + 1}`}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                priority={i === 0}
              />
            </div>
          ))}

          {/* ¡NUEVO! badge */}
          {isNew && (
            <span className="absolute top-3 left-3 z-10 bg-[#C8A84B] text-white text-xs font-bold px-2.5 py-1 rounded-full shadow">
              ¡NUEVO!
            </span>
          )}

          {/* Navigation arrows */}
          {images.length > 1 && (
            <>
              <button
                onClick={prev}
                aria-label="Imagen anterior"
                className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-black/40 hover:bg-black/65 text-white rounded-full p-1.5 transition-colors"
              >
                <ChevronLeft size={14} />
              </button>
              <button
                onClick={next}
                aria-label="Siguiente imagen"
                className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-black/40 hover:bg-black/65 text-white rounded-full p-1.5 transition-colors"
              >
                <ChevronRight size={14} />
              </button>

              {/* Dot indicators */}
              <div className="absolute bottom-2.5 left-0 right-0 flex justify-center gap-1.5 z-10">
                {images.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrent(i)}
                    aria-label={`Ir a imagen ${i + 1}`}
                    className={`w-1.5 h-1.5 rounded-full transition-all ${
                      i === current
                        ? "bg-white scale-125"
                        : "bg-white/55 hover:bg-white/80"
                    }`}
                  />
                ))}
              </div>

              {/* Counter */}
              <span className="absolute top-3 right-3 z-10 bg-black/40 text-white text-xs px-2 py-0.5 rounded-full">
                {current + 1} / {images.length}
              </span>
            </>
          )}
        </div>
      )}

      {/* Card body */}
      <div className="p-5 flex flex-col gap-3 flex-1">
        <div className="flex items-start justify-between gap-2">
          <div>
            <p className="text-xs font-semibold text-[#008e8a] uppercase tracking-wide">
              {day}
            </p>
            <div className="flex items-center gap-2 mt-1">
              <h3 className="font-bold text-gray-900">{label}</h3>
            </div>
          </div>
          {/* Badge for cards without images */}
          {images.length === 0 && isNew && (
            <span className="shrink-0 bg-[#C8A84B] text-white text-xs font-bold px-2 py-0.5 rounded-full">
              ¡NUEVO!
            </span>
          )}
        </div>

        <p className="text-sm text-gray-700 font-semibold flex items-center gap-1.5">
          <span>📍</span>
          {location}
        </p>

        <ul className="space-y-1">
          {activities.map((act) =>
            act.startsWith("📍") ? (
              <li key={act} className="text-sm text-gray-700 font-semibold pt-1">
                {act}
              </li>
            ) : (
              <li
                key={act}
                className="text-sm text-gray-500 flex items-start gap-1.5"
              >
                <span className="text-[#008e8a] font-bold mt-0.5 shrink-0">
                  ·
                </span>
                {act}
              </li>
            ),
          )}
        </ul>

        <p className="text-xs text-gray-400 mt-auto pt-2 border-t border-gray-100">
          ⏰ {time}
        </p>
      </div>
    </div>
  );
}
