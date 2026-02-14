// app/(routes)/hero/animation-config.ts

/**
 * Breakpoints alineados con Tailwind `md:` (768px).
 * Usados por gsap.matchMedia() en cada componente.
 */
export const BREAKPOINTS = {
  desktopXL: "(min-width: 1440px)",
  desktop: "(min-width: 768px) and (max-width: 1439px)",
  mobile: "(max-width: 767px)",
} as const;
