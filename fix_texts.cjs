const fs = require('fs');

const pages = [
  { 
    slug: 'gafetes-escolares', 
    title: 'Gafetes Escolares', 
    sub: 'Identidad y Seguridad Estudiantil.',
    desc: 'Credenciales de alta durabilidad para alumnos, docentes y personal administrativo. Refuerza la seguridad de tu institución escolar con diseños adaptados a tu colegio.'
  },
  { 
    slug: 'tarjetas-de-membresia', 
    title: 'Tarjetas de Membresía', 
    sub: 'Exclusividad y Pertenencia.',
    desc: 'Fideliza a tus socios o clientes con tarjetas de Membresía de primer nivel. Perfectas para clubes, gimnasios, asociaciones y programas de beneficios exclusivos.'
  },
  { 
    slug: 'tarjetas-de-lealtad', 
    title: 'Tarjetas de Lealtad', 
    sub: 'Recompensa a tus Clientes.',
    desc: 'Aumenta tus ventas y retención a través de programas de Cliente Frecuente. Tarjetas de recompensa, puntos o prepago con diseños llamativos y magnéticos.'
  },
  { 
    slug: 'tarjetas-qr', 
    title: 'Tarjetas de Presentación (QR)', 
    sub: 'Conexión Digital Inmediata.',
    desc: 'Evoluciona al networking del futuro. Tarjetas inteligentes con tecnología QR para compartir tus datos de contacto con un simple escaneo, ideales para ejecutivos.'
  },
  { 
    slug: 'tarjetas-rfid', 
    title: 'Tarjetas RFID / Proximidad', 
    sub: 'Control de Acceso Inteligente.',
    desc: 'Garantiza la seguridad en tus instalaciones con tecnología de proximidad. Tarjetas con chip RFID (Mifare, HID) para puertas eléctricas, torniquetes y estacionamientos.'
  },
  { 
    slug: 'pases-vip', 
    title: 'Pases y Gafetes para Eventos', 
    sub: 'Accesos Exclusivos.',
    desc: 'Gafetes oversize, acreditaciones y pases VIP para conciertos, convenciones y festivales. Impresos en gran formato para visibilidad total y control.'
  },
];

pages.forEach(p => {
  let filePath = `src/pages/${p.slug}.astro`;
  let content = fs.readFileSync(filePath, 'utf-8');
  
  // Replace <title>
  content = content.replace(/<title>.*?<\/title>/, `<title>${p.title} | TotallCard</title>`);
  
  // Replace h1 (which spans lines with whitespace)
  content = content.replace(/(<h1[^>]*>)\s*Gafetes Empresariales\s*(<\/h1>)/, `$1\n\t\t\t\t\t\t\t${p.title}\n\t\t\t\t\t\t$2`);
  
  // Replace subtitle above H1 (Identidad Corporativa Segura.)
  content = content.replace(/Identidad Corporativa Segura\./, p.sub);
  
  // Replace hero paragraph text
  content = content.replace(/Credenciales de alta durabilidad y tecnología integrada para respaldar la imagen de tu empresa\. Refuerce[\s\S]*?(?=<\/p>)/, p.desc);
  
  // Replace "Cotiza tus Gafetes", etc.
  content = content.replace(/Cotiza tus Gafetes/g, `Cotiza tus ${p.title}`);
  
  // Save file
  fs.writeFileSync(filePath, content);
  console.log(`Updated texts for ${p.slug}`);
});
