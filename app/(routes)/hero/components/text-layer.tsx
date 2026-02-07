// components/home/parallax/TextLayer.tsx
"use client";

import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { BREAKPOINTS } from "../animation-config";

gsap.registerPlugin(ScrollTrigger);

// ═══════════════════════════════════════════════════════════════════
// CONTROLADOR DE ETAPAS DEL TEXTO 1: "Your Next Adventure"
// ═══════════════════════════════════════════════════════════════════
const TEXT1_STAGES = {
  desktop: {
    initial: {
      y: 0,
      opacity: 1,
    },
    phase1: {
      y: -65,
      opacity: 1,
      duration: 0.2,
      ease: "power2.out",
    },
    phase2: {
      yPercent: -150,
      opacity: 1,
      duration: 0.5,
      ease: "power2.inOut",
    },
  },
  mobile: {
    initial: {
      y: 0,
      opacity: 1,
    },
    phase1: {
      y: -50,
      opacity: 1,
      duration: 3,
      ease: "power2.out",
    },
    phase2: {
      yPercent: -200,
      opacity: 1,
      duration: 1,
      ease: "power1.inOut",
    },
  },
};

// ═══════════════════════════════════════════════════════════════════
// CONTROLADOR DE ETAPAS DEL TEXTO 2: "Begins Here"
// ═══════════════════════════════════════════════════════════════════
const TEXT2_STAGES = {
  desktop: {
    initial: {
      y: 0,
      opacity: 0,
    },
    phase1: {
      y: 0,
      opacity: 1,
      duration: 0.3,
      ease: "sine.inOut",
    },
    phase2: {
      yPercent: -150,
      opacity: 1,
      duration: 0.7,
      ease: "power2.inOut",
    },
  },
  mobile: {
    initial: {
      y: 0,
      opacity: 0,
    },
    phase1: {
      y: 0,
      opacity: 1,
      duration: 3,
      ease: "sine.inOut",
    },
    phase2: {
      yPercent: -200,
      opacity: 1,
      duration: 1,
      ease: "power1.inOut",
    },
  },
};

export default function TextLayer() {
  const text1Ref = useRef<HTMLDivElement>(null);
  const text2Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mm = gsap.matchMedia();

    const setup = (
      text1Cfg: typeof TEXT1_STAGES.desktop,
      text2Cfg: typeof TEXT2_STAGES.desktop,
    ) => {
      // ═══════════════════════════════════════════════════
      // TIMELINE PARA TEXT1: "Your Next Adventure"
      // ═══════════════════════════════════════════════════
      gsap.set(text1Ref.current, text1Cfg.initial);

      const tl1 = gsap.timeline({
        scrollTrigger: {
          trigger: ".parallax-container",
          start: "top top",
          end: "bottom bottom",
          scrub: 4,
        },
      });

      tl1
        // FASE 1: Sube
        .to(text1Ref.current, text1Cfg.phase1)
        // FASE 2: Baja
        .to(text1Ref.current, text1Cfg.phase2);

      // ═══════════════════════════════════════════════════
      // TIMELINE PARA TEXT2: "Begins Here"
      // ═══════════════════════════════════════════════════
      gsap.set(text2Ref.current, text2Cfg.initial);

      const tl2 = gsap.timeline({
        scrollTrigger: {
          trigger: ".parallax-container",
          start: "top top",
          end: "bottom bottom",
          scrub: 4,
        },
      });

      tl2
        // FASE 1: Aparece
        .to(text2Ref.current, text2Cfg.phase1)
        // FASE 2: Baja un poco
        .to(text2Ref.current, text2Cfg.phase2);
    };

    mm.add(BREAKPOINTS.desktop, () =>
      setup(TEXT1_STAGES.desktop, TEXT2_STAGES.desktop),
    );
    mm.add(BREAKPOINTS.mobile, () =>
      setup(TEXT1_STAGES.mobile, TEXT2_STAGES.mobile),
    );

    return () => mm.revert();
  }, []);

  return (
    <>
      {/* ═══════════════════════════════════════════════════ */}
      {/* Texto inicial: "Your Next Adventure" */}
      {/* ═══════════════════════════════════════════════════ */}
      <div
        ref={text1Ref}
        className="absolute top-5/12 left-1/2 w-full max-w-[1280px] 2xl:max-w-[1440px] -translate-x-1/2 -translate-y-1/2 text-center z-11"
      >
        <h1
          className="font-extrabold leading-none text-white drop-shadow-2xl"
          style={{ fontSize: "clamp(4rem, 7vw, 10rem)" }}
        >
          Your Next Adventure
        </h1>
      </div>

      {/* ═══════════════════════════════════════════════════ */}
      {/* Texto medio: "Begins Here" */}
      {/* ═══════════════════════════════════════════════════ */}
      <div
        ref={text2Ref}
        className="absolute top-[46%] left-1/2 -translate-x-1/2 -translate-y-1/2 text-center opacity-0 z-12 md:w-full"
      >
        <p
          className="leading-none font-extrabold text-white drop-shadow-2xl"
          style={{ fontSize: "clamp(4rem, 7vw, 10rem)" }}
        >
          Begins Here
        </p>
      </div>
    </>
  );
}
