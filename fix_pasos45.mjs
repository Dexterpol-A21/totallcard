import fs from 'fs';
let content = fs.readFileSync('src/pages/faq.astro', 'utf-8');

const regex = /<!-- Paso 4 -->([\s\S]*?)<!-- Tip Importante -->/;

const replacement = `<!-- Paso 4 -->
                <div class="bg-white p-6 md:p-8 rounded-[12px] shadow-[0_2px_10px_rgba(0,0,0,0.05)] border border-slate-200 flex flex-col lg:flex-row gap-8 lg:gap-12 md:items-start relative overflow-hidden items-stretch">
                    
                    <!-- Icono Izquierda -->
                    <div class="shrink-0 flex flex-col items-center justify-start w-24 pt-2">
                        <!-- Número -->
                        <div class="relative w-16 h-20 flex justify-center items-center">
                            <span class="font-sans font-black text-5xl text-corporate-red relative z-10 -ml-2 -mt-4">4</span>
                        </div>
                        <!-- Icono Extras -->
                        <div class="mt-4 relative">
                            <svg width="60" height="50" viewBox="0 0 60 50" fill="none" stroke="#111" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                                <rect x="8" y="8" width="44" height="34" rx="4" />
                                <rect x="15" y="15" width="12" height="12" />
                                <circle cx="38" cy="21" r="5" />
                                <path d="M15 35h30" />
                            </svg>
                            <!-- Badge SVG -->
                            <div class="absolute -bottom-2 -right-3 bg-purple-600 text-white text-[10px] font-bold px-2 py-0.5 rounded-full border-2 border-white shadow-sm">PNG</div>
                        </div>
                    </div>

                    <!-- Texto Central -->
                    <div class="flex-1 lg:pl-2">
                        <h3 class="font-sans font-bold text-[22px] text-black mb-5 tracking-tight">Archivos y elementos adicionales</h3>
                        <ul class="font-sans text-[15px] text-black/80 space-y-3.5 list-none">
                            <li class="flex gap-4 items-start">
                                <div class="w-1.5 h-1.5 rounded-full bg-corporate-red shrink-0 mt-2"></div>
                                <span class="leading-tight">Si aplica, adjunta logos, firmas, QR o códigos de barras.</span>
                            </li>
                            <li class="flex gap-4 items-start">
                                <div class="w-1.5 h-1.5 rounded-full bg-corporate-red shrink-0 mt-2"></div>
                                <span class="leading-tight">Indica cantidad de tarjetas y cualquier acabado especial.</span>
                            </li>
                            <li class="flex gap-4 items-start">
                                <div class="w-1.5 h-1.5 rounded-full bg-corporate-red shrink-0 mt-2"></div>
                                <span class="leading-tight">Si necesitas ayuda con el diseño, también podemos apoyarte.</span>
                            </li>
                        </ul>
                    </div>

                    <!-- Elementos Gráficos Derecha (Elementos extra mock) -->
                    <div class="shrink-0 hidden lg:flex items-center justify-center pt-2 relative border-l border-slate-100 pl-8 min-w-[300px]">
                        <div class="grid grid-cols-2 gap-4">
                            <!-- Logo Mock -->
                            <div class="w-20 h-20 bg-slate-50 border border-slate-200 rounded-[8px] flex flex-col items-center justify-center shadow-sm relative transition-transform hover:scale-105">
                                <div class="absolute -top-2 -right-2 bg-slate-800 text-white text-[8px] px-1.5 rounded disabled select-none">.png</div>
                                <div class="w-8 h-8 rounded-full bg-slate-200 border border-slate-300 flex items-center justify-center text-slate-400 font-black text-xl mb-1">C</div>
                                <span class="text-[0.4rem] font-bold text-slate-500">LOGO</span>
                            </div>
                            
                            <!-- Firma Mock -->
                            <div class="w-20 h-20 bg-slate-50 border border-slate-200 rounded-[8px] flex flex-col items-center justify-center shadow-sm relative transition-transform hover:scale-105">
                                <div class="w-12 h-6 flex items-center justify-center mb-1 overflow-hidden opacity-60">
                                    <svg viewBox="0 0 100 40" fill="none" stroke="#0f172a" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                                        <path d="M10 25 C15 5, 25 35, 30 15 S 40 5, 45 25 C 50 45, 60 5, 65 15 S 75 35, 80 25 C 85 15, 90 25, 95 20" />
                                    </svg>
                                </div>
                                <span class="text-[0.4rem] font-bold text-slate-500 mt-2">FIRMA</span>
                            </div>

                            <!-- Código de Barras Mock -->
                            <div class="w-20 h-20 bg-slate-50 border border-slate-200 rounded-[8px] flex flex-col items-center justify-center shadow-sm relative transition-transform hover:scale-105">
                                <div class="w-12 h-8 bg-black/80 masked-barcode mb-1" style="-webkit-mask-image: repeating-linear-gradient(90deg, #000 0px, #000 2px, transparent 2px, transparent 4px);"></div>
                                <span class="text-[0.4rem] font-bold text-slate-500 mt-1">BARCODE</span>
                            </div>

                            <!-- QR Mock -->
                            <div class="w-20 h-20 bg-slate-50 border border-slate-200 rounded-[8px] flex flex-col items-center justify-center shadow-sm relative transition-transform hover:scale-105">
                                <div class="w-8 h-8 bg-white border border-slate-300 p-0.5 shrink-0 grid grid-cols-4 grid-rows-4 gap-[1px] mb-1 opacity-80">
                                    <div class="bg-black col-span-2 row-span-2 relative"><div class="absolute inset-[1px] bg-white"><div class="absolute inset-[1px] bg-black"></div></div></div>
                                    <div class="bg-black"></div><div class="bg-black/60"></div>
                                    <div class="bg-black/80"></div><div class="bg-black"></div>
                                    <div class="bg-black col-span-2 row-span-2 relative"><div class="absolute inset-[1px] bg-white"><div class="absolute inset-[1px] bg-black"></div></div></div>
                                    <div class="bg-black/90"></div><div class="bg-black/50"></div>
                                    <div class="bg-black"></div><div class="bg-black/80"></div>
                                </div>
                                <span class="text-[0.4rem] font-bold text-slate-500 mt-1.5">COD. QR</span>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Paso 5 -->
                <div class="bg-white p-6 md:p-8 rounded-[12px] shadow-[0_2px_10px_rgba(0,0,0,0.05)] border border-slate-200 flex flex-col lg:flex-row gap-8 lg:gap-12 md:items-start relative overflow-hidden items-stretch">
                    
                    <!-- Icono Izquierda -->
                    <div class="shrink-0 flex flex-col items-center justify-start w-24 pt-2">
                        <!-- Número -->
                        <div class="relative w-16 h-20 flex justify-center items-center">
                            <span class="font-sans font-black text-5xl text-corporate-red relative z-10 -ml-2 -mt-4">5</span>
                        </div>
                        <!-- Icono Validacion -->
                        <div class="mt-4 relative">
                            <svg width="60" height="50" viewBox="0 0 60 50" fill="none" stroke="#111" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M10 25l12 12 28-28" />
                                <circle cx="30" cy="25" r="23" stroke="#e81d2c" stroke-width="2.5" />
                            </svg>
                        </div>
                    </div>

                    <!-- Texto Central -->
                    <div class="flex-1 lg:pl-2">
                        <h3 class="font-sans font-bold text-[22px] text-black mb-5 tracking-tight">Revisión y contacto</h3>
                        <ul class="font-sans text-[15px] text-black/80 space-y-3.5 list-none">
                            <li class="flex gap-4 items-start">
                                <div class="w-1.5 h-1.5 rounded-full bg-corporate-red shrink-0 mt-2"></div>
                                <span class="leading-tight">Nosotros revisamos la información antes de producción.</span>
                            </li>
                            <li class="flex gap-4 items-start">
                                <div class="w-1.5 h-1.5 rounded-full bg-corporate-red shrink-0 mt-2"></div>
                                <span class="leading-tight">Si detectamos dudas o inconsistencias, te contactamos.</span>
                            </li>
                            <li class="flex gap-4 items-start">
                                <div class="w-1.5 h-1.5 rounded-full bg-corporate-red shrink-0 mt-2"></div>
                                <span class="leading-tight">Si tienes cualquier duda extra, no dudes en escribirnos a WhatsApp.</span>
                            </li>
                        </ul>
                    </div>

                    <!-- Elementos Gráficos Derecha (Check Mock) -->
                    <div class="shrink-0 hidden lg:flex items-center justify-center pt-2 relative border-l border-slate-100 pl-12 min-w-[250px]">
                        <div class="w-32 h-32 bg-green-50 rounded-full border border-green-100 flex items-center justify-center relative shadow-inner animate-[pulse_4s_ease-in-out_infinite]">
                            <svg class="w-16 h-16 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="3">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
                            </svg>
                            <!-- Mini particles -->
                            <div class="absolute -top-2 left-4 w-2 h-2 bg-green-400 rounded-full"></div>
                            <div class="absolute top-10 -right-4 w-3 h-3 bg-green-300 rounded-full"></div>
                            <div class="absolute -bottom-1 left-8 w-2 h-2 bg-green-500 rounded-full"></div>
                        </div>
                    </div>
                </div>

                <!-- Tip Importante -->`;

content = content.replace(regex, replacement);
fs.writeFileSync('src/pages/faq.astro', content);
console.log('Pasos 4 and 5 updated.');
