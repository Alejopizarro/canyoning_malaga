import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Mountain, Users, Shield, Leaf } from "lucide-react";
import {
  campamentoMetadata,
  campamentoFaqs,
  jsonLdEvent,
  jsonLdFaq,
  jsonLdLocalBusiness,
} from "./metadata";
import DayCardSlider from "./day-card-slider";
import GridHero, { GridHeroImage } from "@/components/grid-hero";

export const metadata = campamentoMetadata;

const BOOKING_URL = "https://forms.gle/oYKYxgVZgBL1As2v6";
const WHATSAPP_URL = "https://wa.me/34699199158";

const VALUE_PILLS = [
  { Icon: Mountain, text: "Aventura real en la naturaleza" },
  { Icon: Users, text: "Trabajo en equipo" },
  { Icon: Shield, text: "Seguridad certificada" },
  { Icon: Leaf, text: "Valores y crecimiento personal" },
];

const INFO_DETAILS = [
  { icon: "📅", label: "Fechas", value: "29 de junio al 3 de julio de 2026" },
  {
    icon: "⏰",
    label: "Horario",
    value:
      "8:30 h a 14:30 h (lunes a miercoles) · Jueves salida 9:00 h, regreso viernes 15:00 h",
  },
  { icon: "👦", label: "Edad", value: "6 a 14 años" },
  { icon: "👥", label: "Grupos", value: "Grupos reducidos por edades" },
  { icon: "📍", label: "Punto de encuentro", value: "San Pedro de Alcántara" },
];

const PROGRAMA = [
  {
    day: "Lunes 29 de junio",
    icon: "🏔️",
    label: "Cañón de Guadalmina",
    location: "Benahavís",
    activities: [
      "Técnicas básicas de barranquismo",
      "Seguridad y conocimientos técnicos",
      "Tips en la Naturaleza",
    ],
    time: "Hora de encuentro 8:30 h",
    isNew: false,
    images: ["/summercamp-day1-f1.webp", "/summercamp-day1-f2.webp"],
  },
  {
    day: "Martes 30 de junio",
    icon: "🏖️",
    label: "Fiesta en la Playa",
    location: "San Pedro de Alcántara",
    activities: [
      "Volleyball · Fútbol",
      "Creación de balsas",
      "Kayaks",
      "Dinámicas y juegos",
    ],
    time: "Hora de encuentro 8:30 h",
    isNew: false,
    images: ["/summercamp-day2-f1.webp", "/summercamp-day2-f2.webp"],
  },
  {
    day: "Miércoles 1 de julio",
    icon: "🛶",
    label: "Kayak, Orientación & Rápel",
    location: "Lago de las Tortugas · Nueva Andalucía",
    activities: [
      "Kayak",
      "Juego y Dinámicas acuáticas",
      "NUEVO: Rápel 22 m en presa",
      "Carrera de Orientación",
    ],
    time: "Hora de encuentro 8:30 h",
    isNew: true,
    images: [
      "/summercamp-day3-f1.webp",
      "/summercamp-day3-f2.webp",
      "/summercamp-day3-f3.webp",
      "/summercamp-day3-f4.webp",
    ],
  },
  {
    day: "Jueves 2 de julio",
    icon: "⛺",
    label: "Excursión 2 Días — Río Guadiaro",
    location: "Jimera de Líbar (traslado desde S. Pedro incluido)",
    activities: [
      "Descenso del Río Guadiaro (Sendero Acuático)",
      "Montaje Campamento",
      "Taller/Dinámica",
      "Juegos/Dinámica Nocturna",
      "Pernocte en tiendas de campaña (opcional)",
    ],
    time: "Salida 9:00 h bus desde S. Pedro",
    isNew: false,
    images: [
      "/summercamp-day4-f1.webp",
      "/summercamp-day4-f2.webp",
      "/summercamp-day4-f3.webp",
    ],
  },
  {
    day: "Viernes 3 de julio",
    icon: "🎉",
    label: "Fiesta Final & Regreso",
    location: "Campamento · San Pedro",
    activities: [
      "Recogida Campamento",
      "Fiesta con dinámicas en piscina natural (Río)",
      "Tirolina · Tiro con arco",
      "Despedida con picnic",
    ],
    time: "Regreso 15:00 h S. Pedro",
    isNew: false,
    images: [],
  },
];

const NOVEDADES = [
  {
    icon: "🧗🏻",
    title: "Rápel de 22 Metros",
    description:
      "Descendemos por la presa del Lago de las Tortugas, una de las experiencias más emocionantes del campamento.",
  },
  {
    icon: "🧭",
    title: "Nueva Carrera de Orientación",
    description:
      "Los participantes compiten por equipos en la búsqueda de balizas ocultas, utilizando un mapa y su entorno para orientarse.",
  },
  {
    icon: "⛺",
    title: "Campamento Nocturno Mejorado",
    description:
      "Nuevos retos, dinámicas y actividades sorpresa durante la noche en plena naturaleza.",
  },
];

const SEGURIDAD = [
  {
    icon: "🪪",
    title: "Guías Certificados",
    description:
      "Todo el equipo TUUR cuenta con titulación oficial y años de experiencia con grupos juveniles.",
  },
  {
    icon: "🦺",
    title: "Material Técnico Homologado",
    description:
      "Trajes de neopreno 5mm, cascos y arneses revisados cada temporada.",
  },
  {
    icon: "🌊",
    title: "Ríos de Bajo Caudal",
    description:
      "Seleccionamos barrancos y ríos seguros, sin corrientes fuertes, aptos para todas las edades.",
  },
];

const GALLERY_MAIN: GridHeroImage = {
  src: "/summercamp-1.webp",
  alt: "Campamento de Verano TUUR 2026",
};

const GALLERY_IMAGES: GridHeroImage[] = [
  {
    src: "/summercamp-2.webp",
    alt: "Campamento de Verano TUUR — actividades en la naturaleza",
  },
  {
    src: "/summercamp-3.webp",
    alt: "Campamento de Verano TUUR — barranquismo",
  },
  { src: "/summercamp-4.webp", alt: "Campamento de Verano TUUR — kayak" },
  { src: "/summercamp-5.webp", alt: "Campamento de Verano TUUR — playa" },
  { src: "/summercamp-6.webp", alt: "Campamento de Verano TUUR — rápel" },
  { src: "/summercamp-7.webp", alt: "Campamento de Verano TUUR — acampada" },
  { src: "/summercamp-8.webp", alt: "Campamento de Verano TUUR — río" },
  { src: "/summercamp-9.webp", alt: "Campamento de Verano TUUR — orientación" },
  {
    src: "/summercamp-10.webp",
    alt: "Campamento de Verano TUUR — fiesta final",
  },
];

export default function Page() {
  return (
    <div>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdEvent) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLdLocalBusiness),
        }}
      />

      {/* ── SECTION 1: HERO ──────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden">
        <Image
          src="/summercamp-10.webp"
          alt="Campamento de Verano TUUR 2026 — Aventura en la naturaleza"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/10" />

        <div className="relative z-10 flex flex-col items-center text-center text-white px-4 max-w-4xl mx-auto">
          <span className="bg-[#C8A84B] text-white text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-6">
            Plazas Limitadas
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-4">
            Campamento de Verano TUUR 2026
          </h1>
          <p className="text-lg sm:text-xl text-white/85 mb-8 max-w-2xl">
            Una semana de aventura en la naturaleza · 6 a 14 años · Marbella
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#008e8a] hover:bg-[#00807b] text-white font-semibold px-8 py-3 rounded-xl transition-colors text-lg"
            >
              Reservar Plaza
            </a>
            <a
              href="#programa"
              className="border-2 border-white text-white hover:bg-white/10 font-semibold px-8 py-3 rounded-xl transition-colors text-lg"
            >
              Ver Programa Completo
            </a>
          </div>
        </div>

        <div className="absolute bottom-8 left-0 right-0 z-10 flex justify-center flex-wrap gap-3 px-4">
          {["5 Días · 1 Noche", "6 a 14 años", "235 € todo incluido"].map(
            (stat) => (
              <span
                key={stat}
                className="bg-white/20 backdrop-blur-sm text-white border border-white/30 px-5 py-2 rounded-full text-sm font-medium"
              >
                {stat}
              </span>
            ),
          )}
        </div>
      </section>

      {/* ── SECTION 2: INTRO / EMOTIONAL HOOK ───────────────────────────── */}
      <section className="py-16 sm:py-24 px-4 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            ¿Por qué el campamento TUUR transforma a los jóvenes?
          </h2>
          <p className="text-gray-600 leading-relaxed text-lg mb-10">
            Quienes tuvimos la suerte de pasar tiempo en la naturaleza con
            amigos en nuestra juventud recordamos esos momentos con especial
            cariño. Como adultos nos damos cuenta de lo esenciales que fueron
            para nuestro crecimiento personal y para inculcarnos valores,
            trabajo en equipo y una mentalidad abierta hacia el mundo natural.
            Este es uno de los proyectos que más motiva a todo nuestro equipo —
            especialmente por la transformación positiva que experimentan los
            jóvenes participantes cada año.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {VALUE_PILLS.map(({ Icon, text }) => (
              <span
                key={text}
                className="flex items-center gap-2 bg-teal-50 border border-[#008e8a] text-[#008e8a] px-4 py-2 rounded-full text-sm font-medium"
              >
                <Icon size={16} />
                {text}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTIONS 3–5: TWO-COLUMN STICKY LAYOUT ──────────────────────── */}
      <section className="bg-teal-50/40 py-16 sm:py-24 px-4 sm:px-16">
        <div className="max-w-[1440px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 xl:gap-16 items-start">
            {/* Left column: section 3 only */}
            <div className="lg:col-span-2 flex flex-col gap-16">
              {/* ── SECTION 3: PRECIO & DETALLES ─────────────────── */}
              <div>
                <span className="text-xs font-bold tracking-widest uppercase text-[#008e8a]">
                  Edición 2026
                </span>
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-2 mb-6">
                  Campamento de Verano — Marbella
                </h2>
                <ul className="space-y-4">
                  {INFO_DETAILS.map(({ icon, label, value }) => (
                    <li key={label} className="flex items-start gap-3">
                      <span className="text-2xl leading-none">{icon}</span>
                      <div>
                        <span className="font-semibold text-gray-900">
                          {label}:{" "}
                        </span>
                        <span className="text-gray-600">{value}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right column: sticky booking card */}
            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6">
                  <div className="text-center mb-5">
                    <span className="text-5xl font-extrabold text-[#C8A84B]">
                      235 €
                    </span>
                    <p className="text-gray-500 mt-1 text-sm">
                      Transferencia bancaria. Todo incluido.
                    </p>
                  </div>
                  <div className="space-y-2 mb-6 text-sm text-gray-600 border-t border-b border-gray-100 py-4">
                    <p className="flex items-center gap-2">
                      <span className="text-[#008e8a] font-bold">✓</span>
                      Instructores Certificados bilingües (Español, Inglés)
                    </p>
                    <p className="flex items-center gap-2">
                      <span className="text-[#008e8a] font-bold">✓</span>
                      Equipamiento homologado
                    </p>
                    <p className="flex items-center gap-2">
                      <span className="text-[#008e8a] font-bold">✓</span>
                      Todo el material necesario para el desarrollo de las
                      actividades
                    </p>
                    <p className="flex items-center gap-2">
                      <span className="text-[#008e8a] font-bold">✓</span>
                      Transporte de ida y vuelta al sitio de acampada (Jueves y
                      Viernes)
                    </p>
                    <p className="flex items-center gap-2">
                      <span className="text-[#008e8a] font-bold">✓</span>
                      Jueves: Merienda y Cena, Viernes: Desayuno y Almuerzo
                    </p>
                    <p className="flex items-center gap-2">
                      <span className="text-[#008e8a] font-bold">✓</span>
                      Reportaje fotográfico completo
                    </p>
                    <p className="flex items-center gap-2 font-semibold text-gray-950">
                      <span className="text-[#008e8a] font-bold">✓</span>
                      ... Y los mejores recuerdos del verano!
                    </p>
                  </div>
                  <a
                    href={BOOKING_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full text-center bg-[#008e8a] hover:bg-[#00807b] text-white font-bold py-3 rounded-xl transition-colors text-lg"
                  >
                    Reservar Ahora
                  </a>
                  <p className="text-center text-xs text-gray-400 mt-3">
                    Plazas limitadas · Confirmación por WhatsApp
                  </p>
                </div>
              </div>
            </div>

            {/* ── SECTION 4: PROGRAMA SEMANAL — full width (col-span-3) ── */}
            <div id="programa" className="col-span-1 lg:col-span-3">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
                Programa de Actividades 2026
              </h2>
              <p className="text-gray-600 mb-8">
                Cada año incorporamos nuevas aventuras. En 2026 estrenamos rápel
                de 22 metros en el Lago de las Tortugas y nueva carrera de
                orientación.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {PROGRAMA.map((day, index) => (
                  <DayCardSlider
                    key={day.day}
                    day={day.day}
                    icon={day.icon}
                    label={day.label}
                    location={day.location}
                    activities={day.activities}
                    time={day.time}
                    isNew={day.isNew}
                    images={day.images}
                    className={
                      index === PROGRAMA.length - 1 ? "sm:col-span-2" : ""
                    }
                  />
                ))}
              </div>
            </div>

            {/* ── SECTION 5: NOVEDADES 2026 — full width (col-span-3) ── */}
            <div id="novedades" className="col-span-1 lg:col-span-3">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8">
                Nuevas Aventuras Este Año
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {NOVEDADES.map((item) => (
                  <div
                    key={item.title}
                    className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm text-center"
                  >
                    <span className="text-5xl block mb-4">{item.icon}</span>
                    <h3 className="font-bold text-gray-900 text-lg mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 text-sm">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 6: GALERÍA ───────────────────────────────────────────── */}
      <section className="py-16 sm:py-24 px-4 sm:px-16 bg-white">
        <div className="max-w-[1440px] mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8 text-center">
            Momentos del Campamento
          </h2>
          <GridHero mainImage={GALLERY_MAIN} images={GALLERY_IMAGES} />
          <p className="text-center text-sm text-gray-400 mt-6">
            Fotos reales de ediciones anteriores del Campamento TUUR
          </p>
        </div>
      </section>

      {/* ── SECTION 7: TRUST / SEGURIDAD ─────────────────────────────────── */}
      <section className="py-16 sm:py-24 px-4 sm:px-16 bg-teal-50/40">
        <div className="max-w-[1440px] mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-12 text-center">
            La Seguridad es Nuestra Prioridad
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 mb-12">
            {SEGURIDAD.map((item) => (
              <div key={item.title} className="text-center">
                <span className="text-5xl block mb-4">{item.icon}</span>
                <h3 className="font-bold text-gray-900 text-xl mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
          <div className="flex justify-center">
            <div className="bg-white border border-gray-200 rounded-xl px-6 py-3 text-center text-sm text-gray-500">
              <span className="font-semibold text-gray-700">AT/MA/00141</span>
              {" · "}Reg. Turismo Activo Junta de Andalucía{" · "}
              <span className="font-bold text-[#008e8a]">
                TUUR Adventure Experts
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 8: FAQ ────────────────────────────────────────────────── */}
      <section className="py-16 sm:py-24 px-4 sm:px-16 bg-white">
        <div className="max-w-[1440px] mx-auto">
          <div className="flex flex-col md:flex-row gap-8 items-start md:justify-between">
            <div className="flex flex-col mb-2 md:max-w-xs shrink-0">
              <h2 className="text-4xl sm:text-5xl font-bold">
                Preguntas Frecuentes
              </h2>
              <p className="text-gray-600 mt-4">
                ¿Tienes dudas sobre el campamento? Aquí respondemos las
                preguntas más habituales.
              </p>
            </div>
            <Accordion
              type="single"
              collapsible
              className="text-left max-w-3xl w-full space-y-4"
            >
              {campamentoFaqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger>
                    <p>{faq.question}</p>
                  </AccordionTrigger>
                  <AccordionContent>
                    <p>{faq.answer}</p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* ── SECTION 9: CTA FINAL ─────────────────────────────────────────── */}
      <section className="py-20 sm:py-28 px-4 bg-gradient-to-br from-[#008e8a] to-[#00807b] text-white text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            ¡Reserva antes de que se agoten las plazas!
          </h2>
          <p className="text-white/70 mb-8 text-lg">
            Campamento de Verano TUUR · 29 junio – 3 julio 2026 · Marbella · 235
            €
          </p>
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-[#008e8a] font-bold px-10 py-4 rounded-xl text-lg hover:bg-gray-100 transition-colors mb-6"
          >
            Reservar Mi Plaza Ahora
          </a>
          <p className="text-white/70 text-sm">
            ¿Tienes dudas?{" "}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white underline hover:text-white/90"
            >
              Escríbenos por WhatsApp
            </a>
          </p>
        </div>
      </section>
    </div>
  );
}
