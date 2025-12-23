/**
 * Detecta la estación del año actual en Europa
 * Las fechas están basadas en el hemisferio norte
 */

type Season = "spring" | "summer" | "autumn" | "winter";

interface SeasonInfo {
  season: Season;
  label: string;
  emoji: string;
}

const SEASONS: Record<Season, SeasonInfo> = {
  spring: {
    season: "spring",
    label: "Spring is here!",
    emoji: "🌸",
  },
  summer: {
    season: "summer",
    label: "Summer is here!",
    emoji: "☀️",
  },
  autumn: {
    season: "autumn",
    label: "Autumn is here!",
    emoji: "🍂",
  },
  winter: {
    season: "winter",
    label: "Winter is here!",
    emoji: "❄️",
  },
};

export function getCurrentSeason(): SeasonInfo {
  const now = new Date();
  const month = now.getMonth() + 1; // getMonth() devuelve 0-11
  const day = now.getDate();

  // Fechas aproximadas de las estaciones en Europa:
  // Primavera: 21 marzo - 20 junio
  // Verano: 21 junio - 22 septiembre
  // Otoño: 23 septiembre - 20 diciembre
  // Invierno: 21 diciembre - 20 marzo

  if (
    (month === 3 && day >= 21) ||
    month === 4 ||
    month === 5 ||
    (month === 6 && day <= 20)
  ) {
    return SEASONS.spring;
  }

  if (
    (month === 6 && day >= 21) ||
    month === 7 ||
    month === 8 ||
    (month === 9 && day <= 22)
  ) {
    return SEASONS.summer;
  }

  if (
    (month === 9 && day >= 23) ||
    month === 10 ||
    month === 11 ||
    (month === 12 && day <= 20)
  ) {
    return SEASONS.autumn;
  }

  // Invierno (resto del año)
  return SEASONS.winter;
}

export function getSeasonLabel(): string {
  return getCurrentSeason().label;
}
