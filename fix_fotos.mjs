import fs from 'fs';
let content = fs.readFileSync('src/pages/faq.astro', 'utf-8');

// Ensure the outer wrapper is explicit about filling height
content = content.replace(/<div class="flex flex-col items-center gap-2\.5 transition-transform hover:scale-105">/g, '<div class="flex flex-col items-center gap-2.5 transition-transform hover:scale-105 h-full">');

// Adjust the inner photo box to push full height and be a bit wider
const oldPhotoBox = /<div class="w-\[100px\] xl:w-\[110px\] h-full bg-\[\#f2f2f2\] rounded shadow-sm border border-\[\#e5e5e5\] p-1 flex flex-col items-center overflow-hidden">/g;
const newPhotoBox = '<div class="w-[120px] xl:w-[135px] flex-1 min-h-[150px] bg-[#f2f2f2] rounded shadow-sm border border-[#e5e5e5] p-1 flex items-stretch overflow-hidden pl-1 pr-1 pt-1 pb-1">';
content = content.replace(oldPhotoBox, newPhotoBox);

fs.writeFileSync('src/pages/faq.astro', content);
console.log('Photos sized up.');
