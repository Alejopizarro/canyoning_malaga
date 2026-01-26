// components/home/parallax/CloudBottomLayer.tsx
"use client";

import Image from "next/image";
import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { BREAKPOINTS } from "../animation-config";

gsap.registerPlugin(ScrollTrigger);

// ═══════════════════════════════════════════════════════════════════
// CONTROLADOR DE ETAPAS DE LA NUBE INFERIOR
// ═══════════════════════════════════════════════════════════════════
const CLOUD_BOTTOM_STAGES = {
  desktop: {
    initial: {
      opacity: 0,
    },
    phase1: {
      y: "0%",
      opacity: 1,
      duration: 0.7,
      scale: 1,
      ease: "power2.out",
    },
    phase2: {
      scale: 2,
      duration: 1,
      opacity: 1,
      yPercent: -10,
      ease: "power2.inOut",
    },
  },
  mobile: {
    initial: {
      opacity: 0,
    },
    phase1: {
      y: "0%",
      opacity: 1,
      duration: 0.7,
      scale: 1,
      ease: "power2.out",
    },
    phase2: {
      scale: 1.5,
      duration: 1,
      opacity: 1,
      yPercent: -5,
      ease: "power2.inOut",
    },
  },
};

export default function CloudBottomLayer() {
  const cloudRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mm = gsap.matchMedia();

    const setup = (stages: typeof CLOUD_BOTTOM_STAGES.desktop) => {
      gsap.set(cloudRef.current, stages.initial);

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".parallax-container",
          start: "top top",
          end: "bottom bottom",
          scrub: 1,
        },
      });

      tl
        // FASE 1: Entrada
        .to(cloudRef.current, stages.phase1)
        // FASE 2: Dispersión final
        .to(cloudRef.current, stages.phase2);
    };

    mm.add(BREAKPOINTS.desktop, () => setup(CLOUD_BOTTOM_STAGES.desktop));
    mm.add(BREAKPOINTS.mobile, () => setup(CLOUD_BOTTOM_STAGES.mobile));

    return () => mm.revert();
  }, []);

  return (
    <div
      ref={cloudRef}
      className="absolute -bottom-120 md:-bottom-80 left-1/2 -translate-x-1/2 w-[200vh] h-[80vh] z-18"
    >
      <Image
        src="/nube.png"
        alt="Cloud bottom"
        fill
        className="object-contain w-[200vh] h-[80vh] z-19"
      />
    </div>
  );
}
