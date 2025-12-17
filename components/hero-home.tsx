"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import TopActivitiesHome from "./top-activities-home";
import BannerTeamBuilding from "./banner-team-building";
import AllActivitiesCarousel from "./all-activities";
import WhyChoose from "./why-choose";
import BannerCertified from "./banner-certified";
import BannerContact from "./banner-contact";
import FaqsHome from "./faqs-home";
import AdventureGallery from "./adventure-gallery";
import ProfessionalGuides from "./professional-guides";

export default function ParallaxHero() {
  const textRef = useRef<HTMLDivElement>(null);
  const jumpersRef = useRef<HTMLDivElement>(null);
  const mountainRef = useRef<HTMLDivElement>(null);
  const bgLayerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const isMobile = window.innerWidth < 768;

      // 🎛️ CONFIGURACIÓN POR DISPOSITIVO
      const config = {
        mobile: {
          textMovement: 150,
          jumpersMovement: 150,
          parallaxDuration: 600, // 🎛️ Duración total del efecto parallax en px
        },
        desktop: {
          textMovement: 150,
          jumpersMovement: 150,
          parallaxDuration: 800, // 🎛️ Duración total del efecto parallax en px
        },
      };

      const currentConfig = isMobile ? config.mobile : config.desktop;

      // Progreso del parallax (0 a 1)
      const progress = Math.min(scrollY / currentConfig.parallaxDuration, 1);

      // 🎛️ TEXTO: Sube
      if (textRef.current) {
        const textY = Math.min(scrollY, currentConfig.textMovement);
        textRef.current.style.transform = `translateY(-${textY}px)`;
      }

      // 🎛️ PERSONAS: Bajan
      if (jumpersRef.current) {
        const jumpersY = Math.min(scrollY, currentConfig.jumpersMovement);
        jumpersRef.current.style.transform = `translateY(${jumpersY}px)`;
      }

      // 🎛️ MONTAÑA: Sube usando margin-top negativo
      if (mountainRef.current) {
        // Empieza en 100vh abajo, termina en 0
        const mountainOffset = (1 - progress) * 100;
        mountainRef.current.style.marginTop = `-${100 - mountainOffset}vh`;
        mountainRef.current.style.transform = `translateY(${mountainOffset}vh)`;
      }

      // 🎛️ OCULTAR FONDO cuando el parallax termina
      if (bgLayerRef.current) {
        bgLayerRef.current.style.opacity = progress >= 1 ? "0" : "1";
        bgLayerRef.current.style.pointerEvents =
          progress >= 1 ? "none" : "auto";
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  return (
    <div className="relative w-full">
      {/* ============================================================
          SECCIÓN 1: PARALLAX HERO (fixed)
          ============================================================ */}
      <div
        ref={bgLayerRef}
        className="fixed top-0 left-0 w-full h-screen transition-opacity duration-300"
        style={{ zIndex: 1 }}
      >
        {/* Fondo */}
        <div className="absolute inset-0">
          <Image
            src="/bg-home-mobile.png"
            alt="Fondo"
            fill
            priority
            className="object-cover"
          />
        </div>

        {/* Texto */}
        <div
          ref={textRef}
          className="absolute inset-0 flex items-end justify-center pb-[15vh]"
        >
          <h1
            className="text-center text-white font-extrabold leading-tight px-4"
            style={{
              fontSize: "clamp(4rem, 10vw, 5rem)",
              textShadow: "2px 4px 20px rgba(0,0,0,0.5)",
            }}
          >
            <span className="block">Your Adventure</span>
            <span className="block relative z-10">Begins Here!</span>
          </h1>
        </div>

        {/* Personas */}
        <div
          ref={jumpersRef}
          className="absolute top-[15vh] md:top-[3vh] left-0 w-full h-[55vh] md:h-[85vh]"
        >
          <Image
            src="/users-jumping.png"
            alt="Personas"
            fill
            priority
            className="object-contain object-bottom"
          />
        </div>
      </div>

      {/* ============================================================
          ESPACIADOR - Espacio para el efecto parallax
          ============================================================ */}
      <div
        className="relative h-[600px] md:h-[800px]"
        style={{ zIndex: 0 }}
        aria-hidden="true"
      />

      {/* ============================================================
          SECCIÓN 2: MONTAÑA + CONTENIDO
          ============================================================ */}
      <div ref={mountainRef} className="relative w-full" style={{ zIndex: 10 }}>
        {/* Montaña */}
        <div className="relative w-full h-[80vh]">
          <Image
            src="/mountain-bg.png"
            alt="Montaña"
            fill
            priority
            className="object-cover object-bottom"
          />
        </div>

        {/* Contenido */}
        <TopActivitiesHome />
        <BannerTeamBuilding />
        <AllActivitiesCarousel />
        <WhyChoose />
        <BannerCertified />
        <ProfessionalGuides />
        <BannerContact />
        <FaqsHome />
        <AdventureGallery />
      </div>
    </div>
  );
}
