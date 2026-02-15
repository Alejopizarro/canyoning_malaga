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
  desktopXL: {
    initial: {
      opacity: 0,
    },
    phase1: {
      yPercent: -20,
      opacity: 1,
      duration: 5,
      scale: 1.2,
      ease: "power2.out",
    },
    phase2: {
      scale: 1.8,
      duration: 5,
      opacity: 0.8,
      yPercent: -70,
      ease: "power2.inOut",
    },
  },
  desktop: {
    initial: {
      opacity: 0,
    },
    phase1: {
      yPercent: 0,
      opacity: 0,
      duration: 5,
      scale: 0.8,
      ease: "power2.out",
    },
    phase2: {
      scale: 1.2,
      duration: 5,
      opacity: 0.7,
      yPercent: -30,
      ease: "power2.inOut",
    },
  },
  mobile: {
    initial: {
      opacity: 0,
    },
    phase1: {
      yPercent: 0,
      opacity: 0,
      duration: 5,
      scale: 0.8,
      ease: "power2.out",
    },
    phase2: {
      scale: 1.2,
      duration: 5,
      opacity: 0.8,
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
          scrub: 4,
        },
      });

      tl
        // FASE 1: Entrada
        .to(cloudRef.current, stages.phase1)
        // FASE 2: Dispersión final
        .to(cloudRef.current, stages.phase2);
    };

    mm.add(BREAKPOINTS.desktopXL, () => setup(CLOUD_BOTTOM_STAGES.desktopXL));
    mm.add(BREAKPOINTS.desktop, () => setup(CLOUD_BOTTOM_STAGES.desktop));
    mm.add(BREAKPOINTS.mobile, () => setup(CLOUD_BOTTOM_STAGES.mobile));

    return () => mm.revert();
  }, []);

  return (
    <div
      ref={cloudRef}
      className="absolute bottom-0 translate-y-[60%] left-0 w-full h-[50vh] z-30 flex"
    >
      {/* Nube izquierda */}
      <div className="relative w-1/2 h-full overflow-hidden">
        <Image
          src="/nube.png"
          alt="Cloud bottom left"
          fill
          className="object-cover object-right"
          style={{ transform: "scaleY(-1)" }}
        />
      </div>
      {/* Nube derecha (espejada horizontalmente) */}
      <div className="relative w-1/2 h-full overflow-hidden">
        <Image
          src="/nube.png"
          alt="Cloud bottom right"
          fill
          className="object-cover object-left"
          style={{ transform: "scale(-1, -1)" }}
        />
      </div>
    </div>
  );
}
