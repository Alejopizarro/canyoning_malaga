// components/home/parallax/PeopleLayer.tsx
"use client";

import Image from "next/image";
import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { BREAKPOINTS } from "../animation-config";

gsap.registerPlugin(ScrollTrigger);

// ═══════════════════════════════════════════════════════════════════
// CONTROLADOR DE ETAPAS DE LA PAREJA
// ═══════════════════════════════════════════════════════════════════
const PEOPLE_STAGES = {
  desktopXL: {
    initial: {
      width: "700vw",
      height: "700vh",
      top: "50%",
      left: "50%",
      xPercent: -50,
      yPercent: -50,
      opacity: 1,
    },
    phase1: {
      width: "60vw",
      height: "60vh",
      opacity: 1,
      duration: 5,
      ease: "power2.out",
    },
    phase2: {
      width: "40vw",
      height: "40vh",
      yPercent: 120,
      opacity: 1,
      duration: 5,
      ease: "sine.inOut",
    },
  },
  desktop: {
    initial: {
      width: "700vw",
      height: "700vh",
      top: "50%",
      left: "50%",
      xPercent: -50,
      yPercent: -50,
      opacity: 1,
    },
    phase1: {
      width: "60vw",
      height: "60vh",
      opacity: 1,
      duration: 5,
      ease: "power2.out",
    },
    phase2: {
      width: "40vw",
      height: "40vh",
      yPercent: 120,
      opacity: 1,
      duration: 5,
      ease: "sine.inOut",
    },
  },
  mobile: {
    initial: {
      width: "750vw",
      height: "750vh",
      top: "50%",
      left: "50%",
      xPercent: -50,
      yPercent: -50,
      opacity: 1,
    },
    phase1: {
      width: "90vw",
      height: "70vh",
      opacity: 1,
      duration: 5,
      ease: "sine.inOut",
    },
    phase2: {
      width: "80vw",
      height: "60vh",
      yPercent: 100,
      opacity: 1,
      duration: 5,
      ease: "sine.inOut",
    },
  },
};

export default function PeopleLayer() {
  const peopleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mm = gsap.matchMedia();

    const setup = (stages: typeof PEOPLE_STAGES.desktop) => {
      gsap.set(peopleRef.current, stages.initial);

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".parallax-container",
          start: "top top",
          end: "bottom bottom",
          scrub: 4,
        },
      });

      tl
        // FASE 1: De grande a tamaño medio
        .to(peopleRef.current, stages.phase1)
        // FASE 2: Ajuste al tamaño y posición final
        .to(peopleRef.current, stages.phase2);
    };

    mm.add(BREAKPOINTS.desktopXL, () => setup(PEOPLE_STAGES.desktopXL));
    mm.add(BREAKPOINTS.desktop, () => setup(PEOPLE_STAGES.desktop));
    mm.add(BREAKPOINTS.mobile, () => setup(PEOPLE_STAGES.mobile));

    return () => mm.revert();
  }, []);

  return (
    <div ref={peopleRef} className="absolute opacity-0 z-11">
      <Image
        src="/pareja-saltando.png"
        alt="People jumping"
        fill
        className="object-contain"
      />
    </div>
  );
}
