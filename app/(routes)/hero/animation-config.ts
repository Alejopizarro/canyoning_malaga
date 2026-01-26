// app/(routes)/hero/animation-config.ts

/**
 * Breakpoints alineados con Tailwind `md:` (768px).
 * Usados por gsap.matchMedia() en cada componente.
 */
export const BREAKPOINTS = {
  desktop: "(min-width: 768px)",
  mobile: "(max-width: 767px)",
} as const;
