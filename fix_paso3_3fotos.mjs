import fs from 'fs';
let content = fs.readFileSync('src/pages/faq.astro', 'utf-8');

const regex = /<!-- Paso 3 -->([\s\S]*?)<!-- Paso 4 -->/;
const replacement = `<!-- Paso 3 -->
                <div class="bg-white p-6 md:p-8 rounded-[12px] shadow-[0_2px_10px_rgba(0,0,0,0.05)] border border-slate-200 flex flex-col lg:flex-row gap-8 lg:gap-12 md:items-start relative overflow-hidden items-stretch">
                    
                    <!-- Icono Izquierda -->
                    <div class="shrink-0 flex flex-col items-center justify-start w-24 pt-2">
                        <!-- Número -->
                        <div class="relative w-16 h-20 flex justify-center items-center">
                            <span class="font-sans font-black text-5xl text-corporate-red relative z-10 -ml-2 -mt-4">3</span>
                        </div>
                        <!-- Icono Face Scan -->
                        <div class="mt-4 relative w-[65px] h-[65px]">
                            <!-- Bordes rojos tipo cámara -->
                            <svg width="65" height="65" viewBox="0 0 65 65" fill="none" stroke="#e81d2c" stroke-width="2.5" class="absolute inset-0">
                                <path d="M12 25 L12 12 L25 12" stroke-linejoin="miter" stroke-linecap="square"/>
                                <path d="M53 25 L53 12 L40 12" stroke-linejoin="miter" stroke-linecap="square"/>
                                <path d="M12 40 L12 53 L25 53" stroke-linejoin="miter" stroke-linecap="square"/>
                                <path d="M53 40 L53 53 L40 53" stroke-linejoin="miter" stroke-linecap="square"/>
                            </svg>
                            <!-- Avatar de silueta -->
                            <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="#111" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" class="absolute top-[15px] left-[15.5px]">
                               <circle cx="12" cy="7" r="4.5" />
                               <path d="M4.5 21.5v-2a5 5 0 0 1 5 -5h5a5 5 0 0 1 5 5v2" />
                            </svg>
                        </div>
                    </div>

                    <!-- Texto Central -->
                    <div class="flex-1 lg:pl-2">
                        <h3 class="font-sans font-bold text-[22px] text-black mb-5 tracking-tight">Fotografías de las personas</h3>
                        <ul class="font-sans text-[15px] text-black/80 space-y-3.5 list-none">
                            <li class="flex gap-4 items-start">
                                <div class="w-1.5 h-1.5 rounded-full bg-corporate-red shrink-0 mt-2"></div>
                                <span class="leading-tight">Envía las fotos en una carpeta separada.</span>
                            </li>
                            <li class="flex gap-4 items-start">
                                <div class="w-1.5 h-1.5 rounded-full bg-corporate-red shrink-0 mt-2"></div>
                                <span class="leading-tight">Deben tener buena iluminación y verse nítidas.</span>
                            </li>
                            <li class="flex gap-4 items-start">
                                <div class="w-1.5 h-1.5 rounded-full bg-corporate-red shrink-0 mt-2"></div>
                                <span class="leading-tight">Titula cada archivo para que coincida<br class="hidden md:block"/> con la base de Excel.</span>
                            </li>
                            <li class="flex gap-4 items-start">
                                <div class="w-1.5 h-1.5 rounded-full bg-corporate-red shrink-0 mt-2"></div>
                                <span class="leading-tight">Ejemplo: 001_Juan_Perez.jpg o EMP-001.jpg</span>
                            </li>
                        </ul>
                    </div>

                    <!-- Elementos Gráficos Derecha (3 Fotos Muestra) -->
                    <div class="shrink-0 hidden lg:flex items-center justify-center pt-2 relative border-l border-slate-100 pl-8 overflow-visible min-w-[320px]">
                        <div class="flex gap-3 xl:gap-4 justify-center w-full">
                            
                            <!-- Foto 1 -->
                            <div class="flex flex-col items-center gap-2.5 transition-transform hover:scale-105">
                                <div class="w-[85px] h-[105px] xl:w-[95px] xl:h-[115px] bg-[#f2f2f2] rounded shadow-sm border border-[#e5e5e5] p-1 flex flex-col items-center overflow-hidden">
                                    <img src="https://randomuser.me/api/portraits/men/32.jpg" class="w-full h-full object-cover rounded-sm" alt="Juan"/>
                                </div>
                                <div class="bg-white border border-slate-300 rounded px-1.5 py-1 text-[0.45rem] xl:text-[0.48rem] font-bold text-slate-700 shadow-sm whitespace-nowrap">001_Juan_Perez.jpg</div>
                            </div>

                            <!-- Foto 2 -->
                            <div class="flex flex-col items-center gap-2.5 transition-transform hover:scale-105">
                                <div class="w-[85px] h-[105px] xl:w-[95px] xl:h-[115px] bg-[#f2f2f2] rounded shadow-sm border border-[#e5e5e5] p-1 flex flex-col items-center overflow-hidden">
                                    <img src="https://randomuser.me/api/portraits/women/44.jpg" class="w-full h-full object-cover rounded-sm" alt="Maria"/>
                                </div>
                                <div class="bg-white border border-slate-300 rounded px-1.5 py-1 text-[0.45rem] xl:text-[0.48rem] font-bold text-slate-700 shadow-sm whitespace-nowrap">002_Maria_Lopez.jpg</div>
                            </div>

                            <!-- Foto 3 -->
                            <div class="flex flex-col items-center gap-2.5 transition-transform hover:scale-105">
                                <div class="w-[85px] h-[105px] xl:w-[95px] xl:h-[115px] bg-[#f2f2f2] rounded shadow-sm border border-[#e5e5e5] p-1 flex flex-col items-center overflow-hidden">
                                    <img src="https://randomuser.me/api/portraits/men/46.jpg" class="w-full h-full object-cover rounded-sm" alt="Carlos"/>
                                </div>
                                <div class="bg-white border border-slate-300 rounded px-1.5 py-1 text-[0.45rem] xl:text-[0.48rem] font-bold text-slate-700 shadow-sm whitespace-nowrap">003_Carlos_Garcia.jpg</div>
                            </div>
                            
                        </div>
                    </div>
                </div>
                \n                <!-- Paso 4 -->`;

content = content.replace(regex, replacement);
fs.writeFileSync('src/pages/faq.astro', content);
console.log('Paso 3 successfully adjusted with new Icon and 3 Photos.');
