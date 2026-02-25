"use client";

import { useCookieConsent } from "@/context/cookie-context";
import { Settings } from "lucide-react";

interface CookieSettingsButtonProps {
  // Variante del botón
  variant?: "floating" | "inline" | "text";
  // Clase CSS adicional
  className?: string;
  // Texto personalizado (solo para variantes inline y text)
  label?: string;
}

export default function CookieSettingsButton({
  variant = "floating",
  className = "",
  label = "Cookie Settings",
}: CookieSettingsButtonProps) {
  const { openSettings, hasConsented } = useCookieConsent();

  // Botón flotante (esquina inferior izquierda)
  if (variant === "floating") {
    // Solo mostrar si ya dio consentimiento (para poder cambiar preferencias)
    if (!hasConsented) return null;

    return (
      <button
        onClick={openSettings}
        aria-label="Cookie Settings"
        className={`fixed bottom-4 left-4 z-[9998] p-3 bg-white border border-gray-200 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all group ${className}`}
      >
        <Settings className="w-5 h-5 text-gray-600 group-hover:text-green-600 transition-colors" />
      </button>
    );
  }

  // Botón inline (para usar en footer, etc.)
  if (variant === "inline") {
    return (
      <button
        onClick={openSettings}
        className={`inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors ${className}`}
      >
        <Settings className="w-4 h-4" />
        {label}
      </button>
    );
  }

  // Enlace de texto (para footer links)
  if (variant === "text") {
    return (
      <button
        onClick={openSettings}
        className={`text-sm text-gray-500 hover:text-green-600 transition-colors ${className}`}
      >
        {label}
      </button>
    );
  }

  return null;
}
