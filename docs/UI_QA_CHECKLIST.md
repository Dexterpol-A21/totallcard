# Check-list y Guía de Estilos Visuales (QA)

Este documento es nuestra única fuente de verdad para el desarrollo UI/UX en TotallCard. Servirá como checklist para revisar nuestro Index y cualquier página que vayamos agregando en el futuro. 

## Regla 1: Prevención de Empalme de Padding (Márgenes Blancos Gigantes)
**El problema:** Cuando dos secciones seguidas (ej. `<section class="py-24">` y `<section class="py-24">`) tienen el mismo color de fondo (ej. `bg-white`), se genera un vacío visual gigante e incómodo que desconecta la lectura.

**La Regla Estricta:**
1. El espaciado estándar para las secciones debe ser **estructurado y simétrico**, nunca mayor a `py-12` en móvil y `py-16` en escritorio a menos que sea el inicio (Hero).
2. La fórmula base obligatoria para las etiquetas `<section>` a lo largo de la página es:
   `class="py-10 md:py-12 px-6"` (o usar `pb-10 pt-8` si se requiere ajustar visualmente un solapamiento).
   *No utilices nunca `py-24` a menos que sea una página especial de mucha lectura.*

## Regla 2: Formato del Encabezado de Sección (Headings Consistency)
Todas las secciones que listan información (Categorías, Testimonios, FAQs, Sectores, Nuestro Proceso) DEBEN usar exactamente la misma estructura de pre-título rojo y título principal:

```html
<div class="mb-12 text-center md:text-left"> <!-- O solo mb-12 dependiendo alineación -->
    <!-- Píldora o Línea Guía Roja -->
    <div class="flex items-center gap-3 mb-3">
        <div class="w-12 h-[2px] bg-corporate-red"></div>
        <span class="font-sans font-bold text-xs tracking-widest text-corporate-red uppercase">PRE-TÍTULO ACERCA DE LA SECCIÓN</span>
    </div>
    <!-- Título Principal -->
    <h2 class="font-headings font-bold text-3xl md:text-4xl text-deep-charcoal mb-4">Título Impactante</h2>
</div>
```

## Regla 3: Botones Call To Action (Animación de Cajón/Tarjetita)
Todos los botones principales que inviten a una acción o conversión (como "Conocer Más", "Cotizar por WhatsApp", "Solicitar Cotización Gratuita") DEBEN compartir exactamente el mismo comportamiento visual y estructural para mantener cohesión interactiva (el efecto donde el fondo baja simulando una tarjeta impresa).

**La Estructura Obligatoria:**
```html
<a href="LINK" class="more-button inline-flex shadow-lg hover:shadow-xl transition-all">
    <div class="docs py-4 px-8 border-none">
        <span class="font-bold text-[14px] md:text-[15px] uppercase tracking-wider">TEXTO DEL BOTON</span>
    </div>
    <div class="download border-none">
        <svg>...</svg> <!-- Ícono vector -->
    </div>
</a>
```
*(Nota: Para botones temáticos de WhatsApp, se utiliza la clase variante `.download-button` en lugar de `.more-button`).*

## Regla 4: El Contenedor Maestro (Wrappers)
Todo contenido dentro de las secciones debe estar empaquetado en:
`<div class="max-w-[1280px] mx-auto"></div>`
Para asegurar que en monitores ultra anchos o televisiones 4K el contenido no se deforme ni exceda los límites viables del diseño de lectura corporativo.

## Checklist de Finalización de Página (QA Final)
Antes de marcar una página o feature como "Aprobada", verifica esto:
- [x] ¿Verificaste que no existan dos `<section>` blancas seguidas con márgenes dobles (ej. exceso de `<br>` o padding sumado)?
- [x] ¿El botón de llamadas a la acción (*Call to Action*) del Hero y del Footer es de color Contrastante (`text-white`) con fondos sólidos identificables?
- [x] ¿Todos los encabezados secundarios (`h2`, `h3`) usan el pre-título rojo corporativo con la línea a su lado?
- [x] ¿Existen los bordes súper finos sutiles (`border-b border-light-gray/40`) entre secciones que tienen el mismo color de fondo para crear un respiro psicológicamente ordenado?
- [x] ¿Todas las secciones se animan suavemente al hacer scroll (Efecto Impresora / `.print-section`)?

## Regla 5: Animaciones de Carga en Scroll (Efecto Impresora)
Para mantener la interactividad y hacer un guiño al giro de impresión, todas las páginas de producto y tarjetas deben implementar el "Efecto Impresora" al hacer scroll:
1. Las clases genéricas `.print-section` deben estar aplicadas vía CSS.
2. Todas las etiquetas `<section>` (salvo el Hero inicial) deben inyectarse y observarse con `IntersectionObserver` vía JavaScript.gico en el scroll de usuario?