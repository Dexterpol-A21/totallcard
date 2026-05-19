import fs from 'fs';

let content = fs.readFileSync('src/pages/index.astro', 'utf-8');

const regex = /<p class="font-sans text-slate-300 leading-relaxed mb-8">[\s\S]*?<\/a>\s*<\/div>/;

const replacement = `<p class="font-sans text-slate-300 leading-relaxed mb-8">
                        ¿Prefieres imprimir en tus propias instalaciones? Somos distribuidores de equipos de impresión de credenciales a nivel global. Encuentra con nosotros hardware, cintas (ribbons), tarjetas en blanco y refacciones para impulsar tu propio centro de credencialización.
                    </p>
                    
                    <div class="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
                        <a href="https://totallcard.store" target="_blank" rel="noopener noreferrer" class="download-button inline-flex shadow-lg hover:shadow-xl transition-all ring-2 ring-corporate-red ring-offset-2 ring-offset-deep-charcoal">
                            <div class="docs py-4 px-6 border-none">
                                <span class="font-bold text-[14px] md:text-[15px] uppercase tracking-wider">Comprar en Tienda</span>
                            </div>
                            <div class="download border-none">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
                            </div>
                        </a>
                        
                        <a href="/impresoras" class="more-button inline-flex shadow-lg hover:shadow-xl transition-all">
                            <div class="docs py-4 px-6 border-none">
                                <span class="font-bold text-[13px] md:text-[14px] uppercase tracking-wider text-slate-300">Ver Modelos</span>
                            </div>
                            <div class="download border-none text-slate-300">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                            </div>
                        </a>
                    </div>
                </div>`;

if(content.match(regex)) {
    content = content.replace(regex, replacement);
    fs.writeFileSync('src/pages/index.astro', content);
    console.log("Botones reemplazados en index.astro");
} else {
    console.log("Regex fallback failed");
}
