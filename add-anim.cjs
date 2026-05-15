const fs = require('fs');
const files = [
    'src/pages/gafetes-empresariales.astro',
    'src/pages/gafetes-escolares.astro',
    'src/pages/tarjetas-de-membresia.astro',
    'src/pages/tarjetas-de-lealtad.astro',
    'src/pages/tarjetas-qr.astro',
    'src/pages/tarjetas-rfid.astro',
    'src/pages/pases-vip.astro'
];

const cssToAdd = `
/* Animación de Efecto Impresora en Secciones */
.print-section {
  opacity: 0;
  transform: perspective(1000px) rotateX(-10deg) translateY(80px);
  transform-origin: bottom center;
  transition: opacity 1s ease, transform 1.2s cubic-bezier(0.2, 0.8, 0.2, 1);
}
.print-section.printed {
  opacity: 1;
  transform: perspective(1000px) rotateX(0deg) translateY(0);
}
`;

const jsToAdd = `
        // Efecto Impresora al hacer Scroll
        const sections = document.querySelectorAll('section:not(:first-of-type)');
        
        sections.forEach(sec => {
            sec.classList.add('print-section');
        });

        const printObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('printed');
                    printObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.15, rootMargin: '0px 0px -50px 0px' });

        sections.forEach(sec => {
            printObserver.observe(sec);
        });
`;

files.forEach(file => {
    if (!fs.existsSync(file)) {
        console.log('Not found:', file);
        return;
    }
    let content = fs.readFileSync(file, 'utf8');
    
    let changed = false;
    if (!content.includes('print-section')) {
        content = content.replace('</style>', cssToAdd + '\n</style>');
        
        if (content.includes("document.addEventListener('DOMContentLoaded', () => {")) {
            content = content.replace("document.addEventListener('DOMContentLoaded', () => {", 
                "document.addEventListener('DOMContentLoaded', () => {\n" + jsToAdd);
        } else if (content.includes("</script>")) {
             // If there is no DOMContentLoaded wrapper
             content = content.replace('</script>', "document.addEventListener('DOMContentLoaded', () => {\n" + jsToAdd + "\n});\n</script>");
        } else {
             content += `\n<script>\ndocument.addEventListener('DOMContentLoaded', () => {\n${jsToAdd}\n});\n</script>`;
        }
        changed = true;
    }

    if(changed) {
        fs.writeFileSync(file, content);
        console.log('Updated', file);
    }
});
