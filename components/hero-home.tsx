"use client";

import Image from "next/image";
import TopActivitiesHome from "./top-activities-home";

export default function ParallaxHero() {
  return (
    <>
      <div className="parallax-wrapper">
        {/* ===== SECCIÓN HERO CON PARALLAX ===== */}
        <section className="parallax-hero">
          {/* Capa 1: Fondo del cañón (más lento) */}
          <div className="layer-background">
            <Image
              src="/background-parallax.png"
              alt="Fondo cañón"
              fill
              priority
              className="object-cover"
            />
          </div>

          {/* Capa 2: Personas saltando */}
          <div className="layer-jumpers">
            <Image
              src="/users-jumping.png"
              alt="Personas saltando"
              fill
              className="object-contain"
              priority
            />
          </div>

          {/* Capa 3: Texto "Your Adventure Begins Here!" */}
          <div className="layer-text">
            <h1 className="hero-title">
              <span className="title-line">Your Adventure</span>
              <span className="title-line">Begins Here!</span>
            </h1>
          </div>

          {/* Capa 4: Montaña */}
          <div className="layer-mountain-section">
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
          height: 250vh; /* Espacio extendido para el scroll */
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
          bottom: 5vh;
          left: 0;
          width: 100%;
          height: 70vh;
          z-index: 2;

          animation: jumpersAnimation linear;
          animation-timeline: scroll(root);
          animation-range: 0vh 250vh;
        }

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

        .hero-title {
          text-align: center;
          color: white;
          font-size: clamp(2.5rem, 8vw, 4rem);
          font-weight: 800;
          line-height: 1.1;
          text-shadow: 2px 4px 20px rgba(0, 0, 0, 0.5);
        }

        .title-line {
          display: block;
        }

        /* Capa 4: Montaña - sube desde abajo y sale por arriba */
        .layer-mountain-section {
          position: fixed;
          left: 0;
          width: 100%;
          height: 80vh;
          z-index: 4;
          pointer-events: none;
          filter: drop-shadow(-8px 0 12px rgba(0, 0, 0, 0.3))
            drop-shadow(8px 0 12px rgba(0, 0, 0, 0.3));

          animation: mountainSectionAnimation linear;
          animation-timeline: scroll(root);
          animation-range: 0vh 250vh;
        }

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
            bottom: 100vh; /* Sale completamente por arriba */
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

        /* ===== FALLBACKS ===== */
        @supports not (animation-timeline: scroll()) {
          .layer-background,
          .layer-jumpers,
          .layer-text,
          .layer-mountain {
            animation: none;
          }

          .layer-background {
            transform: scale(1);
          }

          .layer-jumpers {
            transform: scale(1);
          }

          .layer-text {
            opacity: 1;
            transform: translateY(0);
          }

          .layer-mountain-section {
            bottom: -40vh;
          }
        }
      `}</style>
    </>
  );
}
