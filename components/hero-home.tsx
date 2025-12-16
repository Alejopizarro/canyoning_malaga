"use client";

import { useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import TopActivitiesHome from "./top-activities-home";

export default function ParallaxHero() {
  const bgRef = useRef<HTMLDivElement>(null);
  const jumpersRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const mountainRef = useRef<HTMLDivElement>(null);

  // CÓMO AJUSTAR endY DE LA MONTAÑA:
  // - Si hay hueco entre montaña y TopActivitiesHome → hacer endY más negativo
  // - Si la montaña tapa TopActivitiesHome → hacer endY menos negativo
  //
  const CONFIG = {
    mobile: {
      maxScroll: 1.4, // 130vh
      breakpoint: 768,
      jumpers: {
        startY: -40,
        endY: -10,
        startScale: 1.3,
        endScale: 1.1,
      },
      text: {
        startY: 20,
        endY: -15,
      },
      mountain: {
        startY: 60,
        endY: -60, // AJUSTAR: más negativo si hay hueco
      },
    },
    desktop: {
      maxScroll: 1.5, // 250vh
      breakpoint: 768,
      jumpers: {
        startY: -5,
        endY: 10,
        startScale: 1.2,
        endScale: 0.9,
      },
      text: {
        startY: 20,
        endY: -25,
      },
      mountain: {
        startY: 180,
        endY: -80, // AJUSTAR: más negativo si hay hueco
      },
    },
  };

  const easeOutCubic = (t: number): number => 1 - Math.pow(1 - t, 3);
  const lerp = (start: number, end: number, progress: number): number =>
    start + (end - start) * progress;

  const handleScroll = useCallback(() => {
    const scrollY = window.scrollY;
    const windowHeight = window.innerHeight;
    const isMobile = window.innerWidth < CONFIG.mobile.breakpoint;

    const config = isMobile ? CONFIG.mobile : CONFIG.desktop;
    const maxScroll = windowHeight * config.maxScroll;

    const rawProgress = Math.min(scrollY / maxScroll, 1);
    const progress = easeOutCubic(rawProgress);

    // === FONDO ===
    if (bgRef.current) {
      const scale = lerp(1.1, 1, progress);
      bgRef.current.style.transform = `scale(${scale})`;
    }

    // === PERSONAS ===
    if (jumpersRef.current) {
      const { startY, endY, startScale, endScale } = config.jumpers;
      const jumpersProgress = Math.min(progress / 0.6, 1);
      const translateY = lerp(startY, endY, jumpersProgress);
      const scale = lerp(startScale, endScale, jumpersProgress);
      jumpersRef.current.style.transform = `scale(${scale}) translateY(${translateY}%)`;
    }

    // === TEXTO ===
    if (textRef.current) {
      const { startY, endY } = config.text;
      const textProgress = Math.min(progress / 0.6, 1);
      const translateY = lerp(startY, endY, textProgress);
      textRef.current.style.transform = `translateY(${translateY}%)`;
      textRef.current.style.opacity = "1";
    }

    // === MONTAÑA ===
    if (mountainRef.current) {
      const { startY, endY } = config.mountain;
      const mountainProgress = Math.min(Math.max((progress - 0.2) / 0.8, 0), 1);
      const translateY = lerp(startY, endY, mountainProgress);
      mountainRef.current.style.transform = `translateY(${translateY}%)`;
    }
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, [handleScroll]);

  return (
    <>
      <div className="parallax-wrapper">
        {/* ===== SECCIÓN HERO CON PARALLAX ===== */}
        <section className="parallax-hero">
          {/* Capa 0: Fondo gris que tapa todo al final */}
          <div className="layer layer-gray-bg" />

          {/* Capa 1: Fondo del cañón */}
          <div className="layer layer-background" ref={bgRef}>
            <Image
              src="/bg-home-mobile.png"
              alt="Fondo cañón"
              fill
              priority
              className="object-cover"
            />
          </div>

          {/* Capa 2: Texto */}
          <div className="layer layer-text" ref={textRef}>
            <h1 className="hero-title">
              <span className="title-line">Your Adventure</span>
              <span className="title-line">Begins Here!</span>
            </h1>
          </div>

          {/* Capa 3: Personas saltando */}
          <div className="layer layer-jumpers" ref={jumpersRef}>
            <Image
              src="/users-jumping.png"
              alt="Personas saltando"
              fill
              className="object-contain"
              priority
            />
          </div>

          {/* Capa 4: Montaña */}
          <div className="layer layer-mountain" ref={mountainRef}>
            <div className="mountain-image">
              <Image
                src="/mountain-bg.png"
                alt="Montaña primer plano"
                fill
                className="object-cover object-top"
                priority
              />
            </div>
          </div>
        </section>

        {/* Contenido después del hero - en el flujo normal */}
        <div className="content-after-hero">
          <TopActivitiesHome />
        </div>
      </div>

      <style jsx>{`
        .parallax-wrapper {
          position: relative;
        }

        .parallax-hero {
          position: relative;
          height: 130vh;
        }

        @media (min-width: 768px) {
          .parallax-hero {
            height: 150vh;
          }
        }

        /* Base para capas fixed */
        .layer {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          will-change: transform;
        }

        /* Capa 0: Fondo gris - siempre detrás de todo */
        .layer-gray-bg {
          height: 100vh;
          background: #f9f9f9;
          z-index: 0;
        }

        /* Capa 1: Fondo */
        .layer-background {
          height: 100vh;
          z-index: 1;
          transform: scale(1.1);
        }

        /* Capa 2: Texto */
        .layer-text {
          height: 100vh;
          z-index: 2;
          display: flex;
          align-items: center;
          justify-content: center;
          pointer-events: none;
          transform: translateY(20%);
          opacity: 1;
        }

        .hero-title {
          text-align: center;
          color: white;
          font-size: clamp(2.5rem, 10vw, 4rem);
          font-weight: 800;
          line-height: 1.1;
          text-shadow: 2px 4px 20px rgba(0, 0, 0, 0.5);
          padding: 0 1rem;
        }

        .title-line {
          display: block;
        }

        /* Capa 3: Personas */
        .layer-jumpers {
          top: auto;
          bottom: 0;
          height: 60vh;
          z-index: 3;
          transform: scale(1.3) translateY(-40%);
        }

        @media (min-width: 768px) {
          .layer-jumpers {
            height: 70vh;
            transform: scale(1.2) translateY(-5%);
          }
        }

        /* Capa 4: Montaña */
        .layer-mountain {
          top: auto;
          bottom: 0;
          height: 100vh;
          z-index: 4;
          pointer-events: none;
          transform: translateY(80%);
        }

        @media (min-width: 768px) {
          .layer-mountain {
            transform: translateY(110%);
          }
        }

        .mountain-image {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 80%;
          filter: drop-shadow(0 -4px 12px rgba(0, 0, 0, 0.4));
        }

        @media (min-width: 768px) {
          .mountain-image {
            height: 85%;
            filter: drop-shadow(0 -8px 16px rgba(0, 0, 0, 0.4));
          }
        }

        /* Contenido después del hero */
        .content-after-hero {
          position: relative;
          z-index: 5;
          background: #f9f9f9;
        }
      `}</style>
    </>
  );
}
