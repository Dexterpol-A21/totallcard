import fs from 'fs';

let content = fs.readFileSync('src/pages/index.astro', 'utf-8');

// 1. Quitar el anillo rojo exterior del botón primario
content = content.replace(' class="download-button inline-flex shadow-lg hover:shadow-xl transition-all ring-2 ring-corporate-red ring-offset-2 ring-offset-deep-charcoal"', ' class="download-button inline-flex shadow-lg hover:shadow-xl transition-all"');

// 2. Cambiar "Ver Modelos" y mejorar contraste (yo le había puesto text-slate-300 que es gris clarito, por eso no se leía. Lo cambio por oscuro profundo)
content = content.replace('<span class="font-bold text-[13px] md:text-[14px] uppercase tracking-wider text-slate-300">Ver Modelos</span>', '<span class="font-bold text-[13px] md:text-[14px] uppercase tracking-wider text-deep-charcoal">Conocer más</span>');

// 3. Mejorar contraste del ícono de la flecha
content = content.replace('<div class="download border-none text-slate-300">', '<div class="download border-none text-deep-charcoal">');

fs.writeFileSync('src/pages/index.astro', content);
console.log('Botones de index modificados!');
