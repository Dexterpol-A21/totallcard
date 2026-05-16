import fs from 'fs';
let content = fs.readFileSync('src/pages/faq.astro', 'utf-8');

// The container of the photos is items-center. Let's make it items-stretch
content = content.replace('hidden lg:flex items-center justify-center', 'hidden lg:flex items-stretch justify-center');
content = content.replace('flex gap-3 xl:gap-4 justify-center w-full', 'flex gap-3 xl:gap-4 justify-center items-stretch w-full py-1');

// Change the photo containers to flex-1 and h-full instead of fixed pixels
content = content.replace(/w-\[85px\] h-\[105px\] xl:w-\[95px\] xl:h-\[115px\]/g, 'w-[100px] xl:w-[110px] h-full');

fs.writeFileSync('src/pages/faq.astro', content);
console.log('Fixed photo heights in faq.astro');
