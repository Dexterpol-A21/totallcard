import fs from 'fs';

let content = fs.readFileSync('src/pages/index.astro', 'utf-8');

content = content.replace(/toppost\.JPG/g, 'toppost.jpg');
content = content.replace(/cafe\.JPG/g, 'cafe.jpg');
content = content.replace(/posterior2\.JPG/g, 'posterior2.jpg');

fs.writeFileSync('src/pages/index.astro', content);
console.log('Las ultimas 3 imagenes arregladas en index.astro!');
