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
          textMovement: 150, // 🎛️ Píxeles que sube el texto en mobile
          jumpersMovement: 150, // 🎛️ Píxeles que bajan las personas en mobile (ajusta aquí: 0-200)
          mountainStartScroll: 5, // 🎛️ Cuándo aparece la montaña en mobile
          mountainSpeed: 0.15, // 🎛️ Velocidad de subida de la montaña en mobile
        },
        desktop: {
          textMovement: 250, // 🎛️ Píxeles que sube el texto en desktop
          jumpersMovement: 5, // 🎛️ Píxeles que bajan las personas en desktop (ajusta aquí: 0-300)
          mountainStartScroll: 5, // 🎛️ Cuándo aparece la montaña en desktop
          mountainSpeed: 0.18, // 🎛️ Velocidad de subida de la montaña en desktop
        },
      };

      const currentConfig = isMobile ? config.mobile : config.desktop;

      // 🎛️ TEXTO: Sube y se detiene (sin fade, sin escala)
      if (textRef.current) {
        const textY = Math.min(scrollY, currentConfig.textMovement);
        textRef.current.style.transform = `translateY(-${textY}px)`;
        textRef.current.style.opacity = "1"; // Siempre visible, sin fade
      }

      // 🎛️ PERSONAS: Bajan y se detienen (sin fade, sin escala)
      if (jumpersRef.current) {
        const jumpersY = Math.min(scrollY, currentConfig.jumpersMovement);
        jumpersRef.current.style.transform = `translateY(${jumpersY}px)`;
      }

      // 🎛️ MONTAÑA: Sube desde abajo después de que texto/jumpers se fijen
      if (mountainRef.current) {
        const mountainScroll = Math.max(
          0,
          scrollY - currentConfig.mountainStartScroll
        );
        mountainRef.current.style.transform = `translateY(${
          100 - mountainScroll * currentConfig.mountainSpeed
        }vh)`;
      }

      // 🎛️ OCULTAR FONDO: Esconde la capa fixed cuando el parallax termina
      if (bgLayerRef.current) {
        const hideBackgroundAt = 800; // 🎛️ Ajusta cuándo se oculta el fondo (px de scroll)
        if (scrollY > hideBackgroundAt) {
          bgLayerRef.current.style.display = "none";
        } else {
          bgLayerRef.current.style.display = "block";
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll, { passive: true });
    handleScroll(); // Ejecutar una vez al inicio

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  return (
    <div className="relative w-full bg-black">
      {/* ============================================================
          SECCIÓN 1: PARALLAX HERO (fixed mientras haces scroll)
          ============================================================ */}
      <div
        ref={bgLayerRef}
        className="fixed top-0 left-0 w-full h-screen"
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

        {/* Texto - Empieza abajo del centro */}
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

        {/* Personas - Empiezan en la mitad superior de la pantalla */}
        <div
          ref={jumpersRef}
          className="absolute top-[15vh] md:top-[3vh] left-0 w-full h-[55vh] md:h-[85vh]"
        >
          {/* 🎛️ AJUSTA POSICIÓN INICIAL:
              - top-[Xvh]: Posición inicial en mobile (10vh = más arriba, 30vh = más abajo)
              - md:top-[Xvh]: Posición inicial en desktop
              Esta posición + jumpersMovement = posición final
          */}
          <Image
            src="/users-jumping.png"
            alt="Personas"
            fill
            priority
            className="object-contain z-9 object-bottom"
          />
        </div>
      </div>

      {/* ============================================================
          ESPACIADOR - Dale espacio al parallax para que funcione
          🎛️ AJUSTA: altura para controlar cuánto scroll necesitas
          ============================================================ */}
      <div className="relative h-[0vh] md:h-[40vh]" style={{ zIndex: 0 }} />

      {/* ============================================================
          SECCIÓN 2: MONTAÑA + TOP ACTIVITIES + RESTO DE CONTENIDO
          ============================================================ */}
      <div
        ref={mountainRef}
        className="relative w-full"
        style={{ transform: "translateY(50vh)", zIndex: 10 }}
      >
        {/* Montaña */}
        <div className="relative w-full h-[80vh]">
          {/* 🎛️ AJUSTA -mb-[10vh]: Compensa el pt-[10vh] de TopActivities para pegarlos */}
          <Image
            src="/mountain-bg.png"
            alt="Montaña"
            fill
            priority
            className="object-cover object-bottom"
          />
        </div>

        {/* Top Activities pegado a la montaña */}
        <TopActivitiesHome />

        {/* ============================================================
            RESTO DE SECCIONES - Ahora dentro del mismo contenedor
            ============================================================ */}
        <BannerTeamBuilding />
        <AllActivitiesCarousel />
        <WhyChoose />
        <BannerCertified />
        <BannerContact />
        <FaqsHome />
        <AdventureGallery />
      </div>
    </div>
  );
}
