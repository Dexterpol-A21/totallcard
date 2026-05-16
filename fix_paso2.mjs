import fs from 'fs';
let content = fs.readFileSync('src/pages/faq.astro', 'utf-8');

const regex = /<!-- Paso 2 -->([\s\S]*?)<!-- Paso 3 -->/;
const replacement = `<!-- Paso 2 -->
                <div class="bg-white p-6 md:p-8 rounded-[12px] shadow-[0_2px_10px_rgba(0,0,0,0.05)] border border-slate-200 flex flex-col lg:flex-row gap-8 lg:gap-12 md:items-start relative overflow-hidden items-stretch">
                    
                    <!-- Icono Izquierda -->
                    <div class="shrink-0 flex flex-col items-center justify-start w-24 pt-2">
                        <!-- Número -->
                        <div class="relative w-16 h-20 flex justify-center items-center">
                            <span class="font-sans font-black text-5xl text-corporate-red relative z-10 -ml-2 -mt-4">2</span>
                        </div>
                        <!-- Icono Spreadsheet -->
                        <div class="mt-4 relative">
                            <svg width="65" height="50" viewBox="0 0 65 50" fill="none" stroke="#111" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                                <rect x="5" y="5" width="50" height="40" rx="4" />
                                <line x1="5" y1="18" x2="55" y2="18" />
                                <line x1="5" y1="30" x2="55" y2="30" />
                                <line x1="21" y1="18" x2="21" y2="45" />
                                <line x1="38" y1="18" x2="38" y2="45" />
                            </svg>
                            <!-- Badge XLSX -->
                            <div class="absolute -bottom-2 -right-3 bg-[#1D6F42] text-white text-[10px] font-bold px-2 py-0.5 rounded-full border-2 border-white shadow-sm">XLSX</div>
                        </div>
                    </div>

                    <!-- Texto Central -->
                    <div class="flex-1 lg:pl-2">
                        <h3 class="font-sans font-bold text-[22px] text-black mb-5 tracking-tight">Base de datos variable</h3>
                        <ul class="font-sans text-[15px] text-black/80 space-y-3.5 list-none">
                            <li class="flex gap-4 items-start">
                                <div class="w-1.5 h-1.5 rounded-full bg-corporate-red shrink-0 mt-2"></div>
                                <span class="leading-tight">Envía la información en Excel o CSV.</span>
                            </li>
                            <li class="flex gap-4 items-start">
                                <div class="w-1.5 h-1.5 rounded-full bg-corporate-red shrink-0 mt-2"></div>
                                <span class="leading-tight">Cada columna debe estar claramente identificada.</span>
                            </li>
                            <li class="flex gap-4 items-start">
                                <div class="w-1.5 h-1.5 rounded-full bg-corporate-red shrink-0 mt-2"></div>
                                <span class="leading-tight">Ejemplos: Nombre, Apellido, Puesto, Área,<br class="hidden md:block"/>No. de empleado, Vigencia, QR, Código de barras.</span>
                            </li>
                            <li class="flex gap-4 items-start">
                                <div class="w-1.5 h-1.5 rounded-full bg-corporate-red shrink-0 mt-2"></div>
                                <span class="leading-tight">Revisa ortografía, acentos y datos antes de enviarlos.</span>
                            </li>
                        </ul>
                    </div>

                    <!-- Elementos Gráficos Derecha (Excel Mock) -->
                    <div class="shrink-0 hidden lg:flex items-center pt-2 relative border-l border-slate-100 pl-8 overflow-visible">
                        <div class="relative w-[450px]">
                            <!-- Iconito Excel Top Left -->
                            <div class="absolute -top-4 -left-4 z-20 w-10 h-10 bg-white rounded-lg shadow-lg flex items-center justify-center p-1.5 border border-slate-50">
                                <svg viewBox="0 0 24 24" class="w-full h-full text-[#1D6F42]" fill="currentColor">
                                    <path d="M14.47,4H20c0.55,0,1,0.45,1,1v14c0,0.55-0.45,1-1,1h-5.53L14.47,4z"/>
                                    <path d="M4,7h10.47v10H4C3.45,17,3,16.55,3,16V8C3,7.45,3.45,7,4,7z" fill="#21A366"/>
                                    <path d="M10.15,14l-1.51-2.45L7.2,14H5.3l2.42-3.5L5.42,7.34h1.76l1.32,2.3l1.4-2.3h1.69l-2.28,3.31L11.9,14H10.15z" fill="#FFF"/>
                                </svg>
                            </div>

                            <!-- Tabla Excel -->
                            <div class="bg-white rounded-[8px] shadow-[0_6px_24px_-4px_rgba(0,0,0,0.12)] border border-slate-200 overflow-hidden relative z-10 transition-transform hover:scale-105 select-none">
                                <!-- Header tabla -->
                                <div class="bg-[#1D6F42] grid grid-cols-3">
                                    <div class="px-4 py-2.5 text-center text-white text-[11px] font-bold border-r border-[#21A366]" style="border-right-color: rgba(255,255,255,0.2);">Nombre</div>
                                    <div class="px-4 py-2.5 text-center text-white text-[11px] font-bold border-r border-[#21A366]" style="border-right-color: rgba(255,255,255,0.2);">Puesto</div>
                                    <div class="px-4 py-2.5 text-center text-white text-[11px] font-bold">No. empleado</div>
                                </div>
                                <!-- Row 1 -->
                                <div class="grid grid-cols-3 border-b border-slate-200">
                                    <div class="px-4 py-2.5 text-center text-slate-800 text-[11.5px] font-medium border-r border-slate-200 bg-white">Juan Pérez</div>
                                    <div class="px-4 py-2.5 text-center text-slate-800 text-[11.5px] font-medium border-r border-slate-200 bg-white">Analista</div>
                                    <div class="px-4 py-2.5 text-center text-slate-800 text-[11.5px] font-medium bg-white">EMP-001</div>
                                </div>
                                <!-- Row 2 -->
                                <div class="grid grid-cols-3 border-b border-slate-200">
                                    <div class="px-4 py-2.5 text-center text-slate-800 text-[11.5px] font-medium border-r border-slate-200 bg-white">María López</div>
                                    <div class="px-4 py-2.5 text-center text-slate-800 text-[11.5px] font-medium border-r border-slate-200 bg-white">Coordinadora</div>
                                    <div class="px-4 py-2.5 text-center text-slate-800 text-[11.5px] font-medium bg-white">EMP-002</div>
                                </div>
                                <!-- Row 3 -->
                                <div class="grid grid-cols-3 border-b border-slate-200">
                                    <div class="px-4 py-2.5 text-center text-slate-800 text-[11.5px] font-medium border-r border-slate-200 bg-white">Carlos García</div>
                                    <div class="px-4 py-2.5 text-center text-slate-800 text-[11.5px] font-medium border-r border-slate-200 bg-white">Gerente</div>
                                    <div class="px-4 py-2.5 text-center text-slate-800 text-[11.5px] font-medium bg-white">EMP-003</div>
                                </div>
                                <!-- Row Dots -->
                                <div class="grid grid-cols-3">
                                    <div class="px-4 py-2 text-center text-slate-400 text-[10px] font-black tracking-widest border-r border-slate-200 bg-white">...</div>
                                    <div class="px-4 py-2 text-center text-slate-400 text-[10px] font-black tracking-widest border-r border-slate-200 bg-white">...</div>
                                    <div class="px-4 py-2 text-center text-slate-400 text-[10px] font-black tracking-widest bg-white">...</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                \n                <!-- Paso 3 -->`;

content = content.replace(regex, replacement);
fs.writeFileSync('src/pages/faq.astro', content);
console.log('Paso 2 was updated.');
