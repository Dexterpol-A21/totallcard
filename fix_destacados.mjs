import fs from 'fs';
const indexAstroPath = 'src/pages/index.astro';
let content = fs.readFileSync(indexAstroPath, 'utf8');

// Find the container for Destacados
const beginContent = `<div class="flex items-center md:items-stretch md:grid overflow-x-auto md:overflow-visible snap-x snap-mandatory md:snap-none gap-4 md:grid-cols-2 lg:grid-cols-4 md:gap-6 pb-6 md:pb-0 -mx-6 px-6 md:mx-0 md:px-0 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">`;

const parts = content.split(beginContent);
if (parts.length === 2) {
    let afterContainer = parts[1];
    const endContainerStr = `                        </div>`;
    const inContainerParts = afterContainer.split(endContainerStr);

    let cardsHtml = inContainerParts[0];

    // the cards are separated by html comments: <!-- Item 1... -->
    
    // We can regex to extract them
    const regex = /<!-- Item (\d):.*?-->[\s\S]*?(?=<!-- Item|$)/g;
    
    let matches = [];
    let match;
    while ((match = regex.exec(cardsHtml)) !== null) {
        matches.push(match[0]);
    }
    
    // matches[0] = Item 1
    // matches[1] = Item 2 (Equipos)
    // matches[2] = Item 3 (Portagafetes)
    // matches[3] = Item 4 (Consumibles)
    
    if (matches.length >= 4) {
        let newHtml = matches[0] + matches[2] + matches[3] + matches[1];
        
        let finalContent = parts[0] + beginContent + newHtml + endContainerStr + inContainerParts.slice(1).join(endContainerStr);
        fs.writeFileSync(indexAstroPath, finalContent);
        console.log('Successfully reordered cards.');
    } else {
        console.log('Could not find 4 cards');
    }
} else {
    console.log('Could not find Destacados container');
}
