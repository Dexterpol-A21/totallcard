const fs = require('fs');
const path = require('path');

const filePaths = [
    path.join(__dirname, 'src', 'pages', 'sectores.astro'),
    path.join(__dirname, 'src', 'pages', 'quienes-somos.astro'),
    path.join(__dirname, 'src', 'pages', 'faq.astro')
];

for (const file of filePaths) {
    if (!fs.existsSync(file)) continue;
    let content = fs.readFileSync(file, 'utf8');

    // Módulos con border naranja (Restaurantes)
    content = content.replace(
        /class="bg-orange-500 group rounded-\[2rem\] border-l-8 md:border-l-\[16px\] border-orange-700 hover:border-black/g,
        'class="bg-orange-500 group pvc-card has-punch deal-ready rounded-[1rem] border border-orange-400 hover:border-black'
    );
    // Para el caso en que sigan como rounded-none en otros archivos:
    content = content.replace(
        /class="bg-orange-500 group rounded-none border-l-8 md:border-l-\[16px\] border-orange-700 hover:border-black/g,
        'class="bg-orange-500 group pvc-card has-punch deal-ready rounded-[1rem] border border-orange-400 hover:border-black'
    );

    // Módulos genéricos (Sectores blancos)
    content = content.replace(
        /class="bg-white group rounded-\[2rem\] border-l-8 md:border-l-\[16px\] border-transparent hover:border-corporate-red/g,
        'class="bg-white group pvc-card has-punch deal-ready rounded-[1rem] border border-slate-200 hover:border-corporate-red hover:-translate-y-1'
    );
    content = content.replace(
        /class="bg-white group rounded-none border-l-8 md:border-l-\[16px\] border-transparent hover:border-corporate-red/g,
        'class="bg-white group pvc-card has-punch deal-ready rounded-[1rem] border border-slate-200 hover:border-corporate-red hover:-translate-y-1'
    );
    
    // Módulos para FAQ
    content = content.replace(
        /class="bg-white rounded-\[2rem\] shadow-sm border-l-8 md:border-l-\[12px\]/g,
        'class="bg-white pvc-card deal-ready rounded-[1rem] shadow-md border border-slate-200'
    );
    content = content.replace(
        /class="bg-white rounded-none shadow-sm border-l-8 md:border-l-\[12px\]/g,
        'class="bg-white pvc-card deal-ready rounded-[1rem] shadow-md border border-slate-200'
    );

    fs.writeFileSync(file, content, 'utf8');
}
console.log('Tarjetas estandarizadas a formato Gafete en Empresa/FAQ.');
