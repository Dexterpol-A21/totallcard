const fs = require('fs');

const indexHtml = fs.readFileSync('src/pages/index.astro', 'utf8');

// Extraer la seccion correcta de index.astro
const startMarker = '<div class="mb-12">';
const endMarker = 'Aprender más del proceso\n                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="group-hover:translate-x-1 transition-transform"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>\n                                </a>\n                        </div>';

const startIndex = indexHtml.indexOf(startMarker);
const endIndex = indexHtml.indexOf(endMarker) + endMarker.length;
const newSectionContent = indexHtml.substring(startIndex, endIndex);

const files = [
    'src/pages/gafetes-empresariales.astro',
    'src/pages/gafetes-escolares.astro',
    'src/pages/pases-vip.astro',
    'src/pages/tarjetas-de-lealtad.astro',
    'src/pages/tarjetas-de-membresia.astro',
    'src/pages/tarjetas-qr.astro',
    'src/pages/tarjetas-rfid.astro'
];

files.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    
    // the old files might not have the "Aprender mas del proceso", they probably end just like the original one
    // let's just find the <div class="mb-12"> down to the end of the flex-col that contains the methodology
    // Actually, in the other files the section might not have the CTA button. Let's see what's the end in them.
});
