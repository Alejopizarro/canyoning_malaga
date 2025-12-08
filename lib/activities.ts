// lib/googleSheets.ts

export interface SheetExcursion {
  id: string;
  slug: string;
  category: string;
  title: string;
  subtitle: string;
  price: string;
  isMostPopular: boolean;
  isTop3: boolean;
  linkBokun: string;
  linkFotos: string;
  linkDescripcion: string;
}

export interface Excursion extends SheetExcursion {
  // Datos complementarios que agregaremos localmente
  description: string;
  videoYoutube: string;
  days: string;
  mainImage: {
    src: string;
    alt: string;
  };
  images: {
    src: string;
    alt: string;
  }[];
  isOffer: boolean;
  rating: {
    value: number;
    reviews: number;
  };
  minimumAge: number;
  ubication: string;
  duration: number;
  level: "easy" | "moderate" | "advanced";
  province: string;
  category: string;
  categoryPath: string;
}

// Función para obtener los datos crudos del Sheet
async function fetchSheetData(): Promise<string[][]> {
  const sheetId = process.env.GOOGLE_SHEETS_ID;
  const gid = process.env.GOOGLE_SHEETS_GID || "0";

  if (!sheetId) {
    throw new Error(
      "GOOGLE_SHEETS_ID no está configurado en las variables de entorno"
    );
  }

  // URL para obtener el CSV público
  const url = `https://docs.google.com/spreadsheets/d/${sheetId}/export?format=csv&gid=${gid}`;

  const response = await fetch(url, {
    next: { revalidate: 3600 }, // Revalidar cada hora
  });

  if (!response.ok) {
    throw new Error(`Error al obtener datos del Sheet: ${response.statusText}`);
  }
  const csvText = await response.text();
  // Parsear CSV manualmente (para evitar dependencias externas)
  const rows = parseCSV(csvText);
  return rows;
}

// Parser CSV simple
function parseCSV(csvText: string): string[][] {
  const rows: string[][] = [];
  let currentRow: string[] = [];
  let currentCell = "";
  let insideQuotes = false;

  for (let i = 0; i < csvText.length; i++) {
    const char = csvText[i];
    const nextChar = csvText[i + 1];

    if (char === '"') {
      if (insideQuotes && nextChar === '"') {
        currentCell += '"';
        i++; // Saltar el siguiente quote
      } else {
        insideQuotes = !insideQuotes;
      }
    } else if (char === "," && !insideQuotes) {
      currentRow.push(currentCell.trim());
      currentCell = "";
    } else if (
      (char === "\n" || (char === "\r" && nextChar === "\n")) &&
      !insideQuotes
    ) {
      currentRow.push(currentCell.trim());
      if (currentRow.some((cell) => cell !== "")) {
        rows.push(currentRow);
      }
      currentRow = [];
      currentCell = "";
      if (char === "\r") i++; // Saltar \n después de \r
    } else if (char !== "\r") {
      currentCell += char;
    }
  }

  // Agregar última fila si existe
  if (currentCell || currentRow.length > 0) {
    currentRow.push(currentCell.trim());
    if (currentRow.some((cell) => cell !== "")) {
      rows.push(currentRow);
    }
  }

  return rows;
}

// Convertir filas a objetos SheetExcursion
function parseSheetExcursions(rows: string[][]): SheetExcursion[] {
  const [...dataRows] = rows;
  return dataRows.map((row) => {
    const excursion: SheetExcursion = {
      id: row[0] || "",
      slug: row[1] || "",
      category: row[2] || "",
      title: row[3] || "",
      subtitle: row[4] || "",
      price: row[5] || "",
      isMostPopular: row[6]?.toUpperCase() === "TRUE",
      isTop3: row[7]?.toUpperCase() === "TRUE",
      linkBokun: row[8] || "",
      linkFotos: row[9] || "",
      linkDescripcion: row[10] || "",
    };
    return excursion;
  });
}

// Importar datos complementarios desde archivo separado
import {
  complementaryData,
  defaultComplementaryData,
} from "./complementary-data";

// Función principal: obtener excursiones completas
export async function getExcursions(): Promise<Excursion[]> {
  try {
    const rows = await fetchSheetData();
    const sheetExcursions = parseSheetExcursions(rows);
    const excursions: Excursion[] = sheetExcursions.map((sheetData) => {
      // Buscar datos complementarios por slug
      const complementary =
        complementaryData[sheetData.slug] || defaultComplementaryData;

      return {
        ...defaultComplementaryData,
        ...complementary,
        ...sheetData,
        route: sheetData.slug,
      } as Excursion;
    });
    return excursions;
  } catch (error) {
    console.error("❌ Error al cargar excursiones desde Google Sheets:", error);
    throw error;
  }
}

// Funciones de utilidad

// Buscar excursión por category y slug (para rutas como /canyoning/guadalmina)
export async function getExcursionByPath(
  category: string,
  slug: string
): Promise<Excursion | undefined> {
  const excursions = await getExcursions();
  const found = excursions.find(
    (exc) => exc.category === category && exc.slug === slug
  );
  return found;
}

// Buscar excursión solo por slug
export async function getExcursionBySlug(
  slug: string
): Promise<Excursion | undefined> {
  const excursions = await getExcursions();
  return excursions.find((exc) => exc.slug === slug);
}

// Alias para compatibilidad con código existente
export async function getExcursionByRoute(
  route: string
): Promise<Excursion | undefined> {
  return getExcursionBySlug(route);
}

export async function getExcursionsByCategory(
  category: string
): Promise<Excursion[]> {
  const excursions = await getExcursions();
  return excursions.filter((exc) => exc.category === category);
}

export async function getMostPopularExcursions(): Promise<Excursion[]> {
  const excursions = await getExcursions();
  return excursions.filter((exc) => exc.isMostPopular);
}

export async function getTop3Excursions(): Promise<Excursion[]> {
  const excursions = await getExcursions();
  return excursions.filter((exc) => exc.isTop3);
}
