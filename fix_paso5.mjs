import fs from 'fs';
let content = fs.readFileSync('src/pages/faq.astro', 'utf-8');
const regex = /<!-- Paso 5 -->([\s\S]*?)<!-- Tip Importante -->/;
const replacement = `<!-- Paso 5 -->
                <div class="bg-white p-6 md:p-8 rounded-[12px] shadow-[0_2px_10px_rgba(0,0,0,0.05)] border border-slate-200 flex flex-col lg:flex-row gap-8 lg:gap-12 md:items-center relative overflow-hidden items-stretch">
                    
                    <!-- Icono Izquierda (Número + Gráficos extras) -->
                    <div class="shrink-0 flex flex-col xl:flex-row gap-4 xl:gap-8 items-center justify-start xl:w-56 pt-2">
                        <!-- Número con Hexágono -->
                        <div class="relative w-24 h-24 flex justify-center items-center">
                            <svg width="70" height="75" viewBox="0 0 40 45" fill="none" stroke="#e81d2c" stroke-width="1.5" class="absolute top-0 left-0 -ml-3 -mt-2">
                                <path d="M20 2 L2 12 L2 33 L20 43 L38 33 L38 12 Z" stroke-dasharray="80" stroke-dashoffset="30" stroke-linecap="round"/>
                            </svg>
                            <span class="font-sans font-black text-6xl xl:text-7xl text-corporate-red relative z-10 left-[-2px]">5</span>
                        </div>
                        <!-- Icono Checklist con Check rojo -->
                        <div class="relative w-16 h-20 flex justify-center items-center">
                            <svg width="60" height="70" viewBox="0 0 24 24" fill="none" stroke="#111" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round">
                                <rect x="4" y="4" width="16" height="18" rx="2" ry="2"/>
                                <path d="M9 4v0c0-1.1.9-2 2-2h2c1.1 0 2 .9 2 2v0"/>
                                <path d="M8 10h8M8 14h8M8 18h4"/>
                                <path d="M5 10l1.5 1.5M5 14l1.5 1.5M5 18l1.5 1.5"/>
                            </svg>
                            <div class="absolute -bottom-2 -right-1">
                                <svg width="32" height="32" viewBox="0 0 24 24" fill="white">
                                    <circle cx="12" cy="12" r="10" fill="white"/>
                                </svg>
                                <svg class="absolute inset-0" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#e81d2c" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                                    <circle cx="12" cy="12" r="10"/>
                                    <path d="M8 12l3 3 5-5"/>
                                </svg>
                            </div>
                        </div>
                    </div>

                    <!-- Texto Central -->
                    <div class="flex-1 lg:pl-2 flex flex-col justify-center">
                        <h3 class="font-sans font-bold text-[24px] xl:text-[26px] text-black mb-6 tracking-tight">Revisión y contacto</h3>
                        <ul class="font-sans text-[16px] xl:text-[17px] text-black/80 space-y-4 list-none">
                            <li class="flex gap-4 items-start">
                                <div class="w-2 h-2 rounded-full bg-corporate-red shrink-0 mt-2"></div>
                                <span class="leading-tight">Nosotros revisamos la información antes<br class="hidden xl:block"/> de producción.</span>
                            </li>
                            <li class="flex gap-4 items-start">
                                <div class="w-2 h-2 rounded-full bg-corporate-red shrink-0 mt-2"></div>
                                <span class="leading-tight">Si detectamos dudas o inconsistencias,<br class="hidden xl:block"/> te contactamos.</span>
                            </li>
                            <li class="flex gap-4 items-start">
                                <div class="w-2 h-2 rounded-full bg-corporate-red shrink-0 mt-2"></div>
                                <span class="leading-tight">Si tienes cualquier duda, no dudes en escribirnos.</span>
                            </li>
                        </ul>
                    </div>

                    <!-- Elementos Gráficos Derecha (Monitor + Linea punteada + Burbujas) -->
                    <div class="shrink-0 hidden lg:flex items-center justify-center pt-2 relative xl:pl-8 min-w-[380px] xl:min-w-[450px]">
                        <div class="flex items-center gap-2 xl:gap-4 w-full relative h-[150px]">
                            
                            <!-- Monitor de computadora con UI abstracta -->
                            <div class="relative w-[130px] xl:w-[150px] shrink-0">
                                <svg width="100%" viewBox="0 0 100 80" fill="none" stroke="#111" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                                    <!-- Pantalla -->
                                    <rect x="2" y="2" width="96" height="60" rx="4" ry="4"/>
                                    <!-- Base/Soporte -->
                                    <path d="M40 62 L40 70 M60 62 L60 70 M30 70 L70 70"/>
                                    <line x1="2" y1="52" x2="98" y2="52"/>
                                    <!-- Boton monitor -->
                                    <circle cx="50" cy="57" r="0.5" fill="#111" stroke="none"/>
                                    <!-- Ventana interior -->
                                    <rect x="18" y="15" width="64" height="30" rx="3" ry="3"/>
                                    <!-- Lineas de texto en la ventana -->
                                    <line x1="25" y1="23" x2="75" y2="23" stroke-width="2"/>
                                    <!-- Rectangulo pequeño inferior -->
                                    <rect x="25" y="32" width="18" height="2" fill="#111"/>
                                </svg>
                                <!-- Check circle encima del monitor -->
                                <div class="absolute bottom-[28px] right-[25px] w-8 h-8 rounded-full bg-white z-10 flex items-center justify-center transform scale-110">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#e81d2c" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                        <circle cx="12" cy="12" r="10" stroke-width="1.5"/>
                                        <path d="M8 12l3 3 5-5" stroke-width="1.5"/>
                                    </svg>
                                </div>
                            </div>

                            <!-- Linea punteada de conexion -->
                            <div class="flex-1 w-[60px] xl:w-[90px] mx-2 mt-4">
                                <svg width="100%" height="40" viewBox="0 0 100 40" fill="none">
                                    <path d="M0 20 Q 50 -10, 100 20" stroke="#e81d2c" stroke-width="1.5" stroke-dasharray="4 4" fill="none"/>
                                </svg>
                            </div>

                            <!-- Iconos Mensaje y Correo derecha -->
                            <div class="relative w-[80px] xl:w-[100px] shrink-0 h-[100px] mt-4 flex flex-col justify-between">
                                <!-- Mensaje/Chat abstracto flotando -->
                                <div class="absolute bg-white right-6 -top-4 w-[60px] h-[50px]">
                                    <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="#111" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round">
                                        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
                                        <path d="M8 12h.01M12 12h.01M16 12h.01" stroke-width="3"/>
                                    </svg>
                                </div>
                                <!-- Sobre/Email abajo -->
                                <div class="absolute bg-white right-0 bottom-2 w-[60px] h-[40px]">
                                    <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="#111" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round">
                                        <rect x="2" y="4" width="20" height="16" rx="2" ry="2"/>
                                        <path d="M2 4l10 8 10-8"/>
                                    </svg>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>

                <!-- Tip Importante -->`;
content = content.replace(regex, replacement);
fs.writeFileSync('src/pages/faq.astro', content);
console.log('Paso 5 updated.');
