import fs from 'fs';
let content = fs.readFileSync('src/pages/faq.astro', 'utf-8');

// Quitar un 1 y cambiar el contenedor a 1200px o algun ancho grande.
content = content.replace(/<div class="max-w-\[1000px\] mx-auto px-6">/, '<div class="max-w-[1280px] mx-auto px-6">');
content = content.replace(/<h3 class="font-sans font-bold text-\[22px\] text-black mb-5 tracking-tight">1\. Diseño del frente y reverso<\/h3>/, '<h3 class="font-sans font-bold text-[22px] text-black mb-5 tracking-tight">Diseño del frente y reverso</h3>');

fs.writeFileSync('src/pages/faq.astro', content);
console.log('Fixed width and duplicated 1');
