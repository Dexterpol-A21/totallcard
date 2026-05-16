import fs from 'fs';
let content = fs.readFileSync('src/pages/index.astro', 'utf-8');

// revert the gallery images back to object-contain p-2
content = content.replace(/class="h-full w-auto object-contain transition-transform/g, 'class="w-full h-full object-contain p-2 transition-transform');

// also revert the other top cards that were object-contain p-2 initially
const oldClass = 'class="w-full h-full object-cover object-center group-hover:scale-105';
const newClass = 'class="w-full h-full object-contain p-2 group-hover:scale-105';
content = content.replace(new RegExp(oldClass, 'g'), newClass);

// also fix hero image if it was altered
content = content.replace('class="w-full h-full object-cover object-center relative z-10 scale-110 object-right pointer-events-none select-none"', 'class="w-full h-full object-contain relative z-10 scale-110 object-right pointer-events-none select-none"');

// also fix logo if it was altered (was object-contain previously)
content = content.replace('class="h-4 object-cover object-center -mt-0.5 -mr-2.5 relative z-30"', 'class="h-4 object-contain -mt-0.5 -mr-2.5 relative z-30"');
content = content.replace('class="h-5 object-cover object-center relative z-10"', 'class="h-5 object-contain relative z-10"');

fs.writeFileSync('src/pages/index.astro', content);
console.log('Reverted images to object-contain and p-2 in index.astro');
