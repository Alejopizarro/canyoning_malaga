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
  desktopXL: {
    initial: {
      scale: 1,
      opacity: 1,
    },
    phase1: {
      scale: 1.4,
      opacity: 1,
      duration: 3,
      ease: "power2.outIn",
    },
    phase2: {
      scale: 1.4,
      opacity: 1,
      duration: 7,
      ease: "none",
    },
  },
  desktop: {
    initial: {
      scale: 1,
      opacity: 1,
    },
    phase1: {
      scale: 1.4,
      opacity: 1,
      duration: 3,
      ease: "power2.outIn",
    },
    phase2: {
      scale: 1.4,
      opacity: 1,
      duration: 7,
      ease: "none",
    },
  },
  mobile: {
    initial: {
      scale: 1,
      opacity: 1,
    },
    phase1: {
      scale: 1.4,
      opacity: 1,
      duration: 5,
      ease: "power2.inOut",
    },
    phase2: {
      scale: 1.4,
      opacity: 1,
      duration: 5,
      ease: "none",
    },
  },
};

// ═══════════════════════════════════════════════════════════════════
// CONTROLADOR DE ETAPAS DE LA MONTAÑA
// ═══════════════════════════════════════════════════════════════════
const MONTANA_STAGES = {
  desktopXL: {
    initial: {
      opacity: 1,
    },
    phase1: {
      opacity: 1,
      duration: 1,
      ease: "none",
    },
    phase2: {
      opacity: 1,
      duration: 1,
      ease: "power2.in",
    },
  },
  desktop: {
    initial: {
      opacity: 1,
    },
    phase1: {
      opacity: 1,
      duration: 1,
      ease: "none",
    },
    phase2: {
      opacity: 1,
      duration: 1,
      ease: "power2.in",
    },
  },
  mobile: {
    initial: {
      opacity: 1,
    },
    phase1: {
      opacity: 1,
      duration: 1,
      ease: "none",
    },
    phase2: {
      opacity: 1,
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
          end: "bottom bottom",
          scrub: 4,
        },
      });

      tlBarranco
        .to(barrancoRef.current, barrancoCfg.phase1)
        .to(barrancoRef.current, barrancoCfg.phase2);

      // ═══════════════════════════════════════════════════
      // TIMELINE PARA MONTAÑA
      // ═══════════════════════════════════════════════════
      gsap.set(montanaRef.current, montanaCfg.initial);

      const tlMontana = gsap.timeline({
        scrollTrigger: {
          trigger: ".parallax-container",
          start: "top top",
          end: "bottom bottom",
          scrub: 4,
        },
      });

      tlMontana
        .to(montanaRef.current, montanaCfg.phase1)
        .to(montanaRef.current, montanaCfg.phase2);
    };

    mm.add(BREAKPOINTS.desktopXL, () =>
      setup(BARRANCO_STAGES.desktopXL, MONTANA_STAGES.desktopXL),
    );
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
