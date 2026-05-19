import fs from 'fs';
import path from 'path';

function addStoreBanner(filePath) {
    if (!fs.existsSync(filePath)) return;
    
    let content = fs.readFileSync(filePath, 'utf-8');
    
    const bannerHTML = `
                                <div class="bg-corporate-red/5 border border-corporate-red/20 rounded-xl p-5 mb-8 max-w-xl">
                                    <h4 class="font-headings font-bold text-deep-charcoal text-lg mb-2 flex items-center gap-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-corporate-red"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
                                        Disponibilidad y Compras
                                    </h4>
                                    <p class="font-sans text-sm text-slate-600 mb-4 leading-relaxed">
                                        Para consultar modelos, características técnicas, existencias en tiempo real y precios, visita nuestra Tienda en Línea Oficial.
                                    </p>
                                    <a href="https://totallcard.store" target="_blank" rel="noopener noreferrer" class="download-button inline-flex">
                                            <div class="docs py-3 px-6">
                                                    <span class="font-bold text-[14px] tracking-wider uppercase">Ir a Totallcard.Store</span>
                                            </div>
                                            <div class="download">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
                                            </div>
                                    </a>
                                </div>
                                <div class="flex flex-col sm:flex-row gap-4 mb-6 items-center">
                                        <a href="#catalogo" class="font-sans text-sm font-bold text-corporate-red hover:underline flex items-center gap-1 uppercase tracking-widest">
                                                Ver Imágenes de Referencia
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                                        </a>
                                </div>`;

    // Regex to match the button group block precisely
    const regexGroup = /<div class="flex flex-col sm:flex-row gap-6 mb-6 items-center">[\s\S]*?<\/div>\s*<\/a>\s*<\/div>/g;
    
    // Check if regex matches
    if (content.match(regexGroup)) {
        content = content.replace(regexGroup, bannerHTML);
        fs.writeFileSync(filePath, content, 'utf-8');
        console.log('Banner añadido en ' + filePath);
    } else {
        console.log('No matches found in ' + filePath);
    }
}

addStoreBanner('src/pages/impresoras.astro');
addStoreBanner('src/pages/cintas-y-consumibles.astro');

