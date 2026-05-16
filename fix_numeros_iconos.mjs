import fs from 'fs';
let content = fs.readFileSync('src/pages/faq.astro', 'utf-8');

function generateNumberBlock(num) {
    return `<div class="relative w-20 h-20 mb-2 flex justify-center items-center shrink-0">
                            <!-- Detalle de fondo decorativo -->
                            <div class="absolute inset-0 bg-red-50 rounded-2xl rotate-6"></div>
                            <div class="absolute inset-0 bg-white border border-red-100 rounded-2xl shadow-sm -rotate-3 transition-transform group-hover:rotate-0"></div>
                            <!-- Número -->
                            <span class="font-sans font-black text-5xl xl:text-6xl text-corporate-red relative z-10">${num}</span>
                        </div>`;
}

// Reemplazos para Pasos 1, 2, 3 (pueden tener -ml-2 -mt-4 con w-24 h-28)
for (let i = 1; i <= 3; i++) {
    const rx = new RegExp(`<div class="relative (?:mt-2 )?w-24 h-28 flex justify-center items-center">[\\s]*<span class="font-sans font-black text-5xl text-corporate-red relative z-10(?: -ml-2 -mt-4)?">${i}</span>[\\s]*</div>`);
    content = content.replace(rx, generateNumberBlock(i));
    
    // Also try checking for just relative without mt-2 or w-16 h-20
    const rxAlt = new RegExp(`<div class="relative w-16 h-20 flex justify-center items-center">[\\s]*<span class="font-sans font-black text-5xl text-corporate-red relative z-10(?: -ml-2 -mt-4)?">${i}</span>[\\s]*</div>`);
    content = content.replace(rxAlt, generateNumberBlock(i));
}

// Reemplazos para Pasos 4 y 5 (con su SVG raro de línea)
const rx4 = /<div class="relative w-24 h-24 flex justify-center items-center">[\s]*<svg[^>]*>[\s\S]*?<\/svg>[\s]*<span class="font-sans font-[^>]*>4<\/span>[\s]*<\/div>/;
content = content.replace(rx4, generateNumberBlock(4));

const rx5 = /<div class="relative w-24 h-24 flex justify-center items-center">[\s]*<svg[^>]*>[\s\S]*?<\/svg>[\s]*<span class="font-sans font-[^>]*>5<\/span>[\s]*<\/div>/;
content = content.replace(rx5, generateNumberBlock(5));

// Arreglar la tablita clipboard gigante del paso 5
content = content.replace(/<div class="relative mt-2 w-24 h-28 flex justify-center items-center">/g, '<div class="relative w-20 h-24 flex justify-center items-center mt-2">');
content = content.replace(/<svg width="90" height="100"/g, '<svg width="65" height="75"');
content = content.replace(/<div class="absolute -bottom-2 -right-2 transform scale-125">/g, '<div class="absolute -bottom-2 -right-2 transform scale-110">');

fs.writeFileSync('src/pages/faq.astro', content);
console.log('Numeros unificados y clipboard achicado!');
