import fs from 'fs';
let content = fs.readFileSync('src/pages/index.astro', 'utf-8');

content = content.replace(/Frontal%20-%20copia3\.JPG/g, 'frontal-copia3.jpg');
content = content.replace(/DISE%C3%91O%20EL%20ENCANTO\.jpg/g, 'diseno-el-encanto.jpg');
content = content.replace(/Belenus%20frontal\.jpg/g, 'belenus-frontal.jpg');

fs.writeFileSync('src/pages/index.astro', content);
console.log('Imagenes arregladas en index.astro!');
