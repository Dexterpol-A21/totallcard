# TOTALLCARD Design System ("Precision Guard")

Este documento define las directrices visuales, paleta de colores, tipografía y principios de diseño para el proyecto **TotallCard**. El enfoque central de este diseño es el "Minimalismo Funcional", proyectando seguridad, precisión industrial y confianza corporativa.

## 1. Principios de Diseño
* **Minimalismo Funcional:** Elementos de UI limpios, sin sombras excesivas ni decoraciones innecesarias. Todo elemento tiene un propósito.
* **Jerarquía Clara:** Uso de contraste y escala para guiar la vista del usuario (ej. Botones rojos sobre fondos blancos).
* **Confianza Corporativa:** Uso de grises profundos en lugar de negros puros para reducir la fatiga visual y proyectar elegancia.

## 2. Paleta de Colores

| Nombre interno | Valor Hex | Uso Principal |
| :--- | :--- | :--- |
| **Corporate Red** | `#E1061A` | Color de marca, botones de acción principal (CTAs), iconos destacados, enlaces activos. |
| **Deep Charcoal** | `#333333` | Títulos principales (Headings), texto de alto contraste, fondo del footer. Da un tono formal y menos duro que el negro `#000`. |
| **Medium Gray** | `#666666` (aprox) | Texto de párrafo, subtítulos estructurales, descripciones de tarjetas de producto. |
| **Light Gray** | `#F9F9F9` / `#F2F2F2` | Fondos secundarios, divisores, bordes de tarjetas (Cards) y secciones de fondo suave. |
| **White** | `#FFFFFF` | Fondo principal de la página, garantizando alto contraste y limpieza. |

## 3. Tipografía

La anatomía tipográfica de TotallCard se basa en dos fuentes de Google Fonts altamente legibles y modernas:

* **Fuente de Títulos (Headings): `Inter`**
  * Uso: H1, H2, H3, etiquetas de navegación principal, elementos destacados.
  * Pesos: Bold (700), Extra-Bold (800).
  * Características: Geométrica, excelente legibilidad en pantallas digitales, aspecto técnico y seguro.

* **Fuente de Cuerpo (Sans): `Work Sans`**
  * Uso: Párrafos descriptivos, texto de botones, metadatos, listas.
  * Pesos: Regular (400), Medium (500), Semi-bold (600).
  * Características: Ligeramente más cálida, facilita la lectura de textos largos sin perder la seriedad corporativa.

## 4. Estructura y Layout (Layout System)

* **Contenedor Principal (Max Width):** `1280px`
  * Todas las secciones de contenido están centradas y limitadas a este ancho para evitar que la información se esparza en monitores ultrawide.
* **Espaciado (Spacing):** 
  * Paddings consistentes de `px-6` en móviles.
  * Separaciones de secciones amplias (`py-16` a `py-24`) para permitir que la vista "respire".
* **Bordes / Bordes Redondeados (Border Radius):**
  * Se utiliza un "border-radius" muy sutil (`rounded-sm` o `rounded`) para suavizar las esquinas sin hacerlas ver inmaduras. El estilo es corporativo, no de aplicación infantil.

## 5. Iconografía y Botones

* **Botones (CTAs):**
  * Totalmente rectangulares o ligeramente redondeados (`rounded`).
  * Sin degradados, colores sólidos puros.
  * Efectos Hover (transiciones de 300ms) oscureciendo el color base (ej. `hover:bg-red-800`).
  * Textos e iconos centrados y alineados verticalmente.
* **Iconos:**
  * Estilo de contorno de línea (Line-art).
  * Grosor de línea (stroke-width) de `1.5px` a `2px`.
  * Utilizados para apoyar los puntos clave de confianza y listas de características.

## 6. Variables Tailwind (Tokens de global.css)

Las siguientes son las referencias CSS/Tailwind configuradas en `global.css`:

```css
@theme {
  --color-corporate-red: #E1061A;
  --color-deep-charcoal: #333333;
  --color-medium-gray: #666666; /* o el equivalente configurado */
  --color-light-gray: #E5E7EB; /* o el equivalente configurado */
  
  --font-sans: 'Work Sans', sans-serif;
  --font-headings: 'Inter', sans-serif;
}
```
