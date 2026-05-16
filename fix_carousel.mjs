import fs from 'fs';

let content = fs.readFileSync('src/pages/index.astro', 'utf-8');

// Replace the container classes
content = content.replace(/<div class="w-\[280px\] sm:w-\[320px\] shrink-0 group relative overflow-hidden rounded-xl bg-white shadow-md border border-slate-100 aspect-\[4\/3\]">/g, 
'<div class="h-[220px] sm:h-[260px] shrink-0 group relative overflow-hidden rounded-xl bg-white shadow-sm border border-slate-100 p-2 flex justify-center items-center">');

// Replace the img classes
content = content.replace(/class="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-110"/g, 
'class="h-full w-auto object-contain transition-transform duration-500 group-hover:scale-105"');
content = content.replace(/class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"/g, 
'class="h-full w-auto object-contain transition-transform duration-500 group-hover:scale-105"');

// also remove any aspect-[4/3] remaining in the flex container if any
fs.writeFileSync('src/pages/index.astro', content);
console.log("Carousel fixed.");
