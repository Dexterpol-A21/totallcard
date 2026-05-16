import fs from 'fs';

const indexPath = 'src/pages/index.astro';
const html = fs.readFileSync(indexPath, 'utf8');

// The marker in index.astro
const startStr = '<!-- Nuestro Proceso -->';
const endStr = '        </section>\n';

const startIndex = html.indexOf(startStr);
// Find the first </section> after startStr
const endIndex = html.indexOf(endStr, startIndex) + endStr.length;

const snippet = html.substring(startIndex, endIndex);

const files = [
    'src/pages/gafetes-empresariales.astro',
    'src/pages/gafetes-escolares.astro',
    'src/pages/pases-vip.astro',
    'src/pages/tarjetas-de-lealtad.astro',
    'src/pages/tarjetas-de-membresia.astro',
    'src/pages/tarjetas-qr.astro',
    'src/pages/tarjetas-rfid.astro'
];

for (const file of files) {
    if(!fs.existsSync(file)) continue;
    let content = fs.readFileSync(file, 'utf8');
    
    // Find where the section starts in this file: it starts with <div class="mb-12"> right before Metodología, but we want the wrapping section
    // Let's find "Nuestro Proceso, Tu Tranquilidad"
    const titleIndex = content.indexOf('Nuestro Proceso, Tu Tranquilidad');
    if (titleIndex === -1) {
        console.log(`Skipping ${file}, Title not found.`);
        continue;
    }
    
    // Reverse search for '<section' before the title
    const sectionStart = content.lastIndexOf('<section', titleIndex);
    
    // Forward search for '</section>' after the title
    const sectionEnd = content.indexOf('</section>', titleIndex) + '</section>'.length;
    
    // Notice that snippet starts with <!-- Nuestro Proceso -->\n<section...
    // The target file might not have the comment. Let's just grab from <section in snippet
    const snippetSectionStart = snippet.indexOf('<section');
    const actualReplacement = snippet.substring(snippetSectionStart);
    
    const newContent = content.substring(0, sectionStart) + actualReplacement + content.substring(sectionEnd);
    fs.writeFileSync(file, newContent, 'utf8');
    console.log(`Updated ${file}`);
}
