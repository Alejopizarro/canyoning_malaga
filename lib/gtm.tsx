"use client";

import Script from "next/script";
import { useEffect, useState } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { useCookieConsent } from "@/context/cookie-context";
import { analyticsConfig } from "./cookie-utils";

export default function GoogleTagManager() {
  const { hasAnalyticsConsent, consent } = useCookieConsent();
  const [shouldLoad, setShouldLoad] = useState(false);

  const GTM_ID = analyticsConfig.GTM_ID;

  useEffect(() => {
    // Solo cargar si hay consentimiento de analytics y tenemos el ID configurado
    if (hasAnalyticsConsent() && GTM_ID) {
      setShouldLoad(true);
    } else {
      setShouldLoad(false);
    }
  }, [consent, hasAnalyticsConsent, GTM_ID]);

  // No cargar si no hay consentimiento o no está configurado
  if (!shouldLoad || !GTM_ID) {
    return null;
  }

  return (
    <>
      {/* Google Tag Manager Script */}
      <Script id="google-tag-manager" strategy="afterInteractive">
        {`
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','${GTM_ID}');
        `}
      </Script>
    </>
  );
}

// Componente noscript para el body (usar en layout.tsx)
export function GoogleTagManagerNoScript() {
  const { hasAnalyticsConsent } = useCookieConsent();
  const GTM_ID = analyticsConfig.GTM_ID;

  if (!hasAnalyticsConsent() || !GTM_ID) {
    return null;
  }

  return (
    <noscript>
      <iframe
        src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
        height="0"
        width="0"
        style={{ display: "none", visibility: "hidden" }}
      />
    </noscript>
  );
}

// Componente que trackea cambios de página en Next.js (SPA navigation)
export function GTMPageViewTracker() {
  const { hasAnalyticsConsent } = useCookieConsent();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (!hasAnalyticsConsent()) return;
    if (typeof window === "undefined" || !window.dataLayer) return;

    const url = pathname + (searchParams?.toString() ? `?${searchParams.toString()}` : "");

    window.dataLayer.push({
      event: "page_view",
      page_path: url,
      page_title: document.title,
    });
  }, [pathname, searchParams, hasAnalyticsConsent]);

  return null;
}

// Hook para push events al dataLayer
export function useGTM() {
  const { hasAnalyticsConsent } = useCookieConsent();

  const pushEvent = (event: Record<string, unknown>) => {
    if (!hasAnalyticsConsent()) return;

    if (typeof window !== "undefined" && window.dataLayer) {
      window.dataLayer.push(event);
    }
  };

  return { pushEvent };
}
