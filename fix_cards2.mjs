import fs from 'fs';
let content = fs.readFileSync('src/pages/faq.astro', 'utf-8');

// Quitar la raya rara (hexágono abierto) del número 1
content = content.replace(/<svg class="absolute inset-0 w-full h-full text-corporate-red" viewBox="0 0 100 100" fill="none" stroke="currentColor" stroke-width="2\.5">[\s\S]*?<\/svg>/, '');

const oldCardsRegex = /<!-- Elementos Gráficos Derecha \(Tarjetas Muestra\) -->[\s\S]*?(?=<\/div>\s*<\/div>\s*<!-- Paso 2|\s*<\/div>\s*\n\s*<!-- FAQ \/ Preguntas)/;

const newCards = `<!-- Elementos Gráficos Derecha (Tarjetas Muestra) -->
                    <div class="shrink-0 hidden lg:flex gap-6 xl:gap-10 items-center pt-2 relative border-l border-slate-100 pl-8">
                        <!-- Card 1: Frente -->
                        <div class="relative flex flex-col items-center">
                            
                            <!-- Tarjeta Estructura Mokeada grande -->
                            <div class="w-[280px] h-[178px] bg-white rounded-[10px] shadow-[0_6px_24px_-4px_rgba(0,0,0,0.15)] border border-slate-50 relative overflow-hidden flex flex-col p-4.5 p-4 z-10 transition-transform hover:scale-105">
                                
                                <div class="text-[0.65rem] font-bold text-center mt-3 mb-4 tracking-wider text-black flex items-center justify-center gap-1.5">
                                    TOTALLCARD 
                                    <span class="text-[0.35rem] text-slate-400 font-normal">CENTRO DE GAFETES</span>
                                </div>
                                
                                <div class="flex gap-4 items-center px-2">
                                    <div class="w-16 h-20 bg-slate-200 rounded-[3px] shrink-0 overflow-hidden flex items-end justify-center relative">
                                       <img src="https://ui-avatars.com/api/?name=Andres+Ramirez&background=e2e8f0&color=94a3b8" class="w-full h-full object-cover grayscale opacity-50" alt=""/>
                                    </div>
                                    <div class="pt-1.5">
                                        <div class="text-[0.7rem] font-bold text-black leading-none mb-1.5">ANDRÉS RAMÍREZ</div>
                                        <div class="text-[0.55rem] text-slate-600 font-medium">GERENTE COMERCIAL</div>
                                    </div>
                                </div>
                                
                                <!-- Barcode Mock -->
                                <div class="mt-auto w-full flex flex-col items-center mb-1">
                                    <div class="h-6 w-[85%] bg-black/80 masked-barcode" style="-webkit-mask-image: repeating-linear-gradient(90deg, #000 0px, #000 3px, transparent 3px, transparent 5px);"></div>
                                    <div class="text-[0.5rem] text-slate-500 tracking-[0.25em] mt-2">EMP-001</div>
                                </div>

                                <!-- Decoración top left y mark -->
                                <div class="absolute top-0 left-0 w-full h-full pointer-events-none">
                                    <svg viewBox="0 0 280 178" class="w-full h-full">
                                        <path d="M 0 0 L 45 0 L 15 25 Z" fill="#e81d2c" />
                                        <path d="M -15 -5 L 65 35" stroke="#e81d2c" stroke-width="2" />
                                    </svg>
                                </div>

                                <!-- Decoración bottom right -->
                                <div class="absolute -bottom-6 -right-6 w-16 h-16 bg-corporate-red transform rotate-45"></div>
                            </div>
                            
                            <!-- Crop Marks overlay Front -->
                            <div class="absolute -inset-6 pointer-events-none">
                                <svg class="w-full h-full text-slate-300" fill="none" stroke="currentColor" stroke-width="1" stroke-dasharray="3 3">
                                    <line x1="24" y1="0" x2="24" y2="100%" />
                                    <line x1="0" y1="24" x2="100%" y2="24" />
                                    <line x1="100%" y1="0" x2="100%" y2="0" />
                                    <circle cx="24" cy="24" r="3" stroke="none" fill="currentColor"/>
                                </svg>
                            </div>

                            <span class="text-[12px] font-bold text-slate-500 mt-8 tracking-[0.15em]">FRENTE</span>
                        </div>

                        <!-- Card 2: Reverso -->
                        <div class="relative flex flex-col items-center">
                            
                            <div class="w-[280px] h-[178px] bg-white rounded-[10px] shadow-[0_6px_24px_-4px_rgba(0,0,0,0.15)] border border-slate-50 relative overflow-hidden flex items-center p-4 z-10 transition-transform hover:scale-105">
                                
                                <div class="flex gap-4 items-center w-full px-2">
                                    <!-- QR Mock -->
                                    <div class="w-20 h-20 bg-white border border-slate-200 p-1.5 shrink-0 grid grid-cols-4 grid-rows-4 gap-[2px]">
                                        <div class="bg-black col-span-2 row-span-2 relative"><div class="absolute inset-[3px] bg-white"><div class="absolute inset-[1.5px] bg-black"></div></div></div>
                                        <div class="bg-black/80"></div><div class="bg-black"></div>
                                        <div class="bg-black"></div><div class="bg-black/60"></div>
                                        <div class="bg-black col-span-2 row-span-2 relative"><div class="absolute inset-[3px] bg-white"><div class="absolute inset-[1.5px] bg-black"></div></div></div>
                                        <div class="bg-black/90"></div><div class="bg-black/50"></div>
                                        <div class="bg-black"></div><div class="bg-black/80"></div>
                                    </div>
                                    
                                    <!-- Textos derecha QR -->
                                    <div class="flex flex-col gap-2 flex-1 pl-1">
                                        <p class="text-[0.65rem] leading-relaxed text-black">
                                            En caso de extravío<br/>
                                            favor de regresar a:<br/>
                                            <span class="font-bold">Recursos Humanos</span>
                                        </p>
                                        <p class="text-[0.55rem] font-bold text-corporate-red mt-1">
                                            www.totallcard.com
                                        </p>
                                    </div>
                                </div>

                                <!-- Decoración bottom right -->
                                <div class="absolute -bottom-6 -right-6 w-16 h-16 bg-corporate-red transform rotate-45"></div>
                            </div>
                            
                            <!-- Crop Marks overlay Back -->
                            <div class="absolute -inset-6 pointer-events-none">
                                <svg class="w-full h-full text-slate-300" fill="none" stroke="currentColor" stroke-width="1" stroke-dasharray="3 3">
                                    <line x1="100%" y1="24" x2="0" y2="24" />
                                    <line x1="100%" y1="0" x2="100%" y2="100%" />
                                </svg>
                            </div>

                            <span class="text-[12px] font-bold text-slate-500 mt-8 tracking-[0.15em]">REVERSO</span>
                        </div>
                    </div>`;

content = content.replace(oldCardsRegex, newCards);

fs.writeFileSync('src/pages/faq.astro', content);
console.log('Done!');
