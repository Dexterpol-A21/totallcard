import fs from 'fs';

const files = [
  'src/pages/gafetes-empresariales.astro',
  'src/pages/gafetes-escolares.astro',
  'src/pages/pases-vip.astro',
  'src/pages/tarjetas-de-membresia.astro',
  'src/pages/tarjetas-qr.astro',
  'src/pages/tarjetas-rfid.astro'
];

for (const file of files) {
  if (!fs.existsSync(file)) continue;
  let content = fs.readFileSync(file, 'utf-8');

  // Fix 1: Hero CTA hidden md:flex
  content = content.replace(
    /<div class="flex flex-col sm:flex-row gap-6 mb-6 items-center">/g,
    '<div class="hidden md:flex flex-col sm:flex-row gap-6 mb-6 items-center">'
  );

  // Fix 2: Hero Icons container
  content = content.replace(
    /<div class="flex flex-wrap md:flex-nowrap justify-start gap-6 md:gap-8 pt-2">/g,
    '<div class="flex flex-row flex-nowrap justify-between md:justify-start gap-2 sm:gap-4 md:gap-8 pt-2 w-full">'
  );
  content = content.replace(
    /class="flex flex-row items-center gap-4 w-full md:w-auto"/g,
    'class="flex flex-col md:flex-row items-center gap-2 md:gap-4 w-1/3 md:w-auto text-center md:text-left"'
  );
  content = content.replace(
    /class="w-12 h-12 rounded bg-light-gray\/40 flex items-center justify-center shrink-0"/g,
    'class="w-10 h-10 md:w-12 md:h-12 rounded bg-light-gray/40 flex items-center justify-center shrink-0"'
  );
  content = content.replace(
    /class="text-corporate-red">/g,
    'class="text-corporate-red w-5 h-5 md:w-6 md:h-6">'
  );
  content = content.replace(
    /class="font-headings font-bold text-\[11px\] md:text-xs uppercase tracking-widest text-deep-charcoal leading-snug">/g,
    'class="font-headings font-bold text-[9px] md:text-xs uppercase tracking-widest text-deep-charcoal leading-snug">'
  );

  // Fix 1.5: CTA mobile beneath image
  const regexImgMobile = /(<\/picture>\s*<\/div>)([\s\S]*?)<\/div>\s*<\/section>/;
  if (!content.includes('flex md:hidden flex-col')) {
      content = content.replace(
          /(<\/picture>\s*<\/div>)\s*(<\/div>\s*<\/div>\s*<\/section>)/,
          `$1\n\n                <div class="flex md:hidden flex-col sm:flex-row gap-6 mt-4 pb-2 items-center w-full justify-center relative z-50">
                    <a href="https://wa.me/525615429492" class="download-button inline-flex">
                        <div class="docs py-3 px-6">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" /><path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1a5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1" /></svg>
                            <span class="font-bold text-[15px] tracking-wider uppercase">COTIZACIÓN</span>
                        </div>
                        <div class="download">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/></svg>
                        </div>
                    </a>
                </div>\n$2`
      );
  }

  // Fix 3: Aplicaciones scroll
  content = content.replace(
    /class="grid grid-cols-2 md:grid-cols-4 gap-6"/g,
    'id="aplicaciones-container" class="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-6 px-4 md:px-0 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden md:grid md:grid-cols-4 md:overflow-visible relative"'
  );
  content = content.replace(
    /class="bg-white rounded-2xl p-8 hover:-translate-y-1 transition-transform border border-slate-100 flex flex-col items-center text-center shadow-sm"/g,
    'class="bg-white min-w-[280px] w-[85vw] snap-center shrink-0 md:min-w-0 md:w-auto rounded-2xl p-8 hover:-translate-y-1 transition-transform border border-slate-100 flex flex-col items-center text-center shadow-sm"'
  );

  // Fix 3.5: Aplicaciones dots
  if (!content.includes('id="aplicaciones-dots"')) {
      content = content.replace(
          /(<\/div>\s*<\/div>\s*<\/section>\s*<!-- Diagrama(?:\s|\/)*Infografía)/,
          `</div>\n\n                <!-- Controles de Galería (Solo Móviles) -->
                <div id="aplicaciones-dots" class="flex md:hidden justify-center gap-2 mt-2 pb-4">
                    <button aria-label="Ir a sector 1" class="w-4 h-2.5 rounded-full bg-corporate-red transition-all duration-300"></button>
                    <button aria-label="Ir a sector 2" class="w-2.5 h-2.5 rounded-full bg-slate-300 transition-all duration-300"></button>
                    <button aria-label="Ir a sector 3" class="w-2.5 h-2.5 rounded-full bg-slate-300 transition-all duration-300"></button>
                    <button aria-label="Ir a sector 4" class="w-2.5 h-2.5 rounded-full bg-slate-300 transition-all duration-300"></button>
                </div>\n            </div>\n        </section>\n\n\t<!-- Diagrama / Infografía`
      );
  }

  // Fix 4: Proceso Flechas 
  content = content.replace(
    /class="hidden lg:flex w-16 h-16/g,
    'class="flex w-16 h-16 rotate-90 lg:rotate-0'
  );
  
  // Fix 8: Script update everywhere
  const correctScript = `<script is:inline>
        document.addEventListener('DOMContentLoaded', () => {
            function setupGalleryConfig(containerId, dotsContainerId) {
                const container = document.getElementById(containerId);
                const dotsContainer = document.getElementById(dotsContainerId);
                if (!container || !dotsContainer) return;
                const cards = container.children;
                if (cards.length === 0) return;
                dotsContainer.innerHTML = '';
                for (let i = 0; i < cards.length; i++) {
                    const dot = document.createElement('div');
                    dot.className = \`w-2.5 h-2.5 rounded-full transition-all duration-300 \${i === 0 ? 'bg-corporate-red w-4' : 'bg-slate-300'}\`;
                    dotsContainer.appendChild(dot);
                }
                const dots = dotsContainer.children;
                container.addEventListener('scroll', () => {
                    const scrollLeft = container.scrollLeft;
                    const cardWidth = cards[0].offsetWidth + parseInt(window.getComputedStyle(cards[0]).marginRight || 0) + 24;
                    const activeIndex = Math.max(0, Math.min(Math.round(scrollLeft / cardWidth), cards.length - 1));
                    for (let i = 0; i < dots.length; i++) {
                        if (i === activeIndex) {
                            dots[i].className = 'w-4 h-2.5 rounded-full transition-all duration-300 bg-corporate-red';
                        } else {
                            dots[i].className = 'w-2.5 h-2.5 rounded-full transition-all duration-300 bg-slate-300';
                        }
                    }
                });
            }
            setupGalleryConfig('aplicaciones-container', 'aplicaciones-dots');
            setupGalleryConfig('cards-container', 'dots-container');
            setupGalleryConfig('acabados-container', 'dots-acabados');
            setupGalleryConfig('accesorios-container', 'dots-accesorios');
        });
    </script>`;

  const scriptRegex = /<script is:inline>[\s\S]*?<\/script>/g;
  if (scriptRegex.test(content)) {
      content = content.replace(scriptRegex, correctScript);
  } else {
      content = content.replace(/<Footer \/>/, correctScript + '\n\t\t<Footer />');
  }

  fs.writeFileSync(file, content);
}
console.log("Done");
