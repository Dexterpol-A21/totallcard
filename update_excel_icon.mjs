import fs from 'fs';
let content = fs.readFileSync('src/pages/faq.astro', 'utf-8');

const regex = /<svg viewBox="0 0 24 24" class="w-full h-full text-\[#1D6F42\]" fill="currentColor">[\s\S]*?<\/svg>/;
content = content.replace(regex, '<img src="/excel-icon.svg" alt="Excel Oficial" class="w-[120%] h-[120%] max-w-none transform -translate-x-[10%] -translate-y-[10%] drop-shadow-sm" />');

fs.writeFileSync('src/pages/faq.astro', content);
console.log('Replaced custom SVG with real Excel icon.');
