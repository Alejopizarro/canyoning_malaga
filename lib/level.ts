import type { Excursion } from "./activities";

export type Level = Excursion["level"];

/** Difficulty label shown wherever an activity level is displayed. */
export function levelLabel(level: Level): string {
  if (level === "easy") return "All levels";
  return level.charAt(0).toUpperCase() + level.slice(1);
}
