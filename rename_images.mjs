import fs from 'fs';
import path from 'path';

const imgDir = 'public/images/';
const files = [
    { old: 'Frontal - copia3.JPG', new: 'frontal-copia3.jpg' },
    { old: 'DISEÑO EL ENCANTO.jpg', new: 'diseno-el-encanto.jpg' },
    { old: 'Belenus frontal.jpg', new: 'belenus-frontal.jpg' },
    { old: 'cafe.JPG', new: 'cafe.jpg' },
    { old: 'posterior2.JPG', new: 'posterior2.jpg' },
    { old: 'toppost.JPG', new: 'toppost.jpg' }
];

for (const file of files) {
    const oldPath = path.join(imgDir, file.old);
    const newPath = path.join(imgDir, file.new);
    if (fs.existsSync(oldPath)) {
        fs.renameSync(oldPath, newPath);
        console.log(`Renamed ${file.old} to ${file.new}`);
    } else {
        console.log(`File not found: ${file.old}`);
    }
}
