// components/home/parallax/BackgroundLayer.tsx
"use client";

import Image from "next/image";
import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { BREAKPOINTS } from "../animation-config";

gsap.registerPlugin(ScrollTrigger);

// ═══════════════════════════════════════════════════════════════════
// CONTROLADOR DE ETAPAS DEL BARRANCO
// ═══════════════════════════════════════════════════════════════════
const BARRANCO_STAGES = {
  desktop: {
    initial: {
      scale: 1,
      opacity: 1,
    },
    phase1: {
      scale: 1.2,
      opacity: 0.8,
      duration: 1,
      ease: "power2.inOut",
    },
  },
  mobile: {
    initial: {
      scale: 1,
      opacity: 1,
    },
    phase1: {
      scale: 1.2,
      opacity: 0.85,
      duration: 0.7,
      ease: "power2.inOut",
    },
  },
};

// ═══════════════════════════════════════════════════════════════════
// CONTROLADOR DE ETAPAS DE LA MONTAÑA
// ═══════════════════════════════════════════════════════════════════
const MONTANA_STAGES = {
  desktop: {
    initial: {
      opacity: 1,
    },
    phase1: {
      opacity: 0,
      duration: 1,
      ease: "power2.in",
    },
  },
  mobile: {
    initial: {
      opacity: 1,
    },
    phase1: {
      opacity: 0,
      duration: 1,
      ease: "power2.in",
    },
  },
};

export default function BackgroundLayer() {
  const barrancoRef = useRef<HTMLDivElement>(null);
  const montanaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mm = gsap.matchMedia();

    const setup = (
      barrancoCfg: typeof BARRANCO_STAGES.desktop,
      montanaCfg: typeof MONTANA_STAGES.desktop,
    ) => {
      // ═══════════════════════════════════════════════════
      // TIMELINE PARA BARRANCO
      // ═══════════════════════════════════════════════════
      gsap.set(barrancoRef.current, barrancoCfg.initial);

      const tlBarranco = gsap.timeline({
        scrollTrigger: {
          trigger: ".parallax-container",
          start: "top top",
          end: "20% bottom",
          scrub: 2,
        },
      });

      tlBarranco.to(barrancoRef.current, barrancoCfg.phase1);

      // ═══════════════════════════════════════════════════
      // TIMELINE PARA MONTAÑA (trigger diferente)
      // ═══════════════════════════════════════════════════
      gsap.set(montanaRef.current, montanaCfg.initial);

      const tlMontana = gsap.timeline({
        scrollTrigger: {
          trigger: "#top-activities",
          start: "top top",
          end: "50% bottom",
          scrub: 2,
        },
      });

      tlMontana.to(montanaRef.current, montanaCfg.phase1);
    };

    mm.add(BREAKPOINTS.desktop, () =>
      setup(BARRANCO_STAGES.desktop, MONTANA_STAGES.desktop),
    );
    mm.add(BREAKPOINTS.mobile, () =>
      setup(BARRANCO_STAGES.mobile, MONTANA_STAGES.mobile),
    );

    return () => mm.revert();
  }, []);

  return (
    <>
      {/* Fondo montañas - fixed, z-index más bajo, siempre visible */}
      <div ref={montanaRef} className="fixed inset-0 w-full h-full z-0">
        <Image
          src="/fondo-montaña-cielo.png"
          alt="Mountain background"
          fill
          className="object-cover"
        />
      </div>

      {/* Barranco - encima de la montaña */}
      <div
        ref={barrancoRef}
        className="absolute inset-0 w-full h-full z-10"
        style={{ transformOrigin: "center center" }}
      >
        <Image
          src="/barranco.png"
          alt="Canyon background"
          fill
          className="object-cover"
          priority
        />
      </div>
    </>
  );
}
