import fs from 'fs';
let content = fs.readFileSync('src/pages/faq.astro', 'utf-8');
const regex = /<!-- Paso 4 -->([\s\S]*?)<!-- Paso 5 -->/;
const replacement = `<!-- Paso 4 -->
                <div class="bg-white p-6 md:p-8 rounded-[12px] shadow-[0_2px_10px_rgba(0,0,0,0.05)] border border-slate-200 flex flex-col lg:flex-row gap-8 lg:gap-12 md:items-start relative overflow-hidden items-stretch">
                    
                    <!-- Icono Izquierda (Número + Gráficos extras) -->
                    <div class="shrink-0 flex flex-col items-center justify-start w-24 pt-2">
                        <!-- Número con Hexágono -->
                        <div class="relative w-16 h-16 flex justify-center items-center">
                            <svg width="40" height="45" viewBox="0 0 40 45" fill="none" stroke="#e81d2c" stroke-width="2" class="absolute top-0 left-0 -ml-2 -mt-2">
                                <path d="M20 2 L2 12 L2 33 L20 43 L38 33 L38 12 Z" stroke-dasharray="80" stroke-dashoffset="30" stroke-linecap="round"/>
                            </svg>
                            <span class="font-sans font-black text-5xl text-corporate-red relative z-10 left-[-2px]">4</span>
                        </div>
                        <!-- Mini graficos debajo del 4 -->
                        <div class="mt-4 flex gap-1 items-center">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="black"><path d="M3 3h8v8H3V3zm2 2v4h4V5H5zm8-2h8v8h-8V3zm2 2v4h4V5h-4zM3 13h8v8H3v-8zm2 2v4h4v-4H5zm13-2h-3v2h3v-2zm-3 4h3v2h-3v-2zm-2-2h2v2h-2v-2zm-2 2h2v2h-2v-2zm2 2h2v2h-2v-2zm2 0h2v2h-2v-2zm-2-2v-2h-2v2h2z"/></svg>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="black"><rect x="2" y="5" width="2" height="14"/><rect x="5" y="5" width="3" height="14"/><rect x="9" y="5" width="1" height="14"/><rect x="11" y="5" width="4" height="14"/><rect x="16" y="5" width="1" height="14"/><rect x="18" y="5" width="2" height="14"/><rect x="21" y="5" width="1" height="14"/></svg>
                        </div>
                        <!-- Firma roja -->
                        <svg width="30" height="20" viewBox="0 0 100 50" class="mt-2 text-corporate-red stroke-current" fill="none" stroke-width="3" stroke-linecap="round"><path d="M10 40 Q 30 10, 50 40 T 90 20 M 30 35 L 70 30" /></svg>
                    </div>

                    <!-- Texto Central -->
                    <div class="flex-1 lg:pl-2">
                        <h3 class="font-sans font-bold text-[22px] text-black mb-5 tracking-tight">Archivos y elementos adicionales</h3>
                        <ul class="font-sans text-[15px] text-black/80 space-y-3.5 list-none">
                            <li class="flex gap-4 items-start">
                                <div class="w-1.5 h-1.5 rounded-full bg-corporate-red shrink-0 mt-2"></div>
                                <span class="leading-tight">Si aplica, adjunta logos, firmas, QR o códigos<br class="hidden md:block"/> de barras.</span>
                            </li>
                            <li class="flex gap-4 items-start">
                                <div class="w-1.5 h-1.5 rounded-full bg-corporate-red shrink-0 mt-2"></div>
                                <span class="leading-tight">Indica cantidad de tarjetas y cualquier<br class="hidden md:block"/> acabado especial.</span>
                            </li>
                            <li class="flex gap-4 items-start">
                                <div class="w-1.5 h-1.5 rounded-full bg-corporate-red shrink-0 mt-2"></div>
                                <span class="leading-tight">Si necesitas ayuda con el diseño, también<br class="hidden md:block"/> podemos apoyarte.</span>
                            </li>
                        </ul>
                    </div>

                    <!-- Elementos Gráficos Derecha (5 Tarjetitas) -->
                    <div class="shrink-0 hidden lg:flex items-stretch justify-center pt-2 relative border-l border-slate-100 pl-6 min-w-[350px]">
                        <div class="flex gap-2 justify-center w-full">
                            
                            <!-- Tarjeta 1: Logo -->
                            <div class="flex flex-col items-center justify-between bg-white border border-slate-200 rounded-[6px] shadow-sm w-16 h-24 p-2 transition-transform hover:-translate-y-1">
                                <div class="flex-1 flex items-center justify-center">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#e81d2c" stroke-width="2" class="opacity-90"><path d="M12 2L2 12l10 10 10-10L12 2zm0 4l6 6-6 6-6-6 6-6z"/></svg>
                                </div>
                                <span class="text-[0.45rem] font-bold text-slate-800 text-center uppercase">LOGO</span>
                            </div>

                            <!-- Tarjeta 2: Firma -->
                            <div class="flex flex-col items-center justify-between bg-white border border-slate-200 rounded-[6px] shadow-sm w-16 h-24 p-2 transition-transform hover:-translate-y-1">
                                <div class="flex-1 flex items-center justify-center">
                                    <svg width="30" height="20" viewBox="0 0 100 50" fill="none" stroke="#111" stroke-width="3" stroke-linecap="round"><path d="M10 40 Q 30 10, 50 40 T 90 20 M 30 35 L 70 30" /></svg>
                                </div>
                                <span class="text-[0.45rem] font-bold text-slate-800 text-center uppercase">FIRMA</span>
                            </div>

                            <!-- Tarjeta 3: QR -->
                            <div class="flex flex-col items-center justify-between bg-white border border-slate-200 rounded-[6px] shadow-sm w-16 h-24 p-2 transition-transform hover:-translate-y-1">
                                <div class="flex-1 flex items-center justify-center">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="black"><path d="M3 3h8v8H3V3zm2 2v4h4V5H5zm8-2h8v8h-8V3zm2 2v4h4V5h-4zM3 13h8v8H3v-8zm2 2v4h4v-4H5zm13-2h-3v2h3v-2zm-3 4h3v2h-3v-2zm-2-2h2v2h-2v-2zm-2 2h2v2h-2v-2zm2 2h2v2h-2v-2zm2 0h2v2h-2v-2zm-2-2v-2h-2v2h2z"/></svg>
                                </div>
                                <span class="text-[0.45rem] font-bold text-slate-800 text-center uppercase">QR</span>
                            </div>

                            <!-- Tarjeta 4: Codigo de Barras -->
                            <div class="flex flex-col items-center justify-between bg-white border border-slate-200 rounded-[6px] shadow-sm w-16 h-24 p-2 transition-transform hover:-translate-y-1">
                                <div class="flex-1 flex flex-col items-center justify-center">
                                    <svg width="26" height="16" viewBox="0 0 24 24" fill="black"><rect x="1" y="2" width="2" height="20"/><rect x="4" y="2" width="3" height="20"/><rect x="8" y="2" width="1" height="20"/><rect x="10" y="2" width="4" height="20"/><rect x="15" y="2" width="1" height="20"/><rect x="17" y="2" width="3" height="20"/><rect x="21" y="2" width="2" height="20"/></svg>
                                    <span class="text-[0.35rem] font-mono mt-0.5">1234567890</span>
                                </div>
                                <span class="text-[0.4rem] font-bold text-slate-800 text-center leading-tight uppercase">CÓDIGO DE BARRAS</span>
                            </div>

                            <!-- Tarjeta 5: Acabados Especiales -->
                            <div class="flex flex-col items-center justify-between bg-white border border-slate-200 rounded-[6px] shadow-sm w-16 h-24 p-2 transition-transform hover:-translate-y-1">
                                <div class="flex-1 flex items-center justify-center relative w-full h-full">
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" class="absolute top-1 right-2"><path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z" fill="#111" stroke="#111" stroke-width="1" stroke-linejoin="round"/></svg>
                                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" class="absolute bottom-3 left-2"><path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z" fill="#111" stroke="#111" stroke-width="1" stroke-linejoin="round"/></svg>
                                    <svg width="6" height="6" viewBox="0 0 24 24" fill="none" class="absolute top-4 left-3"><path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z" fill="#111" stroke="#111" stroke-width="1" stroke-linejoin="round"/></svg>
                                </div>
                                <span class="text-[0.4rem] font-bold text-slate-800 text-center leading-tight uppercase">ACABADOS ESPECIALES</span>
                            </div>

                        </div>
                    </div>
                </div>
                
                <!-- Paso 5 -->`;
content = content.replace(regex, replacement);
fs.writeFileSync('src/pages/faq.astro', content);
console.log('Paso 4 replaced successfully.');
