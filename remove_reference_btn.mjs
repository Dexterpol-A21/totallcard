import fs from 'fs';

function removeBtn(filePath) {
    if (!fs.existsSync(filePath)) return;
    let content = fs.readFileSync(filePath, 'utf-8');
    
    // Regex para buscar el div que contiene el texto "Ver Imágenes de Referencia" y eliminarlo completo.
    const regex = /<div class="flex flex-col sm:flex-row gap-4 mb-6 items-center">\s*<a href="#catalogo"[\s\S]*?Ver Imágenes de Referencia[\s\S]*?<\/a>\s*<\/div>/g;
    
    if (content.match(regex)) {
        content = content.replace(regex, '');
        fs.writeFileSync(filePath, content, 'utf-8');
        console.log('Botón eliminado en ' + filePath);
    } else {
        console.log('No se encontró el botón en ' + filePath);
    }
}

removeBtn('src/pages/impresoras.astro');
removeBtn('src/pages/cintas-y-consumibles.astro');
