"use client";

import Image from "next/image";
import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { BREAKPOINTS } from "../animation-config";

gsap.registerPlugin(ScrollTrigger);

// ═══════════════════════════════════════════════════════════════════
// CONTROLADOR DE ETAPAS DE LA NUBE IZQUIERDA
// ═══════════════════════════════════════════════════════════════════
const CLOUD_LEFT_STAGES = {
  desktop: {
    initial: {
      x: "-50%",
      opacity: 0,
    },
    phase1: {
      x: "0%",
      yPercent: 10,
      scale: 1.5,
      opacity: 1,
      duration: 5,
      ease: "power2.out",
    },
    phase2: {
      x: "-10%",
      yPercent: -25,
      scale: 1.8,
      opacity: 0.8,
      duration: 5,
      ease: "power2.inOut",
    },
  },
  mobile: {
    initial: {
      x: "-30%",
      opacity: 0,
    },
    phase1: {
      x: "0%",
      yPercent: -1,
      scale: 1.2,
      opacity: 1,
      duration: 5,
      ease: "sine.inOut",
    },
    phase2: {
      x: "-5%",
      yPercent: -3,
      scale: 1.4,
      opacity: 0.8,
      duration: 5,
      ease: "power2.inOut",
    },
  },
};

export default function CloudLeftLayer() {
  const cloudRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mm = gsap.matchMedia();

    const setup = (stages: typeof CLOUD_LEFT_STAGES.desktop) => {
      gsap.set(cloudRef.current, stages.initial);

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".parallax-container",
          start: "top top",
          end: "bottom bottom",
          scrub: 4,
        },
      });

      tl
        // FASE 1: Entrada
        .to(cloudRef.current, stages.phase1)
        // FASE 2: Dispersión final
        .to(cloudRef.current, stages.phase2);
    };

    mm.add(BREAKPOINTS.desktop, () => setup(CLOUD_LEFT_STAGES.desktop));
    mm.add(BREAKPOINTS.mobile, () => setup(CLOUD_LEFT_STAGES.mobile));

    return () => mm.revert();
  }, []);

  return (
    <div
      ref={cloudRef}
      className="absolute left-0 -bottom-40  w-[70vh] h-[70vh] opacity-0 z-13"
    >
      <Image src="/nube.png" alt="Cloud left" fill className="object-contain" />
    </div>
  );
}
