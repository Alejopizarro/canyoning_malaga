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

    const url =
      pathname +
      (searchParams?.toString() ? `?${searchParams.toString()}` : "");

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

// Escucha eventos del widget de Bokun vía postMessage
export function BokunTracker() {
  const { hasAnalyticsConsent } = useCookieConsent();

  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      if (!hasAnalyticsConsent()) return;
      if (typeof window === "undefined" || !window.dataLayer) return;

      const raw = event.data;
      if (typeof raw !== "string") return;

      // Buscar el bloque :message:"..."
      const messageIndex = raw.indexOf(':message:"');
      if (messageIndex === -1) return;

      try {
        // Extraer todo lo que hay después de :message:"
        const afterMessage = raw.slice(messageIndex + ':message:"'.length);

        // Quitar la comilla final — el JSON está entre comillas escapadas
        // El formato es :message:"{json escapado}"
        const jsonStr = afterMessage.slice(0, -1); // quita la " final

        // Desescapar las comillas
        const unescaped = jsonStr.replace(/\\"/g, '"').replace(/\\\\/g, "\\");

        const parsed = JSON.parse(unescaped);

        console.log("✅ Bokun parsed:", parsed); // debug temporal

        if (
          parsed.messageType === "OpenModalRequest" &&
          parsed.options?.openFrom === "checkoutButton"
        ) {
          console.log("🛒 begin_checkout disparado"); // debug temporal
          window.dataLayer.push({
            event: "begin_checkout",
            bokun_src: parsed.options?.src,
          });
        }
      } catch (e) {
        console.error("❌ Error parseando Bokun:", e);
      }
    };
    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, [hasAnalyticsConsent]);

  return null;
}
