import fs from 'fs';
let content = fs.readFileSync('src/pages/faq.astro', 'utf-8');
const regex = /<div class="shrink-0 flex flex-col xl:flex-row gap-4 xl:gap-8 items-center justify-start xl:w-56 pt-2">/;
const replacement = `<div class="shrink-0 flex flex-col items-center justify-center w-28 md:w-32 pt-2 gap-4">`;
content = content.replace(regex, replacement);
fs.writeFileSync('src/pages/faq.astro', content);
console.log('Fixed paso 5 left icon alignment');
