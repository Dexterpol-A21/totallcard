import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import sharp from 'sharp';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const imagesDir = path.join(__dirname, 'public', 'images');
const srcDir = path.join(__dirname, 'src');

async function optimizeImages() {
  console.log('Iniciando compresión de imágenes a AVIF y WEBP...');
  const files = fs.readdirSync(imagesDir);
  const processedImages = new Set();

  for (const file of files) {
    if (file.toLowerCase().endsWith('.png') || file.toLowerCase().endsWith('.jpg') || file.toLowerCase().endsWith('.jpeg')) {
      const fullPath = path.join(imagesDir, file);
      const ext = path.extname(file);
      const baseName = path.basename(file, ext);
      
      const avifName = `${baseName}.avif`;
      const webpName = `${baseName}.webp`;
      const avifPath = path.join(imagesDir, avifName);
      const webpPath = path.join(imagesDir, webpName);

      const isAvifMissing = !fs.existsSync(avifPath);
      const isWebpMissing = !fs.existsSync(webpPath);

      if (isAvifMissing || isWebpMissing) {
          console.log(`Procesando: ${file}`);
          
          if (isAvifMissing) {
            await sharp(fullPath).avif({ quality: 70, effort: 4 }).toFile(avifPath);
            console.log(` -> Generado: ${avifName}`);
          }
          
          if (isWebpMissing) {
            await sharp(fullPath).webp({ quality: 80 }).toFile(webpPath);
            console.log(` -> Generado: ${webpName}`);
          }
      }
      processedImages.add({ originalFile: file, baseName });
    }
  }

  // Actualizar las rutas en los archivos de Astro usando la etiqueta <picture> para tener fallbacks seguros
  function updateFiles(dir) {
    const items = fs.readdirSync(dir);
    let totalChanged = 0;

    for (const item of items) {
      const itemPath = path.join(dir, item);
      if (fs.statSync(itemPath).isDirectory()) {
        totalChanged += updateFiles(itemPath);
      } else if (item.endsWith('.astro') || item.endsWith('.tsx') || item.endsWith('.js') || item.endsWith('.ts')) {
        let content = fs.readFileSync(itemPath, 'utf8');
        const originalContent = content;
        
        // Expresión regular para encontrar etiquetas img que usen imágenes de nuestra carpeta (evita reemplazar las que ya están en un <picture>)
        // Buscará: <img ... src="/images/nombre.png" ... >
        const imgRegex = /<img([^>]*)src=["'](\/images\/([^"']+)\.(png|jpg|jpeg))["']([^>]*)>/gi;
        
        content = content.replace(imgRegex, (match, prefix, fullSrc, baseName, env, suffix) => {
          // Si por alguna razón ya estaba envuelto en un picture (no lo envolvemos 2 veces)
          if (content.includes(`<source srcset="/images/${baseName}.avif"`)) {
             return match;
          }

          // Creamos la etiqueta picture con display: contents para no romper flexbox/grid
          return `<picture class="contents">
    <source srcset="/images/${baseName}.avif" type="image/avif" />
    <source srcset="/images/${baseName}.webp" type="image/webp" />
    <img${prefix}src="${fullSrc}"${suffix}>
</picture>`;
        });
        
        if (content !== originalContent) {
            fs.writeFileSync(itemPath, content, 'utf8');
            console.log(`Actualizado src con <picture>: ${path.basename(itemPath)}`);
            totalChanged++;
        }
      }
    }
    return totalChanged;
  }

  if (processedImages.size > 0) {
      const changedCount = updateFiles(srcDir);
      console.log(`\n¡Listo! Se actualizaron ${changedCount} archivos.`);
      console.log('Ahora tu código usa la etiqueta <picture> cargando AVIF por defecto, con respaldo a WEBP y finalmente a tu original PNG/JPG.');
  } else {
      console.log('No se encontraron imágenes para comprimir.');
  }
}

optimizeImages().catch(console.error);