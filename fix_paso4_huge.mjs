import fs from 'fs';
let content = fs.readFileSync('src/pages/faq.astro', 'utf-8');
const regex = /<!-- Paso 4 -->([\s\S]*?)<!-- Paso 5 -->/;
const replacement = `<!-- Paso 4 -->
                <div class="bg-white p-6 md:p-8 rounded-[12px] shadow-[0_2px_10px_rgba(0,0,0,0.05)] border border-slate-200 flex flex-col lg:flex-row gap-8 lg:gap-12 md:items-center relative overflow-hidden items-stretch">
                    
                    <!-- Icono Izquierda (Número + Gráficos extras) -->
                    <div class="shrink-0 flex flex-col items-center justify-center w-28 md:w-32 pt-2">
                        <!-- Número con Hexágono -->
                        <div class="relative w-24 h-24 flex justify-center items-center">
                            <svg width="70" height="75" viewBox="0 0 40 45" fill="none" stroke="#e81d2c" stroke-width="1.5" class="absolute top-0 left-0 -ml-3 -mt-2">
                                <path d="M20 2 L2 12 L2 33 L20 43 L38 33 L38 12 Z" stroke-dasharray="80" stroke-dashoffset="30" stroke-linecap="round"/>
                            </svg>
                            <span class="font-sans font-black text-7xl text-corporate-red relative z-10 left-[-2px]">4</span>
                        </div>
                        <!-- Mini graficos debajo del 4 -->
                        <div class="mt-6 flex gap-4 items-center">
                            <svg width="34" height="34" viewBox="0 0 24 24" fill="black"><path d="M3 3h8v8H3V3zm2 2v4h4V5H5zm8-2h8v8h-8V3zm2 2v4h4V5h-4zM3 13h8v8H3v-8zm2 2v4h4v-4H5zm13-2h-3v2h3v-2zm-3 4h3v2h-3v-2zm-2-2h2v2h-2v-2zm-2 2h2v2h-2v-2zm2 2h2v2h-2v-2zm2 0h2v2h-2v-2zm-2-2v-2h-2v2h2z"/></svg>
                            <svg width="34" height="34" viewBox="0 0 24 24" fill="black"><rect x="2" y="5" width="2" height="14"/><rect x="5" y="5" width="2" height="14"/><rect x="8" y="5" width="1" height="14"/><rect x="10" y="5" width="4" height="14"/><rect x="15" y="5" width="1" height="14"/><rect x="17" y="5" width="3" height="14"/><rect x="21" y="5" width="2" height="14"/></svg>
                        </div>
                        <!-- Firma roja -->
                        <svg width="50" height="30" viewBox="0 0 100 50" class="mt-4 text-corporate-red stroke-current" fill="none" stroke-width="2.5" stroke-linecap="round"><path d="M10 40 Q 30 10, 50 40 T 90 20 M 30 35 L 70 30" /></svg>
                    </div>

                    <!-- Texto Central -->
                    <div class="flex-1 lg:pl-2 flex flex-col justify-center">
                        <h3 class="font-sans font-bold text-[24px] xl:text-[26px] text-black mb-6 tracking-tight">Archivos y elementos adicionales</h3>
                        <ul class="font-sans text-[16px] xl:text-[17px] text-black/80 space-y-4 list-none">
                            <li class="flex gap-4 items-start">
                                <div class="w-2 h-2 rounded-full bg-corporate-red shrink-0 mt-2"></div>
                                <span class="leading-tight">Si aplica, adjunta logos, firmas, QR o códigos<br class="hidden xl:block"/> de barras.</span>
                            </li>
                            <li class="flex gap-4 items-start">
                                <div class="w-2 h-2 rounded-full bg-corporate-red shrink-0 mt-2"></div>
                                <span class="leading-tight">Indica cantidad de tarjetas y cualquier<br class="hidden xl:block"/> acabado especial.</span>
                            </li>
                            <li class="flex gap-4 items-start">
                                <div class="w-2 h-2 rounded-full bg-corporate-red shrink-0 mt-2"></div>
                                <span class="leading-tight">Si necesitas ayuda con el diseño, también<br class="hidden xl:block"/> podemos apoyarte.</span>
                            </li>
                        </ul>
                    </div>

                    <!-- Elementos Gráficos Derecha (5 Tarjetitas) -->
                    <div class="shrink-0 hidden lg:flex items-stretch justify-center pt-2 relative border-l border-slate-100 pl-8 min-w-[500px]">
                        <div class="flex gap-3 xl:gap-4 justify-center w-full">
                            
                            <!-- Tarjeta 1: Logo -->
                            <div class="flex flex-col items-center justify-between bg-white border border-slate-200 rounded-[10px] shadow-sm w-[95px] xl:w-[115px] h-[140px] xl:h-[160px] p-3 transition-transform hover:-translate-y-1">
                                <div class="flex-1 flex items-center justify-center">
                                    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#e81d2c" stroke-width="1.5"><path d="M12 2L2 12l10 10 10-10L12 2z"/><path d="M12 6L6 12l6 6 6-6L12 6z"/></svg>
                                </div>
                                <span class="text-[0.6rem] xl:text-[0.65rem] font-bold text-slate-800 text-center uppercase tracking-wide">LOGO</span>
                            </div>

                            <!-- Tarjeta 2: Firma -->
                            <div class="flex flex-col items-center justify-between bg-white border border-slate-200 rounded-[10px] shadow-sm w-[95px] xl:w-[115px] h-[140px] xl:h-[160px] p-3 transition-transform hover:-translate-y-1">
                                <div class="flex-1 flex items-center justify-center">
                                    <svg width="65" height="40" viewBox="0 0 100 50" fill="none" stroke="#111" stroke-width="2.5" stroke-linecap="round"><path d="M10 40 Q 30 10, 50 40 T 90 20 M 30 35 L 70 30" /></svg>
                                </div>
                                <span class="text-[0.6rem] xl:text-[0.65rem] font-bold text-slate-800 text-center uppercase tracking-wide">FIRMA</span>
                            </div>

                            <!-- Tarjeta 3: QR -->
                            <div class="flex flex-col items-center justify-between bg-white border border-slate-200 rounded-[10px] shadow-sm w-[95px] xl:w-[115px] h-[140px] xl:h-[160px] p-3 transition-transform hover:-translate-y-1">
                                <div class="flex-1 flex items-center justify-center">
                                    <svg width="50" height="50" viewBox="0 0 24 24" fill="black"><path d="M3 3h8v8H3V3zm2 2v4h4V5H5zm8-2h8v8h-8V3zm2 2v4h4V5h-4zM3 13h8v8H3v-8zm2 2v4h4v-4H5zm13-2h-3v2h3v-2zm-3 4h3v2h-3v-2zm-2-2h2v2h-2v-2zm-2 2h2v2h-2v-2zm2 2h2v2h-2v-2zm2 0h2v2h-2v-2zm-2-2v-2h-2v2h2z"/></svg>
                                </div>
                                <span class="text-[0.6rem] xl:text-[0.65rem] font-bold text-slate-800 text-center uppercase tracking-wide">QR</span>
                            </div>

                            <!-- Tarjeta 4: Codigo de Barras -->
                            <div class="flex flex-col items-center justify-between bg-white border border-slate-200 rounded-[10px] shadow-sm w-[95px] xl:w-[115px] h-[140px] xl:h-[160px] p-3 transition-transform hover:-translate-y-1">
                                <div class="flex-1 flex flex-col items-center justify-center w-full">
                                    <svg width="100%" height="35" viewBox="0 0 24 24" fill="black" preserveAspectRatio="none"><rect x="1" y="2" width="2" height="20"/><rect x="4" y="2" width="3" height="20"/><rect x="8" y="2" width="1" height="20"/><rect x="10" y="2" width="4" height="20"/><rect x="15" y="2" width="1" height="20"/><rect x="17" y="2" width="3" height="20"/><rect x="21" y="2" width="2" height="20"/></svg>
                                    <span class="text-[0.5rem] font-mono mt-2 w-full text-center">1234567890</span>
                                </div>
                                <span class="text-[0.55rem] xl:text-[0.6rem] font-bold text-slate-800 text-center leading-tight uppercase tracking-wide">CÓDIGO<br/>DE BARRAS</span>
                            </div>

                            <!-- Tarjeta 5: Acabados Especiales -->
                            <div class="flex flex-col items-center justify-between bg-white border border-slate-200 rounded-[10px] shadow-sm w-[95px] xl:w-[115px] h-[140px] xl:h-[160px] p-3 transition-transform hover:-translate-y-1">
                                <div class="flex-1 flex items-center justify-center relative w-full h-full">
                                    <svg width="34" height="34" viewBox="0 0 24 24" fill="none" class="absolute top-2 right-1"><path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z" fill="#111" stroke="#111" stroke-width="1" stroke-linejoin="round"/></svg>
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" class="absolute bottom-5 left-1"><path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z" fill="#111" stroke="#111" stroke-width="1" stroke-linejoin="round"/></svg>
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" class="absolute top-8 left-1"><path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z" fill="#111" stroke="#111" stroke-width="1" stroke-linejoin="round"/></svg>
                                </div>
                                <span class="text-[0.55rem] xl:text-[0.6rem] font-bold text-slate-800 text-center leading-tight uppercase tracking-wide">ACABADOS<br/>ESPECIALES</span>
                            </div>

                        </div>
                    </div>
                </div>
                
                <!-- Paso 5 -->`;
content = content.replace(regex, replacement);
fs.writeFileSync('src/pages/faq.astro', content);
console.log('Paso 4 SVG and container sizes explicitly maximized.');
