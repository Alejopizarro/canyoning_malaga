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
  desktopXL: {
    initial: {
      y: 0,
      scale: 1,
      opacity: 1,
    },
    phase1: {
      scale: 1.4,
      yPercent: 40,
      opacity: 1,
      duration: 3,
      ease: "power2.outIn",
    },
    hold: {
      yPercent: 40,
      duration: 2,
      ease: "none",
    },
    phase2: {
      scale: 1.2,
      yPercent: -120,
      duration: 5,
      ease: "none",
    },
  },
  desktop: {
    initial: {
      y: 0,
      scale: 1,
      opacity: 1,
    },
    phase1: {
      scale: 1.4,
      yPercent: 40,
      opacity: 1,
      duration: 3,
      ease: "power2.outIn",
    },
    hold: {
      yPercent: 40,
      duration: 2,
      ease: "none",
    },
    phase2: {
      scale: 1.2,
      yPercent: -120,
      duration: 5,
      ease: "none",
    },
  },
  mobile: {
    initial: {
      y: -5,
      scale: 1,
      opacity: 1,
    },
    phase1: {
      scale: 1,
      opacity: 1,
      duration: 3,
      yPercent: 10,
      ease: "power2.inOut",
    },
    hold: {
      yPercent: -40,
      duration: 0,
      ease: "none",
    },
    phase2: {
      scale: 1,
      yPercent: -120,
      duration: 7,
      ease: "none",
    },
  },
};

// ═══════════════════════════════════════════════════════════════════
// CONTROLADOR DE ETAPAS DE TOP ACTIVITIES
// ═══════════════════════════════════════════════════════════════════
const TOP_ACTIVITIES_STAGES = {
  desktopXL: {
    initial: {
      y: 0,
    },
    phase1: {
      duration: 0.3,
      ease: "power2.inOut",
    },
    phase2: {
      duration: 0.4,
      ease: "none",
    },
  },
  desktop: {
    initial: {
      y: 0,
    },
    phase1: {
      // yPercent: -10,
      duration: 0.3,
      ease: "power2.inOut",
    },
    phase2: {
      // yPercent: -25,
      duration: 0.4,
      ease: "none",
    },
  },
  mobile: {
    initial: {
      y: 0,
    },
    phase1: {
      duration: 5,
      ease: "power2.inOut",
    },
    phase2: {
      // yPercent: -10,
      duration: 5,
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
      // TIMELINE PARA ROCA + GRADIENTE + TOP ACTIVITIES
      // ═══════════════════════════════════════════════════
      gsap.set(rockRef.current, rockCfg.initial);
      gsap.set(topGradientRef.current, { opacity: 0 });
      gsap.set("#top-activities", topActCfg.initial);

      const tlRock = gsap.timeline({
        scrollTrigger: {
          trigger: ".parallax-container",
          start: "top top",
          end: "bottom bottom",
          scrub: 4,
        },
      });

      tlRock
        // FASE 1: Roca, gradiente y top-activities en paralelo
        .to(rockRef.current, rockCfg.phase1, 0)
        .to(
          topGradientRef.current,
          {
            opacity: 1,
            duration: rockCfg.phase1.duration,
            ease: rockCfg.phase1.ease,
          },
          0,
        )
        .to("#top-activities", topActCfg.phase1, 0)
        // HOLD: Roca y gradiente quietos
        .to(rockRef.current, rockCfg.hold)
        .to(
          topGradientRef.current,
          {
            opacity: 1,
            duration: rockCfg.hold.duration,
            ease: rockCfg.hold.ease,
          },
          "<",
        )
        // FASE 2: Roca, gradiente y top-activities en paralelo
        .to(rockRef.current, rockCfg.phase2)
        .to(
          topGradientRef.current,
          {
            opacity: 1,
            duration: rockCfg.phase2.duration,
            ease: rockCfg.phase2.ease,
          },
          "<",
        )
        .to("#top-activities", topActCfg.phase2, "<");
    };

    mm.add(BREAKPOINTS.desktopXL, () =>
      setup(ROCK_STAGES.desktopXL, TOP_ACTIVITIES_STAGES.desktopXL),
    );
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
        className="absolute bottom-0 left-0 w-full h-[17vh] md:h-[25%] z-28"
        style={{ transformOrigin: "center bottom" }}
      >
        <Image
          src="/roca.png"
          alt="Rock"
          fill
          className="object-cover md:object-contain object-bottom"
          style={{ filter: "brightness(0.85)" }}
        />

        {/* Gradiente inferior - conecta con TopActivities */}
        <div
          className="absolute left-0 w-full pointer-events-none"
          ref={topGradientRef}
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
