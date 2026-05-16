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
                        <!-- Icono Imagen -->
                        <div class="mt-4 relative">
                            <svg width="60" height="50" viewBox="0 0 60 50" fill="none" stroke="#111" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                                <rect x="5" y="5" width="50" height="40" rx="4" />
                                <circle cx="20" cy="18" r="5" />
                                <path d="M5 35L22 18L40 35M35 30L45 20L55 30" />
                            </svg>
                            <!-- Badge JPG -->
                            <div class="absolute -bottom-2 -right-2 bg-blue-600 text-white text-[10px] font-bold px-2 py-0.5 rounded-full border-2 border-white shadow-sm">JPG</div>
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
                                <span class="leading-tight">Titula cada archivo para que coincida con la base de Excel.</span>
                            </li>
                            <li class="flex gap-4 items-start">
                                <div class="w-1.5 h-1.5 rounded-full bg-corporate-red shrink-0 mt-2"></div>
                                <span class="leading-tight">Ejemplo: <code class="bg-blue-50 px-1.5 py-0.5 rounded text-blue-700 font-bold border border-blue-100">001_Juan_Perez.jpg</code> o <code class="bg-blue-50 px-1.5 py-0.5 rounded text-blue-700 font-bold border border-blue-100">EMP-001.jpg</code></span>
                            </li>
                        </ul>
                    </div>

                    <!-- Elementos Gráficos Derecha (Carpeta Fotos Mock) -->
                    <div class="shrink-0 hidden lg:flex items-center pt-2 relative border-l border-slate-100 pl-8 overflow-visible">
                        <div class="relative flex gap-6 lg:gap-8 justify-center min-w-[280px]">
                            
                            <!-- Foto 1 -->
                            <div class="relative group">
                                <div class="w-28 h-[140px] bg-white rounded-lg shadow-[0_4px_15px_-3px_rgba(0,0,0,0.15)] p-2 pb-[24px] border border-slate-100 relative z-10 transition-transform transform rotate-[-3deg] group-hover:rotate-0 hover:z-20">
                                    <div class="w-full h-full bg-slate-200 rounded overflow-hidden relative">
                                        <img src="https://ui-avatars.com/api/?name=Juan+Perez&background=e2e8f0&color=94a3b8" class="w-full h-full object-cover grayscale opacity-70" alt=""/>
                                    </div>
                                    <div class="absolute bottom-1.5 left-0 w-full text-center">
                                       <span class="text-[0.4rem] font-bold text-slate-500 font-mono inline-block bg-slate-100 px-1.5 py-0.5 rounded">EMP-001.jpg</span>
                                    </div>
                                    <!-- Clip -->
                                    <div class="absolute -top-3 left-1/2 transform -translate-x-1/2 w-6 h-1.5 bg-slate-300 shadow-sm rounded-full z-20"></div>
                                </div>
                            </div>

                            <!-- Foto 2 -->
                            <div class="relative group">
                                <div class="w-28 h-[140px] bg-white rounded-lg shadow-[0_4px_15px_-3px_rgba(0,0,0,0.15)] p-2 pb-[24px] border border-slate-100 relative z-10 transition-transform transform rotate-[4deg] group-hover:rotate-0 hover:z-20 mt-4">
                                    <div class="w-full h-full bg-slate-200 rounded overflow-hidden relative">
                                        <div class="absolute inset-0 flex items-center justify-center bg-blue-50/50">
                                            <svg viewBox="0 0 24 24" class="w-12 h-12 text-blue-200" fill="currentColor">
                                                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                                            </svg>
                                        </div>
                                    </div>
                                    <div class="absolute bottom-1.5 left-0 w-full text-center">
                                       <span class="text-[0.4rem] font-bold text-slate-500 font-mono inline-block bg-slate-100 px-1.5 py-0.5 rounded">EMP-002.jpg</span>
                                    </div>
                                    <!-- Clip -->
                                    <div class="absolute -top-3 left-1/2 transform -translate-x-1/2 w-6 h-1.5 bg-slate-300 shadow-sm rounded-full z-20"></div>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
                \n                <!-- Paso 4 -->`;

content = content.replace(regex, replacement);
fs.writeFileSync('src/pages/faq.astro', content);
console.log('Paso 3 updated.');
