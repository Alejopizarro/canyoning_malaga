import { CookiePreferences } from "@/context/cookie-context";

// Constantes
export const COOKIE_CONSENT_KEY = "tuur_cookie_consent";
export const CONSENT_DURATION_DAYS = 365; // 12 meses

// Tipos
export interface CookieConsent {
  preferences: CookiePreferences;
  timestamp: number;
  version: string;
  expiresAt: number;
}

// Información de cada categoría de cookies
export interface CookieCategoryInfo {
  id: keyof CookiePreferences;
  name: string;
  description: string;
  required: boolean;
  cookies: CookieInfo[];
}

export interface CookieInfo {
  name: string;
  provider: string;
  purpose: string;
  expiry: string;
}

// Definición de categorías y sus cookies
export const cookieCategories: CookieCategoryInfo[] = [
  {
    id: "necessary",
    name: "Necessary",
    description:
      "These cookies are essential for the website to function properly. They enable basic functions like page navigation and access to secure areas. The website cannot function properly without these cookies.",
    required: true,
    cookies: [
      {
        name: "tuur_cookie_consent",
        provider: "TUUR Adventure",
        purpose: "Stores your cookie consent preferences",
        expiry: "12 months",
      },
    ],
  },
  {
    id: "analytics",
    name: "Analytics",
    description:
      "These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously. This helps us improve our website and your experience.",
    required: false,
    cookies: [
      {
        name: "_ga, _ga_*",
        provider: "Google Analytics",
        purpose: "Used to distinguish users and track site usage",
        expiry: "2 years",
      },
      {
        name: "_gid",
        provider: "Google Analytics",
        purpose: "Used to distinguish users",
        expiry: "24 hours",
      },
      {
        name: "_gat",
        provider: "Google Analytics",
        purpose: "Used to throttle request rate",
        expiry: "1 minute",
      },
    ],
  },
  {
    id: "marketing",
    name: "Marketing",
    description:
      "These cookies are used to track visitors across websites to display relevant advertisements. They help us measure the effectiveness of our advertising campaigns.",
    required: false,
    cookies: [
      {
        name: "_gcl_au",
        provider: "Google Ads",
        purpose: "Used for conversion tracking and ad personalization",
        expiry: "90 days",
      },
      {
        name: "IDE, DSID",
        provider: "Google DoubleClick",
        purpose: "Used for targeted advertising",
        expiry: "1 year",
      },
    ],
  },
  {
    id: "functional",
    name: "Functional",
    description:
      "These cookies enable enhanced functionality and personalization, such as remembering your preferences, language settings, and providing a more personalized experience.",
    required: false,
    cookies: [
      {
        name: "language_preference",
        provider: "TUUR Adventure",
        purpose: "Remembers your language preference",
        expiry: "12 months",
      },
    ],
  },
];

// Funciones de localStorage
export function getStoredConsent(): CookieConsent | null {
  if (typeof window === "undefined") return null;

  try {
    const stored = localStorage.getItem(COOKIE_CONSENT_KEY);
    if (!stored) return null;

    const consent: CookieConsent = JSON.parse(stored);
    return consent;
  } catch (error) {
    console.error("Error reading cookie consent:", error);
    return null;
  }
}

export function saveConsent(consent: CookieConsent): void {
  if (typeof window === "undefined") return;

  try {
    localStorage.setItem(COOKIE_CONSENT_KEY, JSON.stringify(consent));
  } catch (error) {
    console.error("Error saving cookie consent:", error);
  }
}

export function clearConsent(): void {
  if (typeof window === "undefined") return;

  try {
    localStorage.removeItem(COOKIE_CONSENT_KEY);
  } catch (error) {
    console.error("Error clearing cookie consent:", error);
  }
}

export function hasConsentExpired(consent: CookieConsent): boolean {
  return Date.now() > consent.expiresAt;
}

// Helper para verificar si un script puede cargarse
export function canLoadScript(
  category: keyof CookiePreferences,
  consent: CookieConsent | null,
): boolean {
  if (category === "necessary") return true;
  if (!consent) return false;
  return consent.preferences[category] === true;
}

// Función para eliminar cookies de una categoría
export function deleteCookiesByCategory(
  category: keyof CookiePreferences,
): void {
  if (typeof document === "undefined") return;

  const categoryInfo = cookieCategories.find((c) => c.id === category);
  if (!categoryInfo) return;

  categoryInfo.cookies.forEach((cookie) => {
    // Eliminar la cookie estableciendo una fecha de expiración pasada
    const cookieNames = cookie.name.split(", ");
    cookieNames.forEach((name) => {
      // Manejar wildcards como _ga_*
      if (name.includes("*")) {
        const prefix = name.replace("*", "");
        document.cookie.split(";").forEach((c) => {
          const cookieName = c.split("=")[0].trim();
          if (cookieName.startsWith(prefix)) {
            deleteCookie(cookieName);
          }
        });
      } else {
        deleteCookie(name);
      }
    });
  });
}

function deleteCookie(name: string): void {
  // Intentar eliminar para diferentes paths y dominios
  const paths = ["/", ""];
  const domains = [
    window.location.hostname,
    "." + window.location.hostname,
    "",
  ];

  paths.forEach((path) => {
    domains.forEach((domain) => {
      let cookieString = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=${path}`;
      if (domain) {
        cookieString += `; domain=${domain}`;
      }
      document.cookie = cookieString;
    });
  });
}

// Variables de entorno helper
export const analyticsConfig = {
  GA_MEASUREMENT_ID: process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || "",
  GTM_ID: process.env.NEXT_PUBLIC_GTM_ID || "",
  GOOGLE_ADS_ID: process.env.NEXT_PUBLIC_GOOGLE_ADS_ID || "",
};

export function isAnalyticsConfigured(): boolean {
  return !!(analyticsConfig.GA_MEASUREMENT_ID || analyticsConfig.GTM_ID);
}

export function isMarketingConfigured(): boolean {
  return !!analyticsConfig.GOOGLE_ADS_ID;
}
