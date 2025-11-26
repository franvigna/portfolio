import { personalInfo } from '@/lib/data';
import Link from 'next/link';

export default function Hero() {
    return (
        <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 relative overflow-hidden">
            {/* Efectos de fondo sutiles */}
            <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5"></div>
            <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500 rounded-full filter blur-3xl opacity-10"></div>
            <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500 rounded-full filter blur-3xl opacity-10"></div>

            <div className="container mx-auto px-4 py-20 relative z-10">
                <div className="max-w-4xl mx-auto text-center">
                    {/* Badge disponibilidad */}
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-300 text-sm mb-8 backdrop-blur-sm">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400"></span>
                        </span>
                        Disponible para nuevos proyectos
                    </div>

                    {/* Título - Más personal */}
                    <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-white mb-6 leading-tight">
                        Hola, soy Francisco 👋<br />
                        <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                            Desarrollador Web Full Stack
                        </span>
                    </h1>

                    {/* Subtítulo personal */}
                    <p className="text-xl sm:text-2xl text-gray-300 mb-10 font-light max-w-2xl mx-auto">
                        Creo sitios web que hacen crecer negocios. Trabajo en YPF y ayudo a PyMEs a tener presencia online profesional.
                    </p>

                    {/* CTAs principales - Explorar primero */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
                        <Link
                            href="#about"
                            className="group w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-bold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 hover:scale-105"
                        >
                            <span className="flex items-center justify-center gap-2">
                                Conocer más sobre mí
                                <svg className="w-5 h-5 group-hover:translate-y-1 transition-transform" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                                    <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
                                </svg>
                            </span>
                        </Link>
                        <Link
                            href="#projects"
                            className="w-full sm:w-auto px-8 py-4 border-2 border-white/30 text-white rounded-xl font-semibold hover:bg-white/10 transition-all duration-300 backdrop-blur-sm hover:scale-105"
                        >
                            Ver Mis Trabajos
                        </Link>
                    </div>

                    {/* Value Props - Solo 3, los más importantes */}
                    <div className="flex flex-wrap justify-center gap-6 mb-12 text-sm">
                        {personalInfo.valueProps.map((prop, index) => (
                            <div
                                key={index}
                                className="flex items-center gap-2 text-gray-300"
                            >
                                <svg className="w-5 h-5 text-green-400" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                                    <path d="M5 13l4 4L19 7"></path>
                                </svg>
                                <span>{prop}</span>
                            </div>
                        ))}
                    </div>

                    {/* Social proof compacto */}
                    <div className="inline-flex items-center gap-2 px-6 py-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full text-gray-300 text-sm">
                        <div className="flex -space-x-2">
                            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 border-2 border-slate-900 flex items-center justify-center text-white text-xs font-bold">
                                CA
                            </div>
                            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-green-500 to-blue-500 border-2 border-slate-900 flex items-center justify-center text-white text-xs font-bold">
                                HC
                            </div>
                            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 border-2 border-slate-900 flex items-center justify-center text-white text-xs font-bold">
                                MA
                            </div>
                        </div>
                        <span>8+ clientes satisfechos</span>
                    </div>

                    {/* Scroll indicator */}
                    <div className="mt-16 animate-bounce">
                        <Link href="#services" className="text-gray-400 hover:text-white transition-colors">
                            <svg className="w-6 h-6 mx-auto" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                                <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
                            </svg>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}