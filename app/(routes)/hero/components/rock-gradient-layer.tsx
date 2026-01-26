// components/home/parallax/RockGradientLayer.tsx
"use client";

import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { BREAKPOINTS } from "../animation-config";

gsap.registerPlugin(ScrollTrigger);

// ═══════════════════════════════════════════════════════════════════
// CONTROLADOR DE ETAPAS DE LA ROCA
// ═══════════════════════════════════════════════════════════════════
const ROCK_STAGES = {
  desktop: {
    initial: {
      y: 0,
      scale: 1,
      opacity: 1,
    },
    phase1: {
      scale: 1.5,
      opacity: 1,
      duration: 0.3,
      ease: "power2.inOut",
    },
    phase2: {
      scale: 1.5,
      yPercent: -100,
      duration: 0.4,
      ease: "none",
    },
  },
  mobile: {
    initial: {
      y: 0,
      scale: 1.2,
      opacity: 1,
    },
    phase1: {
      scale: 1,
      opacity: 1,
      duration: 0.3,
      yPercent: -20,
      ease: "power2.inOut",
    },
    phase2: {
      scale: 1,
      yPercent: -80,
      duration: 0.4,
      ease: "none",
    },
  },
};

// ═══════════════════════════════════════════════════════════════════
// CONTROLADOR DE ETAPAS DE TOP ACTIVITIES
// ═══════════════════════════════════════════════════════════════════
const TOP_ACTIVITIES_STAGES = {
  desktop: {
    initial: {
      y: 0,
    },
    phase1: {
      yPercent: -10,
      duration: 0.3,
      ease: "power2.inOut",
    },
    phase2: {
      yPercent: -25,
      duration: 0.4,
      ease: "none",
    },
  },
  mobile: {
    initial: {
      y: 0,
    },
    phase1: {
      yPercent: -5,
      duration: 0.3,
      ease: "power2.inOut",
    },
    phase2: {
      yPercent: -15,
      duration: 0.4,
      ease: "none",
    },
  },
};

export default function RockGradientLayer() {
  const topGradientRef = useRef<HTMLDivElement>(null);
  const rockRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mm = gsap.matchMedia();

    const setup = (
      rockCfg: typeof ROCK_STAGES.desktop,
      topActCfg: typeof TOP_ACTIVITIES_STAGES.desktop,
    ) => {
      // ═══════════════════════════════════════════════════
      // TIMELINE PARA GRADIENTE SUPERIOR
      // ═══════════════════════════════════════════════════
      gsap.set(topGradientRef.current, { opacity: 0 });

      const tlGradient = gsap.timeline({
        scrollTrigger: {
          trigger: ".parallax-container",
          start: "top top",
          end: "bottom bottom",
          scrub: 1,
        },
      });

      tlGradient
        .to(topGradientRef.current, {
          opacity: 1,
          duration: 0.3,
        })
        .to(topGradientRef.current, {
          opacity: 1,
          duration: 1,
          ease: "power2.inOut",
        });

      // ═══════════════════════════════════════════════════
      // FASE 1: Parallax container trigger
      // ═══════════════════════════════════════════════════
      gsap.set(rockRef.current, rockCfg.initial);
      gsap.set("#top-activities", topActCfg.initial);

      const tlParallaxPhase1 = gsap.timeline({
        scrollTrigger: {
          trigger: ".parallax-container",
          start: "top top",
          end: "bottom bottom",
          scrub: 1,
        },
      });

      tlParallaxPhase1
        .to(rockRef.current, rockCfg.phase1, 0)
        .to("#top-activities", topActCfg.phase1, 0);

      // ═══════════════════════════════════════════════════
      // FASE 2: Top activities trigger
      // ═══════════════════════════════════════════════════
      const tlPhase2 = gsap.timeline({
        scrollTrigger: {
          trigger: "#top-activities",
          start: "top bottom",
          end: "top top",
          scrub: 1,
        },
      });

      tlPhase2
        .to(rockRef.current, rockCfg.phase2, 0)
        .to("#top-activities", topActCfg.phase2, 0);
    };

    mm.add(BREAKPOINTS.desktop, () =>
      setup(ROCK_STAGES.desktop, TOP_ACTIVITIES_STAGES.desktop),
    );
    mm.add(BREAKPOINTS.mobile, () =>
      setup(ROCK_STAGES.mobile, TOP_ACTIVITIES_STAGES.mobile),
    );

    return () => mm.revert();
  }, []);

  return (
    <>
      {/* Gradiente superior - z-index bajo, detrás de nubes y roca */}
      <div
        ref={topGradientRef}
        className="absolute bottom-0 left-0 w-full h-[90vh] opacity-0 z-14"
        style={{
          background:
            "linear-gradient(to bottom, transparent 0%, transparent 60%, #f9f9f9 100%)",
        }}
      />

      {/* Roca - z-25 para estar SIEMPRE por encima de las nubes (z-18/z-19) */}
      <div
        ref={rockRef}
        className="absolute bottom-0 left-0 w-full h-[17vh] md:h-[25%] z-25"
        style={{ transformOrigin: "center bottom" }}
      >
        <Image
          src="/roca.png"
          alt="Rock"
          fill
          className="object-cover md:object-contain object-bottom"
        />

        {/* Gradiente inferior - conecta con TopActivities */}
        <div
          className="absolute left-0 w-full pointer-events-none"
          style={{
            bottom: "-30vh",
            height: "50vh",
            background:
              "linear-gradient(to bottom, transparent 0%, #f9f9f9 40%, #f9f9f9 80%)",
          }}
        />
      </div>
    </>
  );
}
