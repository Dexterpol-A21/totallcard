const fs = require('fs');

const path = 'src/pages/index.astro';
let content = fs.readFileSync(path, 'utf8');

// The block to extract
const item8Match = content.match(/(\s*<!-- Item 8 \(Lanyards\) -->[\s\S]*?)(?=\s*<!-- Item 9)/);
if (!item8Match) {
    console.log("Could not find item 8");
    process.exit(1);
}
let item8Text = item8Match[1];
content = content.replace(item8Match[1], ''); // remove from old position

// Modify item 8 to be vertical aspect 54/86
item8Text = item8Text.replace(/aspect-auto sm:aspect-\[1\.58\]/g, 'aspect-[54/86]');
item8Text = item8Text.replace(/min-h-\[220px\]/g, ''); // maybe max-w-[280px] mx-auto
item8Text = item8Text.replace(/aspect-\[54\/86\]/g, 'aspect-[54/86] max-w-[280px] mx-auto');

// Insert after Item 2
const item2EndMatch = content.match(/<!-- Item 2 \(Escolares\) -->[\s\S]*?<\/a>\n/);
if (item2EndMatch) {
    content = content.replace(item2EndMatch[0], item2EndMatch[0] + item8Text + "\n");
} else {
    console.log("Could not find Item 2");
}

// Now extract the Call to action card from Product Destacados
const ctaMatch = content.match(/(\s*<!-- Call to action card -->[\s\S]*?<\/div>\n\s*?)<\/div>\n\t\t<\/div>\n\t<\/section>/);
if (ctaMatch) {
    let ctaText = ctaMatch[1];
    // Remove from old position
    content = content.replace(ctaMatch[1], '');

    // Refactor CTA to look like a deal-ready grid card
    // We want it to be aspect-[86/54] lg:max-w-[400px] mx-auto
    const newCTA = `
                <!-- Item 10 (Call to Action en Grid) -->
                <a href="https://wa.me/5211234567890" target="_blank" class="pvc-card deal-ready group overflow-hidden bg-gradient-to-br from-red-50 to-white flex flex-col justify-center items-center p-8 rounded-[1rem] relative border-2 border-corporate-red/30 shadow-md aspect-auto sm:aspect-[86/54] min-h-[220px] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(200,0,0,0.15)] hover:border-corporate-red lg:max-w-[400px] mx-auto w-full text-center" style="transition-delay: 1.0s;">
                    
                    <div class="absolute -right-10 -bottom-10 opacity-5 w-48 h-48 bg-corporate-red rounded-full blur-3xl"></div>
                    
                    <div class="relative z-10 flex flex-col items-center">
                        <div class="w-16 h-16 bg-corporate-red/10 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-500">
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-corporate-red"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
                        </div>
                        <h3 class="font-headings font-bold text-xl md:text-2xl text-deep-charcoal leading-tight mb-2">¿Necesitas asesoría?</h3>
                        <p class="font-sans text-[12px] md:text-sm text-slate-500 mb-6 max-w-[280px]">Te ayudamos a elegir los productos y tecnología ideales para tu proyecto.</p>
                        
                        <div class="inline-flex items-center gap-2 bg-corporate-red text-white py-2.5 px-6 rounded-full font-sans font-bold text-xs tracking-wider uppercase shadow-md group-hover:bg-red-800 transition-colors">
                            Cotizar por WhatsApp
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                        </div>
                    </div>
                </a>
`;

    // Append to cards-container
    // Find the end of item 9
    const item9Match = content.match(/(<!-- Item 9 \(Eventos - Pase VIP\) -->[\s\S]*?<\/a>\n)/);
    if(item9Match) {
       content = content.replace(item9Match[1], item9Match[1] + newCTA);
    } else {
        console.log("Could not find Item 9 to append CTA");
    }

} else {
    console.log("Could not find CTA");
}

fs.writeFileSync(path, content);
console.log("Done");
