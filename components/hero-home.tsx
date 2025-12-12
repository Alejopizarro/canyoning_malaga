"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import TopActivitiesHome from "./top-activities-home";

export default function ParallaxHero() {
  const bgRef = useRef<HTMLDivElement>(null);
  const jumpersRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const mountainRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Detectar si el navegador soporta animation-timeline
    const supportsScrollTimeline = CSS.supports(
      "animation-timeline",
      "scroll()"
    );

    if (!supportsScrollTimeline) {
      // Fallback con JavaScript para navegadores que no soportan scroll-timeline (Safari/iOS)
      const handleScroll = () => {
        const scrollY = window.scrollY;
        const windowHeight = window.innerHeight;
        const isMobile = window.innerWidth < 768;
        const maxScroll = windowHeight * (isMobile ? 2 : 2.5); // 200vh mobile, 250vh desktop
        const progress = Math.min(scrollY / maxScroll, 1);

        // Background: scale de 1.1 a 1
        if (bgRef.current) {
          const scale = 1.1 - progress * 0.1;
          bgRef.current.style.transform = `scale(${scale})`;
        }

        // Jumpers: scale y translateY con valores diferentes para mobile
        if (jumpersRef.current) {
          let scale, translateY;
          if (isMobile) {
            // Versión mobile
            if (progress <= 0.2) {
              scale = 1 - (progress / 0.2) * 0.2;
              translateY = 0 + (progress / 0.2) * 5;
            } else {
              scale = 0.8;
              translateY = 5;
            }
          } else {
            // Versión desktop
            if (progress <= 0.2) {
              scale = 1.2 - (progress / 0.2) * 0.3;
              translateY = -5 + (progress / 0.2) * 15;
            } else {
              scale = 0.9;
              translateY = 10;
            }
          }
          jumpersRef.current.style.transform = `scale(${scale}) translateY(${translateY}%)`;
        }

        // Text: opacity y translateY con valores diferentes para mobile
        if (textRef.current) {
          let opacity, translateY;
          const textOffset = isMobile ? 10 : 20;
          const textEnd = isMobile ? -10 : -25;

          if (progress <= 0.2) {
            opacity = progress / 0.2;
            translateY = textOffset - (progress / 0.2) * (textOffset - textEnd);
          } else if (progress <= 0.6) {
            opacity = 1;
            translateY = textEnd;
          } else {
            opacity = 1 - (progress - 0.6) / 0.4;
            translateY = textEnd;
          }
          textRef.current.style.opacity = `${opacity}`;
          textRef.current.style.transform = `translateY(${translateY}%)`;
        }

        // Mountain: bottom position con valores diferentes para mobile
        if (mountainRef.current) {
          let bottom;
          const startPos = isMobile ? -50 : -80;
          const midPos = isMobile ? -20 : -40;
          const endPos = isMobile ? 10 : 0;

          if (progress <= 0.3) {
            bottom = startPos + (progress / 0.3) * (midPos - startPos);
          } else if (progress <= 0.6) {
            bottom = midPos + ((progress - 0.3) / 0.3) * (endPos - midPos);
          } else {
            bottom = endPos + ((progress - 0.6) / 0.4) * (100 - endPos);
          }
          mountainRef.current.style.bottom = `${bottom}vh`;
        }
      };

      window.addEventListener("scroll", handleScroll, { passive: true });
      handleScroll(); // Ejecutar una vez al cargar

      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, []);

  return (
    <>
      <div className="parallax-wrapper">
        {/* ===== SECCIÓN HERO CON PARALLAX ===== */}
        <section className="parallax-hero">
          {/* Capa 1: Fondo del cañón (más lento) */}
          <div className="layer-background" ref={bgRef}>
            <Image
              src="/bg-home-mobile.png"
              alt="Fondo cañón"
              fill
              priority
              className="object-cover"
            />
          </div>

          {/* Capa 2: Personas saltando */}
          <div className="layer-jumpers" ref={jumpersRef}>
            <Image
              src="/users-jumping.png"
              alt="Personas saltando"
              fill
              className="object-contain"
              priority
            />
          </div>

          {/* Capa 3: Texto "Your Adventure Begins Here!" */}
          <div className="layer-text" ref={textRef}>
            <h1 className="hero-title">
              <span className="title-line">Your Adventure</span>
              <span className="title-line">Begins Here!</span>
            </h1>
          </div>

          {/* Capa 4: Montaña */}
          <div className="layer-mountain-section" ref={mountainRef}>
            {/* Montaña - 70vh */}
            <div className="mountain-container">
              <Image
                src="/mountain-bg.png"
                alt="Montaña primer plano"
                fill
                className="object-cover object-top"
                priority
              />
              {/* Gradiente marrón en la parte inferior de la montaña */}
              <div className="mountain-gradient-bottom" />
            </div>
          </div>
        </section>
        <TopActivitiesHome />
      </div>

      <style jsx>{`
        .parallax-wrapper {
          position: relative;
        }

        /* ===== HERO SECTION ===== */
        .parallax-hero {
          position: relative;
          height: 150vh; /* Espacio reducido en mobile */
        }

        @media (min-width: 768px) {
          .parallax-hero {
            height: 250vh; /* Espacio extendido para el scroll en desktop */
          }
        }

        /* Capa 1: Fondo - se mueve lento */
        .layer-background {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100vh;
          z-index: 1;

          animation: bgParallax linear;
          animation-timeline: scroll(root);
          animation-range: 0vh 250vh;
        }

        @keyframes bgParallax {
          0% {
            transform: scale(1.1);
          }
          100% {
            transform: scale(1);
          }
        }

        /* Capa 2: Personas - bajan y se hacen pequeñas */
        .layer-jumpers {
          position: fixed;
          bottom: 0vh;
          left: 0;
          width: 100%;
          height: 70vh; /* Más pequeño en mobile */
          z-index: 2;

          animation: jumpersAnimation linear;
          animation-timeline: scroll(root);
          animation-range: 0vh 200vh;
        }

        @media (min-width: 768px) {
          .layer-jumpers {
            bottom: 5vh;
            height: 70vh; /* Más grande en desktop */
            animation-range: 0vh 250vh;
          }
        }

        @keyframes jumpersAnimation {
          0% {
            transform: scale(1.3) translateY(-30%);
          }
          20% {
            transform: scale(1) translateY(-10%);
          }
          60% {
            transform: scale(1) translateY(-10%);
          }
          100% {
            transform: scale(1) translateY(-10%);
          }
        }

        @media (min-width: 768px) {
          @keyframes jumpersAnimation {
            0% {
              transform: scale(1.2) translateY(-5%);
            }
            20% {
              transform: scale(0.9) translateY(10%);
            }
            60% {
              transform: scale(0.9) translateY(10%);
            }
            100% {
              transform: scale(0.9) translateY(10%);
            }
          }
        }

        /* Capa 3: Texto */
        .layer-text {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100vh;
          z-index: 3;
          display: flex;
          align-items: center;
          justify-content: center;
          pointer-events: none;

          animation: textAnimation linear;
          animation-timeline: scroll(root);
          animation-range: 0vh 250vh;
        }

        @keyframes textAnimation {
          0% {
            opacity: 0;
            transform: translateY(20%);
          }
          20% {
            opacity: 1;
            transform: translateY(-20%);
          }
          60% {
            opacity: 1;
            transform: translateY(-20%);
          }
          100% {
            opacity: 0;
            transform: translateY(-20%);
          }
        }

        @media (min-width: 768px) {
          @keyframes textAnimation {
            0% {
              opacity: 0;
              transform: translateY(20%);
            }
            20% {
              opacity: 1;
              transform: translateY(-25%);
            }
            60% {
              opacity: 1;
              transform: translateY(-25%);
            }
            100% {
              opacity: 0;
              transform: translateY(-25%);
            }
          }
        }

        .hero-title {
          text-align: center;
          color: white;
          font-size: clamp(3rem, 8vw, 4rem); /* Texto más pequeño en mobile */
          font-weight: 800;
          line-height: 1.1;
          text-shadow: 2px 4px 20px rgba(0, 0, 0, 0.5);
          padding: 0 1rem; /* Padding lateral en mobile */
        }

        @media (min-width: 768px) {
          .hero-title {
            font-size: clamp(2.5rem, 8vw, 4rem);
            padding: 0;
          }
        }

        .title-line {
          display: block;
        }

        /* Capa 4: Montaña - sube desde abajo y sale por arriba */
        .layer-mountain-section {
          position: fixed;
          left: 0;
          width: 100%;
          height: 80vh; /* Más pequeña en mobile */
          z-index: 4;
          pointer-events: none;
          filter: drop-shadow(-4px 0 8px rgba(0, 0, 0, 0.3))
            drop-shadow(4px 0 8px rgba(0, 0, 0, 0.3)); /* Sombra más sutil en mobile */

          animation: mountainSectionAnimation linear;
          animation-timeline: scroll(root);
          animation-range: 0vh 200vh;
        }

        @media (min-width: 768px) {
          .layer-mountain-section {
            height: 80vh; /* Más grande en desktop */
            filter: drop-shadow(-8px 0 12px rgba(0, 0, 0, 0.3))
              drop-shadow(8px 0 12px rgba(0, 0, 0, 0.3));
            animation-range: 0vh 250vh;
          }
        }

        @keyframes mountainSectionAnimation {
          0% {
            bottom: -50vh;
          }
          30% {
            bottom: -10vh;
          }
          60% {
            bottom: 30vh;
          }
          100% {
            bottom: 120vh; /* Sale completamente por arriba */
          }
        }

        @media (min-width: 768px) {
          @keyframes mountainSectionAnimation {
            0% {
              bottom: -80vh;
            }
            30% {
              bottom: -40vh;
            }
            60% {
              bottom: 0vh;
            }
            100% {
              bottom: 100vh;
            }
          }
        }

        /* Contenedor de la montaña - 70vh */
        .mountain-container {
          position: relative;
          width: 100%;
          height: 100%;
          flex-shrink: 0;
        }

        /* Gradiente marrón en la parte inferior de la montaña */
        .mountain-gradient-bottom {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 10%;
          background: linear-gradient(
            to bottom,
            transparent 0%,
            rgba(101, 67, 33, 0.3) 30%,
            rgba(101, 67, 33, 0.7) 70%,
            rgb(101, 67, 33) 100%
          );
          z-index: 1;
        }

        /* ===== FALLBACKS PARA NAVEGADORES SIN SOPORTE ===== */
        @supports not (animation-timeline: scroll()) {
          .layer-background,
          .layer-jumpers,
          .layer-text,
          .layer-mountain-section {
            animation: none;
          }

          /* Valores iniciales para mobile */
          .layer-background {
            transform: scale(1.1);
            will-change: transform;
          }

          .layer-jumpers {
            transform: scale(1.3) translateY(-30%);
            will-change: transform;
          }

          .layer-text {
            opacity: 0;
            transform: translateY(20%);
            will-change: opacity, transform;
          }

          .layer-mountain-section {
            bottom: -50vh;
            will-change: bottom;
          }

          /* Valores para desktop */
          @media (min-width: 768px) {
            .layer-jumpers {
              transform: scale(1.2) translateY(-5%);
            }

            .layer-mountain-section {
              bottom: -80vh;
            }
          }
        }
      `}</style>
    </>
  );
}
