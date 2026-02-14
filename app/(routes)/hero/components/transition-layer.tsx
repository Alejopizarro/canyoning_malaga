// components/home/TransitionLayer.tsx
"use client";

import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { BREAKPOINTS } from "../animation-config";

gsap.registerPlugin(ScrollTrigger);

// ═══════════════════════════════════════════════════════════════════
// CONTROLADOR DE ETAPAS DE LA TRANSICIÓN
// ═══════════════════════════════════════════════════════════════════
const TRANSITION_STAGES = {
  desktopXL: {
    initial: {
      y: 0,
    },
    phase1: {
      duration: 0.3,
      ease: "power2.inOut",
    },
    phase2: {
      yPercent: -40,
      duration: 0.4,
      ease: "none",
    },
  },
  desktop: {
    initial: {
      y: 0,
    },
    phase1: {
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

export default function TransitionLayer() {
  const transitionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mm = gsap.matchMedia();

    const setup = (stages: typeof TRANSITION_STAGES.desktop) => {
      gsap.set(transitionRef.current, stages.initial);

      const tlPhase1 = gsap.timeline({
        scrollTrigger: {
          trigger: ".parallax-container",
          start: "top top",
          end: "bottom bottom",
          scrub: 1,
        },
      });

      tlPhase1.to(transitionRef.current, stages.phase1);

      const tlPhase2 = gsap.timeline({
        scrollTrigger: {
          trigger: "#top-activities",
          start: "top bottom",
          end: "top top",
          scrub: 1,
        },
      });

      tlPhase2.to(transitionRef.current, stages.phase2);
    };

    mm.add(BREAKPOINTS.desktopXL, () => setup(TRANSITION_STAGES.desktopXL));
    mm.add(BREAKPOINTS.desktop, () => setup(TRANSITION_STAGES.desktop));
    mm.add(BREAKPOINTS.mobile, () => setup(TRANSITION_STAGES.mobile));

    return () => mm.revert();
  }, []);

  return (
    <div
      ref={transitionRef}
      className="relative w-full h-[25vh] min-[1440px]:h-[50vh] -mt-[30vh] min-[1440px]:-mt-[50vh] z-15 pointer-events-none"
    >
      {/* Gradiente de transición: de transparente a #f9f9f9 */}
      <div
        className="absolute inset-0 w-full h-full"
        style={{
          background:
            "linear-gradient(to bottom, transparent 0%, #f9f9f9 50%, #f9f9f9 100%)",
        }}
      />
    </div>
  );
}
