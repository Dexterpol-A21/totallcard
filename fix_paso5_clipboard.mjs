import fs from 'fs';
let content = fs.readFileSync('src/pages/faq.astro', 'utf-8');

// The clipboard wrapper
content = content.replace(/<div class="relative w-16 h-20 flex justify-center items-center">/g, '<div class="relative mt-2 w-24 h-28 flex justify-center items-center">');

// The clipboard SVG
content = content.replace(/<svg width="60" height="70"/g, '<svg width="90" height="100"');

// The red check bubble
content = content.replace(/<div class="absolute -bottom-2 -right-1">/g, '<div class="absolute -bottom-2 -right-2 transform scale-125">');

fs.writeFileSync('src/pages/faq.astro', content);
console.log('Scaled up clipboard icon in Paso 5');
