# Informe de cambios SEO on-page — tuuradventure.com

**Fecha:** 15/10/2026 · **Rama:** `main` (sobre `69733a7`) · **Estado:** cambios en local, **sin commit, push ni deploy**.

---

## 1. Resumen

| Tarea | Estado | Qué se hizo |
|---|---|---|
| A.1 H1 único con búsqueda + ubicación | Revisado, **sin cambios** | Los 11 H1 son únicos. Salen del campo `subtitle` de `complementary-data.ts`, así que los cambios van como propuesta (§5). |
| A.2 Contenido propio de la ficha | Revisado, **ya existía** | Las 11 fichas ya tienen Description, What's Included, What to Bring, Meeting Point (con Google Maps), Itinerary, Technical Details (nivel, duración, edad) y una FAQ visible de 3 a 5 preguntas. No he añadido contenido duplicado. |
| A.3 Enlaces internos entre fichas | **Aplicado** | Bloque "Similar Activities" en las 11 fichas (antes solo lo tenían 4) con 3 fichas relacionadas y texto de enlace descriptivo. |
| A.4 Enlaces desde el blog | **Aplicado** | Ejemplos de nivel enlazados en *What is canyoneering*; frase con 3 enlaces en *Basic equipment*; 3 "Learn more →" sustituidos en *Best activities Marbella*. |
| A.5 JSON-LD | **Aplicado** | Precios de las ofertas alineados con el precio visible; BreadcrumbList corregido en las 11 fichas (apuntaba a URLs que dan 404); Tajo de Ronda: imagen rota, `TouristAttraction` → `TouristTrip` con oferta. No se ha añadido aggregateRating ni review. |
| A.6 Canonical sin parámetros | Verificado | Las 11 tienen una canonical absoluta propia y sin parámetros. |
| B. Title, description y OG | **Aplicado** | Titles de 53 a 60 caracteres y descriptions de 144 a 155, con búsqueda principal, ubicación, precio "From €X" o duración, y "Book online". og:title, og:description y twitter son iguales al title y la description. |

**Criterio de precios:** el precio que ve el usuario en la tarjeta sale del **Google Sheet**, no de `app/data.ts`. Los titles y el JSON-LD usan el precio del Sheet (consultado el 15/10/2026). Esto corrige dos desajustes que había en los datos estructurados: El Chorro (69 → 55 €) y Kayak (40 → 45 €).

**Criterio de datos:** cuando dos fuentes del proyecto se contradicen (duración, edad, temporada), he dejado ese dato **fuera** del title y la description, y lo anoto en §4.

---

## 2. Detalle por ficha

En todas las fichas, salvo que se indique otra cosa:
- **Schema:** Product y TouristTrip con `offers` (precio, EUR, InStock), LocalBusiness, FAQPage y BreadcrumbList. FAQPage ya existía y coincide al 100 % con la FAQ visible.
- **Breadcrumb antes:** Home > `/canyoning` (o `/via-ferrata`, `/hiking`, que dan **404**) > ficha.
- **Breadcrumb después:** Home > Activities (`/activities`) > Categoría (`/activities?category=…`) > ficha. Es el mismo recorrido que el breadcrumb visible del Hero, y todas las URLs devuelven 200.
- **OG/Twitter:** se igualan al title y la description nuevos. og:image no cambia (excepto en Tajo de Ronda).

### /canyoning/guadalmina
| | Antes | Después |
|---|---|---|
| Title | Guadalmina Canyoning \| Benahavís Canyoning near Marbella **(56)** | Guadalmina Canyoning in Benahavís – From €40 \| Near Marbella **(60)** |
| Description | Guadalmina canyoning through the Angosturas gorge: jumps, rappels & natural slides. The best Benahavís canyoning near Marbella, from 6 y.o. Every day from 40€. **(159)** | Guadalmina canyoning in the Angosturas gorge, Benahavís: jumps, slides and rappels. 3 hours, all levels, from age 6. Every day from €40. Book online. **(149)** |
| H1 | Sin cambios: "Benahavís Canyoning: Canyon of the Angosturas in Guadalmina River Walk Guided Adventure". Propuesta en §5. | |
| Secciones añadidas | Ninguna (ya estaban todas) | |
| Enlaces internos | Similar Activities: antes Río Verde, VF Ronda y La Concha → ahora **Río Verde Canyoning in Granada**, **Zarzalones Canyoning in Sierra de las Nieves** y **Buitreras Canyoning near Ronda** | |
| Schema | Breadcrumb corregido. Precio 40 € (ya correcto). | |

### /canyoning/rio-verde
| | Antes | Después |
|---|---|---|
| Title | Río Verde Canyoning Granada \| Turquoise Water Jumps **(51)** | Río Verde Canyoning in Granada – From €75 \| Turquoise Pools **(59)** |
| Description | Experience Río Verde canyoning near Granada & Málaga. Turquoise waters, jumps up to 9m, rappelling & slides in Sierra de Almijara. From 75€. Book now! **(150)** | Río Verde canyoning in Otívar, Granada: turquoise pools, optional jumps, slides and two rappels. 4.5 hours, from age 9, April to October. Book online. **(150)** |
| H1 | Sin cambios: "Rio Verde Canyoning: Turquoise Water Jumps Near Granada & Málaga" (ya incluye búsqueda y ubicación) | |
| Enlaces internos | Antes Guadalmina, VF Ronda y La Concha → ahora **Guadalmina Canyoning in Benahavís**, **Río Verde Integral Canyoning X-Pro** y **Zarzalones Canyoning in Sierra de las Nieves** | |
| Schema | Breadcrumb corregido. Precio 75 € (ya correcto). | |

### /canyoning/rio-verde-xpro
| | Antes | Después |
|---|---|---|
| Title | Río Verde X-Pro Integral Canyoning \| Full Pitch 7h Adventure - From 89€ **(71)** | Río Verde Integral Canyoning X-Pro – 7h Private, From €89 **(57)** |
| Description | Conquer the full Integral route of Río Verde canyon. Advanced 7h canyoning with 18m natural slide, 15m rappels & turquoise pools. Transfer included. From age 15. Mar-Nov. From 89€. Book now! **(190)** | The full Río Verde integral descent in Otívar, Granada: an 18m natural slide, 15m rappels and turquoise pools. 7 hours, transfer included. Book online. **(151)** |
| H1 | Sin cambios: "Private Full Pitch Rio Verde Canyoning with Transfer Included". Propuesta en §5 (compite con /rio-verde y no incluye ubicación). | |
| Enlaces internos | Bloque **nuevo**: **Río Verde Canyoning in Granada**, **Buitreras Canyoning near Ronda** y **Zarzalones Canyoning in Sierra de las Nieves** | |
| Schema | Breadcrumb corregido. Precio 89 € (ya correcto). | |

> El title apunta a "Río Verde integral" y no a "Río Verde canyoning", para no canibalizar /canyoning/rio-verde.

### /via-ferrata/ronda
| | Antes | Después |
|---|---|---|
| Title | Via Ferrata Ronda \| Climb the Tajo Cliffs - From 60€ **(52)** | Via Ferrata Ronda – Climb the Tajo Gorge \| All Levels, €60 **(58)** |
| Description | Climb the iconic Tajo de Ronda cliffs under the Puente Nuevo. Beginner & family-friendly via ferrata for all levels, from age 7. From 60€. Book now! **(148)** | Via ferrata Ronda up the Tajo gorge below the Puente Nuevo: iron rungs, cables and huge views. All levels, from age 7, all year. From €60. Book online. **(151)** |
| H1 | Sin cambios: "Via Ferrata Ronda: Climb the Iconic Tajo Cliffs near Marbella & Málaga" | |
| Enlaces internos | Antes Guadalmina, El Chorro y La Concha → ahora **Via Ferrata El Chorro**, **Via Ferrata Casares** y **Tajo de Ronda Canyoning** | |
| Schema | Breadcrumb corregido. Precio 60 € (ya correcto). | |

> Sin duración: los datos dicen 2,5 h y la ficha técnica 3:00 (ver §4). La posición 33 para "via ferrata ronda" probablemente depende más de enlaces y autoridad que del title; los enlaces nuevos desde El Chorro, Casares, Tajo de Ronda, La Concha y el blog ayudan.

### /via-ferrata/el-chorro
| | Antes | Después |
|---|---|---|
| Title | Via Ferrata El Chorro \| Next to Caminito del Rey - From 69€ **(59)** | Via Ferrata El Chorro near Caminito del Rey – From €55 **(54)** |
| Description | Conquer Andalusia's most complete via ferrata next to Caminito del Rey. Advanced route with 30m zip line, rappel & Tibetan bridges. 4.5h, from age 14. Sept-June. From 69€. Book now! **(181)** | Advanced via ferrata in El Chorro, next to Caminito del Rey: a 30m+ zip line, a 12m rappel and Tibetan bridges. From age 14, from €55. Book online. **(147)** |
| H1 | Sin cambios: "Via Ferrata El Chorro: An Exciting Route Next to Caminito del Rey" | |
| Enlaces internos | Bloque **nuevo**: **Via Ferrata Ronda**, **Via Ferrata Casares** y **La Concha Hike in Marbella** | |
| Schema | Breadcrumb corregido. **Precio 69 → 55 €** en Product y TouristTrip (el Sheet y la tarjeta visible dicen 55 €). | |

### /via-ferrata/casares
| | Antes | Después |
|---|---|---|
| Title | Via Ferrata Casares \| Views of Gibraltar & Africa - From 45€ **(60)** | Via Ferrata Casares – Views of Gibraltar & Africa From €45 **(58)** |
| Description | Conquer the Via Ferrata Casares in the Genal Valley, Málaga. Moderate level with monkey bridges & panoramic views of Gibraltar and Africa. All year round. From 45€. Book now! **(174)** | Via ferrata in Casares with views of Gibraltar and Africa: two monkey bridges & aerial traverses. 2.5 hours, from age 11. Fri & Sat from €45. Book online. **(154)** |
| H1 | Sin cambios: "Via Ferrata in Casares with Stunning Views of Africa and Gibraltar". Propuesta en §5. | |
| Enlaces internos | Bloque **nuevo**: **Via Ferrata Ronda**, **Via Ferrata El Chorro** y **Guadalmina Canyoning in Benahavís** | |
| Schema | Breadcrumb corregido. Precio 45 € (ya correcto). | |

### /canyoning/zarzalones
| | Antes | Después |
|---|---|---|
| Title | Zarzalones Canyoning Málaga \| 21m Waterfall Rappel Near Marbella - From 69€ **(75)** | Zarzalones Canyoning in Sierra de las Nieves – From €69 **(55)** |
| Description | Conquer the 21m waterfall rappel at Zarzalones canyon in Sierra de las Nieves, Málaga. Moderate canyoning for families (+9 y.o.). Crystalline waters, all year round. From 69€. Book now! **(185)** | Zarzalones canyoning in Yunquera, Sierra de las Nieves: a 21m waterfall rappel, crystal-clear pools and optional jumps. 4 hours, from age 9. Book online. **(153)** |
| H1 | Sin cambios: "Conquer Zarzalones: The 21m Waterfall Canyoning Near Marbella & Málaga". Propuesta en §5. | |
| Enlaces internos | Bloque **nuevo**: **Guadalmina Canyoning in Benahavís**, **Río Verde Canyoning in Granada** y **Buitreras Canyoning near Ronda** | |
| Schema | Breadcrumb corregido. Precio 69 € (ya correcto). | |

> Se quita "all year round" porque los datos de temporada se contradicen (ver §4).

### /canyoning/buitreras
| | Antes | Después |
|---|---|---|
| Title | Buitreras Canyoning \| The Cathedral of Andalusia's Ravines - From 69€ **(69)** | Buitreras Canyoning near Ronda – 6h Adventure From €69 **(54)** |
| Description | Conquer Buitreras, the most iconic canyoning descent in Andalusia. 120m limestone walls, German's Bridge, 9m jumps. 6h, from age 13. May-Nov. Near Marbella & Ronda. From 69€. Book now! **(184)** | Buitreras canyoning near Ronda: 120m limestone walls and the German's Bridge. 6 hours, from age 13, mid-June to November. From €69. Book online. **(144)** |
| H1 | Sin cambios: "Buitreras Canyon in Malaga: an astonishing environment". Propuesta en §5. | |
| Enlaces internos | Bloque **nuevo**: **Zarzalones Canyoning in Sierra de las Nieves**, **Río Verde Integral Canyoning X-Pro** y **Tajo de Ronda Canyoning** | |
| Schema | Breadcrumb corregido. Precio 69 € (ya correcto). | |

> Temporada tomada del campo `days` ("15/6 to 30/11"); antes decía "May-Nov".

### /canyoning/tajo-ronda
| | Antes | Después |
|---|---|---|
| Title | Canyoning in Tajo de Ronda: Epic Urban Adventure under Puente Nuevo \| TUUR Adventure **(84)** | Tajo de Ronda Canyoning under the Puente Nuevo – From €69 **(57)** |
| Description | Epic urban canyoning in Ronda. Rappel 35m under Puente Nuevo. Unique perspectives of historic Andalusia. Available March–June & September–November. **(147)** | Urban canyoning in Ronda's Tajo gorge: a 35m rappel under the Puente Nuevo, 100m below the city. 4 hours, from age 14. Spring and autumn. Book online. **(150)** |
| H1 | Sin cambios: "Canyoning in Tajo de Ronda: Epic Urban Adventure under Puente Nuevo" | |
| Enlaces internos | Bloque **nuevo**: **Via Ferrata Ronda**, **Buitreras Canyoning near Ronda** y **Zarzalones Canyoning in Sierra de las Nieves** | |
| Schema | Breadcrumb corregido. **Product.image** apuntaba a `tajo-ronda.jpg`, que **no existe** → `tajo-ronda-1.webp`. **`TouristAttraction` → `TouristTrip`** con `offers` (69 €) y `provider` (antes no tenía ni oferta ni proveedor); `location` → `itinerary` (Place), que es la propiedad válida en TouristTrip. Precio "69.00" → "69". | |
| OG | **og:image añadida** (no tenía) y **Twitter card añadida** (no tenía). | |

### /hiking/la-concha
| | Antes | Después |
|---|---|---|
| Title | La Concha Marbella Hike: Iconic Peak Guided Tour \| From 80€ **(59)** | La Concha Hike Marbella – Guided Summit Tour From €80 **(53)** |
| Description | Conquer La Concha Marbella Hike, most iconic mountain peak at 1,215m. Guided hiking with 360º views of Gibraltar & Africa. Transfer included. From 80€. Book now! **(161)** | Guided La Concha hike above Marbella to the 1,215m summit, with 360º views of Gibraltar and Africa. 6.5 hours, from age 11, transfer included. Book online. **(155)** |
| H1 | Sin cambios: "La Concha Marbella Hike: Ascent to Marbella's most iconic peak" | |
| Enlaces internos | Antes Río Verde, VF Ronda y Guadalmina → ahora **Guadalmina Canyoning in Benahavís**, **Via Ferrata Ronda** y **Kayak Tour in Puerto Banús** | |
| Schema | Breadcrumb corregido. Precio 80 € (ya correcto). | |

### /activities/kayak-puerto-banus
| | Antes | Después |
|---|---|---|
| Title | Kayak Puerto Banús Marbella \| Sunrise Tour & Marina Experience - From 40€ **(73)** | Kayak Puerto Banús Sunrise Tour in Marbella – From €45 **(54)** |
| Description | Guided kayak tour from Puerto Banús, Marbella. Sunrise & morning tours along luxury marina, Duque & Rodeito beaches. Family-friendly from age 2. All year. From 40€. Book now! **(174)** | Guided sunrise kayak tour from Puerto Banús, Marbella, past the marina to Rodeito and Duque beaches. 2 hours, all levels. Tue, Thu & Sat. Book online. **(150)** |
| H1 | Sin cambios: "Guided Kayak Sunrise Tour in Puerto Banús, Marbella" | |
| Enlaces internos | Bloque **nuevo**: **Guadalmina Canyoning in Benahavís**, **La Concha Hike in Marbella** y **Via Ferrata Casares** | |
| Schema | Breadcrumb: Home > Activities > Kayak Puerto Banús (sin nivel de categoría). **Precio 40 → 45 €** en Product y TouristTrip (el Sheet y la tarjeta visible dicen 45 €). | |

> Se quitan "from age 2" y "All year": los datos dicen edad mínima 3 y salidas de mayo a octubre (ver §4).

### Enlaces añadidos desde el blog

| Artículo | Destino | Texto del enlace |
|---|---|---|
| /blog/what-is-canyoneering (lista "Examples" de cada nivel) | /canyoning/guadalmina | Guadalmina Canyon |
| | /canyoning/rio-verde | Río Verde Canyon |
| | /canyoning/zarzalones | Zarzalones Canyon |
| | /canyoning/buitreras | Buitreras Canyon |
| | /canyoning/rio-verde-xpro | Río Verde X-Pro |
| /blog/what-is-basic-equipment-for-canyoning (conclusión, frase nueva: "On our guided tours the wetsuit, harness, helmet and rappel equipment are included, for example in…") | /canyoning/guadalmina | Guadalmina canyoning in Benahavís |
| | /canyoning/rio-verde | Río Verde canyoning in Granada |
| | /canyoning/zarzalones | Zarzalones canyoning in Sierra de las Nieves |
| /blog/best-activities-marbella (sustituye "Learn more →") | /via-ferrata/ronda | Book Via Ferrata Ronda → |
| | /via-ferrata/casares | Book Via Ferrata Casares → |
| | /via-ferrata/el-chorro | Book Via Ferrata El Chorro → |

En *What is canyoneering*, "Lentegí Canyon" y "Zarzalones Integral" siguen como texto porque no tienen ficha. *Best activities Marbella* ya enlazaba a 9 de las 11 fichas y su texto no menciona X-Pro ni el canyoning del Tajo de Ronda, así que no he forzado esos enlaces.

---

## 3. Archivos modificados

**Nuevos**
| Archivo | Cambio |
|---|---|
| `lib/seo.ts` | Helper `activityBreadcrumbJsonLd()`: BreadcrumbList que sigue el breadcrumb visible (Home > Activities > categoría > ficha). |
| `lib/related-activities.ts` | Helper `relatedActivities()`: tarjetas de "Similar Activities" a partir de `complementary-data.ts`, con texto de enlace descriptivo propio (no modifica nombres ni subtítulos). |
| `INFORME-SEO-CAMBIOS.md` | Este informe. |

**Metadata de fichas** (los 11 `metadata.ts`): title, description, og:title/og:description y twitter:title/description nuevos; breadcrumb mediante el helper; import de `lib/seo`.
| Archivo | Cambio adicional |
|---|---|
| `app/(routes)/canyoning/guadalmina/metadata.ts` | — |
| `app/(routes)/canyoning/rio-verde/metadata.ts` | — |
| `app/(routes)/canyoning/rio-verde-xpro/metadata.ts` | — |
| `app/(routes)/canyoning/zarzalones/metadata.ts` | — |
| `app/(routes)/canyoning/buitreras/metadata.ts` | — |
| `app/(routes)/canyoning/tajo-ronda/metadata.ts` | Imagen del Product corregida, og:image y Twitter card añadidas, TouristAttraction → TouristTrip con offers y provider. |
| `app/(routes)/via-ferrata/ronda/metadata.ts` | — |
| `app/(routes)/via-ferrata/el-chorro/metadata.ts` | Precio de las ofertas 69 → 55. |
| `app/(routes)/via-ferrata/casares/metadata.ts` | — |
| `app/(routes)/hiking/la-concha/metadata.ts` | — |
| `app/(routes)/activities/kayak-puerto-banus/metadata.ts` | Precio de las ofertas 40 → 45. |

**Páginas de fichas** (los 11 `page.tsx`)
| Archivo | Cambio |
|---|---|
| `canyoning/guadalmina`, `canyoning/rio-verde`, `via-ferrata/ronda`, `hiking/la-concha` `/page.tsx` | "Similar Activities" pasa a `relatedActivities([...])` con nueva selección de fichas; se quita el import de `complementaryData`, que se queda sin uso. |
| `canyoning/rio-verde-xpro`, `canyoning/zarzalones`, `canyoning/buitreras`, `canyoning/tajo-ronda`, `via-ferrata/el-chorro`, `via-ferrata/casares`, `activities/kayak-puerto-banus` `/page.tsx` | Se añade `<OtherActivities>` justo después de las FAQs (la misma posición que en las fichas que ya lo tenían) y sus imports. |

**Blog**
| Archivo | Cambio |
|---|---|
| `app/(routes)/blog/what-is-canyoneering/page.tsx` | `examples` pasa a `{ name, href? }` y se renderiza como enlace cuando hay ficha. El texto visible no cambia. |
| `app/(routes)/blog/what-is-basic-equipment-for-canyoning/page.tsx` | Una frase en la conclusión con 3 enlaces a fichas. |
| `app/(routes)/blog/best-activities-marbella/page.tsx` | 3 "Learn more →" → "Book Via Ferrata Ronda / Casares / El Chorro →". |

---

## 4. Datos pendientes (necesito que me los confirmes)

| # | Ficha | Dato | Contradicción encontrada | Efecto ahora |
|---|---|---|---|---|
| 1 | El Chorro | Duración | `data.ts`/`complementary-data.ts`: **4 h**. Ficha técnica: **4:30**. Meta anterior: 4.5h. | Duración fuera del title y la description. |
| 2 | VF Ronda | Duración | Datos: **2,5 h**. Ficha técnica: **3:00**. | Duración fuera del title y la description. |
| 3 | Kayak Banús | Edad mínima | Datos: **3**. Ficha técnica: **"+2 Years Old (with parents)"**. Meta anterior: "from age 2". | Edad fuera de la description. |
| 4 | Kayak Banús | Temporada | Meta anterior: "All year". Sheet/`specialPrice`: **Tue, Thu & Sat de mayo a octubre**. | La description dice "Tue, Thu & Sat", sin meses. |
| 5 | Zarzalones | Días y temporada | `days`: "Thursday". `specialPrice`: "Tue & Thu from June to August". Sheet: "September… Tue & Thu (Min. 3 pax)". Meta anterior: "all year round". | Días y temporada fuera de la description. |
| 6 | Zarzalones | Ubicación | Datos: **Yunquera**. Blog *What is canyoneering*: **"Tolox, Málaga"**. | Uso Yunquera (dato de la ficha). El blog no se ha tocado. |
| 7 | Buitreras | Provincia y ubicación | `province`: **Cádiz**. H1: "Buitreras Canyon **in Malaga**". `ubication`: "Colm. de la Fra.". Blog: "El Colmenar, Málaga". | Uso "near Ronda" (lo que ya decía la meta). |
| 8 | Buitreras, Tajo de Ronda | Edad mínima | `data.ts`: **8**. `complementary-data.ts` y ficha técnica: **13** y **14**. | Uso 13 y 14 (lo que se muestra). Conviene corregir `data.ts`. |
| 9 | Río Verde X-Pro | Temporada y edad | `days`: "All year". Meta anterior: "Mar-Nov". Ficha técnica: "+15/16". | Ni temporada ni edad en la description. |
| 10 | El Chorro | Temporada | `days`: "All year". Meta anterior: "Sept-June". | Temporada fuera de la description. |
| 11 | Todas | Precios en `app/data.ts` | No coinciden con el Sheet en 5 fichas: La Concha 49/80, VF Ronda 44/60, El Chorro 69/55, X-Pro 79/89, Kayak 40/45. | Uso el Sheet (lo que ve el usuario). `data.ts` sigue desactualizado. |
| 12 | Todas | `priceValidUntil` | El schema Product dice **2026-12-31**: caduca en 2,5 meses. | Hay que renovarlo antes de enero. |
| 13 | Todas | Reseñas por actividad | No hay datos reales de reseñas por ficha (el 4,8 ★ / 2.087 reseñas de `data.ts` era una cifra copiada en todas). | Sin aggregateRating. Para recuperar estrellas hacen falta reseñas reales por actividad (por ejemplo, desde Trustindex o Google). |

---

## 5. Propuestas no aplicadas

### Afectan a nombres o subtítulos de `complementary-data.ts` (H1)
El H1 sale de `subtitle`, que también se usa en el menú, las tarjetas y la portada, así que no lo he tocado.

| Ficha | H1 actual | H1 propuesto |
|---|---|---|
| Guadalmina | Benahavís Canyoning: Canyon of the Angosturas in Guadalmina River Walk Guided Adventure | **Guadalmina Canyoning in Benahavís: Canyon of the Angosturas near Marbella** (empieza por la búsqueda principal y es más corto) |
| Río Verde X-Pro | Private Full Pitch Rio Verde Canyoning with Transfer Included | **Río Verde Integral Canyoning X-Pro in Otívar, Granada** (evita competir con /rio-verde por "rio verde canyoning" y añade ubicación) |
| Casares | Via Ferrata in Casares with Stunning Views of Africa and Gibraltar | **Via Ferrata Casares: Stunning Views of Africa and Gibraltar** (búsqueda exacta "via ferrata casares") |
| Zarzalones | Conquer Zarzalones: The 21m Waterfall Canyoning Near Marbella & Málaga | **Zarzalones Canyoning in Sierra de las Nieves: The 21m Waterfall near Marbella** |
| Buitreras | Buitreras Canyon in Malaga: an astonishing environment | **Buitreras Canyoning near Ronda: The Cathedral of Andalusia's Ravines** (resolver antes la provincia, punto 7 de §4) |

Las otras 6 (Río Verde, VF Ronda, El Chorro, Tajo de Ronda, La Concha y Kayak) ya incluyen la búsqueda y la ubicación.

### Afectan a componentes compartidos o a la portada
1. **El menú y el footer enlazan a 8 fichas que dan 404** en todas las páginas: `/canyoning/calzadillas`, `/canyoning/trevelez`, `/canyoning/sima-del-diablo`, `/hiking/hiking-istan`, `/hiking/hiking-juanar`, `/activities/kayak-guadiaro`, `/activities/e-bike-marbella` y `/activities/buggy-tour-marbella`. Salen de `excursions` en `components/nav-bar.tsx` y `components/footer.tsx`. Es probablemente el problema SEO más importante de los detectados: hay enlaces rotos en todas las URLs del sitio. **Propuesta:** filtrar las actividades sin página, igual que ya hace `app/sitemap.ts`.
2. **Canibalización con la portada** ("canyoning benahavis", "canyoning guadalmina", "rio verde canyoning"). La portada pinta las tarjetas con el `title`, la `description` y el `alt` de cada actividad (`top-activities-home.tsx`, `all-activities-section.tsx`) y menciona Guadalmina en `faqs-home.tsx`. **Propuestas** (sin cambiar textos): que las tarjetas de la portada enlacen con el texto descriptivo de `lib/related-activities.ts` en lugar de un genérico; y reforzar la señal hacia la ficha con más enlaces internos desde el blog y desde otras fichas (ya aplicado). No he tocado ni la portada ni sus metadatos.
3. **"More information →" en las tarjetas de `OtherActivities`**: el enlace ya es descriptivo porque toda la tarjeta (con el título) es el `<a>`, pero ese texto podría ser "See {título}". Es un componente compartido.
4. **Bloque oculto `sr-only` en Guadalmina** (al final de la página): una lista de palabras clave invisible para el usuario ("Keywords searched by visitors include: canyoning near Marbella, …"). Google considera el texto oculto con palabras clave una práctica contra sus directrices y puede penalizar. **Recomiendo eliminarlo**. No lo he hecho porque no estaba en el encargo y quiero que lo decidas tú.
5. **Precio dinámico en los metadatos**: hoy el precio del title y del JSON-LD está escrito a mano. Si cambia en el Sheet, vuelve a desincronizarse (ya pasó con Guadalmina y ahora con El Chorro y Kayak). Propuesta: `generateMetadata()` en cada ficha con el precio de `getExcursionByPath()`.
6. **Configuración de ESLint**: `eslint.config.mjs` está escrito para `eslint-config-next` v16, pero está instalada la v15.5.7, así que `npm run lint` falla (ver §6).

---

## 6. Lint y build

| Comprobación | Resultado |
|---|---|
| `npx tsc --noEmit` | ✅ 0 errores |
| `npm run lint` | ❌ **No arranca** por un problema previo de configuración: `Cannot find module '…/eslint-config-next/core-web-vitals'`. No he cambiado la configuración del proyecto. |
| ESLint con una config temporal equivalente para v15 (fuera del repo) sobre los 27 archivos modificados o nuevos | ✅ **0 errores**, 8 avisos, todos **anteriores** a estos cambios: imports sin uso (`ActivityBookingForm` en Buitreras y VF Ronda, `Bokun` en Río Verde, Tajo de Ronda y Casares, `ReviewsCarousel` en X-Pro), `EXCURSION_DESCRIPTION` sin uso en La Concha y una expresión sin uso en X-Pro (línea 100). |
| `npm run build` | ✅ Correcto, sin avisos ni errores. |
| Validación del HTML servido (`next start`) en las 11 fichas | ✅ **ALL OK**: title y description iguales a lo especificado; canonical propia; og:title, og:description y og:image coinciden y la imagen existe; un solo H1 por ficha y ninguno repetido; JSON-LD parseable con Product, TouristTrip, LocalBusiness, FAQPage y BreadcrumbList; ofertas con el precio correcto, EUR y disponibilidad; sin aggregateRating ni review; las preguntas de FAQPage coinciden con la FAQ visible y las respuestas están en el HTML; todas las URLs del breadcrumb responden 200; las 3 tarjetas de "Similar Activities" responden 200. |
| Precio visible frente a title | ✅ El Chorro 55 €, Kayak 45 €, La Concha 80 € y VF Ronda 60 € coinciden con la tarjeta. |
| Revisión visual | ✅ El bloque "Similar Activities" se ve bien a 390 y 1440 px. |

---

## 7. Confirmación: portada y nombres de `complementary-data.ts` sin modificar

**Confirmo que no he modificado ningún texto ni metadato de la portada, ningún componente compartido ni ningún campo de `complementary-data.ts` o `app/data.ts`.**

```
$ git diff --stat -- app/page.tsx app/layout.tsx lib/complementary-data.ts app/data.ts components/
(sin salida: ningún cambio)

$ git status --short
 M app/(routes)/activities/kayak-puerto-banus/metadata.ts
 M app/(routes)/activities/kayak-puerto-banus/page.tsx
 M app/(routes)/blog/best-activities-marbella/page.tsx
 M app/(routes)/blog/what-is-basic-equipment-for-canyoning/page.tsx
 M app/(routes)/blog/what-is-canyoneering/page.tsx
 M app/(routes)/canyoning/buitreras/metadata.ts
 M app/(routes)/canyoning/buitreras/page.tsx
 M app/(routes)/canyoning/guadalmina/metadata.ts
 M app/(routes)/canyoning/guadalmina/page.tsx
 M app/(routes)/canyoning/rio-verde-xpro/metadata.ts
 M app/(routes)/canyoning/rio-verde-xpro/page.tsx
 M app/(routes)/canyoning/rio-verde/metadata.ts
 M app/(routes)/canyoning/rio-verde/page.tsx
 M app/(routes)/canyoning/tajo-ronda/metadata.ts
 M app/(routes)/canyoning/tajo-ronda/page.tsx
 M app/(routes)/canyoning/zarzalones/metadata.ts
 M app/(routes)/canyoning/zarzalones/page.tsx
 M app/(routes)/hiking/la-concha/metadata.ts
 M app/(routes)/hiking/la-concha/page.tsx
 M app/(routes)/via-ferrata/casares/metadata.ts
 M app/(routes)/via-ferrata/casares/page.tsx
 M app/(routes)/via-ferrata/el-chorro/metadata.ts
 M app/(routes)/via-ferrata/el-chorro/page.tsx
 M app/(routes)/via-ferrata/ronda/metadata.ts
 M app/(routes)/via-ferrata/ronda/page.tsx
?? lib/related-activities.ts
?? lib/seo.ts
```

Todo lo modificado está dentro de las 11 fichas, los 3 artículos del blog y dos helpers nuevos en `lib/`. `components/hero.tsx`, `components/other-activities.tsx` y `app/(routes)/activities/components/faqs.tsx` no se han tocado: solo se usan en fichas, y aun así no los he modificado.

**No se ha hecho commit, push ni deploy.**
