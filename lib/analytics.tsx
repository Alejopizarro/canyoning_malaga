"use client";

import Script from "next/script";
import { useEffect, useState } from "react";
import { useCookieConsent } from "../context/cookie-context";
import { analyticsConfig } from "./cookie-utils";

export default function GoogleAnalytics() {
  const { hasAnalyticsConsent, consent } = useCookieConsent();
  const [shouldLoad, setShouldLoad] = useState(false);

  const GA_MEASUREMENT_ID = analyticsConfig.GA_MEASUREMENT_ID;

  useEffect(() => {
    // Solo cargar si hay consentimiento de analytics y tenemos el ID configurado
    if (hasAnalyticsConsent() && GA_MEASUREMENT_ID) {
      setShouldLoad(true);
    } else {
      setShouldLoad(false);
    }
  }, [consent, hasAnalyticsConsent, GA_MEASUREMENT_ID]);

  // No cargar si no hay consentimiento o no está configurado
  if (!shouldLoad || !GA_MEASUREMENT_ID) {
    return null;
  }

  return (
    <>
      {/* Google Analytics Script */}
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_MEASUREMENT_ID}', {
            page_path: window.location.pathname,
            anonymize_ip: true
          });
        `}
      </Script>
    </>
  );
}

// Hook para enviar eventos a GA4
export function useGoogleAnalytics() {
  const { hasAnalyticsConsent } = useCookieConsent();

  const trackEvent = (
    eventName: string,
    eventParams?: Record<string, unknown>,
  ) => {
    if (!hasAnalyticsConsent()) return;

    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", eventName, eventParams);
    }
  };

  const trackPageView = (url: string) => {
    if (!hasAnalyticsConsent()) return;

    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("config", analyticsConfig.GA_MEASUREMENT_ID, {
        page_path: url,
      });
    }
  };

  return { trackEvent, trackPageView };
}

// Declaración de tipos para window.gtag
declare global {
  interface Window {
    gtag: (
      command: string,
      targetId: string,
      config?: Record<string, unknown>,
    ) => void;
    dataLayer: unknown[];
  }
}
