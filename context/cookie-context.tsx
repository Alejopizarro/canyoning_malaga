"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
  useCallback,
} from "react";
import {
  CookieConsent,
  getStoredConsent,
  saveConsent,
  hasConsentExpired,
  CONSENT_DURATION_DAYS,
} from "@/lib/cookie-utils";

// Categorías de cookies disponibles
export type CookieCategory =
  | "necessary"
  | "analytics"
  | "marketing"
  | "functional";

export interface CookiePreferences {
  necessary: boolean; // Siempre true, no se puede desactivar
  analytics: boolean; // GA4, GTM
  marketing: boolean; // Google Ads
  functional: boolean; // Preferencias de usuario
}

interface CookieContextType {
  // Estado del consentimiento
  consent: CookieConsent | null;
  preferences: CookiePreferences;
  hasConsented: boolean;
  isLoading: boolean;

  // Banner visibility
  showBanner: boolean;
  setShowBanner: (show: boolean) => void;

  // Modal visibility
  showModal: boolean;
  setShowModal: (show: boolean) => void;

  // Acciones
  acceptAll: () => void;
  rejectAll: () => void;
  savePreferences: (preferences: CookiePreferences) => void;
  openSettings: () => void;

  // Helpers para verificar permisos
  hasAnalyticsConsent: () => boolean;
  hasMarketingConsent: () => boolean;
  hasFunctionalConsent: () => boolean;
}

const defaultPreferences: CookiePreferences = {
  necessary: true,
  analytics: false,
  marketing: false,
  functional: false,
};

const CookieContext = createContext<CookieContextType | undefined>(undefined);

interface CookieProviderProps {
  children: ReactNode;
}

export function CookieProvider({ children }: CookieProviderProps) {
  const [consent, setConsent] = useState<CookieConsent | null>(null);
  const [preferences, setPreferences] =
    useState<CookiePreferences>(defaultPreferences);
  const [isLoading, setIsLoading] = useState(true);
  const [showBanner, setShowBanner] = useState(false);
  const [showModal, setShowModal] = useState(false);

  // Cargar consentimiento almacenado al iniciar
  useEffect(() => {
    const storedConsent = getStoredConsent();

    if (storedConsent && !hasConsentExpired(storedConsent)) {
      setConsent(storedConsent);
      setPreferences(storedConsent.preferences);
      setShowBanner(false);
    } else {
      // No hay consentimiento válido, mostrar banner
      setShowBanner(true);
    }

    setIsLoading(false);
  }, []);

  // Efecto para cargar scripts cuando cambian las preferencias
  useEffect(() => {
    if (consent && !isLoading) {
      loadConsentedScripts(consent.preferences);
    }
  }, [consent, isLoading]);

  const loadConsentedScripts = (prefs: CookiePreferences) => {
    // Disparar evento personalizado para que otros componentes puedan reaccionar
    if (typeof window !== "undefined") {
      window.dispatchEvent(
        new CustomEvent("cookieConsentUpdated", {
          detail: prefs,
        }),
      );
    }
  };

  const createConsent = useCallback(
    (prefs: CookiePreferences): CookieConsent => {
      return {
        preferences: { ...prefs, necessary: true }, // Necessary siempre true
        timestamp: Date.now(),
        version: "1.0",
        expiresAt: Date.now() + CONSENT_DURATION_DAYS * 24 * 60 * 60 * 1000,
      };
    },
    [],
  );

  const acceptAll = useCallback(() => {
    const allAccepted: CookiePreferences = {
      necessary: true,
      analytics: true,
      marketing: true,
      functional: true,
    };

    const newConsent = createConsent(allAccepted);
    saveConsent(newConsent);
    setConsent(newConsent);
    setPreferences(allAccepted);
    setShowBanner(false);
    setShowModal(false);
  }, [createConsent]);

  const rejectAll = useCallback(() => {
    const allRejected: CookiePreferences = {
      necessary: true, // Siempre activas
      analytics: false,
      marketing: false,
      functional: false,
    };

    const newConsent = createConsent(allRejected);
    saveConsent(newConsent);
    setConsent(newConsent);
    setPreferences(allRejected);
    setShowBanner(false);
    setShowModal(false);
  }, [createConsent]);

  const savePreferences = useCallback(
    (newPreferences: CookiePreferences) => {
      const newConsent = createConsent(newPreferences);
      saveConsent(newConsent);
      setConsent(newConsent);
      setPreferences(newPreferences);
      setShowBanner(false);
      setShowModal(false);
    },
    [createConsent],
  );

  const openSettings = useCallback(() => {
    setShowModal(true);
    setShowBanner(false);
  }, []);

  const hasAnalyticsConsent = useCallback(() => {
    return consent?.preferences.analytics ?? false;
  }, [consent]);

  const hasMarketingConsent = useCallback(() => {
    return consent?.preferences.marketing ?? false;
  }, [consent]);

  const hasFunctionalConsent = useCallback(() => {
    return consent?.preferences.functional ?? false;
  }, [consent]);

  const value: CookieContextType = {
    consent,
    preferences,
    hasConsented: consent !== null,
    isLoading,
    showBanner,
    setShowBanner,
    showModal,
    setShowModal,
    acceptAll,
    rejectAll,
    savePreferences,
    openSettings,
    hasAnalyticsConsent,
    hasMarketingConsent,
    hasFunctionalConsent,
  };

  return (
    <CookieContext.Provider value={value}>{children}</CookieContext.Provider>
  );
}

export function useCookieConsent() {
  const context = useContext(CookieContext);
  if (context === undefined) {
    throw new Error("useCookieConsent must be used within a CookieProvider");
  }
  return context;
}
