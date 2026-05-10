const fs = require('fs');
let html = fs.readFileSync('src/pages/index.astro', 'utf-8');

// Fix delays
let delayCounter = 1;
html = html.replace(/style="transition-delay: \d\.\ds;"/g, () => {
    const delay = (delayCounter * 0.1).toFixed(1);
    delayCounter++;
    return `style="transition-delay: ${delay}s;"`;
});

// Fix lanyard outer card
html = html.replace(
    'class="pvc-card deal-ready group transition-all duration-700 hover:-translate-y-3 hover:shadow-2xl hover:-rotate-1 flex flex-col justify-between p-0 w-full aspect-[54/86] max-w-[280px] mx-auto bg-transparent rounded-[14px] overflow-hidden shadow-none border-2 border-dashed border-gray-300 hover:border-solid relative"',
    'class="pvc-card deal-ready group transition-all duration-700 hover:-translate-y-3 hover:shadow-2xl hover:-rotate-1 flex flex-col justify-between p-0 w-full aspect-[54/86] max-w-[280px] mx-auto bg-white/40 backdrop-blur-md rounded-[14px] overflow-hidden shadow-lg border border-white/60 relative"'
);

// Fix lanyard texture background filter
html = html.replace(
    `<!-- Textura de plástico vinil esmerilado (Portagafete transparente) -->
                    <div class="absolute inset-0 bg-transparent mix-blend-overlay pointer-events-none" style="background-image: url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noise%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.6%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noise)%22 opacity=%220.3%22/%3E%3C/svg%3E');"></div>`,
    `<!-- Textura de plástico vinil esmerilado (Portagafete transparente) -->
                    <div class="absolute inset-0 bg-white/10 mix-blend-overlay pointer-events-none" style="background-image: url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noise%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.6%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noise)%22 opacity=%220.3%22/%3E%3C/svg%3E');"></div>`
);

// Fix faux badge inside lanyard
html = html.replace(
    'class="absolute inset-x-5 top-[4.5rem] bottom-5 bg-transparent rounded-md overflow-hidden flex flex-col pointer-events-none group-hover:bg-gray-50/10 transition-colors"',
    'class="absolute inset-x-5 top-[4.5rem] bottom-5 bg-white rounded-md border border-gray-200 shadow-sm overflow-hidden flex flex-col pointer-events-none group-hover:bg-gray-50 transition-colors"'
);

fs.writeFileSync('src/pages/index.astro', html);
console.log('Fixed delays and lanyard structure!');
