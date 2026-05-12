"use client";

import { useState } from "react";
import { CheckCircle } from "lucide-react";

type Lang = "en" | "es";

const CONTENT: Record<Lang, { heading: string; subtext: string; cta: string }> =
  {
    en: {
      heading: "Thank you for your booking!",
      subtext: "The TUUR team will be in touch via WhatsApp shortly.",
      cta: "Contact us on WhatsApp",
    },
    es: {
      heading: "¡Gracias por tu reserva!",
      subtext:
        "El equipo de TUUR se pondrá en contacto contigo por WhatsApp en breve.",
      cta: "Escríbenos por WhatsApp",
    },
  };

const WHATSAPP_URL = "https://wa.me/34699199158";

export default function Page() {
  const [lang, setLang] = useState<Lang>("en");
  const c = CONTENT[lang];

  return (
    <main className="min-h-screen bg-white flex flex-col items-center justify-center px-4 text-center">
      <div className="flex flex-col items-center gap-6 max-w-md w-full">

        {/* Language toggle — solid style for white background */}
        <div className="flex items-center bg-gray-100 border border-gray-200 rounded-full p-1">
          {(["en", "es"] as Lang[]).map((l) => (
            <button
              key={l}
              onClick={() => setLang(l)}
              className={`px-4 py-1.5 rounded-full text-sm font-semibold transition-colors ${
                lang === l
                  ? "bg-white text-gray-900 shadow-sm border border-gray-200"
                  : "text-gray-400 hover:text-gray-600"
              }`}
            >
              {l === "en" ? "EN" : "ES"}
            </button>
          ))}
        </div>

        <CheckCircle
          size={72}
          strokeWidth={1.5}
          className="text-[#008e8a] mt-2"
        />

        <div className="flex flex-col gap-3">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">
            {c.heading}
          </h1>
          <p className="text-gray-500 text-lg leading-relaxed">{c.subtext}</p>
        </div>

        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-[#008e8a] hover:bg-[#00807b] text-white font-semibold px-8 py-3 rounded-xl transition-colors text-base mt-2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-5 h-5 shrink-0"
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
            <path d="M12 0C5.373 0 0 5.373 0 12c0 2.126.558 4.12 1.529 5.845L0 24l6.335-1.507A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.805 9.805 0 01-5.032-1.387l-.36-.214-3.732.888.936-3.618-.235-.372A9.795 9.795 0 012.182 12C2.182 6.57 6.57 2.182 12 2.182c5.43 0 9.818 4.388 9.818 9.818 0 5.43-4.388 9.818-9.818 9.818z" />
          </svg>
          {c.cta}
        </a>
      </div>
    </main>
  );
}
